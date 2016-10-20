$LOAD_PATH.unshift(File.expand_path("../../lib", __FILE__))

require_relative "./test_base"
require_relative "./fixtures"

require "challenge"
require "challenge/enums/activity"
require "challenge/enums/category"
require "challenge/enums/pledge_change_action"
require "challenge/models/category_stats"
require "challenge/models/pledge"
require "challenge/models/pledge_change"
require "challenge/models/project"

class TestChallenge < TestBase
  def test_001_hello_world
    assert_equal "world", Challenge.hello
  end

  def test_002_double_then_only_return_those_greater_than_ten
    assert_equal [16, 32], Challenge.double_then_only_return_those_greater_than_ten([1, 2, 4, 8, 16])
    assert_equal [20, 22], Challenge.double_then_only_return_those_greater_than_ten([11, 10])
  end

  def test_003_select_ids_of_art_category_projects
    assert_equal [845],
      Challenge.select_ids_of_art_category_projects([Fixtures::Projects.mini_museum])

    projects = [
      Fixtures::Projects.mini_museum,
      Fixtures::Projects.kung_fury,
      Fixtures::Projects.meow_wolf,
      Fixtures::Projects.double_fine_adventure
    ]
    assert_equal [199, 845], Challenge.select_ids_of_art_category_projects(projects)
  end

  def test_004_total_amount_pledged
    pledges = [
      Pledge.new(base_amount: 25, reward_id: 180, shipping: 5, tax: 2, user_id: 901),
      Pledge.new(base_amount: 25, reward_id: 180, shipping: 5, tax: 2, user_id: 7),
      Pledge.new(base_amount: 95, reward_id: 181, shipping: 20, tax: 15, user_id: 335),
      Pledge.new(base_amount: 5, reward_id: 182, shipping: 0, tax: 0, user_id: 866),
      Pledge.new(base_amount: 25, reward_id: 180, shipping: 5, tax: 2, user_id: 717)
    ]

    assert_equal 231, Challenge.total_amount_pledged(pledges)
  end

  def test_005_category_stats_sorted_by_category_name
    projects = [
      Fixtures::Projects.bee_and_puppy_cat,
      Fixtures::Projects.double_fine_adventure,
      Fixtures::Projects.kung_fury,
      Fixtures::Projects.meow_wolf,
      Fixtures::Projects.mini_museum,
      Fixtures::Projects.the_burning_wheel_codex
    ]

    expected = [
      CategoryStats.new(
        category: Category::ART,
        mean_backers: 2_955,
        mean_pledged: 666_016,
        total_backers: 5_910,
        total_pledged: 1_332_032,
        total_projects: 2
      ),
      CategoryStats.new(
        category: Category::FILM,
        mean_backers: 17_961,
        mean_pledged: 751_076,
        total_backers: 35_922,
        total_pledged: 1_502_152,
        total_projects: 2
      ),
      CategoryStats.new(
        category: Category::GAMES,
        mean_backers: 44_625,
        mean_pledged: 1_722_366,
        total_backers: 89_251,
        total_pledged: 3_444_733,
        total_projects: 2
      )
    ]

    assert_equal expected, Challenge.category_stats_sorted_by_category_name(projects)
  end

  def test_006_had_project_reached_goal_after_each_pledge_change
    pledge_changes = [
        PledgeChange.new(action: PledgeChangeAction::NEW, delta: 25),
        PledgeChange.new(action: PledgeChangeAction::NEW, delta: 25),
        PledgeChange.new(action: PledgeChangeAction::NEW, delta: 25),
        PledgeChange.new(action: PledgeChangeAction::NEW, delta: 10),
        PledgeChange.new(action: PledgeChangeAction::CANCEL, delta: -25),
        PledgeChange.new(action: PledgeChangeAction::NEW, delta: 25),
        PledgeChange.new(action: PledgeChangeAction::NEW, delta: 25),
        PledgeChange.new(action: PledgeChangeAction::CANCEL, delta: -25),
        PledgeChange.new(action: PledgeChangeAction::NEW, delta: 25), 
        PledgeChange.new(action: PledgeChangeAction::ADJUST, delta: 15)
      ]

    expected = [false, false, false, false, false, false, true, false, true, true]
    assert_equal expected, Challenge.had_project_reached_goal_after_each_pledge_change(
      project: Fixtures::Projects.skull_graphic_tee,
      pledge_changes: pledge_changes
    )
  end

  def test_007_compare_monthly_stats_per_year
    monthly_stats_2014 = [35, 48, 45, 60, 39, 43, 29, 34, 44, 47, 55, 37]
    monthly_stats_2015 = [63, 58, 41, 39, 59, 58, 69, 58, 37, 66, 32, 51]
    expected = [28, 10, -4, -21, 20, 15, 40, 24, -7, 19, -23, 14]
    assert_equal expected,
      Challenge.compare_monthly_stats_per_year(monthly_stats_2014, monthly_stats_2015)


    assert_equal [5, 3, -4],
      Challenge.compare_monthly_stats_per_year(
        [3, 6, 6, 9, 5, 5, 6, 7, 0, 0, 1, 8],
        [8, 9, 2]
      )
  end

  def test_008_recommend_projects_from_same_category
    assert_equal [Fixtures::Projects.kung_fury, Fixtures::Projects.obvious_child],
      Challenge.recommend_projects_from_same_category(
        project: Fixtures::Projects.bee_and_puppy_cat,
        projects: [Fixtures::Projects.obvious_child, Fixtures::Projects.kung_fury]
      )

    assert_equal [Fixtures::Projects.kung_fury],
      Challenge.recommend_projects_from_same_category(
        project: Fixtures::Projects.bee_and_puppy_cat,
        projects: [Fixtures::Projects.kung_fury, Fixtures::Projects.bee_and_puppy_cat]
      )

    assert_equal [Fixtures::Projects.kung_fury],
      Challenge.recommend_projects_from_same_category(
        project: Fixtures::Projects.bee_and_puppy_cat,
        projects: [Fixtures::Projects.kung_fury, Fixtures::Projects.meow_wolf]
      )

    assert_equal [],
      Challenge.recommend_projects_from_same_category(
        project: Fixtures::Projects.bee_and_puppy_cat,
        projects: []
      )
  end

  def test_009_recommendation_feed
    assert_equal [Fixtures::Projects.kung_fury, Fixtures::Projects.obvious_child],
      Challenge.recommendation_feed(
        backed_projects: [Fixtures::Projects.bee_and_puppy_cat],
        all_projects: Fixtures::Projects.all
      ),
      "should return other film projects"

    assert_equal(
      [Fixtures::Projects.kung_fury, Fixtures::Projects.mini_museum, Fixtures::Projects.obvious_child],
      Challenge.recommendation_feed(
        backed_projects: [
          Fixtures::Projects.meow_wolf,
          Fixtures::Projects.bee_and_puppy_cat,
        ],
        all_projects: Fixtures::Projects.all
      ),
      "should return other film and art projects"
    )

    assert_equal(
      [Fixtures::Projects.bee_and_puppy_cat],
      Challenge.recommendation_feed(
        backed_projects: [
          Fixtures::Projects.kung_fury,
          Fixtures::Projects.obvious_child,
        ],
        all_projects: Fixtures::Projects.all
      ),
      "should not contain duplicates or projects the user has already backed"
    )

    assert_equal [], Challenge.recommendation_feed(backed_projects: [], all_projects: [])
  end

  def test_010_flip
    exponent = ->(x, y) { x ** y }
    assert_equal 25, exponent.call(5, 2)
    assert_equal 125, exponent.call(5, 3)
    assert_equal 32, Challenge.flip(exponent).call(5, 2) # same result as exponent.call(2, 5)
    assert_equal 243, Challenge.flip(exponent).call(5, 3) # same result as exponent.call(3, 5)

    cipher = ->(x, y) { x.chars.rotate.join + y.chars.map(&:succ).join }
    assert_equal "ellohhppeczf", cipher.call("hello", "goodbye")
    assert_equal "oodbyegifmmp", Challenge.flip(cipher).call("hello", "goodbye") # same result as cipher.call("goodbye", "hello")
  end

  def test_011_activity_feed
    activities = [
      Activity::LIKE,
      Activity::COMMENT,
      Activity::COMMENT,
      Activity::PLEDGE,
      Activity::PLEDGE,
      Activity::PLEDGE,
      Activity::PLEDGE,
      Activity::LIKE,
      Activity::PLEDGE,
      Activity::LIKE,
      Activity::LIKE
    ]

    assert_equal [
      Pair.new(first: Activity::LIKE, second: 1),
      Pair.new(first: Activity::COMMENT, second: 2),
      Pair.new(first: Activity::PLEDGE, second: 4),
      Pair.new(first: Activity::LIKE, second: 1),
      Pair.new(first: Activity::PLEDGE, second: 1),
      Pair.new(first: Activity::LIKE, second: 2),
    ], Challenge.activity_feed(activities)
  end
end

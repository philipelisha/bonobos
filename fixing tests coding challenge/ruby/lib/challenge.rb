require "challenge/enums/category"
require "challenge/models/category_stats"
require "challenge/pair"

module Challenge
  # Change this to return "world" to fix the first failing test. Run `make test`
  # to confirm that `test_hello_world` passes, then repeat for each of the
  # remaining tests.
  #
  # returns: String
  def self.hello
    # "world"
  end

  # Doubles each element in the array, then returns a new array that only
  # contains the doubled values that were greater than 10.
  #
  # Results should be returned in ascending order.
  #
  # xs: [Integer]
  # returns: [Integer]
  def self.double_then_only_return_those_greater_than_ten(xs)
  end

  # Returns an array of ids for all projects in the art category.
  #
  # Results should be returned in ascending order.
  #
  # projects: [Project]
  # returns: [Integer]
  def self.select_ids_of_art_category_projects(projects)
  end

  # Each pledge has a base_amount, shipping, and tax value. Adding these
  # together gives the amount a backer was charged for a pledge.
  #
  # Given an array of pledges, calculate the total that was charged for all
  # the pledges combined.
  #
  # pledges: [Pledge]
  # returns: Integer
  def self.total_amount_pledged(pledges)
  end

  # Given an array of projects, groups projects into categories then calculates
  # stats for each unique category, represented by a CategoryStats value.
  # The CategoryStats model has more details on how to calculate each field from
  # an array of projects belonging to the same category.
  #
  # Results should be returned in ascending order by category name.
  #
  # projects: [Project]
  # returns: [CategoryStats]
  def self.category_stats_sorted_by_category_name(projects)
  end

  # This method takes a project and an array of pledge changes, and returns
  # an array of booleans representing whether the project had reached its goal
  # after each pledge change.
  #
  # A project has reached its goal if the total value of pledges is equal to
  # or greater than the project's goal. It is possible for a project to reach
  # its goal, then fall back under its goal if a backer cancels or lowers
  # a pledge.
  #
  # project: Project
  # pledge_changes: [PledgeChange]
  # returns: [TrueClass|FalseClass]
  def self.had_project_reached_goal_after_each_pledge_change(project:, pledge_changes:)
  end

  # Calculates the change in numbers for each month from year 1 to year 2.
  #
  # The arguments are not guaranteed to contain data for all 12 months of
  # a year. In that case, only return stats where data exists for both months.
  #
  # examples:
  #
  # compare_monthly_stats_per_year(
  #   [1, 3, 2, 4, 6, 8, 0, 0, 3, 2, 6, 7],
  #   [3, 4, 5, 4, 5, 6, 7, 7, 6, 8, 9, 9],
  # )
  # => [2, 1, 3, 0, -1, -2, 7, 7, 3, 6, 3, 2]
  #
  # compare_monthly_stats_per_year([5, 7], [9, 8, 3])
  # => [4, 1]
  #
  # monthly_stats_year_1: [Integer]
  # monthly_stats_year_2: [Integer]
  # returns: [Integer]
  def self.compare_monthly_stats_per_year(monthly_stats_year_1, monthly_stats_year_2)
  end

  # For a given project, find other projects that have the same category, sorted
  # in descending order by the number of backers. The array of projects may
  # contain the project given as the first argument; this project should not be
  # returned.
  #
  # project: Project
  # projects: [Project]
  def self.recommend_projects_from_same_category(project:, projects:)
  end

  # Returns a list of recommended projects based on projects the user has
  # already backed. Use `Challenge::recommend_projects_from_same_category` to
  # generate an array of recommendations for each project, then return a single
  # array with all the recommendations sorted in descending order by the number
  # of backers. Should not contain duplicates or projects the user has already
  # backed.
  #
  # backed_projects: [Project]
  #   An array of projects the user has backed.
  # all_projects: [Project]
  #   An array of all projects. It may include projects the user has backed.
  # returns: [Project]
  def self.recommendation_feed(backed_projects:, all_projects:)
  end

  # Takes a lambda, returns a new lambda like the original but with the
  # arguments flipped.
  #
  # f: (a, b) -> c
  # returns: (b, a) -> c
  def self.flip(f)
  end

  # Creators have access to an activity feed for their project. Often an
  # activity will occur many times in a row, e.g.: they might receive 15 likes
  # on one of their project updates, and then a backer will make a pledge.
  #
  # Rather than rendering 15 consecutive likes, we would prefer an activity feed
  # that indicates how many times an activity appeared in a row. This method
  # returns an array of pairs, where the first component of each pair is an
  # activity, and the second component is how many times that activity appeared
  # in a row.
  #
  # example:
  #
  # activity_feed([Activity::COMMENT, Activity::COMMENT, Activity::LIKE, Activity::COMMENT])
  # [
  #   Pair.new(first: Activity::COMMENT, second: 2),
  #   Pair.new(first: Activity::LIKE, second: 1),
  #   Pair.new(first: Activity::COMMENT, second: 1)
  # ]
  #
  # activities: [Activity]
  # returns: [Pair(Activity, Integer)]
  def self.activity_feed(activities)
  end
end

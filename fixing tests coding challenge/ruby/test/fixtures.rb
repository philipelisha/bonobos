module Fixtures
  module Projects
    def self.bee_and_puppy_cat
      Project.new(
        backers: 18_209,
        category: Category::FILM,
        goal: 600_000,
        id: 550,
        name: "Bee and PuppyCat: The Series",
        pledged: 872_133
      )
    end

    def self.double_fine_adventure
      Project.new(
        backers: 87_142,
        category: Category::GAMES,
        goal: 400_000,
        id: 910,
        name: "Double Fine Adventure",
        pledged: 3_336_371
      )
    end

    def self.kung_fury
      Project.new(
        backers: 17_713,
        category: Category::FILM,
        goal: 200_000,
        id: 668,
        name: "Kung Fury",
        pledged: 630_019
      )
    end

    def self.meow_wolf
      Project.new(
        backers: 880,
        category: Category::ART,
        goal: 100_000,
        id: 199,
        name: "Meow Wolf Art Complex ft. The House of Eternal Return",
        pledged: 105_221
      )
    end

    def self.mini_museum
      Project.new(
        backers: 5_030,
        category: Category::ART,
        goal: 38_000,
        id: 845,
        name: "Mini Museum",
        pledged: 1_226_811
      )
    end

    def self.obvious_child
      Project.new(
        backers: 631,
        category: Category::FILM,
        goal: 35_000,
        id: 49,
        name: "OBVIOUS CHILD",
        pledged: 37_214
      )
    end

    def self.of_montreal
      Project.new(
        backers: 1_124,
        category: Category::MUSIC,
        goal: 75_000,
        id: 613,
        name: "of Montreal \"Song Dynasties\" Feature-Length Documentary",
        pledged: 94_844
      )
    end

    def self.skull_graphic_tee
      Project.new(
        backers: 5,
        category: Category::FASHION,
        goal: 100,
        id: 999,
        name: "SKULL GRAPHIC TEE",
        pledged: 125
      )
    end

    def self.the_burning_wheel_codex
      Project.new(
        backers: 2_109,
        category: Category::GAMES,
        goal: 25_000,
        id: 381,
        name: "The Burning Wheel Codex",
        pledged: 108_362
      )
    end

    def self.all
      [
        bee_and_puppy_cat,
        double_fine_adventure,
        kung_fury,
        meow_wolf,
        mini_museum,
        obvious_child,
        of_montreal,
        skull_graphic_tee,
        the_burning_wheel_codex
      ]
    end
  end
end

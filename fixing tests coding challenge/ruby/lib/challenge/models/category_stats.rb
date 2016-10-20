require "challenge/value"

# A collection of stats for a category. These can be calculated from an array
# of projects of the same category.
#
# category: Category
#   The category enum, e.g. Category::ART.
# mean_backers: Integer
#   The mean number of backers to a project for the category, i.e. (total backers / number of projects)
# mean_pledged: Integer
#   The mean number pledged to a project for the category, i.e. (total pledged / number of projects)
# total_backers: Integer
#   The total number of backers for all a category's projects.
# total_pledged: Integer
#   The total number pledged for all a category's projects.
# total_projects: Integer
#   The total number of projects in this category.
CategoryStats = Value.new(
  :category,
  :mean_backers,
  :mean_pledged,
  :total_backers,
  :total_pledged,
  :total_projects
)

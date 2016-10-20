require "challenge/value"

# backers: Integer
#   The total number of backers to the project
# category: Category
#   The category enum that this project belongs to.
# goal: Integer
#   The amount the project had set as its goal.
# id: Integer
#   The id of the project.
# name: String
#   The name of the project.
# pledged: Integer
#   The total amount the project has raised.
Project = Value.new(:backers, :category, :goal, :id, :name, :pledged)

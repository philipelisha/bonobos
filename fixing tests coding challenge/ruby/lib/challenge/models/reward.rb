require "challenge/value"

# id: Integer
#   The id of the reward.
# name: String
#   The name of the reward.
# project_id: Integer
#   The id of the project that this reward belongs to.
Reward = Value.new(:id, :name, :project_id)

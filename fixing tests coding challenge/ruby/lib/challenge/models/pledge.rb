require "challenge/value"

# base_amount: Integer
#   The cost in dollars for the reward, excluding shipping and tax.
# reward_id: Integer
#   The id of the reward.
# shipping: Integer
#   The cost in dollars for shipping.
# tax: Integer
#   The cost in dollars for tax.
# user_id: Integer
#   The id of the user that pledged for the reward.
Pledge = Value.new(:base_amount, :reward_id, :shipping, :tax, :user_id)

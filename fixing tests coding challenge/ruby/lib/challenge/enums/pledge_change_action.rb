# These are the kinds of changes that can be made to a pledge. Backers can make
# new pledges, adjust existing pledges, or cancel their pledges.
module PledgeChangeAction
  ALL = [
    ADJUST = "adjust".freeze,
    CANCEL = "cancel".freeze,
    NEW = "new".freeze,
  ].freeze
end

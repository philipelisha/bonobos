require "challenge/value"

# Backers may make new pledges, adjust the amount of an existing pledge, or cancel
# their pledge.
#
# If a backer made a new pledge of 25, increased the amount by 10, then
# cancelled their pledge, that would be represented by the following values:
#
# PledgeChange.new(action: PledgeChangeAction::NEW, delta: 25)
# PledgeChange.new(action: PledgeChangeAction::ADJUST, delta: 10)
# PledgeChange.new(action: PledgeChangeAction::CANCEL, delta: -35)
#
# action: PledgeChangeAction
#   The type of change being made to the pledge.
# delta: Integer
#   The difference in pledge value when the change is applied.
PledgeChange = Value.new(:action, :delta)

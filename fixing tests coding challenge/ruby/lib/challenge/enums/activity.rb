# The types of activity that can appear in a creator's activity feed. Users can
# comment on a creator's project, like their project updates, or pledge to the
# project.
module Activity
  ALL = [
    COMMENT = "comment".freeze,
    LIKE = "like".freeze,
    PLEDGE = "pledge".freeze
  ].freeze
end

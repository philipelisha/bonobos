require "minitest/autorun"
require "minitest/pride"

class TestBase < Minitest::Test
  # Run the tests in reverse-alpha order so that output from the first test
  # will appear at the end of screen.
  def self.runnable_methods
    methods = methods_matching(/^test_/).sort.reverse
  end
end

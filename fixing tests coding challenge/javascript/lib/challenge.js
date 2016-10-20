var exports = module.exports = {}

const _ = require('lodash')
const CategoryStats = require('lib/challenge/models/category_stats').CategoryStats

/**
 * Change this to return 'world' to fix the first failing test. Run `make test`
 * to confirm that `001 hello world` passes, then repeat for each of the
 * remaining tests.
 */
exports.hello = function() {
  // return 'world'
}

/**
 * Doubles each element in the array, then returns a new array that only
 * contains the doubled values that were greater than 10.
 *
 * Results should be returned in ascending order.
 *
 * xs: [Number]
 * returns: [Number]
 */
exports.doubleThenOnlyReturnThoseGreaterThanTen = function(xs) {
}

/**
 * Returns an array of ids for all projects in the art category.
 *
 * Results should be returned in ascending order.
 *
 * projects: [Project]
 * returns: [Number]
 */
exports.selectIdsOfArtCategoryProjects = function(projects) {
}

/**
 * Each pledge has a baseAmount, shipping, and tax value. Adding these
 * together gives the amount a backer was charged for a pledge.
 * 
 * Given an array of pledges, calculate the total that was charged for all
 * the pledges combined.
 * 
 * pledges: [Pledge]
 * returns: Number
 */
exports.totalAmountPledged = function(pledges) {
}

/**
 * Given an array of projects, groups projects into categories then calculates
 * stats for each unique category, represented by a CategoryStats value.
 * The CategoryStats model has more details on how to calculate each field from
 * an array of projects belonging to the same category.
 *
 * Results should be returned in ascending order by category name.
 *
 * projects: [Project]
 * returns: [CategoryStats]
 */
exports.categoryStatsSortedByCategoryName = function(projects) {
}

/*
 * This method takes a project and an array of pledge changes, and returns
 * an array of booleans representing whether the project had reached its goal
 * after each pledge change.
 *
 * A project has reached its goal if the total value of pledges is equal to
 * or greater than the project's goal. It is possible for a project to reach
 * its goal, then fall back under its goal if a backer cancels or lowers
 * a pledge.
 *
 * project: Project
 * pledgeChanges: [PledgeChange]
 * returns: [Boolean]
*/
exports.hadProjectReachedGoalAfterEachPledgeChange = function(project, pledgeChanges) {
}

/**
 * Calculates the change in numbers for each month from year 1 to year 2.
 *
 * The arguments are not guaranteed to contain data for all 12 months of
 * a year. In that case, only return stats where data exists for both months.
 *
 * examples:
 *
 * compareMonthlyStatsPerYear(
 *   [1, 3, 2, 4, 6, 8, 0, 0, 3, 2, 6, 7],
 *   [3, 4, 5, 4, 5, 6, 7, 7, 6, 8, 9, 9],
 * )
 * => [2, 1, 3, 0, -1, -2, 7, 7, 3, 6, 3, 2]
 *
 * compareMonthlyStatsPerYear([5, 7], [9, 8, 3])
 * => [4, 1]
 *
 * monthlyStatsYear1: [Number]
 * monthlyStatsYear2: [Number]
 * returns: [Number]
 */
exports.compareMonthlyStatsPerYear = function(monthlyStatsYear1, monthlyStatsYear2) {
}

/**
 * For a given project, find other projects that have the same category, sorted
 * in descending order by the number of backers. The array of projects may
 * contain the project given as the first argument; this project should not be
 * returned.
 *
 * project: Project
 * projects: [Project]
 */
const recommendProjectsFromSameCategory = function(project, projects) {
}
exports.recommendProjectsFromSameCategory = recommendProjectsFromSameCategory

/**
 * Returns a list of recommended projects based on projects the user has
 * already backed. Use `recommendProjectsFromSameCategory` to
 * generate an array of recommendations for each project, then return a single
 * array with all the recommendations sorted in descending order by the number
 * of backers. Should not contain duplicates or projects the user has already
 * backed.
 *
 * backedProjects: [Project]
 *   An array of projects the user has backed.
 * allProjects: [Project]
 *   An array of all projects. It may include projects the user has backed.
 * returns: [Project]
 */
exports.recommendationFeed = function(backedProjects, allProjects) {
}

/**
 * Takes a lambda, returns a new lambda like the original but with the
 * arguments flipped.
 *
 * f: (a, b) -> c
 * returns: (b, a) -> c
 */
exports.flip = function(f) {
}

/**
 * Creators have access to an activity feed for their project. Often an
 * activity will occur many times in a row, e.g.: they might receive 15 likes
 * on one of their project updates, and then a backer will make a pledge.
 *
 * Rather than rendering 15 consecutive likes, we would prefer an activity feed
 * that indicates how many times an activity appeared in a row. This method
 * returns an array of pairs, where the first component of each pair is an
 * activity, and the second component is how many times that activity appeared
 * in a row.
 *
 * example:
 *
 * activityFeed(['comment', 'comment', 'like', 'comment'])
 * => [['comment', 2], ['like', 1], ['comment', 1]]
 *
 * activities: [String]
 * returns: [[String, Number]]
 */
exports.activityFeed = function(activities) {
}

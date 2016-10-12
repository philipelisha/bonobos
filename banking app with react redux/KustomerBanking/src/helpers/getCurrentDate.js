export const getCurrentFormatedDate = function () {
	let date = new Date(),
		day = date.getDate(),
		month = date.getMonth(),
		year = date.getFullYear(),
		formatedDate = month + "/" + day + "/" + year;

	return formatedDate;
}
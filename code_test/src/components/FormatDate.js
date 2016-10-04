/*
 * Date formatting helper
 */
export const FormatDate = (date) => {
	let newDate = new Date(date),
		day = newDate.getDate(),
		month = newDate.getMonth(),
		year = newDate.getFullYear(),
		formatedDate = month + "/" + day + "/" + year;

	return formatedDate;
}
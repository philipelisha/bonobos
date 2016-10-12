export const ReadTextFile = (file) => {
	if ( window.File && window.FileReader && window.FileList && window.Blob ) {
		var reader = new FileReader();
		return reader.readAsText(Blob|file)
	} else {
		alert('The File APIs are not fully supported in this browser.');
		return "";
	}
}
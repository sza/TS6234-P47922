/*
 * Onload queue helper
 */
function Onload(func) {
	if (typeof(func) != 'function')
		return;

	var oldonload = window.onload;

	if (typeof(window.onload) != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}


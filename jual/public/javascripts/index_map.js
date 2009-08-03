/*
 * Index page scripts 
 */

/* 
 * Preload onmouseover images
 */
function preload_image(_image) {
	var image = new Image;
	image.src = _image;
}

/* 
 * Change area image onmouseover on index page 
 */
function change_image (region, imgmap) {
	var width = 669;
	var link_item = document.getElementById("area_" + region);
	var show_item = document.getElementById("area_highlight");

	link_item.style.textDecoration = "underline";
	show_item.style.backgroundPosition = '-' + region * width + 'px'; //alert( show_item.style.backgroundPosition );
	return true;
}

/* 
 * Change back area image onmouseout on index page
 */ 
function hide_image (region, imgmap) {
	var link_item = document.getElementById("area_" + region);
	var show_item = document.getElementById("area_highlight");

	link_item.style.textDecoration = "none";
	show_item.style.backgroundPosition = '0';
	
	return true;
}

/*
 * Popup new news window
 */
var newWin;
function popUp(page, name, details)
{
	newWin=window.open(page, name, details);
	newWin.focus();    
	return false;  
}    

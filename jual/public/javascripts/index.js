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
function change_image (region) {
	var ShowItem = document.getElementById("area_image");
	var LinkItem = document.getElementById("area_" + region);
	ShowItem.style.backgroundImage = 'url(/img/map_' + region + '.gif)';
	LinkItem.style.textDecoration = "underline";
	return true;
}

/* 
 * Change back area image onmouseout on index page
 */ 
function hide_image (region) {
	var ShowItem = document.getElementById("area_image");
	var LinkItem = document.getElementById("area_" + region);
	ShowItem.style.backgroundImage = 'url(/img/none.gif)';
	LinkItem.style.textDecoration = "none";
	return true;
}

/*
 * Change icon image onmouseover on index page
 */
function change_icon (icon) { 
        var ShowItem = document.getElementById("icon_image");
        ShowItem.style.backgroundImage = 'url(/img/icon_' + icon + '.gif)';
        return true;
}

/*
 * Change back icon image onmouseout on index page
 */
function hide_icon (icon) { 
        var ShowItem = document.getElementById("icon_image");
        ShowItem.style.backgroundImage = 'url(/img/icon.gif)';
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

// Firefox startpage info box 
function startpage_ff() {
	document.getElementById('startpage_ff').style.display = 'none'; 
	document.getElementById('startpage_ff_info').style.display = 'block'; 		
	startpage_set(); 
}

// See if startpage-icon cookie is set 
function startpage_cookie_get() {
	var cookies = document.cookie.split("; ");	
	
	for(i = 0; i < cookies.length; i++) {
		if(cookies[i] == "b_sp=1") 
			return true;
	}	

	return false;
}

/* Register click in cookie and add statistics */ 
function startpage_set() {
	/* Set cookie */
	var cookie_expire = new Date();                                
	cookie_expire.setTime(cookie_expire.getTime() + 1000*60*60*24*365);
	cookie_expire=cookie_expire.toGMTString();
	document.cookie="b_sp=1; expires="+cookie_expire+";";

	/* Ajax */
	ajax_request("/redir?s=startpage_click&nc=1", null, startpage_callback, null, true, "GET"); 

	/* Hide icon */
	document.getElementById("startpage_ie").style.display = 'none'; 
}

/* Dummy callback */
function startpage_callback(result, xmlhttp, link) {
}

/* Hide FF-info box */
function startpage_ff_info_close() {
	document.getElementById("startpage_ff_info").style.display = 'none';; 		
}

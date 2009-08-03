/*
 * GLOBAL VARS
 */
var last_clicked_at = 0;


/* Browser detection */
function compare_version(ver1, ver2) {
	if (typeof(ver1) == 'string')
		ver1 = ver1.split('.');
	else if (typeof(ver1) == 'number')
		ver1 = [ver1];

	if (typeof(ver2) == 'string')
		ver2 = ver2.split('.');
	else if (typeof(ver2) == 'number')
		ver2 = [ver2];

	var i = 0;
	while (1) {
		if (!ver1[i]) {
			if (!ver2[i])
				return 0;
			else
				return 1;
		} else if (!ver2[i])
			return -1;

		if (parseInt(ver1[i]) > parseInt(ver2[i]))
			return -1;
		else if (parseInt(ver1[i]) < parseInt(ver2[i]))
			return 1;

		i++;
	}
}

var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		var version = dataString.substring(index+this.versionSearchString.length+1);


	if (version.indexOf(' ') > 0) {
			version = version.substring(0, version.indexOf(' '));
		}

		return version;
	},
	isValid: function (browsers) {
		var i = 0;
		var valid = false;

		for (i = 0; i < browsers.length; i++) {
			if (browsers[i].agent == this.browser) {
				if (compare_version(browsers[i].version, this.version) >= 0) {
					valid = true;
					break;
				}
			}

		}

		return valid;
	},
	dataBrowser: [
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari"
		},
		{
			prop: window.opera,
			identity: "Opera"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};

BrowserDetect.init();

	
/* ----------------------------------------------------------------------- */
// file: pagequery_api.js
// javascript query string parsing utils
// pass location.search to the constructor: var page = new PageQuery(location.search)
// get values like: var myValue = page.getValue("param1") etc.
// djohnson@ibsys.com {{djohnson}}
// you may use this file as you wish but please keep this header with it thanks
/* ----------------------------------------------------------------------- */	

function PageQuery(q) {
	if(q.length > 1) this.q = q.substring(1, q.length);
	else this.q = null;
	this.keyValuePairs = new Array();
	if(q) {
		for(var i=0; i < this.q.split("&").length; i++) {
			this.keyValuePairs[i] = this.q.split("&")[i];
		}
	}
	this.getKeyValuePairs = function() { return this.keyValuePairs; }
	this.getValue = function(s) {
		for(var j=0; j < this.keyValuePairs.length; j++) {
			if(this.keyValuePairs[j].split("=")[0] == s)
				return this.keyValuePairs[j].split("=")[1];
		}
		return -1;
	}
	this.getParameters = function() {
		var a = new Array(this.getLength());
		for(var j=0; j < this.keyValuePairs.length; j++) {
			a[j] = this.keyValuePairs[j].split("=")[0];
		}
		return a;
	}
	this.getLength = function() { return this.keyValuePairs.length; }	
}

function queryString(key) {
	var page = new PageQuery(window.location.search); 
	return unescape(page.getValue(key)); 
}

/* --------------------------------------------------------------------------- */

/*
 * Array handling
 */
function isInArray(needle, arrayHaystack) {
	if (!arrayHaystack || arrayHaystack.length == 0)
		return false;

	for (var x in arrayHaystack) {
		if (arrayHaystack[x].split(":")[0] == needle)
			return true;
	}

	return false;
}

/*
 * Cookie handling
 */
function setCookie(name, value, expires, path, domain, secure) {
	var today = new Date();

	today.setTime(today.getTime());

	if (expires)
		expires = expires * 1000 * 60 * 60 * 24;

	var expires_date = new Date(today.getTime() + (expires));

	document.cookie = name + '=' + escape(value) +
		((expires) ? ';expires=' + expires_date.toGMTString() : '') + //expires.toGMTString()
		((path) ? ';path=' + path : '') +
		((domain) ? ';domain=' + domain : '') +
		((secure) ? ';secure' : '' );
}

function getCookie(name) {
	var start = document.cookie.indexOf(name + "=");
	var len = start + name.length + 1;

	if (!start && name != document.cookie.substring(0, name.length))
		return null;

	if (start == -1)
		return null;

	var end = document.cookie.indexOf( ';', len );
	if (end == -1)
		end = document.cookie.length;

	return unescape(document.cookie.substring(len, end));
}

/*
function getCookie( pCookieName ) {
        var aCookies = document.cookie.split( ';' );
        var aTempCookie = '';
        var sCookieName = '';
        var sCookieVal = '';
        var bCookie = false;

        for ( i = 0; i < aCookies.length; i++ ) {
                aTempCookie = aCookies[i].split( '=' );
                sCookieName = aTempCookie[0].replace( /^\s+|\s+$/g, '' );

                if ( sCookieName == pCookieName ) {
                        bCookie = true;
                        if ( aTempCookie.length > 1 ) {
                                sCookieVal = unescape( aTempCookie[1].replace( /^\s+|\s+$/g, '' ) );
                        }
                        return sCookieVal;
                        break;
                }

                aTempCookie = null;
                sCookieName = '';
        }

        if ( !bCookie ) return null;
}
*/

function deleteCookie(name, path, domain) {
	if (getCookie(name)) {
		document.cookie = name + '=' +
			((path) ? ';path=' + path : '') +
			((domain) ? ';domain=' + domain : '' ) +
			';expires=Thu, 01-Jan-1970 00:00:01 GMT';
	}
}

/*
 * Check if the given feature has been selected
 */
function setFeatureVal(_feat, _id) {
	var Item = typeof(_id) == "string" ? getElementById(_id) : _id; 

	var cookie_str = getCookie('features');
	var feat_elements = Item.length;
	if (cookie_str && cookie_str.indexOf(_feat) >= 0) {
		var feature = parseInt(cookie_str.substr(cookie_str.indexOf(_feat+':')+_feat.length+1));
		for (var i = 0; i < feat_elements; i++) {
			if (feature == Item.options[i].value)
				Item.options[i].selected = true;
		}	
	}
}


/*
 * Check if the given feature has been selected
 */
function setRadioVal() {
	var cookie_str = getCookie('features');
	if (cookie_str && cookie_str.indexOf("st") >= 0) {
		var feature = cookie_str.substr(cookie_str.indexOf('st:')+3);
	        for (var j = 0; j < document.f.st.length; j++) {
	                if (document.f.st[j].value == feature) {
	                        document.f.st[j].checked = true;
	                }
	        }
	}
}


/*
 * Gets the ad type from caller argument
 */
function getAdTypeFromCaller(){
	var type;

	if (queryString('ca') < 0) {
		type = 's';
	} else {	
		var caller = queryString('ca');
		var split_ca = caller.split("_");
		type = split_ca[split_ca.length - 1]
	} 

	return type;
}

/*
 * Layer handling
 */
function showField() {
	var ShowItem = document.getElementById(showField.arguments[0]);
	if (ShowItem)
		ShowItem.style.display = showField.arguments[1];
	if (showField.arguments.length == 3) {
		ShowItem.innerHTML = showField.arguments[2];
	}	
		
}

function showElement(id, showHide) {
	var element = document.getElementById(id);
	if (element)
		element.style.display = showHide == true ? "block" : "none";
}

function scrollToTop() {
	window.scrollTo(0, 0);
}

function scrollToBottom() {
	window.scrollTo(0, 10000);
}

function scrollToObject(offsetTrail) {
	var offsetLeft = 0;
	var offsetTop = 0;

	// Calculate the position
	while (offsetTrail) { 
		offsetLeft += offsetTrail.offsetLeft;
		offsetTop += offsetTrail.offsetTop;
		offsetTrail = offsetTrail.offsetParent;
	}               

	if (typeof(document.body.leftMargin) != "undefined") {
		offsetLeft += document.body.leftMargin;
		offsetTop += document.body.topMargin;
	}       

	// Scroll
	window.scrollTo(0, offsetTop);
}

var focused = false;
function scrollToError(elemId) {
	if (focused) return;
	var offsetTrail = document.getElementById(elemId);

	scrollToObject(offsetTrail);
	
	if (document.getElementById(elemId))
		document.getElementById(elemId).focus();
	focused = true;
} 


function setFocus(_field) {
	if (document.getElementById(_field))
		document.getElementById(_field).focus();
}

function setChecked(_Id, _check) {
	var Item = document.getElementById(_Id);
	if (Item == null) return;
	Item.checked = _check;
}

function setValue(_Id, _check) {
	var Item = typeof(_Id) == "string" ? document.getElementById(_Id) : _Id;
	if (Item == null) return;

	Item.value = _check;
}

/*
 * Popup
 */
//window.name = "shl";
var newWin;
function popUp(page, name, details) {
	newWin=window.open(page, name, details);
	newWin.focus();
	return false;
}

/*
 * Table row hiliting for IE
 */
function tableRowHilite() {
	if (document.getElementById("hl") == null) return;
	
	var table = document.getElementById("hl");
	var rows = table.getElementsByTagName('tr');
	
	for (var i = 0; i < rows.length; i++)	{
		rows[i].onmouseover = function() {
			this.className += 'hilite';
		}
		
		rows[i].onmouseout = function()	{
			this.className = this.className.replace('hilite', '');
		}
	}
}

/*
 * Disable and enable input fields in forms
 */
function enable_field(_name) {
	var Item = typeof(_name) == "string" ? document.getElementById(_name) : _name;

	if (Item == null) return;

	if (Item.disabled)
		Item.disabled = false;
}

function disable_field(_name) {
	var Item = typeof(_name) == "string" ? document.getElementById(_name) : _name;

	if (Item == null) return;

	if (!Item.disabled)
		Item.disabled = true;
}

function check_dc(_key) {
	var date = new Date;
	var time = date.getTime();

	if ((last_clicked_at + 2500) >= time) {
		document.getElementById(_key).value = 1;
	} else {
		document.getElementById(_key).value = 0;
	}	
	
	last_clicked_at = time;
}

/*
 * Text area limit
 */
function maxlength(e, obj, max) {
	if (!e) e = window.event; // IE

	if (e.which) {
		var keycode = e.which; // Mozilla
		var ie = false;
	} else {
		var keycode = e.keyCode; // IE
		var ie = true;
	}

	x = obj.value.length;

	if (x > max) {
		obj.value = obj.value.substr(0, max);
		x = max;
	}

	if (keycode == 0 && ie) { // PASTE ONLY FOR IE
		var select_range = document.selection.createRange();	
		var max_insert = max - x + select_range.text.length;
		var data = window.clipboardData.getData("Text").substr(0, max_insert);
		select_range.text = data;
	} else if (x == max && (keycode != 8 && keycode != 46)) {
		return false;
	}

	return true;
}

/*
 * Positioning of elements
 */
function findPosX(obj, end) {
	var curleft = 0;
	var width = obj.clientWidth;

	if (obj.offsetParent) {
		while (obj.offsetParent) {
			curleft += obj.offsetLeft;
			obj = obj.offsetParent;
		}
	} else if (obj.x)
		curleft += obj.x;

	return curleft + (end?width:0);
}

function findPosY(obj, end) {
	var curtop = 0;
	var height = obj.clientHeight;

	if (obj.offsetParent) {
		while (obj.offsetParent) {
			curtop += obj.offsetTop
				obj = obj.offsetParent;
		}
	} else if (obj.y)
		curtop += obj.y;

	return curtop + (end?height:0);
}

/*
 * Progress bar
 */
function ProgressBar(_container) {
	this.progress = [];
	this.container = _container || 'progressbar_container';
	this.completed = false;

	/* Don't show estimate until progress reach (x) procent */
	this.ESTIMATE_MIN_PROGRESS = 10;
	/* Speed calculation include latest (x) procent */
	this.SPEED_CALC_LATEST = 30;

	/* Clear container */
	this.clear();

	/* Init the container */

	var container = document.getElementById(this.container);
	if (!container) 
		return;

	/* Create progress table */
	var progress_bar = document.createElement('div');
	progress_bar.className = 'progress_bar';

	var progress_cell = document.createElement('div');
	progress_cell.className = 'progress_blue';
	progress_cell.style.width = '0px';

	var debug = document.createElement('div');
	debug.className = 'progress_debug';
	debug.id = 'progress_debug_id';

	progress_bar.appendChild(progress_cell);
	container.appendChild(progress_bar);
	container.appendChild(debug);
	container.appendChild(document.createElement('br'));
}

ProgressBar.prototype.clear = function () {
	this.progress = [];

	var container = document.getElementById(this.container);
	if (!container) return;

	while (container.childNodes.length > 0)
		container.removeChild(container.childNodes[0]);
}

ProgressBar.prototype.update = function (progress, total) {
	if (this.completed) return;

	var id = this.progress.length;
	var time = new Date();
	this.progress[id] = {progress: progress, total: total, time: time.getTime()};
	this.completed = progress == total;
};

ProgressBar.prototype.current = function () {
	var id = this.progress.length;

	if (id == 0) return;

	return this.progress[id - 1];
};

ProgressBar.prototype.procent = function (_id) {
	var progress = this.progress[_id] || this.current();

	if (progress && progress.progress)
		return Math.round( progress.progress / progress.total * 100 );

	return 0;
};

ProgressBar.prototype.speed = function () {
	if (this.progress.length == 0) return;

	var start_at = this.progress.length - Math.floor(this.progress.length * this.SPEED_CALC_LATEST / 100) - 1;

	if (start_at < 0)
		start_at = 0;

	var first = this.progress[start_at];
	var current = this.current();

	var current_progress = current.progress - first.progress;
	var time = (current.time - first.time);

	return (current_progress / time);
};

ProgressBar.prototype.estimate = function () {
	if (this.procent() < this.ESTIMATE_MIN_PROGRESS) return ;

	var speed = this.speed();
	var progress = this.current();

	var remaining_progress = progress.total - progress.progress;
	var remaining_time = Math.round(remaining_progress / speed);

	return remaining_time;
};

ProgressBar.prototype.draw = function () {
	var container = document.getElementById(this.container);
	if (!container) return;
	container.style.display = 'block';

	var estimate = this.estimate() / 1000;
	var speed = this.speed();
	var procent = this.procent();

	if (container.childNodes.length) {
		var progress_bar = container.getElementsByTagName('div')[0];
		var progress_cell = container.getElementsByTagName('div')[1];
		progress_cell.style.width = Math.round((progress_bar.offsetWidth - 2) * procent / 100)+'px';

		var debug = container.getElementsByTagName('div')[2];
		var minutes_left = Math.floor(estimate / 60);
		var seconds_left = Math.round(estimate - minutes_left * 60);
		var time_left = '';

		if (minutes_left  + seconds_left > 0)
			time_left = 'Tid kvar: ';
		if (minutes_left > 0)
			time_left += minutes_left + " min ";
		if (seconds_left > 0)
			time_left += seconds_left + " s";

		debug.innerHTML = procent + "%&nbsp;&nbsp;&nbsp;" + time_left;
	}
};

ProgressBar.prototype.update_draw = function(progress, total) {
	if (this.completed) return;

	this.update(progress, total);
	this.draw();
};

/*
 * Progress bar
 */
function progressBar(text) {
	document.write('<div id="loading" class="progressBar">'+text+'<span id="loading_dots"></span></div>');
}

function startProgressBar(pos) {
	var loading = document.getElementById('loading');
	var dots = "";

	pos %= 4;
	for (var i = 0; i < pos; i++)
		dots += ".";
	
	document.getElementById('loading_dots').innerHTML = dots;

	pos++;
	loading.timer = setTimeout('startProgressBar('+pos+')', 500);
}

/*
 * Position progress bar
 */
function showProgressBar(obj, posY) {
	var loading = document.getElementById('loading');

	if (!posY) 
		posY = 0;

	startProgressBar(1);

	loading.style.top = '' + (findPosY(obj, true) + posY) + 'px';
	loading.style.left = '' + (findPosX(obj, true) + 20) + 'px';
	loading.style.display = "inline";
}

function hideProgressBar() {
	var loading = document.getElementById('loading');

	clearTimeout(loading.timer);
	loading.style.display = 'none';
	showElement("TipBox", true);
}

function select_all_equip(_name, _form, _select) {
        for (var i = 1; i < 53; i++) {
                var equip = eval("document." + _form + "." + _name + i);

                equip.checked = _select;
        }
}

function select_all_facilities(_name, _form, _select) {
        for (var i = 1; i < 53; i++) {
                var facilities = eval("document." + _form + "." + _name + i);

                facilities.checked = _select;
        }
}

function select_all_weeks(_name, _form, _select) {
	for (var i = 1; i < 53; i++) {
		var week = eval("document." + _form + "." + _name + i);

		week.checked = _select;
	}	
}	

/*
 * Display images. Show border and display large image
 */

// If we don't try to do and image load, the resize wont be correct
// Directly after load we remove the image cause we need next_image to be false for the functions
function fix_next_image() {
	var next_image_load = new Image;
	var timestamp = new Date().getTime() + Math.random();
	next_image_load.src = "/img/none.gif?"+timestamp;
}
fix_next_image();

function waitForNextImage(next_image, ad_id) {
	var ad_id = ad_id ? ad_id : "";
	var image = document.getElementById("display_image" + ad_id).firstChild;

	if (next_image.width > 0) {
		image.width = next_image.width;
		image.height = next_image.height;
	} else {
		setTimeout(function () { waitForNextImage(next_image, ad_id); }, 100);
	}
}

function resizeImage(image, path, next_image, admin) {
	if (!next_image) {
		next_image = new Image;
		next_image.src = path;
	}

	if (next_image.width == 0) {
		next_image.onload = setTimeout(function () { resizeImage(image, path, next_image, admin); }, 0);
		return;
	}

	image.src = next_image.src;

	if (admin && next_image.width > 400) {
		var factor = (next_image.width - 400) / next_image.width;
		image.height = next_image.height * (1 - factor);
		image.width = 400;
	} else {
		image.width = next_image.width;
		image.height = next_image.height;
	}
}

function showLargeImage(strDisplayPath, ad_id, admin) {
	var ad_id = ad_id ? ad_id : "";
	var admin = admin ? admin : false;
	var image = document.getElementById("display_image" + ad_id).firstChild;

	if (admin) {
		resizeImage(image, strDisplayPath, null, admin);
	} else {
		if (navigator.userAgent.toLowerCase().indexOf('safari') > 0) {
			var next_image = new Image;
			next_image.src = strDisplayPath;

			image.src = next_image.src;
			waitForNextImage(next_image, ad_id);
		} else {
			image.src = strDisplayPath;
		}
	}
}

/* Video */
function flowplayer_conf(video_flv, add_splash, auto_buffer, image_path) {
	var conf = new Object();
	var image_path = image_path ? image_path : false;

	conf.showLoopButton = false;
	conf.showMenu = false;
	conf.autoPlay = false;
	conf.loop = false;
	conf.initialScale = 'scale';
	conf.showFullScreenButton = false;
	conf.fullScreenScriptURL = 'flow-player-full-screen-disabled';
	conf.bufferLength = 10;
	conf.videoFile = video_flv;

	
	if (auto_buffer) {
		conf.autoBuffering = true;
	} else if (add_splash && video_flv.indexOf('videos') > 0) {
		var video_splash = '';
		if (image_path == false) {
			video_splash = video_flv.replace(/.*videos/, add_splash).replace(/flv/, 'jpg');
		} else {
			var image_id = video_flv.substring(video_flv.lastIndexOf("/"));
			image_id = image_id.replace(/flv/, "jpg");
			video_splash = image_path + image_id.substring(0, 3) + image_id;
		}

		conf.autoBuffering = false;
		conf.splashImageFile = video_splash;
		conf.scaleSplash = true;
	} else if (add_splash && video_flv.indexOf('flush') > 0) {
		var video_splash = video_flv.replace(/flv/, 'splash');

		conf.splashImageFile = video_splash+'/.jpg';
		conf.scaleSplash = true;
	}


	return conf;
}

function flowplayer_conf_to_string(conf) {
        var conf_string = '{';
        for (var i in conf) {
                conf_string += i + ':' + (typeof(conf[i]) == 'string'?"'":'') + conf[i] + (typeof(conf[i]) == 'string'?"'":'');
                conf_string += ',';
        }
        conf_string = conf_string.substring(0, conf_string.length - 1);
        conf_string += '}';
        return conf_string;
}

function hide_video(ad_id) {
	ad_id = ad_id || '';

	var video = document.getElementById('flowplayerholder' + ad_id);
	var image = document.getElementById('display_image' + ad_id);

	if (video) {
		video.style.display = 'none';
		var container = video.parentNode;
		container.removeChild(video);
	}

	if (image)
		image.style.display = 'block';
}

function show_video(video_file, width, height, ad_id) {
	ad_id = ad_id || '';
	var image = document.getElementById('display_image' + ad_id);
	var container = image.parentNode;
	var video = document.getElementById('flowplayerholder' + ad_id);

	var conf = flowplayer_conf(video_file, false);
	conf.autoPlay = true;
	conf = flowplayer_conf_to_string(conf);

	if (ad_id && width > 400)  {
		height = Math.round(400 / width * height);
		width = 400;
	}

	if (!video) {
		video = document.createElement('div');

		video.id = 'flowplayerholder' + ad_id;
		container.appendChild(video);

		image.style.display = 'none';

		var fo = { 
			movie:"/swf/FlowPlayer.swf", 
			width:width, 
			height:height, 
			majorversion:"7", 
			build:"0", 
			allowscriptaccess: "always",
			flashvars:"config=" + conf
			};
	
		UFO.create(fo, "flowplayerholder" + ad_id);

	} else if (video.style.display == 'none')  {
		image.style.display = 'none';
		video.style.display = 'block';
	} else {
		var fo = document.getElementById("flowplayerholder" + ad_id + "_obj");
		var time = fo.getTime();
		var dur = fo.getDuration();
		if (time >= dur)
			fo.Seek(0);


		if(!fo.getIsPaused() && fo.getIsPlaying())  {
			fo.Pause();
		} else { 
			fo.DoPlay(); 
		}
	}	
}

function next_image () {
	if(!images[counter])
		counter = 0;

	/* If next item is an video, play video */
	if(video_exist == 1 && counter == 0) {
		var v_thumb = document.getElementById('thumb' + images.length);
		v_thumb.name = 'video';
		counter = 0;

		thumbnailBorder(v_thumb, images.length + 1);
		show_video(video_url, video_width, video_height); 

		return;
	}
		
	/* Preload next image */
	var thumb = document.getElementById('thumb' + counter);
	var image = new Image;
	image.src = image_url + images[counter];

	showLargeImage(image_url + images[counter]);			
	thumbnailBorder(thumb, images.length);

	set_alt_title('main_pict');

	counter++;
}

function set_alt_title(call_div) {
	var main_image = document.getElementById('main_image');
	var adder = 0;

	if(call_div == 'thumb') {
		adder = 1;	
	}	

	/* When next thumb is a video, display other alt/title */
	if((video_exist == 1 && counter == images.length - 1 + adder) || images.length == 1)
	{
		main_image.alt = '';
		main_image.title = '';
	} else {
		main_image.alt = 'Click to view the next image.';
		main_image.title = 'Click to view the next image.';
	}
}

var styles = [];
function thumbnailBorder(thumb, image_num, ad_id) {
	var ad_id = ad_id ? ad_id : "";

	if (!thumb)
		return;

	if (thumb.name != 'video')
		hide_video(ad_id);

	for (i = 0; i < image_num; i++) {
		var thumb_obj = document.getElementById('thumb' + i + ad_id);
		if (!styles[i]) {
			styles[i] = thumb_obj.className.replace("ad_border_solid_black", "ad_border_solid_grey");
		} 

		if (thumb.id == thumb_obj.id) {
			thumb_obj.className = "ad_thumb ad_border_solid_black";
		} else {
			thumb_obj.className = styles[i];
		}
	}
}

function goto_hitta(address_id, zipcode_id, postal_city_id) {
	var address = document.getElementById(address_id);
	var zipcode = document.getElementById(zipcode_id);
	var postal_city = document.getElementById(postal_city_id);

	var a = document.createElement('a');
	a.href = "http://www.hitta.se/SearchPlace.aspx?UCSB%3aTextBoxWhere=" + escape(address.value) + "+" + zipcode.value.replace(/ /, "") + "+" + escape(postal_city.value);
	a.target = '_blank';

	register_trafikfonden(a, 'http://www.hitta.se'); /* common.trafikfonden.hitta */
	a.href = "#";
	a = null;
	
	return false;
}

/* Hide image and display image-add input */
function delete_image(element_show, element_hide, hidden) {
	var obj1 = document.getElementById(element_show); 
	var obj2 = document.getElementById(element_hide); 

	obj2.innerHTML = "<input type='hidden' name='" + hidden + "' value='1'>";

	showField(obj1.id, "block");
	showField(obj2.id, "none");

	return false;	
}

function getElementsByClassName(oElm, strTagName, strClassName) {
	var arrElements = (strTagName == "*" && oElm.all)? oElm.all : oElm.getElementsByTagName(strTagName);
	var arrReturnElements = new Array();
	strClassName = strClassName.replace(/\-/g, "\\-");
	var oRegExp = new RegExp("(^|\\s)" + strClassName + "(\\s|$)");
	var oElement;
	for(var i=0; i<arrElements.length; i++){
		oElement = arrElements[i];      
		if(oRegExp.test(oElement.className)){
			arrReturnElements[arrReturnElements.length] = oElement;
		}   
	}
	return (arrReturnElements)
}

function show_hidden_elements() {
	var elements = getElementsByClassName(document, "*", 'hide');
	for (var i = 0; i < elements.length; i++) {
		elements[i].className = elements[i].className.replace(/hide/, '');
	}
}

function show_tabbed_data() {
	document.getElementById("tabbed_data").style.display = "block";	
	document.getElementById("show_tabbed_text").style.display = "none";	
}

function hide_tabbed_data() {
	document.getElementById("tabbed_data").style.display = "none";	
	document.getElementById("show_tabbed_text").style.display = "block";	
}

function get_settings(setting_name, keylookup_func, settings_root, extra) {
	if (!settings_root)
		settings_root = settings;

	var res;

	for (var i in settings_root[setting_name]) {
		var setting = settings_root[setting_name][i];
		var val;

		val = null;
		if (settings_root[setting_name][i]['keys']) {
			for (var j in settings_root[setting_name][i]['keys']) {
				var key = settings_root[setting_name][i]['keys'][j];
				var key_val = keylookup_func(key, extra);

				if (setting[key_val]) {
					setting = setting[key_val];
				} else {
					break;
				}	
			}

			if (setting['value'])
				val = setting['value'];
		} else if (settings_root[setting_name][i]['default']) {
			val = settings_root[setting_name][i]['default'];
		}
		if (val) {
			if (res)
				res += ',' + val;
			else
				res = val;
			if (!settings_root[setting_name][i]['continue'])
				break;
		}
	}

	return res;
}

/* TODO support \ */
function split_setting(val) {
	if (!val)
		return {};

	var arr = val.split(',');
	var res = {};

	for (i = 0; i < arr.length; i++) {
		var kv = arr[i].split(':', 2);

		if (kv && kv.length > 1)
			res[kv[0]] = kv[1];
		else {
			res[arr[i]] = 1;
		}
	}

	return res;
}

function mergeElementValues(arr, htmlCollection) {
	for (var ii = 0; ii < htmlCollection.length; ii++) {
		var elem = htmlCollection[ii];

		if (!elem.getAttribute('name'))
			continue;

		var key = null;
		var options = null;
		if (elem.className) {
			var element_group = elem.className.replace(/.*element_group([0-9]+).*/, "$1");
			if (element_group != "")
				element_group += ".";
			key = element_group + elem.getAttribute('name');

			if (elem.className.match(/(^| )cat_data_select($| )/)) {
				var a = [];
				for (var i = 0; i < elem.options.length; i++) {
					a[i] = elem.options[i];
				}
				options = a;
			}
		} else
			key = elem.getAttribute('name');
		if (key.match(/\[\]$/) && elem.value)
			key += elem.value;
		if (((elem.type == 'radio' || elem.type == 'checkbox') && !elem.checked)) {
			if (typeof arr[key] != "undefined")
				delete arr[key];
		} else if ((elem.value || options) && !elem.disabled) {
			arr[key] = elem.value;
			if (options)
				arr[key + ".options"] = options;
		} else {
			arr[key] = "";
			if (typeof arr[key + ".options"] != "undefined")
				delete arr[key + ".options"];
		}	
	}

	return arr;
}

function setElementValues(arr, htmlCollection) {
	for (var ii = 0; ii < htmlCollection.length; ii++) {
		var elem = htmlCollection[ii];

		var options = null;
		if (elem.className) {
			var element_group = elem.className.replace(/.*element_group([0-9]+).*/, "$1");
			if (element_group != "")
				element_group += ".";
			key = element_group + elem.getAttribute('name');
			if (elem.className.match(/(^| )cat_data_select($| )/)) {
				options = arr[key + ".options"];
			}
		} else
			key = elem.getAttribute('name');
		if (key.match(/\[\]$/) && elem.value)
			key += elem.value;
		var value = arr[key];

		if (elem.type == 'radio' || elem.type == 'checkbox') {
			if (value == elem.value)
				elem.checked = true;
		} else if (value || options) {
			if (options) {
				elem.options.length = 0;
				for (var i = 0; i < options.length; i++) {
					elem.options[i] = options[i];
				}
				elem.disabled = false;
			}
			elem.value = value;
		}
	}
}

/*
 * AJAX
 */
function ajax_request(dest, post, callback, params, evaluate, method) {
	var xmlhttp = false;

	if (method == null){
		method = "POST";
	}

	if (typeof evaluate == "undefined")
		evaluate = true;
		
	try {
		xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	} catch (e) {
		// browser doesn't support ajax. handle however you want
		// XXX ? callback(false, xmlhttp, params);
	}

	if (xmlhttp !== false) {
		xmlhttp.onreadystatechange = function () { ajax_callback(callback, params, xmlhttp, evaluate); };
		xmlhttp.open(method, dest, true);
		xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xmlhttp.send(post);
	}
}

function ajax_callback(callback, params, xmlhttp, evaluate) {
	if (xmlhttp.readyState == 4) {
		if (xmlhttp.status == 200 && xmlhttp.responseText.indexOf('<!DOCTYPE') < 0) {
			if (evaluate)
				callback(eval("(" + xmlhttp.responseText + ")"), xmlhttp, params);
			else
				callback(xmlhttp.responseText, xmlhttp, params);
		} else {
			callback(false, xmlhttp, params);
		}	
	}
}

function ajax_check() {
	var xmlhttp = false;
	try {
		xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	} catch (e) {
		return false;
	}
	return true;
}

/* delete survey - Added on 03/18/2009 by Ej -- begin */
function show_other() {
      if ( document.getElementById("delete_reason").value == "5" ) {
        document.getElementById("div_other").style.display = "block";
      }
      else {
        document.getElementById("div_other").style.display = "none";
      }
}
/* delete survey - Added on 03/18/2009 by Ej -- end */

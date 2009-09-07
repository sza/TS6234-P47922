function reset_value(name) {
	var elems = document.getElementsByName(name);
	
	if (elems) {
		for (var e in elems)
			e.disabled = true;
	}
}

function search_key_lookup(key, data) {
	if (key == "parent") {
		if (category_list[data['category']])
			return category_list[data['category']]["parent"];
		return null;
	}
	return data[key];
}

function hide_atv_checkbox(cat) {
	var cat_mc = document.getElementById("cat_mc");

	if (cat_mc && (cat_mc.value == "" || cat_mc.value == 0)) {
		showField('xc_container', 'inline');
	} else {
		document.getElementById('xc').checked = false;
		showField('xc_container', 'none');
	}	
}

/*
 * Show/hide searchextras
 */
function SearchCrit(_checkCat, adType, additional_key) {
	/* Get selected values only if same category as in query string or called _checkCat */
	var get_selected = (_checkCat || queryString("cg") == document.getElementById("catgroup").value) ? true : false;
	var reset_values = 0;
	var appl;
	var fk = document.getElementById("fk") != null ? 1 : 0;
	var agt=navigator.userAgent.toLowerCase();
	var is_major = parseInt(navigator.appVersion);
	var is_ie     = ((agt.indexOf("msie") != -1) && (agt.indexOf("opera") == -1));
	var is_ie5 = (is_ie && (is_major == 4) && (agt.indexOf("msie 5.0")!=-1) );
	var caller = queryString("ca");
	var additional_key_val = additional_key && (document.getElementById(additional_key) != null) ? document.getElementById(additional_key).value : null;
	var lookup_data = Array();

	if (document.getElementById("cmd") != null) 
		appl = 'aw';
	else if (document.getElementById("wid") != null)
		appl = 'adwatch';
	else
		appl = 'li';

	if (!_checkCat) {
		var Category = document.getElementById("cat") ? document.getElementById("cat").value : queryString("c");
		var Categorygroup = document.getElementById("cat") ? document.getElementById("catgroup").value : queryString("cg");
		// Using timeout instead of using setcookie, "rendering flash" fix in ie
		setTimeout("document.cookie='c="+Category+"'", 0);
		setTimeout("document.cookie='cg="+Categorygroup+"'", 0);
		setTimeout("document.cookie='features=0'", 0);
		reset_values = 1;
	} else {
		var Category = (_checkCat > 0 || queryString("c") < 0) ? _checkCat : queryString("c");
		document.getElementById("cat").value = Category;
	}
	
	/* Update category drops */
	var catgroup_value = document.getElementById("catgroup").value;
	var cat_id = "cat";
	if (catgroup_value == 1140) {
		cat_id = "cat_mc";
		showField('xc_container', 'inline');
	}

	lookup_data['category'] = catgroup_value;
	lookup_data['appl'] = appl;

	if (additional_key && additional_key_val) {
		var offs = additional_key.search(/[0-9]/);
		var key = additional_key;

		if (offs > -1)
			key = additional_key.substr(0, offs - 1);
		else if (additional_key == "cat")
			key = "subcategory";
		else
			key = additional_key;
		
		lookup_data[key] = additional_key_val;
	}

	if (!adType) {
		/* Check with category only if subtypes are available */
		var extras = split_setting(get_settings('searchextras', search_key_lookup, list_settings, lookup_data));
		if (extras['types']) {
			if (document.getElementById('types').style.display == 'none')
				adType = 'a';
			else
				adType = get_radio_value(document.forms.f.st);
		}
		if (!adType) {
			adType = getAdTypeFromCaller();
		}
	}
	
	lookup_data['type'] = adType;

	var extras = split_setting(get_settings('searchextras', search_key_lookup, list_settings, lookup_data));
	var fields = getElementsByClassName(document.getElementById('search'), 'div', 'featurebox');
	
	var subcat = document.getElementById(cat_id);
	subcat.options.length = 1;
	subcat.options[0] = new Option(extras["sub" + cat_id], "0");

	var i = 1;
	for (var k in category_list) {
		if (category_list[k]["level"] == 2 && category_list[k]["parent"] == catgroup_value) {
			subcat.options[i] = new Option(category_list[k]["name"], k);
			if (Category == k)
				subcat.selectedIndex = i;
			i++;
		}
	}

	var hasExtras = false;
	for (var e in extras) {
		hasExtras = true;
		break;
	}

	if (!hasExtras) {
		showField('searchextras', 'none');
	} 

	for (var i = 0; i < fields.length; i++) {
		var select = fields[i].getElementsByTagName('select');
		var inputs = fields[i].getElementsByTagName('input');
		var eid = Array();
		var offs = fields[i].id.search(/[0-9]/);

		if (offs > -1) {
			eid[0] = fields[i].id.substr(0, offs - 1);
			eid[1] = fields[i].id.substr(offs);
		} else {
			eid[0] = fields[i].id;
		}
		
		if ((eid.length == 2 && extras[eid[0]] == eid[1]) || (eid.length == 1 && extras[eid[0]]) || extras[fields[i].id]) {
			if (extras["display_none"] != eid[0])
				showField(fields[i].id, 'block');
			if (select) {
				for (var j = 0; j < select.length; j++) {
					enable_field(select[j]);
				}
			}
			
			if (inputs) {
				for (var j = 0; j < inputs.length; j++) {
					if (inputs[j].type == "radio") {
						if ((additional_key == inputs[j].id) || inputs[j].id.substr(inputs[j].id.length-2, 2) == "_0")
							inputs[j].checked = "checked";
					}	
					enable_field(inputs[j]);
				}	
			}	
		} else {
			showField(fields[i].id, 'none');
			if (select) {
				for (var j = 0; j < select.length; j++) {
					setValue(select[j], "");
					disable_field(select[j]);
				}
			} 
			
			if (inputs) {
				for (var j = 0; j < inputs.length; j++) {
					disable_field(inputs[j]);
				}	
			}
		}
	}

	var labels = getElementsByClassName(document.getElementById('types'), 'label', 'st_label');
	if (extras['types']) {
		showField('types', 'block');
		var types;
		var one_checked = false;
		var l_all;
		var inp_all;
		var checked;

		if (extras['types'] == "sellrent")
			types = {"s" : 1, "u" : 1};
		else
			types = split_setting(get_settings('types', search_key_lookup, category_settings, {'category':catgroup_value,'type':adType, 'appl' : appl}));
		
		for (var i = 0; i < labels.length; i++) {
			var l = labels[i];
			var t = l.id.replace("label_st_", "");
			var inp = document.getElementById("type_" + t);
			if (t == "a") {
				l_all = l;
				inp_all = inp;
			} else if (types[t]) {
				inp.disabled = false;
				l.style.display = 'inline';
				if (inp.checked) {
					one_checked = true;
				}
			} else {
				l.style.display = 'none';
				inp.disabled = true;
				inp.checked = false;
			}
		}

		if (extras['types'] != 'simple') {
			if (!one_checked || inp_all.disabled)
				inp_all.checked = true;
			inp_all.disabled = false;
			l_all.style.display='inline';
		} else {
			inp_all.disabled = true;
			inp_all.checked = false;
			l_all.style.display='none';
			if (!one_checked)
				document.getElementById('type_s').checked = true;
		}
	} else {
		for (var i = 0; i < labels.length; i++) {
			var l = labels[i];
			var t = l.id.replace("label_st_", "");
			var inp = document.getElementById("type_" + t);

			inp.disabled = true;
			inp.checked = false;
			l.style.display= 'none';
		}
	}
	if (extras['subcat']) {
		subcat.options[0].innerHTML = extras['subcat'];
	}
	if (hasExtras)
		showField('searchextras', 'block');

	if (document.getElementById('banner_hitta_collapsed')) {
		if (extras['hitta_banner_expanded']) {
			document.getElementById('banner_hitta_collapsed').style.display = "none";
			document.getElementById('banner_hitta_expanded').style.display = "block";
			if (!is_ie5)
				showField('tiny_lower', 'block');
		} else {
			document.getElementById('banner_hitta_collapsed').style.display = "block";
			document.getElementById('banner_hitta_expanded').style.display = "none";
			showField('tiny_lower', 'none');
		}
	}

	/* Bostad */
	if (document.getElementById('banner_idol')) {
		if (extras['banner_idol']) {
			document.getElementById('banner_idol').style.display = "block";
		} else {
			document.getElementById('banner_idol').style.display = "none";
		}
	}

	var search_where = split_setting(get_settings('search_where', search_key_lookup, list_settings, {'category':catgroup_value,'type':adType, 'appl' : appl, 'fk' : fk}));
	if (search_where['country']) {
		/* Replace normal search region list with a list of countries */
		showField('country', 'inline');
		showField('searcharea_expanded', 'none');
		showField('searcharea', 'none');
		enable_field("country");
		enable_field("co");
		disable_field("searcharea_expanded");	
		disable_field("searcharea");
	} else if (search_where['expanded']) {
		/* Replace normal search region list with an expanded region list (including all regions) */
		showField('searcharea_expanded', 'inline');
		showField('searcharea', 'none');
		showField('country', 'none');
		enable_field("searcharea_expanded");	
		disable_field("searcharea");
		disable_field("country");
		disable_field("co");
	} else if (search_where['area']) {
		var searcharea = document.getElementById('searcharea');
		var region = caller.split('_');
		var munic = regionArray[region[0]]['municipality'];
		var cities = regionArray[region[0]]['cities'];
		//var i = searcharea.options.length;
		var i = cities ? 4 : 3;

		var selected = searcharea.options[searcharea.selectedIndex].value;
		searcharea.options.length = i;

		if (cities) {
			var opt = searcharea.options[i++] = new Option("-- Städer --", 0);
			opt.style.backgroundColor = '#dcdcc3';
		} else {
			var opt = searcharea.options[i++] = new Option("-- Kommuner --", 0);
			opt.style.backgroundColor = '#dcdcc3';
		}
		
		if (cities) {
			for (var key in cities) {
				var v = '1' + region[0] + ":" + key;
				searcharea.options[i++] = new Option(cities[key], v, v == selected);
			}	
		} else {
			for (var key in munic) {
				var v = '1' + region[0] + ":1" + key;
				searcharea.options[i++] = new Option(munic[key]['name'], v, v == selected);
				if (munic[key]['subarea']) {
					for (var key2 in munic[key]['subarea']) {
						var v = '1' + region[0] + ":1" + key + ":" + key2;
						searcharea.options[i++] = new Option("  - " + munic[key]['subarea'][key2]['name'], v, v == selected );
					}	
				}	
			}	
		}

		/* Expanded search region list with municipality  */
		showField('searcharea', 'inline');
		showField('searcharea_expanded', 'none');
		showField('country', 'none');
		enable_field("searcharea");	
		disable_field("searcharea_expanded");	
		disable_field("country");
		disable_field("co");
	} else {
		var searcharea = document.getElementById('searcharea');

		if (searcharea.options.length >= 5 && searcharea.options[4].innerHTML.match(/^-- /))
			searcharea.options.length = 4;
		else if (searcharea.options.length >= 4 && searcharea.options[3].innerHTML.match(/^-- /))
			searcharea.options.length = 3;

		/* Normal search region list (current, neighboring and everywhere) */
		showField('searcharea', 'inline');
		showField('searcharea_expanded', 'none');
		showField('country', 'none');
		enable_field("searcharea");	
		disable_field("searcharea_expanded");	
		disable_field("country");
		disable_field("co");
	}

	/* Display/hide searchbox tip */
	var searchbox_tips = split_setting(get_settings('searchbox_tip', search_key_lookup, list_settings, {'category':catgroup_value, 'appl' : appl}));	
	var searchbox_tip = searchbox_tips['tip'];
	var searchbox_href = searchbox_tips['href'];

	if (searchbox_tip) {
		var sbtip = document.getElementById('searchbox_tip');
		if (sbtip) {
			/* build href string and replace it in tip */
			var ca = queryString('ca');
			if (ca)
				searchbox_href += '&ca=' + ca;

			searchbox_tip = searchbox_tip.replace(/#href#/g, searchbox_href);

			sbtip.innerHTML = searchbox_tip;
			showField('searchbox_tip', 'block');
		}
	} else {
		showField('searchbox_tip', 'none');
	}

	/* Any action hides the mobil banner */
	var mb = document.getElementById("mobil_blocket");
	if (mb)
		mb.style.display = 'none';
}

/*
 * Set category cookie, used by searchbox and reset the searchbox feature cookie
 */ 
function clearSearch(_category) {
	setCookie('c', _category);
	setCookie('features', '0');
}

function get_radio_value(radio_container) {
	if(!radio_container)
		return;

	for(var i=0; i < radio_container.length; i++) {
		if(radio_container[i].checked) {
			return radio_container[i].value;	
		}
	}	

	return null;
}


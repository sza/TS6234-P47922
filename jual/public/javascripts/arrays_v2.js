var category_settings = {
	'price' : null,
	'clothing_sex' : null,
	'params' : {
	'1': {
		'1020': {
			's': {
				'value': 'zipcode,mileage,regdate,make,transmission,engine_capacity,model,equip'
			}
		},
		'1040': {
			's': {
				'value': 'zipcode,regdate'
			}
		},
		'4040': {
			's': {
				'value': 'zipcode,certified'
			}
		},
		'5060': {
			's': {
				'value': 'zipcode,certified'
			}
		},
		'5080': {
			's': {
				'value': 'zipcode,certified'
			}
		},
		'keys': {
			'1': 'category',
			'2': 'type'
		}
	},
	'2': {
		'2020': {
			'h': {
				'0': {
					'value': 'zipcode,rooms,max_rent'
				},
				'1': {
					'value': 'zipcode,rooms,max_rent,estate_agent'
				}
			},
			'k': {
				'1': {
					'value': 'estate_agent'
				}
			},
			's': {
				'0': {
					'value': 'zipcode,rooms,size,title_type,tenure,facilities'
				},
				'1': {
					'value': 'zipcode,rooms,size,estate_agent,title_type,tenure,facilities'
				}
			},
			'u': {
				'0': {
					'value': 'zipcode,rooms,size,monthly_rent,furnished,facilities'
				},
				'1': {
					'value': 'zipcode,rooms,size,monthly_rent,estate_agent,furnished,facilities'
				}
			}
		},
		'2040': {
			'h': {
				'0': {
					'value': 'zipcode,rooms,max_rent'
				},
				'1': {
					'value': 'zipcode,rooms,max_rent,estate_agent'
				}
			},
			'k': {
				'1': {
					'value': 'estate_agent'
				}
			},
			's': {
				'0': {
					'value': 'zipcode,rooms,size,title_type,tenure'
				},
				'1': {
					'value': 'zipcode,rooms,size,estate_agent,title_type,tenure'
				}
			},
			'u': {
				'0': {
					'value': 'zipcode,rooms,size,monthly_rent,furnished'
				},
				'1': {
					'value': 'zipcode,rooms,size,monthly_rent,estate_agent,furnished'
				}
			}
		},
		'2060': {
			'h': {
				'0': {
					'value': 'zipcode,max_rent'
				},
				'1': {
					'value': 'zipcode,max_rent,estate_agent'
				}
			},
			'k': {
				'1': {
					'value': 'estate_agent'
				}
			},
			's': {
				'0': {
					'value': 'zipcode,size,title_type,tenure'
				},
				'1': {
					'value': 'zipcode,size,estate_agent,title_type,tenure'
				}
			},
			'u': {
				'0': {
					'value': 'zipcode,size,monthly_rent'
				},
				'1': {
					'value': 'zipcode,size,monthly_rent,estate_agent'
				}
			}
		},
		'2080': {
			'h': {
				'0': {
					'value': 'zipcode,max_rent'
				},
				'1': {
					'value': 'zipcode,max_rent,estate_agent'
				}
			},
			'k': {
				'1': {
					'value': 'estate_agent'
				}
			},
			's': {
				'0': {
					'value': 'zipcode,size,title_type,tenure'
				},
				'1': {
					'value': 'zipcode,size,estate_agent,title_type,tenure'
				}
			},
			'u': {
				'0': {
					'value': 'zipcode,size,monthly_rent'
				},
				'1': {
					'value': 'zipcode,size,monthly_rent,estate_agent'
				}
			}
		},
		'keys': {
			'1': 'category',
			'2': 'type',
			'3': 'company_ad'
		}
	},
	'3': {
		'k': {
			'value': 'zipcode'
		},
		'keys': {
			'1': 'type'
		},
		's': {
			'value': 'zipcode'
		}
	}
},
	'types' : {
	'1': {
		'2020': {
			'value': 's,u,k,h'
		},
		'2040': {
			'value': 's,u,k,h'
		},
		'2060': {
			'value': 's,u,k,h'
		},
		'2080': {
			'value': 's,u,k,h'
		},
		'keys': {
			'1': 'category'
		}
	},
	'2': {
		'default': 's,k'
	}
},
	'extra_images' : {
	'4': {
		'default': 'max:2'
	}
},
	'video' : null
};

var category_list = {
1000 : {
	'name' : 'VEHICLES',
	'level' : 0
	
},
1020 : {
	'name' : 'Cars',
	'level' : 1
	,'parent' : 1000
},
1040 : {
	'name' : 'Motorcycles',
	'level' : 1
	,'parent' : 1000
},
1060 : {
	'name' : 'Accessories & Parts',
	'level' : 1
	,'parent' : 1000
},
1080 : {
	'name' : 'Other Vehicles',
	'level' : 1
	,'parent' : 1000
},
2000 : {
	'name' : 'PROPERTIES',
	'level' : 0
	
},
2020 : {
	'name' : 'Apartments',
	'level' : 1
	,'parent' : 2000
},
2040 : {
	'name' : 'Houses',
	'level' : 1
	,'parent' : 2000
},
2060 : {
	'name' : 'Commercial Properties',
	'level' : 1
	,'parent' : 2000
},
2080 : {
	'name' : 'Land',
	'level' : 1
	,'parent' : 2000
},
3000 : {
	'name' : 'ELECTRONICS',
	'level' : 0
	
},
3020 : {
	'name' : 'Mobile Phones & Gadgets',
	'level' : 1
	,'parent' : 3000
},
3040 : {
	'name' : 'TV/Audio/Video/Cameras',
	'level' : 1
	,'parent' : 3000
},
3060 : {
	'name' : 'Computers & Accessories',
	'level' : 1
	,'parent' : 3000
},
4000 : {
	'name' : 'HOME & PERSONAL ITEMS',
	'level' : 0
	
},
4020 : {
	'name' : 'Home & Garden',
	'level' : 1
	,'parent' : 4000
},
4040 : {
	'name' : 'Clothes/Watches/Accessories',
	'level' : 1
	,'parent' : 4000
},
4060 : {
	'name' : 'For Children',
	'level' : 1
	,'parent' : 4000
},
5000 : {
	'name' : 'LEISURE/SPORTS/HOBBIES',
	'level' : 0
	
},
5020 : {
	'name' : 'Sports & Outdoors',
	'level' : 1
	,'parent' : 5000
},
5040 : {
	'name' : 'Hobby & Collectibles',
	'level' : 1
	,'parent' : 5000
},
5060 : {
	'name' : 'Music/Movies/Books',
	'level' : 1
	,'parent' : 5000
},
5080 : {
	'name' : 'Pets',
	'level' : 1
	,'parent' : 5000
},
6000 : {
	'name' : 'BUSINESS TO BUSINESS',
	'level' : 0
	
},
6020 : {
	'name' : 'Professional/Office Equipment',
	'level' : 1
	,'parent' : 6000
},
6040 : {
	'name' : 'Business',
	'level' : 1
	,'parent' : 6000
},
7000 : {
	'name' : 'JOBS & SERVICES',
	'level' : 0
	
},
7020 : {
	'name' : 'Jobs',
	'level' : 1
	,'parent' : 7000
},
7040 : {
	'name' : 'Services',
	'level' : 1
	,'parent' : 7000
},
8000 : {
	'name' : '--',
	'level' : 0
	
},
8020 : {
	'name' : 'Others',
	'level' : 1
	,'parent' : 8000
}
};

var category_features = {
	'org_warning' : null,
	'addr_and_zip' : null,
	'noprice' : {
	'1': {
		'7020': {
			'value': '1'
		},
		'7040': {
			'value': '1'
		},
		'keys': {
			'1': 'category'
		}
	}
},
	'company_subscription' : null,
	'insurance' : null,
	'info_swap' : null,
	'bjornsbytare' : null,
	'mcertified_extra' : null,
	'no_infopage_title' : null,
	'hide_address' : null
};

var label_settings = {
	'infopage' : {
	'1': {
		'1': {
			'value': 'label:Link,optional:(optional),text:The link should lead directly to the advertised item'
		},
		'keys': {
			'1': 'has_store'
		}
	},
	'4': {
		'default': 'label:Link,optional:(optional)'
	}
},
	'region' : {
	'1': {
		'3040': {
			'b': {
				'value': 'label:Region'
			},
			's': {
				'value': 'label:Region'
			},
			'u': {
				'value': 'label:Region'
			}
		},
		'keys': {
			'1': 'category',
			'2': 'type'
		}
	},
	'2': {
		'default': 'label:Region'
	}
}
};

var regionArray = {
	'1': {
		'alt_text': 'Perlis',
		'coord': '30,5,44,0,56,11,39,33',
		'name': 'Perlis',
		'near': {
			'0': '2'
		},
		'short_name': 'Perlis',
		'url_name': 'Perlis'
	},
	'2': {
		'alt_text': 'Kedah',
		'coord': '6,23,18,15,40,35,58,11,96,31,90,49,81,76,66,92,60,66,50,65',
		'name': 'Kedah',
		'near': {
			'0': '1',
			'1': '3',
			'2': '6'
		},
		'short_name': 'Kedah',
		'url_name': 'Kedah'
	},
	'3': {
		'alt_text': 'Penang',
		'coord': '38,99,38,68,58,69,62,91',
		'name': 'Penang',
		'near': {
			'0': '2',
			'1': '6'
		},
		'short_name': 'Penang',
		'url_name': 'Penang'
	},
	'4': {
		'alt_text': 'Kelantan',
		'coord': '114,96,128,78,131,59,150,28,171,36,173,49,164,56,164,83,178,113,111,121',
		'name': 'Kelantan',
		'near': {
			'0': '5',
			'1': '6',
			'2': '7'
		},
		'short_name': 'Kelantan',
		'url_name': 'Kelantan'
	},
	'5': {
		'alt_text': 'Terengganu',
		'coord': '166,78,167,57,177,48,233,107,220,160,198,146,198,127,181,113',
		'name': 'Terengganu',
		'near': {
			'0': '4',
			'1': '7'
		},
		'short_name': 'Terengganu',
		'url_name': 'Terengganu'
	},
	'6': {
		'alt_text': 'Perak',
		'coord': '105,170,65,165,57,125,50,99,65,98,81,81,92,57,130,42,125,66,127,74,122,78,111,95,108,118,108,132,124,167',
		'name': 'Perak',
		'near': {
			'0': '2',
			'1': '3',
			'2': '4',
			'3': '7',
			'4': '8'
		},
		'short_name': 'Perak',
		'url_name': 'Perak'
	},
	'7': {
		'alt_text': 'Pahang',
		'coord': '135,175,127,165,111,132,113,124,180,115,194,128,196,147,223,164,230,185,241,225,233,236,204,230,167,202,149,196,137,189',
		'name': 'Pahang',
		'near': {
			'0': '4',
			'1': '5',
			'2': '6',
			'3': '8',
			'4': '10',
			'5': '12'
		},
		'short_name': 'Pahang',
		'url_name': 'Pahang'
	},
	'8': {
		'alt_text': 'Selangor',
		'coord': '127,235,105,224,93,191,69,170,109,173,127,170,133,180,134,192,117,197,110,217,124,223,135,213,137,199,140,213,130,221',
		'name': 'Selangor',
		'near': {
			'0': '6',
			'1': '7',
			'2': '9',
			'3': '10'
		},
		'short_name': 'Selangor',
		'url_name': 'Selangor'
	},
	'9': {
		'alt_text': 'Kuala Lumpur',
		'coord': '121,205,121,204,120,204,120,200,120,199,125,194,133,194,137,198,138,200,138,204,136,208,133,210,131,211,128,211,129,214,128,221,123,225,116,225,111,220,111,212,115,208,118,206,121,206,121,204,121,203,121,204,121,203',
		'name': 'Kuala Lumpur',
		'near': {
			'0': '8'
		},
		'short_name': 'Kuala Lumpur',
		'url_name': 'Kuala+Lumpur'
	},
	'10': {
		'alt_text': 'Negeri Sembilan',
		'coord': '154,231,146,236,140,246,130,235,134,220,142,215,143,200,151,200,163,204,182,218,178,237,167,231',
		'name': 'Negeri Sembilan',
		'near': {
			'0': '7',
			'1': '9',
			'2': '11',
			'3': '12'
		},
		'short_name': 'Negeri Sembilan',
		'url_name': 'Negeri+Sembilan'
	},
	'11': {
		'alt_text': 'Malacca',
		'coord': '142,248,152,235,164,235,176,241,170,264,159,258,152,255',
		'name': 'Malacca',
		'near': {
			'0': '10',
			'1': '12'
		},
		'short_name': 'Malacca',
		'url_name': 'Malacca'
	},
	'12': {
		'alt_text': 'Johore',
		'coord': '172,267,180,241,184,219,203,232,234,238,242,227,285,306,226,312',
		'name': 'Johore',
		'near': {
			'0': '7',
			'1': '10',
			'3': '11'
		},
		'short_name': 'Johore',
		'url_name': 'Johore'
	},
	'13': {
		'alt_text': 'Sarawak',
		'coord': '334,260,335,276,369,306,380,297,402,300,411,296,428,282,440,282,470,295,474,289,494,290,501,283,504,266,516,255,514,244,521,232,525,234,530,225,530,210,530,194,532,192,531,183,530,171,527,166,521,172,518,172,520,187,519,191,512,187,511,175,504,179,504,194,501,199,480,180,474,196,439,227,430,231,414,232,405,233,399,238,397,251,389,253,384,261,386,274,380,275,372,280,368,279,368,274,363,278,355,272,346,272,335,262',
		'name': 'Sarawak',
		'near': {
			'0': '14'
		},
		'short_name': 'Sarawak',
		'url_name': 'Sarawak'
	},
	'14': {
		'alt_text': 'Sabah',
		'coord': '531,198,542,190,581,190,589,203,596,192,613,197,627,195,615,186,619,173,624,173,627,177,645,172,652,165,632,153,626,153,623,147,610,147,613,138,597,141,603,124,587,113,587,103,573,115,575,107,571,100,566,114,564,118,548,134,541,152,530,150,522,156,531,168,529,181,531,191,531,199',
		'name': 'Sabah',
		'near': {
			'0': '13'
		},
		'short_name': 'Sabah',
		'url_name': 'Sabah'
	}
};
var modelArray = {
	'1': {
		'1': '146',
		'2': '147',
		'3': '155',
		'4': '156',
		'5': '158',
		'6': '159',
		'7': 'GT Blackline',
		'8': 'Brera',
		'9': 'Spider',
		'10': 'Others'
	},
	'2': {
		'51': 'A4',
		'52': 'A6',
		'53': 'A8',
		'54': 'TT Coupe',
		'55': 'Q5',
		'56': 'Q7',
		'57': 'Others'
	},
	'3': {
		'101': '116i',
		'102': '118i',
		'103': '120i',
		'104': '125i',
		'105': '135i',
		'106': '320i',
		'107': '323i',
		'108': '325i',
		'109': '335i',
		'110': 'M3',
		'111': '523i',
		'112': '525i',
		'113': '530i',
		'114': '540i',
		'115': 'M5',
		'116': '630i',
		'117': 'M6',
		'118': 'X3',
		'119': 'X5',
		'120': 'X6',
		'121': 'Z4',
		'122': '728i',
		'123': '730i',
		'124': '735i',
		'125': '740Li',
		'126': '750Li',
		'127': 'E21',
		'128': 'E30',
		'129': 'E36',
		'130': 'E46',
		'131': 'E90',
		'132': 'E12',
		'133': 'E28',
		'134': 'E34',
		'135': 'E39',
		'136': 'E60',
		'137': 'E23',
		'138': 'E32',
		'139': 'E38',
		'140': 'E65',
		'141': 'E66',
		'142': 'E67',
		'143': 'Others'
	},
	'4': {
		'151': 'La Joya MK',
		'152': 'Others'
	},
	'5': {
		'201': 'Era CV6',
		'202': 'Era CM8',
		'203': 'Others'
	},
	'6': {
		'251': 'A520',
		'252': 'Eastar',
		'253': 'Tiggo',
		'254': 'Others'
	},
	'7': {
		'301': 'Aveo',
		'302': 'Optra',
		'303': 'Captiva',
		'304': 'Others'
	},
	'8': {
		'351': 'Grand C4 Picasso',
		'352': 'C6',
		'353': 'Others'
	},
	'9': {
		'401': 'Everest',
		'402': 'Escape',
		'403': 'Ranger',
		'404': 'Focus',
		'405': 'Laser',
		'406': 'Telstar',
		'407': 'Lynx',
		'408': 'Escort',
		'409': 'Econovan',
		'410': 'Mondeo',
		'411': 'Others'
	},
	'10': {
		'451': 'City',
		'452': 'Jazz',
		'453': 'Civic',
		'454': 'Accord',
		'455': 'Stream',
		'456': 'Odyssey',
		'457': 'CR-V',
		'458': 'Prelude',
		'459': 'Inspire',
		'460': 'Intergra',
		'461': 'NSX',
		'463': 'Hybrid',
		'464': 'Others'
	},
	'11': {
		'501': 'Getz',
		'502': 'Matrix',
		'503': 'Trajet',
		'504': 'Coupe',
		'505': 'Tucson',
		'506': 'XG250',
		'507': 'NF',
		'508': 'Azera',
		'509': 'Accent',
		'510': 'Elantra',
		'511': 'Sonata',
		'512': 'Others',
		'513': 'i10',
		'514': 'i20',
		'515': 'i30',
		'516': 'Atos',
		'517': 'Grandeur XG',
		'518': 'Starex',
		'519': 'Terracan',
		'520': 'Santa Fe'
	},
	'12': {
		'551': 'i10',
		'552': 'Atos',
		'553': 'Getz',
		'554': 'Matrix',
		'555': 'Santa',
		'556': 'Others'
	},
	'13': {
		'601': 'D-Max',
		'602': 'Others'
	},
	'14': {
		'651': 'X-Type',
		'652': 'XF',
		'653': 'XJ',
		'654': 'Daimler',
		'655': 'XK',
		'656': 'XKR',
		'657': 'XJ6',
		'658': 'XJ12',
		'659': 'XJ8',
		'660': 'S-Type',
		'661': '420',
		'662': '240',
		'663': '340',
		'664': 'Others'
	},
	'15': {
		'701': 'Picanto',
		'702': 'Rio',
		'703': 'Spectra',
		'704': 'Optima',
		'705': 'Sportage',
		'706': 'Rondo',
		'707': 'Others',
		'708': 'Forte',
		'709': 'Forte Coup',
		'710': 'Carens',
		'711': 'Sorento',
		'712': 'Carnival'
	},
	'16': {
		'751': 'Defender',
		'752': 'Freelander',
		'753': 'Discovery',
		'754': 'Range Rover',
		'755': 'Others'
	},
	'17': {
		'801': 'IS 250',
		'802': 'RX 350',
		'803': 'GS 300',
		'804': 'LS 460',
		'805': 'Others'
	},
	'18': {
		'851': 'Elise',
		'852': 'Europa',
		'853': 'Exige',
		'854': 'Others'
	},
	'19': {
		'901': 'BT-50',
		'902': 'Fighter',
		'903': 'Mazda3',
		'904': 'RX-8',
		'905': 'MX-5',
		'906': 'CX-9',
		'907': '323',
		'908': 'Familia',
		'909': '626',
		'910': '929',
		'911': 'RX-7',
		'912': 'Premacy',
		'913': 'Bongo',
		'914': 'Capella',
		'915': 'Others',
		'916': '626 Cronos'
	},
	'20': {
		'951': 'A170',
		'952': 'B170',
		'953': 'B200',
		'954': 'C180',
		'955': 'C200',
		'956': 'C230',
		'957': 'CLK200',
		'958': 'SLK200',
		'959': 'SLK280',
		'960': 'SL350',
		'961': 'CLS350',
		'962': 'CLS55',
		'963': 'E200',
		'964': 'E260',
		'965': 'E230',
		'966': 'E280',
		'967': 'S300L',
		'968': 'S350L',
		'969': 'S500L',
		'970': 'ML350',
		'971': 'R280L',
		'972': 'R350L',
		'973': 'Others'
	},
	'21': {
		'1001': 'Cooper',
		'1002': 'Cooper S',
		'1003': 'Cooper Clubman',
		'1004': 'Cooper S Clubman',
		'1005': 'Others'
	},
	'22': {
		'1051': 'Lancer',
		'1052': 'Grandis',
		'1053': 'Triton',
		'1054': 'Pajero',
		'1055': 'Colt',
		'1056': 'Galant',
		'1057': 'Delica',
		'1058': 'Tredia',
		'1059': 'Others'
	},
	'23': {
		'1101': 'Forza',
		'1102': 'Citra',
		'1103': 'Ria',
		'1104': 'Sorento',
		'1105': '206',
		'1106': 'Others'
	},
	'24': {
		'1151': 'Sentra',
		'1152': 'Latio',
		'1153': 'Impul',
		'1154': 'Grand',
		'1155': 'Sylphy',
		'1156': 'Serena',
		'1157': 'Frontier',
		'1158': 'Navara',
		'1159': 'X-Trail',
		'1160': 'Others',
		'1161': 'Altima',
		'1162': 'Bluebird',
		'1163': 'Cefiro',
		'1164': 'Cedric',
		'1165': 'Murano',
		'1166': 'Vanette',
		'1167': 'Urvan',
		'1168': 'Terrano',
		'1169': 'Skyline',
		'1170': 'Micra',
		'1171': 'Silvia'
	},
	'25': {
		'1201': 'Kancil',
		'1202': 'Kembara',
		'1203': 'Kenari',
		'1204': 'Kelisa',
		'1205': 'MyVi',
		'1206': 'Viva',
		'1207': 'Nautica',
		'1208': 'Others'
	},
	'26': {
		'1251': '206 Coupe',
		'1252': '306',
		'1253': '307',
		'1254': '308 VTI',
		'1255': '308 Turbo Panoramic',
		'1256': '308 GT',
		'1257': '405',
		'1258': '406',
		'1259': '407',
		'1260': 'Others'
	},
	'27': {
		'1301': 'Boxster',
		'1302': 'Cayman',
		'1303': '911 Carrera',
		'1304': '911 Targa',
		'1305': '911 GT2',
		'1306': '911 Turbo',
		'1307': 'Cayenne',
		'1308': 'Others'
	},
	'28': {
		'1351': 'Saga',
		'1352': 'Iswara',
		'1353': 'Wira',
		'1354': 'Waja',
		'1355': 'Satria',
		'1356': 'Savvy',
		'1357': 'Perdana',
		'1358': 'Gen2',
		'1359': 'Persona',
		'1360': 'Exora',
		'1361': 'Others',
		'1362': 'Putra',
		'1363': 'Juara',
		'1364': 'Satria Neo',
		'1365': 'Satria GTI'
	},
	'29': {
		'1401': 'Kangoo',
		'1402': 'Clio',
		'1403': 'Megane',
		'1404': 'Grand Espace',
		'1405': 'RT19',
		'1406': 'Scenic',
		'1407': 'Laguna',
		'1408': 'Others'
	},
	'30': {
		'1451': '900',
		'1452': '600',
		'1453': '9000',
		'1454': '9-2',
		'1455': '9-3',
		'1456': '9-5',
		'1457': 'Others'
	},
	'31': {
		'1501': 'Octavia',
		'1502': 'Fabia',
		'1503': 'Others'
	},
	'32': {
		'1551': 'Kyron',
		'1552': 'Rexton',
		'1553': 'Stavic',
		'1554': 'Actyon',
		'1555': 'Others'
	},
	'33': {
		'1601': 'Impreza',
		'1602': 'Forester',
		'1603': 'Others'
	},
	'34': {
		'1651': 'Swift',
		'1652': 'SX4',
		'1653': 'Grand Vitara',
		'1654': 'APV',
		'1655': 'Jimmy',
		'1656': 'Others'
	},
	'35': {
		'1701': 'Avanza',
		'1702': 'Vios',
		'1703': 'Rush',
		'1704': 'Yaris',
		'1705': 'Innova',
		'1706': 'Altis',
		'1707': 'Camry',
		'1708': 'Wish',
		'1709': 'Hilux',
		'1710': 'Fortuner',
		'1711': 'Corona',
		'1712': 'Corolla',
		'1713': 'Prius',
		'1714': 'Alphard',
		'1715': 'Altezza',
		'1716': 'Celica',
		'1717': 'Crown',
		'1718': 'Estima',
		'1719': 'Harrier',
		'1720': 'Liteace',
		'1721': 'Mark II',
		'1722': 'Mark V',
		'1723': 'Premio',
		'1724': 'Rav 4',
		'1725': 'Starlet',
		'1726': 'Supra',
		'1727': 'Townace',
		'1728': 'Others',
		'1729': 'Unser'
	},
	'36': {
		'1751': 'Polo',
		'1752': 'Crosspolo',
		'1753': 'Beetle',
		'1754': 'Golf',
		'1755': 'Jetta',
		'1756': 'Passat',
		'1757': 'Eos',
		'1758': 'Tiguan',
		'1759': 'Touareg',
		'1760': 'Scirocco',
		'1761': 'Others'
	},
	'37': {
		'1801': 'S40',
		'1802': 'S70',
		'1803': 'V50',
		'1804': 'V70',
		'1805': 'C30',
		'1806': 'C70',
		'1807': 'S80',
		'1808': 'XC60',
		'1809': 'XC90',
		'1810': '240',
		'1811': '740',
		'1812': '760',
		'1813': '850',
		'1814': '940',
		'1815': '960',
		'1816': 'Others'
	},
	'38': {
		'1851': 'Others'
	},
	'39': {
		'1901': '124',
		'1902': '127',
		'1903': '128',
		'1904': '500',
		'1905': 'Uno',
		'1906': 'Punto',
		'1907': 'Bravo/Brava',
		'1908': 'Panda',
		'1909': 'Others'
	},
	'40': {
		'1951': 'Frontera',
		'1952': 'Omega',
		'1953': 'Commodore',
		'1954': 'Kadett',
		'1955': 'Vectra',
		'1956': 'Calais',
		'1957': 'Astra',
		'1958': 'Zafira',
		'1959': 'Record',
		'1960': 'Gemini'
	}
};


var typeList = {
'a':'All' ,
'b':'Want to swap' ,
'h':'Wanted to rent' ,
'k':'Wanted' ,
's':'For sale' ,
'st':'For sale soon' ,
'u':'For Rent' 
};

var language_numbers = Array();
language_numbers[1] = '1';
language_numbers[2] = '2';
language_numbers[3] = '3';
language_numbers[4] = '4';
language_numbers[5] = '5';


var js_info = {
	'CHOOSE_CLOTHING_PARAMS' : 'Select clothing type above'
}

var jsevents = {
	'ai' : {
	'1': {
		'action': {
			'1': {
				'args': {
					'html': 'Name:',
					'id': 'name_label'
				},
				'name': 'set_html'
			},
			'3': {
				'args': {
					'id': 'store_row',
					'style': 'none'
				},
				'name': 'display_element'
			},
			'4': {
				'async': '1',
				'name': 'show_category_template'
			},
			'5': {
				'args': {
					'id': 'hide_address_row',
					'style': 'none'
				},
				'name': 'display_element'
			},
			'6': {
				'name': 'category_select_all'
			},
			'7': {
				'args': {
					'id': 'estate_agent_',
					'style': 'none'
				},
				'name': 'display_element'
			},
			'8': {
				'args': {
					'id': 'store_link',
					'style': 'none'
				},
				'name': 'display_element'
			}
		},
		'id': 'p_ad',
		'trigger': 'click'
	},
	'2': {
		'action': {
			'1': {
				'args': {
					'html': 'Name:',
					'id': 'name_label'
				},
				'name': 'set_html'
			},
			'2': {
				'name': 'checkEmail'
			},
			'3': {
				'async': '1',
				'name': 'show_category_template'
			},
			'4': {
				'args': {
					'is_store': '0'
				},
				'name': 'category_select_company'
			},
			'5': {
				'args': {
					'id': 'store_link',
					'style': 'inline'
				},
				'name': 'display_element'
			}
		},
		'id': 'c_ad',
		'trigger': 'click'
	},
	'3': {
		'action': {
			'1': {
				'args': {
					'id': 'email_info',
					'style': 'block'
				},
				'name': 'display_element'
			}
		},
		'id': 'email',
		'trigger': 'focus'
	},
	'4': {
		'action': {
			'1': {
				'args': {
					'id': 'phone_info',
					'style': 'block'
				},
				'name': 'display_element'
			}
		},
		'id': 'phone',
		'trigger': 'focus'
	},
	'5': {
		'action': {
			'1': {
				'name': 'showExtraImagesNumbers'
			},
			'2': {
				'name': 'show_sub_category'
			},
			'3': {
				'name': 'show_category_types'
			},
			'5': {
				'name': 'set_category_changed'
			},
			'6': {
				'args': {
					'id': 'image_text',
					'style': 'block'
				},
				'name': 'display_element'
			},
			'7': {
				'args': {
					'id': 'video_info',
					'style': 'block'
				},
				'name': 'display_element'
			},
			'8': {
				'args': {
					'id': 'region'
				},
				'name': 'display_label'
			},
			'9': {
				'async': '1',
				'name': 'show_category_template'
			}
		},
		'id': 'category_group',
		'trigger': 'change'
	},
	'6': {
		'action': {
			'1': {
				'name': 'show_category_types'
			},
			'2': {
				'async': '1',
				'name': 'show_category_template'
			},
			'3': {
				'name': 'showExtraImagesNumbers'
			},
			'4': {
				'name': 'set_category_changed'
			}
		},
		'id': 'sub_category',
		'trigger': 'change'
	},
	'7': {
		'action': {
			'1': {
				'async': '1',
				'name': 'show_category_template'
			}
		},
		'name': 'type',
		'trigger': 'click'
	},
	'9': {
		'action': {
			'1': {
				'args': {
					'id': 'subject_info',
					'style': 'block'
				},
				'name': 'display_element'
			}
		},
		'id': 'subject',
		'trigger': 'focus'
	},
	'10': {
		'action': {
			'1': {
				'args': {
					'id': 'body_info',
					'style': 'block'
				},
				'name': 'display_element'
			},
			'2': {
				'args': {
					'id': 'body_warning',
					'style': 'block'
				},
				'name': 'display_element'
			}
		},
		'id': 'body',
		'trigger': 'focus'
	},
	'13': {
		'id': 'area',
		'trigger': 'change'
	},
	'14': {
		'id': 'store',
		'trigger': 'change'
	},
	'16': {
		'action': {
			'1': {
				'args': {
					'check_focused': '1',
					'id': {
						'1': 'image2',
						'2': 'name'
					},
					'only_if_empty': '1'
				},
				'name': 'set_focus'
			}
		},
		'id': 'name',
		'trigger': 'init'
	},
	'17': {
		'action': {
			'1': {
				'name': 'show_addr_and_zip_tip'
			}
		},
		'id': 'address',
		'trigger': 'blur'
	},
	'18': {
		'action': {
			'1': {
				'name': 'show_addr_and_zip_tip'
			}
		},
		'id': 'zipcode',
		'trigger': 'blur'
	},
	'19': {
		'action': {
			'1': {
				'name': 'show_addr_and_zip_tip'
			}
		},
		'id': 'address',
		'trigger': 'init'
	},
	'21': {
		'action': {
			'1': {
				'name': 'add_item'
			}
		},
		'id': 'new_item_link',
		'trigger': 'click'
	},
	'22': {
		'action': {
			'1': {
				'name': 'remove_item'
			}
		},
		'array_id': 'remove_item_id',
		'trigger': 'click'
	},
	'26': {
		'action': {
			'1': {
				'args': {
					'id': 'licenseplate_info',
					'style': 'block'
				},
				'name': 'display_element'
			}
		},
		'id': 'licenseplate',
		'trigger': 'focus'
	},
	'27': {
		'action': {
			'1': {
				'args': {
					'id': 'item_desc_info_id0',
					'style': 'block'
				},
				'name': 'display_element'
			}
		},
		'id': 'item_desc_id0',
		'trigger': 'focus'
	},
	'28': {
		'action': {
			'1': {
				'args': {
					'id': 'price_info',
					'style': 'block'
				},
				'name': 'display_element'
			}
		},
		'id': 'price',
		'trigger': 'focus'
	},
	'29': {
		'action': {
			'1': {
				'args': {
					'id': 'tenure',
					'label': 'tenure_label',
					'value': '2'
				},
				'name': 'display_tenure'
			}
		},
		'id': 'title_type',
		'trigger': 'change'
	},
	'30': {
		'action': {
			'1': {
				'args': {
					'id': 'model'
				},
				'name': 'model_lookup'
			}
		},
		'id': 'make',
		'trigger': 'change'
	},
	'31': {
		'action': {
			'1': {
				'async': '1',
				'name': 'show_category_template'
			},
			'2': {
				'args': {
					'is_store': '1'
				},
				'name': 'category_select_company'
			}
		},
		'id': 's_ad',
		'trigger': 'click'
	}
},
	'priceinfo' : {
	'1': {
		'action': {
			'1': {
				'async': '1',
				'name': 'show_price_sub_category'
			},
			'2': {
				'name': 'show_price'
			}
		},
		'name': 'category_group',
		'trigger': 'change'
	},
	'2': {
		'action': {
			'1': {
				'name': 'show_price'
			}
		},
		'name': 'sub_category',
		'trigger': 'change'
	}
},
	'bid' : {
	'1': {
		'action': {
			'1': {
				'args': {
					'id': 'ssecnr_info',
					'style': 'block'
				},
				'name': 'display_element'
			}
		},
		'id': 'ssecnr',
		'trigger': 'focus'
	}
},
	'store' : {
	'1': {
		'action': {
			'1': {
				'name': 'display_type_options'
			}
		},
		'id': 'category_group',
		'trigger': 'change'
	},
	'2': {
		'action': {
			'1': {
				'args': {
					'id': 'estate_agent_no'
				},
				'name': 'autofill_realtor_data'
			}
		},
		'id': 'estate_agent_no',
		'trigger': 'blur'
	},
	'3': {
		'action': {
			'1': {
				'args': {
					'id': 'email_store_info',
					'style': 'block'
				},
				'name': 'display_element'
			}
		},
		'id': 'email',
		'trigger': 'focus'
	},
	'4': {
		'action': {
			'1': {
				'args': {
					'id': 'orgno_store_info',
					'style': 'block'
				},
				'name': 'display_element'
			}
		},
		'id': 'orgno',
		'trigger': 'focus'
	},
	'5': {
		'action': {
			'1': {
				'args': {
					'id': 'address_store_info',
					'style': 'block'
				},
				'name': 'display_element'
			}
		},
		'id': 'address',
		'trigger': 'focus'
	},
	'6': {
		'action': {
			'1': {
				'args': {
					'id': 'phone_store_info',
					'style': 'block'
				},
				'name': 'display_element'
			}
		},
		'id': 'phone',
		'trigger': 'focus'
	},
	'7': {
		'action': {
			'1': {
				'args': {
					'id': 'fax_store_info',
					'style': 'block'
				},
				'name': 'display_element'
			}
		},
		'id': 'fax',
		'trigger': 'focus'
	},
	'8': {
		'action': {
			'1': {
				'args': {
					'id': 'ic_store_info',
					'style': 'block'
				},
				'name': 'display_element'
			}
		},
		'id': 'user_ic',
		'trigger': 'focus'
	},
	'9': {
		'action': {
			'1': {
				'args': {
					'id': 'name_store_info',
					'style': 'block'
				},
				'name': 'display_element'
			}
		},
		'id': 'name',
		'trigger': 'focus'
	},
	'10': {
		'action': {
			'1': {
				'args': {
					'id': 'info_header_store_info',
					'style': 'block'
				},
				'name': 'display_element'
			}
		},
		'id': 'info_header',
		'trigger': 'focus'
	},
	'11': {
		'action': {
			'1': {
				'args': {
					'id': 'info_text_store_info',
					'style': 'block'
				},
				'name': 'display_element'
			}
		},
		'id': 'info_text',
		'trigger': 'focus'
	},
	'12': {
		'action': {
			'1': {
				'args': {
					'id': 'estate_agent_no_store_info',
					'style': 'block'
				},
				'name': 'display_element'
			}
		},
		'id': 'estate_agent_no',
		'trigger': 'focus'
	},
	'13': {
		'action': {
			'1': {
				'args': {
					'id': 'recruitment_agency_license_no_store_info',
					'style': 'block'
				},
				'name': 'display_element'
			}
		},
		'id': 'recruitment_agency_license_no',
		'trigger': 'focus'
	},
	'14': {
		'action': {
			'1': {
				'name': 'gen_url_path'
			}
		},
		'id': 'name',
		'trigger': 'blur'
	},
	'15': {
		'action': {
			'1': {
				'name': 'gen_url_path'
			}
		},
		'id': 'company_name',
		'trigger': 'blur'
	},
	'16': {
		'action': {
			'1': {
				'name': 'gen_url_path'
			}
		},
		'id': 'user_name',
		'trigger': 'blur'
	}
}
};
var list_settings = {
	'searchextras' : {
	'1': {
		'1020': {
			'k': {
				'value': 'pricelist:0,regdate'
			},
			's': {
				'value': 'pricelist:0,regdate'
			}
		},
		'2020': {
			's': {
				'value': 'types,pricelist:3,rooms,sizelist:0'
			},
			'u': {
				'value': 'types,max_monthly_rent,rooms,sizelist:0'
			}
		},
		'keys': {
			'1': 'category',
			'2': 'type'
		}
	},
	'5': {
		'2020': {
			'value': 'types'
		},
		'2040': {
			'value': 'types'
		},
		'2060': {
			'value': 'types'
		},
		'2080': {
			'value': 'types'
		},
		'keys': {
			'1': 'category'
		}
	}
},
	'search_where' : {
	'5': {
		'default': 'expanded'
	}
},
	'searchbox_tip' : null
};

var month_short_names = [
"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun",
"Jul",
"Aug",
"Sep",
"Oct",
"Nov",
"Dec"
];

var adwatch = {
	'cookie_domain' : '.mudah.my',
	'save_ads' : {
			'cookie_storage' : 0,
			'cookie_name' : 'adw_save_ads'
			}
};

var company_available_categories=[
         1000, 1020, 1040, 1060, 1080, 2000, 2020, 2040, 2060, 2080, 6000, 6020, 6040, 7000, 7020, 7040, 8000, 8020,0
];




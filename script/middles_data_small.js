	var data_JSON_tbl

    function loadJSON(callback) {   
	data = (function(){ /*
[    
    {
        "name": "Spo\u0142eczne Liceum Og\u00f3lnokszta\u0142c\u0105ce Nr 3  STO",
        "patron": "",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Bia\u0142ostocka",
        "street_num": "4",
        "webpage": "www.3slo.pl",
        "Geo_Location": [
            {
                "lat": 52.253807407149935,
                "long": 21.037377498211008,
                "provider": "arcgis"
            },
            {
                "lat": 52.2537369,
                "long": 21.0375319,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "III Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "gen. J\u00f3zef Sowi\u0144ski",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Rogali\u0144ska",
        "street_num": "2",
        "webpage": "www.lo3.waw.ids.pl",
        "Geo_Location": [
            {
                "lat": 52.230573953372954,
                "long": 20.971309897455093,
                "provider": "arcgis"
            },
            {
                "lat": 52.2306663,
                "long": 20.9717551773571,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XXXVIII LIceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "STANIS\u0141AW KOSTKA POTOCKI",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "WIERTNICZA",
        "street_num": "26",
        "webpage": "WWW.KOSTKA-POTOCKI.EDU.PL",
        "Geo_Location": [
            {
                "lat": 52.168815093542555,
                "long": 21.0844152838303,
                "provider": "arcgis"
            },
            {
                "lat": 52.1690433,
                "long": 21.0847658,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "LVIII Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Krzysztof Kamil Baczy\u0144ski",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "G\u00f3rno\u015bl\u0105ska",
        "street_num": "31",
        "webpage": "www.baczynski.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.224852616134925,
                "long": 21.033792696231714,
                "provider": "arcgis"
            },
            {
                "lat": 52.2246089,
                "long": 21.0336716,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "Liceum Og\u00f3lnokszta\u0142c\u0105ce LIFESKILLS Nr 1",
        "patron": "",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Ho\u017ca",
        "street_num": "88",
        "webpage": "www.lol1.pl",
        "Geo_Location": [
            {
                "lat": 52.224472194010005,
                "long": 21.00606183735361,
                "provider": "arcgis"
            },
            {
                "lat": 52.22452915,
                "long": 21.0058212685947,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "I Katolickie Liceum Spo\u0142eczne",
        "patron": "",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Bobrowiecka",
        "street_num": "9",
        "webpage": "www.ikls.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.2010940291419,
                "long": 21.046111943360973,
                "provider": "arcgis"
            },
            {
                "lat": 52.2021026,
                "long": 21.0461782,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "Liceum Og\u00f3lnokszta\u0142c\u0105ce Niepubliczne nr76",
        "patron": "Wis\u0142awa Szymborska",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Rogatkowa",
        "street_num": "50",
        "webpage": "www.liceum76.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.20466611740434,
                "long": 21.162662679035023,
                "provider": "arcgis"
            },
            {
                "lat": 52.2047008,
                "long": 21.1629100916201,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "Akademickie Liceum Og\u00f3lnokszta\u0142c\u0105ce Wy\u017cszej Szko\u0142y Mened\u017cerskiej w Warszawie",
        "patron": "",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Kaw\u0119czy\u0144ska",
        "street_num": "36",
        "webpage": "www.wojnicka.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.25751894809282,
                "long": 21.056926667089794,
                "provider": "arcgis"
            },
            {
                "lat": 52.2571443,
                "long": 21.0579296454963,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "II Liceum Og\u00f3lnokszta\u0142c\u0105ce z Oddzia\u0142ami Dwuj\u0119zycznymi",
        "patron": "Stefan Batory",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "My\u015bliwiecka",
        "street_num": "6",
        "webpage": "http://www.batory.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.22198246883794,
                "long": 21.034309121991985,
                "provider": "arcgis"
            },
            {
                "lat": 52.22285165,
                "long": 21.0347710086447,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XXV Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "J\u00f3zef Wybicki",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Halna",
        "street_num": "20",
        "webpage": "www.wybicki.net",
        "Geo_Location": [
            {
                "lat": 52.16486958670457,
                "long": 21.200480768538227,
                "provider": "arcgis"
            },
            {
                "lat": 52.16449725,
                "long": 21.2004446734571,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XXI Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Hugo Ko\u0142\u0142\u0105taj",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Gr\u00f3jecka",
        "street_num": "93",
        "webpage": "www.liceum21.waw.ids.pl",
        "Geo_Location": [
            {
                "lat": 52.21033433885414,
                "long": 20.97621147997511,
                "provider": "arcgis"
            },
            {
                "lat": 52.2098787,
                "long": 20.9778124627466,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XCIV Liceum Og\u00f3lnokszta\u0142c\u0105ce im. gen. St.Maczka",
        "patron": "gen Stanis\u0142aw Maczek",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Gwia\u017adzista",
        "street_num": "35",
        "webpage": "www.maczek.waw.pl",
        "Geo_Location": [
            {
                "lat": 52.28585650712645,
                "long": 20.977182876882868,
                "provider": "arcgis"
            },
            {
                "lat": 52.2863904,
                "long": 20.9774411,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "CLX Liceum Og\u00f3lnokszta\u0142cace im. gen. dyw. Stefana Roweckiego Grota",
        "patron": "gen.dyw. Stefan Rowecki Grot",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Siemie\u0144skiego",
        "street_num": "6",
        "webpage": "www.160lo.pl",
        "Geo_Location": [
            {
                "lat": 52.20631497169482,
                "long": 20.976172476946275,
                "provider": "arcgis"
            },
            {
                "lat": 52.20673615,
                "long": 20.9749547850975,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "LXXXVI Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Batalion Zo\u015bka",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Kajetana Garbi\u0144skiego",
        "street_num": "1",
        "webpage": "www.zoska.waw.pl",
        "Geo_Location": [
            {
                "lat": 52.23502743435862,
                "long": 20.944046615990715,
                "provider": "arcgis"
            },
            {
                "lat": 52.23507145,
                "long": 20.9436939400394,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "Liceum Og\u00f3lnokszta\u0142c\u0105ce Niepubliczne nr 29",
        "patron": "Ignacy Jan Paderewski",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Powazkowska",
        "street_num": "90",
        "webpage": "www.lon29.prv.pl",
        "Geo_Location": [
            {
                "lat": 52.262322681545186,
                "long": 20.954180721256957,
                "provider": "arcgis"
            },
            {
                "lat": 52.26190825,
                "long": 20.9510809465854,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "LXXXVIII Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Micha\u0142 Konarski",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Okopowa",
        "street_num": "55a",
        "webpage": "www.konar.info",
        "Geo_Location": [
            {
                "lat": 52.248573177909854,
                "long": 20.97896755340772,
                "provider": "arcgis"
            },
            {
                "lat": 52.24836835,
                "long": 20.9767648274455,
                "provider": "osm"
            }
        ]
    }
]
*/}).toString().split('\n').slice(1, -1).join('\n');


	console.log("Loadad JSON data");
	data_JSON_tbl= JSON.parse(data);
    //console.log(data_JSON_tbl[0]);
    //console.log(data_JSON_tbl[1]);
}

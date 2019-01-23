	var data_JSON_tbl

    function loadJSON(callback) {   
	data = (function(){ /*
[    
    {
        "name": "XCII Liceum Og\u00f3lnokszta\u0142c\u0105ce z Oddzia\u0142ami Integracyjnymi",
        "patron": "",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "O\u017carowska",
        "street_num": "71",
        "webpage": "www.zs32.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.24628151067582,
                "long": 20.949389140717866,
                "provider": "arcgis"
            },
            {
                "lat": 52.2461033,
                "long": 20.9491362,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "Niepubliczne Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Jasielska",
        "street_num": "49/53",
        "webpage": "liceum281.pl",
        "Geo_Location": [
            {
                "lat": 52.20101493588783,
                "long": 20.981616550349294,
                "provider": "arcgis"
            },
            {
                "lat": 52.20121115,
                "long": 20.9813662742022,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "VII Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Juliusz S\u0142owacki",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Wawelska",
        "street_num": "46",
        "webpage": "www.liceum7.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.216843493219336,
                "long": 20.996435389116538,
                "provider": "arcgis"
            },
            {
                "lat": 52.2173269,
                "long": 20.9959536103471,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XVIII Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Jan Zamoyski",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Smolna",
        "street_num": "30",
        "webpage": "www.zamoyski.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.23283219790516,
                "long": 21.02298088178762,
                "provider": "arcgis"
            },
            {
                "lat": 52.2333099,
                "long": 21.0232872,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "LXXXIV Liceum Og\u00f3lnokszta\u0142c\u0105ce im. Bohater\u00f3w Narwiku",
        "patron": "",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "G\u0142adka",
        "street_num": "16",
        "webpage": "www.narwik.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.187813204541584,
                "long": 20.959735051935837,
                "provider": "arcgis"
            },
            {
                "lat": 52.1876185,
                "long": 20.960182,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XLVIII LICEUM OG\u00d3LNOKSZTA\u0141C\u0104CE",
        "patron": "EDWARD DEMBOWSKI",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "SZCZ\u0118\u015aLIWICKA",
        "street_num": "50/54",
        "webpage": "LO48.WAW.PL",
        "Geo_Location": [
            {
                "lat": 52.21594616680134,
                "long": 20.968566182064805,
                "provider": "arcgis"
            },
            {
                "lat": 52.2154554,
                "long": 20.968183,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XI Liceum Og\u00f3lnokszta\u0142\u0105ce",
        "patron": "Miko\u0142aj Rej",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Ma\u0142achowskiego",
        "street_num": "1",
        "webpage": "rej.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.239182027081014,
                "long": 21.01195767702565,
                "provider": "arcgis"
            },
            {
                "lat": 52.23858135,
                "long": 21.0114435658854,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "VIII Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "W\u0142adys\u0142aw IV",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Jagiello\u0144ska",
        "street_num": "38",
        "webpage": "wladyslaw.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.25335165390384,
                "long": 21.03309843839798,
                "provider": "arcgis"
            },
            {
                "lat": 52.2532523,
                "long": 21.0334364,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "LXXVIII Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Maria Pawlikowska-Jasnorzewska",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Anieli Krzywo\u0144",
        "street_num": "3",
        "webpage": "www.pawlikowska.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.226979873160616,
                "long": 20.9188086300134,
                "provider": "arcgis"
            },
            {
                "lat": 52.22690045,
                "long": 20.9185459157117,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "PRYWATNE LICEUM OG\u00d3LNOKSZTA\u0141C\u0104CE NR 32 IM. JEANA MONNETA",
        "patron": "JEANA  MONNETA",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "ABRAMOWSKIEGO",
        "street_num": "4",
        "webpage": "www.maturamiedzynarodowa.pl",
        "Geo_Location": [
            {
                "lat": 52.18463323786711,
                "long": 21.017570286283146,
                "provider": "arcgis"
            },
            {
                "lat": 52.18487885,
                "long": 21.0173133372913,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "CXXII LICEUM OG\u00d3LNOKSZTA\u0141C\u0104CE",
        "patron": "IGNACY DOMEYKO",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Staffa",
        "street_num": "3/5",
        "webpage": "domeyko.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.27376156116934,
                "long": 20.961465190691783,
                "provider": "arcgis"
            },
            {
                "lat": 52.2735385,
                "long": 20.9614973,
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

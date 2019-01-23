	var data_JSON_tbl

    function loadJSON(callback) {   
	data = (function(){ /*
[    
    {
        "name": "XIII Liceum Og\u00f3lnokszta\u0142c\u0105ce z Oddzia\u0142ami Dwuj\u0119zycznymi",
        "patron": "Leopold Lis-Kula",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Oszmia\u0144ska",
        "street_num": "23/25",
        "webpage": "www.liceum13.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.26887391978764,
                "long": 21.042167617519905,
                "provider": "arcgis"
            },
            {
                "lat": 52.2689492,
                "long": 21.0418744382066,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XLI Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Joachim Lelewel",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Kiwerska",
        "street_num": "3",
        "webpage": "http://www.lelewel.waw.pl",
        "Geo_Location": [
            {
                "lat": 52.28375583484343,
                "long": 20.970296527352893,
                "provider": "arcgis"
            },
            {
                "lat": 52.2836948,
                "long": 20.9704975,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "LXXVI Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Marsza\u0142ek J\u00f3zef Pi\u0142sudski",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Kowelska",
        "street_num": "1",
        "webpage": "www.pilsudski.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.262412978619714,
                "long": 21.040294020370666,
                "provider": "arcgis"
            },
            {
                "lat": 52.2622443,
                "long": 21.0398987413934,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "VI Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Tadeusz Reytan",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Wiktorska",
        "street_num": "30/32",
        "webpage": "reytan.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.199737289514474,
                "long": 21.015161514138253,
                "provider": "arcgis"
            },
            {
                "lat": 52.200101,
                "long": 21.0150037,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "LXXX Liceum Og\u00f3lnokszta\u0142c\u0105ce im. Leopolda Staffa",
        "patron": "im. Leopolda Staffa",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Wi\u015bniowa",
        "street_num": "56",
        "webpage": "www.staff.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.21022025895892,
                "long": 21.01341582283997,
                "provider": "arcgis"
            },
            {
                "lat": 52.21022065,
                "long": 21.0141304341892,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "Liceum Og\u00f3lnokszta\u0142c\u0105ce Multimedia",
        "patron": "",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Pl. Defilad",
        "street_num": "1",
        "webpage": "liceummultimedia.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.2319709969416,
                "long": 21.006901043424392,
                "provider": "arcgis"
            },
            {
                "lat": 52.2317641,
                "long": 21.0057996756161,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XLV Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Romuald Traugutt",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Mi\u0142a",
        "street_num": "26",
        "webpage": "www.traugutt.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.247743165156564,
                "long": 20.98086218454628,
                "provider": "arcgis"
            },
            {
                "lat": 52.2482363,
                "long": 20.9802788893663,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XCVII Liceum Og\u00f3lnokszta\u0142c\u0105ce im.Olimpijczyk\u00f3w Polskich",
        "patron": "im.Olimpijczyk\u00f3w Polskich",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Siennicka",
        "street_num": "15",
        "webpage": "zs12edupage.org",
        "Geo_Location": [
            {
                "lat": 52.24642761587512,
                "long": 21.07758270243548,
                "provider": "arcgis"
            },
            {
                "lat": 52.24637695,
                "long": 21.0772000158853,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "Mi\u0119dzynarodowe Liceum Og\u00f3lnokszta\u0142c\u0105ce Meridian",
        "patron": "",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "G\u0142adka",
        "street_num": "31",
        "webpage": "www.meridian.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.18884917790984,
                "long": 20.960602754082828,
                "provider": "arcgis"
            },
            {
                "lat": 52.1888837,
                "long": 20.960492,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "I Liceum Og\u00f3lnokszta\u0142c\u0105ce z Oddzia\u0142ami Integracyjnymi im. Boles\u0142awa Limanowskiego",
        "patron": "Boles\u0142aw Limanowski",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Feli\u0144skiego",
        "street_num": "15",
        "webpage": "jedynka.org",
        "Geo_Location": [
            {
                "lat": 52.262832007213355,
                "long": 20.987715621270823,
                "provider": "arcgis"
            },
            {
                "lat": 52.2628392,
                "long": 20.9874844,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "International American School Sp. z o.o. Liceum Og\u00f3lnokszta\u0142c\u0105ce Niepubliczne Nr 72 I.A.S",
        "patron": "",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Dembego Stefana",
        "street_num": "18",
        "webpage": "www.ias.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.13283125007211,
                "long": 21.072997455190624,
                "provider": "arcgis"
            },
            {
                "lat": 52.13282455,
                "long": 21.0732950130365,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "Niepubliczne Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Willy Brandt",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Led\u00f3chowskiej",
        "street_num": "3",
        "webpage": "www.wbs.pl",
        "Geo_Location": [
            {
                "lat": 52.157337714697796,
                "long": 21.06867421137959,
                "provider": "arcgis"
            },
            {
                "lat": 52.15751225,
                "long": 21.0694187325886,
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

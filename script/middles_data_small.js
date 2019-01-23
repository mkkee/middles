	var data_JSON_tbl

    function loadJSON(callback) {   
	data = (function(){ /*
[    
    {
        "name": "Niepubliczne Liceum Og\u00f3lnokszta\u0142c\u0105ce im. Roberta Schumana Fundacji PRIMUS",
        "patron": "Robert Schuman",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Zoltana Balo",
        "street_num": "1",
        "webpage": "www.primus.com.pl",
        "Geo_Location": [
            {
                "lat": 52.13332975102442,
                "long": 21.060731838478777,
                "provider": "arcgis"
            },
            {
                "lat": 52.13289035,
                "long": 21.0608709322791,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "Spo\u0142eczne Liceum Og\u00f3lokszta\u0142c\u0105ce Nr 25",
        "patron": "Marzenna Oko\u0144ska",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Aleja Solidarno\u015bci",
        "street_num": "101 D",
        "webpage": "",
        "Geo_Location": [
            {
                "lat": 52.242799013589995,
                "long": 20.996744688325865,
                "provider": "arcgis"
            },
            {
                "lat": 52.2462058,
                "long": 21.0079299,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XV Liceum Og\u00f3lnokszta\u0142c\u0105ce z Oddzia\u0142ami Dwuj\u0119zycznymi",
        "patron": "N.\u017bmichowska",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Klonowa",
        "street_num": "16",
        "webpage": "www.zmichowska.pl",
        "Geo_Location": [
            {
                "lat": 52.21260826617227,
                "long": 21.022945317386952,
                "provider": "arcgis"
            },
            {
                "lat": 52.212672,
                "long": 21.0230746,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XIV Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Stanis\u0142aw Staszic",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Nowowiejska",
        "street_num": "37a",
        "webpage": "www.staszic.waw.pl",
        "Geo_Location": [
            {
                "lat": 52.220191528420756,
                "long": 21.002755971550588,
                "provider": "arcgis"
            },
            {
                "lat": 52.21973645,
                "long": 21.0027743888944,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XXIII Liceum Og\u00f3lnokszta\u0142c\u0105ce im. Marii Sk\u0142odowskiej - Curie",
        "patron": "Maria Sk\u0142odowska - Curie",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Naddnieprza\u0144ska",
        "street_num": "2/4",
        "webpage": "www.liceum23.waw.pl",
        "Geo_Location": [
            {
                "lat": 52.23876931943578,
                "long": 21.126957110162323,
                "provider": "arcgis"
            },
            {
                "lat": 52.2386306,
                "long": 21.1265486187423,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XCIX Liceum Og\u00f3lnokszta\u0142c\u0105ce z Oddzia\u0142ami Dwuj\u0119zycznymi im. Zbigniewa Herberta",
        "patron": "Zbigniew Herbert",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Fundamentowa",
        "street_num": "38/42",
        "webpage": "www.herbert99lo.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.23836791173756,
                "long": 21.0816953370938,
                "provider": "arcgis"
            },
            {
                "lat": 52.2379296,
                "long": 21.0824045097158,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "2 Spo\u0142eczne Liceum Og\u00f3lnokszta\u0142c\u0105ce z Oddzia\u0142ami Mi\u0119dzynarodowymi im Paw\u0142a Jasienicy STO",
        "patron": "Pawe\u0142 Jasienica",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Nowowiejska",
        "street_num": "5",
        "webpage": "www.2slo.waw.pl",
        "Geo_Location": [
            {
                "lat": 52.21989050346245,
                "long": 21.014068332361944,
                "provider": "arcgis"
            },
            {
                "lat": 52.21945915,
                "long": 21.0143601474328,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "Liceum Og\u00f3lnokszta\u0142c\u0105ce Niepubliczne Kolegium \u015bw. Stanis\u0142awa Kostki Katolickiego Stowarzyszenia Wychowawc\u00f3w",
        "patron": "\u015bw. Stanis\u0142aw Kostka",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Bobrowiecka",
        "street_num": "9",
        "webpage": "www.kolegium-ksw.edu.pl",
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
        "name": "Spo\u0142eczne Liceum Og\u00f3lnokszta\u0142c\u0105ce nr 7",
        "patron": "Bronis\u0142aw Geremek",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Karmelicka",
        "street_num": "26",
        "webpage": "slo7.waw.pl",
        "Geo_Location": [
            {
                "lat": 52.25067143464705,
                "long": 20.989555897339507,
                "provider": "arcgis"
            },
            {
                "lat": 52.2507734,
                "long": 20.9899412708056,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "Liceum Og\u00f3lnokszta\u0142c\u0105ce nr 50 Stowarzyszenia Kultury i Edukacji",
        "patron": "",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Kolektorska",
        "street_num": "9/11",
        "webpage": "www.skie.pl",
        "Geo_Location": [
            {
                "lat": 52.27555172133423,
                "long": 20.96885491698902,
                "provider": "arcgis"
            },
            {
                "lat": 52.2754844,
                "long": 20.9685789325139,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XX Liceum Og\u00f3lnokszta\u0142c\u0105ce im. Boles\u0142awa Chrobrego",
        "patron": "Boles\u0142aw Chrobry",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Objazdowa",
        "street_num": "3",
        "webpage": "www.zs40.pl",
        "Geo_Location": [
            {
                "lat": 52.25783207271054,
                "long": 21.06151910626718,
                "provider": "arcgis"
            },
            {
                "lat": 52.2249059,
                "long": 21.2099953,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "Liceum Og\u00f3lnokszta\u0142c\u0105ce Niepubliczne Nr 27 Szko\u0142a Rodzinna",
        "patron": "",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Kruszyny",
        "street_num": "28",
        "webpage": "szkolarodzinna.pl",
        "Geo_Location": [
            {
                "lat": 52.21727747735032,
                "long": 21.216485640573648,
                "provider": "arcgis"
            },
            {
                "lat": 52.21686045,
                "long": 21.21624347443,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "Katolickie Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "\u015bw. Pawe\u0142 z Tarsu",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Poezji",
        "street_num": "19",
        "webpage": "kulszkola.pl",
        "Geo_Location": [
            {
                "lat": 52.21905972880741,
                "long": 21.24830210493953,
                "provider": "arcgis"
            },
            {
                "lat": 52.15733785,
                "long": 21.202308340258,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "Liceum Og\u00f3lnokszta\u0142c\u0105ce Szko\u0142a Lider\u00f3w",
        "patron": "",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Bobrowiecka",
        "street_num": "9",
        "webpage": "",
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
    }
]
*/}).toString().split('\n').slice(1, -1).join('\n');


	console.log("Loadad JSON data");
	data_JSON_tbl= JSON.parse(data);
    //console.log(data_JSON_tbl[0]);
    //console.log(data_JSON_tbl[1]);
}

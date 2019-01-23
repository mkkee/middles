	var data_JSON_tbl

    function loadJSON(callback) {   
	data = (function(){ /*
[    {
        "name": "Bednarska Szko\u0142a Realna",
        "patron": "",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Kawalerii",
        "street_num": "5",
        "webpage": "",
        "Geo_Location": [
            {
                "lat": 52.218158502885544,
                "long": 21.03980616902306,
                "provider": "arcgis"
            },
            {
                "lat": 52.21771255,
                "long": 21.03975255,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "LXIV Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Stanis\u0142aw Ignacy Witkiewicz Witkacy",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Elbl\u0105ska",
        "street_num": "51",
        "webpage": "www.liceum64.pl",
        "Geo_Location": [
            {
                "lat": 52.26323540383171,
                "long": 20.96194497651359,
                "provider": "arcgis"
            },
            {
                "lat": 52.2633324,
                "long": 20.9607149019488,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XXXIX Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "im. Lotnictwa Polskiego",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Zuga",
        "street_num": "16",
        "webpage": "lo39.pl",
        "Geo_Location": [
            {
                "lat": 52.2815635,
                "long": 20.9546698,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "CXIV Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Jan Kili\u0144ski",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Feli\u0144skiego",
        "street_num": "13",
        "webpage": "www.zs31.waw.pl",
        "Geo_Location": [
            {
                "lat": 52.261269036066814,
                "long": 20.98875912733034,
                "provider": "arcgis"
            },
            {
                "lat": 52.2609784,
                "long": 20.9874226881486,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "LXXV Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Jan III Sobieski",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "CZERNIAKOWSKA",
        "street_num": "128",
        "webpage": "www.sobieski.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.217937376911514,
                "long": 21.04597180088277,
                "provider": "arcgis"
            },
            {
                "lat": 52.217815,
                "long": 21.0462214,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "Prywatne Liceum Og\u00f3lnokszta\u0142c\u0105ce Si\u00f3str Nazaretanek z Oddzia\u0142ami Mi\u0119dzynarodowymi",
        "patron": "",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Czerniakowska",
        "street_num": "137",
        "webpage": "www.nazaretanki.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.21045894310118,
                "long": 21.047476449737623,
                "provider": "arcgis"
            },
            {
                "lat": 52.21041395,
                "long": 21.0469668872549,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XXXVII Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Jaros\u0142aw D\u0105browski",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "\u015awi\u0119tokrzyska",
        "street_num": "1",
        "webpage": "www.37lo.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.23299145625849,
                "long": 20.99889659732214,
                "provider": "arcgis"
            },
            {
                "lat": 52.2369621,
                "long": 21.0190819,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "Liceum Filmowe z Oddzia\u0142ami Dwuj\u0119zycznymi przy Warszawskiej Szkole Filmowej",
        "patron": "",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Zaj\u0105czka",
        "street_num": "7",
        "webpage": "www.liceumfilmowe.pl",
        "Geo_Location": [
            {
                "lat": 52.2603811,  
                "long": 20.9913579141181,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "Brytyjskie Liceum Og\u00f3lnokszta\u0142c\u0105ce The British School",
        "patron": "",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Limanowskiego",
        "street_num": "15",
        "webpage": "www.thebritishschool.pl",
        "Geo_Location": [
            {
                "lat": 52.18980769605882,
                "long": 21.055123729932582,
                "provider": "arcgis"
            },
            {
                "lat": 52.1894876,
                "long": 21.05605,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "LXII Liceum Og\u00f3lnokszta\u0142c\u0105ce Mistrzostwa Sprotowego",
        "patron": "Gen Broni W\u0142adys\u0142aw Anders",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Konwiktorska",
        "street_num": "5/7",
        "webpage": "www.anders.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.25508822782645,
                "long": 21.003596155375742,
                "provider": "arcgis"
            },
            {
                "lat": 52.254225,
                "long": 21.0035047,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "Autorskie Liceum Og\u00f3lnokszta\u0142c\u0105ce Niepubliczne nr 42",
        "patron": "",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Iwicka",
        "street_num": "47b",
        "webpage": "www.alon42.waw.pl",
        "Geo_Location": [
            {
                "lat": 52.20813510990253,
                "long": 21.042165998529047,
                "provider": "arcgis"
            },
            {
                "lat": 52.20807985,
                "long": 21.0406335230769,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "X Liceum Og\u00f3lnokszta\u0142c\u0105ce im. Kr\u00f3lowej Jadwigi",
        "patron": "Kr\u00f3lowa Jadwiga",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Woronicza",
        "street_num": "8",
        "webpage": "www.krolowka.pl",
        "Geo_Location": [
            {
                "lat": 52.18993349321932,
                "long": 21.02316810782506,
                "provider": "arcgis"
            },
            {
                "lat": 52.1905079,
                "long": 21.0229788661855,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "CLVIII Liceum Og\u00f3lnokszta\u0142c\u0105ce z Oddzia\u0142ami Dwuj\u0119zycznymi",
        "patron": "im. Ksi\u0119znej Izabeli Czartoryskiej",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Szolc-Rogozi\u0144skiego",
        "street_num": "2",
        "webpage": "www.158liceum.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.149430572018034,
                "long": 21.052827080529468,
                "provider": "arcgis"
            },
            {
                "lat": 52.1492926,
                "long": 21.0541197339695,
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

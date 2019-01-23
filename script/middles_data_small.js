	var data_JSON_tbl

    function loadJSON(callback) {   
	data = (function(){ /*
[    
    {
        "name": "XIX Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Powsta\u0144c\u00f3w Warszawy",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Zbaraska",
        "street_num": "1",
        "webpage": "www.lo19.pl",
        "Geo_Location": [
            {
                "lat": 52.24353944214887,
                "long": 21.071417747013705,
                "provider": "arcgis"
            },
            {
                "lat": 52.24397345,
                "long": 21.0713664923779,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "Sportowe Liceum Og\u00f3lnokszta\u0142c\u0105ce nr 67 MGM",
        "patron": "",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Jagiello\u0144ska",
        "street_num": "88",
        "webpage": "www.szkolymgm.pl",
        "Geo_Location": [
            {
                "lat": 52.287888498759266,
                "long": 21.005659422730492,
                "provider": "arcgis"
            },
            {
                "lat": 52.2885351,
                "long": 21.0061601715745,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "LI Liceum Og\u00f3lnokszta\u0142c\u0105ce im. Tadeusza Ko\u015bciuszki",
        "patron": "Tadeusz Ko\u015bciuszko",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Kadrowa",
        "street_num": "9",
        "webpage": "www.lilo.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.265703408506276,
                "long": 21.167830430954396,
                "provider": "arcgis"
            },
            {
                "lat": 52.26526885,
                "long": 21.1669361148028,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "CXIX Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Jacek Kuro\u0144",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Z\u0142ota",
        "street_num": "58",
        "webpage": "www.lokuronia.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.23027420569542,
                "long": 20.99949073853093,
                "provider": "arcgis"
            },
            {
                "lat": 52.2306481,
                "long": 20.9992929,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "CX Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Robert Schuman",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Jana III Sobieskiego",
        "street_num": "68",
        "webpage": "www.cxlo.waw.pl",
        "Geo_Location": [
            {
                "lat": 52.18477180209485,
                "long": 21.056443026834234,
                "provider": "arcgis"
            },
            {
                "lat": 52.1848994,
                "long": 21.0557281,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XVII Liceum Og\u00f3lnokszta\u0142c\u0105ce z Oddzia\u0142ami Dwuj\u0119zycznymi",
        "patron": "Andrzej Frycz Modrzewski",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Elektoralna",
        "street_num": "5/7",
        "webpage": "frycz.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.2414331517977,
                "long": 21.001225639765586,
                "provider": "arcgis"
            },
            {
                "lat": 52.2410835,
                "long": 21.0012827741198,
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

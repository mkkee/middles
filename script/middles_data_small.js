	var data_JSON_tbl

    function loadJSON(callback) {   
	data = (function(){ /*
[        {
        "name": "L Liceum Og\u00f3lnokszta\u0142c\u0105ce z Oddzia\u0142ami Integracyjnymi",
        "patron": "Ruy Barbosy",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Burdzi\u0144skiego",
        "street_num": "4",
        "webpage": "www.lo50.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.26405738995325,
                "long": 20.981682538317177,
                "provider": "arcgis"
            },
            {
                "lat": 52.2623926,
                "long": 21.0251540830941,
                "provider": "osm"
            }
        ]
    },
{
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
    }
]
*/}).toString().split('\n').slice(1, -1).join('\n');


	console.log("Loadad JSON data");
	data_JSON_tbl= JSON.parse(data);
    //console.log(data_JSON_tbl[0]);
    //console.log(data_JSON_tbl[1]);
}

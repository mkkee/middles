	var data_JSON_tbl

    function loadJSON(callback) {   
	data = (function(){ /*
[    
    {
        "name": "\u017bagle Liceum Og\u00f3lnokszta\u0142c\u0105ce Stowarzyszenia STERNIK",
        "patron": "",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Po\u017caryskiego",
        "street_num": "28",
        "webpage": "www.zagle.sternik.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.20707985651219,
                "long": 21.173685253419006,
                "provider": "arcgis"
            },
            {
                "lat": 52.2071229,
                "long": 21.1739545107283,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XLVII Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "im. Stanis\u0142awa Wyspia\u0144skiego",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Mi\u0119dzyborska",
        "street_num": "64/70",
        "webpage": "www.47lo.waw.pl",
        "Geo_Location": [
            {
                "lat": 52.240257743002985,
                "long": 21.078832712216304,
                "provider": "arcgis"
            },
            {
                "lat": 52.24039565,
                "long": 21.0791770123175,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "LXXXI Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Aleksander Fredro",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Mi\u0142a",
        "street_num": "7",
        "webpage": "www.fredro.pl",
        "Geo_Location": [
            {
                "lat": 52.251,
                "long": 20.9915,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "PRYWATNE LO ZGROMADZENIA SI\u00d3STR ZMARTWYCHWSTANIA PA\u0143SKIEGO",
        "patron": "MATKA JADWIGA BORZ\u0118CKA",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "KRASI\u0143SKIEGO",
        "street_num": "31",
        "webpage": "www.szarotka.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.26607081320335,
                "long": 20.976343825985293,
                "provider": "arcgis"
            },
            {
                "lat": 52.2660191,
                "long": 20.9767734,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "LXIX Liceum Og\u00f3lnokszta\u0142c\u0105ce z Oddzia\u0142ami Integracyjnymi",
        "patron": "Bohater\u00f3w Powstania Warszawskiego 1944",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Urbanist\u00f3w",
        "street_num": "3",
        "webpage": "zs26.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.20553967167745,
                "long": 20.966562506752016,
                "provider": "arcgis"
            },
            {
                "lat": 52.20581135,
                "long": 20.9661393795819,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "Liceum Og\u00f3lnokszta\u0142c\u0105ce Spo\u0142eczne nr 17",
        "patron": "",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Batorego",
        "street_num": "14",
        "webpage": "www.siedemnastka.org",
        "Geo_Location": [
            {
                "lat": 52.21028031447278,
                "long": 21.00506162738766,
                "provider": "arcgis"
            },
            {
                "lat": 52.21,
                "long": 21.0066667,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "21 Spo\u0142eczne Liceum Og\u00f3lnokszta\u0142c\u0105ce im. Jerzego Grotowskiego",
        "patron": "Jerzy Grotowski",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "al. Jana Paw\u0142a II",
        "street_num": "36 c",
        "webpage": "www.21slo.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.24116642936695,
                "long": 20.995209491545893,
                "provider": "arcgis"
            },
            {
                "lat": 52.2510476,
                "long": 20.9854916,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "LII Liceum Og\u00f3lnokszta\u0142cace",
        "patron": "W\u0142adys\u0142aw Stanis\u0142aw Reymont",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "\u017beromskiego",
        "street_num": "81",
        "webpage": "reymontowka.wer.pl",
        "Geo_Location": [
            {
                "lat": 52.27779760502643,
                "long": 20.940152668878817,
                "provider": "arcgis"
            },
            {
                "lat": 52.27725935,
                "long": 20.9395298993381,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "Niepubliczne Liceum Og\u00f3lnokszta\u0142c\u0105ce nr 81 SGH",
        "patron": "",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "al. Niepodleg\u0142o\u015bci",
        "street_num": "162",
        "webpage": "www.liceumsgh.pl",
        "Geo_Location": [
            {
                "lat": 52.20872901471519,
                "long": 21.007944552080048,
                "provider": "arcgis"
            },
            {
                "lat": 52.2087319,
                "long": 21.0084341,
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

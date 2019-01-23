	var data_JSON_tbl

    function loadJSON(callback) {   
	data = (function(){ /*
[
    {
        "name": "Bednarska Szko\u0142a Realna",
        "patron": "",
        "type": "Niepubliczna",
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
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Elbl\u0105ska",
        "street_num": "51",
        "webpage": "www.liceum64.pl",
        "Geo_Location": [
            {
                "lat": 52.26323540383171,
                "long": 20.96194497651359,
                "provider": "arcgis"
            }
        ]
    },
    {
        "name": "XXXIX Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "im. Lotnictwa Polskiego",
        "type": "Publiczna",
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
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Feli\u0144skiego",
        "street_num": "13",
        "webpage": "www.zs31.waw.pl",
        "Geo_Location": [
            {
                "lat": 52.261269036066814,
                "long": 20.98875912733034,
                "provider": "arcgis"
            }
        ]
    },
    {
        "name": "LXXV Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Jan III Sobieski",
        "type": "Publiczna",
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
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "Czerniakowska",
        "street_num": "137",
        "webpage": "www.nazaretanki.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.21045894310118,
                "long": 21.047476449737623,
                "provider": "arcgis"
            }
        ]
    },
    {
        "name": "XXXVII Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Jaros\u0142aw D\u0105browski",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "\u015awi\u0119tokrzyska",
        "street_num": "1",
        "webpage": "www.37lo.edu.pl",
        "Geo_Location": [
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
        "type": "Niepubliczna",
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
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "Limanowskiego",
        "street_num": "15",
        "webpage": "www.thebritishschool.pl",
        "Geo_Location": [
            {
                "lat": 52.18980769605882,
                "long": 21.055123729932582,
                "provider": "arcgis"
            }
        ]
    },
    {
        "name": "LXII Liceum Og\u00f3lnokszta\u0142c\u0105ce Mistrzostwa Sprotowego",
        "patron": "Gen Broni W\u0142adys\u0142aw Anders",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Konwiktorska",
        "street_num": "5/7",
        "webpage": "www.anders.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.25508822782645,
                "long": 21.003596155375742,
                "provider": "arcgis"
            }
        ]
    },
    {
        "name": "Autorskie Liceum Og\u00f3lnokszta\u0142c\u0105ce Niepubliczne nr 42",
        "patron": "",
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "Iwicka",
        "street_num": "47b",
        "webpage": "www.alon42.waw.pl",
        "Geo_Location": [
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
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Woronicza",
        "street_num": "8",
        "webpage": "www.krolowka.pl",
        "Geo_Location": [
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
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Szolc-Rogozi\u0144skiego",
        "street_num": "2",
        "webpage": "www.158liceum.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.1492926,
                "long": 21.0541197339695,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XIX Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Powsta\u0144c\u00f3w Warszawy",
        "type": "Publiczna",
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
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "Jagiello\u0144ska",
        "street_num": "88",
        "webpage": "www.szkolymgm.pl",
        "Geo_Location": [
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
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Kadrowa",
        "street_num": "9",
        "webpage": "www.lilo.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.265703408506276,
                "long": 21.167830430954396,
                "provider": "arcgis"
            }
        ]
    },
    {
        "name": "CXIX Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Jacek Kuro\u0144",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Z\u0142ota",
        "street_num": "58",
        "webpage": "www.lokuronia.edu.pl",
        "Geo_Location": [
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
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Jana III Sobieskiego",
        "street_num": "68",
        "webpage": "www.cxlo.waw.pl",
        "Geo_Location": [
            {
                "lat": 52.18477180209485,
                "long": 21.056443026834234,
                "provider": "arcgis"
            }
        ]
    },
    {
        "name": "XVII Liceum Og\u00f3lnokszta\u0142c\u0105ce z Oddzia\u0142ami Dwuj\u0119zycznymi",
        "patron": "Andrzej Frycz Modrzewski",
        "type": "Publiczna",
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
    },
    {
        "name": "\u017bagle Liceum Og\u00f3lnokszta\u0142c\u0105ce Stowarzyszenia STERNIK",
        "patron": "",
        "type": "Niepubliczna",
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
        "type": "Publiczna",
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
        "type": "Publiczna",
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
        "type": "Niepubliczna",
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
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Urbanist\u00f3w",
        "street_num": "3",
        "webpage": "zs26.edu.pl",
        "Geo_Location": [
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
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "Batorego",
        "street_num": "14",
        "webpage": "www.siedemnastka.org",
        "Geo_Location": [
            {
                "lat": 52.21028031447278,
                "long": 21.00506162738766,
                "provider": "arcgis"
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

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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
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
        ],
        "Ranking_Perspektyw": {
            "2019": 10,
            "2018": 7,
            "2017": 7,
            "2016": 5,
            "2015": 8
        }
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
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
        ],
        "Ranking_Perspektyw": {
            "2019": 17,
            "2018": 25,
            "2017": 22,
            "2016": 24,
            "2015": 19
        }
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
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
        ],
        "Ranking_Perspektyw": {
            "2019": 15,
            "2018": 12,
            "2017": 13,
            "2016": 15,
            "2015": 15
        }
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "21 Spo\u0142eczne Liceum Og\u00f3lnokszta\u0142c\u0105ce im. Jerzego Grotowskiego",
        "patron": "Jerzy Grotowski",
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "al. Jana Paw\u0142a II",
        "street_num": "36 c",
        "webpage": "www.21slo.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.24116642936695,
                "long": 20.995209491545893,
                "provider": "arcgis"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "LII Liceum Og\u00f3lnokszta\u0142cace",
        "patron": "W\u0142adys\u0142aw Stanis\u0142aw Reymont",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "\u017beromskiego",
        "street_num": "81",
        "webpage": "reymontowka.wer.pl",
        "Geo_Location": [
            {
                "lat": 52.27725935,
                "long": 20.9395298993381,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "Niepubliczne Liceum Og\u00f3lnokszta\u0142c\u0105ce nr 81 SGH",
        "patron": "",
        "type": "Niepubliczna",
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "XCII Liceum Og\u00f3lnokszta\u0142c\u0105ce z Oddzia\u0142ami Integracyjnymi",
        "patron": "",
        "type": "Publiczna",
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "Niepubliczne Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "",
        "type": "Niepubliczna",
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "VII Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Juliusz S\u0142owacki",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Wawelska",
        "street_num": "46",
        "webpage": "www.liceum7.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.2173269,
                "long": 20.9959536103471,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": 14,
            "2018": 21,
            "2017": 19,
            "2016": 17,
            "2015": 23
        }
    },
    {
        "name": "XVIII Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Jan Zamoyski",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Smolna",
        "street_num": "30",
        "webpage": "www.zamoyski.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.2333099,
                "long": 21.0232872,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": 12,
            "2018": 17,
            "2017": 12,
            "2016": 14,
            "2015": 16
        }
    },
    {
        "name": "LXXXIV Liceum Og\u00f3lnokszta\u0142c\u0105ce im. Bohater\u00f3w Narwiku",
        "patron": "",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "G\u0142adka",
        "street_num": "16",
        "webpage": "www.narwik.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.187813204541584,
                "long": 20.959735051935837,
                "provider": "arcgis"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "XLVIII LICEUM OG\u00d3LNOKSZTA\u0141C\u0104CE",
        "patron": "EDWARD DEMBOWSKI",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "SZCZ\u0118\u015aLIWICKA",
        "street_num": "50/54",
        "webpage": "LO48.WAW.PL",
        "Geo_Location": [
            {
                "lat": 52.21594616680134,
                "long": 20.968566182064805,
                "provider": "arcgis"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "XI Liceum Og\u00f3lnokszta\u0142\u0105ce",
        "patron": "Miko\u0142aj Rej",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Ma\u0142achowskiego",
        "street_num": "1",
        "webpage": "rej.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.23858135,
                "long": 21.0114435658854,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "VIII Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "W\u0142adys\u0142aw IV",
        "type": "Publiczna",
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
        ],
        "Ranking_Perspektyw": {
            "2019": 2,
            "2018": 3,
            "2017": 4,
            "2016": 3,
            "2015": 2
        }
    },
    {
        "name": "LXXVIII Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Maria Pawlikowska-Jasnorzewska",
        "type": "Publiczna",
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "PRYWATNE LICEUM OG\u00d3LNOKSZTA\u0141C\u0104CE NR 32 IM. JEANA MONNETA",
        "patron": "JEANA  MONNETA",
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "ABRAMOWSKIEGO",
        "street_num": "4",
        "webpage": "www.maturamiedzynarodowa.pl",
        "Geo_Location": [
            {
                "lat": 52.18463323786711,
                "long": 21.017570286283146,
                "provider": "arcgis"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "CXXII LICEUM OG\u00d3LNOKSZTA\u0141C\u0104CE",
        "patron": "Ignacy Domeyko",
        "type": "Publiczna",
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
        ],
        "Ranking_Perspektyw": {
            "2019": 20,
            "2018": 20,
            "2017": 17,
            "2016": 18,
            "2015": 14
        }
    },
    {
        "name": "XIII Liceum Og\u00f3lnokszta\u0142c\u0105ce z Oddzia\u0142ami Dwuj\u0119zycznymi",
        "patron": "Leopold Lis-Kula",
        "type": "Publiczna",
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "XLI Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Joachim Lelewel",
        "type": "Publiczna",
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "LXXVI Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Marsza\u0142ek J\u00f3zef Pi\u0142sudski",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Kowelska",
        "street_num": "1",
        "webpage": "www.pilsudski.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.262412978619714,
                "long": 21.040294020370666,
                "provider": "arcgis"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "VI Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Tadeusz Reytan",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Wiktorska",
        "street_num": "30/32",
        "webpage": "reytan.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.199737289514474,
                "long": 21.015161514138253,
                "provider": "arcgis"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": 16,
            "2018": 16,
            "2017": 16,
            "2016": 13,
            "2015": 11
        }
    },
    {
        "name": "LXXX Liceum Og\u00f3lnokszta\u0142c\u0105ce im. Leopolda Staffa",
        "patron": "im. Leopolda Staffa",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Wi\u015bniowa",
        "street_num": "56",
        "webpage": "www.staff.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.21022065,
                "long": 21.0141304341892,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "Liceum Og\u00f3lnokszta\u0142c\u0105ce Multimedia",
        "patron": "",
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "Pl. Defilad",
        "street_num": "1",
        "webpage": "liceummultimedia.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.2319709969416,
                "long": 21.006901043424392,
                "provider": "arcgis"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "XLV Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Romuald Traugutt",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Mi\u0142a",
        "street_num": "26",
        "webpage": "www.traugutt.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.2482363,
                "long": 20.9802788893663,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "XCVII Liceum Og\u00f3lnokszta\u0142c\u0105ce im.Olimpijczyk\u00f3w Polskich",
        "patron": "im.Olimpijczyk\u00f3w Polskich",
        "type": "Publiczna",
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "Mi\u0119dzynarodowe Liceum Og\u00f3lnokszta\u0142c\u0105ce Meridian",
        "patron": "",
        "type": "Niepubliczna",
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "I Liceum Og\u00f3lnokszta\u0142c\u0105ce z Oddzia\u0142ami Integracyjnymi im. Boles\u0142awa Limanowskiego",
        "patron": "Boles\u0142aw Limanowski",
        "type": "Publiczna",
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "International American School Sp. z o.o. Liceum Og\u00f3lnokszta\u0142c\u0105ce Niepubliczne Nr 72 I.A.S",
        "patron": "",
        "type": "Niepubliczna",
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "Niepubliczne Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Willy Brandt",
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "Led\u00f3chowskiej",
        "street_num": "3",
        "webpage": "www.wbs.pl",
        "Geo_Location": [
            {
                "lat": 52.157337714697796,
                "long": 21.06867421137959,
                "provider": "arcgis"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "XLII LICEUM OG\u00d3LNOKSZTA\u0141C\u0104CE IM. MARII KONOPNICKIEJ",
        "patron": "MARIA KONOPNICKA",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "MADALI\u0143SKIEGO",
        "street_num": "22",
        "webpage": "www.lokonopnicka.edupage.org",
        "Geo_Location": [
            {
                "lat": 52.2050326,
                "long": 21.0177145119791,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "XXXV Liceum Og\u00f3lnokszta\u0142c\u0105ce z Oddzia\u0142ami Dwuj\u0119zycznymi im. Boles\u0142awa Prusa",
        "patron": "Boles\u0142aw Prus",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Zwyci\u0119zc\u00f3w",
        "street_num": "7/9",
        "webpage": "www.prus.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.230730095764244,
                "long": 21.052429120030062,
                "provider": "arcgis"
            },
            {
                "lat": 52.2309167,
                "long": 21.0522527,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "XXVIII Liceum Og\u00f3lnokszta\u0142c\u0105ce im. Jana Kochanowskiego",
        "patron": "Jan Kochanowski",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Wiktorska",
        "street_num": "99",
        "webpage": "ww.kochanowski.waw.pl",
        "Geo_Location": [
            {
                "lat": 52.1975426344568,
                "long": 21.004083088406652,
                "provider": "arcgis"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": 18,
            "2018": 13,
            "2017": 18,
            "2016": 11,
            "2015": 12
        }
    },
    {
        "name": "V Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Ksi\u0105\u017c\u0119 J\u00f3zef Poniatowski",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Nowolipie",
        "street_num": "8",
        "webpage": "www.vlo.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.2443618370938,
                "long": 20.995558010531575,
                "provider": "arcgis"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": 7,
            "2018": 10,
            "2017": 8,
            "2016": 10,
            "2015": 13
        }
    },
    {
        "name": "NOVA LICEUM OGOLNOKSZTACACE KLUCZOWYCH KOMPETENCJI MODZIE\u017bY",
        "patron": "",
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "WIDOK",
        "street_num": "8",
        "webpage": "NOVA.EDU.PL",
        "Geo_Location": [
            {
                "lat": 52.231481245080474,
                "long": 21.015183588810697,
                "provider": "arcgis"
            },
            {
                "lat": 52.2315229,
                "long": 21.0151058,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "Spo\u0142eczne Liceum Og\u00f3lnokszta\u0142c\u0105ce nr 4 imienia Batalionu AK Parasol w Warszawie",
        "patron": "",
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "Hawajska",
        "street_num": "14 A",
        "webpage": "www.slo4.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.15044309440794,
                "long": 21.04041075096616,
                "provider": "arcgis"
            },
            {
                "lat": 52.1506352,
                "long": 21.0404022,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": 11,
            "2018": 11,
            "2017": 11,
            "2016": 22,
            "2015": 10
        }
    },
    {
        "name": "Prywatne Liceum Og\u00f3lnokszta\u0142c\u0105ce im. Zofii i J\u0119drzeja Moraczewskich",
        "patron": "Zofia i J\u0119drzej Moraczewscy",
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "Pi\u0142sudskiego",
        "street_num": "73",
        "webpage": "",
        "Geo_Location": [
            {
                "lat": 52.235282304200986,
                "long": 21.254466642910906,
                "provider": "arcgis"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "LXX Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Aleksander Kami\u0144ski",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Edwarda Dembowskiego",
        "street_num": "1",
        "webpage": "www.kamyk.warszawa.pl",
        "Geo_Location": [
            {
                "lat": 52.1537326,
                "long": 21.0340932896763,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "XXII LO z Oddzia\u0142ami Dwuj\u0119zycznymi",
        "patron": " Jose Marti",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Leopolda Staffa",
        "street_num": "111",
        "webpage": "www.josemarti.pl",
        "Geo_Location": [
            {
                "lat": 52.27525462724344,
                "long": 20.948243128916864,
                "provider": "arcgis"
            },
            {
                "lat": 52.2749307,
                "long": 20.948327595812,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "CXI LICEUM OG\u00d3LNOKSZTA\u0141C\u0104CE Z ODDZIA\u0141AMI INTEGRACYJNYMI",
        "patron": "STEFAN KISIELEWSKI",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "SZCZAWNICKA",
        "street_num": "1",
        "webpage": "zs5.edupage.org",
        "Geo_Location": [
            {
                "lat": 52.23936811547111,
                "long": 21.087482910612394,
                "provider": "arcgis"
            },
            {
                "lat": 52.2395311,
                "long": 21.0873946084198,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "XXVI Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "gen. Henryk Jankowski Kuba",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Alpejska",
        "street_num": "16",
        "webpage": "www.26lo.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.218192553955994,
                "long": 21.169120441860414,
                "provider": "arcgis"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "LXIII Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Lajos Kossuth",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Ludwika Hirszfelda",
        "street_num": "11",
        "webpage": "www.liceum63.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.144692150152935,
                "long": 21.040948499019063,
                "provider": "arcgis"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "Wielokulturowe Liceum Og\u00f3lnokszta\u0142c\u0105ce im. Jacka Kuronia",
        "patron": "Jacek Kuro\u0144",
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "K\u0142opotowskiego",
        "street_num": "31",
        "webpage": "wlh.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.252152683882464,
                "long": 21.035845383836428,
                "provider": "arcgis"
            },
            {
                "lat": 52.2522344,
                "long": 21.0356824,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "CXXXVII Liceum Og\u00f3lnokszta\u0142c\u0105ce z Oddzia\u0142ami Dwuj\u0119zycznymi",
        "patron": "im. Roberta Schumana",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Olgierda",
        "street_num": "35/41",
        "webpage": "www.zs113.pl",
        "Geo_Location": [
            {
                "lat": 52.2723079,
                "long": 21.0451951,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "XII Liceum Og\u00f3lnokszta\u0142cace",
        "patron": "Henryk Sienkiewicz",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Sienna",
        "street_num": "53",
        "webpage": "12lo.warszawa.pl",
        "Geo_Location": [
            {
                "lat": 52.23096455,
                "long": 20.9990018368459,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "Niepubliczne Liceum Og\u00f3lnokszta\u0142c\u0105ce Nr 61 im. Stefana Kisielewskiego",
        "patron": "Stefan Kisielewski",
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "Przy Ba\u017cantarni",
        "street_num": "3",
        "webpage": "www.nlo61.pl",
        "Geo_Location": [
            {
                "lat": 52.1373565,
                "long": 21.0657662473481,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "Spo\u0142eczne Liceum Og\u00f3lnokszta\u0142c\u0105ce Nr 3  STO",
        "patron": "",
        "type": "Niepubliczna",
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "III Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "gen. J\u00f3zef Sowi\u0144ski",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Rogali\u0144ska",
        "street_num": "2",
        "webpage": "www.lo3.waw.ids.pl",
        "Geo_Location": [
            {
                "lat": 52.230573953372954,
                "long": 20.971309897455093,
                "provider": "arcgis"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "XXXVIII LIceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "STANIS\u0141AW KOSTKA POTOCKI",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "WIERTNICZA",
        "street_num": "26",
        "webpage": "WWW.KOSTKA-POTOCKI.EDU.PL",
        "Geo_Location": [
            {
                "lat": 52.1690433,
                "long": 21.0847658,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "LVIII Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Krzysztof Kamil Baczy\u0144ski",
        "type": "Publiczna",
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "Liceum Og\u00f3lnokszta\u0142c\u0105ce LIFESKILLS Nr 1",
        "patron": "",
        "type": "Niepubliczna",
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "I Katolickie Liceum Spo\u0142eczne",
        "patron": "",
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "Bobrowiecka",
        "street_num": "9",
        "webpage": "www.ikls.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.2010940291419,
                "long": 21.046111943360973,
                "provider": "arcgis"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "Liceum Og\u00f3lnokszta\u0142c\u0105ce Niepubliczne nr76",
        "patron": "Wis\u0142awa Szymborska",
        "type": "Niepubliczna",
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "Akademickie Liceum Og\u00f3lnokszta\u0142c\u0105ce Wy\u017cszej Szko\u0142y Mened\u017cerskiej w Warszawie",
        "patron": "",
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "Kaw\u0119czy\u0144ska",
        "street_num": "36",
        "webpage": "www.wojnicka.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.25751894809282,
                "long": 21.056926667089794,
                "provider": "arcgis"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "II Liceum Og\u00f3lnokszta\u0142c\u0105ce z Oddzia\u0142ami Dwuj\u0119zycznymi",
        "patron": "Stefan Batory",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "My\u015bliwiecka",
        "street_num": "6",
        "webpage": "http://www.batory.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.22285165,
                "long": 21.0347710086447,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": 3,
            "2018": 2,
            "2017": 5,
            "2016": 4,
            "2015": 5
        }
    },
    {
        "name": "XXV Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "J\u00f3zef Wybicki",
        "type": "Publiczna",
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "XXI Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Hugo Ko\u0142\u0142\u0105taj",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Gr\u00f3jecka",
        "street_num": "93",
        "webpage": "www.liceum21.waw.ids.pl",
        "Geo_Location": [
            {
                "lat": 52.2098787,
                "long": 20.9778124627466,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "XCIV Liceum Og\u00f3lnokszta\u0142c\u0105ce im. gen. St.Maczka",
        "patron": "gen Stanis\u0142aw Maczek",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Gwia\u017adzista",
        "street_num": "35",
        "webpage": "www.maczek.waw.pl",
        "Geo_Location": [
            {
                "lat": 52.2863904,
                "long": 20.9774411,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "CLX Liceum Og\u00f3lnokszta\u0142cace im. gen. dyw. Stefana Roweckiego Grota",
        "patron": "gen.dyw. Stefan Rowecki Grot",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Siemie\u0144skiego",
        "street_num": "6",
        "webpage": "www.160lo.pl",
        "Geo_Location": [
            {
                "lat": 52.20631497169482,
                "long": 20.976172476946275,
                "provider": "arcgis"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "LXXXVI Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Batalion Zo\u015bka",
        "type": "Publiczna",
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "Liceum Og\u00f3lnokszta\u0142c\u0105ce Niepubliczne nr 29",
        "patron": "Ignacy Jan Paderewski",
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "Powazkowska",
        "street_num": "90",
        "webpage": "www.lon29.prv.pl",
        "Geo_Location": [
            {
                "lat": 52.26190825,
                "long": 20.9510809465854,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "LXXXVIII Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Micha\u0142 Konarski",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Okopowa",
        "street_num": "55a",
        "webpage": "www.konar.info",
        "Geo_Location": [
            {
                "lat": 52.248573177909854,
                "long": 20.97896755340772,
                "provider": "arcgis"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "CII Liceum Og\u00f3lnokszta\u0142c\u0105ce z Oddzia\u0142ami Integracyjnymi",
        "patron": "",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Bartnicza",
        "street_num": "2",
        "webpage": "wwwzs41.cba.pl",
        "Geo_Location": [
            {
                "lat": 52.28634686037865,
                "long": 21.023596340007995,
                "provider": "arcgis"
            },
            {
                "lat": 52.28622095,
                "long": 21.0238603170236,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "",
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "Kale\u0144ska",
        "street_num": "3",
        "webpage": "www.szkolymydlowksiej.pl",
        "Geo_Location": [
            {
                "lat": 52.24602825174557,
                "long": 21.081125987218066,
                "provider": "arcgis"
            },
            {
                "lat": 52.2460662,
                "long": 21.0809772,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "CLVII Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Maria Sk\u0142odowska-Curie",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "\u015awi\u0119tokrzyska",
        "street_num": "18a",
        "webpage": "www.lo157.waw.pl",
        "Geo_Location": [
            {
                "lat": 52.23672075,
                "long": 21.011847426635,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "XLVI Liceum Og\u00f3lnokszta\u0142c\u0105ce z Oddzia\u0142ami Dwuj\u0119zycznymi",
        "patron": "Stefan Czarniecki",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "\u017buromi\u0144ska",
        "street_num": "4",
        "webpage": "www.czarniecki.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.2872410363266,
                "long": 21.04440383654555,
                "provider": "arcgis"
            },
            {
                "lat": 52.2868384,
                "long": 21.044339783436,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "Publiczne Liceum Og\u00f3lnokszta\u0142c\u0105ce im. b\u0142. ks. Romana Archutowskiego",
        "patron": "b\u0142. ks. Roman Archutowski",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Dewajtis",
        "street_num": "3",
        "webpage": "www.archutowski.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.29663164917198,
                "long": 20.958643616048025,
                "provider": "arcgis"
            },
            {
                "lat": 52.2965568,
                "long": 20.9586906,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "Liceum Og\u00f3lnokszta\u0142c\u0105ce Niepubliczne nr 40",
        "patron": "",
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "Stryje\u0144skich",
        "street_num": "21",
        "webpage": "www.szkoly@edukator.pl",
        "Geo_Location": [
            {
                "lat": 52.1376982,
                "long": 21.0474129320703,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "CV Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Zbigniew Herbert",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Vincenta van Gogha",
        "street_num": "1",
        "webpage": "www.zs.waw.pl",
        "Geo_Location": [
            {
                "lat": 52.3135966,
                "long": 20.9532725,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "XCVI Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Agnieszka Osiecka",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Zjednoczonych",
        "street_num": "24",
        "webpage": "www.zs37.waw.pl",
        "Geo_Location": [
            {
                "lat": 52.2291738,
                "long": 21.0673698,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "XLIV Liceum Og\u00f3lnokszta\u0142c\u0105ce im. Antoniego Dobiszewskiego",
        "patron": "Antoni Dobiszewski",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Dolna",
        "street_num": "6",
        "webpage": "www.lo44.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.20166065,
                "long": 21.032707279492,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "KATOLICKIE LICEUM OG\u00d3LNOKSZTA\u0141C\u0104CE IM. B\u0141. KS. ROMANA ARCHUTOWSKIEGO",
        "patron": "B\u0141.KS. ROMAN ARCHUTOWSKI",
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "DEWAJTIS",
        "street_num": "3",
        "webpage": "www.archutowski.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.29663164917198,
                "long": 20.958643616048025,
                "provider": "arcgis"
            },
            {
                "lat": 52.2965568,
                "long": 20.9586906,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "LX Liceum Og\u00f3lnokszta\u0142c\u0105ce im. Wojciecha G\u00f3rskiego",
        "patron": "Wojciech G\u00f3rski",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "To\u0142stoja",
        "street_num": "2",
        "webpage": "www.gorskilxlo.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.2836689,
                "long": 20.9322197,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "CLIX Liceum Og\u00f3lnokszta\u0142c\u0105ce im. Kr\u00f3la Jana III Sobieskiego",
        "patron": "Kr\u00f3l Jan III Sobieski",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Solipska",
        "street_num": "17/19",
        "webpage": "www.solipska.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.200996936984325,
                "long": 20.910099982226395,
                "provider": "arcgis"
            },
            {
                "lat": 52.2007808,
                "long": 20.9102023063339,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "IV Liceum Og\u00f3lnokszta\u0142c\u0105ce im. A. Mickiewicza w Warszawie",
        "patron": "Adam Mickiewicz",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Saska",
        "street_num": "59",
        "webpage": "www.mickiewicz.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.23010515,
                "long": 21.0603175667846,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "CLV Liceum OG\u00f3lnokszta\u0142cace z Oddzia\u0142ami Dwuj\u0119zycznymi",
        "patron": "im. Bohaterek Powstania Warszawskiego",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "\u017bywnego",
        "street_num": "25",
        "webpage": "www.twardagim.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.19187895,
                "long": 21.0263280138233,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "XLIII LICEUM OG\u00d3LNOKSZTA\u0141CACE",
        "patron": "IM. KAZIMIERZA WIELKIEGO",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "GANDHIEGO",
        "street_num": "13",
        "webpage": "www.lo43.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.19345205,
                "long": 21.0081229976305,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "CXXV Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Waldemar Milewicz",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Ch\u0142odna",
        "street_num": "36/46",
        "webpage": "www.zs7.eu",
        "Geo_Location": [
            {
                "lat": 52.23658121622701,
                "long": 20.9864813845289,
                "provider": "arcgis"
            },
            {
                "lat": 52.2368173,
                "long": 20.9862523571713,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "LXXXIII Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Emilian Konopczy\u0144ski",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Konopczy\u0144skiego",
        "street_num": "4",
        "webpage": "www.konopczynski.com",
        "Geo_Location": [
            {
                "lat": 52.23717165528881,
                "long": 21.02169572286344,
                "provider": "arcgis"
            },
            {
                "lat": 52.23728405,
                "long": 21.0215770950687,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "LIX Liceum Og\u00f3lnokszta\u0142c\u0105ce Mistrzostwa Sportowego im. Janusza Kusoci\u0144skiego",
        "patron": "Janusz Kusoci\u0144ski",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Samuela Bogumi\u0142a Lindego",
        "street_num": "20",
        "webpage": "www.kusy.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.2876991,
                "long": 20.9445488,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "Mi\u0119dzynarodowe Liceum Montessori w Warszawie (International Montessori High School of Warsaw)",
        "patron": "",
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "Dzierzby",
        "street_num": "26/28",
        "webpage": "www.mcem.pl",
        "Geo_Location": [
            {
                "lat": 52.13425750100961,
                "long": 21.019649223007693,
                "provider": "arcgis"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "XVI LO z Oddzia\u0142ami Dwuj\u0119zycznymi",
        "patron": "Stefania Sempo\u0142owska",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Popie\u0142uszki",
        "street_num": "5",
        "webpage": "www.sempolowska.eu",
        "Geo_Location": [
            {
                "lat": 52.264191099659406,
                "long": 20.97660185746447,
                "provider": "arcgis"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "Polonijne Liceum Og\u00f3lnokszta\u0142c\u0105ce Niepubliczne KLASYK",
        "patron": "",
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "Matuszewska",
        "street_num": "20",
        "webpage": "www.loklasyk.pl",
        "Geo_Location": [
            {
                "lat": 52.2614271,
                "long": 21.0850452,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "LXV Liceum Og\u00f3lnokszta\u0142c\u0105ce z Oddzia\u0142ami Integracyjnymi",
        "patron": "genera\u0142 J\u00f3zef Bem",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Marynarska",
        "street_num": "2/6",
        "webpage": "www.bem.waw.pl",
        "Geo_Location": [
            {
                "lat": 52.1797648,
                "long": 20.9981009332432,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "XXXIV Liceum Og\u00f3lnokszta\u0142c\u0105ce z Oddzia\u0142ami Dwuj\u0119zycznymi",
        "patron": "Miguel de Cervantes Saavedra",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Zakrzewska",
        "street_num": "24",
        "webpage": "http://www.cervantes.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.2052275545329,
                "long": 21.040348196087475,
                "provider": "arcgis"
            },
            {
                "lat": 52.2051104,
                "long": 21.0403255,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "IX Liceum Og\u00f3lnokszta\u0142c\u0105ce im. Klementny Hoffmanowej w Warszawie",
        "patron": "Klementyna Hoffmanowa",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Ho\u017ca",
        "street_num": "88",
        "webpage": "www.hoffmanowa.pl",
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
        ],
        "Ranking_Perspektyw": {
            "2019": 6,
            "2018": 8,
            "2017": 9,
            "2016": 8,
            "2015": 9
        }
    },
    {
        "name": "XXIV Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Cyprian Kamil Norwid",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Obozowa",
        "street_num": "60",
        "webpage": "www.norwid.waw.pl",
        "Geo_Location": [
            {
                "lat": 52.24741649321934,
                "long": 20.95481794310118,
                "provider": "arcgis"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "Liceum Og\u00f3lnokszta\u0142c\u0105ce nr 13",
        "patron": "",
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "Conrada",
        "street_num": "7",
        "webpage": "los13.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.271719085723625,
                "long": 20.92759920604215,
                "provider": "arcgis"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "LXVII Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Jan Nowak-Jeziora\u0144ski",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Ho\u017ca",
        "street_num": "11/15",
        "webpage": "www.jezioranski.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.22732079488151,
                "long": 21.019383706503483,
                "provider": "arcgis"
            },
            {
                "lat": 52.22715405,
                "long": 21.0193869044163,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": 8,
            "2018": 4,
            "2017": 6,
            "2016": 7,
            "2015": 3
        }
    },
    {
        "name": "LVI Liceum Og\u00f3lnokszta\u0142c\u0105ce im. Leona Kruczkowskiego",
        "patron": "Leon Kruczkowski",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Dzieci Warszawy",
        "street_num": "42",
        "webpage": "www.56lo.waw.pl",
        "Geo_Location": [
            {
                "lat": 52.19621405,
                "long": 20.8988271033959,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "XLIX LICEUM OG\u00d3LNOKSZTA\u0141C\u0104CE Z ODDZIA\u0141AMI DWUJ\u0118ZYCZNYMI",
        "patron": "Johann Wolfgang Goethe",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Fryderyka Joliot Curie",
        "street_num": "14",
        "webpage": "www.lo49.pol.pl",
        "Geo_Location": [
            {
                "lat": 52.190825009694855,
                "long": 21.00997644797728,
                "provider": "arcgis"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "XXX Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Jan \u015aniadecki",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Wolno\u015bc",
        "street_num": "1/3",
        "webpage": "www.trzydziestka.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.24104264167015,
                "long": 20.98344174686948,
                "provider": "arcgis"
            },
            {
                "lat": 52.2407896,
                "long": 20.9835030455837,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "L Liceum Og\u00f3lnokszta\u0142c\u0105ce z Oddzia\u0142ami Integracyjnymi",
        "patron": "Ruy Barbosy",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Burdzi\u0144skiego",
        "street_num": "4",
        "webpage": "www.lo50.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.2623926,
                "long": 21.0251540830941,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "CLVI Liceum Og\u00f3lnokszta\u0142c\u0105ce Integracyjne",
        "patron": "Przy \u0141azienkach Kr\u00f3lewskich",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Podchor\u0105\u017cych",
        "street_num": "49/61",
        "webpage": "lo156.pl",
        "Geo_Location": [
            {
                "lat": 52.20964746681873,
                "long": 21.03993836081136,
                "provider": "arcgis"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "I Spo\u0142eczne Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Jam Saheba Digvijay Sinhji",
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "Zawiszy",
        "street_num": "13",
        "webpage": "www.bdnr.pl",
        "Geo_Location": [
            {
                "lat": 52.2434915323159,
                "long": 20.959726887731566,
                "provider": "arcgis"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "LXVIII LICEUM OG\u00d3LNOKSZTA\u0141C\u0104CE IM TYTUSA CHA\u0141UBI\u0143SKIEGO",
        "patron": "Tytus Cha\u0142ubi\u0144ski",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Ludwika Narbutta",
        "street_num": "31",
        "webpage": "www.68lo.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.20608263835193,
                "long": 21.01509020927346,
                "provider": "arcgis"
            },
            {
                "lat": 52.2059154,
                "long": 21.0151901307392,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "I Spo\u0142eczne Liceum Og\u00f3lnokszta\u0142c\u0105ce im. E. Bu\u0142haka w Weso\u0142ej",
        "patron": "Emanuel Bu\u0142hak",
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "Armii Krajowej",
        "street_num": "9",
        "webpage": "www.szkolybulhaka.pl",
        "Geo_Location": [
            {
                "lat": 52.25087048211083,
                "long": 21.21686961226845,
                "provider": "arcgis"
            },
            {
                "lat": 52.25105915,
                "long": 21.2167880181469,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "Waldorfske Spo\u0142eczne Liceum Og\u00f3lnokszta\u0142c\u0105ce nr 1",
        "patron": "",
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "Staszica",
        "street_num": "11a",
        "webpage": "www.waldorfska.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.2360506,
                "long": 20.9681382,
                "provider": "google"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "LXXII Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "gen. Jakub Jasi\u0144ski",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Grochowska",
        "street_num": "346/348",
        "webpage": "www.jasinski.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.2478909,
                "long": 21.0538734085068,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "XXXIII Liceum Og\u00f3lnokszta\u0142c\u0105ce Dwuj\u0119zyczne",
        "patron": "Miko\u0142aj Kopernik",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "J\u00f3zefa Bema",
        "street_num": "76",
        "webpage": "kopernik.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.230998378296505,
                "long": 20.959112534017986,
                "provider": "arcgis"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": 9,
            "2018": 9,
            "2017": 10,
            "2016": 9,
            "2015": 7
        }
    },
    {
        "name": "Liceum Og\u00f3lnokszta\u0142c\u0105ce Niepubliczne Nr 43",
        "patron": "Lotnik\u00f3w Ameryka\u0144skich",
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "W\u00f3ycickiego",
        "street_num": "1/3",
        "webpage": "www.pspo.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.312408,
                "long": 20.9180574,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "Liceum Og\u00f3lnokszta\u0142c\u0105ce Przymierza Rodzin im. Jana Paw\u0142a II",
        "patron": "Jan Pawe\u0142 II",
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "Marii Grzegorzewskiej",
        "street_num": "10",
        "webpage": "loprzymierze.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.1515264,
                "long": 21.0563163,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "Niepubliczne Liceum Og\u00f3lnokszta\u0142c\u0105ce im. Roberta Schumana Fundacji PRIMUS",
        "patron": "Robert Schuman",
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "Zoltana Balo",
        "street_num": "1",
        "webpage": "www.primus.com.pl",
        "Geo_Location": [
            {
                "lat": 52.13289035,
                "long": 21.0608709322791,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "Spo\u0142eczne Liceum Og\u00f3lokszta\u0142c\u0105ce Nr 25",
        "patron": "Marzenna Oko\u0144ska",
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "Aleja Solidarno\u015bci",
        "street_num": "101 D",
        "webpage": "",
        "Geo_Location": [
            {
                "lat": 52.242799013589995,
                "long": 20.996744688325865,
                "provider": "arcgis"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "XV Liceum Og\u00f3lnokszta\u0142c\u0105ce z Oddzia\u0142ami Dwuj\u0119zycznymi",
        "patron": "Narcyza \u017bmichowska",
        "type": "Publiczna",
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
        ],
        "Ranking_Perspektyw": {
            "2019": 19,
            "2018": 14,
            "2017": 15,
            "2016": 12,
            "2015": 18
        }
    },
    {
        "name": "XIV Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Stanis\u0142aw Staszic",
        "type": "Publiczna",
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
        ],
        "Ranking_Perspektyw": {
            "2019": 1,
            "2018": 1,
            "2017": 1,
            "2016": 1,
            "2015": 1
        }
    },
    {
        "name": "XXIII Liceum Og\u00f3lnokszta\u0142c\u0105ce im. Marii Sk\u0142odowskiej - Curie",
        "patron": "Maria Sk\u0142odowska - Curie",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Naddnieprza\u0144ska",
        "street_num": "2/4",
        "webpage": "www.liceum23.waw.pl",
        "Geo_Location": [
            {
                "lat": 52.2386306,
                "long": 21.1265486187423,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "XCIX Liceum Og\u00f3lnokszta\u0142c\u0105ce z Oddzia\u0142ami Dwuj\u0119zycznymi im. Zbigniewa Herberta",
        "patron": "Zbigniew Herbert",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Fundamentowa",
        "street_num": "38/42",
        "webpage": "www.herbert99lo.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.23836791173756,
                "long": 21.0816953370938,
                "provider": "arcgis"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "2 Spo\u0142eczne Liceum Og\u00f3lnokszta\u0142c\u0105ce z Oddzia\u0142ami Mi\u0119dzynarodowymi im Paw\u0142a Jasienicy STO",
        "patron": "Pawe\u0142 Jasienica",
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "Nowowiejska",
        "street_num": "5",
        "webpage": "www.2slo.waw.pl",
        "Geo_Location": [
            {
                "lat": 52.21945915,
                "long": 21.0143601474328,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": 5,
            "2018": 5,
            "2017": 2,
            "2016": 2,
            "2015": 6
        }
    },
    {
        "name": "Liceum Og\u00f3lnokszta\u0142c\u0105ce Niepubliczne Kolegium \u015bw. Stanis\u0142awa Kostki Katolickiego Stowarzyszenia Wychowawc\u00f3w",
        "patron": "\u015bw. Stanis\u0142aw Kostka",
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "Bobrowiecka",
        "street_num": "9",
        "webpage": "www.kolegium-ksw.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.2021026,
                "long": 21.0461782,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "Spo\u0142eczne Liceum Og\u00f3lnokszta\u0142c\u0105ce nr 7",
        "patron": "Bronis\u0142aw Geremek",
        "type": "Niepubliczna",
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "Liceum Og\u00f3lnokszta\u0142c\u0105ce nr 50 Stowarzyszenia Kultury i Edukacji",
        "patron": "",
        "type": "Niepubliczna",
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
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "XX Liceum Og\u00f3lnokszta\u0142c\u0105ce im. Boles\u0142awa Chrobrego",
        "patron": "Boles\u0142aw Chrobry",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Objazdowa",
        "street_num": "3",
        "webpage": "www.zs40.pl",
        "Geo_Location": [
            {
                "lat": 52.25783207271054,
                "long": 21.06151910626718,
                "provider": "arcgis"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "Liceum Og\u00f3lnokszta\u0142c\u0105ce Niepubliczne Nr 27 Szko\u0142a Rodzinna",
        "patron": "",
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "Kruszyny",
        "street_num": "28",
        "webpage": "szkolarodzinna.pl",
        "Geo_Location": [
            {
                "lat": 52.21727747735032,
                "long": 21.216485640573648,
                "provider": "arcgis"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "Katolickie Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "\u015bw. Pawe\u0142 z Tarsu",
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "Poezji",
        "street_num": "19",
        "webpage": "kulszkola.pl",
        "Geo_Location": [
            {
                "lat": 52.15733785,
                "long": 21.202308340258,
                "provider": "osm"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
    {
        "name": "Liceum Og\u00f3lnokszta\u0142c\u0105ce Szko\u0142a Lider\u00f3w",
        "patron": "",
        "type": "Niepubliczna",
        "city": "WARSZAWA",
        "street": "Bobrowiecka",
        "street_num": "9",
        "webpage": "",
        "Geo_Location": [
            {
                "lat": 52.1999747,
                "long": 21.04404,
                "provider": "google"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": "",
            "2018": "",
            "2017": "",
            "2016": "",
            "2015": ""
        }
    },
   {
        "name": "XXVII Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Tadeusz Czacki",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Polna",
        "street_num": "5",
        "webpage": "czacki.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.2151576,
                "long": 21.0186636,
                "provider": "google"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": 4,
            "2018": 6,
            "2017": 3,
            "2016": 6,
            "2015": 4
        }
    },
   {
        "name": "XL Liceum Og\u00f3lnokszta\u0142c\u0105ce im. Stefana \u017beromskiego",
        "patron": "Stefan \u017beromski",
        "type": "Publiczna",
        "city": "WARSZAWA",
        "street": "Platynowa",
        "street_num": "1",
        "webpage": "zerowmski.waw.pl",
        "Geo_Location": [
            {
                "lat": 52.2267583,
                "long": 20.9903905,
                "provider": "google"
            }
        ],
        "Ranking_Perspektyw": {
            "2019": 13,
            "2018": 19,
            "2017": 14,
            "2016": 16,
            "2015": 17
        }
    }
]
*/}).toString().split('\n').slice(1, -1).join('\n');


	console.log("Loadad JSON data");
	data_JSON_tbl= JSON.parse(data);
    //console.log(data_JSON_tbl[0]);
    //console.log(data_JSON_tbl[1]);
}

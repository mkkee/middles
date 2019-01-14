	var data_JSON_tbl

    function loadJSON(callback) {   
	data = (function(){ /*
[
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
    },
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
    },
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
    },
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
    },
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
    },
    {
        "name": "XLII LICEUM OG\u00d3LNOKSZTA\u0141C\u0104CE IM. MARII KONOPNICKIEJ",
        "patron": "MARIA KONOPNICKA",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "MADALI\u0143SKIEGO",
        "street_num": "22",
        "webpage": "www.lokonopnicka.edupage.org",
        "Geo_Location": [
            {
                "lat": 52.204531301199886,
                "long": 21.017062286456042,
                "provider": "arcgis"
            },
            {
                "lat": 52.2050326,
                "long": 21.0177145119791,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XXXV Liceum Og\u00f3lnokszta\u0142c\u0105ce z Oddzia\u0142ami Dwuj\u0119zycznymi im. Boles\u0142awa Prusa",
        "patron": "Boles\u0142aw Prus",
		"type":"Publiczna",
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
        ]
    },
    {
        "name": "XXVIII Liceum Og\u00f3lnokszta\u0142c\u0105ce im. Jana Kochanowskiego",
        "patron": "Jan Kochanowski",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Wiktorska",
        "street_num": "99",
        "webpage": "ww.kochanowski.waw.pl",
        "Geo_Location": [
            {
                "lat": 52.1975426344568,
                "long": 21.004083088406652,
                "provider": "arcgis"
            },
            {
                "lat": 52.1970344,
                "long": 21.0042872642135,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "V Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Ksi\u0105\u017c\u0119 J\u00f3zef Poniatowski",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Nowolipie",
        "street_num": "8",
        "webpage": "www.vlo.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.2443618370938,
                "long": 20.995558010531575,
                "provider": "arcgis"
            },
            {
                "lat": 52.2450553,
                "long": 20.9955413453064,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "NOVA LICEUM OGOLNOKSZTACACE KLUCZOWYCH KOMPETENCJI MODZIE\u017bY",
        "patron": "",
		"type":"Niepubliczna",
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
        ]
    },
    {
        "name": "Spo\u0142eczne Liceum Og\u00f3lnokszta\u0142c\u0105ce nr 4 imienia Batalionu AK Parasol w Warszawie",
        "patron": "",
		"type":"Niepubliczna",
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
        ]
    },
    {
        "name": "Prywatne Liceum Og\u00f3lnokszta\u0142c\u0105ce im. Zofii i J\u0119drzeja Moraczewskich",
        "patron": "Zofia i J\u0119drzej Moraczewscy",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Pi\u0142sudskiego",
        "street_num": "73",
        "webpage": "",
        "Geo_Location": [
            {
                "lat": 52.235282304200986,
                "long": 21.254466642910906,
                "provider": "arcgis"
            },
            {
                "lat": 52.2412731,
                "long": 21.0136545,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "LXX Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Aleksander Kami\u0144ski",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Edwarda Dembowskiego",
        "street_num": "1",
        "webpage": "www.kamyk.warszawa.pl",
        "Geo_Location": [
            {
                "lat": 52.15372053234455,
                "long": 21.033011524496025,
                "provider": "arcgis"
            },
            {
                "lat": 52.1537326,
                "long": 21.0340932896763,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XXII LO z Oddzia\u0142ami Dwuj\u0119zycznymi",
        "patron": " Jose Marti",
		"type":"Publiczna",
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
        ]
    },
    {
        "name": "CXI LICEUM OG\u00d3LNOKSZTA\u0141C\u0104CE Z ODDZIA\u0141AMI INTEGRACYJNYMI",
        "patron": "STEFAN KISIELEWSKI",
		"type":"Publiczna",
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
        ]
    },
    {
        "name": "XXVI Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "gen. Henryk Jankowski Kuba",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Alpejska",
        "street_num": "16",
        "webpage": "www.26lo.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.218192553955994,
                "long": 21.169120441860414,
                "provider": "arcgis"
            },
            {
                "lat": 52.2177808,
                "long": 21.1688565877646,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "LXIII Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Lajos Kossuth",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Ludwika Hirszfelda",
        "street_num": "11",
        "webpage": "www.liceum63.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.144692150152935,
                "long": 21.040948499019063,
                "provider": "arcgis"
            },
            {
                "lat": 52.1445881,
                "long": 21.0402946743936,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "Wielokulturowe Liceum Og\u00f3lnokszta\u0142c\u0105ce im. Jacka Kuronia",
        "patron": "Jacek Kuro\u0144",
		"type":"Niepubliczna",
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
        ]
    },
    {
        "name": "CXXXVII Liceum Og\u00f3lnokszta\u0142c\u0105ce z Oddzia\u0142ami Dwuj\u0119zycznymi",
        "patron": "im. Roberta Schumana",
		"type":"Publiczna",
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
        ]
    }
]
*/}).toString().split('\n').slice(1, -1).join('\n');


	console.log("Loadad JSON data");
	data_JSON_tbl= JSON.parse(data);
    //console.log(data_JSON_tbl[0]);
    //console.log(data_JSON_tbl[1]);
}

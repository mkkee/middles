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
    },
    {
        "name": "XII Liceum Og\u00f3lnokszta\u0142cace",
        "patron": "Henryk Sienkiewicz",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Sienna",
        "street_num": "53",
        "webpage": "12lo.warszawa.pl",
        "Geo_Location": [
            {
                "lat": 52.23128075434262,
                "long": 20.998725159328178,
                "provider": "arcgis"
            },
            {
                "lat": 52.23096455,
                "long": 20.9990018368459,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "Niepubliczne Liceum Og\u00f3lnokszta\u0142c\u0105ce Nr 61 im. Stefana Kisielewskiego",
        "patron": "Stefan Kisielewski",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Przy Ba\u017cantarni",
        "street_num": "3",
        "webpage": "www.nlo61.pl",
        "Geo_Location": [
            {
                "lat": 52.13769504576166,
                "long": 21.064668331005613,
                "provider": "arcgis"
            },
            {
                "lat": 52.1373565,
                "long": 21.0657662473481,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "Spo\u0142eczne Liceum Og\u00f3lnokszta\u0142c\u0105ce Nr 3  STO",
        "patron": "",
		"type":"Niepubliczna",
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
        ]
    },
    {
        "name": "III Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "gen. J\u00f3zef Sowi\u0144ski",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Rogali\u0144ska",
        "street_num": "2",
        "webpage": "www.lo3.waw.ids.pl",
        "Geo_Location": [
            {
                "lat": 52.230573953372954,
                "long": 20.971309897455093,
                "provider": "arcgis"
            },
            {
                "lat": 52.2306663,
                "long": 20.9717551773571,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XXXVIII LIceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "STANIS\u0141AW KOSTKA POTOCKI",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "WIERTNICZA",
        "street_num": "26",
        "webpage": "WWW.KOSTKA-POTOCKI.EDU.PL",
        "Geo_Location": [
            {
                "lat": 52.168815093542555,
                "long": 21.0844152838303,
                "provider": "arcgis"
            },
            {
                "lat": 52.1690433,
                "long": 21.0847658,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "LVIII Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Krzysztof Kamil Baczy\u0144ski",
		"type":"Publiczna",
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
        ]
    },
    {
        "name": "Liceum Og\u00f3lnokszta\u0142c\u0105ce LIFESKILLS Nr 1",
        "patron": "",
		"type":"Niepubliczna",
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
        ]
    },
    {
        "name": "I Katolickie Liceum Spo\u0142eczne",
        "patron": "",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Bobrowiecka",
        "street_num": "9",
        "webpage": "www.ikls.edu.pl",
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
        "name": "Liceum Og\u00f3lnokszta\u0142c\u0105ce Niepubliczne nr76",
        "patron": "Wis\u0142awa Szymborska",
		"type":"Niepubliczna",
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
        ]
    },
    {
        "name": "Akademickie Liceum Og\u00f3lnokszta\u0142c\u0105ce Wy\u017cszej Szko\u0142y Mened\u017cerskiej w Warszawie",
        "patron": "",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Kaw\u0119czy\u0144ska",
        "street_num": "36",
        "webpage": "www.wojnicka.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.25751894809282,
                "long": 21.056926667089794,
                "provider": "arcgis"
            },
            {
                "lat": 52.2571443,
                "long": 21.0579296454963,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "II Liceum Og\u00f3lnokszta\u0142c\u0105ce z Oddzia\u0142ami Dwuj\u0119zycznymi",
        "patron": "Stefan Batory",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "My\u015bliwiecka",
        "street_num": "6",
        "webpage": "http://www.batory.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.22198246883794,
                "long": 21.034309121991985,
                "provider": "arcgis"
            },
            {
                "lat": 52.22285165,
                "long": 21.0347710086447,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XXV Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "J\u00f3zef Wybicki",
		"type":"Publiczna",
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
        ]
    },
    {
        "name": "XXI Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Hugo Ko\u0142\u0142\u0105taj",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Gr\u00f3jecka",
        "street_num": "93",
        "webpage": "www.liceum21.waw.ids.pl",
        "Geo_Location": [
            {
                "lat": 52.21033433885414,
                "long": 20.97621147997511,
                "provider": "arcgis"
            },
            {
                "lat": 52.2098787,
                "long": 20.9778124627466,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XCIV Liceum Og\u00f3lnokszta\u0142c\u0105ce im. gen. St.Maczka",
        "patron": "gen Stanis\u0142aw Maczek",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Gwia\u017adzista",
        "street_num": "35",
        "webpage": "www.maczek.waw.pl",
        "Geo_Location": [
            {
                "lat": 52.28585650712645,
                "long": 20.977182876882868,
                "provider": "arcgis"
            },
            {
                "lat": 52.2863904,
                "long": 20.9774411,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "CLX Liceum Og\u00f3lnokszta\u0142cace im. gen. dyw. Stefana Roweckiego Grota",
        "patron": "gen.dyw. Stefan Rowecki Grot",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Siemie\u0144skiego",
        "street_num": "6",
        "webpage": "www.160lo.pl",
        "Geo_Location": [
            {
                "lat": 52.20631497169482,
                "long": 20.976172476946275,
                "provider": "arcgis"
            },
            {
                "lat": 52.20673615,
                "long": 20.9749547850975,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "LXXXVI Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Batalion Zo\u015bka",
		"type":"Publiczna",
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
        ]
    },
    {
        "name": "Liceum Og\u00f3lnokszta\u0142c\u0105ce Niepubliczne nr 29",
        "patron": "Ignacy Jan Paderewski",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Powazkowska",
        "street_num": "90",
        "webpage": "www.lon29.prv.pl",
        "Geo_Location": [
            {
                "lat": 52.262322681545186,
                "long": 20.954180721256957,
                "provider": "arcgis"
            },
            {
                "lat": 52.26190825,
                "long": 20.9510809465854,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "LXXXVIII Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Micha\u0142 Konarski",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Okopowa",
        "street_num": "55a",
        "webpage": "www.konar.info",
        "Geo_Location": [
            {
                "lat": 52.248573177909854,
                "long": 20.97896755340772,
                "provider": "arcgis"
            },
            {
                "lat": 52.24836835,
                "long": 20.9767648274455,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "CII Liceum Og\u00f3lnokszta\u0142c\u0105ce z Oddzia\u0142ami Integracyjnymi",
        "patron": "",
		"type":"Publiczna",
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
        ]
    },
    {
        "name": "Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "",
		"type":"Niepubliczna",
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
        ]
    },
	    {
        "name": "CLVII Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Maria Sk\u0142odowska-Curie",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "\u015awi\u0119tokrzyska",
        "street_num": "18a",
        "webpage": "www.lo157.waw.pl",
        "Geo_Location": [
            {
                "lat": 52.2359293372667,
                "long": 21.01222261668318,
                "provider": "arcgis"
            },
            {
                "lat": 52.23672075,
                "long": 21.011847426635,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XLVI Liceum Og\u00f3lnokszta\u0142c\u0105ce z Oddzia\u0142ami Dwuj\u0119zycznymi",
        "patron": "Stefan Czarniecki",
		"type":"Publiczna",
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
        ]
    },
    {
        "name": "Publiczne Liceum Og\u00f3lnokszta\u0142c\u0105ce im. b\u0142. ks. Romana Archutowskiego",
        "patron": "b\u0142. ks. Roman Archutowski",
		"type":"Publiczna",
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
        ]
    },
    {
        "name": "Liceum Og\u00f3lnokszta\u0142c\u0105ce Niepubliczne nr 40",
        "patron": "",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Stryje\u0144skich",
        "street_num": "21",
        "webpage": "www.szkoly@edukator.pl",
        "Geo_Location": [
            {
                "lat": 52.13782318232458,
                "long": 21.04903440694839,
                "provider": "arcgis"
            },
            {
                "lat": 52.1376982,
                "long": 21.0474129320703,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "CV Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Zbigniew Herbert",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Vincenta van Gogha",
        "street_num": "1",
        "webpage": "www.zs.waw.pl",
        "Geo_Location": [
            {
                "lat": 52.314227637198094,
                "long": 20.953425437128562,
                "provider": "arcgis"
            },
            {
                "lat": 52.3135966,
                "long": 20.9532725,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XCVI Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Agnieszka Osiecka",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Zjednoczonych",
        "street_num": "24",
        "webpage": "www.zs37.waw.pl",
        "Geo_Location": [
            {
                "lat": 52.229335863696875,
                "long": 21.06619331836791,
                "provider": "arcgis"
            },
            {
                "lat": 52.2291738,
                "long": 21.0673698,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XLIV Liceum Og\u00f3lnokszta\u0142c\u0105ce im. Antoniego Dobiszewskiego",
        "patron": "Antoni Dobiszewski",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Dolna",
        "street_num": "6",
        "webpage": "www.lo44.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.20140927840597,
                "long": 21.032983394656448,
                "provider": "arcgis"
            },
            {
                "lat": 52.20166065,
                "long": 21.032707279492,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "KATOLICKIE LICEUM OG\u00d3LNOKSZTA\u0141C\u0104CE IM. B\u0141. KS. ROMANA ARCHUTOWSKIEGO",
        "patron": "B\u0141.KS. ROMAN ARCHUTOWSKI",
		"type":"Niepubliczna",
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
        ]
    },
    {
        "name": "LX Liceum Og\u00f3lnokszta\u0142c\u0105ce im. Wojciecha G\u00f3rskiego",
        "patron": "Wojciech G\u00f3rski",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "To\u0142stoja",
        "street_num": "2",
        "webpage": "www.gorskilxlo.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.283895789341585,
                "long": 20.93169214452608,
                "provider": "arcgis"
            },
            {
                "lat": 52.2836689,
                "long": 20.9322197,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "CLIX Liceum Og\u00f3lnokszta\u0142c\u0105ce im. Kr\u00f3la Jana III Sobieskiego",
        "patron": "Kr\u00f3l Jan III Sobieski",
		"type":"Publiczna",
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
        ]
    },
    {
        "name": "IV Liceum Og\u00f3lnokszta\u0142c\u0105ce im. A. Mickiewicza w Warszawie",
        "patron": "Adam Mickiewicz",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Saska",
        "street_num": "59",
        "webpage": "www.mickiewicz.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.22978610059195,
                "long": 21.06213684561601,
                "provider": "arcgis"
            },
            {
                "lat": 52.23010515,
                "long": 21.0603175667846,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "CLV Liceum OG\u00f3lnokszta\u0142cace z Oddzia\u0142ami Dwuj\u0119zycznymi",
        "patron": "im. Bohaterek Powstania Warszawskiego",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "\u017bywnego",
        "street_num": "25",
        "webpage": "www.twardagim.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.1921447510244,
                "long": 21.025752699290138,
                "provider": "arcgis"
            },
            {
                "lat": 52.19187895,
                "long": 21.0263280138233,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XLIII LICEUM OG\u00d3LNOKSZTA\u0141CACE",
        "patron": "IM. KAZIMIERZA WIELKIEGO",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "GANDHIEGO",
        "street_num": "13",
        "webpage": "www.lo43.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.23388500000004,
                "long": 21.012127830000054,
                "provider": "arcgis"
            },
            {
                "lat": 52.19345205,
                "long": 21.0081229976305,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "CXXV Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Waldemar Milewicz",
		"type":"Publiczna",
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
        ]
    },
    {
        "name": "LXXXIII Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Emilian Konopczy\u0144ski",
		"type":"Publiczna",
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
        ]
    },
    {
        "name": "LIX Liceum Og\u00f3lnokszta\u0142c\u0105ce Mistrzostwa Sportowego im. Janusza Kusoci\u0144skiego",
        "patron": "Janusz Kusoci\u0144ski",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Samuela Bogumi\u0142a Lindego",
        "street_num": "20",
        "webpage": "www.kusy.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.28778584098893,
                "long": 20.945197641525937,
                "provider": "arcgis"
            },
            {
                "lat": 52.2876991,
                "long": 20.9445488,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "Mi\u0119dzynarodowe Liceum Montessori w Warszawie (International Montessori High School of Warsaw)",
        "patron": "",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Dzierzby",
        "street_num": "26/28",
        "webpage": "www.mcem.pl",
        "Geo_Location": [
            {
                "lat": 52.13425750100961,
                "long": 21.019649223007693,
                "provider": "arcgis"
            },
            {
                "lat": 52.1342189,
                "long": 21.0214297,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XVI LO z Oddzia\u0142ami Dwuj\u0119zycznymi",
        "patron": "Stefania Sempo\u0142owska",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Popie\u0142uszki",
        "street_num": "5",
        "webpage": "www.sempolowska.eu",
        "Geo_Location": [
            {
                "lat": 52.264191099659406,
                "long": 20.97660185746447,
                "provider": "arcgis"
            },
            {
                "lat": 52.2643382,
                "long": 20.975558555739,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "Polonijne Liceum Og\u00f3lnokszta\u0142c\u0105ce Niepubliczne KLASYK",
        "patron": "",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Matuszewska",
        "street_num": "20",
        "webpage": "www.loklasyk.pl",
        "Geo_Location": [
            {
                "lat": 52.26303951579489,
                "long": 21.082900645416085,
                "provider": "arcgis"
            },
            {
                "lat": 52.2614271,
                "long": 21.0850452,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "LXV Liceum Og\u00f3lnokszta\u0142c\u0105ce z Oddzia\u0142ami Integracyjnymi",
        "patron": "genera\u0142 J\u00f3zef Bem",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Marynarska",
        "street_num": "2/6",
        "webpage": "www.bem.waw.pl",
        "Geo_Location": [
            {
                "lat": 52.17906729672783,
                "long": 20.998283237318834,
                "provider": "arcgis"
            },
            {
                "lat": 52.1797648,
                "long": 20.9981009332432,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XXXIV Liceum Og\u00f3lnokszta\u0142c\u0105ce z Oddzia\u0142ami Dwuj\u0119zycznymi",
        "patron": "Miguel de Cervantes Saavedra",
		"type":"Publiczna",
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
        ]
    },
    {
        "name": "IX Liceum Og\u00f3lnokszta\u0142c\u0105ce im. Klementny Hoffmanowej w Warszawie",
        "patron": "Klementyna Hoffmanowa",
		"type":"Publiczna",
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
        ]
    },
    {
        "name": "XXIV Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Cyprian Kamil Norwid",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Obozowa",
        "street_num": "60",
        "webpage": "www.norwid.waw.pl",
        "Geo_Location": [
            {
                "lat": 52.24741649321934,
                "long": 20.95481794310118,
                "provider": "arcgis"
            },
            {
                "lat": 52.24750855,
                "long": 20.9543012966147,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "Liceum Og\u00f3lnokszta\u0142c\u0105ce nr 13",
        "patron": "",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Conrada",
        "street_num": "7",
        "webpage": "los13.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.271719085723625,
                "long": 20.92759920604215,
                "provider": "arcgis"
            },
            {
                "lat": 52.27095485,
                "long": 20.9277363649231,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "LXVII Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Jan Nowak-Jeziora\u0144ski",
		"type":"Publiczna",
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
        ]
    },
    {
        "name": "LVI Liceum Og\u00f3lnokszta\u0142c\u0105ce im. Leona Kruczkowskiego",
        "patron": "Leon Kruczkowski",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Dzieci Warszawy",
        "street_num": "42",
        "webpage": "www.56lo.waw.pl",
        "Geo_Location": [
            {
                "lat": 52.195523768855324,
                "long": 20.898306975214588,
                "provider": "arcgis"
            },
            {
                "lat": 52.19621405,
                "long": 20.8988271033959,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XLIX LICEUM OG\u00d3LNOKSZTA\u0141C\u0104CE Z ODDZIA\u0141AMI DWUJ\u0118ZYCZNYMI",
        "patron": "Johann Wolfgang Goethe",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Fryderyka Joliot Curie",
        "street_num": "14",
        "webpage": "www.lo49.pol.pl",
        "Geo_Location": [
            {
                "lat": 52.190825009694855,
                "long": 21.00997644797728,
                "provider": "arcgis"
            },
            {
                "lat": 52.19040575,
                "long": 21.0108585882282,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XXX Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Jan \u015aniadecki",
		"type":"Publiczna",
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
        ]
    },
    {
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
        "name": "CLVI Liceum Og\u00f3lnokszta\u0142c\u0105ce Integracyjne",
        "patron": "Przy \u0141azienkach Kr\u00f3lewskich",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Podchor\u0105\u017cych",
        "street_num": "49/61",
        "webpage": "lo156.pl",
        "Geo_Location": [
            {
                "lat": 52.20964746681873,
                "long": 21.03993836081136,
                "provider": "arcgis"
            },
            {
                "lat": 52.20933785,
                "long": 21.0397036104228,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "I Spo\u0142eczne Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "Jam Saheba Digvijay Sinhji",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Zawiszy",
        "street_num": "13",
        "webpage": "www.bdnr.pl",
        "Geo_Location": [
            {
                "lat": 52.2434915323159,
                "long": 20.959726887731566,
                "provider": "arcgis"
            },
            {
                "lat": 52.24311015,
                "long": 20.9599903352559,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "LXVIII LICEUM OG\u00d3LNOKSZTA\u0141C\u0104CE IM TYTUSA CHA\u0141UBI\u0143SKIEGO",
        "patron": "Tytus Cha\u0142ubi\u0144ski",
		"type":"Publiczna",
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
        ]
    },
    {
        "name": "I Spo\u0142eczne Liceum Og\u00f3lnokszta\u0142c\u0105ce im. E. Bu\u0142haka w Weso\u0142ej",
        "patron": "Emanuel Bu\u0142hak",
		"type":"Niepubliczna",
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
        ]
    },
    {
        "name": "Waldorfske Spo\u0142eczne Liceum Og\u00f3lnokszta\u0142c\u0105ce nr 1",
        "patron": "",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Wolno\u015b\u0107",
        "street_num": "2a",
        "webpage": "www.waldorfska.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.24085930725942,
                "long": 20.984692452132215,
                "provider": "arcgis"
            },
            {
                "lat": 52.2416617,
                "long": 20.9847688,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "LXXII Liceum Og\u00f3lnokszta\u0142c\u0105ce",
        "patron": "gen. Jakub Jasi\u0144ski",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "Grochowska",
        "street_num": "346/348",
        "webpage": "www.jasinski.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.24731446436588,
                "long": 21.05385782959199,
                "provider": "arcgis"
            },
            {
                "lat": 52.2478909,
                "long": 21.0538734085068,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "XXXIII Liceum Og\u00f3lnokszta\u0142c\u0105ce Dwuj\u0119zyczne",
        "patron": "Miko\u0142aj Kopernik",
		"type":"Publiczna",
        "city": "WARSZAWA",
        "street": "J\u00f3zefa Bema",
        "street_num": "76",
        "webpage": "kopernik.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.230998378296505,
                "long": 20.959112534017986,
                "provider": "arcgis"
            },
            {
                "lat": 52.2309609,
                "long": 20.9600586973314,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "Liceum Og\u00f3lnokszta\u0142c\u0105ce Niepubliczne Nr 43",
        "patron": "Lotnik\u00f3w Ameryka\u0144skich",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "W\u00f3ycickiego",
        "street_num": "1/3",
        "webpage": "www.pspo.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.3130265165042,
                "long": 20.9173408364013,
                "provider": "arcgis"
            },
            {
                "lat": 52.312408,
                "long": 20.9180574,
                "provider": "osm"
            }
        ]
    },
    {
        "name": "Liceum Og\u00f3lnokszta\u0142c\u0105ce Przymierza Rodzin im. Jana Paw\u0142a II",
        "patron": "Jan Pawe\u0142 II",
		"type":"Niepubliczna",
        "city": "WARSZAWA",
        "street": "Marii Grzegorzewskiej",
        "street_num": "10",
        "webpage": "loprzymierze.edu.pl",
        "Geo_Location": [
            {
                "lat": 52.15050251292619,
                "long": 21.055559556090763,
                "provider": "arcgis"
            },
            {
                "lat": 52.1515264,
                "long": 21.0563163,
                "provider": "osm"
            }
        ]
    },
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

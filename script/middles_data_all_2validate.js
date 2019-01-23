	var data_JSON_tbl

    function loadJSON(callback) {   
	data = (function(){ /*
[
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

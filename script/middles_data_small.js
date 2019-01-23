	var data_JSON_tbl

    function loadJSON(callback) {   
	data = (function(){ /*
[    
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
    }
]
*/}).toString().split('\n').slice(1, -1).join('\n');


	console.log("Loadad JSON data");
	data_JSON_tbl= JSON.parse(data);
    //console.log(data_JSON_tbl[0]);
    //console.log(data_JSON_tbl[1]);
}

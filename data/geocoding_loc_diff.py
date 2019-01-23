#adds geocoding info based on school address from 
import geocoder;
import json;
import sys;
import time;
import copy;

input_file = sys.argv[1];
output_file = sys.argv[2];

with open(input_file, encoding='utf-8') as f:
    data = json.load(f)

o = [];

i=0;

for p in data:
	i=i+1;
#	print(str(i), " - ", p['name'], p['city'], p['street'], p['street_num']);

#	d1={}
#	d1['lat'] = g[0].lat
#	d1['long'] = g[0].lng
#	d1['provider'] = 'osm'
#	latlong.append(d1)
	
	geoloc = p['Geo_Location'];

	if len(geoloc) == 2:
		if abs(geoloc[0]['lat'] - geoloc[1]['lat']) + abs(geoloc[0]['long'] - geoloc[1]['long']) > 0.0004:
			print(str(i), " - ", p['name'], p['city'], p['street'], p['street_num']);
			print(abs(geoloc[0]['lat'] - geoloc[1]['lat']));
			print(abs(geoloc[0]['long'] - geoloc[1]['long']));
			g1 = [];
			g2 = [];
			g1.append(p['Geo_Location'][0]);
			g1.append(p['Geo_Location'][0]);
			g2.append(p['Geo_Location'][1]);
			g2.append(p['Geo_Location'][1]);
			n1 = "ARC" + p['name'];
			n2 = "OSM" + p['name'];
			p1 = copy.deepcopy(p);
			p2 = copy.deepcopy(p);

			#print(p1)
			#print(p2)

			p1['name'] = n1;
			p1['Geo_Location'] = g1;
			#print(o);
			o.append(p1);
			#print(o);
			
			p2['name'] = n2;
			p2['Geo_Location'] = g2;
			o.append(p2);
			#print(o);
			#exit();


#here we need to dum new json

print(len(o));
fo = open(output_file, "w")
#fo = open(output_file, "w", encoding='utf-8')
json.dump(o, fo, indent=4);
fo.close()

	
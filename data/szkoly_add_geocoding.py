#adds geocoding info based on school address from 
import geocoder;
import json;
import sys;
import time;

input_file = sys.argv[1];
output_file = sys.argv[2];

#g = geocoder.arcgis('Warszawa Brzodzik 6')

#for result in g:
#	print(result.address, result.latlng)
#	print(result.lat, result.lng)


with open(input_file, encoding='utf-8') as f:
    data = json.load(f)

#print(data)
#print()
#print(data[0])

o = [];

i=0;
for p in data:
	i=i+1;
#	time.sleep(1)
	print(str(i), " - ", p['name'], p['city'], p['street'], p['street_num']);
#	g = geocoder.osm(p['city']+' '+p['street']+' '+p['street_num'])

	g = geocoder.arcgis(p['city']+' '+p['street']+' '+p['street_num'])
	#long lat dict from diff providers
	latlong = []
	d1={}
	d1['lat'] = g[0].lat
	d1['long'] = g[0].lng
	d1['provider'] = 'arcgis'
	latlong.append(d1)

	g = geocoder.osm(p['city']+' '+p['street']+' '+p['street_num'])
	d1={}
	d1['lat'] = g[0].lat
	d1['long'] = g[0].lng
	d1['provider'] = 'osm'
	latlong.append(d1)
	
	p['Geo_Location'] = latlong;
	o.append(p);
	
#	print(p);
#	for result in g:
#		print(result.lat, result.lng)
#		#print(result.address, result.latlng)

#here we need to dum new json

fo = open(output_file, "w")
#fo = open(output_file, "w", encoding='utf-8')
json.dump(o, fo, indent=4);
fo.close()

	
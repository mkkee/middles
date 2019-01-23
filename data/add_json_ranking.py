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

	d1={}
	d1['2019'] = ''
	d1['2018'] = ''
	d1['2017'] = ''
	d1['2016'] = ''
	d1['2015'] = ''

	p['Ranking_Perspektyw'] = d1;
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

	
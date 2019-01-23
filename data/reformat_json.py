#adds geocoding info based on school address from 
import geocoder;
import json;
import sys;
import time;

input_file = sys.argv[1];
output_file = sys.argv[2];

with open(input_file, encoding='utf-8') as f:
    data = json.load(f)

o = [];

for p in data:
	o.append(p);
	
fo = open(output_file, "w")
json.dump(o, fo, indent=4);
fo.close()

	
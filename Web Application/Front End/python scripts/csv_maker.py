import csv
import random
import time

'''
test change
'''
document_name = 'sensor.csv'
field_names = ['time', 'temperature', 'humidity', 'pressure', 'altitude']

'''
bme280 sensor ranges

Temperature:    -40     to      85      C
Humidity:         0     to      100     %
Pressure:       300     to      1100    hPa
Altitude:         0     to      9144   m

[time.time(),random.randrange(0, 50), random.randrange(0, 100), random.randrange(300, 1100), random.randrange(0, 9144)]
'''
file = open(document_name, 'a', newline='')
writer = csv.writer(file)
writer.writerow([time.time(),random.randrange(0, 50), random.randrange(0, 100), random.randrange(300, 1100), random.randrange(0, 9144)])

file.close()
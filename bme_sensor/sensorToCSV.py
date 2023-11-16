import smbus2
import bme280
import csv
import time

# grab / assign sensor information
port = 1
address = 0x77
bus = smbus2.SMBus(port)
calibration_params = bme280.load_calibration_params(bus, address)

# initialize data
data = None
data_collection = []
second = 0

# csv file setup
fieldNames = ['timestamp', 'temperature', 'humidity', 'pressure']
document_names = ['seconds_sensor.csv']

def updateSensor(): # updates all important sensor information
    global data
    global data_collection
    global second 
    
    data = bme280.sample(bus, address, calibration_params)
    data_collection = [data.timestamp, data.temperature, data.humidity, data.pressure]
    second = data.timestamp.second

while True:
    updateSensor()
    
    with open(document_names[0],'a', newline='') as seconds_csv:
        writer = csv.writer(seconds_csv, delimiter=' ')
        writer.writerow(data_collection)
        print(second)
        seconds_csv.close()
        time.sleep(1)

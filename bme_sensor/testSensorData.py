'''
Things we need to test.

Sensor range exceptions.
Document writing.
Sensor update.
'''
import unittest
from datetime import datetime
from SensorData import SensorData
from unittest.mock import patch

class testSensorData(unittest.TestCase):
    
    '''
    sensor range
    Pressure
		300 hpa - 1100 hpa
	Temperature
		-40 C - 85C
	Humidity
		0 - 100%
    '''
    
    def setUp(self):
        self.good_sensor = SensorData(1, 0x77, 'good_sensor')
        self.good_sensor.data.temperature = 0
        self.good_sensor.data.pressure = 500
        self.good_sensor.data.humidity = 50
                     
        self.bad_sensor = SensorData(1, 0x77, 'bad_sensor')
        self.bad_sensor.data.temperature = 110
        self.bad_sensor.data.pressure = 11000
        self.bad_sensor.data.humidity = 110
        
        self.bad_temp_return = {
            "id": 0,
            "timestamp": datetime.now(),
            "temperature": 86.563, # temperature out of range
            "pressure": 980.91,
            "humidity": 48.41
            }
        self.bad_pressure_return = {
            "id": 0,
            "timestamp": datetime.now(),
            "temperature": 36.563, # temperature out of range
            "pressure": 200.91,
            "humidity": 48.41
            }
        self.bad_humidity_return = {
            "id": 0,
            "timestamp": datetime.now(),
            "temperature": 36.563, # temperature out of range
            "pressure": 350.91,
            "humidity": -23.41
            }
        
    @patch('bme280.sample')
    def test_Update(self, mock_sample):
        
        mock_sample.return_value = self.bad_temp_return
        
        with self.assertRaises(ValueError):
            self.bad_sensor.update()
                
if __name__ == '__main__':
    unittest.main()
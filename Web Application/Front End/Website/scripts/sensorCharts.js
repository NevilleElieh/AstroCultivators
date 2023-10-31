// Collecting related divs
const humidityCanvas = document.getElementById("humidity-canvas").getContext("2d");
const temperatureCanvas = document.getElementById("temperature-canvas");
const pressureCanvas = document.getElementById("pressure-canvas");

const dummyData = [
    [1698627883.1651702,36,70,546,4932],
    [1698627883.1651702,46,52,596,7155],
    [1698627883.1651702,17,59,588,5955],
    [1698627883.1651702,6,66,710,7351],
    [1698627883.1651702,16,7,522,7096]
]

const getTimeLabels = () => {
    labels = [];
    
    dummyData.forEach(element => {
        labels.push(element[0]);
    });

    return labels;
}

const getTempData = () => {
    data = [];

    dummyData.forEach(element => {
        data.push(element[1])
    })

    return data;
}

const getHumidityData = () => {
    data = [];
    
    dummyData.forEach(element => {
        data.push(element[2]);
    });

    return data;
}

var humidityChart = 
  new Chart(humidityCanvas, {
    type: 'line',
    data: {
        labels: getTimeLabels(),
        datasets: [{
            label: 'Humidity',
            data: getHumidityData(),
            fill: false,
            borderColor: 'rgb(0, 0, 0)',
            backgroundColor: 'rgb(245,245,245)',
            tension: 0.1
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                ticks: {
                    display: false
                }
            }]
        }
    }
});

var tempChart = 
    new Chart(temperatureCanvas, {
        type: 'line',
        data: {
            labels: getTimeLabels(),
            datasets: [{
                label: 'Temprature',
                data: getTempData(),
                fill: false,
                borderColor: 'rgb(0, 0, 0)',
                backgroundColor: 'rgb(245,245,245)',
                tension: 0.1
            }]
        }
});
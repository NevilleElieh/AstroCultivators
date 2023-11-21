// Collecting related divs
const humidityCanvas = document.getElementById("humidity-canvas").getContext("2d");
const temperatureCanvas = document.getElementById("temperature-canvas");
const pressureCanvas = document.getElementById("pressure-canvas");

/*const dummyData = [
    [1698627883.1651702,36,70,546,4932],
    [1698627883.1651702,46,52,596,7155],
    [1698627883.1651702,17,59,588,5955],
    [1698627883.1651702,6,66,710,7351],
    [1698627883.1651702,16,7,522,7096]
]*/

const dummyData = [
    [1, 36, 70, 546, 4932],
    [2, 46, 52, 596, 7155],
    [3, 17, 59, 588, 5955],
    [4, 6, 66, 710, 7351],
    [5, 16, 7, 522, 7096]
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

const getPressureData = () => {
    data = [];

    dummyData.forEach(element => {
        data.push(element[1])
    })

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
        maintainAspectRatio:false,
        responsive:true,
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
                label: 'Temperature',
                data: getTempData(),
                fill: false,
                borderColor: 'rgb(0, 0, 0)',
                backgroundColor: 'rgb(245,245,245)',
                tension: 0.1
            }]
        },
        options: {
            maintainAspectRatio:false,
            responsive:true,
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

var presChart = 
    new Chart(pressureCanvas, {
        type: 'line',
        data: {
            labels: getTimeLabels(),
            datasets: [{
                label: 'Pressure',
                data: getPressureData(),
                fill: false,
                borderColor: 'rgb(0, 0, 0)',
                backgroundColor: 'rgb(245,245,245)',
                tension: 0.1
            }]
        },
        options: {
            maintainAspectRatio:false,
            responsive:true,
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


const emergencyStop = document.getElementById("Emergency-Stop");
const homeRobot = document.getElementById("Home-Robot");

// Add a click event listener to make it clickable
emergencyStop.addEventListener("click", function() {
    alert("You clicked EMERGENCY STOP. Robot stopping now!");
});

homeRobot.addEventListener("click", function() {
    alert("You clicked Home Robot! Robot moving into Home position.");
});
    
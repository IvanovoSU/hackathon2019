var coefs_data;
var salary_data;
var trend;
var student;

request = new XMLHttpRequest();
request.open('GET', 'js/data.json', true);
request.onload = function() {
    coefs_data = JSON.parse(request.responseText)
};
request.onerror = function() {
};
request.send();
request = new XMLHttpRequest();
request.open('GET', 'js/salary_data.json', true);
request.onload = function() {
    salary_data = JSON.parse(request.responseText)
};
request.onerror = function() {
};
request.send();
request = new XMLHttpRequest();
request.open('GET', 'js/trend.json', true);
request.onload = function() {
    trend = JSON.parse(request.responseText)
};
request.onerror = function() {
};
request.send();
request = new XMLHttpRequest();
request.open('GET', 'js/student.json', true);
request.onload = function() {
    student = JSON.parse(request.responseText)
};
request.onerror = function() {
};
request.send();


var myChart = undefined;
function drawdiag(region, elem){
    var key = elem.textContent;
    var coefs = coefs_data[key].split(", ");
    var d = trend[region][key];
    var s = salary_data[region][key];
    var p1 = student[region][key];
    var c1 = parseFloat(coefs[0].substring(1));
    var c2 = parseFloat(coefs[1]);
    var c3 = parseFloat(coefs[2].substring(-1));
    var p2 = c1 + d*c2 + s*c3;
    var chart = document.getElementById('myChart');
    var ctx = chart.getContext('2d');
    if (myChart != undefined) {
        myChart.destroy();
    }
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Текущий набор', 'Рекомендуемый набор'],
            datasets: [{
                label: 'Набор студентов',
                data: [p1, p2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(120, 250, 0, 0.2)'

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(120, 250, 0, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}
function g_set2(){
var ctx = document.getElementById('myChart').getContext('2d');
var t_labels = []
for (var i = 1; i <= dvnum; ++i) {
    t_labels.push(document.getElementById('dname' + i).value);
}
var t_data = []
for (var i = 1; i <= dvnum; ++i) {
    t_data.push(document.getElementById('dvalue' + i).value);
}
var t_colors = []
for (var i = 1; i <= dvnum; ++i) {
    t_colors.push('rgb(' + Math.random()*256 + ', ' + + Math.random()*256 + ', ' + + Math.random()* 256 + ')');
}

var chart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: t_labels,
        datasets: [{
			weight: 1,
            backgroundColor: t_colors,
            borderColor: '#777',
			borderWidth: 2,
			hoverBorderWidth: 2,
			hoverBorderColor:'#000',
            data: t_data,
        }]
    },
    options: {	
	title: {
            display: true,
            text: document.getElementById('title').value,
			fontSize: 25,
			fontFamily:'Tahoma'
        }
	}
});}



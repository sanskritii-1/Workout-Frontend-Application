/*var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["red", "green", "blue", "orange", "brown"];

new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "World Wine Production 2018"
        },
        barThickness: 2,
    }
});
*/

// Sample data
const chartData = [900, 100, 800, 200];

// Get the bar elements
const bars = document.querySelectorAll('.bars .bar');

// Update the bar heights based on the data
bars.forEach((bar, index) => {
  bar.style.height = `${(chartData[index] / 900) * 80}%`;
});
// Weekly Expence Section Starts

const expenseData1 = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
        label: 'Expenses ($)',
        data: [10, 50, 70, 45, 800, 80, 60], // Example expense data for each day
        backgroundColor: [
            '#3FA2F6',

        ],
        borderColor: [
            '#0F67B1',
        ],
        borderWidth: 1
    }]
};

// Configuration options for the chart
const config1 = {
    type: 'bar',
    data: expenseData1,
    options: {
        maintainAspectRatio: false, // Make the chart responsive
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    // color: '#333'
                    color: 'Black',
                    font: {
                        size: '18',
                    }
                }
            }
        }
    }
};

// Render the chart
const expenseChart1 = new Chart(
    document.getElementById('expenseChart-1'),
    config1
);

//Weekly Expence section Ends



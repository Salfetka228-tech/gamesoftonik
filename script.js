// Function to generate the predicted coefficient
function generatePrediction() {
    const coefficientElement = document.getElementById('coefficient');
    const processingElement = document.getElementById('processing');

    // Reset the element and start the processing animation
    coefficientElement.textContent = '';
    processingElement.style.display = 'block'; // Show the processing indicator

    // Simulate the "analyzing" process
    setTimeout(() => {
        const predictedCoefficient = calculateNextCoefficient();

        // Hide the processing indicator and show the predicted coefficient
        processingElement.style.display = 'none';
        coefficientElement.textContent = `x${predictedCoefficient}`; // Display the predicted coefficient
    }, 3000); // 3-second delay for "processing"
}

// Function to calculate a random coefficient between 1.2 and 16.5
function calculateNextCoefficient() {
    const min = 1.2;
    const max = 16.5;
    let coefficient = (Math.random() * (max - min) + min).toFixed(1);
    return coefficient;
}

// Initialize default text on page load (All text is in English)
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('predictButton').innerText = "Predict Coefficient";
    document.getElementById('registerLink').innerText = "Register and Deposit";
    document.getElementById('channelLink').innerText = "Go to Channel";
    document.getElementById('processing').innerText = "Processing...";
});

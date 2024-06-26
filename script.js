function printForm() {
    window.print();
}

document.addEventListener('DOMContentLoaded', function() {
    // var wei = document.getElementByID("weight").value;
    // var lpr = document.getElementByID("labour-rate").value;
    // var total=document.getElementByID("amount").value;
    // var mul=wei*lpr;
    // console.log(mul);
    // const weightInput = document.getElementById('weight');
    // const labourRateInput = document.getElementById('labour-rate');
    // const amountInput = document.getElementById('amount');

    // // Function to format number with commas
    // function numberWithCommas(x) {
    //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // }

    // // Function to calculate and update the total amount
    // function calculateTotal() {
    //     // Parse input values as floats (assuming numeric input)
    //     const weight = parseFloat(weightInput.value) || 0;
    //     const labourRate = parseFloat(labourRateInput.value) || 0;

    //     // Calculate total by multiplying weight and labour rate
    //     const total = weight * labourRate;

    //     // Format total with commas
    //     const formattedTotal = numberWithCommas(total.toFixed(2));

    //     // Update amount input with the formatted total
    //     amountInput.value = formattedTotal; // Display the formatted result of multiplication
    // }

    // // Event listeners to trigger calculation on input change
    // weightInput.addEventListener('input', calculateTotal);
    // labourRateInput.addEventListener('input', calculateTotal);

    // // Optionally, you can initialize the calculation on page load
    // calculateTotal();

    

    const weightInputs = document.querySelectorAll('.weight-input');
        const labourRateInputs = document.querySelectorAll('.labour-rate-input');
        const amountOutputs = document.querySelectorAll('.amount-output');

        // Function to calculate and update the total amount for each row
        function calculateTotals() {
            weightInputs.forEach((weightInput, index) => {
                const labourRateInput = labourRateInputs[index];
                const amountOutput = amountOutputs[index];

                // Parse input values as floats (assuming numeric input)
                const weight = parseFloat(weightInput.value) || 0;
                const labourRate = parseFloat(labourRateInput.value) || 0;

                // Calculate total for the current row
                const total = weight * labourRate;

                // Update amount output with the calculated total
                amountOutput.value = total.toFixed(2); // Adjust to your formatting needs
            });
        }

        // Event listeners to trigger calculation on input change
        weightInputs.forEach(input => input.addEventListener('input', calculateTotals));
        labourRateInputs.forEach(input => input.addEventListener('input', calculateTotals));

        // Optionally, you can initialize the calculation on page load
        calculateTotals();
});
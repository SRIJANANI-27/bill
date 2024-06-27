function printForm() {
    window.print();
}

// document.addEventListener('DOMContentLoaded', function() {
   
    

//     const weightInputs = document.querySelectorAll('.weight-input');
//         const labourRateInputs = document.querySelectorAll('.labour-rate-input');
//         const amountOutputs = document.querySelectorAll('.amount-output');

        

//         function calculateTotals() {
//             weightInputs.forEach((weightInput, index) => {
//                 const labourRateInput = labourRateInputs[index];
//                 const amountOutput = amountOutputs[index];

//                 // Parse input values as floats (assuming numeric input)
//                 const weight = parseFloat(weightInput.value) || 0;
//                 const labourRate = parseFloat(labourRateInput.value) || 0;

//                 // Calculate total for the current row
//                 const total = weight * labourRate;

//                 // Update amount output with the calculated total
//                 amountOutput.value = total.toFixed(2); // Adjust to your formatting needs
//             });

//             // Calculate the overall total amount
//             calculateOverallTotal();
//         }

//         // Function to calculate the overall total amount
//         function calculateOverallTotal() {
//             let overallTotal = 0;

//             amountOutputs.forEach(input => {
//                 const value = parseFloat(input.value) || 0;
//                 overallTotal += value;
//             });

//             document.querySelector('.total').textContent = overallTotal.toFixed(2);
//             // const wordsElement = document.querySelector('.words');
//             //             wordsElement.textContent = numberToWords(overallTotal);
//         }

//         // Event listeners to trigger calculation on input change
//         weightInputs.forEach(input => input.addEventListener('input', calculateTotals));
//         labourRateInputs.forEach(input => input.addEventListener('input', calculateTotals));

//         // Initialize the calculation on page load
//         calculateTotals();
//     });


// document.addEventListener('DOMContentLoaded', function() {
//     const weightInputs = document.querySelectorAll('.weight-input');
//     const labourRateInputs = document.querySelectorAll('.labour-rate-input');
//     const amountOutputs = document.querySelectorAll('.amount-output');

//     // Function to convert number to words (Indian numbering system with currency format)
//     function numberToWordsIndianCurrency(num) {
//         const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
//         const teens = ['', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
//         const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
//         const thousands = ['', 'Thousand', 'Lakh', 'Crore']; // Indian numbering groups

//         function convertThreeDigit(num) {
//             const hundred = Math.floor(num / 100);
//             const ten = num % 100;
//             const unit = num % 10;
//             let words = '';
//             if (hundred !== 0) {
//                 words += units[hundred] + ' Hundred ';
//             }
//             if (ten > 10 && ten < 20) {
//                 words += teens[ten - 11] + ' ';
//             } else {
//                 words += tens[Math.floor(ten / 10)] + ' ' + units[unit] + ' ';
//             }
//             return words.trim();
//         }

//         function convertToWords(num) {
//             let words = '';
//             let group = 0;
//             while (num > 0) {
//                 const part = num % 1000;
//                 if (part !== 0) {
//                     words = convertThreeDigit(part) + ' ' + thousands[group] + ' ' + words;
//                 }
//                 num = Math.floor(num / 1000);
//                 group++;
//             }
//             return words.trim();
//         }

//         if (num === 0) {
//             return 'Zero Only';
//         } else if (num < 0) {
//             return 'Minus ' + numberToWordsIndianCurrency(Math.abs(num));
//         } else {
//             const amountInWords = convertToWords(num);
//             return amountInWords === '' ? 'Zero Only' : amountInWords + ' Only';
//         }
//     }

//     // Function to calculate and update the total amount for each row
//     function calculateTotals() {
//         weightInputs.forEach((weightInput, index) => {
//             const labourRateInput = labourRateInputs[index];
//             const amountOutput = amountOutputs[index];

//             // Parse input values as floats (assuming numeric input)
//             const weight = parseFloat(weightInput.value) || 0;
//             const labourRate = parseFloat(labourRateInput.value) || 0;

//             // Calculate total for the current row
//             const total = weight * labourRate;

//             // Update amount output with the calculated total
//             amountOutput.value = total.toFixed(2); // Adjust to your formatting needs
//         });

//         // Calculate the overall total amount
//         calculateOverallTotal();
//     }

//     // Function to calculate the overall total amount
//     function calculateOverallTotal() {
//         let overallTotal = 0;

//         amountOutputs.forEach(input => {
//             const value = parseFloat(input.value) || 0;
//             overallTotal += value;
//         });

//         const totalElement = document.querySelector('.total');
//         totalElement.textContent = overallTotal.toFixed(2);

//         // Convert the overall total amount to words and display it
//         const wordsElement = document.querySelector('.words');
//         if (wordsElement) {
//             wordsElement.textContent = numberToWordsIndianCurrency(overallTotal);
//         }
//     }

//     // Event listeners to trigger calculation on input change
//     weightInputs.forEach(input => input.addEventListener('input', calculateTotals));
//     labourRateInputs.forEach(input => input.addEventListener('input', calculateTotals));

//     // Initialize the calculation on page load
//     calculateTotals();
// });


// all threee correct 


// document.addEventListener('DOMContentLoaded', function() {
//     const weightInputs = document.querySelectorAll('.weight-input');
//     const labourRateInputs = document.querySelectorAll('.labour-rate-input');
//     const amountOutputs = document.querySelectorAll('.amount-output');
//     const cgstElement = document.querySelector('.cgst');
//     const sgstElement = document.querySelector('.sgst');
//     const igstElement = document.querySelector('.igst');
//     const valueCgstElement = document.querySelector('.valuecgst');
//     const valueSgstElement = document.querySelector('.valuesgst');
//     const valueIgstElement = document.querySelector('.valueigst');
//     const totalElement = document.querySelector('.total');
//     const valuetaxElement = document.querySelector('.valuetax');

//     let cgstActive = true;
//     let sgstActive = true;
//     let igstActive = true;

//     function calculateTotals() {
//         weightInputs.forEach((weightInput, index) => {
//             const labourRateInput = labourRateInputs[index];
//             const amountOutput = amountOutputs[index];

//             const weight = parseFloat(weightInput.value) || 0;
//             const labourRate = parseFloat(labourRateInput.value) || 0;

//             const total = weight * labourRate;

//             amountOutput.value = total.toFixed(2);
//         });

//         calculateOverallTotal();
//     }

//     function calculateOverallTotal() {
//         let overallTotal = 0;

//         amountOutputs.forEach(input => {
//             const value = parseFloat(input.value) || 0;
//             overallTotal += value;
//         });

//         totalElement.textContent = overallTotal.toFixed(2);

//         updateTaxes();
//     }

//     function updateTaxes() {
//         const totalBeforeTax = parseFloat(totalElement.textContent) || 0;

//         if (cgstActive) {
//             const cgstAmount = totalBeforeTax * 0.015;
//             valueCgstElement.textContent = cgstAmount.toFixed(2);
//         } else {
//             valueCgstElement.textContent = '';
//         }

//         if (sgstActive) {
//             const sgstAmount = totalBeforeTax * 0.015;
//             valueSgstElement.textContent = sgstAmount.toFixed(2);
//         } else {
//             valueSgstElement.textContent = '';
//         }

//         if (igstActive) {
//             const igstAmount = totalBeforeTax * 0.03;
//             valueIgstElement.textContent = igstAmount.toFixed(2);
//         } else {
//             valueIgstElement.textContent = '';
//         }

//         updateTotalAfterTax();
//     }

//     function updateTotalAfterTax() {
//         const totalBeforeTax = parseFloat(totalElement.textContent) || 0;
//         const cgstAmount = parseFloat(valueCgstElement.textContent) || 0;
//         const sgstAmount = parseFloat(valueSgstElement.textContent) || 0;
//         const igstAmount = parseFloat(valueIgstElement.textContent) || 0;

//         const totalAfterTax = totalBeforeTax + cgstAmount + sgstAmount + igstAmount;
//         valuetaxElement.textContent = totalAfterTax.toFixed(2);
//     }

//     cgstElement.addEventListener('click', function() {
//         cgstActive = !cgstActive;
//         updateTaxes();
//     });

//     sgstElement.addEventListener('click', function() {
//         sgstActive = !sgstActive;
//         updateTaxes();
//     });

//     igstElement.addEventListener('click', function() {
//         igstActive = !igstActive;
//         updateTaxes();
//     });

//     weightInputs.forEach(input => input.addEventListener('input', calculateTotals));
//     labourRateInputs.forEach(input => input.addEventListener('input', calculateTotals));

//     calculateTotals();
// });


function numberToWords(num) {
    const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const thousands = ['', 'Thousand', 'lakh', 'Billion'];

    if (num === 0) return 'Zero';

    let words = '';
    let i = 0;

    do {
        const numChunk = num % 1000;
        if (numChunk !== 0) {
            const chunkWords = numberToWordsChunk(numChunk);
            words = chunkWords + (thousands[i] ? ' ' + thousands[i] + ' ' : '') + words;
        }
        num = Math.floor(num / 1000);
        i++;
    } while (num > 0);

    return words.trim();
}

function numberToWordsChunk(num) {
    const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    const hundred = Math.floor(num / 100);
    const ten = num % 100;
    let words = '';

    if (hundred !== 0) {
        words += units[hundred] + ' Hundred';
    }

    if (ten !== 0) {
        if (hundred !== 0) {
            words += ' ';
        }

        if (ten < 10) {
            words += units[ten];
        } else if (ten < 20) {
            words += teens[ten - 10];
        } else {
            const tensDigit = Math.floor(ten / 10);
            const unitsDigit = ten % 10;
            words += tens[tensDigit] + (unitsDigit !== 0 ? ' ' + units[unitsDigit] : '');
        }
    }

    return words.trim();
}

document.addEventListener('DOMContentLoaded', function() {
    const weightInputs = document.querySelectorAll('.weight-input');
    const labourRateInputs = document.querySelectorAll('.labour-rate-input');
    const amountOutputs = document.querySelectorAll('.amount-output');
    const cgstElement = document.querySelector('.cgst');
    const sgstElement = document.querySelector('.sgst');
    const igstElement = document.querySelector('.igst');
    const valueCgstElement = document.querySelector('.valuecgst');
    const valueSgstElement = document.querySelector('.valuesgst');
    const valueIgstElement = document.querySelector('.valueigst');
    const totalElement = document.querySelector('.total');
    const valuetaxElement = document.querySelector('.valuetax');
    const roundoffElement = document.querySelector('.roundoffval'); // Reference to round-off value element
    const valuetotalElement = document.querySelector('.valuetotal'); // Reference to grand total element
    const wordsElement = document.querySelector('.words'); // Reference to words display element

    let cgstActive = false;
    let sgstActive = false;
    let igstActive = false;

    function calculateTotals() {
        weightInputs.forEach((weightInput, index) => {
            const labourRateInput = labourRateInputs[index];
            const amountOutput = amountOutputs[index];

            const weight = parseFloat(weightInput.value) || 0;
            const labourRate = parseFloat(labourRateInput.value) || 0;

            const total = weight * labourRate;

            amountOutput.value = total.toFixed(2);
        });

        calculateOverallTotal();
    }

    function calculateOverallTotal() {
        let overallTotal = 0;

        amountOutputs.forEach(input => {
            const value = parseFloat(input.value) || 0;
            overallTotal += value;
        });

        totalElement.textContent = overallTotal.toFixed(2);

        updateTaxes();
    }

    function updateTaxes() {
        const totalBeforeTax = parseFloat(totalElement.textContent) || 0;

        if (cgstActive) {
            const cgstAmount = totalBeforeTax * 0.015;
            valueCgstElement.textContent = cgstAmount.toFixed(2);
        } else {
            valueCgstElement.textContent = '';
        }

        if (sgstActive) {
            const sgstAmount = totalBeforeTax * 0.015;
            valueSgstElement.textContent = sgstAmount.toFixed(2);
        } else {
            valueSgstElement.textContent = '';
        }

        if (igstActive) {
            const igstAmount = totalBeforeTax * 0.03;
            valueIgstElement.textContent = igstAmount.toFixed(2);
        } else {
            valueIgstElement.textContent = '';
        }

        updateTotalAfterTax();
    }

    function updateTotalAfterTax() {
        const totalBeforeTax = parseFloat(totalElement.textContent) || 0;
        const cgstAmount = parseFloat(valueCgstElement.textContent) || 0;
        const sgstAmount = parseFloat(valueSgstElement.textContent) || 0;
        const igstAmount = parseFloat(valueIgstElement.textContent) || 0;

        const totalAfterTax = totalBeforeTax + cgstAmount + sgstAmount + igstAmount;
        const roundedTotal = Math.round(totalAfterTax);

        // Calculate round-off value
        const roundoffValue = (roundedTotal - totalAfterTax).toFixed(2);

        valuetaxElement.textContent = totalAfterTax.toFixed(2);
        roundoffElement.textContent = roundoffValue;

        // Calculate grand total
        const grandTotal = totalAfterTax + parseFloat(roundoffValue);
        valuetotalElement.textContent = grandTotal.toFixed(2);

        // Convert totalAfterTax to words
        const totalWords = numberToWords(roundedTotal);
        wordsElement.textContent = totalWords; // Update words display element
    }

    cgstElement.addEventListener('click', function() {
        cgstActive = !cgstActive;
        updateTaxes();
    });

    sgstElement.addEventListener('click', function() {
        sgstActive = !sgstActive;
        updateTaxes();
    });

    igstElement.addEventListener('click', function() {
        igstActive = !igstActive;
        updateTaxes();
    });

    weightInputs.forEach(input => input.addEventListener('input', calculateTotals));
    labourRateInputs.forEach(input => input.addEventListener('input', calculateTotals));

    calculateTotals();
});
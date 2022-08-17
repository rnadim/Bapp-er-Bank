// console.log('deposit.js');

// step-1: add event listener  to the deposit button 
document.getElementById('btn-deposit').addEventListener('click', function () {
    // console.log('deposit button clicked')
    // step-2: get the deposit amount from the deposit input field 
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;

    // console.log(depositAmount)

    // step-3: get the current deposit total 
    // for non-input(element other than input, textarea) use innerText to get the text 
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    // console.log(depositTotal);
    depositTotalElement.innerText = depositAmount;
})
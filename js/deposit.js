// console.log('deposit.js');

// step-1: add event listener  to the deposit button 
document.getElementById('btn-deposit').addEventListener('click', function () {
    // console.log('deposit button clicked')
    // step-2: get the deposit amount from the deposit input field 
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    console.log(depositAmount)
})
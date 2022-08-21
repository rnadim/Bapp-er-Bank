// console.log('deposit.js');

// step-1: add event listener  to the deposit button 
document.getElementById('btn-deposit').addEventListener('click', function () {
    // console.log('deposit button clicked')
    // step-2: get the deposit amount from the deposit input field 
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString)
    // console.log(typeof newDepositAmount);



    // console.log(depositAmount)

    // step-3: get the current deposit total 
    // for non-input(element other than input, textarea) use innerText to get the text 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // console.log(typeof previousDepositTotal);


    // step-4: add numbers to set the total deposit 
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set the deposit total
    // console.log(depositTotal);
    depositTotalElement.innerText = currentDepositTotal;


    // step-5: get ballance current total 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    // step-6: calculate current total balance 
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;;

    // step-7: clear the deposit Field 
    depositField.value = '';
})
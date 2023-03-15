
document.getElementById('btn-deposit').addEventListener('click', function(){
    
    const newDepositAmount = getInputValueById('deposit-field');
    const previousDepositTotal = getTextElementValueById('deposit-amount');
    const newDepositTotal = newDepositAmount + previousDepositTotal;
    setTextElementById('deposit-amount', newDepositTotal);

    const previousBalanceTotal = getTextElementValueById('balance-amount');
    const newBalance = previousBalanceTotal+newDepositAmount;
    setTextElementById('balance-amount', newBalance);

})

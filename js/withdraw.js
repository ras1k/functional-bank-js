document.getElementById('btn-withdraw').addEventListener('click', function(){

    const newWithdrawAmount = getInputValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-amount');
    const newWithdrawtotal = newWithdrawAmount + previousWithdrawTotal;
    setTextElementById('withdraw-amount', newWithdrawtotal);

    const previousBalanceTotal = getTextElementValueById('balance-amount');
    const newBalance = previousBalanceTotal - newWithdrawAmount;
    setTextElementById('balance-amount', newBalance);
    
})
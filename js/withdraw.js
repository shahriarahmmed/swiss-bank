document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = parseFloat(withdrawField.value);
    
    const previousWtihdrawBalance = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(previousWtihdrawBalance.innerText); 
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    previousWtihdrawBalance.innerText = currentWithdrawTotal;

    const previousBalance = document.getElementById('balance-total');
    const currentBalancePrevious = previousBalance.innerText;
    const currentBalanceTotal =  currentBalancePrevious - newWithdrawAmount;
    previousBalance.innerText = currentBalanceTotal;
    withdrawField.value = '';
})
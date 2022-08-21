// step 1 click event in submit button
document.getElementById('submit-btn').addEventListener('click', function(){
    // step 2 select input field
    const depositField = document.getElementById('deposit-field');
    // step 3 get input field vlaue
    const newDepositAmount = parseFloat(depositField.value);
    // step 4 select current deposit 
    const totalDepositElement = document.getElementById('deposit-total');
    const previousDepositTotal = parseFloat(totalDepositElement.innerText);
    // step 5 add privious + new deposit amount
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    totalDepositElement.innerText = currentDepositTotal;
    // step 6 add balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    // step 7 deposit field clear
    depositField.value = '';
})
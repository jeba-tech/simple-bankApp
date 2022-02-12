//handle deposite button event

function getInputValue(inputId) {
      //get the amount deposited and withdrawn

      const depositeWithdrawInput = document.getElementById(inputId);
      const depositeWithdrawInputValue = depositeWithdrawInput.value;
      const parseDepositeWithdrawInputValue = parseFloat(depositeWithdrawInputValue);

      //clear the deposite input field
      document.getElementById(inputId).value = '';
      return parseDepositeWithdrawInputValue;
}

function updateAmount(updateTotal, inputAmount) {
      //updated deposite and withdraw amount
      const depositeWithdrawTotal = document.getElementById(updateTotal);
      const depositeWithdrawTotalValue = depositeWithdrawTotal.innerText;
      const parseDepositeWithdrawTotalValue = parseFloat(depositeWithdrawTotalValue);
      depositeWithdrawTotal.innerText = parseDepositeWithdrawTotalValue + inputAmount;
}

function updateBalance(updateBalance, isAdd) {
      // updated total balance amount
      const balanceTotal = document.getElementById('balance-total');
      const balanceToatalvalue = balanceTotal.innerText;
      const parseBalanceToatalvalue = parseFloat(balanceToatalvalue);

      if (isAdd == true) {
            balanceTotal.innerText = parseBalanceToatalvalue + updateBalance;

      }
      else {
            balanceTotal.innerText = parseBalanceToatalvalue - updateBalance;

      }

}
document.getElementById('deposite-button').addEventListener('click', function () {

      const parseDepositeInputValue = getInputValue('deposite-input');
      updateAmount('deposite-total', parseDepositeInputValue);
      updateBalance(parseDepositeInputValue, true);


      //another way without uning function

      /* //get the amount deposited
       const depositeInput = document.getElementById('deposite-input');
       const depositeInputValue = depositeInput.value;
       const parseDepositeInputValue = parseFloat(depositeInputValue);
       const depositeTotal = document.getElementById('deposite-total');
       const depositeTotalValue = depositeTotal.innerText;
       const parseDepositeTotalValue = parseFloat(depositeTotalValue);
       //updated deposite amount
       const newDeposite = parseDepositeTotalValue + parseDepositeInputValue;
       depositeTotal.innerText = newDeposite;
       // updated total balance amount
       const balanceTotal = document.getElementById('balance-total');
       const balanceToatalvalue = balanceTotal.innerText;
       const parseBalanceToatalvalue = parseFloat(balanceToatalvalue);

       const newBalanceDeposite = parseBalanceToatalvalue + parseDepositeInputValue;
       balanceTotal.innerText = newBalanceDeposite;
 */
});

//handle withdraw event handler

document.getElementById('withdraw-button').addEventListener('click', function () {

      const parseWithdrawInputValue = getInputValue('withdraw-input');
      updateAmount('withdraw-total', parseWithdrawInputValue);
      updateBalance(parseWithdrawInputValue, false);

      //another way without uning function
      /*    const withdrawInput = document.getElementById('withdraw-input');
         const withdrawInputValue = withdrawInput.value;
         const parseWithdrawInputValue = parseFloat(withdrawInputValue);
        const withdrawTotal = document.getElementById('withdraw-total');
         const withdrawTotalValue = withdrawTotal.innerText;
         const parseWithdrawTotalValue = parseFloat(withdrawTotalValue);
         //update withdraw 
         const newWithdraw = parseWithdrawInputValue + parseWithdrawTotalValue;
         withdrawTotal.innerText = newWithdraw;
        update balance based on the withdraw 
         const balanceTotal = document.getElementById('balance-total');
         const balanceToatalvalue = balanceTotal.innerText;
         const parseBalanceToatalvalue = parseFloat(balanceToatalvalue);
         const newBalanceWithdraw = parseBalanceToatalvalue - parseWithdrawInputValue;
         balanceTotal.innerText = newBalanceWithdraw; */

});
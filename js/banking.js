//handle deposite button event
document.getElementById('deposite-button').addEventListener('click', function () {
      //get the amount deposited
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

      //clear the deposite input field
      document.getElementById('deposite-input').value = '';

});
//handle withdraw event handler

document.getElementById('withdraw-button').addEventListener('click', function () {
      const withdrawInput = document.getElementById('withdraw-input');
      const withdrawInputValue = withdrawInput.value;
      const parseWithdrawInputValue = parseFloat(withdrawInputValue);

      const withdrawTotal = document.getElementById('withdraw-total');
      const withdrawTotalValue = withdrawTotal.innerText;
      const parseWithdrawTotalValue = parseFloat(withdrawTotalValue);

      //update withdraw 
      const newWithdraw = parseWithdrawInputValue + parseWithdrawTotalValue;
      withdrawTotal.innerText = newWithdraw;

      //update balance based on the withdraw 
      const balanceTotal = document.getElementById('balance-total');
      const balanceToatalvalue = balanceTotal.innerText;
      const parseBalanceToatalvalue = parseFloat(balanceToatalvalue);

      const newBalanceWithdraw = parseBalanceToatalvalue - parseWithdrawInputValue;
      balanceTotal.innerText = newBalanceWithdraw;
      //clear the withdraw input field
      document.getElementById('withdraw-input').value = '';
})
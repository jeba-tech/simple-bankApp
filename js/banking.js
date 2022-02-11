//handle deposite button event
document.getElementById('deposite-button').addEventListener('click', function () {
      //get the amount deposited
      const depositeInput = document.getElementById('deposite-input');
      const depositeInputValue = depositeInput.value;
      const parseDepositeInputValue = parseInt(depositeInputValue);

      const depositeTotal = document.getElementById('deposite-total');
      const depositeTotalValue = depositeTotal.innerText;
      const parseDepositeTotalValue = parseInt(depositeTotalValue);
      //updated deposite amount
      const newDeposite = parseDepositeTotalValue + parseDepositeInputValue;
      depositeTotal.innerText = newDeposite;

      // updated total balance amount
      const balanceTotal = document.getElementById('balance-total');
      const balanceToatalvalue = balanceTotal.innerText;
      const parseBalanceToatalvalue = parseInt(balanceToatalvalue);

      const newBalance = parseBalanceToatalvalue + parseDepositeInputValue;
      balanceTotal.innerText = newBalance;

      //clear the deposite input field
      document.getElementById('deposite-input').value = '';

});
//handle withdraw event handler

document.getElementById('withdraw-button').addEventListener('click', function () {
      console.log('button cloked')
})
//handle deposite button event
document.getElementById('deposite-button').addEventListener('click', function () {
      //get the amount deposited
      document.getElementById('deposite-input').value;
      console.log(document.getElementById('deposite-input').value);
      document.getElementById('deposite-total').innerText = document.getElementById('deposite-input').value;
      //clear the deposite input field
      document.getElementById('deposite-input').value = '';

})
//handle withdraw button event

document.getElementById('withdraw-button').addEventListener('click', function () {
      console.log('button cloked')
})
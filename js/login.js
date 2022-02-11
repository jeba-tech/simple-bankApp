document.getElementById('login-submit').addEventListener
      ('click', function () {
            //get user email
            document.getElementById('user-name').value;
            //get user password
            document.getElementById('user-password').value;
            if (document.getElementById('user-name').value == 'jeba@gmail.com' && document.getElementById('user-password').value == '123a') {
                  window.location.href = 'banking.html';
            }

      })
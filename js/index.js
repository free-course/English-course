document.getElementById('login-submit').addEventListener
        ('click',function(){
            //get email
            const emailField = document.getElementById('user-email');
            const userEmail = emailField.value ;
            //console.log(userEmail);
        
            //get password
            const userField = document.getElementById('user-password');
            const userPassword = userField.value ;
            //console.log(userPassword);
        
            if(userEmail == 'mahadi' && userPassword == 'hassan'){
                //console.log('valid password');
                window.location.href = "index0.html";
            }
            else alert('Please try valid Email & Password')
            //else console.log('wrong password');
            
        });
        // login part End=================================
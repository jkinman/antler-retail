require('./styles/index.scss');

import PopperJs from 'popper.js';
import jquery from 'jquery';
import bootstrap from 'bootstrap';


jquery(($)=>{
  $ = jquery

  jquery('.carousel').carousel({
    interval: 4000
  })

  jquery(document).ready( () => {
    console.log(document.getElementById('age-verify').style)
    document.getElementById('age-verify').style.display = "block"

    if( localStorage.getItem('agechecked') ){
      document.getElementById('age-verify').style.display = "none"
    }
    else{
      document.getElementById('age-verify').style.display = "block"
    }

  })

  console.log('Hello jQuery + bootstrap 4!');
    function submitEmail() {
        let email = document.getElementById('email_field').value
        let data = {
          "email_address" : email,
          "status": "subscribed",
            "status_if_new": "subscribed"
            }
    
        // let headers = new Headers()
        // headers.set('Authorization', 'Basic amtpbm1hbjo1N2MxYWM0NTNkYzAwZjkxNDRmZDU1NzRkNDRhY2ZhMi11czIw');
        console.log(email)
        fetch( './sendemail.php?email='+email )
          document.getElementById('email_field').value = ""
    
    
       }
});


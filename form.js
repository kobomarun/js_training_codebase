
function handleForm() {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value
    let message = document.getElementById('message').value

   

    setTimeout(function() {
         // display hidden div
        document.getElementById("showMsg").style="display:block";
        document.getElementById("showMsg").style="background:#ff0";
        document.getElementById("fname").innerHTML = name;  
        document.getElementById("femail").innerHTML = email;  
        document.getElementById("fmessage").innerHTML = message;   
    
    }, 2000)

   
    //clear input fields
    document.getElementById('name').value = '';
    document.getElementById('email').value ='';
    document.getElementById('message').value = '';
}


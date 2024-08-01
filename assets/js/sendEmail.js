// gmail service service_gkjbc5n

// template template_dsuls05 


//smilomziyako779@gmail.com 
var submit = document.getElementById("submit");

function sendEmail() {
    let params = {
        email: document.getElementById("email").value
    }
    console.log(params.email);

    emailjs.send("service_gkjbc5n", "template_dsuls05", params).then(alert("Your email has been sent"));
}

submit.addEventListener("click", function () {
    sendEmail()
    document.getElementById("email").value = "";

});

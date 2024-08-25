// gmail service service_gkjbc5n

// template template_dsuls05 


//smilomziyako779@gmail.com 
var submit = document.getElementById("submit2");

function sendEmail() {
    let params = {
      email: document.getElementById("email").value,
      message:
        "I" +
        document.getElementById("email").value +
        "want to get updates on your new collection",
      subject: "New Email Subscription",
    };
    console.log(params.email);

    emailjs.send("service_gkjbc5n", "template_dsuls05", params).then(alert("Your email has been sent"));
}

submit.addEventListener("click", function () {
    sendEmail()
    document.getElementById("email").value = "";

});


// var submit = document.getElementById("submit");

// function sendEmail() {
//       document.getElementById("custom_str1").value =
//         "Address Provided: " + address;
//       rest();
//       amount.value =
//         parseInt(document.getElementById("total_price_to_pay").innerText) + 0; //130
//       custom_str2.value = document.getElementById("custom_int1").value;

//   let params = {
//     email: document.getElementById("email_address").value,
//     message:
//       "Price " +
//       document.getElementById("email").value +
//       "want to get updates on your new collection",
//     subject: "New Sale",
//   };
//   //console.log(params.email);

//   emailjs
//     .send("service_gkjbc5n", "template_dsuls05", params);
// }

// submit.addEventListener("click", function () {
//   sendEmail();
// });

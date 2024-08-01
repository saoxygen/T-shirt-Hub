var origin = document.getElementById("origin");
var somebody = document.getElementById("somebody");
var special = document.getElementById("special");
var fame = document.getElementById("fame");
var amount = document.getElementById("amount");
var item_name = document.getElementById("item_name");
var order_info = document.getElementById("custom_str1");

var continue_btn = document.getElementById("continue");
var payment_div = document.getElementById("payment_div");
var back = document.getElementById("back");
var back = document.getElementById("back");

origin.addEventListener("click", function () {
  make();
  document.getElementById("colour_t").classList.remove("hideDivs");
  var origin_name = document.getElementById("origin_name").innerText;
  var origin_price = document.getElementById("origin_price").innerText;

  amount.value = origin_price.substring(1);
  item_name.value = origin_name;
});

somebody.addEventListener("click", function () {
  make();
  document.getElementById("colour_t").classList.add("hideDivs");
  var somebody_name = document.getElementById("somebody_name").innerText;
  var somebody_price = document.getElementById("somebody_price").innerText;

  amount.value = somebody_price.substring(1);
  item_name.value = somebody_name;
});

special.addEventListener("click", function () {
  make();
  document.getElementById("colour_t").classList.add("hideDivs");
  var special_name = document.getElementById("special_name").innerText;
  var special_price = document.getElementById("special_price").innerText;

  amount.value = special_price.substring(1);
  item_name.value = special_name;
});

fame.addEventListener("click", function () {
  make();
  document.getElementById("colour_t").classList.add("hideDivs");
  document.getElementById("featured-cars").classList.add("hideDivs");
  document.getElementById("clients-say").classList.add("hideDivs");
  document.getElementById("about").classList.add("hideDivs");
  document.getElementById("home").classList.add("hideDivs");
  var fame_name = document.getElementById("fame_name").innerText;
  var fame_price = document.getElementById("fame_price").innerText;

  amount.value = fame_price.substring(1);
  item_name.value = fame_name;
});

continue_btn.addEventListener("click", function () {
  var name_ = document.getElementById("name").value;
  var mail = document.getElementById("mail").value;
  var address = document.getElementById("address").value;
  var phone = document.getElementById("phone").value;
  pay(name_, mail, address, phone);
});
back.addEventListener("click", function () {
  rest();
});

function pay(name_, mail, address, phone) {
  var colour = document.querySelectorAll("input[name=colour]");
  var colour_value = Array.from(colour).find((radio) => radio.checked);

  var size = document.querySelectorAll("input[name=size]");
  var size_value = Array.from(size).find((radio) => radio.checked);

  var colour_t_class = Array.from(
    document.getElementById("colour_t").classList
  );
  //alert(colour_t_class + " " + colour_t_class.indexOf("hideDivs"));
  if (empty(name_)) {
    alert("Enter your name before making payment");
    return;
  }
  if (empty(mail)) {
    alert("Enter your email address before making payment");
    return;
  }
  if (empty(size_value)) {
    alert("Select a T-shirt size before making payment");
    return;
  }
  if (empty(colour_value) && colour_t_class.indexOf("hideDivs") == -1) {
    alert("Select a T-shirt colour before making payment");
    return;
  }
  if (empty(address)) {
    alert("Enter your delivery address before making payment");
    return;
  }
  if (empty(phone)) {
    alert("Enter your phone number before making payment");
    return;
  }

  var colour = document.querySelectorAll("input[name=colour]");
  var colour = Array.from(colour).find((radio) => radio.checked).value;

  var size = document.querySelectorAll("input[name=size]");
  var size = Array.from(size).find((radio) => radio.checked).value;
  item_name.value = item_name.value + " Colour:  " + colour + " Size: " + size;
  document.getElementById("confirmation_address").value = mail;
  document.getElementById("custom_str1").value = "Address Provided: " + address;
  rest();
  const submit = document.getElementById("submit");
  submit.click();
}

function make() {
  payment_div.classList.remove("hideDivs");
  document.getElementById("featured-cars").classList.add("hideDivs");
  document.getElementById("clients-say").classList.add("hideDivs");
  document.getElementById("about").classList.add("hideDivs");
  document.getElementById("home").classList.add("hideDivs");
  document.getElementById("contact").classList.add("hideDivs");
}

function rest() {
  payment_div.classList.add("hideDivs");
  document.getElementById("colour_t").classList.add("hideDivs");
  document.getElementById("featured-cars").classList.remove("hideDivs");
  document.getElementById("clients-say").classList.remove("hideDivs");
  document.getElementById("about").classList.remove("hideDivs");
  document.getElementById("home").classList.remove("hideDivs");
  document.getElementById("contact").classList.remove("hideDivs");
}

function empty(str) {
  if (
    typeof str == "undefined" ||
    !str ||
    str.length === 0 ||
    str === "" ||
    !/[^\s]/.test(str) ||
    /^\s*$/.test(str) ||
    str === ""
  ) {
    return true;
  } else {
    return false;
  }
}

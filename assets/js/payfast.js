var origin = document.getElementById("origin");
var somebody = document.getElementById("somebody");
var special = document.getElementById("special");
var fame = document.getElementById("fame");
var wellness = document.getElementById("wellness");
var amount = document.getElementById("amount");
var item_name = document.getElementById("item_name");
var order_info = document.getElementById("custom_str1");
var custom_str2 = document.getElementById("custom_str2");
var custom_str3 = document.getElementById("custom_str3");
var custom_str4 = document.getElementById("custom_str4");
var custom_str5 = document.getElementById("custom_str5");
var add_to_cart = document.getElementById("add_to_cart");

var continue_btn = document.getElementById("continue");
var payment_div = document.getElementById("payment_div");
var about = document.getElementById("about");
var payment_cart = document.getElementById("payment_cart");
var checkout = document.getElementById("checkout");
var back = document.getElementById("back");
var back2 = document.getElementById("back2");
var back3 = document.getElementById("back3");
var back4 = document.getElementById("back4");
var purchase_img = document.getElementById("purchase_img");

checkout.addEventListener("click", function () {
  nextStep();
  payment_div.classList.remove("hideDivs");
});

origin.addEventListener("click", function () {
  nextStep();
  document.getElementById("blog").classList.remove("hideDivs");
  var origin_name = document.getElementById("origin_name").innerText;
  var origin_price = document.getElementById("origin_price").innerText;
  document.getElementById("colour_t").classList.remove("hideDivs");
  amount.value = origin_price.substring(1);
  item_name.value = origin_name;
  purchase_img.src = document.getElementById("origin_img").src;
});

somebody.addEventListener("click", function () {
  nextStep();
  document.getElementById("blog").classList.remove("hideDivs");
  var somebody_name = document.getElementById("somebody_name").innerText;
  var somebody_price = document.getElementById("somebody_price").innerText;

  amount.value = somebody_price.substring(1);
  item_name.value = somebody_name;
  purchase_img.src = document.getElementById("somebody_img").src;
});

special.addEventListener("click", function () {
  nextStep();
  document.getElementById("blog").classList.remove("hideDivs");
  var special_name = document.getElementById("special_name").innerText;
  var special_price = document.getElementById("special_price").innerText;

  amount.value = special_price.substring(1);
  item_name.value = special_name;
  purchase_img.src = document.getElementById("special_img").src;
});

fame.addEventListener("click", function () {
  nextStep();
  document.getElementById("blog").classList.remove("hideDivs");

  var fame_name = document.getElementById("fame_name").innerText;
  var fame_price = document.getElementById("fame_price").innerText;

  amount.value = fame_price.substring(1);
  item_name.value = fame_name;
  purchase_img.src = document.getElementById("fame_img").src;
});

wellness.addEventListener("click", function () {
  nextStep();
  document.getElementById("blog").classList.remove("hideDivs");

  var wellness_name = document.getElementById("wellness_name").innerText;
  var wellness_price = document.getElementById("wellness_price").innerText;

  amount.value = wellness_price.substring(1);
  item_name.value = wellness_name;
  purchase_img.src = document.getElementById("wellness_img").src;
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

back2.addEventListener("click", function () {
  rest();
});

back3.addEventListener("click", function () {
  rest();
});

back4.addEventListener("click", function () {
  rest();
});

add_to_cart.addEventListener("click", function () {
  var t_size = document.getElementById("T-Shirt-Size");
  var t_size_selectedValue = t_size.value;
  var t_colour = document.getElementById("T-Shirt-Colour");
  var t_colour_Value = t_colour.value;

  var colour_t_class = Array.from(
    document.getElementById("colour_t").classList
  );

  if (empty(t_colour_Value) && colour_t_class.indexOf("hideDivs") == -1) {
    alert("Select a T-shirt colour before Adding To Cart");
    return;
  }

  if (empty(t_colour_Value) && colour_t_class.indexOf("hideDivs") == 1) {
    t_colour_Value = "White";
  }

  if (!empty(t_size_selectedValue) && !empty(t_colour_Value)) {
    var name_ = item_name.value;
    item_name.value +=
      item_name.value +
      " Colour:  " +
      t_colour_Value +
      " Size: " +
      t_size_selectedValue;
    rest();
    document.getElementById("blog").classList.add("hideDivs");
    add_item_to_cart(
      purchase_img.src,
      amount.value,
      t_size_selectedValue,
      t_colour_Value,
      name_
    );
    document.getElementById("custom_int1").value +=
      " T-Shirt Name: " +
      name_ +
      " T-Shirt Size: " +
      t_size_selectedValue +
      " T-Shirt Colour: " +
      t_colour_Value +
      " Price: " +
      amount.value;
    t_size.value = "";
    t_colour.value = "";
    const shop_nav_btn = document.getElementById("shop_nav_btn");
    shop_nav_btn.click();
  }
});

function pay(name_, mail, address, phone) {
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
  // if (empty(size_value)) {
  //   alert("Select a T-shirt size before making payment");
  //   return;
  // }
  // if (empty(colour_value) && colour_t_class.indexOf("hideDivs") == -1) {
  //   alert("Select a T-shirt colour before making payment");
  //   return;
  // }
  if (empty(address)) {
    alert("Enter your delivery address before making payment");
    return;
  }
  if (empty(phone)) {
    alert("Enter your phone number before making payment");
    return;
  }

  document.getElementById("confirmation_address").value =
    "tshirthub419@gmail.com";
  document.getElementById("email_address").value = mail; //customer
  document.getElementById("custom_str1").value = "Address Provided: " + address;
  rest();
  amount.value =
    parseInt(document.getElementById("total_price_to_pay").innerText) + 0; //130
  // custom_str2.value = document.getElementById("custom_int1").value;

  let str = document.getElementById("custom_int1").value; // max 1020
  let numSlices = 4;
  let sliceLength = Math.ceil(str.length / numSlices);
  let slices = [];

  for (let i = 0; i < numSlices; i++) {
    let start = i * sliceLength;
    let end = start + sliceLength;
    slices.push(str.slice(start, end));
  }

  custom_str2.value = slices[0];
  custom_str3.value = slices[1];
  custom_str4.value = slices[2];
  custom_str5.value = slices[3];

  document.getElementById("custom_int1").value = "";
  const submit = document.getElementById("submit");
  //submit.click();
}

function nextStep() {
  payment_div.classList.add("hideDivs");
  document.getElementById("colour_t").classList.add("hideDivs");
  document.getElementById("featured-cars").classList.add("hideDivs");
  document.getElementById("clients-say").classList.add("hideDivs");
  document.getElementById("about").classList.add("hideDivs");
  document.getElementById("home").classList.add("hideDivs");
  document.getElementById("contact").classList.add("hideDivs");
  document.getElementById("blog").classList.add("hideDivs");
  payment_cart.classList.add("hideDivs");
}

function rest() {
  payment_div.classList.add("hideDivs");
  document.getElementById("colour_t").classList.add("hideDivs");
  document.getElementById("payment_cart").classList.add("hideDivs");
  document.getElementById("featured-cars").classList.remove("hideDivs");
  document.getElementById("clients-say").classList.remove("hideDivs");
  about.classList.add("hideDivs");
  document.getElementById("home").classList.remove("hideDivs");
  document.getElementById("contact").classList.remove("hideDivs");
  document.getElementById("blog").classList.add("hideDivs");
  document.getElementById("nav_section").classList.remove("hideDivs");
}

function openCart() {
  nextStep();
  payment_cart.classList.remove("hideDivs");
  document.getElementById("nav_section").classList.add("hideDivs");
}

function openAbout() {
  nextStep();
  about.classList.remove("hideDivs");
  document.getElementById("nav_section").classList.add("hideDivs");
}

function add_item_to_cart(src, price, size, colour, name) {
  var html_id = generateGUID();

  document.getElementById("cart_items").innerHTML +=
    `
      <div class="col-lg-3 col-md-4 col-sm-6 card" id="` +
    html_id +
    `">
        <div class="single-featured-cars">
          <div class="featured-img-box">
            <div class="featured-cars-img">
              <img id="" src="` +
    src +
    `" alt="cars" />
            </div>
          </div>
          <div class="featured-cars-txt">
            <h2><a href="#" id="` +
    html_id +
    `_name">` +
    name +
    `</a></h2>
            <h3 id="` +
    html_id +
    `_size">T-shirt size: ` +
    size +
    `</h3>
            <h3 id="` +
    html_id +
    `_colour">T-Shirt colour: ` +
    colour +
    `</h3>
            <h3 id="` +
    html_id +
    `_price">R` +
    price +
    `</h3>
    <button onclick="deleteItem('` +
    html_id +
    `')"><i class="fa-solid fa-trash-can"></i></button>
          </div>
        </div>
      </div>
  `;

  var total_price_to_pay =
    document.getElementById("total_price_to_pay").innerText;

  document.getElementById("total_price_to_pay").innerText =
    parseInt(total_price_to_pay) + parseInt(price);

  document.getElementById("notification_message").innerHTML =
    "Item added to cart successfully";
  document.getElementById(
    "notification_symbol"
  ).innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
}

function deleteItem(html_id) {
  const element = document.getElementById(html_id.toString());
  var id_name = html_id + "_price";
  var tee_name = html_id + "_name";
  var tee_size = html_id + "_size";
  var tee_colour = html_id + "_colour";

  var removeText =
    document.getElementById(tee_name.toString()).innerText +
    " " +
    document.getElementById(tee_size.toString()).innerText +
    " " +
    document.getElementById(tee_colour.toString()).innerText +
    " Price: " +
    document.getElementById(id_name.toString()).innerText.replace("R", "");
  console.log(" T-Shirt Name: " + removeText);
  const removedItem = document
    .getElementById(id_name.toString())
    .innerText.replace("R", "")
    .split(".")[0];
  // Remove the element
  element.remove();
  // subtract the price from total
  var total_price_to_pay =
    document.getElementById("total_price_to_pay").innerText;
  document.getElementById("total_price_to_pay").innerText =
    parseInt(total_price_to_pay) - parseInt(removedItem);
  document.getElementById("custom_int1").value = document
    .getElementById("custom_int1")
    .value.replace(" T-Shirt Name: " + removeText, "");
  console.log(document.getElementById("custom_int1").value);
}

function generateGUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
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

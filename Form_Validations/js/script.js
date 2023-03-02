function validate() {
  let first = document.querySelector("#first-name");
  let last = document.querySelector("#last-name");
  let email = document.querySelector("#email-address");
  let contact = document.querySelector("#contact-number");
  let pin = document.querySelector("#pin-code");
  let card = document.querySelector("#card-number");
  let expiry = document.querySelector("#card-expiry");
  let cvv = document.querySelector("#cvv");
  let flag = 0;
  let regname = "[a-zA-Z]";
  let regemail = /^[A-z]+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let regContact = /^\d{10}$/;
  let regPin = /^\d{6}$/;
  let regCard = /^\d{16}$/;
  let regCvv = /^\d{3,4}$/;
  let year = new Date().getFullYear();
  console.log(year);

  if (first.value == "") {
    document.querySelector("#error-first-name").innerHTML =
      "First Name is Required";
    first.style.borderColor = "red";
    flag = 1;
  } else if (!first.value.match(regname) || first.value.length > 30) {
    document.querySelector("#error-first-name").innerHTML =
      "First Name is not valid";
    first.style.borderColor = "red";
    flag = 1;
  }

  if (last.value == "") {
    document.querySelector("#error-last-name").innerHTML =
      "Last Name is Required";
    last.style.borderColor = "red";

    flag = 1;
  } else if (!last.value.match(regname) || last.value.length > 30) {
    document.querySelector("#error-last-name").innerHTML =
      "Last Name is not valid";
    last.style.borderColor = "red";

    flag = 1;
  }

  if (email.value == "") {
    document.querySelector("#error-email-address").innerHTML =
      "Email Address is Required";
    email.style.borderColor = "red";

    flag = 1;
  } else if (!regemail.exec(email.value)) {
    document.querySelector("#error-email-address").innerHTML =
      "Email Address is not valid";
    email.style.borderColor = "red";
    flag = 1;
  }

  if (contact.value == "") {
    document.querySelector("#error-contact-number").innerHTML =
      "Contact Number is Required";
    contact.style.borderColor = "red";

    flag = 1;
  } else if (!regContact.test(contact.value)) {
    document.querySelector("#error-contact-number").innerHTML =
      "Contact Number is not valid";
    contact.style.borderColor = "red";

    flag = 1;
  }

  if (pin.value == "") {
    document.querySelector("#error-pin-code").innerHTML =
      "Pin Code is Required";
    pin.style.borderColor = "red";

    flag = 1;
  } else if (!regPin.test(pin.value)) {
    document.querySelector("#error-pin-code").innerHTML =
      "Pin Code is not valid";
    pin.style.borderColor = "red";

    flag = 1;
  }

  if (card.value == "") {
    document.querySelector("#error-card-number").innerHTML =
      "Card Number is Required";
    card.style.borderColor = "red";

    flag = 1;
  } else if (!regCard.test(card.value)) {
    document.querySelector("#error-card-number").innerHTML =
      "Card Number is not valid";
    card.style.borderColor = "red";

    flag = 1;
  }

  if (expiry.value == "") {
    document.querySelector("#error-card-expiry").innerHTML =
      "Card Expiry is Required";
    expiry.style.borderColor = "red";

    flag = 1;
  } else if (parseInt(expiry.value) < year) {
    document.querySelector("#error-card-expiry").innerHTML =
      "Card Expiry is not valid";
    expiry.style.borderColor = "red";

    flag = 1;
  }

  if (cvv.value == "") {
    document.querySelector("#error-cvv").innerHTML = "CVV is Required";
    cvv.style.borderColor = "red";

    flag = 1;
  } else if (!regCvv.test(cvv.value)) {
    document.querySelector("#error-cvv").innerHTML = "CVV is not valid";
    cvv.style.borderColor = "red";

    flag = 1;
  }

  if (flag == 1) {
    return false;
  }
}

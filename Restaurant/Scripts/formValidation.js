function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var phone = document.forms["contactForm"]["phone"].value;
    var visit = document.forms["contactForm"]["visit"].value;

    if (name == "") {
        alert("Please fill in your name.");
        document.forms["contactForm"]["name"].parentElement.className = "form-group has-error";
        document.forms["contactForm"]["name"].focus();
        return false;
    }

    else if (email == "") {
        alert("Please fill in your email.");
        document.forms["contactForm"]["email"].parentElement.className = "form-group has-error";
        document.forms["contactForm"]["email"].focus();
        return false;
    }

    else if (phone == "") {
        alert("Please fill in your phone number.");
        document.forms["contactForm"]["phone"].parentElement.className = "form-group has-error";
        document.forms["contactForm"]["phone"].focus();
        return false;
    }

    else if (!(visit == "no" || visit == "yes")) {
        alert("Please choose Yes or No.");
        document.forms["contactForm"]["visit"].parentElement.className = "form-group has-error";
        document.forms["contactForm"]["visit"].focus();
        return false;
    }

    else {
      alert("Thank you for completing this form. We will be in contact with you shortly!");
      return true;
    }
}

/* An event listener function is utilized to check for error conditions.
when the form is submitted with the "Submit" button*/
document.getElementById("contactForm").addEventListener("submit", e => {

    // The first and last name values entered as input by the user are assignd to a variable.
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    // The email entered as input by the user is assigned to a variable.
    const email = document.getElementById("email").value;
    // The message entered as input by the user is assigned to a variable.
    const message = document.getElementById("message").value.trim();
    // Min and max lengths for name inputs are set as variables.
    const nameMinLength = 2;
    const nameMaxLength = 20;
    // A regular expression which matches with only alphabetical characters.
    const alphaReg = /^[A-Za-z]+$/;
    // A regular expression which matches with an email.
    const emailReg = /\S+@\S+\.\S+/;

        // If block executes if there are less than 2 or greater than 20 letters in the first name.
        if (firstName.length < nameMinLength && firstName.length >= nameMaxLength) {
            // Styles the border around the first name input box with a red border.
            document.getElementById("firstName").style.borderColor = "red";
            // Writes an error message to the DOM.
            document.getElementById("firstNameError").innerHTML = 
            "Error: First name must contain two (2) to twenty (20) characters.";
            // Stops the form from being submitted, so the user can retry to enter correct data.
            e.preventDefault();
        } else {
            // If the input is correct, the error is erased.
            document.getElementById("firstName").style.borderColor = "blue";
            document.getElementById("firstNameError").innerHTML = "";
        }

    // If block executes if there are less than 2 or greater than 20 letters in the last name.
    if (lastName.length < nameMinLength || firstName.length >= nameMaxLength) {
        // Styles the border around the last name input box with a red border.
        document.getElementById("lastName").style.borderColor = "red";
        // Writes an error message to the DOM.
        document.getElementById("lastNameError").innerHTML = 
        "Error: Last name must contain two (2) to twenty (20) characters.";
        e.preventDefault();
    } else {
        // If the input is correct, the error is erased.
        document.getElementById("lastName").style.borderColor = "blue";
        document.getElementById("lastNameError").innerHTML = "";
    }

    // If block executes if the first name contains non-alphabetical characters.
    if (!firstName.match(alphaReg)) {
        // Styles the border around the first name input box with a red border.
        document.getElementById("firstName").style.borderColor = "red";
        // Writes an error message to the DOM.
        document.getElementById("firstNameError").innerHTML = 
        "Error: First name must only contain alphabetical characters.";
        e.preventDefault();
    } else {
        // If the input is correct, the error is erased.
        document.getElementById("firstName").style.borderColor = "blue";
        document.getElementById("firstNameError").innerHTML = "";
    }

    // If block executes if the last name contains non-alphabetical characters.
    if (!lastName.match(alphaReg)) {
        // Styles the border around the last name input box with a red border.
        document.getElementById("lastName").style.borderColor = "red";
        // Writes an error message to the DOM.
        document.getElementById("lastNameError").innerHTML = 
        "Error: Last name must only contain alphabetical characters.";
        e.preventDefault();
    } else {
        // If the input is correct, the error is erased.
        document.getElementById("lastName").style.borderColor = "blue";
        document.getElementById("lastNameError").innerHTML = "";
    }

    // If block executes if the email does not match the email regular expression above.
    if (!email.match(emailReg)) {
        // Styles the border around the first name input box with a red border.
        document.getElementById("email").style.borderColor = "red";
        // Writes an error message to the DOM.
        document.getElementById("emailError").innerHTML = 
        "Error: Email address is not valid.";
        e.preventDefault();
    } else {
        // If the input is correct, the error is erased.
        document.getElementById("email").style.borderColor = "blue";
        document.getElementById("emailError").innerHTML = "";
    }

    // If block executes if the message box is empty.
    if (message == "") {
        // Styles the border around the first name input box with a red border.
        document.getElementById("message").style.borderColor = "red";
        // Writes an error message to the DOM.
        document.getElementById("messageError").innerHTML = 
        "Error: Message is required.";
        e.preventDefault();
    } else {
        // If the input is correct, the error is erased.
        document.getElementById("message").style.borderColor = "blue";
        document.getElementById("messageError").innerHTML = "";
    }
});
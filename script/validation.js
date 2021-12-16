// Show a message with a type of the input
function showMessage(input, message, type) {
    // Get the small element and set the message
    const msg = input.parentNode.querySelector("small");

    msg.innerText = message;
    // Update the class for the input
    input.className = type ? "success" : "error";

return type;
}

function showError(input, message) {
    return showMessage(input, message, false);
}

function showSuccess(input) {
    return showMessage(input, "", true);
}

function hasValue(input, message) {
    if (input.value.trim() === "") {
        return showError(input, message);
    }

return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
    // Check if the value is not empty
    if (!hasValue(input, requiredMsg)) {
        return false;
    }
    // Validate email format
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const email = input.value.trim();

    if (!emailRegex.test(email)) {
        return showError(input, invalidMsg);
    }

return true;
}

const form = document.querySelector("#form");

const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";

form.addEventListener("submit", event => {
    // Stop form submission
    event.preventDefault();

    // Validate the form
    const nameValid = hasValue(form.elements.name, NAME_REQUIRED);
    const emailValid = validateEmail(form.elements.email, EMAIL_REQUIRED, EMAIL_INVALID);
    // If valid, submit the form.

    if (nameValid && emailValid) {
        this submit()
        alert("Invalid entries. Form not submitted");
    }
});
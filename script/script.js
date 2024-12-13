// VERIFICATION ======================================================================

const inputs = document.querySelectorAll("input"),
button = document.querySelector("button");

inputs.forEach((input, index1) => {
input.addEventListener("keyup", (e) => {
  const currentInput = input,
    nextInput = input.nextElementSibling,
    prevInput = input.previousElementSibling;

  if (currentInput.value.length > 1) {
    currentInput.value = "";
    return;
  }
 
  if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
    nextInput.removeAttribute("disabled");
    nextInput.focus();
  }

  if (e.key === "Backspace") {
    inputs.forEach((input, index2) => {
      if (index1 <= index2 && prevInput) {
        input.setAttribute("disabled", true);
        input.value = "";
        prevInput.focus();
      }
    });
  }
  if (!inputs[3].disabled && inputs[3].value !== "") {
    button.classList.add("active");
    return;
  }
  button.classList.remove("active");
});
});

window.addEventListener("load", () => inputs[0].focus());

function redirectToDashboard() {
    window.location.href = "dashboard.html";
}


// LOGIN REGISTER VALIDATE
function validateForm() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    const usernameError = document.getElementById("username-error");
    const passwordError = document.getElementById("password-error");

    let isValid = true;

    if (username === "") {
        usernameError.style.display = "block";
        isValid = false;
    } else {
        usernameError.style.display = "none";
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    if (!passwordRegex.test(password)) {
        passwordError.style.display = "block";
        isValid = false;
    } else {
        passwordError.style.display = "none";
    }

    if (!isValid) return false;

    window.location.href = "verification.html";
    return false;
}
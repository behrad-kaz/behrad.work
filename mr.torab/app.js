function showVirtualKeyboard() {
  var tooltip = document.getElementById("tooltip");
  tooltip.style.display = tooltip.style.display === "block" ? "none" : "block"; // Toggle the tooltip visibility
}

let Keyboard = window.SimpleKeyboard.default;

let keyboard = new Keyboard({
  onChange: (input) => onChange(input),
  onKeyPress: (button) => onKeyPress(button),
});

/**
 * Update simple-keyboard when input is changed directly
 */
document.querySelector(".input").addEventListener("input", (event) => {
  keyboard.setInput(event.target.value);
});

console.log(keyboard);

function onChange(input) {
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}

function onKeyPress(button) {
  console.log("Button pressed", button);

  /**
   * If you want to handle the shift and caps lock buttons
   */
  if (button === "{shift}" || button === "{lock}") handleShift();
}

function handleShift() {
  let currentLayout = keyboard.options.layoutName;
  let shiftToggle = currentLayout === "default" ? "shift" : "default";

  keyboard.setOptions({
    layoutName: shiftToggle,
  });
}

function generateCaptcha() {
  let captcha = Math.random().toString(36).substring(2, 7);
  document.getElementById("captcha-text").innerText = captcha;
  sessionStorage.setItem("captcha", captcha);
}

function validateCaptcha(event) {
  let userInput = document.getElementById("captcha-input").value;
  let storedCaptcha = sessionStorage.getItem("captcha");

  if (userInput !== storedCaptcha) {
    event.preventDefault();
    alert("کد کپچا اشتباه است.");
    generateCaptcha();
  }
}

// Generate captcha on page load
// window.onload = generateCaptcha();
generateCaptcha();
  

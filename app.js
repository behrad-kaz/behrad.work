
const sendBtn = document.getElementById("send-btn");
const textArea = document.getElementById("message-area");
const textArea2 = document.getElementById("message-area2");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const form = document.getElementById("user-form");

const submit = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();

  if (!firstNameValue || !lastNameValue) {
    alert("نام و نام خانوادگی خود را کامل وارد کنید");
  } else {
    textArea.textContent = firstNameValue;
    textArea2.textContent = lastNameValue;
  }
};

sendBtn.addEventListener("click", () => {
  form.requestSubmit(); // Programmatically trigger form submission
});

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form behavior
  submit();
});

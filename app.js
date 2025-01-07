const sendBtn = document.getElementById("send-btn");
const textArea = document.getElementById("message-area");

const submit = () => {
  let userMessage = prompt("salam");
  if (userMessage.trim() === "") {
    alert("in khaliyeh");
  } else {
    textArea.textContent = userMessage;
  }
};

sendBtn.addEventListener("click", submit);

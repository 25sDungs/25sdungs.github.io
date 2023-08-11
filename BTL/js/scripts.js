document.addEventListener("DOMContentLoaded", function() {
  const openChatButton = document.getElementById("openChat");
  const closeChatButton = document.getElementById("closeChat");
  const chatPopup = document.getElementById("chatPopup");
  const chatContent = document.getElementById("chatContent");
  const messageInput = document.getElementById("messageInput");
  const sendMessageButton = document.getElementById("sendMessage");

  openChatButton.addEventListener("click", function() {
    chatPopup.style.display = "block";
  });

  closeChatButton.addEventListener("click", function() {
    chatPopup.style.display = "none";
  });

  sendMessageButton.addEventListener("click", function() {
    const messageText = messageInput.value;
    if (messageText.trim() !== "") {
      const message = document.createElement("div");
      message.classList.add("message");
      message.classList.add("sender");
      message.textContent = "Bạn: " + messageText;
      chatContent.appendChild(message);
      messageInput.value = "";
    }
  });
});

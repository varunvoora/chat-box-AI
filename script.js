function chatbot(input) {
  let output = "";
  input = input.toLowerCase();

  if (input.includes("hello") || input.includes("hi")) {
    output = "Hello! How can I help you today?";
  } else if (input.includes("how are you")) {
    output = "I'm great, thanks for asking! What about you?";
  } else if (input.includes("what is your name")) {
    output = "You can call me Jarvis, your chat assistant.";
  } else if (input.includes("what can you do")) {
    output = "I can answer basic questions, calculate simple math, and even tell jokes!";
  } else if (input.includes("tell me a joke")) {
    output = "Why did the chicken go to the séance? To talk to the other side!";
  } else if (input.includes("ms dhoni")) {
    output = "That one's easy — it's INDIAN CRICKETER IPL 2025 THALA FOR THE REASON"; 
  } else if (input.includes("2+3")) {
    output = "That one's easy — it's 5!";
  }  else if (input.includes("force") || input.includes("f = m*a")) {
    let massMatch = input.match(/m\s*=?\s*(\d+(\.\d+)?)/i);
    let accMatch = input.match(/a\s*=?\s*(\d+(\.\d+)?)/i);

    if (massMatch && accMatch) {
      let m = parseFloat(massMatch[1]);
      let a = parseFloat(accMatch[1]);
      let F = m * a;
      output = `Using F = m × a: ${m} × ${a} = ${F} N`;
    } else {
      output = "To calculate force, try something like 'm=10 and a=2'.";
    }
  } else if (/^[\d+\-*/().\s]+$/.test(input)) {
    try {
      let result = eval(input);
      output = `The result is ${result}`;
    } catch (error) {
      output = "Hmm, that math didn't work. Try again.";
    }
  } else {
    output = "I'm not sure how to respond to that. Try asking me a question!";
  }

  return output;
}

// Display user's message
function displayUserMessage(message) {
  const chat = document.getElementById("chat");
  const userMessage = document.createElement("div");
  userMessage.classList.add("message", "user");

  const userAvatar = document.createElement("div");
  userAvatar.classList.add("avatar");

  const userText = document.createElement("div");
  userText.classList.add("text");
  userText.innerHTML = message;

  userMessage.appendChild(userAvatar);
  userMessage.appendChild(userText);
  chat.appendChild(userMessage);
  chat.scrollTop = chat.scrollHeight;
}

// Display bot's message
function displayBotMessage(message) {
  const chat = document.getElementById("chat");
  const botMessage = document.createElement("div");
  botMessage.classList.add("message", "bot");

  const botAvatar = document.createElement("div");
  botAvatar.classList.add("avatar");

  const botText = document.createElement("div");
  botText.classList.add("text");
  botText.innerHTML = message;

  botMessage.appendChild(botAvatar);
  botMessage.appendChild(botText);
  chat.appendChild(botMessage);
  chat.scrollTop = chat.scrollHeight;
}

// Handle sending message
function sendMessage() {
  const input = document.getElementById("input").value;
  if (input.trim()) {
    displayUserMessage(input);
    const output = chatbot(input);
    setTimeout(() => {
      displayBotMessage(output);
    }, 600); 
    document.getElementById("input").value = "";
  }
}

// Event Listeners
document.getElementById("button").addEventListener("click", sendMessage);

document.getElementById("input").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});

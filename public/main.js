const socket = io();
console.log(socket.id);

let message = document.getElementById("message");
let username = document.getElementById("username");
let btn = document.getElementById("send");
let output = document.getElementById("output");
let actions = document.getElementById("actions");

message.addEventListener("keypress", function() {
  socket.emit("chat:typing", username.value);
});

btn.addEventListener("click", function() {
  socket.emit("chat:message", {
    username: username.value,
    message: message.value
  });
});

socket.on("chat:message", function(data) {
  console.log(data);
  output.innerHTML += `<p>
    <strong>${data.username}</strong>: ${data.message}
  </p>`;
});

socket.on("chat:typing", function(data) {
  console.log(data);
  actions.innerHTML = `<p><em>${data} is typing</em></p>`;
});

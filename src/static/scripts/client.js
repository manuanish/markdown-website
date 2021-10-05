var socket = io();

socket.on("page_data", (arg) => {
  document.getElementById('content').innerHTML = marked(arg);
});

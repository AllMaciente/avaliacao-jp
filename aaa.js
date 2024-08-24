function addItem() {
  var par = document.getElementById("add");
  var h1 = document.createElement("h1");
  var input = document.getElementById("tarefa").value;
  h1.textContent = input;
  par.appendChild(h1);
}

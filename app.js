//API Doc: https://murl.com/developers/

let url;
document.getElementById("submit").addEventListener("click", result);
function result() {
  url = document.getElementById("urlid").value;
  let api = `https://murl.com/api.php?url=${url}`;
  fetch(api)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("output").innerHTML = data;
    });
}

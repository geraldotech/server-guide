// api url
const api_url = "https://api.github.com/users/geraldotech";

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);
  if (response) {
  }
  show(data);
}
// Calling that async function
getapi(api_url);

function show(data) {
  console.log(data.login);
  document.getElementById("root").innerHTML = data.name;
  document.getElementById("img").innerHTML = `<img src="${data.avatar_url}" />`;
  document.getElementById("bio").innerHTML = `${data.bio}`;
  console.log(data.bio);
}

console.log("git commit");

function hello(name) {
  console.log(name);
}
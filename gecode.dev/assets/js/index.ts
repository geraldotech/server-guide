const app = document.getElementById("app");

const p = document.createElement("p");
const img = document.createElement("img")
//const url = ;

p.classList.add("p1")
p.textContent = "Geraldo";
img.setAttribute("src", `${"http://smartdicastutorial.appspot.com/images/6d88733c461.jpg"}`);
img.classList.add("myimg");
app?.appendChild(p)
app?.appendChild(img)


var postcard = document.getElementById("postcard");
var img = document.getElementById("serverImage");
var uc = document.getElementById("uc");

const data = JSON.stringify("{\"text\":\"write your message here!\",\"color\":\"#e6e2cf\",\"img\":\"a.JPEG\",\"font\":\"Indie Flower\"}")
img.src = data.img;
postcard.style.backgroundColor = data.color;
uc.innerHTML = data.text;
uc.style.fontFamily = data.font;

console.log(data.img);
console.log(data.color);
console.log(data.text);
console.log(data.font);
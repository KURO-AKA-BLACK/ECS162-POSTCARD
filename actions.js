"use strict";

var font_one = document.getElementById("f1");
var font_two = document.getElementById("f2");
var font_three = document.getElementById("f3");
var font_four = document.getElementById("f4");

font_one.addEventListener("click", function () {
	font_one.innerHTML = "&#10070 Indie Flower";
	font_two.innerHTML = "&#9671 Dancing Script";
	font_three.innerHTML = "&#9671 Long Cang";
	font_four.innerHTML = "&#9671 Homemade Apple";
	document.getElementById("uc").style.fontFamily = "Indie Flower";
});

font_two.addEventListener("click", function () {
	font_one.innerHTML = "&#9671 Indie Flower";
	font_two.innerHTML = "&#10070 Dancing Script";
	font_three.innerHTML = "&#9671 Long Cang";
	font_four.innerHTML = "&#9671 Homemade Apple";
	document.getElementById("uc").style.fontFamily = "Dancing Script";
});

font_three.addEventListener("click", function () {
	font_one.innerHTML = "&#9671 Indie Flower";
	font_two.innerHTML = "&#9671 Dancing Script";
	font_three.innerHTML = "&#10070 Long Cang";
	font_four.innerHTML = "&#9671 Homemade Apple";
	document.getElementById("uc").style.fontFamily = "Long Cang";
});

font_four.addEventListener("click", function () {
	font_one.innerHTML = "&#9671 Indie Flower";
	font_two.innerHTML = "&#9671 Dancing Script";
	font_three.innerHTML = "&#9671 Long Cang";
	font_four.innerHTML = "&#10070 Homemade Apple";
	document.getElementById("uc").style.fontFamily = "Homemade Apple";
});

var c_1 = document.getElementById("c1");
var c_2 = document.getElementById("c2");
var c_3 = document.getElementById("c3");
var c_4 = document.getElementById("c4");
var c_5 = document.getElementById("c5");
var c_6 = document.getElementById("c6");
var c_7 = document.getElementById("c7");
var c_8 = document.getElementById("c8");
var c_9 = document.getElementById("c9");
var pc = document.getElementById("pc");



var bc;
var cnt = 0;

c_1.onmouseover = function(){
		if (c_1.style.border != "1px solid black"){
			console.log(c_1.style.border);
			bc = pc.style.backgroundColor;
			c_1.style.border = "1px dashed black";
			pc.style.backgroundColor = "#e6e2cf";
		} 
	cnt = cnt + 1;
};

c_1.onmouseout = function(){
		if (c_1.style.border != "1px solid black"){
			c_1.style.border = "1px solid #e6e2cf";
			pc.style.backgroundColor = bc;
		}
}

c_2.onmouseover = function(){
	if (c_2.style.border != "1px solid black"){
		bc = pc.style.backgroundColor;
		c_2.style.border = "1px dashed black";
		pc.style.backgroundColor = "#dbcaac";
	}
};

c_2.onmouseout = function(){
	if (c_2.style.border != "1px solid black"){
		c_2.style.border = "1px solid #dbcaac";
		pc.style.backgroundColor = bc;
	}
}

c_3.onmouseover = function(){
	if (c_3.style.border != "1px solid black"){
		bc = pc.style.backgroundColor;
		c_3.style.border = "1px dashed black";
		pc.style.backgroundColor = "#c9cbb3";
	}
};

c_3.onmouseout = function(){
	if (c_3.style.border != "1px solid black"){
		c_3.style.border = "1px solid #c9cbb3";
		pc.style.backgroundColor = bc;
	}
}

c_4.onmouseover = function(){
	if (c_4.style.border != "1px solid black"){
		bc = pc.style.backgroundColor;
		c_4.style.border = "1px dashed black";
		pc.style.backgroundColor = "#bbc9ca";
	}
};

c_4.onmouseout = function(){
	if (c_4.style.border != "1px solid black"){
		c_4.style.border = "1px solid #bbc9ca";
		pc.style.backgroundColor = bc;
	}
}

c_5.onmouseover = function(){
	if (c_5.style.border != "1px solid black"){
		bc = pc.style.backgroundColor;
		c_5.style.border = "1px dashed black";
		pc.style.backgroundColor = "#a6a5b5";
	}
};

c_5.onmouseout = function(){
	if (c_5.style.border != "1px solid black"){
		c_5.style.border = "1px solid #a6a5b5";
		pc.style.backgroundColor = bc;
	}
}

c_6.onmouseover = function(){
	if (c_6.style.border != "1px solid black"){
		bc = pc.style.backgroundColor;
		c_6.style.border = "1px dashed black";
		pc.style.backgroundColor = "#b5a6ab";
	}
};

c_6.onmouseout = function(){
	if (c_6.style.border != "1px solid black"){
		c_6.style.border = "1px solid #b5a6ab";
		pc.style.backgroundColor = bc;
	}
}

c_7.onmouseover = function(){
	if (c_7.style.border != "1px solid black"){
		bc = pc.style.backgroundColor;
		c_7.style.border = "1px dashed black";
		pc.style.backgroundColor = "#eccfcf";
	}
};

c_7.onmouseout = function(){
	if (c_7.style.border != "1px solid black"){
		c_7.style.border = "1px solid #eccfcf";
		pc.style.backgroundColor = bc;
	}
}

c_8.onmouseover = function(){
	if (c_8.style.border != "1px solid black"){
		bc = pc.style.backgroundColor;
		c_8.style.border = "1px dashed black";
		pc.style.backgroundColor = "#eceeeb";
	}
};

c_8.onmouseout = function(){
	if (c_8.style.border != "1px solid black"){
		c_8.style.border = "1px solid #eceeeb";
		pc.style.backgroundColor = bc;
	}
}

c_9.onmouseover = function(){
	if (c_9.style.border != "1px solid black"){
		bc = pc.style.backgroundColor;
		c_9.style.border = "1px dashed black";
		pc.style.backgroundColor = "#bab9b5";
	}
};

c_9.onmouseout = function(){
	if (c_9.style.border != "1px solid black"){
		c_9.style.border = "1px solid #bab9b5";
		pc.style.backgroundColor = bc;
	}
}


c_1.addEventListener("click", function () {
	c_1.style.border = "1px solid black";
	c_2.style.border = "1px solid #dbcaac";
	c_3.style.border = "1px solid #c9cbb3";
	c_4.style.border = "1px solid #bbc9ca";
	c_5.style.border = "1px solid #a6a5b5";
	c_6.style.border = "1px solid #b5a6ab";
	c_7.style.border = "1px solid #eccfcf";
	c_8.style.border = "1px solid #eceeeb";
	c_9.style.border = "1px solid #bab9b5";
	pc.style.backgroundColor = "#e6e2cf";
});

c_2.addEventListener("click", function () {
	c_1.style.border = "1px solid #e6e2cf";
	c_2.style.border = "1px solid black";
	c_3.style.border = "1px solid #c9cbb3";
	c_4.style.border = "1px solid #bbc9ca";
	c_5.style.border = "1px solid #a6a5b5";
	c_6.style.border = "1px solid #b5a6ab";
	c_7.style.border = "1px solid #eccfcf";
	c_8.style.border = "1px solid #eceeeb";
	c_9.style.border = "1px solid #bab9b5";
	pc.style.backgroundColor = "#dbcaac";
});

c_3.addEventListener("click", function () {
	c_1.style.border = "1px solid #e6e2cf";
	c_2.style.border = "1px solid #dbcaac";
	c_3.style.border = "1px solid black";
	c_4.style.border = "1px solid #bbc9ca";
	c_5.style.border = "1px solid #a6a5b5";
	c_6.style.border = "1px solid #b5a6ab";
	c_7.style.border = "1px solid #eccfcf";
	c_8.style.border = "1px solid #eceeeb";
	c_9.style.border = "1px solid #bab9b5";
	pc.style.backgroundColor = "#c9cbb3";
});

c_4.addEventListener("click", function () {
	c_1.style.border = "1px solid #e6e2cf";
	c_2.style.border = "1px solid #dbcaac";
	c_3.style.border = "1px solid #c9cbb3";
	c_4.style.border = "1px solid black";
	c_5.style.border = "1px solid #a6a5b5";
	c_6.style.border = "1px solid #b5a6ab";
	c_7.style.border = "1px solid #eccfcf";
	c_8.style.border = "1px solid #eceeeb";
	c_9.style.border = "1px solid #bab9b5";
	pc.style.backgroundColor = "#bbc9ca";
});

c_5.addEventListener("click", function () {
	c_1.style.border = "1px solid #e6e2cf";
	c_2.style.border = "1px solid #dbcaac";
	c_3.style.border = "1px solid #c9cbb3";
	c_4.style.border = "1px solid #bbc9ca";
	c_5.style.border = "1px solid black";
	c_6.style.border = "1px solid #b5a6ab";
	c_7.style.border = "1px solid #eccfcf";
	c_8.style.border = "1px solid #eceeeb";
	c_9.style.border = "1px solid #bab9b5";
	pc.style.backgroundColor = "#a6a5b5";
});

c_6.addEventListener("click", function () {
	c_1.style.border = "1px solid #e6e2cf";
	c_2.style.border = "1px solid #dbcaac";
	c_3.style.border = "1px solid #c9cbb3";
	c_4.style.border = "1px solid #bbc9ca";
	c_5.style.border = "1px solid #a6a5b5";
	c_6.style.border = "1px solid black";
	c_7.style.border = "1px solid #eccfcf";
	c_8.style.border = "1px solid #eceeeb";
	c_9.style.border = "1px solid #bab9b5";
	pc.style.backgroundColor = "#b5a6ab";
});

c_7.addEventListener("click", function () {
	c_1.style.border = "1px solid #e6e2cf";
	c_2.style.border = "1px solid #dbcaac";
	c_3.style.border = "1px solid #c9cbb3";
	c_4.style.border = "1px solid #bbc9ca";
	c_5.style.border = "1px solid #a6a5b5";
	c_6.style.border = "1px solid #b5a6ab";
	c_7.style.border = "1px solid black";
	c_8.style.border = "1px solid #eceeeb";
	c_9.style.border = "1px solid #bab9b5";
	pc.style.backgroundColor = "#eccfcf";
});

c_8.addEventListener("click", function () {
	c_1.style.border = "1px solid #e6e2cf";
	c_2.style.border = "1px solid #dbcaac";
	c_3.style.border = "1px solid #c9cbb3";
	c_4.style.border = "1px solid #bbc9ca";
	c_5.style.border = "1px solid #a6a5b5";
	c_6.style.border = "1px solid #b5a6ab";
	c_7.style.border = "1px solid #eccfcf";
	c_8.style.border = "1px solid black";
	c_9.style.border = "1px solid #bab9b5";
	pc.style.backgroundColor = "#eceeeb";
});

c_9.addEventListener("click", function () {
	c_1.style.border = "1px solid #e6e2cf";
	c_2.style.border = "1px solid #dbcaac";
	c_3.style.border = "1px solid #c9cbb3";
	c_4.style.border = "1px solid #bbc9ca";
	c_5.style.border = "1px solid #a6a5b5";
	c_6.style.border = "1px solid #b5a6ab";
	c_7.style.border = "1px solid #eccfcf";
	c_8.style.border = "1px solid #eceeeb";
	c_9.style.border = "1px solid black";
	pc.style.backgroundColor = "#bab9b5";
});

function uploadFile() {
  
	// get the file chosen by the file dialog control
	const selectedFile = document.getElementById('fileChooser').files[0];
	// store it in a FormData object
	const formData = new FormData();
	// name of field, the file itself, and its name
	formData.append('newImage',selectedFile, selectedFile.name);
	let newImage = document.getElementById("serverImage");
	newImage.src = "../../"+selectedFile.name;
	newImage.style.width = "calc((93.5vw - 2px - 40vw) / 2)";
//  document.getElementById("ci").style.height = newImage.clientHeight + "px";
//	document.getElementById("ci").style.width = newImage.clientHeight + "px";
	document.getElementById("ci").innerHTML = "";
	document.getElementById("ci").classList.remove("choose_img");
	document.getElementById("ri").className = "replace_img";
	document.getElementById("ri").innerHTML = "<label for=\"fileChooser\"><span>Replace Image</span></label><input type=\"file\" id=\"fileChooser\" accept=\"image/png, .jpeg, .jpg, image/gif\" style = \"visibility: hidden;\"> ";
	document.getElementById("fileChooser").addEventListener("change",uploadFile);

}

// Add event listener to the file input element
document.getElementById("fileChooser").addEventListener("change",uploadFile);


document.getElementById("sp").addEventListener("click", function (e) {
	var text = document.getElementById("uc").innerHTML;
	var color = document.getElementById("pc").style.backgroundColor;
	var img = document.getElementById("serverImage").src;
	var font = document.getElementById("uc").style.fontFamily;
	var obj = new Object();
	obj.text = text;
	obj.color = color;
	obj.img = img;
	obj.font = font;
	var jsonString= JSON.stringify(obj);
	var fs = require('fs');
	fs.writeFile("postcardData.json", jsonString, function(err) {
		if (err) {
			console.log(err);
		}
	});
})


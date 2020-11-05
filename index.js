function theme(){
	var themebtn = document.getElementById("themebtn");
	
	var dark = '<meta charset="UTF-8">' + 
		'<link rel="stylesheet" href="dark.css">' + 
		'<link href="https://fonts.googleapis.com/css2?family=Cairo&display=swap" rel="stylesheet">' + 
		'<meta name="viewport" content="width=device-width, initial-scale=1.0">' + 
		'<title>sFa7 - desginer, developer</title>' + 
		'<script src="index.js"></script>';
		
	var light = '<meta charset="UTF-8">' + 
		'<link rel="stylesheet" href="light.css">' + 
		'<link href="https://fonts.googleapis.com/css2?family=Cairo&display=swap" rel="stylesheet">' + 
		'<meta name="viewport" content="width=device-width, initial-scale=1.0">' + 
		'<title>sFa7 - desginer, developer</title>' + 
		'<script src="index.js"></script>';
	
	if(themebtn.innerHTML == "White Theme"){
		themebtn.innerHTML = "Dark Theme";
		document.head.innerHTML = light;
	}else{
		themebtn.innerHTML = "White Theme";
		document.head.innerHTML = dark;
	}
}

function readMore() {
	document.getElementById("read-more").innerHTML = `I like dark colors best of them ( blue, black, ,red ). 
	WTH you want else ?, i'm just kidding lol however why you're not joined my discord server? <a style="color: #5392B2" href="">JOIN NOW</a>`;
	document.getElementById("read-more").style.textDecoration = "none";
}
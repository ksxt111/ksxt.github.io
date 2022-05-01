window.onload = a;
var body = document.getElementsByClassName("body");
var button = document.getElementsByClassName("button");
var QQ = document.getElementsByClassName("QQ");
var gn_1 = document.getElementsByClassName("gn_1");
var gn = document.getElementsByClassName("gn");
var top = document.getElementsByClassName("top");
function a(){
	if((document.documentElement.clientWidth || document.body.clientWidth) > (document.documentElement.clientHeight || document.body.clientHeight)){
		console.log("电脑");
	}else{
		console.log("手机");
		body[0].style.width = (document.documentElement.clientWidth || document.body.clientWidth)*0.8 + "px";
		body[0].style.height = (document.documentElement.clientHeight || document.body.clientHeight)*0.7 + "px";
		gn_1[0].style.height = "10%";
		gn_1[0].style.fontSize = "4vw";
		gn_1[0].children[0].style.height = "50%";
		gn_1[0].children[2].style.height = "50%";
		gn[0].style.height = "20%";
		gn[0].style.fontSize = "3vw";
		button[0].style.height = "30%";
		QQ[0].style.width = "50%";
		QQ[1].style.width = "50%";
		QQ[0].style.fontSize = "4vw";
		QQ[1].style.fontSize = "4vw";
		button[0].style.flexDirection = "column";
	}
};
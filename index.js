window.onload = () =>{
const cvx = document.getElementById("cvx");
cvx.width = window.innerWidth;
cvx.height = window.innerHeight;
const ctx = cvx.getContext("2d");
const drawYourSelf = document.querySelector("#drawYourSelf");
const colorsB = document.querySelector("#Colors");
const Dark = document.querySelector("#DarkMode");
const barSn = document.querySelector(".bar");
var drawOnly = false;
var Ecolor = "#F8EFBA";
var colorBL = "black";
var black = false;
oninput = () =>{
var M1 = document.querySelector("#M1").checked;
var M2 = document.querySelector("#M2").checked;
if(M1){
drawOnly = true;
$("#Colors").css({"bottom":"-90vw"});
$(".bar").css({"right":"-30vw","top":"-30vw"});
$("#Ccolor").css({"display":"none"});
$("#Ocolor").css({"display":"none"});
}
else if(!M1){
$("#Colors").css({"bottom":"-60vw"});
$(".bar").css({"right":"-10vw","top":"-10vw"});
$("#Ccolor").css({"display":"none"});
$("#Ocolor").css({"display":"block"});
}
if(M2){

$("#ABOUT").css({"display":"none","background":"#3e3824"});
$("#Colors, #Nav , #SideNav, .bar").css({"background":"#3e3824","box-shadow":"0 0 5vw black inset","color":"white"});
$("#profile, #innerBtn, #BTN3, #BackBTN").css({"background":"black","box-shadow":"0 0 2vw grey inset"});
$("#openNav, #closeNav").css({"background":"#3e3824","box-shadow":"0 0 10px black inset"});
$("#ClearAll").css({"background":"black","box-shadow":"0 0 10px grey inset"});
$("#Ocolor, #Ccolor").css({"color":"rgb(55,255,55)"});

}
else{
$("#ABOUT").css({"display":"none","background": "linear-gradient(to top, black, 20%, cyan)"});
$("#Colors").css({"background":"#9AECDB","box-shadow":"0 0 20px grey inset","color":"black"});
$("#SideNav").css({"background":"orange","box-shadow":"0 0 20px grey inset","color":"black"});
$(".bar").css({"background":"#f8c291","box-shadow":"0 0 20px grey inset"});
$("#Nav").css({"background":"#ffbe76","color":"black"})
$("#profile, #innerBtn, #BTN3, #BackBTN").css({"background":"rgb(255,175,75,0.9)","box-shadow":"0 0 2vw grey inset"});
$("#ClearAll").css({"background":"rgb(255,105,105)","box-shadow":"0 0 20px #ff742b inset"});
$("#openNav, #closeNav").css({"background":"#ffbe76","box-shadow":"0 0 10px grey inset"});
$("#Ocolor, #Ccolor").css({"color":"rgb(55,155,255"});
}
}
var drawAble = false;
$(function(){
//Jquery for controlling buttons...
$("#BackBTN").click(function(){
$("#drawYourSelf").css({"display":"block"});
$("#ABOUT").css({"display":"none"});
});
$("#BTN3").click(function(){
$("#drawYourSelf").css({"display":"none"});
$("#ABOUT").css({"display":"block"});
})
$("#theme1").click(function(){
ctx.clearRect(0,0,cvx.width,cvx.height);
$("#cvx").css({"background":"#fffa65"});
$("#theme1").css({"opacity":"0.5","border":"1vw solid #ff3838"});
$("#theme2 , #theme3 , #theme4, #theme5, #theme6").css({"border":"none","opacity":"1"});
$(".black").css({"background":"black"});
colorBL = "black";
Ecolor = "#fffa65";
});
$("#theme2").click(function(){
ctx.clearRect(0,0,cvx.width,cvx.height);
$("#cvx").css({"background":"#F8EFBA"});
$("#theme2").css({"opacity":"0.5","border":"1vw solid #ff3838"});
$("#theme1 , #theme3 , #theme4, #theme5, #theme6").css({"border":"none","opacity":"1"});
$(".black").css({"background":"black"});
colorBL = "black";
Ecolor = "#F8EFBA";
});
$("#theme3").click(function(){
ctx.clearRect(0,0,cvx.width,cvx.height);
$("#cvx").css({"background":"#f5f6fa"});
$("#theme3").css({"opacity":"0.5","border":"1vw solid #ff3838"});
$("#theme1 , #theme2 , #theme4, #theme5, #theme6").css({"border":"none","opacity":"1"});
$(".black").css({"background":"black"});
colorBL = "black";
Ecolor = "#f5f6fa";
});
$("#theme4").click(function(){
ctx.clearRect(0,0,cvx.width,cvx.height);
$("#cvx").css({"background":"#130f40"});
$("#theme4").css({"opacity":"0.5","border":"1vw solid #ff3838"});
$("#theme2 , #theme3 , #theme1, #theme5, #theme6").css({"border":"none","opacity":"1"});
$(".black").css({"background":"white"});
colorBL = "white";
Ecolor = "#130f40";
});
$("#theme5").click(function(){
ctx.clearRect(0,0,cvx.width,cvx.height);
$("#cvx").css({"background":"#30336b"});
$("#theme5").css({"opacity":"0.5","border":"1vw solid #ff3838"});
$("#theme2 , #theme3 , #theme1, #theme4, #theme6").css({"border":"none","opacity":"1"});
$(".black").css({"background":"white"});
colorBL = "white";
Ecolor = "#30336b";
});
$("#theme6").click(function(){
ctx.clearRect(0,0,cvx.width,cvx.height);
$("#cvx").css({"background":"#273c75"});
$("#theme6").css({"opacity":"0.5","border":"1vw solid #ff3838"});
$("#theme2 , #theme3 , #theme1, #theme5, #theme4").css({"border":"none","opacity":"1"});
$(".black").css({"background":"white"});
colorBL = "white";
Ecolor = "#273c75";
});

//🔝 themes ........||
$("#RandomColor").click(function(){
$(".red, .blue, .green, .orange, .black , .Erase").css({"opacity":"1","border":"none"});
var r = ~~(Math.random()*255);
var g = ~~(Math.random()*255);
var b = ~~(Math.random()*255);
const rgb =  `rgb(${r},${g},${b})`;
$("#RandomColor").css({'background':rgb,'box-shadow':'0 0 20px grey inset'});
pen.c = rgb;
})
$("#Ocolor").click(function(){
drawAble = true;
$("#Ocolor").css({"display":"none"});
$("#Ccolor").css({"display":"block"});
$("#Colors").css({"bottom":"0"});
$("#SideNav").css({"right":"-60vw"});
$(".openSN").css({'display':'block'});
$(".closeSN").css({"display":"none"});
$("#closeNav").css({"left":"-50vw"});
$("#Nav").css({"left":"-50vw","opacity":"0.5"});
});
$("#Ccolor").click(function(){
$("#Ccolor").css({"display":"none"});
$("#Ocolor").css({"display":"block"});
$("#Colors").css({"bottom":"-60vw"});
});
$(".red").click(function (){
            pen.c = "red";
$(".red").css({"opacity":"0.5","border":"1vw solid gold"});
$(" .blue, .green, .orange, .black,.Erase").css({"opacity":"1","border":
"none"});
});
$(".green").click(function(){
            pen.c = "green";
$(".green").css({"opacity":"0.5","border":"1vw solid gold"});
$(".red, .blue, .black, .orange,.Erase").css({"opacity":"1","border":
"none"});
});
$(".blue").click(function(){
            pen.c = "blue";
$(".blue").css({"opacity":"0.5","border":"1vw solid gold"});
$(".red, .black, .green, .orange,.Erase").css({"opacity":"1","border":
"none"});
});
$(".orange").click(function(){
            pen.c = "orange";
$(".orange").css({"opacity":"0.5","border":"1vw solid gold"});
$(".red, .blue, .green, .black,.Erase").css({"opacity":"1","border":
"none"});
});
$(".black").click(function(){
pen.c = colorBL;
$(".black").css({"opacity":"0.5","border":"1vw solid gold"});
$(".red, .blue, .green, .orange, .Erase").css({"opacity":"1","border":
"none"});
});
//Pclearer
$(".Erase").click(function(){
$(".Erase").css({"opacity":"0.5"});
$(".red, .blue, .green, .orange, .black").css({"opacity":"1","border":"none"});
pen.c = Ecolor;
});
//All clearer
$("#ClearAll").click(function(){
$(".NoteFclear").css({"display":"block"});
$("#closeNav").css({"left":"-50vw"});
$("#Nav").css({"left":"-50vw","opacity":"0.5"});
});

//NAVS
$("#openNav").click(function(){
$("#Nav").css({"left":"0vw","opacity":"1"});
$("#closeNav").css({"left":"50vw"});
if(!M1){
$("#SideNav").css({"right":"-60vw"});
}else if(M1){
$("#SideNav").css({"right":"-90vw"});
}
$(".openSN").css({'display':'block'});
$(".closeSN").css({"display":"none"});
$("#Colors").css({"bottom":"-60vw"});
$("#Ccolor").css({"display":"none"});
$("#Ocolor").css({"display":"block"});
drawAble = false;
});

$("#closeNav").click(function(){
$("#Nav").css({"left":"-50vw","opacity":"0.5"});
$("#closeNav").css({"left":"-50vw"});
drawAble = true;
});

//Notes
$("#Yes").click(function(){
ctx.clearRect(0,0,cvx.width,cvx.height);
$(".NoteFclear").css({"display":"none"});
drawAble = true;
});
$("#No").click(function(){
$(".NoteFclear").css({"display":"none"});
drawAble = true;
})
$(".openSN").click(function(){
drawAble = false;
$("#Nav").css({"left":"-50vw","opacity":"0"});
$("#SideNav").css({"right":"0vw"});
$(".openSN").css({'display':'none'});
$(".closeSN").css({"display":"block"});
$("#Colors").css({"bottom":"-60vw"});
$("#Ccolor").css({"display":"none"});
$("#Ocolor").css({"display":"block"});
});
$(".closeSN").click(function(){
drawAble = true;
$("#SideNav").css({"right":"-60vw"});
$(".openSN").css({'display':'block'});
$(".closeSN").css({"display":"none"});
})
});
function startDraw(e){
pen.x = e.touches[0].clientX;
pen.y = e.touches[0].clientY;
pen.show(e);
pen.oninput()
}
function endDraw(){
ctx.beginPath()
}
addEventListener("touchmove",startDraw);
addEventListener("touchstart",startDraw);
addEventListener("touchend",endDraw);
class Drawer{
constructor(x,y){
    this.x = x;
    this.y = y;
this.slider = document.querySelector('input[type="range"]');
this.val = document.querySelector(".value");
    this.r = this.slider.value;
    this.c = "black";    
}
show(e){
if(drawAble){
ctx.lineWidth= this.rv;
ctx.lineCap="round";
ctx.lineJoin="round"
ctx.strokeStyle= this.c;       
ctx.lineTo(this.x,this.y);
ctx.stroke()
}else if(!drawAble){
$("#note").css({"animation":"note 3s 1"}); }
}
oninput(){
   this.rv = this.slider.value;
   this.val.innerHTML = `radius(${this.rv}):`;
}
}
var pen = new Drawer();

addEventListener("resize",resizeCanvas);
function resizeCanvas(){
    cvx.width = window.innerWidth;
    cvx.height = window.innerHeight;
}


function Loadering(){
const loader = document.querySelector("#loader");
loader.style.display = "none";
drawYourSelf.style.display = "block";
drawAble = true;
}
setTimeout(Loadering,6000);

}

// 同城箭头
let city_icon=document.getElementById("city_icon");
let con_city=document.getElementById("con_city");
let submenu=document.getElementById("submenu");
con_city.addEventListener("mouseenter",function(){
	city_icon.classList.remove("icon-xiajiantou");
	city_icon.classList.add("icon-shangjiantou");
	submenu.classList.add("menuShow");
});
con_city.addEventListener("mouseleave",function(){
	city_icon.classList.remove("icon-shangjiantou");
	city_icon.classList.add("icon-xiajiantou");
	submenu.classList.remove("menuShow");
})

//登录界面
let loge_icon=document.getElementById("loge_icon");
let code_screen=document.getElementById("code_screen");
let close=document.getElementById("close");
loge_icon.addEventListener("click",function(){
	code_screen.classList.add("showdiv");
})
close.addEventListener("click",function(){
	code_screen.classList.remove("showdiv");
})

//搜索界面
let search_more=document.getElementById("search_more");
let search_screen=document.getElementById("search_screen");
let search_close=document.getElementById("search_close");
search_more.addEventListener("click",function(){
	search_screen.classList.add("search_showdiv");
})
search_close.addEventListener("click",function(){
	search_screen.classList.remove("search_showdiv");
})


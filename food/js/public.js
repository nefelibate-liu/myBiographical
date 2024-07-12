// 同城箭头
let city_icon = document.getElementById("city_icon");
let con_city = document.getElementById("con_city");
let submenu = document.getElementById("submenu");
con_city.addEventListener("mouseenter", function() {
	city_icon.classList.remove("icon-xiajiantou");
	city_icon.classList.add("icon-shangjiantou");
	submenu.classList.add("menuShow");
});
con_city.addEventListener("mouseleave", function() {
	city_icon.classList.remove("icon-shangjiantou");
	city_icon.classList.add("icon-xiajiantou");
	submenu.classList.remove("menuShow");
})

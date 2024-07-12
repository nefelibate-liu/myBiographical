// //获取兄弟标签
// function getSiblings(obj) {
// 	var a = [];
// 	var p = obj.parentNode.children;

// 	var pl = p.length;
// 	for (var i = 0; i < pl; i++) {
// 		if (p[i] !== obj) a.push(p[i]);
// 	}
// 	return a;
// }


// //banner轮播图
// let hbnShow = document.getElementById("hbnShow");
// let yuan = document.getElementById("yuan");
// let lis = hbnShow.children;
// let num = lis.length;
// let yuan_li = yuan.children;
// console.log(num)

// //定时器
// var time = setInterval(function() {
// 	let tenn;
// 	for (let i = 0; i <= 7; i++) {
// 		let no = yuan_li[i].getAttribute("class");
// 		if (no != "yuan_li") {
// 			tenn = i;
// 			tenn++;
// 		}
// 		if (tenn == 8) {
// 			tenn = 0;
// 		}
// 	}
// 	yuan_li[tenn].click();
// 	console.log(tenn)

// }, 3000);
// //添加点击事件
// for (let i = 0; i <= lis.length - 3; i++) {
// 	yuan_li[i].addEventListener("click", function() {
// 		hbnShow.style.transform = `translateX(${-300*i}px)`;
// 		let yuan_liBr = getSiblings(yuan_li[i]);
// 		yuan_li[i].classList.add("on");
// 		for (j = 0; j <= yuan_liBr.length - 1; j++) {
// 			yuan_liBr[j].classList.remove("on");
// 		}
// 	})
// };

// let left = document.getElementById("left")
// let right = document.getElementById("right")
// let i = 0;
// left.addEventListener("click", function() {
// 	i--;
// 	if (i < 0) {
// 		i = 7;
// 	}
// 	hbnShow.style.transform = `translateX(${-300*i}px)`;
// 	console.log("left")
// 	let yuan_liBr = getSiblings(yuan_li[i]);
// 	yuan_li[i].classList.add("on");
// 	for (j = 0; j <= yuan_liBr.length - 1; j++) {
// 		yuan_liBr[j].classList.remove("on");
// 	}
// });

// right.addEventListener("click", function() {
// 	i++;
// 	if (i > 7) {
// 		i = 0;
// 	}
// 	hbnShow.style.transform = `translateX(${-300*i}px)`;
// 	console.log("right")
// 	let yuan_liBr = getSiblings(yuan_li[i]);
// 	yuan_li[i].classList.add("on");
// 	for (j = 0; j <= yuan_liBr.length - 1; j++) {
// 		yuan_liBr[j].classList.remove("on");
// 	}
// });
// //banner 轮播图 end
!function (n) {
    var e = n.document,
        t = e.documentElement,
        i = 375,
        d = i / 100,
        o = "orientationchange" in n ? "orientationchange" : "resize",
        a = function () {
            var n = t.clientWidth || 320; n > 375;
            t.style.fontSize = (t.clientWidth < 960 ? n / d : 100) + "px"
        };
    e.addEventListener && (n.addEventListener(o, a, !1), e.addEventListener("DOMContentLoaded", a, !1))
}(window);
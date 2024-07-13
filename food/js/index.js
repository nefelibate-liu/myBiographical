
// 轮播
let banner_ul = document.getElementById("banner_ul");
let fang_ul = document.getElementById("fang_ul");
let fang_li = fang_ul.children;
// obj 是需要获取兄弟节点的那个元素
function getSiblings(obj) {
	var a = [];
	var p = obj.parentNode.children;

	var pl = p.length;
	for (var i = 0; i < pl; i++) {
		if (p[i] !== obj) a.push(p[i]);
	}
	return a;
}

//设置定时器
var time = setInterval(function() {
	let tenn;
	for (let i = 0; i <= 4; i++) {
		let no = fang_li[i].getAttribute("class");
		if (no != "fli_yanse") {
			tenn = i;
		}
	}
	tenn++;
	if (tenn == 5) {
		tenn = 0;
	}

	fang_li[tenn].click();
}, 3000);
//鼠标移入后，定时器取消
fang_ul.onmouseenter = function() {
	clearInterval(time);
};
//鼠标离开后开启定时器
fang_ul.onmouseleave = function() {
	time = setInterval(function() {
		let tenn;
		for (let i = 0; i <= 4; i++) {
			let no = fang_li[i].getAttribute("class");
			if (no != "fli_yanse") {
				tenn = i;
			}
		}
		tenn++;
		if (tenn == 5) {
			tenn = 0;
		}
		fang_li[tenn].click();
	}, 3000);
};
//插入点击、鼠标进入、移除事件
for (let i = 0; i <= 4; i++) {
	// let ten=i;
	let lunbo_brother = getSiblings(fang_li[i]);
	fang_li[i].addEventListener("mouseenter", function() {
		//鼠标移动进去，变换颜色
		let no = this.getAttribute("class");
		if (no == "fli_yanse") {
			this.classList.add("over");
		}

		for (let j = 0; j <= lunbo_brother.length - 1; j++) {
			lunbo_brother[j].classList.remove("over");
		}
	});
	//添加点击事件
	fang_li[i].onclick = function() {
		banner_ul.style.transform = `translateX(${-100*i}vw)`; //大图片的轮播切换
		this.classList.remove("over");
		this.classList.add("active");
		let lunbo_brother = getSiblings(fang_li[i]);
		for (let j = 0; j <= lunbo_brother.length - 1; j++) {
			lunbo_brother[j].classList.remove("active");
		}
	}

	fang_li[i].addEventListener("mouseleave", function() {
		this.classList.remove("over");
	});
}

// 固定框
var guding_p1 = document.getElementById("guding_p1");
window.onscroll = function() {
	guding_p1.style.display = "block";
	var height = document.documentElement.scrollTop || document.body.scrollTop;

	if (height == 0) {
		guding_p1.style.display = "none";
	}
}

guding_p1.onclick = function() {
	var height = document.documentElement.scrollTop || document.body.scrollTop;
	var t = setInterval(() => {
		height -= 50;
		if (height > 0) {
			window.scrollTo(0, height);
		} else {
			window.scrollTo(0, 0);
			clearInterval(t);
		}
	}, 10);
}
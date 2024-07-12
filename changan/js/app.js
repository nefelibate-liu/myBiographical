//获取兄弟标签
function getSiblings(obj) 
	{
	    var a = [];
	    var p= obj.parentNode.children;
		
		var pl = p.length;
	          for(var i = 0; i < pl; i++) {
	              if(p[i] !== obj) a.push(p[i]);
	          }
	          return a;
	}


//二级菜单
let special=document.getElementById("special");
let special2=document.getElementById("special2");
let special3=document.getElementById("special3");
let nav=document.getElementById("nav"); //找标签
let li=nav.children;
let oa=document.getElementById("oa");
let ob=document.getElementById("ob");
let oc=document.getElementById("oc");
let o=document.getElementsByClassName("secmenu");
for(let i=0;i<=li.length-1;i++){
	li[i].addEventListener("mouseenter",function(){
		let ul = this.children[1];
		if(!ul){
			return null;
		}
		ul.classList.add("playmenu");
		special.classList.add("showmenu");
		special2.classList.add("showmenu2");
		special3.classList.add("showmenu3");
		oa.classList.add("o");
		ob.classList.add("o");
		oc.classList.add("o");
	});
	li[i].addEventListener("mouseleave",function(){
		let ul = this.children[1];
		if(!ul){
			return null;
		}
		ul.classList.remove("playmenu");
	});
};
//二级菜单 end

//二级菜单具体内容
let sec=document.getElementById("secmenu")
let sub=document.getElementById("submenu"); //找标签
let lii=sub.children;
for(let i=0;i<=lii.length-1;i++){
	lii[i].addEventListener("mouseenter",function(){
		let a=this.children[0];
		let ul = this.children[1];
		if(!ul){
			return null;
		}
		a.classList.add("o");
		ul.classList.add("showmenu");
	});
	lii[i].addEventListener("mouseleave",function(){
		let ul = this.children[1];
		let a=this.children[0];
		if(!ul){
			return null;
		}
		a.classList.remove("o");
		ul.classList.remove("showmenu");
	});
};

let sub2=document.getElementById("submenu2"); //找标签
let li2=sub2.children;
li2[0].classList.add("showmenu2");
for(let i=0;i<=li2.length-1;i++){
	li2[i].addEventListener("mouseenter",function(){
		let a=this.children[0];
		let ul = this.children[1];
		if(!ul){
			return null;
		}
		a.classList.add("o");
		ul.classList.add("showmenu2");
	});
	li2[i].addEventListener("mouseleave",function(){
		let ul = this.children[1];
		let a=this.children[0];
		if(!ul){
			return null;
		}
		a.classList.remove("o");
		ul.classList.remove("showmenu2");
	});
};

let sub3=document.getElementById("submenu3"); //找标签
let li3=sub3.children;
for(let i=0;i<=li3.length-1;i++){
	li3[i].addEventListener("mouseenter",function(){
		let a=this.children[0];
		let ul = this.children[1];
		if(!ul){
			return null;
		}
		a.classList.add("o");
		ul.classList.add("showmenu3");
	});
	li3[i].addEventListener("mouseleave",function(){
		let ul = this.children[1];
		let a=this.children[0];
		if(!ul){
			return null;
		}
		a.classList.remove("o");
		ul.classList.remove("showmenu3");
	});
};
//二级菜单具体内容 end

	

//banner轮播图
let imgshow = document.getElementById("imgshow");
let yuan=document.getElementById("yuan");
let lis = imgshow.children;
let num=lis.length;
let yuan_li=yuan.children;


//定时器
 var time=setInterval(function (){
 		let  tenn;
 		for(let i=0; i<=4; i++ ){
 			let no=yuan_li[i].getAttribute("class");
 			if(no!="yuan_li"){
 				tenn=i;
				tenn++;
 			}
 			if(tenn==5){
 				tenn=0;
 			}
		}
 			yuan_li[tenn].click();
			console.log(tenn)
 			
 	}, 3000);
//添加点击事件
for(let i=0;i<= num-1;i++){
	yuan_li[i].onclick=function (){
	 imgshow.style.transform = `translateX(${-100*i}vw)`;
			let yuan_liBr=getSiblings(yuan_li[i]);
	 		yuan_li[i].classList.add("on");
	 		for(j=0;j<=yuan_liBr.length-1;j++){
	 			yuan_liBr[j].classList.remove("on");
	 		}
	 }
 };

//banner 轮播图 end



// 第二部分主体内容的轮播
let textleft=document.getElementById("textleft");
let imgshow2=document.getElementById("imgshow2");
let line=document.getElementById("line");
let lines=line.children;
let lli=imgshow2.children;


var time2=setInterval(function (){
 		let  tenn;
 		for(let i=0; i<3; i++ ){
 			let no=lines[i].getAttribute("class");
 			if(no!="line_li"){
 				tenn=i;
				tenn++;
 			}
 			if(tenn==3){
 				tenn=0;
 			}
		}
 			lines[tenn].click();
 			
 	}, 3000);
for(let i=0;i<= lli.length-1;i++){
	lines[i].onclick=function (){
	imgshow2.style.transform = `translateX(${-60*i}vw)`;
	textleft.style.transform = `translateY(${-80*i}vh)`;
	let linesBr=getSiblings(lines[i]);
	lines[i].classList.add("oncolor");
	for(j=0;j<=linesBr.length-1;j++){
		linesBr[j].classList.remove("oncolor");
	}
	}
};
// 第二部分主体内容的轮播end

//滚动一整屏
var wrap = document.getElementById("wrap");
    var main = document.getElementById("main");
    var hei = document.body.clientHeight;
    wrap.style.height = hei + "px";
    var obj = document.getElementsByClassName("page");
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].className == 'page') {
            obj[i].style.height = hei + "px";
        }
    };
    //如果不加时间控制，滚动会过度灵敏，一次翻好几屏
    var startTime = 0, //翻屏起始时间
        endTime = 0,
        now = 0;
    //浏览器兼容
    if ((navigator.userAgent.toLowerCase().indexOf("firefox") != -1)) {
        document.addEventListener("DOMMouseScroll", scrollFun, false);
    }
    else if (document.addEventListener) {
        document.addEventListener("mousewheel", scrollFun, false);
    }
    else if (document.attachEvent) {
        document.attachEvent("onmousewheel", scrollFun);
    }
    else {
        document.onmousewheel = scrollFun;
    }
    //滚动事件处理函数
    function scrollFun(event) {
        startTime = new Date().getTime();
        var delta = event.detail || (-event.wheelDelta);
//mousewheel事件中的 “event.wheelDelta” 属性值：返回的如果是正值说明滚轮是向下滚动

//DOMMouseScroll事件中的 “event.detail” 属性值：返回的如果是负值说明滚轮是向上滚动
        if ((endTime - startTime) < -300) {
            if (delta > 0 && parseInt(main.offsetTop) > -(hei * 4)) {
//向下滚动
                now = now - hei;
                toPage(now);
            }
            if (delta < 0 && parseInt(main.offsetTop) < 0) {
//向上滚动
                now = now + hei;
                toPage(now);
            }
            endTime = new Date().getTime();
        }
        // else {
        //     event.preventDefault();
        // }
    }
    function toPage(now) {
        $("#main").animate({top: (now + 'px')}, 300);//jquery实现动画效果
    }
//滚动一整屏end


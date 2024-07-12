//公告切换
let pcontent = document.getElementById("pcontent");
let list = pcontent.children;
let count = 1;
function qiehuan(){
	pcontent.style.transform = `translateY(${-5.8*count}vh)`;
	count++;
	if(count>3){
		pcontent.style.transform = `translateY(0vh)`;
		count=1;
	}
}
setInterval(function(){qiehuan();},5000);
//公告切换 end


//公告内容
let PC = document.getElementById("PC")
let H = document.getElementById("H");
let know1 = document.getElementById("know1");
PC.onclick = function(){
	H.classList.add("playmenu");
}
know1.onclick = function(){
	H.classList.remove("playmenu");
}

let discount = document.getElementById("discount")
let gold = document.getElementById("gold");
let know2 = document.getElementById("know2");
discount.onclick = function(){
	gold.classList.add("playmenu");
}
know2.onclick = function(){
	gold.classList.remove("playmenu");
}

let gift = document.getElementById("gift")
let money = document.getElementById("money");
let know3 = document.getElementById("know3");
gift.onclick = function(){
	money.classList.add("playmenu");
}
know3.onclick = function(){
	money.classList.remove("playmenu");
}

//公告内容 end


// 回到顶部
        let otop = document.getElementById('top');
        let timer = null;
        let isTop = true;
        otop.onclick = function(){
            //设置定时器
            timer = setInterval(function(){
                //获取滚动条距离顶部的高度
                let osTop = document.documentElement.scrollTop || document.body.scrollTop;  //同时兼容了ie和Chrome浏览器
                //减小的速度
                let isSpeed = Math.floor(-osTop / 6);
                document.documentElement.scrollTop = document.body.scrollTop = osTop + isSpeed;
                //console.log( osTop + isSpeed);
                isTop = true;
                //判断，然后清除定时器
                if (osTop == 0) {
                    clearInterval(timer);
                }
            },0);  
        };
//回到顶部 end


//轮播图
let navlist = document.getElementById("navlist");
let nlist = navlist.children;

//标题的变化
let all=function(tag){
	let child=tag.parentNode.children;
	let siblings =[];
	for(let i=0;i<=child.length-1;i++){
		if(child[i]===tag){
			continue;
		}
		siblings.push(child[i]);
	}
	return siblings;
};

//标题的变化 end

let secondlist = document.getElementById("secondlist");
let slist = secondlist.children
let num = slist.length;
let thirdlist = document.getElementById("thirdlist")
let tlist = thirdlist.children
for(let i=0;i<= num-1;i++){
	nlist[i].addEventListener("mouseenter",function(){
		secondlist.style.transform = `translateY(${-615*i}px)`;
		thirdlist.style.transform = `translateY(${-615*i}px)`;	
		thirdlist.classList.remove('thirdlist');
		thirdlist.offsetWidth = thirdlist.offsetWidth;
		thirdlist.classList.add('thirdlist');
	});
};

for(let i=0 ;i<=nlist.length-1;i++){
	nlist[i].addEventListener("mouseenter",function(event){
		let now = event.currentTarget;
		let nowSiblings = all(now);
		now.classList.add("out");
		for(j=0;j<=nowSiblings.length-1;j++){
			nowSiblings[j].classList.remove("out");
			nowSiblings[j].classList.remove("up");
		};
	});
};


let left = document.getElementById("left")
let right = document.getElementById("right")
let i = 0
	left.addEventListener("click",function(){
		i--;
		if(i<0){
			i=5;
		}
		secondlist.style.transform = `translateY(${-615*i}px)`;
		thirdlist.style.transform = `translateY(${-615*i}px)`;
		thirdlist.classList.remove('thirdlist');
		thirdlist.offsetWidth = thirdlist.offsetWidth;
		thirdlist.classList.add('thirdlist');
		let nowSiblings = all(nlist[i]);
		nlist[i].classList.add("out");
		for(j=0;j<=nowSiblings.length-1;j++){
		nowSiblings[j].classList.remove("out");
		nowSiblings[j].classList.remove("up");
				};
	});
	
	right.addEventListener("click",function(){
		i++;
		if(i>5){
			i=0;
		}
		secondlist.style.transform = `translateY(${-615*i}px)`;
		thirdlist.style.transform = `translateY(${-615*i}px)`;
		thirdlist.classList.remove('thirdlist');
		thirdlist.offsetWidth = thirdlist.offsetWidth;
		thirdlist.classList.add('thirdlist');
		let nowSiblings = all(nlist[i]);
		nlist[i].classList.add("out");
		for(j=0;j<=nowSiblings.length-1;j++){
		nowSiblings[j].classList.remove("out");
		nowSiblings[j].classList.remove("up");
		};
		
	});





//轮播图 end

//联系我们
let tacttext = document.getElementById("tacttext");
let cphone = document.getElementById("cphone");
tacttext.onmouseenter = function(){
	cphone.style.display="block";
}
tacttext.onmouseleave = function(){
	cphone.style.display="none";
}

let imgma = document.getElementById("imgma");
let rightAPP = document.getElementById("rightAPP");
imgma.onmouseenter = function(){
	rightAPP.style.display="block";
}
imgma.onmouseleave = function(){
	rightAPP.style.display="none";
}
//联系我们 end




	
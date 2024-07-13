// 菜单页面的选项卡
let menulist = document.getElementById("menulist");
let menus = menulist.children;
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


for(let i=0 ;i<=menus.length-1;i++){
	menus[i].addEventListener("mouseenter",function(event){
		let now = event.currentTarget;
		let nowSiblings = all(now);
		now.classList.add("bgshow");
		for(j=0;j<=nowSiblings.length-1;j++){
			nowSiblings[j].classList.remove("bgshow");
		};
	});
};

//end

// 选项卡
function findBro(tag) {
	let broArr = [];
	//借用父标签找兄弟们，不包括tag
	let parent = tag.parentNode; //父标签
	let children = parent.children; //找所有的孩子，包拉tdg白己
	for (let i = 0; i <= children.length - 1; i++) {
		//如果tag不等于遍历的孩子，说明这个孩子就是兄氓
		if (tag != children[i]) {
			broArr.push(children[i]);
		}
	}
	return broArr;
	//返回结果: 
}
let pbTitle = document.getElementsByClassName('Js_Title');
let content = document.getElementsByClassName('Js_content');
for (let i = 0; i <= pbTitle.length - 1; i++) {
	let lies = pbTitle[i].children;
	for (let j = 0; j <= lies.length - 1; j++) {
		lies[j].addEventListener("mouseenter", function() {
			this.classList.add("select");
			let thisContent = this.parentNode.nextElementSibling.children[j];
			thisContent.classList.add("show");

			let contentBro = findBro(thisContent);
			contentBro.forEach(function(item, index) {
				item.classList.remove("show")
			})

			let liBro = findBro(this);
			liBro.forEach(function(item, index) {
				item.classList.remove("select")
			})
		});
	}
}
// 选项卡 end


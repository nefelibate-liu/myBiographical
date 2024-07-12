var settings = {
   "url": "https://mock.apifox.cn/m1/1258941-0-default/get/1",
   "method": "GET",
   "timeout": 0,
   "headers": {
   },
};

$.ajax(settings).done(function (response) {
   let banner = response.banner;
   var img1 = banner[0].banner;
   $(".img1").attr("src",img1);
   
   var img2 = banner[1].banner;
   $(".img2").attr("src",img2);
   
   var img3 = banner[2].banner;
   $(".img3").attr("src",img3);
   
   var img4 = banner[3].banner;
   $(".img4").attr("src",img4);
   
   var img5 = banner[4].banner;
   $(".img5").attr("src",img5);
});

$.ajax(settings).done(function (response) {
   let news = response.news;
   var p1=news[0].p;
   $(".p1").text(p1);
   var t1=news[0].t;
   $("#t1").text(t1);
   
   var p2=news[1].p;
   $(".p2").text(p2);
   var t2=news[1].t;
   $("#t2").text(t2);
   
   var p3=news[2].p;
   $(".p3").text(p3);
   var t3=news[2].t;
   $("#t3").text(t3);
});


$.ajax(settings).done(function (response) {
   let newsimg = response.newsimg;
   var newsimg1=newsimg[0].newsimg1;
   $(".newsimg1").attr("src",newsimg1);
   
   var newsimg2=newsimg[0].newsimg2;
   $(".newsimg2").attr("src",newsimg2);
   
   var newsimg3=newsimg[0].newsimg3;
   $(".newsimg3").attr("src",newsimg3);
});

$.ajax(settings).done(function (response) {
	let foottext=response.foottext;
    var h1=foottext[0].h1;
    $("#ftext1 h1:eq(0)").text(h1);
	var text1=foottext[0].text1;
	$("#ftext1 li:eq(0)").text(text1);
	var text2=foottext[0].text2;
	$("#ftext1 li:eq(1)").text(text2);
	var text3=foottext[0].text3;
	$("#ftext1 li:eq(2)").text(text3);
	var text4=foottext[0].text4;
	$("#ftext1 li:eq(3)").text(text4);
	var text5=foottext[0].text5;
	$("#ftext1 li:eq(4)").text(text5);
	
	
	var h1=foottext[1].h1;
	$("#ftext2 h1:eq(0)").text(h1);
	var text1=foottext[1].text1;
	$("#ftext2 li:eq(0)").text(text1);
	var text2=foottext[1].text2;
	$("#ftext2 li:eq(1)").text(text2);
	
	
	var h1=foottext[2].h1;
	$("#ftext3 h1:eq(0)").text(h1);
	var text1=foottext[2].text1;
	$("#ftext3 li:eq(0)").text(text1);
	var text2=foottext[2].text2;
	$("#ftext3 li:eq(1)").text(text2);
	
	
	var h1=foottext[3].h1;
	$("#ftext4 h1:eq(0)").text(h1);
	var text1=foottext[3].text1;
	$("#ftext4 li:eq(0)").text(text1);
	var text2=foottext[3].text2;
	$("#ftext4 li:eq(1)").text(text2);
	var text3=foottext[3].text3;
	$("#ftext4 li:eq(2)").text(text3);
	var text4=foottext[3].text4;
	$("#ftext4 li:eq(3)").text(text4);
});

$.ajax(settings).done(function (response) {
	let iconimg=response.iconimg;
	var iconimg1=iconimg[0].iconimg1;
	$(".iconing li:eq(0)>img").attr("src",iconimg1);
	var iconimg2=iconimg[0].iconimg2;
	$(".iconing li:eq(1)>img").attr("src",iconimg2);
	var iconimg3=iconimg[0].iconimg3;
	$(".iconing li:eq(2)>img").attr("src",iconimg3);
	var iconimg4=iconimg[0].iconimg4;
	$(".iconing li:eq(3)>img").attr("src",iconimg4);
	var iconimg5=iconimg[0].iconimg5;
	$(".iconing li:eq(4)>img").attr("src",iconimg5);
	var iconimg6=iconimg[0].iconimg6;
	$(".iconing li:eq(5)>img").attr("src",iconimg6);
});

$.ajax(settings).done(function (response) {
	let icon=response.icon;
	var iconimg=icon[0].iconimg;
	$(".icon li:eq(0)>img").attr("src",iconimg);
	var maimg1=icon[0].maimg1;
	$(".dingyue>img").attr("src",maimg1);
	var matext1=icon[0].matext1;
	$(".dingyue>p").text(matext1);
	var maimg2=icon[0].maimg2;
	$(".fuwu>img").attr("src",maimg2);
	var matext2=icon[0].matext2;
	$(".fuwu>p").text(matext2);
	var maimg3=icon[0].maimg3;
	$(".shop>img").attr("src",maimg3);
	var matext3=icon[0].matext3;
	$(".shop>p").text(matext3);
	
	var iconimg=icon[1].iconimg;
	$(".icon li:eq(1)>img").attr("src",iconimg);
	var maimg1=icon[1].maimg1;
	$(".weibo>img").attr("src",maimg1);
	var matext1=icon[1].matext1;
	$(".weibo>p").text(matext1);
	
	var iconimg=icon[2].iconimg;
	$(".icon li:eq(2)>img").attr("src",iconimg);
	var maimg1=icon[2].maimg1;
	$(".APP>img").attr("src",maimg1);
	var matext1=icon[2].matext1;
	$(".APP>p").text(matext1);
	var maimg2=icon[2].maimg2;
	$(".chengxu>img").attr("src",maimg2);
	var matext2=icon[2].matext2;
	$(".chengxu>p").text(matext2);
	var maimg3=icon[2].maimg3;
	$(".Call>img").attr("src",maimg3);
	var matext3=icon[2].matext3;
	$(".Call>p").text(matext3);
	var maimg4=icon[2].maimg4;
	$(".CallEV>img").attr("src",maimg4);
	var matext4=icon[2].matext4;
	$(".CallEV>p").text(matext4);
	
	var iconimg=icon[3].iconimg;
	$(".icon li:eq(3)>img").attr("src",iconimg);
	var maimg1=icon[3].maimg1;
	$(".bili>img").attr("src",maimg1);
	var matext1=icon[3].matext1;
	$(".bili>p").text(matext1);
	
	var iconimg=icon[4].iconimg;
	$(".icon li:eq(4)>img").attr("src",iconimg);
	var maimg1=icon[4].maimg1;
	$(".douyin>img").attr("src",maimg1);
	var matext1=icon[4].matext1;
	$(".douyin>p").text(matext1);
	
	var iconimg=icon[5].iconimg;
	$(".icon li:eq(5)>img").attr("src",iconimg);
	var maimg1=icon[5].maimg1;
	$(".zhihu>img").attr("src",maimg1);
	var matext1=icon[5].matext1;
	$(".zhihu>p").text(matext1);
	
});



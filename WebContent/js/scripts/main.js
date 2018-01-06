var classesHtml = '';
var classesID = '';
$(function(){
	$('#header').load('header.html');
	$('#footer').load('footer.html');
	
	//对classNav实行滑动到顶部固定
	var fixedDom = $("#classNav .fixedInTop");
	fixInTop(fixedDom);
	
//  获取banner图片及轮播初始化
	$.ajax({
		type: 'GET',
		url: 'data/info.json',
		dataType: 'json',
		async: true, 
		success: function(data){
			if(data){
				var bannerImgArr = data.bannerImg;
				var imgHtml = "";
				for(var i =0;i<bannerImgArr.length;i++){
					imgHtml += "<li><img id='bannerImg"+i+"' src='"+bannerImgArr[i]+"'/></li>";
				}
				$('#bannerUl').html(imgHtml);
				$(".fullSlide").slide({ titCell:".hd ul", mainCell:".bd ul", effect:"leftLoop", vis:"auto", autoPlay:true, autoPage:true, trigger:"click" });
			}else{
				console.log('未拿到数据');
			}
		}
	});
	changeClasses(1);
})

function GetQueryString(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r!=null) return (r[2]); return null; 
} 


/*
 * 页面向上滑动，元素到达顶部时固定
 * 
 * 前提：无
 * 
 * 输入： 1）参数1：domElement，需要固定元素的DOM
 * 
 * @tantantan
 * 
 * 2018-01-06
 */
function fixInTop(data){
	var ElementTopDis = data.offset().top;
	console.log(ElementTopDis);
	$(window).scroll(function(){
		var scroTopDis = $(this).scrollTop();
		if(scroTopDis>=ElementTopDis){
			data.css({"position":"fixed","top":0,"right":0,"left":0,"margin-left":"auto","margin-right":"auto","z-index":999});
		} else if(scroTopDis<ElementTopDis) {
			data.css({"position":"static"});
		}
	})
}


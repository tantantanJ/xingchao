var classesHtml = '';
var classesID = '';
$(function(){
	$('#header').load('header.html');
	$('#footer').load('footer.html');
//  获取banner图片及轮播初始化
	$.ajax({
		type: 'GET',
		url: 'data/info.json',
		dataType: 'json',
		async: true, 
		success: function(data){
			if(data){
				console.log(data);
				var bannerImgArr = data.bannerImg;
				var imgHtml = "";
				for(var i =0;i<bannerImgArr.length;i++){
					imgHtml += "<li><img id='bannerImg"+i+"' src='"+bannerImgArr[i]+"'/></li>";
				}
				$('#bannerUl').html(imgHtml);
				$(".fullSlide").slide({ titCell:".hd ul", mainCell:".bd ul", effect:"leftLoop", vis:"auto", autoPlay:true, autoPage:true, trigger:"click" });
			}
		}
	});
	changeClasses(1);
	switchStyle();
})

function GetQueryString(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r!=null) return (r[2]); return null; 
} 

function changeClasses(thisInfo){
	var bl = false;
	if(thisInfo == 1){
		bl = true;
		$('.squareButtonContent').children(":first").addClass('theme');
		$('#squareButtonContent').children(":first").addClass('theme');
	}else{
		if(classesID<7){
			$('.squareButton').removeClass('theme');
		}else{
			$('.squareButton2').removeClass('theme');
		}
		$('#'+classesID+'').children().css('background','url(img/g'+classesID+'.png) no-repeat left center');
		classesID = thisInfo.id;
		$(thisInfo).children().css('background','url(img/good'+classesID+'.png) no-repeat left center');
		$(thisInfo).addClass('theme');
		
	}
	var classes = [];
	var leibieID = '';
	var leibie = '';
	$.ajax({
		type: 'GET',
		url: 'data/info.json',
		dataType: 'json',
		async: false, 
		success: function(data){
			if(data){
				classes = data.classes;
				if(!bl){
					for(var i=0;i<classes.length;i++){
						leibieID = classes[i].leibieID;
						if(classesID == leibieID){
							if(classesID<7){
								$('#classes_content').css('background',"url("+classes[i].imgUrl+")");
								$('#classes_h').html(classes[i].leibieName);
								$('#classes_p').html(classes[i].miaoshu);
							}else{
								$('#classes_content2').css('background',"url("+classes[i].imgUrl+")");
								$('#classes_h2').html(classes[i].leibieName);
								$('#classes_p2').html(classes[i].miaoshu);
							}
						}
					}
				} else{
					$('#classes_content').css('background',"url("+classes[0].imgUrl+")");
					$('#classes_h').html(classes[0].leibieName);
					$('#classes_p').html(classes[0].miaoshu);
					$('#classes_content2').css('background',"url("+classes[7].imgUrl+")");
					$('#classes_h2').html(classes[7].leibieName);
					$('#classes_p2').html(classes[7].miaoshu);
				}
			}
		}
	});
}

function switchStyle(){
	var id = GetQueryString(id);
	$.ajax({
		type: 'GET',
		url: 'data/shijing.json',
		dataType: 'json',
		async: false, 
		success: function(data){
			console.log(data);
		}
	})
}

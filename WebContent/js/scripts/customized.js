var package = '';
var customizedArr;
var customizedIntro1 = '';
var customizedIntro2 = '';
var customizedIntro3 = '';
var loctionArr = [];
$(function(){
	$(".customized-nav li:first-child").addClass("active");
	$.ajax({
		type: 'GET',
		url: 'data/customized.json',
		dataType: 'json',
		async: true,
		success: function(data){
			customizedArr = data.customized;
			customizedIntro1 = customizedArr[0].customizedIntro1;
			customizedIntro2 = customizedArr[0].customizedIntro2;
			customizedIntro3 = customizedArr[0].customizedIntro3;
			loctionArr =  customizedArr[0].Loction;
			showCustomizedImgAndIntro();
			$('#customized_brand .brand1').css("display",'block').siblings().css("display",'none');
		}
	});
})
function customizedChange(package){
	if(package == '1'){
		$('.customized-nav li:first-child').addClass("active").siblings().removeClass("active");
		$('#customized_brand .brand1').css("display",'block').siblings().css("display",'none');
	} else if (package == '2') {
		$('.customized-nav li:nth-child(2)').addClass("active").siblings().removeClass("active");
		$('#customized_brand .brand2').css("display",'block').siblings().css("display",'none');
	} else if (package == '3') {
		$('.customized-nav li:nth-child(3)').addClass("active").siblings().removeClass("active");
		$('#customized_brand .brand3').css("display",'block').siblings().css("display",'none');
    }
	console.log(customizedArr);
	if(customizedArr) {
		for(var i=0;i<customizedArr.length;i++){
			if(package == 2){
				customizedIntro1 = customizedArr[1].customizedIntro1;
				customizedIntro2 = customizedArr[1].customizedIntro2;
				customizedIntro3 = customizedArr[1].customizedIntro3;
				loctionArr =  customizedArr[1].Loction;
			} else if(package == 3){
				customizedIntro1 = customizedArr[2].customizedIntro1;
				customizedIntro2 = customizedArr[2].customizedIntro2;
				customizedIntro3 = customizedArr[2].customizedIntro3;
				loctionArr =  customizedArr[2].Loction;
			} else{
				customizedIntro1 = customizedArr[0].customizedIntro1;
				customizedIntro2 = customizedArr[0].customizedIntro2;
				customizedIntro3 = customizedArr[0].customizedIntro3;
				loctionArr =  customizedArr[0].Loction;
			}
		}
	} else {
		console.log('未拿到数据');
	}
	console.log(customizedArr);
	showCustomizedImgAndIntro();
}

function showCustomizedImgAndIntro(){
	var str = '';
	for(var i=0;i<loctionArr.length;i++){
		str += "<ul class='zone-img-wrapper'><li class='zone-img'><img src='";
		str += loctionArr[i].loctionImgUrl;
		str += "' /></li></ul>"
	}
	$('#customized_intro h1').html(customizedIntro1);
	$('#customized_zone h1').html(customizedIntro2);
	$('.customizedIntro3 h1').html(customizedIntro3);
	$('#customized_zone .zone-img-bd').html(str);
	$(".style1_info").slide({trigger:"click",delayTime:700})
}
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
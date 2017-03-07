
function Lights(sSelector)
{
	
	
	
	var s=this;
	s.scene=$(sSelector);
	s.Mainimage=s.scene.find('.MainImage');
	s.max=13;
	var half=Math.floor(Number(s.max)/2);
	for(i=0;i<s.max;i++)
	{
		var r=i;
	
		if(i>half)
		{
		r=0-(s.max-i);
		}
	s.scene.append('<div class="miniicon "data-number="'+r+ '"  data-rotateScale="'+r+'"></div>');//data-number служыт для определения и идентификации
	
	}
	
	s.icons=s.scene.find('.miniicon');
	
	s.rotatecoeficient=360/s.max;
	
	for(i=0;i<s.max;i++)
	{
	s.scene.find('.miniicon:eq('+i+')').css("transform",'rotate('+s.rotatecoeficient*s.scene.find('.miniicon:eq('+i+')').attr('data-number')+'deg)');
	
	
	s.scene.find('.miniicon:eq('+i+')').css("background-image",'url(../images/photos/'+i+'.jpg)');

	}
	
	console.log(s.scene.find('.miniicon:eq(0)').css("background-image"));
	s.Mainimage.css("background-image",s.scene.find('.miniicon:eq(0)').css("background-image"));
	
	s.curentimageNumber=0;
	
	

	
	
	s.RotateFunction=function()
	{
	
		var PreviewNumber=$(event.target).attr('data-number');
		s.Mainimage.css("background-image",$(event.target).css("background-image"));
		for(i=0;i<s.max;i++)
	{
		
		var newNumber=((Number(s.scene.find('.miniicon:eq('+i+')').attr('data-number'))-Number(PreviewNumber)));
		
		if(newNumber>half)
		{
			
			newNumber=0-(Number(s.max)-Number(newNumber))
		}
		if(newNumber<0-Number(half))
		{
			
			newNumber=(Number(s.max)+Number(newNumber))
		}
		
		s.scene.find('.miniicon:eq('+i+')').attr('data-number',newNumber);
		
	}
		for(i=0;i<=s.max;i++)
	{
		
	s.scene.find('.miniicon:eq('+i+')').attr('data-rotateScale',	(Number(s.scene.find('.miniicon:eq('+i+')').attr('data-rotateScale'))-Number(PreviewNumber)));
	var imagerotate=Number((s.scene.find('.miniicon:eq('+i+')').attr('data-rotateScale')-s.curentimageNumber)*s.rotatecoeficient);
	
	s.scene.find('.miniicon:eq('+i+')').css("transform",'rotate('+imagerotate+'deg)');
	}
	
		
	};
	
	
	s.icons.click(s.RotateFunction);
	
	
}
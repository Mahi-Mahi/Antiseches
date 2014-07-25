$(document).ready(function() {  
		$('a.link').click(function () {  
			$('#wrapper').scrollTo($(this).attr('href'),2500);

			setPosition($(this).attr('href'), '#deep4', '0px', '800px', '1600px', '2400px', '3200px', '4000px', '4800px', '5600px', '6400px')
			setPosition($(this).attr('href'), '#deep3', '0px', '1200px', '2400px', '3600px', '4800px', '6000px', '7200px', '8400px', '9600px')
			setPosition($(this).attr('href'), '#deep2', '0px', '1600px', '3200px', '4800px', '6400px', '8000px', '9600px','11200px', '12800px')
			setPosition($(this).attr('href'), '#deep1', '0px', '2000px', '4000px', '6000px', '8000px', '10000px', '12000px', '14000px', '16000px') 
			
			$('a.link').removeClass('selected');  
			$(this).addClass('selected');
			return false;  
		});  
	});
	function setPosition(check, div, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
	if(check==='#box1')
		{
			$(div).scrollTo(p1, 2500);
		}
	else if(check==='#box2')
		{
			$(div).scrollTo(p2, 2500);
		}
	else if(check==='#box3')
		{
			$(div).scrollTo(p3, 2500);
		}
	else if(check==='#box4')
		{
			$(div).scrollTo(p4, 2500);
		}
	else if(check==='#box5')
		{
			$(div).scrollTo(p5, 2500);
		}
	else if(check==='#box6')
		{
			$(div).scrollTo(p6, 2500);
		}
	else if(check==='#box7')
		{
			$(div).scrollTo(p7, 2500);
		}
	else if(check==='#box8')
		{
			$(div).scrollTo(p8, 2500);
		}
	else if(check==='#box9')
		{
			$(div).scrollTo(p9, 2500);
		}

	};

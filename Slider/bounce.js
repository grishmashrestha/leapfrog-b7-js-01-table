var viewport=document.getElementById('background');
var obs=document.getElementsByClassName('obs');

var view_width=viewport.offsetWidth;
var view_height=viewport.offsetHeight;

var ball = document.getElementsByClassName('ball')[0];
var ball_width=ball.offsetWidth;
var ball_height=ball.offsetHeight;

var obs_size=100;

var velo_x,velo_y;
var obs_x,obs_y;

for(var a=0;a<obs.length;a++)
	{
		obs[a].style.width = obs_size+'px';
		obs[a].style.height = obs_size+'px';
		var l = parseInt((Math.random()*1000)%(view_width-obs_size));
		var t = parseInt((Math.random()*1000)%(view_height-obs_size));
		obs[a].style.background = '#'+100;
		obs[a].style.position = 'absolute';
		obs[a].style.left=l+'px';
		obs[a].style.top=t+'px';
		velo_x[a]=l%10;
		velo_y[a]=r%10;
}

var play=true;
var x=20,y=0;

function animate(){
	for(var a=0;a<obs.length;a++)
	{
		
		obs_x[a]+=velo_x[a];
		obs_y[a]+=velo_y[a];

		var l = parseInt((Math.random()*1000)%(view_width-obs_size));
		var r = parseInt((Math.random()*1000)%(view_height-obs_size));
		obs[a].style.top = obs_x[a]+'px';
		obs[a].style.height = obs_y[a]+'px';
		
}
	x+=velo_x;
	y+=velo_y;
	ball.style.top=y+'px';
	ball.style.left=x+'px';
	//conso
	if(x+ball_width>view_width	)
		{velo_x*=-1;	}
	else if(x<0)
		{velo_x*=-1;}
	if(y+ball_height>view_height	)
		{velo_y*=-1;	}
	else if(y<0)
		{velo_y*=-1;}
	//checkcollision();
}

function checkcollision()
{
	for(var a=0;a<obs.length;a++)
	{
		if(x+ball_width>obs[a].offsetWidth )
		{
			velo_x*=-1;
		}
		else if(x<parseInt(obs[a].style.left)+obs[a].offsetWidth)
		{
			velo_x*=-1;
		}
		if(y+ball_height>obs[a].offsetHeight )
		{
			velo_y*=-1;
		}
		else if(x<(parseInt(obs[a].style.top)+obs[a].offsetheight))
		{
			velo_y*=-1;
		}
			
	}

}
setInterval(animate,15);
let x = 50
function setup()
{
	createCanvas(1200,740)
	background(0,255,255)
}

function draw()
{	textSize(80);
	text("BHTORAH.ORG",500,140)
	fill(255,255,0)
	rect(0,150,1200,380)
	fill(210,205,100)
	rect(0,530,1200,250)
	
	if (x>=1200){x=50}
	fill(0)
	rect(x,400,30,70)
	rect(x-0.5,460,14,70)
	rect(x+20,460,14,70)
	if(x%50>25){
		ellipse(x-0.5,410,15,60)
		ellipse(x+30,410,15,50)
	}
	else{ellipse(x-0.5,360,7,80)
		ellipse(x+30,360,7,80)
	}
	fill(255)
	rect(x+10,400,15,70)
	ellipse(x+15, 390, 30,30)
	fill(0)
	ellipse(x+15,375,40,7)
x+=2}




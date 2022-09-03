const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")
canvas.width=1000;
canvas.height=800;

balls=[];
ballNumber = 100;

class ball{
     constructor(x,y,rad,speed){
        this.x = x;
        this.y = y;
        this.rad = rad;
        this.angle = (Math.random()*(Math.PI*2));
        this.vx=Math.cos(this.angle)*speed;
        this.vy=Math.sin(this.angle)*speed;
        this.color="#" + Math.floor(Math.random() * 16777215).toString(16);
    }
    draw(){
        const minX = this.rad;
        const maxX = canvas.width - this.rad;
        const minY = this.rad;
        const maxY = canvas.height - this.rad;
        ctx.beginPath();
        ctx.fillStyle=this.color;
        ctx.arc(this.x,this.y,this.rad,Math.PI*2,false);
        if(this.x<=minX || this.x>=maxX){
            this.vx *= -1;
            this.x += this.vx;
        }else if(this.y<=minY || this.y>=maxY){
            this.vy *= -1;
            this.y += this.vy;
        }else{
            this.x += this.vx;
            this.y += this.vy;
        }
        ctx.fill();
    }
}

function init(){
    for(i=0;i<ballNumber;i++){
      balls[i] = new ball(400,400,Math.random()*20,20)
    }
}

function render(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(i=0;i<ballNumber;i++){
        balls[i].draw();
      }
    requestAnimationFrame(render);
}

init();
render();

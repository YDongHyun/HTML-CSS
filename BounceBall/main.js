const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")
canvas.width=800;
canvas.height=800;

class ball{
     constructor(x,y,rad,speed){
        this.x = x;
        this.y = y;
        this.rad = rad;
        this.vx=speed;
        this.vy=speed;
    }
    draw(){
        const minX = this.rad;
        const maxX = canvas.width - this.rad;
        const minY = this.rad;
        const maxY = canvas.height - this.rad;
        ctx.beginPath();
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

const box = new ball(400,400,20,5);
function render(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    box.draw();
    requestAnimationFrame(render);
}

render();
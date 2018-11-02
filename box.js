function Box(x, y,w,h){
    let options = {
        friction: .6,
        restitution: .5,
        bounce: .2
    }

    this.body = Bodies.rectangle(x,y,w,h,options);
    this.x = vel;
    this.w = random(10,60);
    this.h = random(10,20);
    this.color = random(0,255);
    World.add(world, this.body);

    this.show = function(){
        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(1);
        stroke(255);
        fill(this.color);
        rect(0,0,this.w, this.h);
        pop();
    }
}
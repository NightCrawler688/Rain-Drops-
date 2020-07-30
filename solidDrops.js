class solidDrops {
    constructor() {
        var options = {
            restitution:0.8,
            density: 0.5
              }
        this.x = floor(random(0,width));
        this.y = floor(random(-500,0));

        this.drop = Bodies.circle(this.x,this.y,10,options);
        World.add(world,this.drop);
    }
    display() {
        ellipseMode(RADIUS);
        push();
        translate(this.drop.position.x,this.drop.position.y);
       rotate(this.drop.angle);
       ellipse(this.drop.position.x,this.drop.position.y,10,10);
       
        pop();
        if(this.drop.position.y > height) {
            this.drop.position.y = this.y;
        }
    }
}
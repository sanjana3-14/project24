class Ball{
    constructor(x, y) {
        var options = {
            'restitution':0.5,
            'friction':0.3,
            'density':2
        }
        this.body = Bodies.circle(x, y, 20,options);
        this.radius = 40;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("grey")
        ellipse( 0, 0, this.radius,this.radius);
        pop();
      }
}
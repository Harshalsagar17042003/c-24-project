//class of Sand

class Sand{

    constructor(x,y)
    {

        //here we write properties
        var options={
            'restitution':0.3,
            'friction':5,
            'density':1
        }
        this.body = Bodies.circle(x, y, 4,options);
        //Matter.Body.setAngle(this.body,angle)
      World.add(world,this.body);
      this.x=x;
      this.y=y;
      this.r=4;

    }
    display()
    {
        var sandpos=this.body.position;
        push ();
        translate (sandpos.x,sandpos.y);
        //angleMode(RADIANS);
        //rotate (angle);
        //rectMode(CENTER);
        strokeWeight(4);
        stroke("yellow");
        fill ("white");
        //rect(0,0,this.width,this.height);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r);
        pop ();
    }






};
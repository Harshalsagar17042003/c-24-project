//class of Rubber

class Rubber{

    constructor(x,y,r)
    {

        //here we write properties
        var options={
            'restitution':0.5,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,r,options);
      World.add(world,this.body);
      this.x=x;
      this.y=y;
      this.r=r;
      //this.radius=radius;

    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;

        push ();
        translate (pos.x,pos.y);
        //angleMode(RADIANS);
        //rotate (angle);

        stroke("yellow");
        strokeWeight(5);
        fill (255);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r);
        pop ();
    }






};
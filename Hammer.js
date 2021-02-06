//class of Hammer

class Hammer{

    constructor(x,y,width,height)
    {

        //here we write properties
        var options={
            'restitution':0.5,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y,100,30,options);
      World.add(world,this.body);
      this.x=x;
      this.y=y;
      this.width=100;
      this.height=30;

    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        pos.x=mouseX;
        pos.y=mouseY;
        push ();
        translate (pos.x,pos.y);
        angleMode(RADIANS);
        rotate (angle);

        stroke("white");
        strokeWeight(2);
        fill ("red");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop ();
    }






};
//class of Stone

class Stone{

    constructor(x,y)
    {

        //here we write properties
        var options={
            'restitution':0.5,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y,50,50,options);
      World.add(world,this.body);
      this.x=x;
      this.y=y;
      this.width=50;
      this.height=50;

    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;

        push ();
        translate (pos.x,pos.y);
        angleMode(RADIANS);
        rotate (angle);

        stroke("red");
        strokeWeight(5);
        fill (50,50,50);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop ();
    }






};
class bob
{

    constructor(x,y,r)
    {

        var options = {
         isStatic:true
         ,'friction':0.88
         ,'density':1.2
        }

        

        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r/2, options);
        World.add(world, this.body);

        //this.image = loadImage("clipart-crumpled-paper-1.png");

    }
    
    display(){

        var bobpos = this.body.position;

        push();
        translate(bobpos.x, bobpos.y);
        //imageMode(CENTER);
        //image(this.image, 0, -10, 70, 70);
        ellipse(0,0,this.r, this.r);
        pop();

        
    }

}
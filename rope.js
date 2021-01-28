class rope{

    constructor(bodyA, bodyB, offsetX, offsetY){

        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            pointB : {x:offsetX, y:offsetY}
            //stiffness : 0.04,
            //length : 13
        }

        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){

        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(4);

        var Anchor1X = pointA.x;
        var Anchor1Y = pointA.y;

        var Anchor2X = pointB.x + this.offsetX
        var Anchor2Y = pointB.y + this.offsetY

        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y)
    }


}
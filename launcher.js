class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            langht: 10 
        }
        //create launcher constraint
        this.launch = Constraint.create(options);
        World.add(world, this.launch);
        this.pointB = pointB;
    }

    //create display
    display(){
        if(this.launch.bodyA){
    var pointA = this.launch.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(5);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
     Fly() {
         this.launch.bodyA = null;
     }
    
    Attach(Body) {
        this.launch.bodyA = Body;
    }
}
class Ball{
    constructor(x,y,radius) {
        var options= {
            'restitution':0.8,
            'friction':1,
            'density':0.04
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.radius=radius
        World.add(world,this.body)
    }
    display() {
        var tos=this.body.position
        push()
        translate(tos.x,tos.y)
        rotate(this.body.angle)
        ellipseMode(RADIUS)
        fill('black')
        ellipse(0,0,this.radius,this.radius)
        pop()
    }
}
class Box{
    constructor(x,y,width,height) {
        var options= {
            'restitution':0.8,
            'friction':1,
            'density':0.04
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        World.add(world,this.body)
    }
    display() {
        var tos=this.body.position
        push()
        translate(tos.x,tos.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        fill('yellow')
        rect(0,0,this.width,this.height)
        pop()
    }
}
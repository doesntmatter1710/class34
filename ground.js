class Ground{
    constructor(x,y,width,height) {
        var options= {
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        World.add(world,this.body)
    }
    display() {
        var tos=this.body.position
        rectMode(CENTER)
        fill('blue')
        rect(tos.x,tos.y,this.width,this.height)
    }
}
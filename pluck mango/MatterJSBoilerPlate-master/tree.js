class Tree{
    constructor(x,y,width,height){
     var options={
         isStatic:true
     }
     this.body=Bodies.rectangle(x,y,width,height,options)
     this.width=width
     this.height=height
     this.image =loadImage("tree.png")
     World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push();
        //translate(pos.x,pos.y)
        //rectMode(CENTER)
        imageMode(CENTER)
       image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
        //fill("green")
       // rect(this.body.position.x,this.body.position.y,this.width,this.height)
        pop();
    }
}
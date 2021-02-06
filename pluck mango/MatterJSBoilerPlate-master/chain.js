class Chain{
    constructor(bodyA,pointB){
       var options={
           bodyA:bodyA,
           pointB:pointB,
           stiffness:0.04,
           length:50

       }
       this.pointB=pointB
       this.chain=Constraint.create(options)
       World.add(world,this.chain)
    }
    fly(){
       this.chain.bodyA=null
    }
    display(){
       if(this.chain.bodyA){
           this.pointA=this.chain.bodyA.position
           var pointB=this.pointB
           push();
           strokeWeight(5);
           stroke("white")
           line(this.pointA.x,this.pointA.y,pointB.x,pointB.y,);
           pop();
       } 
    }
}
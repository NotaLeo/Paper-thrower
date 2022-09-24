class Ground{
    constructor(x,y,w,h){
    
     var option={
       isStatic:true
     }
     this.body=Bodies.rectangle (x,y,w,h,option);
     this.w=w;
     this.h=h;
     World.add(world,this.body)

    }
    display(){
        //push()
        fill ("yellow")
        rect (this.body.position.x,this.body.position.y, this.w,this.h)
        //pop()
      
    }
}
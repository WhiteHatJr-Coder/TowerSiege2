/**
 class Rock extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("polygon.png");
    this.Visiblity = 255
  }

 display(){
   console.log(this.body.speed);
   if(this.body.speed < 3){
    super.display();

   }
   else{
     push();
     this.Visiblity = this.Visiblity - 5;
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
   
 }



};
**/
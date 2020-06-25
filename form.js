class Form{
    constructor(){
        this.input  = createInput("  ");
       
        this.PlayB = createButton("Play");
        this.startB = createButton("Start Match");
        this.name = createElement("h3")
        this.nametag = createSprite(displayWidth-150,100,250,100);
        this.nametag.visible = false;

    
    }
    display(){
        this.nametag.addImage(nametag)

        this.startB.position(100,100)
        this.PlayB.position(400,400);
        this.input.position(300,300)
  
        this.name.position(displayWidth-250,50);

        this.name.hide();
        this.startB.hide();
        
        this.PlayB.mousePressed(()=>{
            ETL.play()
            var name = this.input.value()
            this.startB.show();
            this.name.show();
            this.name.html(name);
            this.input.hide();
     
            this.PlayB.hide();
            this.nametag.visible = true;
            gameState = 1

        })
        this.startB.mousePressed(()=>{
            EWG.play()
            this.startB.hide();
            gameState = 2;
        })
    }
}

var HelloWorldLayer = cc.Layer.extend({
    layer1:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        speed = 0;
        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;
        //     var layer1=new cc.LayerColor(cc.color.RED,100,100);
        //     var layer2 =new cc.LayerColor(cc.color.YELLOW,200,200);
        //     layer1.ignoreAnchor=false;
        //     layer1.setAnchorPoint(0.5,0.5);
        //     layer1.y=size.height/2;
        //     this.layer1=layer1;
        //     this.addChild(layer1);
        //     var redSprite=new cc.Sprite(res.Red_png);
        //     ////////////////////////////
        //     this.schedule(this.myCallback,0.02,cc.REPEAT_FOREVER,0);
        //
        //     return true;
        // },
        // update:function(dt){
        //     //cc.log(dt);
        //     this.layer1.x+=1;
        // },
        //  myCallback:function(){
        // //     this.layer1.x+=10;
        // //     if(this.layer1.x>800){
        // //         this.unschedule(this.myCallback);
        // //     }
        //      this.layer1.y-=this.speed;
        //      if(this.redSprite.y<0){
        //          this.speed=-this.speed;
        //      }else{
        //          this.speed+=0.2;
        //      }
        // }
        var musicOffItem=new cc.MenuItemToggle(res.MusicOnNormal_png,res.MusicOnSelected_png);
        var musicOnItem=new cc.MenuItemImage(res.MusicOnNormal_png,res.MusicOnSelected_png);
        var toggleItem=new cc.MenuItemToggle(musicOnItem,musicOffItem,function(){...},this);
        var menu = new cc.Menu(toggleItem);
        this.addChild(menu);

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});


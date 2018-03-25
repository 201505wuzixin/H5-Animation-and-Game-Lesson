
var HelloWorldLayer = cc.Layer.extend({
    label: null,
    second: 0,
    ctor: function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;
        var labelTTF = new cc.LabelTTF("玩家", "", 64);
        labelTTF.x = 50;
        labelTTF.y = size.height - 50;
        labelTTF.setAnchorPoint(0, 1);
        this.addChild(labelTTF);

        labelTTF.setFontFillColor(cc.color.RED);
        labelTTF.enableStroke(cc.color.WHITE, 15);
        this.schedule(this.myTimer, 1, cc.REPEAT_FOREVER, 0);
        this.label=labelTTF;

        var labelBMFont=new cc.labelBMFont('开心消消乐',res.LabelBitmap_fnt);
        labelBMFont.x=size.width*0.5;
        labelBMFont.y=size.height*0.5;
        this.addChild(labelBMFont);

        var ttfLabel=new cc.LabelTTF("其他","",30);
        ttfLabel.setFontFillColor(cc.color.RED);
        ttfLabel.enableStroke(cc.color.YELLOW,2);
        ttfLabel.enableStroke(cc.color.WHITE,15,15,15);
        var otherMenuItem=new cc.MenuItemLabel(ttfLabel,function(){
            cc.log("其他按钮点击");
        },this);
        var menu =new cc.Menu(startMenuItem,setMenuItem,otherMenuItem);
        return true;



    },
    myTimer: function(dt){
        this.second+=1;
        this.label.setString('玩家：'+this.second);
    }


});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});


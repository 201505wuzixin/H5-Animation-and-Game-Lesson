
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;
            var node3=new cc.Sprite(res.Red_png);
            node3.setAnchorPoint(cc.p(1.0,1.0));
            node3.x=200;
            node3.y=200;
            this.addChild(node3);
            var node6=new cc.Sprite(res.Yellow_png);
            node6.x=0;
            node6.y=0;
            node3.addChild(node6);
            var point =node3.convertToNodeSpaceAR(node6.getPosition());
            // var node4=new cc.Sprite(res.Yellow_png);
            // node4.setAnchorPoint(cc.p(0.5,0.5));
            // node4.x=50;
            // node4.y=50;
            // this.addChild(node4);
            // var point =node3.convertToNodeSpaceAR(node4.getPosition());
            cc.log(point.x);
            cc.log(point.y);

            node3.setAnchorPoint(cc.p(1.0,1.0));

            var layer1=new cc.LayerColor(cc.color.RED,200,200);
            var layer2 =new cc.LayerColor(cc.color.YELLOW,200,200);

            layer1.ignoreAnchor=false;
            layer2.ignoreAnchor=false;
            layer1.setAnchorPoint(0,0);
            layer2.setAnchorPoint(1,1);
            layer1.setPosition(0,0);
            layer2.setPosition(size.width-50,size.height-50);
            // layer1.setScale(0.5);
            // layer2.setScale(0.5,0.2);
            this.addChild(layer1);
            this.addChild(layer2);

            layer2.runAction(cc.rotateBy(2,180).repeatForever());

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


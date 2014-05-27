(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 500,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"./images/assetLamp.png", id:"assetLamp"},
		{src:"./images/assetLamp2.png", id:"assetLamp2"},
		{src:"./images/assetLamp3.png", id:"assetLamp3"}
	]
};

// stage content:
(lib.menu1 = function() {
	this.initialize();

	// Layer 1
	this.Knap3_mc = new lib.knap3_mc();
	this.Knap3_mc.setTransform(423.7,150,1,1,0,0,0,23.7,150);
	//this.Knap3_mc.gotoAndStop(1);

	this.Knap2_mc = new lib.knap2_mc();
	this.Knap2_mc.setTransform(279.1,175,1,1,0,0,0,29.1,175);
	//this.Knap2_mc.gotoAndStop(1);

	this.Knap1a_mc = new lib.knap1a_mc();
	this.Knap1a_mc.setTransform(129.4,200,1,1,0,0,0,29.4,200);
	this.Knap1a_mc.gotoAndStop(0);

	this.addChild(this.Knap1a_mc,this.Knap2_mc,this.Knap3_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(358.2,480,409.2,453.4);


// symbols:
(lib.assetLamp = function() {
	this.initialize(img.assetLamp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,449);


(lib.assetLamp2 = function() {
	this.initialize(img.assetLamp2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,386);


(lib.assetLamp3 = function() {
	this.initialize(img.assetLamp3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,391);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.assetLamp();
	this.instance.setTransform(-29.4,-36.2,0.891,0.161);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.4,-36.2,58.8,72.5);


(lib.tekst1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("Ak2DvIAAgIQAYgCAHgJQAHgJAAgTIAAj2QAAgUgFgFQgFgGgNAAIgNACIAAgJIAZgIIA0gSIACACIABACIAAAjQARgSANgIQAXgOAYAAQAkAAAaAeQAaAfAAA0QAAAygfAqQgfAqgvAAQgOABgLgEQgRgGgOgOIAABVQAAAaAJAGQAIAGAdACIAAAJgAjUhMQgQAMAAALIAACAQAHASAOAJQANAJASgBQAcAAAUgbQATgcAAgxQAAgugUgXQgVgYgbAAQgTAAgQALgAn+B5IgegJQgKAAgDAFIgEAMIgMAAIgQhwIAMAAQAOAjASAWQAgAlAuAAQAZAAATgQQATgRAAgcQAAgagTgTQgMgKgngYIgtgdQgVgNgMgNQgXgZAAgeQAAgpAbgaQAbgbAsAAQASAAAaAJIAdAJQAJAAAEgFIAGgNIALAAIALBxIgMAAQgNgzgdgUQgcgUgcAAQgWAAgQANQgQANAAAWQAAAVAMAOQAMAPAbAQIAuAcQAsAcASAWQARAVAAAfQAAApgfAcQggAdgwAAQgZAAgbgKgAG4B8IAAgIQAfgCAKgHQAJgHAAgXIAAjuQAAgMgDgGQgDgHgKAAIgSAEIgUAHIAAgGIBfgxIADAAIABACIAAADIAAE1QAAAUALAGQALAFAdABIAAAIgABtB8IAAgIQAYgCAIgHQAJgIAAgVIAAj7QAAgRgDgHQgFgLgQABIgIAAIgLACIAAgIIBUgZQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABIAAAGIAAE1QAAAWAIAHQAIAGAYACIAAAIgAglB8IAAgIQAcgCAHgHQAFgHAAgeIAAh6QAAgRgCgGQgCgLgMAAIgGABIgQAEIAAgIIBSgdIABAEIAAC4QAAAdAHAIQAHAHAZACIAAAIgAACi9QgGgJAAgKQAAgMAGgHQAIgJALAAQAMAAAIAIQAHAIAAAMQAAAKgHAJQgIAHgMAAQgLAAgIgHg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.6,-23.9,117.3,47.9);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.assetLamp();
	this.instance.setTransform(0,0,0.891,0.891);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,58.8,400);


(lib.knap3_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.assetLamp2();
	this.instance.setTransform(0,0,0.777,0.777);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,47.4,300);


(lib.knap2_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.assetLamp3();
	this.instance.setTransform(0,0,0.895,0.895);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,58.2,350);


(lib.knap1a_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.tekst1("synched",0);
	this.instance.setTransform(-3.1,429.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:15,x:-3.2},0).wait(1).to({rotation:30},0).wait(1).to({rotation:45},0).wait(1).to({rotation:60},0).wait(1).to({rotation:75},0).wait(1).to({rotation:90},0).wait(1).to({rotation:105},0).wait(1).to({rotation:120},0).wait(1).to({rotation:135},0).wait(1).to({rotation:150},0).wait(1).to({rotation:165},0).wait(1).to({rotation:180},0).wait(1).to({rotation:195,y:429.4},0).wait(1).to({rotation:210},0).wait(1).to({rotation:225},0).wait(1).to({rotation:240},0).wait(1).to({rotation:255},0).wait(1).to({rotation:270},0).wait(1).to({rotation:285},0).wait(1).to({rotation:300},0).wait(1).to({rotation:315},0).wait(1).to({rotation:330},0).wait(1).to({rotation:345},0).wait(1).to({rotation:360,x:-3.1,y:429.5},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(31.4,2,1,1,0,0,0,31.4,2);

	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.setTransform(29.4,2,1,1,0,0,0,0,-36);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:29.4,scaleY:0.2,x:29.4,y:2.1},10).to({_off:true},1).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).to({regX:-0.1,scaleX:1.15,scaleY:5.52,x:29.3,y:-24.2},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,0,121.9,489.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
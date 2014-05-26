(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1000,
	height: 1000,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.output1 = function() {
	this.initialize();

	// Layer 2
	this.Knap1_mc = new lib.knap1_mc();
	this.Knap1_mc.setTransform(173.4,843.4,2.01,2.01,0,0,0,50,73.9);

	// Layer 1
	this.Man1_mc = new lib.man1_mc();
	this.Man1_mc.setTransform(135,172,3.41,3.41);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0033FF").ss(1,1,1).p("A/s/dMA/ZAAAMAAAA+7Mg/ZAAAg");
	this.shape.setTransform(502.7,498,2.482,2.482);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("A/sfeMAAAg+7MA/ZAAAMAAAA+7g");
	this.shape_1.setTransform(502.7,498,2.482,2.482);

	this.addChild(this.shape_1,this.shape,this.Man1_mc,this.Knap1_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(464.5,497,1043,1002);


// symbols:
(lib.rotor_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#57190D").s().p("AgEAfQgHgCgMgJQgFgEgEgQQAAgEADgFIAGgJQAIgIACgBQAHgEAOAAQAHACAFAGIAKALQADAGAAAGQACAOgNAKQgLAIgLAAIgEgBg");
	this.shape.setTransform(0,-0.2,0.263,0.263);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B54A1B").s().p("AgLBHQgJgDgNgIIgVgOQgIgIgFgPIgHgYQAAgKAHgMIANgTQAQgQAHgEQALgFANgCIAZgBQAPADANANIAWAaQAFANABAPQAFAggeAWQgYARgbAAIgJAAg");
	this.shape_1.setTransform(0,-0.2,0.263,0.263);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D4906A").s().p("AgNBOQgLgCgOgKIgZgPQgJgJgGgQIgIgbQAAgMAIgMIAPgVQASgSAJgFQAMgGAQgCIAdgBQARADAQAPIAYAdQAHAPABAQQAFAkgiAYQgcATgfAAIgLgBg");
	this.shape_2.setTransform(0,0,0.263,0.263);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#2BCCD2","#3ACBD2","#5FC8D3","#97C4D5","#B0C2D6"],[0.118,0.255,0.51,0.855,0.988],-26.8,17.9,30.9,-15.6).s().p("AArhXQBjhCBEgkIAOgEQARgEAOAFQAuANADBRQAEBSkyBxQiYA6iaApQCYiYDDiDg");
	this.shape_3.setTransform(8,-5.2,0.263,0.263);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#2BCCD2","#3ACBD2","#5FC8D3","#97C4D5","#B0C2D6"],[0.118,0.255,0.51,0.855,0.988],-17.8,-26.9,15.7,30.9).s().p("AhgACQg6iYgpiaQCZCYCCDDQBDBjAkBEIAEAOQADARgEAOQgNAuhSADIgCABQhRAAhwkvg");
	this.shape_4.setTransform(5.2,8,0.263,0.263);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#2BCCD2","#3ACBD2","#5FC8D3","#97C4D5","#B0C2D6"],[0.118,0.255,0.51,0.855,0.988],27,-17.8,-30.8,15.7).s().p("Aj+DCQgtgNgEhSQgEhSEyhxQCXg6CagpQiXCZjDCCQhjBDhEAkIgOAEIgOABQgJAAgIgCg");
	this.shape_5.setTransform(-8,5.2,0.263,0.263);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#2BCCD2","#3ACBD2","#5FC8D3","#97C4D5","#B0C2D6"],[0.118,0.255,0.51,0.855,0.988],17.9,27,-15.6,-30.8).s().p("AhXgqQhChjgkhEIgEgOQgEgRAFgOQANgtBRgEQBSgEBxEyQA6CXApCaQiYiXiDjDg");
	this.shape_6.setTransform(-5.2,-8,0.263,0.263);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16,-16,32.1,32.1);


(lib.knap1_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1A686").s().p("AgXCMIgMgEQgGgBgGgDQgHgCgCgEQgEgDgCgEQgBgEABgGIAEgmIAHgvIAShfIgSADIgOADQgIABgFgBQgGgBgGgHQgFgGgHgLIgJgRQgEgIACgCQACgDAGgBQAVgFAVgCIAxgGIAugEIArgDQAJABAFACQAEABADAEQAHAHAEAJQAEAIACAJQADAHgDADQgBACgKABIg6AGIgwDXQgBAGgCAAQgCABgFABQgFAAgEgCg");
	this.shape.setTransform(74.6,71.9,0.516,0.516);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E1A686").s().p("AhMCMIgPgDQgHgCgGgDQgGgDgCgFQgCgFAAgIIAYi5IAHgXQAEgJAEgCIApgSQAUgIAUgEQAVgEATADQATADAOAOQALAMAJAOQAKAQAEASQAEAVgHAOQgMAWgZAQQgbAUgiAPIA0A1QAKAKAHAFQAGAGAAADQgBADgFAEQgEAEgFABIgKACQgIABgHAAQgJgBgLgHIgjgdIgUgUQgHgHgLgNIgQBIQgBAGgDABIgEABIgGgBgAAJhKQgKACgLAGIgKAjIgLAlQAWgGAPgKQAQgKAMgMQAMgKAFgKQAFgKgCgGQgDgJgTAAQgIAAgNADg");
	this.shape_1.setTransform(62.8,71.9,0.516,0.516);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E1A686").s().p("ABPCNQgIgBgHgCQgHgCgDgEQgDgEgCgIIgEgsIgtAGQgUADgWAFIgVAsQgCAGgEAAQgEACgHgDIgTgIIgHgFIgEgEQgCgDAAgDQAAgDACgIIAUg0IA3h5QANgbAPgcQAFgIAGgGQAIgFAOABIAYACIASAEIAeAIQALAEACAFQADAFgBAKIgGDqQAAAGgDACQgCADgIAAgAAOgZIgcA4IA4gGIAAhmIgcA0g");
	this.shape_2.setTransform(50.1,71.9,0.516,0.516);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E1A686").s().p("AgXCMIgMgEQgGgBgGgDQgGgCgDgEQgEgDgCgEQgBgEABgGIAEgmIAZiOIgSADIgOADQgHABgGgBQgFgBgHgHQgGgGgGgLIgJgRQgEgIACgCQACgDAGgBQAXgFAUgCICJgNQAJABAFACQAEABADAEQAHAHAEAJQAEAIACAJQADAHgDADQgBACgKABIg5AGIgxDXQAAAGgDAAQgCABgFABQgFAAgEgCg");
	this.shape_3.setTransform(39.9,71.9,0.516,0.516);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E1A686").s().p("AguCHQgWgKgbgYQgOgLgBgHQABgFAGgEIALgDIAOgBIAMACQAGACAEADQAcAQATAFQATAFAIgHQAEgCgCgEQgDgFgGgEIhEgvQgKgIgFgIQgIgJgDgJQgEgKAAgLQAAgNAEgLQACgJAHgPQAHgKAJgOQAMgOAJgIQAKgIANgJIAKgGIAMgEIAPAAQAGAAANADIAdAMQAOAIAJAJQAIAHACAFQADAFACAGIABALIAAAKIgIAoIgGATIgHAPQgDAGgEACQgGABgGgCQgsgPAEgZQAAgGACgHIAHgcIAAgKQAAgEgDgBQgCgBgGAEQgFACgHAHQgFAFgHAIQgEAHgFAJQgFAKgBAHQgBAJABAIQACAGAHAHIATAQIAXAPIAVAOQAMAIAEAGQAIAIABAIQABAIgEAJQgEAIgFAHQgHAIgJAGQgJAGgOAFQgNAEgUABIgCAAQgXAAgXgJg");
	this.shape_4.setTransform(28.9,71.8,0.516,0.516);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#81220C").s().p("AgjCIQgGgBgGgDIgJgFQgEgEgCgEQgBgFABgFIAEgmIAZiOIggAFQgJACgEgBQgEgBgIgIQgGgFgGgLIgJgSQgEgGACgDQACgCAGgCQAXgEAUgDIBegKIArgCQAKAAAEACQAEABADAEQAHAIAEAIQAEAIACAJQACAHgCADQgBADgKABIg5AFIgxDXQAAAEgDACQgCABgFAAg");
	this.shape_5.setTransform(74.5,73.2,0.516,0.516);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#81220C").s().p("AhMCMIgPgDQgHgCgGgDQgGgEgCgEQgCgFAAgJIASiZQADgVADgKQADgOAEgJQAEgJAEgCIApgSQAVgIAUgEQAUgEATADQATADAOAOQAJAKALAQQAJAPAFATQAEAVgHAOQgMAWgZAQQgZASgkARIA0A1QAKAKAHAFQAHAGgBADQAAADgFAEQgGAEgEABIgKACQgIABgHAAQgIgBgMgHIgRgMIgmglQgHgHgLgNIgIAlIgIAjQgBAGgDABIgEABIgGgBgAAJhKQgKACgLAGIgVBIQAVgGAQgKQATgMAKgKQALgKAFgKQAFgLgCgFQgDgJgTAAQgIAAgNADg");
	this.shape_6.setTransform(62.8,73.1,0.516,0.516);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#81220C").s().p("ABPCNQgHAAgIgDQgHgCgDgDQgDgEgCgJIgEgsIgtAGQgcAFgOAEQgFAIgGAPIgKAVQgCAFgEABQgDABgIgDIgTgIIgHgEQgDgCgBgDQgCgCAAgEIACgLIAUgzIAag7IAdg/IAcg2QAGgKAFgEQAIgGAOACIAYACIASADIAeAIQALAEACAGQADAFgBAJIgGDrQAAAGgCACQgDACgIAAgAgOAfIAbgDIAdgDIAAhmg");
	this.shape_7.setTransform(50,73.1,0.516,0.516);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#81220C").s().p("AgjCIQgGgBgGgDIgJgFQgEgEgCgEQgBgFABgFIAEgmIAQhfQAFgdAEgSIggAFQgJACgEgBQgEgBgIgIQgGgFgGgLIgJgSQgEgHACgCQACgCAGgCQAXgEAUgDICJgMQAKAAAEACQAEABAEAEQAFAHAFAJIAGARQACAHgBADQgCADgKABIg5AFIgpClIgIAyQAAAEgDACQgDABgEAAg");
	this.shape_8.setTransform(39.9,73.2,0.516,0.516);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#81220C").s().p("AgtCGQgZgJgZgYQgNgLgBgHQAAgFAFgEIANgEIAMAAIANACQAGACAFADQAaAQAVAFQAQAFAKgHQAEgCgDgEQgCgFgGgEIgygiQgLgHgGgGQgJgHgHgJQgHgJgEgJQgDgIgBgNQAAgNAEgMQADgLAHgMQAGgMAJgMQAMgOAJgIQAJgIANgJIALgGIAMgEQAGgBAKABQAJAAAJADQAQAGANAGQAOAIAKAJQAGAHADAEQAEAGABAGIABALIAAAKIgIAnIgGAUIgHAPQgEAGgEACQgDABgIgCQgrgPADgZIACgNIAGgcIABgKQAAgFgDAAQgCgBgHAEIgLAJIgMANQgEAHgFAJQgEAIgCAJQgBAHACAKQACAGAHAHQAHAIAMAIIArAdQAKAGAHAIQAHAJABAHQACAJgGAIIgIAPQgGAHgJAHQgKAGgOAFQgNAEgUABQgYAAgXgKg");
	this.shape_9.setTransform(28.8,73.1,0.516,0.516);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FBDBE8","#2086C0","#2586C0","#3085BE","#4485BD","#5D83BB","#8081B7","#A97FB4","#D97DAF","#F27CAD"],[0,0.733,0.776,0.812,0.851,0.886,0.918,0.953,0.984,1],-6.3,-7.1,0,-6.3,-7.1,28.9).s().p("AiYCZQhAg/AAhaQAAhZBAhAQA/g/BZAAQBaAAA/A/QBABAAABZQAABahAA/Qg/BAhaAAQhZAAg/hAg");
	this.shape_10.setTransform(50.3,16.2,0.516,0.516);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#57190D").s().p("AgOA5IgUgHQgLgHgPgcQgDgIADgJIAGgSQAIgPAHgHQALgKAcgHQALgCANAIIAXARQAIAKAEAMQALAYgUAYQgRAWgdAFQgGAAgMgEg");
	this.shape_11.setTransform(75.8,138.7,0.516,0.516);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B54A1B").s().p("AghB/QglgNgJgCQgRgKgRgZIgZgsQgFgSAHgXIAOgoQATgkANgMQARgPAXgJQAOgGAigJQAbgDAeASIAzAlQASAWAIAbQAYA5grA1QgoAxhAALQgQAAgagJg");
	this.shape_12.setTransform(75.9,138.6,0.516,0.516);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D4906A").s().p("AgoCOQgrgOgJgCQgUgLgTgbQgHgLgVgmQgGgUAJgZIAQgtQAXgpAPgNQATgRAbgLQAQgHAngKQAfgDAjATQAUAMAnAdQAUAZAJAdQAbA/gyA8QgvA3hKANIgCAAQgSAAgdgKg");
	this.shape_13.setTransform(76.2,139.6,0.516,0.516);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#57190D").s().p("AgtECQgggJgtgeQg+gqgQgIQgcgdgSg3QgJgYgQhEQAAglAZgrQAgguAOgWQA3g7AdgPQAngUAwgGQAdgEBCAAQA3AKAvAwIBOBgQAWAyACA2QAQB4hrBOQhWA/hnAAQgRAAgSgCg");
	this.shape_14.setTransform(50.3,16.2,0.516,0.516);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B54A1B").s().p("AiXDvQhrgIiUgcQjMgngzgHQhbgbg8gyQgagWg3hAQAAgjBRgnQAugXBpgpQBbgbAwgMQBNgUA+gKQB9gSCggGQBigDDbAAQCzAJCcAtID/BYQBHAvAHAzQA1BvlhBIQkXA6lUAAQg7AAg8gCg");
	this.shape_15.setTransform(50.3,72.9,0.516,0.516);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D4906A").s().p("AicEJQhwgIiZggQjUgrg2gIQhegeg+g4QgbgXg6hIQAAgnBVgrQBsgwAwgXQBhgeAwgOQBQgWBBgKQCCgUClgGQBmgEDkAAQC6AJCiAyIEJBjQBKAzAHA4QAcA+hZA3QhSAyipAlQkjBAliAAQg8AAg9gCg");
	this.shape_16.setTransform(50.3,71.5,0.516,0.516);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B54A1B").s().p("Ag2E2QgogKg2glQhKgygTgKQghgjgWhBQgKgbgUhVQAAgtAegyQAmg4ARgbQAigjARgQQAcgaAXgMQAugYA6gHQAjgEBQAAQBBALA6A6IBdBzQAbA8ACBCQATCRiBBeQhnBKh7AAQgWAAgVgCg");
	this.shape_17.setTransform(50.3,16.2,0.516,0.516);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D4906A").s().p("Ag/FYQgugMg+goQhXg4gVgLQgngmgZhJQgLgfgYhdQAAgyAjg4QAsg9AUgeQAogoATgRQAhgcAagOQA1gaBDgIQApgFBdAAQBMANBCBAIBsB/QAeBCADBKQAWCgiVBoQh3BTiQAAQgYAAgZgCg");
	this.shape_18.setTransform(50.3,18.5,0.516,0.516);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#81220C").s().p("Ag1oFIhNkeIgzh5QA2gjAqg1IAOgSQAMAYAZAsQATAnAAAfQAEAhAXBSQAVBHAAAsQAKBvAHDhQAPDDBDCAIAyQHIi5ADg");
	this.shape_19.setTransform(72.1,86.2,0.516,0.516);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D4906A").s().p("AAUDmQgHjhgKhtQAAgsgThHQgZhSgEggQAAgfgTgnQgZgtgMgYQAbgjAZgtIBiEHIAcFAIAZIKQhDh/gPjEg");
	this.shape_20.setTransform(73.6,57.4,0.516,0.516);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#57190D").s().p("AgjARIiFAcIg9jhIFHhUICEFXQgZAtgaAjIgOASQgrA1g2Ajg");
	this.shape_21.setTransform(59.1,24.7,0.516,0.516);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#57190D").s().p("AgxAiQgTgYAKgYQAEgMAIgKIAXgRQANgIALACQAcAHALAKQAGAGAJAQIAGASQADAJgCAIIgMATQgHALgIAFQgaALgMAAQgcgFgSgWg");
	this.shape_22.setTransform(26.2,138.7,0.516,0.516);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B54A1B").s().p("AhwBMQgrg1AYg5QAIgbASgWIAzglQAegSAbADQAiAJAOAGQAXAJAQAPQANAMAUAkIAOAoQAGAXgFASIgZAsQgQAZgSAKQgIACglANQgaAJgQAAQhAgLgogxg");
	this.shape_23.setTransform(26.1,138.6,0.516,0.516);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D4906A").s().p("AgICYQhKgNgug3Qgzg8Abg/QAJgdAUgZQAngdAUgMQAjgTAfADQAnALAQAGQAcALASARQAPANAXApIARAtQAIAZgGAUQgVAmgHALQgTAbgUALQgJACgrAOQgdAKgSAAIgCAAg");
	this.shape_24.setTransform(25.9,139.6,0.516,0.516);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#57190D").s().p("AibDJQgPgMgQgQQgUgVgcgiICOlwIFHBUIg9DiIiFgdIhcDcIhogyg");
	this.shape_25.setTransform(42.7,24,0.516,0.516);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D4906A").s().p("AhFAGIAblAIBajtQAcAhAUAWQgFAsgdBEQglBZgIAbQgcCAgWEiQgUEJgqCKg");
	this.shape_26.setTransform(28,58.7,0.516,0.516);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#81220C").s().p("Ai7QEIAxvxQAqiHAUkJQAWkkAeiBQAIgbAjhYQAdhFAFgsQAQAQAPAMIBoAyIg/CWIhNEdIgxYMg");
	this.shape_27.setTransform(30.3,86.2,0.516,0.516);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#81220C").s().p("AiiExQh1gKiggkQjcgxg4gKQhigihBhAQgcgbg9hTQAAgsBYgyQByg2AygbQBkgjAzgPQBTgaBDgLQCIgYCsgHQBqgEDuAAQDCALCoA5QA8AVBRAiICIA6QBNA6AHBCQAdBGhdA/QhVA6iwArQkvBIlzAAQg9AAg/gBg");
	this.shape_28.setTransform(50,71.4,0.516,0.516);

	this.addChild(this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,147.4);


(lib.man1_mc = function() {
	this.initialize();

	// Layer 1
	this.Rotor1_mc = new lib.rotor_mc();
	this.Rotor1_mc.setTransform(-13.1,-18.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8D4C31").s().p("AhHiBIBPBWIASAPQAUATAQASQAQATgJA1QgFAbgIAWg");
	this.shape.setTransform(23.4,-3.6,0.263,0.263);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#57190D").s().p("AgDAXQgDAAgEgDIgHgFQgFgFgCgKQAAgDAHgKIAIgHQAFgDAKAAQAFABAEAEIAHAJQADAFAAAEQABALgKAHQgIAGgIAAIgDgBg");
	this.shape_1.setTransform(4.1,7,0.263,0.263);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B54A1B").s().p("AgIA1QgHgBgJgHIgRgKQgHgIgHgbQAAgIAFgJIAJgOQANgNAFgDQAMgGAYAAQAMACAKAKIAQAUQAFALAAAKQADAYgWARQgSANgUAAIgHgBg");
	this.shape_2.setTransform(4.1,7,0.263,0.263);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D4906A").s().p("AgKA7QgIgBgKgHIgTgMQgHgHgEgMIgGgUQAAgJAGgKIALgPQAOgPAGgDQAOgGAdAAQANACALALIATAWQAFAMABALQAEAbgaASQgVAOgXAAIgJAAg");
	this.shape_3.setTransform(4.1,7.2,0.263,0.263);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#57190D").s().p("AgJA4QgHgCgJgGIgRgLQgGgGgEgMIgGgTQAAgIAGgJIAKgPQAMgNAGgDQAMgHAaAAQAMADAKAKQAGAGALAPQAFALAAAKQAEAagYARQgSANgUAAIgJAAg");
	this.shape_4.setTransform(6.5,-18.6,0.263,0.263);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B54A1B").s().p("AgVB9QgQgEgWgPIgmgYQgNgOgJgbIgMgsQAAgSAMgUQAHgMAPgWQAcgcAOgIQASgJAYgDQANgCAgAAQAbAFAXAXIAmAuQAKAZABAaQAIA6g0AmQgqAegxAAIgRgBg");
	this.shape_5.setTransform(6.5,-18.6,0.263,0.263);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D4906A").s().p("AgYCLQgTgFgZgQQgjgXgJgEQgQgQgKgdIgOgxQAAgUAOgXQAIgNASgYQAgggAQgIQAVgLAcgDQAPgCAlAAQAfAFAbAbIArAzQANAcABAcQAJBAg9AqQgwAig4AAIgUgBg");
	this.shape_6.setTransform(6.5,-18.1,0.263,0.263);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B54A1B").s().p("ACwHpICOphIAAh4IgXihIq7glIAAhEIMNAJIAcEGIgXCAIiFJmg");
	this.shape_7.setTransform(-1.3,-6,0.263,0.263);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F5B28D").s().p("AgzAaIBLgYQAMgCADghQACgdACACQAGAGAMArIgWAcIgwAdIgxANIgCADg");
	this.shape_8.setTransform(24.1,-12,0.263,0.263);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF8D4E").s().p("AgogfIAogHIAYARIARAcIgcAgg");
	this.shape_9.setTransform(12.6,1.8,0.263,0.263);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF8D4E").s().p("Ag9AVIANggIARgOIAVgIIAAgRIAjAMIAUAWIAOAbIADAgIh1AIg");
	this.shape_10.setTransform(22,-7.8,0.263,0.263);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F5B28D").s().p("AgaANIgGgsIASgFIAcASIARASIACAYIgVANg");
	this.shape_11.setTransform(23,-9.4,0.263,0.263);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9F5B38").s().p("AAAAXIgGg0IhDAWIBag0IACA7IA2A8g");
	this.shape_12.setTransform(31.2,-23.3,0.263,0.263);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9F5B38").s().p("AgSARIAEAYIgig5IgCgmIA9ATIAoA1IgogWIAOAvIghgjIAPAvg");
	this.shape_13.setTransform(28.8,-11.3,0.263,0.263);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9F5B38").s().p("Ag7gLIAUhfIBPAAIAUAmQgLAAgkgGIgggGIgIBAIBBB7g");
	this.shape_14.setTransform(23.3,-21.4,0.263,0.263);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF8D4E").s().p("AgkgGIANgVIA8AUIgNAjg");
	this.shape_15.setTransform(31.9,-22.6,0.263,0.263);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgEALQgDgBgBgFQAAgEACgDQACgFAEgCQACgDADACQADABABAFQAAAEgCADQgCAFgEACIgDACIgCgBg");
	this.shape_16.setTransform(31.7,-22.1,0.263,0.263);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000E09").s().p("AgLAZQgHgEgBgJQgBgKAFgIQAGgLAIgFQAGgGAHAEQAHAEABAJQABAKgFAJQgGAKgIAFQgDADgEAAIgGgBg");
	this.shape_17.setTransform(31.8,-21.8,0.263,0.263);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgRAlQgKgEgCgPQgCgPAIgNQAIgQAMgIQALgHAKAEQAKAFACAPQABAOgHAPQgIAPgNAIQgFAEgHAAQgEAAgEgCg");
	this.shape_18.setTransform(31.6,-22,0.263,0.263);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AhuAhIgkicICEhOIBBB/IBgB9IgxAYIAfBJIjvA2g");
	this.shape_19.setTransform(11.3,5.1,0.263,0.263);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#AB643F").s().p("AisANIAAAGQgMgeAAgmQALADADAOQADANABAAQAwAOCFAFQByAEA4AfQhkANhXACIgSAAQiGAAgSglg");
	this.shape_20.setTransform(34.9,-17,0.263,0.263);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F5B28D").s().p("ABmBfQgUgIgMgKQgtgigagTQgrgbgogUQgIgFgOgTQgNgSgNgHQATgZAcgMQApAjA2A0QBeBWAdAuIgfgPg");
	this.shape_21.setTransform(36.3,-19.6,0.263,0.263);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF8D4E").s().p("AnDHhQBDhVBMhRQgigJhOhYQgwg0gug9QgRhcg2hSQADgYANgZQAMgTAPgQIA7g4QAjAoAUANQAhAYAmgCQgEhYBXhWQANgMBCg5QAwgqAZgeIACgPQADgOABgHQAmAJATgOQAQgMAFgfIASASQAHARAQAZIAdArQAHAKAPANIAbAYQAdAUAuAtQAzAyAYATQAlAcAiBRQAjBRAhAbQAFAGAPAAIADAGIANgIQARgBAGADQAWAJAaAlQAaAlARAGQAKADAMAAIAsBFIgwAGIgkg3IgSBDIgfAMIhIgGIg2iEIA2gTIhLgwQhIh9hAhQQhWhphcg5QAiA3AmBmQgGAdgJAUQgRAlgrAmQhEAlhpAMQh5AHg7AIIAIA1QAFAcAMAUIhMAaIA7A5QBEBAArAmQAsAmgmBIQgUAkgcAdIhhCGIhDg0g");
	this.shape_22.setTransform(23.5,5.5,0.263,0.263);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F5B28D").s().p("AAhA6QgSgGgYglQgaglgVgJQgGgCgSABIAwgdIBeAkIASA1IgvAAIAVAiQgLAAgKgEg");
	this.shape_23.setTransform(36.3,5.7,0.263,0.263);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F5B28D").s().p("ADCEFQgggagjhSQgjhRglgcQgYgTgxgwQgugtgdgTIgbgYQgPgOgHgKIgdgrQgSgZgHgRIgRgRIADgRQAcgIAXgEQAQAcAIApIBIBcICsCzIBpDBQgPAAgFgGg");
	this.shape_24.setTransform(28.1,-2.2,0.263,0.263);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF8D4E").s().p("Ak1ElQAEgaAKgQIADgFQArgIARgKQAbgQgGghQgKgtghhDQgphQgKgbIgOgnQgkhtAIhHQBZhUCKAHQB9AGBrBMQAOAHAIAYQAHAcAFAJQgPADgNAGIgBAAIAAABQgbAMgUAZQAOAGANASQAOATAHAFQApAUAqAdQAcATAuAhQAMAJATAJIAgAOQAHALAEALIgKACQg4gfhygFQiHgGgugOQgCAAgDgLQgDgOgKgDQAAAkAMAgIAGBGQg1gwgbg2QgihBALg/QgaATgFAYQgEAUAJAZQgQAsBCBPQAhAoAkAeQgNAagSAWQgkAsgYgXQgGgJgLgEQgKgEgFAEQgZAdgdAYQgkAegfANIACADQgZAFgbAHIAHgtg");
	this.shape_25.setTransform(30.9,-17.9,0.263,0.263);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#AB643F").s().p("AApBmQgmgmg7hoIgEAJQgJgZAEgUQAFgYAagTQgLA/AiBBQAZA2A1AwIAAAIIgBABQgIAAgRgSg");
	this.shape_26.setTransform(28.8,-17.6,0.263,0.263);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F5B28D").s().p("Ai0DoQgTgOgkgnIBOhGQAtgpAegfIAmgoQBNhFATgSQA1gyAigvQgCgVAZgNQACgEAFgEQAFgEACgFIADgDQAEgDADADQALgEAngHIgEAFQgSAfgFBMQgOA7hBgPQAAAHgDAOIgDAQQgZAegwAoQg/A4gNANQhXBVADBYIgHAAQghAAgfgVg");
	this.shape_27.setTransform(16.9,-4.7,0.263,0.263);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#AB643F").s().p("AAWBeIAAgxIhmiHQABAegDAZIgBAJQglhmglg2QBeA5BUBpQBABOBIB9g");
	this.shape_28.setTransform(27.4,-0.4,0.263,0.263);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#AB643F").s().p("AinAhIgIg0QA7gHB3gIQBpgMBEgkQhlBSjhBTQgMgUgFgeg");
	this.shape_29.setTransform(18.5,4.4,0.263,0.263);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF8D4E").s().p("AgOADQAOgEAMgDIACAEIABAAQgJAEgIABIgDAAQgFAAgEgCg");
	this.shape_30.setTransform(34.4,-22.6,0.263,0.263);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF8D4E").s().p("AgCADIgCgDIAJgCQgEADgCACg");
	this.shape_31.setTransform(34.9,-22.7,0.263,0.263);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F5B28D").s().p("ADeBFQgIgYgNgHQhshKh8gGQiKgHhZBSQALheBdgaQCpgwCJBQQA0AeAfAlQAcAlgEAXQgEAVgKALIgKACQgFgJgIgcg");
	this.shape_32.setTransform(28.6,-25.6,0.263,0.263);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D10514").s().p("Ag7CLIAHh8IhyBFIgfgmIBUiaICTgnQAIgzBZhzIBEA0Ih4CmIgSDeIBUC7g");
	this.shape_33.setTransform(8.6,26.5,0.263,0.263);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BB4B33").s().p("AI3AuQgkgKhhgPQhTgNgngMIAAgSQjugyivgvQhAgOhaAKQgzAGhnARQASAHAEASQAHAgACADQgJAAgSACQgRACgLgEQhjgwiKABIhYgzIEVAqIhOhZQFsASGtBTQDqAuCqAsQBMApAdAtQAgAyggArQgWhliagmg");
	this.shape_34.setTransform(-28.7,2.7,0.263,0.263);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#81220C").s().p("AqsCTIFYgLIlehdIEVACIlphuIFFAfIi9hqQCKAABjAwQALAEARgCQASgCAJAAQgCgDgHggQgEgSgSgHQBngRAzgGQBagLBAAPQCvAvDuAyIAAASQAnANBTAOQBhAPAkAJQCaAkAWBmIgBACIgCgEIg2AoIj+gIQiSgHhwgPQgjgGifgtQhzghhRAAQA6AQAzAyQhCAAhQASQgrAKhhAdg");
	this.shape_35.setTransform(-29.6,4.1,0.263,0.263);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#57190D").s().p("AkWAjIiIgPQBjgbApgKQBQgSBCAAQgzgyg5gQQBQAAB2AhQCcAtAjAGQBwAPCSAFID+AIIgrAeQhhgRpcAmQkuASkbAWg");
	this.shape_36.setTransform(-28.2,8.3,0.263,0.263);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B54A1B").s().p("AB4AcQn+gKn0gGIk5gXIAAg2IFXAYMAgKgASIAGB9Qg8gTwAgTg");
	this.shape_37.setTransform(18.3,7.8,0.263,0.263);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("Ag1AvIgKh2IBLhAIA1DRIgrA+g");
	this.shape_38.setTransform(27.8,-18.3,0.263,0.263);

	this.addChild(this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.Rotor1_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-34.7,100,69.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
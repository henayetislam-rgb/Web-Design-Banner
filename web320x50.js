(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"web320x50_atlas_P_", frames: [[0,0,230,175],[143,177,62,92],[0,177,141,285]]},
		{name:"web320x50_atlas_NP_", frames: [[301,0,85,168],[217,0,82,257],[0,0,215,259]]}
];


// symbols:



(lib.bgmac = function() {
	this.spriteSheet = ss["web320x50_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["web320x50_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["web320x50_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ipad = function() {
	this.spriteSheet = ss["web320x50_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.iphonejpgcopy = function() {
	this.spriteSheet = ss["web320x50_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.tamplate1 = function() {
	this.spriteSheet = ss["web320x50_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-33,0,33.1,0).s().p("AlJGfIAAs9IKTAAIAAM9g");
	this.shape.setTransform(33,41.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,66.1,83.1), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghA1IAAhpIBDAAIAAAPIgwAAIAAAeIAtAAIAAAOIgtAAIAAAeIAwAAIAAAQg");
	this.shape.setTransform(59.7,30.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATA1IgTgoIgUAAIAAAoIgTAAIAAhpIAoAAQAJAAAIACQAHADAEAEQAEAFADAGQACAGAAAHQAAAGgCAFQgBAGgDACIgHAGIgHAEIAWArgAgUgBIATAAQAJAAAGgFQAEgEAAgJQAAgJgEgEQgGgFgIAAIgUAAg");
	this.shape_1.setTransform(50.6,30.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghA1IAAhpIBDAAIAAAPIgwAAIAAAeIAtAAIAAAOIgtAAIAAAeIAwAAIAAAQg");
	this.shape_2.setTransform(41.2,30.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAYA1IAAguIgvAAIAAAuIgTAAIAAhpIATAAIAAAsIAvAAIAAgsIATAAIAABpg");
	this.shape_3.setTransform(31.2,30.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUA1IgfgwIgMANIAAAjIgTAAIAAhpIATAAIAAAxIABAAIAqgxIAUAAIgmAtIAoA8g");
	this.shape_4.setTransform(61.4,14.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeArQgMgNABgXIAAgMQgBgYAMgNQAMgMATAAQAKAAAIADQAHADAGAFQAFAFADAHQACAGAAAIIAAABIgSAAQAAgJgGgHQgGgGgLAAQgKAAgHAIQgGAJAAAQIAAAMQgBAQAHAIQAHAIAKAAQALAAAGgGQAGgGAAgJIASAAIAAACQAAAGgCAHQgDAGgFAFQgFAFgIADQgIADgKAAQgUAAgLgMg");
	this.shape_5.setTransform(51.1,14.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIA1IAAhpIASAAIAABpg");
	this.shape_6.setTransform(44,14.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggA1IAAhpIATAAIAABZIAuAAIAAAQg");
	this.shape_7.setTransform(38.4,14.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeArQgMgNABgXIAAgMQgBgYAMgNQAMgMATAAQAKAAAIADQAHADAGAFQAFAFADAHQADAGgBAIIAAABIgSAAQAAgJgGgHQgGgGgLAAQgKAAgHAIQgGAJAAAQIAAAMQgBAQAHAIQAHAIAKAAQALAAAGgGQAGgGAAgJIASAAIAAACQABAGgDAHQgDAGgFAFQgFAFgIADQgIADgKAAQgUAAgLgMg");
	this.shape_8.setTransform(29.1,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(22,2.6,45.8,39.2), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYBbQgLgDgHgGQgHgFgFgHQgEgGgDgHQgCgHAAgHIARAAQABAHADAGQADAGAGAFQAFAFAJAEQAKACAKAAQAVAAAMgJQANgKAAgQQAAgNgJgHQgIgIgSgFIgcgHQgpgKAAgkQAAgPAIgMQAIgMAOgFQANgGAQAAQAQAAANAFQANAGAJALQAIAMAAAOIgRAAQgBgNgLgKQgLgKgUABQgSAAgLAJQgMAIAAAQQAAAYAdAHIAbAIIAUAFQAIAEAHAGQAGAFAEAJQADAHAAALQAAAZgSANQgTAOgbAAQgNAAgLgDg");
	this.shape.setTransform(200.2,18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzBaIAAizIBnAAIAAAPIhXAAIAABBIBTAAIAAAOIhTAAIAABFIBXAAIAAAQg");
	this.shape_1.setTransform(186.1,18.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgwBJQgSgWAAglIAAgaQAAgmATgVQASgWAfAAQANAAAKAEQALADAHAGQAIAGAFAHQAFAIADAIQACAIAAAIIgQAAQAAgHgEgIQgDgHgFgHQgGgGgJgEQgKgEgLAAQgXAAgOASQgOARAAAfIAAAaQAAAfAOARQANAQAZAAQAWAAAMgLQANgMAAgRIARAAQAAAIgDAIQgCAHgFAIQgGAHgHAFQgIAGgKADQgLAEgNAAQggAAgSgVg");
	this.shape_2.setTransform(170.4,18.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHBaIAAizIAPAAIAACzg");
	this.shape_3.setTransform(158.9,18.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIBaIhBizIATAAIA2CdIAAAAIA3idIATAAIhCCzg");
	this.shape_4.setTransform(147.9,18.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AApBaIgkhLIgwAAIAABLIgQAAIAAizIA8AAQAbAAAPAPQAOAPAAAWQAAAKgDAJQgDAJgFAGQgFAFgGAEIgNAGIAmBOgAgrAAIArAAQASAAALgJQALgKAAgRQAAgSgLgKQgLgKgSAAIgrAAg");
	this.shape_5.setTransform(132.6,18.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgzBaIAAizIBnAAIAAAPIhXAAIAABBIBTAAIAAAOIhTAAIAABFIBXAAIAAAQg");
	this.shape_6.setTransform(117.5,18.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYBbQgLgDgHgGQgHgFgFgHQgEgGgDgHQgCgHAAgHIARAAQABAHADAGQADAGAGAFQAFAFAJAEQAKACAKAAQAVAAAMgJQANgKAAgQQAAgNgJgHQgIgIgSgFIgcgHQgpgKAAgkQAAgPAIgMQAIgMAOgFQANgGAQAAQAQAAANAFQANAGAJALQAIAMAAAOIgRAAQgBgNgLgKQgLgKgUABQgSAAgLAJQgMAIAAAQQAAAYAdAHIAbAIIAUAFQAIAEAHAGQAGAFAEAJQADAHAAALQAAAZgSANQgTAOgbAAQgNAAgLgDg");
	this.shape_7.setTransform(102.3,18.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAxBaIhhiWIgBAAIAACWIgQAAIAAizIARAAIBhCWIAAAAIAAiWIARAAIAACzg");
	this.shape_8.setTransform(80.6,18.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgjBUQgRgLgHgSQgIgSAAgYIAAgaQAAglATgWQATgVAfAAQAPAAAMAFQAMAEAIAIQAHAIAFAKQAEAKABALIgQAAQgCgSgNgMQgNgLgUAAQgXAAgOARQgPAQAAAgIAAAaQAAAeAOASQANARAZAAQAVAAAOgLQAOgMAAgUIAAgVIgyAAIAAgOIBCAAIAAAjQAAALgDAKQgEAKgIAJQgHAIgOAFQgNAGgQAAQgWAAgPgKg");
	this.shape_9.setTransform(63.3,18.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIBaIAAizIARAAIAACzg");
	this.shape_10.setTransform(51.7,18.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYBbQgLgDgHgGQgHgFgFgHQgEgGgDgHQgCgHAAgHIARAAQABAHADAGQADAGAGAFQAFAFAJAEQAKACAKAAQAVAAAMgJQANgKAAgQQAAgNgJgHQgIgIgSgFIgcgHQgpgKAAgkQAAgPAIgMQAIgMAOgFQANgGAQAAQAQAAANAFQANAGAJALQAIAMAAAOIgRAAQgBgNgLgKQgLgKgUABQgSAAgLAJQgMAIAAAQQAAAYAdAHIAbAIIAUAFQAIAEAHAGQAGAFAEAJQADAHAAALQAAAZgSANQgTAOgbAAQgNAAgLgDg");
	this.shape_11.setTransform(40.8,18.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgzBaIAAizIBnAAIAAAPIhXAAIAABBIBTAAIAAAOIhTAAIAABFIBXAAIAAAQg");
	this.shape_12.setTransform(26.6,18.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhBBaIAAizIA1AAQAUAAAPAHQAQAGAJAMQAKAMAEAQQAEARAAATQAAAQgCANQgDAOgGALQgGALgJAIQgJAIgNAEQgOAFgQAAgAgxBKIAkAAQA+AAAAhKQAAgWgHgRQgGgQgOgJQgOgKgVAAIgkAAg");
	this.shape_13.setTransform(11,18.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,210,36.2), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AheBtQgXgUAAgfQAAgPAGgNQAGgMAKgJQAJgJAOgHIAMgGQgPgPgJgNQgHgNAAgPQAAgZAUgPQAUgRAdAAQASAAAPAGQAPAHAKANQAKANAAARQAAAMgEAJQgEALgHAHIgQAOQgIAGgKAFIAuAyQAIgQAAgfIAAgNIAqAAIAAAQQAAAugUAcIAtAwIg4AAIgTgUQgOAMgTAGQgTAHgWAAQgnAAgYgSgAgtAQQgaAPAAAXQAAASANAKQAMAJATAAQANAAAMgEQAMgFAIgIIg4g+IgHAEgAgphWQgHAIgBAMQAAAJAGAHQAEAJANAMQAPgIAJgIQAHgJAAgMQAAgMgHgIQgIgHgMAAQgLAAgIAHg");
	this.shape.setTransform(255.2,25.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhJBiQgbgdAAg2IAAgbQAAg2AbgfQAcgeAwAAQAXAAASAHQATAHAMAMQANAMAGAQQAHAQAAASIAAAFIgyAAQAAgVgNgOQgMgOgWAAQgXAAgOASQgOASAAAjIAAAbQAAAiAOASQANARAYABQAWAAANgOQAMgNAAgVIAyAAIAAAGQAAARgGAQQgHAPgMAMQgMALgTAIQgTAGgXAAQgwAAgcgeg");
	this.shape_1.setTransform(223.3,24.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZB7IAAj1IAzAAIAAD1g");
	this.shape_2.setTransform(206.5,24.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAxB7IAAhoIhiAAIAABoIg0AAIAAj1IA0AAIAABjIBiAAIAAhjIA1AAIAAD1g");
	this.shape_3.setTransform(188.6,24.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhcB7IAAj1IBkAAQAnAAAXAXQAXAYAAAkQAAAkgYAWQgWAXgnAAIgwAAIAABRgAgoACIAcAAQAZAAANgJQANgJAAgXQAAgUgLgLQgLgLgTAAIgmAAg");
	this.shape_4.setTransform(165.8,24.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA5B7IgSg9IhQAAIgSA9Ig0AAIBRj1IA9AAIBSD1gAgeAYIA7AAIgdhhIgCAAg");
	this.shape_5.setTransform(142.6,24.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAmB7IgphaIgpAAIAABaIg0AAIAAj1IBkAAQAWAAARAGQARAGAKAKQAKALAHAOQAEAOAAARQAAAMgCALQgDAKgFAHQgFAHgGAGQgFAGgGAEIgMAGIAyBigAgsgFIApAAQASAAALgKQAMgJAAgTQAAgTgMgKQgLgKgRAAIgqAAg");
	this.shape_6.setTransform(120.3,24.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgsB3QgUgIgNgPQgMgPgHgVQgGgUAAgZIAAgeQAAgzAdgfQAcgeAxAAQAYAAASAIQATAGAMANQAMAMAHAPQAGAOAAAQIgyAAQgDgSgNgMQgNgLgUABQgXAAgPARQgOARAAAiIAAAeQAAAgANATQANASAaABQAXAAANgNQAOgMAAgSIAAgOIgwAAIAAglIBiAAIAAAvQAAANgEAMQgCAMgIAMQgHAMgMAJQgLAJgRAGQgSAFgVAAQgaAAgVgJg");
	this.shape_7.setTransform(96.3,24.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhfB7IAAj1IBpAAQAhAAAUAQQAVAQgBAcQABAXgMANQgMAOgUAEIAAADQAYACAQAOQAPAQAAAbQABAggYATQgZASglAAgAgrBVIAjAAQAzAAAAgjQAAgRgMgKQgLgJgUAAIgrAAgAgrgVIAfAAQAsAAAAggQAAgPgKgIQgJgIgPAAIgpAAg");
	this.shape_8.setTransform(66.5,24.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhPB7IAAj1ICgAAIAAAqIhsAAIAAA8IBlAAIAAAmIhlAAIAAA/IBsAAIAAAqg");
	this.shape_9.setTransform(44.5,24.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAtB7IgsilIgBAAIgsClIgxAAIhAj1IA3AAIAkCrIACAAIArirIArAAIArCrIACAAIAkirIA3AAIhAD1g");
	this.shape_10.setTransform(18,24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,268.8,48.2), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#23B3D6").s().p("A3gakMAAAg1HMAvBAAAMAAAA1Hg");
	this.shape.setTransform(150.5,170);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,301,340), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0E6CAC").s().p("AlFEEIAAoHIKLAAIAAIHg");
	this.shape.setTransform(64.7,26);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(32.1,0,65.3,52.1), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D6BB1").s().p("AEVHWQhQgegTAIQhTAfhfABQjKAAiQiQQiPiQAAjKQAAjLCPiPQCQiPDKgBQDLABCPCPQCQCPAADLQAADKiQCQQgPAQAJBMQAFAmAHAiQgkgQgngOg");
	this.shape.setTransform(49,50.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,98,100.1), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.iphonejpgcopy();
	this.instance.parent = this;
	this.instance.setTransform(-2,0,1.642,1.642);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-2,0,134.7,422.1), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ipad();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,85,168), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tamplate1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,215,259), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bgmac();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,230,175), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0033CC").s().p("AAJBVQgQgBgPgHQgQgHgLgNQgLgNgFgOQgGgRAAgPIgUgCQgEABgCgEQgCgGAEgDIAlghQACgCADABQAEAAACACIAgAlQADAEgCAEQgCAEgEgBIgXAAQgBAVAQARQAHAIALAFQAKAFAKABQAMABAKgEQAKgDAJgIQAJgIAFgKQAFgLABgKQAAgLgDgJQgFgMgHgIQgJgKgNgFQgLgFgNABIgDgCIgBgCIABgVIABgDIADgBQATgBARAJQASAHANAOQALANAFAQQAGARgBAOQgBARgHAPQgIAPgNAMQgNAMgQAEQgNAFgMAAIgHAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(-9.9,-8.5,19.8,17.1), null);


(lib.Symbol3copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Egq9gfPMBV7AAAMAAAA+fMhV7AAAg");
	this.shape.setTransform(275,200);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#993300").s().p("Egq9AfQMAAAg+fMBV7AAAMAAAA+fg");
	this.shape_1.setTransform(275,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ay8F8IAAleMAnrAAAIAAFeg");
	mask.setTransform(132.7,38);

	// Symbol 20
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(134.4,18.1,1,1,0,0,0,105,18.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:53.1},18,cjs.Ease.get(1)).wait(127));

	// Layer 4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A3MDXIAAmjMAuZAAAIAAGjg");
	mask_1.setTransform(136.9,21.5);

	// Symbol 19
	this.instance_1 = new lib.Symbol19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(134.4,68.1,1,1,0,0,0,134.4,24.1);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:24.1},18,cjs.Ease.get(1)).wait(127));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Symbol24();
	this.instance.parent = this;
	this.instance.setTransform(56.6,13.3,1,1,0,0,0,43.6,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_16 = new cjs.Graphics().p("AhwDcIAAmXIIVAAIAAGXg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_graphics_16,x:42.1,y:22}).wait(22).to({graphics:null,x:0,y:0}).wait(33));

	// Layer 3
	this.instance_1 = new lib.Symbol25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-47.5,2.6,1,1,19.2,0,0,33,41.5);
	this.instance_1.alpha = 0.59;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.BlurFilter(14, 14, 1)];
	this.instance_1.cache(-2,-2,70,87);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).to({x:165,y:32.6},21,cjs.Ease.get(1)).to({_off:true},1).wait(33));

	// Layer_1
	this.instance_2 = new lib.Symbol17();
	this.instance_2.parent = this;
	this.instance_2.setTransform(50.9,16.2,0.82,0.764,0,0,0,56.6,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30.8,4.3,53.5,39.8);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfBfQgOgEgHgIQgIgIgFgKQgEgJAAgJIAmAAQABAJAIAGQAHAGAMAAQAKAAAHgFQAIgFAEgKQAFgJACgMQACgLgBgOIgCAAQgDAMgMAIQgMAIgSAAQgLAAgLgEQgLgEgIgIQgJgIgEgLQgFgMAAgPQAAgVAJgPQALgQAPgHQAQgIASAAQAkAAAUAZQAUAYAAAxQAAAvgVAbQgTAbglAAQgPAAgMgFgAgYg6QgJAJAAAQQAAAQAJAJQAJAIANAAQANAAAKgJQAJgJAAgPQAAgQgJgJQgJgJgNAAQgNAAgKAJg");
	this.shape.setTransform(77.4,59.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggBfQgMgEgJgIQgHgIgEgKQgFgJgBgJIAmAAQACAJAIAGQAIAGAMAAQAIAAAJgFQAHgFAFgKQAEgJACgMQACgLAAgOIgCAAQgEAMgMAIQgMAIgRAAQgNAAgKgEQgLgEgIgIQgIgIgGgLQgEgMAAgPQAAgVAKgPQAKgQAPgHQAPgIAUAAQAjAAAUAZQAUAYAAAxQAAAvgUAbQgVAbgjAAQgQAAgNgFgAgYg6QgKAJAAAQQAAAQAKAJQAIAIAPAAQAMAAAJgJQAKgJAAgPQAAgQgJgJQgJgJgNAAQgOAAgJAJg");
	this.shape_1.setTransform(60.8,59.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAHgHAIAAQAJAAAIAHQAGAHAAAIQAAAKgGAGQgIAHgJAAQgIAAgHgHg");
	this.shape_2.setTransform(48.4,67.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggBfQgNgEgHgIQgJgIgDgKQgFgJgBgJIAmAAQACAJAIAGQAIAGALAAQAKAAAHgFQAIgFAFgKQAEgJACgMQACgLAAgOIgDAAQgDAMgMAIQgMAIgSAAQgMAAgKgEQgLgEgIgIQgIgIgGgLQgEgMAAgPQAAgVAKgPQAKgQAPgHQAPgIATAAQAkAAAUAZQAUAYAAAxQAAAvgUAbQgVAbgkAAQgPAAgNgFgAgYg6QgKAJAAAQQAAAQAKAJQAIAIAPAAQAMAAAJgJQAKgJAAgPQAAgQgJgJQgJgJgNAAQgOAAgJAJg");
	this.shape_3.setTransform(36.8,59.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKB0IABgSQgRgBgMgFQgMgFgIgIQgHgIgEgJQgDgKgBgKIAiAAQAAALAJAIQAHAHAOACIAAg5IgLgDQgKgCgJgEQgIgEgHgGQgHgGgEgJQgEgKABgLQAAgYAQgOQAQgPAbgCIAAgSIAVAAIAAASQAaADAQAOQAQAPAAAXIggAAQgBgKgHgIQgHgHgLgCIAAA2IALACQALADAJAEQAJAEAHAFQAHAHAEAJQAEAJAAAMQgBAZgQAPQgRAPgcADIAAASgAAMBGQAMgBAIgHQAIgHAAgLQAAgKgHgGQgFgHgNgEIgDAAgAgbg+QgIAHAAAKQABARAUAHIAFABIAAgxQgLABgHAGg");
	this.shape_4.setTransform(20.2,59.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA+A/IAAhOQAAgMgGgHQgHgHgMAAQgMAAgHAHQgGAIAAANIAABMIgXAAIAAhMQAAgOgGgHQgHgHgMAAQgLAAgHAHQgHAHAAAOIAABMIgYAAIAAh7IAYAAIAAAQIABAAQADgHAIgFQAJgGALAAQAOAAAJAGQAIAFAEAKIABAAQADgJAKgGQAKgGAPAAQATAAALALQALAMAAATIAABTg");
	this.shape_5.setTransform(66.9,37);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnAwQgOgRAAgaIAAgJQAAgaAOgRQAPgQAYAAQAaAAAOAQQAOARAAAZIAAAKQAAAagOARQgOAQgaAAQgZAAgOgQgAgVghQgIALAAASIAAAJQAAASAIAKQAHALAOAAQAPAAAIgKQAHgLAAgSIAAgJQAAgSgHgLQgIgKgPAAQgOAAgHAKg");
	this.shape_6.setTransform(50.2,37.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfA/IAAh7IAYAAIAAAQIABAAQADgHAHgFQAHgGAMAAIAIABIAAAVIgKgBQgbAAgBAeIAABKg");
	this.shape_7.setTransform(40,37);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgwBQIAAifIBgAAIAAAVIhIAAIAAAzIBCAAIAAAUIhCAAIAABDg");
	this.shape_8.setTransform(29.9,35.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(49,50.1,1,1,0,0,0,49,50.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,98,100.1), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ap6TuMAAAghzIUoAAMAAAAhzg");
	mask.setTransform(68.6,126.2);

	// Layer_3
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(72.3,247,1,1,0,0,0,67.3,211);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({x:72.4,y:41.4},44,cjs.Ease.get(1)).to({x:72.3,y:247},46,cjs.Ease.get(1)).wait(10));

	// Layer_1
	this.instance_1 = new lib.Bitmap4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141,285);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AkjGeIAArjIJSAAIAALjg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:30.3,y:41.4}).wait(155).to({graphics:null,x:0,y:0}).wait(11));

	// Layer_3
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(31.5,69.3,0.718,0.718,0,0,0,42.5,84);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({x:30.5,y:25.3},44,cjs.Ease.get(1)).to({x:31.5,y:69.3},46,cjs.Ease.get(1)).to({_off:true},46).wait(11));

	// Layer_1
	this.instance_1 = new lib.Bitmap3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},155).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62,92);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(115,87.5,1,1,0,0,0,115,87.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(195));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwPK1IAA0PMAhlAAAIAAUPg");
	mask.setTransform(111,69.3);

	// Layer_2
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(114.5,138.5,1,1,0,0,0,107.5,129.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({y:138.1},0).wait(1).to({y:133.7},0).wait(1).to({y:129.3},0).wait(1).to({y:125},0).wait(1).to({y:120.8},0).wait(1).to({y:116.7},0).wait(1).to({y:112.6},0).wait(1).to({y:108.6},0).wait(1).to({y:104.6},0).wait(1).to({y:100.8},0).wait(1).to({y:97},0).wait(1).to({y:93.3},0).wait(1).to({y:89.7},0).wait(1).to({y:86.1},0).wait(1).to({y:82.7},0).wait(1).to({y:79.3},0).wait(1).to({y:75.9},0).wait(1).to({y:72.7},0).wait(1).to({y:69.5},0).wait(1).to({y:66.4},0).wait(1).to({y:63.4},0).wait(1).to({y:60.4},0).wait(1).to({y:57.5},0).wait(1).to({y:54.7},0).wait(1).to({y:52},0).wait(1).to({y:49.4},0).wait(1).to({y:46.8},0).wait(1).to({y:44.3},0).wait(1).to({y:41.8},0).wait(1).to({y:39.5},0).wait(1).to({y:37.2},0).wait(1).to({y:35},0).wait(1).to({y:32.9},0).wait(1).to({y:30.8},0).wait(1).to({y:28.8},0).wait(1).to({y:26.9},0).wait(1).to({y:25.1},0).wait(1).to({y:23.3},0).wait(1).to({y:21.6},0).wait(1).to({y:20},0).wait(1).to({y:18.5},0).wait(1).to({y:17},0).wait(1).to({y:15.7},0).wait(1).to({y:14.4},0).wait(1).to({y:13.1},0).wait(1).to({y:12},0).wait(1).to({y:10.9},0).wait(1).to({y:9.9},0).wait(1).to({y:8.9},0).wait(1).to({y:8.1},0).wait(1).to({y:7.3},0).wait(1).to({y:6.6},0).wait(1).to({y:5.9},0).wait(1).to({y:5.4},0).wait(1).to({y:4.9},0).wait(1).to({y:4.5},0).wait(1).to({y:4.1},0).wait(1).to({y:3.9},0).wait(1).to({y:3.7},0).wait(1).to({y:3.6},0).wait(1).to({y:3.5},0).wait(8).to({y:3.2},0).wait(1).to({y:7.6},0).wait(1).to({y:12},0).wait(1).to({y:16.2},0).wait(1).to({y:20.4},0).wait(1).to({y:24.5},0).wait(1).to({y:28.6},0).wait(1).to({y:32.5},0).wait(1).to({y:36.4},0).wait(1).to({y:40.2},0).wait(1).to({y:44},0).wait(1).to({y:47.6},0).wait(1).to({y:51.2},0).wait(1).to({y:54.8},0).wait(1).to({y:58.2},0).wait(1).to({y:61.6},0).wait(1).to({y:64.9},0).wait(1).to({y:68.2},0).wait(1).to({y:71.3},0).wait(1).to({y:74.4},0).wait(1).to({y:77.4},0).wait(1).to({y:80.4},0).wait(1).to({y:83.2},0).wait(1).to({y:86},0).wait(1).to({y:88.8},0).wait(1).to({y:91.4},0).wait(1).to({y:94},0).wait(1).to({y:96.5},0).wait(1).to({y:99},0).wait(1).to({y:101.3},0).wait(1).to({y:103.6},0).wait(1).to({y:105.8},0).wait(1).to({y:108},0).wait(1).to({y:110},0).wait(1).to({y:112},0).wait(1).to({y:114},0).wait(1).to({y:115.8},0).wait(1).to({y:117.6},0).wait(1).to({y:119.3},0).wait(1).to({y:121},0).wait(1).to({y:122.5},0).wait(1).to({y:124},0).wait(1).to({y:125.4},0).wait(1).to({y:126.8},0).wait(1).to({y:128},0).wait(1).to({y:129.2},0).wait(1).to({y:130.3},0).wait(1).to({y:131.4},0).wait(1).to({y:132.4},0).wait(1).to({y:133.3},0).wait(1).to({y:134.1},0).wait(1).to({y:134.9},0).wait(1).to({y:135.6},0).wait(1).to({y:136.2},0).wait(1).to({y:136.7},0).wait(1).to({y:137.2},0).wait(1).to({y:137.6},0).wait(1).to({y:137.9},0).wait(1).to({y:138.2},0).wait(1).to({y:138.4},0).wait(1).to({y:138.5},0).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,230,175);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(150.5,170,1,1,0,0,0,150.5,170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,301,340), null);


(lib.Tween12copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol33();
	this.instance.parent = this;
	this.instance.setTransform(-1.8,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.7,-10.5,22.2,21);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol33();
	this.instance.parent = this;
	this.instance.setTransform(-2.4,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(-12.3,-9.9,19.8,17.1), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol33();
	this.instance.parent = this;
	this.instance.setTransform(-2.2,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(-12.1,-9.7,19.8,17.1), null);


(lib.Symbol17copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween12copy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.7,-20.1,19.8,17.1);


(lib.Symbol1copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.landing.addEventListener("click", onClickLanding)
		canvas.addEventListener("mouseover", function(){
			createjs.Ticker.addEventListener('tick',stage);		
		});
		canvas.addEventListener("mouseout", function(){
			if(flagReplay == true){
				createjs.Ticker.removeEventListener('tick',stage);
			}
		});
		function onClickLanding(e)
		{
			if(e.nativeEvent.which!=3){
				window.open(window.clickTag);
			}
		
			/*var getQuery = function(a) {
				var v = '';
				if (a = (new RegExp('[?&]' + encodeURIComponent(a) + '=([^&]*)')).exec(location.search)) {
					v = decodeURIComponent(a[1]);
				}
				return v;
			};
			window.URLAdm=getQuery('url');
			window.open(URLAdm, "_blank");*/
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.landing = new lib.Symbol3copy2();
	this.landing.parent = this;
	this.landing.setTransform(275,200,1,1,0,0,0,275,200);
	new cjs.ButtonHelper(this.landing, 0, 1, 2, false, new lib.Symbol3copy2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.landing).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy2, new cjs.Rectangle(-1,-1,552,402), null);


(lib.recopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol31();
	this.instance.parent = this;
	this.instance.setTransform(0.5,0.2);

	this.instance_1 = new lib.Symbol17copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1,1,0,0,0,0,-10.5);

	this.instance_2 = new lib.Symbol32();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.6,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ai4CgIAAk/IFxAAIAAE/g");
	this.shape.setTransform(0.1,1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.6,-9.6,19.8,17.1);


(lib.Symbol32_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// iphone
	this.instance_1 = new lib.Symbol10("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-19.3,198,0.294,0.294,0,0,0,70.5,142.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).wait(1).to({regY:142.5,x:35,y:187.2,startPosition:1},0).wait(1).to({x:51.6,y:183.9,startPosition:2},0).wait(1).to({x:62.3,y:181.8,startPosition:3},0).wait(1).to({x:70.1,y:180.2,startPosition:4},0).wait(1).to({x:76,y:179.1,startPosition:5},0).wait(1).to({x:80.6,y:178.1,startPosition:6},0).wait(1).to({x:84.4,y:177.4,startPosition:7},0).wait(1).to({x:87.3,y:176.8,startPosition:8},0).wait(1).to({x:89.7,y:176.3,startPosition:9},0).wait(1).to({x:91.7,y:176,startPosition:10},0).wait(1).to({x:93.2,y:175.7,startPosition:11},0).wait(1).to({x:94.4,y:175.4,startPosition:12},0).wait(1).to({x:95.3,y:175.2,startPosition:13},0).wait(1).to({x:96,y:175.1,startPosition:14},0).wait(1).to({x:96.4,y:175,startPosition:15},0).wait(1).to({x:96.7,startPosition:16},0).wait(1).to({regY:142.6,x:96.8,startPosition:17},0).wait(140));

	// ipad
	this.instance_2 = new lib.Symbol7("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-31.3,189,1,1,0,0,0,31.2,46);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).wait(1).to({regX:31,x:13.5,y:178.2,startPosition:1},0).wait(1).to({x:27.3,y:174.9,startPosition:2},0).wait(1).to({x:36.1,y:172.8,startPosition:3},0).wait(1).to({x:42.5,y:171.3,startPosition:4},0).wait(1).to({x:47.4,y:170.1,startPosition:5},0).wait(1).to({x:51.3,y:169.2,startPosition:6},0).wait(1).to({x:54.3,y:168.5,startPosition:7},0).wait(1).to({x:56.8,y:167.9,startPosition:8},0).wait(1).to({x:58.8,y:167.4,startPosition:9},0).wait(1).to({x:60.4,y:167,startPosition:10},0).wait(1).to({x:61.7,y:166.7,startPosition:11},0).wait(1).to({x:62.7,y:166.5,startPosition:12},0).wait(1).to({x:63.4,y:166.3,startPosition:13},0).wait(1).to({x:64,y:166.2,startPosition:14},0).wait(1).to({x:64.3,y:166.1,startPosition:15},0).wait(1).to({x:64.5,y:166,startPosition:16},0).wait(1).to({regX:31.2,x:64.8,startPosition:17},0).wait(134));

	// ipad
	this.instance_3 = new lib.Symbol7("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(409.2,189,1,1,0,0,0,31.2,46);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(1).to({regX:31,x:338.8,y:178.2,startPosition:1},0).wait(1).to({x:317.3,y:174.9,startPosition:2},0).wait(1).to({x:303.5,y:172.8,startPosition:3},0).wait(1).to({x:293.5,y:171.3,startPosition:4},0).wait(1).to({x:285.8,y:170.1,startPosition:5},0).wait(1).to({x:279.8,y:169.2,startPosition:6},0).wait(1).to({x:275,y:168.5,startPosition:7},0).wait(1).to({x:271.2,y:167.9,startPosition:8},0).wait(1).to({x:268.1,y:167.4,startPosition:9},0).wait(1).to({x:265.6,y:167,startPosition:10},0).wait(1).to({x:263.6,y:166.7,startPosition:11},0).wait(1).to({x:262,y:166.5,startPosition:12},0).wait(1).to({x:260.9,y:166.3,startPosition:13},0).wait(1).to({x:260,y:166.2,startPosition:14},0).wait(1).to({x:259.4,y:166.1,startPosition:15},0).wait(1).to({x:259.1,y:166,startPosition:16},0).wait(1).to({regX:31.2,x:259.2,startPosition:17},0).wait(138));

	// mac
	this.instance_4 = new lib.Symbol2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(168,540.6,1,1,0,0,0,115,87.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:123.5},16,cjs.Ease.get(1)).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(53,453.1,230,175);


// stage content:
(lib.web320x50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		window.flagReplay = false;
	}
	this.frame_175 = function() {
		this.stop();
		createjs.Ticker.removeEventListener('tick',stage);
		flagReplay = true;
		this.replayBtn.addEventListener("click", onPlayButton_clickHanlder.bind(this));
		function onPlayButton_clickHanlder() {
			this.gotoAndPlay(1);
			flagReplay = false;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(175).call(this.frame_175).wait(1));

	// replay
	this.replayBtn = new lib.recopy();
	this.replayBtn.parent = this;
	this.replayBtn.setTransform(7.1,8.3,0.414,0.414);
	this.replayBtn._off = true;
	new cjs.ButtonHelper(this.replayBtn, 0, 1, 2, false, new lib.recopy(), 3);

	this.timeline.addTween(cjs.Tween.get(this.replayBtn).wait(175).to({_off:false},0).wait(1));

	// Layer 22
	this.landing = new lib.Symbol1copy2();
	this.landing.parent = this;
	this.landing.setTransform(0,0.1,0.582,0.125,0,0,0,-0.1,0.4);

	this.timeline.addTween(cjs.Tween.get(this.landing).wait(176));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#23B3D6").ss(1,1,1).p("A4/j5MAx/AAAIAAHzMgx/AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(176));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_70 = new cjs.Graphics().p("AX3DVIAAkvIB0AAIAAEvg");
	var mask_graphics_71 = new cjs.Graphics().p("AW+DUIAAkvICiAAIAAEvg");
	var mask_graphics_72 = new cjs.Graphics().p("AWJDTIAAkuIDMAAIAAEug");
	var mask_graphics_73 = new cjs.Graphics().p("AVbDTIAAkvIDxAAIAAEvg");
	var mask_graphics_74 = new cjs.Graphics().p("AUxDSIAAkvIETAAIAAEvg");
	var mask_graphics_75 = new cjs.Graphics().p("AUODRIAAkuIEvAAIAAEug");
	var mask_graphics_76 = new cjs.Graphics().p("ATvDRIAAkuIFIAAIAAEug");
	var mask_graphics_77 = new cjs.Graphics().p("ATXDRIAAkvIFbAAIAAEvg");
	var mask_graphics_78 = new cjs.Graphics().p("ATDDQIAAkuIFrAAIAAEug");
	var mask_graphics_79 = new cjs.Graphics().p("AS2DQIAAkuIF1AAIAAEug");
	var mask_graphics_80 = new cjs.Graphics().p("ASuDQIAAkuIF7AAIAAEug");
	var mask_graphics_81 = new cjs.Graphics().p("ASsDQIAAkvIF+AAIAAEvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(70).to({graphics:mask_graphics_70,x:164.3,y:21.3}).wait(1).to({graphics:mask_graphics_71,x:163.2,y:21.2}).wait(1).to({graphics:mask_graphics_72,x:162.1,y:21.1}).wait(1).to({graphics:mask_graphics_73,x:161.2,y:21.1}).wait(1).to({graphics:mask_graphics_74,x:160.4,y:21}).wait(1).to({graphics:mask_graphics_75,x:159.7,y:20.9}).wait(1).to({graphics:mask_graphics_76,x:159.1,y:20.9}).wait(1).to({graphics:mask_graphics_77,x:158.6,y:20.9}).wait(1).to({graphics:mask_graphics_78,x:158.2,y:20.8}).wait(1).to({graphics:mask_graphics_79,x:157.9,y:20.8}).wait(1).to({graphics:mask_graphics_80,x:157.7,y:20.8}).wait(1).to({graphics:mask_graphics_81,x:157.8,y:20.8}).wait(95));

	// Layer_11
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(295.8,21.6,0.618,0.618,0,0,0,56.6,15.6);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70).to({_off:false},0).wait(106));

	// Layer_9
	this.instance_1 = new lib.Symbol14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(196.8,48.3,0.088,0.088,0,0,0,86.7,107.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({_off:false},0).to({regX:86.3,regY:106.2,scaleX:0.53,scaleY:0.53,x:191.6,y:48,alpha:1},6,cjs.Ease.get(1)).to({regX:86.4,scaleX:0.41,scaleY:0.41,x:193.1,y:47.3},8,cjs.Ease.get(1)).to({regX:86.3,regY:106.1,scaleX:0.46,scaleY:0.46,x:192.5,y:47.6},10,cjs.Ease.get(1)).wait(119));

	// Layer 6
	this.instance_2 = new lib.Symbol32_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(234.4,32.8,0.296,0.296,0,0,0,162.2,137.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(176));

	// Layer_2
	this.instance_3 = new lib.Symbol21("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(79.9,26,0.499,0.499,0,0,0,134.7,37.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(176));

	// Layer_1
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(159.8,25,1.063,0.147,0,0,0,150.3,169.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:150.5,scaleX:0.72,x:108.3},16,cjs.Ease.get(1)).wait(160));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_1.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(176));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(159,24,322,178.8);
// library properties:
lib.properties = {
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/web320x50_atlas_P_.png?1523292058583", id:"web320x50_atlas_P_"},
		{src:"images/web320x50_atlas_NP_.jpg?1523292058583", id:"web320x50_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
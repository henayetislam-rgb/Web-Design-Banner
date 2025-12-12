(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"web336x280_atlas_P_", frames: [[0,0,230,175],[143,177,62,92],[0,177,141,285]]},
		{name:"web336x280_atlas_NP_", frames: [[301,0,85,168],[217,0,82,257],[0,0,215,259]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.bgmac = function() {
	this.spriteSheet = ss["web336x280_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["web336x280_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["web336x280_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ipad = function() {
	this.spriteSheet = ss["web336x280_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.iphonejpgcopy = function() {
	this.spriteSheet = ss["web336x280_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.tamplate1 = function() {
	this.spriteSheet = ss["web336x280_atlas_NP_"];
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


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1E1E").s().p("AACAvQgDgBgDgDQgDgDAAgEQgCgEAAgGIAAgqIgLAAIAAgMIAMAAIAAgTIANAAIAAATIAPAAIAAAMIgPAAIAAApQAAAHADACQACACAHAAIADAAIAAAMIgHAAIgLgBg");
	this.shape.setTransform(152.3,30.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E1E1E").s().p("AgWAeQgKgKAAgRIAAgHQAAgQAKgKQAIgJAOAAQAPAAAJAKQAIAKAAAQIAAAGIgwAAIAAACQAAALAEAFQAGAHAHAAQAHAAAEgDQAEgDACgFIAOAAQgDAKgHAHQgIAGgNAAQgOAAgJgKgAgMgWQgFAHABAJIAiAAQAAgJgFgHQgFgFgHAAQgIAAgFAFg");
	this.shape_1.setTransform(145.9,31.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E1E1E").s().p("AAnAnIAAgwQAAgHgEgFQgEgEgIAAQgHAAgFAEQgEAFAAAIIAAAvIgNAAIAAgvQAAgIgEgFQgFgEgHAAQgHAAgEAEQgFAFAAAIIAAAvIgPAAIAAhMIAPAAIAAAKIABAAQACgFAFgDQAFgDAIAAQAIAAAGADQAEADADAGIAAAAQADgFAGgEQAGgDAJAAQAMAAAHAHQAHAHAAAMIAAAzg");
	this.shape_2.setTransform(135.5,31.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1E1E1E").s().p("AgXAiQgHgHAAgKQAAgLAHgGQAHgFANAAIATAAIAAgHQAAgHgEgEQgEgEgHAAQgGAAgEADQgEAEAAAFIgOAAQABgLAHgGQAHgHAOAAQANAAAIAHQAIAHAAAMIAAA0IgOAAIAAgKIgBAAQgGALgPAAQgLAAgHgGgAgLAIQgEADAAAFQAAAGAEADQAFADAGAAQAGAAAFgEQAFgEAAgHIAAgJIgRAAQgHAAgDAEg");
	this.shape_3.setTransform(125,31.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E1E1E").s().p("AgZAsQgIgLAAgQIAAgHQAAgPAIgKQAJgLANABQAHAAAGADQAGADADAFIAAAAIAAgmIAPAAIAABoIgOAAIAAgMIgBAAQgDAHgGACQgGAEgHAAQgOAAgIgJgAgMgHQgGAGAAALIAAAHQAAALAGAHQAEAFAIAAQAJAAAFgFQAGgHAAgLIAAgHQAAgKgGgHQgGgGgIAAQgIAAgEAGg");
	this.shape_4.setTransform(113.9,30);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1E1E1E").s().p("AgXAiQgHgHAAgKQAAgLAHgGQAHgFANAAIATAAIAAgHQAAgHgEgEQgEgEgHAAQgGAAgEADQgEAEAAAFIgOAAQABgLAHgGQAHgHAOAAQANAAAIAHQAIAHAAAMIAAA0IgOAAIAAgKIgBAAQgGALgPAAQgLAAgHgGgAgLAIQgEADAAAFQAAAGAEADQAFADAGAAQAGAAAFgEQAFgEAAgHIAAgJIgRAAQgHAAgDAEg");
	this.shape_5.setTransform(105.6,31.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1E1E1E").s().p("AACAvQgDgBgDgDQgDgDAAgEQgCgEAAgGIAAgqIgLAAIAAgMIAMAAIAAgTIANAAIAAATIAPAAIAAAMIgPAAIAAApQAAAHACACQADACAHAAIAEAAIAAAMIgIAAIgLgBg");
	this.shape_6.setTransform(96.4,30.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1E1E1E").s().p("AASAmIgSgcIAAAAIgSAcIgQAAIAagmIgaglIASAAIAQAcIASgcIARAAIgaAlIAaAmg");
	this.shape_7.setTransform(90.1,31.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1E1E1E").s().p("AgWAeQgJgKAAgRIAAgHQAAgQAJgKQAIgJAOAAQAQAAAIAKQAJAKAAAQIAAAGIgyAAIAAACQABALAFAFQAEAHAIAAQAGAAAFgDQAEgDABgFIAPAAQgCAKgIAHQgIAGgNAAQgPAAgIgKgAgMgWQgFAHAAAJIAjAAQAAgJgFgHQgFgFgIAAQgHAAgFAFg");
	this.shape_8.setTransform(82.6,31.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1E1E1E").s().p("AACAvQgDgBgDgDQgDgDgBgEQgBgEAAgGIAAgqIgKAAIAAgMIAKAAIAAgTIAOAAIAAATIAPAAIAAAMIgPAAIAAApQAAAHACACQADACAHAAIADAAIAAAMIgGAAIgMgBg");
	this.shape_9.setTransform(76.2,30.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1E1E1E").s().p("AgdA0IAAgLIAGAAQAHgBADgCQADgDACgGIABgEIgchMIAQAAIATA8IAAAAIAUg8IAQAAIgbBLIgCAGIgDAGIgEAGIgEAGQgDACgEABQgEACgFgBIgJAAg");
	this.shape_10.setTransform(66.6,32.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1E1E1E").s().p("AAnAnIAAgwQAAgHgEgFQgEgEgIAAQgHAAgFAEQgEAFAAAIIAAAvIgNAAIAAgvQAAgIgEgFQgFgEgHAAQgHAAgEAEQgFAFAAAIIAAAvIgPAAIAAhMIAPAAIAAAKIABAAQACgFAFgDQAFgDAIAAQAIAAAGADQAEADADAGIAAAAQADgFAGgEQAGgDAJAAQAMAAAHAHQAHAHAAAMIAAAzg");
	this.shape_11.setTransform(56.6,31.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1E1E1E").s().p("AAnAnIAAgwQAAgHgEgFQgEgEgIAAQgHAAgFAEQgEAFAAAIIAAAvIgNAAIAAgvQAAgIgEgFQgFgEgHAAQgHAAgEAEQgFAFAAAIIAAAvIgPAAIAAhMIAPAAIAAAKIABAAQACgFAFgDQAFgDAIAAQAIAAAGADQAEADADAGIAAAAQADgFAGgEQAGgDAJAAQAMAAAHAHQAHAHAAAMIAAAzg");
	this.shape_12.setTransform(43.8,31.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1E1E1E").s().p("AgYAgQgHgHAAgNIAAgyIAPAAIAAAuQAAAKAEAEQAFAEAHAAQAIAAAFgEQAFgGAAgIIAAguIAOAAIAABMIgOAAIAAgLIgBAAQgCAGgGADQgFADgIAAQgMAAgIgHg");
	this.shape_13.setTransform(33,31.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1E1E1E").s().p("AgZAsQgIgLAAgQIAAgHQAAgPAIgKQAJgLANABQAHAAAGADQAFADAEAFIAAAAIAAgmIAPAAIAABoIgOAAIAAgMIgBAAQgDAHgGACQgGAEgHAAQgOAAgIgJgAgNgHQgFAGAAALIAAAHQAAALAFAHQAFAFAIAAQAJAAAFgFQAFgHABgLIAAgHQgBgKgFgHQgGgGgIAAQgIAAgFAGg");
	this.shape_14.setTransform(24.4,30);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1E1E1E").s().p("AgTAnIAAhMIAPAAIAAAKIABAAQACgEADgEQAFgDAHAAIAGAAIAAAOIgHgBQgRAAAAATIAAAtg");
	this.shape_15.setTransform(201.4,14.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1E1E1E").s().p("AgWAeQgJgJAAgSIAAgGQAAgRAJgJQAIgKAOAAQAQAAAIAKQAJAKAAAQIAAAGIgyAAIAAACQAAALAGAFQAEAHAIAAQAGAAAEgDQAFgDABgFIAPAAQgCAKgIAHQgIAGgNAAQgPAAgIgKgAgMgVQgEAGgBAIIAjAAQAAgIgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_16.setTransform(194.6,14.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1E1E1E").s().p("AgHA0IAAhnIAOAAIAABng");
	this.shape_17.setTransform(188.7,13.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1E1E1E").s().p("AgYAdQgJgJAAgRIAAgFQAAgRAJgKQAJgKAPAAQAQAAAJAKQAJAKAAARIAAAFQAAARgJAJQgJALgQAAQgPAAgJgLgAgNgUQgFAHAAALIAAAFQAAALAFAHQAFAGAIAAQAJAAAFgGQAFgHAAgLIAAgFQAAgLgFgHQgFgHgJAAQgIAAgFAHg");
	this.shape_18.setTransform(182.9,14.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1E1E1E").s().p("AgZAsQgIgKAAgRIAAgHQAAgQAIgKQAIgKAPAAQAGABAGADQAFADADAFIABAAIAAgmIAPAAIAABoIgPAAIAAgLIAAAAQgDAFgGAEQgGADgGAAQgPAAgIgJgAgMgHQgGAHAAAKIAAAHQAAALAGAHQAEAFAIABQAJgBAFgFQAGgHgBgLIAAgHQABgKgGgHQgFgGgJAAQgHAAgFAGg");
	this.shape_19.setTransform(174.3,13.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1E1E1E").s().p("AgdA0IAAgMIAGAAQAHABADgDQADgDACgGIABgEIgchMIAQAAIATA9IAAAAIAUg9IAQAAIgbBLIgCAGIgDAHIgEAFIgEAGQgDACgEABQgEABgFAAIgJAAg");
	this.shape_20.setTransform(163.1,15.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1E1E1E").s().p("AgHA0IAAhnIAPAAIAABng");
	this.shape_21.setTransform(157.5,13.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1E1E1E").s().p("AghA1IAAhnIAPAAIAAALIAAAAQADgFAHgEQAFgDAHgBQANAAAJAKQAHAKABARIAAAHQgBAQgHAKQgJAJgOAAQgGAAgFgDQgGgDgDgFIgBAAIAAAlgAgNghQgFAHAAALIAAAGQAAALAFAGQAGAHAIAAQAIgBAFgFQAFgHAAgLIAAgGQAAgLgFgHQgFgGgIAAQgJAAgFAGg");
	this.shape_22.setTransform(151.5,15.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1E1E1E").s().p("AAnAnIAAgwQAAgHgEgFQgEgEgIAAQgHAAgFAEQgEAFAAAIIAAAvIgNAAIAAgvQAAgIgEgFQgFgEgHAAQgHAAgEAEQgFAFAAAIIAAAvIgPAAIAAhMIAPAAIAAAKIABAAQACgFAFgDQAFgDAIAAQAIAAAGADQAEADADAGIAAAAQADgFAGgEQAGgDAJAAQAMAAAHAHQAHAHAAAMIAAAzg");
	this.shape_23.setTransform(140.7,14.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1E1E1E").s().p("AgGA0IAAhMIANAAIAABMgAgFglQgDgCAAgEQAAgEADgCQACgCADAAQADAAADACQADACAAAEQAAAEgDACQgDADgDAAQgDAAgCgDg");
	this.shape_24.setTransform(132.2,13.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1E1E1E").s().p("AgVAiQgJgGABgLIANAAQACAFAEAEQAEACAGAAQAIABAEgEQAEgDAAgFIgBgDIgCgDIgDgCIgEgBIgDgBIgFgBIAAAAIgKgEIgIgCQgEgDgDgEQgCgDAAgGQABgFACgFQADgFAEgDIAJgDQAFgCAFAAQAOAAAHAGQAHAHAAAKIgNAAQgBgEgDgEQgEgDgHAAQgGgBgEADQgEADAAAFIABAFIADADIAEABIAFABIAFABIAAAAIABAAIAIADIAGACIAGADIAEAGQACADAAAFQAAALgJAHQgIAGgOAAQgOAAgHgGg");
	this.shape_25.setTransform(126.7,14.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1E1E1E").s().p("AgWAiQgHgGgBgLIAOAAQABAFAFAEQAEACAGAAQAIABAEgEQAEgDAAgFIAAgDIgDgDIgDgCIgDgBIgFgBIgDgBIgCAAIgKgEIgIgCQgDgDgCgEQgCgDAAgGQAAgFACgFQADgFAEgDIAJgDQAFgCAFAAQANAAAIAGQAHAHAAAKIgOAAQAAgEgDgEQgEgDgHAAQgGgBgEADQgEADAAAFIABAFIADADIAEABIAFABIAEABIABAAIAAAAIAIADIAHACIAHADIADAGQACADgBAFQAAALgIAHQgJAGgNAAQgNAAgJgGg");
	this.shape_26.setTransform(116.4,14.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1E1E1E").s().p("AgHA0IAAhMIAOAAIAABMgAgGglQgCgCAAgEQAAgEACgCQADgCADAAQAEAAACACQADACAAAEQAAAEgDACQgCADgEAAQgDAAgDgDg");
	this.shape_27.setTransform(110.7,13.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1E1E1E").s().p("AAnAnIAAgwQAAgHgEgFQgEgEgIAAQgHAAgFAEQgEAFAAAIIAAAvIgNAAIAAgvQAAgIgEgFQgFgEgHAAQgHAAgEAEQgFAFAAAIIAAAvIgPAAIAAhMIAPAAIAAAKIABAAQACgFAFgDQAFgDAIAAQAIAAAGADQAEADADAGIAAAAQADgFAGgEQAGgDAJAAQAMAAAHAHQAHAHAAAMIAAAzg");
	this.shape_28.setTransform(99.4,14.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1E1E1E").s().p("AgYAgQgHgGAAgOIAAgyIAPAAIAAAuQAAAKAEAEQAFAEAHAAQAIAAAFgFQAFgEAAgJIAAguIAOAAIAABMIgOAAIAAgKIgBAAQgCAFgGADQgFADgIAAQgMAAgIgHg");
	this.shape_29.setTransform(88.6,14.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1E1E1E").s().p("AgVAiQgJgGABgLIANAAQACAFAEAEQAEACAGAAQAIABAEgEQAEgDAAgFIgBgDIgCgDIgDgCIgEgBIgDgBIgFgBIAAAAIgKgEIgIgCQgEgDgDgEQgCgDAAgGQABgFACgFQADgFAEgDIAJgDQAFgCAFAAQAOAAAHAGQAHAHAAAKIgNAAQgBgEgDgEQgEgDgHAAQgGgBgEADQgEADAAAFIABAFIADADIAEABIAFABIAFABIAAAAIABAAIAIADIAGACIAGADIAEAGQACADAAAFQAAALgJAHQgIAGgOAAQgOAAgHgGg");
	this.shape_30.setTransform(80.8,14.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1E1E1E").s().p("AggA1IAAhnIANAAIAAALIABAAQADgFAHgEQAFgDAHgBQANAAAIAKQAIAKAAARIAAAHQAAAQgIAKQgIAJgOAAQgGAAgFgDQgGgDgDgFIgBAAIAAAlgAgNghQgFAHAAALIAAAGQAAALAFAGQAFAHAJAAQAIgBAFgFQAFgHAAgLIAAgGQAAgLgFgHQgFgGgIAAQgJAAgFAGg");
	this.shape_31.setTransform(73,15.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1E1E1E").s().p("AgGA0IAAhMIANAAIAABMgAgFglQgDgCAAgEQAAgEADgCQACgCADAAQADAAADACQADACAAAEQAAAEgDACQgDADgDAAQgDAAgCgDg");
	this.shape_32.setTransform(66.5,13.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1E1E1E").s().p("AAnAnIAAgwQAAgHgEgFQgEgEgIAAQgHAAgFAEQgEAFAAAIIAAAvIgNAAIAAgvQAAgIgEgFQgFgEgHAAQgHAAgEAEQgFAFAAAIIAAAvIgPAAIAAhMIAPAAIAAAKIABAAQACgFAFgDQAFgDAIAAQAIAAAGADQAEADADAGIAAAAQADgFAGgEQAGgDAJAAQAMAAAHAHQAHAHAAAMIAAAzg");
	this.shape_33.setTransform(55.2,14.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1E1E1E").s().p("AgXAeQgIgJgBgSIAAgGQABgRAIgJQAJgKAOAAQAQAAAIAKQAJAKAAAQIAAAGIgxAAIAAACQgBALAGAFQAEAHAIAAQAGAAAEgDQAFgDACgFIAOAAQgDAKgHAHQgIAGgNAAQgPAAgJgKgAgMgVQgEAGAAAIIAiAAQAAgIgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_34.setTransform(45,14.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1E1E1E").s().p("AgTAnIAAhMIAPAAIAAAKIABAAQACgEADgEQAFgDAHAAIAGAAIAAAOIgHgBQgRAAAAATIAAAtg");
	this.shape_35.setTransform(38.7,14.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1E1E1E").s().p("AgYAdQgJgJAAgRIAAgFQAAgRAJgKQAJgKAPAAQAQAAAJAKQAJAKAAARIAAAFQAAARgJAJQgJALgQAAQgPAAgJgLgAgNgUQgFAHAAALIAAAFQAAALAFAHQAFAGAIAAQAJAAAFgGQAFgHAAgLIAAgFQAAgLgFgHQgFgHgJAAQgIAAgFAHg");
	this.shape_36.setTransform(31.7,14.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1E1E1E").s().p("AgdAyIAAhjIAPAAIAABVIAsAAIAAAOg");
	this.shape_37.setTransform(24.4,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(18.3,2,187.7,38.8), null);


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
	this.shape.setTransform(80.8,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATA1IgTgoIgUAAIAAAoIgTAAIAAhpIApAAQAIAAAIACQAHADAEAEQAFAFACAGQACAGAAAHQAAAGgBAFQgCAGgEACIgGAGIgGAEIAVArgAgUgBIATAAQAJAAAFgFQAFgEABgJQgBgJgFgEQgFgFgIAAIgUAAg");
	this.shape_1.setTransform(71.7,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghA1IAAhpIBDAAIAAAPIgwAAIAAAeIAtAAIAAAOIgtAAIAAAeIAwAAIAAAQg");
	this.shape_2.setTransform(62.3,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAYA1IAAguIgvAAIAAAuIgTAAIAAhpIATAAIAAAsIAvAAIAAgsIATAAIAABpg");
	this.shape_3.setTransform(52.3,11.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATA1IgdgwIgNANIAAAjIgTAAIAAhpIATAAIAAAxIABAAIApgxIAVAAIgmAtIApA8g");
	this.shape_4.setTransform(39.5,11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeArQgLgNAAgXIAAgMQAAgYALgNQAMgMAUAAQAJAAAIADQAIADAFAFQAFAFADAHQACAGAAAIIAAABIgSAAQAAgJgGgHQgGgGgKAAQgLAAgGAIQgIAJABAQIAAAMQAAAQAGAIQAHAIALAAQAKAAAGgGQAGgGAAgJIASAAIAAACQAAAGgCAHQgDAGgFAFQgFAFgIADQgIADgKAAQgUAAgLgMg");
	this.shape_5.setTransform(29.2,11.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIA1IAAhpIARAAIAABpg");
	this.shape_6.setTransform(22,11.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggA1IAAhpIATAAIAABZIAuAAIAAAQg");
	this.shape_7.setTransform(16.4,11.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeArQgLgNAAgXIAAgMQAAgYALgNQAMgMAUAAQAJAAAIADQAIADAFAFQAFAFADAHQACAGAAAIIAAABIgSAAQAAgJgGgHQgGgGgKAAQgLAAgGAIQgIAJABAQIAAAMQAAAQAGAIQAHAIALAAQAKAAAGgGQAGgGAAgJIASAAIAAACQAAAGgCAHQgDAGgFAFQgFAFgIADQgIADgKAAQgUAAgLgMg");
	this.shape_8.setTransform(7.1,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,87.1,23.1), null);


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
	this.shape.graphics.f("#0E6CAC").s().p("Ao0CbIAAk1IRpAAIAAE1g");
	this.shape.setTransform(56.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,113.1,31), null);


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
	this.instance.setTransform(56.6,14.6,1,1,0,0,0,43.6,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_16 = new cjs.Graphics().p("Ao0CbIAAk1IRpAAIAAE1g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_graphics_16,x:56.5,y:15.5}).wait(22).to({graphics:null,x:0,y:0}).wait(33));

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
	this.instance_2.setTransform(56.5,15.5,1,1,0,0,0,56.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113.1,31);


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

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).wait(1).to({regY:142.5,x:35,startPosition:1},0).wait(1).to({x:51.6,startPosition:2},0).wait(1).to({x:62.3,startPosition:3},0).wait(1).to({x:70.1,startPosition:4},0).wait(1).to({x:76,startPosition:5},0).wait(1).to({x:80.6,startPosition:6},0).wait(1).to({x:84.4,startPosition:7},0).wait(1).to({x:87.3,startPosition:8},0).wait(1).to({x:89.7,startPosition:9},0).wait(1).to({x:91.7,startPosition:10},0).wait(1).to({x:93.2,startPosition:11},0).wait(1).to({x:94.4,startPosition:12},0).wait(1).to({x:95.3,startPosition:13},0).wait(1).to({x:96,startPosition:14},0).wait(1).to({x:96.4,startPosition:15},0).wait(1).to({x:96.7,startPosition:16},0).wait(1).to({regY:142.6,x:96.8,startPosition:17},0).wait(140));

	// ipad
	this.instance_2 = new lib.Symbol7("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-31.3,189,1,1,0,0,0,31.2,46);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).wait(1).to({regX:31,x:13.5,startPosition:1},0).wait(1).to({x:27.3,startPosition:2},0).wait(1).to({x:36.1,startPosition:3},0).wait(1).to({x:42.5,startPosition:4},0).wait(1).to({x:47.4,startPosition:5},0).wait(1).to({x:51.3,startPosition:6},0).wait(1).to({x:54.3,startPosition:7},0).wait(1).to({x:56.8,startPosition:8},0).wait(1).to({x:58.8,startPosition:9},0).wait(1).to({x:60.4,startPosition:10},0).wait(1).to({x:61.7,startPosition:11},0).wait(1).to({x:62.7,startPosition:12},0).wait(1).to({x:63.4,startPosition:13},0).wait(1).to({x:64,startPosition:14},0).wait(1).to({x:64.3,startPosition:15},0).wait(1).to({x:64.5,startPosition:16},0).wait(1).to({regX:31.2,x:64.8,startPosition:17},0).wait(134));

	// ipad
	this.instance_3 = new lib.Symbol7("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(409.2,189,1,1,0,0,0,31.2,46);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(1).to({regX:31,x:338.8,startPosition:1},0).wait(1).to({x:317.3,startPosition:2},0).wait(1).to({x:303.5,startPosition:3},0).wait(1).to({x:293.5,startPosition:4},0).wait(1).to({x:285.8,startPosition:5},0).wait(1).to({x:279.8,startPosition:6},0).wait(1).to({x:275,startPosition:7},0).wait(1).to({x:271.2,startPosition:8},0).wait(1).to({x:268.1,startPosition:9},0).wait(1).to({x:265.6,startPosition:10},0).wait(1).to({x:263.6,startPosition:11},0).wait(1).to({x:262,startPosition:12},0).wait(1).to({x:260.9,startPosition:13},0).wait(1).to({x:260,startPosition:14},0).wait(1).to({x:259.4,startPosition:15},0).wait(1).to({x:259.1,startPosition:16},0).wait(1).to({regX:31.2,x:259.2,startPosition:17},0).wait(138));

	// mac
	this.instance_4 = new lib.Symbol2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(168,540.6,1,1,0,0,0,115,87.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:123.5},16,cjs.Ease.get(1)).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(53,453.1,230,175);


// stage content:
(lib.web336x280 = function(mode,startPosition,loop) {
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
	this.replayBtn.setTransform(12.2,13,0.619,0.619);
	this.replayBtn._off = true;
	new cjs.ButtonHelper(this.replayBtn, 0, 1, 2, false, new lib.recopy(), 3);

	this.timeline.addTween(cjs.Tween.get(this.replayBtn).wait(175).to({_off:false},0).wait(1));

	// Layer 22
	this.landing = new lib.Symbol1copy2();
	this.landing.parent = this;
	this.landing.setTransform(0,0.4,0.611,0.7,0,0,0,-0.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.landing).wait(176));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#23B3D6").ss(1,1,1).p("A6P13MA0fAAAMAAAArvMg0fAAAg");
	this.shape.setTransform(168,140);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(176));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_70 = new cjs.Graphics().p("Aa5VDIAAmkICgAAIAAGkg");
	var mask_graphics_71 = new cjs.Graphics().p("AYOVDIAAmkIFLAAIAAGkg");
	var mask_graphics_72 = new cjs.Graphics().p("AVsVDIAAmkIHtAAIAAGkg");
	var mask_graphics_73 = new cjs.Graphics().p("ATTVDIAAmkIKGAAIAAGkg");
	var mask_graphics_74 = new cjs.Graphics().p("ARCVDIAAmkIMXAAIAAGkg");
	var mask_graphics_75 = new cjs.Graphics().p("AO7VDIAAmkIOeAAIAAGkg");
	var mask_graphics_76 = new cjs.Graphics().p("AM8VDIAAmkIQcAAIAAGkg");
	var mask_graphics_77 = new cjs.Graphics().p("ALGVDIAAmkISSAAIAAGkg");
	var mask_graphics_78 = new cjs.Graphics().p("AJYVDIAAmkIUAAAIAAGkg");
	var mask_graphics_79 = new cjs.Graphics().p("AHzVDIAAmkIVlAAIAAGkg");
	var mask_graphics_80 = new cjs.Graphics().p("AGXVDIAAmkIXBAAIAAGkg");
	var mask_graphics_81 = new cjs.Graphics().p("AFEVDIAAmkIYUAAIAAGkg");
	var mask_graphics_82 = new cjs.Graphics().p("AD6VDIAAmkIZeAAIAAGkg");
	var mask_graphics_83 = new cjs.Graphics().p("AC4VDIAAmkIagAAIAAGkg");
	var mask_graphics_84 = new cjs.Graphics().p("AB/VDIAAmkIbZAAIAAGkg");
	var mask_graphics_85 = new cjs.Graphics().p("ABPVDIAAmkIcJAAIAAGkg");
	var mask_graphics_86 = new cjs.Graphics().p("AAoVDIAAmkIcwAAIAAGkg");
	var mask_graphics_87 = new cjs.Graphics().p("AAJVDIAAmkIdPAAIAAGkg");
	var mask_graphics_88 = new cjs.Graphics().p("AgMVDIAAmkIdkAAIAAGkg");
	var mask_graphics_89 = new cjs.Graphics().p("AgZVDIAAmkIdxAAIAAGkg");
	var mask_graphics_90 = new cjs.Graphics().p("AgdVDIAAmkId2AAIAAGkg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(70).to({graphics:mask_graphics_70,x:188.1,y:134.7}).wait(1).to({graphics:mask_graphics_71,x:188.1,y:134.7}).wait(1).to({graphics:mask_graphics_72,x:188.1,y:134.7}).wait(1).to({graphics:mask_graphics_73,x:188.1,y:134.7}).wait(1).to({graphics:mask_graphics_74,x:188.1,y:134.7}).wait(1).to({graphics:mask_graphics_75,x:188.1,y:134.7}).wait(1).to({graphics:mask_graphics_76,x:188,y:134.7}).wait(1).to({graphics:mask_graphics_77,x:188,y:134.7}).wait(1).to({graphics:mask_graphics_78,x:188,y:134.7}).wait(1).to({graphics:mask_graphics_79,x:188,y:134.7}).wait(1).to({graphics:mask_graphics_80,x:188,y:134.7}).wait(1).to({graphics:mask_graphics_81,x:188,y:134.7}).wait(1).to({graphics:mask_graphics_82,x:188,y:134.7}).wait(1).to({graphics:mask_graphics_83,x:188,y:134.7}).wait(1).to({graphics:mask_graphics_84,x:188,y:134.7}).wait(1).to({graphics:mask_graphics_85,x:188,y:134.7}).wait(1).to({graphics:mask_graphics_86,x:188,y:134.7}).wait(1).to({graphics:mask_graphics_87,x:188,y:134.7}).wait(1).to({graphics:mask_graphics_88,x:188,y:134.7}).wait(1).to({graphics:mask_graphics_89,x:188,y:134.7}).wait(1).to({graphics:mask_graphics_90,x:188.1,y:134.7}).wait(86));

	// Layer_11
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(276.4,250.3,0.855,0.855,0,0,0,56.6,15.5);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70).to({_off:false},0).wait(106));

	// Layer 5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_54 = new cjs.Graphics().p("AjvToIAAjxICcAAIAADxg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AjvToIAAjxIG/AAIAADxg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AlpToIAAjxILTAAIAADxg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AnrToIAAjxIPXAAIAADxg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AplToIAAjxITLAAIAADxg");
	var mask_1_graphics_59 = new cjs.Graphics().p("ArXToIAAjxIWvAAIAADxg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AtBToIAAjxIaDAAIAADxg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AukToIAAjxIdJAAIAADxg");
	var mask_1_graphics_62 = new cjs.Graphics().p("Av+ToIAAjxIf9AAIAADxg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AxRToIAAjxMAijAAAIAADxg");
	var mask_1_graphics_64 = new cjs.Graphics().p("AycToIAAjxMAk5AAAIAADxg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AzfToIAAjxMAm/AAAIAADxg");
	var mask_1_graphics_66 = new cjs.Graphics().p("A0aToIAAjxMAo1AAAIAADxg");
	var mask_1_graphics_67 = new cjs.Graphics().p("A1NToIAAjxMAqbAAAIAADxg");
	var mask_1_graphics_68 = new cjs.Graphics().p("A15ToIAAjxMArzAAAIAADxg");
	var mask_1_graphics_69 = new cjs.Graphics().p("A2cToIAAjxMAs5AAAIAADxg");
	var mask_1_graphics_70 = new cjs.Graphics().p("A24ToIAAjxMAtxAAAIAADxg");
	var mask_1_graphics_71 = new cjs.Graphics().p("A3LToIAAjxMAuXAAAIAADxg");
	var mask_1_graphics_72 = new cjs.Graphics().p("A3XToIAAjxMAuvAAAIAADxg");
	var mask_1_graphics_73 = new cjs.Graphics().p("A3bToIAAjxMAu3AAAIAADxg");
	var mask_1_graphics_74 = new cjs.Graphics().p("A3bT6IAAkVMAu3AAAIAAEVg");
	var mask_1_graphics_75 = new cjs.Graphics().p("A3bUMIAAk5MAu3AAAIAAE5g");
	var mask_1_graphics_76 = new cjs.Graphics().p("A3bUdIAAlbMAu3AAAIAAFbg");
	var mask_1_graphics_77 = new cjs.Graphics().p("A3bUtIAAl6MAu3AAAIAAF6g");
	var mask_1_graphics_78 = new cjs.Graphics().p("A3bU8IAAmYMAu3AAAIAAGYg");
	var mask_1_graphics_79 = new cjs.Graphics().p("A3bVJIAAmyMAu3AAAIAAGyg");
	var mask_1_graphics_80 = new cjs.Graphics().p("A3bVWIAAnMMAu3AAAIAAHMg");
	var mask_1_graphics_81 = new cjs.Graphics().p("A3bVhIAAniMAu3AAAIAAHig");
	var mask_1_graphics_82 = new cjs.Graphics().p("A3bVrIAAn2MAu3AAAIAAH2g");
	var mask_1_graphics_83 = new cjs.Graphics().p("A3bV0IAAoIMAu3AAAIAAIIg");
	var mask_1_graphics_84 = new cjs.Graphics().p("A3bV9IAAoaMAu3AAAIAAIag");
	var mask_1_graphics_85 = new cjs.Graphics().p("A3bWEIAAooMAu3AAAIAAIog");
	var mask_1_graphics_86 = new cjs.Graphics().p("A3bWKIAAozMAu3AAAIAAIzg");
	var mask_1_graphics_87 = new cjs.Graphics().p("A3bWOIAAo8MAu3AAAIAAI8g");
	var mask_1_graphics_88 = new cjs.Graphics().p("A3bWSIAApEMAu3AAAIAAJEg");
	var mask_1_graphics_89 = new cjs.Graphics().p("A3bWVIAApKMAu3AAAIAAJKg");
	var mask_1_graphics_90 = new cjs.Graphics().p("A3bWXIAApNMAu3AAAIAAJNg");
	var mask_1_graphics_91 = new cjs.Graphics().p("A3bWWIAApOMAu3AAAIAAJOg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(54).to({graphics:mask_1_graphics_54,x:-24,y:125.6}).wait(1).to({graphics:mask_1_graphics_55,x:-24,y:125.6}).wait(1).to({graphics:mask_1_graphics_56,x:-11.8,y:125.6}).wait(1).to({graphics:mask_1_graphics_57,x:1.2,y:125.6}).wait(1).to({graphics:mask_1_graphics_58,x:13.4,y:125.6}).wait(1).to({graphics:mask_1_graphics_59,x:24.8,y:125.6}).wait(1).to({graphics:mask_1_graphics_60,x:35.5,y:125.6}).wait(1).to({graphics:mask_1_graphics_61,x:45.3,y:125.6}).wait(1).to({graphics:mask_1_graphics_62,x:54.4,y:125.6}).wait(1).to({graphics:mask_1_graphics_63,x:62.7,y:125.6}).wait(1).to({graphics:mask_1_graphics_64,x:70.1,y:125.6}).wait(1).to({graphics:mask_1_graphics_65,x:76.8,y:125.6}).wait(1).to({graphics:mask_1_graphics_66,x:82.7,y:125.6}).wait(1).to({graphics:mask_1_graphics_67,x:87.9,y:125.6}).wait(1).to({graphics:mask_1_graphics_68,x:92.2,y:125.6}).wait(1).to({graphics:mask_1_graphics_69,x:95.7,y:125.6}).wait(1).to({graphics:mask_1_graphics_70,x:98.5,y:125.6}).wait(1).to({graphics:mask_1_graphics_71,x:100.5,y:125.6}).wait(1).to({graphics:mask_1_graphics_72,x:101.7,y:125.6}).wait(1).to({graphics:mask_1_graphics_73,x:102.1,y:125.6}).wait(1).to({graphics:mask_1_graphics_74,x:102.1,y:127.4}).wait(1).to({graphics:mask_1_graphics_75,x:102.1,y:129.2}).wait(1).to({graphics:mask_1_graphics_76,x:102.1,y:130.9}).wait(1).to({graphics:mask_1_graphics_77,x:102.1,y:132.5}).wait(1).to({graphics:mask_1_graphics_78,x:102.1,y:134}).wait(1).to({graphics:mask_1_graphics_79,x:102.1,y:135.3}).wait(1).to({graphics:mask_1_graphics_80,x:102.1,y:136.6}).wait(1).to({graphics:mask_1_graphics_81,x:102.1,y:137.7}).wait(1).to({graphics:mask_1_graphics_82,x:102.1,y:138.7}).wait(1).to({graphics:mask_1_graphics_83,x:102.1,y:139.6}).wait(1).to({graphics:mask_1_graphics_84,x:102.1,y:140.5}).wait(1).to({graphics:mask_1_graphics_85,x:102.1,y:141.2}).wait(1).to({graphics:mask_1_graphics_86,x:102.1,y:141.8}).wait(1).to({graphics:mask_1_graphics_87,x:102.1,y:142.2}).wait(1).to({graphics:mask_1_graphics_88,x:102.1,y:142.6}).wait(1).to({graphics:mask_1_graphics_89,x:102.1,y:142.9}).wait(1).to({graphics:mask_1_graphics_90,x:102.1,y:143.1}).wait(1).to({graphics:mask_1_graphics_91,x:102.1,y:143}).wait(85));

	// Lorem ipsum is simply doler dummy text ad amet
	this.instance_1 = new lib.Symbol28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(107.1,250.6,1,1,0,0,0,112.1,23);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).wait(122));

	// Layer_9
	this.instance_2 = new lib.Symbol14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(102.1,164.5,0.146,0.146,0,0,0,86.2,106.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(33).to({_off:false},0).to({regY:106.2,scaleX:0.88,scaleY:0.88,x:93.5,y:164,alpha:1},6,cjs.Ease.get(1)).to({scaleX:0.68,scaleY:0.68,x:95.9,y:162.8},8,cjs.Ease.get(1)).to({regX:86,scaleX:0.76,scaleY:0.76,x:94.8,y:163.3},10,cjs.Ease.get(1)).wait(119));

	// Layer 6
	this.instance_3 = new lib.Symbol32_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(194.9,156.1,0.697,0.697,0,0,0,161.8,138);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(176));

	// Layer_2
	this.instance_4 = new lib.Symbol21("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(168,40.7,1,1,0,0,0,134.4,37.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(176));

	// Layer_1
	this.instance_5 = new lib.Symbol1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(167.8,141.1,1.116,0.83,0,0,0,150.3,170.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:0.55,y:93.1},16,cjs.Ease.get(1)).wait(160));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A6PV4MAAAgrvMA0fAAAMAAAArvg");
	this.shape_1.setTransform(168,140);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(176));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(167,139,338,498.9);
// library properties:
lib.properties = {
	width: 336,
	height: 280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/web336x280_atlas_P_.png", id:"web336x280_atlas_P_"},
		{src:"images/web336x280_atlas_NP_.jpg", id:"web336x280_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
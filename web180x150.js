(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"web180x150_atlas_P_", frames: [[0,0,230,175],[143,177,62,92],[0,177,141,285]]},
		{name:"web180x150_atlas_NP_", frames: [[301,0,85,168],[217,0,82,257],[0,0,215,259]]}
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
	this.spriteSheet = ss["web180x150_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["web180x150_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["web180x150_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ipad = function() {
	this.spriteSheet = ss["web180x150_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.iphonejpgcopy = function() {
	this.spriteSheet = ss["web180x150_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.tamplate1 = function() {
	this.spriteSheet = ss["web180x150_atlas_NP_"];
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
	this.shape.graphics.f("#1E1E1E").s().p("AABAZIgDgCIgCgEIAAgFIAAgXIgGAAIAAgFIAGAAIAAgLIAHAAIAAALIAIAAIAAAFIgIAAIAAAXIABAEIAFABIACAAIAAAGIgEABIgGgBg");
	this.shape.setTransform(108.7,24.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E1E1E").s().p("AgMAQQgEgFAAgJIAAgDQgBgJAFgFQAFgFAHAAQAIAAAFAFQAEAFAAAJIAAADIgaAAIAAABQAAAFADAEQADADAEAAQADAAACgBQADgCAAgDIAIAAQgBAGgEADQgFADgGAAQgIAAgFgFgAgGgLQgDADAAAFIATAAQAAgFgDgDQgDgDgEAAQgEAAgCADg");
	this.shape_1.setTransform(105.3,24.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E1E1E").s().p("AAVAVIAAgZQAAgEgCgDQgDgCgEAAQgEAAgCACQgCADAAAFIAAAYIgHAAIAAgYQAAgFgCgDQgCgCgEAAQgEAAgCACQgDADAAAFIAAAYIgIAAIAAgoIAIAAIAAAFIABAAQABgCACgCQADgCAEAAQAFAAADACQACACABADIAAAAQABgDAEgCQADgCAFAAQAGAAAEAEQAEAEAAAGIAAAbg");
	this.shape_2.setTransform(99.7,24.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1E1E1E").s().p("AgMASQgDgDgBgGQABgGADgDQAEgCAHAAIAJAAIAAgEQAAgEgBgCQgDgCgEAAQgCAAgCACQgCACgBADIgHAAQABgGADgEQAEgDAGAAQAIAAAEADQAEAEABAHIAAAbIgIAAIAAgFIgBAAQgDAFgHAAQgGAAgEgDgAgGAEQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAABQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQADACADAAQADAAADgCQACgCAAgEIAAgFIgIAAQgEAAgCACg");
	this.shape_3.setTransform(94.1,24.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E1E1E").s().p("AgNAXQgEgFAAgJIAAgEQAAgHAEgGQAFgFAIAAQACAAAEACQACABACADIAAAAIAAgUIAIAAIAAA3IgIAAIAAgGIgEAFQgEABgCAAQgIAAgFgFgAgGgDQgDADAAAGIAAADQAAAGADADQADAEADAAQAFAAADgEQACgDAAgGIAAgDQAAgGgCgDQgDgDgFAAQgDAAgDADg");
	this.shape_4.setTransform(88.2,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1E1E1E").s().p("AgMASQgDgDgBgGQABgGADgDQAEgCAHAAIAJAAIAAgEQABgEgCgCQgDgCgEAAQgCAAgCACQgCACgBADIgHAAQABgGADgEQAEgDAGAAQAIAAAEADQAEAEABAHIAAAbIgIAAIAAgFIgBAAQgDAFgHAAQgGAAgEgDgAgGAEQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAABQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQADACADAAQADAAADgCQACgCAAgEIAAgFIgIAAQgEAAgCACg");
	this.shape_5.setTransform(83.8,24.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1E1E1E").s().p("AABAZIgDgCIgCgEIAAgFIAAgXIgGAAIAAgFIAGAAIAAgLIAHAAIAAALIAIAAIAAAFIgIAAIAAAXIABAEIAFABIACAAIAAAGIgEABIgGgBg");
	this.shape_6.setTransform(78.9,24.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1E1E1E").s().p("AAKAUIgKgPIgJAPIgJAAIAOgUIgOgTIAKAAIAIAOIAKgOIAJAAIgOATIAOAUg");
	this.shape_7.setTransform(75.5,24.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1E1E1E").s().p("AgLAQQgGgFAAgJIAAgDQABgJAEgFQAFgFAHAAQAIAAAEAFQAGAFAAAJIAAADIgaAAIAAABQgBAFADAEQADADADAAQAEAAACgBQACgCABgDIAIAAQgBAGgFADQgEADgHAAQgHAAgEgFgAgGgLQgDADABAFIARAAQAAgFgCgDQgDgDgEAAQgDAAgDADg");
	this.shape_8.setTransform(71.5,24.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1E1E1E").s().p("AABAZIgDgCIgCgEIAAgFIAAgXIgGAAIAAgFIAGAAIAAgLIAHAAIAAALIAIAAIAAAFIgIAAIAAAXIABAEIAFABIACAAIAAAGIgEABIgGgBg");
	this.shape_9.setTransform(68.1,24.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1E1E1E").s().p("AgPAbIAAgFIADAAQAEAAACgCIACgEIABgCIgPgpIAJAAIAJAgIALggIAIAAIgOAoIgBADIgCADIgCAEIgCACIgDACIgFABIgFgBg");
	this.shape_10.setTransform(63,25.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1E1E1E").s().p("AAVAVIAAgZQAAgEgCgDQgDgCgEAAQgEAAgCACQgCADAAAFIAAAYIgHAAIAAgYQAAgFgCgDQgCgCgEAAQgEAAgCACQgDADAAAFIAAAYIgIAAIAAgoIAIAAIAAAFIABAAQABgCACgCQADgCAEAAQAFAAADACQACACABADIAAAAQABgDAEgCQADgCAFAAQAGAAAEAEQAEAEAAAGIAAAbg");
	this.shape_11.setTransform(57.6,24.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1E1E1E").s().p("AAVAVIAAgZQAAgEgCgDQgDgCgEAAQgEAAgCACQgCADAAAFIAAAYIgHAAIAAgYQAAgFgCgDQgCgCgEAAQgEAAgCACQgDADAAAFIAAAYIgIAAIAAgoIAIAAIAAAFIABAAQABgCACgCQADgCAEAAQAFAAADACQACACABADIAAAAQABgDAEgCQADgCAFAAQAGAAAEAEQAEAEAAAGIAAAbg");
	this.shape_12.setTransform(50.8,24.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1E1E1E").s().p("AgMARQgEgEAAgGIAAgbIAIAAIAAAYQAAAGACACQADACADAAQAEAAADgDQACgCAAgFIAAgYIAIAAIAAAoIgHAAIAAgFIgBAAQgBACgDACQgDACgEAAQgGAAgEgEg");
	this.shape_13.setTransform(45,24.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1E1E1E").s().p("AgNAXQgEgFAAgJIAAgEQAAgHAEgGQAFgFAIAAQACAAAEACQACABACADIAAAAIAAgUIAIAAIAAA3IgIAAIAAgGIgEAFQgEABgCAAQgIAAgFgFgAgGgDQgDADAAAGIAAADQAAAGADADQADAEADAAQAFAAADgEQACgDAAgGIAAgDQAAgGgCgDQgDgDgFAAQgDAAgDADg");
	this.shape_14.setTransform(40.5,23.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1E1E1E").s().p("AgJAVIAAgoIAIAAIAAAFIAAAAIACgEQADgCAEAAIACAAIAAAIIgDgBQgIAAAAAKIAAAYg");
	this.shape_15.setTransform(135.1,16);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1E1E1E").s().p("AgMAQQgEgFAAgJIAAgDQgBgJAFgFQAFgFAHAAQAIAAAFAFQAEAFAAAJIAAADIgaAAIAAABQAAAFADAEQADADAEAAQADAAACgBQADgCAAgDIAIAAQgBAGgEADQgFADgGAAQgIAAgFgFgAgGgLQgDADAAAFIATAAQAAgFgDgDQgDgDgEAAQgDAAgDADg");
	this.shape_16.setTransform(131.4,16);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1E1E1E").s().p("AgDAcIAAg3IAHAAIAAA3g");
	this.shape_17.setTransform(128.3,15.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1E1E1E").s().p("AgMAQQgFgFAAgJIAAgDQAAgIAFgGQAEgFAIAAQAJAAAEAFQAFAGAAAIIAAADQAAAJgFAFQgEAFgJAAQgIAAgEgFgAgGgKQgDADAAAHIAAACQAAAGADADQACAEAEAAQAFAAACgEQADgDAAgGIAAgCQAAgHgDgDQgCgEgFAAQgEAAgCAEg");
	this.shape_18.setTransform(125.1,16);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1E1E1E").s().p("AgNAXQgEgFAAgJIAAgEQAAgHAEgGQAFgFAIAAQACAAAEACQACABACADIAAAAIAAgUIAIAAIAAA3IgIAAIAAgGIgEAFQgEABgCAAQgIAAgFgFgAgGgDQgDADAAAGIAAADQAAAGADADQADAEADAAQAFAAADgEQACgDAAgGIAAgDQAAgGgCgDQgDgDgFAAQgDAAgDADg");
	this.shape_19.setTransform(120.6,15.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1E1E1E").s().p("AgPAbIAAgFIADAAQAEAAACgCIACgEIABgCIgPgpIAJAAIAJAgIALggIAIAAIgOAoIgBADIgCADIgCAEIgCADIgDABIgFABIgFgBg");
	this.shape_20.setTransform(114.6,16.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1E1E1E").s().p("AgDAcIAAg3IAHAAIAAA3g");
	this.shape_21.setTransform(111.6,15.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1E1E1E").s().p("AgRAcIAAg2IAIAAIAAAGIAFgFQADgCADAAQAHAAAFAGQAEAEAAAJIAAAFQAAAHgEAFQgFAFgHABQgDAAgDgCQgDgCgCgDIAAAAIAAAUgAgGgRQgDAEAAAGIAAACQAAAGADAEQACADAEAAQAFAAACgDQADgEAAgGIAAgCQAAgHgDgDQgCgDgFAAQgEAAgCADg");
	this.shape_22.setTransform(108.4,16.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1E1E1E").s().p("AAVAVIAAgZQAAgEgCgDQgDgCgEAAQgEAAgCACQgCADAAAFIAAAYIgHAAIAAgYQAAgFgCgDQgCgCgEAAQgEAAgCACQgDADAAAFIAAAYIgIAAIAAgoIAIAAIAAAFIABAAQABgCACgCQADgCAEAAQAFAAADACQACACABADIAAAAQABgDAEgCQADgCAFAAQAGAAAEAEQAEAEAAAGIAAAbg");
	this.shape_23.setTransform(102.6,16);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1E1E1E").s().p("AgDAcIAAgoIAHAAIAAAogAgCgTQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAgBAAAAg");
	this.shape_24.setTransform(98.1,15.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1E1E1E").s().p("AgLASQgEgDAAgFIAHAAQAAAAABABQAAAAAAABQAAAAABABQAAAAABABQACABADAAQAEAAACgBQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIAAgBIgBgCIgBgBIgDgBIgCAAIgBgBIgBAAIgFgBIgFgCIgDgDIgBgFQAAgDACgCQABgDACgBIAFgCIAFgBQAHAAAEADQAEAEAAAFIgHAAQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgCgCgEAAQgDAAgCABQgCACAAADIABACIABACIACABIADAAIACABIAAAAIAFABIADABIAEABIABADIABAEQAAAHgEADQgFADgHAAQgHAAgEgDg");
	this.shape_25.setTransform(95.1,16);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1E1E1E").s().p("AgLASQgEgDAAgFIAHAAQAAAAABABQAAAAAAABQAAAAABABQAAAAABABQACABADAAQAEAAACgBQABgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBIAAgBIgBgCIgBgBIgDgBIgCAAIgBgBIgBAAIgFgBIgFgCIgDgDIgBgFQAAgDACgCQABgDACgBIAFgCIAFgBQAHAAAEADQAEAEAAAFIgHAAQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAQgCgCgEAAQgDAAgCABQgCACAAADIABACIABACIACABIADAAIACABIAAAAIAFABIADABIAEABIABADIABAEQAAAHgEADQgFADgHAAQgHAAgEgDg");
	this.shape_26.setTransform(89.6,16);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1E1E1E").s().p("AgDAcIAAgoIAHAAIAAAogAgCgTQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAgBAAAAg");
	this.shape_27.setTransform(86.6,15.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1E1E1E").s().p("AAVAVIAAgZQAAgEgCgDQgDgCgEAAQgEAAgCACQgCADAAAFIAAAYIgHAAIAAgYQAAgFgCgDQgCgCgEAAQgEAAgCACQgDADAAAFIAAAYIgIAAIAAgoIAIAAIAAAFIABAAQABgCACgCQADgCAEAAQAFAAADACQACACABADIAAAAQABgDAEgCQADgCAFAAQAGAAAEAEQAEAEAAAGIAAAbg");
	this.shape_28.setTransform(80.5,16);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1E1E1E").s().p("AgMARQgEgEAAgGIAAgbIAIAAIAAAYQAAAGACACQADACADAAQAEAAADgDQACgCAAgFIAAgYIAIAAIAAAoIgHAAIAAgFIgBAAQgBACgDACQgDACgEAAQgGAAgEgEg");
	this.shape_29.setTransform(74.8,16.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1E1E1E").s().p("AgLASQgEgDAAgFIAHAAQAAAAABABQAAAAAAABQAAAAABABQAAAAABABQACABADAAQAEAAACgBQABgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBIAAgBIgBgCIgBgBIgDgBIgCAAIgBgBIgBAAIgFgBIgFgCIgDgDIgBgFQAAgDACgCQABgDACgBIAFgCIAFgBQAHAAAEADQAEAEAAAFIgHAAQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAQgCgCgEAAQgDAAgCABQgCACAAADIABACIABACIACABIADAAIACABIAAAAIAFABIADABIAEABIABADIABAEQAAAHgEADQgFADgHAAQgHAAgEgDg");
	this.shape_30.setTransform(70.6,16);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1E1E1E").s().p("AgRAcIAAg2IAIAAIAAAGIAFgFQADgCADAAQAHAAAFAGQAEAEAAAJIAAAFQAAAHgEAFQgFAFgHABQgDAAgDgCQgDgCgCgDIAAAAIAAAUgAgGgRQgDAEAAAGIAAACQAAAGADAEQACADAEAAQAFAAACgDQADgEAAgGIAAgCQAAgHgDgDQgCgDgFAAQgEAAgCADg");
	this.shape_31.setTransform(66.5,16.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1E1E1E").s().p("AgDAcIAAgoIAHAAIAAAogAgDgTQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_32.setTransform(63,15.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1E1E1E").s().p("AAVAVIAAgZQAAgEgCgDQgDgCgEAAQgEAAgCACQgCADAAAFIAAAYIgHAAIAAgYQAAgFgCgDQgCgCgEAAQgEAAgCACQgDADAAAFIAAAYIgIAAIAAgoIAIAAIAAAFIABAAQABgCACgCQADgCAEAAQAFAAADACQACACABADIAAAAQABgDAEgCQADgCAFAAQAGAAAEAEQAEAEAAAGIAAAbg");
	this.shape_33.setTransform(57,16);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1E1E1E").s().p("AgMAQQgEgFAAgJIAAgDQgBgJAFgFQAFgFAHAAQAIAAAEAFQAFAFABAJIAAADIgaAAIAAABQAAAFACAEQADADAEAAQADAAACgBQACgCABgDIAIAAQgCAGgEADQgEADgGAAQgIAAgFgFgAgGgLQgCADAAAFIASAAQgBgFgCgDQgDgDgEAAQgDAAgDADg");
	this.shape_34.setTransform(51.5,16);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1E1E1E").s().p("AgJAVIAAgoIAIAAIAAAFIAAAAIACgEQADgCAEAAIACAAIAAAIIgDgBQgIAAAAAKIAAAYg");
	this.shape_35.setTransform(48.1,16);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1E1E1E").s().p("AgMAQQgFgFAAgJIAAgDQAAgIAFgGQAFgFAHAAQAIAAAGAFQAEAGAAAIIAAADQAAAJgEAFQgGAFgIAAQgHAAgFgFgAgHgKQgCADAAAHIAAACQAAAGACADQADAEAEAAQAFAAACgEQADgDAAgGIAAgCQAAgHgDgDQgCgEgFAAQgEAAgDAEg");
	this.shape_36.setTransform(44.4,16);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1E1E1E").s().p("AgPAbIAAg1IAIAAIAAAuIAXAAIAAAHg");
	this.shape_37.setTransform(40.5,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(36.3,8.5,102.3,22.1), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).wait(1).to({regY:142.5,x:35,y:190.4,startPosition:1},0).wait(1).to({x:51.6,y:188.1,startPosition:2},0).wait(1).to({x:62.3,y:186.6,startPosition:3},0).wait(1).to({x:70.1,y:185.5,startPosition:4},0).wait(1).to({x:76,y:184.6,startPosition:5},0).wait(1).to({x:80.6,y:184,startPosition:6},0).wait(1).to({x:84.4,y:183.5,startPosition:7},0).wait(1).to({x:87.3,y:183.1,startPosition:8},0).wait(1).to({x:89.7,y:182.7,startPosition:9},0).wait(1).to({x:91.7,y:182.5,startPosition:10},0).wait(1).to({x:93.2,y:182.2,startPosition:11},0).wait(1).to({x:94.4,y:182.1,startPosition:12},0).wait(1).to({x:95.3,y:182,startPosition:13},0).wait(1).to({x:96,y:181.9,startPosition:14},0).wait(1).to({x:96.4,y:181.8,startPosition:15},0).wait(1).to({x:96.7,startPosition:16},0).wait(1).to({regY:142.6,x:96.8,startPosition:17},0).wait(140));

	// ipad
	this.instance_2 = new lib.Symbol7("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-31.3,189,1,1,0,0,0,31.2,46);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).wait(1).to({regX:31,x:13.5,y:181.4,startPosition:1},0).wait(1).to({x:27.3,y:179.1,startPosition:2},0).wait(1).to({x:36.1,y:177.6,startPosition:3},0).wait(1).to({x:42.5,y:176.5,startPosition:4},0).wait(1).to({x:47.4,y:175.7,startPosition:5},0).wait(1).to({x:51.3,y:175,startPosition:6},0).wait(1).to({x:54.3,y:174.5,startPosition:7},0).wait(1).to({x:56.8,y:174.1,startPosition:8},0).wait(1).to({x:58.8,y:173.8,startPosition:9},0).wait(1).to({x:60.4,y:173.5,startPosition:10},0).wait(1).to({x:61.7,y:173.3,startPosition:11},0).wait(1).to({x:62.7,y:173.1,startPosition:12},0).wait(1).to({x:63.4,y:173,startPosition:13},0).wait(1).to({x:64,y:172.9,startPosition:14},0).wait(1).to({x:64.3,y:172.8,startPosition:15},0).wait(1).to({x:64.5,startPosition:16},0).wait(1).to({regX:31.2,x:64.8,startPosition:17},0).wait(134));

	// ipad
	this.instance_3 = new lib.Symbol7("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(409.2,189,1,1,0,0,0,31.2,46);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(1).to({regX:31,x:338.8,y:181.4,startPosition:1},0).wait(1).to({x:317.3,y:179.1,startPosition:2},0).wait(1).to({x:303.5,y:177.6,startPosition:3},0).wait(1).to({x:293.5,y:176.5,startPosition:4},0).wait(1).to({x:285.8,y:175.7,startPosition:5},0).wait(1).to({x:279.8,y:175,startPosition:6},0).wait(1).to({x:275,y:174.5,startPosition:7},0).wait(1).to({x:271.2,y:174.1,startPosition:8},0).wait(1).to({x:268.1,y:173.8,startPosition:9},0).wait(1).to({x:265.6,y:173.5,startPosition:10},0).wait(1).to({x:263.6,y:173.3,startPosition:11},0).wait(1).to({x:262,y:173.1,startPosition:12},0).wait(1).to({x:260.9,y:173,startPosition:13},0).wait(1).to({x:260,y:172.9,startPosition:14},0).wait(1).to({x:259.4,y:172.8,startPosition:15},0).wait(1).to({x:259.1,startPosition:16},0).wait(1).to({regX:31.2,x:259.2,startPosition:17},0).wait(138));

	// mac
	this.instance_4 = new lib.Symbol2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(168,540.6,1,1,0,0,0,115,87.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:123.5},16,cjs.Ease.get(1)).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(53,453.1,230,175);


// stage content:
(lib.web180x150 = function(mode,startPosition,loop) {
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
	this.replayBtn.setTransform(7.6,6.9,0.424,0.424);
	this.replayBtn._off = true;
	new cjs.ButtonHelper(this.replayBtn, 0, 1, 2, false, new lib.recopy(), 3);

	this.timeline.addTween(cjs.Tween.get(this.replayBtn).wait(175).to({_off:false},0).wait(1));

	// Layer 22
	this.landing = new lib.Symbol1copy2();
	this.landing.parent = this;
	this.landing.setTransform(-0.1,0.2,0.327,0.375,0,0,0,-0.3,0.4);

	this.timeline.addTween(cjs.Tween.get(this.landing).wait(176));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#23B3D6").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(90,75,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(176));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_70 = new cjs.Graphics().p("AOTLoIAAjzIBdAAIAADzg");
	var mask_graphics_71 = new cjs.Graphics().p("AMwLoIAAjzIDAAAIAADzg");
	var mask_graphics_72 = new cjs.Graphics().p("ALSLoIAAjzIEdAAIAADzg");
	var mask_graphics_73 = new cjs.Graphics().p("AJ5LoIAAjzIF2AAIAADzg");
	var mask_graphics_74 = new cjs.Graphics().p("AIlLoIAAjzIHKAAIAADzg");
	var mask_graphics_75 = new cjs.Graphics().p("AHWLoIAAjzIIYAAIAADzg");
	var mask_graphics_76 = new cjs.Graphics().p("AGNLoIAAjzIJhAAIAADzg");
	var mask_graphics_77 = new cjs.Graphics().p("AFILoIAAjzIKmAAIAADzg");
	var mask_graphics_78 = new cjs.Graphics().p("AEILoIAAjzILmAAIAADzg");
	var mask_graphics_79 = new cjs.Graphics().p("ADOLoIAAjzIMfAAIAADzg");
	var mask_graphics_80 = new cjs.Graphics().p("ACYLoIAAjzINVAAIAADzg");
	var mask_graphics_81 = new cjs.Graphics().p("ABoLoIAAjzIOFAAIAADzg");
	var mask_graphics_82 = new cjs.Graphics().p("AA9LoIAAjzIOwAAIAADzg");
	var mask_graphics_83 = new cjs.Graphics().p("AAXLoIAAjzIPWAAIAADzg");
	var mask_graphics_84 = new cjs.Graphics().p("AgJLoIAAjzIP2AAIAADzg");
	var mask_graphics_85 = new cjs.Graphics().p("AglLoIAAjzIQRAAIAADzg");
	var mask_graphics_86 = new cjs.Graphics().p("Ag8LoIAAjzIQoAAIAADzg");
	var mask_graphics_87 = new cjs.Graphics().p("AhOLoIAAjzIQ6AAIAADzg");
	var mask_graphics_88 = new cjs.Graphics().p("AhbLoIAAjzIRHAAIAADzg");
	var mask_graphics_89 = new cjs.Graphics().p("AhiLoIAAjzIROAAIAADzg");
	var mask_graphics_90 = new cjs.Graphics().p("AhhLoIAAjzIRRAAIAADzg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(70).to({graphics:mask_graphics_70,x:100.8,y:74.4}).wait(1).to({graphics:mask_graphics_71,x:100.8,y:74.4}).wait(1).to({graphics:mask_graphics_72,x:100.7,y:74.4}).wait(1).to({graphics:mask_graphics_73,x:100.7,y:74.4}).wait(1).to({graphics:mask_graphics_74,x:100.7,y:74.4}).wait(1).to({graphics:mask_graphics_75,x:100.6,y:74.4}).wait(1).to({graphics:mask_graphics_76,x:100.6,y:74.4}).wait(1).to({graphics:mask_graphics_77,x:100.6,y:74.4}).wait(1).to({graphics:mask_graphics_78,x:100.6,y:74.4}).wait(1).to({graphics:mask_graphics_79,x:100.5,y:74.4}).wait(1).to({graphics:mask_graphics_80,x:100.5,y:74.4}).wait(1).to({graphics:mask_graphics_81,x:100.5,y:74.4}).wait(1).to({graphics:mask_graphics_82,x:100.5,y:74.4}).wait(1).to({graphics:mask_graphics_83,x:100.5,y:74.4}).wait(1).to({graphics:mask_graphics_84,x:100.5,y:74.4}).wait(1).to({graphics:mask_graphics_85,x:100.4,y:74.4}).wait(1).to({graphics:mask_graphics_86,x:100.4,y:74.4}).wait(1).to({graphics:mask_graphics_87,x:100.4,y:74.4}).wait(1).to({graphics:mask_graphics_88,x:100.4,y:74.4}).wait(1).to({graphics:mask_graphics_89,x:100.4,y:74.4}).wait(1).to({graphics:mask_graphics_90,x:100.8,y:74.4}).wait(86));

	// Layer_11
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(144.1,138,0.495,0.495,0,0,0,56.8,15.7);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70).to({_off:false},0).wait(106));

	// Layer 5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_54 = new cjs.Graphics().p("AhbKyIAAjvICbAAIAADvg");
	var mask_1_graphics_55 = new cjs.Graphics().p("Ah9KyIAAjwID7AAIAADwg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AirKyIAAjwIFXAAIAADwg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AjVKyIAAjwIGrAAIAADwg");
	var mask_1_graphics_58 = new cjs.Graphics().p("Aj+KyIAAjwIH9AAIAADwg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AkjKxIAAjwIJHAAIAADwg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AlHKxIAAjwIKPAAIAADwg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AlnKxIAAjwILPAAIAADwg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AmFKxIAAjwIMLAAIAADwg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AmgKxIAAjwINBAAIAADwg");
	var mask_1_graphics_64 = new cjs.Graphics().p("Am5KxIAAjwINzAAIAADwg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AnPKwIAAjwIOfAAIAADwg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AnjKwIAAjwIPHAAIAADwg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AnzKwIAAjwIPnAAIAADwg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AoCKwIAAjwIQFAAIAADwg");
	var mask_1_graphics_69 = new cjs.Graphics().p("AoNKwIAAjwIQbAAIAADwg");
	var mask_1_graphics_70 = new cjs.Graphics().p("AoXKwIAAjwIQvAAIAADwg");
	var mask_1_graphics_71 = new cjs.Graphics().p("AodKwIAAjwIQ7AAIAADwg");
	var mask_1_graphics_72 = new cjs.Graphics().p("AohKwIAAjwIRDAAIAADwg");
	var mask_1_graphics_73 = new cjs.Graphics().p("AoiKwIAAjwIRFAAIAADwg");
	var mask_1_graphics_74 = new cjs.Graphics().p("AoeK2IAAjuIQ9AAIAADug");
	var mask_1_graphics_75 = new cjs.Graphics().p("AobK7IAAjrIQ3AAIAADrg");
	var mask_1_graphics_76 = new cjs.Graphics().p("AoXLAIAAjoIQvAAIAADog");
	var mask_1_graphics_77 = new cjs.Graphics().p("AoULFIAAjmIQpAAIAADmg");
	var mask_1_graphics_78 = new cjs.Graphics().p("AoRLJIAAjkIQjAAIAADkg");
	var mask_1_graphics_79 = new cjs.Graphics().p("AoOLOIAAjjIQdAAIAADjg");
	var mask_1_graphics_80 = new cjs.Graphics().p("AoMLRIAAjgIQZAAIAADgg");
	var mask_1_graphics_81 = new cjs.Graphics().p("AoJLVIAAjfIQUAAIAADfg");
	var mask_1_graphics_82 = new cjs.Graphics().p("AoFLYIAAjdIQQAAIAADdg");
	var mask_1_graphics_83 = new cjs.Graphics().p("AoBLbIAAjcIQMAAIAADcg");
	var mask_1_graphics_84 = new cjs.Graphics().p("An+LdIAAjbIQJAAIAADbg");
	var mask_1_graphics_85 = new cjs.Graphics().p("An7LfIAAjZIQGAAIAADZg");
	var mask_1_graphics_86 = new cjs.Graphics().p("An4LhIAAjZIQDAAIAADZg");
	var mask_1_graphics_87 = new cjs.Graphics().p("An2LjIAAjZIQBAAIAADZg");
	var mask_1_graphics_88 = new cjs.Graphics().p("An1LkIAAjYIQAAAIAADYg");
	var mask_1_graphics_89 = new cjs.Graphics().p("An0LlIAAjYIP/AAIAADYg");
	var mask_1_graphics_90 = new cjs.Graphics().p("AnzLlIAAjXIP+AAIAADXg");
	var mask_1_graphics_91 = new cjs.Graphics().p("An0LlIAAjXIP/AAIAADXg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(54).to({graphics:mask_1_graphics_54,x:-9.2,y:69.1}).wait(1).to({graphics:mask_1_graphics_55,x:-4.5,y:69}).wait(1).to({graphics:mask_1_graphics_56,x:1.4,y:69}).wait(1).to({graphics:mask_1_graphics_57,x:6.9,y:69}).wait(1).to({graphics:mask_1_graphics_58,x:12.1,y:69}).wait(1).to({graphics:mask_1_graphics_59,x:17,y:68.9}).wait(1).to({graphics:mask_1_graphics_60,x:21.5,y:68.9}).wait(1).to({graphics:mask_1_graphics_61,x:25.7,y:68.9}).wait(1).to({graphics:mask_1_graphics_62,x:29.5,y:68.9}).wait(1).to({graphics:mask_1_graphics_63,x:33,y:68.9}).wait(1).to({graphics:mask_1_graphics_64,x:36.2,y:68.9}).wait(1).to({graphics:mask_1_graphics_65,x:39,y:68.8}).wait(1).to({graphics:mask_1_graphics_66,x:41.6,y:68.8}).wait(1).to({graphics:mask_1_graphics_67,x:43.7,y:68.8}).wait(1).to({graphics:mask_1_graphics_68,x:45.6,y:68.8}).wait(1).to({graphics:mask_1_graphics_69,x:47.1,y:68.8}).wait(1).to({graphics:mask_1_graphics_70,x:48.2,y:68.8}).wait(1).to({graphics:mask_1_graphics_71,x:49.1,y:68.8}).wait(1).to({graphics:mask_1_graphics_72,x:49.6,y:68.8}).wait(1).to({graphics:mask_1_graphics_73,x:49.8,y:68.8}).wait(1).to({graphics:mask_1_graphics_74,x:50.2,y:69.4}).wait(1).to({graphics:mask_1_graphics_75,x:50.6,y:69.9}).wait(1).to({graphics:mask_1_graphics_76,x:51,y:70.4}).wait(1).to({graphics:mask_1_graphics_77,x:51.3,y:70.9}).wait(1).to({graphics:mask_1_graphics_78,x:51.6,y:71.3}).wait(1).to({graphics:mask_1_graphics_79,x:51.9,y:71.8}).wait(1).to({graphics:mask_1_graphics_80,x:52.1,y:72.1}).wait(1).to({graphics:mask_1_graphics_81,x:52.3,y:72.5}).wait(1).to({graphics:mask_1_graphics_82,x:52.3,y:72.8}).wait(1).to({graphics:mask_1_graphics_83,x:52.3,y:73.1}).wait(1).to({graphics:mask_1_graphics_84,x:52.3,y:73.3}).wait(1).to({graphics:mask_1_graphics_85,x:52.3,y:73.5}).wait(1).to({graphics:mask_1_graphics_86,x:52.3,y:73.7}).wait(1).to({graphics:mask_1_graphics_87,x:52.3,y:73.9}).wait(1).to({graphics:mask_1_graphics_88,x:52.3,y:74}).wait(1).to({graphics:mask_1_graphics_89,x:52.3,y:74.1}).wait(1).to({graphics:mask_1_graphics_90,x:52.3,y:74.1}).wait(1).to({graphics:mask_1_graphics_91,x:52.3,y:74.1}).wait(85));

	// Lorem ipsum is simply doler dummy text ad amet
	this.instance_1 = new lib.Symbol28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(78.1,140.6,1,1,0,0,0,112.1,23);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).wait(122));

	// Layer_9
	this.instance_2 = new lib.Symbol14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(61.7,100.4,0.1,0.1,0,0,0,86.8,107.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(33).to({_off:false},0).to({regX:86.2,regY:106.3,scaleX:0.6,scaleY:0.6,x:55.8,y:100,alpha:1},6,cjs.Ease.get(1)).to({regX:86.3,scaleX:0.46,scaleY:0.46,x:57.4,y:99.2},8,cjs.Ease.get(1)).to({regX:86,regY:106.2,scaleX:0.52,scaleY:0.52,x:56.7,y:99.5},10,cjs.Ease.get(1)).wait(119));

	// Layer 6
	this.instance_3 = new lib.Symbol32_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(116.8,87.5,0.426,0.426,0,0,0,162.2,138.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(176));

	// Layer_2
	this.instance_4 = new lib.Symbol21("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(90.2,22.4,0.527,0.527,0,0,0,134.6,37.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(176));

	// Layer_1
	this.instance_5 = new lib.Symbol1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(89.9,75.1,0.598,0.441,0,0,0,150.3,170.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:170.2,scaleY:0.32,y:54.1},19,cjs.Ease.get(1)).wait(157));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AuDLuIAA3bIcHAAIAAXbg");
	this.shape_1.setTransform(90,75);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(176));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(89,74,182,297.2);
// library properties:
lib.properties = {
	width: 180,
	height: 150,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/web180x150_atlas_P_.png", id:"web180x150_atlas_P_"},
		{src:"images/web180x150_atlas_NP_.jpg", id:"web180x150_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
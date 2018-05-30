(function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // container which will be returned
        var background;
        var buildingTwo = [];
        var building;
        var c;
        var buildingOne;
        var buildingHeight = 150;
        var backgroundBuilding = [];
        // add objects for display inb ackground
        // called at the start of game and whenever the page is resized
        function render() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;


            background.removeAllChildren();

            // TODO: 3 - YOUR DRAW CODE GOES HERE

            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY, '#802000');
            background.addChild(backgroundFill);

            var shape = draw.circle(50, "#999966", "#806000", 10);
            background.addChild(shape);
            shape.x= 100
            shape.y= 100
    
             
            for(var i=0;i<5;i++){
            buildingOne = draw.rect(100,-200,'#2e2e1f','black',.5);
            buildingOne.x= canvasWidth*Math.random();
            buildingOne.y= groundY;
            background.addChild(buildingOne);
            backgroundBuilding.push(buildingOne);
            }
             
            
            
            for(c=0;c<5;c++){
            building = draw.rect(90, buildingHeight, '#6b6b47','black',1);
            building.x= canvasWidth*Math.random();
            building.y = groundY-buildingHeight;
            background.addChild(building);
            buildingTwo.push(building);
            }
        }
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            for(var f = 0; f < buildingTwo.length; f++) {
                buildingTwo[f].x = buildingTwo[f].x - 1.5;
                if(buildingTwo[f].x < 0) {
                    buildingTwo[f].x = canvasWidth;
                }
            }
            for(var o = 0; o < backgroundBuilding.length; o++) {
                backgroundBuilding[o].x = backgroundBuilding[o].x - 1;
                if(backgroundBuilding[o].x < 0) {
                    backgroundBuilding[o].x = canvasWidth;
                }
            }
        }

        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        app.addResizeable(background);
        app.addUpdateable(background);
        
        render();
        return background;
    };
}(window));
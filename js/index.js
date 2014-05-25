/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    
    // Application Constructor
    initialize: function() {
        //alle variabler herunder med this.navn refereres med this.app.navn
        this.bindEvents();
        this.rotate=false;
        this.fly=false;
        this.counter = 0;
        this.canvas = document.getElementById("canvas");
        this.exportRoot = new lib.output1();
        //miko ok alert(this.exportRoot.Man1_mc.x);
        //gem original position
        this.fly_x = this.exportRoot.Man1_mc.x;
        this.fly_y = this.exportRoot.Man1_mc.y;
        //touch
        this.stage = new createjs.Stage(this.canvas);
        createjs.Touch.enable(this.stage);

        this.exportRoot.Man1_mc.addEventListener("click", this.flyStop);
        this.exportRoot.Man1_mc.mouseEnabled=true;

        this.exportRoot.Knap1_mc.addEventListener("click", this.knapClick);
        this.exportRoot.Knap1_mc.mouseEnabled=true;

        this.stage.enableMouseOver(50);
        this.stage.addChild(this.exportRoot);
        this.stage.update();
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", this.handleTick);
    },
    knapClick: function() {
        app.counter++;
        if (app.counter==3){
            app.flybabyfly();
        }
        if (app.counter==4){
            app.flyStop();
        }
        //alert("knapClick: "+app.counter);
    },
    flybabyfly: function() {
        app.rotate=true;
        app.fly=true;
        //alert("fly: "+app.fly);
    },
    flyStop: function() {
        app.counter=0;
        app.rotate=false;
        app.fly=false;
        app.exportRoot.Man1_mc.x = app.fly_x;
        app.exportRoot.Man1_mc.y = app.fly_y;
    },
    handleTick: function() {
        //this refererer her til function handleTick, så app variabel
        //man kan bare skrive app direkte og slippe for this.
        /*
        if (this.app.rotate == true) {
            //alert(this.app.exportRoot.Man1_mc.Rotor1_mc.rotation);
            app.exportRoot.Man1_mc.Rotor1_mc.rotation += 15;
            //this.app.rotate = false;
            //husk update ellers sker der intet
            app.stage.update();
        }
        */
         if (app.fly==true){
            //alert("now we must fly");
            app.exportRoot.Man1_mc.Rotor1_mc.rotation+=20;
            app.exportRoot.Man1_mc.x+=8;
            app.exportRoot.Man1_mc.y+=2;
            if (app.exportRoot.Man1_mc.x>=1000) {
                app.exportRoot.Man1_mc.x = app.fly_x;
                app.exportRoot.Man1_mc.y = app.fly_y;
            }   
         }
         app.stage.update();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {

        /*
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
        */
        
    }
};

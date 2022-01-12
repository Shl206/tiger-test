Tiger.Game = function (game) {

};
Tiger.Game.prototype = {
    create: function () {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.Gamebg = this.add.tileSprite(0, 0, 740, 1136, 'GameBg');

        //Block
        this.Block1 = this.add.sprite(-65, 400, 'Block1');
        this.game.physics.enable(this.Block1, Phaser.Physics.ARCADE);
        this.Block2 = this.add.sprite(510, 100, 'Block2');
        this.game.physics.enable(this.Block2, Phaser.Physics.ARCADE);
        this.Block3 = this.add.sprite(280, -300, 'Block3');
        this.game.physics.enable(this.Block3, Phaser.Physics.ARCADE);
        this.Block4 = this.add.sprite(50, -700, 'Block4');
        this.game.physics.enable(this.Block4, Phaser.Physics.ARCADE);
        this.Award1 = this.add.sprite(40, -400, 'Award4');
        this.game.physics.enable(this.Award1, Phaser.Physics.ARCADE);
        this.Award12 = this.add.sprite(40, -400, 'Award12');
        this.game.physics.enable(this.Award12, Phaser.Physics.ARCADE);




        this.tiger = this.add.sprite(300, 480, 'tiger');
        this.tiger.animations.add('move');
        this.tiger.animations.play('move', 6, true);
        var tween = this.add.tween(this.tiger).to({ y: 670 }, 1500, null, true);
        tween.onComplete.add(this.onStart, this);
        this.physics.enable(this.tiger, Phaser.Physics.ARCADE);
        this.bodyv = this.add.sprite(310, 520, 'bodyv');
        var tween = this.add.tween(this.bodyv).to({ y: 720 }, 1500, null, true);
        this.physics.enable(this.bodyv, Phaser.Physics.ARCADE);


        //this.Logo = this.add.sprite(560, 0, 'Logo');


        var btnL = this.add.button(50, 910, 'left', this.runLeft, this);
        var btnR = this.add.button(500, 910, 'right', this.runRight, this);
        var btnR = this.add.button(272, 910, 'mid', this.runMid, this);
        //button.......
        //this.startGame();
    },

    update: function () {
        this.physics.arcade.overlap(this.bodyv, this.Block1, this.hitBlock, null, this);
        this.physics.arcade.overlap(this.bodyv, this.Block2, this.hitBlock, null, this);
        this.physics.arcade.overlap(this.bodyv, this.Block3, this.hitBlock2, null, this);
        this.physics.arcade.overlap(this.bodyv, this.Award12, this.hitAward, null, this);
        this.physics.arcade.overlap(this.bodyv, this.Block4, this.hitAward, null, this);
        // /this.gameover(this.playing);

    },

    onStart: function () {
        this.gameIsover = false;
        this.Gamebg.autoScroll(0, 230);
        //this.tiger.inputEnabled = true;
        //this.tiger.input.enableDrag(true);
        this.tiger.body.collideWorldBounds = true;
        this.bodyv.collideWorldBounds = true;
        var tween = this.add.tween(this.Block1).to({ y: 1200 }, 3500, null, true);
        var tween = this.add.tween(this.Block2).to({ y: 1200 }, 5000, null, true);
        var tween = this.add.tween(this.Block3).to({ y: 1200 }, 7000, null, true);
        var tween = this.add.tween(this.Award1).to({ y: 1200 }, 7500, null, true);
        var tween = this.add.tween(this.Award12).to({ y: 1200 }, 6600, null, true);
        var tween = this.add.tween(this.Block4).to({ y: 1200 }, 9000, null, true);
        //this.gameIsover = false;
        
    },
    hitBlock: function () {
        if (this.gameIsover) return;
        this.gameover2();
    },
    //hit the rock
    hitBlock2: function () {
        if (this.gameIsover) return;
        this.gameover3();
    },
    //hit the water
    hitAward: function () {
        if (this.gameIsover) return;
        this.gameover1();
    },
    //hit the award
    gameover2: function () {
        this.gameover = true;
        this.Gamebg.autoScroll(0, 10);
        //this.add.sprite(0, 0, 'Filter');
        this.tiger.destroy();
        this.Block1.destroy();
        this.Block2.destroy();
        this.Block3.destroy();
        this.Block4.destroy();
        this.Award1.destroy();
        this.bodyv.destroy();
        this.showGameOverTxt();
        //this.game.paused = true;
    },
    showGameOverTxt: function () {

        this.add.tileSprite(0, 0, 740, 1136, 'bgfail');
        this.add.sprite(25, 150, 'RedBook2');
        this.add.button(50, 1000, 'restart.btn', this.startGame, this);
        this.add.button(400, 1000, 'End', this.MainMenu, this);
        this.overlay = this.add.sprite(560, 0, 'Logo');
        this.overlay.visible = window.screen.width > 880 ? false : true;
        this.add.sprite(145, 240, 'fail1');
        this.add.sprite(290, 630, 'dump1');
    },
    //hit the rock!!!!!!!!!
    gameover3: function () {
        this.gameover = true;
        this.Gamebg.destroy();
        this.bodyv.destroy();
        this.showGameOverTxt3();
    },
    showGameOverTxt3: function () {
        this.add.tileSprite(0, 0, 740, 1136, 'bgfail');
        this.add.sprite(25, 150, 'RedBook2');
        this.add.button(50, 1000, 'restart.btn', this.startGame, this);
        this.add.button(400, 1000, 'End', this.MainMenu, this);
        this.overlay = this.add.sprite(560, 0, 'Logo');
        this.overlay.visible = window.screen.width > 880 ? false : true;
        this.add.sprite(240, 240, 'fail2');
        this.add.sprite(280, 650, 'dump2');
    },
    //hit the water!!!!!!
    gameover1: function () {
        this.gameover = true;
        this.Gamebg.destroy();
        this.bodyv.destroy();
        //this.game.paused = true;
        this.showGameOverTxt1();
    },
    showGameOverTxt1: function () {
        this.tiger = this.add.sprite(300, 400, 'tiger');
        //this.add.button(200, 500, 'button-start', this.win1, this);
        this.add.tileSprite(0, 0, 740, 1136, 'win1Bg');
        this.add.sprite(25, 150, 'RedBook2');
        this.add.sprite(110, 210, 'GM3');
        this.add.button(50, 1000, 'continue.btn', this.startGame1, this);
        this.add.button(400, 1000, 'End', this.MainMenu, this);
        this.TigernFish = this.add.sprite(185, 450, 'TigernFish4');
        this.overlay = this.add.sprite(560, 0, 'Logo');
        this.overlay.visible = window.screen.width > 880 ? false : true;
    },
    //Hit the Award!!!!!!!!


    gameReset: function () {
        this.state.start('Game');
    },
    //Go to MainMenu
    MainMenu: function () {
        this.state.start('MainMenu');
    },
    runLeft: function () {
        this.tiger.x = 80;
        this.bodyv.x = 80;
    },
    runRight: function () {
        this.tiger.x = 520;
        this.bodyv.x = 520;
    },
    runMid: function () {
        this.tiger.x = 300;
        this.bodyv.x = 300;
    },
    startGame: function () {
        this.state.start('Game');
    },
    startGame1: function () {
        this.state.start('Game1')
    },
    win1: function () {
        this.state.start('win1');
    },

};












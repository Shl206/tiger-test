Tiger.Game1 = function (game1) {

};
Tiger.Game1.prototype = {
    create: function () {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.Gamebg = this.add.tileSprite(0, 0, 828, 1430, 'GameBg');

        //Block
        this.Block3 = this.add.sprite(300, 1050, 'Block3');
        this.Block4 = this.add.sprite(20, 300, 'Block4');
        this.game.physics.enable(this.Block4, Phaser.Physics.ARCADE);
        this.Block5 = this.add.sprite(360, -200, 'Block5');
        this.game.physics.enable(this.Block5, Phaser.Physics.ARCADE);
        this.Block6 = this.add.sprite(30, -900, 'Block6');
        this.game.physics.enable(this.Block6, Phaser.Physics.ARCADE);
        this.Award2 = this.add.sprite(85, -300, 'Award3');
        this.Award22 = this.add.sprite(10, -300, 'Award22');
        this.game.physics.enable(this.Award22, Phaser.Physics.ARCADE);
        this.pondv = this.add.sprite(300, -200, 'pondv');
        this.game.physics.enable(this.pondv, Phaser.Physics.ARCADE);
        this.pond1v = this.add.sprite(550, -200, 'pond1v');
        this.game.physics.enable(this.pond1v, Phaser.Physics.ARCADE);



        this.tiger = this.add.sprite(70, 780, 'tiger');
        this.tiger.animations.add('move');
        this.tiger.animations.play('move', 6, true);
        var tween = this.add.tween(this.tiger).to({ y: 860 }, 800, null, true);
        tween.onComplete.add(this.onStart, this);
        this.physics.enable(this.tiger, Phaser.Physics.ARCADE);
        this.bodyv = this.add.sprite(80, 780, 'bodyv');
        var tween = this.add.tween(this.bodyv).to({ y: 915 }, 700, null, true);
        this.physics.enable(this.bodyv, Phaser.Physics.ARCADE);


        //this.Logo = this.add.sprite(560, 0, 'Logo');


        //this.physics.enable(this.tiger, Phaser.Physics.ARCADE);
        //this.tiger.body.setSize(55, 120, 10, 20);



        var btnL = this.add.button(30, 1150, 'left', this.runLeft, this);
        var btnR = this.add.button(560, 1150, 'right', this.runRight, this);
        var btnR = this.add.button(295, 1150, 'mid', this.runMid, this);
        //button.......
        //this.startGame();
    },

    update: function () {
        this.physics.arcade.overlap(this.bodyv, this.Block4, this.hitBlock, null, this);
        this.physics.arcade.overlap(this.bodyv, this.pondv, this.hitBlock2, null, this);
        this.physics.arcade.overlap(this.bodyv, this.pond1v, this.hitBlock2, null, this);
        this.physics.arcade.overlap(this.bodyv, this.Block6, this.hitBlock, null, this);
        this.physics.arcade.overlap(this.bodyv, this.Award22, this.hitAward, null, this);

        //this.physics.arcade.overlap(this.tiger, this.Award1, this.hitAward, null, this);
        // /this.gameover(this.playing);

    },

    onStart: function () {
        this.gameIsover = false;
        this.Gamebg.autoScroll(0, 250);
        //this.tiger.inputEnabled = true;
        //this.tiger.input.enableDrag(true);
        this.tiger.body.collideWorldBounds = true;
        //var tween = this.add.tween(this.Block1).to({ y: 1200 }, 6000, null, true);
        var tween = this.add.tween(this.Block3).to({ y: 1500 }, 1800, null, true);
        var tween = this.add.tween(this.Block4).to({ y: 1500 }, 4650, null, true);
        var tween = this.add.tween(this.Block5).to({ y: 1200 }, 5400, null, true);
        var tween = this.add.tween(this.pondv).to({ y: 1200 }, 5300, null, true);
        var tween = this.add.tween(this.pond1v).to({ y: 1200 }, 5500, null, true);
        var tween = this.add.tween(this.Block6).to({ y: 1200 }, 8500, null, true);
        var tween = this.add.tween(this.Award2).to({ y: 1200 }, 5750, null, true);
        var tween = this.add.tween(this.Award22).to({ y: 1200 }, 6500, null, true);
        //this.gameIsover = false;
    },
    hitBlock: function () {
        if (this.gameIsover) return;
        this.gameover2();
    },
    hitBlock2: function () {
        if (this.gameIsover) return;
        this.gameover3();
    },
    hitAward: function () {
        if (this.gameIsover) return;
        this.gain();
    },
    gameover2: function () {
        this.gameover = true;
        this.Gamebg.stopScroll();
        this.add.sprite(0, 0, 'Filter');
        this.tiger.destroy();
        this.Block5.destroy();
        this.Block6.destroy();
        this.Award2.destroy();
        this.bodyv.destroy();
        this.showGameOverTxt();
    },
    showGameOverTxt: function () {
        this.add.tileSprite(0, 0, 828, 1430, 'bgfail');
        this.add.sprite(25, 150, 'RedBook2');
        this.add.button(40, 1250, 'restart.btn', this.startGame, this);
        this.add.button(440, 1250, 'End', this.MainMenu, this);
        this.overlay = this.add.sprite(550, 0, 'Logo');
        this.overlay.visible = window.screen.width > 860 ? false : true;
        this.add.sprite(125, 275, 'fail1');
        this.add.sprite(320, 830, 'dump1');
    },
    //hit the rock!!!!!!!
    gameover3: function () {
        this.gameover = true;
        this.Gamebg.destroy();
        this.bodyv.destroy();
        this.showGameOverTxt2();
    },
    showGameOverTxt2: function () {
        this.add.tileSprite(0, 0, 828, 1430, 'bgfail');
        this.add.sprite(25, 150, 'RedBook2');
        this.add.button(40, 1250, 'restart.btn', this.startGame, this);
        this.add.button(440, 1250, 'End', this.MainMenu, this);
        this.overlay = this.add.sprite(650, 0, 'Logo');
        this.overlay.visible = window.screen.width > 880 ? false : true;
        this.add.sprite(260, 270, 'fail2');
        this.add.sprite(290, 850, 'dump2');
    },
    //Hit the water!!!!!!!
    gain: function () {
        this.gameover = true;
        this.Gamebg.destroy();
        this.bodyv.destroy();
        this.showGameOverTxt1();
    },
    showGameOverTxt1: function () {
        this.tiger = this.add.sprite(300, 400, 'tiger');
        this.add.button(200, 500, 'button-start', this.win1, this);
        this.add.tileSprite(0, 0, 828, 1430, 'win1Bg');
        this.add.sprite(25, 150, 'RedBook2');
        this.add.sprite(110, 270, 'GM2');
        this.add.button(40, 1250, 'continue.btn', this.startGame2, this);
        this.add.button(440, 1250, 'End', this.MainMenu, this);
        this.add.sprite(220, 650, 'TigernFish3');
        this.overlay = this.add.sprite(650, 0, 'Logo');
        this.overlay.visible = window.screen.width > 480 ? false : true;
    },
    //Hit the award!!!!!!!!!


    gameReset: function () {
        this.state.start('Game');
    },
    //Go to MainMenu
    MainMenu: function () {
        this.state.start('MainMenu');
    },
    runLeft: function () {
        this.tiger.x = 80;
        this.bodyv.x = 95;
    },
    runRight: function () {
        this.tiger.x = 600;
        this.bodyv.x = 620;
    },
    runMid: function () {
        this.tiger.x = 336;
        this.bodyv.x = 356;
    },
    startGame: function () {
        this.state.start('Game');
    },
    startGame2: function () {
        this.state.start('Game2');
    },
    win1: function () {
        this.state.start('win1');
    },

};












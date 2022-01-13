Tiger.Game3 = function (Game3) {

};
Tiger.Game3.prototype = {
    create: function () {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        //this.Gamebg = this.add.tileSprite(0, 0, Tiger.GAME_WIDTH, Tiger.GAME_HEIGHT, 'Gamebg');
        //var Gamebg = this.add.tileSprite(0, 0, 740, 1136, 'mainMenuBg');
        //Gamebg.autoScroll(0, 100);
        this.Gamebg = this.add.tileSprite(0, 0, 828, 1430, 'GameBg');
        //this.Gamebg.setOrigin(0, 0);
        //this.Gamebg.setScrollFactor(0);
        //Gamebg.autoScroll(0, 20);
        //this.Gamebg = this.add.sprite(0, 0, 'Gamebg');

        //Block
        //this.BlockGroup = this.add.group();
        //this.boxGroup.enableBody = true;
        this.Block71 = this.add.sprite(300, 1050, 'Block7');
        this.game.physics.enable(this.Block71, Phaser.Physics.ARCADE);
        this.Block1 = this.add.sprite(-38, 250, 'Block1');
        this.game.physics.enable(this.Block1, Phaser.Physics.ARCADE);
        this.Block9 = this.add.sprite(590, 50, 'Block9');
        this.game.physics.enable(this.Block9, Phaser.Physics.ARCADE);
        this.Block7 = this.add.sprite(60, -500, 'Block7');
        this.game.physics.enable(this.Block7, Phaser.Physics.ARCADE);
        this.Award4 = this.add.sprite(500, -500, 'Award2');
        this.game.physics.enable(this.Award4, Phaser.Physics.ARCADE);
        this.pondv = this.add.sprite(30, -500, 'pondv');
        this.game.physics.enable(this.pondv, Phaser.Physics.ARCADE);
        this.pond1v = this.add.sprite(300, -500, 'pond1v');
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

        this.physics.arcade.overlap(this.bodyv, this.Block1, this.hitBlock, null, this);
        this.physics.arcade.overlap(this.bodyv, this.Block9, this.hitBlock, null, this);
        this.physics.arcade.overlap(this.bodyv, this.pondv, this.hitBlock, null, this);
        this.physics.arcade.overlap(this.bodyv, this.pond1v, this.hitBlock, null, this);
        this.physics.arcade.overlap(this.bodyv, this.Award4, this.hitAward, null, this);
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
        var tween = this.add.tween(this.Block71).to({ y: 1500 }, 1600, null, true);
        var tween = this.add.tween(this.Block1).to({ y: 1500 }, 5000, null, true);
        var tween = this.add.tween(this.Block9).to({ y: 1500 }, 5800, null, true);
        var tween = this.add.tween(this.Block7).to({ y: 1500 }, 8000, null, true);
        var tween = this.add.tween(this.Award4).to({ y: 1500 }, 8000, null, true);
        var tween = this.add.tween(this.pondv).to({ y: 1500 }, 7600, null, true);
        var tween = this.add.tween(this.pond1v).to({ y: 1500 }, 8700, null, true);
        //var tween = this.add.tween(this.Award1).to({ y: 1200 }, 15000, null, true);
        //this.gameIsover = false;
    },
    hitBlock: function () {
        if (this.gameIsover) return;
        this.gameover2();
    },
    hitAward: function () {
        if (this.gameIsover) return;
        this.gameover1();
    },
    gameover2: function () {
        this.gameover = true;
        this.Gamebg.stopScroll();
        this.add.sprite(0, 0, 'Filter');
        this.tiger.destroy();
        this.bodyv.destroy();
        this.showGameOverTxt();
    },
    showGameOverTxt: function () {
        this.add.tileSprite(0, 0, 828, 1430, 'bgfail');
        this.add.sprite(25, 150, 'RedBook2');
        this.add.button(40, 1250, 'restart.btn', this.startGame, this);
        this.add.button(440, 1250, 'End', this.MainMenu, this);
        this.overlay = this.add.sprite(650, 0, 'Logo');
        this.overlay.visible = window.screen.width > 480 ? false : true;
        this.add.sprite(125, 275, 'fail1');
        this.add.sprite(320, 830, 'dump1');
    },
    gameover1: function () {
        this.gameover = true;
        this.Gamebg.destroy();
        this.bodyv.destroy();
        this.showGameOverTxt1();
    },
    showGameOverTxt1: function () {
        this.add.tileSprite(0, 0, 828, 1430, 'win1Bg');
        this.add.sprite(25, 150, 'RedBook2');
        this.add.sprite(178, 290, 'GM4');
        this.add.button(40, 1250, 'continue.btn', this.startGame, this);
        this.add.button(440, 1250, 'End', this.MainMenu, this);
        this.TigernFish = this.add.sprite(230, 700, 'TigernFish2');
        this.overlay = this.add.sprite(550, 0, 'Logo');
        this.overlay.visible = window.screen.width > 860 ? false : true;
    },


    gameReset: function () {
        this.state.start('Game');
    },
    //Go to MainMenu
    MainMenu: function () {
        this.state.start('MainMenu');
    },
    runLeft: function () {
        this.tiger.x = 70;
        this.bodyv.x = 70;
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
        this.state.start('EndGame');
    },
    win1: function () {
        this.state.start('win1');
    },

};












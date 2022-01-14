Tiger.Game2 = function (game2) {

};
Tiger.Game2.prototype = {
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
        //this.Block1 = this.add.sprite(-65, 400, 'Block1');
        //this.game.physics.enable(this.Block1, Phaser.Physics.ARCADE);
        this.Block5 = this.add.sprite(350, 1000, 'Block5');
        this.game.physics.enable(this.Block5, Phaser.Physics.ARCADE);
        this.Block6 = this.add.sprite(-30, 350, 'Block6');
        this.game.physics.enable(this.Block6, Phaser.Physics.ARCADE);
        this.Block7 = this.add.sprite(350, -450, 'Block7');
        this.Award3 = this.add.sprite(40, -450, 'Award1');
        this.Award22 = this.add.sprite(65, -500, 'Award22');
        this.game.physics.enable(this.Award22, Phaser.Physics.ARCADE);
        this.Block1 = this.add.sprite(-38, -1200, 'Block1');
        this.game.physics.enable(this.Block1, Phaser.Physics.ARCADE);
        this.pondv = this.add.sprite(300, -650, 'pondv');
        this.game.physics.enable(this.pondv, Phaser.Physics.ARCADE);
        this.pond1v = this.add.sprite(550, -650, 'pond1v');
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
        this.physics.arcade.overlap(this.bodyv, this.Block6, this.hitBlock, null, this);
        this.physics.arcade.overlap(this.bodyv, this.pondv, this.hitBlock, null, this);
        this.physics.arcade.overlap(this.bodyv, this.pond1v, this.hitBlock, null, this);
        this.physics.arcade.overlap(this.bodyv, this.Block8, this.hitBlock, null, this);
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
        var tween = this.add.tween(this.Block5).to({ y: 1500 }, 1900, null, true);
        var tween = this.add.tween(this.Block6).to({ y: 1500 }, 4700, null, true);
        var tween = this.add.tween(this.Block7).to({ y: 1200 }, 6600, null, true);
        var tween = this.add.tween(this.Award3).to({ y: 1200 }, 6600, null, true);
        var tween = this.add.tween(this.Award22).to({ y: 1200 }, 6950, null, true);
        var tween = this.add.tween(this.Block1).to({ y: 1200 }, 10000, null, true);
        var tween = this.add.tween(this.pondv).to({ y: 1200 }, 5900, null, true);
        var tween = this.add.tween(this.pond1v).to({ y: 1200 }, 6700, null, true);
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
        this.add.button(40, 1250, 'restart.btn', this.restart, this);
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
        this.tiger = this.add.sprite(300, 400, 'tiger');
        this.add.tileSprite(0, 0, 828, 1430, 'win1Bg');
        this.add.sprite(25, 230, 'RedBook2');
        this.add.sprite(170, 310, 'GM1');
        this.add.sprite(200, 660, 'TigernFish');
        this.add.button(40, 1250, 'continue.btn', this.startGame, this);
        this.add.button(440, 1250, 'End', this.MainMenu, this);
        this.overlay = this.add.sprite(550, 0, 'mobilelogo');
        this.overlay.visible = window.screen.width > 860 ? false : true;

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
    restart: function () {
        this.state.start('Game');
    },
    startGame: function () {
        this.state.start('Game3');
    },

};












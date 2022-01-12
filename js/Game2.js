Tiger.Game2 = function (game2) {

};
Tiger.Game2.prototype = {
    create: function () {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        //this.Gamebg = this.add.tileSprite(0, 0, Tiger.GAME_WIDTH, Tiger.GAME_HEIGHT, 'Gamebg');
        //var Gamebg = this.add.tileSprite(0, 0, 740, 1136, 'mainMenuBg');
        //Gamebg.autoScroll(0, 100);
        this.Gamebg = this.add.tileSprite(0, 0, 740, 1136, 'GameBg');
        //this.Gamebg.setOrigin(0, 0);
        //this.Gamebg.setScrollFactor(0);
        //Gamebg.autoScroll(0, 20);
        //this.Gamebg = this.add.sprite(0, 0, 'Gamebg');

        //Block
        //this.BlockGroup = this.add.group();
        //this.boxGroup.enableBody = true;
        //this.Block1 = this.add.sprite(-65, 400, 'Block1');
        //this.game.physics.enable(this.Block1, Phaser.Physics.ARCADE);
        this.Block5 = this.add.sprite(350, 800, 'Block5');
        this.game.physics.enable(this.Block5, Phaser.Physics.ARCADE);
        this.Block6 = this.add.sprite(-30, 50, 'Block6');
        this.game.physics.enable(this.Block6, Phaser.Physics.ARCADE);
        this.Block7 = this.add.sprite(300, -650, 'Block7');
        this.Award3 = this.add.sprite(40, -650, 'Award1');
        this.Award22 = this.add.sprite(65, -700, 'Award22');
        this.game.physics.enable(this.Award22, Phaser.Physics.ARCADE);
        this.Block1 = this.add.sprite(-38, -1200, 'Block1');
        this.game.physics.enable(this.Block1, Phaser.Physics.ARCADE);
        this.pondv = this.add.sprite(300, -650, 'pondv');
        this.game.physics.enable(this.pondv, Phaser.Physics.ARCADE);
        this.pond1v = this.add.sprite(550, -650, 'pond1v');
        this.game.physics.enable(this.pond1v, Phaser.Physics.ARCADE);



        this.tiger = this.add.sprite(70, 630, 'tiger');
        this.tiger.animations.add('move');
        this.tiger.animations.play('move', 6, true);
        var tween = this.add.tween(this.tiger).to({ y: 670 }, 300, null, true);
        tween.onComplete.add(this.onStart, this);
        this.physics.enable(this.tiger, Phaser.Physics.ARCADE);
        this.bodyv = this.add.sprite(80, 520, 'bodyv');
        var tween = this.add.tween(this.bodyv).to({ y: 720 }, 1500, null, true);
        this.physics.enable(this.bodyv, Phaser.Physics.ARCADE);


        //this.Logo = this.add.sprite(560, 0, 'Logo');


        //this.physics.enable(this.tiger, Phaser.Physics.ARCADE);
        //this.tiger.body.setSize(55, 120, 10, 20);


        var btnL = this.add.button(50, 910, 'left', this.runLeft, this);
        var btnR = this.add.button(500, 910, 'right', this.runRight, this);
        var btnR = this.add.button(272, 910, 'mid', this.runMid, this);
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
        this.Gamebg.autoScroll(0, 230);
        //this.tiger.inputEnabled = true;
        //this.tiger.input.enableDrag(true);
        this.tiger.body.collideWorldBounds = true;
        var tween = this.add.tween(this.Block5).to({ y: 1200 }, 1900, null, true);
        var tween = this.add.tween(this.Block6).to({ y: 1200 }, 5000, null, true);
        var tween = this.add.tween(this.Block7).to({ y: 1200 }, 8000, null, true);
        var tween = this.add.tween(this.Award3).to({ y: 1200 }, 8000, null, true);
        var tween = this.add.tween(this.Award22).to({ y: 1200 }, 8550, null, true);
        var tween = this.add.tween(this.Block1).to({ y: 1200 }, 11000, null, true);
        var tween = this.add.tween(this.pondv).to({ y: 1200 }, 7500, null, true);
        var tween = this.add.tween(this.pond1v).to({ y: 1200 }, 8700, null, true);
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
        this.add.tileSprite(0, 0, 740, 1136, 'bgfail');
        this.add.sprite(25, 150, 'RedBook2');
        this.add.button(50, 1000, 'restart.btn', this.restart, this);
        this.add.button(400, 1000, 'End', this.MainMenu, this);
        this.overlay = this.add.sprite(560, 0, 'Logo');
        this.overlay.visible = window.screen.width > 480 ? false : true;
        this.add.sprite(145, 240, 'fail1');
        this.add.sprite(290, 630, 'dump1');
    },
    gameover1: function () {
        this.gameover = true;
        this.Gamebg.destroy();
        this.bodyv.destroy();
        this.showGameOverTxt1();
    },
    showGameOverTxt1: function () {
        this.tiger = this.add.sprite(300, 400, 'tiger');
        this.add.tileSprite(0, 0, 740, 1136, 'win1Bg');
        this.add.sprite(25, 150, 'RedBook2');
        this.add.sprite(170, 210, 'GM1');
        this.add.sprite(160, 460, 'TigernFish');
        this.add.button(50, 1000, 'continue.btn', this.startGame, this);
        this.add.button(400, 1000, 'End', this.MainMenu, this);
        this.overlay = this.add.sprite(560, 0, 'Logo');
        this.overlay.visible = window.screen.width > 480 ? false : true;

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
        this.tiger.x = 530;
        this.bodyv.x = 530;
    },
    runMid: function () {
        this.tiger.x = 300;
        this.bodyv.x = 300;
    },
    restart: function () {
        this.state.start('Game');
    },
    startGame: function () {
        this.state.start('Game3');
    },

};












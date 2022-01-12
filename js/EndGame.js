Tiger.EndGame = function (EndGame) {

};
Tiger.EndGame.prototype = {
    create: function () {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.Gamebg = this.add.tileSprite(0, 0, 740, 1136, 'GameBg');

        //Block
        this.Endline = this.add.sprite(0, -900, 'End-line');
        this.game.physics.enable(this.Endline, Phaser.Physics.ARCADE);
        this.Block7 = this.add.sprite(30, 850, 'Block7');
        this.Block2 = this.add.sprite(450, -100, 'Block2');
        this.game.physics.enable(this.Block2, Phaser.Physics.ARCADE);
        this.Block8 = this.add.sprite(-30, -250, 'Block8');
        this.game.physics.enable(this.Block8, Phaser.Physics.ARCADE);
        this.goal = this.add.sprite(0, -900, 'goal');




        this.tiger = this.add.sprite(530, 630, 'tiger');
        this.tiger.animations.add('move');
        this.tiger.animations.play('move', 6, true);
        var tween = this.add.tween(this.tiger).to({ y: 670 }, 300, null, true);
        tween.onComplete.add(this.onStart, this);
        this.physics.enable(this.tiger, Phaser.Physics.ARCADE);
        this.bodyv = this.add.sprite(540, 600, 'bodyv');
        var tween = this.add.tween(this.bodyv).to({ y: 720 }, 1000, null, true);
        this.physics.enable(this.bodyv, Phaser.Physics.ARCADE);


        //this.Logo = this.add.sprite(560, 0, 'Logo');


        var btnL = this.add.button(50, 910, 'left', this.runLeft, this);
        var btnR = this.add.button(500, 910, 'right', this.runRight, this);
        var btnR = this.add.button(272, 910, 'mid', this.runMid, this);
        //button.......
        //this.startGame();
    },

    update: function () {

        this.physics.arcade.overlap(this.bodyv, this.Block8, this.hitBlock, null, this);
        this.physics.arcade.overlap(this.bodyv, this.Block7, this.hitBlock, null, this);
        this.physics.arcade.overlap(this.bodyv, this.Block2, this.hitBlock, null, this);
        this.physics.arcade.overlap(this.bodyv, this.Endline, this.hitAward, null, this);

        // /this.gameover(this.playing);

    },

    onStart: function () {
        this.gameIsover = false;
        this.Gamebg.autoScroll(0, 230);
        //this.tiger.inputEnabled = true;
        //this.tiger.input.enableDrag(true);
        this.tiger.body.collideWorldBounds = true;
        var tween = this.add.tween(this.Block7).to({ y: 1200 }, 1500, null, true);
        var tween = this.add.tween(this.Block2).to({ y: 1200 }, 5800, null, true);
        var tween = this.add.tween(this.Block8).to({ y: 1200 }, 6500, null, true);
        var tween = this.add.tween(this.goal).to({ y: 1200 }, 9500, null, true);
        var tween = this.add.tween(this.Endline).to({ y: 1200 }, 8000, null, true);

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
        this.Block8.destroy();
        this.bodyv.destroy();
        this.showGameOverTxt();
    },
    showGameOverTxt: function () {
        this.add.tileSprite(0, 0, 740, 1136, 'bgfail');
        this.add.sprite(25, 150, 'RedBook2');
        this.add.button(50, 1000, 'restart.btn', this.startGame, this);
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
        this.add.button(200, 500, 'button-start', this.win1, this);
        this.add.tileSprite(0, 0, 740, 1136, 'win1Bg');
        this.add.sprite(25, 150, 'RedBook2');
        this.add.sprite(110, 240, 'GM5');
        this.add.button(210, 1000, 'End', this.MainMenu, this);
        this.add.sprite(0, 480, 'Endgoal');
        this.add.sprite(300, 720, 'endtiger');
        this.overlay = this.add.sprite(560, 0, 'Logo');
        this.overlay.visible = window.screen.width > 480 ? false : true;
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
        this.tiger.x = 530;
        this.bodyv.x = 530;
    },
    runMid: function () {
        this.tiger.x = 300;
        this.bodyv.x = 300;
    },
    startGame: function () {
        this.state.start('Game');
    },
    win1: function () {
        this.state.start('win1');
    },

};












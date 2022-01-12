Tiger.Preloader = function (game) {

};

Tiger.Preloader.prototype = {
    preload: function () {
        this.stage.backgroundColor = 'white';
        this.loadBar = this.add.group();

        this.loadBar.create(0, 0, 'loadingBar_0');
        this.preloadBar = this.loadBar.create(2, 2, 'loadingBar_1');
        this.load.setPreloadSprite(this.preloadBar);

        this.loadBar.x = Tiger.GAME_WIDTH / 2 - 150;
        this.loadBar.y = Tiger.GAME_HEIGHT / 2;
        //BG
        this.load.image('mainMenuBg', 'assets/cloud-bg.png'); //BG
        this.load.image('GameBg', 'assets/game-bg.png');
        this.load.image('win1Bg', 'assets/win1-bg.png');
        this.load.image('RedBook', 'assets/red-test.png');
        this.load.image('RedBook2', 'assets/redbook2.png');
        this.load.image('button-start', 'assets/button-test.png');
        this.load.image('continue.btn', 'assets/cont-btn.png');
        this.load.image('restart.btn', 'assets/restart.png');
        this.load.image('End', 'assets/end-btn.png');
        this.load.image('Tiger3', 'assets/tiger-test.png');
        //TigerNFish
        this.load.image('TigernFish', 'assets/tigernfish.png');
        this.load.image('TigernFish2', 'assets/tigernfish2.png');
        this.load.image('TigernFish3', 'assets/tigernfish3.png');
        this.load.image('TigernFish4', 'assets/tigernfish4.png');
        this.load.image('Logo', 'assets/logo-test.png');
        this.load.image('Gamebg', 'assets/game-bg.png');
        this.load.image('Block1', 'assets/block1.png');
        this.load.image('Block2', 'assets/block2.png');
        this.load.image('Block3', 'assets/block3.png');
        this.load.image('Block4', 'assets/block4.png');
        this.load.image('Block5', 'assets/block5.png');
        this.load.image('Block6', 'assets/block6.png');
        this.load.image('Block7', 'assets/block7.png');
        this.load.image('Block8', 'assets/block8.png');
        this.load.image('Block9', 'assets/block9.png');
        this.load.image('Block10', 'assets/block10.png');
        //Award
        this.load.image('Award12', 'assets/Award12.png');
        this.load.image('Award1', 'assets/Award1.png');
        this.load.image('Award2', 'assets/Award2.png');
        this.load.image('Award22', 'assets/Award22.png');
        this.load.image('Award3', 'assets/Award3.png');
        this.load.image('Award4', 'assets/Award4.png');
        this.load.image('crash1', 'assets/crash1.png');
        this.load.image('crash2', 'assets/crash2.png');
        this.load.image('Filter', 'assets/filter.png');
        this.load.image('Word1', 'assets/word1.png');
        this.load.image('Word2', 'assets/word2.png');
        //G M
        this.load.image('GM1', 'assets/GM1.png');
        this.load.image('GM2', 'assets/GM2.png');
        this.load.image('GM3', 'assets/GM3.png');
        this.load.image('GM4', 'assets/GM4.png');
        this.load.image('GM5', 'assets/GM5.png');
        this.load.image('End-line', 'assets/goalline.png');
        this.load.image('Endgoal', 'assets/endgoal.png');
        this.load.image('goal', 'assets/goal.png');
        this.load.image('endtiger', 'assets/end-tiger.png');
        this.load.image('bodyv', 'assets/tiger-bodyv.png');
        this.load.image('body', 'assets/tiger-body.png');
        this.load.image('bgfail', 'assets/bg-fail.png');
        this.load.image('fail1', 'assets/fail1.png');
        this.load.image('fail2', 'assets/fail2.png');
        this.load.image('dump1', 'assets/dump1.png');
        this.load.image('dump2', 'assets/dump2.png');
        //Pondv
        this.load.image('pondv', 'assets/pondv.png');
        this.load.image('pond1v', 'assets/pond1v.png');
        //Button
        this.load.image('left', 'assets/left.png');
        this.load.image('right', 'assets/right.png');
        this.load.image('mid', 'assets/mid.png');
        this.load.image('page1', 'assets/Asset_1.png');

        //END OF MAINMENU.....
        //Spritesheet
        //Tiger.
        this.load.spritesheet('tiger', 'assets/new-tiger.png', 311 / 2, 289, 2);
        //Button Left-Right.

    },
    create: function () {
        this.state.start('MainMenu');
    }
};
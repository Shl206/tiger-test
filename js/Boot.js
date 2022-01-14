var Tiger = {};
Tiger.Boot = function (game) {
    Tiger.GAME_WIDTH = 828;
    Tiger.GAME_HEIGHT = 1430;
};
Tiger.Boot.prototype = {
    preload: function () {
        this.load.image('loadingBar_1', 'assets/loadingBar_1.png');
        this.load.image('loadingBar_0', 'assets/loadingBar_0.png');
    },
    create: function () {
        this.input.maxPointers = 1;
        //this.scale.scaleMode = window.screen.width > 640 ? Phaser.ScaleManager.SHOW_ALL : Phaser.ScaleManager.EXACT_FIT;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        //this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.state.start('Preloader');
    }
};
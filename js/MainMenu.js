Tiger.MainMenu = function (game) { };
Tiger.MainMenu.prototype = {
    create: function () {
        this.mainMenuBg = this.add.sprite(0, 0, 'mainMenuBg');
        //this.RedBook = this.add.sprite(43, 170, 'RedBook');
        this.add.button(240, 1160, 'button-start', this.startGame, this);
        //this.Tiger3 = this.add.sprite(50, 535, 'Tiger3');
        //this.Logo = this.add.sprite(560, 0, 'Logo');
        //this.Word1 = this.add.sprite(140, 230, 'Word1');
        //this.load.image('mid', 'assets/mid.png');
        this.overlay = this.add.sprite(550, 0, 'mobilelogo');
        this.overlay.visible = window.screen.width > 860 ? false : true;
        this.page1 = this.add.sprite(20, 220, 'page1');



        //use in next scene!!!
        //this.tiger = this.add.sprite(150, 500, 'tiger');
        //this.tiger.animations.add('fly');
        //this.tiger.animations.play('fly', 5, true);
        //( fly 5 true: name framerate it's work)
    },
    update: function () {
        //overlay.visible = window.screen.width > 640 ? false;

    },
    startGame: function () {
        this.state.start('Game');
    }
};
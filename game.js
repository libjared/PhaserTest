/**
 * Created with JetBrains WebStorm.
 * User: Hyper
 * Date: 9/19/13
 * Time: 7:44 PM
 * To change this template use File | Settings | File Templates.
 */

(function () {
    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

    function preload() {
        game.load.image('logo', 'logo.png');
    }

    var logo;
    var speed = 5;

    function create() {
        game.stage.backgroundColor = "#0f0f0f";
        logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        logo.anchor.x = 0.5;
        logo.anchor.y = 0.5;
    }

    function update() {
        logo.angle++;
        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
            logo.x -= speed;
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
            logo.x += speed;
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
            logo.y -= speed;
        if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
            logo.y += speed;
    }

})();
import Phaser from 'phaser';
import { assets } from '../assets/assets';

export default class MainScene extends Phaser.Scene {

    constructor() {
        super('MainScene')
    }

    preload() {
        this.load.image('logo', assets.logo);
        this.load.image('bg_image_1', assets.bg_image_1);
        this.load.image('platform', assets.platform);
        this.load.image('character',assets.character);
    }

    create() {
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'bg_image_1').setScale(1.56);
        
        const platform = this.physics.add.staticImage(this.cameras.main.centerX, this.scale.height+170, 'platform').setScale(6).setOrigin(0.5, 1).refreshBody();

        // character with physics
        this.player = this.physics.add.sprite(430, this.scale.height-800, 'character').setScale(0.7);
        this.player.setBounce(0.2);

        // collide the player with the platform
        this.physics.add.collider(this.player, platform);

        // creating cursor object for input
        this.cursor = this.input.keyboard.createCursorKeys();

        // adding keyboard inputs 
        this.keys = this.input.keyboard.addKeys({
            'left': Phaser.Input.Keyboard.KeyCodes.A,
            'right': Phaser.Input.Keyboard.KeyCodes.D,
            'up': Phaser.Input.Keyboard.KeyCodes.SPACE,
        })
    }

    update() {
        // Update logic goes here
        if(this.keys.left.isDown) {
            this.player.setVelocityX(-200);
        }else if(this.keys.right.isDown){
            this.player.setVelocityX(200);
        }else {
            this.player.setVelocityX(0); //stop moving when no key is pressed 
        }

        if(this.keys.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-400); //jumb
        }
    }

}
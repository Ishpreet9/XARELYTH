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
        this.load.spritesheet('player', assets.player , { frameWidth: 1280, frameHeight: 720 })
    }

    create() {
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY - 90, 'bg_image_1').setScale(1);

        const platform = this.physics.add.staticImage(
            this.cameras.main.centerX, 
            this.scale.height + 170, 
            'platform'
        ).setScale(6).setOrigin(0.5, 1).refreshBody();

        // player with physics
        this.player = this.physics.add.sprite(430, this.scale.height - 600, 'player').setScale(0.8);
        this.player.setBounce(0.2);

        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('player', { start: 1, end: 14 }),
            frameRate: 20,
            repeat: -1 // loop forever
        });

        // collide the player with the platform
        this.physics.add.collider(this.player, platform);

        // keyboard inputs
        this.keys = this.input.keyboard.addKeys({
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            up: Phaser.Input.Keyboard.KeyCodes.SPACE,
        })
    }

    update() {
        const { left, right, up } = this.keys;

        if (left.isDown) {
            this.player.setVelocityX(-170);
            this.player.setFlipX(true);
            if (!this.player.anims.isPlaying || this.player.anims.currentAnim.key !== 'walk') {
                this.player.anims.play('walk', true);
            }
        }
        else if (right.isDown) {
            this.player.setVelocityX(170);
            this.player.setFlipX(false);
            if (!this.player.anims.isPlaying || this.player.anims.currentAnim.key !== 'walk') {
                this.player.anims.play('walk', true);
            }
        }
        else {
            // stop movement
            this.player.setVelocityX(0);
            this.player.anims.stop();
            this.player.setFrame(1);
        }

        // Jump
        if (up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-400);
        }
    }
}

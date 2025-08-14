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
        this.load.spritesheet('player', assets.player , { frameWidth: 666, frameHeight: 375 })
    }

    create() {
        this.isMovingRightTimed = false;
        this.isMovingLeftTimed = false;

        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY - 90, 'bg_image_1').setScale(0.76);

        const platform = this.physics.add.staticImage(this.cameras.main.centerX, this.scale.height + 170, 'platform').setScale(6).setOrigin(0.5, 1).refreshBody();

        // player with physics
        this.player = this.physics.add.sprite(430, this.scale.height - 400, 'player').setScale(1);
        this.player.setBounce(0.2);

        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('player', { start: 1, end: 36 }),
            duration: 700,
            repeat: -1  // loop forever 
        });


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
    // A check to ensure the player can start a new timed move.
    // This prevents starting a left move while a right move is active, and vice-versa.
    const canStartNewMove = !this.isMovingLeftTimed && !this.isMovingRightTimed;

    // Handle LEFT movement (single press, 1-second duration)
    if (Phaser.Input.Keyboard.JustDown(this.keys.left) && canStartNewMove) {
        // Start the timed move to the left
        this.isMovingLeftTimed = true;

        this.player.setVelocityX(-100); // Set velocity
        this.player.setFlipX(true);    // <-- Flip the sprite to face left
        this.player.anims.play('walk', true);

        // Timer to stop the movement
        this.time.delayedCall(1000, () => {
            this.isMovingLeftTimed = false;
        }, [], this);
    } 
    // Handle RIGHT movement (single press, 1-second duration)
    else if (Phaser.Input.Keyboard.JustDown(this.keys.right) && canStartNewMove) {
        // Start the timed move to the right
        this.isMovingRightTimed = true;

        this.player.setVelocityX(170);
        this.player.setFlipX(false);   // <-- Make sure sprite faces right
        this.player.anims.play('walk', true);

        // Timer to stop the movement
        this.time.delayedCall(1000, () => {
            this.isMovingRightTimed = false;
        }, [], this);
    } 
    // This block keeps the player moving if EITHER timed move is active
    else if (this.isMovingLeftTimed || this.isMovingRightTimed) {
        // Do nothing. Let the player continue with the velocity set previously.
    } 
    // Handle the idle state (no movement)
    else {
        this.player.setVelocityX(0);
        this.player.anims.stop();
        this.player.setFrame(10);
    }

    // Handle jumping (this logic remains unchanged)
    if (this.keys.up.isDown && this.player.body.touching.down) {
        this.player.setVelocityY(-400); // Jump
    }
}
}
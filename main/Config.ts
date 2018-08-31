import * as Phaser from 'phaser';

export class Config {

    public static getConfigs() : any  {
        return {
            type: Phaser.AUTO,
            width: 480,
            height: 640,
            background: 0xff0000
        }
    }
}
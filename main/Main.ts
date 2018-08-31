import * as Phaser from 'phaser';
import {Config} from './Config';

export class Main {

    constructor() {
    }

    public static main() : void {

        let configs = Config.getConfigs();
        let Game = new Phaser.Game(configs);
    }
}
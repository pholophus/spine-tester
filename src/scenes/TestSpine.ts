import Phaser from 'phaser'

export default class TestSpine extends Phaser.Scene {
    constructor() {
        super('TestSpine')
    }

    preload() {
        //this.load.spine('testAnimation', 'AnimationInfo.json', [ 'stretchyman-pma.atlas' ], true)
        //this.load.spine('test', 'assets/Test3/Test-Animation.json', 'assets/Test3/Test-Animation.atlas', true);
        //this.load.spine('skeleton', 'assets/Skeleton/NPC-05-RUGDOCwoman.json', 'assets/Skeleton/Animate NPC 1.6.atlas', true);
        this.load.spine('newboy', 'assets/jsontest4/Default.json', 'assets/jsontest4/Oasis_spine_1.0.atlas', true);
        // this.load.spine('newboy', 'assets/many/Default.json', 'assets/many/Oasis_spine_1.0.atlas', true);
        console.log(window.SpinePlugin)
    }

    create() {

        // let newBoy = this.add.spine(this.game.canvas.width/2 - 100, this.game.canvas.height/2, 'newboy', 'default_boy/taunts/celebrate', true).setScale(3).setSkinByName("npc_gamezone/NPC24 - pampadour")
        let newBoy = this.add.spine(this.game.canvas.width/2 - 100, this.game.canvas.height/2, 'newboy', 'default_boy/taunts/celebrate', true).setScale(3).setSkinByName("npc_gamezone/SNPC01 - pumpkinhead")
        // let newBoy = this.add.spine(this.game.canvas.width/2 - 100, this.game.canvas.height/2, 'newboy', 'default_boy/taunts/celebrate', true).setScale(3).setSkinByName("default/zombie_boy")
        // let newBoy1 = this.add.spine(this.game.canvas.width/2, this.game.canvas.height/2, 'newboy', 'running', true).setScale(3)
        // let newBoy2 = this.add.spine(this.game.canvas.width/2 + 100, this.game.canvas.height/2, 'newboy', 'running_back', true).setScale(3)

        console.log(newBoy)
        this.cameras.main.zoom = 1
    }

    update() {

    }
}

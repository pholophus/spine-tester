import Phaser from 'phaser'

import TestSpine from './scenes/TestSpine'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	backgroundColor: 0xff00ff,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	render: {
		pixelArt: true,
		roundPixels: true,
		antialias: false,
		antialiasGL: false,
	},
	plugins: {
		scene: [
			{ key: 'SpinePlugin', plugin: window.SpinePlugin, mapping: 'spine' }
		]
	},
	scene: [TestSpine]
}

export default new Phaser.Game(config)

import Phaser from 'phaser';

import GameScene from './scenes/GameScene';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 960,
  height: 640,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 800 },
    },
  },
  scene: [GameScene],
};

export default new Phaser.Game(config);

import Player from "./Player"

export default class MoveBox extends Phaser.Physics.Arcade.Sprite {
  currentScene: Phaser.Scene

  constructor(scene: Phaser.Scene, gridX: number, gridY: number, player: Player) {
    // Create box
    const posX = 100 + gridX * 200
    const posY = 100 + gridY * 200
    super(scene, posX, posY, 'moveBox')
    this.setScale(0.4)
    // Create colliders
    scene.physics.add.collider(player, this, function(playerCollide, boxCollide) {
      const velocityMultiplier = 3
      boxCollide.setVelocity(
        boxCollide.body?.velocity.x * velocityMultiplier,
        boxCollide.body?.velocity.y * velocityMultiplier
      )
    })
    scene.add.existing(this)
  }
}

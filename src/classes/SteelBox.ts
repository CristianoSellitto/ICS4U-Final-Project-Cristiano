export default class SteelBox extends Phaser.Physics.Arcade.Sprite {
  currentScene: Phaser.Scene
  collision: Phaser.Physics.Arcade.StaticBody

  constructor(scene: Phaser.Scene, gridX: number, gridY: number, moveBoxes: Phaser.GameObjects.Container) {
    // Create box
    const posX = 100 + gridX * 200
    const posY = 100 + gridY * 200
    super(scene, posX, posY, 'steelBox')
    this.setScale(0.4)
    // Create move box collider
    scene.physics.add.collider(moveBoxes.getAll(), this, function(moveBoxCollide) {
      moveBoxCollide.setImmovable(true)
      moveBoxCollide.setTint(0x545454)
    })
    scene.add.existing(this)
  }
}
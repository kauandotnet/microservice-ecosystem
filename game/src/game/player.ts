import { CharacterMovement } from '../lib/physics/CharacterMovement';
import { WorldScene }        from './scenes/world.scene';
import { PlayerSprite }      from './entities/player.sprite';

export class Player {
  movement: CharacterMovement;
  sprite: PlayerSprite;

  constructor(
    public id: number,
    public name: string,
    public scene: WorldScene,
    x: number, y: number,
    public self: boolean = false) {
    this.sprite   = new PlayerSprite(scene, x, y);
    this.movement = new CharacterMovement(this.scene, this);
  }

  update(...args): void {
    this.sprite.update(...args);
    this.movement.update();
  }
}

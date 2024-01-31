import { TextureLoader, Texture, RepeatWrapping } from "three";

export default class GrassTexture {
  texture: Texture;

  constructor() {
    this.texture = new TextureLoader().load('/models/Grass_Texture.png');
    this.texture.wrapS = RepeatWrapping;
    this.texture.wrapT = RepeatWrapping;
    this.texture.repeat.set(200, 200);
  }

  load(): Texture {
    return this.texture;
  }
}

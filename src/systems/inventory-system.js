export class InventorySystem {
  constructor(scene) {
    this.scene = scene;

    this.scene.addEventListener("spawn-produce-item", this.onSpawnInventory);
  }

  onSpawnInventory = () => {
    const entity = document.createElement("a-entity");
    this.scene.appendChild(entity);
    entity.setAttribute("offset-relative-to", { target: "#environment-root", offset: { x: 0, y: 0, z: -1.5 } });
    entity.setAttribute("networked", { template: "#inventory-object-media" });
  }
}
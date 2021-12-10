export class InventorySystem {
  constructor(scene) {
    this.scene = scene;

    this.scene.addEventListener("spawn-produce-item", this.onSpawnInventory);
  }

  onSpawnInventory = () => {
    const entity = document.createElement("a-entity");
    entity.setAttribute("position", "0 1 0");
    entity.setAttribute("geometry", { primitive: "box", width: 1, height: 1, depth: 1 });
    entity.setAttribute("material", { color: "red" });
    this.scene.appendChild(entity);
  }
}
class SpaceCraft {
  constructor(public propulsor: string) {}

  jumpIntoHyperspace() {
    console.log(`Entering hyperspace with hyperdrive ${this.propulsor}`);
  }
}

let ship = new SpaceCraft("hyperdrive");
ship.jumpIntoHyperspace();

interface ContainerShip {
  cargoContainers: number;
}

class MillenniumFalcon extends SpaceCraft implements ContainerShip {
  cargoContainers: number;

  constructor() {
    super("hyperdrive");
    this.cargoContainers = 4;
  }

  jumpIntoHyperspace(){
    if (Math.random() >= 0.5) {
      super.jumpIntoHyperspace();
    } else {
      console.log("Failed to jump into hyperspace");
    }
  }
}

let falcon = new MillenniumFalcon();
falcon.jumpIntoHyperspace;

let goodForTheJob = (ship: ContainerShip) => ship.cargoContainers > 2;
console.log(
  `Is falcon good for the job? ${goodForTheJob(falcon) ? "yes" : "no"}`
);

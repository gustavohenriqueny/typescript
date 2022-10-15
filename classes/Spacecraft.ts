export class SpaceCraft {
  constructor(public propulsor: string) {}

  jumpIntoHyperspace() {
    console.log(`Entering hyperspace with hyperdrive ${this.propulsor}`);
  }
}

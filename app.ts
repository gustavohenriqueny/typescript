import {SpaceCraft} from "./classes/Spacecraft";
import {ContainerShip} from "./interfaces/Containership";
import {MillenniumFalcon} from "./classes/MillenniumFalcon";

let ship = new SpaceCraft("hyperdrive");
ship.jumpIntoHyperspace();

let falcon = new MillenniumFalcon();
falcon.jumpIntoHyperspace;

let goodForTheJob = (ship: ContainerShip) => ship.cargoContainers > 2;
console.log(
	`Is falcon good for the job? ${goodForTheJob(falcon) ? "yes" : "no"}`
);

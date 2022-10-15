"use strict";
exports.__esModule = true;
exports.SpaceCraft = void 0;
var SpaceCraft = /** @class */ (function () {
    function SpaceCraft(propulsor) {
        this.propulsor = propulsor;
    }
    SpaceCraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entering hyperspace with hyperdrive ".concat(this.propulsor));
    };
    return SpaceCraft;
}());
exports.SpaceCraft = SpaceCraft;

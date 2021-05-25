import { config } from "config";
import { Manager } from "Manager";

declare global {
    interface Creep {
        reassign(role: string, newManager: Manager): void;

        goBuild(target: ConstructionSite): void;
        goRepair(target: Structure): void;
        goTransfer(target: Creep | Structure, resource?: ResourceConstant): void;
        goWithdraw(target: Structure | Tombstone | Resource, resource?: ResourceConstant): void;
        goHarvest(target: Source | Mineral | Deposit): void;
        goDrop(target: RoomPosition, resource?: ResourceConstant): void;
        goSign(target: StructureController): void;
        goUpgrade(target: StructureController): void;
    }
}

const RANGES = {
	BUILD   : 3,
	REPAIR  : 3,
    UPGRADE : 3,
    SIGN    : 1,
	TRANSFER: 1,
	WITHDRAW: 1,
	HARVEST : 1,
	DROP    : 0,
};

export function test3() {

}

Creep.prototype.goBuild = function(target: ConstructionSite) {
    if (this.pos.inRangeTo(target.pos, RANGES.BUILD)) {
        this.build(target)
    } else {
        this.travelTo(target)
    }
}

Creep.prototype.goRepair = function(target: Structure) {
    if (this.pos.inRangeTo(target.pos, RANGES.REPAIR)) {
        this.repair(target)
    } else {
        this.travelTo(target)
    }
}
Creep.prototype.goTransfer = function(target: Creep | Structure, resource: ResourceConstant = RESOURCE_ENERGY) {
    if (this.pos.inRangeTo(target.pos, RANGES.TRANSFER)) {
        this.transfer(target, resource)
    } else {
        this.travelTo(target)
    }
}

Creep.prototype.goWithdraw = function(target: Structure | Tombstone | Resource, resource: ResourceConstant = RESOURCE_ENERGY) {
    if (this.pos.inRangeTo(target.pos, RANGES.TRANSFER)) {
        if(target instanceof Resource) {
            this.pickup(target)
        } else {
            this.withdraw(target, resource)
        }
    } else {
        this.travelTo(target)
    }
}

Creep.prototype.goHarvest = function(target: Source | Mineral | Deposit) {
    if (this.pos.inRangeTo(target.pos, RANGES.HARVEST)) {
        this.harvest(target)
    } else {
        this.travelTo(target)
    }
}

Creep.prototype.goDrop = function(target: RoomPosition, resource: ResourceConstant = RESOURCE_ENERGY) {
    if (this.pos.inRangeTo(target, RANGES.DROP)) {
        this.drop(resource)
    } else {
        this.travelTo(target)
    }
}

Creep.prototype.goSign = function(target: StructureController) {
    if (this.pos.inRangeTo(target, RANGES.SIGN)) {
        this.signController(target, config.signature)
    } else {
        this.travelTo(target)
    }
}

Creep.prototype.goUpgrade = function(target: StructureController) {
    if (this.pos.inRangeTo(target.pos, RANGES.UPGRADE)) {
        this.upgradeController(target)
    } else {
        this.travelTo(target)
    }
}

Creep.prototype.reassign = function(role: string, manager: Manager) {
    this.memory.role = role;
    this.memory.manager = manager.name;
}
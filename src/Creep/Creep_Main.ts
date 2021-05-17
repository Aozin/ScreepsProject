import { Manager } from "Manager";

declare global {
    interface Creep {
        reassign(role: string, newManager: Manager): void;
    }
}
/**
 * DEPRECATED Creeps will now be done by managers
Creep.prototype.unit = function() {
    return roles[this.memory.role];
}

Creep.prototype.execute = function() {
    this.memory.room = this.pos.roomName;

    if (!this.unit()) { //If role not recognised, suicide
        console.log('Unknown role suiciding');
        this.suicide();
        return;
    }
    if (this.memory.routing && this.memory.routing.reached) { // If not at destination, perform correct action
        return this.unit().action(this);
    }
    if (this.followPath(this.unit().action)) {
        return true;
    }
}

Creep.prototype.checkForRun = function() {
    if (this.spawning) {
        return false;
    }
    if (this.memory.recycle) {
        return false;
    }
    const role = this.memory.role;
    if (!role) {
        console.log("Creep role not defined! NEEDS FIXING: " + role)
        this.memory.killed = true;
        this.suicide();
    }
    return true
}
*/

//Changes the role and manager of a creep
Creep.prototype.reassign = function(role: string, manager: Manager) {
    this.memory.role = role;
    this.memory.manager = manager.name;
}

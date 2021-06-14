import { CreepSetup } from "./CreepSetup";

export const Roles = {
	// Civilian roles
	drone      : 'drone',
	van     : 'van',
	settler      : 'settler',
	colonist    : 'colonist',
	treasurer    : 'treasurer',
	queen      : 'queen',
	charger    : "charger",
	scout      : 'scout',
	lorry  : 'lorry',
	worker     : 'worker',
	upgrader   : 'upgrader',

	// Combat roles
	guardMelee : 'guardsman',
	melee      : 'assault marine',
	ranged     : 'devastator',
	healer     : 'chaplain',
	dismantler : 'sapper',
};

export const Setups = {
	drones: {
		extractor: new CreepSetup(Roles.drone, {
			pattern  : [WORK, WORK, CARRY, MOVE],
			sizeLimit: Infinity,
		}),

		miners: {

			default: new CreepSetup(Roles.drone, {
				pattern  : [WORK, WORK, CARRY, MOVE],
				sizeLimit: 3,
			}),

			standard: new CreepSetup(Roles.drone, {
				pattern  : [WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE],
				sizeLimit: 1,
			}),

			early: new CreepSetup(Roles.drone, {
				pattern  : [WORK, WORK, CARRY, MOVE],
				sizeLimit: 2,
			}),

			emergency: new CreepSetup(Roles.drone, {
				pattern  : [WORK, WORK, CARRY, MOVE],
				sizeLimit: 1,
			}),

			double: new CreepSetup(Roles.drone, {
				pattern  : [WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE],
				sizeLimit: 2,
			}),

			sourceKeeper: new CreepSetup(Roles.drone, {
				pattern  : [WORK, WORK, CARRY, MOVE],
				sizeLimit: 5,
			})
		}
	},

	van: new CreepSetup(Roles.van, {
		pattern  : [CARRY, CARRY, MOVE],
		sizeLimit: 1,
	}),

	colonisers: {

		settler: new CreepSetup(Roles.settler, {
			pattern  : [CLAIM, MOVE],
			sizeLimit: 1
		}),

		reserve: new CreepSetup(Roles.settler, {
			pattern  : [CLAIM, MOVE],
			sizeLimit: 4,
		}),

		controllerAttacker: new CreepSetup(Roles.settler, {
			pattern  : [CLAIM, MOVE],
			sizeLimit: Infinity,
		}),

	},

	colonist: new CreepSetup(Roles.colonist, {
		pattern  : [WORK, CARRY, MOVE, MOVE],
		sizeLimit: Infinity,
	}),

	treasurers:  {

		default: new CreepSetup(Roles.treasurer, {
			pattern  : [CARRY, CARRY, CARRY, CARRY, MOVE],
			sizeLimit: 3,
		}),

		stationary: new CreepSetup(Roles.treasurer, {
			pattern  : [CARRY, CARRY],
			sizeLimit: 8,
		}),

		stationary_work: new CreepSetup(Roles.treasurer, {
			pattern  : [WORK, WORK, WORK, WORK, CARRY, CARRY],
			sizeLimit: 8,
		}),

	},

	queens: {

		default: new CreepSetup(Roles.queen, {
			pattern  : [CARRY, CARRY, MOVE],
			sizeLimit: Infinity,
		}),

		early: new CreepSetup(Roles.queen, {
			pattern  : [CARRY, MOVE],
			sizeLimit: Infinity,
		}),

	},

	chargers: {

		default: new CreepSetup(Roles.charger, {
			pattern  : [CARRY, CARRY, MOVE],
			sizeLimit: Infinity,
		}),

		early: new CreepSetup(Roles.queen, {
			pattern  : [CARRY, MOVE],
			sizeLimit: Infinity,
		}),

	},

	scout: new CreepSetup(Roles.scout, {
		pattern  : [MOVE],
		sizeLimit: 1,
	}),

	lorrys: {

		default: new CreepSetup(Roles.lorry, {
			pattern  : [CARRY, CARRY, MOVE],
			sizeLimit: Infinity,
		}),

		early: new CreepSetup(Roles.lorry, {
			pattern  : [CARRY, MOVE],
			sizeLimit: Infinity,
		}),

	},

	workers: {

		default: new CreepSetup(Roles.worker, {
			pattern  : [WORK, CARRY, MOVE],
			sizeLimit: Infinity,
		}),

		early: new CreepSetup(Roles.worker, {
			pattern  : [WORK, CARRY, MOVE, MOVE],
			sizeLimit: Infinity,
		}),

	},

	upgraders: {

		default: new CreepSetup(Roles.upgrader, {
			pattern  : [WORK, WORK, WORK, CARRY, MOVE],
			sizeLimit: Infinity,
		}),

		rcl8: new CreepSetup(Roles.upgrader, {
			pattern  : [WORK, WORK, WORK, CARRY, MOVE],
			sizeLimit: 5,
		}),

	},

	guards: {
		armored: new CreepSetup(Roles.guardMelee, {
			pattern  : [TOUGH, ATTACK, ATTACK, ATTACK, MOVE, MOVE, MOVE, MOVE],
			sizeLimit: Infinity,
		}),
	},

}

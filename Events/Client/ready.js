import { client } from `../../index.js`;

export const name = "ready";
export const once = true;
export function execute() {
	console.log(`Klient się zalogował jako DripLeafMC i jest Online 💚`);
	client.user.setActivity("Was", { type: 2 });
}
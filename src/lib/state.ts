import { writable } from 'svelte/store';

export const carAttr = writable({
	rotation: { x: 0, y: 0, z: 0 },
	position: { x: 0, y: 0, z: 0 },
	fov: 50
});

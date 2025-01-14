<script lang="ts">
	import { HTML, interactivity } from '@threlte/extras';
	import ModelGtr from './models/ModelGtr.svelte';
	import LightPosition from './lights/LightPosition.svelte';
	import Floor from './models/Floor.svelte';
	import { T } from '@threlte/core';
	import { spring } from 'svelte/motion';
	import Camera from './Camera.svelte';

	interactivity();

	const rotationSpring = spring([0, 0, 0], {});
	const deg = Math.PI / 180;

	function handleRotation(args: number[]) {
		rotationSpring.set(args);
	}
</script>

<Camera />


<T.Group rotation={$rotationSpring}>
	<ModelGtr />
	<LightPosition />
</T.Group>

<HTML>
	<button
		on:click={() =>
			handleRotation([$rotationSpring[0], $rotationSpring[1] - 45 * deg, $rotationSpring[2]])}
	>
		RODA A RODA
	</button>
</HTML>
<Floor />

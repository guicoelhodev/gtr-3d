<script lang="ts">
	import { HTML, interactivity } from '@threlte/extras';
	import OrbitControls from './OrbitControls.svelte';
	import ModelGtr from './models/ModelGtr.svelte';
	import LightPosition from './lights/LightPosition.svelte';
	import Floor from './models/Floor.svelte';
	import { T } from '@threlte/core';
	import { spring } from 'svelte/motion';

	interactivity();

	let rotation = spring([0, -Math.PI / 2, 0]);

	function handleRotation(args:number[]){
		rotation = args;
	};
</script>

<OrbitControls />

<T.Group rotation={$rotation}>
	<ModelGtr />
	<LightPosition />
</T.Group>

<HTML>
	<button>RODA A RODA</button>
</HTML>
<Floor />

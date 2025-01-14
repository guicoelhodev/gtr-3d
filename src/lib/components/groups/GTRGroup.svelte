<script lang="ts">
	import { T } from '@threlte/core';
	import ModelGtr from '../models/ModelGtr.svelte';
	import LightPosition from '../lights/LightPosition.svelte';
	import { spring } from 'svelte/motion';

	const deg = Math.PI / 180;
	const rotationSpring = spring([0, deg * 16, 0], {});
</script>

<T.Group rotation={$rotationSpring}>
	<ModelGtr />
	<LightPosition />
</T.Group>

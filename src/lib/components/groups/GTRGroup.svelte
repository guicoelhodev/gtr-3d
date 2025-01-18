<script lang="ts">
	import { T } from '@threlte/core';
	import ModelGtr from '../models/ModelGtr.svelte';
	import LightPosition from '../lights/LightPosition.svelte';
	import { Binding, Pane, Separator } from 'svelte-tweakpane-ui';

	import { type BindingObject } from 'svelte-tweakpane-ui';
	import { carAttr } from '$lib/state';

	let object: BindingObject = {
		rotationX: 0,
		rotationY: 0,
		rotationZ: 0,
		positionX: 0,
		positionY: 0,
		positionZ: 0
	};

	const rotationFields = <K extends keyof typeof $carAttr.rotation>() => {
		return Object.keys($carAttr.rotation) as K[];
	};

	const positionFields = <K extends keyof typeof $carAttr.position>() => {
		return Object.keys($carAttr.rotation) as K[];
	};
</script>

<Pane title="Car scene" position="fixed">
	{#each rotationFields() as coord}
		<Binding
			options={{ step: 0.05 }}
			bind:object={$carAttr.rotation}
			key={coord}
			label={`Rotation ${coord}`}
		/>
	{/each}

	<Separator />

	{#each positionFields() as coord}
		<Binding
			options={{ step: 0.05 }}
			bind:object={$carAttr.rotation}
			key={coord}
			label={`Position ${coord}`}
		/>
	{/each}

	<Separator />

	<Binding options={{ step: 5 }} bind:object={$carAttr} key={'fov'} label={'FOV'} />
</Pane>

<T.Group rotation={Object.values($carAttr.rotation)} position={Object.values($carAttr.position)}>
	<ModelGtr />
	<LightPosition />
</T.Group>

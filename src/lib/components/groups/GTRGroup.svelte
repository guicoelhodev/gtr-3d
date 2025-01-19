<script lang="ts">
	import { T } from '@threlte/core';
	import ModelGtr from '../models/ModelGtr.svelte';
	import LightPosition from '../lights/LightPosition.svelte';
	import { carAttr } from '$lib/state';
	import { SheetObject } from '@threlte/theatre';

	//import { Binding, Pane, Separator } from 'svelte-tweakpane-ui';
	//	const rotationFields = <K extends keyof typeof $carAttr.rotation>() => {
	//		return Object.keys($carAttr.rotation) as K[];
	//	};
	//
	//	const positionFields = <K extends keyof typeof $carAttr.position>() => {
	//		return Object.keys($carAttr.position) as K[];
	//	};
	//
	//<Pane title="Car scene" position="fixed">
	//	{#each rotationFields() as coord}
	//		<Binding
	//			options={{ step: 0.05 }}
	//			bind:object={$carAttr.rotation}
	//			key={coord}
	//			label={`Rotation ${coord}`}
	//		/>
	//	{/each}
	//
	//	<Separator />
	//
	//	{#each positionFields() as coord}
	//		<Binding
	//			options={{ step: 0.05 }}
	//			bind:object={$carAttr.position}
	//			key={coord}
	//			label={`Position ${coord}`}
	//		/>
	//	{/each}
	//
	//	<Separator />
	//
	//	<Binding options={{ step: 5 }} bind:object={$carAttr} key={'fov'} label={'FOV'} />
	//</Pane>
</script>

<SheetObject key="gtr-car" let:Transform let:Sync>
	<Transform>
		<T.Group
			rotation={Object.values($carAttr.rotation)}
			position={Object.values($carAttr.position)}
		>
			<ModelGtr />
			<LightPosition />
			<Sync />
		</T.Group>
	</Transform>
</SheetObject>

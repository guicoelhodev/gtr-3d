<script lang="ts">
	import { T } from '@threlte/core';
	import ModelGtr from '../models/ModelGtr.svelte';
	import LightPosition from '../lights/LightPosition.svelte';
	import { Binding, Pane, Separator } from 'svelte-tweakpane-ui';

  import { type BindingObject } from 'svelte-tweakpane-ui';

  let object: BindingObject = { 
		rotationX: 0,
		rotationY: 0,
		rotationZ: 0,
		positionX:0,
		positionY: 0,
		positionZ: 0
	};

</script>

<Pane title='Car scene' position='fixed'>
	<Binding bind:object key={'rotationX'}  label="Rotation x" />
	<Binding bind:object key={'rotationY'}  label="Rotation y" />
	<Binding bind:object key={'rotationZ'}  label="Rotation z" />

	<Separator />

	<Binding bind:object key={'positionX'}  label="Position x" />
	<Binding bind:object key={'positionY'}  label="Position y" />
	<Binding bind:object key={'positionZ'}  label="Position z" />
</Pane>

<T.Group 
	rotation={[object.rotationX / 10, object.rotationY / 10, object.rotationZ / 10]}
	position={[object.positionX / 10, object.positionY / 10, object.positionZ / 10]}
>
	<ModelGtr />
	<LightPosition />
</T.Group>

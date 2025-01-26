<script lang="ts">
	import { T } from '@threlte/core';
	import ModelGtr from '../models/ModelGtr.svelte';
	import LightPosition from '../lights/LightPosition.svelte';
	import { carAttr } from '$lib/state';
	import { Sheet, SheetObject } from '@threlte/theatre';

</script>

<Sheet name='GTR Sheet'>
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
</Sheet>

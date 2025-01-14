<script lang="ts">
	import { interactivity } from '@threlte/extras';
	import OrbitControls from './OrbitControls.svelte';
	import ModelGtr from './models/ModelGtr.svelte';
	import LightPosition from './lights/LightPosition.svelte';
	import Floor from './models/Floor.svelte';

	interactivity();
</script>

<LightPosition />
<OrbitControls />
<ModelGtr />
<Floor />

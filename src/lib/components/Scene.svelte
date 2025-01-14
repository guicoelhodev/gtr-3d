<script lang="ts">
	import { HTML } from '@threlte/extras';
	import Floor from './models/Floor.svelte';
	import Camera from './Camera.svelte';
	import GtrGroup from './groups/GTRGroup.svelte';
</script>

<Camera />

<GtrGroup />

<HTML>
	<button on:click={() => console.log('')}> RODA A RODA </button>
</HTML>
<Floor />

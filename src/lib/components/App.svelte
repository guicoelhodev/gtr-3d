<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
</script>

<main class="environment">
	<Canvas>
		<Scene />
	</Canvas>
</main>

<style>
	.environment {
		height: 100%;
		background-color: #fcfcfc;
	}
</style>

<script lang="ts">
	import '../../app.css';
	import { Canvas } from '@threlte/core';
	import { Theatre } from '@threlte/theatre';
	import Scene from './Scene.svelte';
</script>

<main class="environment">
	<Canvas>
		<Theatre>
			<Scene />
		</Theatre>
	</Canvas>
</main>

<style>
	.environment {
		height: 100%;
		background-color: #fff;
	}
</style>

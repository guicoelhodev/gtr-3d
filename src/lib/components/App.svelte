<script lang="ts">
	import '../../app.css';
	import { Canvas } from '@threlte/core';
	import { Project, Studio, Theatre } from '@threlte/theatre';
  import { dev } from '$app/environment'
	import Scene from './Scene.svelte';
</script>

<main class="environment">
	<Canvas>
		<Theatre>
				<Project name='GTR project'>
					<Scene />
					<Studio enabled={dev} />
				</Project>
		</Theatre>
	</Canvas>

</main>

<style>
	.environment {
		height: 100%;
		background-color: #fff;
	}
</style>

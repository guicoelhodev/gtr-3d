<script lang="ts">
	import { T } from '@threlte/core';
	import { camPos } from '$lib/applicationEnums';
	import { OrbitControls } from '@threlte/extras';
</script>

<T.PerspectiveCamera makeDefault position={[camPos.x, camPos.y, camPos.z]} fov={30}>
	<OrbitControls enableDamping />
</T.PerspectiveCamera>

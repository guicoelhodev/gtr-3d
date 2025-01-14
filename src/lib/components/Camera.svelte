<script lang="ts">
	import { T } from '@threlte/core';
	import { camPos } from '$lib/applicationEnums';
	import { OrbitControls } from '@threlte/extras';
</script>

<T.PerspectiveCamera makeDefault position={[camPos.x, camPos.y, camPos.z]} fov={20}>
	<OrbitControls maxPolarAngle={1.5} maxZoom={1} minDistance={8} maxDistance={20} />
</T.PerspectiveCamera>

<script lang="ts">
	import { T } from '@threlte/core';
	import { camPos } from '$lib/applicationEnums';
	import { OrbitControls } from '@threlte/extras';
	import { carAttr } from '$lib/state';
</script>

<T.PerspectiveCamera makeDefault position={[camPos.x, camPos.y, camPos.z]} fov={$carAttr.fov}>
	<OrbitControls
		target={[0, 0.5, 0]}
		enablePan={false}
		maxPolarAngle={1.5}
		maxZoom={1}
		minDistance={8}
		maxDistance={20}
		enableDamping
	/>
</T.PerspectiveCamera>

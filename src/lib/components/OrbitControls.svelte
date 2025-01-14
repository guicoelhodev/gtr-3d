<script lang="ts">
	import { T } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';
</script>

<T.PerspectiveCamera makeDefault position={[0, 2, 12]} fov={25}>
	<OrbitControls enableDamping />
</T.PerspectiveCamera>

<script lang="ts">
	import { T } from '@threlte/core';
</script>

<T.Mesh rotation.x={-Math.PI / 2} receiveShadow>
	<T.CircleGeometry args={[20, 40]} />
	<T.MeshToonMaterial color="white" />
</T.Mesh>

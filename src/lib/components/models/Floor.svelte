<script lang="ts">
	import { T } from '@threlte/core';
</script>

<T.Mesh rotation.x={-Math.PI / 2} receiveShadow>
	<T.CircleGeometry args={[100, 40]} />
	<T.MeshBasicMaterial color="white" />
</T.Mesh>

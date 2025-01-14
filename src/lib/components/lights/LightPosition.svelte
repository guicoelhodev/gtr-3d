<script lang="ts">
	import { T } from '@threlte/core';
</script>

<T.PointLight castShadow position={[0, 5, 5]} intensity={50} />
<T.PointLight castShadow position={[0, 5, -5]} intensity={50} />

<!-->LEFT<!-->

<T.PointLight castShadow position={[-2, 2, 1]} intensity={30} />
<T.PointLight castShadow position={[-2, 0, 2]} intensity={10} />

<!-->RIGHT<!-->

<T.PointLight castShadow position={[2, 5, 1]} intensity={30} />
<T.PointLight castShadow position={[2, 0, 2]} intensity={10} />

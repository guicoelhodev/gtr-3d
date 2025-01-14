<script lang="ts">
	import { camPos } from '$lib/applicationEnums';
	import { T } from '@threlte/core';

	//origin  0, 1, 10
</script>

<!--> LEFT <!-->

<T.PointLight position={[camPos.x - 0.5, camPos.y - 0.5, camPos.z - 5]} intensity={30} />

<!--> RIGHT <!-->

<T.PointLight position={[camPos.x + 0.5, camPos.y - 0.5, camPos.z - 5]} intensity={30} />

<T.SpotLight
	lookAt={[0, -5, 0]}
	position={[camPos.x + 0.5, camPos.y + 0.5, camPos.z + 5]}
	intensity={50}
/>

<T.Mesh position={[camPos.x + 0.5, camPos.y + 0.5, camPos.z - 5]}>
	<T.BoxGeometry args={[0.2, 0.2, 0.2]} />
	<T.MeshBasicMaterial color="hotpink" />
</T.Mesh>

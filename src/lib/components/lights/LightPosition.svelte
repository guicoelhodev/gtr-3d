<script lang="ts">
	import { camPos } from '$lib/applicationEnums';
	import { T } from '@threlte/core';

	//origin  0, 1, 10
</script>

<!--> FRONT CAR <!-->

<!--> LEFT <!-->
<T.PointLight position={[camPos.x + 2, camPos.y, camPos.z - 8]} intensity={10} />

<!--> RIGHT <!-->
<T.PointLight position={[camPos.x - 2, camPos.y, camPos.z - 8]} intensity={10} />

<!--> CENTER <!-->
<T.PointLight position={[camPos.x, camPos.y + 1.5, camPos.z - 11]} intensity={30} />
<T.PointLight position={[camPos.x, camPos.y, camPos.z - 8]} intensity={1} />

<!-- FRONT CAR FINAL <!-->

<!-- BACK CAR <!-->

<!-- RIGHT <!-->
<T.PointLight position={[camPos.x + 2, camPos.y + 0.5, camPos.z - 18]} intensity={40} />

<!-- LEFT <!-->
<T.PointLight position={[camPos.x - 2, camPos.y + 0.5, camPos.z - 18]} intensity={40} />

<!-- BACK CAR FINAL <!-->

<!-- SIDE CAR <!-->

<T.PointLight position={[camPos.x + 4, camPos.y, camPos.z - 12]} intensity={20} />
<T.PointLight position={[camPos.x - 4, camPos.y, camPos.z - 12]} intensity={20} />

<!-- SIDE FINAL <!-->

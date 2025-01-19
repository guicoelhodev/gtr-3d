<script>
	import { HTML } from '@threlte/extras';
	import { SheetObject } from '@threlte/theatre';
</script>

<SheetObject let:Sync let:Transform key="intro">
	<Transform>
		<HTML center>
			<section class="w-[600px] border">
				<p>Hello world</p>
			</section>
		</HTML>
		<Sync />
	</Transform>
</SheetObject>

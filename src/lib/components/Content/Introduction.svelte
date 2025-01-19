<script lang="ts">
	import { HTML } from '@threlte/extras';
	import { SheetObject } from '@threlte/theatre';

	type TVersions = Record<'version' | 'description', string>;

	const versions: TVersions[] = [
		{
			version: 'GT-R Base',
			description:
				'Versão padrão com todos os atributos que tornaram o carro icônico, incluindo o motor RB26DETT e o sistema ATTESSA.'
		},
		{
			version: 'V-Spec (Victory Specification)',
			description:
				' Versão focada em pistas, com melhorias na suspensão e freios, além do diferencial ativo.'
		},
		{
			version: 'V-Spec N1',
			description:
				'Uma variante mais leve e voltada exclusivamente para competições, sem ar-condicionado, rádio ou isolamento acústico.'
		},
		{
			version: '400R',
			description:
				'Uma edição especial limitada desenvolvida pela NISMO (a divisão de performance da Nissan). Apresentava o motor RB-X GT2, uma versão aumentada para 2,8 litros, produzindo incríveis 400 cv. Apenas 44 unidades foram produzidas.'
		}
	];
</script>

<SheetObject let:Sync let:Transform key="intro">
	<Transform>
		<HTML center>
			<section
				class="w-[600px] overflow-auto flex flex-col gap-4 items-center bg-white p-4 text-neutral-600 max-h-[calc(100vh-10rem)] scroll-m-8"
			>
				<p>
					O R33 tinha a missão de melhorar o que já era visto como um dos melhores carros de sua
					geração o GT-R R32.
				</p>

				<p>
					O lendário R32 GT-R, que já havia ganho fama pelo apelido de "Godzilla", devido ao seu
					sucesso esmagador nas pistas, especialmente no campeonato japonês de turismo (JTCC) e em
					corridas internacionais.
				</p>

				<article class="flex justify-center items-stretch gap-8">
					<div class="flex flex-col items-center justify-center gap-2 p-2">
						<img src="images/speed.svg" alt="speed icon" />
						<p>276 CV</p>
					</div>

					<div class="flex flex-col items-center justify-center gap-2 p-2">
						<img src="images/gas.svg" alt="gasoline icon" />
						<p>2.6 L</p>
					</div>

					<div class="flex flex-col items-center justify-center gap-2 p-2">
						<img src="images/motor.svg" alt="motor icon" />
						<p>6 L</p>
					</div>
				</article>

				<p>
					O R33 foi introduzido em 1995, com foco em refinar a plataforma Skyline. Era baseado no
					chassi E-BCNR33 e manteve o motor RB26DETT, um 6 cilindros em linha de 2,6 litros,
					equipado com dois turbocompressores. Embora a potência oficial fosse limitada a 276 cv.
				</p>

				<h2 class="text-blue-800 self-start text-2xl font-semibold">Versões do R33 GT-R</h2>

				<ul class="flex flex-col gap-4">
					{#each versions as item}
						<li class="flex flex-col gap-2">
							<h3 class="font-bold text-lg">{item.version}</h3>

							<p class="pl-4">{item.description}</p>
						</li>
					{/each}
				</ul>
			</section>
		</HTML>
		<Sync />
	</Transform>
</SheetObject>

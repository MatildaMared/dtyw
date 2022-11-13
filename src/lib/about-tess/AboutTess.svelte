<script lang="ts"></script>

<!-- <section>
	<img
		src="/images/tess.JPG"
		alt="En ung solbränd kvinna med brunt hår tittar in i kameran. I bakgrunden syns gröna växter"
	/>
	<article>
		<h2>Tess Strömberg</h2>
		<span class="title">COO och marknadsföringsansvarig</span>
		<p>
			Tess Strömberg är född och uppvuxen i Stockholm men har varit bosatt i Oslo de senaste 8 åren.
		</p>
		<p>
			När hon var 19 år flyttade hon till Australien och intresset för digital marknadsföring
			startade. Hon började med att blogga och har sedan dess skapat hemsidor, funnels,
			mastermind-grupper, eventer m.m genom sitt egna företag. Hon har också vart anställd i en
			massa olika anställningar. Bland annat inom restaurantbranchen, kundservice, sociala medier
			m.m.
		</p>
		<p>
			I 2018 började hon som coach och kursansvarig för en marknadsföringsbyrå, men blev utbränd i
			2022. Då mötte hon Markus som hjälpte henne att snabbt återgå till jobbet och Tess är nu COO
			och markandsföringsansvarig i DTYW.
		</p>
		<p>
			Tess älskar att hjälpa människor uppfylla sin dröm att kunna jobba med VAD man vill, NÄR man
			vill och med VEM man vill - och att genom digitala kanaler få ut sitt budskap och få mer
			frihet!
		</p>
	</article>
</section> --> 

<style lang="scss">
	@use "../../styles/breakpoints.scss" as *;

	section {
		--border-radius: 8px;

		padding: 0 16px;
		margin: var(--spacing-l) 0;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: var(--max-width);
		align-items: center;
		justify-content: center;
		gap: 32px;

		@media (min-width: $breakpoint-tablet-landscape) {
			flex-direction: row-reverse;
			align-items: flex-start;
		}

		img {
			width: 100%;
			max-width: 500px;
			height: auto;
			border-radius: var(--border-radius);
		}

		article {
			width: 100%;
			max-width: 600px;
			background-color: var(--color-primary-lightest);
			padding: 32px;
			border-radius: var(--border-radius);
			box-shadow: var(--box-shadow);

			@media (min-width: $breakpoint-tablet-landscape) {
				transform: translateX(-64px) translateY(32px);
			}

			h2 {
				font-family: var(--font-secondary);
				font-size: var(--font-size-l);
				color: var(--color-primary-darkest);
				line-height: 1;
				margin-bottom: 4px;
			}

			.title {
				display: block;
				margin-bottom: 16px;
				font-size: var(--font-size-s);
				text-transform: uppercase;
				letter-spacing: 1px;
				color: var(--color-primary-dark);
			}

			p:not(:last-of-type) {
				margin-bottom: 16px;
			}
		}
	}
</style>

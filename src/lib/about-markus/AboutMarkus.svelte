<script lang="ts"></script>

<section>
	<img
		src="/images/markus.jpg"
		alt="Foto av Markus som sitter framåtlutad på en bänk på en bänk och ser in i kameran. Bakom bänken finns en grönskande buske och man kan se att solen lyser genom löven."
	/>
	<article>
		<h2>Markus Mattsson</h2>
		<span class="title">Stress- och Produktivitetscoach</span>
		<p>
			Ingen ska behöva vantrivas och må dåligt i en situation som inte är bra för dem. Om vi ska
			vara helt ärliga så har de flesta personer gett upp på sina drömmar. Framförallt om de fått så
			mycket problem med stress att det inte finns någon energi kvar vid dagens slut. Det behöver
			inte vara så.
		</p>
		<p>
			Förut hindrade stressen, min dåliga självkänsla och min låga energi, mig från att leva mitt
			drömliv som företagare. Nu vill jag bevisa för dig att du inte behöver sitta fast i den
			situation du är i. Om jag kan gå från utbränd till 50-60 timmars arbetsvecka så kan du absolut
			lära dig att få mer tid och energi i ditt företag!
		</p>
		<p>
			Min formella utbildning består av två kandidatexamen från Göteborgs Universitet, en i
			psykologi och en i personalvetenskap. I över fem år har jag dessutom konsumerat hundratals
			böcker och föreläsningar av vår tids största tänkare inom stress, produktivitet och personlig
			utveckling.
		</p>
		<p>
			Jag älskar att utbilda och coacha mina andra i hur de tar nästa steg i sitt företag och sitt
			liv. Det är min stora passion i livet.
		</p>
	</article>
</section>

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
			flex-direction: row;
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

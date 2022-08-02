<script lang="ts">
	import Card from "$lib/card/Card.svelte";
</script>

<section>
	<h2>
		Du behöver inte kompromissa med dina drömmar om ett företag som ger dig mer frihet över din tid
		och bättre ekonomi.
	</h2>
	<p>Såhär kan du få hjälp att gå från dröm till verklighet:</p>
	<ul>
		<Card
			imgUrl="/images/excercise.png"
			altText="Illustration av en springande man. I bakgrunden syns en almanacka."
			heading="Sluta försöka undvika stress"
		>
			<p>
				Om vi ska vara helt ärliga så går det faktiskt inte att undvika stress. Det finns överallt i
				vårt samhälle. Att försöka undvika stress blir därmed en omöjlighet och kommer inte hjälpa
				dig i längden. Lär dig det nya mindsetet om stress istället. Då kan du fortfarande prestera
				på topp, känna dig stressad ibland, utan att det påverkar hälsan. Det kommer till och med
				göra att du mår bättre av att ha mycket att göra.
			</p>
		</Card>
		<Card
			imgUrl="/images/self-confidence.png"
			altText="Illustration av en man som håller ena handen över bröstet och ser stolt ut."
			heading="Sänk inte kraven på dig själv"
		>
			<p>
				Om du vill leva ett mediokert liv och inte få dina drömmar att bli sanna så kan du lyssna på
				vad dom säger till dig om att sänka kraven på dig själv. Det är ju på grund av dina stora
				drömmar som du måste ställa stora krav för att växa som människa. Lösningen är inte att
				spela liten resten av livet. Lär dig att ställa höga krav och samtidigt uppfylla dom på ett
				hållbart och stabilt sätt som inte äventyrar din hälsa.
			</p>
		</Card>
		<Card
			imgUrl="/images/cloud.png"
			altText="Illustration av en laptop. Ovanför laptopen syns ett moln och i molnet finns illustrationer av ett kuvert, ett papper och ett diagram."
			heading="Skapa ett system"
		>
			<p>
				Bli ultraproduktiv igenom att planera strategiskt och ha koll på allting som behöver göras.
				Alla som jobbar med mig får en kopia av mitt eget affärssystem som jag använder för att
				sätta upp mål, få koll på mina rutiner för min hälsa och få mer gjort. Om alla andra företag
				använder datorsystem för att hålla koll på allt som ska göras, varför skulle du inte då göra
				det också?
			</p>
		</Card>
	</ul>
</section>

<style lang="scss">
	@use "../../styles/breakpoints.scss" as *;

	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		max-width: var(--max-width);
		margin: var(--spacing-l);
		padding: 0 16px;

		h2 {
			font-size: var(--font-size-xl);
			text-align: center;
			max-width: 38ch;
			margin-bottom: var(--spacing-m);
		}

		> p {
			color: var(--color-primary-dark);
			font-weight: 700;
			font-style: italic;
			margin-bottom: var(--spacing-m);
			text-align: center;
		}

		ul {
			margin: var(--spacing-m) 0;
			padding: 0;
			list-style: none;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: var(--spacing-m);
		}
	}
</style>

<script lang="ts"></script>

<section>
	<h2>Är stress det som hindrar dig från att nå din fulla potential som företagare?</h2>
	<p>
		Kanske har du som jag, tidigare varit utmattad. Kanske känns det som att du aldrig kommer bli
		fri från frustrationen över allt som måste göras men inte hinns med. Trots det kan du inte
		släppa tanken om om hur bra ditt liv hade kunnat bli och hur mycket du kan hjälpa andra om du
		bara kunde få mer produktiva timmar i ditt företag.
	</p>
	<div class="wrapper">
		<div class="list">
			<ul>
				<li>
					Har du fått dina första kunder men kommer inte vidare på grund av att du har för mycket i
					nuvarande arbete och vardagsliv?
				</li>
				<li>
					Blir det för mycket fast du försökt göra mindre men perfektionism och en känsla av
					otillräcklighet gör att du känner att du måste jobba mer?
				</li>
				<li>
					Har du försökt skapa bättre struktur och få mer gjort men du har svårt att hålla dig till
					vad du bestämt och allt slutar i kaos ändå?
				</li>
				<li>
					... eller har du varit egenföretagare ett tag men får inte arbetstimmar och ekonomi att gå
					ihop?
				</li>
			</ul>
			<p>
				Om detta stämmer in på dig så kan jag hjälpa dig bli fri från stress samtidigt som du får
				mer gjort än någonsin förut!
			</p>
		</div>
		<figure>
			<img
				src="/images/markus2.jpeg"
				alt="Foto av Markus som står i stadsmiljö, iklädd en blå jacka, och ser in i kameran."
			/>
			<figcaption><span>Markus Mattsson</span>, stress- och produktivitetscoach</figcaption>
		</figure>
	</div>
</section>

<style lang="scss">
	@use "../../styles/breakpoints.scss" as *;

	section {
		width: 100%;
		max-width: var(--max-width);
		margin: var(--spacing-l) 0;
		display: flex;
		align-items: center;
		flex-direction: column;
		padding: 0 16px;

		p {
			max-width: 75ch;
		}

		h2 {
			font-size: var(--font-size-xl);
			text-align: center;
			max-width: 30ch;
			line-height: 1.2;
			margin-bottom: var(--spacing-m);
		}

		.wrapper {
			margin-top: var(--spacing-m);
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: var(--spacing-m);

			@media (min-width: $breakpoint-tablet-landscape) {
				flex-direction: row;
				align-items: flex-start;
				margin-top: var(--spacing-l);
				gap: 0;
			}

			img {
				width: 100%;
				max-width: 400px;
				height: auto;
				border-radius: 8px;
			}

			figcaption {
				color: var(--color-primary-dark);
				font-size: var(--font-size-s);
				text-align: right;

				span {
					font-weight: 700;
					font-style: italic;
				}
			}
		}

		.list {
			background-color: var(--color-secondary-lightest);
			padding: var(--spacing-m);
			border-radius: 8px;
			max-width: 50ch;
			box-shadow: var(--box-shadow);

			@media (min-width: $breakpoint-tablet-landscape) {
				transform: translateX(24px) translateY(-24px);
			}

			ul {
				margin-bottom: var(--spacing-m);
			}

			li:not(:last-of-type) {
				margin-bottom: var(--spacing-s);
			}

			p {
				font-weight: 700;
			}
		}
	}
</style>

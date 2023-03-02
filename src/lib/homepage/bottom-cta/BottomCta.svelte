<script lang="ts">
	import Button from "../../button/Button.svelte";
</script>

<section>
	<h2>Är du redo för nästa steg?</h2>
	<div class="cta-container">
		<div class="strategi-samtal">
			<p>
				Då tycker jag att du ska boka ett gratis strategisamtal med mig! Under samtalet kommer jag
				hjälpa dig få 100% klarhet i din situation och vad ditt nästa steg är.
			</p>
			<Button
				onClick={() => {
					window.open(
						"https://calendly.com/markusmattsson/strategisamtal?utm_medium=hemsida",
						"_blank"
					);
				}}
				>Boka ett strategisamtal!
			</Button>
		</div>
		<div class="webbinarium">
			<p>
				Vill du fortsätta prestera på topp utan att må dåligt av stressen?
				<strong>Upptäck den ultimata guidade meditationen som förändrar negativ stress till positiv på 5 minuter.</strong>
			</p>
			<a class="button secondary" href="/mindsetmeditation">Ladda ner meditationen nu! </a>
		</div>
	</div>
</section>

<style lang="scss">
	@use "../../../styles/breakpoints" as *;

	section {
		padding: 0 16px;
		margin: var(--spacing-l) 0;
		width: 100%;
		max-width: var(--max-width);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 32px;
	}

	.cta-container {
		display: flex;
		flex-direction: column;
		gap: 32px;

		@media (min-width: $breakpoint-laptop) {
			flex-direction: row;
		}
	}

	h2 {
		font-size: var(--font-size-xl);
		text-align: center;
	}

	p {
		margin-bottom: var(--spacing-m);
		max-width: 55ch;
	}

	.strategi-samtal,
	.webbinarium {
		padding: 32px;
		border-radius: 16px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.strategi-samtal {
		border: 1px solid hsla(14, 60%, 57%, 0.2);
	}

	.webbinarium {
		border: 1px solid hsla(189, 12%, 51%, 0.3);
	}
</style>

<script lang="ts">
	import Button from "$lib/button/Button.svelte";
	import Heading from "./Heading.svelte";
	import Logo from "./Logo.svelte";
</script>

<header>
	<Logo />
	<div>
		<Heading />
		<p class="description">
			Aldrig igen behöver du kompromissa med dina drömmar på grund av stress. 
		</p>
		<p class="description">
			Oavsett om vill starta eget, prestera hållbart på jobbet eller ändra livsriktning så kan jag hjälpa dig.
		</p>
		<p class="description">
			Boka ett kostnadsfritt samtal eller ladda ner den ultimata guidade meditationen för att förändra negativ stress till positiv.
		</p>
		<!-- <a href="/webbinarie" class="button">Registrera dig till nästa webbinarium</a> -->
		<Button
		onClick={() => {
			window.open(
				"https://calendly.com/markusmattsson/strategisamtal-general?utm_medium=hemsida&utm_source=headerstartsida",
				"_blank"
			);
		}}
		>Boka ett strategisamtal!
		</Button>	
		<Button 
		secondary=true;
		onClick={() => {
			window.open(
				"/mindsetmeditation",
				"_blank"
			);
		}}
		>Förändra stressen på 5 minuter
		</Button>
	</div>
</header>

<style lang="scss">
	@use "../../../styles/breakpoints.scss" as *;

	header {
		background-image: url("/images/road.jpg");
		background-size: cover;
		background-position: center;
		min-height: 80vh;
		width: 100%;
		padding: 16px;
		margin-bottom: var(--spacing-l);

		@media (min-width: $breakpoint-tablet-portrait) {
			padding: 32px;
		}

		@media (min-width: $breakpoint-tablet-landscape) {
			padding: 48px;
		}

		div {
			max-width: var(--max-width);
			margin: 0 auto;
			padding: 3rem 0;
		}
	}

	.description {
		font-weight: 300;
		color: var(--color-white);
		font-size: var(--font-size-m);
		width: fit-content;
		max-width: 35ch;
		margin-bottom: var(--spacing-m);
	}
</style>

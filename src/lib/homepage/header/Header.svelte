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
			Du behöver inte kompromissa med dina drömmar. Du kan fortsätta prestera på topp utan att må sämre av stressen. 
		</p>
		<p class="description">
			Oavsett om drömmer om att starta eget, prestera hållbart på jobbet eller vill ändra livsriktning så kan jag hjälpa dig.
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

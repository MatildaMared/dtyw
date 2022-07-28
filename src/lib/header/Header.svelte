<script lang="ts">
	import Button from "$lib/button/Button.svelte";
	import Heading from "./Heading.svelte";
	import Logo from "./Logo.svelte";

	function onClick() {
		//TODO: Redirect to webinar register form
		console.log("clicked");
	}
</script>

<header>
	<Logo />
	<Heading />
	<p class="description">
		Jag hjälper dig som vill få fart på ditt företag på ett produktivt och organiserat sätt utan att
		köra slut på dig själv.
	</p>
	<p class="description">
		Oavsett om du precis fått dina första kunder eller om du redan har kommit en bit på vägen finns
		det ett program för dig.
	</p>
	<Button {onClick}>Registrera dig till nästa webbinarium</Button>
</header>

<style lang="scss">
	header {
		background-image: url("/images/road.jpg");
		background-size: cover;
		background-position: center;
		min-height: 80vh;
		width: 100%;
		padding: 48px;
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

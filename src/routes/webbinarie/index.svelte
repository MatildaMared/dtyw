<script lang="ts">
	import Button from "$lib/button/Button.svelte";
	import Logo from "$lib/homepage/header/Logo.svelte";
</script>

<svelte:head>
	<title
		>Från stressad överpresterare till framgångsrik egenföretagare ✨ | Do things your way</title
	>
	<meta
		content="Jag hälper de som har problem med stress att gå från anställd till företagare."
		name="description"
	/>
</svelte:head>

<header class="header">
	<div class="header__logo">
		Do things <span class="header__emphasized">your</span> way
	</div>
	<span class="header__pre-heading">Kostnadsfritt webbinarie</span>
	<h1 class="header__heading">Från stressad överpresterare till framgångsrik egenföretagare</h1>
	<p class="header__sub-heading">– fem steg för att optimera din tid och energi</p>
	<Button>Registrera dig nu!</Button>
</header>

<section class="intro">
	<h1 class="intro__heading">Stämmer detta in på dig?</h1>
	Har du redan startat eller vet om att du ska starta eget företag? Är du trött på att vara stressad
	och aldrig hinna jobba på ditt företag? Är du rädd för att du aldrig någonsin ska kunna säga upp dig
	och det liv du vill ha? När du väl får tid över till att utveckla ditt företag, hamnar du ofta med
	mobilen i soffan eller känner du dig så överväldigad med allt som ska göras så du gör ingenting? Jag
	kommer gå igenom mina 5 bästa steg för att maximera din tid, energi och produktivitet så att du äntligen
	kan säga upp dig och jobba med det du brinner för! Allt du behöver göra är att registrera dig till
	webbinariet:
</section>

<style lang="scss">
	@use "../../styles/breakpoints.scss" as *;

	.header {
		text-align: center;
		position: relative;
		width: 100%;
		background-color: var(--color-primary-dark);
		color: var(--color-white);
		padding: var(--spacing-xl) 16px;
		display: flex;
		flex-direction: column;
		align-items: center;

		&__logo {
			font-weight: 500;
			font-family: var(--font-secondary);
			color: var(--color-white);
			line-height: 1;
			font-size: var(--font-size-l);
			text-transform: uppercase;
			position: absolute;
			top: 16px;
			left: 16px;
		}

		&__emphasized {
			font-weight: 800;
			font-style: italic;
		}

		&__pre-heading {
			font-size: var(--font-size-s);
			text-transform: uppercase;
			letter-spacing: 2px;
			text-shadow: 4px 2px 4px rgba(0, 0, 0, 0.25);
		}

		&__heading {
			max-width: 25ch;
			color: inherit;
			font-size: var(--font-size-xxl);
			font-family: var(--font-secondary);
			text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
			font-style: italic;
			margin: 32px 0;
		}

		&__sub-heading {
			margin-bottom: var(--spacing-m);
		}
	}
</style>

<script lang="ts">
	import Button from "$lib/button/Button.svelte";
	import Divider from "$lib/divider/Divider.svelte";
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

<main class="main">
	<section class="intro">
		<h2 class="intro__heading">Stämmer detta in på dig?</h2>

		<ul class="intro__list">
			<li>Du har redan startat eller har påbörjat processen att starta ditt eget företag.</li>
			<li>Du är trött på att vara stressad och aldrig hinna jobba på ditt företag.</li>
			<li>
				Du rädd för att du aldrig någonsin ska kunna säga upp dig och leva det liv du vill leva.
			</li>
			<li>
				När du väl har tid över hamnar du ofta med mobilen i soffan eller känner dig så överväldigad
				av allt som ska göras så det slutar med att du inte gör någonting alls.
			</li>
		</ul>

		<p>
			Jag kommer gå igenom mina 5 bästa steg för att maximera din tid, energi och produktivitet så
			att du äntligen kan säga upp dig och jobba med det du brinner för! Allt du behöver göra är att
			registrera dig till webbinariet nedan.
		</p>

		<div class="intro__webbinarie">
			<p class="intro__date small-caps-text">6 december 2022 klockan 19:00</p>
			<h3 class="intro__heading intro__heading--secondary">
				Från stressad överpresterare till framgångsrik egenföretagare
			</h3>
		</div>

		<p>
			Det är helt gratis att delta men det finns bara ett begränsat antal platser så se till att
			säkra din plats nu! 😄
		</p>

		<Button>Anmäl dig här!</Button>
	</section>

	<Divider text="Kul citat" />

	<section class="sign-up">
		<!-- Begin Mailchimp Signup Form -->
		<form
			action="https://dothingsyourway.us21.list-manage.com/subscribe/post?u=e799ec252937b1dd4cc8f63b0&id=412ad9843c&f_id=00d9c5e1f0"
			method="post"
			id="mc-embedded-subscribe-form"
			name="mc-embedded-subscribe-form"
			class="sign-up__form"
			target="_self"
		>
			<p class="small-caps-text">Från stressad överpresterare till framgångsrik egenföretagare</p>
			<h2 class="sign-up__heading">Registrera dig till webbinariet</h2>
			<div class="sign-up__inputs">
				<div class="sign-up__form-group">
					<label for="mce-EMAIL">E-postadress <span class="asterisk">*</span> </label>
					<input
						type="email"
						value=""
						name="EMAIL"
						class="required email"
						id="mce-EMAIL"
						required
					/>
					<span id="mce-EMAIL-HELPERTEXT" class="helper_text" />
				</div>
				<div class="sign-up__form-group">
					<label for="mce-FNAME">Förnamn <span class="asterisk">*</span> </label>
					<input type="text" value="" name="FNAME" class="required" id="mce-FNAME" required />
					<span id="mce-FNAME-HELPERTEXT" class="helper_text" />
				</div>
				<div class="sign-up__form-group">
					<label for="mce-PHONE">Telefonnummer </label>
					<input type="text" name="PHONE" class="" value="" id="mce-PHONE" />
					<span id="mce-PHONE-HELPERTEXT" class="helper_text" />
				</div>
				<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
				<div style="position: absolute; left: -5000px;" aria-hidden="true">
					<input type="text" name="b_e799ec252937b1dd4cc8f63b0_412ad9843c" tabindex="-1" value="" />
				</div>
				<div class="indicates-required"><span class="asterisk">*</span> obligatoriskt fält</div>
			</div>
			<input
				type="submit"
				value="Registrera mig nu!"
				name="subscribe"
				id="mc-embedded-subscribe"
				class="button"
			/>
		</form>
		<!--End mc_embed_signup-->
	</section>
</main>

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

	.main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: var(--spacing-l);
	}

	.intro {
		max-width: var(--max-width);
		margin: var(--spacing-l) 16px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--spacing-m);

		p {
			max-width: 75ch;
		}

		&__heading {
			text-align: center;
			max-width: 30ch;
			font-size: var(--font-size-xl);
			line-height: 1.2;
			margin-bottom: var(--spacing-s);

			&--secondary {
				color: var(--color-secondary-darkest);
				font-size: var(--font-size-l);
				margin-bottom: 0;
			}
		}

		&__list {
			max-width: 75ch;

			li {
				margin-bottom: var(--spacing-s);
			}
		}

		&__webbinarie {
			background-color: var(--color-secondary-lightest);
			padding: 32px;
			text-align: center;
			border-radius: 16px;
		}

		&__date {
			margin-bottom: var(--spacing-xs);
		}
	}

	.sign-up {
		&__heading {
			font-size: var(--font-size-xl);
		}

		&__form {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: var(--spacing-m);
			border-radius: 16px;
			padding: var(--spacing-m) var(--spacing-s);
			background-color: var(--color-primary-lightest);
			margin: var(--spacing-m) 16px;
			text-align: center;

			@media (min-width: $breakpoint-tablet-portrait) {
				padding: var(--spacing-l);
			}
		}

		&__inputs {
			width: 100%;
			max-width: 400px;
		}

		&__form-group {
			display: flex;
			flex-direction: column;
			text-align: left;
			margin-bottom: var(--spacing-m);

			label {
				margin-bottom: var(--spacing-xs);
			}

			input {
				border: 1px solid var(--color-primary-light);
				border-radius: 8px;
				padding: 8px 16px;
				font: inherit;
				color: var(--color-primary-dark);
				background-color: var(--color-white);
				outline-color: var(--color-secondary);
			}
		}

		.button {
			padding: 16px 32px;
			border: none;
			border-radius: 8px;
			box-shadow: 8px 4px 8px 0 rgba(0, 0, 0, 0.2);
			transition: all 0.2s;
			cursor: pointer;
			background-color: var(--color-secondary);
			color: var(--color-white);
			letter-spacing: 0.5px;

			&:hover {
				background-color: var(--color-secondary-dark);
				box-shadow: 8px 8px 10px 0 rgba(0, 0, 0, 0.2);
				transform: translateY(-2px);
			}
		}
	}
</style>

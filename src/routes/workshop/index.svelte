<script lang="ts">
	import Divider from "$lib/divider/Divider.svelte";
	import AboutMarkus from "$lib/homepage/about-markus/AboutMarkus.svelte";
</script>

<svelte:head>
	<title
		>Bästa sättet att starta företag 2023 ✨ | Do things your way</title
	>
	<meta
		content="Jag hälper de som har problem med stress att gå från anställd till företagare."
		name="description"
	/>
</svelte:head>

<header class="header">
	<div class="header__logo">
		<a href="/">
			Do things <span class="header__emphasized">your</span> way
		</a>
	</div>
	<span class="header__pre-heading">Kostnadsfri workshop</span>
	<h1 class="header__heading">
		Bästa sättet att starta företag 2023
	</h1>
	<p class="header__sub-heading">- För dig som har problem med stress</p>
	<a href="#sign-up" class="button">Registrera dig nu!</a>
</header>

<main class="main">
	<section class="intro">
		<div class="intro__header">
			<img
				src="/images/zen.jpg"
				alt="En brygga med en ljuslykta som brinner. Man kan se en man som sitter på bryggan med korsade fötter."
				class="intro__image"
			/>
			<div class="intro__content">
				<h2 class="intro__heading">Stämmer detta in på dig?</h2>

				<ul class="intro__list">
					<li>Du vill säga upp dig och driva ditt företag på heltid.</li>
					<li>
						Stressen, tiden och energin gör att du aldrig kommer igång. 
					</li>
					<li>Du är orolig för om det är rätt läge att starta företag i lågkonjunkturen.</li>
					<li>Du är osäker på vad exakt du ska göra för att börja tjäna pengar i företaget.</li>
				</ul>
			</div>
		</div>

		<div class="intro__webbinarie">
			<h2 class="intro__heading">När?</h2>
			<p class="intro__date small-caps-text">5 Januari 2023 klockan 11:30-13:00</p>
			<h3 class="intro__webbinarie--heading">
				Bästa sättet att starta företag 2023
			</h3>
		</div>
		<p>
			Livet är för kort för att plugga på högskolan i 5 år, jobba 50 timmar i veckan i ett jobb man inte trivs med, i 40 år(!!!) för att sedan gå i pension när man är 65 och först DÅ äntligen bli fri. 
		</p>
		<p>
			Tycker du också att detta är galenskap? Varför ska du slösa bort dina bästa år när du kan skapa friheten i ett eget företag, inte om 5 år, utan nu i 2023!
		</p>
		<p>
			Men om du har problem med stressen och osäker på vad du ska göra så kan detta kännas som en omöjlighet. Isåfall ska du vara med på denna workshop!
		</p>
		<p>
			Det är helt gratis att delta men det finns bara ett begränsat antal platser så se till att
			säkra din plats nu! 😄
		</p>

		<a href="#sign-up" class="button">Anmäl dig här!</a>
	</section>

	<Divider text="Livet är för kort för att inte göra det man älskar" />

	<section class="sign-up" id="sign-up">
		<!-- Begin Mailchimp Signup Form -->
    <form
	    action="https://dothingsyourway.us21.list-manage.com/subscribe/post?u=e799ec252937b1dd4cc8f63b0&amp;
	    id=de1a90f1ff&amp;f_id=006ad0e1f0" 
	    method="post" 
	    id="mc-embedded-subscribe-form" 
	    name="mc-embedded-subscribe-form" 
	    class="validate sign-up__form" 
	    target="_self"
    >
	    <p class="small-caps-text">Det bästa sättet att starta företag 2023</p>
	    <h2 class="sign-up__heading">Registrera dig till workshopen</h2>
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
				>
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
			<div hidden={true}><input type="hidden" name="tags" value="94301"></div>
		   <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
		    <div style="position: absolute; left: -5000px;" aria-hidden="true">
		    	<input type="text" name="b_e799ec252937b1dd4cc8f63b0_de1a90f1ff" tabindex="-1" value="">
		    </div>
		    <div class="sign-up__required"><span class="asterisk">*</span> obligatoriskt fält</div>
		</div>
	    <input 
	    	type="submit" 
	    	value="Registrera mig nu!" 
	    	name="subscribe" 
	    	id="mc-embedded-subscribe" 
	    	class="button secondary"
    	>
	    <p class="sign-up__integrity">
			Genom att sända in dina uppgifter godtar du också vår <a
				href="/integritetspolicy"
				class="sign-up__link">integritetspolicy</a
			>.
		</p>
	</form>
<!--End mc_embed_signup-->
	</section>

	<Divider text="&quot;Min stora passion är att coacha och utbilda andra&quot;" />

	<AboutMarkus />
</main>

<style lang="scss">
	@use "../../styles/breakpoints.scss" as *;

	.header {
		text-align: center;
		position: relative;
		width: 100%;
		background-color: var(--color-primary-dark);
		min-height: 70vh;
		background-image: url("/images/tomtebloss.jpg");
		background-size: cover;
		background-position: bottom;
		color: var(--color-white);
		padding: var(--spacing-xl) 16px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

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

			a {
				text-decoration: none;
				color: inherit;
				font: inherit;
			}
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

		&__header {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: var(--spacing-m);

			@media (min-width: $breakpoint-tablet-landscape) {
				flex-direction: row;
				align-items: flex-start;
				gap: 0;
			}
		}

		&__image {
			width: 100%;
			max-width: 640px;
			border-radius: 8px;
		}

		&__content {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: var(--spacing-m);
			background-color: var(--color-secondary-lightest);
			padding: var(--spacing-m);
			border-radius: 8px;
			box-shadow: var(--box-shadow);
			max-width: 640px;

			@media (min-width: $breakpoint-tablet-landscape) {
				margin-left: -32px;
				margin-top: -32px;
			}
		}

		p {
			max-width: 75ch;
		}

		&__heading {
			font-size: var(--font-size-xl);
			color: var(--color-secondary-darkest);
			width: 100%;
			line-height: 1.2;
			margin-bottom: var(--spacing-s);
		}

		&__list {
			max-width: 75ch;

			li {
				margin-bottom: var(--spacing-s);
			}
		}

		&__webbinarie {
			max-width: 50ch;
			background-color: var(--color-primary-lightest);
			padding: 32px;
			text-align: center;
			border-radius: 16px;

			&--heading {
				line-height: 1.2;
				font-style: italic;
				color: var(--color-primary-darkest);
				font-size: var(--font-size-l);
				margin-bottom: 0px;
			}
		}

		&__date {
			margin-bottom: var(--spacing-s);
		}
	}

	.sign-up {
		margin: var(--spacing-l) 16px;

		&__heading {
			font-size: var(--font-size-xl);
		}

		&__form {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: var(--spacing-m);
			border-radius: 8px;
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

		&__integrity,
		&__required {
			font-size: var(--font-size-s);
			color: var(--color-primary-dark);
		}

		&__link {
			font-weight: 700;
			color: inherit;
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}
	}

	.webinar {
		width: 100%;
		max-width: var(--max-width);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--spacing-m);
		margin: var(--spacing-xl) 16px var(--spacing-l) 16px;
		padding: 0 16px;

		@media (min-width: $breakpoint-tablet-landscape) {
			align-items: flex-start;
			flex-direction: row-reverse;
			padding: 0;
		}

		&__heading {
			font-size: var(--font-size-l);
			text-align: center;
			margin-bottom: var(--spacing-m);

			@media (min-width: $breakpoint-tablet-landscape) {
				text-align: left;
			}
		}

		&__image {
			border-radius: 8px;
			width: 100%;
			max-width: 640px;
			height: auto;

			@media (min-width: $breakpoint-tablet-landscape) {
				margin-left: -64px;
				margin-top: -32px;
			}
		}

		div {
			background-color: var(--color-secondary-lightest);
			padding: var(--spacing-m);
			border-radius: 8px;
			width: 100%;
			max-width: 640px;
			box-shadow: var(--box-shadow);
		}

		&__list {
			li {
				margin-bottom: var(--spacing-s);
			}
		}
	}
</style>

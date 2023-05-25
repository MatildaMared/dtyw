<script lang="ts">
	import Divider from "$lib/divider/Divider.svelte";
	import AboutMarkus from "$lib/homepage/about-markus/AboutMarkus.svelte";import { onMount } from 'svelte';

	onMount(() => {
		// <!-- MailerLite Universal -->
		
		(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
		.push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
		n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
		(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
		ml('account', '303786');
		
		// <!-- End MailerLite Universal -->
	});

</script>

<svelte:head>
	<title
		>Hur du blir en framgångsrik företagare - fri från stress ✨ | Do things your way</title
	>
	<meta
		content="Jag hjälper de som har problem med stress att gå från anställd till företagare."
		name="description"
	/>
</svelte:head>
<div class="spacer"></div>
<div class="landing--page">
	<h1 class="header--warning">NÄSTAN KLAR!</h1>
	<p class="sub--text">Filen skickas till dig nu...</p>
	<h1 class="header--headsup">Men medan du väntar. Vill du se till så att det nya stressmindsetet verkligen sätter sig på djupet?</h1>
	<div class="spacer"></div>
	<h1 class="header--headsup underline">Var med på nästa masterclass:</h1>
	<div class="spacer"></div>
</div>
<header class="header">
	<div class="header__logo">
		<a href="/">
			Do things <span class="header__emphasized">your</span> way
		</a>
	</div>
	<span class="header__pre-heading">Kostnadsfri masterclass</span>
	<h1 class="header__heading">
		Hur du blir en framgångsrik företagare <span> - fri från stress</span>
	</h1>
	<p class="header__sub-heading">– tre steg för att aldrig igen känna negativ stress</p>
	<a href="#sign-up" class="button">Registrera dig nu!</a>
</header>

<main class="main">
	<section class="intro">
		<div class="intro__header">
			<img
				src="/../images/zen.jpg"
				alt="En brygga med en ljuslykta som brinner. Man kan se en man som sitter på bryggan med korsade fötter."
				class="intro__image"
			/>
			<div class="intro__content">
				<h2 class="intro__heading">Stämmer detta in på dig?</h2>

				<ul class="intro__list">
					<li>Du är trött på att vara stressad och ha låg energi</li>
					<li>Du har svårt att få struktur och kontroll på allt som behöver göras</li>
					<li>Du är rädd för vad som kommer hända om du inte jobbar mer och har koll på allt.</li>
					<li>Du vet att ditt företag kan bli både framgångsrikt och trivsamt med rätt verktyg.</li>
				</ul>
			</div>
		</div>

		<div class="intro__webbinarie">
			<h2 class="intro__heading">När?</h2>
			<p class="intro__date small-caps-text">1 Juni 2023 klockan 18:00</p>
			<h3 class="intro__webbinarie--heading">
				Hur du blir en framgångsrik företagare - fri från stress
			</h3>
		</div>
		<p>
			Jag kommer gå igenom hur du ska göra för att förvandla all din negativa stress till positiv så du inte bara får mer gjort utan också mår fantastiskt bra! Allt du behöver göra är att
			registrera dig till masterclassen nedan.
		</p>
		<p>
			<b>VIKTIGT! </b>Detta är endast för dig som är företagare eller vill starta företag.
		</p>

		<a href="#sign-up" class="button">Anmäl dig nu!</a>
	</section>

	<Divider text="För dig som är företagare eller vill starta företag" />

	<section class="sign-up" id="sign-up">
		<!-- Begin Mailchimp Signup Form -->
		<div class="sign-up__form">
			<p class="small-caps-text sign-up__mb">Hur du blir en framgångsrik företagare - fri från stress</p>
			<h2 class="sign-up__heading sign-up__mb">Registrera dig till masterclassen</h2>
			<div class="ml-embedded" data-form="OD3nDk"></div>
			<p class="sign-up__integrity">
				Genom att sända in dina uppgifter godtar du också vår <a
					href="/integritetspolicy"
					class="sign-up__link">integritetspolicy</a
				>.
			</p>
		</div>
		<!--End mc_embed_signup-->
	</section>

	<Divider secondary text="Kompromissa inte med dina drömmar." />

	<section class="webinar">
		<img
			src="../images/webinar.jpg"
			alt="En man med en kaffekopp i handen håller upp en bok om entreprenörskap"
			class="webinar__image"
		/>
		<div>
			<h2 class="webinar__heading">På masterclassen kommer du lära dig...</h2>
			<ul class="webinar__list">
				<li>
					Den nya <b>revolutionerande forskningen om positiv stress</b> som förändrade mitt och hundratals andras liv för alltid!
				</li>
				<li>
					Hur du går <b>från stressad och slutkörd till välmående och effektiv</b> samtidigt som du
					får ännu bättre resultat.
				</li>
				<li>
					Steg för steg hur du <b>slutar slösa din extra tid och energi</b> på att oroa dig eller ha
					dåligt samvete för att du inte gör mer.
				</li>
				<li>
					Exakt hur du ska göra för att <b>ta kontrollen över din tid</b> och ditt liv och slutar känna
					att tiden (och livet) hela tiden flyter iväg på annat än det DU vill.
				</li>
				<li>
					Hur du säkrar en trygg framtid för ditt företag igenom att bli <b>konsekvent produktiv,</b
					> vecka för vecka, vilket kommer garantera att ditt företag hela tiden växer.
				</li>
				<li>
					...och mycket mer! masterclassen är helt gratis och 100% live, så du kan ställa frågor under
					tiden.
				</li>
			</ul>
		</div>
	</section>

	<Divider text="&quot;Min stora passion är att coacha och utbilda andra&quot;" />

	<AboutMarkus />
	<a href="#sign-up" class="button">Anmäl dig nu!</a>
	<br/>
</main>

<style lang="scss">
	@use "../../../styles/breakpoints.scss" as *;
	.landing--page {
		padding: 30px;
	}

	.header--warning {
		text-align: center;
		font-size: var(--font-size-xl);
		margin-bottom: var(--spacing-s);
		color: red;
	}

	.header--headsup {
		margin: 20px 0;
		text-align: center;
	};

	.underline {
		text-decoration: underline;
	}

	.sub--text {
		font-style: italic;
		text-align: center;
	}

	.spacer {
		margin-top: var(--spacing-l);
	}

	.header {
		text-align: center;
		position: relative;
		width: 100%;
		background-color: var(--color-primary-dark);
		min-height: 70vh;
		background-image: url("/images/woods1.jpg");
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
		}

		&__list {
			max-width: 75ch;

			li {
				margin-bottom: var(--spacing-s);
			}
		}

		&__webbinarie {
			max-width: 40ch;
			background-color: var(--color-primary-lightest);
			padding: 32px;
			text-align: center;
			border-radius: 16px;

			&--heading {
				line-height: 1.2;
				font-style: italic;
				color: var(--color-primary-darkest);
				font-size: var(--font-size-l);
				margin-bottom: 0;
			}
		}

		&__date {
			margin-bottom: var(--spacing-xs);
		}
	}

	.sign-up {
		margin: var(--spacing-l) 16px;

		&__heading {
			font-size: var(--font-size-xl);
		}

		&__form {
			// display: flex;
			// flex-direction: column;
			// align-items: center;
			// gap: var(--spacing-m);
			border-radius: 8px;
			padding: var(--spacing-m) var(--spacing-s);
			background-color: var(--color-primary-lightest);
			margin: var(--spacing-m) 16px;
			text-align: center;

			@media (min-width: $breakpoint-tablet-portrait) {
				padding: var(--spacing-l);
			}
		}

		&__mb {
			margin-bottom: var(--spacing-s);
		}

		// &__inputs {
		// 	width: 100%;
		// 	max-width: 400px;
		// }

		// &__form-group {
		// 	display: flex;
		// 	flex-direction: column;
		// 	text-align: left;
		// 	margin-bottom: var(--spacing-m);

		// 	label {
		// 		margin-bottom: var(--spacing-xs);
		// 	}

		// 	input {
		// 		border: 1px solid var(--color-primary-light);
		// 		border-radius: 8px;
		// 		padding: 8px 16px;
		// 		font: inherit;
		// 		color: var(--color-primary-dark);
		// 		background-color: var(--color-white);
		// 		outline-color: var(--color-secondary);
		// 	}
		// }

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

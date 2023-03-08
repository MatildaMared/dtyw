<script lang="ts">
	import Divider from "$lib/divider/Divider.svelte";
	import AboutMarkus from "$lib/homepage/about-markus/AboutMarkus.svelte";
	import Testimonials from "$lib/homepage/testimonials/Testimonials.svelte";
	import { onMount } from 'svelte';

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
	<title>5 vanliga misstag stressade högpresterare gör för att nå sina mål ✨ | Do things your way</title>
	<meta
		content="Jag hjälper de som har problem med stress att må bättre och skapa deras drömliv."
		name="description"
	/>
</svelte:head>

<div class="preheader">
	<div class="spacer"></div>
	<div class="landing--page">
		<h1 class="preheader__warning">Du är nästan klar!</h1>
		<p class="sub--text">Filen skickas till dig nu...</p>
		<p class="file--title">Men medan du väntar. Vill du se till så att det nya mindset om stress verkligen sätter sig på djupet?</p>
		<p class="file--title emphasized--text">Anmäl dig till webbinariet nedan!</p>
	</div>
	<div class="spacer"></div>
</div>

<header class="header">
	<div class="header__logo">
		<a href="/">
			Do things <span class="header__emphasized">your</span> way
		</a>
	</div>

	<span class="header__pre-heading">Kostnadsfritt webbinarie</span>
	<h1 class="header__heading">
		5 vanliga misstag stressade högpresterare gör för att nå sina mål
	</h1>
	<p class="header__sub-heading">– Få mer gjort, stressa mindre och må bra!</p>
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
					<li>Du har höga ambitioner och är trött på att höra att du ska "sänka kraven" på grund av stressen.</li>
					<li>Du vill fortsätta prestera på topp utan att missa allt annat viktigt i livet.</li>
					<li>Du vill bli mer effektiv och få mer gjort utan att må sämre. </li>
					<li>Du vill göra allt för att nå dina mål och få det liv du vill ha.</li>
				</ul>
			</div>
		</div>

		<div class="intro__webbinarie">
			<h2 class="intro__heading">När?</h2>
			<p class="intro__date small-caps-text">14 Mars 2023 klockan 18:00</p>
			<h3 class="intro__webbinarie--heading">
				5 vanliga misstag stressade högpresterare gör för att nå sina mål
			</h3>
		</div>
		<p>
			Jag kommer gå igenom de 5 absolut vanligaste misstagen jag har sett efter att ha coachat hundratals stressade högpresterare.  
			Alltför många förstår inte hur mycket enklare det kan vara att få mycket gjort utan att må dåligt av stressen.
		</p>
		<p>
			<b>VIKTIGT! </b>Detta webinar är särskilt anpassat för dig som jobbar heltid, har stora mål och upplever problem med stress.
		</p>
		<p>
			Det är helt gratis att delta men det finns bara ett begränsat antal platser så se till att
			säkra din plats nu! 😄
		</p>

		<a href="#sign-up" class="button">Anmäl dig här!</a>
	</section>

	<Divider text="Jobba inte hårdare, jobba smartare." />

	<section class="sign-up" id="sign-up">
		<div class="sign-up__form">
			<p class="small-caps-text">5 vanliga misstag stressade högpresterare gör för att nå sina mål</p>
			<h2 class="sign-up__heading">Registrera dig till webbinariet</h2>
			<div class="sign-up__inputs">
				
			<div class="ml-embedded" data-form="ld7hnk"></div>
			<p class="sign-up__integrity">
				Genom att sända in dina uppgifter godtar du också vår <a
					href="/integritetspolicy"
					class="sign-up__link">integritetspolicy</a
				>.
			</p>
		</div>
	</section>

	<Divider secondary text="Kompromissa inte med dina drömmar." />

	<section class="webinar">
		<img
			src="images/webinar.jpg"
			alt="En man med en kaffekopp i handen håller upp en bok om entreprenörskap"
			class="webinar__image"
		/>
		<div>
			<h2 class="webinar__heading">På webbinariet kommer du lära dig...</h2>
			<ul class="webinar__list">
				<li>
					Den nya <b>revolutionerande forskningen om stress</b> som förändrade mitt liv för alltid!
				</li>
				<li>
					Hur du går <b>från stressad högprestare till välmående och effektiv</b> samtidigt som du
					får ännu bättre resultat.
				</li>
				<li>
					Steg för steg hur du <b>slutar slösa din tid och energi</b> på att oroa dig eller ha
					dåligt samvete för att du inte gör mer.
				</li>
				<li>
					Exakt hur du ska göra för att <b>ta kontrollen över din tid</b> och ditt liv och slutar känna
					att tiden (och livet) hela tiden flyter iväg på annat än det DU vill.
				</li>
				<li>
					...och mycket mer! Webbinariet är helt gratis och 100% live, så du kan ställa frågor under
					tiden.
				</li>
			</ul>
		</div>
	</section>

	<Divider text="&quot;Min stora passion är att coacha och utbilda andra&quot;" />

	<AboutMarkus />
	<Testimonials />
</main>

<style lang="scss">
	@use "../../styles/breakpoints.scss" as *;

	.preheader {
			background-color: black;
			display: flex;
			flex-direction: column;
			align-items: center;	
			padding: 100px 0;
			gap: var(--spacing-s);
			color: white;
			text-align: center;
			background-size: cover;
			background-position: bottom;

			
		h1 {
			color: var(--color-secondary);
			font-size: var(--font-size-xl);
			margin-bottom: 10px;
		}

		.file--title {
			font-style: bold;
			margin-bottom: 30px;
			font-size: 20px;
			margin: 10px;
			
		}

		.sub--text {
			font-style: italic;
			margin-bottom: 20px;
		}

		.emphasized--text {
			margin-top: 30px;
			font-size: var(--font-size-l);
			color: var(--color-primary-light);
		}

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

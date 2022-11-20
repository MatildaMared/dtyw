<script lang="ts">
	import Button from "$lib/button/Button.svelte";
	import Divider from "$lib/divider/Divider.svelte";
	import AboutMarkus from "$lib/homepage/about-markus/AboutMarkus.svelte";
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

	<!-- Meta Pixel Code -->
	<script>
	!function(f,b,e,v,n,t,s)
	{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
	n.callMethod.apply(n,arguments):n.queue.push(arguments)};
	if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
	n.queue=[];t=b.createElement(e);t.async=!0;
	t.src=v;s=b.getElementsByTagName(e)[0];
	s.parentNode.insertBefore(t,s)}(window, document,'script',
	'https://connect.facebook.net/en_US/fbevents.js';);
	fbq('init', '2556598284605991');
	fbq('track', 'PageView');
	</script>
	<noscript
		><img
			height="1"
			width="1"
			style="display:none"
			src="https://www.facebook.com/tr?id=2556598284605991&ev=PageView&noscript=1"
		/></noscript
	>
	<!-- End Meta Pixel Code -->
</svelte:head>

<header class="header">
	<div class="header__logo">
		<a href="/">
			Do things <span class="header__emphasized">your</span> way
		</a>
	</div>
	<span class="header__pre-heading">Kostnadsfritt webbinarie</span>
	<h1 class="header__heading">
		Från stressad överpresterare
		<span> till framgångsrik egenföretagare </span>
	</h1>
	<p class="header__sub-heading">– fem steg för att optimera din tid och energi</p>
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
					<li>Du har redan startat eller har påbörjat processen att starta ditt eget företag.</li>
					<li>Du är trött på att vara stressad och aldrig hinna jobba på ditt företag.</li>
					<li>
						Du rädd för att du aldrig någonsin ska kunna säga upp dig och leva det liv du vill leva.
					</li>
					<li>
						När du väl har tid över hamnar du ofta med mobilen i soffan eller känner dig så
						överväldigad av allt som ska göras så det slutar med att du inte gör någonting alls.
					</li>
				</ul>
			</div>
		</div>

		<div class="intro__webbinarie">
			<p class="intro__date small-caps-text">6 december 2022 klockan 19:00</p>
			<h3 class="intro__webbinarie--heading">
				Från stressad överpresterare <span> till framgångsrik egenföretagare </span>
			</h3>
		</div>

		<p>
			Jag kommer gå igenom mina 5 bästa steg för att maximera din tid, energi och produktivitet så
			att du äntligen kan säga upp dig och jobba med det du brinner för! Allt du behöver göra är att
			registrera dig till webbinariet nedan.
		</p>
		<p>
			Det är helt gratis att delta men det finns bara ett begränsat antal platser så se till att
			säkra din plats nu! 😄
		</p>

		<a href="#sign-up" class="button">Anmäl dig här!</a>
	</section>

	<Divider text="Jobba inte hårdare, jobba smartare." />

	<section class="sign-up" id="sign-up">
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
				<div class="sign-up__required"><span class="asterisk">*</span> obligatoriskt fält</div>
			</div>
			<input
				type="submit"
				value="Registrera mig nu!"
				name="subscribe"
				id="mc-embedded-subscribe"
				class="button secondary"
			/>
			<p class="sign-up__integrity">
				Genom att sända in dina uppgifter godtar du också vår <a
					href="/integritetspolicy"
					class="sign-up__link">integritetspolicy</a
				>.
			</p>
		</form>
		<!--End mc_embed_signup-->
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
				<li>Den nya revolutionerande forskningen om stress som förändrade mitt liv för alltid!</li>
				<li>
					Hur du går från stressad överpresterare till välmående och effektiv samtidigt som du får
					ännu bättre resultat.
				</li>
				<li>
					Steg för steg hur du slutar slösa din extra tid och energi på att oroa dig eller ha dåligt
					samvete för att du inte gör mer.
				</li>
				<li>
					Exakt hur du ska göra för att ta kontrollen över din tid och ditt liv och slutar känna att
					tiden (och livet) hela tiden flyter iväg på annat än det DU vill.
				</li>
				<li>
					Hur du säkrar en trygg framtid för ditt företag igenom att bli konsekvent produktiv, vecka
					för vecka, vilket kommer garantera att ditt företag hela tiden växer.
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
</main>

<style lang="scss">
	@use "../../styles/breakpoints.scss" as *;

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

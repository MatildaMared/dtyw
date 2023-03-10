<script>
	import Divider from "$lib/divider/Divider.svelte";
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

<main>
	<div class="spacer"></div>
	<div class="landing--page">
		<h1 class="header--warning">NÄSTAN KLAR!</h1>
		<p class="sub--text">Filen skickas till dig nu...</p>
		<h1 class="header--headsup">Men medan du väntar. Vill du se till så att det nya mindset om stress verkligen sätter sig på djupet?</h1>
		<h1 class="header--headsup underline">Missa inte webbinariet:</h1>
		<p class="webinar--title">5 vanliga misstag stressade högpresterare gör för att nå sina mål</p>
		<p class="file--title">Du kommer lära dig...</p>
		<ul>
			<li>
				Den nya <b class="emphasized--text">revolutionerande forskningen om stress</b> som förändrade mitt liv för alltid!
			</li>
			<li>
				Hur du går <b class="emphasized--text">från stressad högprestare till välmående och effektiv</b> samtidigt som du
				får ännu bättre resultat.
			</li>
			<li>
				Exakt hur du ska göra för att <b class="emphasized--text">ta kontrollen över din tid</b> och ditt liv och slutar känna
				att tiden (och livet) hela tiden flyter iväg på annat än det DU vill.
			</li>
			<li>
				...och mycket mer! 
			</li>
			<h1 class="header--headsup">Anmäl dig nedan nu!</h1>
		</ul>
		<div class="ml-embedded" data-form="9K3Z7r"></div>
		<p class="privacy--text">Genom att sända in dina uppgifter godtar du också vår <a href="https://www.dothingsyourway.com/integritetspolicy">integritetspolicy.</a></p>		
	</div>
	<div class="spacer"></div>
	
</main>

<style lang="scss">
	@use "../../styles/breakpoints.scss" as *;


	main {
		display: flex;
		flex-direction: column;
		align-items: center;	
		
		padding: 0 16px;
		gap: var(--spacing-s);
		color: white;
		text-align: center;
		background-color: rgb(57, 57, 57);
		background-image: url('/images/markus-dark.png');
		background-size: cover;
		background-position: bottom;

		ul {
			// list-style-type: none;
			text-align: left;
		}

		li {
			padding-bottom: 10px;
		}

		h2 {
			width: 100%;
		}

		.header--warning {
			text-align: center;
			font-size: var(--font-size-xl);
			margin-bottom: var(--spacing-s);
			color: red;
		}

		.header--headsup {
			color: white;
			margin: 20px 0;
		};

		.underline {
			text-decoration: underline;
		}

		.landing--page {
			padding: 20px;
			align-items: center;	
			background-color: black;
			border-radius: 4px;
			max-width: 500px;
		}

		.emphasized--text {			
			font-style: italic;
			color: var(--color-secondary);
		}

		.webinar--title {
			font-style: bold;
			margin-bottom: 30px;
			font-size: 20px;
			text-align: center;
		}

		.sub--text {
			font-style: italic;
		}

		.spacer {
			margin-top: var(--spacing-l);
		}

		.privacy--text {
			color: gray;
			font-size: var(--font-size-xs);
			
			a {
				color: gray;
			}
			
		}

		
	}
</style>

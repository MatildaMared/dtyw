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
		<h1>Vill du <span class="emphasized--text">bli en framgångsrik företagare</span> och bli fri från stressen?</h1>
		<p class="file--title">Anmäl dig till mitt nyhetsbrev!</p>
		<p class="sub--text">Få massvis av värdefull kunskap, verktyg och inspiration direkt i din inbox.</p>
		<div class="ml-embedded" data-form="2x0fz0"></div>
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

		h1 {
			text-align: center;
			font-size: var(--font-size-xl);
			margin-bottom: var(--spacing-m);
			color: white;
		}

		h2 {
			width: 100%;
		}

		.landing--page {
			padding: 20px;
			align-items: center;	
			background-color: black;
			border-radius: 4px;
			max-width: 500px;
		}

		.emphasized--text {
			color: var(--color-primary);
		}

		.file--title {
			font-style: bold;
			margin-bottom: 30px;
			font-size: 20px;
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

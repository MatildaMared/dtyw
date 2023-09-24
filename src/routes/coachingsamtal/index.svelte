<script>
	import Divider from "$lib/divider/Divider.svelte";
	import AboutMarkus from "$lib/homepage/about-markus/AboutMarkus.svelte";import { onMount } from 'svelte';
</script>

<main>
	<h1>Boka coachingsamtal</h1>

	<h2>Hur ska du göra för att lösa problemen med stress?</h2>
	<div style="padding-bottom:56.25%; position:relative; display:block; width: 100%">
		<iframe width="100%" height="100%"
		  src="https://player.vimeo.com/video/867635175?h=de20d0ae03&autoplay=1&texttrack=sv"
		  frameborder="0" allowfullscreen="" allow="autoplay;" style="position:absolute; top:0; left: 0; border-radius:10px">
		</iframe>
		
	  </div>
	<div>
		<a href="https://calendly.com/markusmattsson/halvapriset">
			<button class="button" id="mainButton">Boka ditt första samtal för halva priset</button>
		</a>
	</div>
	<div  id="secondaryButton">
		<h2>Har du jobbat med mig förut och vill boka in mer coaching?</h2>
		<p>Då har jag givetvis en knapp för dig med:</p>
		<a href="https://calendly.com/markusmattsson/coachingtimme">
			<button class="button secondary">Bokning för återkommande kunder</button>
		</a>
	</div>
	<AboutMarkus />
</main>

<style lang="scss">
	@use "../../styles/breakpoints.scss" as *;

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 80%;
		margin: var(--spacing-xl) auto;
		padding: 0 16px;
		gap: var(--spacing-s);

		h1 {
			text-align: center;
			font-size: var(--font-size-xxl);
			margin-bottom: var(--spacing-m);
		}

		h2 {
			margin-top: var(--spacing-m);
			width: 100%;
			text-align: center;
			font-size: var(--font-size-l);
		}

		p {
			margin-top: var(--spacing-xs);
		}

		button {
			margin-top: var(--spacing-s);
		}

		#secondaryButton {
			margin-top: var(--spacing-l);
			text-align: center;
		}

	}
</style>

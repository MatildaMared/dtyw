<script>
	import Divider from "$lib/divider/Divider.svelte";
	import { onMount } from "svelte";

	onMount(() => {});
</script>

<main>
	<div class="spacer" />
	<div class="landing--page">
		<h1>
			Tack för att du bokat ditt <span class="emphasized--text">gratis vägledningssamtal</span>
		</h1>
		<img
			src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.passalassistans.se%2Fnyheter%2Ftack-for-2023&psig=AOvVaw0G97MJ6i2anRTgKyrBBxSD&ust=1745936839594000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIiiwO73-owDFQAAAAAdAAAAABAJ"
			alt="Tack"
		/>
		<p class="sub--text">Du får snart ett mail med bekräftelse på tiden</p>
		<p class="sub--text">Vi hörs!</p>
	</div>
	<div class="spacer" />
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
		background-image: url("/images/markus-dark.png");
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
			margin-top: 20px;
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

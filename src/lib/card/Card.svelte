<script lang="ts">
	export let imgUrl: string;
	export let altText: string;
	export let heading: string;
</script>

<li>
	<img src={imgUrl} alt={altText} />
	<h3>{heading}</h3>
	<p>
		<slot />
	</p>
</li>

<style lang="scss">
	li {
		width: 100%;
		max-width: 350px;
		background-color: var(--color-primary-lightest);
		padding: 32px;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		align-items: center;
		box-shadow: var(--box-shadow);
        transition: all .25s;

		&:hover {
			transform: translateY(-10px);
		}

		img {
			width: 100%;
			max-width: 100px;
			height: auto;
			opacity: 0.75;
			margin-bottom: var(--spacing-m);
		}

		h3 {
			text-align: center;
			font-size: var(--font-size-m);
			margin-bottom: var(--spacing-m);
		}
	}
</style>

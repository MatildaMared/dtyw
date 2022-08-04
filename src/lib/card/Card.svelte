<script lang="ts">
	export let imgUrl: string;
	export let altText: string;
	export let heading: string;
	export let secondary = false;

	const backgroundColor = secondary
		? "var(--color-secondary-lightest)"
		: "var(--color-primary-lightest)";
</script>

<li style={`background-color: ${backgroundColor}`}>
	<img src={imgUrl} alt={altText} />
	<h3>{heading}</h3>
	<slot />
</li>

<style lang="scss">
	li {
		width: 100%;
		max-width: 350px;
		padding: 32px;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		align-items: center;
		box-shadow: var(--box-shadow);
		transition: all 0.25s;

		&:hover {
			transform: translateY(-10px);
		}

		img {
			width: 100%;
			max-width: 80px;
			height: auto;
			opacity: 0.75;
			margin-bottom: 24px;
		}

		h3 {
			text-align: center;
			font-size: var(--font-size-l);
			margin-bottom: 24px;
		}
	}
</style>

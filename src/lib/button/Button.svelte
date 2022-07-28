<script lang="ts">
	export let onClick: () => void = () => {};
</script>

<button on:click={onClick}>
	<slot />
</button>

<style lang="scss">
	button {
		padding: 16px 32px;
		border: none;
		border-radius: 8px;
		box-shadow: 8px 4px 8px 0 rgba(0, 0, 0, 0.2);
		transition: all 0.2s;
		cursor: pointer;
		background-color: var(--color-secondary-dark);
		color: var(--color-white);
		letter-spacing: 0.5px;

		&:hover {
			background-color: var(--color-secondary);
			box-shadow: 8px 8px 16px 0 rgba(0, 0, 0, 0.2);
			transform: translateY(-2px);
		}
	}
</style>

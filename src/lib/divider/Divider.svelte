<script lang="ts">
	export let text: string;
	export let secondary: boolean = false;
</script>

<div class={secondary ? "secondary" : "primary"}>
	<h1>
		<p>
			{text}
		</p>
	</h1>
</div>

<style lang="scss">
	@use "../../styles/breakpoints.scss" as *;

	div {
		width: 100%;
		padding: 24px 16px;
		margin: var(--spacing-l) 0;

		&.primary {
			background-color: var(--color-primary);
		}

		&.secondary {
			background-color: var(--color-secondary);
		}
	}

	p {
		font-family: var(--font-secondary);
		font-style: italic;
		color: var(--color-white);
		line-height: 1;
		text-align: center;
	}
</style>

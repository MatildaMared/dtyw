<script lang="ts">
	export let text: string;
</script>

<div>
	<h1>
		<p>
			{text}
		</p>
	</h1>
</div>

<style lang="scss">
	div {
		width: 100%;
		background-color: var(--color-secondary);
		padding: 24px 16px;
	}

	p {
		font-family: var(--font-secondary);
		font-style: italic;
		color: var(--color-white);
		line-height: 1;
		text-align: center;
	}
</style>

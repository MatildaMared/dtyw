<p class="heading">
	Bli fri från stressen <span class="sub-heading">och lev ditt drömliv</span>
</p>

<style lang="scss">
	@use "../../../styles/breakpoints.scss" as *;

	.heading {
		margin-bottom: var(--spacing-xl);
		font-weight: 700;
		color: rgba(255, 255, 255, 0.85);
		position: relative;
		width: fit-content;
		font-family: var(--font-secondary);
		font-size: var(--font-size-xxl);
		line-height: 1;
		background-color: hsla(0, 0%, 0%, 0.75);
		padding: 16px;
		transform: translateX(-16px);

		@media (min-width: $breakpoint-tablet-portrait) {
			font-size: var(--font-size-xxxl);
			transform: translateX(-32px);
			padding: 32px;
		}

		.sub-heading {
			position: absolute;
			top: 80%;
			width: max-content;
			right: 0%;
			transform: rotate(-5deg);
			font-size: var(--font-size-xl);
			padding: 8px 16px 16px 16px;
			font-style: italic;
			background-color: hsla(0, 0%, 0%, 0.8);
			box-shadow: 8px 8px 16px 0 rgba(0, 0, 0, 0.2);

			@media (min-width: $breakpoint-mobile) {
				right: -5%;
			}

			@media (min-width: $breakpoint-tablet-portrait) {
				right: -10%;
				font-size: var(--font-size-xxl);
				padding: 16px 24px 24px 24px;
			}
		}
	}
</style>

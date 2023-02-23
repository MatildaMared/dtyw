<script lang="ts">
	import {
		MapPinIcon,
		PhoneIcon,
		BoxIcon,
		AtSignIcon,
		InstagramIcon,
		FacebookIcon
	} from "svelte-feather-icons";
</script>

<footer>
	<div class="content">
		<a href="/">
			<p class="logo">Do things <span>your</span> way</p>
		</a>
		<div class="divider" />
		<section class="contact">
			<div class="contact-info">
				<h2 class="title">Markus Mattsson</h2>
				<p>
					<MapPinIcon class="icon" size="16" strokeWidth={1} />
					<span>Kaptensgatan 10E, 30245 Halmstad</span>
				</p>
				<p>
					<PhoneIcon size="16" strokeWidth={1} />
					<span>073 81 80 343</span>
				</p>
				<p>
					<BoxIcon size="16" strokeWidth={1} />
					<span> Org.nr: SE900306053101 </span>
				</p>
			</div>
			<div class="social">
				<h2 class="title">Sociala Medier</h2>
				<a href="mailto:markus@dothingsyourway.com">
					<span> markus@dothingsyourway.com </span>
					<AtSignIcon size="16" strokeWidth={1} />
				</a>
				<a href="https://www.facebook.com/dothingsyourway" target="_blank">
					<span>facebook.com/dothingsyourway</span>
					<FacebookIcon size="16" strokeWidth={1} />
				</a>
				<a href="https://www.instagram.com/dothingsyourway" target="_blank">
					<span>dothingsyourway</span>
					<InstagramIcon size="16" strokeWidth={1} />
				</a>
			</div>
		</section>
		<div class="divider" />
		<section class="copyright">
			<div>
				<!-- TODO: Insert correct link -->
				<a href="/integritetspolicy">Integritetspolicy</a>
				<a href="https://www.flaticon.com/authors/gowi" target="_blank">Icons by GOWI</a>
			</div>
			<div>
				<p>© 2022 Markus Mattsson</p>
			</div>
		</section>
	</div>
</footer>

<style lang="scss">
	@use "../../styles/breakpoints.scss" as *;

	footer {
		width: 100%;
		background-color: var(--color-primary-dark);
		color: var(--color-white);
		padding: 32px 16px;
		// margin-top: var(--spacing-l);

		@media (min-width: $breakpoint-tablet-portrait) {
			padding: 48px 32px;
		}

		@media (min-width: $breakpoint-tablet-landscape) {
			padding: 48px;
		}
	}

	.content {
		max-width: var(--max-width);
		margin: 0 auto;
	}

	.logo,
	.title {
		font-family: var(--font-secondary);
		color: var(--color-white);
		font-size: var(--font-size-l);
		font-weight: 500;
		text-transform: uppercase;
		line-height: 1;

		& span {
			font-weight: 800;
			font-style: italic;
		}
	}

	.divider {
		width: 100%;
		height: 1px;
		background-color: rgba(255, 255, 255, 0.2);
		margin: 16px 0;
	}

	.contact {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		gap: 32px;

		@media (min-width: $breakpoint-tablet-portrait) {
			gap: 32px;
			flex-direction: row;
		}

		& .title {
			margin-bottom: 16px;
		}
	}

	p,
	a {
		display: flex;
		align-items: center;

		&:not(:last-child) {
			margin-bottom: 4px;
		}

		& span {
			margin: 0 8px;
		}
	}

	a {
		color: var(--color-white);
		text-decoration: none;
		transition: all 0.2s;

		&:hover {
			color: var(--color-primary-light);
		}
	}

	.social {
		.title {
			text-align: right;
		}

		a {
			justify-content: flex-end;
		}
	}

	.copyright {
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		font-size: var(--font-size-s);

		& > * {
			margin-bottom: 4px;
		}

		@media (min-width: $breakpoint-tablet-portrait) {
			align-items: flex-start;
			flex-direction: row;
			justify-content: space-between;
			color: rgba(255, 255, 255, 0.5);
		}

		a {
			color: rgba(255, 255, 255, 0.5);

			&:hover {
				color: var(--color-white);
			}
		}
	}
</style>

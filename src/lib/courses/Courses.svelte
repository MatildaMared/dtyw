<script lang="ts">
	import Button from "$lib/button/Button.svelte";
	import Card from "$lib/card/Card.svelte";

	function onClick() {
		console.log("Clicked");
	}
</script>

<section>
	<h2>Din väg, ditt företag, <span>ditt liv</span></h2>
	<p>
		Utifrån var du är i din resa får du hjälp med att välja en startpunkt som passar just dig. Boka
		ett gratis strategisamtal på knappen nedanför så hjälper jag dig!
	</p>
	<ul>
		<Card
			secondary
			heading="Stressfrihet"
			imgUrl="/images/freedom.png"
			altText="Illustration av person som tittar på en klocka med uppsträckta händer. I en pratbubbla syns ett öppet hänglås."
		>
			<p>
				I detta program är målet att du ska kunna jobba heltid, lägga minst 5–10 timmar i ditt
				företag <span>och</span> MÅ BRA! Du kommer lära dig att frigöra dig från negativ stress, skapa
				goda rutiner för dig själv, bli mer produktiv och strukturerad än vad du någonsin varit tidigare.
				Och kanske viktigast av allt – lära dig hur du känner dig tillräcklig och älskad även om du inte
				presterar. Dessutom kommer du få en kopia av vårt affärssystem för produktivitet som är särskilt
				utformat för stressade företagare.
			</p>
		</Card>
		<Card
			secondary
			heading="Företagsfrihet"
			imgUrl="/images/job-promotion.png"
			altText="Illustration av person som tittar på en klocka med uppsträckta händer. I en pratbubbla syns ett öppet hänglås."
		>
			<p>
				Illustration av en person som går upp för en trappa med en väska i handen. I bakgrunden syns
				en gnistrande diamant.
			</p>
		</Card>
		<Card
			secondary
			heading="Tidsfrihet"
			imgUrl="/images/leadership.png"
			altText="Illustration av man iklädd slips med händerna korsade framför kroppen. Bakom mannen står två personer till. Alla ser nöjda ut."
		>
			<p>Låt ditt företag växa genom att låta andra jobba för dig.</p>
		</Card>
	</ul>
	<Button {onClick}>Boka ett gratis strategisamtal!</Button>
</section>

<style lang="scss">
	section {
		width: 100%;
		max-width: var(--max-width);
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: var(--spacing-l) 0;

		h2 {
			font-size: var(--font-size-xl);
			margin-bottom: var(--spacing-m);
			text-align: center;

			span {
				font-weight: 900;
				font-style: italic;
			}
		}

		> p {
			margin-bottom: var(--spacing-m);
			max-width: 45ch;
			font-style: italic;
			text-align: center;
		}

		ul {
			margin: var(--spacing-m) 0 var(--spacing-l) 0;
			padding: 0;
			list-style: none;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: var(--spacing-m);

			p {
				span {
					font-weight: 700;
					font-style: italic;
				}
			}
		}
	}
</style>

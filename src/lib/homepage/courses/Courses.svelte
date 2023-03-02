<script lang="ts">
	import Button from "$lib/button/Button.svelte";
	import Card from "$lib/card/Card.svelte";

	function onClick() {
		window.open("https://calendly.com/markusmattsson/strategisamtal?utm_medium=hemsida", "_blank");
	}
</script>

<section>
    <h2>Din väg, dina drömmar, <span>ditt liv</span></h2>
    <p>
        Utifrån var du är i din resa får du hjälp med att välja en startpunkt som passar just dig.
        Boka
        ett gratis strategisamtal på knappen nedanför så hjälper jag dig!
    </p>
    <ul>
        <Card
                altText="Illustration av person som tittar på en klocka med uppsträckta händer. I en pratbubbla syns ett öppet hänglås."
                heading="Stressfrihet"
                imgUrl="/images/freedom.png"
                secondary
        >
            <p>
                I detta program är målet att du ska kunna jobba heltid och öka din arbetsförmåga med minst 5–10 timmar i
                ditt <span>och</span> MÅ BRA! Du kommer lära dig att frigöra dig från negativ
                stress, skapa
                goda rutiner för dig själv, bli mer produktiv och strukturerad än vad du någonsin
                varit tidigare.
                Och kanske viktigast av allt – lära dig hur du känner dig tillräcklig och älskad
                även om du inte
                presterar. Dessutom kommer du få en kopia av vårt affärssystem för produktivitet som
                är särskilt
                utformat för stressade högprestare.
            </p>
        </Card>
        <Card
                altText="Illustration av en person som går upp för en trappa med en väska i handen. I bakgrunden syns
				en gnistrande diamant."
                heading="Företagsfrihet"
                imgUrl="/images/job-promotion.png"
                secondary
        >
            <p>
                Detta program är för dig som vill starta upp eller vidareutveckla ditt företag till att bli framgångsrikt,
                ekonomiskt stabilt och trivsamt. Du kommer bli expert på produktivitet, få fullständig klarhet i
                exakt vad du ska göra härnäst och bygga rutiner för att du varje dag ska ta
                ett steg närmare företaget du vill ha.
            </p>
        </Card>
        <!-- <Card
                altText="Illustration av man iklädd slips med händerna korsade framför kroppen. Bakom mannen står två personer till. Alla ser nöjda ut."
                heading="Anpassat coachingprogram"
                imgUrl="/images/leadership.png"
                secondary
        >
            <p>Vill du ha en annan typ av coaching? Jag anpassar coachingen alltid efter varje klienten men ibland kan   </p>
        </Card> -->
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

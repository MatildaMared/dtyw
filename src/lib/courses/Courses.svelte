<script lang="ts">
	import Button from "$lib/button/Button.svelte";
	import Card from "$lib/card/Card.svelte";

	function onClick() {
		window.open("https://calendly.com/markusmattsson/strategisamtal?utm_medium=hemsida", "_blank");
	}
</script>

<section>
    <h2>Din väg, ditt företag, <span>ditt liv</span></h2>
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
                I detta program är målet att du ska kunna jobba heltid, lägga minst 5–10 timmar i
                ditt
                företag <span>och</span> MÅ BRA! Du kommer lära dig att frigöra dig från negativ
                stress, skapa
                goda rutiner för dig själv, bli mer produktiv och strukturerad än vad du någonsin
                varit tidigare.
                Och kanske viktigast av allt – lära dig hur du känner dig tillräcklig och älskad
                även om du inte
                presterar. Dessutom kommer du få en kopia av vårt affärssystem för produktivitet som
                är särskilt
                utformat för stressade företagare.
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
                I detta program utvecklar vi ditt företag till att bli framgångsrikt,
                ekonomiskt stabilt och trivsamt. Här får du grundläggande
                kunskaper i allt från bokföring till marknadsföring och
                försäljning. Huvudfokus kommer vara på produktivitet, fullständig klarhet i
                exakt vad du ska göra härnäst och att skapa rutiner för att du varje dag ska ta
                ett steg närmare företaget du vill ha. Programmet passar både för
                heltidsföretagare och för dig som nyligen kommit igång och fortfarande har en
                anställning.
            </p>
        </Card>
        <Card
                altText="Illustration av man iklädd slips med händerna korsade framför kroppen. Bakom mannen står två personer till. Alla ser nöjda ut."
                heading="Tidsfrihet"
                imgUrl="/images/leadership.png"
                secondary
        >
            <p>Det absolut viktigaste pengar kan köpa är tid. I detta program kommer du lära dig hur
                du tjänar mer och jobbar mindre genom att anställa personal så att du kan tjäna
                pengar även när du inte jobbar. Du kommer lära dig hur du strukturerar företagets
                processer, får rätt person på rätt plats och ser till att alla får gjort det de ska.
                Programmet passar både dig som precis ska ta in din första anställda och dig som
                redan har flera anställda. Efter detta program kommer du ha lärt dig att delegera
                så att du kan fokusera på det du är allra bäst på. </p>
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

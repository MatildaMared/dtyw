<script>
  import { onMount } from 'svelte';
  import Button from "$lib/button/Button.svelte";
  import AboutMarkus from "$lib/homepage/about-markus/AboutMarkus.svelte";
  import Testimonials from "$lib/homepage/testimonials/Testimonials.svelte";
  import testimonials from "../../data/testimonials";
  
  let thriveCartContainer;
  let isLoading = true;
  
  onMount(() => {
    // Lägg till ThriveCart script dynamiskt med preload
    const script = document.createElement('script');
    script.src = '//tinder.thrivecart.com/embed/v2/thrivecart.js';
    script.id = 'tc-dothingsyourway-31-4AZ3ER';
    script.async = true;
    
    // Lägg till preload link för snabbare laddning
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.href = '//tinder.thrivecart.com/embed/v2/thrivecart.js';
    preloadLink.as = 'script';
    document.head.appendChild(preloadLink);
    
    // Lägg till script
    document.head.appendChild(script);
    
    // Sätt loading till false efter en kort delay
    setTimeout(() => {
      isLoading = false;
    }, 2000);
  });
  
  function orderNow() {
    // Öppna checkout-sidan i ny flik
    window.open('https://dothingsyourway.thrivecart.com/31/', '_blank');
  }
</script>

<svelte:head>
  <title>Sluta Offra Din Hälsa För Ditt Företag</title>
  <meta
    content="Lär dig bygga ett framgångsrikt företag utan att bränna ut dig. Metod från utbränd till framgångsrik företagare."
    name="description"
  />
</svelte:head>

<div class="hero">
  <h1>Sluta Offra Din Hälsa<br />För Ditt Företag</h1>
  <h2>Lär dig bygga ett framgångsrikt företag utan att bränna ut dig</h2>
  <p>
    "Jag drömmer om frihet och eget företag, men är så stressad och trött att jag knappt orkar med min nuvarande vardag. Hur ska jag någonsin hinna bygga något eget?"
  </p>
  <button class="cta-btn" on:click={orderNow}>BESTÄLL NU - Bara 197kr</button>
  <div style="color:#64748b; font-size:1.05rem; margin-top:0.5rem;">
    ✅ Omedelbar nedladdning &nbsp;|&nbsp; 60 dagars pengarna-tillbaka-garanti &nbsp;|&nbsp; Alla bonusar inkluderade
  </div>
</div>

<div class="thrivecart-embed-section">
  {#if isLoading}
    <div class="loading-placeholder">
      <div class="loading-spinner"></div>
      <p>Laddar köpformulär...</p>
    </div>
  {/if}
  <div bind:this={thriveCartContainer} class="tc-v2-embeddable-target" data-thrivecart-account="dothingsyourway" data-thrivecart-tpl="v2" data-thrivecart-product="31" data-thrivecart-embeddable="tc-dothingsyourway-31-4AZ3ER"></div>
</div>

<div class="section">
  <h3>Känner Du Igen Dig?</h3>
  <ul class="bullets">
    <li><span class="emoji">🔥</span> <span>Du Bränner På Båda Ändar<br /><small>Heltidsjobb, familj, och ändå denna brinnande längtan att starta något eget. Du ligger vaken på nätterna och tänker på drömmen, men har knappt energi att komma ur sängen på morgonen.</small></span></li>
    <li><span class="emoji">⏰</span> <span>Tiden Rinner Iväg<br /><small>Alla säger "du måste bara hitta tiden", men varje kväll när barnen äntligen somnat känns det som att du inte har en enda krona kvar på energikontot. Netflix vinner över företagsdrömmen, igen.</small></span></li>
    <li><span class="emoji">🎭</span> <span>Du Spelar Stark<br /><small>Utåt verkar allt okej, men inuti kämpar du med stress, självtvivel och känslan av att inte räcka till. "Kanske är inte företagande för mig", tänker du ibland.</small></span></li>
    <li><span class="emoji">🔄</span> <span>Du Kör I Cirklar<br /><small>Du läser böcker, lyssnar på podcasts, följer framgångsrika företagare på Instagram. Men ingenting händer. Du vet vad du "borde" göra, men får det inte gjort.</small></span></li>
  </ul>
  <p style="font-weight:600; color:#1e293b; margin-bottom:0.5rem;">Du är inte lat. Du är inte svag. Du har bara aldrig lärt dig rätt metod.</p>
</div>

<div class="section">
  <h3>Det Finns En Väg Framåt</h3>
  <ul class="bullets">
    <li><span class="emoji">✨</span> <span><b>Förvandla Stress Till Superkraft</b><br /><small>Lär dig det vetenskapligt bevisade sättet att använda stress som raketbränsle istället för att låta den förstöra dig. Upptäck varför vissa blomstrar under press medan andra går sönder.</small></span></li>
    <li><span class="emoji">⚡</span> <span><b>Hitta Energi Du Aldrig Visste Du Hade</b><br /><small>Få tillgång till den oändliga energikällan inom dig. Lär dig skillnaden mellan fysisk trötthet och mental utmattning - och hur du laddar båda.</small></span></li>
    <li><span class="emoji">🎯</span> <span><b>Skapa Tid Som Aldrig Funnits</b><br /><small>Upptäck enkla system som gör att du får mer gjort på 1 timme än du tidigare fick gjort på en hel dag. Slut på att känna att du aldrig hinner.</small></span></li>
    <li><span class="emoji">💎</span> <span><b>Bygga Äkta Självförtroende</b><br /><small>Slipp känslan av att inte vara "tillräckligt bra". Lär dig se ditt verkliga värde och våga ta betalt för det du är värd - både som anställd och företagare.</small></span></li>
  </ul>
</div>

<div class="section">
  <Testimonials />
</div>

<div class="section">
  <h3>Den Beprövade 3-Stegs Processen</h3>
  <div class="process-steps">
    <div class="process-step">
      <div class="process-number">1</div>
      <div class="process-content">
        <h4>Skapa Klarhet</h4>
        <p>Upptäck var du verkligen står och vart du ska. Hitta ditt kraftfulla VARFÖR som bär dig genom alla motgångar. Slut på att gissa - du får en klar färdplan framåt.</p>
      </div>
    </div>
    <div class="process-step">
      <div class="process-number">2</div>
      <div class="process-content">
        <h4>Hitta Kraften</h4>
        <p>Lär dig hur stress KAN vara bra för dig. Bygga äkta självkänsla. Få tillgång till den oändliga energin inom dig. Detta är skillnaden mellan att överleva och blomstra.</p>
      </div>
    </div>
    <div class="process-step">
      <div class="process-number">3</div>
      <div class="process-content">
        <h4>Ta Kommandot</h4>
        <p>Skapa system som funkar även när livet blir rörigt. Lär dig få ut det mesta av din tid och hålla riktningen mot dina mål. Från kaos till kontroll.</p>
      </div>
    </div>
  </div>
</div>

<div class="section">
  <AboutMarkus />
</div>

<div class="section">
  <h3>🎁 Bonusmaterial Värt 2,997kr (Ingår Gratis)</h3>
  <ul class="bonus-list">
    <li>Vision Blueprint Arbetsbok <span class="bonus-value">(497kr)</span> – Steg-för-steg mall för att skapa din tydliga företagsvision</li>
    <li>Notion Produktivitetsystem <span class="bonus-value">(797kr)</span> – Det exakta systemet Markus använder för att hantera allt i sitt företag</li>
    <li>5-Minuters Stress-Transformation Meditation <span class="bonus-value">(297kr)</span> – Ljudguide som hjälper dig förvandla stress till energi</li>
    <li>Energi-Audit Checklista <span class="bonus-value">(397kr)</span> – Upptäck exakt vad som dränerar din energi och hur du stoppar det</li>
    <li>30-Dagars Habit Tracker <span class="bonus-value">(197kr)</span> – Praktiskt verktyg för att bygga vanor som stöder ditt företagande</li>
    <li>E-postserien "Från Dröm Till Verklighet" <span class="bonus-value">(812kr)</span> – 12 veckor med motivation och praktiska tips direkt i din inkorg</li>
  </ul>
  <div class="guarantee">
    💯 <b>100% Nöjd-Eller-Pengarna-Tillbaka Garanti</b><br />
    Jag är så övertygad om att denna bok kommer förändra ditt liv att jag erbjuder en fullständig återbetalning inom 60 dagar om du inte är helt nöjd. Ingen krångel, inga konstiga frågor.<br /><br />
    Du riskerar absolut ingenting – förutom att fortsätta leva som du gör nu.
  </div>
  <div style="color:#b91c1c; font-weight:600; margin-bottom:1rem;">
    ⏰ Begränsat Erbjudande: Bonusmaterialet värt 2,997kr ingår endast för de första 500 köparna. När de är slut höjer vi priset till ordinarie 497kr.
  </div>
  <div style="color:#1e293b; font-size:1.08rem; margin-bottom:1.5rem;">
    Dröj inte – din framtid väntar inte på dig.
  </div>
</div>

<div class="thrivecart-section">
  <div class="checkout-embed">
    <h3>Köp Boken Nu</h3>
    <p>Få omedelbar tillgång till allt material och börja din resa mot frihet redan idag!</p>
    <Button onClick={orderNow}>BESTÄLL NU - Bara 197kr</Button>
    <div class="checkout-benefits">
      ✅ Omedelbar nedladdning &nbsp;|&nbsp; 60 dagars pengarna-tillbaka-garanti &nbsp;|&nbsp; Alla bonusar inkluderade
    </div>
  </div>
</div>

<div class="footer">
  © 2025 Markus Mattsson. Alla rättigheter förbehållna.<br />
  Din resa mot frihet börjar nu.
</div>

<style>
  .hero {
    background: linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%);
    padding: 3rem 1.5rem 2rem 1.5rem;
    text-align: center;
    border-radius: 1.5rem;
    margin-bottom: 2.5rem;
    box-shadow: 0 4px 32px 0 rgba(0,0,0,0.07);
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
  .hero h1 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
    color: #1e293b;
    line-height: 1.1;
  }
  .hero h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #475569;
    margin-bottom: 1.5rem;
  }
  .hero p {
    font-size: 1.15rem;
    color: #334155;
    margin-bottom: 2rem;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  .cta-btn {
    background: linear-gradient(90deg, #fbbf24 0%, #f59e42 100%);
    color: #1e293b;
    font-weight: 700;
    font-size: 1.25rem;
    padding: 1rem 2.5rem;
    border: none;
    border-radius: 999px;
    cursor: pointer;
    box-shadow: 0 2px 12px 0 rgba(251,191,36,0.15);
    transition: background 0.2s;
    margin-bottom: 0.5rem;
  }
  .cta-btn:hover {
    background: linear-gradient(90deg, #f59e42 0%, #fbbf24 100%);
  }
  .section {
    max-width: 700px;
    margin: 2.5rem auto;
    background: #fff;
    border-radius: 1.25rem;
    box-shadow: 0 2px 16px 0 rgba(30,41,59,0.06);
    padding: 2.5rem 1.5rem;
  }
  .section h3 {
    font-size: 1.35rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 1.25rem;
  }
  .bullets {
    margin-bottom: 2rem;
  }
  .bullets li {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    font-size: 1.08rem;
    margin-bottom: 1.1rem;
    color: #334155;
  }
  .bullets span.emoji {
    font-size: 1.5rem;
    flex-shrink: 0;
    margin-top: 0.1em;
  }
  .testimonial {
    background: #f1f5f9;
    border-left: 4px solid #fbbf24;
    padding: 1.5rem 1.25rem;
    border-radius: 1rem;
    font-style: italic;
    color: #334155;
    margin: 2rem 0;
    position: relative;
  }
  .testimonial:before {
    content: "“";
    font-size: 2.5rem;
    color: #fbbf24;
    position: absolute;
    left: 1rem;
    top: 0.5rem;
    font-family: serif;
  }
  .testimonial-footer {
    margin-top: 1rem;
    font-weight: 600;
    color: #64748b;
    font-style: normal;
    font-size: 1rem;
  }
  .process-steps {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  .process-step {
    display: flex;
    align-items: flex-start;
    gap: 1.25rem;
  }
  .process-number {
    background: #fbbf24;
    color: #fff;
    font-weight: 700;
    font-size: 1.25rem;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 2px 8px 0 rgba(251,191,36,0.10);
  }
  .process-content h4 {
    margin: 0 0 0.25rem 0;
    font-size: 1.1rem;
    font-weight: 700;
    color: #1e293b;
  }
  .process-content p {
    margin: 0;
    color: #334155;
    font-size: 1rem;
  }
  .author-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    margin-bottom: 2rem;
  }
  .author-img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #fbbf24;
    box-shadow: 0 2px 8px 0 rgba(251,191,36,0.10);
  }
  .author-bio {
    text-align: center;
    color: #334155;
    font-size: 1.08rem;
    max-width: 420px;
  }
  .bonus-list {
    margin: 1.5rem 0 2rem 0;
    padding: 0;
    list-style: none;
  }
  .bonus-list li {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    margin-bottom: 1rem;
    font-size: 1.05rem;
    color: #334155;
  }
  .bonus-list .bonus-value {
    color: #f59e42;
    font-weight: 600;
    margin-left: 0.5rem;
    font-size: 1rem;
  }
  .guarantee {
    background: #fef9c3;
    border-radius: 1rem;
    padding: 1.5rem 1.25rem;
    color: #92400e;
    font-size: 1.08rem;
    margin-bottom: 2rem;
    border: 1.5px solid #fde68a;
    text-align: center;
  }
  .price-section {
    text-align: center;
    margin: 2.5rem 0 1.5rem 0;
  }
  .price-old {
    text-decoration: line-through;
    color: #64748b;
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
  }
  .price-new {
    font-size: 2.2rem;
    font-weight: 800;
    color: #f59e42;
    margin-bottom: 0.5rem;
  }
  .price-bonus {
    color: #16a34a;
    font-size: 1.1rem;
    margin-bottom: 1.25rem;
  }
  .order-benefits {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    color: #334155;
    font-size: 1.05rem;
    align-items: center;
  }
  .thrivecart-embed-section {
    margin: 2rem auto;
    max-width: 700px;
    text-align: center;
    padding: 0 1rem;
    min-height: 200px;
  }

  .loading-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 1rem;
    background: #f8fafc;
    border-radius: 16px;
    border: 2px dashed #cbd5e1;
  }

  .loading-spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #e2e8f0;
    border-top: 4px solid #3b82f6;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 1rem;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .loading-placeholder p {
    color: #64748b;
    font-size: 1rem;
    margin: 0;
  }

  .thrivecart-section {
    margin: 2rem auto;
    max-width: 700px;
    text-align: center;
  }

  .checkout-embed {
    background: #f8fafc;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 4px 16px 0 rgba(30,41,59,0.06);
  }

  .checkout-embed h3 {
    font-size: 1.35rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 1rem;
  }

  .checkout-embed p {
    color: #334155;
    margin-bottom: 1.5rem;
  }

  .checkout-benefits {
    color: #64748b;
    font-size: 1rem;
    margin-top: 1rem;
  }

  .footer {
    text-align: center;
    color: #64748b;
    font-size: 0.98rem;
    margin: 2.5rem 0 1rem 0;
  }
  @media (min-width: 700px) {
    .hero, .section {
      padding: 3.5rem 3rem;
    }
    .process-steps {
      flex-direction: row;
      gap: 2.5rem;
    }
    .process-step {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 0.75rem;
      flex: 1;
    }
    .process-content {
      min-height: 120px;
    }
    .author-section {
      flex-direction: row;
      align-items: center;
      text-align: left;
      gap: 2rem;
    }
    .author-bio {
      text-align: left;
    }
  }
</style>

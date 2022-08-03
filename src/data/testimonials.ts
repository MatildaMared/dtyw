interface Testimonial {
	id: string;
	name: string;
	image: string;
	text: string;
}

const testimonials: Testimonial[] = [
	{
		id: "F205E8EB-DD3F-40D0-9173-D9CF63A314BB",
		name: "Lisa Möller",
		image: "/images/testimonials/lisa_moller.jpeg",
		text: 'Kursen Stressfrihet har gett mig många insikter, inspiration och verktyg att tänka i nya banor och ifrågasätta "sanningar" om mig själv och omvärlden. Både föreläsningarna, gruppcoachningarna, övningarna och det digitala verktyget har varit hjälpsamt på vägen mot förändring. Markus är dessutom en lyhörd och generös coach och kursledare som verkligen brinner för att genuint hjälpa andra och sprida sin kunskap och sina erfarenheter! Tack för en kurs som gett mig verktyg för livet! ⭐️🙏'
	},
	{
		id: "44A2D286-053A-4954-84C0-3373F34F7EC8",
		name: "Katja Tuovila",
		image: "/images/testimonials/katja_tuovila.jpeg",
		text: "Kursen Stressfrihet har varit riktigt bra! 🌟 fantastiskt! ❤️ Lärt mig en hel del, fått nya insikter/sätt verktyg i varje del man går igenom som man alltid kommer ha med sig för livet! Kursen har betytt väldigt mycket för mig av flera anledningar! ❤️ Det har hjälpt mig enormt! Känner mig starkare, modigare m.m. Tacksam att jag fick chansen att vara med och tackade ja trots lite nervositet inför det nya! Kan absolut rekommendera till andra att gå! Ger väldigt mycket och som man har nytta av för alltid! ❤️"
	},
	{
		id: "E56F117E-1831-416F-B2E7-DB9073E999CA",
		name: "Ulrica Nilsson",
		image: "/images/testimonials/ulrica_nilsson.jpeg",
		text: "Jag har varit med på Markus kurs i stressfrihet och kan varmt rekommendera den. Markus förklarar efter egen erfarenhet och på ett grymt proffsigt och ödmjukt sätt hur du kan förhålla dig till stress. Jag är så tacksam för Markus som givit mig så mycket klarhet och ett lugn. Kursen är uppbyggd på ett konkret och mycket väl genomtänkt koncept. Ge dig själv gott om tid med kursen när du väljer DIG för att du är så värdefull."
	}
];

export default testimonials;

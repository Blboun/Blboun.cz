 var datum = new Date(); // aktuální datum
var denVTydnu = new Array("Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var retezec = "Run: "; // postupně se k němu budou přičítat další řetězce
retezec += denVTydnu[datum.getDay()] + ", "; // Den v týdnu
retezec += datum.getDate() + ". "; // Den v měsíci
retezec += (1 + datum.getMonth()) + ". "; // Měsíce jsou číslovány od nuly
retezec += datum.getFullYear() + ". "; // Rok ve formátu 0000
retezec += "Time: " + datum.getHours() + ":"; // Hodiny
retezec += datum.getMinutes(); // Minuty
// retezec += ":" + datum.getSeconds(); // Sekundy
retezec += "."; // Tečka za větou
console.log( retezec ); // Výpis řetězce do dokumentu
  

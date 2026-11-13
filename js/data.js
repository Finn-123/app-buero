/* ===== INHALTE – hier Texte, Produkte, Angebote und Zeiten austauschen =====
   Produktbilder: Ordner assets/img/produkte/ (Dateiname = Feld "img", Endung .svg; für JPG die Endung in app.js bei pic() ändern)
   Bürobilder:    Ordner assets/img/buero/ (Pfade unten bei GALLERY)                                                  */
const COMPANY="BÜRO AUSSTATTUNG BRÜGGERT GmbH";
const CATS=[
 {id:"bueromoebel",n:"Büromöbel",i:"chair"},{id:"it",n:"Bürotechnik & IT",i:"monitor"},{id:"bedarf",n:"Büro- und Schulbedarf",i:"pen"},
 {id:"tinte",n:"Tinte & Toner",i:"drop"},{id:"kreativ",n:"Kreativ & Basteln",i:"brush"},{id:"homeoffice",n:"Homeoffice",i:"home"},
 {id:"hygiene",n:"Hygieneartikel",i:"spray"},{id:"angebote",n:"Angebote",i:"tag"},{id:"marken",n:"Marken",i:"star"}];
const PRODUCTS=[
 {c:"bueromoebel",img:"stuhl",n:"Bürostuhl Muster A",d:"Ergonomischer Drehstuhl mit Lordosenstütze."},
 {c:"bueromoebel",img:"tisch",n:"Schreibtisch Muster B",d:"Höhenverstellbar, weiße Platte."},
 {c:"bueromoebel",img:"schrank",n:"Aktenschrank Muster C",d:"Abschließbar, 4 Ordnerhöhen."},
 {c:"it",img:"monitor",n:"Monitor Muster 27\"",d:"Full-HD Display mit schlankem Rahmen."},
 {c:"it",img:"drucker",n:"Drucker Muster Laser",d:"Kompakter Laserdrucker für das Büro."},
 {c:"it",img:"tastatur",n:"Tastatur Muster Slim",d:"Kabellos, leiser Anschlag."},
 {c:"bedarf",img:"papier",n:"Kopierpapier Muster",d:"80 g/m², weiß, 500 Blatt."},
 {c:"bedarf",img:"schreibset",n:"Schreibset Muster",d:"Kugelschreiber und Marker im Set."},
 {c:"tinte",img:"toner",n:"Toner Muster Schwarz",d:"Hohe Reichweite, kompatibel."},
 {c:"tinte",img:"patronen",n:"Druckerpatronen Muster",d:"Farbset mit vier Patronen."},
 {c:"kreativ",img:"basteln",n:"Bastelset Muster",d:"Farben, Pinsel und Papier."},
 {c:"homeoffice",img:"laptopstaender",n:"Laptopständer Muster",d:"Faltbar, aus Aluminium."},
 {c:"homeoffice",img:"lampe",n:"Schreibtischlampe Muster",d:"LED, dimmbar."},
 {c:"hygiene",img:"seife",n:"Handseife Muster",d:"Milde Seife im Spender."},
 {c:"hygiene",img:"tuecher",n:"Desinfektionstücher Muster",d:"Praktische Spenderbox."}];
const OFFERS=[
 {img:"stuhl",n:"Bürostuhl Muster A",t:"Angebot",d:"Aktion – Preis folgt"},{img:"monitor",n:"Monitor Muster 27\"",t:"Neu",d:"Aktion – Preis folgt"},
 {img:"papier",n:"Kopierpapier Muster",t:"Angebot",d:"Aktion – Preis folgt"},{img:"toner",n:"Toner Muster Schwarz",t:"Angebot",d:"Aktion – Preis folgt"},
 {img:"tisch",n:"Schreibtisch Muster B",t:"Beliebt",d:"Aktion – Preis folgt"}];
const POPULAR=["Bürostühle","Schreibtische","Monitore","Drucker","Papier","Toner"];
const BRANDS=["Marke A","Marke B","Marke C","Marke D","Marke E","Marke F"];
const HOURS=[["Montag","09:00 – 17:00"],["Dienstag","09:00 – 17:00"],["Mittwoch","09:00 – 17:00"],["Donnerstag","09:00 – 17:00"],["Freitag","09:00 – 16:00"],["Samstag","Geschlossen"],["Sonntag","Geschlossen"]];
const GALLERY=[
 {src:"assets/img/buero/arbeitsplatz.svg",t:"Der perfekte Arbeitsplatz",d:"Möbel und Technik, die zusammenpassen."},
 {src:"assets/img/buero/besprechung.svg",t:"Raum für Besprechungen",d:"Ausstattung für Teams jeder Größe."},
 {src:"assets/img/buero/ordnung.svg",t:"Ordnung im Büro",d:"Archivieren, sortieren, Überblick behalten."}];

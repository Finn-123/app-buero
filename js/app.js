/* ===== Icons ===== */
const P={chair:'<path d="M7 3h10v8H7zM5 11h14M12 11v7M8 21l4-3 4 3"/>',monitor:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',pen:'<path d="M4 20l1-4L16 5l3 3L8 19zM14 7l3 3"/>',drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',brush:'<path d="M20 4l-8 8M9 13a3 3 0 0 0-3 3c0 2-1 3-2 4 3 1 8 0 8-4a3 3 0 0 0-3-3z"/>',home:'<path d="M4 11l8-7 8 7M6 10v10h12V10"/>',spray:'<path d="M9 8h6v12H9zM10 8V5h4v3M16 4h3M16 6h3"/>',tag:'<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',house:'<path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10"/>',menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',pin:'<path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',ret:'<path d="M9 14L4 9l5-5M4 9h10a6 6 0 0 1 0 12h-3"/>',doc:'<path d="M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6"/>',box:'<path d="M3 8l9-5 9 5v8l-9 5-9-5zM3 8l9 5 9-5M12 13v8"/>',chev:'<path d="M9 6l6 6-6 6"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>'};
const ic=n=>`<svg class="i" viewBox="0 0 24 24">${P[n]}</svg>`;
const ph=n=>`<div class="im"><svg viewBox="0 0 24 24">${P[n]}</svg></div>`;
const pic=(f,a)=>`<div class="im"><img src="assets/img/produkte/${f}.svg" alt="${esc(a)}" loading="lazy"></div>`;
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const store={get:(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}},set:(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{}}};
function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("on");setTimeout(()=>t.classList.remove("on"),2200)}
/* ===== Menü ===== */
$("#bg").innerHTML+=""; $("#sb").innerHTML=ic("search");
function buildNav(){
 const it=(h,i,t)=>`<a class="ni" href="${h}">${ic(i)}${t}</a>`;
 $("#nav").innerHTML=`${it("#/","house","Startseite")}<button class="ni" id="pm">${ic("box")}Produkte<span class="chev">${ic("chev")}</span></button>
 <div class="sub"><div>${CATS.map(c=>`<a href="#/kategorie/${c.id}">${ic(c.i)}${c.n}</a>`).join("")}</div></div>
 ${it("#/angebote","tag","Angebote")}${it("#/kontakt","phone","Kontakt")}${it("#/oeffnungszeiten","clock","Öffnungszeiten")}${it("#/widerruf","ret","Widerruf und Rücksendung")}${it("#/impressum","doc","Impressum")}`;
 $("#pm").onclick=e=>e.currentTarget.classList.toggle("sub-open");
}
const setMenu=o=>document.body.classList.toggle("open",o);
$("#bg").onclick=()=>setMenu(!document.body.classList.contains("open"));
$("#scrim").onclick=()=>setMenu(false);
$("#nav").addEventListener("click",e=>{if(e.target.closest("a"))setMenu(false)});
/* ===== Seiten ===== */
const card=p=>`<div class="card">${pic(p.img,p.n)}<div class="b"><h3>${esc(p.n)}</h3><p>${esc(p.d)}</p></div></div>`;
const head=(e,t,l)=>`<div class="eyebrow">${e}</div><h1>${t}</h1>${l?`<p class="lead">${l}</p>`:""}`;
const slider=()=>{const o=OFFERS.map(x=>`<div class="of">${pic(x.img,x.n)}<div class="b"><span class="tag">${x.t}</span><h3>${esc(x.n)}</h3><p>${x.d}</p></div></div>`).join("");return `<div class="sl"><button class="ar l" data-d="-1" aria-label="Zurück">${ic("chev")}</button><div class="mq" id="mq"><div class="tr">${o}${o}${o}</div></div><button class="ar r" data-d="1" aria-label="Weiter">${ic("chev")}</button></div>`};
const note='<div class="note">Platzhalter – diese Angaben sind nur Beispiele und müssen vor Veröffentlichung durch echte, rechtlich geprüfte Angaben ersetzt werden.</div>';
const P_=t=>`<span class="ph">[${t}]</span>`;
const ROUTES={
 "":()=>`<div class="hero"><div class="eyebrow">Willkommen</div><h1>${COMPANY}</h1><p class="lead">Alles für Ihr Büro – übersichtlich, modern und an einem Ort.</p><a class="btn" href="#/produkte">Produkte entdecken ${ic("arrow")}</a></div>
 <section><div class="row"><h2>Aktuelle Angebote</h2><a href="#/angebote">Alle</a></div>${slider()}</section>
 <section><h2>Kategorien</h2><div class="cats">${CATS.map(c=>`<a class="cat" href="#/kategorie/${c.id}">${ic(c.i)}${c.n}</a>`).join("")}</div></section>
 <section><h2>Beliebte Produktbereiche</h2><div class="chips" style="flex-wrap:wrap;margin:0;padding:0">${POPULAR.map(p=>`<a class="chip" href="#/produkte?q=${encodeURIComponent(p)}">${p}</a>`).join("")}</div></section>
 <section class="g"><h2>Einblicke</h2><p class="lead" style="margin-bottom:16px">Moderne Arbeitswelten – Beispielbilder.</p>${GALLERY.map(g=>`<figure class="gal"><img src="${g.src}" alt="${g.t}" loading="lazy"><figcaption><b>${g.t}</b>${g.d}</figcaption></figure>`).join("")}</section>
 <section><div class="promo"><span class="tag">Platzhalter</span><h3 style="color:var(--t)">Hier erscheint Ihre nächste Werbeaktion</h3><p style="font-size:14px">Bild, Titel und Link später austauschbar.</p></div></section>`,
 produkte:q=>{const s=(q.get("q")||"").toLowerCase();const l=PRODUCTS.filter(p=>!s||(p.n+p.d).toLowerCase().includes(s.replace(/e?n?$/,"")));
  return head("Sortiment","Produkte")+`<div style="margin-top:14px"><input type="search" id="sq" placeholder="Produkte suchen…" value="${esc(q.get("q")||"")}"></div><div class="chips" style="margin-top:14px">${CATS.map(c=>`<a class="chip" href="#/kategorie/${c.id}">${c.n}</a>`).join("")}</div><div class="grid">${l.map(card).join("")||'<p class="lead">Keine Treffer.</p>'}</div>`},
 angebote:()=>head("Aktionen","Angebote","Musterangebote – Preise folgen.")+`<section>${slider()}</section><section><div class="grid">${OFFERS.map(x=>`<div class="card">${pic(x.img,x.n)}<div class="b"><span class="tag">${x.t}</span><h3>${esc(x.n)}</h3><p>${x.d}</p></div></div>`).join("")}</div></section>`,
 kontakt:()=>head("Wir helfen gern","Kontakt")+note+`<div class="list"><div class="li">${ic("pin")}<div>Adresse<small>${P_("Straße Nr., PLZ Ort")}</small></div></div><a class="li" href="tel:">${ic("phone")}<div>Telefon<small>${P_("+49 000 000000")}</small></div></a><a class="li" href="mailto:">${ic("mail")}<div>E-Mail<small>${P_("info@beispiel.de")}</small></div></a></div>`,
 oeffnungszeiten:()=>{const d=(new Date().getDay()+6)%7;return head("Besuchen Sie uns","Öffnungszeiten")+note+`<div class="list">${HOURS.map((h,i)=>`<div class="li ${i===d?"today":""}"><b>${h[0]}</b><span class="r">${h[1]}</span></div>`).join("")}</div>`},
 impressum:()=>head("Rechtliches","Impressum")+note+`<div class="doc"><h3>Angaben gemäß § 5 DDG</h3><p>${COMPANY}<br>${P_("Anschrift")}</p><h3>Vertreten durch</h3><p>Geschäftsführer: ${P_("Name")}</p><h3>Kontakt</h3><p>Telefon: ${P_("Nummer")}<br>E-Mail: ${P_("Adresse")}</p><h3>Handelsregister</h3><p>${P_("Registergericht, HRB-Nummer")}</p><h3>Umsatzsteuer-ID</h3><p>${P_("DE000000000")}</p></div>`,
 widerruf:()=>head("Rechtliches","Widerruf und Rücksendung")+note+`<div class="doc"><h3>Widerrufsrecht</h3><p>${P_("Musterstruktur: Hinweise zum Widerrufsrecht, Frist und Ausübung")}</p><h3>Folgen des Widerrufs</h3><p>${P_("Rückzahlung, Kosten, Wertersatz")}</p><h3>Rücksendung</h3><p>Rücksendeadresse: ${P_("Adresse")}<br>${P_("Ablauf und Verpackungshinweise")}</p><h3>Muster-Widerrufsformular</h3><p>${P_("Formular einfügen")}</p></div>`,
 agb:()=>head("Rechtliches","AGB")+note+`<div class="doc"><h3>1. Geltungsbereich</h3><p>${P_("Muster-Text")}</p><h3>2. Vertragsschluss</h3><p>${P_("Muster-Text")}</p><h3>3. Preise und Zahlung</h3><p>${P_("Muster-Text")}</p><h3>4. Lieferung</h3><p>${P_("Muster-Text")}</p></div>`,
 datenschutz:()=>head("Rechtliches","Datenschutz")+note+`<div class="doc"><h3>Verantwortlicher</h3><p>${COMPANY}, ${P_("Anschrift")}</p><h3>Datenverarbeitung</h3><p>${P_("Muster-Text zu Daten, Zwecken, Rechten")}</p><h3>Cookies</h3><p>Sie können Ihre Auswahl jederzeit im Footer unter „Cookie-Einstellungen“ ändern.</p></div>`,
 anmelden:()=>authView()
};
function catPage(id){const c=CATS.find(x=>x.id===id);if(!c)return ROUTES[""]();
 let body;if(id==="angebote")return ROUTES.angebote();
 if(id==="marken")body=`<div class="grid">${BRANDS.map(b=>`<div class="card">${ph("star")}<div class="b"><h3>${b}</h3><p>Platzhalter</p></div></div>`).join("")}</div>`;
 else{const l=PRODUCTS.filter(p=>p.c===id);body=`<div class="grid">${l.map(card).join("")}</div>`}
 return head("Kategorie",c.n)+`<div style="margin-top:18px">${body}</div>`}
/* ===== Anmeldung (DEMO) ===== */
let mode="in";
function authView(){const u=store.get("bb_user",null);
 if(u)return head("Konto","Hallo, "+esc(u))+`<p class="lead">Demo-Anmeldung aktiv.</p><button class="btn s" id="lo">Abmelden</button>`;
 return head("Konto",mode==="in"?"Anmelden":"Registrieren")+`<div class="note" style="margin-top:14px">Demo-Anmeldung: Es gibt noch kein Backend. Zugangsdaten werden nicht geprüft oder sicher gespeichert; Passwörter werden nie abgelegt.</div>
 <div class="seg"><button class="${mode==="in"?"on":""}" data-m="in">Anmelden</button><button class="${mode==="reg"?"on":""}" data-m="reg">Registrieren</button></div>
 <form id="af" novalidate><label>Benutzername</label><input type="text" name="u" autocomplete="username"><div class="err" data-e="u"></div>
 ${mode==="reg"?`<label>E-Mail-Adresse</label><input type="email" name="e" autocomplete="email"><div class="err" data-e="e"></div><label>Umsatzsteuer-ID</label><input type="text" name="v" placeholder="DE123456789" autocapitalize="characters"><div class="err" data-e="v"></div>`:""}
 <label>Passwort</label><input type="password" name="p" autocomplete="${mode==="in"?"current-password":"new-password"}"><div class="err" data-e="p"></div>
 ${mode==="reg"?`<label>Passwort wiederholen</label><input type="password" name="p2" autocomplete="new-password"><div class="err" data-e="p2"></div>`:""}
 <button class="btn w" type="submit">${mode==="in"?"Anmelden":"Registrieren"}</button></form>`}
function bindAuth(){
 $$("[data-m]").forEach(b=>b.onclick=()=>{mode=b.dataset.m;render()});
 const lo=$("#lo");if(lo)lo.onclick=()=>{store.set("bb_user",null);upd();render();toast("Abgemeldet")};
 const f=$("#af");if(!f)return;
 f.onsubmit=e=>{e.preventDefault();const v=Object.fromEntries(new FormData(f));const er={};
  if(!v.u?.trim())er.u="Bitte Benutzernamen eingeben.";
  if(!v.p)er.p="Bitte Passwort eingeben.";
  if(mode==="reg"){
   if(!v.e?.trim())er.e="Bitte E-Mail eingeben.";else if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.e))er.e="Ungültiges E-Mail-Format.";
   const vat=(v.v||"").replace(/\s/g,"").toUpperCase();
   if(!vat)er.v="Bitte Umsatzsteuer-ID eingeben.";else if(!/^([A-Z]{2}[A-Z0-9]{8,12})$/.test(vat)||(vat.startsWith("DE")&&!/^DE\d{9}$/.test(vat)))er.v="Ungültiges Format (z. B. DE123456789).";
   if(v.p&&v.p.length<8)er.p="Mindestens 8 Zeichen.";
   if(!v.p2)er.p2="Bitte Passwort wiederholen.";else if(v.p!==v.p2)er.p2="Passwörter stimmen nicht überein."}
  $$(".err").forEach(x=>x.textContent=er[x.dataset.e]||"");
  if(Object.keys(er).length)return;
  store.set("bb_user",v.u.trim());upd();toast(mode==="in"?"Demo-Anmeldung erfolgreich":"Demo-Registrierung erfolgreich");location.hash="#/"};
}
function upd(){const u=store.get("bb_user",null);$("#lg").textContent=u?u.slice(0,10):"Anmelden"}
$("#lg").onclick=()=>location.hash="#/anmelden";
/* ===== Router ===== */
function render(){const [path,qs]=location.hash.replace(/^#\/?/,"").split("?");const q=new URLSearchParams(qs||"");const [r,id]=path.split("/");
 $("#app").innerHTML=r==="kategorie"?catPage(id):(ROUTES[r]||ROUTES[""])(q);
 $$("#nav .ni").forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#/"+r));
 window.scrollTo(0,0);bindAuth();reveal();initSlider();
 const sq=$("#sq");if(sq)sq.oninput=()=>{history.replaceState(null,"","#/produkte?q="+encodeURIComponent(sq.value));const p=new URLSearchParams(location.hash.split("?")[1]);const s=sq.value.toLowerCase();$(".grid").innerHTML=PRODUCTS.filter(x=>!s||(x.n+x.d).toLowerCase().includes(s)).map(card).join("")||'<p class="lead">Keine Treffer.</p>'};
}
$("#sb").onclick=()=>{location.hash="#/produkte";setTimeout(()=>$("#sq")?.focus(),100)};
addEventListener("hashchange",()=>{render()});
/* ===== Cookies ===== */
function sheet(h){const o=$("#ov");o.innerHTML=`<div class="sheet">${h}</div>`;o.classList.add("on")}
const closeSheet=()=>$("#ov").classList.remove("on");
function save(c){store.set("bb_cookies",{...c,necessary:true,ts:Date.now()});closeSheet();toast("Auswahl gespeichert")}
function cookieMain(){sheet(`<h2>Cookies & Datenschutz</h2><p style="font-size:14px;color:var(--t2)">Wir nutzen notwendige Cookies für den Betrieb der App. Optionale Cookies setzen wir nur mit Ihrer Zustimmung.</p>
 <button class="btn w" id="ca">Alle akzeptieren</button><button class="btn s w" id="cr">Optionale ablehnen</button><button class="btn s w" id="cs" style="border:0;color:var(--p)">Einstellungen anpassen</button>`);
 $("#ca").onclick=()=>save({analytics:true,marketing:true});$("#cr").onclick=()=>save({analytics:false,marketing:false});$("#cs").onclick=cookieSet}
function cookieSet(){const c=store.get("bb_cookies",{analytics:false,marketing:false});
 const t=(k,n,d,lock)=>`<div class="tg"><div><b>${n}</b><small>${d}</small></div><button class="sw ${c[k]||lock?"on":""} ${lock?"lock":""}" data-k="${k}" role="switch"></button></div>`;
 sheet(`<h2>Cookie-Einstellungen</h2>${t("necessary","Notwendig","Immer aktiv, für den Betrieb erforderlich",1)}${t("analytics","Statistik","Hilft uns, die App zu verbessern")}${t("marketing","Marketing","Personalisierte Inhalte")}
 <button class="btn w" id="sv">Auswahl speichern</button><button class="btn s w" id="cl">Abbrechen</button>`);
 $$(".sw").forEach(b=>b.onclick=()=>{b.classList.toggle("on");c[b.dataset.k]=b.classList.contains("on")});
 $("#sv").onclick=()=>save(c);$("#cl").onclick=()=>{closeSheet();if(!store.get("bb_cookies",null))cookieMain()}}
$("#ck").onclick=cookieSet;
/* ===== Effekte ===== */
function reveal(){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.1,rootMargin:"0px 0px -6% 0px"});
 $$("#app section:not(.g), #app .card, #app .cat, #app .li, #app .gal").forEach((el,i)=>{el.classList.add("rv");el.style.transitionDelay=(i%3)*80+"ms";io.observe(el)})}
function initSlider(){const m=$("#mq");if(!m)return;const u=()=>m.scrollWidth/3;let pos=u(),hold=false,t;m.scrollLeft=pos;
 const pause=ms=>{hold=true;clearTimeout(t);t=setTimeout(()=>hold=false,ms)};
 ["touchstart","pointerdown","wheel"].forEach(ev=>m.addEventListener(ev,()=>pause(2500),{passive:true}));
 m.addEventListener("mouseenter",()=>{hold=true});m.addEventListener("mouseleave",()=>{hold=false});
 $$(".ar").forEach(b=>b.onclick=()=>{pause(3000);m.scrollBy({left:b.dataset.d*250,behavior:"smooth"})});
 const slow=matchMedia("(prefers-reduced-motion:reduce)").matches;
 (function loop(){if(!m.isConnected)return;
  if(Math.abs(m.scrollLeft-pos)>2)pos=m.scrollLeft;
  if(!hold&&!slow){pos+=.5;m.scrollLeft=pos}
  if(m.scrollLeft>=2*u()){m.scrollLeft-=u();pos=m.scrollLeft}else if(m.scrollLeft<=1){m.scrollLeft+=u();pos=m.scrollLeft}
  requestAnimationFrame(loop)})()}
/* ===== Start ===== */
buildNav();upd();render();
if(!store.get("bb_cookies",null))cookieMain();
if("serviceWorker" in navigator&&location.protocol.startsWith("http"))navigator.serviceWorker.register("sw.js").catch(()=>{});

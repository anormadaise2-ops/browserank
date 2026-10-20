const browsers = [
 {name:"Brave",maker:"Brave Software",logo:"B",color:"#e75a32",score:9.1,privacy:9.5,anonymity:5.5,speed:8.8,light:7.5,custom:8.3,point:"Blocage intégré des publicités et traqueurs",tags:["Confidentialité","Usage quotidien"],url:"https://brave.com/",urlLabel:"brave.com"},
 {name:"Mozilla Firefox",maker:"Mozilla",logo:"F",color:"#f26b38",score:8.8,privacy:9,anonymity:5.5,speed:8,light:7.8,custom:9.5,point:"Contrôle avancé et écosystème indépendant",tags:["Personnalisable","Open source"],url:"https://www.mozilla.org/firefox/",urlLabel:"mozilla.org"},
 {name:"Tor Browser",maker:"The Tor Project",logo:"T",color:"#7d6be8",score:8.7,privacy:9,anonymity:10,speed:5.5,light:6.8,custom:5.8,point:"Conçu pour renforcer l’anonymat en ligne",tags:["Anonymat","Réseau Tor"],url:"https://www.torproject.org/",urlLabel:"torproject.org"},
 {name:"Google Chrome",maker:"Google",logo:"C",color:"#4285f4",score:8.5,privacy:6.5,anonymity:4.5,speed:9,light:6.5,custom:9.3,point:"Compatibilité web et grand catalogue d’extensions",tags:["Compatibilité","Extensions"],url:"https://www.google.com/chrome/",urlLabel:"google.com/chrome"},
 {name:"Microsoft Edge",maker:"Microsoft",logo:"E",color:"#168f9e",score:8.2,privacy:7,anonymity:4.5,speed:8.8,light:7.2,custom:8.5,point:"Intégration Windows et outils de productivité",tags:["Windows","Productivité"],url:"https://www.microsoft.com/edge",urlLabel:"microsoft.com/edge"},
 {name:"Vivaldi",maker:"Vivaldi Technologies",logo:"V",color:"#b15ce0",score:8.1,privacy:7.5,anonymity:4.5,speed:7.7,light:6.2,custom:10,point:"Personnalisation poussée et gestion des onglets",tags:["Personnalisation","Outils intégrés"],url:"https://vivaldi.com/",urlLabel:"vivaldi.com"},
 {name:"Opera",maker:"Opera",logo:"O",color:"#e84d5b",score:7.8,privacy:6.8,anonymity:4.5,speed:8,light:6.8,custom:8.8,point:"Fonctions intégrées et interface riche",tags:["Fonctions intégrées","Interface"],url:"https://www.opera.com/",urlLabel:"opera.com"},
 {name:"Safari",maker:"Apple",logo:"S",color:"#398fdb",score:7.8,privacy:8,anonymity:4.8,speed:8.8,light:8.8,custom:6.8,point:"Intégration à l’écosystème Apple",tags:["Apple","Efficacité"],url:"https://www.apple.com/safari/",urlLabel:"apple.com/safari"},
 {name:"LibreWolf",maker:"Communauté LibreWolf",logo:"L",color:"#7c8caa",score:7.7,privacy:9.3,anonymity:6, speed:7.4,light:7.7,custom:8.2,point:"Configuration Firefox axée sur la vie privée",tags:["Vie privée","Communautaire"],url:"https://librewolf.net/",urlLabel:"librewolf.net"},
 {name:"DuckDuckGo Browser",maker:"DuckDuckGo",logo:"D",color:"#de7d3c",score:7.5,privacy:8.7,anonymity:5.3,speed:7.8,light:7.5,custom:6.5,point:"Protections de confidentialité simples à utiliser",tags:["Anti-pistage","Simplicité"],url:"https://duckduckgo.com/app",urlLabel:"duckduckgo.com/app"}
];
const list = document.getElementById("browser-list");
const search = document.getElementById("search");
const filter = document.getElementById("filter");
const filterKeys = {privacy:"privacy", anonymity:"anonymity", speed:"speed", light:"light", custom:"custom"};
function render(){
 const q = search.value.trim().toLowerCase();
 const f = filter.value;
 const results = browsers.filter(b => (b.name+" "+b.maker+" "+b.point+" "+b.tags.join(" ")).toLowerCase().includes(q));
 if(!results.length){list.innerHTML='<div class="empty">Aucun navigateur ne correspond à votre recherche.</div>';return;}
 const ordered = [...results].sort((a,b)=>f==="all"?b.score-a.score:f?b[filterKeys[f]]-a[filterKeys[f]]:b.score-a.score);
 list.innerHTML = ordered.map((b,i)=> {
  const shownScore = f==="all" ? b.score : b[filterKeys[f]];
  const scoreName = f==="all" ? "note globale indicative" : ({privacy:"confidentialité",anonymity:"anonymat",speed:"vitesse",light:"légèreté",custom:"personnalisation"}[f]);
  return `<article class="browser-row">
    <div class="browser-id"><span class="rank">${String(i+1).padStart(2,"0")}</span><span class="browser-logo" style="--logo:${b.color}">${b.logo}</span><div><div class="browser-name">${b.name}</div><div class="browser-maker">${b.maker}</div></div></div>
    <div class="best-for"><b>${b.point}</b><div class="tags">${b.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div></div>
    <div class="score"><div><strong>${shownScore.toFixed(1)}<small>/10</small></strong><div class="scorebar"><span style="width:${shownScore*10}%"></span></div><small>${scoreName}</small></div></div>
    <a class="official-link" href="${b.url}" target="_blank" rel="noopener noreferrer" aria-label="Site officiel de ${b.name}">${b.urlLabel} ↗</a>
  </article>`;
 }).join("");
}
search.addEventListener("input",render);filter.addEventListener("change",render);
document.getElementById("year").textContent = new Date().getFullYear();
render();

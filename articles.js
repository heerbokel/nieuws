let articles = [
  {
    id: 1,
    title: "Toetsweek Deep Dive",
    author: "Mathijs",
    date: "2025-11-23",
    content: `Stel je voor: Je zit in een lokaal, laten we 204 als voorbeeld nemen. Terwijl je daar zit, heb je een toets van een vak dat je hartstikke lastig vindt voor je liggen. ...`,
    image: "https://uploads.onecompiler.io/43n2tkfpz/445n297c6/Screenshot%202025-11-24%2018.54.08.png"
  },
  {
    id: 2,
    title: "Nog een artikel",
    author: "Ravi",
    date: "2025-11-22",
    content: "Dit is een testartikel voor de homepage van de schoolkrant.",
    image: ""
  }
];

// Hulpfunctie om afbeelding correct te tonen
function getArticleImage(article){
  if(!article.image) return "";
  const src = article.image.startsWith("http") ? article.image : "images/" + article.image;
  return `<img src="${src}" alt="Afbeelding artikel" class="article-img">`;
}

// Max 1000 artikelen
function addArticle(article){
  articles.push(article);
  if(articles.length>1000){
    articles.sort((a,b)=>a.id-b.id);
    articles.shift();
  }
}

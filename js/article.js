window.onload = function() {
    readFile('https://raw.githubusercontent.com/promo3Saint-Maur/files/master/articles.json', function(articles) {
        console.log(articles);
    // VOUS Y ETES PRESQUE !!!
    class Article {
        constructor(id,title, author, publishedDate, img, content, resumes) {
            this.id = id;
            this.title = title;
            this.author = author;
            this.publishedDate = publishedDate;
            this.img = img;
            this.content = content;
            this.resumes = resumes;
        }
        setId(newId) {this.id = newId}
        setTitle(newTitle) {this.title = newTitle};
        setAuthor(newAuthor) {this.author = newAuthor};
        setPublishedDate(newpublishedDate) {this.publishedDate = newpublishedDate};
        setImg(newImg) {this.img = newImg};
        setContent(newContent) {this.newContent = newContent};
        setResumes(newResumes) {this.resumes = newResumes};
        getTitle() {return this.title}
        getId() {return this.id}
    
    }
    // ------------- FINAL STEP -----------------
        // A PARTIR DU PARAMETRE 'ID' PRESENT DANS L'URL :
            // 1. Récupérer l'article correspondant à partir du fichier 'JSON'
            // 2. Utiliser les données pour instancier un nouvelle object 'Article'
            // 3. Inserer l'article dans la page 'article.html' sous la forme d'un element HTML
    function loadArticle() {
        var id = location.search.substring(4) - 1; 
        console.log(id);
        var newArticle = new Article(articles[id].id, articles[id].title, articles[id].author, articles[id].publishedDate, articles[id].img, articles[id].content, articles[id].resumes)
        console.log(newArticle);
        var articleBloc = document.createElement('article');
        articleBloc.setAttribute('data-id', newArticle.getId());
        articleBloc.setAttribute('class', 'a-bloc');
        var articleTitle = document.createElement('h2');
        articleTitle.setAttribute('class', 'a-title')
        articleTitle.innerText = newArticle.title;
        articleBloc.append(articleTitle);
        console.log(articleTitle.innerText);
        var articleAuthor = document.createElement('h3');
        articleAuthor.innerText = newArticle.author;
        articleAuthor.setAttribute('class', 'author');
        articleBloc.append(articleAuthor);
        var articlePublishedDate = document.createElement('h3');
        articlePublishedDate.innerText = newArticle.publishedDate;
        articlePublishedDate.setAttribute('class', 'publishedDate');
        articleBloc.append(articlePublishedDate);
        var articleImg = document.createElement('img');
        articleImg.setAttribute('src', newArticle.img);
        articleImg.setAttribute('class', 'a-img');
        articleBloc.append(articleImg);
        var articleContent = document.createElement('p');
        articleContent.innerText = newArticle.content;
        articleContent.setAttribute('class', 'content');
        articleBloc.append(articleContent);
        var articleResumes = document.createElement('p');
        articleResumes.innerText = newArticle.resumes;
        articleResumes.setAttribute('class', 'resumes');
        articleBloc.append(articleResumes);
        document.querySelector('section').appendChild(articleBloc);
        }
    loadArticle();
    // -- IMPORTANT --------------->
        // ---- comme vous pouvez le constater pour cette final step rien de bien nouveau, allons nous réecrire un code déjà fait ?
        // BIEN SUR QUE NON !
        // Il serait donc peut-etre jusdicieux d'organiser notre code en utilisant des fonctions dynamique réutilisable ;-)
    }
    )
}



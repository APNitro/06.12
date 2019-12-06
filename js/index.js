window.onload = function() {

    // --------------------- STEP 1 ---------------------
        // Par defaut le formulaire de connection est afficher, le formulaire d'inscription quand a lui est en 'display: none';
        // FAITE EN SORTE QUE AU CLICK SUR LES BUTTONS POSSEDANT LA CLASS 'square-button-empty'
            // DE MASQUER LE LOGIN FORM POUR AFFICHER LE REGISTER FORM, ET INVERSEMENT <->  

document.querySelectorAll('button.square-button-empty')[0].onclick = function() {
        document.getElementById('register-form').style.display = "flex";
        document.getElementById('connexion-form').style.display = "none";
}
document.querySelectorAll('button.square-button-empty')[1].onclick = function() {
        document.getElementById('register-form').style.display = "none";
        document.getElementById('connexion-form').style.display = "flex";
}




    // --------------------- STEP 2 ----------------------
        // maintenant que l'on peut afficher nos 2 formulaires l'intéret serait maintenant qu'ils fonctionnent ! pour cela :
        // FAITE EN SORTE QUE AU CLICK SUR LES BUTTONS POSSEDANT LA CLASS 'square-button' DE :
            //  1. récuperer la valeur de tout les champs de formulaires
            //  2. vérifier que le 'username' fait au moins 5 caracteres alphanumérique
            //  3. vérifier que le password fait au moins 8 caracteres et contient a minima une majuscule/minuscule ainsi qu'un entier (integer)
document.querySelectorAll('button.square-button')[0].onclick = function () {
    var logEmail = document.querySelectorAll('input.form-control')[0].value;
    var logPass = document.querySelectorAll('input.form-control')[1].value;
    console.log(logEmail);
    console.log(logPass);
    connexion(logEmail, logPass);
}
document.querySelectorAll('button.square-button')[1].onclick = function () {
    var signName = document.querySelectorAll('input.form-control')[2].value;
    var signEmail = document.querySelectorAll('input.form-control')[3].value;
    var signPass = document.querySelectorAll('input.form-control')[4].value;
    var signPassConfirm = document.querySelectorAll('input.form-control')[5].value;
    if ((signName.length > 4) & (signPass.length > 7) & (signPass.match(/[a-z]/i) != null) & (signPass.match(/[0-9]/) != null) & (signPass == signPassConfirm)) {
    console.log(signName);
    console.log(signEmail);
    console.log(signPass);
    console.log(signPassConfirm);
    newUserInst(signName, signEmail, signPass);
    }

}





    // --------------------- STEP 3 -------------------------
        // une fois nos saisies utilisateurs stocker dans des variables faite en sorte de :
        // A L'INSCRIPTION :

            // 1. le code commenter ci-dessous devras etre fonctionnelle (pour ça vous allez devoir déclarer une class 'User' -> POO Javascript)
                // cette classe devras avoir des les propriétés 'username', 'email', 'password' ainsi qu'une methode nommé 'getUsername' --->
                // --> qui devra retourner l'username de l'instance courante de 'User'
                class User {
                    constructor(username, email, password) {
                        this.username = username;
                        this.email = email;
                        this.password = password;
                    }
                    getUsername() {
                        return this.username;
                    }
                }
                function newUserInst(username, email, password) {
                var user = new User(username, email, password);
                console.log('Bonjour ' + user.getUsername() + ' !');
                localStorage.setItem('user', JSON.stringify(user));
                document.location.href="./home.html";
                }


            // 2. Modifier ensuite le code ci dessus pour qu'a l'instantation d'un nouvelle 'User' ---
            // --> on utilise les données saisie du formulaire d'inscription pour setup les propriétés notre nouvelle 'User'
            // puis on stocke ce nouvelle objet utilisateurs dans le 'localStorage' sous la clé 'user' en utilisant la method stringify de l'objet JSON




    // --------------------- STEP 4 -------------------------
        // une fois nos saisies utilisateurs stocker dans des variables faite en sorte de :
        // A LA CONNEXION :

            // 1. Vérifier l'existance dans le 'localStorage' de la clé 'user'
                // 1.1 Si la clé 'user' n'existe pas, retourner un message d'erreur a l'utilisateurs (Account do not exist, please register.)
                // 1.2 Si la clé existe, comparer les données saisie a celle présente dans le 'localStorage'
                    // 1.2.1 si l'email ou le mot de passe ne correspondent pas, retourner un message d'erreur (les alert() sont proscrit)

            // 2. Si les données saisies correspondent a celles présentes dans le 'localStorage', rediriger l'utilisateur sur la page 'home.html'
function connexion(email, password) {
    console.log(localStorage.getItem("user").length);
    if (localStorage.getItem("user").length > 0 ) {
        if ((email == JSON.parse(localStorage.getItem("user")).email) & (password == JSON.parse(localStorage.getItem("user")).password)) {
            document.location.href="./home.html";
        } else {
        document.getElementById('error').innerText = 'Wrong Email or Password';
        }
    }
     else {
        document.getElementById('error').innerText = 'Please register';
    }
}

}

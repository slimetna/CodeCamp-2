# ETNA

L'application permet d'automatiser l'émargement des élèves à partir de leurs cartes d'étudiants. Elle comprend également des fonctionnalités permettant d'améliorer le suivi des élèves.

## Fonctionnalités principales

- Émargement automatique des élèves à partir de leurs cartes d'étudiants
- Historique des émargements pour suivre les absences et les retards des élèves
- Possibilité de justifier ou de déjustifier une absence ou un retard
- Génération de PDF par promotion d'élève contenant une feuille de suivi pour chaque élève sur une période de 15 jours.
- Suivi des irrégularités des élèves par période de RUN.

## Technologies utilisées

- React Native pour le développement de l'application mobile
- ExpressJS pour le développement du backend
- Base de données MongoDB pour stocker les informations sur les élèves, leurs promotions et les historiques

## Installation

1. Clonez le repository.
2. Assurez-vous que Node.js et NPM sont installés sur votre ordinateur.
3. Installez les dépendances du frontend avec `npm install` dans le dossier `ETNA`.
4. Installez les dépendances du backend avec `npm install` dans le dossier `ETNA-API`.
5. Installez MongoDB.
6. Lancez le serveur backend en utilisant `npm run dev` dans le dossier `ETNA-API`.
7. Lancez l'application en utilisant `npx expo start` dans le dossier `ETNA`.

## Auteurs

- Théo AMBRAISSE
- Ethan BRUNET
- Yannis MANICORD
- Slim OURLISSENE
- Adam SALAMA

# Documentation de l'API

## Auth API

# /login

Endpoint: /login

HTTP Method: POST

Description:
Permet à un utilisateur de s'authentifier et de récupérer un token d'authentification.

Request Body:

- login (required): Le nom d'utilisateur de l'utilisateur.
- password (required): Le mot de passe de l'utilisateur.

Response:

- 200 OK: Renvoie un objet utilisateur avec les informations suivantes :
  - id: L'ID de l'utilisateur.
  - login: Le nom d'utilisateur de l'utilisateur.
  - email: L'adresse e-mail de l'utilisateur.
  - img: L'URL de l'image de profil de l'utilisateur.
  - logas: Le rôle de l'utilisateur.
  - isAdmin: Un indicateur qui indique si l'utilisateur est un administrateur.
  - groups: Les groupes auxquels appartient l'utilisateur.
  - login_date: La date de la connexion de l'utilisateur.
  - token: Le token d'authentification.
- 400 Bad Request: Si le nom d'utilisateur ou le mot de passe sont manquants ou incorrects.

Example Request:
POST /login
{
"login": "john",
"password": "password123"
}

Example Response:
HTTP/1.1 200 OK
Content-Type: application/json

{
"id": 123,
"login": "john",
"email": "john@example.com",
"img": "https://example.com/users/john/photo",
"logas": "user",
"isAdmin": false,
"groups": ["group1", "group2"],
"login_date": "2023-03-02T09:00:00Z",
"token": "authenticator=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}

/checkAuth

Endpoint: /checkAuth

HTTP Method: GET

Description:
Vérifie qu'un token d'authentification est valide.

Request Headers:

- Cookie (required): Le token d'authentification à vérifier.

Response:

- 200 OK: Renvoie un objet utilisateur avec les informations suivantes :
  - id: L'ID de l'utilisateur.
  - login: Le nom d'utilisateur de l'utilisateur.
  - email: L'adresse e-mail de l'utilisateur.
  - img: L'URL de l'image de profil de l'utilisateur.
  - logas: Le rôle de l'utilisateur.
  - isAdmin: Un indicateur qui indique si l'utilisateur est un administrateur.
  - groups: Les groupes auxquels appartient l'utilisateur.
  - login_date: La date de la connexion de l'utilisateur.
  - token: Le token d'authentification.
- 400 Bad Request: Si le token d'authentification est manquant ou incorrect.

# /getHistory

Endpoint: /getHistory

HTTP Method: GET

Description:
Récupère tous les enregistrements d'historique.

Response:

- 200 OK: Renvoie un tableau d'objets contenant les informations suivantes :
  - \_id: L'ID de l'enregistrement.
  - date: La date de l'enregistrement.
  - moment: Le moment de la journée (matin ou après-midi) de l'enregistrement.
  - activity: L'activité enregistrée.
- 400 Bad Request: Si aucun enregistrement d'historique n'a été trouvé.

Example Request:
GET /getHistory

Example Response:
HTTP/1.1 200 OK
Content-Type: application/json

[
{
"_id": "12345",
"date": "01/03/2023",
"moment": "matin",
"activity": "Lorem ipsum"
},
{
"_id": "54321",
"date": "01/03/2023",
"moment": "après-midi",
"activity": "Dolor sit amet"
}
]

/getHistory/:date

Endpoint: /getHistory/:date

HTTP Method: GET

Description:
Récupère l'enregistrement d'historique correspondant à une date donnée.

URL Parameters:

- date (required): La date de l'enregistrement à récupérer au format DD/MM/YYYY.

Response:

- 200 OK: Renvoie un objet contenant les informations suivantes :
  - \_id: L'ID de l'enregistrement.
  - date: La date de l'enregistrement.
  - moment: Le moment de la journée (matin ou après-midi) de l'enregistrement.
  - activity: L'activité enregistrée.
- 400 Bad Request: Si aucun enregistrement d'historique n'a été trouvé pour la date donnée.

Example Request:
GET /getHistory/01/03/2023

Example Response:
HTTP/1.1 200 OK
Content-Type: application/json

{
"\_id": "12345",
"date": "01/03/2023",
"moment": "matin",
"activity": "Lorem ipsum"
}

/createHistory

Endpoint: /createHistory

HTTP Method: POST

Description:
Crée un nouvel enregistrement d'historique.

Request Body:

- date (required): La date de l'enregistrement au format DD/MM/YYYY.
- moment (required): Le moment de la journée (matin ou après-midi) de l'enregistrement.
- activity (required): L'activité à enregistrer.

Response:

- 200 OK: Renvoie un objet contenant les informations suivantes :
  - \_id: L'ID de l'enregistrement.
  - date: La date de l'enregistrement.
  - moment: Le moment de la journée (matin ou après-midi) de l'enregistrement.
  - activity: L'activité enregistrée.
- 400 Bad Request: Si la date, le moment ou l'activité sont manquants ou invalides.

Example Request:
POST /createHistory
{
"date": "01/03/2023",
"moment": "matin",
"activity": "Lorem ipsum"
}

Response:

- 200 OK: Renvoie un objet contenant les informations de l'historique de l'utilisateur pour une date spécifique :
  - date: La date de l'historique.
  - moment: Le moment de l'historique ('matin' ou 'après-midi').
  - weight: Le poids enregistré pour cet historique.
  - calorieIntake: Le nombre de calories consommées pour cet historique.
  - calorieBurned: Le nombre de calories brûlées pour cet historique.
  - user: L'utilisateur à qui appartient cet historique (contient les mêmes informations que l'objet utilisateur renvoyé par /login).
- 400 Bad Request: Si la date est manquante ou incorrecte, ou si l'historique n'est pas trouvé.

Example Request:
GET /history/01-03-2023
Cookie: authenticator=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

Example Response:
HTTP/1.1 200 OK
Content-Type: application/json

{
"date": "01-03-2023",
"moment": "matin",
"weight": 70,
"calorieIntake": 2000,
"calorieBurned": 500,
"user": {
"id": 123,
"login": "john",
"email": "john@example.com",
"img": "https://example.com/users/john/photo",
"logas": "user",
"isAdmin": false,
"groups": ["group1", "group2"],
"login_date": "2023-03-01T09:00:00Z",
"token": "authenticator=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
}

# /trombi

La route "/" renvoie les données du trombinoscope de tous les étudiants. Elle nécessite un cookie authenticator valide pour pouvoir accéder à l'API de l'ETNA. Si le cookie n'est pas valide ou n'est pas présent, la route renverra une réponse avec un code d'état 400 et un message d'erreur.
Requête

    Méthode HTTP : GET
    URL : "https://localhost:3000/trombi"
    Paramètres :
        authenticator : Cookie valide permettant d'accéder à l'API de l'ETNA

Réponse

    Code d'état HTTP :
        200 - OK : la requête s'est déroulée avec succès et renvoie un tableau contenant toutes les données des étudiants.
        400 - Bad Request : le cookie authenticator n'est pas valide ou n'est pas présent.
    Corps de la réponse : un tableau d'objets JSON contenant les informations des étudiants. Chaque objet a les propriétés suivantes :
        id: l'identifiant unique de l'étudiant
        firstName: le prénom de l'étudiant
        lastName: le nom de l'étudiant
        pictureUrl: l'URL de la photo de profil de l'étudiant
        promo: la promotion à laquelle appartient l'étudiant
        location: la ville dans laquelle se trouve l'étudiant
        createdAt: la date de création du compte de l'étudiant au format ISO 8601
        updatedAt: la date de la dernière modification du compte de l'étudiant au format ISO 8601

Route "/:id"

La route "/:id" renvoie les données d'un étudiant spécifique. Elle nécessite un cookie authenticator valide pour pouvoir accéder à l'API de l'ETNA et l'identifiant unique de l'étudiant. Si le cookie n'est pas valide ou n'est pas présent, la route renverra une réponse avec un code d'état 400 et un message d'erreur. Si l'identifiant n'existe pas dans l'API, la route renverra une réponse avec un code d'état 401 et un message d'erreur.
Requête

    Méthode HTTP : GET
    URL : "https://localhost:3000/trombi/:id"
    Paramètres :
        authenticator : Cookie valide permettant d'accéder à l'API de l'ETNA
        id : L'identifiant unique de l'étudiant

Réponse

    Code d'état HTTP :
        200 - OK : la requête s'est déroulée avec succès et renvoie un objet JSON contenant les informations de l'étudiant spécifié.
        400 - Bad Request : le cookie authenticator n'est pas valide ou n'est pas présent.
        401 - Unauthorized : l'identifiant spécifié n'existe pas dans l'API de l'ETNA.
    Corps de la réponse : un objet JSON contenant les informations de l'étudiant. Cet objet a les mêmes propriétés que celui renvoyé par la route "/".

# /users

Voici la documentation mise à jour pour les deux endpoints :

Endpoint: /checkAuth

HTTP Method: GET

Description:
Vérifie qu'un token d'authentification est valide.

Request Headers:

    Cookie (required): Le token d'authentification à vérifier.

Response:

    200 OK: Renvoie un objet utilisateur avec les informations suivantes :
        id: L'ID de l'utilisateur.
        login: Le nom d'utilisateur de l'utilisateur.
        email: L'adresse e-mail de l'utilisateur.
        img: L'URL de l'image de profil de l'utilisateur.
        logas: Le rôle de l'utilisateur.
        isAdmin: Un indicateur qui indique si l'utilisateur est un administrateur.
        groups: Les groupes auxquels appartient l'utilisateur.
        login_date: La date de la connexion de l'utilisateur.
        token: Le token d'authentification.
    400 Bad Request: Si le token d'authentification est manquant ou incorrect.

Example Request:
GET /checkAuth
Cookie: <token d'authentification>

Example Response:
HTTP/1.1 200 OK
Content-Type: application/json

{
"id": "12345",
"login": "john_doe",
"email": "john.doe@example.com",
"img": "https://example.com/img/john_doe.jpg",
"logas": "user",
"isAdmin": false,
"groups": ["group1", "group2"],
"login_date": "2023-03-02T10:00:00.000Z",
"token": "<token d'authentification>"
}

Endpoint: /getHistory

HTTP Method: GET

Description:
Récupère tous les enregistrements d'historique.

Response:

    200 OK: Renvoie un tableau d'objets contenant les informations suivantes :
        _id: L'ID de l'enregistrement.
        date: La date de l'enregistrement.
        moment: Le moment de la journée (matin ou après-midi) de l'enregistrement.
        activity: L'activité enregistrée.
    400 Bad Request: Si aucun enregistrement d'historique n'a été trouvé.

Example Request:
GET /getHistory

Example Response:
HTTP/1.1 200 OK
Content-Type: application/json

[
{
"_id": "12345",
"date": "2023-03-01",
"moment": "matin",
"activity": "Lorem ipsum"
},
{
"_id": "54321",
"date": "2023-03-01",
"moment": "après-midi",
"activity": "Dolor sit amet"
}
]

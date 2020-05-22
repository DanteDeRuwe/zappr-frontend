# Zappr - Frontend Repo

> readme update: 22/05/2020

## Over het project

Zappr is een app om je favoriete TV series nooit uit het oog te verliezen!

Dit is de repository voor de frontend-code, gebruik makende van Angular 9 en de Apollo GraphQL client. De backend-code kan gevonden worden in [deze repo](https://github.com/Web-IV/1920-b1-be-dantederuwe-hogent).

Dit project is enkel voor educatieve doeleinden!

## Over mij

Dante De Ruwe - Student Toegepaste Informatica aan de Hogeschool Gent.

Vragen? [Stuur me een email](mailto:dante.deruwe@student.hogent.be) of [submit een issue](https://github.com/Web-IV/1920-b1-fe-dantederuwe-hogent/issues) op deze repository.

## De webapplicatie

> 💡 **Tip**: klik op de afbeeldingen om ze in volledige grootte te zien.
> 
[![](https://i.imgur.com/iJFQzvw.jpg)](https://i.imgur.com/iJFQzvw.jpg)

[![](https://i.imgur.com/pn4EWZd.jpg)](https://i.imgur.com/pn4EWZd.jpg)

[![](https://i.imgur.com/KyPes5C.png)](https://i.imgur.com/KyPes5C.png)

[![](https://i.imgur.com/G3ohxjF.png)](https://i.imgur.com/G3ohxjF.png)



### Features

#### Discover
Dit is de startpagina van de app. Hier kunt u series zien die vandaag en in de volgende 7 dagen uitgezonden worden.

Ook is bovenaan een [zoekbalk](https://i.imgur.com/bM3w0zb.jpg), waarmee u elke serie die u wenst kunt opzoeken.


#### Authenticatie
Naast het bladeren door series kunt u ook *een account maken* en hiermee inloggen om zo toegang te krijgen tot verdere features.

De registratie- en loginformulieren zijn voorzien van [validatie](https://i.imgur.com/FV31YsU.png), en geven ook de nodige [foutboodschappen van de server](https://i.imgur.com/hbKxws6.png) weer (email al in gebruik, wachtwoord onjuist, ...).

> De authenticatie werkt met JWT Bearer tokens. Deze wordt verkregen van de server, opgeslagen in localstorage, en via een interceptor steeds toegevoegd aan de http-headers van elk request.

#### Favorieten en watchlist
Wanneer je als gebruiker ingelogd bent, kunt u met de knoppen [series toevoegen aan uw favorieten en uw watchlist](https://i.imgur.com/egoTu7E.png). Deze komen dan terecht in uw favorieten en watchlist, die u kan bereiken via de navigatiebalk.

> Deze routes (`/favorites` en `/watchlist`) zijn afgeschermd met een auth-guard. Wanneer een niet-ingelogde gebruiker deze bezoekt, word die naar de login geredirect, en na succesvolle login terug naar deze route.


#### Andere
Er is een 404 page, *so that's something* ¯\\_(ツ)\_/¯

### Plannen voor de toekomst
In de backend is voorlopig nog meer mogelijk dan in de front-end. De bedoeling is toch zeker om dit project voort te zetten en features te implementeren zoals:

#### Series
- Comments en ratings plaatsen
- Afleveringen zien
- Acteurs en hun rollen zien (evt acteurs toevoegen aan favorieten)

#### Afleveringen
- Aflevering markeren als *gezien*
- Aflevering raten

#### Profiel
- Lijst zien van ratings die je hebt geplaatst
- Vrienden toevoegen en zien waar zij naar kijken?


### Structuur van de app

#### Modules

```
app
├─── series
└─── users
app-routing
graphql
```
#### Componenten
```
app (module en component)
├─── main-layout
├─── not-found
├─── profile
├─── series (module)
│    ├─── discover
│    ├─── favorite-series
│    ├─── series-action
│    ├─── series-actions
│    ├─── series-detail
│    ├─── series-search
│    ├─── series-showcase
│    └─── watchlist
└─── users (module)
     ├─── login
     └─── register
...
```

#### Services
```
app (module)
├─── interceptors (folder)
│    └───  auth-interceptor
├─── series (module)
│    └───  seriesdata.service
└─── users (module)
     └─── usersdata.service
...
```

#### Guards
```
app (module)
└─── users (module)
     └─── auth
...
```


#### Models
```
app (module)
├─── series (module)
│    └───  series.model
└─── users (module)
     └─── user.model
...
```


### Lijst van technologieën
- Angular
- Apollo Angular
- GraphQL
- RxJs
- ngBootstrap
- ngx-drag-scroll
- Bootstrap

## Met dank aan
> Voor zowel front- als backend
- De lectoren WEB4 voor de slides, codevoorbeelden, feedback en support
- [TVMaze API](https://www.tvmaze.com/api) voor de data
- [Stackoverflow](https://stackoverflow.com/), met in het bijzonder aan [dglozano](https://stackoverflow.com/users/10648865/dglozano), die antwoordde op [mijn vraag](https://stackoverflow.com/questions/60832540/ef-core-multiple-many-to-many-relationships-between-the-same-entities)
- De graphQL-dotnet [Github](https://github.com/graphql-dotnet/graphql-dotnet) en [docs](https://graphql-dotnet.github.io/), met in het bijzonder [deze issue-thread](https://github.com/graphql-dotnet/authorization/issues/63#issuecomment-553877731)
- De [Apollo-angular docs](https://www.apollographql.com/docs/angular/)
- De [ngx-drag-scroll npm library](https://ngx-drag-scroll.fanjin.io/)
- Talloze YouTubers
- Talloze andere blogs, fora, websites...




*PS: De naam Zappr komt van 'zapper' aka afstandsbediening aka zoals hier in West-Vlaanderen: "baksje"*

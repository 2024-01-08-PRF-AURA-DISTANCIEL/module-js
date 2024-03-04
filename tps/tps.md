**Exercice : Gestion de Liste de Technologies**

Vous disposez du code HTML suivant :

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cours Javascript</title>
  </head>
  <body>
    <h1>Welcome</h1>
    <p>This is the best Javascript DOM manipulation cours Ever.</p>
    <p>This cours will help you master the DOM API and become a DOM Ninja.</p>
    <h2>Topics</h2>
    <ul class="technos">
      <li class="frontend">HTML</li>
      <li class="frontend">CSS</li>
      <li class="frontend">Javascript</li>
      <li class="frontend">React.js & Redux</li>
      <li class="server-side">Node.js & Express</li>
      <li class="server-side">Nest.js</li>
      <li class="database">PostgreSQL</li>
      <li class="database">Mongo DB</li>
    </ul>
    <button id="add-tech">Ajouter</button>
    <script src="app.js"></script>
  </body>
</html>
```

Et du tableau `frameworks` contenant des technologies :

```javascript
const frameworks = [
  "Nest.js",
  "Spring",
  "Asp Dotnet Core",
  "Ruby On Rails",
  "Angular",
  "Symfony",
  "Laravel",
  "Dynamo",
];
```

Votre tâche consiste à réaliser les fonctionnalités suivantes :

1. À chaque clic sur le bouton "Ajouter", une technologie du tableau "frameworks" doit être ajoutée à la liste dans l'ordre. Si toutes les technologies ont été ajoutées, le bouton "Ajouter" doit être désactivé.

2. Lorsque toutes les technologies ont été ajoutées à la liste, le bouton "Réinitialiser" doit être activé. En cliquant sur le bouton "Réinitialiser", la liste doit être effacée,la liste initiale des technologie doit être réinitialisée, et le bouton "Ajouter" doit redevenir actif avec la possibilité de rajouter.

3. L'ajout des technologies doit se faire dans l'ordre du tableau "frameworks".

Assurez-vous de respecter les exigences spécifiées dans l'énoncé.

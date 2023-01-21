---
title: "Buttons"
---

<head>
    <link rel="stylesheet" href="/fr/HypeTML/0.9.0.css"/>
</head>

:::danger

Ce composant est toujours en développement, certaines fonctionnalités peuvent avoir un comportement inattendu, et certaines fonctionnalités peuvent ne pas être implémentées. Veuillez créer un problème sur [GitHub](https://github.com/dothtmlqc/hypetml/issues) si vous rencontrez des bogues ou si vous avez des suggestions. Merci!

:::

## Boutons

Les boutons sont utilisés pour déclencher des actions ou agir comme un lien.

## Exemples

Vous trouverez ci-dessous des exemples de tous les types de boutons.

### Défault

Voici un exemple de bouton par défaut. Ils sont utilisés pour les actions principales.

<button className="btn btn-primary my-1">Primaire</button>

```html
<button class="btn btn-primary">Primaire</button>
```

### Creux

Voici un exemple de bouton creux. Ils sont principalement utilisés pour des actions alternatives ou pour s'adapter à des arrière-plans sombres.

<button className="btn btn-hollow-primary my-1">Creux</button>

```html
<button class="btn btn-hollow-primary">Creux</button>
```

### Désactivé

Les boutons désactivés sont utilisés pour indiquer que l'action n'est pas actuellement disponible pour l'utilisateur.

<button className="btn btn-primary my-1 disabled" disabled>Désactivé</button>

```html
<button class="btn btn-primary disabled" disabled>Désactivé</button>
```

### Taille

Les boutons peuvent être petits, moyens ou grands.

<button className="btn btn-primary btn-sm my-1 mx-1">Petit</button>
<button className="btn btn-primary my-1 mx-1">Normal</button>
<button className="btn btn-primary btn-lg my-1 mx-1">Large</button>

```html
<button class="btn btn-primary btn-sm">Petit</button>
<button class="btn btn-primary">Normal</button>
<button class="btn btn-primary btn-lg">Large</button>
```

### Couleurs

Les boutons peuvent être de n'importe quelle couleur.

<button className="btn btn-standard my-1 mx-1">Standard</button>
<button className="btn btn-primary my-1 mx-1">Primaire</button>
<button className="btn btn-secondary my-1 mx-1">Secondaire</button>
<button className="btn btn-red my-1 mx-1">Rouge</button>
<button className="btn btn-orange my-1 mx-1">Orange</button>
<button className="btn btn-yellow my-1 mx-1">Jaune</button>
<button className="btn btn-green my-1 mx-1">Vert</button>
<button className="btn btn-teal my-1 mx-1">Turquoise</button>
<button className="btn btn-blue my-1 mx-1">Bleu</button>
<button className="btn btn-violet my-1 mx-1">Violet</button>
<button className="btn btn-magenta my-1 mx-1">Magenta</button>
<button className="btn btn-pink my-1 mx-1">Rose</button>
<button className="btn btn-brown my-1 mx-1">Marron</button>
<button className="btn btn-gray my-1 mx-1">Gris</button>
<button className="btn btn-black my-1 mx-1">Noir</button>

```html
<button class="btn btn-standard">Standard</button>
<button class="btn btn-primary">Primaire</button>
<button class="btn btn-secondary">Secondaire</button>
<button class="btn btn-red">Rouge</button>
<button class="btn btn-orange">Orange</button>
<button class="btn btn-yellow">Jaune</button>
<button class="btn btn-green">Vert</button>
<button class="btn btn-teal">Turquoise</button>
<button class="btn btn-blue">Bleu</button>
<button class="btn btn-violet">Violet</button>
<button class="btn btn-magenta">Magenta</button>
<button class="btn btn-pink">Rose</button>
<button class="btn btn-brown">Marron</button>
<button class="btn btn-gray">Gris</button>
<button class="btn btn-black">Noir</button>
```

#### Couleurs avec creux

<button className="btn btn-hollow-standard my-1 mx-1">Standard</button>
<button className="btn btn-hollow-primary my-1 mx-1">Primaire</button>
<button className="btn btn-hollow-secondary my-1 mx-1">Secondaire</button>
<button className="btn btn-hollow-red my-1 mx-1">Rouge</button>
<button className="btn btn-hollow-orange my-1 mx-1">Orange</button>
<button className="btn btn-hollow-yellow my-1 mx-1">Jaune</button>
<button className="btn btn-hollow-green my-1 mx-1">Vert</button>
<button className="btn btn-hollow-teal my-1 mx-1">Turquoise</button>
<button className="btn btn-hollow-blue my-1 mx-1">Bleu</button>
<button className="btn btn-hollow-violet my-1 mx-1">Violet</button>
<button className="btn btn-hollow-magenta my-1 mx-1">Magenta</button>
<button className="btn btn-hollow-pink my-1 mx-1">Rose</button>
<button className="btn btn-hollow-brown my-1 mx-1">Marron</button>
<button className="btn btn-hollow-gray my-1 mx-1">Gris</button>
<button className="btn btn-hollow-black my-1 mx-1">Noir</button>



```html
<button class="btn btn-hollow-standard">Standard</button>
<button class="btn btn-hollow-primary">Primaire</button>
<button class="btn btn-hollow-secondary">Secondaire</button>
<button class="btn btn-hollow-red">Rouge</button>
<button class="btn btn-hollow-orange">Orange</button>
<button class="btn btn-hollow-yellow">Jaune</button>
<button class="btn btn-hollow-green">Vert</button>
<button class="btn btn-hollow-teal">Turquoise</button>
<button class="btn btn-hollow-blue">Bleu</button>
<button class="btn btn-hollow-violet">Violet</button>
<button class="btn btn-hollow-magenta">Magenta</button>
<button class="btn btn-hollow-pink">Rose</button>
<button class="btn btn-hollow-brown">Marron</button>
<button class="btn btn-hollow-gray">Gris</button>
<button class="btn btn-hollow-black">Noir</button>
```

### Utilités

:::info

Plus d'utilités seront ajoutés dans une future mise à jour. Restez à l'écoute!

:::

Voici quelques boutons utilitaires.

<button className="btn btn-success my-1 mx-1">Succès</button>
<button className="btn btn-danger my-1 mx-1">Danger</button>

```html
<button class="btn btn-success">Succès</button>
<button class="btn btn-danger">Danger</button>
```

## Variants

### Monochrome

Cette variante est toujours grise mais au survol elle changera de couleur.

<button className="btn btn-hollow-primary mono my-1 mx-1">Primaire</button>
<button className="btn btn-hollow-secondary mono my-1 mx-1">Secondaire</button>
<button className="btn btn-hollow-red mono my-1 mx-1">Rouge</button>
<button className="btn btn-hollow-orange mono my-1 mx-1">Orange</button>
<button className="btn btn-hollow-yellow mono my-1 mx-1">Jaune</button>
<button className="btn btn-hollow-green mono my-1 mx-1">Vert</button>
<button className="btn btn-hollow-teal mono my-1 mx-1">Turquoise</button>
<button className="btn btn-hollow-blue mono my-1 mx-1">Bleu</button>
<button className="btn btn-hollow-violet mono my-1 mx-1">Violet</button>
<button className="btn btn-hollow-magenta mono my-1 mx-1">Magenta</button>
<button className="btn btn-hollow-pink mono my-1 mx-1">Rose</button>
<button className="btn btn-hollow-brown mono my-1 mx-1">Marron</button>
<button className="btn btn-hollow-gray mono my-1 mx-1">Gris</button>
<button className="btn btn-hollow-black mono my-1 mx-1">Noir</button>

```html
<button class="btn btn-hollow-primary mono">Primaire</button>
<button class="btn btn-hollow-secondary mono">Secondaire</button>
<button class="btn btn-hollow-red mono">Rouge</button>
<button class="btn btn-hollow-orange mono">Orange</button>
<button class="btn btn-hollow-yellow mono">Jaune</button>
<button class="btn btn-hollow-green mono">Vert</button>
<button class="btn btn-hollow-teal mono">Turquoise</button>
<button class="btn btn-hollow-blue mono">Bleu</button>
<button class="btn btn-hollow-violet mono">Violet</button>
<button class="btn btn-hollow-magenta mono">Magenta</button>
<button class="btn btn-hollow-pink mono">Rose</button>
<button class="btn btn-hollow-brown mono">Marron</button>
<button class="btn btn-hollow-gray mono">Gris</button>
<button class="btn btn-hollow-black mono">Noir</button>
```


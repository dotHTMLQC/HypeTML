---
title: "Barres de progression"
---

<head>
    <link rel="stylesheet" href="/fr/HypeTML/0.9.0.css"/>
</head>

:::danger

Ce composant est toujours en développement, certaines fonctionnalités peuvent avoir un comportement inattendu, et certaines fonctionnalités peuvent ne pas être implémentées. Veuillez créer un problème sur [GitHub](https://github.com/dothtmlqc/hypetml/issues) si vous rencontrez des bogues ou si vous avez des suggestions. Merci!

:::

# Barres de progression

Les barres de progression sont utilisées pour visualiser un pourcentage. Elles peuvent être utilisées par exemple pour montrer la progression d'un téléchargement ou la progression d'une tâche.

## Exemple

### Barre de progression primaire

<div className="progress my-2">
    <div className="progress-bar bg-primary" style={{width: "0%"}}></div>
</div>

<div className="progress my-2">
    <div className="progress-bar bg-primary" style={{width: "25%"}}>25%</div>
</div>

<div className="progress my-2">
    <div className="progress-bar bg-primary" style={{width: "50%"}}>50%</div>
</div>
<div className="progress my-2">
    <div className="progress-bar bg-primary" style={{width: "75%"}}>75%</div>
</div>
<div className="progress my-2">
    <div className="progress-bar bg-primary" style={{width: "100%"}}>100%</div>
</div>

```html
<div class="progress my-1">
    <div class="progress-bar bg-primary" style="width: 25%"></div>
</div>
<div class="progress my-1">
    <div class="progress-bar bg-primary" style="width: 50%"></div>
</div>
<div class="progress my-1">
    <div class="progress-bar bg-primary" style="width: 75%"></div>
</div>
<div class="progress my-1">
    <div class="progress-bar bg-primary" style="width: 100%"></div>
</div>
```

### Étiquette

Les barres de progression peuvent avoir une étiquette. L'étiquette peut être placée à gauche, à droite ou au centre.

<div className="progress my-2">
    <div className="progress-bar bg-primary" style={{width: "50%"}}>Ceci est une barre de progrès étiquetée!</div>
</div>

```html
<div class="progress my-1">
    <div class="progress-bar bg-primary" style="width: 50%">Ceci est une barre de progrès étiquetée!</div>
</div>
```

### Plusieurs barres de progression

Vous pouvez avoir plusieurs couleurs dans une barre de progression.

<div className="progress my-2">
    <div className="progress-bar bg-primary" style={{width: "25%"}}></div>
    <div className="progress-bar bg-secondary" style={{width: "25%"}}></div>
    <div className="progress-bar bg-red" style={{width: "25%"}}></div>
</div>

```html
<div class="progress my-1">
    <div class="progress-bar bg-primary" style="width: 25%"></div>
    <div class="progress-bar bg-secondary" style="width: 25%"></div>
    <div class="progress-bar bg-red" style="width: 25%"></div>
</div>
```



### Rayures

Les barres de progression peuvent être rayées. Cela ajoute un motif à la barre de progression.

<div className="progress my-2">
    <div className="progress-bar bg-primary striped" style={{width: "50%"}}></div>
</div>

```html
<div class="progress my-1">
    <div class="progress-bar bg-primary striped" style="width: 50%"></div>
</div>
```

### Animation

Les barres de progression peuvent être animées.

<div className="progress my-2">
    <div className="progress-bar bg-primary striped animated" style={{width: "50%"}}></div>
</div>

```html
<div class="progress my-1">
    <div class="progress-bar bg-primary striped animated" style="width: 50%"></div>
</div>
```

#### Vitesse de l'animation

Vous pouvez utiliser `animated-slow` ou `animated-fast` à la place de `animated` pour changer la vitesse de l'animation.

<div className="progress my-2">
    <div className="progress-bar bg-primary striped animated-slow" style={{width: "50%"}}>Lent</div>
</div>
<div className="progress my-2">
    <div className="progress-bar bg-primary striped animated" style={{width: "50%"}}>Normal</div>
</div>
<div className="progress my-2">
    <div className="progress-bar bg-primary striped animated-fast" style={{width: "50%"}}>Vite</div>
</div>

### Colors


Les barres de progression peuvent avoir différentes couleurs. Les couleurs suivantes sont disponibles: `primary`, `secondary`, `red`, `orange`, `yellow`, `green`, `teal`, `blue`, `violet`, `magenta`, `pink`, `brown`, `gray`, `black`.

<div className="progress my-2">
    <div className="progress-bar bg-primary" style={{width: "50%"}}></div>
</div>
<div className="progress my-2">
    <div className="progress-bar bg-secondary" style={{width: "50%"}}></div>
</div>
<div className="progress my-2">
    <div className="progress-bar bg-red" style={{width: "50%"}}></div>
</div>
<div className="progress my-2">
    <div className="progress-bar bg-orange" style={{width: "50%"}}></div>
</div>
<div className="progress my-2">
    <div className="progress-bar bg-yellow" style={{width: "50%"}}></div>
</div>
<div className="progress my-2">
    <div className="progress-bar bg-green" style={{width: "50%"}}></div>
</div>
<div className="progress my-2">
    <div className="progress-bar bg-teal" style={{width: "50%"}}></div>
</div>
<div className="progress my-2">
    <div className="progress-bar bg-blue" style={{width: "50%"}}></div>
</div>
<div className="progress my-2">
    <div className="progress-bar bg-violet" style={{width: "50%"}}></div>
</div>
<div className="progress my-2">
    <div className="progress-bar bg-magenta" style={{width: "50%"}}></div>
</div>
<div className="progress my-2">
    <div className="progress-bar bg-pink" style={{width: "50%"}}></div>
</div>
<div className="progress my-2">
    <div className="progress-bar bg-brown" style={{width: "50%"}}></div>
</div>
<div className="progress my-2">
    <div className="progress-bar bg-gray" style={{width: "50%"}}></div>
</div>
<div className="progress my-2">
    <div className="progress-bar bg-black" style={{width: "50%"}}></div>
</div>

    
```html
<div class="progress my-1">
    <div class="progress-bar bg-primary" style="width: 50%"></div>
</div>
<div class="progress my-1">
    <div class="progress-bar bg-secondary" style="width: 50%"></div>
</div>
<div class="progress my-1">
    <div class="progress-bar bg-red" style="width: 50%"></div>
</div>
<div class="progress my-1">
    <div class="progress-bar bg-orange" style="width: 50%"></div>
</div>
<div class="progress my-1">
    <div class="progress-bar bg-yellow" style="width: 50%"></div>
</div>
<div class="progress my-1">
    <div class="progress-bar bg-green" style="width: 50%"></div>
</div>
<div class="progress my-1">
    <div class="progress-bar bg-teal" style="width: 50%"></div>
</div>
<div class="progress my-1">
    <div class="progress-bar bg-blue" style="width: 50%"></div>
</div>
<div class="progress my-1">
    <div class="progress-bar bg-violet" style="width: 50%"></div>
</div>
<div class="progress my-1">
    <div class="progress-bar bg-magenta" style="width: 50%"></div>
</div>
<div class="progress my-1">
    <div class="progress-bar bg-pink" style="width: 50%"></div>
</div>
<div class="progress my-1">
    <div class="progress-bar bg-brown" style="width: 50%"></div>
</div>
<div class="progress my-1">
    <div class="progress-bar bg-gray" style="width: 50%"></div>
</div>
<div class="progress my-1">
    <div class="progress-bar bg-black" style="width: 50%"></div>
</div>
```

### Utilités

:::info

Plus d'utilités seront ajoutés dans une future mise à jour. Restez à l'écoute!

:::

Voici quelques barres de progression d'utilité. Elles sont utiles pour afficher l'état d'une tâche.

<div className="progress my-2">
    <div className="progress-bar bg-success" style={{width: "25%"}}>25%</div>
</div>

<div className="progress my-2">
    <div className="progress-bar bg-danger" style={{width: "25%"}}>25%</div>
</div>

```html
<div class="progress my-1">
    <div class="progress-bar bg-success" style="width: 25%">25%</div>
</div>
<div class="progress my-1">
    <div class="progress-bar bg-danger" style="width: 25%">25%</div>
</div>
```
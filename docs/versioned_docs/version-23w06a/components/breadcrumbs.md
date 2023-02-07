---
title: "Breadcrumbs"
description: "Breadcrumbs are a navigation pattern that helps users understand where they are in the application."
tags: ["navigation", "breadcrumbs"]
---

<head>
    <link rel="stylesheet" href="/HypeTML/0.9.0.css"/>
</head>

:::danger

This component is still in development, some features may have unexpected behavior, and some features may not be implemented yet. Please create an issue on [GitHub](https://github.com/dothtmlqc/hypetml/issues) if you find any bugs or have any suggestions. Thank you!

:::

# Breadcrumbs

Breadcrumbs are a navigation pattern that helps users understand where they are in the application.

## Example

This is a basic breadcrumb. It is a list of links that are separated by a divider.

<nav>
    <ul className="breadcrumb">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <span className="divider"></span>
        <li className="breadcrumb-item"><a href="#">Library</a></li>
        <span className="divider"></span>
        <li className="breadcrumb-item active">Data</li>
    </ul>
</nav>

```html
<nav>
    <ul class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <span class="divider"></span>
        <li class="breadcrumb-item"><a href="#">Library</a></li>
        <span class="divider"></span>
        <li class="breadcrumb-item active">Data</li>
    </ul>
</nav>
```

## Dividers

You may chose to use a different divider than the default one.

Here is a list of all of them:

### Chevron

<nav>
    <ul className="breadcrumb">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <span className="divider divider-chevron"></span>
        <li className="breadcrumb-item"><a href="#">Library</a></li>
        <span className="divider divider-chevron"></span>
        <li className="breadcrumb-item active">Data</li>
    </ul>
</nav>

```html
<nav>
    <ul class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <span class="divider divider-chevron"></span>
        <li class="breadcrumb-item"><a href="#">Library</a></li>
        <span class="divider divider-chevron"></span>
        <li class="breadcrumb-item active">Data</li>
    </ul>
</nav>
```

### Arrow

<nav>
    <ul className="breadcrumb">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <span className="divider divider-arrow"></span>
        <li className="breadcrumb-item"><a href="#">Library</a></li>
        <span className="divider divider-arrow"></span>
        <li className="breadcrumb-item active">Data</li>
    </ul>
</nav>

```html
<nav>
    <ul class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <span class="divider divider-arrow"></span>
        <li class="breadcrumb-item"><a href="#">Library</a></li>
        <span class="divider divider-arrow"></span>
        <li class="breadcrumb-item active">Data</li>
    </ul>
</nav>
```

### Dash

<nav>
    <ul className="breadcrumb">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <span className="divider divider-dash"></span>
        <li className="breadcrumb-item"><a href="#">Library</a></li>
        <span className="divider divider-dash"></span>
        <li className="breadcrumb-item active">Data</li>
    </ul>
</nav>

```html
<nav>
    <ul class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <span class="divider divider-dash"></span>
        <li class="breadcrumb-item"><a href="#">Library</a></li>
        <span class="divider divider-dash"></span>
        <li class="breadcrumb-item active">Data</li>
    </ul>
</nav>
```

### Dot

<nav>
    <ul className="breadcrumb">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <span className="divider divider-dot"></span>
        <li className="breadcrumb-item"><a href="#">Library</a></li>
        <span className="divider divider-dot"></span>
        <li className="breadcrumb-item active">Data</li>
    </ul>
</nav>

```html
<nav>
    <ul class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <span class="divider divider-dot"></span>
        <li class="breadcrumb-item"><a href="#">Library</a></li>
        <span class="divider divider-dot"></span>
        <li class="breadcrumb-item active">Data</li>
    </ul>
</nav>
```

### Pipe

<nav>
    <ul className="breadcrumb">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <span className="divider divider-pipe"></span>
        <li className="breadcrumb-item"><a href="#">Library</a></li>
        <span className="divider divider-pipe"></span>
        <li className="breadcrumb-item active">Data</li>
    </ul>
</nav>

```html
<nav>
    <ul class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <span class="divider divider-pipe"></span>
        <li class="breadcrumb-item"><a href="#">Library</a></li>
        <span class="divider divider-pipe"></span>
        <li class="breadcrumb-item active">Data</li>
    </ul>
</nav>
```

### Backslash

<nav>
    <ul className="breadcrumb" className="breadcrumb">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <span className="divider divider-backslash"></span>
        <li className="breadcrumb-item"><a href="#">Library</a></li>
        <span className="divider divider-backslash"></span>
        <li className="breadcrumb-item active">Data</li>
    </ul>
</nav>

```html
<nav>
    <ul class="breadcrumb" className="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <span class="divider divider-backslash"></span>
        <li class="breadcrumb-item"><a href="#">Library</a></li>
        <span class="divider divider-backslash"></span>
        <li class="breadcrumb-item active">Data</li>
    </ul>
</nav>
```

## Customization

You may create your own divider class by following these steps: 

1. In your css file, create a new class with the name of your choice.

2. Use your class with the `::before` pseudo-element, then set the `content` property to the character you want to use as a divider.

3. (OPTIONAL) Use the `color` property to set the color of your divider.

4. You may add more properties to your class to customize it even more.

5. Add your class to the span element in your breadcrumb. Don't forget to add the `divider` class to it as well.

6. You're done!

It should look something like this:

```css title="custom-divider.css"
.custom-divider::before {
    content: "->";
}
```

```html title="index.html"
<nav>
    <ul className="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <span class="divider custom-divider"></span>
        <li class="breadcrumb-item"><a href="#">Library</a></li>
        <span class="divider custom-divider"></span>
        <li class="breadcrumb-item active">Data</li>
    </ul>
</nav>
```

## Accessibility

This component is a navigation element. You should consider using good navigation practices when using it. For example, you should use the `aria-current` attribute to indicate the current page and the `aria-label` attribute to provide a label for the navigation element. 

```html
<nav aria-label="breadcrumb">
    <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <li className="breadcrumb-item"><a href="#">Library</a></li>
        <li className="breadcrumb-item active" aria-current="page">Data</li>
    </ol>
</nav>
```

More information about accessibility can be found in the [W3C documentation](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/).

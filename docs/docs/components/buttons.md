---
title: "Buttons"
---

<head>
    <link rel="stylesheet" href="/HypeTML/0.9.0.css"/>
</head>

:::danger

This component is still in development, some features may have unexpected behavior, and some features may not be implemented yet. Please create an issue on [GitHub](https://github.com/dothtmlqc/hypetml/issues) if you find any bugs or have any suggestions. Thank you!

:::

## Buttons

Buttons are used to trigger actions or act as a link.

## Examples

You will find examples of all the different types of buttons below.

### Default

Here is an example of a default button.

<button className="btn btn-primary my-1">Primary</button>

```html
<button class="btn btn-primary">Primary</button>
```

### Hollow

Here is an example of a hollow button. They are mostly used for alternate actions or to look better on dark backgrounds.

<button className="btn btn-hollow-primary my-1">Hollow</button>

```html
<button class="btn btn-hollow-primary">Hollow</button>
```

### Disabled

Disabled buttons are used to indicate that the action is not currently available for the user.

<button className="btn btn-primary my-1 disabled" disabled>Disabled</button>

```html
<button class="btn btn-primary disabled" disabled>Disabled</button>
```

### Sizes

Buttons can be small, medium, or large.

<button className="btn btn-primary btn-sm my-1 mx-1">Small</button>
<button className="btn btn-primary my-1 mx-1">Medium</button>
<button className="btn btn-primary btn-lg my-1 mx-1">Large</button>

```html
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Medium</button>
<button class="btn btn-primary btn-lg">Large</button>
```

### Colors

Buttons can be any color.

<button className="btn btn-standard my-1 mx-1">Standard</button>
<button className="btn btn-primary my-1 mx-1">Primary</button>
<button className="btn btn-secondary my-1 mx-1">Secondary</button>
<button className="btn btn-red my-1 mx-1">Red</button>
<button className="btn btn-orange my-1 mx-1">Orange</button>
<button className="btn btn-yellow my-1 mx-1">Yellow</button>
<button className="btn btn-green my-1 mx-1">Green</button>
<button className="btn btn-teal my-1 mx-1">Teal</button>
<button className="btn btn-blue my-1 mx-1">Blue</button>
<button className="btn btn-violet my-1 mx-1">Violet</button>
<button className="btn btn-magenta my-1 mx-1">Magenta</button>
<button className="btn btn-pink my-1 mx-1">Pink</button>
<button className="btn btn-brown my-1 mx-1">Brown</button>
<button className="btn btn-gray my-1 mx-1">Gray</button>
<button className="btn btn-black my-1 mx-1">Black</button>

```html
<button class="btn btn-standard">Standard</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-red">Red</button>
<button class="btn btn-orange">Orange</button>
<button class="btn btn-yellow">Yellow</button>
<button class="btn btn-green">Green</button>
<button class="btn btn-teal">Teal</button>
<button class="btn btn-blue">Blue</button>
<button class="btn btn-violet">Violet</button>
<button class="btn btn-magenta">Magenta</button>
<button class="btn btn-pink">Pink</button>
<button class="btn btn-brown">Brown</button>
<button class="btn btn-gray">Gray</button>
<button class="btn btn-black">Black</button>
```

#### Colors with Hollow

<button className="btn btn-hollow-standard my-1 mx-1">Standard</button>
<button className="btn btn-hollow-primary my-1 mx-1">Primary</button>
<button className="btn btn-hollow-secondary my-1 mx-1">Secondary</button>
<button className="btn btn-hollow-red my-1 mx-1">Red</button>
<button className="btn btn-hollow-orange my-1 mx-1">Orange</button>
<button className="btn btn-hollow-yellow my-1 mx-1">Yellow</button>
<button className="btn btn-hollow-green my-1 mx-1">Green</button>
<button className="btn btn-hollow-teal my-1 mx-1">Teal</button>
<button className="btn btn-hollow-blue my-1 mx-1">Blue</button>
<button className="btn btn-hollow-violet my-1 mx-1">Violet</button>
<button className="btn btn-hollow-magenta my-1 mx-1">Magenta</button>
<button className="btn btn-hollow-pink my-1 mx-1">Pink</button>
<button className="btn btn-hollow-brown my-1 mx-1">Brown</button>
<button className="btn btn-hollow-gray my-1 mx-1">Gray</button>
<button className="btn btn-hollow-black my-1 mx-1">Black</button>

```html
<button class="btn btn-hollow-standard">Standard</button>
<button class="btn btn-hollow-primary">Primary</button>
<button class="btn btn-hollow-secondary">Secondary</button>
<button class="btn btn-hollow-red">Red</button>
<button class="btn btn-hollow-orange">Orange</button>
<button class="btn btn-hollow-yellow">Yellow</button>
<button class="btn btn-hollow-green">Green</button>
<button class="btn btn-hollow-teal">Teal</button>
<button class="btn btn-hollow-blue">Blue</button>
<button class="btn btn-hollow-violet">Violet</button>
<button class="btn btn-hollow-magenta">Magenta</button>
<button class="btn btn-hollow-pink">Pink</button>
<button class="btn btn-hollow-brown">Brown</button>
<button class="btn btn-hollow-gray">Gray</button>
<button class="btn btn-hollow-black">Black</button>

```

### Utilities

:::info

More Utilities will be added in a future update. Stay tuned!

:::

Here are some utility buttons.

<button className="btn btn-success my-1 mx-1">Success</button>
<button className="btn btn-danger my-1 mx-1">Danger</button>

```html
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
```

## Variants

### Monochrome

This variant is always gray but on hover it will change to the color of the button.

<button className="btn btn-hollow-primary mono my-1 mx-1">Primary</button>
<button className="btn btn-hollow-secondary mono my-1 mx-1">Secondary</button>
<button className="btn btn-hollow-red mono my-1 mx-1">Red</button>
<button className="btn btn-hollow-orange mono my-1 mx-1">Orange</button>
<button className="btn btn-hollow-yellow mono my-1 mx-1">Yellow</button>
<button className="btn btn-hollow-green mono my-1 mx-1">Green</button>
<button className="btn btn-hollow-teal mono my-1 mx-1">Teal</button>
<button className="btn btn-hollow-blue mono my-1 mx-1">Blue</button>
<button className="btn btn-hollow-violet mono my-1 mx-1">Violet</button>
<button className="btn btn-hollow-magenta mono my-1 mx-1">Magenta</button>
<button className="btn btn-hollow-pink mono my-1 mx-1">Pink</button>
<button className="btn btn-hollow-brown mono my-1 mx-1">Brown</button>
<button className="btn btn-hollow-gray mono my-1 mx-1">Gray</button>
<button className="btn btn-hollow-black mono my-1 mx-1">Black</button>

```html
<button class="btn btn-hollow-primary mono">Primary</button>
<button class="btn btn-hollow-secondary mono">Secondary</button>
<button class="btn btn-hollow-red mono">Red</button>
<button class="btn btn-hollow-orange mono">Orange</button>
<button class="btn btn-hollow-yellow mono">Yellow</button>
<button class="btn btn-hollow-green mono">Green</button>
<button class="btn btn-hollow-teal mono">Teal</button>
<button class="btn btn-hollow-blue mono">Blue</button>
<button class="btn btn-hollow-violet mono">Violet</button>
<button class="btn btn-hollow-magenta mono">Magenta</button>
<button class="btn btn-hollow-pink mono">Pink</button>
<button class="btn btn-hollow-brown mono">Brown</button>
<button class="btn btn-hollow-gray mono">Gray</button>
<button class="btn btn-hollow-black mono">Black</button>
```


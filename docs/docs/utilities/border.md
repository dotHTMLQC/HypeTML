---
title: "Border"
description: "Border is a utility class that adds a border to an element."
---

<head>
    <link rel="stylesheet" href="/HypeTML/0.9.0.css"/>
</head>

:::danger

This feature is in beta, and may have unexpected behavior. Please report any bugs to the [GitHub repository](https://github:com/dothtmlqc/hypetml/). Thank you!

:::

# Border

Border is a utility class that manages the border of an element.

## Sizes

Border sizes are controlled by the `border` class. The full syntax is this: `border-{size}`. The size must be between 0 and 5.

<div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <div style={{ height: '75px', width: '75px', display: 'flex', minWidth: '75px' }} className="m-3 bg-secondary border-1 border-red"></div>
    <div style={{ height: '75px', width: '75px', display: 'flex', minWidth: '75px' }} className="m-3 bg-secondary border-2 border-red"></div>
    <div style={{ height: '75px', width: '75px', display: 'flex', minWidth: '75px' }} className="m-3 bg-secondary border-3 border-red"></div>
    <div style={{ height: '75px', width: '75px', display: 'flex', minWidth: '75px' }} className="m-3 bg-secondary border-4 border-red"></div>
</div>

```html
<div class="border-1 border-red"></div>
<div class="border-2 border-red"></div>
<div class="border-3 border-red"></div>
<div class="border-4 border-red"></div>
```

## Shapes

Border shapes are controlled by the `rounded` class. The full syntax is this: `rounded-{shape}`. The shape can be either `circle` or `pill`.

<div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <div style={{ height: '75px', width: '75px', display: 'flex', minWidth: '75px', justifyContent: 'center', alignItems: 'center' }} className="m-3 bg-secondary rounded-circle">Circle</div>
    <div style={{ height: '75px', width: '75px', display: 'flex', minWidth: '150px', justifyContent: 'center', alignItems: 'center' }} className="m-3 bg-secondary rounded-pill">Pill</div>
</div>

```html
<div class="rounded-circle">Circle</div>
<div class="rounded-pill">Pill</div>
```

## Colors

The full syntax to change the border's color is this: `border-{color}`.

<div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <div style={{ height: '75px', width: '75px', display: 'flex', minWidth: '75px', justifyContent: 'center', alignItems: 'center' }} className="m-3 bg-secondary border-1 border-primary">Primary</div>
    <div style={{ height: '75px', width: '75px', display: 'flex', minWidth: '75px', justifyContent: 'center', alignItems: 'center' }} className="m-3 bg-secondary border-1 border-secondary">Secondary</div>
    <div style={{ height: '75px', width: '75px', display: 'flex', minWidth: '75px', justifyContent: 'center', alignItems: 'center' }} className="m-3 bg-secondary border-1 border-red">Red</div>
    <div style={{ height: '75px', width: '75px', display: 'flex', minWidth: '75px', justifyContent: 'center', alignItems: 'center' }} className="m-3 bg-secondary border-1 border-orange">Orange</div>
    <div style={{ height: '75px', width: '75px', display: 'flex', minWidth: '75px', justifyContent: 'center', alignItems: 'center' }} className="m-3 bg-secondary border-1 border-yellow">Yellow</div>
    <div style={{ height: '75px', width: '75px', display: 'flex', minWidth: '75px', justifyContent: 'center', alignItems: 'center' }} className="m-3 bg-secondary border-1 border-green">Green</div>
    <div style={{ height: '75px', width: '75px', display: 'flex', minWidth: '75px', justifyContent: 'center', alignItems: 'center' }} className="m-3 bg-secondary border-1 border-teal">Teal</div>
    <div style={{ height: '75px', width: '75px', display: 'flex', minWidth: '75px', justifyContent: 'center', alignItems: 'center' }} className="m-3 bg-secondary border-1 border-blue">Blue</div>
    <div style={{ height: '75px', width: '75px', display: 'flex', minWidth: '75px', justifyContent: 'center', alignItems: 'center' }} className="m-3 bg-secondary border-1 border-violet">Violet</div>
    <div style={{ height: '75px', width: '75px', display: 'flex', minWidth: '75px', justifyContent: 'center', alignItems: 'center' }} className="m-3 bg-secondary border-1 border-magenta">Magenta</div>
    <div style={{ height: '75px', width: '75px', display: 'flex', minWidth: '75px', justifyContent: 'center', alignItems: 'center' }} className="m-3 bg-secondary border-1 border-pink">Pink</div>
    <div style={{ height: '75px', width: '75px', display: 'flex', minWidth: '75px', justifyContent: 'center', alignItems: 'center' }} className="m-3 bg-secondary border-1 border-brown">Brown</div>
    <div style={{ height: '75px', width: '75px', display: 'flex', minWidth: '75px', justifyContent: 'center', alignItems: 'center' }} className="m-3 bg-secondary border-1 border-gray">Gray</div>
    <div style={{ height: '75px', width: '75px', display: 'flex', minWidth: '75px', justifyContent: 'center', alignItems: 'center' }} className="m-3 bg-secondary border-1 border-black">Black</div>
</div>

```html
<div class="border-1 border-primary">Primary</div>
<div class="border-1 border-secondary">Secondary</div>
<div class="border-1 border-red">Red</div>
<div class="border-1 border-orange">Orange</div>
<div class="border-1 border-yellow">Yellow</div>
<div class="border-1 border-green">Green</div>
<div class="border-1 border-teal">Teal</div>
<div class="border-1 border-blue">Blue</div>
<div class="border-1 border-violet">Violet</div>
<div class="border-1 border-magenta">Magenta</div>
<div class="border-1 border-pink">Pink</div>
<div class="border-1 border-brown">Brown</div>
<div class="border-1 border-gray">Gray</div>
<div class="border-1 border-black">Black</div>
```

## Utilities

There are some utilities available for borders.

<div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <div style={{ height: '75px', width: '75px', display: 'flex', minWidth: '75px', justifyContent: 'center', alignItems: 'center' }} className="m-3 bg-secondary border-1 border-success">Success</div>
    <div style={{ height: '75px', width: '75px', display: 'flex', minWidth: '75px', justifyContent: 'center', alignItems: 'center' }} className="m-3 bg-secondary border-1 border-danger">Danger</div>
</div>

```html
<div class="border-1 border-success">Success</div>
<div class="border-1 border-danger">Danger</div>
```

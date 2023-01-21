---
title: "Progress Bars"
---

<head>
    <link rel="stylesheet" href="/fr/HypeTML/0.9.0.css"/>
</head>

:::danger

This component is still in development, some features may have unexpected behavior, and some features may not be implemented yet. Please create an issue on [GitHub](https://github.com/dothtmlqc/hypetml/issues) if you find any bugs or have any suggestions. Thank you!

:::

# Progress Bars

Progress bars are used to visualize a percentage. They can be used for example to show the progress of a download, or the progress of a task.

## Example

### Primary Progress Bar

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

### Label

Progress bars can have a label. The label can be placed on the left, right, or centered.

<div className="progress my-2">
    <div className="progress-bar bg-primary" style={{width: "50%"}}>This is a labeled progress</div>
</div>

```html
<div class="progress my-1">
    <div class="progress-bar bg-primary" style="width: 50%">This is a labeled progress</div>
</div>
```

### Multiple Progresses

You can have multiple colors in one progress bar.

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



### Striped

Progress bars can be striped. This adds a striped pattern to the progress bar.

<div className="progress my-2">
    <div className="progress-bar bg-primary striped" style={{width: "50%"}}></div>
</div>

```html
<div class="progress my-1">
    <div class="progress-bar bg-primary striped" style="width: 50%"></div>
</div>
```

### Animated

Progress bars can be animated. This adds an animation to the progress bar.

<div className="progress my-2">
    <div className="progress-bar bg-primary striped animated" style={{width: "50%"}}></div>
</div>

```html
<div class="progress my-1">
    <div class="progress-bar bg-primary striped animated" style="width: 50%"></div>
</div>
```

#### Animation Speed

You may use `animated-slow` or `animated-fast` instead of `animated` to change the animation speed.

<div className="progress my-2">
    <div className="progress-bar bg-primary striped animated-slow" style={{width: "50%"}}>Slow</div>
</div>
<div className="progress my-2">
    <div className="progress-bar bg-primary striped animated" style={{width: "50%"}}>Normal</div>
</div>
<div className="progress my-2">
    <div className="progress-bar bg-primary striped animated-fast" style={{width: "50%"}}>Fast</div>
</div>

### Colors

Progress bars can have different colors. The following colors are available: `primary`, `secondary`, `red`, `orange`, `yellow`, `green`, `teal`, `blue`, `violet`, `magenta`, `pink`, `brown`, `gray`, `black`.

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

### Utilities

:::info

More Utilities will be added in a future update. Stay tuned!

:::

Here are some utility progress bars. They are useful for displaying the status of a task.

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
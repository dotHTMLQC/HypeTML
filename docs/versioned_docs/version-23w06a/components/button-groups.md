---
title: "Button Groups"
description: "Button groups are used to group buttons together."
tags: ["button", "action"]
---

<head>
    <link rel="stylesheet" href="/HypeTML/0.9.0.css"/>
</head>

:::danger

This component is still in development, some features may have unexpected behavior, and some features may not be implemented yet. Please create an issue on [GitHub](https://github.com/dothtmlqc/hypetml/issues) if you find any bugs or have any suggestions. Thank you!

:::

# Button Groups

Button groups are used to group buttons together. They can be used to create a toolbar, or to group buttons together.

## Examples

This is a basic button group.

<div className="btn-group mb-3" role="group" aria-label="Button Group Example">
    <button className="btn btn-red">Left</button>
    <button className="btn btn-green">Middle</button>
    <button className="btn btn-blue">Right</button>
</div>

```html
<div class="btn-group" role="group" aria-label="Button Group Example">
    <button class="btn btn-red">Left</button>
    <button class="btn btn-green">Middle</button>
    <button class="btn btn-blue">Right</button>
</div>
```

:::info

It is important to add the `role="group"` attribute to the button group, as well as the `aria-label` attribute. This is to ensure that the button group is accessible to screen readers. The `aria-label` attribute should describe the purpose of the button group. 

If you are using a button group to create a toolbar, the `role` attribute should be set to `toolbar`, and the `aria-label` attribute should describe the purpose of the toolbar.

:::

:::caution

This page is being worked on. Please check back later for more information.

:::
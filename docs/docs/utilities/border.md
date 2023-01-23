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

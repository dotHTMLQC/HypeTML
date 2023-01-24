---
title: "Display"
description: "Display is a utility that controls the display of an element."
---

<head>
    <link rel="stylesheet" href="/HypeTML/0.9.0.css"/>
</head>

# Display

Display is a utility that controls the display of an element.

## Syntax

The full syntax is: `d-[breakpoint]-{display}`

The breakpoint can be one of the following:

- `sm` - Small
- `md` - Medium
- `lg` - Large
- `xl` - Extra Large
- `xxl` - Extra Extra Large

The display can be one of the following:

- `block`
- `inline`
- `inline-block`
- `flex`
- `inline-flex`
- `grid`
- `inline-grid`
- `table`
- `table-row`
- `table-cell`
- `none`

# Hiding

`.d-none` hides an element.


| Screen Size | Class |
| ----------- | ----- |
| Hidden on all screens | `.d-none` |
| Hidden only on xs screens | `.d-none .d-sm-block` |
| Hidden only on sm screens | `.d-sm-none .d-md-block` |
| Hidden only on md screens | `.d-md-none .d-lg-block` |
| Hidden only on lg screens | `.d-lg-none .d-xl-block` |
| Hidden only on xl screens | `.d-xl-none .d-xxl-block` |
| Hidden only on xxl screens | `.d-xxl-none` |
| Visible on all screens | `.d-block` |
| Visible only on xs screens | `.d-block .d-sm-none` |
| Visible only on sm screens | `.d-none .d-sm-block .d-md-none` |
| Visible only on md screens | `.d-none .d-md-block .d-lg-none` |
| Visible only on lg screens | `.d-none .d-lg-block .d-xl-none` |
| Visible only on xl screens | `.d-none .d-xl-block .d-xxl-none` |
| Visible only on xxl screens | `.d-none .d-xxl-block` |




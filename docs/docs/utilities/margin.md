---
title: 'Margin'
---

:::danger

This feature is in beta, and may have unexpected behavior. Please report any bugs to the [GitHub repository](https://github.com/dothtmlqc/hypetml/). Thank you!
    
:::

# Margin

Margin is a utility class that adds margin to an element.

## Syntax

Margin classes always start with `m-` followed by some modifiers. For example, `m-1` adds margin of `1rem` to an element.

The full syntax is this: `m[direction]-[breakpoint]-{size}`

* `direction` is optional and can be one of the following: `t`, `r`, `b`, `l`, `x`, `y`
* `breakpoint` is optional and can be one of the following: `sm`, `md`, `lg`, `xl`
* `size` is required and can range from `0` to `5` or `auto`
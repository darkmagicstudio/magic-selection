<h1 align="center">Custom CSS Selection</h1>

<div style="display: flex;
    align-content: center;
    justify-content: center;
    column-gap: 1rem;
}" align="center">
<img alt="npm" src="https://img.shields.io/npm/v/custom-selection?color=D9B4FF&logo=npm">
<img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/custom-selection?color=1a1a1a&label=size">
<img alt="jsdelivr.com" src="https://data.jsdelivr.com/v1/package/npm/custom-selection/badge">
</div>

<p align="center">
  <img src="https://github.com/killianog/css-selection/blob/8d4a36c3ea34000a7b3ab71bc1b82c14a939b170/assets/star-small.png" />
</p>

[![Verified on Openbase](https://badges.openbase.com/js/verified/custom-selection.svg?token=8O/ktg1dftqn4fQUBW2IV70hSmAg++fAyPJfsBHBqiw=)](https://openbase.com/js/custom-selection?utm_source=embedded&amp;utm_medium=badge&amp;utm_campaign=rate-badge )

Add custom `::selection` css pseudo-element to website using data attributes all so you can improve your websites look and feel


## Installation

> ⚠️ Custom CSS Selection is a controversial practice that can cause usability, accessibility, and performance issues. Don't override selected text styles for purely aesthetic reasons — users can customize them to suit their needs. For people experiencing cognitive concerns or who are less technologically literate, unexpected changes to selection styles may hurt their understanding of the functionality. If overridden, it is important to ensure that the contrast ratio between the text and background colors of the selection is high enough that people experiencing low vision conditions can read it.


#### CDN

Inside `<body>` closing tag

```html
<!-- Custom Selection -->
<script src="https://cdn.jsdelivr.net/npm/custom-selection/dist/custom-selection.core.min.js"></script>
```

## Usage

### Basic

With simple detection.

#### HTML

```html
<body data-selection data-selection-color="1a1a1a" data-selection-text-color="#fffff"></body>
```

## Element Attributes

| Attribute                                  | Values     | Description                                                  |
| ------------------------------------------ | ---------- | ------------------------------------------------------------ |
| `data-selection`                           |            | Initialises JavaScript                                       |
| `data-selection-color`                     | `hex code` | ![https://img.shields.io/badge/hex-value-blue](https://img.shields.io/badge/hex-value-blue) Changes text selection background color |
| `data-selection-text-color`                | `hex code` | ![https://img.shields.io/badge/hex-value-blue](https://img.shields.io/badge/hex-value-blue) Changes text selection text color |
| `data-selection-text-stroke`               | `boolean`  | ![https://img.shields.io/badge/-coming%20soon-inactive](https://img.shields.io/badge/-coming%20soon-inactive) Initialises text stroke CSS value |
| `data-selection-text-stroke-color`         | `hex code` | ![https://img.shields.io/badge/-coming%20soon-inactive](https://img.shields.io/badge/-coming%20soon-inactive) ![https://img.shields.io/badge/hex-value-blue](https://img.shields.io/badge/hex-value-blue) Changes text selection stroke color |
| `data-selection-text-stroke-width`         | `string`   | ![https://img.shields.io/badge/-coming%20soon-inactive](https://img.shields.io/badge/-coming%20soon-inactive) Changes selection stroke width |
| `data-selection-text-stroke-fill-color`    | `hex code` | ![https://img.shields.io/badge/-coming%20soon-inactive](https://img.shields.io/badge/-coming%20soon-inactive) ![https://img.shields.io/badge/hex-value-blue](https://img.shields.io/badge/hex-value-blue) Changes text selection stroke fill color |
| `data-selection-text-decoration`           | `boolean`  | ![https://img.shields.io/badge/-coming%20soon-inactive](https://img.shields.io/badge/-coming%20soon-inactive) Initialises text decoration CSS value |
| `data-selection-text-decoration-color`     | `hex code` | ![https://img.shields.io/badge/-coming%20soon-inactive](https://img.shields.io/badge/-coming%20soon-inactive) ![https://img.shields.io/badge/hex-value-blue](https://img.shields.io/badge/hex-value-blue) Changes text decoration color |
| `data-selection-text-decoration-line`      | `string`   | ![https://img.shields.io/badge/-coming%20soon-inactive](https://img.shields.io/badge/-coming%20soon-inactive) Add line decorations using `underline` , `overline` & `line-through` |
| `data-selection-text-decoration-style`     | `string`   | ![https://img.shields.io/badge/-coming%20soon-inactive](https://img.shields.io/badge/-coming%20soon-inactive) Add line styles using `solid`, `double`, `dotted`, `dashed` & `wavy` |
| `data-selection-text-decoration-thickness` | `string`   | ![https://img.shields.io/badge/-coming%20soon-inactive](https://img.shields.io/badge/-coming%20soon-inactive) |

## Demo

![demo](https://user-images.githubusercontent.com/83577130/189996561-4e541c42-f857-4a28-82ab-42b818972cc1.gif)

#### Values Used

| attribute                   |   value   |
| :-------------------------- | :-------: |
| `data-selection`            |     -     |
| `data-selection-color`      | `#f7f33a` |
| `data-selection-text-color` | `#cba6d6` |

###### Final Element

```html
<body data-selection data-selection-color="#f7f33a" data-selection-text-color="#cba6d6"></body>
```

## Browser support

source : mdn web docs
`supportFull` = ![https://img.shields.io/badge/-Full%20Support-success](https://img.shields.io/badge/-Full%20Support-success)

`supportRequires a vendor prefix or different name for use` = ![https://img.shields.io/badge/-Some%20Support-important](https://img.shields.io/badge/-Some%20Support-important)

`supportNo` = ![https://img.shields.io/badge/-No%20Support-critical](https://img.shields.io/badge/-No%20Support-critical)

|                            |                            Chrome                            |                             Edge                             |                           Firefox                            |                            Opera                             |                            Safari                            |                        Chrome Android                        |                     Firefox for Android                      |                        Opera Android                         |                        Safari on iOS                         |                       Samsung Internet                       |                       WebView Android                        |
| :------------------------- | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| `::selection`              | ![https://img.shields.io/badge/-%20Version%201-success](https://img.shields.io/badge/-%20Version%201-success) | ![https://img.shields.io/badge/-%20Version%2012-success](https://img.shields.io/badge/-%20Version%2012-success) | ![https://img.shields.io/badge/-%20Version%2062-success](https://img.shields.io/badge/-%20Version%2062-success) | ![https://img.shields.io/badge/-%20Version%209.5-success](https://img.shields.io/badge/-%20Version%209.5-success) | ![https://img.shields.io/badge/-%20Version%201.1-success](https://img.shields.io/badge/-%20Version%201.1-success) | ![https://img.shields.io/badge/-%20Version%2018-success](https://img.shields.io/badge/-%20Version%2018-success) | ![https://img.shields.io/badge/-%20Version%2062-success](https://img.shields.io/badge/-%20Version%2062-success) | ![https://img.shields.io/badge/-%20Version%2014-success](https://img.shields.io/badge/-%20Version%2014-success) | ![https://img.shields.io/badge/-No%20Support-critical](https://img.shields.io/badge/-No%20Support-critical) | ![https://img.shields.io/badge/-%20Version%201.0-success](https://img.shields.io/badge/-%20Version%201.0-success) | ![https://img.shields.io/badge/-%20Version%2037-success](https://img.shields.io/badge/-%20Version%2037-success) |
| `dataset`                  | ![https://img.shields.io/badge/-%20Version%208-success](https://img.shields.io/badge/-%20Version%208-success) | ![https://img.shields.io/badge/-%20Version%2012-success](https://img.shields.io/badge/-%20Version%2012-success) | ![https://img.shields.io/badge/-%20Version%206-success](https://img.shields.io/badge/-%20Version%206-success) | ![https://img.shields.io/badge/-%20Version%2011-success](https://img.shields.io/badge/-%20Version%2011-success) | ![https://img.shields.io/badge/-%20Version%205.1-success](https://img.shields.io/badge/-%20Version%205.1-success) | ![https://img.shields.io/badge/-%20Version%2018-success](https://img.shields.io/badge/-%20Version%2018-success) | ![https://img.shields.io/badge/-%20Version%206-success](https://img.shields.io/badge/-%20Version%206-success) | ![https://img.shields.io/badge/-%20Version%2011-success](https://img.shields.io/badge/-%20Version%2011-success) | ![https://img.shields.io/badge/-%20Version%205-success](https://img.shields.io/badge/-%20Version%205-success) | ![https://img.shields.io/badge/-%20Version%201.1-success](https://img.shields.io/badge/-%20Version%201.0-success) | ![https://img.shields.io/badge/-%20Version%203-success](https://img.shields.io/badge/-%20Version%203-success) |
| `custom-selection.core.js` | ![https://img.shields.io/badge/-%20Version%201-success](https://img.shields.io/badge/-%20Version%201-success) | ![https://img.shields.io/badge/-%20Version%2012-success](https://img.shields.io/badge/-%20Version%2012-success) | ![https://img.shields.io/badge/-%20Version%2062-success](https://img.shields.io/badge/-%20Version%2062-success) | ![https://img.shields.io/badge/-%20Version%209.5-success](https://img.shields.io/badge/-%20Version%209.5-success) | ![https://img.shields.io/badge/-%20Version%201.1-success](https://img.shields.io/badge/-%20Version%201.1-success) | ![https://img.shields.io/badge/-%20Version%2018-success](https://img.shields.io/badge/-%20Version%2018-success) | ![https://img.shields.io/badge/-%20Version%2062-success](https://img.shields.io/badge/-%20Version%2062-success) | ![https://img.shields.io/badge/-%20Version%2014-success](https://img.shields.io/badge/-%20Version%2014-success) | ![https://img.shields.io/badge/-No%20Support-critical](https://img.shields.io/badge/-No%20Support-critical) | ![https://img.shields.io/badge/-%20Version%201.0-success](https://img.shields.io/badge/-%20Version%201.0-success) | ![https://img.shields.io/badge/-%20Version%2037-success](https://img.shields.io/badge/-%20Version%2037-success) |


## Useful Links

[mdn web docs ](https://developer.mozilla.org/en-US/docs/Web/CSS/::selection)

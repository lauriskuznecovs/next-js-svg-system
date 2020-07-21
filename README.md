# Next.js inline SVG icon system

## Introduction

### Motivation
- Multiple svg file versions per icon (light and dark version of same icon), which results in tons of icons.
- Import all versions (colors) of svg files into your component, which reduces code transparency.
- Hard to make icon related components, like Link with icon, because you need to handle all those svg file versions.
- Properly handle link and icon accessibility with aria attributes.

### Solution
- `<Icon />` - single icon component for multiple use-cases, like:
  - rendering SVG as `<img src="data:image/svg+xml">` tag
  - rendering SVG as `<svg>` tag with possibility to pass any custom default/hover color via props
  - rendering SVG as `<svg>` tag with possibility to inherit default/hover color from parent element
- `<AnchorLinkWithIcon />` - single link component for multiple use-cases, like:
  - you can pass SVG icon and order where to place that icon (before/after link text)
  - in case link will be some external resource, it will show external link icon automatically

## Preview
![](./docs/ScreenShot.png)

## Run locally
```
npm run dev
```

## Build & start
```
npm run build
npm run start
```

## Guidelines for proper formatting for SVG files

- All svg elements (rect, circle, ellipse, line, polyline, polygon) should be converted to **path**.
- Path element should be using **fill** instead of **stroke**.
- **Optional:** For inline svg it is recommended to remove or change width/height of `<svg>` to 100% - `<svg width="100%" height="100%">`, otherwise scaling/resizing in css will not work as expected.

## Useful stuff

### Cleanup SVG files

Single file:

```
INPUT=./static/svg/original/document.svg OUTPUT=./static/svg/document.svg npm run svgo
```

Bulk:

```
INPUT=./static/svg/original/* OUTPUT=./static/svg/ npm run svgo
```

## TODO

- Unit tests
- Snapshot tests
- Integrate with storybook so we have also visual look on all props combinations.

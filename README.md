## Guidelines for proper formatting for SVG files

- `<svg width="100%" height="100%">` - this will help use resizing/scaling SVG to whatever size, like with `<img>` 
- 

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
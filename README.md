# How to integrate this clock into your page

-   Inject the following _div_ where you want to position the clock

```html
<div id="js-clock"></div>
```

-   Add **clock.js** script file to your project and be precise with the path in src attribute
-   Add the following _script_ elements before </html>
-   Change _clockSquareSize_ (heigth + width) if you do not want the clock to be 300x300px

```html
<script src="clock.js"></script>
<script>
    // clockSquareSize Must be in pixels
    const clockSquareSize = "300px";
    const clock = new Clock(clockSquareSize);
</script>
```

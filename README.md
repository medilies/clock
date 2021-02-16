# Local clock

## How to integrate this clock into your page

-   Inject the following _div_ where you want to position the clock

```html
<div id="js-clock"></div>
```

-   Add **clock.js** script file to your project and be precise with the path in src attribute
-   Add the following _script_ elements before `</html>`
-   Change _clockSquareSize_ (heigth + width) if you do not want the clock to be 300x300px

```html
<script src="clock.js"></script>
<script>
    // clockSquareSize Must be in pixels
    const clockSquareSize = "300px";
    const clock = new Clock(clockSquareSize);
</script>
```

-   Also add these rules to your CSS

```CSS
#js-clock,
#js-clock * {
    box-sizing: border-box !important;
    padding: 0 !important;
    margin: 0 !important;
}
```

**OPTIONAL:** As shown in https://medilies.github.io/clock/ Numbers have _Sarina_ fontfamily. You can set it with the following CSS

```CSS
#js-clock,
#js-clock * {
    font-family: "Sarina", cursive;
    @import url("https://fonts.googleapis.com/css2?family=Sarina&display=swap");
}
```

**NOTE** If you whish to edit the clock styling do it inside *clock.js* file with HTMLElement.style.rule = "value"

- It is discouraged to edit positionning
- take liberty changing colors and font style

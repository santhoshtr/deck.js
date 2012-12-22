deck.js i18n extension
======================

This extension helps to create multilingual presenations. The strings in the slides are placed in simple json files, which can be translated
to any language. The jquery.i18n library(by Wikimedia Foundation https://github.com/wikimedia/jquery.i18n ) takes care of dynamic switching
of the language.

How to use
----------

Include the extension css in your presentation

```html
<link rel="stylesheet" href="../extensions/i18n/deck.i18n.css">
```

Include the extension javascript in your presentation

```html
<script src="../extensions/i18n/jquery.i18n.min.js"></script>
<script src="../extensions/i18n/deck.i18n.js"></script>
```

At the end of the presentation html, add the below snippet to have a language selector

```html
<!-- Language selector support. -->
<select  title="Change language" class="deck-language">
	<option value="en" selected>English</option>
	<option value="ml">മലയാളം</option>
	<!--Add more languages here -->
</select>
```

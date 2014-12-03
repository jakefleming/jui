# [Blockwork](https://github.com/Elkfox/blockwork)

Blockwork Basic HTML Include Framework. Requires jQuery to work. 

One common problem when developing html templates is that you have to duplicate the same code a lot: every page has the same navigation and sidebar. In case of PHP, you would just use a simple include, but what if you can't or don't need to use PHP?

Blockwork uses a simple HTML shortcode paired with jQuery and Javascript to easily include the contents of a html file into another one. Including the html file with Blockwork is as simple as `[includethis file="navigation"]`.

## Installation

Installing Blockwork is easy. Simply include __blockworks.js__  just before your closing `</body>` tag like this: `<script src="blockworks.js"></script>` . Make sure it's placed just before your closing `</body>` tag.

## Usage

`Blockwork` accepts 1 argument: the html file's name without the `.html` extension so `navigation.html` would be just `navigation`.

```html
<div id="content">
	<p>This is some example text</p>
</div>
[includethis file="sidebar"]
```

In the above example, `[includethis file="sidebar"]` will fetch the contents of the sidebar.html file.
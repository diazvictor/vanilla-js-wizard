# vanilla-js-wizard
A simple Wizard with vanilla js 

## Usage

HTML Structure
```html
<div class="wizard">
	<div class="wizard-steps">
		<div data-step="1">Step 1 Content</div>
		<div data-step="2">Step 2 Content</div>
		<div data-step="3">Step 3 Content</div>
	</div>

	<div class="wizard-buttons">
		<button class="wizard-prev">Previous</button>
		<button class="wizard-next">Next</button>
	</div>
</div>
```
Initialize the wizard

```js
let wizard = new Wizard(".wizard");
wizard.init();
```

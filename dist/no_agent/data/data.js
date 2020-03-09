var response = [];

var data = [
	{
		task: "Select the ul element",
		standard: "Try to beat the CSS Ninja using the selector 'ul' - totalling in a weight of 1.",
		help: "Read the following reference on chained selectors: <a href='https://www.w3schools.com/cssref/sel_element_element.asp'>CSS element element selector</a>",
		hint: "Try to chain 2 elements as selectors.",
		solution: "Try the following selector: nav ul",
		target: "ul",
		weight: "0",
		id: "1"
	},
	{
		task: "Select the h3 element",
		standard: "Try to beat the CSS Ninja using the selector 'h3' - totalling in a weight of 1.",
		help: "Read the following reference on chained selectors: <a href='https://www.w3schools.com/cssref/sel_element_element.asp'>CSS element element selector</a>",
		hint: "Try to chain 2 elements as selectors.",
		solution: "Try the following selector: div h3",
		target: "h3",
		weight: "0",
		id: "2"
	},
	{
		task: "Select the h5 element",
		standard: "Try to beat the CSS Ninja using the selector 'div h5' - totalling in a weight of 2.",
		help: "Read the following reference on chained selectors: <a href='https://www.w3schools.com/cssref/sel_class.asp'>CSS .class selector</a>",
		hint: "Try to use a class as your selectors.",
		solution: "Try the following selector: .bar_3",
		target: "div h5",
		weight: "0",
		id: "3"
	},
	{
		task: "Select the li element",
		standard: "Try to beat the CSS Ninja using the selector 'nav li' - totalling in a weight of 2.",
		help: "Read the following reference on chained selectors: <a href='https://www.w3schools.com/cssref/sel_class.asp'>CSS .class selector</a>",
		hint: "Try to use a class as your selectors.",
		solution: "Try the following selector: .nav_bar",
		target: "nav li",
		weight: "0",
		id: "4"
	},
	{
		task: "Select the element with class bar_1",
		standard: "Try to beat the CSS Ninja using the selector '.bar_1' - totalling in a weight of 10.",
		help: "Read the following reference on chained selectors: <a href='https://www.w3schools.com/cssref/sel_element_class.asp'>CSS element.class selector</a>",
		hint: "Try to use an element with a certain class as a selector.",
		solution: "Try the following selector: div.bar_1",
		target: ".bar_1",
		weight: "0",
		id: "5"
	},
	{
		task: "Select the element with class baz",
		standard: "Try to beat the CSS Ninja using the selector '.baz' - totalling in a weight of 10.",
		help: "Read the following reference on chained selectors: <a href='https://www.w3schools.com/cssref/sel_element_class.asp'>CSS element.class selector</a>",
		hint: "Try to use an element with a certain class as a selector.",
		solution: "Try the following selector: p.baz",
		target: ".baz",
		weight: "0",
		id: "6"
	},
	{
		task: "Select the element with class bar_2",
		standard: "Try to beat the CSS Ninja using the selector 'div.bar_2' - totalling in a weight of 11.",
		help: "Read the following reference on chained selectors: <a href='https://www.w3schools.com/cssref/sel_element_element.asp'>CSS element element.class selector</a>",
		hint: "Try to use multiple elements with a certain class as a selector.",
		solution: "Try the following selector: div div.bar_2",
		target: "div.bar_2",
		weight: "0",
		id: "7"
	},
	{
		task: "Select the  element h5",
		standard: "Try to beat the CSS Ninja using the selector '.foo h5' - totalling in a weight of 11.",
		help: "Read the following reference on chained selectors: <a href='https://www.w3schools.com/cssref/sel_element_element.asp'>CSS element element.class selector</a>",
		hint: "Try to use multiple elements with a certain class as a selector.",
		solution: "Try the following selector: .foo div h5",
		target: ".foo h5",
		weight: "0",
		id: "8"
	},
	{
		task: "Select the element with class baz",
		standard: "Try to beat the CSS Ninja using the selector '.foo .bar_2 .baz' - totalling in a weight of 30.",
		help: "Read the following reference on chained selectors: <a href='https://www.w3schools.com/cssref/sel_element_element.asp'>CSS .class .class element.class selector</a>",
		hint: "Try to use multiple elements with multiple classes as a selector.",
		solution: "Try the following selector: .foo .bar_2 p.baz",
		target: ".foo .bar_2 .baz",
		weight: "0",
		id: "9"
	},
	{
		task: "Select the element with id about",
		standard: "Try to beat the CSS Ninja using the selector '.foo .bar_1 #about' - totalling in a weight of 120.",
		help: "Read the following reference on chained selectors: <a href='https://www.w3schools.com/cssref/sel_element_element.asp'>CSS class class element#id selector</a>",
		hint: "Try to use multiple elements, classes, and id selectors.",
		solution: "Try the following selector: div.foo .bar_1 #about",
		target: ".foo .bar_1 #about",
		weight: "0",
		id: "10"
	}
];

var problem = `
<nav class='nav_bar'>nav class='nav_bar'
	<ul style="list-style: none;">ul
		<li>li</li>
		<li>li</li>
		<li>li</li>
		<li>li</li>
	</ul>
</nav>
<div class='foo'>div class='foo'
	<div class='bar_1'>div class='bar_1'
		<h3>h3</h3>
		<p>p</p>
		<a id='about' class="d-block">a id='about'</a>
	</div>
</div>
<div class="foo">div class='foo'
	<div class="bar_2">div class='bar_2'
		<div>div
			<a class="d-block">a</a>
		</div>
		<div>div
			<p class="baz">p class='baz'</p>
		</div>
		<div>div
			<p class="baz">p class='baz'</p>
		</div>
	</div>
</div>
<div class="foo">div class='foo'
	<div class="bar_3">div class='bar_3'
		<h5>h5</h5>
		<p>p</p>
	</div>
</div>
`;

var htmlcode = `
<nav class="nav_bar">
	<ul>
		<li>...</li>
		<li>...</li>
		<li>...</li>
		<li>...</li>
	</ul>
</nav>
<div class="foo">
	<div class="bar_1">
		<h3>...</h3>
		<p>...</p>
		<a id="about">...</a>
	</div>
</div>
<div class="foo">
	<div class="bar_2">
		<div>
			<a>...</a>
		</div>
		<div>
			<p class="baz">...</p>
		</div>
		<div>
			<p class="baz">...</p>
		</div>
	</div>
</div>
<div class="foo">
	<div class="bar_3">
		<h5>...</h5>
		<p>...</p>
	</div>
</div>
`;

webpackJsonp([0xec4d6e12d5a1],{792:function(e,a){e.exports={data:{markdownRemark:{html:'<h1 id="contribution-guidelines"><a href="#contribution-guidelines" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contribution Guidelines</h1>\n<p><a href="#component-layout-demo-creation">Component, Layout, Demo Creation</a>\n| <a href="#modifiers">Modifiers</a>\n| <a href="#pull-request-guidelines">Pull Request Guidelines</a></p>\n<h2 id="component-layout-demo-creation"><a href="#component-layout-demo-creation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Component, Layout, Demo Creation</h2>\n<h3 id="naming-blocks"><a href="#naming-blocks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Naming Blocks</h3>\n<p>Components, layouts, and demos (blocks) should be in individual folders named using Pascal case (AaaBbb). This is the name that will appear in the navigation of the workspace.\nExample: <code>Button</code>, <code>SecondaryNav</code></p>\n<h3 id="component-example"><a href="#component-example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Component Example</h3>\n<p>Examples require a parent javascript class in the component/examples folder (PatternFly uses React for building the example application). These files should be named index.js.</p>\n<p>The example component will refer to example handlebars files. These should be named with kebab-case, including the block name plus the example name: <code>component-name-type-of-example.hbs</code></p>\n<p>Inside of the React component, we use JavaScript naming standards, naming the imports with Pascal case and properties or constants with camelCase.</p>\n<p>For example:</p>\n<div class="gatsby-highlight">\n      <pre class="prism-language-html"><code class="prism-language-html">import BoxBasicExample from "./box-basic-example.hbs";\n...\nconst boxBasicExample = BoxBasicExample();\n...\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Example</span> <span class="token attr-name">heading</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Box with no footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{boxNoHeaderExample}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Example</span><span class="token punctuation">></span></span>;\n</code></pre>\n      </div>\n<p>There are several properties available on the Example component to help with styling the previews.</p>\n<table>\n<thead>\n<tr>\n<th>Property</th>\n<th>Usage</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>heading</code></td>\n<td>Sets the text displayed above the example (required)</td>\n</tr>\n<tr>\n<td><code>minHeight</code></td>\n<td>Sets the min-height of the preview box - useful for collapsed items that need space to expand or when a set minimum height would provide value (optional)</td>\n</tr>\n<tr>\n<td><code>docs</code></td>\n<td>Sets a reference to an example specific markdown file instead of documentation for the entire component to describe specific functionality displayed (optional)</td>\n</tr>\n<tr>\n<td><code>fullPageOnly</code></td>\n<td>Setting to true will only display the preview when full page mode is used (optional)</td>\n</tr>\n</tbody>\n</table>\n<div class="gatsby-highlight">\n      <pre class="prism-language-html"><code class="prism-language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Example</span> <span class="token attr-name">heading</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Heading<span class="token punctuation">"</span></span> <span class="token attr-name">minHeight</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>20em<span class="token punctuation">"</span></span> <span class="token attr-name">docs</span><span class="token attr-value"><span class="token punctuation">=</span>{docReference}</span> <span class="token attr-name">fullPageOnly</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{example}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Example</span><span class="token punctuation">></span></span>;\n</code></pre>\n      </div>\n<h3 id="handlebars-names"><a href="#handlebars-names" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Handlebars names</h3>\n<p>The main handlebars file for a block should be named using kebab case. For example, the secondary navigation would be made up of <code>secondary-nav.hbs</code> with elements defined in <code>secondary-nav-item.hbs</code> and <code>secondary-nav-link.hbs</code>.</p>\n<h2 id="modifiers"><a href="#modifiers" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Modifiers</h2>\n<h3 id="modifier-parameter"><a href="#modifier-parameter" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Modifier parameter</h3>\n<p>Every block and element should have a parameter allowing for modifier classes to be passed in. These should be named in kebab case with the block/element name plus <code>--modifier</code>.\nFor example:</p>\n<div class="gatsby-highlight">\n      <pre class="prism-language-html"><code class="prism-language-html"><span class="token comment">&lt;!-- Component definition --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pf-c-card {{ pf-c-card--modifier }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  {{> @partial-block}}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n---\n<span class="token comment">&lt;!-- Using the component in handlebars --></span>\n{{#> card pf-c-card--modifier="pf-m-3xl pf-m-margin"}}\n  {{> @partial-block}}\n{{/card}}\n</code></pre>\n      </div>\n<p>When including a partial within a partial, by default, Handlebars will pass along the parent context to it\'s children. This would mean the value of any property specified by the parent is also used by the children.</p>\n<p>If there is a possibility of a block nested inside another block of the same type and you want to isolate that nested block, add a new context. For example - see how the nested box is defined below with \'newcontext\' added as an attribute:</p>\n<div class="gatsby-highlight">\n      <pre class="prism-language-html"><code class="prism-language-html">{{#> card pf-c-card--modifier="pf-m-3xl pf-m-margin"}}\n  {{> @partial-block}}\n  {{#> card newcontext pf-c-card--modifier="pf-m-3xl pf-m-margin"}}\n    {{> @partial-block}}\n  {{/card}}\n{{/card}}\n</code></pre>\n      </div>\n<h3 id="common-modifier-class-names"><a href="#common-modifier-class-names" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Common Modifier Class Names</h3>\n<p>Modifier classes help us to create variations of blocks. Reuse names as much as possible to avoid confusion.</p>\n<table>\n<thead>\n<tr>\n<th>Modifier Class Name</th>\n<th>Outcome</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>pf-m-gutter</code></td>\n<td>Adds vertical (if applicable) and horizontal gutters to the element</td>\n</tr>\n</tbody>\n</table>\n<h2 id="pull-request-guidelines"><a href="#pull-request-guidelines" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Pull Request Guidelines</h2>\n<p>In order to streamline reviews and set expectations, the following should be expected when submitting a pull request:</p>\n<ul>\n<li>\n<p>All pull requests should have an issue that the work relates to.</p>\n</li>\n<li>\n<p>A single reviewer should follow the PR through from start to finish after it has been submitted - if somebody else needs to follow it through to completion, please make that transition clear in the PR comments.</p>\n</li>\n<li>\n<p>As much as possible, comments should be actionable. It should be clear to the contributor exactly what needs to change. If there are open questions that require in-depth conversation, consider meeting or using <a href="http://slack.patternfly.org">slack</a> to quickly arrive at an actionable conclusion.</p>\n</li>\n<li>\n<p>If the main issue has been addressed but there is still work that arises from the PR, please open an issue with the necessary information (and referencing this original PR) to follow up on afterwards.</p>\n</li>\n<li>\n<p>The reviewer should consider the following as they review:</p>\n<ol>\n<li>Have all css naming conventions been followed?</li>\n<li>Have the classes been documented?</li>\n<li>Are all variables declared locally and referencing global defaults?</li>\n<li>Have you verified the examples match the design?</li>\n<li>Does the responsive behavior work correctly?</li>\n<li>Have the accessibility standards been followed?</li>\n<li>Is the example resilient - if you put more content in it, do things start to break?</li>\n</ol>\n</li>\n</ul>',fields:{path:"/contribution",type:"page",contentType:"page"}}},pathContext:{pagePath:"/contribution",type:"page",contentType:"page"}}}});
//# sourceMappingURL=path---contribution-5b69f431ce28e7283773.js.map
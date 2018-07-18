webpackJsonp([0xe4f0117a7613],{596:function(e,t){e.exports="<h2 id=overview>Overview</h2> <p>Split layouts are meant for use in positioning child elements horizontally, with one of the children being used as primary content area, and the other(s) being used as a secondary content area.</p> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-l-split</code></td> <td><code>&lt;div&gt;</code>, <code>&lt;section&gt;</code>, or <code>&lt;article&gt;</code></td> <td>Initiates the split layout</td> </tr> <tr> <td><code>.pf-l-split__primary</code></td> <td><code>&lt;div&gt;</code></td> <td>Specificies the primary child of the layout, which expands vertically when needed. The primary child will expand horizontally to fill all space not needed by the secondary children. If the primary is not explicitly set, the second child will act as the primary child.</td> </tr> <tr> <td><code>.pf-l-split__secondary</code></td> <td><code>&lt;div&gt;</code></td> <td>Specifies a secondary child of the layout, which accommodates to its content. A split can have one or more secondary children. If secondary children are not explicitly set, all children but the second will act as secondary children.</td> </tr> <tr> <td><code>.pf-m-gutter</code></td> <td><code>.pf-l-split</code></td> <td>Adds space between children</td> </tr> </tbody> </table> "},233:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Docs=void 0;var r=a(3),i=n(r),o=a(8),l=n(o),s=a(9),d=n(s),c=a(794),p=n(c),m=a(795),f=n(m),u=a(796),h=n(u),v=a(543),y=n(v),g=a(544),x=n(g),k=a(545),M=n(k),P=a(596),b=n(P);a(718);var w=t.Docs=b.default;t.default=function(){var e=(0,y.default)(),t=(0,x.default)(),a=(0,M.default)();return i.default.createElement(l.default,{docs:w,className:"is-layout-page"},i.default.createElement(d.default,{heading:"Split Example",handlebars:p.default},e),i.default.createElement(d.default,{heading:"Split Example with gutter",handlebars:f.default},t),i.default.createElement(d.default,{heading:"Split Example with no primary or secondary children specified",handlebars:h.default},a))}},543:function(e,t,a){var n=a(1);e.exports=(n.default||n).template({1:function(e,t,n,r,i){var o;return(null!=(o=e.invokePartial(a(27),t,{name:"split-item",hash:{classModifier:"pf-m-secondary"},fn:e.program(2,i,0),inverse:e.noop,data:i,helpers:n,partials:r,decorators:e.decorators}))?o:"")+"\n"+(null!=(o=e.invokePartial(a(27),t,{name:"split-item",hash:{classModifier:"pf-m-primary"},fn:e.program(4,i,0),inverse:e.noop,data:i,helpers:n,partials:r,decorators:e.decorators}))?o:"")+"\n"+(null!=(o=e.invokePartial(a(27),t,{name:"split-item",hash:{classModifier:"pf-m-secondary"},fn:e.program(2,i,0),inverse:e.noop,data:i,helpers:n,partials:r,decorators:e.decorators}))?o:"")},2:function(e,t,a,n,r){return"    secondary content\n"},4:function(e,t,a,n,r){return"    primary content\n"},compiler:[7,">= 4.0.0"],main:function(e,t,n,r,i){var o;return null!=(o=e.invokePartial(a(134),t,{name:"split",fn:e.program(1,i,0),inverse:e.noop,data:i,helpers:n,partials:r,decorators:e.decorators}))?o:""},usePartial:!0,useData:!0})},794:function(e,t){e.exports='{{#> split }}\n  {{#> split-item classModifier="pf-m-secondary"}}\n    secondary content\n  {{/split-item}}\n\n  {{#> split-item classModifier="pf-m-primary"}}\n    primary content\n  {{/split-item}}\n\n  {{#> split-item classModifier="pf-m-secondary"}}\n    secondary content\n  {{/split-item}}\n{{/split}}\n'},544:function(e,t,a){var n=a(1);e.exports=(n.default||n).template({1:function(e,t,n,r,i){var o;return(null!=(o=e.invokePartial(a(27),t,{name:"split-item",hash:{classModifier:"pf-m-secondary"},fn:e.program(2,i,0),inverse:e.noop,data:i,helpers:n,partials:r,decorators:e.decorators}))?o:"")+"\n"+(null!=(o=e.invokePartial(a(27),t,{name:"split-item",hash:{classModifier:"pf-m-primary"},fn:e.program(4,i,0),inverse:e.noop,data:i,helpers:n,partials:r,decorators:e.decorators}))?o:"")+"\n"+(null!=(o=e.invokePartial(a(27),t,{name:"split-item",hash:{classModifier:"pf-m-secondary"},fn:e.program(2,i,0),inverse:e.noop,data:i,helpers:n,partials:r,decorators:e.decorators}))?o:"")},2:function(e,t,a,n,r){return"    secondary content\n"},4:function(e,t,a,n,r){return"    primary content\n"},compiler:[7,">= 4.0.0"],main:function(e,t,n,r,i){var o;return null!=(o=e.invokePartial(a(134),t,{name:"split",hash:{modifierClass:"pf-m-gutter"},fn:e.program(1,i,0),inverse:e.noop,data:i,helpers:n,partials:r,decorators:e.decorators}))?o:""},usePartial:!0,useData:!0})},795:function(e,t){e.exports='{{#> split modifierClass="pf-m-gutter"}}\n  {{#> split-item classModifier="pf-m-secondary"}}\n    secondary content\n  {{/split-item}}\n\n  {{#> split-item classModifier="pf-m-primary"}}\n    primary content\n  {{/split-item}}\n\n  {{#> split-item classModifier="pf-m-secondary"}}\n    secondary content\n  {{/split-item}}\n{{/split}}\n'},545:function(e,t,a){var n=a(1);e.exports=(n.default||n).template({1:function(e,t,n,r,i){var o;return(null!=(o=e.invokePartial(a(27),t,{name:"split-item",fn:e.program(2,i,0),inverse:e.noop,data:i,helpers:n,partials:r,decorators:e.decorators}))?o:"")+"\n"+(null!=(o=e.invokePartial(a(27),t,{name:"split-item",fn:e.program(4,i,0),inverse:e.noop,data:i,helpers:n,partials:r,decorators:e.decorators}))?o:"")+"\n"+(null!=(o=e.invokePartial(a(27),t,{name:"split-item",fn:e.program(2,i,0),inverse:e.noop,data:i,helpers:n,partials:r,decorators:e.decorators}))?o:"")},2:function(e,t,a,n,r){return"    content\n"},4:function(e,t,a,n,r){return"    implicit primary content\n"},compiler:[7,">= 4.0.0"],main:function(e,t,n,r,i){var o;return null!=(o=e.invokePartial(a(134),t,{name:"split",fn:e.program(1,i,0),inverse:e.noop,data:i,helpers:n,partials:r,decorators:e.decorators}))?o:""},usePartial:!0,useData:!0})},796:function(e,t){e.exports="{{#> split }}\n  {{#> split-item }}\n    content\n  {{/split-item}}\n\n  {{#> split-item }}\n    implicit primary content\n  {{/split-item}}\n\n  {{#> split-item }}\n    content\n  {{/split-item}}\n{{/split}}\n"},27:function(e,t,a){var n=a(1);e.exports=(n.default||n).template({compiler:[7,">= 4.0.0"],main:function(e,t,a,n,r){var i,o;return'<div class="pf-l-split__item '+e.escapeExpression((o=null!=(o=a.classModifier||(null!=t?t.classModifier:t))?o:a.helperMissing,"function"==typeof o?o.call(null!=t?t:e.nullContext||{},{name:"classModifier",hash:{},data:r}):o))+'">\n'+(null!=(i=e.invokePartial(n["@partial-block"],t,{name:"@partial-block",data:r,indent:"  ",helpers:a,partials:n,decorators:e.decorators}))?i:"")+"</div>\n"},usePartial:!0,useData:!0})},134:function(e,t,a){var n=a(1);e.exports=(n.default||n).template({compiler:[7,">= 4.0.0"],main:function(e,t,a,n,r){var i,o;return'<div class="pf-l-split '+e.escapeExpression((o=null!=(o=a.modifierClass||(null!=t?t.modifierClass:t))?o:a.helperMissing,"function"==typeof o?o.call(null!=t?t:e.nullContext||{},{name:"modifierClass",hash:{},data:r}):o))+'">\n'+(null!=(i=e.invokePartial(n["@partial-block"],t,{name:"@partial-block",data:r,indent:"  ",helpers:a,partials:n,decorators:e.decorators}))?i:"")+"</div> "},usePartial:!0,useData:!0})},718:function(e,t){}});
//# sourceMappingURL=component---src-patternfly-layouts-split-examples-index-js-b696c124df0f25fa9dbe.js.map
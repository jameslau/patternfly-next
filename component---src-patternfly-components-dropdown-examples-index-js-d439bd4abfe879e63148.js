webpackJsonp([93835562911203],{578:function(e,d){e.exports="<h2 id=overview>Overview</h2> <p>The dropdown menu can contain either links or buttons, depending on the expected behavior when clicking the menu item. If you are using the menu item to navigate to another page, then menu item is a link. Otherwise, use a button for the menu item.</p> <h2 id=accessibility>Accessibility</h2> <table> <thead> <tr> <th>Attribute</th> <th>Applied</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>aria-haspopup=&quot;true&quot;</code></td> <td><code>.pf-c-dropdown__toggle</code></td> <td>Indicates the button has a popup menu.</td> </tr> <tr> <td><code>aria-expanded=&quot;false&quot;</code></td> <td><code>.pf-c-dropdown__toggle</code></td> <td>Indicates that the menu is hidden</td> </tr> <tr> <td><code>aria-expanded=&quot;true&quot;</code></td> <td><code>.pf-c-dropdown__toggle</code></td> <td>Indicates that the menu is visible</td> </tr> <tr> <td><code>role=&quot;menu&quot;</code></td> <td><code>.pf-c-dropdown__menu</code></td> <td>Indicates that the menu is a menu</td> </tr> <tr> <td><code>hidden=&quot;hidden&quot;</code></td> <td><code>.pf-c-dropdown__menu</code></td> <td>Indicates that the menu is hidden so that it isn&#39;t visible in the UI and isn&#39;t accessed by assistive technologies</td> </tr> <tr> <td><code>aria-expanded=&quot;true&quot;</code></td> <td><code>.pf-c-dropdown__menu</code></td> <td>Indicates that the menu is visible</td> </tr> <tr> <td><code>role=&quot;menuitem&quot;</code></td> <td><code>.pf-c-dropdown__menu-item</code></td> <td>Indicates that the menu item is a menu item</td> </tr> <tr> <td><code>role=&quot;separator&quot;</code></td> <td><code>.pf-c-dropdown__separator</code></td> <td>Indicates that the separator is a separator</td> </tr> <tr> <td><code>disabled</code></td> <td><code>button.pf-c-dropdown__menu-item</code></td> <td>When the menu item uses a button element, indicates that it is unavailable and removes it from keyboard focus</td> </tr> <tr> <td><code>aria-disabled=&quot;true&quot;</code></td> <td><code>a.pf-c-dropdown__menu-item</code></td> <td>When the menu item uses a link element, indicates that it is unavailable</td> </tr> <tr> <td><code>tabindex=&quot;-1&quot;</code></td> <td><code>a.pf-c-dropdown__menu-item</code></td> <td>When the menu item uses a link element, removes it from keyboard focus</td> </tr> </tbody> </table> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-c-dropdown</code></td> <td><code>&lt;div&gt;</code></td> <td>Defines the parent wrapper of the dropdown.</td> </tr> <tr> <td><code>.pf-c-dropdown__toggle</code></td> <td><code>&lt;button&gt;</code></td> <td>Defines the dropdown toggle</td> </tr> <tr> <td><code>.pf-c-dropdown__menu</code></td> <td><code>&lt;div&gt;</code></td> <td>Defines the parent wrapper of the menu items</td> </tr> <tr> <td><code>.pf-c-dropdown__menu-item</code></td> <td><code>&lt;a&gt;</code></td> <td>Defines a menu item that navigates to another page</td> </tr> <tr> <td><code>.pf-c-dropdown__menu-item</code></td> <td><code>&lt;button&gt;</code></td> <td>Defines a menu item that performs an action on the current page</td> </tr> <tr> <td><code>.pf-c-dropdown__separator</code></td> <td><code>&lt;div&gt;</code></td> <td>Defines a separator within the menu</td> </tr> <tr> <td><code>.pf-m-expanded</code></td> <td><code>.pf-c-dropdown</code></td> <td>Modifies for the expanded state</td> </tr> <tr> <td><code>.pf-m-action</code></td> <td><code>.pf-c-dropdown</code></td> <td>Modifies to display the toggle with no border or background</td> </tr> <tr> <td><code>.pf-m-no-arrow</code></td> <td><code>.pf-c-dropdown</code></td> <td>Modifies to display the toggle without the arrow</td> </tr> <tr> <td><code>.pf-m-dropup</code></td> <td><code>.pf-c-dropdown</code></td> <td>Modifies to display the menu above the toggle</td> </tr> <tr> <td><code>.pf-m-right-aligned</code></td> <td><code>.pf-c-dropdown</code></td> <td>Modifies to display the menu right-aligned with the toggle</td> </tr> <tr> <td><code>.pf-m-disabled</code></td> <td><code>.pf-c-dropdown__menu-item</code></td> <td>Modifies to display the menu item as disabled</td> </tr> </tbody> </table> "},20:function(e,d,t){var o=t(1);e.exports=(o.default||o).template({1:function(e,d,t,o,n){return" pf-m-expanded"},3:function(e,d,t,o,n){return"true"},5:function(e,d,t,o,n){return"false"},7:function(e,d,t,o,n){return'hidden="hidden"'},compiler:[7,">= 4.0.0"],main:function(e,d,t,o,n){var a,r,p=null!=d?d:e.nullContext||{},i=t.helperMissing,l="function",c=e.escapeExpression;return'<div class="pf-c-dropdown'+(null!=(a=t.if.call(p,null!=d?d["pf-c-dropdown--IsExpanded"]:d,{name:"if",hash:{},fn:e.program(1,n,0),inverse:e.noop,data:n}))?a:"")+" "+c((r=null!=(r=t["pf-c-dropdown--Modifier"]||(null!=d?d["pf-c-dropdown--Modifier"]:d))?r:i,typeof r===l?r.call(p,{name:"pf-c-dropdown--Modifier",hash:{},data:n}):r))+'">\n  <button id="'+c((r=null!=(r=t.id||(null!=d?d.id:d))?r:i,typeof r===l?r.call(p,{name:"id",hash:{},data:n}):r))+'" class="pf-c-dropdown__toggle" aria-haspopup="true" aria-expanded="'+(null!=(a=t.if.call(p,null!=d?d["pf-c-dropdown--IsExpanded"]:d,{name:"if",hash:{},fn:e.program(3,n,0),inverse:e.program(5,n,0),data:n}))?a:"")+'">\n'+(null!=(a=e.invokePartial(o["@partial-block"],d,{name:"@partial-block",data:n,indent:"    ",helpers:t,partials:o,decorators:e.decorators}))?a:"")+'  </button>\n  <div class="pf-c-dropdown__menu" role="menu" aria-labelledby="'+c((r=null!=(r=t.id||(null!=d?d.id:d))?r:i,typeof r===l?r.call(p,{name:"id",hash:{},data:n}):r))+'" '+(null!=(a=t.unless.call(p,null!=d?d["pf-c-dropdown--IsExpanded"]:d,{name:"unless",hash:{},fn:e.program(7,n,0),inverse:e.noop,data:n}))?a:"")+'>\n    <a class="pf-c-dropdown__menu-item" role="menuitem" href="#">Link</a>\n    <button class="pf-c-dropdown__menu-item" role="menuitem">Action</button>\n    <a class="pf-c-dropdown__menu-item pf-m-disabled" role="menuitem" aria-disabled="true" tabindex="-1" href="#">Disabled Link</a>\n    <button class="pf-c-dropdown__menu-item pf-m-disabled" role="menuitem" disabled>Disabled Action</button>\n    <div class="pf-c-dropdown__separator" role="separator"></div>\n    <a class="pf-c-dropdown__menu-item" role="menuitem" href="#">Separated Link</a>\n  </div>\n</div>\n'},usePartial:!0,useData:!0})},492:function(e,d,t){var o=t(1);e.exports=(o.default||o).template({1:function(e,d,t,o,n){return"Collapsed Dropdown"},compiler:[7,">= 4.0.0"],main:function(e,d,o,n,a){var r;return(null!=(r=e.invokePartial(t(20),d,{name:"dropdown",hash:{id:"dropdown-example-collapsed"},fn:e.program(1,a,0),inverse:e.noop,data:a,helpers:o,partials:n,decorators:e.decorators}))?r:"")+"\n"},usePartial:!0,useData:!0})},754:function(e,d){e.exports='{{#> dropdown id="dropdown-example-collapsed"}}Collapsed Dropdown{{/dropdown}}\n'},493:function(e,d,t){var o=t(1);e.exports=(o.default||o).template({1:function(e,d,t,o,n){return"Dropup"},compiler:[7,">= 4.0.0"],main:function(e,d,o,n,a){var r;return(null!=(r=e.invokePartial(t(20),d,{name:"dropdown",hash:{"pf-c-dropdown--Modifier":"pf-m-dropup",id:"dropdown-example-dropup-collapsed"},fn:e.program(1,a,0),inverse:e.noop,data:a,helpers:o,partials:n,decorators:e.decorators}))?r:"")+"\n"+(null!=(r=e.invokePartial(t(20),d,{name:"dropdown",hash:{"pf-c-dropdown--Modifier":"pf-m-dropup","pf-c-dropdown--IsExpanded":"true",id:"dropdown-example-dropup-expanded"},fn:e.program(1,a,0),inverse:e.noop,data:a,helpers:o,partials:n,decorators:e.decorators}))?r:"")+"\n"},usePartial:!0,useData:!0})},755:function(e,d){e.exports='{{#> dropdown id="dropdown-example-dropup-collapsed" pf-c-dropdown--Modifier="pf-m-dropup"}}Dropup{{/dropdown}}\n{{#> dropdown id="dropdown-example-dropup-expanded" pf-c-dropdown--IsExpanded="true" pf-c-dropdown--Modifier="pf-m-dropup"}}Dropup{{/dropdown}}\n'},494:function(e,d,t){var o=t(1);e.exports=(o.default||o).template({1:function(e,d,t,o,n){return"Expanded Dropdown"},compiler:[7,">= 4.0.0"],main:function(e,d,o,n,a){var r;return(null!=(r=e.invokePartial(t(20),d,{name:"dropdown",hash:{"pf-c-dropdown--IsExpanded":"true",id:"dropdown-example-expanded"},fn:e.program(1,a,0),inverse:e.noop,data:a,helpers:o,partials:n,decorators:e.decorators}))?r:"")+"\n"},usePartial:!0,useData:!0})},756:function(e,d){e.exports='{{#> dropdown id="dropdown-example-expanded" pf-c-dropdown--IsExpanded="true"}}Expanded Dropdown{{/dropdown}}\n'},495:function(e,d,t){var o=t(1);e.exports=(o.default||o).template({1:function(e,d,t,o,n){return'<i class="fas fa-ellipsis-v"></i>'},compiler:[7,">= 4.0.0"],main:function(e,d,o,n,a){var r;return null!=(r=e.invokePartial(t(20),d,{name:"dropdown",hash:{"pf-c-dropdown--Modifier":"pf-m-action pf-m-no-arrow","pf-c-dropdown--IsExpanded":"true",id:"dropdown-example-kebab"},fn:e.program(1,a,0),inverse:e.noop,data:a,helpers:o,partials:n,decorators:e.decorators}))?r:""},usePartial:!0,useData:!0})},757:function(e,d){e.exports='{{#> dropdown id="dropdown-example-kebab" pf-c-dropdown--IsExpanded="true" pf-c-dropdown--Modifier="pf-m-action pf-m-no-arrow"}}<i class="fas fa-ellipsis-v"></i>{{/dropdown}}'},496:function(e,d,t){var o=t(1);e.exports=(o.default||o).template({1:function(e,d,t,o,n){return'<i class="fas fa-ellipsis-v"></i>'},compiler:[7,">= 4.0.0"],main:function(e,d,o,n,a){var r;return(null!=(r=e.invokePartial(t(20),d,{name:"dropdown",hash:{"pf-c-dropdown--Modifier":"pf-m-action pf-m-no-arrow pf-m-right-aligned","pf-c-dropdown--IsExpanded":"true",id:"dropdown-example-kebab"},fn:e.program(1,a,0),inverse:e.noop,data:a,helpers:o,partials:n,decorators:e.decorators}))?r:"")+"\n"},usePartial:!0,useData:!0})},758:function(e,d){e.exports='{{#> dropdown id="dropdown-example-kebab" pf-c-dropdown--IsExpanded="true" pf-c-dropdown--Modifier="pf-m-action pf-m-no-arrow pf-m-right-aligned"}}<i class="fas fa-ellipsis-v"></i>{{/dropdown}}\n'},759:function(e,d){e.exports='{{#> dropdown id="dropdown-example-rightAligned" pf-c-dropdown--IsExpanded="true" pf-c-dropdown--Modifier="pf-m-right-aligned"}}Right{{/dropdown}}\n'},497:function(e,d,t){var o=t(1);e.exports=(o.default||o).template({1:function(e,d,t,o,n){return"Right"},compiler:[7,">= 4.0.0"],main:function(e,d,o,n,a){var r;return(null!=(r=e.invokePartial(t(20),d,{name:"dropdown",hash:{"pf-c-dropdown--Modifier":"pf-m-right-aligned","pf-c-dropdown--IsExpanded":"true",id:"dropdown-example-rightAligned"},fn:e.program(1,a,0),inverse:e.noop,data:a,helpers:o,partials:n,decorators:e.decorators}))?r:"")+"\n"},usePartial:!0,useData:!0})},213:function(e,d,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}d.__esModule=!0,d.Docs=void 0;var n=t(3),a=o(n),r=t(8),p=o(r),i=t(9),l=o(i),c=t(756),s=o(c),u=t(754),f=o(u),m=t(757),h=o(m),w=t(758),g=o(w),b=t(759),v=o(b),x=t(755),_=o(x),D=t(494),k=o(D),E=t(492),I=o(E),M=t(495),q=o(M),y=t(496),P=o(y),A=t(497),C=o(A),N=t(493),O=o(N),R=t(578),L=o(R);t(700);var W=d.Docs=L.default;d.default=function(){var e=(0,k.default)(),d=(0,I.default)(),t=(0,q.default)(),o=(0,P.default)(),n=(0,C.default)(),r=(0,O.default)(),i={height:"13em"};return a.default.createElement(p.default,{style:i,docs:W},a.default.createElement(l.default,{className:"is-expanded-dropdown",heading:"Dropdown Expanded",handlebars:s.default},e),a.default.createElement(l.default,{heading:"Dropdown Collapsed",handlebars:f.default},d),a.default.createElement(l.default,{className:"is-expanded-dropdown",heading:"Kebab",handlebars:h.default},t),a.default.createElement(l.default,{className:"is-expanded-dropdown is-right-aligned",heading:"Kebab Right Aligned",handlebars:g.default},o),a.default.createElement(l.default,{className:"is-expanded-dropdown is-right-aligned",heading:"Right Aligned",handlebars:v.default},n),a.default.createElement(l.default,{className:"is-expanded-dropup",heading:"Dropup",handlebars:_.default},r))}},700:function(e,d){}});
//# sourceMappingURL=component---src-patternfly-components-dropdown-examples-index-js-d439bd4abfe879e63148.js.map
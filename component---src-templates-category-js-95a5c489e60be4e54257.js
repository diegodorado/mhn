(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Mdw5:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",(function(){return u}));var n=t("q1tI"),l=t.n(n),r=t("Wbzz"),c=t("Bl7J"),o=t("vrFN"),m=t("9eSz"),i=t.n(m),s=(t("6s4l"),t("3sTu"));a.default=function(e){var a=e.pageContext,t=e.data,n=t.markdownRemark,m=t.allMarkdownRemark,u=n.frontmatter,d=u.category,p=u.title,E=u.overview,v=a.previous,g=a.next,f=m.edges.map((function(e){return e.node.frontmatter.images})).reduce((function(e,a){return e.concat(a)}),[]);console.log(f);var w=f.map((function(e){return l.a.createElement(i.a,{key:e,draggable:!1,fluid:e.file.childImageSharp.fluid,alt:e.alt,epigraph:e.epigraph})}));return l.a.createElement(c.a,{bodyClass:"level1"},l.a.createElement(o.a,{title:p}),l.a.createElement("nav",{className:"pager category"},v?l.a.createElement(r.Link,{to:v}):l.a.createElement("span",null),l.a.createElement("h2",null,d),g?l.a.createElement(r.Link,{to:g}):l.a.createElement("span",null)),l.a.createElement("nav",{className:"pager object"},v?l.a.createElement(r.Link,{to:v}):l.a.createElement("span",null),l.a.createElement("h3",null),g?l.a.createElement(r.Link,{to:g}):l.a.createElement("span",null)),l.a.createElement("div",{style:{width:"100%",overflow:"hidden"}},l.a.createElement(s.a,{slides:w,activeDotColor:"#006699"})),l.a.createElement("p",{className:"overview"},E),l.a.createElement("div",{className:"post-content",dangerouslySetInnerHTML:{__html:n.html}}))};var u="3915943929"}}]);
//# sourceMappingURL=component---src-templates-category-js-95a5c489e60be4e54257.js.map
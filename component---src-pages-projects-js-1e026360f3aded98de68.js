(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{209:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return L});var i=n(230),a=n.n(i),r=n(1),o=n.n(r),l=n(216),c=n(220),g=n(223),u=n(221),d=n(233),A=n(232);function m(){var e=a()(["\n    padding-right: 30px;\n  "]);return m=function(){return e},e}function I(){var e=a()(["\n    text-align: left;\n    margin-bottom: 15px;\n  "]);return I=function(){return e},e}function p(){var e=a()(["\n    width: 50%;\n    text-align: left;\n    text-align-last: left;\n  "]);return p=function(){return e},e}function s(){var e=a()(["\n    margin-right: 30px;\n  "]);return s=function(){return e},e}function y(){var e=a()(["\n    flex-direction: row;\n    padding-left: 30px;\n    justify-content: flex-end;\n  "]);return y=function(){return e},e}function M(){var e=a()(["\n    margin-top: 40px;\n  "]);return M=function(){return e},e}t.default=function(e){var t=e.pageContext.locale,n=e.data;return o.a.createElement(g.b,{locale:t,path:"/projects",title:"Projects"},o.a.createElement("div",null,o.a.createElement(C,null,o.a.createElement(d.a,null,n.file.childProjectsJson.title),o.a.createElement(A.a,null,n.file.childProjectsJson.description)),o.a.createElement(h,null,n.allMarkdownRemark.edges.map(function(e){var t=e.node;return o.a.createElement(j,{image:t.frontmatter.image.publicURL,title:t.frontmatter.title,url:t.frontmatter.url,description:t.excerpt})}))))};var C=l.c.div.withConfig({displayName:"projects__Wrapper"})(["display:flex;flex-direction:column;justify-content:center;"]),f=Object(l.c)(u.a).withConfig({displayName:"projects__StyledA"})(["opacity:0.95;&:hover{opacity:1;}"]),h=l.c.div.withConfig({displayName:"projects__ProjectsContainer"})(["margin-top:15px;",";"],c.a.desktop(M())),j=Object(l.c)(function(e){return o.a.createElement(f,{href:e.url},o.a.createElement("div",{className:e.className},o.a.createElement(b,{src:e.image,alt:""}),o.a.createElement(x,null,o.a.createElement(N,null,e.title),o.a.createElement(v,null,e.description))))}).withConfig({displayName:"projects__StyledProject"})(["display:flex;flex-direction:column;margin-bottom:25px;justify-content:center;align-items:center;",";"],c.a.desktop(y())),b=l.c.img.withConfig({displayName:"projects__ProjectThumbnail"})(["width:300px;height:150px;",";"],c.a.desktop(s())),x=l.c.div.withConfig({displayName:"projects__ProjectInformation"})(["width:100%;text-align:justify;text-align-last:center;",";"],c.a.desktop(p())),N=l.c.h3.withConfig({displayName:"projects__ProjectTitle"})(["width:100%;text-align:center;margin-top:10px;margin-bottom:10px;",";"],c.a.desktop(I())),v=l.c.p.withConfig({displayName:"projects__ProjectDescription"})(["box-sizing:border-box;width:100%;",";"],c.a.desktop(m())),L="2122649140"},217:function(e,t,n){"use strict";var i=n(1),a=n.n(i),r=n(0),o=n.n(r),l=n(215),c=n.n(l);n.d(t,"a",function(){return c.a}),n(219),a.a.createContext({}),o.a.object,o.a.string.isRequired,o.a.func,o.a.func},218:function(e,t){e.exports={en:{path:"en",name:"English",default:!0},es:{path:"es",name:"Español"}}},219:function(e,t,n){var i;e.exports=(i=n(229))&&i.default||i},220:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n(111),n(62),n(222);var i=n(216),a={desktop:960,tablet:640,mobile:320},r=Object.keys(a).reduce(function(e,t){var n=a[t]/16;return e[t]=function(){return Object(i.b)(["@media (min-width:","em){",";}"],n,i.b.apply(void 0,arguments))},e},{})},221:function(e,t,n){"use strict";var i=n(216).c.a.withConfig({displayName:"A"})(["color:black;text-decoration:none;outline:none;&:hover{text-decoration:none;}"]);t.a=i},223:function(e,t,n){"use strict";var i=n(230),a=n.n(i),r=(n(235),n(111),n(62),n(222),n(1)),o=n.n(r),l=n(234),c=n(217),g=n(216),u=(n(63),n(231)),d=n.n(u),A=n(218),m=n.n(A),I=n(228),p=n(227),s=n(220),y=n(226),M=n.n(y),C=n(225),f=n.n(C),h=n(224),j=n.n(h),b=n(221);function x(){var e=a()(["\n    width: 960px;\n    margin-left: auto;\n    margin-right: auto;\n    padding-left: 80px;\n    padding-right: 80px;\n  "]);return x=function(){return e},e}function N(){var e=a()(["\n    width: 960px;\n    margin-left: auto;\n    margin-right: auto;\n    padding-left: 120px;\n    padding-right: 120px;\n  "]);return N=function(){return e},e}function v(){var e=a()(["\n    padding-right: 80px;\n  "]);return v=function(){return e},e}function L(){var e=a()(["\n    padding-left: 80px;\n  "]);return L=function(){return e},e}function w(){var e=a()(["\n    width: 960px; \n    margin-left: auto;\n    margin-right: auto;\n  "]);return w=function(){return e},e}function z(){var e=a()(["\n    width: 960px;\n    margin-left: auto;\n    margin-right: auto;\n    padding-right: 80px;\n  "]);return z=function(){return e},e}function D(){var e=a()(["\n    margin-left: auto;\n    margin-right: auto;\n  "]);return D=function(){return e},e}function E(){var e=a()(["\n  display: flex;\n  align-items: center;\n  height: 100%;\n  opacity: 0.6;\n  &:hover {\n    opacity: 1;\n  }\n"]);return E=function(){return e},e}function Z(){var e=a()(["\n  display: flex;\n  opacity: 0.6;\n  &:hover {\n    opacity: 1;\n  }\n"]);return Z=function(){return e},e}n.d(t,"a",function(){return G});var k={en:I,es:p},S={colors:{primary:"#a6b575",primary_dark:"#7f8c55",secondary:"#eee7cb",secondary_dark:"#ebe2c5",secondary_darker:"#c5bda4"}},Y=o.a.createContext(),T=Y.Provider,G=Y.Consumer,W=(t.b=function(e){var t=e.children,n=(e.data,e.locale),i=e.path,a=e.title;return o.a.createElement(T,{value:n},o.a.createElement(g.a,{theme:S},o.a.createElement(H,null,o.a.createElement(l.Helmet,{titleTemplate:"%s · idest",defaultTitle:"idest"},o.a.createElement("html",{lang:n||"en"}),o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),o.a.createElement("meta",{name:"description",content:"Explaining things through code and illustration"}),a&&o.a.createElement("title",null,a),o.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),o.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),o.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),o.a.createElement("link",{rel:"manifest",href:"/site.webmanifest"}),o.a.createElement("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#5bbad5"}),o.a.createElement("meta",{name:"msapplication-TileColor",content:"#eee7cb"}),o.a.createElement("meta",{name:"theme-color",content:"#eee7cb"})),n&&o.a.createElement(R,null,o.a.createElement(_,null,Object.keys(m.a).map(function(e){return o.a.createElement(P,{to:m.a[e].default?i:"/"+m.a[e].path+i},o.a.createElement(U,{active:e===n,key:e},m.a[e].name))}))),o.a.createElement(Q,null,o.a.createElement(J,null,o.a.createElement(V,null,o.a.createElement("div",{style:{height:"100%"}},o.a.createElement(B,{to:"/"},o.a.createElement(F,{src:M.a})))),o.a.createElement(K,null,o.a.createElement(q,null,o.a.createElement(W,{to:"/projects/"},k[n].projects),o.a.createElement(W,{to:"/about/"},k[n].about))))),o.a.createElement(ee,null,o.a.createElement(te,null,t)),o.a.createElement(ne,null,o.a.createElement(ie,null,o.a.createElement(ae,null,o.a.createElement(re,null,o.a.createElement(oe,{href:"https://www.github.com/idest"},o.a.createElement(le,{src:f.a}),o.a.createElement(ce,null,"idest"))),o.a.createElement(re,null,o.a.createElement(oe,{href:"mailto:ie@idest.io"},o.a.createElement(le,{src:j.a}),o.a.createElement(ce,null," ie@idest.io ")))))))))},function(e){return o.a.createElement($,null,o.a.createElement(X,{to:e.to},o.a.createElement("h3",null,e.children)))}),P=Object(g.c)(c.a).withConfig({displayName:"Layout__StyledLink"})(["color:black;text-decoration:none;outline:none;&:hover{text-decoration:none;}"]),O=Object(g.c)(function(e){var t=e.to,n=d()(e,["to"]);return o.a.createElement(G,null,function(e){var i=m.a[e].default?t:"/"+m.a[e].path+t;return o.a.createElement(c.a,Object.assign({to:i},n))})}).withConfig({displayName:"Layout__StyledLocalizedLink"})(["color:black;text-decoration:none;outline:none;&:hover{text-decoration:none;font-weight:bold;}"]),X=O.extend(Z()),B=O.extend(E()),H=g.c.div.withConfig({displayName:"Layout__Container"})(["box-sizing:border-box;display:flex;flex-direction:column;width:100%;min-height:100vh;",";"],s.a.desktop(D())),R=g.c.div.withConfig({displayName:"Layout__TopBarSection"})(["width:100%;background-color:#424242;"]),_=g.c.div.withConfig({displayName:"Layout__TopBar"})(["height:25px;display:flex;justify-content:flex-end;padding-right:10px;align-items:center;",";"],s.a.desktop(z())),U=g.c.span.withConfig({displayName:"Layout__LangSpan"})(["font-size:0.8em;margin-left:10px;color:",";"],function(e){return e.active?e.theme.colors.secondary_dark:e.theme.colors.secondary_darker}),Q=g.c.div.withConfig({displayName:"Layout__HeaderSection"})(["width:100%;background-color:",";"],function(e){return e.theme.colors.primary}),J=g.c.header.withConfig({displayName:"Layout__Header"})(["box-sizing:border-box;display:flex;flex-wrap:wrap;height:80px;width:100%;",";"],s.a.desktop(w())),V=g.c.div.withConfig({displayName:"Layout__HeaderTitle"})(["box-sizing:border-box;display:flex;width:30%;height:100%;align-items:center;padding-left:10px;",";"],s.a.desktop(L())),F=g.c.img.withConfig({displayName:"Layout__Logo"})(["box-sizing:border-box;height:85%;width:auto;margin:0;padding:10px;"]),K=g.c.nav.withConfig({displayName:"Layout__Nav"})(["box-sizing:border-box;display:flex;width:70%;height:100%;justify-content:flex-end;align-items:flex-end;padding-right:10px;padding-bottom:10px;",";"],s.a.desktop(v())),q=g.c.ul.withConfig({displayName:"Layout__LinksList"})(["margin:0;"]),$=g.c.li.withConfig({displayName:"Layout__LinkItem"})(["display:inline-block;margin:0;margin-left:1rem;"]),ee=g.c.div.withConfig({displayName:"Layout__MainSection"})(["display:flex;flex-direction:column;flex:1;width:100%;background-color:",";"],function(e){return e.theme.colors.secondary}),te=g.c.div.withConfig({displayName:"Layout__Main"})(["box-sizing:border-box;display:flex;flex-direction:column;flex:1;width:100%;padding:20px;padding-left:25px;padding-right:25px;",";"],s.a.desktop(N())),ne=g.c.div.withConfig({displayName:"Layout__FooterSection"})(["flex-shrink:0;width:100%;background-color:",";"],function(e){return e.theme.colors.primary_dark}),ie=g.c.footer.withConfig({displayName:"Layout__Footer"})(["display:flex;height:50px;width:100%;padding:15px;padding-left:10px;padding-right:10px;justify-content:center;align-items:center;",";"],s.a.desktop(x())),ae=g.c.div.withConfig({displayName:"Layout__FooterLinks"})(["display:flex;height:100%;width:200px;justify-content:space-between;"]),re=g.c.div.withConfig({displayName:"Layout__SocialLink"})(["display:flex;"]),oe=Object(g.c)(b.a).withConfig({displayName:"Layout__StyledA"})(["display:flex;flex-direction:row;align-items:center;opacity:0.75;&:hover{opacity:1;}"]),le=g.c.img.withConfig({displayName:"Layout__SocialIcon"})(["width:20px;margin-bottom:0;"]),ce=g.c.span.withConfig({displayName:"Layout__SocialSpan"})(["padding-left:5px;"])},224:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMTAuMTEwNDE3bW0iCiAgIGhlaWdodD0iNy40NjQ1ODAxbW0iCiAgIHZpZXdCb3g9IjAgMCAxMC4xMTA0MTcgNy40NjQ1OCIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnOCIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4yIDVjM2U4MGQsIDIwMTctMDgtMDYiCiAgIHNvZGlwb2RpOmRvY25hbWU9Im1haWwuc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzMiIgLz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9ImJhc2UiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6em9vbT0iOCIKICAgICBpbmtzY2FwZTpjeD0iOC41Nzk3MzUxIgogICAgIGlua3NjYXBlOmN5PSI4LjY3MjIwMDUiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBzaG93Z3JpZD0idHJ1ZSIKICAgICBmaXQtbWFyZ2luLXRvcD0iMCIKICAgICBmaXQtbWFyZ2luLWxlZnQ9IjAiCiAgICAgZml0LW1hcmdpbi1yaWdodD0iMCIKICAgICBmaXQtbWFyZ2luLWJvdHRvbT0iMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyODAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iNzUxIgogICAgIGlua3NjYXBlOndpbmRvdy14PSIwIgogICAgIGlua3NjYXBlOndpbmRvdy15PSIxIgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgaW5rc2NhcGU6c25hcC10ZXh0LWJhc2VsaW5lPSJmYWxzZSI+CiAgICA8aW5rc2NhcGU6Z3JpZAogICAgICAgdHlwZT0ieHlncmlkIgogICAgICAgaWQ9ImdyaWQxOCIKICAgICAgIG9yaWdpbng9Ii0xNi43NzI5MTYiCiAgICAgICBvcmlnaW55PSItMjc0Ljc0MTY4IiAvPgogIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTUiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIgogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNi43NzI5MTYsLTE0Ljc5MzczOSkiPgogICAgPHBhdGgKICAgICAgIGlkPSJwYXRoNDU1NSIKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuODQ5OTk5OTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxO3BhaW50LW9yZGVyOnN0cm9rZSBmaWxsIG1hcmtlcnMiCiAgICAgICBkPSJtIDE3LjE5NzkxNiwxNi4wMTI0OTggNC4yMzMzMzQsMy4xNzUgaCAwLjc5Mzc1MSBsIDQuMjMzMzMzLC0zLjE3NSBtIC03LjkzNzUwMSwtMC43OTM3NDEgYyAtMS4zMzMwMDYsMCAtMS4zMjI5MTYsLTAuMDEwMDkgLTEuMzIyOTE2LDEuMzIyOTE3IHYgMy45Njg3NSBjIDAsMS4zMjI5MTcgLTFlLTYsMS4zMjI5MTYgMS4zMjI5MTYsMS4zMjI5MTYgaCA2LjYxNDU4NCBjIDEuMzIxMzE0LDAgMS4zMjI5MTYsLTAuMDAxNiAxLjMyMjkxNiwtMS4zMjI5MTYgdiAtMy45Njg3NSBjIDAsLTEuMzIxMzE0IDAuMDA0MiwtMS4zMjI5MTcgLTEuMzIyOTE2LC0xLjMyMjkxNyB6IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjY2NjYyIKICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTguNDUyNDU2OWUtNikiCiAgICAgICBpbmtzY2FwZTpleHBvcnQteGRwaT0iOTYiCiAgICAgICBpbmtzY2FwZTpleHBvcnQteWRwaT0iOTYiIC8+CiAgPC9nPgo8L3N2Zz4K"},225:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InNpbXBsZWljb25zLWdpdGh1Yi1pY29uIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGUgaWQ9InNpbXBsZWljb25zLWdpdGh1Yi1pY29uIj5HaXRIdWIgaWNvbjwvdGl0bGU+PHBhdGggZD0iTTEyIC4yOTdjLTYuNjMgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAzIDMuNDM4IDkuOCA4LjIwNSAxMS4zODUuNi4xMTMuODItLjI1OC44Mi0uNTc3IDAtLjI4NS0uMDEtMS4wNC0uMDE1LTIuMDQtMy4zMzguNzI0LTQuMDQyLTEuNjEtNC4wNDItMS42MUM0LjQyMiAxOC4wNyAzLjYzMyAxNy43IDMuNjMzIDE3LjdjLTEuMDg3LS43NDQuMDg0LS43MjkuMDg0LS43MjkgMS4yMDUuMDg0IDEuODM4IDEuMjM2IDEuODM4IDEuMjM2IDEuMDcgMS44MzUgMi44MDkgMS4zMDUgMy40OTUuOTk4LjEwOC0uNzc2LjQxNy0xLjMwNS43Ni0xLjYwNS0yLjY2NS0uMy01LjQ2Ni0xLjMzMi01LjQ2Ni01LjkzIDAtMS4zMS40NjUtMi4zOCAxLjIzNS0zLjIyLS4xMzUtLjMwMy0uNTQtMS41MjMuMTA1LTMuMTc2IDAgMCAxLjAwNS0uMzIyIDMuMyAxLjIzLjk2LS4yNjcgMS45OC0uMzk5IDMtLjQwNSAxLjAyLjAwNiAyLjA0LjEzOCAzIC40MDUgMi4yOC0xLjU1MiAzLjI4NS0xLjIzIDMuMjg1LTEuMjMuNjQ1IDEuNjUzLjI0IDIuODczLjEyIDMuMTc2Ljc2NS44NCAxLjIzIDEuOTEgMS4yMyAzLjIyIDAgNC42MS0yLjgwNSA1LjYyNS01LjQ3NSA1LjkyLjQyLjM2LjgxIDEuMDk2LjgxIDIuMjIgMCAxLjYwNi0uMDE1IDIuODk2LS4wMTUgMy4yODYgMCAuMzE1LjIxLjY5LjgyNS41N0MyMC41NjUgMjIuMDkyIDI0IDE3LjU5MiAyNCAxMi4yOTdjMC02LjYyNy01LjM3My0xMi0xMi0xMiIvPjwvc3ZnPg=="},226:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAEwklEQVR4nO3SwZFYMQhEwc0/aTuCPTEW80131buDxM8PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHzVH+k/6pztB5eSnbP94FKyc7YfXEp2zvaDS8nO2X5wKdk52w8uJTtn+8GlZOdsP7iU7JztB5eSnbP94FKyc7YfXEp2zvaDS8nO2X5wKdk52w8uJTtn+8GlZOdsP7iU7JztB5eSnbP94FKyc7YfXEp2TvsDts/HjP8dan/A9vmY8b9D7Q/YPh8z/neo/QHb52PG/w61P2D7fMz436H2B2yfjxn/O9T+gO3zMeN/h9ofsH0+ZvzvUPsDts/HjP8dan/A9vmY8b9D7Q/YPh8z/neo/QHb52PG/w61P2D7fMz436H2B2yfjxn/O9T+gO3zMeN/h9ofsH0+ZvzvUPsDts/HjP8dan/A9vmY8b9D7Q/YPh8z/neo/QHb52PG/w6lH7C9tO19vN+/na/e9kE4wG+V1j5fve2DcIDfKq19vnrbB+EAv1Va+3z1tg/CAX6rtPb56m0fhAP8Vmnt89XbPggH+K3S2uert30QDvBbpbXPV2/7IBzgt0prn6/e9kE4wG+V1j5fve2DcIDfKq19vnrbB+EAv1Va+3z1tg/CAX6rtPb56m0fhAP8Vmnt89XbPggH+K3S2uert30QDvBbpbXPV2/7IBzgt0prn6/e9kE4wG+V1j5fve2DcIDfKq19vnrbB+EAv1Va+3z1PCCb3N+QB2ST+xvygGxyf0MekE3ub8gDssn9DXlANrm/IQ/IJvc35AHZ5P6GPCCb3N+QB2ST+xvygGxyf0MekE3ub8gDssn9DXlANrm/IQ/IJvc35AHZ5P6GPCCb3N+QB2ST+xvygGxyf0MekE3n7i+9cPsDXptPXcVtL/R64Wvzqau47YVeL3xtPnUVt73Q64Wvzaeu4rYXer3wtfnUVdz2Qq8XvjafuorbXuj1wtfmU1dx2wu9XvjafOoqbnuh1wtfm09dxW0v9Hrha/Opq7jthV4vfG0+dRW3vdDrha/Np67ithd6vfC1+dRV3PZCrxe+Np+6itte6PXC1+ZTV3HbC71e+Np86ipue6HXC1+bT13FbS/0euFr86mruO2FXi98bT51Fbe90OuFr82nruLqBwy7ti8z9fdSP2DYtX2Zqb+X+gHDru3LTP291A8Ydm1fZurvpX7AsGv7MlN/L/UDhl3bl5n6e6kfMOzavszU30v9gGHX9mWm/l7qBwy7ti8z9fdSP2DYtX2Zqb+X+gHDru3LTP291A8Ydm1fZurvpX7AsGv7MlN/L/UDhl3bl5n6e6kfMOzavszU30v9gGHX9mWm/l7qBwy7ti8z9fdSP2DYtX2Zqb+X+gHDru3LTP291A8Ydm1fZurvJT2gpN+L215IulTc9kLSpeK2F5IuFbe9kHSpuO2FpEvFbS8kXSpueyHpUnHbC0mXitteSLpU3PZC0qXitheSLhW3vZB0qbjthaRLxW0vJF0qbnsh6VJx2wtJl4rbXki6VNz2QtKl4rYXki4FAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/8Bcahfz2uvPHsAAAAAElFTkSuQmCC"},227:function(e){e.exports={projects:"Proyectos",blog:"Blog",about:"Info"}},228:function(e){e.exports={projects:"Projects",blog:"Blog",about:"About"}},229:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),r=n(0),o=n.n(r),l=n(43),c=n(3),g=function(e){var t=e.location,n=c.a.getResourcesForPathname(t.pathname);return a.a.createElement(l.a,{location:t,pageResources:n})};g.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=g},232:function(e,t,n){"use strict";var i=n(216).c.p.withConfig({displayName:"Description"})(["text-align:justify;text-justify:inter-word;text-align-last:center;"]);t.a=i},233:function(e,t,n){"use strict";var i=n(216).c.h1.withConfig({displayName:"Title"})(["text-align:center;"]);t.a=i}}]);
//# sourceMappingURL=component---src-pages-projects-js-1e026360f3aded98de68.js.map
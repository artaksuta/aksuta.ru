(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{157:function(A,e,a){"use strict";a.r(e);a(34);var t=a(174),c=a(0),s=a.n(c),n=a(159),i=a(160),d=a(162),b=function(A){return s.a.createElement("article",{className:"post-card "+(A.count%3==0&&"post-card-large")+" "+A.postClass+" "+(A.node.frontmatter.thumbnail?"with-image":"no-image"),style:A.node.frontmatter.thumbnail&&{backgroundImage:"url("+A.node.frontmatter.thumbnail.childImageSharp.fluid.src+")"}},s.a.createElement(n.a,{to:A.node.fields.slug,className:"post-card-link"},s.a.createElement("div",{className:"post-card-content"},s.a.createElement("h2",{className:"post-card-title"},A.node.frontmatter.title||A.node.fields.slug))))},r=(a(149),a(150),function(A,e){var a=A.data,t=a.site.siteMetadata.title,c=a.allMarkdownRemark.edges,n=0;return s.a.createElement(i.a,{title:t},s.a.createElement(d.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),a.site.siteMetadata.description&&s.a.createElement("header",{className:"page-head"},s.a.createElement("h2",{className:"page-head-title"},a.site.siteMetadata.description)),s.a.createElement("div",{className:"post-feed"},c.map(function(A){var e=A.node;return n++,s.a.createElement(b,{key:e.fields.slug,count:n,node:e,postClass:"post"})})))});e.default=function(A){return s.a.createElement(n.b,{query:"3399224544",render:function(e){return s.a.createElement(r,Object.assign({location:A.location,props:!0,data:e},A))},data:t})}},158:function(A,e,a){var t;A.exports=(t=a(161))&&t.default||t},159:function(A,e,a){"use strict";a.d(e,"b",function(){return r});var t=a(0),c=a.n(t),s=a(4),n=a.n(s),i=a(33),d=a.n(i);a.d(e,"a",function(){return d.a});a(158);var b=c.a.createContext({}),r=function(A){return c.a.createElement(b.Consumer,null,function(e){return A.data||e[A.query]&&e[A.query].data?(A.render||A.children)(A.data?A.data.data:e[A.query].data):c.a.createElement("div",null,"Loading (StaticQuery)")})};r.propTypes={data:n.a.object,query:n.a.string.isRequired,render:n.a.func,children:n.a.func}},160:function(A,e,a){"use strict";var t=a(0),c=a.n(t),s=a(159);e.a=function(A){var e=A.title,a=A.children,t=c.a.useState(!1),n=t[0],i=t[1];return c.a.createElement("div",{className:"site-wrapper "+(n?"site-head-open":"")},c.a.createElement("header",{className:"site-head"},c.a.createElement("div",{className:"site-head-container"},c.a.createElement("a",{className:"nav-burger",href:"#",onClick:function(){return i(!n)}},c.a.createElement("div",{className:"hamburger hamburger--collapse","aria-label":"Menu",role:"button","aria-controls":"navigation"},c.a.createElement("div",{className:"hamburger-box"},c.a.createElement("div",{className:"hamburger-inner"})))),c.a.createElement("nav",{id:"swup",className:"site-head-left"},c.a.createElement("ul",{className:"nav",role:"menu"},c.a.createElement("li",{className:"nav-home",role:"menuitem"},c.a.createElement(s.a,{to:"/",activeClassName:"nav-current"},"Главная")),c.a.createElement("li",{className:"nav-about",role:"menuitem"},c.a.createElement(s.a,{to:"/about",activeClassName:"nav-current"},"Обо мне")),c.a.createElement("li",{className:"nav-elements",role:"menuitem"},c.a.createElement(s.a,{to:"/elements",activeClassName:"nav-current"},"Элементы")))),c.a.createElement("div",{className:"site-head-center"},c.a.createElement(s.a,{className:"site-head-logo",to:"/"},e)),c.a.createElement("div",{className:"site-head-right"},c.a.createElement("div",{className:"social-links"},c.a.createElement("a",{href:"https://behance.net/aksuta",title:"Behance",target:"_blank",rel:"noopener noreferrer"},"Behance"),c.a.createElement("a",{href:"https://instagram.com/sanya266aksi",title:"Instagram",target:"_blank",rel:"noopener noreferrer"},"Instagram"),c.a.createElement("a",{href:"https://t.me/sanya_aksi",title:"Telegram",target:"_blank",rel:"noopener noreferrer"},"Telegram"),c.a.createElement(s.a,{to:"/rss.xml",title:"RSS",target:"_blank",rel:"noopener noreferrer"},"RSS"))))),c.a.createElement("main",{id:"site-main",className:"site-main"},c.a.createElement("div",{id:"swup",className:"transition-fade"},a)),c.a.createElement("footer",{className:"site-foot"},"© ",(new Date).getFullYear()," ",c.a.createElement(s.a,{to:"/"},e)," — Создано с помощью"," ",c.a.createElement("a",{href:"https://gatsbyjs.org",target:"_blank",rel:"noopener noreferrer"},"Gatsby")))}},161:function(A,e,a){"use strict";a.r(e);a(34);var t=a(0),c=a.n(t),s=a(4),n=a.n(s),i=a(55),d=a(2),b=function(A){var e=A.location,a=d.default.getResourcesForPathnameSync(e.pathname);return a?c.a.createElement(i.a,Object.assign({location:e,pageResources:a},a.json)):null};b.propTypes={location:n.a.shape({pathname:n.a.string.isRequired}).isRequired},e.default=b},162:function(A,e,a){"use strict";var t=a(163),c=a(0),s=a.n(c),n=a(4),i=a.n(n),d=a(165),b=a.n(d);function r(A){var e=A.description,a=A.lang,c=A.meta,n=A.keywords,i=A.title,d=t.data.site,r=e||d.siteMetadata.description;return s.a.createElement(b.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+d.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:i},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:d.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:r}].concat(n.length>0?{name:"keywords",content:n.join(", ")}:[]).concat(c)})}r.defaultProps={lang:"en",meta:[],keywords:[],description:""},r.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},e.a=r},163:function(A){A.exports={data:{site:{siteMetadata:{title:"Аксюта",description:"Портфолио Александры Аксюта",author:"Александра Аксюта"}}}}},174:function(A){A.exports={data:{site:{siteMetadata:{title:"Аксюта",description:"Портфолио Александры Аксюта"}},allMarkdownRemark:{edges:[{node:{excerpt:"",fields:{slug:"/sunset-in-the-forest/"},frontmatter:{date:"August 04, 2019",title:"Sunset In The Forest",description:null,thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAH/xAAXAQEAAwAAAAAAAAAAAAAAAAACAAED/9oADAMBAAIQAxAAAAGuWSzNRUoHRvMFX//EABoQAQEBAQADAAAAAAAAAAAAAAECABEDEiH/2gAIAQEAAQUCH5VNZ5pHVSz6u8duqnrSv//EABcRAAMBAAAAAAAAAAAAAAAAAAABEBH/2gAIAQMBAT8BNd//xAAWEQEBAQAAAAAAAAAAAAAAAAAQARH/2gAIAQIBAT8BMh//xAAbEAABBAMAAAAAAAAAAAAAAAAAARARISAxgf/aAAgBAQAGPwLpKvousP/EABwQAAMAAgMBAAAAAAAAAAAAAAABESFBMVFhcf/aAAgBAQABPyGTV8UhdXFsLOpkleV7s1C7PWdhN0zLTd+mWTjLBs//2gAMAwEAAgADAAAAEDMwvP/EABkRAAMAAwAAAAAAAAAAAAAAAAABERAxYf/aAAgBAwEBPxDbZ3K5j//EABgRAQEBAQEAAAAAAAAAAAAAAAEAETEh/9oACAECAQE/EERyDDt6cgv/xAAeEAEAAwACAgMAAAAAAAAAAAABABEhMWFBUYGh8P/aAAgBAQABPxA6gNh9y2Mq6fX7uISAd3fMbSAcMPQlTWQosLF1XI3K4BopGnzAWIXSczeJn//Z",aspectRatio:1,src:"/static/a8c1e7133bac9ae1aaa99aa3bb74b5f0/10fb1/0.jpg",srcSet:"/static/a8c1e7133bac9ae1aaa99aa3bb74b5f0/467b3/0.jpg 340w,\n/static/a8c1e7133bac9ae1aaa99aa3bb74b5f0/e1ddd/0.jpg 680w,\n/static/a8c1e7133bac9ae1aaa99aa3bb74b5f0/10fb1/0.jpg 1360w,\n/static/a8c1e7133bac9ae1aaa99aa3bb74b5f0/14dee/0.jpg 1920w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"",fields:{slug:"/chelovek-amfibija/"},frontmatter:{date:"August 04, 2019",title:"Человек-Амфибия",description:null,thumbnail:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAADsUlEQVQ4y0WS61MUVBjGzzbVp77UTDOV2SAhCksMBsRVxChBER2W1ZWLchUWFIEFYVlWpQUWJRcRkAVcbkIhmNw0B2smq2nGv6BC7ndCYKHrl9Jfx8WmM/ObZ86Z9zzPe868ovz+11x/8A06cyWHKqxUDfbT0NtLXF4RAYnp7NHqCdYaCMjQE5RRRHCajuCETAI1yQSoEghSxREWm0h4QjKRyScRpfeGuTo0QGppJccsNvoe3Mfa0Yalsw1T902Omq1EVrSgsnzG4aobHLrYwYFyG/uMtYTmlRN4sgDf2HS8oxPwOaRBFN/5kuKW66gKLhBjaWfoh2+53NxIza1uavr7GHj4HafrW4j4pAm1pRP1ZYmlC9WnN1BVtRNzqZXocivh+ipCThsR+tsDmK7bCMsuwbOwFkv/XarbbUTlnCE4IwNzVxf9D7/H9PkgEzNzjE1NMzI+wfKanfU//sL++5+sS7TXuvHNu4goGrxDSVMTkVk5hOhK2S2fUfNFH8ZWK0cuGCjt6qBz+C6mjtv8um5neXGepflZVpaXWLevYl99zG8bdrRX2vBINSBO1Nkossk/ykxHZ62loLGVPdml5De0UtHdQ92tXo4UlXGmuoVFaTQ7M8XU5LiDifFRJifGWJIhaeZ63GOzEWkNLRhu3kSTX8gBvZHqe0MUNrfhps7gg8RcApJ1vKfJIv9KM2sry8zNTvPL0iKrK49ZW11xsCE7TyqtxiU6FaE2XeRUYxNJZZdQRsWzJykNc08PYVlFKI9ksCv+FK7RKWRW1knDx8xMTzI3M83C/BxLC/NSZx3m8cZLbNkfj9ifqyck7gTGnl5Ccwxsi9QQV1XNxzojb+w7hvPhJF77UM3x81Vs2NccT16Ym2VmaoJpybOO7WurqM6aeHVvDOJAcRkHs/LYn6enbPgr1PVNHKy08I46hZcCD/JKqArhs49I3QXm5eVHIz/Jvxtj9NEIY6MjjPz8oyMkVHsW4RWGeD1Cw7n2Drw0J1DGawk/Z2abJhWFNBG7PuIF33DEjkCi8s7jWE//gSd/b8KT5/qUvSm5CGcfhHB6n51RsWhMZt6W0y6UwYjtfgi3IIR7MAqP3QhXf5yfBcsBN8ipKJFacq0Vg1RjQ5tUG1sjjiI85F3Fdl/EVk8UO/1xUh3HNSGdlz1DEC7yfIefA4VbgAyR+zfdJUrEW//hsckWj806D9mEeNcbhassdvFGOHltmrj5b6oMETv9HCjk2YvKwP9xf87zveJZvQz9FxscrH9S7sIgAAAAAElFTkSuQmCC",aspectRatio:1.3799901429275505,src:"/static/030e2a50bfd74b5a0a64b6a557ac448c/41d74/3.png",srcSet:"/static/030e2a50bfd74b5a0a64b6a557ac448c/fa754/3.png 340w,\n/static/030e2a50bfd74b5a0a64b6a557ac448c/1bf7a/3.png 680w,\n/static/030e2a50bfd74b5a0a64b6a557ac448c/41d74/3.png 1360w,\n/static/030e2a50bfd74b5a0a64b6a557ac448c/5bd11/3.png 2040w,\n/static/030e2a50bfd74b5a0a64b6a557ac448c/31030/3.png 2720w,\n/static/030e2a50bfd74b5a0a64b6a557ac448c/dcfd3/3.png 2800w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"",fields:{slug:"/medvedjushka/"},frontmatter:{date:"August 04, 2019",title:"Медведюшка",description:'Алексей Ремизов "Посолонь". Иллюстрации к сказке "Медведюшка"',thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAMBBAUC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgAB/9oADAMBAAIQAxAAAAG6q0hHRICkK0Is4GFv/8QAHBAAAgEFAQAAAAAAAAAAAAAAAgMBAAQREhMQ/9oACAEBAAEFArlxrLu3QJ2C4XByUAQrjC3dNyzS88/f/8QAFREBAQAAAAAAAAAAAAAAAAAAICH/2gAIAQMBAT8Bo//EABYRAAMAAAAAAAAAAAAAAAAAAAERIP/aAAgBAgEBPwFiP//EACAQAAICAQMFAAAAAAAAAAAAAAECABEhEhMxIEFRYZH/2gAIAQEABj8CAXiXj5AfIi2cCOmRUUeomgY7xttbaLq5rPR//8QAHBABAQACAgMAAAAAAAAAAAAAAREAIRAxQVFh/9oACAEBAAE/IT8iO0twZak39Y65GkxDY9BhddQpgEWEbwX2vzzUyXrJ8GAD0cf/2gAMAwEAAgADAAAAEHzDzP/EABcRAQEBAQAAAAAAAAAAAAAAAAEQESH/2gAIAQMBAT8QRPJk/8QAGBEBAQADAAAAAAAAAAAAAAAAAQAQETH/2gAIAQIBAT8QBCbfMf/EAB4QAQEAAgIDAQEAAAAAAAAAAAERACExURBhkUGB/9oACAEBAAE/EDL2GQuvUzUaYvB9yK+F0piIGbRV+wwQrJuqlGdZrDIRHR+4yYkFEjOR/uTQD01NUvrAVUgprZvwsQF5Q8f/2Q==",aspectRatio:.7500669702652023,src:"/static/e377401b88d9820a4e5ea1be0b76e327/10fb1/0.jpg",srcSet:"/static/e377401b88d9820a4e5ea1be0b76e327/467b3/0.jpg 340w,\n/static/e377401b88d9820a4e5ea1be0b76e327/e1ddd/0.jpg 680w,\n/static/e377401b88d9820a4e5ea1be0b76e327/10fb1/0.jpg 1360w,\n/static/e377401b88d9820a4e5ea1be0b76e327/fda29/0.jpg 2040w,\n/static/e377401b88d9820a4e5ea1be0b76e327/823a4/0.jpg 2720w,\n/static/e377401b88d9820a4e5ea1be0b76e327/96b2a/0.jpg 2800w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"",fields:{slug:"/chaos/"},frontmatter:{date:"August 04, 2019",title:"Магический хаос",description:"Если подумать, то что же такое хаос? Беспорядок в быту? голове? Космос в древнегреческой мифологии? Конфликт между странами? Математическое понятие? Лично для меня хаос в первую очередь это беспорядок и непредсказуемое движение (все же я не математик и не политолог). Нечто выходящее из нормы. Эту работу я назвала «Магический хаос». Здесь цикличное движение стиральной машины присходит вне нее самой, а внутри статично стоит вода, где спокойно живут рыбки... жили спокойно... до прихода любопытной художницы, слушающей хаус 😇",thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQDAgX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB9yfSMtQrOLgwB//EABwQAAICAgMAAAAAAAAAAAAAAAECAAMREiEiQ//aAAgBAQABBQIwsFg5m4LNVlKW1T2AxKR0/8QAFREBAQAAAAAAAAAAAAAAAAAAEAH/2gAIAQMBAT8BIf/EABcRAQADAAAAAAAAAAAAAAAAAAABEBH/2gAIAQIBAT8BYmv/xAAcEAACAgIDAAAAAAAAAAAAAAAAEQECEDEhMoH/2gAIAQEABj8CO2t4RaIcsUllK4x6f//EABwQAQACAgMBAAAAAAAAAAAAAAEAESExUWFxof/aAAgBAQABPyE2JAFRUEGyGUl1cBxY+cE52JltLWx1C08hi9bn/9oADAMBAAIAAwAAABC4GIL/xAAXEQEBAQEAAAAAAAAAAAAAAAAAEQEx/9oACAEDAQE/EKrhj//EABkRAAIDAQAAAAAAAAAAAAAAAAAxARARUf/aAAgBAgEBPxDO0Yln/8QAHBABAQADAAMBAAAAAAAAAAAAAREAITFBYZFR/9oACAEBAAE/EIQorNOD9xQthzDLCPk84hVhi7lT7mlutpUNp8xCBpJOaO+8ZaNSSta6P65taJRv3mjlu9V7Ouf/2Q==",aspectRatio:1.0075566750629723,src:"/static/66362dea2dd260ba1af87aee8e65b45a/10fb1/0.jpg",srcSet:"/static/66362dea2dd260ba1af87aee8e65b45a/467b3/0.jpg 340w,\n/static/66362dea2dd260ba1af87aee8e65b45a/e1ddd/0.jpg 680w,\n/static/66362dea2dd260ba1af87aee8e65b45a/10fb1/0.jpg 1360w,\n/static/66362dea2dd260ba1af87aee8e65b45a/fda29/0.jpg 2040w,\n/static/66362dea2dd260ba1af87aee8e65b45a/823a4/0.jpg 2720w,\n/static/66362dea2dd260ba1af87aee8e65b45a/96b2a/0.jpg 2800w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"",fields:{slug:"/tri-tolstjaka/"},frontmatter:{date:"August 04, 2019",title:"«Три толстяка»",description:null,thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAACA//EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAABZ3M3KezR/8QAGRAAAwEBAQAAAAAAAAAAAAAAAAECIRES/9oACAEBAAEFAvZg6IW8Raar/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERAv/aAAgBAwEBPwF5jIf/xAAWEQADAAAAAAAAAAAAAAAAAAAQEiH/2gAIAQIBAT8BaD//xAAZEAACAwEAAAAAAAAAAAAAAAABEQACEEH/2gAIAQEABj8CSzuoWIE//8QAGhABAAMBAQEAAAAAAAAAAAAAAQARITFBsf/aAAgBAQABPyGi43yFGijJS8j79gQFRQIeT//aAAwDAQACAAMAAAAQtO//xAAWEQEBAQAAAAAAAAAAAAAAAAABACH/2gAIAQMBAT8QPIlN/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEhEf/aAAgBAgEBPxDboTh//8QAGhABAQADAQEAAAAAAAAAAAAAAREAITFBsf/aAAgBAQABPxAvhSoPuJS1oOXHIoTThJF3QRs9yaber3OTAB5n/9k=",aspectRatio:1.5521064301552105,src:"/static/4b3a392eb3c5164e9b9a65a24f622efc/10fb1/0.jpg",srcSet:"/static/4b3a392eb3c5164e9b9a65a24f622efc/467b3/0.jpg 340w,\n/static/4b3a392eb3c5164e9b9a65a24f622efc/e1ddd/0.jpg 680w,\n/static/4b3a392eb3c5164e9b9a65a24f622efc/10fb1/0.jpg 1360w,\n/static/4b3a392eb3c5164e9b9a65a24f622efc/fda29/0.jpg 2040w,\n/static/4b3a392eb3c5164e9b9a65a24f622efc/823a4/0.jpg 2720w,\n/static/4b3a392eb3c5164e9b9a65a24f622efc/96b2a/0.jpg 2800w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"",fields:{slug:"/tri-tolstjaka-chast-1-aja/"},frontmatter:{date:"August 04, 2019",title:"«Три толстяка» Часть 1",description:null,thumbnail:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAAsSAAALEgHS3X78AAAF/0lEQVQ4yzXQaUzbhxnHcXettNd7v1eTpr2aNG2qtEqbMiXRCAFCuBLqAIGAwReHg42ND8xlfHEYMDc4QDjs4Jg7ISaUOCkUCKxJCkkhzZKmQRnp2rShy5YZvv9xaI/06JGeF5/np0fkrPFic/Rjd3qpdflxNQzT2DSGo9pHmaUPp2uYevcoBZlKlGeSUadlYpXJCeWeDD/VRQtfak+ZRHu1pj75/v4U6U0dqHVtaHTt5F+sR29sxWLzUmnzYajyUWwPYDS1kXoihuyYOLLixDSJTzCT+ofwI9Ux4aE25gDcKIo8BJs8n1DXMoWhYghH3TBFhjZkqgYM1itU1I1htF9FKtGQeOIY4oRYjAknuBr7WyaSfxd+oD0lNEk+PgADivhDMDC5xEJoDmfLTULBWUKTE+gqB5Dru9FZ/ahLBymxX0ImTyInK5bu9GPMSI6xmB8R7pOLBXlCxgFYmJR2CC7eDPLoph97+21G+v28HK6lzj3Ix5JylAUOclKVqPLLkKWeRZ6TSJE0BY9CSocsI9xepBAm6nIPwGG74hCcD3i5521EV32NatcgLz0mBlq6OJOcQ05MPOlRSZw9Gk3i6Ugy5YlczE2lvlCKMSstPGTTCE+CxgPwXkBzCI56Ovi820p++QAycx8Peh1c9/UjkRbhlImJ+nMEMX86QVzkSZy6cziLM3CqJAwUF4R9VVphNlB+AM54TYfgjK+TjTEnGtsQeaYWahs7aOwcIDOrgEqFmJKcNI59eJToo8dxmcTYtGI61XLuWkvCfbqLQr9FcwD2mgve3/7qiUg00N3KmK8VSUkvkvxy1MXlXFA7UF3I4JJZzmSzAWehhPMJ0WRJYpEpEijdS27OOBuuVcqEKyaLcR/sN5YdJjyXpUGv1nIur4r4TD2qPBXn80qQpmUw3Wag1ixjtMFEk1KBOD6CFEkEDr2CQUfVTtDtFm5Wu8z7TrDC9rOtlfsiUcberxS5ahTZcgzyLFQqDacztRyJyeJGt4PgZRtdOi3uFCU5kbHEJf+VEbuD551Du4vVbmHDP/ZYEIRf7qPvnj9/TyTO1pOtdaA1VmDMSKYgOxuLxcYFmY4aSzm3vQ10Feqwpyi4sAeqlOe4Y3HxsLVnd63ZI7y6MftiD/zFPhj+dus90ankXBKTszGVlKNRKNAXG+lqrKG92U2eVMmn/XW4dWqkUWc4nxRFSV4a0/VuVgcD4Scen/A6NN+xjz1r8Bz+8HjkWZKS0ynVFNJu0WE1FtNUbaO9oQZTkZZgpw2dUkpRVjJKyWmK0+KplKfhdVvCvQ2VQpNeV7bv9Lz5+oO9pCLRR3+JJSY+hbZKIz5LASW5EpyVZTTV2KkrM9Bv12PeAxXiGFRZcehSYnHmpGKvUO7UOjXCSIv9s1fry7+6Pz1R3h3o/0D0xyOniY6IJjflDN0lSlxaOTWGQupK9fhrjAyW5jFYUUBPiQKPXkqbOY++xioGHGU4FOnC6kxgO3Qn2DY1dFm4VFX+a9HvPzpJVFQiLZYynGoFxfvXVZmYC/PpthtZu1rL5i0P04E2bneX87chJ/MjzVwbaBWu11l310MTwszynYIivUp6q9X9c9GR4wks3/Dyr9VpBq16cpITcBXnUm9QEWhzsjER4MnUOBP+NuZ8lbxZ6uWntVs8Hh1l1lq/sx64Inxxe9Qh+n8FfV0IL+b49u4oDyc7aa9QM+2x8TzUx1cTfp5dm2ZrNsTT8StcbjKwtTjDVvAWDy71sehq373XMSB8/2jph/bKzN8cgLvP5/jx83Herk7x4xfX9nqCHx4E2H0V4rt7S8w1tHO/roVQSyfi82JG+zw8HRpjZW+/0dEjvJgM7k76BgRPp3V78e5Iqujd5hI73yzwdm2K7/fg7dVx/vP3Yf67OU5gqJkuu4W1a73MT3TQ2WxmfSHIv5cfsHX9k4PenJzGajbt+P0twvwdb7po5/U6fLfGu80V3n6zwvazz9j95yJv/7HAVX8Pn073cW9ljNHxS7z+coTdlwv8tPWY0Ss+xoe8PF2Y4evFq7tvNm4IwqvlU/8DAN08fg3I+AQAAAAASUVORK5CYII=",aspectRatio:.912981455064194,src:"/static/4528425bfd79a011c2d4021e0fec938b/41d74/1.png",srcSet:"/static/4528425bfd79a011c2d4021e0fec938b/fa754/1.png 340w,\n/static/4528425bfd79a011c2d4021e0fec938b/1bf7a/1.png 680w,\n/static/4528425bfd79a011c2d4021e0fec938b/41d74/1.png 1360w,\n/static/4528425bfd79a011c2d4021e0fec938b/ec873/1.png 1920w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"",fields:{slug:"/tri-tolstjaka-chast-2-aja/"},frontmatter:{date:"August 04, 2019",title:"«Три толстяка» Часть 2",description:null,thumbnail:{childImageSharp:{fluid:{base64:"data:image/png;base64,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",aspectRatio:.9112482202183199,src:"/static/3b32776470570d959f0197a5848e19ae/41d74/1.png",srcSet:"/static/3b32776470570d959f0197a5848e19ae/fa754/1.png 340w,\n/static/3b32776470570d959f0197a5848e19ae/1bf7a/1.png 680w,\n/static/3b32776470570d959f0197a5848e19ae/41d74/1.png 1360w,\n/static/3b32776470570d959f0197a5848e19ae/ec873/1.png 1920w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"",fields:{slug:"/tri-tolstjaka-chast-3-ja/"},frontmatter:{date:"August 04, 2019",title:"«Три толстяка» Часть 3",description:null,thumbnail:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsSAAALEgHS3X78AAAEU0lEQVQ4y23TWVOadxQG8JemM73up+gX6HR619ve9ibNtJPMNDOtSUxbpWLUpDEpLqgEcUMwLAbEILIIyKaCiK9BVlFWQUUxaKPGLTGWAM+/Qi/puTo3z2/OmTmH0vYzoeJ2Qil8gVmlBXZ7AJPRLaT3skhsbcGxfQZrIkfojUx+eT18ubGzTBxmM5nsf05o3QjWnQp4TGZoJn35gSHbt5SB9wtUbTXQ8BvgHJ9E0LWK7b83cXayiVw2idW9Qxjjb8jMCg16yZHxGFwnerW+pJ3XFejkLIlohR9j6kliUM5uUuWSNv2KrprbGGTVYlbIw/y8H/5sDnGPE4HEOnynedCRJHGrJy6CYtWxWThzbjXpM8El3sn08uglHRaQrHeITIhkNyqg8mk9hGwWhltZ0PR3Qmx0QeRLwz+rh41egjWwCmV7G9kd7snFOlqORnpk71TOcNLQJzrf6m3c8Qc4p2t0XXvZko0/+oQaFPajhd0OZR8f/EEpRHwuVtwaJFzjmNcrELSriU8/iqyESxaafyPmifbzw9TgaVTRcDQ1UpvXLT0hYgPr+zL40l53jeLItbh9pw7N7XwMd3Nhk/YiJG1ESM3D3JgQQYsKYZeJLKpkcMiHEJth5jOOn/y7cd43PEv9D0Pq2j/0tq7Py6DE8JSiGlu5aGrthlgihdsyCZ/ThNA4GwGDDKE5M4IOCwJOOxYtU8VFs54szxjt1P/UC2Pbf013FxcO/RikPU/w8N4dcB8wQevkWHPPYX3lFdJRH/ayKcRWlou7qVVysJ+ZLucS9MA1mfHBtRF93acvLR0VSz79mKIidjHmVQLwHjeDeacWrJp7SHgXkE2t4nUmTra3koj5FuAeHy0GaBdJJeLmcjgVMDPisSS1MPesgskmOJRyqpeiNhcV0EgGIODz4dCpYVGrsL8VLU9FDg5zOD87IuMdrUTFZhUlnX8S9t3fK+BnX37BkLf8Vb179OrSrRo5aJMeMbcLfrsN0eAyTq4+JbMWIKElV0nQ1k066plFjYBPRuoaKqCw+T5DymyqBn0mCV4ZVUiHAnAaDdhMRMjh620cuzyY6ekifTU/Xy709uTVnZ0lMYdPEqLBCtjy3XVGdkxSDc7J+xBwWPEmt4P9K+jt2RHO0hskxRURE6uFqBpqCfvm3YKkrb147PWSs+BaBTywzzFOwvFq0DM1hlQkhOPDfRSKeWR3s2Q76C2ln8tKK1zBR89z8UXnwx7cvNVSiGimyYdFXwWMdwwx3nlXqsGw24ZMOo5kbA2EACVSIifRIGIDw4X1CV02Ltcebuu1pZRFV0oqJGRjVFEBZV99zchNW6vBzavw+/O3uLg4R7FQuEIJ4lYdWVcpSFo0dult7vonLB4pBhwT+ULESfZs6gqYkz5i7M+bq8H3x1er5t/j8sMFwqEgSqUiieuUiI72YseqJTSHQzQ3fiwY792/9HA6iJ/LtlSCt64zPgh7q7x/ATFeRteDON8ZAAAAAElFTkSuQmCC",aspectRatio:1.183431952662722,src:"/static/8ea23904e922138bc2a571e44ed931b3/41d74/0.png",srcSet:"/static/8ea23904e922138bc2a571e44ed931b3/fa754/0.png 340w,\n/static/8ea23904e922138bc2a571e44ed931b3/1bf7a/0.png 680w,\n/static/8ea23904e922138bc2a571e44ed931b3/41d74/0.png 1360w,\n/static/8ea23904e922138bc2a571e44ed931b3/5bd11/0.png 2040w,\n/static/8ea23904e922138bc2a571e44ed931b3/31030/0.png 2720w,\n/static/8ea23904e922138bc2a571e44ed931b3/dcfd3/0.png 2800w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"",fields:{slug:"/legends-of-crimea/"},frontmatter:{date:"August 04, 2019",title:"«Крымские легенды»",description:null,thumbnail:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAADp0lEQVQ4yx2SW0zTBxhH+763JXOJmZFFY+JmlkhYpuBiokPGYIAYuQ8KKCARahBBEIbacWcFRLkJBaEXAbkJEwot93K1gyFQ7gEUcMIwZG6gLT37Zw/n5ZcvJ+fhE7Wmq2jPrORZegWt0gq0qUp68muY7x1iqqWdiXIlvTkVtMse0SmgSy+j81cFHdlqOmQKurIq6bunpidPLXjKEHXdr6HrfhUa4agzRUF3agUTTVpgB4tlC8vaGNsGLe+WJ1nqrqUtO50CyW3kN1MovCZFFhhL9qUY5FG/0CWrQDRRrmJN28hohZJXL8Z5N21g2ziKmX/48GEbk2mTvd112NtiZriN3qIUWnOk6OpVaB7dIyc0nFsXQsgQR9Mu1IsGi5SMlclZ/U3Fv3+0/1+0t2HEtD6O6fU45o1JzFvz8Pcy85N6Opoeo9c1MDioo7dFRbMsjlT/K5QmJqMvViOaq1Oy0iBnpbaAt/onmBb0mJeGMC0NYH45wt4bQfjXDGzNMTusoaW2FF3DI+qq5FySxJCfKUUVF0F1hoz1/j5E5v4SdocVvO0sYVNbhGXLiOXNKJZ1A3tCoWVzViieFoQzTLRV0Zh3B02+FG9PP/YdssXGzpnS2HCacx+w1DOIyNiYjGWyFua6sMxpsKz2w9oAvNLDssCaULk6DH+OsNj/BG3hXaKCg7CyPssX57w5YG3P2W9/pKG4mA3jGKKWkluYX9Tx8lkBr4ca2VsZ4f3K7+wuGdhZGOL9XDe7xjYs0+30lWeQGnOVI9bfceD4aazOuGF1woGP9h0jVxqHaVGDaLajmgWB1tgLVAmjobqYcWU2k/XlTDWpmWpUMVSjYKAojbSLjnxjc5rP9h/mk4PH2W/jwqdHTvLx5ycR+/phnqxCtNN2F8PDWIZlEqqTrlMSFYZC4kdRuBePb4ZQEhGA2MUNZZAL4WfsCDhlw5eHj3Hw0NfY2jpgdfQUR0848ZWdKwNPhT8cr4yjOTMGozyBtqzrqBOv0RofRF6YJ7d9PZG5O5DsZo9c7EKIsxNu9k4k+XlQH+ZIlv85gt2cCXL6nsvu5ylMjEHUlBKJPvcGz3Mj6UsPpScpAIPUH0X8FTIDPeiOE1MX6UdWsDcSHx+qon14nhKARhqILi2Yh1G+ZEn8uRMeSP6NUETqn0MpkXhRHHERpcSFB1d9SBD7Eu3pTk2IA5UxgWSF/US8sGX6OrEY50y62JVEX1fiPdwI+cGR1MteeJ93JyEsiP8ATLncRG/MKgIAAAAASUVORK5CYII=",aspectRatio:1.5659955257270695,src:"/static/be48ef4d48023c510d5701e814e780be/41d74/0.png",srcSet:"/static/be48ef4d48023c510d5701e814e780be/fa754/0.png 340w,\n/static/be48ef4d48023c510d5701e814e780be/1bf7a/0.png 680w,\n/static/be48ef4d48023c510d5701e814e780be/41d74/0.png 1360w,\n/static/be48ef4d48023c510d5701e814e780be/5bd11/0.png 2040w,\n/static/be48ef4d48023c510d5701e814e780be/31030/0.png 2720w,\n/static/be48ef4d48023c510d5701e814e780be/dcfd3/0.png 2800w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"",fields:{slug:"/otkrytaja-kniga/"},frontmatter:{date:"August 04, 2019",title:"«Открытая книга»",description:"Иллюстрации к книге Вениамина Каверина",thumbnail:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAZCAYAAAAxFw7TAAAACXBIWXMAAAsSAAALEgHS3X78AAAD4UlEQVQ4y41VuU5jSRR1S4OQoNmZsemApRHQAsQHIDEdESARTqckICEB3zGdEIyRCHoyNCYhBqmRCNB0gETE4g1vz/h5341tdjhT56JnnqF7Zkoql6v83vG559x7yxKJRHB5eQlj3N/f4/DwEMlkUvZ3d3e4ublBMBiU3zgeHx/xo2EpFApIp9M1MA6Px4ODgwMsLCxgbGwMExMTWF1drYH9K+D19TXIkuPh4UHWarWK9fV1WCwWNDU1yTo5Ofn/APlBQIZlHltbW2hpaUFzc7MAkunt7e1/h8wP6lUqlWqacezu7qLn3Tt0dnaiq6sLAwMDSKVStUgM0JfgAkhTdF2v0zEajWJoaAiNjY3CsKGhASenp08gptDNEnC1GP9IwJcufvz4K2ZnZ2G3/4HPn3+HFgrh+uoK5YuLV6Ea71gMI8iIZphZLi8vY3Nz80kKpV8mnULkPIx0KvkUtpoP6lkDQxgayBfqX43cM87sdjs2NjZwWa0gGPAjFtWRSiYQj0UVsIaEWmN6BMVi4TUgXTZ05Jnb7cbS0hK+ffv7iVlYk5e1UECAz7WQAHItFYv1gOawmS7T09OSMq2trdj9+hVZBRjwnSGkWAbVqgUDCPp9soZDQWQz6e8DZjIZ9Pb2iqvt7e14+7YFf375glQiBo/LCa/bqUB9Mr1uF848bjVdommdy+ZcWllZQXd3N9ra2mF580aZ4kAmlRB2NESPhFXIEWEW1oKK6RnyuewzoOFouVyGy+WS73Nzc7BarWhTLClBuVQUwKjSMK70o5Z65Fz25+EQigWTKcfHx2LI/v4+fD6f/LCzswNbTw+sNhs2HQ6lYVKxCYmzBAv4vMKOhpApTasB7u3tySYcDuPk5ASVSgUhlcCskp9/sQpDXQH5vB6ZhhlcqemZ0rIOcHt7u1bDPCDbo6MjdHR0wGbrEQ1zmZQwpAkE04J+Ycdwfeosl808AzLfjIbAbpLNZuF0OjE1NYXR0VE4HH+pUiuKGboyhSEzsZmL3HPWAbLLnKqiX1tbk4ba398vYIODg9ITaRZ1YmKTVTymy57sCM6w6/KQ2hFgeHgY4+PjModHRqRlsfQkAy5KqFbKqiIKuFKdic2BzrJLFQt5VZrVZ0CaMDMzI23q/ftBcfYn1ap++/QJfr9femA8HlcvX9W0NlLNfA/VJbamaZifn0dfXx9GPnzA4uIivF6vPMT7hiWZSCSkkoqqbplqJPKyKGqAfIi3GrsNGbHzUAoCXan+x4uM33O5XI2RmdWrBhsIBGpVwsE8ZJLzAsvn88KMwOaL7Ed3i8V8yIc5jcvIrJGRp99r++bxD9ruyMhINDiLAAAAAElFTkSuQmCC",aspectRatio:.7862407862407862,src:"/static/b28c61b5ca78eb8e6b19b782cbcbe927/41d74/4.png",srcSet:"/static/b28c61b5ca78eb8e6b19b782cbcbe927/fa754/4.png 340w,\n/static/b28c61b5ca78eb8e6b19b782cbcbe927/1bf7a/4.png 680w,\n/static/b28c61b5ca78eb8e6b19b782cbcbe927/41d74/4.png 1360w,\n/static/b28c61b5ca78eb8e6b19b782cbcbe927/ec873/4.png 1920w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"",fields:{slug:"/luggage/"},frontmatter:{date:"August 04, 2019",title:"«Багаж»",description:null,thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIEA//EABYBAQEBAAAAAAAAAAAAAAAAAAMAAf/aAAwDAQACEAMQAAABfMnBqhy3/8QAGhAAAgMBAQAAAAAAAAAAAAAAAQIAAxESBP/aAAgBAQABBQJiBGtVJ3stXtR5wLAMH//EABYRAAMAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAwEBPwE1f//EABYRAAMAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAgEBPwERf//EABkQAAMBAQEAAAAAAAAAAAAAAAABIRECUf/aAAgBAQAGPwKlZOdXpgqQ/8QAGRABAAMBAQAAAAAAAAAAAAAAAQARITFB/9oACAEBAAE/IaXgcuUSDeUbL7fyCbK69bc6YDaTsADAeT//2gAMAwEAAgADAAAAEPjf/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAhQf/aAAgBAwEBPxDgQ5f/xAAWEQEBAQAAAAAAAAAAAAAAAAABEQD/2gAIAQIBAT8QEV0N/8QAHBABAQACAgMAAAAAAAAAAAAAAREAITFBUYHw/9oACAEBAAE/EH2xOxgMuIgaIBB284o8GkB9r1l2nNBenJIzUJ5SYAc0AaM//9k=",aspectRatio:1.5011764705882353,src:"/static/05547f599c159bd31f995d32b7d6d06e/5bb7c/0.jpg",srcSet:"/static/05547f599c159bd31f995d32b7d6d06e/467b3/0.jpg 340w,\n/static/05547f599c159bd31f995d32b7d6d06e/e1ddd/0.jpg 680w,\n/static/05547f599c159bd31f995d32b7d6d06e/5bb7c/0.jpg 1276w",sizes:"(max-width: 1276px) 100vw, 1276px"}}}}}},{node:{excerpt:"",fields:{slug:"/prikljuchenija-gulivera/"},frontmatter:{date:"August 04, 2019",title:"«Приключения Гуливера»",description:null,thumbnail:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABQ0lEQVQoz02ST06DUBCHfxUEHtS2QB9QoH+sGmNiqtETGLdujRsTd8aNe9euPIDxAu49gDtv4I3qb2BofckXhnnDN8MDoF2GjJRYSYgl43/XTONCY4PtuiQ30M094nY7ZQTPGqSZQZKFGHb5SYR+GsAOPNShi5KpnNQkJFNyJ3XvmoBOuJME6JOD2Md+4mMeuejJJuOC+UNKZ2PT1MLpYbfXTi8NniR3T87IM/kiq6saTiMLMCdlpu0YWyL5BeWWNQXl1Zg1bNBNiYp8klfyRo5PEngqnJHKmo1QBAuV5pSWTexjyfygO5pzFa3IB7lYr/lV2qIFqflAJ8zJUoUy7TRt3+KIbM76hXyTB/IrX/E0haPdhSzeCmPNT5q4lRZaF3XCH/JIbglnw7Uetkgx9Lb/hdyLnFNBjoESjLifM7ZBW/MHF2ce+1HJKzAAAAAASUVORK5CYII=",aspectRatio:2.5247971145175834,src:"/static/3e16830e80c697b8eca1775ee218d875/41d74/4.png",srcSet:"/static/3e16830e80c697b8eca1775ee218d875/fa754/4.png 340w,\n/static/3e16830e80c697b8eca1775ee218d875/1bf7a/4.png 680w,\n/static/3e16830e80c697b8eca1775ee218d875/41d74/4.png 1360w,\n/static/3e16830e80c697b8eca1775ee218d875/5bd11/4.png 2040w,\n/static/3e16830e80c697b8eca1775ee218d875/31030/4.png 2720w,\n/static/3e16830e80c697b8eca1775ee218d875/dcfd3/4.png 2800w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"",fields:{slug:"/shile-i-klimt/"},frontmatter:{date:"August 04, 2019",title:"Шиле и Климт",description:"Буклет для выставки",thumbnail:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAADhElEQVQ4yyWTXWxTZRzGq4khXhhA0Sky9kGGVYGESGJiSLzQGW+40vhxaRYCZODGgh8xmS7L0H3JBplk8jGUfcCGm8vAzXVre9rT9rQ9/Tg97ek5Pf1Y160beOmdVz/fwMWb9+Z9nzzP7//8HRsFk3xGo5jV+Wdzje4Tn9P89LN8/Moevti5k4+e2sFU74/YVoa4EiAWDpDO2Yz/0ML5Y8/wtvMFjjv38MnBHQyffA9HLhUn6neTCPnZLOeZOHearroa+g7X0n+ghqHdzyENDaBpKorHheJ1YaRThMa6+LWtmcvDHbQ0H2ag+Q3KSRlHwdBQAxKpSJBHm2X+/r6doaONzJ04guvTt+h+vYbpq1ewM0nCPg8RWaJkplGkeb7p66C42Mn8yGkCd0fhv39x5DP640cJRWYtZxCcmSL2+yjSxTYWvj7JYOspxkYuUxBIQpKXVDTI9kaZLVsmc7+L7FQ7idVhKkWdpM+Fw0jECYqHIa+bbCqBMjdPZmmZ1YlxoovzzF69xK3hfkzVh/fPSXpbP+OvO2NsJxaoBG9gR24gLw1hmxJXer7DkdUSBCQ3sZBwaFs8TEQorCyi3ZtAn7pGNW9S1KNk5QeUjTjS3G2WJ0ewfLeY6W8huTxI0HMN0woy0HkBh6VrKH4vyWhI2LapRgLok7+x/HM/vks9bFfKrJkaVuABesDFw+o6FTOO6p7Ae72V3OpFwot9BJUFZqfHRGThUPF7SMcU4dDAlr3I47eRro/iH+ymkklRNBJYUQ+6vISdjvNovcTcHzfRw9NY8i+kpJtkdYEtuiIEk3HCQlBXFcp5A21lBfnOXfKeJXL3xS0qVS7miAokKTWMJhJUSwU6vmqj56cLVKxV8f8evQOdvP/hcRE5rREN+EnHI2yu5aiqgmVYJe31sC65KEcUCjlLlFpGDfqJCDzb5RKt586wv2kfHd+e4t0P3qHBWY/zUL0QNHQU0cOo+GBbBhuymy3BMytETbeXihqjZJvEw08EZcnDZqnI+fazvCQWoLaplr31ezlyzInzzQYRWTj0+dwEZB+WmHJJTDy/MEcxHmNdnJIiUIh+apEQyXCQkGCcz5m0nj3N8zW7aDiwn8bX6jh0tOmJoJ01iEUjxFQVu2BjiD6mZmcoi5Vc12LYSlhwMihaWZHAJCPWbnurypdtZ9j94i7qhLvGg7WPRV/d9zL/A0qGCFK5XYPCAAAAAElFTkSuQmCC",aspectRatio:1.5555555555555556,src:"/static/5b8b58a7abd0880cbebb3f45c17783d3/41d74/1.png",srcSet:"/static/5b8b58a7abd0880cbebb3f45c17783d3/fa754/1.png 340w,\n/static/5b8b58a7abd0880cbebb3f45c17783d3/1bf7a/1.png 680w,\n/static/5b8b58a7abd0880cbebb3f45c17783d3/41d74/1.png 1360w,\n/static/5b8b58a7abd0880cbebb3f45c17783d3/5bd11/1.png 2040w,\n/static/5b8b58a7abd0880cbebb3f45c17783d3/31030/1.png 2720w,\n/static/5b8b58a7abd0880cbebb3f45c17783d3/dcfd3/1.png 2800w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"",fields:{slug:"/dizajn-broshjury-istorija-rishele/"},frontmatter:{date:"August 04, 2019",title:"Дизайн брошюры «История Ришелье»",description:"Буклет для выставки",thumbnail:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAAD/0lEQVQ4y12Te0xbdRTH7217ey8tfUFfPEpboLelQEvZQseAbQZhDIw490AHS8iMESHAkBGBOR/bMs0Y0xmnK5Nl05GZMBRcYqbzEQhuimlDJs5sccucjzCDcRCdmbnz67l3+o8n+eb87r2/+znf8zv5MQatFnoNB51aA52GpFYrMtJ7WckcZZ6HgSSvU3Q6mAReSpa/abUzDIWgVrPJGpYxaelBq1LBZrEg0+GAQ85OJ7LS0mAzGu8V4TgIlPWUZQhPxQSNRkqi4kkcpwBVLMsy/0USq0K2y4VoUREKRRHRSATR4mJ4CCqwLJQfSYIMIukJSm4lHbnlNRoFSMVUJo5hyaGKsdCGdEsKAh4PcrOykJOZAXdGBvSCoLRsFuRWOSQRLEWvR9gvIiyKUjbtI3jcpGKsZp71mrVMOgF1jE2nBxUhsRCofUHF0pmqCSSAV6kVmNNggFnLI91kRtAnwicGpBy3F1adPqFnGaeFZwMEc5A4xmMyoc6eikprKswcr4DkARhoXerKQpXbjTJnBorTXbAJyQhbbXjG7ZJ6fT6s8uTGyYw9lWd9/zrUMrFQEJM+L8aqSnHqsVqszrCDJ7etFSH8PNSHqyOHsOfBehSnOrG+UMRsbC9uPN4oXcgPYEdRsQy0OQUFKJIMzNlIEPG6Kkzv7sBvR7rRXhJEGi9gorkGfw73YmHsEEb7ulHuykasuR5LZ2KYHo5J55/Yhv6AP0FAh0NQBQnmNmoZDdOT58WHXc043dmE+dd24OOuLfCbjDhcE8WtoZ344fDTaCmJYGM4hC92t+L74Rfx0bMd0kv11WgUAwmrXbBbOMVdLgHVTNOKZXi9uQFTPY1I9GzCnjVRuGgIy+lMzzTVYPL5Ngy2tWG504VdleW4MrAd3w7tk47296NldYXcst6ezJsIKEvNzJ4exUI8jrlTx3HwofvQkJ8Hf4oFXqMBx7vbcWtuDncuX8XBtu1Y43Hj3KsHcPv6DQmLS0iMnJxh/h83v5zBVydOYmH6Ao60tGCtx4UgTT3qzsLLG9bjm7F38cd313BzcgpdK0vxwcB+3Ln+k4S7f+P3ua8V4FQ8oQq5nIxZvnoXd3Zj7p1RjO8fREeBHw3+XDwVLkR1fgSdtduwb9cxXJl4H59s3oS3Qvno29qFaxcvSxh/G788XK4A7x4dYH+sEO85nAk48fnmdeh99Ek0lFYj5s/BuYAPdQVRtHe+iRNbOjHh92Ak1YRX1m7A3t5juPRIvfTXqjws3h9WgLcjbvZSmUi3jq7e7Eo/xv0OvEBT7A4tw3veTIy40tCxbiMGt/biU58HnwW8OFtSgDdan8P52hosrciWFisj+PWBqAKcLyti56vyZSDzD3Sx1ScGWGIOAAAAAElFTkSuQmCC",aspectRatio:1.334604385128694,src:"/static/bf03fa40a6270072b2b7cdff0f9424e4/41d74/1.png",srcSet:"/static/bf03fa40a6270072b2b7cdff0f9424e4/fa754/1.png 340w,\n/static/bf03fa40a6270072b2b7cdff0f9424e4/1bf7a/1.png 680w,\n/static/bf03fa40a6270072b2b7cdff0f9424e4/41d74/1.png 1360w,\n/static/bf03fa40a6270072b2b7cdff0f9424e4/5bd11/1.png 2040w,\n/static/bf03fa40a6270072b2b7cdff0f9424e4/31030/1.png 2720w,\n/static/bf03fa40a6270072b2b7cdff0f9424e4/dcfd3/1.png 2800w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"Far far away, behind the word mountains, far from the countries Vokalia and\nConsonantia, there live the blind texts. Separated they live in…",fields:{slug:"/91_hi-folks/"},frontmatter:{date:"May 28, 2015",title:"New Beginnings",description:"This is a custom description for SEO and Open Graph purposes, rather than the default generated excerpt. Simply add a description field to the frontmatter.",thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAeHcCoP/xAAWEAEBAQAAAAAAAAAAAAAAAAABMSD/2gAIAQEAAQUCqzH/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAXEAADAQAAAAAAAAAAAAAAAAAAASAx/9oACAEBAAY/AkZP/8QAGBAAAwEBAAAAAAAAAAAAAAAAAAERITH/2gAIAQEAAT8hSg4ItUo5pClb6xn/2gAMAwEAAgADAAAAEKAP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGhABAQEBAQEBAAAAAAAAAAAAAREAITFhof/aAAgBAQABPxAUGFC5UYSFb7+mi9O5SivusKM4Vu7R+b//2Q==",aspectRatio:1.7777777777777777,src:"/static/54a16e112c74520e2310f2802be25209/10fb1/bbbb.jpg",srcSet:"/static/54a16e112c74520e2310f2802be25209/467b3/bbbb.jpg 340w,\n/static/54a16e112c74520e2310f2802be25209/e1ddd/bbbb.jpg 680w,\n/static/54a16e112c74520e2310f2802be25209/10fb1/bbbb.jpg 1360w,\n/static/54a16e112c74520e2310f2802be25209/883ab/bbbb.jpg 2000w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-8919d16edf9d2a23c8a2.js.map
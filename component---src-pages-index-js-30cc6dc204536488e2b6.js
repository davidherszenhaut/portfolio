(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{RXBc:function(t,e,n){"use strict";n.r(e);var a=n("q1tI"),o=n.n(a);n("WPSQ");var r=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){return o.a.createElement("div",{className:"headerContainer"},o.a.createElement("div",{className:"headerLeft"},o.a.createElement("h1",null,"DH")),o.a.createElement("div",{className:"headerRight"},o.a.createElement("button",null,"Projects"),o.a.createElement("button",null,"Résumé")))},a}(o.a.Component);n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("Vd3H");var i=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this.props.data;return console.log(t),Object.keys(t.links).sort().forEach((function(e){console.log(e,t.links[e])})),o.a.createElement("div",null,o.a.createElement("h1",null,t.title),o.a.createElement("h2",null,t.subtitle),o.a.createElement("p",null,t.caption),o.a.createElement("ul",null,Object.keys(t.links).sort().map((function(e){return o.a.createElement("li",{key:e},o.a.createElement("a",{key:e,href:t.links[e]},e))}))))},a}(o.a.Component);var c=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){return o.a.createElement("p",null,"David Herszenhaut © ",(new Date).getFullYear())},a}(o.a.Component);n("f3/d");var s=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){console.log(this.props.data);var t=this.props.data;return o.a.createElement("div",null,o.a.createElement("h1",null,t.name),o.a.createElement("p",null,t.stack.map((function(t){return o.a.createElement("span",{key:t},t," ")}))),o.a.createElement("p",null,t.links?Object.keys(t.links).filter((function(e){return"TODO"!==t.links[e]})).map((function(e){return o.a.createElement("a",{key:e,href:t.links[e]},e,"  ")})):null),o.a.createElement("p",null,t.description))},a}(o.a.Component);var l=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){return o.a.createElement("div",null,this.props.data.map((function(t){return o.a.createElement(s,{key:t.name,data:t})})))},a}(o.a.Component),u=n("llU2"),p=n("tCFx");n.d(e,"default",(function(){return h}));var h=function(t){var e,n;function a(e){var n;return(n=t.call(this,e)||this).state={tab:"projects"},n}n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var s=a.prototype;return s.changeTab=function(t){t!==this.state.tab&&this.setState({tab:t})},s.render=function(){var t=this;return o.a.createElement("div",null,o.a.createElement(r,null),o.a.createElement(i,{data:u}),o.a.createElement("button",{onClick:function(){return t.changeTab("projects")}},"Projects"),o.a.createElement("button",{onClick:function(){return t.changeTab("resume")}},"Résumé"),"projects"===this.state.tab?o.a.createElement(l,{data:p}):null,"resume"===this.state.tab?o.a.createElement("h1",null,"Resume"):null,o.a.createElement(c,null))},a}(o.a.Component)},llU2:function(t){t.exports=JSON.parse('{"title":"David Herszenhaut","subtitle":"Georgia Tech graduate and Bachelor of Science in Computer Science","caption":"Hi, my name is David. I am a recent graduate of the Georgia Institute of Technology (B.Sc. in Computer Science). I am currently looking for software engineering position. I enjoy making music, reading fantasy novels, going to concerts, and tinkering.","img":"TODO","email":"david.herszenhaut@gmail.com","phone":"404.993.7732","links":{"linkedin":"https://www.linkedin.com/in/davidherszenhaut/","github":"https://github.com/davidherszenhaut","facebook":"https://www.facebook.com/david.herszenhaut","twitter":"https://twitter.com/dherszenhaut"}}')},tCFx:function(t){t.exports=JSON.parse('[{"name":"Paintr","stack":["java"],"description":"A simple graphics editor built from the ground up using the Swing toolkit for Java. Functionality includes saving and loading multiple canvases, right click gestures, snap-to-grid movement, and canvas switching animations.","img":"TODO"},{"name":"SmarTrek","stack":["react","python"],"description":"SmarTrek is a web application built for the Summer 2019 ITC Hackathon that helps you pick the safest route to your destination. Supports several routes for each of walking, bicycling, driving, and riding transit.","links":{"code":"https://github.com/ethanbin/SmarTrek"},"img":"TODO"},{"name":"Dungeon Crawler","stack":["unity"],"description":"A basic action role-playing game where you take control of a knight fighing different monsters on your way to treasure.","img":"TODO"},{"name":"OpenEval","stack":["node","sql","bootstrap"],"description":"An anonymous survey web application that allows Georgia Tech professors to receive feedback on their teaching.","links":{"code":"https://github.com/dedding4341/OpenEval/tree/master/Web"},"img":"TODO"},{"name":"Possibility of Precipitation","stack":["c"],"description":"A Game Boy Advance game written in C that takes inspiration from the game \'Risk of Rain\'.","img":"TODO"},{"name":"Dota Data","stack":["html","css","javascript"],"description":"A series of D3.js data visualizations.","links":{"demo":"https://davidherszenhaut.github.io/dota-data/","code":"https://github.com/davidherszenhaut/dota-data"},"img":"TODO"},{"name":"PyBot","stack":["python","sql"],"description":"A chat bot for Discord built using the discord.py API wrapper.","links":{"case study":"TODO"},"img":"TODO"},{"name":"metal_concerts","stack":["python"],"description":"A Python script to find interesting metal concerts near me.","links":{"case study":"TODO","code":"https://github.com/davidherszenhaut/metal_concerts"},"img":"TODO"},{"name":"Word Clock","stack":["html","css","javascript"],"description":"A clock that tells time with words.","links":{"case study":"TODO","demo":"https://davidherszenhaut.github.io/wordclock/","code":"https://github.com/davidherszenhaut/wordclock"},"img":"TODO"},{"name":"hex2rgb","stack":["html","css","javascript"],"description":"A tool to convert a color code from hexadecimal to RGB.","links":{"case study":"TODO","demo":"https://davidherszenhaut.github.io/hex2rgb/","code":"https://github.com/davidherszenhaut/hex2rgb"},"img":"TODO"},{"name":"hexclock","stack":["html","css","javascript"],"description":"A hexadecimal clock that changes color with each passing second.","links":{"case study":"TODO","demo":"https://davidherszenhaut.github.io/hexclock/","code":"https://github.com/davidherszenhaut/hexclock"},"img":"TODO"},{"name":"Flask Web Application","stack":["html","css","python"],"description":"A simple website built using the Flask framework.","links":{"case study":"TODO","code":"https://github.com/davidherszenhaut/hexclock"},"img":"TODO"}]')}}]);
//# sourceMappingURL=component---src-pages-index-js-30cc6dc204536488e2b6.js.map
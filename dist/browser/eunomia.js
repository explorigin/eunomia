!function t(n,e,r){function o(u,c){if(!e[u]){if(!n[u]){var s="function"==typeof require&&require;if(!c&&s)return s(u,!0);if(i)return i(u,!0);throw new Error("Cannot find module '"+u+"'")}var f=e[u]={exports:{}};n[u][0].call(f.exports,function(t){var e=n[u][1][t];return o(e?e:t)},f,f.exports,t,n,e,r)}return e[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(t,n,e){(function(){var t,n,r,o,i,u=function(t,n){function e(){this.constructor=t}for(var r in n)c.call(n,r)&&(t[r]=n[r]);return e.prototype=n.prototype,t.prototype=new e,t.__super__=n.prototype,t},c={}.hasOwnProperty;o=function(){function e(t,n){null==n&&(n=null),this.validateSpec(t),this.spec=t,this["interface"]=n}return e.prototype.validateSpec=function(t){var e,r;r=[];for(e in t){if(!(t[e]instanceof Function))throw new n("Given spec is not accepted");r.push(void 0)}return r},e.prototype.validateInterfaceAgainst=function(){var t,n;if(this["interface"]===!0){n=[];for(t in this["interface"]){if(!(this.spec[t]instanceof this["interface"][t]))throw new r("Given entity does not comply to the role's needed interface");n.push(void 0)}return n}},e.prototype.applyTo=function(n){return this.validateInterfaceAgainst(n),new t(this,n)},e}(),t=function(){function t(t,n){var e;this.entity=n,this.role=t;for(e in this.role.spec)console.log(e),this[e]=this.role.spec[e].bind(this.entity)}return t}(),r=function(t){function n(){return n.__super__.constructor.apply(this,arguments)}return u(n,t),n}(Error),n=function(t){function n(){return n.__super__.constructor.apply(this,arguments)}return u(n,t),n}(Error),i=function(n,e){return function(r){var o,i;o={};for(i in r)o[i]=new t(n[i],r[i]);return e.call(null,o)}},e.context=function(t,n){var e,r;for(e in t)if(!(t[e]instanceof o))throw new Error("Roles can only be instances of Role");if(0===Object.keys(n).length)throw new Error("Context must be able to enact at least one use case");r={};for(e in n)r[e]=i(t,n[e]);return r},e.role=function(t,n){return new o(t,n)},e.hasRole=function(t,n){return t.role===n},e.exceptions={MessageNotUnderstood:r,MalformedRoleSpec:n}}).call(this)},{}]},{},[1]);
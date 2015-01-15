goog.provide('webrepl');
goog.require('cljs.core');
goog.require('webconsole');
jQuery(document).ready((function (){
return webconsole.console.call(null,"#console",cljs.core.ObjMap.EMPTY);
}));

goog.provide('webedit');
goog.require('cljs.core');
goog.require('cljs.repl');
/**
* Writes text at key in localStorage.
*/
webedit.store_item = (function store_item(key,text){
return window.localStorage.setItem(key,text);
});
/**
* Reads text at key in localStorage.
*/
webedit.load_item = (function load_item(key){
return window.localStorage.getItem(key);
});
webedit.map__GT_js = (function map__GT_js(m){
var out = {};
var G__3262_3264 = cljs.core.seq.call(null,m);
while(true){
if(G__3262_3264)
{var vec__3263_3265 = cljs.core.first.call(null,G__3262_3264);
var k_3266 = cljs.core.nth.call(null,vec__3263_3265,0,null);
var v_3267 = cljs.core.nth.call(null,vec__3263_3265,1,null);
(out[cljs.core.name.call(null,k_3266)] = v_3267);
{
var G__3268 = cljs.core.next.call(null,G__3262_3264);
G__3262_3264 = G__3268;
continue;
}
} else
{}
break;
}
return out;
});
webedit.str_contains_QMARK_ = (function str_contains_QMARK_(s,x){
return cljs.core.not_EQ_.call(null,s.indexOf(x),-1);
});
webedit.mac_QMARK_ = (function mac_QMARK_(){
return webedit.str_contains_QMARK_.call(null,[cljs.core.str(navigator.platform)].join(''),"Mac");
});
webedit.command_prefix = (cljs.core.truth_(webedit.mac_QMARK_.call(null))?"Cmd":"Ctrl");
webedit.register_shortcuts = (function register_shortcuts(editor,key_map){
var js_key_map = webedit.map__GT_js.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2144__auto__ = (function iter__3273(s__3274){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3274__$1 = s__3274;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__3274__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var vec__3276 = cljs.core.first.call(null,xs__4579__auto__);
var k = cljs.core.nth.call(null,vec__3276,0,null);
var callback = cljs.core.nth.call(null,vec__3276,1,null);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([[cljs.core.str(webedit.command_prefix),cljs.core.str("-"),cljs.core.str(k)].join(''),callback], true),iter__3273.call(null,cljs.core.rest.call(null,s__3274__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2144__auto__.call(null,key_map);
})()));
return editor.addKeyMap(js_key_map);
});
webedit.editor_visible = cljs.core.atom.call(null,false);
webedit.editor_visible_key = "__editor_visible";
webedit.update_editor_visibility = (function update_editor_visibility(show_QMARK_){
var container = $("#editor-container");
if(cljs.core.truth_(show_QMARK_))
{return container.slideDown(100);
} else
{return container.slideUp(100);
}
});
webedit.store_editor_visibility = (function store_editor_visibility(show_QMARK_){
return webedit.store_item.call(null,webedit.editor_visible_key,[cljs.core.str(show_QMARK_)].join(''));
});
webedit.update_link = (function update_link(show_QMARK_){
return $("#toggle-editor").html([cljs.core.str((cljs.core.truth_(show_QMARK_)?"Hide":"Show")),cljs.core.str(" file editor")].join(''));
});
webedit.add_updating_watch = (function add_updating_watch(reference,fun){
return cljs.core.add_watch.call(null,reference,fun,(function (_,___$1,___$2,value){
return fun.call(null,value);
}));
});
webedit.setup_editor_toggling = (function setup_editor_toggling(){
webedit.add_updating_watch.call(null,webedit.editor_visible,webedit.update_editor_visibility);
webedit.add_updating_watch.call(null,webedit.editor_visible,webedit.store_editor_visibility);
webedit.add_updating_watch.call(null,webedit.editor_visible,webedit.update_link);
$("#toggle-editor").click((function (){
return cljs.core.swap_BANG_.call(null,webedit.editor_visible,cljs.core.not);
}));
return cljs.core.reset_BANG_.call(null,webedit.editor_visible,cljs.core._EQ_.call(null,"true",webedit.load_item.call(null,webedit.editor_visible_key)));
});
webedit.editor = (function editor(){
var eval_cmd = [cljs.core.str(webedit.command_prefix),cljs.core.str("-E")].join('');
webedit.setup_editor_toggling.call(null);
$("#tiny-note").html([cljs.core.str("Press "),cljs.core.str(eval_cmd),cljs.core.str(" to evaluate file in REPL.")].join(''));
var G__3278 = CodeMirror.fromTextArea(document.getElementById("editor"),webedit.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'mode","\uFDD0'lineNumbers","\uFDD0'matchBrackets"],{"\uFDD0'mode":"clojure","\uFDD0'lineNumbers":true,"\uFDD0'matchBrackets":true})));
G__3278.setValue((function (){var or__3943__auto__ = webedit.load_item.call(null,"scratch");
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return ";; Develop your clojurescript program here";
}
})());
return G__3278;
});

// Analyzer namespace snapshot:
cljs.core.swap_BANG_.call(null,cljs.core.namespaces,cljs.core.update_in,cljs.core.PersistentVector.fromArray([(new cljs.core.Symbol(null,"webedit"))], true),(function (old){
return cljs.core.deep_merge_with.call(null,(function() { 
var G__3279__delegate = function (m){
return cljs.core.first.call(null,m);
};
var G__3279 = function (var_args){
var m = null;
if (goog.isDef(var_args)) {
  m = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3279__delegate.call(this, m);
};
G__3279.cljs$lang$maxFixedArity = 0;
G__3279.cljs$lang$applyTo = (function (arglist__3280){
var m = cljs.core.seq(arglist__3280);;
return G__3279__delegate(m);
});
G__3279.cljs$lang$arity$variadic = G__3279__delegate;
return G__3279;
})()
,cljs.core.hash_map("\uFDD0'defs",cljs.core.hash_map((new cljs.core.Symbol(null,"setup-editor-toggling")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([])),"\uFDD0'name",(new cljs.core.Symbol(null,"webedit/setup-editor-toggling")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",0,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",64,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/asrinivasan/Code/4clojure/clojurescript/src/cljs/webedit.cljs"),(new cljs.core.Symbol(null,"load-item")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"key"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"key")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"webedit/load-item")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Reads text at key in localStorage.","\uFDD0'line",12,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/asrinivasan/Code/4clojure/clojurescript/src/cljs/webedit.cljs"),(new cljs.core.Symbol(null,"editor-visible-key")),cljs.core.hash_map("\uFDD0'line",45,"\uFDD0'file","/Users/asrinivasan/Code/4clojure/clojurescript/src/cljs/webedit.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"webedit/editor-visible-key"))),(new cljs.core.Symbol(null,"update-link")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"show?"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"show?")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"webedit/update-link")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",56,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/asrinivasan/Code/4clojure/clojurescript/src/cljs/webedit.cljs"),(new cljs.core.Symbol(null,"store-item")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"key")),(new cljs.core.Symbol(null,"text"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"key")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"text")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"webedit/store-item")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Writes text at key in localStorage.","\uFDD0'line",7,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/asrinivasan/Code/4clojure/clojurescript/src/cljs/webedit.cljs"),(new cljs.core.Symbol(null,"map->js")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"m"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"m")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"webedit/map->js")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",19,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/asrinivasan/Code/4clojure/clojurescript/src/cljs/webedit.cljs"),(new cljs.core.Symbol(null,"register-shortcuts")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"editor")),(new cljs.core.Symbol(null,"key-map"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"editor")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"key-map")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"webedit/register-shortcuts")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",33,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/asrinivasan/Code/4clojure/clojurescript/src/cljs/webedit.cljs"),(new cljs.core.Symbol(null,"/")),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"cljs.core//"))),(new cljs.core.Symbol(null,"editor-visible")),cljs.core.hash_map("\uFDD0'line",43,"\uFDD0'file","/Users/asrinivasan/Code/4clojure/clojurescript/src/cljs/webedit.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"webedit/editor-visible"))),(new cljs.core.Symbol(null,"add-updating-watch")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"reference")),(new cljs.core.Symbol(null,"fun"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"reference")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"fun")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"webedit/add-updating-watch")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",61,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/asrinivasan/Code/4clojure/clojurescript/src/cljs/webedit.cljs"),(new cljs.core.Symbol(null,"str-contains?")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"webedit/str-contains?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",25,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/asrinivasan/Code/4clojure/clojurescript/src/cljs/webedit.cljs"),(new cljs.core.Symbol(null,"editor")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([])),"\uFDD0'name",(new cljs.core.Symbol(null,"webedit/editor")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",0,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",73,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/asrinivasan/Code/4clojure/clojurescript/src/cljs/webedit.cljs"),(new cljs.core.Symbol(null,"command-prefix")),cljs.core.hash_map("\uFDD0'line",31,"\uFDD0'file","/Users/asrinivasan/Code/4clojure/clojurescript/src/cljs/webedit.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"webedit/command-prefix"))),(new cljs.core.Symbol(null,"update-editor-visibility")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"show?"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"show?")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"webedit/update-editor-visibility")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",47,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/asrinivasan/Code/4clojure/clojurescript/src/cljs/webedit.cljs"),(new cljs.core.Symbol(null,"store-editor-visibility")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"show?"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"show?")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"webedit/store-editor-visibility")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",53,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/asrinivasan/Code/4clojure/clojurescript/src/cljs/webedit.cljs"),(new cljs.core.Symbol(null,"mac?")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([])),"\uFDD0'name",(new cljs.core.Symbol(null,"webedit/mac?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",0,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",28,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/asrinivasan/Code/4clojure/clojurescript/src/cljs/webedit.cljs")),"\uFDD0'imports",null,"\uFDD0'uses-macros",null,"\uFDD0'requires",cljs.core.hash_map((new cljs.core.Symbol(null,"repl")),(new cljs.core.Symbol(null,"cljs.repl"))),"\uFDD0'uses",null,"\uFDD0'excludes",cljs.core.set([]),"\uFDD0'doc",null,"\uFDD0'name",(new cljs.core.Symbol(null,"webedit"))),old);
}));

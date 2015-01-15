goog.provide('webrepl');
goog.require('cljs.core');
goog.require('webedit');
goog.require('webconsole');
goog.require('cljs.repl');
/**
* Evaluates the editor's file in the REPL console.
*/
webrepl.evaluate_file = (function evaluate_file(editor,console){
var text = editor.getValue();
var prompt_text = webconsole.cancel_input.call(null,console,"Evaluating file...\n");
cljs.repl.eval_print.call(null,text);
webedit.store_item.call(null,"scratch",text);
return webconsole.start_prompt.call(null,console,prompt_text);
});
webrepl.start_app = (function start_app(){
var editor = webedit.editor.call(null);
var console = webconsole.console.call(null,"#console");
webconsole.register_shortcuts.call(null,console,cljs.core.ObjMap.fromObject(["E"],{"E":(function (){
var this_console = this;
return webrepl.evaluate_file.call(null,editor,this_console);
})}));
return webedit.register_shortcuts.call(null,editor,cljs.core.ObjMap.fromObject(["E"],{"E":(function (p1__3259_SHARP_){
return webrepl.evaluate_file.call(null,p1__3259_SHARP_,console);
})}));
});
jQuery(document).ready(webrepl.start_app);

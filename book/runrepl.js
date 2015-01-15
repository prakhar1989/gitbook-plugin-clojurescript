require(["gitbook"], function(gitbook) {
  var init = function() {
    goog.require('himera.client.repl');
    himera.client.repl.go();
    goog.require('cljs.core');
    goog.provide('cljs.user');
  };

  gitbook.events.bind("page.change", function() {
    init();
  });
});

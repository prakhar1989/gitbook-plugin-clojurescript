require(["gitbook"], function(gitbook) {
  var init = function() {
  };

  gitbook.events.bind("page.change", function() {
    init();
  });
});

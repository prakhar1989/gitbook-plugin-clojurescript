require(["gitbook"], function(gitbook) {
  var init = function() {
    var header = 'Clojure REPL!\n';
    window.jqconsole = $('#console').jqconsole(header, 'user=> ');

    // Abort prompt on Ctrl+Z.
    jqconsole.RegisterShortcut('Z', function() {
      jqconsole.AbortPrompt();
      handler();
    });

    jqconsole.RegisterShortcut('A', function() {
      jqconsole.MoveToStart();
      handler();
    });

    jqconsole.RegisterShortcut('E', function() {
      jqconsole.MoveToEnd();
      handler();
    });

    jqconsole.RegisterShortcut('l', function() {
      jqconsole.Clear();
      handler();
    });

    jqconsole.RegisterShortcut('U', function() {
      jqconsole.ClearPromptText();
      handler();
    });

    // Register paren matching
    jqconsole.RegisterMatching('{', '}', 'brace');
    jqconsole.RegisterMatching('(', ')', 'paran');
    jqconsole.RegisterMatching('[', ']', 'bracket');

    function runClojure(code) {
      var data;
      var url = "http://clojurebyexample-repl.herokuapp.com/eval.json";
      $.ajax({
        url: url,
        data: { expr: code },
        async: false,
        success: function(res) { data = res; }
      });
      return data;
    };

    // Handle a command.
    var handler = function(command) {
      if (command) {
        var resp = runClojure(command);
        if (resp.error) {
          jqconsole.Write('ERROR: ' + resp.message + '\n', 'jqconsole-error');
        } else {
          jqconsole.Write(resp.result + '\n');
        }
      }

      jqconsole.Prompt(true, handler, function(command) {
        // Continue line if can't compile the command.
        return false;
      });

    };

    // Initiate the first prompt.
    handler();
  };

  gitbook.events.bind("page.change", function() {
    init();
  });
});

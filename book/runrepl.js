require(["gitbook"], function(gitbook) {
  // Global namespace for this plugin
  var Repl = Repl || {};

  Repl.runCode = function(code) {
    var data;
    var url = this.config.URL;
    $.ajax({
      url: url,
      data: { expr: code },
      async: false,
      success: function(res) { data = res; }
    });
    return data;
  };

  Repl.handler = function(command) {
    var console = Repl.console;

    if (command) {
      var resp = Repl.runCode(command);
      if (resp.error) {
        console.Write('ERROR: ' + resp.message + '\n', 'jqconsole-error');
      } else {
        console.Write(resp.result + '\n');
      }
    }

    // Continue line if can't compile the command.
    console.Prompt(true, Repl.handler, function(command) {
      return false;
    });
  }

  Repl.registerShortcuts = function() {
    var console = Repl.console;

    console.RegisterShortcut('Z', function() {
      console.AbortPrompt();
      handler();
    });

    console.RegisterShortcut('A', function() {
      console.MoveToStart();
      handler();
    });

    console.RegisterShortcut('E', function() {
      console.MoveToEnd();
      handler();
    });

    console.RegisterShortcut('l', function() {
      console.Clear();
      handler();
    });

    console.RegisterShortcut('U', function() {
      console.ClearPromptText();
      handler();
    });

    // Register paren matching
    console.RegisterMatching('{', '}', 'brace');
    console.RegisterMatching('(', ')', 'paran');
    console.RegisterMatching('[', ']', 'bracket');
  };

  Repl.init = function(domElem, header, prompt) {
    Repl.console = $(domElem).jqconsole(header, prompt);
    Repl.config = {
      URL: "http://clojurebyexample-repl.herokuapp.com/eval.json"
    };
    Repl.registerShortcuts();
    Repl.handler();
  };

  gitbook.events.bind("page.change", function() {
    var header = 'Clojure REPL!\n',
        prompt = "user=> ",
        domElem = "#console";
    Repl.init(domElem, header, prompt);
  });
});

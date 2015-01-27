$(function() {
  // Creating the console.
  var header = 'Gimme some Clojure baby!\n';
  window.jqconsole = $('#console').jqconsole(header, 'user=> ');

  // Abort prompt on Ctrl+Z.
  jqconsole.RegisterShortcut('Z', function() {
    jqconsole.AbortPrompt();
    handler();
  });

  // Move to line start Ctrl+A.
  jqconsole.RegisterShortcut('A', function() {
    jqconsole.MoveToStart();
    handler();
  });

  // Move to line end Ctrl+E.
  jqconsole.RegisterShortcut('E', function() {
    jqconsole.MoveToEnd();
    handler();
  });

  jqconsole.RegisterShortcut('l', function() {
    jqconsole.Reset();
    handler();
  });

  // Register paren matching
  jqconsole.RegisterMatching('{', '}', 'brace');
  jqconsole.RegisterMatching('(', ')', 'paran');
  jqconsole.RegisterMatching('[', ']', 'bracket');

  function html_escape(val) {
    var result = val;
    result = result.replace(/\n/g, "<br/>");
    result = result.replace(/[<]/g, "&lt;");
    result = result.replace(/[>]/g, "&gt;");
    return result;
  }

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
      if (resp.error !== "undefined") {
        jqconsole.Write(resp.result + '\n');
      } else {
        jqconsole.Write('ERROR: ' + resp.message + '\n');
      }
    }

    jqconsole.Prompt(true, handler, function(command) {
      // Continue line if can't compile the command.
      return false;
    });

  };

  // Initiate the first prompt.
  handler();
});

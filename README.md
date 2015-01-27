GitBook Plugin - REPL
==============

This is a Gitbook Plugin that allows you to embed a Clojurescript REPL right in your Gitbook! This plugin powers the ClojureScript REPL used in [Clojure By Example]().

![img](shot.png)

### Dependancies
To make this work, you need a service like [Himera](http://himera.herokuapp.com/) which will compile Clojure to Clojurescript.

### Usage
```javascript
{
  "plugins": ["clojurescript"],
  "pluginsConfig": {
    "clojurescript": { "URL": "http://example-herokuapp.com/eval" }
  }
}
```

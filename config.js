System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "es7.decorators"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.1.1",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.2",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.1.1",
    "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.1.3",
    "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.0",
    "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.1.0",
    "babel": "npm:babel-core@5.8.35",
    "babel-runtime": "npm:babel-runtime@5.8.35",
    "core-js": "npm:core-js@1.2.6",
    "traceur": "github:jmcriffey/bower-traceur@0.0.92",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.92",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-binding@1.0.0-beta.1.1.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.3",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.0",
      "core-js": "npm:core-js@2.0.3"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1.1.2": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.3",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.0.3"
    },
    "npm:aurelia-framework@1.0.0-beta.1.1.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.1.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.3",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.0",
      "core-js": "npm:core-js@2.0.3"
    },
    "npm:aurelia-loader@1.0.0-beta.1.1.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.3",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0"
    },
    "npm:aurelia-logging-console@1.0.0-beta.1.1.3": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-metadata@1.0.0-beta.1.1.3": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.0.3"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.1.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.1.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.1.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.0",
      "core-js": "npm:core-js@2.0.3"
    },
    "npm:aurelia-templating@1.0.0-beta.1.1.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.1.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.3",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.0",
      "core-js": "npm:core-js@2.0.3"
    },
    "npm:babel-runtime@5.8.35": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@2.0.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});

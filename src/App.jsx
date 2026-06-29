import { useState } from "react";

import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import JsonEditor from "./components/JsonEditor";
import StatusBar from "./components/StatusBar";
import TreeView from "./components/TreeView";

import { beautifyJson, minifyJson, validateJson } from "./utils/formatter";

function App() {
  const [json, setJson] = useState(`{
  "name": "Json",
  "age": 22,
  "skills": [
    "Formatting",
    "Validate",
    "Minify"
  ]
}`);
  const [status, setStatus] = useState({
    type: "info",
    message: "Ready",
  });

  const beautify = () => {
    try {
      setJson(beautifyJson(json));

      setStatus({
        type: "success",
        message: "✨ JSON Beautified",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message,
      });
    }
  };

  const minify = () => {
    try {
      setJson(minifyJson(json));

      setStatus({
        type: "success",
        message: "📦 JSON Minified",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message,
      });
    }
  };

  const validate = () => {
    try {
      validateJson(json);

      setStatus({
        type: "success",
        message: "✅ Valid JSON",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message,
      });
    }
  };

  const copy = async () => {
    await navigator.clipboard.writeText(json);

    setStatus({
      type: "success",
      message: "📋 Copied to Clipboard",
    });
  };

  const clear = () => {
    setJson("");

    setStatus({
      type: "info",
      message: "Editor Cleared",
    });
  };

  return (
    <div className="app">
      <Header />

      <Toolbar
        onBeautify={beautify}
        onMinify={minify}
        onValidate={validate}
        onCopy={copy}
        onClear={clear}
      />

      <StatusBar status={status} />

      <JsonEditor value={json} onChange={setJson} />

      <TreeView json={json} />
    </div>
  );
}

export default App;

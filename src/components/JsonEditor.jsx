import Editor from "@monaco-editor/react";
import "../styles/editor.css";

function JsonEditor({ value, onChange }) {
  return (
    <section className="editor-container">
      <Editor
        height="500px"
        language="json"
        theme="vs-dark"
        value={value}
        onChange={(value) => onChange(value || "")}
        options={{
          fontSize: 16,
          minimap: { enabled: false },
          wordWrap: "on",
          automaticLayout: true,
          scrollBeyondLastLine: false,
        }}
      />
    </section>
  );
}

export default JsonEditor;

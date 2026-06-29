import "../styles/toolbar.css";

function Toolbar({ onBeautify, onMinify, onValidate, onCopy, onClear }) {
  return (
    <section className="toolbar">
      <button onClick={onBeautify}>Beautify</button>
      <button onClick={onMinify}>Minify</button>
      <button onClick={onValidate}>Validate</button>

      <div className="divider"></div>

      <button onClick={onCopy}>Copy</button>
      <button onClick={onClear}>Clear</button>
    </section>
  );
}

export default Toolbar;

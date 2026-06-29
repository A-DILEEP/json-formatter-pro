import { useState } from "react";
import {
  FaChevronRight,
  FaChevronDown,
  FaFolder,
  FaFolderOpen,
  FaFileAlt,
} from "react-icons/fa";

function TreeNode({ name, value, level }) {
  const [expanded, setExpanded] = useState(level === 0);

  const isObject = typeof value === "object" && value !== null;
  const isArray = Array.isArray(value);

  if (!isObject) {
    return (
      <div
        className="tree-item"
        style={{
          paddingLeft: level * 20,
        }}
      >
        <FaFileAlt className="tree-file" />

        <span className="tree-key">{name}</span>

        <span className="tree-value">{JSON.stringify(value)}</span>
      </div>
    );
  }

  // Objects & Arrays
  return (
    <div>
      <div
        className="tree-item clickable"
        style={{
          paddingLeft: level * 20,
        }}
        onClick={() => setExpanded(!expanded)}
      >
        <span className="tree-arrow">
          {expanded ? <FaChevronDown /> : <FaChevronRight />}
        </span>

        <span className="tree-icon">
          {expanded ? <FaFolderOpen /> : <FaFolder />}
        </span>

        <span className="tree-key">{name}</span>

        <span className="tree-count">
          {isArray ? `[${value.length}]` : `{${Object.keys(value).length}}`}
        </span>
      </div>

      {expanded &&
        Object.entries(value).map(([key, val]) => (
          <TreeNode key={key} name={key} value={val} level={level + 1} />
        ))}
    </div>
  );
}

export default TreeNode;

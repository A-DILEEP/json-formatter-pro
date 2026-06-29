import TreeNode from "./TreeNode";
import "../styles/tree.css";

function TreeView({ json }) {
  if (!json) return null;

  try {
    const parsed = JSON.parse(json);

    return (
      <div className="tree-view">
        <TreeNode name="root" value={parsed} level={0} />
      </div>
    );
  } catch {
    return null;
  }
}

export default TreeView;

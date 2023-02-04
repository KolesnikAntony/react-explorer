export type TreeTypeT = "folder" | "file";
type ChildrenT = TreeNode[];
type ParentT = TreeNode | null;

export class TreeNode {
    key: string;
    type: TreeTypeT;
    value: string;
    parent: ParentT;
    children: ChildrenT;

    constructor(key: string, type: TreeTypeT = "folder", value: string, parent: ParentT | undefined = null, children: ChildrenT | undefined = []) {
        this.key = key;
        this.type = type;
        this.value = value;
        this.parent = parent;
        this.children = children || [];
    }

}

export class Tree {
    root: TreeNode;

    constructor(key: string, type: TreeTypeT, value: string) {
        this.root = new TreeNode(key, type, value);
    }

    * preOrderTraversal(node = this.root): IterableIterator<TreeNode> {
        yield node;
        if (node.children.length) {
            for (let child of node.children) {
                yield* this.preOrderTraversal(child);
            }
        }
    }

    insert(parentNodeKey: string, type: TreeTypeT, key: string, value: string, children?: ChildrenT) {
        for (let node of this.preOrderTraversal()) {
            if (node.type === "folder") {
                if (node.key === parentNodeKey) {
                    node.children.push(new TreeNode(key, type, value, node, children));
                    return true;
                }
            }
        }
        return false;
    }

    remove(key: string) {
        for (let node of this.preOrderTraversal()) {
            const filtered = node.children.filter(c => c.key !== key);
            if (filtered.length !== node.children.length) {
                node.children = filtered;
                return true;
            }
        }
        return false;
    }

    find(key: string) {
        for (let node of this.preOrderTraversal()) {
            if (node.key === key) return node;
        }
        return undefined;
    }
}
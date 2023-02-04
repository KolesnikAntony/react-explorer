class TreeNode {
    constructor(key, type = "folder", value, parent = null, children) {
        this.key = key;
        this.type = type;
        this.value = value;
        this.parent = parent;
        this.children = children || [];
    }

}

export class Tree {
    constructor(key, type, value) {
        this.root = new TreeNode(key, type, value);
    }

    *preOrderTraversal(node = this.root) {
        yield node;
        if (node.children.length) {
            for (let child of node.children) {
                yield* this.preOrderTraversal(child);
            }
        }
    }

    insert(parentNodeKey, type, key, value, children) {
        for (let node of this.preOrderTraversal()) {
            if (node.key === parentNodeKey) {
                node.children.push(new TreeNode(key, type, value, node, children));
                return true;
            }
        }
        return false;
    }

    remove(key) {
        for (let node of this.preOrderTraversal()) {
            const filtered = node.children.filter(c => c.key !== key);
            if (filtered.length !== node.children.length) {
                node.children = filtered;
                return true;
            }
        }
        return false;
    }

    find(key) {
        for (let node of this.preOrderTraversal()) {
            if (node.key === key) return node;
        }
        return undefined;
    }
}
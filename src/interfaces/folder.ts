import {TreeNode} from "../classes/tree";

export interface FileI extends TreeNode {
    type: "file";
}

export interface FolderI extends TreeNode {
    type: "folder";
}


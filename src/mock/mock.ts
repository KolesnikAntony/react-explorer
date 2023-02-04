import {TYPE_OF_TREE} from "../constants/type-of-tree";
import {TreeTypeT} from "../classes/tree";

export const MOCK = {
    root: {
        key: "root",
        type: TYPE_OF_TREE.FOLDER,
        value: "Project",
    },
    children: [
        {parentKey: "root", type: TYPE_OF_TREE.FOLDER, key: "assets", value: "Assets"},
        {parentKey: "assets", type: TYPE_OF_TREE.FOLDER, key: "images", value: "Images"},
        {parentKey: "images", type: TYPE_OF_TREE.FILE, key: "image-1", value: "logo.svg"},
        {parentKey: "images", type: TYPE_OF_TREE.FILE, key: "image-2", value: "fav.svg"},
        {parentKey: "assets", type: TYPE_OF_TREE.FOLDER, key: "fonts", value: "Fonts"},
        {parentKey: "fonts", type: TYPE_OF_TREE.FILE, key: "fonts-1", value: "TimesNewRoman"},
        {parentKey: "fonts", type: TYPE_OF_TREE.FILE, key: "fonts-2", value: "Arial"},
        {parentKey: "root", type: TYPE_OF_TREE.FOLDER, key: "components", value: "Components"},
        {parentKey: "components", type: TYPE_OF_TREE.FILE, key: "component-1", value: "App.tsx"},
        {parentKey: "components", type: TYPE_OF_TREE.FILE, key: "component-2", value: "Wrapper.tsx"},
        {parentKey: "components", type: TYPE_OF_TREE.FILE, key: "component-3", value: "Container.tsx"},
        {parentKey: "components", type: TYPE_OF_TREE.FILE, key: "component-4", value: "Content.tsx"},
        {parentKey: "root", type: TYPE_OF_TREE.FOLDER, key: "hooks", value: "Hooks"},
        {parentKey: "hooks", type: TYPE_OF_TREE.FOLDER, key: "common", value: "Common"},
        {parentKey: "common", type: TYPE_OF_TREE.FILE, key: "com-1", value: "useState.ts"},
        {parentKey: "hooks", type: TYPE_OF_TREE.FILE, key: "hook-1", value: "useToggle.ts"},
        {parentKey: "hooks", type: TYPE_OF_TREE.FILE, key: "hook-3", value: "useTree.ts"},
        {parentKey: "root", type: TYPE_OF_TREE.FOLDER, key: "types", value: "Types"},
        {parentKey: "types", type: TYPE_OF_TREE.FILE, key: "type-1", value: "global.d.ts"},
        {parentKey: "types", type: TYPE_OF_TREE.FILE, key: "type-2", value: "app.d.ts"},
    ] as { parentKey: string, type: TreeTypeT, key: string, value: string }[]
}
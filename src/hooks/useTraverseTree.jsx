/* eslint-disable no-unused-vars */
export const useTraverseTree = () => {
  const insertNode = (isFolder, node, actualTree, folderId) => {
    /* console.log(isFolder) */
    /* console.log(node) */
    /*  console.log(actualTree) */
    /* console.log(folderId) */

    if (folderId == actualTree.id) {
      actualTree.items.push({
        id: new Date().getTime(),
        name: node,
        isFolder,
        items: [],
      });


      return actualTree       
      ;
    }
  };

  return { insertNode };
};

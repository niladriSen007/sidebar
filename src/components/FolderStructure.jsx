/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Folder from "./Folder";
import File from "./File";
import { useTraverseTree } from "../hooks/useTraverseTree";

const FolderStructure = ({ folderStructure }) => {
  const { insertNode } = useTraverseTree();

  const [folderStructureItems, setFolderStructureItems] =
    useState(folderStructure);

  const [expandFolder, setExpandFolder] = useState(false);
  const [showNewFileInput, setShowNewFileInput] = useState({
    visible: false,
    isFolder: false,
  });

  const handleAddFileOrFolder = (e) => {
    if (e.key == "Enter") {

      const newTree = insertNode(
        showNewFileInput?.isFolder,
        e.target.value,
        folderStructure,
        folderStructure?.id
      );
      console.log(newTree)

      setShowNewFileInput({
        ...showNewFileInput,
        visible:false
      })

      setFolderStructureItems(newTree);
    }
    /*  setShowNewFileInput({...showNewFileInput,visible:false}) */
  };

  return (
    <div className="ml-4 ">
      {folderStructureItems?.isFolder ? (
        <>
          <Folder
            folder={folderStructureItems}
            expandFolder={expandFolder}
            setExpandFolder={setExpandFolder}
            showNewFileInput={showNewFileInput}
            setShowNewFileInput={setShowNewFileInput}
          />
        </>
      ) : (
        <>
          <File file={folderStructureItems} />
        </>
      )}
      <div className="ml-4">
        {showNewFileInput?.visible && (
          <input
            type="text"
            className="pl-2 mb-1 ml-5 text-black"
            autoFocus
            onKeyDown={handleAddFileOrFolder}
            placeholder={
              showNewFileInput?.isFolder ? "Add New Folder" : "Add New File"
            }
            onBlur={() => {
              setShowNewFileInput({ ...showNewFileInput, visible: false });
            }}
          />
        )}
        {expandFolder &&
          folderStructureItems?.items?.map((item) => {
            return item?.isFolder ? (
              <FolderStructure folderStructure={item} key={item?.id} />
            ) : (
              <File file={item} key={item?.id} />
            );
          })}
      </div>
    </div>
  );
};
export default FolderStructure;

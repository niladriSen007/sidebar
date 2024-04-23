import { FilePlus, FolderPlus } from "lucide-react";

/* eslint-disable react/prop-types */
const Folder = ({
  folder,
  setExpandFolder,
  expandFolder,
  setShowNewFileInput,
  showNewFileInput,
}) => {
  return (
    <>
      <div
        className="flex items-center gap-2 my-1 text-white cursor-pointer"
        onClick={() => setExpandFolder(!expandFolder)}
      >
        <span>{ expandFolder ? <>📂</> : <>📁</>}</span>
        <span>{folder?.name}</span>
        <div className="flex items-center gap-2">
          <button>
            <FilePlus
              size={18}
              onClick={(e) => {
                e.stopPropagation();
                setExpandFolder(true)
                setShowNewFileInput({
                  visible: !showNewFileInput?.visible,
                  isFolder: false,
                });
              }}
            />
          </button>
          <button>
            <FolderPlus
              size={18}
              onClick={(e) => {
                e.stopPropagation();
                setExpandFolder(true)
                setShowNewFileInput({
                  visible: !showNewFileInput?.visible,
                  isFolder: true,
                });
              }}
            />
          </button>
        </div>
      </div>
    </>
  );
};
export default Folder;

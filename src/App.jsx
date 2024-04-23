/* eslint-disable no-unused-vars */
import FolderStructure from "./components/FolderStructure";
import { folderStructure } from "./utils/folderStructure";

const App = () => {

  

  return (
    <div className="w-screen h-screen py-6 pl-12 text-white bg-slate-900 overflow-x-hidden">
      <FolderStructure folderStructure={folderStructure} />
    </div>
  );
};

export default App;

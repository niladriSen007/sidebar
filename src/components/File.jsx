/* eslint-disable react/prop-types */
const File = ({ file }) => {
  return (
    <div className="flex items-center gap-2 my-1 ml-4 cursor-pointer ext-white">
      <span>🗃️</span>
      <span>{file?.name}</span>
    </div>
  );
};
export default File;

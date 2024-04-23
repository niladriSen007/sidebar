export const folderStructure = {
  id: 1,
  name: "root",
  isFolder: true,
  items: [
    {
      id: 2,
      name: "public",
      isFolder: true,
      items: [
        {
          id: 3,
          name: "images",
          isFolder: true,
          items: [
            {
              id: 4,
              name: "react.svg",
              isFolder: false,
            },
          ],
        },
        {
          id: 5,
          name: "files",
          isFolder: true,
          items: [
            {
              id: 6,
              name: "index.html",
              isFolder: false,
            },
          ],
        },
      ],
    },
    {
      id: 7,
      name: "src",
      isFolder: true,
      items: [
        {
          id: 8,
          name: "App.jsx",
          isFolder: false,
        },
        {
          id: 9,
          name: "index.css",
          isFolder: false,
        },
        {
          id: 10,
          name: "main.jsx",
          isFolder: false,
        },
      ],
    },
    {
      id: 11,
      name: "package.json",
      isFolder: false,
    },
    {
      id: 12,
      name: "package.lock.json",
      isFolder: false,
    },
  ],
};

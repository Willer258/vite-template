import { ReactNode } from "react";
import { AiFillHome } from "react-icons/ai";
import { To } from "react-router-dom";

export interface Ilink {
  label: string;
  link: To;
  icons?: ReactNode;
  subLink?: Ilink[];
}
export const links: Ilink[] = [
  {
    label: "Accueil",
    link: "",
    icons: <AiFillHome />,
  },
  {
    label: "Page2",
    link: "",
    icons: <AiFillHome />,
    subLink: [
      {
        label: "subLink",
        link: "",
        icons: <AiFillHome />,
      },
      {
        label: "subLink2",
        link: "",
        icons: <AiFillHome />,
      },
    ],
  },
  {
    label: "Page3",
    link: "",
    icons: <AiFillHome />,
  },

  {
    label: "Page4",
    link: "",
    icons: <AiFillHome />,
    subLink: [
      {
        label: "subLink6",
        link: "",
        icons: <AiFillHome />,
      },
      {
        label: "subLink7",
        link: "",
        icons: <AiFillHome />,
      },
    ],
  },
];

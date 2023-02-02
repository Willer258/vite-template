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
    icons: <AiFillHome size={20} />,
  },
  {
    label: "Page2",
    link: "",
    icons: <AiFillHome size={20} />,
    subLink: [
      {
        label: "subLink",
        link: "",
        icons: <AiFillHome size={20} />,
      },
      {
        label: "subLink2",
        link: "",
        icons: <AiFillHome size={20} />,
      },
    ],
  },
  {
    label: "Page3",
    link: "",
    icons: <AiFillHome size={20} />,
  },

  {
    label: "Page4",
    link: "",
    icons: <AiFillHome size={20} />,
    subLink: [
      {
        label: "subLink6",
        link: "",
        icons: <AiFillHome size={20} />,
      },
      {
        label: "subLink7",
        link: "",
        icons: <AiFillHome size={20} />,
      },
    ],
  },
];

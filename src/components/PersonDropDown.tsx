import { Menu } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";

interface List {
  name: string;
}

type Props = {
  title: string;
  list: List[];
  handleClick: (value: string) => void;
};

export default function PersonDropDown({ title, list, handleClick }: Props) {
  return (
    <Menu as="div" className="w-full h-full relative bg-card">
      {/* btn */}
      <Menu.Button className="w-full h-full flex items-center justify-between px-8 uppercase font-third">
        {title}
        <BsChevronDown />
      </Menu.Button>
      {/* items */}
      <Menu.Items
        as="ul"
        className="bg-card absolute w-full flex flex-col z-40 uppercase font-third"
      >
        {list.map((li, index) => (
          <Menu.Item
            onClick={() => handleClick(li.name)}
            as="li"
            key={index}
            className="border-b last-of-type:border-b-0 h-12 hover:bg-hover hover:text-white w-full flex justify-center items-center cursor-pointer"
          >
            {li.name}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}

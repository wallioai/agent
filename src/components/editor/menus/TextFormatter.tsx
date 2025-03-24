import { Editor } from "@tiptap/core";
import { MenuBarItem } from "./MenuBar";
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRight,
  BoldIcon,
  ItalicIcon,
  List,
  ListOrderedIcon,
  StrikethroughIcon,
} from "lucide-react";

type Props = {
  editor: Editor;
};

export const TextFormatter: React.FC<Props> = ({ editor }) => {
  const menuItems1: MenuBarItem[] = [
    {
      name: "Bold",
      icon: BoldIcon,
      command: () => editor.chain().focus().toggleBold().run(),
      isActive: () => editor.isActive("bold"),
    },
    {
      name: "Italic",
      icon: ItalicIcon,
      command: () => editor.chain().focus().toggleItalic().run(),
      isActive: () => editor.isActive("italic"),
    },
    {
      name: "Strike",
      icon: StrikethroughIcon,
      command: () => editor.chain().focus().toggleStrike().run(),
      isActive: () => editor.isActive("strike"),
    },
  ];

  const menuItems3: MenuBarItem[] = [
    {
      name: "Bullet List",
      icon: List,
      command: () => editor.chain().focus().toggleBulletList().run(),
      isActive: () => editor.isActive("bulletList"),
    },
    {
      name: "Numbered List",
      icon: ListOrderedIcon,
      command: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: () => editor.isActive("orderedList"),
    },
  ];
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        {menuItems1.map((menu, index) => (
          <button
            key={index}
            type="button"
            onClick={() => {
              menu.command();
            }}
            title={menu.name}
            className={`flex items-center justify-between p-3 border-r border-light text-sm text-medium hover:bg-light ${
              menu.isActive() ? "bg-light" : ""
            }`}
          >
            <menu.icon className="h-5 w-5" />
          </button>
        ))}
      </div>
      <div className="flex items-center">
        {menuItems3.map((menu, index) => (
          <button
            key={index}
            type="button"
            onClick={() => {
              menu.command();
            }}
            title={menu.name}
            className={`flex items-center justify-between rounded-sm p-3 border-r border-light text-sm text-medium hover:bg-light ${
              menu.isActive() ? "bg-light" : ""
            }`}
          >
            <menu.icon className="h-5 w-5" />
          </button>
        ))}
      </div>
    </div>
  );
};

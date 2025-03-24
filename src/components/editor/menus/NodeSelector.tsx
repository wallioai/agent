import { Editor } from "@tiptap/core";
import { MenuBarItem } from "./MenuBar";
import {
  TextIcon,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  ChevronDown,
  Check,
} from "lucide-react";
import * as Popover from "@radix-ui/react-popover";

type Props = {
  editor: Editor;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NodeSelector: React.FC<Props> = ({
  editor,
  isOpen,
  setIsOpen,
}) => {
  const menuItems: MenuBarItem[] = [
    {
      name: "Paragraph",
      icon: TextIcon,
      command: () =>
        editor.chain().focus().toggleNode("paragraph", "paragraph").run(),
      isActive: () =>
        editor.isActive("paragraph") &&
        !editor.isActive("bulletList") &&
        !editor.isActive("orderedList"),
    },
    {
      name: "Heading 1",
      icon: Heading1,
      command: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: () => editor.isActive("heading", { level: 1 }),
    },
    {
      name: "Heading 2",
      icon: Heading2,
      command: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: () => editor.isActive("heading", { level: 2 }),
    },
    {
      name: "Heading 3",
      icon: Heading3,
      command: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: () => editor.isActive("heading", { level: 3 }),
    },
    {
      name: "Heading 4",
      icon: Heading4,
      command: () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
      isActive: () => editor.isActive("heading", { level: 4 }),
    },
    {
      name: "Heading 5",
      icon: Heading5,
      command: () => editor.chain().focus().toggleHeading({ level: 5 }).run(),
      isActive: () => editor.isActive("heading", { level: 5 }),
    },
    {
      name: "Heading 6",
      icon: Heading6,
      command: () => editor.chain().focus().toggleHeading({ level: 6 }).run(),
      isActive: () => editor.isActive("heading", { level: 6 }),
    },
  ];
  const activeItem = menuItems.filter((item) => item.isActive()).pop() ?? {
    name: "Multiple",
  };

  const toggleAction = (menu: MenuBarItem) => {
    menu.command();
    setIsOpen(false);
  };
  return (
    <Popover.Root open={isOpen}>
      <div className="relative h-full px-4">
        <Popover.Trigger
          className="flex h-full justify-between w-36 items-center gap-1 whitespace-nowrap p-2 text-xs font-medium bg-neutral-200 text-neutral-600 hover:bg-neutral-300 rounded-sm active:bg-neutral-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{activeItem?.name}</span>
          <ChevronDown className="h-4 w-4" />
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            align="start"
            className="z-[99999] bg-light my-1 flex max-h-80 w-48 flex-col overflow-hidden overflow-y-auto rounded border border-neutral-200 bg-white p-1 shadow-xl animate-in fade-in slide-in-from-top-1"
          >
            {menuItems.map((menu, index) => (
              <button
                key={index}
                onClick={() => toggleAction(menu)}
                className={`flex items-center justify-between rounded-sm px-2 py-1 text-sm text-neutral-600 hover:bg-neutral-100 ${
                  activeItem.name === menu.name ? "bg-neutral-100" : ""
                }`}
                type="button"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-2">
                    {" "}
                    <menu.icon className="h-3 w-3" />
                  </div>
                  <span>{menu.name}</span>
                </div>
                {activeItem.name === menu.name && <Check className="h-4 w-4" />}
              </button>
            ))}
          </Popover.Content>
        </Popover.Portal>
      </div>
    </Popover.Root>
  );
};

import { Editor } from "@tiptap/core";
import { MenuBarItem } from "./MenuBar";
import { Redo2Icon, Undo2Icon } from "lucide-react";

type Props = {
  editor: Editor;
};
export const UndoRedo: React.FC<Props> = ({ editor }) => {
  const menuItems: MenuBarItem[] = [
    {
      name: "Undo",
      icon: Undo2Icon,
      command: () => editor.chain().focus().undo().run(),
      isActive: () => editor.can().redo(),
    },
    {
      name: "Redo",
      icon: Redo2Icon,
      command: () => editor.chain().focus().redo().run(),
      isActive: () => editor.can().redo(),
    },
  ];
  return (
    <div className="flex items-center md:space-x-7 pl-4">
      <div className="flex items-center space-x-2">
        {menuItems.map((menu, index) => (
          <button
            key={index}
            type="button"
            onClick={() => {
              menu.command();
            }}
            title={menu.name}
            disabled={
              menu.name.toLowerCase() == "redo"
                ? !editor.can().redo()
                : !editor.can().undo()
            }
            className={`flex items-center justify-between rounded-sm p-1 text-sm`}
          >
            <menu.icon className="h-5 w-5" />
          </button>
        ))}
      </div>
    </div>
  );
};

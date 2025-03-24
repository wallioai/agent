import React, {
  useEffect,
  useState,
  useImperativeHandle,
  ForwardedRef,
} from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import { defaultEditorProps } from "./props";
import { defaultExtensions } from "./extensions";
import { MenuBar } from "./menus/MenuBar";
import { countWords } from "@/lib/helpers";
import Placeholder from "@tiptap/extension-placeholder";

export interface EditorHandle {
  clearEditor: () => void;
  focus: () => void;
  setValue: (value?: string) => void;
}

type Props = {
  onUpdate: (value: string) => void;
  onWordCount?: (value: number) => void;
  defaultValue?: string;
  value?: string;
  placeholder?: string;
  onSubmit?: () => void;
};

const Editor = React.forwardRef(
  (
    {
      onUpdate,
      defaultValue,
      onWordCount,
      value,
      placeholder = "What's on your mind?",
      onSubmit,
    }: Props,
    ref: ForwardedRef<EditorHandle>,
  ) => {
    const [hydrated, setHydrated] = useState(false);

    const editor = useEditor({
      content: defaultValue,
      extensions: [
        ...defaultExtensions,
        Placeholder.configure({
          placeholder: ({ node }) => {
            if (node.type.name === "heading") {
              return `Heading ${node.attrs.level}`;
            }
            return placeholder;
          },
          includeChildren: true,
        }),
      ],
      editable: true,
      editorProps: {
        ...defaultEditorProps,
        handleKeyDown: (view, event) => {
          // Check if Enter is pressed without Shift
          if (event.key === "Enter" && !event.shiftKey && onSubmit) {
            event.preventDefault();
            onSubmit();
            return true;
          }
          return false;
        },
      },
      onUpdate: (event) => {
        onUpdate(event.editor.getText());
        const words = countWords(event.editor.getText());
        if (onWordCount) onWordCount(words);
      },
      immediatelyRender: false,
    });

    useImperativeHandle(ref, () => ({
      clearEditor: () => {
        if (editor) {
          editor.commands.clearContent();
        }
      },
      focus: () => {
        if (editor) {
          editor.chain().focus().run();
        }
      },
      setValue: (value?: string) => {
        if (editor && value) {
          editor.commands.setContent(value);
          const words = countWords(value);
          if (onWordCount) onWordCount(words);
        }
      },
    }));

    useEffect(() => {
      if (!editor || hydrated) return;
      if (defaultValue) {
        editor.commands.setContent(defaultValue);
        countWords(editor.getText());
        setHydrated(true);
      }
    }, [editor, defaultValue, hydrated]);

    return (
      <div
        onClick={() => {
          editor?.chain().focus().run();
        }}
        className="flex max-h-[15rem] min-h-[4rem] cursor-text flex-col overflow-hidden"
      >
        <div className="relative flex flex-1 flex-col overflow-hidden">
          {editor && <MenuBar editor={editor} />}
          <div className="scrollbar-hide flex-1 overflow-y-scroll">
            <EditorContent
              editor={editor}
              // onFocus={onFocus}
              // value={value}
            />
          </div>
        </div>
      </div>
    );
  },
);
Editor.displayName = "Editor";
export default Editor;

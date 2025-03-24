import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import BubbleMenu from "@tiptap/extension-bubble-menu";

export const defaultExtensions = [
  StarterKit.configure({
    bulletList: {
      HTMLAttributes: {
        class: "list-disc list-outside leading-1 ml-8 mt-5",
      },
    },
    orderedList: {
      HTMLAttributes: {
        class: "list-decimal list-outside ml-8 mt-5",
      },
    },
    listItem: {
      HTMLAttributes: {
        class: "leading-normal -mt-4",
      },
    },
    dropcursor: {
      color: "#DBEAFE",
      width: 4,
    },
    gapcursor: false,
  }),
  // Placeholder.configure({
  //   placeholder: ({ node }) => {
  //     if (node.type.name === "heading") {
  //       return `Heading ${node.attrs.level}`;
  //     }
  //     return "What's on your mind?";
  //   },
  //   includeChildren: true,
  // }),
  BubbleMenu.configure({
    pluginKey: "bubbleMenuOne",
  }),
];

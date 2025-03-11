import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStarryNight from "rehype-starry-night";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";

// Create a custom remark plugin to add target="_blank" to links
function remarkTargetBlank() {
  return (tree) => {
    visit(tree, "link", (node) => {
      // Add target="_blank" to node.data.hProperties
      node.data = node.data || {};
      node.data.hProperties = node.data.hProperties || {};
      node.data.hProperties.target = "_blank";
      node.data.hProperties.rel = "noopener noreferrer";
    });
  };
}

// Create a rehype plugin for the same purpose (fallback)
function rehypeTargetBlank() {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (node.tagName === "a" && node.properties && node.properties.href) {
        node.properties.target = "_blank";
        node.properties.rel = "noopener noreferrer";
      }
    });
  };
}

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkTargetBlank) // Add our custom plugin
  .use(remarkRehype)
  .use(rehypeTargetBlank) // Add as a fallback
  .use(rehypeStarryNight)
  .use(rehypeStringify);

export async function processMarkdown(content: string): Promise<string> {
  const result = await processor.process(content);
  return result.toString();
}

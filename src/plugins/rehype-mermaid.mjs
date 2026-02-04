import { visit } from 'unist-util-visit';
import { toText } from 'hast-util-to-text';

/**
 * Rehype plugin: transform Mermaid code blocks into div.mermaid so the Mermaid
 * library can render them in the browser. Runs after Shiki, so we match
 * pre[data-language="mermaid"] (emitted by Astro's syntax highlighter).
 */
export default function rehypeMermaid() {
	return (tree) => {
		visit(tree, 'element', (node) => {
			if (node.tagName !== 'pre') return;
			const lang = node.properties?.dataLanguage ?? node.properties?.['data-language'];
			const isMermaid = lang === 'mermaid';
			if (!isMermaid) return;

			const text = toText(node);
			node.tagName = 'div';
			node.properties = { className: ['mermaid'] };
			node.children = [{ type: 'text', value: text }];
		});
	};
}

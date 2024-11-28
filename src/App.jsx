import {
	MDXEditor,
	diffSourcePlugin,
	markdownShortcutPlugin,
	directivesPlugin,
	frontmatterPlugin,
	headingsPlugin,
	imagePlugin,
	linkDialogPlugin,
	linkPlugin,
	listsPlugin,
	quotePlugin,
	tablePlugin,
	thematicBreakPlugin,
	toolbarPlugin,
	codeBlockPlugin,
	codeMirrorPlugin
} from '@mdxeditor/editor'
import { Toolbar } from './Toolbar'
import '@mdxeditor/editor/style.css'
import { useEffect, useRef } from 'react'

// https://github.com/mdx-editor/editor/blob/e8baa67ebc2fda204be0679e77569c79efcba9b2/src/examples/_boilerplate.tsx#L128C8-L148C2
const MOST_PLUGINS = [
	toolbarPlugin({ toolbarContents: () => <Toolbar /> }),
	listsPlugin(),
	quotePlugin(),
	headingsPlugin({ allowedHeadingLevels: [1, 2, 3, 4, 5] }),
	linkPlugin(),
	linkDialogPlugin(),
	imagePlugin(),
	tablePlugin(),
	thematicBreakPlugin(),
	frontmatterPlugin(),
	codeBlockPlugin(),
	codeMirrorPlugin(),
	directivesPlugin(),
	diffSourcePlugin({ viewMode: 'rich-text' }),
	markdownShortcutPlugin()
]

/** This function was created by a generative AI. The prompt was based on the state of this function at the previous commit. https://declare-ai.org/1.0.0/total.html */
function App() {
	const editorRef = useRef(null)

	// Load markdown from localStorage on initial render
	useEffect(() => {
		const savedMarkdown = localStorage.getItem('markdown') || ''
		if (editorRef.current) {
			editorRef.current.setMarkdown(savedMarkdown)
		}
	}, [])

	// Save markdown to localStorage when content changes
	const handleChange = () => {
		if (editorRef.current) {
			const markdown = editorRef.current.getMarkdown()
			localStorage.setItem('markdown', markdown)
		}
	}

	return (
		<MDXEditor
			ref={editorRef}
			markdown=""
			plugins={MOST_PLUGINS}
			onChange={handleChange}
			autoFocus={true}
		/>
	)
}

export default App

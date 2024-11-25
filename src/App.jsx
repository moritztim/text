import { MDXEditor } from '@mdxeditor/editor'
import {
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
  codeMirrorPlugin,
  KitchenSinkToolbar
} from '@mdxeditor/editor' // import everything and the kitchen sink
import '@mdxeditor/editor/style.css'

// https://github.com/mdx-editor/editor/blob/e8baa67ebc2fda204be0679e77569c79efcba9b2/src/examples/_boilerplate.tsx#L128C8-L148C2
const MOST_PLUGINS = [
  toolbarPlugin({ toolbarContents: () => <KitchenSinkToolbar /> }),
  listsPlugin(),
  quotePlugin(),
  headingsPlugin({ allowedHeadingLevels: [1, 2, 3] }),
  linkPlugin(),
  linkDialogPlugin(),
  imagePlugin(),
  tablePlugin(),
  thematicBreakPlugin(),
  frontmatterPlugin(),
  codeBlockPlugin({ defaultCodeBlockLanguage: '' }),
  codeMirrorPlugin(),
  directivesPlugin(),
  diffSourcePlugin({ viewMode: 'rich-text', diffMarkdown: 'boo' }),
  markdownShortcutPlugin()
]

function App() {
  return <MDXEditor markdown="" plugins={MOST_PLUGINS} />
}

export default App

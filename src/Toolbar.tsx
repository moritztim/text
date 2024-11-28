// Based on https://github.com/mdx-editor/editor/blob/e8baa67ebc2fda204be0679e77569c79efcba9b2/src/plugins/toolbar/components/KitchenSinkToolbar.tsx
import React from 'react'
import { AdmonitionKind } from 'lexical'
import type { DirectiveNode } from '@mdxeditor/editor'
import {
	EditorInFocus,
	ConditionalContents, Separator,
	BlockTypeSelect,
	BoldItalicUnderlineToggles, StrikeThroughSupSubToggles,
	ChangeAdmonitionType,
	ChangeCodeMirrorLanguage,
	CodeToggle,
	DiffSourceToggleWrapper,
	InsertAdmonition,
	InsertCodeBlock,
	InsertFrontmatter,
	InsertImage,
	InsertTable,
	InsertThematicBreak,
	ListsToggle,
	UndoRedo,
	CreateLink,
} from '@mdxeditor/editor'

function whenInAdmonition(editorInFocus: EditorInFocus | null) {
  const node = editorInFocus?.rootNode
  if (!node || node.getType() !== 'directive') {
    return false
  }

  return ['note', 'tip', 'danger', 'info', 'caution'].includes((node as DirectiveNode).getMdastNode().name as AdmonitionKind)
}

/**
 * A toolbar component that includes all toolbar components.
 * Notice that some of the buttons will work only if you have the corresponding plugin enabled, so you should use it only for testing purposes.
 * You'll probably want to create your own toolbar component that includes only the buttons that you need.
 * @group Toolbar Components
 */
export const Toolbar: React.FC = () => {
  return (
	  <DiffSourceToggleWrapper
	  	options={["rich-text", "source"]}
	  >
      <ConditionalContents
        options={[
          { when: (editor) => editor?.editorType === 'codeblock', contents: () => <ChangeCodeMirrorLanguage /> },
          {
            fallback: () => (
              <>
                <UndoRedo />
                <Separator />
                <BoldItalicUnderlineToggles />
                <CodeToggle />
                <Separator />
                <StrikeThroughSupSubToggles />
                <Separator />
                <ListsToggle />
                <Separator />

                <ConditionalContents
                  options={[{ when: whenInAdmonition, contents: () => <ChangeAdmonitionType /> }, { fallback: () => <BlockTypeSelect /> }]}
                />

                <Separator />

                <CreateLink />
                <InsertImage />

                <Separator />

                <InsertTable />
                <InsertThematicBreak />

                <Separator />
                <InsertCodeBlock />

                <ConditionalContents
                  options={[
                    {
                      when: (editorInFocus) => !whenInAdmonition(editorInFocus),
                      contents: () => (
                        <>
                          <Separator />
                          <InsertAdmonition />
                        </>
                      )
                    }
                  ]}
                />

                <Separator />
                <InsertFrontmatter />
              </>
            )
          }
        ]}
      />
    </DiffSourceToggleWrapper>
  )
}
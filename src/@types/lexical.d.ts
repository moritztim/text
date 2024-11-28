// https://github.com/forhappy/editor/blob/0958d2adc9950556eba02a0e2fb87dee748afa0d/src/%40types/lexical/index.d.ts
import 'lexical'
import { EditorConfig as LexicalEditorConfig, EditorThemeClasses as LexicalEditorThemeClasses } from 'lexical'

declare module 'lexical' {
	export type AdmonitionKind = 'note' | 'tip' | 'danger' | 'info' | 'caution'

	type EditorThemeClasses = LexicalEditorThemeClasses & {
		admonition: {
			[key in AdmonitionKind]: string
		}
		someMore: string
	}

	declare type EditorConfig = LexicalEditorConfig & {
		theme: EditorThemeClasses
	}
}

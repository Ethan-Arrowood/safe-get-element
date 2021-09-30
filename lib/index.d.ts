declare type TagNames = 'button' | 'input' | 'select' | 'textarea' | 'tbody';
declare type TagNameMap<TagName extends TagNames> = TagName extends 'button' ? HTMLButtonElement : TagName extends 'input' ? HTMLInputElement : TagName extends 'select' ? HTMLSelectElement : TagName extends 'textarea' ? HTMLTextAreaElement : TagName extends 'tbody' ? HTMLTableSectionElement : never;
export declare function safeGetElement(id: string): HTMLElement;
export declare function safeGetElement<TagName extends TagNames>(id: string, assertType: TagName): TagNameMap<TagName>;
export {};
//# sourceMappingURL=index.d.ts.map
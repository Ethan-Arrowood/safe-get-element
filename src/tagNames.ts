const tagNames = [
    'html',
    'base',
    'head',
    'link',
    'meta',
    'style',
    'title',
    'body',
    'address',
    'article',
    'aside',
    'footer',
    'header',
    'h1',
    'main',
    'nav',
    'section',
    'blockquote',
    'dd',
    'div',
    'dl',
    'dt',
    'figcaption',
    'figure',
    'hr',
    'li',
    'ol',
    'p',
    'pre',
    'ul',
    'a',
    'abbr',
    'b',
    'bdi',
    'bdo',
    'br',
    'cite',
    'code',
    'data',
    'dfn',
    'em',
    'i',
    'kbd',
    'mark',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'small',
    'span',
    'strong',
    'sub',
    'sup',
    'time',
    'u',
    'var',
    'wbr',
    'area',
    'audio',
    'img',
    'map',
    'track',
    'video',
    'embed',
    'iframe',
    'object',
    'param',
    'picture',
    'portal',
    'source',
    'svg',
    'math',
    'canvas',
    'noscript',
    'script',
    'del',
    'ins',
    'caption',
    'col',
    'colgroup',
    'table',
    'tbody',
    'math',
    'td',
    'tfoot',
    'th',
    'thead',
    'tr',
    'button',
    'datalist',
    'fieldset',
    'form',
    'input',
    'label',
    'legend',
    'meter',
    'optgroup',
    'option',
    'output',
    'progress',
    'select',
    'textarea',
    'details',
    'dialog',
    'menu',
    'summary',
    'slot',
    'template',
    'acronym',
    'applet',
    'basefont',
    'bgsound',
    'big',
    'blink',
    'center',
    'content',
    'dir',
    'font',
    'frame',
    'frameset',
    'hgroup',
    'image',
    'keygen',
    'marquee',
    'menuitem',
    'nobr',
    'noembed',
    'noframes',
    'plaintext',
    'rb',
    'rtc',
    'shadow',
    'spacer',
    'strike',
    'tt',
    'xmp',
] as const;

type TagNames = 'button' | 'input' | 'select' | 'textarea' | 'tbody';

type TagNameMap<T extends TagNames> =
  // Main root
  T extends 'html' ? HTMLHtmlElement
    // Document metadata
    : T extends 'base' ? unknown
    : T extends 'head' ? unknown
    : T extends 'link' ? unknown
    : T extends 'meta' ? unknown
    : T extends 'style' ? unknown
    : T extends 'title' ? unknown
    // Sectioning root
    : T extends 'body' ? unknown
    // Content sectioning
    : T extends 'address' ? unknown
    : T extends 'article' ? unknown
    : T extends 'aside' ? unknown
    : T extends 'footer' ? unknown
    : T extends 'header' ? unknown
    : T extends 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' ? unknown
    : T extends 'main' ? unknown
    : T extends 'nav' ? unknown
    : T extends 'section' ? unknown
    // Text content
    : T extends 'blockquote' ? unknown
    : T extends 'dd' ? unknown
    : T extends 'div' ? unknown
    : T extends 'dl' ? unknown
    : T extends 'dt' ? unknown
    : T extends 'figcaption' ? unknown
    : T extends 'figure' ? unknown
    : T extends 'hr' ? unknown
    : T extends 'li' ? unknown
    : T extends 'ol' ? unknown
    : T extends 'p' ? unknown
    : T extends 'pre' ? unknown
    : T extends 'ul' ? unknown
    // Inline text semantics
    : T extends 'a' ? unknown
    : T extends 'abbr' ? unknown
    : T extends 'b' ? unknown
    : T extends 'bdi' ? unknown
    : T extends 'bdo' ? unknown
    : T extends 'br' ? unknown
    : T extends 'cite' ? unknown
    : T extends 'code' ? unknown
    : T extends 'data' ? unknown
    : T extends 'dfn' ? unknown
    : T extends 'em' ? unknown
    : T extends 'i' ? unknown
    : T extends 'kbd' ? unknown
    : T extends 'mark' ? unknown
    : T extends 'q' ? unknown
    : T extends 'rp' ? unknown
    : T extends 'rt' ? unknown
    : T extends 'ruby' ? unknown
    : T extends 's' ? unknown
    : T extends 'samp' ? unknown
    : T extends 'small' ? unknown
    : T extends 'span' ? unknown
    : T extends 'strong' ? unknown
    : T extends 'sub' ? unknown
    : T extends 'sup' ? unknown
    : T extends 'time' ? unknown
    : T extends 'u' ? unknown
    : T extends 'var' ? unknown
    : T extends 'wbr' ? unknown
    // Image and multimedia
    : T extends 'area' ? unknown
    : T extends 'audio' ? unknown
    : T extends 'img' ? unknown
    : T extends 'map' ? unknown
    : T extends 'track' ? unknown
    : T extends 'video' ? unknown
    // Embedded content
    : T extends 'embed' ? unknown
    : T extends 'iframe' ? unknown
    : T extends 'object' ? unknown
    : T extends 'param' ? unknown
    : T extends 'picture' ? unknown
    : T extends 'portal' ? unknown
    : T extends 'source' ? unknown
    // SVG and MathML
    : T extends 'svg' ? unknown
    : T extends 'math' ? unknown
    // Scripting
    : T extends 'canvas' ? unknown
    : T extends 'noscript' ? unknown
    : T extends 'script' ? unknown
    // Demarcating edits
    : T extends 'del' ? unknown
    : T extends 'ins' ? unknown
    // Table content
    : T extends 'caption' ? unknown
    : T extends 'col' ? unknown
    : T extends 'colgroup' ? unknown
    : T extends 'table' ? unknown
    : T extends 'tbody' ? unknown
    : T extends 'math' ? unknown
    : T extends 'td' ? unknown
    : T extends 'tfoot' ? unknown
    : T extends 'th' ? unknown
    : T extends 'thead' ? unknown
    : T extends 'tr' ? unknown
    // Forms
    : T extends 'button' ? unknown
    : T extends 'datalist' ? unknown
    : T extends 'fieldset' ? unknown
    : T extends 'form' ? unknown
    : T extends 'input' ? unknown
    : T extends 'label' ? unknown
    : T extends 'legend' ? unknown
    : T extends 'meter' ? unknown
    : T extends 'optgroup' ? unknown
    : T extends 'option' ? unknown
    : T extends 'output' ? unknown
    : T extends 'progress' ? unknown
    : T extends 'select' ? unknown
    : T extends 'textarea' ? unknown
    // Interactive elements
    : T extends 'details' ? unknown
    : T extends 'dialog' ? unknown
    : T extends 'menu' ? unknown
    : T extends 'summary' ? unknown
    // Web Components
    : T extends 'slot' ? unknown
    : T extends 'template' ? unknown
    // Obsolete and deprecated elements
    : T extends 'acronym' ? unknown
    : T extends 'applet' ? unknown
    : T extends 'basefont' ? unknown
    : T extends 'bgsound' ? unknown
    : T extends 'big' ? unknown
    : T extends 'blink' ? unknown
    : T extends 'center' ? unknown
    : T extends 'content' ? unknown
    : T extends 'dir' ? unknown
    : T extends 'font' ? unknown
    : T extends 'frame' ? unknown
    : T extends 'frameset' ? unknown
    : T extends 'hgroup' ? unknown
    : T extends 'image' ? unknown
    : T extends 'keygen' ? unknown
    : T extends 'marquee' ? unknown
    : T extends 'menuitem' ? unknown
    : T extends 'nobr' ? unknown
    : T extends 'noembed' ? unknown
    : T extends 'noframes' ? unknown
    : T extends 'plaintext' ? unknown
    : T extends 'rb' ? unknown
    : T extends 'rtc' ? unknown
    : T extends 'shadow' ? unknown
    : T extends 'spacer' ? unknown
    : T extends 'strike' ? unknown
    : T extends 'tt' ? unknown
    : T extends 'xmp' ? unknown
    : never
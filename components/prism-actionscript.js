/* TODO
	Fix XML highlighting
 */

Prism.languages.actionscript = Prism.languages.extend('javascript',  {
	'keyword': /\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with|dynamic|each|final|get|include|namespace|native|override|set|static)\b/,
	'number': /\b-?(\d*\.?\d+([Ee][+-]?\d+)?|NaN|-?Infinity)\b/g,
	'operator': /(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=)=?|[=~?@]/,
	'function': /(?!\d)[a-z0-9_$]+(?=\()/ig
});
Prism.languages.actionscript['class-name'].alias = 'function';

if (Prism.languages.markup) {
	Prism.languages.insertBefore('actionscript', 'operator', {
		'xml': {
			pattern: /(^|[^.])<[\s\S]*>(?=\s*($|[\r\n,.;\]})<]))/,
			inside: {
				rest: Prism.languages.markup
			}
		}
	});
}
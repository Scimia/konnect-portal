(function(s){var n=['"(?:\\\\[^]|\\$\\([^)]+\\)|\\$(?!\\()|`[^`]+`|[^"\\\\`$])*"',"'[^']*'","\\$'(?:[^'\\\\]|\\\\[^])*'",`<<-?\\s*(["']?)(\\w+)\\1\\s[^]*?[\r
]\\2`].join("|");s.languages["shell-session"]={command:{pattern:RegExp(`^(?:[^\\s@:$#%*!/\\\\]+@[^\r
@:$#%*!/\\\\]+(?::[^\0-\\x1F$#%*?"<>:;|]+)?|[/~.][^\0-\\x1F$#%*?"<>@:;|]*)?[$#%](?=\\s)`+`(?:[^\\\\\r
 	'"<$]|[ 	](?:(?!#)|#.*$)|\\\\(?:[^\r]|\r
?)|\\$(?!')|<(?!<)|<<str>>)+`.replace(/<<str>>/g,function(){return n}),"m"),greedy:!0,inside:{info:{pattern:/^[^#$%]+/,alias:"punctuation",inside:{user:/^[^\s@:$#%*!/\\]+@[^\r\n@:$#%*!/\\]+/,punctuation:/:/,path:/[\s\S]+/}},bash:{pattern:/(^[$#%]\s*)\S[\s\S]*/,lookbehind:!0,alias:"language-bash",inside:s.languages.bash},"shell-symbol":{pattern:/^[$#%]/,alias:"important"}}},output:/.(?:.*(?:[\r\n]|.$))*/},s.languages["sh-session"]=s.languages.shellsession=s.languages["shell-session"]})(Prism);

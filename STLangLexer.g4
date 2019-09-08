lexer grammar STLangLexer;

// Literal
NUM_INT_DEC : [0-9]+;
NUM_INT_BIN : '2#' [0-1_]+;
NUM_INT_OCT : '8#' [0-7]+;
NUM_INT_HEX : '16#' [0-9A-Za-z]+;
NUM_REAL : [0-9]+ (('.' [0-9]* EXPONENT?)? | EXPONENT);
fragment EXPONENT : E (PLUS | MINUS)? [0-9]+;
STRING_LITERAL : '\'' ('\'\'' | ~('\''))* '\'';
WSTRING_LITERAL : '"' ('""' | ~('"'))* '"';

// Symbols
PLUS: '+';
MINUS: '-';
ASTERISK: '*';
SLASH: '/';
POWER: '**';
LT: '<';
GT: '>';
LE: '<=';
GE: '>=';
EQ: '=';
NEQ: '<>';
ASSIGN: ':=';
OUTREF: '=>';
RANGE: '..';
COMMA: ',';
LPAREN: '(';
RPAREN: ')';
LBRACK: '[';
RBRACK: ']';
COLON: ':';
SEMICOLON: ';';
AMPERSAND: '&';
SHARP: '#';

// Keywords
TRUE: T R U E;
FALSE: F A L S E;
IF: I F;
THEN: T H E N;
ELSIF: E L S I F;
ELSE: E L S E;
END_IF: E N D '_' IF;
CASE: C A S E;
OF: O F;
END_CASE: E N D '_' CASE;
FOR: F O R;
TO: T O;
BY: B Y;
DO: D O;
END_FOR: E N D '_' FOR;
REPEAT: R E P E A T;
UNTIL: U N T I L;
END_REPEAT: E N D '_' REPEAT;
WHILE: W H I L E;
END_WHILE: E N D '_' WHILE;
CONTINUE: C O N T I N U E;
EXIT: E X I T;
RETURN: R E T U R N;
MOD: M O D;
AND: A N D;
OR: O R;
XOR: X O R;
NOT: N O T;

// Type
BOOL: B O O L;
INT: I N T;
DINT: D INT;
UINT: U INT;
UDINT: U DINT;
WORD: W O R D;
DWORD: D WORD;
REAL: R E A L;
LREAL: L REAL;
STRING: S T R I N G;
WSTRING: W STRING;

// Identifier
IDENTIFIER: ID_START ID_CONTINUE*;
fragment ID_START: [A-Za-z_];
fragment ID_CONTINUE: ID_START | [0-9];

// Comment & spaces & line
WS: [ \t]+ -> skip;
EOL: ('\r'? '\n' | '\r') -> skip;
SINGLE_LINE_COMMENT: '//' ~[\r\n]* -> skip;
MULTI_LINE_COMMENT_START: '/*' -> skip, pushMode(COMMENT_MODE);

fragment A: [Aa];
fragment B: [Bb];
fragment C: [Cc];
fragment D: [Dd];
fragment E: [Ee];
fragment F: [Ff];
fragment G: [Gg];
fragment H: [Hh];
fragment I: [Ii];
fragment J: [Jj];
fragment K: [Kk];
fragment L: [Ll];
fragment M: [Mm];
fragment N: [Nn];
fragment O: [Oo];
fragment P: [Pp];
fragment Q: [Qq];
fragment R: [Rr];
fragment S: [Ss];
fragment T: [Tt];
fragment U: [Uu];
fragment V: [Vv];
fragment W: [Ww];
fragment X: [Xx];
fragment Y: [Yy];
fragment Z: [Zz];

// Comment Mode
mode COMMENT_MODE;
COMMENTS: . -> skip;
MULTI_LINE_COMMENT_START2: '/*' -> skip, pushMode(COMMENT_MODE);
MULTI_LINE_COMMENT_END: '*/' -> skip, popMode;

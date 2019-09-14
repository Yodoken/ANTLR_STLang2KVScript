// Generated from STLangParser.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var STLangParserVisitor = require('./STLangParserVisitor').STLangParserVisitor;

var grammarFileName = "STLangParser.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003O\u013c\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0005\u0003A\n\u0003\u0003",
    "\u0003\u0007\u0003D\n\u0003\f\u0003\u000e\u0003G\u000b\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004S\n\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0005\u0006\\\n\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0005\u0007h\n\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0007\n\u0083\n\n\f\n\u000e\n\u0086\u000b",
    "\n\u0003\n\u0003\n\u0005\n\u008a\n\n\u0003\n\u0003\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u0092\n\u000b\f\u000b\u000e",
    "\u000b\u0095\u000b\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u0099\n",
    "\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0007\f\u00a0",
    "\n\f\f\f\u000e\f\u00a3\u000b\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0007\f\u00ab\n\f\f\f\u000e\f\u00ae\u000b\f\u0003\f\u0003",
    "\f\u0005\f\u00b2\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r",
    "\u00b9\n\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010",
    "\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00c4\n",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0005\u0011\u00cd\n\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0005\u0011\u00d3\n\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0007\u0011\u00ed",
    "\n\u0011\f\u0011\u000e\u0011\u00f0\u000b\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0007\u0012\u00f5\n\u0012\f\u0012\u000e\u0012\u00f8\u000b",
    "\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u0103\n\u0013",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u0108\n\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u010e\n\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014",
    "\u011b\n\u0014\u0003\u0014\u0005\u0014\u011e\n\u0014\u0003\u0015\u0003",
    "\u0015\u0005\u0015\u0122\n\u0015\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0005\u0016\u0128\n\u0016\u0003\u0017\u0003\u0017\u0003",
    "\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003",
    "\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0005",
    "\u001d\u0138\n\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0002\u0003",
    " \u001f\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \"$&(*,.02468:\u0002\u000b\u0004\u0002\n\u000b<<",
    "\u0004\u0002\f\r88\u0003\u0002\n\u000b\u0003\u0002\u000f\u0012\u0003",
    "\u0002\u0013\u0014\u0004\u0002\u001f\u001f99\u0003\u0002!\"\u0004\u0002",
    "=BDE\u0003\u0002FG\u0002\u0150\u0002<\u0003\u0002\u0002\u0002\u0004",
    "E\u0003\u0002\u0002\u0002\u0006R\u0003\u0002\u0002\u0002\bT\u0003\u0002",
    "\u0002\u0002\nX\u0003\u0002\u0002\u0002\f_\u0003\u0002\u0002\u0002\u000e",
    "m\u0003\u0002\u0002\u0002\u0010s\u0003\u0002\u0002\u0002\u0012y\u0003",
    "\u0002\u0002\u0002\u0014\u008d\u0003\u0002\u0002\u0002\u0016\u00b1\u0003",
    "\u0002\u0002\u0002\u0018\u00b8\u0003\u0002\u0002\u0002\u001a\u00ba\u0003",
    "\u0002\u0002\u0002\u001c\u00bc\u0003\u0002\u0002\u0002\u001e\u00be\u0003",
    "\u0002\u0002\u0002 \u00d2\u0003\u0002\u0002\u0002\"\u00f1\u0003\u0002",
    "\u0002\u0002$\u0102\u0003\u0002\u0002\u0002&\u011d\u0003\u0002\u0002",
    "\u0002(\u0121\u0003\u0002\u0002\u0002*\u0127\u0003\u0002\u0002\u0002",
    ",\u0129\u0003\u0002\u0002\u0002.\u012b\u0003\u0002\u0002\u00020\u012d",
    "\u0003\u0002\u0002\u00022\u012f\u0003\u0002\u0002\u00024\u0131\u0003",
    "\u0002\u0002\u00026\u0133\u0003\u0002\u0002\u00028\u0137\u0003\u0002",
    "\u0002\u0002:\u0139\u0003\u0002\u0002\u0002<=\u0005\u0004\u0003\u0002",
    "=>\u0007\u0002\u0002\u0003>\u0003\u0003\u0002\u0002\u0002?A\u0005\u0006",
    "\u0004\u0002@?\u0003\u0002\u0002\u0002@A\u0003\u0002\u0002\u0002AB\u0003",
    "\u0002\u0002\u0002BD\u0007\u001e\u0002\u0002C@\u0003\u0002\u0002\u0002",
    "DG\u0003\u0002\u0002\u0002EC\u0003\u0002\u0002\u0002EF\u0003\u0002\u0002",
    "\u0002F\u0005\u0003\u0002\u0002\u0002GE\u0003\u0002\u0002\u0002HS\u0005",
    "\b\u0005\u0002IS\u0005\n\u0006\u0002JS\u0005\u001e\u0010\u0002KS\u0005",
    "\u0012\n\u0002LS\u0005\u0014\u000b\u0002MS\u0005\f\u0007\u0002NS\u0005",
    "\u000e\b\u0002OS\u0005\u0010\t\u0002PS\u0005\u001a\u000e\u0002QS\u0005",
    "\u001c\u000f\u0002RH\u0003\u0002\u0002\u0002RI\u0003\u0002\u0002\u0002",
    "RJ\u0003\u0002\u0002\u0002RK\u0003\u0002\u0002\u0002RL\u0003\u0002\u0002",
    "\u0002RM\u0003\u0002\u0002\u0002RN\u0003\u0002\u0002\u0002RO\u0003\u0002",
    "\u0002\u0002RP\u0003\u0002\u0002\u0002RQ\u0003\u0002\u0002\u0002S\u0007",
    "\u0003\u0002\u0002\u0002TU\u00056\u001c\u0002UV\u0007\u0015\u0002\u0002",
    "VW\u0005 \u0011\u0002W\t\u0003\u0002\u0002\u0002XY\u0005:\u001e\u0002",
    "Y[\u0007\u0019\u0002\u0002Z\\\u0005\"\u0012\u0002[Z\u0003\u0002\u0002",
    "\u0002[\\\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002]^\u0007",
    "\u001a\u0002\u0002^\u000b\u0003\u0002\u0002\u0002_`\u0007+\u0002\u0002",
    "`a\u0005:\u001e\u0002ab\u0007\u0015\u0002\u0002bc\u0005 \u0011\u0002",
    "cd\u0007,\u0002\u0002dg\u0005 \u0011\u0002ef\u0007-\u0002\u0002fh\u0005",
    " \u0011\u0002ge\u0003\u0002\u0002\u0002gh\u0003\u0002\u0002\u0002hi",
    "\u0003\u0002\u0002\u0002ij\u0007.\u0002\u0002jk\u0005\u0004\u0003\u0002",
    "kl\u0007/\u0002\u0002l\r\u0003\u0002\u0002\u0002mn\u00073\u0002\u0002",
    "no\u0005 \u0011\u0002op\u0007.\u0002\u0002pq\u0005\u0004\u0003\u0002",
    "qr\u00074\u0002\u0002r\u000f\u0003\u0002\u0002\u0002st\u00070\u0002",
    "\u0002tu\u0005\u0004\u0003\u0002uv\u00071\u0002\u0002vw\u0005 \u0011",
    "\u0002wx\u00072\u0002\u0002x\u0011\u0003\u0002\u0002\u0002yz\u0007#",
    "\u0002\u0002z{\u0005 \u0011\u0002{|\u0007$\u0002\u0002|\u0084\u0005",
    "\u0004\u0003\u0002}~\u0007%\u0002\u0002~\u007f\u0005 \u0011\u0002\u007f",
    "\u0080\u0007$\u0002\u0002\u0080\u0081\u0005\u0004\u0003\u0002\u0081",
    "\u0083\u0003\u0002\u0002\u0002\u0082}\u0003\u0002\u0002\u0002\u0083",
    "\u0086\u0003\u0002\u0002\u0002\u0084\u0082\u0003\u0002\u0002\u0002\u0084",
    "\u0085\u0003\u0002\u0002\u0002\u0085\u0089\u0003\u0002\u0002\u0002\u0086",
    "\u0084\u0003\u0002\u0002\u0002\u0087\u0088\u0007&\u0002\u0002\u0088",
    "\u008a\u0005\u0004\u0003\u0002\u0089\u0087\u0003\u0002\u0002\u0002\u0089",
    "\u008a\u0003\u0002\u0002\u0002\u008a\u008b\u0003\u0002\u0002\u0002\u008b",
    "\u008c\u0007\'\u0002\u0002\u008c\u0013\u0003\u0002\u0002\u0002\u008d",
    "\u008e\u0007(\u0002\u0002\u008e\u008f\u0005 \u0011\u0002\u008f\u0093",
    "\u0007)\u0002\u0002\u0090\u0092\u0005\u0016\f\u0002\u0091\u0090\u0003",
    "\u0002\u0002\u0002\u0092\u0095\u0003\u0002\u0002\u0002\u0093\u0091\u0003",
    "\u0002\u0002\u0002\u0093\u0094\u0003\u0002\u0002\u0002\u0094\u0098\u0003",
    "\u0002\u0002\u0002\u0095\u0093\u0003\u0002\u0002\u0002\u0096\u0097\u0007",
    "&\u0002\u0002\u0097\u0099\u0005\u0004\u0003\u0002\u0098\u0096\u0003",
    "\u0002\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099\u009a\u0003",
    "\u0002\u0002\u0002\u009a\u009b\u0007*\u0002\u0002\u009b\u0015\u0003",
    "\u0002\u0002\u0002\u009c\u00a1\u0005\u0018\r\u0002\u009d\u009e\u0007",
    "\u0018\u0002\u0002\u009e\u00a0\u0005\u0018\r\u0002\u009f\u009d\u0003",
    "\u0002\u0002\u0002\u00a0\u00a3\u0003\u0002\u0002\u0002\u00a1\u009f\u0003",
    "\u0002\u0002\u0002\u00a1\u00a2\u0003\u0002\u0002\u0002\u00a2\u00a4\u0003",
    "\u0002\u0002\u0002\u00a3\u00a1\u0003\u0002\u0002\u0002\u00a4\u00a5\u0007",
    "\u001d\u0002\u0002\u00a5\u00a6\u0005\u0004\u0003\u0002\u00a6\u00b2\u0003",
    "\u0002\u0002\u0002\u00a7\u00ac\u0005\u0018\r\u0002\u00a8\u00a9\u0007",
    "\u0018\u0002\u0002\u00a9\u00ab\u0005\u0018\r\u0002\u00aa\u00a8\u0003",
    "\u0002\u0002\u0002\u00ab\u00ae\u0003\u0002\u0002\u0002\u00ac\u00aa\u0003",
    "\u0002\u0002\u0002\u00ac\u00ad\u0003\u0002\u0002\u0002\u00ad\u00af\u0003",
    "\u0002\u0002\u0002\u00ae\u00ac\u0003\u0002\u0002\u0002\u00af\u00b0\u0007",
    "\u001d\u0002\u0002\u00b0\u00b2\u0003\u0002\u0002\u0002\u00b1\u009c\u0003",
    "\u0002\u0002\u0002\u00b1\u00a7\u0003\u0002\u0002\u0002\u00b2\u0017\u0003",
    "\u0002\u0002\u0002\u00b3\u00b9\u0005&\u0014\u0002\u00b4\u00b5\u0005",
    "&\u0014\u0002\u00b5\u00b6\u0007\u0017\u0002\u0002\u00b6\u00b7\u0005",
    "&\u0014\u0002\u00b7\u00b9\u0003\u0002\u0002\u0002\u00b8\u00b3\u0003",
    "\u0002\u0002\u0002\u00b8\u00b4\u0003\u0002\u0002\u0002\u00b9\u0019\u0003",
    "\u0002\u0002\u0002\u00ba\u00bb\u00075\u0002\u0002\u00bb\u001b\u0003",
    "\u0002\u0002\u0002\u00bc\u00bd\u00076\u0002\u0002\u00bd\u001d\u0003",
    "\u0002\u0002\u0002\u00be\u00bf\u00077\u0002\u0002\u00bf\u001f\u0003",
    "\u0002\u0002\u0002\u00c0\u00c3\b\u0011\u0001\u0002\u00c1\u00c4\u0005",
    "&\u0014\u0002\u00c2\u00c4\u00056\u001c\u0002\u00c3\u00c1\u0003\u0002",
    "\u0002\u0002\u00c3\u00c2\u0003\u0002\u0002\u0002\u00c4\u00d3\u0003\u0002",
    "\u0002\u0002\u00c5\u00c6\u0007\u0019\u0002\u0002\u00c6\u00c7\u0005 ",
    "\u0011\u0002\u00c7\u00c8\u0007\u001a\u0002\u0002\u00c8\u00d3\u0003\u0002",
    "\u0002\u0002\u00c9\u00ca\u0005:\u001e\u0002\u00ca\u00cc\u0007\u0019",
    "\u0002\u0002\u00cb\u00cd\u0005\"\u0012\u0002\u00cc\u00cb\u0003\u0002",
    "\u0002\u0002\u00cc\u00cd\u0003\u0002\u0002\u0002\u00cd\u00ce\u0003\u0002",
    "\u0002\u0002\u00ce\u00cf\u0007\u001a\u0002\u0002\u00cf\u00d3\u0003\u0002",
    "\u0002\u0002\u00d0\u00d1\t\u0002\u0002\u0002\u00d1\u00d3\u0005 \u0011",
    "\u000b\u00d2\u00c0\u0003\u0002\u0002\u0002\u00d2\u00c5\u0003\u0002\u0002",
    "\u0002\u00d2\u00c9\u0003\u0002\u0002\u0002\u00d2\u00d0\u0003\u0002\u0002",
    "\u0002\u00d3\u00ee\u0003\u0002\u0002\u0002\u00d4\u00d5\f\n\u0002\u0002",
    "\u00d5\u00d6\u0007\u000e\u0002\u0002\u00d6\u00ed\u0005 \u0011\n\u00d7",
    "\u00d8\f\t\u0002\u0002\u00d8\u00d9\t\u0003\u0002\u0002\u00d9\u00ed\u0005",
    " \u0011\n\u00da\u00db\f\b\u0002\u0002\u00db\u00dc\t\u0004\u0002\u0002",
    "\u00dc\u00ed\u0005 \u0011\t\u00dd\u00de\f\u0007\u0002\u0002\u00de\u00df",
    "\t\u0005\u0002\u0002\u00df\u00ed\u0005 \u0011\b\u00e0\u00e1\f\u0006",
    "\u0002\u0002\u00e1\u00e2\t\u0006\u0002\u0002\u00e2\u00ed\u0005 \u0011",
    "\u0007\u00e3\u00e4\f\u0005\u0002\u0002\u00e4\u00e5\t\u0007\u0002\u0002",
    "\u00e5\u00ed\u0005 \u0011\u0006\u00e6\u00e7\f\u0004\u0002\u0002\u00e7",
    "\u00e8\u0007;\u0002\u0002\u00e8\u00ed\u0005 \u0011\u0005\u00e9\u00ea",
    "\f\u0003\u0002\u0002\u00ea\u00eb\u0007:\u0002\u0002\u00eb\u00ed\u0005",
    " \u0011\u0004\u00ec\u00d4\u0003\u0002\u0002\u0002\u00ec\u00d7\u0003",
    "\u0002\u0002\u0002\u00ec\u00da\u0003\u0002\u0002\u0002\u00ec\u00dd\u0003",
    "\u0002\u0002\u0002\u00ec\u00e0\u0003\u0002\u0002\u0002\u00ec\u00e3\u0003",
    "\u0002\u0002\u0002\u00ec\u00e6\u0003\u0002\u0002\u0002\u00ec\u00e9\u0003",
    "\u0002\u0002\u0002\u00ed\u00f0\u0003\u0002\u0002\u0002\u00ee\u00ec\u0003",
    "\u0002\u0002\u0002\u00ee\u00ef\u0003\u0002\u0002\u0002\u00ef!\u0003",
    "\u0002\u0002\u0002\u00f0\u00ee\u0003\u0002\u0002\u0002\u00f1\u00f6\u0005",
    "$\u0013\u0002\u00f2\u00f3\u0007\u0018\u0002\u0002\u00f3\u00f5\u0005",
    "$\u0013\u0002\u00f4\u00f2\u0003\u0002\u0002\u0002\u00f5\u00f8\u0003",
    "\u0002\u0002\u0002\u00f6\u00f4\u0003\u0002\u0002\u0002\u00f6\u00f7\u0003",
    "\u0002\u0002\u0002\u00f7#\u0003\u0002\u0002\u0002\u00f8\u00f6\u0003",
    "\u0002\u0002\u0002\u00f9\u0103\u0005 \u0011\u0002\u00fa\u00fb\u0005",
    "6\u001c\u0002\u00fb\u00fc\u0007\u0015\u0002\u0002\u00fc\u00fd\u0005",
    "6\u001c\u0002\u00fd\u0103\u0003\u0002\u0002\u0002\u00fe\u00ff\u0005",
    "6\u001c\u0002\u00ff\u0100\u0007\u0016\u0002\u0002\u0100\u0101\u0005",
    "6\u001c\u0002\u0101\u0103\u0003\u0002\u0002\u0002\u0102\u00f9\u0003",
    "\u0002\u0002\u0002\u0102\u00fa\u0003\u0002\u0002\u0002\u0102\u00fe\u0003",
    "\u0002\u0002\u0002\u0103%\u0003\u0002\u0002\u0002\u0104\u0105\u0005",
    "2\u001a\u0002\u0105\u0106\u0007 \u0002\u0002\u0106\u0108\u0003\u0002",
    "\u0002\u0002\u0107\u0104\u0003\u0002\u0002\u0002\u0107\u0108\u0003\u0002",
    "\u0002\u0002\u0108\u0109\u0003\u0002\u0002\u0002\u0109\u011e\u0005(",
    "\u0015\u0002\u010a\u010b\u00052\u001a\u0002\u010b\u010c\u0007 \u0002",
    "\u0002\u010c\u010e\u0003\u0002\u0002\u0002\u010d\u010a\u0003\u0002\u0002",
    "\u0002\u010d\u010e\u0003\u0002\u0002\u0002\u010e\u010f\u0003\u0002\u0002",
    "\u0002\u010f\u0110\u0005.\u0018\u0002\u0110\u0111\u0005(\u0015\u0002",
    "\u0111\u011e\u0003\u0002\u0002\u0002\u0112\u011e\u00050\u0019\u0002",
    "\u0113\u011e\u0005:\u001e\u0002\u0114\u0115\u0005.\u0018\u0002\u0115",
    "\u0116\u0005:\u001e\u0002\u0116\u011e\u0003\u0002\u0002\u0002\u0117",
    "\u0118\u00054\u001b\u0002\u0118\u0119\u0007 \u0002\u0002\u0119\u011b",
    "\u0003\u0002\u0002\u0002\u011a\u0117\u0003\u0002\u0002\u0002\u011a\u011b",
    "\u0003\u0002\u0002\u0002\u011b\u011c\u0003\u0002\u0002\u0002\u011c\u011e",
    "\u00058\u001d\u0002\u011d\u0107\u0003\u0002\u0002\u0002\u011d\u010d",
    "\u0003\u0002\u0002\u0002\u011d\u0112\u0003\u0002\u0002\u0002\u011d\u0113",
    "\u0003\u0002\u0002\u0002\u011d\u0114\u0003\u0002\u0002\u0002\u011d\u011a",
    "\u0003\u0002\u0002\u0002\u011e\'\u0003\u0002\u0002\u0002\u011f\u0122",
    "\u0005*\u0016\u0002\u0120\u0122\u0005,\u0017\u0002\u0121\u011f\u0003",
    "\u0002\u0002\u0002\u0121\u0120\u0003\u0002\u0002\u0002\u0122)\u0003",
    "\u0002\u0002\u0002\u0123\u0128\u0007\u0003\u0002\u0002\u0124\u0128\u0007",
    "\u0004\u0002\u0002\u0125\u0128\u0007\u0005\u0002\u0002\u0126\u0128\u0007",
    "\u0006\u0002\u0002\u0127\u0123\u0003\u0002\u0002\u0002\u0127\u0124\u0003",
    "\u0002\u0002\u0002\u0127\u0125\u0003\u0002\u0002\u0002\u0127\u0126\u0003",
    "\u0002\u0002\u0002\u0128+\u0003\u0002\u0002\u0002\u0129\u012a\u0007",
    "\u0007\u0002\u0002\u012a-\u0003\u0002\u0002\u0002\u012b\u012c\t\u0004",
    "\u0002\u0002\u012c/\u0003\u0002\u0002\u0002\u012d\u012e\t\b\u0002\u0002",
    "\u012e1\u0003\u0002\u0002\u0002\u012f\u0130\t\t\u0002\u0002\u01303\u0003",
    "\u0002\u0002\u0002\u0131\u0132\t\n\u0002\u0002\u01325\u0003\u0002\u0002",
    "\u0002\u0133\u0134\u0005:\u001e\u0002\u01347\u0003\u0002\u0002\u0002",
    "\u0135\u0138\u0007\b\u0002\u0002\u0136\u0138\u0007\t\u0002\u0002\u0137",
    "\u0135\u0003\u0002\u0002\u0002\u0137\u0136\u0003\u0002\u0002\u0002\u0138",
    "9\u0003\u0002\u0002\u0002\u0139\u013a\u0007H\u0002\u0002\u013a;\u0003",
    "\u0002\u0002\u0002\u001d@ER[g\u0084\u0089\u0093\u0098\u00a1\u00ac\u00b1",
    "\u00b8\u00c3\u00cc\u00d2\u00ec\u00ee\u00f6\u0102\u0107\u010d\u011a\u011d",
    "\u0121\u0127\u0137"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, null, null, null, "'+'", 
                     "'-'", "'*'", "'/'", "'**'", "'<'", "'>'", "'<='", 
                     "'>='", "'='", "'<>'", "':='", "'=>'", "'..'", "','", 
                     "'('", "')'", "'['", "']'", "':'", "';'", "'&'", "'#'", 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, "'*/'" ];

var symbolicNames = [ null, "NUM_INT_DEC", "NUM_INT_BIN", "NUM_INT_OCT", 
                      "NUM_INT_HEX", "NUM_REAL", "STRING_LITERAL", "WSTRING_LITERAL", 
                      "PLUS", "MINUS", "ASTERISK", "SLASH", "POWER", "LT", 
                      "GT", "LE", "GE", "EQ", "NEQ", "ASSIGN", "OUTREF", 
                      "RANGE", "COMMA", "LPAREN", "RPAREN", "LBRACK", "RBRACK", 
                      "COLON", "SEMICOLON", "AMPERSAND", "SHARP", "TRUE", 
                      "FALSE", "IF", "THEN", "ELSIF", "ELSE", "END_IF", 
                      "CASE", "OF", "END_CASE", "FOR", "TO", "BY", "DO", 
                      "END_FOR", "REPEAT", "UNTIL", "END_REPEAT", "WHILE", 
                      "END_WHILE", "CONTINUE", "EXIT", "RETURN", "MOD", 
                      "AND", "OR", "XOR", "NOT", "BOOL", "INT", "DINT", 
                      "UINT", "UDINT", "WORD", "DWORD", "REAL", "LREAL", 
                      "STRING", "WSTRING", "IDENTIFIER", "WS", "EOL", "SINGLE_LINE_COMMENT", 
                      "MULTI_LINE_COMMENT_START", "COMMENTS", "MULTI_LINE_COMMENT_START2", 
                      "MULTI_LINE_COMMENT_END" ];

var ruleNames =  [ "structuredText", "statements", "statement", "assignmentStatement", 
                   "procedureStatement", "forStatement", "whileStatement", 
                   "repeatStatement", "ifStatement", "caseStatement", "caseList", 
                   "caseElement", "continueStatement", "exitStatement", 
                   "returnStatement", "expression", "parameterList", "parameterExpression", 
                   "constant", "unsignedNumber", "unsignedInteger", "unsignedReal", 
                   "sign", "bool", "typeOfNumber", "typeOfString", "variable", 
                   "string", "identifier" ];

function STLangParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

STLangParser.prototype = Object.create(antlr4.Parser.prototype);
STLangParser.prototype.constructor = STLangParser;

Object.defineProperty(STLangParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

STLangParser.EOF = antlr4.Token.EOF;
STLangParser.NUM_INT_DEC = 1;
STLangParser.NUM_INT_BIN = 2;
STLangParser.NUM_INT_OCT = 3;
STLangParser.NUM_INT_HEX = 4;
STLangParser.NUM_REAL = 5;
STLangParser.STRING_LITERAL = 6;
STLangParser.WSTRING_LITERAL = 7;
STLangParser.PLUS = 8;
STLangParser.MINUS = 9;
STLangParser.ASTERISK = 10;
STLangParser.SLASH = 11;
STLangParser.POWER = 12;
STLangParser.LT = 13;
STLangParser.GT = 14;
STLangParser.LE = 15;
STLangParser.GE = 16;
STLangParser.EQ = 17;
STLangParser.NEQ = 18;
STLangParser.ASSIGN = 19;
STLangParser.OUTREF = 20;
STLangParser.RANGE = 21;
STLangParser.COMMA = 22;
STLangParser.LPAREN = 23;
STLangParser.RPAREN = 24;
STLangParser.LBRACK = 25;
STLangParser.RBRACK = 26;
STLangParser.COLON = 27;
STLangParser.SEMICOLON = 28;
STLangParser.AMPERSAND = 29;
STLangParser.SHARP = 30;
STLangParser.TRUE = 31;
STLangParser.FALSE = 32;
STLangParser.IF = 33;
STLangParser.THEN = 34;
STLangParser.ELSIF = 35;
STLangParser.ELSE = 36;
STLangParser.END_IF = 37;
STLangParser.CASE = 38;
STLangParser.OF = 39;
STLangParser.END_CASE = 40;
STLangParser.FOR = 41;
STLangParser.TO = 42;
STLangParser.BY = 43;
STLangParser.DO = 44;
STLangParser.END_FOR = 45;
STLangParser.REPEAT = 46;
STLangParser.UNTIL = 47;
STLangParser.END_REPEAT = 48;
STLangParser.WHILE = 49;
STLangParser.END_WHILE = 50;
STLangParser.CONTINUE = 51;
STLangParser.EXIT = 52;
STLangParser.RETURN = 53;
STLangParser.MOD = 54;
STLangParser.AND = 55;
STLangParser.OR = 56;
STLangParser.XOR = 57;
STLangParser.NOT = 58;
STLangParser.BOOL = 59;
STLangParser.INT = 60;
STLangParser.DINT = 61;
STLangParser.UINT = 62;
STLangParser.UDINT = 63;
STLangParser.WORD = 64;
STLangParser.DWORD = 65;
STLangParser.REAL = 66;
STLangParser.LREAL = 67;
STLangParser.STRING = 68;
STLangParser.WSTRING = 69;
STLangParser.IDENTIFIER = 70;
STLangParser.WS = 71;
STLangParser.EOL = 72;
STLangParser.SINGLE_LINE_COMMENT = 73;
STLangParser.MULTI_LINE_COMMENT_START = 74;
STLangParser.COMMENTS = 75;
STLangParser.MULTI_LINE_COMMENT_START2 = 76;
STLangParser.MULTI_LINE_COMMENT_END = 77;

STLangParser.RULE_structuredText = 0;
STLangParser.RULE_statements = 1;
STLangParser.RULE_statement = 2;
STLangParser.RULE_assignmentStatement = 3;
STLangParser.RULE_procedureStatement = 4;
STLangParser.RULE_forStatement = 5;
STLangParser.RULE_whileStatement = 6;
STLangParser.RULE_repeatStatement = 7;
STLangParser.RULE_ifStatement = 8;
STLangParser.RULE_caseStatement = 9;
STLangParser.RULE_caseList = 10;
STLangParser.RULE_caseElement = 11;
STLangParser.RULE_continueStatement = 12;
STLangParser.RULE_exitStatement = 13;
STLangParser.RULE_returnStatement = 14;
STLangParser.RULE_expression = 15;
STLangParser.RULE_parameterList = 16;
STLangParser.RULE_parameterExpression = 17;
STLangParser.RULE_constant = 18;
STLangParser.RULE_unsignedNumber = 19;
STLangParser.RULE_unsignedInteger = 20;
STLangParser.RULE_unsignedReal = 21;
STLangParser.RULE_sign = 22;
STLangParser.RULE_bool = 23;
STLangParser.RULE_typeOfNumber = 24;
STLangParser.RULE_typeOfString = 25;
STLangParser.RULE_variable = 26;
STLangParser.RULE_string = 27;
STLangParser.RULE_identifier = 28;


function StructuredTextContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STLangParser.RULE_structuredText;
    this.st = null; // StatementsContext
    return this;
}

StructuredTextContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StructuredTextContext.prototype.constructor = StructuredTextContext;

StructuredTextContext.prototype.EOF = function() {
    return this.getToken(STLangParser.EOF, 0);
};

StructuredTextContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

StructuredTextContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitStructuredText(this);
    } else {
        return visitor.visitChildren(this);
    }
};




STLangParser.StructuredTextContext = StructuredTextContext;

STLangParser.prototype.structuredText = function() {

    var localctx = new StructuredTextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, STLangParser.RULE_structuredText);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 58;
        localctx.st = this.statements();
        this.state = 59;
        this.match(STLangParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StatementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STLangParser.RULE_statements;
    this._statement = null; // StatementContext
    this.st = []; // of StatementContexts
    return this;
}

StatementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementsContext.prototype.constructor = StatementsContext;

StatementsContext.prototype.SEMICOLON = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(STLangParser.SEMICOLON);
    } else {
        return this.getToken(STLangParser.SEMICOLON, i);
    }
};


StatementsContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

StatementsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitStatements(this);
    } else {
        return visitor.visitChildren(this);
    }
};




STLangParser.StatementsContext = StatementsContext;

STLangParser.prototype.statements = function() {

    var localctx = new StatementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, STLangParser.RULE_statements);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 62;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (STLangParser.IF - 33)) | (1 << (STLangParser.CASE - 33)) | (1 << (STLangParser.FOR - 33)) | (1 << (STLangParser.REPEAT - 33)) | (1 << (STLangParser.WHILE - 33)) | (1 << (STLangParser.CONTINUE - 33)) | (1 << (STLangParser.EXIT - 33)) | (1 << (STLangParser.RETURN - 33)))) !== 0) || _la===STLangParser.IDENTIFIER) {
                    this.state = 61;
                    localctx._statement = this.statement();
                    localctx.st.push(localctx._statement);
                }

                this.state = 64;
                this.match(STLangParser.SEMICOLON); 
            }
            this.state = 69;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STLangParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;


 
StatementContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function StatementAssignmentContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatementAssignmentContext.prototype = Object.create(StatementContext.prototype);
StatementAssignmentContext.prototype.constructor = StatementAssignmentContext;

STLangParser.StatementAssignmentContext = StatementAssignmentContext;

StatementAssignmentContext.prototype.assignmentStatement = function() {
    return this.getTypedRuleContext(AssignmentStatementContext,0);
};
StatementAssignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitStatementAssignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StatementRepeatContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatementRepeatContext.prototype = Object.create(StatementContext.prototype);
StatementRepeatContext.prototype.constructor = StatementRepeatContext;

STLangParser.StatementRepeatContext = StatementRepeatContext;

StatementRepeatContext.prototype.repeatStatement = function() {
    return this.getTypedRuleContext(RepeatStatementContext,0);
};
StatementRepeatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitStatementRepeat(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StatementContinueContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatementContinueContext.prototype = Object.create(StatementContext.prototype);
StatementContinueContext.prototype.constructor = StatementContinueContext;

STLangParser.StatementContinueContext = StatementContinueContext;

StatementContinueContext.prototype.continueStatement = function() {
    return this.getTypedRuleContext(ContinueStatementContext,0);
};
StatementContinueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitStatementContinue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StatementReturnContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatementReturnContext.prototype = Object.create(StatementContext.prototype);
StatementReturnContext.prototype.constructor = StatementReturnContext;

STLangParser.StatementReturnContext = StatementReturnContext;

StatementReturnContext.prototype.returnStatement = function() {
    return this.getTypedRuleContext(ReturnStatementContext,0);
};
StatementReturnContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitStatementReturn(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StatementForContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatementForContext.prototype = Object.create(StatementContext.prototype);
StatementForContext.prototype.constructor = StatementForContext;

STLangParser.StatementForContext = StatementForContext;

StatementForContext.prototype.forStatement = function() {
    return this.getTypedRuleContext(ForStatementContext,0);
};
StatementForContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitStatementFor(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StatementExitContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatementExitContext.prototype = Object.create(StatementContext.prototype);
StatementExitContext.prototype.constructor = StatementExitContext;

STLangParser.StatementExitContext = StatementExitContext;

StatementExitContext.prototype.exitStatement = function() {
    return this.getTypedRuleContext(ExitStatementContext,0);
};
StatementExitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitStatementExit(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StatementCaseContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatementCaseContext.prototype = Object.create(StatementContext.prototype);
StatementCaseContext.prototype.constructor = StatementCaseContext;

STLangParser.StatementCaseContext = StatementCaseContext;

StatementCaseContext.prototype.caseStatement = function() {
    return this.getTypedRuleContext(CaseStatementContext,0);
};
StatementCaseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitStatementCase(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StatementProcedureContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatementProcedureContext.prototype = Object.create(StatementContext.prototype);
StatementProcedureContext.prototype.constructor = StatementProcedureContext;

STLangParser.StatementProcedureContext = StatementProcedureContext;

StatementProcedureContext.prototype.procedureStatement = function() {
    return this.getTypedRuleContext(ProcedureStatementContext,0);
};
StatementProcedureContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitStatementProcedure(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StatementWhileContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatementWhileContext.prototype = Object.create(StatementContext.prototype);
StatementWhileContext.prototype.constructor = StatementWhileContext;

STLangParser.StatementWhileContext = StatementWhileContext;

StatementWhileContext.prototype.whileStatement = function() {
    return this.getTypedRuleContext(WhileStatementContext,0);
};
StatementWhileContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitStatementWhile(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StatementIfContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatementIfContext.prototype = Object.create(StatementContext.prototype);
StatementIfContext.prototype.constructor = StatementIfContext;

STLangParser.StatementIfContext = StatementIfContext;

StatementIfContext.prototype.ifStatement = function() {
    return this.getTypedRuleContext(IfStatementContext,0);
};
StatementIfContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitStatementIf(this);
    } else {
        return visitor.visitChildren(this);
    }
};



STLangParser.StatementContext = StatementContext;

STLangParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, STLangParser.RULE_statement);
    try {
        this.state = 80;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            localctx = new StatementAssignmentContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 70;
            this.assignmentStatement();
            break;

        case 2:
            localctx = new StatementProcedureContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 71;
            this.procedureStatement();
            break;

        case 3:
            localctx = new StatementReturnContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 72;
            this.returnStatement();
            break;

        case 4:
            localctx = new StatementIfContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 73;
            this.ifStatement();
            break;

        case 5:
            localctx = new StatementCaseContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 74;
            this.caseStatement();
            break;

        case 6:
            localctx = new StatementForContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 75;
            this.forStatement();
            break;

        case 7:
            localctx = new StatementWhileContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 76;
            this.whileStatement();
            break;

        case 8:
            localctx = new StatementRepeatContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 77;
            this.repeatStatement();
            break;

        case 9:
            localctx = new StatementContinueContext(this, localctx);
            this.enterOuterAlt(localctx, 9);
            this.state = 78;
            this.continueStatement();
            break;

        case 10:
            localctx = new StatementExitContext(this, localctx);
            this.enterOuterAlt(localctx, 10);
            this.state = 79;
            this.exitStatement();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AssignmentStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STLangParser.RULE_assignmentStatement;
    this.lhs = null; // VariableContext
    this.rhs = null; // ExpressionContext
    return this;
}

AssignmentStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentStatementContext.prototype.constructor = AssignmentStatementContext;

AssignmentStatementContext.prototype.ASSIGN = function() {
    return this.getToken(STLangParser.ASSIGN, 0);
};

AssignmentStatementContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

AssignmentStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AssignmentStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitAssignmentStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




STLangParser.AssignmentStatementContext = AssignmentStatementContext;

STLangParser.prototype.assignmentStatement = function() {

    var localctx = new AssignmentStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, STLangParser.RULE_assignmentStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 82;
        localctx.lhs = this.variable();
        this.state = 83;
        this.match(STLangParser.ASSIGN);
        this.state = 84;
        localctx.rhs = this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ProcedureStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STLangParser.RULE_procedureStatement;
    this.func = null; // IdentifierContext
    this.args = null; // ParameterListContext
    return this;
}

ProcedureStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProcedureStatementContext.prototype.constructor = ProcedureStatementContext;

ProcedureStatementContext.prototype.LPAREN = function() {
    return this.getToken(STLangParser.LPAREN, 0);
};

ProcedureStatementContext.prototype.RPAREN = function() {
    return this.getToken(STLangParser.RPAREN, 0);
};

ProcedureStatementContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ProcedureStatementContext.prototype.parameterList = function() {
    return this.getTypedRuleContext(ParameterListContext,0);
};

ProcedureStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitProcedureStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




STLangParser.ProcedureStatementContext = ProcedureStatementContext;

STLangParser.prototype.procedureStatement = function() {

    var localctx = new ProcedureStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, STLangParser.RULE_procedureStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 86;
        localctx.func = this.identifier();
        this.state = 87;
        this.match(STLangParser.LPAREN);
        this.state = 89;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 1)) & ~0x1f) == 0 && ((1 << (_la - 1)) & ((1 << (STLangParser.NUM_INT_DEC - 1)) | (1 << (STLangParser.NUM_INT_BIN - 1)) | (1 << (STLangParser.NUM_INT_OCT - 1)) | (1 << (STLangParser.NUM_INT_HEX - 1)) | (1 << (STLangParser.NUM_REAL - 1)) | (1 << (STLangParser.STRING_LITERAL - 1)) | (1 << (STLangParser.WSTRING_LITERAL - 1)) | (1 << (STLangParser.PLUS - 1)) | (1 << (STLangParser.MINUS - 1)) | (1 << (STLangParser.LPAREN - 1)) | (1 << (STLangParser.TRUE - 1)) | (1 << (STLangParser.FALSE - 1)))) !== 0) || ((((_la - 58)) & ~0x1f) == 0 && ((1 << (_la - 58)) & ((1 << (STLangParser.NOT - 58)) | (1 << (STLangParser.BOOL - 58)) | (1 << (STLangParser.INT - 58)) | (1 << (STLangParser.DINT - 58)) | (1 << (STLangParser.UINT - 58)) | (1 << (STLangParser.UDINT - 58)) | (1 << (STLangParser.WORD - 58)) | (1 << (STLangParser.REAL - 58)) | (1 << (STLangParser.LREAL - 58)) | (1 << (STLangParser.STRING - 58)) | (1 << (STLangParser.WSTRING - 58)) | (1 << (STLangParser.IDENTIFIER - 58)))) !== 0)) {
            this.state = 88;
            localctx.args = this.parameterList();
        }

        this.state = 91;
        this.match(STLangParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ForStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STLangParser.RULE_forStatement;
    this.id = null; // IdentifierContext
    this.start = null; // ExpressionContext
    this.end = null; // ExpressionContext
    this.step = null; // ExpressionContext
    this.st = null; // StatementsContext
    return this;
}

ForStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForStatementContext.prototype.constructor = ForStatementContext;

ForStatementContext.prototype.FOR = function() {
    return this.getToken(STLangParser.FOR, 0);
};

ForStatementContext.prototype.ASSIGN = function() {
    return this.getToken(STLangParser.ASSIGN, 0);
};

ForStatementContext.prototype.TO = function() {
    return this.getToken(STLangParser.TO, 0);
};

ForStatementContext.prototype.DO = function() {
    return this.getToken(STLangParser.DO, 0);
};

ForStatementContext.prototype.END_FOR = function() {
    return this.getToken(STLangParser.END_FOR, 0);
};

ForStatementContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ForStatementContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ForStatementContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

ForStatementContext.prototype.BY = function() {
    return this.getToken(STLangParser.BY, 0);
};

ForStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitForStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




STLangParser.ForStatementContext = ForStatementContext;

STLangParser.prototype.forStatement = function() {

    var localctx = new ForStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, STLangParser.RULE_forStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        this.match(STLangParser.FOR);
        this.state = 94;
        localctx.id = this.identifier();
        this.state = 95;
        this.match(STLangParser.ASSIGN);
        this.state = 96;
        localctx.start = this.expression(0);
        this.state = 97;
        this.match(STLangParser.TO);
        this.state = 98;
        localctx.end = this.expression(0);
        this.state = 101;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===STLangParser.BY) {
            this.state = 99;
            this.match(STLangParser.BY);
            this.state = 100;
            localctx.step = this.expression(0);
        }

        this.state = 103;
        this.match(STLangParser.DO);
        this.state = 104;
        localctx.st = this.statements();
        this.state = 105;
        this.match(STLangParser.END_FOR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function WhileStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STLangParser.RULE_whileStatement;
    this.cond = null; // ExpressionContext
    this.st = null; // StatementsContext
    return this;
}

WhileStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhileStatementContext.prototype.constructor = WhileStatementContext;

WhileStatementContext.prototype.WHILE = function() {
    return this.getToken(STLangParser.WHILE, 0);
};

WhileStatementContext.prototype.DO = function() {
    return this.getToken(STLangParser.DO, 0);
};

WhileStatementContext.prototype.END_WHILE = function() {
    return this.getToken(STLangParser.END_WHILE, 0);
};

WhileStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

WhileStatementContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

WhileStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitWhileStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




STLangParser.WhileStatementContext = WhileStatementContext;

STLangParser.prototype.whileStatement = function() {

    var localctx = new WhileStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, STLangParser.RULE_whileStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 107;
        this.match(STLangParser.WHILE);
        this.state = 108;
        localctx.cond = this.expression(0);
        this.state = 109;
        this.match(STLangParser.DO);
        this.state = 110;
        localctx.st = this.statements();
        this.state = 111;
        this.match(STLangParser.END_WHILE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RepeatStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STLangParser.RULE_repeatStatement;
    this.st = null; // StatementsContext
    this.cond = null; // ExpressionContext
    return this;
}

RepeatStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RepeatStatementContext.prototype.constructor = RepeatStatementContext;

RepeatStatementContext.prototype.REPEAT = function() {
    return this.getToken(STLangParser.REPEAT, 0);
};

RepeatStatementContext.prototype.UNTIL = function() {
    return this.getToken(STLangParser.UNTIL, 0);
};

RepeatStatementContext.prototype.END_REPEAT = function() {
    return this.getToken(STLangParser.END_REPEAT, 0);
};

RepeatStatementContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

RepeatStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

RepeatStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitRepeatStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




STLangParser.RepeatStatementContext = RepeatStatementContext;

STLangParser.prototype.repeatStatement = function() {

    var localctx = new RepeatStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, STLangParser.RULE_repeatStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 113;
        this.match(STLangParser.REPEAT);
        this.state = 114;
        localctx.st = this.statements();
        this.state = 115;
        this.match(STLangParser.UNTIL);
        this.state = 116;
        localctx.cond = this.expression(0);
        this.state = 117;
        this.match(STLangParser.END_REPEAT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IfStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STLangParser.RULE_ifStatement;
    this.cond = null; // ExpressionContext
    this.st = null; // StatementsContext
    this._expression = null; // ExpressionContext
    this.elif_cond = []; // of ExpressionContexts
    this._statements = null; // StatementsContext
    this.elif_st = []; // of StatementsContexts
    this.else_st = null; // StatementsContext
    return this;
}

IfStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStatementContext.prototype.constructor = IfStatementContext;

IfStatementContext.prototype.IF = function() {
    return this.getToken(STLangParser.IF, 0);
};

IfStatementContext.prototype.THEN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(STLangParser.THEN);
    } else {
        return this.getToken(STLangParser.THEN, i);
    }
};


IfStatementContext.prototype.END_IF = function() {
    return this.getToken(STLangParser.END_IF, 0);
};

IfStatementContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

IfStatementContext.prototype.statements = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementsContext);
    } else {
        return this.getTypedRuleContext(StatementsContext,i);
    }
};

IfStatementContext.prototype.ELSIF = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(STLangParser.ELSIF);
    } else {
        return this.getToken(STLangParser.ELSIF, i);
    }
};


IfStatementContext.prototype.ELSE = function() {
    return this.getToken(STLangParser.ELSE, 0);
};

IfStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitIfStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




STLangParser.IfStatementContext = IfStatementContext;

STLangParser.prototype.ifStatement = function() {

    var localctx = new IfStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, STLangParser.RULE_ifStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 119;
        this.match(STLangParser.IF);
        this.state = 120;
        localctx.cond = this.expression(0);
        this.state = 121;
        this.match(STLangParser.THEN);
        this.state = 122;
        localctx.st = this.statements();
        this.state = 130;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===STLangParser.ELSIF) {
            this.state = 123;
            this.match(STLangParser.ELSIF);
            this.state = 124;
            localctx._expression = this.expression(0);
            localctx.elif_cond.push(localctx._expression);
            this.state = 125;
            this.match(STLangParser.THEN);
            this.state = 126;
            localctx._statements = this.statements();
            localctx.elif_st.push(localctx._statements);
            this.state = 132;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 135;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===STLangParser.ELSE) {
            this.state = 133;
            this.match(STLangParser.ELSE);
            this.state = 134;
            localctx.else_st = this.statements();
        }

        this.state = 137;
        this.match(STLangParser.END_IF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CaseStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STLangParser.RULE_caseStatement;
    this.cond = null; // ExpressionContext
    this._caseList = null; // CaseListContext
    this.cas = []; // of CaseListContexts
    this.else_st = null; // StatementsContext
    return this;
}

CaseStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CaseStatementContext.prototype.constructor = CaseStatementContext;

CaseStatementContext.prototype.CASE = function() {
    return this.getToken(STLangParser.CASE, 0);
};

CaseStatementContext.prototype.OF = function() {
    return this.getToken(STLangParser.OF, 0);
};

CaseStatementContext.prototype.END_CASE = function() {
    return this.getToken(STLangParser.END_CASE, 0);
};

CaseStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

CaseStatementContext.prototype.ELSE = function() {
    return this.getToken(STLangParser.ELSE, 0);
};

CaseStatementContext.prototype.caseList = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CaseListContext);
    } else {
        return this.getTypedRuleContext(CaseListContext,i);
    }
};

CaseStatementContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

CaseStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitCaseStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




STLangParser.CaseStatementContext = CaseStatementContext;

STLangParser.prototype.caseStatement = function() {

    var localctx = new CaseStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, STLangParser.RULE_caseStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 139;
        this.match(STLangParser.CASE);
        this.state = 140;
        localctx.cond = this.expression(0);
        this.state = 141;
        this.match(STLangParser.OF);
        this.state = 145;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 1)) & ~0x1f) == 0 && ((1 << (_la - 1)) & ((1 << (STLangParser.NUM_INT_DEC - 1)) | (1 << (STLangParser.NUM_INT_BIN - 1)) | (1 << (STLangParser.NUM_INT_OCT - 1)) | (1 << (STLangParser.NUM_INT_HEX - 1)) | (1 << (STLangParser.NUM_REAL - 1)) | (1 << (STLangParser.STRING_LITERAL - 1)) | (1 << (STLangParser.WSTRING_LITERAL - 1)) | (1 << (STLangParser.PLUS - 1)) | (1 << (STLangParser.MINUS - 1)) | (1 << (STLangParser.TRUE - 1)) | (1 << (STLangParser.FALSE - 1)))) !== 0) || ((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (STLangParser.BOOL - 59)) | (1 << (STLangParser.INT - 59)) | (1 << (STLangParser.DINT - 59)) | (1 << (STLangParser.UINT - 59)) | (1 << (STLangParser.UDINT - 59)) | (1 << (STLangParser.WORD - 59)) | (1 << (STLangParser.REAL - 59)) | (1 << (STLangParser.LREAL - 59)) | (1 << (STLangParser.STRING - 59)) | (1 << (STLangParser.WSTRING - 59)) | (1 << (STLangParser.IDENTIFIER - 59)))) !== 0)) {
            this.state = 142;
            localctx._caseList = this.caseList();
            localctx.cas.push(localctx._caseList);
            this.state = 147;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 150;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===STLangParser.ELSE) {
            this.state = 148;
            this.match(STLangParser.ELSE);
            this.state = 149;
            localctx.else_st = this.statements();
        }

        this.state = 152;
        this.match(STLangParser.END_CASE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CaseListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STLangParser.RULE_caseList;
    return this;
}

CaseListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CaseListContext.prototype.constructor = CaseListContext;


 
CaseListContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function CaseListWithoutStatementContext(parser, ctx) {
	CaseListContext.call(this, parser);
    this._caseElement = null; // CaseElementContext;
    this.elm = []; // of CaseElementContexts;
    CaseListContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CaseListWithoutStatementContext.prototype = Object.create(CaseListContext.prototype);
CaseListWithoutStatementContext.prototype.constructor = CaseListWithoutStatementContext;

STLangParser.CaseListWithoutStatementContext = CaseListWithoutStatementContext;

CaseListWithoutStatementContext.prototype.COLON = function() {
    return this.getToken(STLangParser.COLON, 0);
};

CaseListWithoutStatementContext.prototype.caseElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CaseElementContext);
    } else {
        return this.getTypedRuleContext(CaseElementContext,i);
    }
};

CaseListWithoutStatementContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(STLangParser.COMMA);
    } else {
        return this.getToken(STLangParser.COMMA, i);
    }
};

CaseListWithoutStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitCaseListWithoutStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CaseListWithStatementContext(parser, ctx) {
	CaseListContext.call(this, parser);
    this._caseElement = null; // CaseElementContext;
    this.elm = []; // of CaseElementContexts;
    this.st = null; // StatementsContext;
    CaseListContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CaseListWithStatementContext.prototype = Object.create(CaseListContext.prototype);
CaseListWithStatementContext.prototype.constructor = CaseListWithStatementContext;

STLangParser.CaseListWithStatementContext = CaseListWithStatementContext;

CaseListWithStatementContext.prototype.COLON = function() {
    return this.getToken(STLangParser.COLON, 0);
};

CaseListWithStatementContext.prototype.caseElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CaseElementContext);
    } else {
        return this.getTypedRuleContext(CaseElementContext,i);
    }
};

CaseListWithStatementContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(STLangParser.COMMA);
    } else {
        return this.getToken(STLangParser.COMMA, i);
    }
};


CaseListWithStatementContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};
CaseListWithStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitCaseListWithStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};



STLangParser.CaseListContext = CaseListContext;

STLangParser.prototype.caseList = function() {

    var localctx = new CaseListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, STLangParser.RULE_caseList);
    var _la = 0; // Token type
    try {
        this.state = 175;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            localctx = new CaseListWithStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 154;
            localctx._caseElement = this.caseElement();
            localctx.elm.push(localctx._caseElement);
            this.state = 159;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===STLangParser.COMMA) {
                this.state = 155;
                this.match(STLangParser.COMMA);
                this.state = 156;
                localctx._caseElement = this.caseElement();
                localctx.elm.push(localctx._caseElement);
                this.state = 161;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 162;
            this.match(STLangParser.COLON);

            this.state = 163;
            localctx.st = this.statements();
            break;

        case 2:
            localctx = new CaseListWithoutStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 165;
            localctx._caseElement = this.caseElement();
            localctx.elm.push(localctx._caseElement);
            this.state = 170;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===STLangParser.COMMA) {
                this.state = 166;
                this.match(STLangParser.COMMA);
                this.state = 167;
                localctx._caseElement = this.caseElement();
                localctx.elm.push(localctx._caseElement);
                this.state = 172;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 173;
            this.match(STLangParser.COLON);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CaseElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STLangParser.RULE_caseElement;
    return this;
}

CaseElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CaseElementContext.prototype.constructor = CaseElementContext;


 
CaseElementContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function CaseElementRangeContext(parser, ctx) {
	CaseElementContext.call(this, parser);
    this.from = null; // ConstantContext;
    this.to = null; // ConstantContext;
    CaseElementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CaseElementRangeContext.prototype = Object.create(CaseElementContext.prototype);
CaseElementRangeContext.prototype.constructor = CaseElementRangeContext;

STLangParser.CaseElementRangeContext = CaseElementRangeContext;

CaseElementRangeContext.prototype.RANGE = function() {
    return this.getToken(STLangParser.RANGE, 0);
};

CaseElementRangeContext.prototype.constant = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConstantContext);
    } else {
        return this.getTypedRuleContext(ConstantContext,i);
    }
};
CaseElementRangeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitCaseElementRange(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CaseElementSingleContext(parser, ctx) {
	CaseElementContext.call(this, parser);
    this.comp = null; // ConstantContext;
    CaseElementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CaseElementSingleContext.prototype = Object.create(CaseElementContext.prototype);
CaseElementSingleContext.prototype.constructor = CaseElementSingleContext;

STLangParser.CaseElementSingleContext = CaseElementSingleContext;

CaseElementSingleContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};
CaseElementSingleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitCaseElementSingle(this);
    } else {
        return visitor.visitChildren(this);
    }
};



STLangParser.CaseElementContext = CaseElementContext;

STLangParser.prototype.caseElement = function() {

    var localctx = new CaseElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, STLangParser.RULE_caseElement);
    try {
        this.state = 182;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            localctx = new CaseElementSingleContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 177;
            localctx.comp = this.constant();
            break;

        case 2:
            localctx = new CaseElementRangeContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 178;
            localctx.from = this.constant();
            this.state = 179;
            this.match(STLangParser.RANGE);
            this.state = 180;
            localctx.to = this.constant();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ContinueStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STLangParser.RULE_continueStatement;
    return this;
}

ContinueStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContinueStatementContext.prototype.constructor = ContinueStatementContext;

ContinueStatementContext.prototype.CONTINUE = function() {
    return this.getToken(STLangParser.CONTINUE, 0);
};

ContinueStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitContinueStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




STLangParser.ContinueStatementContext = ContinueStatementContext;

STLangParser.prototype.continueStatement = function() {

    var localctx = new ContinueStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, STLangParser.RULE_continueStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 184;
        this.match(STLangParser.CONTINUE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExitStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STLangParser.RULE_exitStatement;
    return this;
}

ExitStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExitStatementContext.prototype.constructor = ExitStatementContext;

ExitStatementContext.prototype.EXIT = function() {
    return this.getToken(STLangParser.EXIT, 0);
};

ExitStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitExitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




STLangParser.ExitStatementContext = ExitStatementContext;

STLangParser.prototype.exitStatement = function() {

    var localctx = new ExitStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, STLangParser.RULE_exitStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 186;
        this.match(STLangParser.EXIT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ReturnStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STLangParser.RULE_returnStatement;
    return this;
}

ReturnStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnStatementContext.prototype.constructor = ReturnStatementContext;

ReturnStatementContext.prototype.RETURN = function() {
    return this.getToken(STLangParser.RETURN, 0);
};

ReturnStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitReturnStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




STLangParser.ReturnStatementContext = ReturnStatementContext;

STLangParser.prototype.returnStatement = function() {

    var localctx = new ReturnStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, STLangParser.RULE_returnStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 188;
        this.match(STLangParser.RETURN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STLangParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function ExpressionLogicalORContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.lhs = null; // ExpressionContext;
    this.op = null; // Token;
    this.rhs = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpressionLogicalORContext.prototype = Object.create(ExpressionContext.prototype);
ExpressionLogicalORContext.prototype.constructor = ExpressionLogicalORContext;

STLangParser.ExpressionLogicalORContext = ExpressionLogicalORContext;

ExpressionLogicalORContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionLogicalORContext.prototype.OR = function() {
    return this.getToken(STLangParser.OR, 0);
};
ExpressionLogicalORContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitExpressionLogicalOR(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExpressionNoneContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.c = null; // ConstantContext;
    this.v = null; // VariableContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpressionNoneContext.prototype = Object.create(ExpressionContext.prototype);
ExpressionNoneContext.prototype.constructor = ExpressionNoneContext;

STLangParser.ExpressionNoneContext = ExpressionNoneContext;

ExpressionNoneContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};

ExpressionNoneContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};
ExpressionNoneContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitExpressionNone(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExpressionFunctionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.func = null; // IdentifierContext;
    this.args = null; // ParameterListContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpressionFunctionContext.prototype = Object.create(ExpressionContext.prototype);
ExpressionFunctionContext.prototype.constructor = ExpressionFunctionContext;

STLangParser.ExpressionFunctionContext = ExpressionFunctionContext;

ExpressionFunctionContext.prototype.LPAREN = function() {
    return this.getToken(STLangParser.LPAREN, 0);
};

ExpressionFunctionContext.prototype.RPAREN = function() {
    return this.getToken(STLangParser.RPAREN, 0);
};

ExpressionFunctionContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ExpressionFunctionContext.prototype.parameterList = function() {
    return this.getTypedRuleContext(ParameterListContext,0);
};
ExpressionFunctionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitExpressionFunction(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExpressionUnaryContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    this.expr = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpressionUnaryContext.prototype = Object.create(ExpressionContext.prototype);
ExpressionUnaryContext.prototype.constructor = ExpressionUnaryContext;

STLangParser.ExpressionUnaryContext = ExpressionUnaryContext;

ExpressionUnaryContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ExpressionUnaryContext.prototype.PLUS = function() {
    return this.getToken(STLangParser.PLUS, 0);
};

ExpressionUnaryContext.prototype.MINUS = function() {
    return this.getToken(STLangParser.MINUS, 0);
};

ExpressionUnaryContext.prototype.NOT = function() {
    return this.getToken(STLangParser.NOT, 0);
};
ExpressionUnaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitExpressionUnary(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExpressionPowerContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.lhs = null; // ExpressionContext;
    this.op = null; // Token;
    this.rhs = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpressionPowerContext.prototype = Object.create(ExpressionContext.prototype);
ExpressionPowerContext.prototype.constructor = ExpressionPowerContext;

STLangParser.ExpressionPowerContext = ExpressionPowerContext;

ExpressionPowerContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionPowerContext.prototype.POWER = function() {
    return this.getToken(STLangParser.POWER, 0);
};
ExpressionPowerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitExpressionPower(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExpressionParenContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.expr = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpressionParenContext.prototype = Object.create(ExpressionContext.prototype);
ExpressionParenContext.prototype.constructor = ExpressionParenContext;

STLangParser.ExpressionParenContext = ExpressionParenContext;

ExpressionParenContext.prototype.LPAREN = function() {
    return this.getToken(STLangParser.LPAREN, 0);
};

ExpressionParenContext.prototype.RPAREN = function() {
    return this.getToken(STLangParser.RPAREN, 0);
};

ExpressionParenContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ExpressionParenContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitExpressionParen(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExpressionLogicalANDContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.lhs = null; // ExpressionContext;
    this.op = null; // Token;
    this.rhs = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpressionLogicalANDContext.prototype = Object.create(ExpressionContext.prototype);
ExpressionLogicalANDContext.prototype.constructor = ExpressionLogicalANDContext;

STLangParser.ExpressionLogicalANDContext = ExpressionLogicalANDContext;

ExpressionLogicalANDContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionLogicalANDContext.prototype.AND = function() {
    return this.getToken(STLangParser.AND, 0);
};

ExpressionLogicalANDContext.prototype.AMPERSAND = function() {
    return this.getToken(STLangParser.AMPERSAND, 0);
};
ExpressionLogicalANDContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitExpressionLogicalAND(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExpressionLogicalXORContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.lhs = null; // ExpressionContext;
    this.op = null; // Token;
    this.rhs = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpressionLogicalXORContext.prototype = Object.create(ExpressionContext.prototype);
ExpressionLogicalXORContext.prototype.constructor = ExpressionLogicalXORContext;

STLangParser.ExpressionLogicalXORContext = ExpressionLogicalXORContext;

ExpressionLogicalXORContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionLogicalXORContext.prototype.XOR = function() {
    return this.getToken(STLangParser.XOR, 0);
};
ExpressionLogicalXORContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitExpressionLogicalXOR(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExpressionAdditiveContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.lhs = null; // ExpressionContext;
    this.op = null; // Token;
    this.rhs = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpressionAdditiveContext.prototype = Object.create(ExpressionContext.prototype);
ExpressionAdditiveContext.prototype.constructor = ExpressionAdditiveContext;

STLangParser.ExpressionAdditiveContext = ExpressionAdditiveContext;

ExpressionAdditiveContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionAdditiveContext.prototype.PLUS = function() {
    return this.getToken(STLangParser.PLUS, 0);
};

ExpressionAdditiveContext.prototype.MINUS = function() {
    return this.getToken(STLangParser.MINUS, 0);
};
ExpressionAdditiveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitExpressionAdditive(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExpressionRelativeContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.lhs = null; // ExpressionContext;
    this.op = null; // Token;
    this.rhs = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpressionRelativeContext.prototype = Object.create(ExpressionContext.prototype);
ExpressionRelativeContext.prototype.constructor = ExpressionRelativeContext;

STLangParser.ExpressionRelativeContext = ExpressionRelativeContext;

ExpressionRelativeContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionRelativeContext.prototype.GT = function() {
    return this.getToken(STLangParser.GT, 0);
};

ExpressionRelativeContext.prototype.LT = function() {
    return this.getToken(STLangParser.LT, 0);
};

ExpressionRelativeContext.prototype.GE = function() {
    return this.getToken(STLangParser.GE, 0);
};

ExpressionRelativeContext.prototype.LE = function() {
    return this.getToken(STLangParser.LE, 0);
};
ExpressionRelativeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitExpressionRelative(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExpressionMultipricativeContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.lhs = null; // ExpressionContext;
    this.op = null; // Token;
    this.rhs = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpressionMultipricativeContext.prototype = Object.create(ExpressionContext.prototype);
ExpressionMultipricativeContext.prototype.constructor = ExpressionMultipricativeContext;

STLangParser.ExpressionMultipricativeContext = ExpressionMultipricativeContext;

ExpressionMultipricativeContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionMultipricativeContext.prototype.ASTERISK = function() {
    return this.getToken(STLangParser.ASTERISK, 0);
};

ExpressionMultipricativeContext.prototype.SLASH = function() {
    return this.getToken(STLangParser.SLASH, 0);
};

ExpressionMultipricativeContext.prototype.MOD = function() {
    return this.getToken(STLangParser.MOD, 0);
};
ExpressionMultipricativeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitExpressionMultipricative(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExpressionEqualityContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.lhs = null; // ExpressionContext;
    this.op = null; // Token;
    this.rhs = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpressionEqualityContext.prototype = Object.create(ExpressionContext.prototype);
ExpressionEqualityContext.prototype.constructor = ExpressionEqualityContext;

STLangParser.ExpressionEqualityContext = ExpressionEqualityContext;

ExpressionEqualityContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionEqualityContext.prototype.EQ = function() {
    return this.getToken(STLangParser.EQ, 0);
};

ExpressionEqualityContext.prototype.NEQ = function() {
    return this.getToken(STLangParser.NEQ, 0);
};
ExpressionEqualityContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitExpressionEquality(this);
    } else {
        return visitor.visitChildren(this);
    }
};



STLangParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 30;
    this.enterRecursionRule(localctx, 30, STLangParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 208;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ExpressionNoneContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 193;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
            switch(la_) {
            case 1:
                this.state = 191;
                localctx.c = this.constant();
                break;

            case 2:
                this.state = 192;
                localctx.v = this.variable();
                break;

            }
            break;

        case 2:
            localctx = new ExpressionParenContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 195;
            this.match(STLangParser.LPAREN);
            this.state = 196;
            localctx.expr = this.expression(0);
            this.state = 197;
            this.match(STLangParser.RPAREN);
            break;

        case 3:
            localctx = new ExpressionFunctionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 199;
            localctx.func = this.identifier();
            this.state = 200;
            this.match(STLangParser.LPAREN);
            this.state = 202;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 1)) & ~0x1f) == 0 && ((1 << (_la - 1)) & ((1 << (STLangParser.NUM_INT_DEC - 1)) | (1 << (STLangParser.NUM_INT_BIN - 1)) | (1 << (STLangParser.NUM_INT_OCT - 1)) | (1 << (STLangParser.NUM_INT_HEX - 1)) | (1 << (STLangParser.NUM_REAL - 1)) | (1 << (STLangParser.STRING_LITERAL - 1)) | (1 << (STLangParser.WSTRING_LITERAL - 1)) | (1 << (STLangParser.PLUS - 1)) | (1 << (STLangParser.MINUS - 1)) | (1 << (STLangParser.LPAREN - 1)) | (1 << (STLangParser.TRUE - 1)) | (1 << (STLangParser.FALSE - 1)))) !== 0) || ((((_la - 58)) & ~0x1f) == 0 && ((1 << (_la - 58)) & ((1 << (STLangParser.NOT - 58)) | (1 << (STLangParser.BOOL - 58)) | (1 << (STLangParser.INT - 58)) | (1 << (STLangParser.DINT - 58)) | (1 << (STLangParser.UINT - 58)) | (1 << (STLangParser.UDINT - 58)) | (1 << (STLangParser.WORD - 58)) | (1 << (STLangParser.REAL - 58)) | (1 << (STLangParser.LREAL - 58)) | (1 << (STLangParser.STRING - 58)) | (1 << (STLangParser.WSTRING - 58)) | (1 << (STLangParser.IDENTIFIER - 58)))) !== 0)) {
                this.state = 201;
                localctx.args = this.parameterList();
            }

            this.state = 204;
            this.match(STLangParser.RPAREN);
            break;

        case 4:
            localctx = new ExpressionUnaryContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 206;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===STLangParser.PLUS || _la===STLangParser.MINUS || _la===STLangParser.NOT)) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 207;
            localctx.expr = this.expression(9);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 236;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 234;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpressionPowerContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.lhs = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, STLangParser.RULE_expression);
                    this.state = 210;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 211;
                    localctx.op = this.match(STLangParser.POWER);
                    this.state = 212;
                    localctx.rhs = this.expression(8);
                    break;

                case 2:
                    localctx = new ExpressionMultipricativeContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.lhs = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, STLangParser.RULE_expression);
                    this.state = 213;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 214;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===STLangParser.ASTERISK || _la===STLangParser.SLASH || _la===STLangParser.MOD)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 215;
                    localctx.rhs = this.expression(8);
                    break;

                case 3:
                    localctx = new ExpressionAdditiveContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.lhs = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, STLangParser.RULE_expression);
                    this.state = 216;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 217;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===STLangParser.PLUS || _la===STLangParser.MINUS)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 218;
                    localctx.rhs = this.expression(7);
                    break;

                case 4:
                    localctx = new ExpressionRelativeContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.lhs = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, STLangParser.RULE_expression);
                    this.state = 219;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 220;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << STLangParser.LT) | (1 << STLangParser.GT) | (1 << STLangParser.LE) | (1 << STLangParser.GE))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 221;
                    localctx.rhs = this.expression(6);
                    break;

                case 5:
                    localctx = new ExpressionEqualityContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.lhs = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, STLangParser.RULE_expression);
                    this.state = 222;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 223;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===STLangParser.EQ || _la===STLangParser.NEQ)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 224;
                    localctx.rhs = this.expression(5);
                    break;

                case 6:
                    localctx = new ExpressionLogicalANDContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.lhs = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, STLangParser.RULE_expression);
                    this.state = 225;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 226;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===STLangParser.AMPERSAND || _la===STLangParser.AND)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 227;
                    localctx.rhs = this.expression(4);
                    break;

                case 7:
                    localctx = new ExpressionLogicalXORContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.lhs = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, STLangParser.RULE_expression);
                    this.state = 228;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 229;
                    localctx.op = this.match(STLangParser.XOR);
                    this.state = 230;
                    localctx.rhs = this.expression(3);
                    break;

                case 8:
                    localctx = new ExpressionLogicalORContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.lhs = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, STLangParser.RULE_expression);
                    this.state = 231;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 232;
                    localctx.op = this.match(STLangParser.OR);
                    this.state = 233;
                    localctx.rhs = this.expression(2);
                    break;

                } 
            }
            this.state = 238;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function ParameterListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STLangParser.RULE_parameterList;
    this._parameterExpression = null; // ParameterExpressionContext
    this.expr = []; // of ParameterExpressionContexts
    return this;
}

ParameterListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParameterListContext.prototype.constructor = ParameterListContext;

ParameterListContext.prototype.parameterExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParameterExpressionContext);
    } else {
        return this.getTypedRuleContext(ParameterExpressionContext,i);
    }
};

ParameterListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(STLangParser.COMMA);
    } else {
        return this.getToken(STLangParser.COMMA, i);
    }
};


ParameterListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitParameterList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




STLangParser.ParameterListContext = ParameterListContext;

STLangParser.prototype.parameterList = function() {

    var localctx = new ParameterListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, STLangParser.RULE_parameterList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 239;
        localctx._parameterExpression = this.parameterExpression();
        localctx.expr.push(localctx._parameterExpression);
        this.state = 244;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===STLangParser.COMMA) {
            this.state = 240;
            this.match(STLangParser.COMMA);
            this.state = 241;
            localctx._parameterExpression = this.parameterExpression();
            localctx.expr.push(localctx._parameterExpression);
            this.state = 246;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ParameterExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STLangParser.RULE_parameterExpression;
    return this;
}

ParameterExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParameterExpressionContext.prototype.constructor = ParameterExpressionContext;


 
ParameterExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ParameterExpressionNoneContext(parser, ctx) {
	ParameterExpressionContext.call(this, parser);
    ParameterExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParameterExpressionNoneContext.prototype = Object.create(ParameterExpressionContext.prototype);
ParameterExpressionNoneContext.prototype.constructor = ParameterExpressionNoneContext;

STLangParser.ParameterExpressionNoneContext = ParameterExpressionNoneContext;

ParameterExpressionNoneContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ParameterExpressionNoneContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitParameterExpressionNone(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PrameterExpressionAssignToContext(parser, ctx) {
	ParameterExpressionContext.call(this, parser);
    this.lhs = null; // VariableContext;
    this.op = null; // Token;
    this.rhs = null; // VariableContext;
    ParameterExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrameterExpressionAssignToContext.prototype = Object.create(ParameterExpressionContext.prototype);
PrameterExpressionAssignToContext.prototype.constructor = PrameterExpressionAssignToContext;

STLangParser.PrameterExpressionAssignToContext = PrameterExpressionAssignToContext;

PrameterExpressionAssignToContext.prototype.variable = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VariableContext);
    } else {
        return this.getTypedRuleContext(VariableContext,i);
    }
};

PrameterExpressionAssignToContext.prototype.OUTREF = function() {
    return this.getToken(STLangParser.OUTREF, 0);
};
PrameterExpressionAssignToContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitPrameterExpressionAssignTo(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PrameterExpressionAssignFromContext(parser, ctx) {
	ParameterExpressionContext.call(this, parser);
    this.lhs = null; // VariableContext;
    this.op = null; // Token;
    this.rhs = null; // VariableContext;
    ParameterExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrameterExpressionAssignFromContext.prototype = Object.create(ParameterExpressionContext.prototype);
PrameterExpressionAssignFromContext.prototype.constructor = PrameterExpressionAssignFromContext;

STLangParser.PrameterExpressionAssignFromContext = PrameterExpressionAssignFromContext;

PrameterExpressionAssignFromContext.prototype.variable = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VariableContext);
    } else {
        return this.getTypedRuleContext(VariableContext,i);
    }
};

PrameterExpressionAssignFromContext.prototype.ASSIGN = function() {
    return this.getToken(STLangParser.ASSIGN, 0);
};
PrameterExpressionAssignFromContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitPrameterExpressionAssignFrom(this);
    } else {
        return visitor.visitChildren(this);
    }
};



STLangParser.ParameterExpressionContext = ParameterExpressionContext;

STLangParser.prototype.parameterExpression = function() {

    var localctx = new ParameterExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, STLangParser.RULE_parameterExpression);
    try {
        this.state = 256;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ParameterExpressionNoneContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 247;
            this.expression(0);
            break;

        case 2:
            localctx = new PrameterExpressionAssignFromContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 248;
            localctx.lhs = this.variable();
            this.state = 249;
            localctx.op = this.match(STLangParser.ASSIGN);
            this.state = 250;
            localctx.rhs = this.variable();
            break;

        case 3:
            localctx = new PrameterExpressionAssignToContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 252;
            localctx.lhs = this.variable();
            this.state = 253;
            localctx.op = this.match(STLangParser.OUTREF);
            this.state = 254;
            localctx.rhs = this.variable();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConstantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STLangParser.RULE_constant;
    return this;
}

ConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantContext.prototype.constructor = ConstantContext;


 
ConstantContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ConstantSignedNumberContext(parser, ctx) {
	ConstantContext.call(this, parser);
    this.typ = null; // TypeOfNumberContext;
    this.sgn = null; // SignContext;
    this.num = null; // UnsignedNumberContext;
    ConstantContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConstantSignedNumberContext.prototype = Object.create(ConstantContext.prototype);
ConstantSignedNumberContext.prototype.constructor = ConstantSignedNumberContext;

STLangParser.ConstantSignedNumberContext = ConstantSignedNumberContext;

ConstantSignedNumberContext.prototype.sign = function() {
    return this.getTypedRuleContext(SignContext,0);
};

ConstantSignedNumberContext.prototype.unsignedNumber = function() {
    return this.getTypedRuleContext(UnsignedNumberContext,0);
};

ConstantSignedNumberContext.prototype.SHARP = function() {
    return this.getToken(STLangParser.SHARP, 0);
};

ConstantSignedNumberContext.prototype.typeOfNumber = function() {
    return this.getTypedRuleContext(TypeOfNumberContext,0);
};
ConstantSignedNumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitConstantSignedNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ConstantSignedIdentifierContext(parser, ctx) {
	ConstantContext.call(this, parser);
    this.sgn = null; // SignContext;
    this.id = null; // IdentifierContext;
    ConstantContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConstantSignedIdentifierContext.prototype = Object.create(ConstantContext.prototype);
ConstantSignedIdentifierContext.prototype.constructor = ConstantSignedIdentifierContext;

STLangParser.ConstantSignedIdentifierContext = ConstantSignedIdentifierContext;

ConstantSignedIdentifierContext.prototype.sign = function() {
    return this.getTypedRuleContext(SignContext,0);
};

ConstantSignedIdentifierContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};
ConstantSignedIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitConstantSignedIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ConstantIdentifierContext(parser, ctx) {
	ConstantContext.call(this, parser);
    this.id = null; // IdentifierContext;
    ConstantContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConstantIdentifierContext.prototype = Object.create(ConstantContext.prototype);
ConstantIdentifierContext.prototype.constructor = ConstantIdentifierContext;

STLangParser.ConstantIdentifierContext = ConstantIdentifierContext;

ConstantIdentifierContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};
ConstantIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitConstantIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ConstandUnsignedNumberContext(parser, ctx) {
	ConstantContext.call(this, parser);
    this.typ = null; // TypeOfNumberContext;
    this.num = null; // UnsignedNumberContext;
    ConstantContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConstandUnsignedNumberContext.prototype = Object.create(ConstantContext.prototype);
ConstandUnsignedNumberContext.prototype.constructor = ConstandUnsignedNumberContext;

STLangParser.ConstandUnsignedNumberContext = ConstandUnsignedNumberContext;

ConstandUnsignedNumberContext.prototype.unsignedNumber = function() {
    return this.getTypedRuleContext(UnsignedNumberContext,0);
};

ConstandUnsignedNumberContext.prototype.SHARP = function() {
    return this.getToken(STLangParser.SHARP, 0);
};

ConstandUnsignedNumberContext.prototype.typeOfNumber = function() {
    return this.getTypedRuleContext(TypeOfNumberContext,0);
};
ConstandUnsignedNumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitConstandUnsignedNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ConstantBoolContext(parser, ctx) {
	ConstantContext.call(this, parser);
    ConstantContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConstantBoolContext.prototype = Object.create(ConstantContext.prototype);
ConstantBoolContext.prototype.constructor = ConstantBoolContext;

STLangParser.ConstantBoolContext = ConstantBoolContext;

ConstantBoolContext.prototype.bool = function() {
    return this.getTypedRuleContext(BoolContext,0);
};
ConstantBoolContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitConstantBool(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ConstantStringContext(parser, ctx) {
	ConstantContext.call(this, parser);
    this.typ = null; // TypeOfStringContext;
    this.str = null; // StringContext;
    ConstantContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConstantStringContext.prototype = Object.create(ConstantContext.prototype);
ConstantStringContext.prototype.constructor = ConstantStringContext;

STLangParser.ConstantStringContext = ConstantStringContext;

ConstantStringContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

ConstantStringContext.prototype.SHARP = function() {
    return this.getToken(STLangParser.SHARP, 0);
};

ConstantStringContext.prototype.typeOfString = function() {
    return this.getTypedRuleContext(TypeOfStringContext,0);
};
ConstantStringContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitConstantString(this);
    } else {
        return visitor.visitChildren(this);
    }
};



STLangParser.ConstantContext = ConstantContext;

STLangParser.prototype.constant = function() {

    var localctx = new ConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, STLangParser.RULE_constant);
    var _la = 0; // Token type
    try {
        this.state = 283;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ConstandUnsignedNumberContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 261;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (STLangParser.BOOL - 59)) | (1 << (STLangParser.INT - 59)) | (1 << (STLangParser.DINT - 59)) | (1 << (STLangParser.UINT - 59)) | (1 << (STLangParser.UDINT - 59)) | (1 << (STLangParser.WORD - 59)) | (1 << (STLangParser.REAL - 59)) | (1 << (STLangParser.LREAL - 59)))) !== 0)) {
                this.state = 258;
                localctx.typ = this.typeOfNumber();
                this.state = 259;
                this.match(STLangParser.SHARP);
            }

            this.state = 263;
            localctx.num = this.unsignedNumber();
            break;

        case 2:
            localctx = new ConstantSignedNumberContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 267;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (STLangParser.BOOL - 59)) | (1 << (STLangParser.INT - 59)) | (1 << (STLangParser.DINT - 59)) | (1 << (STLangParser.UINT - 59)) | (1 << (STLangParser.UDINT - 59)) | (1 << (STLangParser.WORD - 59)) | (1 << (STLangParser.REAL - 59)) | (1 << (STLangParser.LREAL - 59)))) !== 0)) {
                this.state = 264;
                localctx.typ = this.typeOfNumber();
                this.state = 265;
                this.match(STLangParser.SHARP);
            }

            this.state = 269;
            localctx.sgn = this.sign();
            this.state = 270;
            localctx.num = this.unsignedNumber();
            break;

        case 3:
            localctx = new ConstantBoolContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 272;
            this.bool();
            break;

        case 4:
            localctx = new ConstantIdentifierContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 273;
            localctx.id = this.identifier();
            break;

        case 5:
            localctx = new ConstantSignedIdentifierContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 274;
            localctx.sgn = this.sign();
            this.state = 275;
            localctx.id = this.identifier();
            break;

        case 6:
            localctx = new ConstantStringContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 280;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===STLangParser.STRING || _la===STLangParser.WSTRING) {
                this.state = 277;
                localctx.typ = this.typeOfString();
                this.state = 278;
                this.match(STLangParser.SHARP);
            }

            this.state = 282;
            localctx.str = this.string();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function UnsignedNumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STLangParser.RULE_unsignedNumber;
    return this;
}

UnsignedNumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnsignedNumberContext.prototype.constructor = UnsignedNumberContext;

UnsignedNumberContext.prototype.unsignedInteger = function() {
    return this.getTypedRuleContext(UnsignedIntegerContext,0);
};

UnsignedNumberContext.prototype.unsignedReal = function() {
    return this.getTypedRuleContext(UnsignedRealContext,0);
};

UnsignedNumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitUnsignedNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};




STLangParser.UnsignedNumberContext = UnsignedNumberContext;

STLangParser.prototype.unsignedNumber = function() {

    var localctx = new UnsignedNumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, STLangParser.RULE_unsignedNumber);
    try {
        this.state = 287;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case STLangParser.NUM_INT_DEC:
        case STLangParser.NUM_INT_BIN:
        case STLangParser.NUM_INT_OCT:
        case STLangParser.NUM_INT_HEX:
            this.enterOuterAlt(localctx, 1);
            this.state = 285;
            this.unsignedInteger();
            break;
        case STLangParser.NUM_REAL:
            this.enterOuterAlt(localctx, 2);
            this.state = 286;
            this.unsignedReal();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function UnsignedIntegerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STLangParser.RULE_unsignedInteger;
    return this;
}

UnsignedIntegerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnsignedIntegerContext.prototype.constructor = UnsignedIntegerContext;


 
UnsignedIntegerContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function UnsignedIntegerHexContext(parser, ctx) {
	UnsignedIntegerContext.call(this, parser);
    this.num = null; // Token;
    UnsignedIntegerContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnsignedIntegerHexContext.prototype = Object.create(UnsignedIntegerContext.prototype);
UnsignedIntegerHexContext.prototype.constructor = UnsignedIntegerHexContext;

STLangParser.UnsignedIntegerHexContext = UnsignedIntegerHexContext;

UnsignedIntegerHexContext.prototype.NUM_INT_HEX = function() {
    return this.getToken(STLangParser.NUM_INT_HEX, 0);
};
UnsignedIntegerHexContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitUnsignedIntegerHex(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function UnsignedIntegerOctContext(parser, ctx) {
	UnsignedIntegerContext.call(this, parser);
    this.num = null; // Token;
    UnsignedIntegerContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnsignedIntegerOctContext.prototype = Object.create(UnsignedIntegerContext.prototype);
UnsignedIntegerOctContext.prototype.constructor = UnsignedIntegerOctContext;

STLangParser.UnsignedIntegerOctContext = UnsignedIntegerOctContext;

UnsignedIntegerOctContext.prototype.NUM_INT_OCT = function() {
    return this.getToken(STLangParser.NUM_INT_OCT, 0);
};
UnsignedIntegerOctContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitUnsignedIntegerOct(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function UnsignedIntegerDecContext(parser, ctx) {
	UnsignedIntegerContext.call(this, parser);
    this.num = null; // Token;
    UnsignedIntegerContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnsignedIntegerDecContext.prototype = Object.create(UnsignedIntegerContext.prototype);
UnsignedIntegerDecContext.prototype.constructor = UnsignedIntegerDecContext;

STLangParser.UnsignedIntegerDecContext = UnsignedIntegerDecContext;

UnsignedIntegerDecContext.prototype.NUM_INT_DEC = function() {
    return this.getToken(STLangParser.NUM_INT_DEC, 0);
};
UnsignedIntegerDecContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitUnsignedIntegerDec(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function UnsignedIntegerBinContext(parser, ctx) {
	UnsignedIntegerContext.call(this, parser);
    this.num = null; // Token;
    UnsignedIntegerContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnsignedIntegerBinContext.prototype = Object.create(UnsignedIntegerContext.prototype);
UnsignedIntegerBinContext.prototype.constructor = UnsignedIntegerBinContext;

STLangParser.UnsignedIntegerBinContext = UnsignedIntegerBinContext;

UnsignedIntegerBinContext.prototype.NUM_INT_BIN = function() {
    return this.getToken(STLangParser.NUM_INT_BIN, 0);
};
UnsignedIntegerBinContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitUnsignedIntegerBin(this);
    } else {
        return visitor.visitChildren(this);
    }
};



STLangParser.UnsignedIntegerContext = UnsignedIntegerContext;

STLangParser.prototype.unsignedInteger = function() {

    var localctx = new UnsignedIntegerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, STLangParser.RULE_unsignedInteger);
    try {
        this.state = 293;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case STLangParser.NUM_INT_DEC:
            localctx = new UnsignedIntegerDecContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 289;
            localctx.num = this.match(STLangParser.NUM_INT_DEC);
            break;
        case STLangParser.NUM_INT_BIN:
            localctx = new UnsignedIntegerBinContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 290;
            localctx.num = this.match(STLangParser.NUM_INT_BIN);
            break;
        case STLangParser.NUM_INT_OCT:
            localctx = new UnsignedIntegerOctContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 291;
            localctx.num = this.match(STLangParser.NUM_INT_OCT);
            break;
        case STLangParser.NUM_INT_HEX:
            localctx = new UnsignedIntegerHexContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 292;
            localctx.num = this.match(STLangParser.NUM_INT_HEX);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function UnsignedRealContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STLangParser.RULE_unsignedReal;
    this.num = null; // Token
    return this;
}

UnsignedRealContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnsignedRealContext.prototype.constructor = UnsignedRealContext;

UnsignedRealContext.prototype.NUM_REAL = function() {
    return this.getToken(STLangParser.NUM_REAL, 0);
};

UnsignedRealContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitUnsignedReal(this);
    } else {
        return visitor.visitChildren(this);
    }
};




STLangParser.UnsignedRealContext = UnsignedRealContext;

STLangParser.prototype.unsignedReal = function() {

    var localctx = new UnsignedRealContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, STLangParser.RULE_unsignedReal);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 295;
        localctx.num = this.match(STLangParser.NUM_REAL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STLangParser.RULE_sign;
    return this;
}

SignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SignContext.prototype.constructor = SignContext;

SignContext.prototype.PLUS = function() {
    return this.getToken(STLangParser.PLUS, 0);
};

SignContext.prototype.MINUS = function() {
    return this.getToken(STLangParser.MINUS, 0);
};

SignContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitSign(this);
    } else {
        return visitor.visitChildren(this);
    }
};




STLangParser.SignContext = SignContext;

STLangParser.prototype.sign = function() {

    var localctx = new SignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, STLangParser.RULE_sign);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 297;
        _la = this._input.LA(1);
        if(!(_la===STLangParser.PLUS || _la===STLangParser.MINUS)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BoolContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STLangParser.RULE_bool;
    return this;
}

BoolContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BoolContext.prototype.constructor = BoolContext;

BoolContext.prototype.TRUE = function() {
    return this.getToken(STLangParser.TRUE, 0);
};

BoolContext.prototype.FALSE = function() {
    return this.getToken(STLangParser.FALSE, 0);
};

BoolContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitBool(this);
    } else {
        return visitor.visitChildren(this);
    }
};




STLangParser.BoolContext = BoolContext;

STLangParser.prototype.bool = function() {

    var localctx = new BoolContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, STLangParser.RULE_bool);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 299;
        _la = this._input.LA(1);
        if(!(_la===STLangParser.TRUE || _la===STLangParser.FALSE)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TypeOfNumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STLangParser.RULE_typeOfNumber;
    return this;
}

TypeOfNumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeOfNumberContext.prototype.constructor = TypeOfNumberContext;

TypeOfNumberContext.prototype.INT = function() {
    return this.getToken(STLangParser.INT, 0);
};

TypeOfNumberContext.prototype.UINT = function() {
    return this.getToken(STLangParser.UINT, 0);
};

TypeOfNumberContext.prototype.DINT = function() {
    return this.getToken(STLangParser.DINT, 0);
};

TypeOfNumberContext.prototype.UDINT = function() {
    return this.getToken(STLangParser.UDINT, 0);
};

TypeOfNumberContext.prototype.REAL = function() {
    return this.getToken(STLangParser.REAL, 0);
};

TypeOfNumberContext.prototype.LREAL = function() {
    return this.getToken(STLangParser.LREAL, 0);
};

TypeOfNumberContext.prototype.WORD = function() {
    return this.getToken(STLangParser.WORD, 0);
};

TypeOfNumberContext.prototype.BOOL = function() {
    return this.getToken(STLangParser.BOOL, 0);
};

TypeOfNumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitTypeOfNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};




STLangParser.TypeOfNumberContext = TypeOfNumberContext;

STLangParser.prototype.typeOfNumber = function() {

    var localctx = new TypeOfNumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, STLangParser.RULE_typeOfNumber);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 301;
        _la = this._input.LA(1);
        if(!(((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (STLangParser.BOOL - 59)) | (1 << (STLangParser.INT - 59)) | (1 << (STLangParser.DINT - 59)) | (1 << (STLangParser.UINT - 59)) | (1 << (STLangParser.UDINT - 59)) | (1 << (STLangParser.WORD - 59)) | (1 << (STLangParser.REAL - 59)) | (1 << (STLangParser.LREAL - 59)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TypeOfStringContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STLangParser.RULE_typeOfString;
    return this;
}

TypeOfStringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeOfStringContext.prototype.constructor = TypeOfStringContext;

TypeOfStringContext.prototype.STRING = function() {
    return this.getToken(STLangParser.STRING, 0);
};

TypeOfStringContext.prototype.WSTRING = function() {
    return this.getToken(STLangParser.WSTRING, 0);
};

TypeOfStringContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitTypeOfString(this);
    } else {
        return visitor.visitChildren(this);
    }
};




STLangParser.TypeOfStringContext = TypeOfStringContext;

STLangParser.prototype.typeOfString = function() {

    var localctx = new TypeOfStringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, STLangParser.RULE_typeOfString);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 303;
        _la = this._input.LA(1);
        if(!(_la===STLangParser.STRING || _la===STLangParser.WSTRING)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STLangParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




STLangParser.VariableContext = VariableContext;

STLangParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, STLangParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 305;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StringContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STLangParser.RULE_string;
    return this;
}

StringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringContext.prototype.constructor = StringContext;


 
StringContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function StringMultiByteContext(parser, ctx) {
	StringContext.call(this, parser);
    StringContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringMultiByteContext.prototype = Object.create(StringContext.prototype);
StringMultiByteContext.prototype.constructor = StringMultiByteContext;

STLangParser.StringMultiByteContext = StringMultiByteContext;

StringMultiByteContext.prototype.STRING_LITERAL = function() {
    return this.getToken(STLangParser.STRING_LITERAL, 0);
};
StringMultiByteContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitStringMultiByte(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StringWideContext(parser, ctx) {
	StringContext.call(this, parser);
    StringContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringWideContext.prototype = Object.create(StringContext.prototype);
StringWideContext.prototype.constructor = StringWideContext;

STLangParser.StringWideContext = StringWideContext;

StringWideContext.prototype.WSTRING_LITERAL = function() {
    return this.getToken(STLangParser.WSTRING_LITERAL, 0);
};
StringWideContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitStringWide(this);
    } else {
        return visitor.visitChildren(this);
    }
};



STLangParser.StringContext = StringContext;

STLangParser.prototype.string = function() {

    var localctx = new StringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, STLangParser.RULE_string);
    try {
        this.state = 309;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case STLangParser.STRING_LITERAL:
            localctx = new StringMultiByteContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 307;
            this.match(STLangParser.STRING_LITERAL);
            break;
        case STLangParser.WSTRING_LITERAL:
            localctx = new StringWideContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 308;
            this.match(STLangParser.WSTRING_LITERAL);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STLangParser.RULE_identifier;
    this.id = null; // Token
    return this;
}

IdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierContext.prototype.constructor = IdentifierContext;

IdentifierContext.prototype.IDENTIFIER = function() {
    return this.getToken(STLangParser.IDENTIFIER, 0);
};

IdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof STLangParserVisitor ) {
        return visitor.visitIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




STLangParser.IdentifierContext = IdentifierContext;

STLangParser.prototype.identifier = function() {

    var localctx = new IdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, STLangParser.RULE_identifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 311;
        localctx.id = this.match(STLangParser.IDENTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


STLangParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 15:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

STLangParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 8);
		case 1:
			return this.precpred(this._ctx, 7);
		case 2:
			return this.precpred(this._ctx, 6);
		case 3:
			return this.precpred(this._ctx, 5);
		case 4:
			return this.precpred(this._ctx, 4);
		case 5:
			return this.precpred(this._ctx, 3);
		case 6:
			return this.precpred(this._ctx, 2);
		case 7:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.STLangParser = STLangParser;

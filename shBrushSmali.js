/**
 * For SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * @version
 * 1.1.0 (September 19 2014)
 *
 * By Caleb Fenton
 */
;(function()
{
  // CommonJS
  typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

  function Brush()
  {
    // Must put these in reverse order or else 'const' will catch but 'const/4' will not
    var functions =
      'xor-long/2addr xor-long xor-int/lit8 xor-int/lit16 xor-int/2addr xor-int'
      + ' ushr-long/2addr ushr-long ushr-int/lit8 ushr-int/2addr ushr-int throw'
      + ' sub-long/2addr sub-long sub-int/lit8 sub-int/lit16 sub-int/2addr sub-int'
      + ' sub-float/2addr sub-float sub-double/2addr sub-double sput-wide sput-short'
      + ' sput-object sput-char sput-byte sput-boolean sput sparse-switch shr-long/2addr'
      + ' shr-long shr-int/lit8 shr-int/2addr shr-int shl-long/2addr shl-long shl-int/lit8'
      + ' shl-int/2addr shl-int sget-wide sget-short sget-object sget-char sget-byte'
      + ' sget-boolean sget return-wide return-void return-object return rem-long/2addr'
      + ' rem-long rem-int/lit8 rem-int/lit16 rem-int/2addr rem-int rem-float/2addr'
      + ' rem-float rem-double/2addr rem-double or-long/2addr or-long or-int/lit8'
      + ' or-int/lit16 or-int/2addr or-int not-long not-int nop new-instance new-array'
      + ' neg-long neg-int neg-float neg-double mul-long/2addr mul-long mul-int/lit16'
      + ' mul-int/lit8 mul-int/2addr mul-int mul-float/2addr mul-float mul-double/2addr'
      + ' mul-double move/from16 move/16 move-wide/from16 move-wide/16 move-wide'
      + ' move-result-wide move-result-object move-result move-object/from16 move-object/16'
      + ' move-object move-exception move monitor-exit monitor-enter long-to-int'
      + ' long-to-float long-to-double iput-wide-quick iput-wide iput-short iput-quick'
      + ' iput-object-quick iput-object iput-char iput-byte iput-boolean iput'
      + ' invoke-virtual/range invoke-virtual-quick/range invoke-virtual-quick'
      + ' invoke-virtual invoke-super/range invoke-super-quick/range invoke-super-quick'
      + ' invoke-super invoke-static/range invoke-static invoke-interface/range'
      + ' invoke-interface invoke-direct/range invoke-direct-empty invoke-direct'
      + ' int-to-short int-to-long int-to-float int-to-double int-to-char int-to-byte'
      + ' instance-of iget-wide-quick iget-wide iget-short iget-quick'
      + ' iget-object-quick iget-object iget-char iget-byte iget-boolean iget if-nez'
      + ' if-ne if-ltz if-lt if-lez if-le if-gtz if-gt if-gez if-ge if-eqz if-eq goto/32'
      + ' goto/16 goto float-to-long float-to-int float-to-double filled-new-array/range'
      + ' filled-new-array fill-array-data execute-inline double-to-long double-to-int'
      + ' double-to-float div-long/2addr div-long div-int/lit8 div-int/lit16 div-int/2addr'
      + ' div-int div-float/2addr div-float div-double/2addr div-double const/high16 const/4'
      + ' const/16 const-wide/high16 const-wide/32 const-wide/16 const-wide'
      + ' const-string-jumbo const-string const-class const cmpl-float cmpl-double cmpg-float'
      + ' cmpg-double cmp-long check-cast array-length aput-wide aput-short aput-object'
      + ' aput-char aput-byte aput-boolean aput and-long/2addr and-long and-int/lit8'
      + ' and-int/lit16 and-int/2addr and-int aget-wide aget-short aget-object aget-char'
      + ' aget-byte aget-boolean aget add-long/2addr add-long add-int/lit8 add-int/lit16'
      + ' add-int/2addr add-int add-float/2addr add-float add-double/2addr add-double';

    var preprocessors =
      'annotation array-data catch catchall class end enum epilogue field'
      + ' implements line local locals method packed-switch parameter prologue'
      + ' registers restart source sparse-switch subannotation super';

    var keywords =
      'abstract annotation bridge constructor declared-synchronized enum final'
      + ' interface native private protected public static strictfp synchronized synthetic'
      + ' system transient varargs volatile';

    // available: plain, comments, string, keyword, preprocessor, variable, value
    // functions, constants, script, color1, color2, color3, keyword
    this.regexList = [
      { regex: new RegExp('#.*$', 'gm'),                            	css: 'comments' },
      { regex: SyntaxHighlighter.regexLib.doubleQuotedString,       	css: 'string' },
      { regex: new RegExp(this.getKeywords(keywords), 'gm'),        	css: 'keyword' },
      { regex: new RegExp(this.getKeywords(preprocessors), 'gm'),   	css: 'preprocessor' },
      { regex: new RegExp('[vp]\\d+', 'g'),                         	css: 'variable' },
      { regex: new RegExp(this.getKeywords(functions), 'gmi'),    	  css: 'functions' },
      // Labels
      { regex: new RegExp('(^\\s*|\\s|,):\\w+$', 'gm'),         	    css: 'value' },
      // Literals
      { regex: new RegExp('(-?0x[0-9a-f]+L?|true|false|null)', 'gi'),	css: 'constants' },
      // Types
      { regex: new RegExp('L[^;\\s]+;', 'g'),                        	css: 'color2' },
      // Method calls
      { regex: new RegExp('-&gt;\\w+\\S*\\(\\S*\\)', 'gm'),        	  css: 'function' },
      // Field reference types
      { regex: new RegExp('\\w+:\\[*([DFJISCBZV]|L[^;\\s]+;)', 'g'),	css: 'color1' },
    ];

    this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags);
  }

  Brush.prototype  = new SyntaxHighlighter.Highlighter();
  Brush.aliases    = ['smali', 'Smali', 'dalvik'];

  SyntaxHighlighter.brushes.Smali = Brush;

  // CommonJS
  typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

var trainingData = 
[
  { text: 'awk', entityType: 'Language'},
  { text: 'foxpro', entityType: 'Language'},
  { text: 'ml', entityType: 'Language'},
  { text: 'apex', entityType: 'Language'},
  { text: 'typescript', entityType: 'Language'},
  { text: 'haskell', entityType: 'Language'},
  { text: 'vhdl', entityType: 'Language'},
  { text: 'alice', entityType: 'Language'},
  { text: 'openedge abl', entityType: 'Language'},
  { text: 'bash', entityType: 'Language'},
  { text: 'powershell', entityType: 'Language'},
  { text: 'ada', entityType: 'Language'},
  { text: 'lua', entityType: 'Language'},
  { text: 'fortran', entityType: 'Language'},
  { text: 'cobol', entityType: 'Language'},
  { text: 'lisp', entityType: 'Language'},
  { text: 'd', entityType: 'Language'},
  { text: 'kotlin', entityType: 'Language'},
  { text: 'julia', entityType: 'Language'},
  { text: 'prolog', entityType: 'Language'},
  { text: 'Python', entityType: 'Language'},
  { text: 'Java', entityType: 'Language' },
  { text: 'R', entityType: 'Language' },
  { text: 'C', entityType: 'Language' },
  { text: 'C++', entityType: 'Language' },
  { text: 'HTML', entityType: 'Language' },
  { text: 'CSS', entityType: 'Language' },	
  { text: 'C#', entityType: 'Language' },
  { text: 'Visual Basic', entityType: 'Language' },
  { text: 'Javascript', entityType: 'Language' },
  { text: 'PHP', entityType: 'Language' },
  { text: 'SQL', entityType: 'Language' },
  { text: 'Perl', entityType: 'Language' },
  { text: 'Groovy', entityType: 'Language' },
  { text: 'Ruby', entityType: 'Language' },
  { text: 'Go', entityType: 'Language' },
  { text: 'Matlab', entityType: 'Language' },
  { text: 'Swift', entityType: 'Language' },
  { text: 'Assembly Language', entityType: 'Language' },
  { text: 'Objective-C', entityType: 'Language' },
  { text: 'Classic Visual Basic', entityType: 'Language' },
  { text: 'PL/SQL', entityType: 'Language' },
  { text: 'SAS', entityType: 'Language' },
  { text: 'Delphi', entityType: 'Language' },
  { text: 'Object Pascal', entityType: 'Language' },
  { text: 'Scratch', entityType: 'Language' },
  { text: 'Transact-SQL', entityType: 'Language' },
  { text: 'Rust', entityType: 'Language' },
  { text: 'Dart', entityType: 'Language' },
  { text: 'Logo', entityType: 'Language' },
  { text: 'Scala', entityType: 'Language' },
  { text: 'ABAP', entityType: 'Language' },
  { text: 'Scheme', entityType: 'Language' },
  { text: 'Prolog', entityType: 'Language' }, 
  { text: 'awk', entityType: 'Language'},
  { text: 'foxpro', entityType: 'Language'},
  { text: 'ml', entityType: 'Language'},
  { text: 'apex', entityType: 'Language'},
  { text: 'typescript', entityType: 'Language'},
  { text: 'haskell', entityType: 'Language'},
  { text: 'vhdl', entityType: 'Language'},
  { text: 'alice', entityType: 'Language'},
  { text: 'openedge abl', entityType: 'Language'},
  { text: 'bash', entityType: 'Language'},
  { text: 'powershell', entityType: 'Language'},
  { text: 'ada', entityType: 'Language'},
  { text: 'lua', entityType: 'Language'},
  { text: 'fortran', entityType: 'Language'},
  { text: 'cobol', entityType: 'Language'},
  { text: 'lisp', entityType: 'Language'},
  { text: 'd', entityType: 'Language'},
  { text: 'kotlin', entityType: 'Language'},
  { text: 'julia', entityType: 'Language'},
  { text: 'prolog', entityType: 'Language'}
];

var ner = require( 'wink-ner' );
var myNER = ner();
myNER.learn(trainingData);
var winkTokenizer = require( 'wink-tokenizer' );
var tokenize = winkTokenizer().tokenize;
var tokens = tokenize( 'python java mary ');
tokens = myNER.recognize( tokens );
//console.log( tokens );
//console.log(text);

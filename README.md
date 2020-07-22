[![Build Status](https://travis-ci.com/ununu-p2p/logic-parser.svg?branch=master)](https://travis-ci.com/ununu-p2p/logic-parser)
[![codecov](https://codecov.io/gh/ununu-p2p/logic-parser/branch/master/graph/badge.svg)](https://codecov.io/gh/ununu-p2p/logic-parser)

#### Logic Parser
Yet another node module! Parses the Logic Pro(*logic) File to extract the basic info. 

<b>"The Project is Under Construction!!"</b>

```js
const logicParser = require('logic-parser');

logicParser.parseFile('PATH/TO/THE/PROJECT').then((res) => {
    console.log(res.getTracks());
})
```
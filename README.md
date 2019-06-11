# mongo-query-helper [![Build Status](https://travis-ci.com/TalhaAwan/mongo-query.svg?branch=master)](https://travis-ci.com/TalhaAwan/mongo-query)
Mongo query helper for common, repetitive queries

## Install

```
$ npm install mongo-query
```

## Usage
```
const mqh = require('mongo-query');

//mongoose
User.find({accessLevel: mqh.ne(2)}, function(err, users){
    if(!err){
        console.log(users)
    }
});

Match.find({completed: mqh.exists(), score: mqh.gtLt(32, 100)}, function(err, users){
    if(!err){
        console.log(users)
    }
});
```

## APIs

### lt(param)
Less than
```
mqh.lt(2)
// { '$lt': 2}
```

### lte(param)
Less than equal to
```
mqh.lte(2)
// { '$lte': 2}
```

### gt(param)
Greater than
```
mqh.gt(2)
// { '$gt': 2}
```

### gte(param)
Greater than equal to
```
mqh.gte(2)
// { '$gte': 2}
```

### gtLt(param, param)
Greater than and less than
```
mqh.gtLt(2, 4)
// { '$gt': 2, '$lt': 4}
```

### gteLt(param, param)
Greater than equal to and less than
```
mqh.gteLt(2, 4)
// { '$gte': 2, '$lt': 4}
```

### gtLte(param, param)
Greater than and less than equal to
```
mqh.gtLte(2, 4)
// { '$gt': 2, '$lte': 4}
```

### gteLte(param, param)
Greater than equal to and less than equal to
```
mqh.gteLte(2, 4)
// { '$gte': 2, '$lte': 4}
```

### exists()
```
mqh.exists()
// { '$exists': true}
```

### notExists()
```
mqh.notExists()
// { '$exists': false}
```

### eq(param)
Equal to
```
mqh.eq(7)
// { '$eq': 7}
```

### ne(param)
Not equal to
```
mqh.ne(7)
// { '$ne': 7}
```

### in([params] | param, param)
```
mqh.in([1, 2, 3])
// { '$in': [1, 2, 3]}

mqh.in(1, 2, 3)
// { '$in': [1, 2, 3]}
```

### nin([params] | param, param)
Not in
```
mqh.nin([1, 2, 3])
// { '$nin': [1, 2, 3]}

mqh.nin(1, 2, 3)
// { '$nin': [1, 2, 3]}
```

### mod(param, param)
[Modulo](https://docs.mongodb.com/manual/reference/operator/query/mod/#op._S_mod)
```
mqh.mod(4, 0)
// { '$mod': [4, 0]}
```

### merge(param, param)
Merges all the object parameters into one. Shorter name `mrg`
```
mqh.mrg(mqh.exists(), mqh.ne(2), mqh.gteLte(1, 10))
// { '$exists': true, '$ne': 2, '$gte': 1, '$lte': 10}
```

## Related

- (https://www.npmjs.com/package/mongo-date-query)[mongo-date-query] helper for common mongo date queries 

## License

MIT © Talha Awan

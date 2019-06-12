# mongo-query-helper [![Build Status](https://travis-ci.com/TalhaAwan/mongo-query-helper.svg?branch=master)](https://travis-ci.com/TalhaAwan/mongo-query-helper)
Mongo query helper for common, repetitive queries

## Install

```
$ npm install mongo-query-helper
```

## Usage
```
const mh = require('mongo-query-helper');

//mongoose
User.find({accessLevel: mh.ne(2)}, function(err, users){
    if(!err){
        console.log(users)
    }
});

Match.find({completed: mh.exists(), score: mh.gtLt(32, 100)}, function(err, matches){
    if(!err){
        console.log(matches)
    }
});
```

## APIs

### lt(param)
Less than
```
mh.lt(2)
// { '$lt': 2}
```

### lte(param)
Less than equal to
```
mh.lte(2)
// { '$lte': 2}
```

### gt(param)
Greater than
```
mh.gt(2)
// { '$gt': 2}
```

### gte(param)
Greater than equal to
```
mh.gte(2)
// { '$gte': 2}
```

### gtLt(param, param)
Greater than and less than
```
mh.gtLt(2, 4)
// { '$gt': 2, '$lt': 4}
```

### gteLt(param, param)
Greater than equal to and less than
```
mh.gteLt(2, 4)
// { '$gte': 2, '$lt': 4}
```

### gtLte(param, param)
Greater than and less than equal to
```
mh.gtLte(2, 4)
// { '$gt': 2, '$lte': 4}
```

### gteLte(param, param)
Greater than equal to and less than equal to
```
mh.gteLte(2, 4)
// { '$gte': 2, '$lte': 4}
```

### exists()
```
mh.exists()
// { '$exists': true}
```

### notExists()
```
mh.notExists()
// { '$exists': false}
```

### eq(param)
Equal to
```
mh.eq(7)
// { '$eq': 7}
```

### ne(param)
Not equal to
```
mh.ne(7)
// { '$ne': 7}
```

### in([params] | param, param)
```
mh.in([1, 2, 3])
// { '$in': [1, 2, 3]}

mh.in(1, 2, 3)
// { '$in': [1, 2, 3]}
```

### nin([params] | param, param)
Not in
```
mh.nin([1, 2, 3])
// { '$nin': [1, 2, 3]}

mh.nin(1, 2, 3)
// { '$nin': [1, 2, 3]}
```

### mod(param, param)
[Modulo](https://docs.mongodb.com/manual/reference/operator/query/mod/#op._S_mod)
```
mh.mod(4, 0)
// { '$mod': [4, 0]}
```

### merge(param, param)
Merges all the object parameters into one. Shorter name `mrg`
```
mh.mrg(mh.exists(), mh.ne(2), mh.gteLte(1, 10))
// { '$exists': true, '$ne': 2, '$gte': 1, '$lte': 10}
```

## Related

- [mongo-date-query](https://www.npmjs.com/package/mongo-date-query) helper for common mongo date queries 

## License

MIT © Talha Awan

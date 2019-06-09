# mongo-query [![Build Status](https://travis-ci.com/TalhaAwan/mongo-query.svg?branch=master)](https://travis-ci.com/TalhaAwan/mongo-query)
Mongo query helper for common, repetitive queries

## Install

```
$ npm install mongo-query
```

## Usage
```
const mq = require('mongo-query');

//mongoose
User.find({accessLevel: mq.ne(2)}, function(err, users){
    if(!err){
        console.log(users)
    }
});

Match.find({completed: mq.exists(), score: mq.gtLt(32, 100)}, function(err, users){
    if(!err){
        console.log(users)
    }
});
```

## APIs

### lt(param)
Less than
```
mq.lt(2)
// { '$lt': 2}
```

### lte(param)
Less than equal to
```
mq.lte(2)
// { '$lte': 2}
```

### gt(param)
Greater than
```
mq.gt(2)
// { '$gt': 2}
```

### gte(param)
Greater than equal to
```
mq.gte(2)
// { '$gte': 2}
```

### gtLt(param, param)
Greater than and less than
```
mq.gtLt(2, 4)
// { '$gt': 2, '$lt': 4}
```

### gteLt(param, param)
Greater than equal to and less than
```
mq.gteLt(2, 4)
// { '$gte': 2, '$lt': 4}
```

### gtLte(param, param)
Greater than and less than equal to
```
mq.gtLte(2, 4)
// { '$gt': 2, '$lte': 4}
```

### gteLte(param, param)
Greater than equal to and less than equal to
```
mq.gteLte(2, 4)
// { '$gte': 2, '$lte': 4}
```

### exists()
```
mq.exists()
// { '$exists': true}
```

### notExists()
```
mq.notExists()
// { '$exists': false}
```

### eq(param)
Equal to
```
mq.eq(7)
// { '$eq': 7}
```

### ne(param)
Not equal to
```
mq.ne(7)
// { '$ne': 7}
```

### in([params] | param, param)
```
mq.in([1, 2, 3])
// { '$in': [1, 2, 3]}

mq.in(1, 2, 3)
// { '$in': [1, 2, 3]}
```

### nin([params] | param, param)
Not in
```
mq.nin([1, 2, 3])
// { '$nin': [1, 2, 3]}

mq.nin(1, 2, 3)
// { '$nin': [1, 2, 3]}
```

### mod(param, param)
[Modulo](https://docs.mongodb.com/manual/reference/operator/query/mod/#op._S_mod)
```
mq.mod(4, 0)
// { '$mod': [4, 0]}
```

### merge(param, param)
Merges all the object parameters into one. Shorter name `mrg`
```
mq.mrg(mq.exists(), mq.ne(2), mq.gteLte(1, 10))
// { '$exists': true, '$ne': 2, '$gte': 1, '$lte': 10}
```

## License

MIT © Talha Awan

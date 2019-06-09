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
```

## APIs

### lt(param)
```
mq.lt(2)
// { $lt: 2}
```

### lte(param)
```
mq.lte(2)
// { $lte: 2}
```

### gt(param)
```
mq.gt(2)
// { $gt: 2}
```

### gte(param)
```
mq.gte(2)
// { $gte: 2}
```


### gtLt(param, param)
```
mq.gtLt(2, 4)
// { $gt: 2, $lt: 4}
```

### gteLt(param, param)
```
mq.gteLt(2, 4)
// { $gte: 2, $lt: 4}
```

### gtLte(param, param)
```
mq.gtLte(2, 4)
// { $gt: 2, $lte: 4}
```

### gteLte(param, param)
```
mq.gteLte(2, 4)
// { $gte: 2, $lte: 4}
```


### exists()
```
mq.exists()
// { $exists: true}
```


### notExists()
```
mq.notExists()
// { $exists: false}
```

### eq(param)
```
mq.eq(7)
// { $eq: 7}
```

### ne(param)
```
mq.ne(7)
// { $ne: 7}
```

### in([params] | param, param)
```
mq.in([1, 2, 3])
// { $in: [1, 2, 3]}

mq.in(1, 2, 3)
// { $in: [1, 2, 3]}
```

### nin([params] | param, param)
```
mq.nin([1, 2, 3])
// { $nin: [1, 2, 3]}

mq.nin(1, 2, 3)
// { $nin: [1, 2, 3]}
```


### mod(param, param)
```
mq.mod(4, 0)
// { $mode: [4, 0]}
```


### merge(param, param)
```
mq.merge(mq.exists(), mq.ne(2), mq.gteLte(1, 10))
// { $exists: true, $ne: 2, $gte: 1, $lte: 10}
```

## License

MIT © Talha Awan

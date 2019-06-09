import test from 'ava';
import m from '.';

test('lt', t => {
	const d = new Date();
	t.deepEqual(m.lt(2), {
		$lt: 2
	});
	t.deepEqual(m.lt(d), {
		$lt: d
	});
	t.deepEqual(m.lt('d'), {
		$lt: 'd'
	});
});

test('`lt` throw TypeError for invalid argument', t => {
	const error = t.throws(() => {
		m.lt();
	}, TypeError);
	const error2 = t.throws(() => {
		m.lt(null);
	}, TypeError);
	const errMsg = '`lt` requires a number, date or string argument';
	t.is(error.message, errMsg);
	t.is(error2.message, errMsg);
});

test('lte', t => {
	const d = new Date();
	t.deepEqual(m.lte(2), {
		$lte: 2
	});
	t.deepEqual(m.lte(d), {
		$lte: d
	});
	t.deepEqual(m.lte('d'), {
		$lte: 'd'
	});
});

test('`lte` throw TypeError for invalid argument', t => {
	const error = t.throws(() => {
		m.lte();
	}, TypeError);
	const error1 = t.throws(() => {
		m.lte(null);
	}, TypeError);
	const errMsg = '`lte` requires a number, date or string argument';
	t.is(error.message, errMsg);
	t.is(error1.message, errMsg);
});

test('gt', t => {
	const d = new Date();
	t.deepEqual(m.gt(2), {
		$gt: 2
	});
	t.deepEqual(m.gt(d), {
		$gt: d
	});
	t.deepEqual(m.gt('d'), {
		$gt: 'd'
	});
});

test('`gt` throw TypeError for invalid argument', t => {
	const error = t.throws(() => {
		m.gt();
	}, TypeError);
	const error1 = t.throws(() => {
		m.gt(null);
	}, TypeError);
	const errMsg = '`gt` requires a number, date or string argument';
	t.is(error.message, errMsg);
	t.is(error1.message, errMsg);
});

test('gte', t => {
	const d = new Date();
	t.deepEqual(m.gte(2), {
		$gte: 2
	});
	t.deepEqual(m.gte(d), {
		$gte: d
	});
	t.deepEqual(m.gte('d'), {
		$gte: 'd'
	});
});

test('`gte` throw TypeError for invalid argument', t => {
	const error = t.throws(() => {
		m.gte();
	}, TypeError);
	const error1 = t.throws(() => {
		m.gte(null);
	}, TypeError);
	const errMsg = '`gte` requires a number, date or string argument';
	t.is(error.message, errMsg);
	t.is(error1.message, errMsg);
});

test('gtLt', t => {
	const d = new Date();
	const d2 = new Date();
	t.deepEqual(m.gtLt(2, 4), {
		$gt: 2,
		$lt: 4
	});
	t.deepEqual(m.gtLt(d, d2), {
		$gt: d,
		$lt: d2
	});
	t.deepEqual(m.gtLt('d', 'f'), {
		$gt: 'd',
		$lt: 'f'
	});
});

test('`gtLt` throw TypeError for invalid argument(s)', t => {
	const error = t.throws(() => {
		m.gtLt();
	}, TypeError);
	const error1 = t.throws(() => {
		m.gtLt(1);
	}, TypeError);
	const error2 = t.throws(() => {
		m.gtLt(null);
	}, TypeError);
	const error3 = t.throws(() => {
		m.gtLt(1, null);
	}, TypeError);
	const errMsg = '`gtLt` requires two number, string or date arguments';
	t.is(error.message, errMsg);
	t.is(error1.message, errMsg);
	t.is(error2.message, errMsg);
	t.is(error3.message, errMsg);
});

test('gteLt', t => {
	const d = new Date();
	const d2 = new Date();
	t.deepEqual(m.gteLt(2, 4), {
		$gte: 2,
		$lt: 4
	});
	t.deepEqual(m.gteLt(d, d2), {
		$gte: d,
		$lt: d2
	});
	t.deepEqual(m.gteLt('d', 'f'), {
		$gte: 'd',
		$lt: 'f'
	});
});

test('`gteLt` throw TypeError for invalid argument(s)', t => {
	const error = t.throws(() => {
		m.gteLt();
	}, TypeError);
	const error1 = t.throws(() => {
		m.gteLt(1);
	}, TypeError);
	const error2 = t.throws(() => {
		m.gteLt(null);
	}, TypeError);
	const error3 = t.throws(() => {
		m.gteLt(1, null);
	}, TypeError);
	const errMsg = '`gteLt` requires two number, string or date arguments';
	t.is(error.message, errMsg);
	t.is(error1.message, errMsg);
	t.is(error2.message, errMsg);
	t.is(error3.message, errMsg);
});

test('gtLte', t => {
	const d = new Date();
	const d2 = new Date();
	t.deepEqual(m.gtLte(2, 4), {
		$gt: 2,
		$lte: 4
	});
	t.deepEqual(m.gtLte(d, d2), {
		$gt: d,
		$lte: d2
	});
	t.deepEqual(m.gtLte('d', 'f'), {
		$gt: 'd',
		$lte: 'f'
	});
});

test('`gtLte` throw TypeError for invalid argument(s)', t => {
	const error = t.throws(() => {
		m.gtLte();
	}, TypeError);
	const error1 = t.throws(() => {
		m.gtLte(1);
	}, TypeError);
	const error2 = t.throws(() => {
		m.gtLte(null);
	}, TypeError);
	const error3 = t.throws(() => {
		m.gtLte(1, null);
	}, TypeError);
	const errMsg = '`gtLte` requires two number, string or date arguments';
	t.is(error.message, errMsg);
	t.is(error1.message, errMsg);
	t.is(error2.message, errMsg);
	t.is(error3.message, errMsg);
});

test('gteLte', t => {
	const d = new Date();
	const d2 = new Date();
	t.deepEqual(m.gteLte(2, 4), {
		$gte: 2,
		$lte: 4
	});
	t.deepEqual(m.gteLte(d, d2), {
		$gte: d,
		$lte: d2
	});
	t.deepEqual(m.gteLte('d', 'f'), {
		$gte: 'd',
		$lte: 'f'
	});
});

test('`gteLte` throw TypeError for invalid argument(s)', t => {
	const error = t.throws(() => {
		m.gteLte();
	}, TypeError);
	const error1 = t.throws(() => {
		m.gteLte(1);
	}, TypeError);
	const error2 = t.throws(() => {
		m.gteLte(null);
	}, TypeError);
	const error3 = t.throws(() => {
		m.gteLte(1, null);
	}, TypeError);
	const errMsg = '`gteLte` requires two number, string or date arguments';
	t.is(error.message, errMsg);
	t.is(error1.message, errMsg);
	t.is(error2.message, errMsg);
	t.is(error3.message, errMsg);
});

test('exists', t => {
	t.deepEqual(m.exists(), {
		$exists: true
	});
});

test('notExists', t => {
	t.deepEqual(m.notExists(), {
		$exists: false
	});
});

test('eq', t => {
	t.deepEqual(m.eq('a'), {
		$eq: 'a'
	});
});

test('`eq` throw TypeError for no argument', t => {
	const error = t.throws(() => {
		m.eq();
	}, TypeError);
	t.is(error.message, '`eq` requires a argument');
});

test('ne', t => {
	t.deepEqual(m.ne('a'), {
		$ne: 'a'
	});
});

test('`ne` throw TypeError for no argument', t => {
	const error = t.throws(() => {
		m.ne();
	}, TypeError);
	t.is(error.message, '`ne` requires a argument');
});

test('in', t => {
	t.deepEqual(m.in('a'), {
		$in: ['a']
	});
	t.deepEqual(m.in('a', 'b'), {
		$in: ['a', 'b']
	});
	t.deepEqual(m.in(['a', 'b']), {
		$in: ['a', 'b']
	});
});

test('`in` throw TypeError for no argument', t => {
	const error = t.throws(() => {
		m.in();
	}, TypeError);
	t.is(error.message, '`in` requires an array of values, or one or more arguments of values');
});

test('nin', t => {
	t.deepEqual(m.nin('a'), {
		$nin: ['a']
	});
	t.deepEqual(m.nin('a', 'b'), {
		$nin: ['a', 'b']
	});
	t.deepEqual(m.nin(['a', 'b']), {
		$nin: ['a', 'b']
	});
});

test('`nin` throw TypeError for no argument', t => {
	const error = t.throws(() => {
		m.nin();
	}, TypeError);
	t.is(error.message, '`nin` requires an array of values, or one or more arguments of values');
});

test('mod', t => {
	t.deepEqual(m.mod(4, 0), {
		$mod: [4, 0]
	});
	t.deepEqual(m.mod([4, 0]), {
		$mod: [4, 0]
	});
	t.deepEqual(m.mod([4.4, 1.45]), {
		$mod: [4.4, 1.45]
	});
});

test('`mod` throw TypeError for no argument', t => {
	const error = t.throws(() => {
		m.mod();
	}, TypeError);
	t.is(error.message, '`mod` requires an array of 2 numbers, or two arguments of numbers');
});

test('`mod` throw TypeError for wrong number of arguments', t => {
	const error = t.throws(() => {
		m.mod(1, 2, 3);
	}, TypeError);
	const error1 = t.throws(() => {
		m.mod(1);
	}, TypeError);
	const error2 = t.throws(() => {
		m.mod([1, 2, 3]);
	}, TypeError);
	const error3 = t.throws(() => {
		m.mod([1]);
	}, TypeError);
	const errMsg = '`mod` requires an array of 2 numbers, or two arguments of numbers';
	t.is(error.message, errMsg);
	t.is(error1.message, errMsg);
	t.is(error2.message, errMsg);
	t.is(error3.message, errMsg);
});

test('`mod` throw TypeError for wrong type of argument(s)', t => {
	const error = t.throws(() => {
		m.mod('a', 'b');
	}, TypeError);
	const error1 = t.throws(() => {
		m.mod(4, 'b');
	}, TypeError);
	const error2 = t.throws(() => {
		m.mod('a', 2);
	}, TypeError);
	const error3 = t.throws(() => {
		m.mod(['a', 'b']);
	}, TypeError);
	const error4 = t.throws(() => {
		m.mod([4, 'b']);
	}, TypeError);
	const error5 = t.throws(() => {
		m.mod(['a', 2]);
	}, TypeError);
	const errMsg = '`mod` requires an array of 2 numbers, or two arguments of numbers';
	t.is(error.message, errMsg);
	t.is(error1.message, errMsg);
	t.is(error2.message, errMsg);
	t.is(error3.message, errMsg);
	t.is(error4.message, errMsg);
	t.is(error5.message, errMsg);
});

test('merge', t => {
	t.deepEqual(m.merge(m.exists(), m.ne(7), m.gtLt(4, 10)), {
		$exists: true,
		$gt: 4,
		$lt: 10,
		$ne: 7
	});
});

test('`merge` throw TypeError for wrong type of argument(s)', t => {
	const error = t.throws(() => {
		m.merge(m.exists(), 2);
	}, TypeError);
	const error1 = t.throws(() => {
		m.merge(null, m.ne(7));
	}, TypeError);
	const errMsg = '`merge` requires all arguments to be of object type';
	t.is(error.message, errMsg);
	t.is(error1.message, errMsg);
});

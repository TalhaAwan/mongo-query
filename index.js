const isInvalidComparisonArg = function (val) {
	if (!val || !(typeof val === 'number' || typeof val === 'string' || val instanceof Date)) {
		return true;
	}

	return false;
};

const lt = function (val) {
	if (isInvalidComparisonArg(val)) {
		throw new TypeError('`lt` requires a number, date or string argument');
	}

	return {
		$lt: val
	};
};

const lte = function (val) {
	if (isInvalidComparisonArg(val)) {
		throw new TypeError('`lte` requires a number, date or string argument');
	}

	return {
		$lte: val
	};
};

const gt = function (val) {
	if (isInvalidComparisonArg(val)) {
		throw new TypeError('`gt` requires a number, date or string argument');
	}

	return {
		$gt: val
	};
};

const gte = function (val) {
	if (isInvalidComparisonArg(val)) {
		throw new TypeError('`gte` requires a number, date or string argument');
	}

	return {
		$gte: val
	};
};

const gtLt = function (val, val2) {
	if (isInvalidComparisonArg(val) || isInvalidComparisonArg(val2)) {
		throw new TypeError('`gtLt` requires two number, string or date arguments');
	}

	return {
		$gt: val,
		$lt: val2
	};
};

const gteLt = function (val, val2) {
	if (isInvalidComparisonArg(val) || isInvalidComparisonArg(val2)) {
		throw new TypeError('`gteLt` requires two number, string or date arguments');
	}

	return {
		$gte: val,
		$lt: val2
	};
};

const gtLte = function (val, val2) {
	if (isInvalidComparisonArg(val) || isInvalidComparisonArg(val2)) {
		throw new TypeError('`gtLte` requires two number, string or date arguments');
	}

	return {
		$gt: val,
		$lte: val2
	};
};

const gteLte = function (val, val2) {
	if (isInvalidComparisonArg(val) || isInvalidComparisonArg(val2)) {
		throw new TypeError('`gteLte` requires two number, string or date arguments');
	}

	return {
		$gte: val,
		$lte: val2
	};
};

const exists = function () {
	return {
		$exists: true
	};
};

const notExists = function () {
	return {
		$exists: false
	};
};

const eq = function (val) {
	if (!val) {
		throw new TypeError('`eq` requires a argument');
	}

	return {
		$eq: val
	};
};

const ne = function (val) {
	if (!val) {
		throw new TypeError('`ne` requires a argument');
	}

	return {
		$ne: val
	};
};

const $in = function (...val) {
	if (!Array.isArray(val[0]) && val.length === 0) {
		throw new TypeError('`in` requires an array of values, or one or more arguments of values');
	}

	const array = Array.isArray(val[0]) ? val[0] : val;

	return {
		$in: array
	};
};

const nin = function (...val) {
	if (!Array.isArray(val[0]) && val.length === 0) {
		throw new TypeError('`nin` requires an array of values, or one or more arguments of values');
	}

	const array = Array.isArray(val[0]) ? val[0] : val;

	return {
		$nin: array
	};
};

const mod = function (...val) {
	if ((!Array.isArray(val[0]) || val[0].length < 2 || val[0].length > 2) && (val.length === 0 || val.length < 2 || val.length > 2)) {
		throw new TypeError('`mod` requires an array of 2 numbers, or two arguments of numbers');
	}

	const array = Array.isArray(val[0]) ? val[0] : val;
	for (const v of array) {
		if (typeof v !== 'number') {
			throw new TypeError('`mod` requires an array of 2 numbers, or two arguments of numbers');
		}
	}

	return {
		$mod: array
	};
};

const merge = function (...objects) {
	let merged = {};
	for (const obj of objects) {
		if (typeof obj !== 'object' || obj === null) {
			throw new TypeError('`merge` requires all arguments to be of object type');
		}

		merged = {
			...merged,
			...obj
		};
	}

	return merged;
};

module.exports = {
	lt,
	lte,
	gt,
	gte,
	gtLt,
	gteLt,
	gtLte,
	gteLte,
	exists,
	notExists,
	eq,
	ne,
	in: $in,
	nin,
	mod,
	merge,
	mrg: merge
};

const foo = {
    bar: true,
};

// Can’t spread won’t spread
const bar = {
    ...foo,
    baz: false,
};

console.log(bar);

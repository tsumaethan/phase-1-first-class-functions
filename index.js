
function receivesAFunction(callback) {
    callback(); // Calls the provided callback function
}

function returnsANamedFunction() {
    return function namedFunction() {
        return 'I am a named function';
    };
}

function returnsAnAnonymousFunction() {
    return function() {
        return 'I am an anonymous function';
    };
}

module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
};



function fun(name) {
    console.log(`Hello, ${name}!`);
}

function processUserInput(c) {
    const name = "Alice";
    console.log(name);
    c(name)
}

processUserInput(fun);

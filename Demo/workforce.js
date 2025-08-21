onmessage = (dt) => {
    let s = 0;
    for (let i = 1; i <=dt.data ; i++) {
        s += i;
    }
postMessage(s);
}

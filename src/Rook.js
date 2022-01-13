export const RookArray = (res) => {
    let a = [];
    let x = parseInt(res / 8);
    for (let i = 8 * x; i < 8 * (x + 1); i++) {
        a.push(i);
    }
    let y = res % 8;
    for (let j = 1; j <= 8; j++) {
        a.push(y)
        y += 8;
    }
    return a;
}
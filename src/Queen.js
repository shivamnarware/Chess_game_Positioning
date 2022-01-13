export const QueenArray = (res) => {
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
    res = parseInt(res);
    a.push(res);
    x = parseInt(res / 8);
    y = parseInt(res % 8);

    while (x > 0 && y > 0) {
        x--;
        y--;
        a.push(x * 8 + y);
    }
    x = parseInt(res / 8);
    y = parseInt(res % 8);

    while (x < 7 && y < 7) {
        x++;
        y++;
        a.push(x * 8 + y);
    }

    x = parseInt(res / 8);
    y = parseInt(res % 8);
    while (x > 0 && y < 7) {
        x--;
        y++;
        a.push(x * 8 + y);
    }
    x = parseInt(res / 8);
    y = parseInt(res % 8);

    while (x < 7 && y > 0) {
        x++;
        y--;
        a.push(x * 8 + y);
    }
    return a
}
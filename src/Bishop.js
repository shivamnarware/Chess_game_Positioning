export const BishopArray = (res) => {
    const arr = [];
    res = parseInt(res);
    arr.push(res);
    let x = parseInt(res / 8);
    let y = parseInt(res % 8);

    while (x > 0 && y > 0) {
        x--;
        y--;
        arr.push(x * 8 + y);
    }
    x = parseInt(res / 8);
    y = parseInt(res % 8);

    while (x < 7 && y < 7) {
        x++;
        y++;
        arr.push(x * 8 + y);
    }

    x = parseInt(res / 8);
    y = parseInt(res % 8);
    while (x > 0 && y < 7) {
        x--;
        y++;
        arr.push(x * 8 + y);
    }
    x = parseInt(res / 8);
    y = parseInt(res % 8);

    while (x < 7 && y > 0) {
        x++;
        y--;
        arr.push(x * 8 + y);
    }
    return arr;
}
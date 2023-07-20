export function order (e) {

    var x = e.sort(function (a,b) {
        if (a.email > b.email) {
            return 1;
        }
        if (a.email < b.email) {
            return -1;
        }
        return 0;
    })
    return x

} 
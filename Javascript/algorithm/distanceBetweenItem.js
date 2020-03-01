
let list = ['cat', 'dog', 'bird', 'fish', 'cat', 'duck', 'chicken', 'dog'];

function distanceBetweenItem(arr, a, b) {
    let fa = undefined;
    let fb = undefined;

    for (let i = 0; i < arr.length; i++) {
        if (a === arr[i]) {
            if (fa === undefined) {
                fa = i;
            } else {
                if (fb === undefined) {
                    fa = i;
                } else {
                    if (Math.abs(fb - i) < Math.abs(fb - fa)) {
                        fa = i;
                    }
                }
            }
        }

        if (b === arr[i]) {
            if (fb === undefined) {
                fb = i;;
            } else {
                if (fa === undefined) {
                    fb = i;
                } else {
                    if (Math.abs(i - fa) < Math.abs(fb - fa)) {
                        fb = i;
                    }
                }
            }
            
        }
    }

    return Number.isNaN(fb - fa) ? -1 : Math.abs(fb - fa);
}

distanceBetweenItem(list, 'dog', 'cat'); // 1
distanceBetweenItem(list, 'dog', 'chicken'); // 1
distanceBetweenItem(list, 'dog', 'duck'); // 4
distanceBetweenItem(list, 'dog', 'dog'); // 0
distanceBetweenItem(list, 'dog', 'dog2'); // -1

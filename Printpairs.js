function printpairs(arr, sum)
    {
        let s = new Set();
        for (let i = 0; i < arr.length; ++i)
        {
            let temp = sum - arr[i];
            if (s.has(temp)) {
                console.log(
                    "sum "
                    + sum + " is (" + arr[i]
                    + ", " + temp + ")");
            }
            s.add(arr[i]);
        }
    }
        let A = [ 1, 4, 45, 6, 10, 8 ];
        let n = 16;
        printpairs(A, n);
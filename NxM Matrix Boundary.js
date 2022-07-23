function Boundary(a, m, n)
{
  let result = []
	for (var i = 0; i < m; i++) {
    let b1 = []
		for (var j = 0; j < n; j++) {
			if (i == 0)
				console.log(a[i][j] + '');
			else if (i == m - 1)
				console.log(a[i][j] + '');
			else if (j == 0)
				console.log(a[i][j] + '');
			else if (j == n - 1)
				console.log(a[i][j] + '');
			else
				console.log("");
		}
		console.log("");
	}
  // a.slice(0,4);
  // return a;
}

var a = [ [ 1, 2, 3, 4 ],
			[ 5, 6, 7, 8 ],
			[ 1, 2, 3, 4 ],
			[ 5, 6, 7, 8 ]];
console.log(Boundary(a,4,4))
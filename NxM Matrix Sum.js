
function BouSum(a, m, n)
{
	let sum = 0;
	for(let i = 0; i < m; i++)
	{
		for(let j = 0; j < n; j++)
		{
			if (i == 0)
				sum += a[i][j];
			else if (i == m - 1)
				sum += a[i][j];
			else if (j == 0)
				sum += a[i][j];
			else if (j == n - 1)
				sum += a[i][j];
		}
	}
	return sum;
}

let a = [ [ 1, 2, 3, 4 ],
		[ 5, 6, 7, 8 ],
		[ 1, 2, 3, 4 ],
		[ 5, 6, 7, 8 ] ];
let sum = BouSum(a, 2, 2);
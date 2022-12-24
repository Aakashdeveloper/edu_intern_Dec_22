> map is use to iterate over the Array
> it always return same length of output array as input array
> it is use for applying the logics (add,sub,mul, print in html)

var a = [4,7,6,34,23,41,14,56,12,23,67,49];

a.map((data)=>{return data*2})
[8, 14, 12, 68, 46, 82, 28, 112, 24, 46, 134, 98]

var a = [4,7,6,34]
a.map((data)=>{return `<p>${data}</p>`})
['<p>4</p>', '<p>7</p>', '<p>6</p>', '<p>34</p>']

> Filter is use to filter out the value
> it may or may not return the same length of output as input array
> Filter only return thosedata for which output or condition is true

var a = [4,7,6,34,23,41,14,56,12,23,67,49];
a.filter((data) => {return data>30})
[34, 41, 56, 67, 49]

a.map((data) => {return data>30})
[false, false, false, true, false, true, false, true, false, false, true, true]
localStorage
> Presistent Storage
> It save the data wrt to browser
> we have to manully remove it

localStorage.setItem('token','mytoken767hgj')
undefined
localStorage.getItem('token')
'mytoken767hgj'
localStorage.removeItem('token')
undefined
localStorage.getItem('token')


sessionStorage
> Temp Storage
> Save wrt to tab
> Remove as soon as we close the tab
sessionStorage.setItem('city','Delhi')
undefined
sessionStorage.getItem('city')
'Delhi'
sessionStorage.removeItem('city')
undefined
sessionStorage.getItem('city')
null

cookie
> Save wrt to website
> Expires in time

document.cookie
'_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.702523774.1671289630; _gat_gtag_UA_131256843_1=1'
document.cookie="city=delhi; expires=Mon 19 Dec 2022 12:00:00 UTC"
'city=delhi; expires=Mon 19 Dec 2022 12:00:00 UTC'
document.cookie
'_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.702523774.1671289630; city=delhi'
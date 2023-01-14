# Page 1

> List of city
* http://localhost:6543/location
> List of restaurant
* http://localhost:6543/restaurants
> Rest wrt to city
* http://localhost:6543/restaurants?stateId=1
> List of Meal Type
* http://localhost:6543/mealtype


# Page 2

> Restaurants wrt to mealType
* http://localhost:6543/restaurants?mealId=4
> Restaurants wrt to mealType & Cuisine
* http://localhost:6543/filters/1?cuisineId=5
> Restaurants wrt to mealType & Cost
* http://localhost:6543/filters/1?hcost=600&lcost=300
> Sort on basis of price
* http://localhost:6543/filters/1?sort=1
# Page3
> Details of Restaurant
* http://localhost:6543/details/6
> Menu wrt to restaurant
* http://localhost:6543/menu/6


# Page 4
> Menu Details
(POST) http://localhost:6543/menuItem
{
	"id":[8,12,34,9]
}
> Place Order
* (POST) http://localhost:6543/placeOrder
{
	"orderId" : 4,
	"name" : "Nikiat",
	"email" : "nikki@gmail.com",
	"address" : "Hom 65",
	"phone" : 8934645457,
	"cost" : 391,
	"menuItem" : [
		89,34,23
	]
}
# Page 5
> List order
* http://localhost:6543/orders
> Order wrt to Email
* http://localhost:6543/orders?email=ankit@gmail.com
> Update payment details
* (PUT) http://localhost:6543/updateOrder/4
{
	"status":"Not Delivered",
	"bank_name":"SBI",
	"date":"14/01/2023"
}
> Delete orders
* (Delete) http://localhost:6543/deleteOrder/4
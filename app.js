(function(){
	var gems = [
		{ 
			name: 'Dodecahedron', 
			price: 2.95, 
			description: '...',
			canPurchase: true,
			images: [
				{
					full: 'dodecahedron-01-full.jpg',
					thumb: 'dodecahedron-01-thumb.jpg'
				},
				{
					full: 'dodecahedron-02-full.png',
					thumb: 'dodecahedron-02-thumb.png'
				}
			],
			reviews: [
				{
					stars: 5,
					body: "I love this product!",
					author: "joe@thomas.com"
				},
				{
					stars: 1,
					body: "This product sucks",
					author: "tim@hater.com"
				}
			]
		},
		{ 
			name: 'Pentagonal Gem', 
			price: 5.95, 
			description: '...',
			canPurchase: true, 
			images: [
				{
					full: 'dodecahedron-03-full.png',
					thumb: 'dodecahedron-03-thumb.png'
				},
				{
					full: 'dodecahedron-04-full.png',
					thumb: 'dodecahedron-04-thumb.png'
				}
			],
			reviews: [
				{
					stars: 3,
					body: "Not bad",
					author: "may@ray.com"
				},
				{
					stars: 1,
					body: "Really???",
					author: "what@thehell.com"
				}
			]
		}
	];
	
	var app = angular.module('store', [ ]);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		};
	});
	
	app.directive('productTitle', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-title.html'
		};
	});

	app.directive('productPanels', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-panels.html',
			controller: function() {
				this.tab = 1;

				this.selectTab = function(secTab){
					this.tab = secTab;
				};
				this.isSelected = function(checkTab){
					return this.tab === checkTab;
				}
			},
			controllerAs: 'panels'
		};
	});
})();
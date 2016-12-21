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
			]
		}
	];
	
	var app = angular.module('store', [ ]);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(secTab){
			this.tab = secTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		}
	});

	
})();
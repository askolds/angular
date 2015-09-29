(function(){
	var app = angular.module('store', ['store-products']);

	app.controller('StoreController', ['$http', function($http){
		var store = this;
		store.products = [];
		$http.get('./products.json').success(function(data){
			store.products  = data;
		});
	}]);

	


	app.controller('PanelController', function(){});	
//	app.controller('Somecontroller', ['$http', '$log', function($http, $log) {}]);


	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product) {
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};

	});



	//alert(JSON.stringify(gems));

})();

/*
	var gems = [
	{
		name: 'Dodecahedron',
		price: 2,
		description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
		canPurchase: true,
		shine: 9,
		soldOut: true,
		images: [
			{
				full: 'http://www.moregems.com/media//loose-gemstones.jpg',
				thumb: 'http://icons.iconarchive.com/icons/aha-soft/jewelry/128/Gem-icon.png',
			},
			{
				full: 'http://opengameart.org/sites/default/files/gems_preview.png',
				thumb: 'http://icons.iconarchive.com/icons/aha-soft/jewelry/128/Topaz-icon.png',
			}			
		],
		reviews: [
			{
				stars: 5,
				body: "I love this product!",
				author: "joe@thomas.com",
				createdOn: 1397490980837
			},
			{
				stars: 1,
				body: "This product sucks",
				author: "tim@hater.com",
				createdOn: 1397490980837
			}			
		],
	},
	{
		name: 'Pentagonal Gem',
		price: 5.95,
		shine: 8,
		description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
		canPurchase: false,		
		reviews: [
			{
				stars: 4,
				body: "I almost love this product!",
				author: "joe@thomas.com"
			},
			{
				stars: 2,
				body: "This  product almost sucks",
				author: "tim@hater.com"
			}			
		],				
	}

	];

*/	
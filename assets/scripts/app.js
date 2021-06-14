new Vue({
	el: '#app',
	data: {
		api: 'https://api.referrals.magnobiet.com/',
		icons: {
			'Art & Design': 'brush',
			'Auto & Vehicles': 'directions_car',
			'Beauty': 'mood',
			'Books': 'menu_book',
			'Books & Reference': 'library_books',
			'Business': 'work',
			'Comics': 'library_books',
			'Communication': 'alternate_email',
			'Design': 'design_services',
			'Education': 'books',
			'Entertainment': 'confirmation_number',
			'Events': 'theater_comedy',
			'Finance': 'attach_money',
			'Food & Drink': 'fastfood',
			'Games': 'videogame_asset',
			'Health & Fitness': 'fitness_center',
			'House & Home': 'home',
			'Lifestyle': 'nightlife',
			'Maps & Navigation': 'commute',
			'Medical': 'medical_services',
			'Music & Audio': 'music_note',
			'News & Magazines': 'article',
			'Others': 'whatshot',
			'Parenting': 'family_restroom',
			'Personal development': 'person',
			'Personalization': 'dashboard_customize',
			'Photography': 'photo_camera',
			'Productivity': 'thumb_up_alt',
			'Shopping': 'shopping_cart',
			'Social': 'share',
			'Sports': 'sports_soccer',
			'Tools': 'get_app',
			'Travel & Local': 'beach_access',
			'Video Players & Editors': 'play_arrow',
			'Weather': 'thermostat',
		},
		referrals: null,
		loading: false
	},
	methods: {
		getDatum() {

			this.loading = true;

			fetch(this.api)
				.then((response) => response.json())
				.then((response) => {

					this.referrals = response;
					this.loading = false;

				}, () => {
					this.loading = true;
				});

		}
	},
	created() {
		this.getDatum();
	}
});

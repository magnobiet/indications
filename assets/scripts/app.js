new Vue({
	el: '#app',
	data: {
		api: 'https://api.referrals.magnobiet.com/',
		icons: {
			'Books': 'library_books',
			'Communication': 'alternate_email',
			'Education': 'books',
			'Finances': 'attach_money',
			'Food & Drink': 'fastfood',
			'Games': 'videogame_asset',
			'Maps & Navigation': 'commute',
			'Others': 'whatshot',
			'Personal development': 'person',
			'Productivity': 'thumb_up_alt',
			'Tools': 'get_app',
			'Travel & Local': 'beach_access',
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

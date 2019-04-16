document.addEventListener('DOMContentLoaded', () => {

	new Vue({
		el: '#app',
		data: {
			year: new Date().getFullYear(),
			categories: []
		},
		created() {

			fetch('https://my-json-server.typicode.com/magnobiet/indications/categories?_embed=indications').then((response) => response.json()).then((response) => {

				this.categories = response.map((category) => {

					category.indications.sort((a, b) => {

						if (a.title > b.title) {
							return 1;
						}

						if (a.title < b.title) {
							return -1;
						}

						return 0;

					});

					return category;

				});

			});

		}
	});

}, false);

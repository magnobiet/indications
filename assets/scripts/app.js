document.addEventListener('DOMContentLoaded', () => {

	new Vue({
		el: '#app',
		data: {
			year: new Date().getFullYear(),
			categories: []
		},
		created() {

			fetch('https://my-json-server.typicode.com/magnobiet/indications/categories?_embed=indications').then((response) => response.json()).then((response) => {
				this.categories = response;
			});

		}
	});

}, false);

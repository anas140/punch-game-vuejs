new Vue({
	el: "#app",
	data: {
		health: 100,
		ended: false
	},
	methods: {
		punch: function() {
			this.health -= 10
			if(this.health <= 0) {
				this.ended = true;
				return false;
			}
		},
		reset: function() {
			this.health = 100;
			this.ended = false; 
		}
	}, 
	computed: {
			
	}
})
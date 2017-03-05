Vue.use(VueFire);


var db = firebase.database()
var ref = db.ref('ratings');

window.addEventListener('load', function () {
   var vm = new Vue({
	  el: ".ratings",
	  data: {
	  	difficulty: "",
	    helpfulness: "",
	    rating: ""
	  },
	  firebase: {
	    ratings: ref
	  }, 
	  methods: {
	    setRatings: function () {
	    	if (this.difficulty.trim() && this.helpfulness.trim() && this.rating.trim()) {
	    		ref.set({
	    			"difficulty": this.difficulty,
	    			"helpfulness": this.helpfulness,
	    			"rating": this.rating
	    		});
	    		this.difficulty: "";
	    		this.helpfulness: "";
	    		this.rating: "";
	    	}
	    }
	  }
	});
})
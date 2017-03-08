Vue.use(VueFire);


var db = firebase.database()
var ref = db.ref('ratings');

window.addEventListener('load', function () {
   var vm = new Vue({
	  el: ".ratings",
	  data: {
	    helpfulness: "",
	    rating: ""
	  },
	  firebase: {
	    ratings: ref
	  }, 
	  methods: {
	    setRatings: function () {
    		ref.set({
    			"helpfulness": this.helpfulness,
    			"rating": this.rating
    		})
    		this.helpfulness= ""
    		this.rating= ""
	    }
	  }
	});
})
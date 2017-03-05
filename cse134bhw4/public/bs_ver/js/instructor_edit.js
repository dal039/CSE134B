Vue.use(VueFire);


var db = firebase.database()
var ref = db.ref('info');

window.addEventListener('load', function () {
   var vm = new Vue({
	  el: ".site-wrapper",
	  data: {
	  	photo: "",
	    email: "",
	    hours: "",
	    description: ""
	  },
	  firebase: {
	    info: ref
	  }, 
	  methods: {
	    setInfo: function () {
	    	if (this.photo.trim() && this.email.trim() && this.hours.trim() && this.description.trim()) {
	    		ref.set({
	    			"photo": this.photo,
	    			"email": this.email,
	    			"hours": this.hours,
	    			"description": this.description
	    		});
	    		this.photo: "";
	    		this.email: "";
	    		this.hours: "";
	    		this.description: "";
	    	}
	    }
	  }
	});
})

Vue.use(VueFire);


var db = firebase.database()
var ref = db.ref('class_edit');

window.addEventListener('load', function () {
   var vm = new Vue({
	  el: ".content-block",
	  data: {
	  	location: "",
	    description: "",
	    offered: "",
	  },
	  firebase: {
	    class_edit: ref
	  }, 
	  methods: {
	    setInfo: function () {
	    	if (this.photo.trim() && this.email.trim() && this.hours.trim() && this.description.trim()) {
	    		ref.set({
	    			"location": this.location,
	    			"description": this.description,
	    			"offered": this.offered
	    		});
	    		this.location: "";
	    		this.description: "";
	    		this.offered: "";
	    	}
	    }
	  }
	});
})

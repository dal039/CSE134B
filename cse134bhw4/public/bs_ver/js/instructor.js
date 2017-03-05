Vue.use(VueFire);


var db = firebase.database()
var ref = db.ref('info');

window.addEventListener('load', function () {
   var vm = new Vue({
	  el: "#app",
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
	    	if (this.name.trim() && this.theme.trim() && this.url.trim()) {
	    		ref.push({
	    			"photo": this.photo,
	    			"email": this.email,
	    			"hours": this.hours,
	    			"description": this.description
	    		})
	    		this.photo: "",
	    		this.email: "",
	    		this.hours: "",
	    		this.description: ""
	    	}
	    }
	  }
	});
})

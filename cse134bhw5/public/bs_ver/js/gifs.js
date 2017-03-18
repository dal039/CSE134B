
// Initialize database
var db = app.database();

// Initialize storage space
var storage = app.storage();

var database = sessionStorage.getItem('classname');

var gifsRef = db.ref('/Classes/' + database + '/Gifs');


Vue.use(VueFire);


window.addEventListener('load', function() {
	
	var vm = new Vue({
		el: '.wall-content',
		data: {
			gif_url:""
		},
  		firebase: {
		  gifs: gifsRef
		}, 
		methods: {
			addGif: function () {
				gifsRef.push({
					"gif_url": this.gif_url
				})
			},
			onFileChange(e) {
      			var files = e.target.files || e.dataTransfer.files;
      				if (!files.length){
        				return;
      				}
      				this.createImage(files[0]);
    		},
    		createImage(file) {
      			var gif_url = new Image();
      			var reader = new FileReader();
      			var vm = this;

      			reader.onload = (e) => {
        			vm.gif_url = e.target.result;
      			};
      			reader.readAsDataURL(file);
      		},
      		removeGif: function(key) {
				gifsRef.child(key).remove();
			}
		}
	})

});

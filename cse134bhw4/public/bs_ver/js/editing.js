
// Initialize database
var db = app.database();

// Initialize storage space
var storage = app.storage();

var database = "CSE 123 - CheckMyClass";

var TA = "TA";
var Prof = "Professor";
var Class = "Class";

var taeditRef = db.ref('/' + database + '/' + TA + '/edits');
var profeditRef = db.ref('/' + database + '/' + Prof + '/edits');
var classeditRef = db.ref('/' + database + '/' + Class + '/edits');

var filename;
var filepath;
var fileURL;

// function UUID() {
//     function s(n) { return h((Math.random() * (1<<(n<<2)))^Date.now()).slice(-n); }
//     function h(n) { return (n|0).toString(16); }
//     return  [
//         s(4) + s(4), s(4),
//         '4' + s(3),                    // UUID version 4
//         h(8|(Math.random()*4)) + s(3), // {8|9|A|B}xxx
//         // s(4) + s(4) + s(4),
//         Date.now().toString(16).slice(-10) + s(2) // Use timestamp to avoid collisions
//     ].join('-');
// }


/*
function imageUpload () {
	filename = UUID();
	filepath = '/images/' + filename;
	var storageRef = storage.ref(filepath);
	var file = $('#img-upload').prop('files')[0];
	storageRef.put(file);
	fileURL = storageRef.child(filepath).getDownloadURL();
	console.log("i am running");
	console.log(fileURL);
};
	*/
/*
function imageUpload () {
	$(document).on('submit', '#upload-data', function (e) {
		e.preventDefault();
		filename = UUID();
		filepath = '/images/' + filename;
		var storageRef = storage.ref(filepath);
		var file = $('#img-upload').prop('files')[0];
		storageRef.put(file);
		fileURL = storageRef.child(filepath).getDownloadURL();
	});
};
*/

Vue.use(VueFire);

//$(document).ready( function(){

window.addEventListener('load', function() {
	//var x = document.getElementById("upload-data");

	/*
	console.log(document.getElementById("img-upload"));
	console.log($('#img-upload').val());
	$(document).on('change', '#img-upload', function() {
		filename = $(this).val();
		console.log(filename);
	});*/
	/*
	if (x) {
		console.log("foobar");
		$(x).submit(function(e) {
			e.preventDefault();

			console.log($('#img-upload').val());
			if ($('#img-upload').val()){
				filename = $('#img-upload').val();
			}
		});
	}*/

	// $(document).on('submit', '#upload-data', function (e) {
	// 	e.preventDefault();
	// 	filename = UUID();
	// 	filepath = '/images/' + filename;
	// 	var storageRef = storage.ref(filepath);
	// 	var file = $('#img-upload').prop('files')[0];
	// 	storageRef.put(file);
	// 	fileURL = storageRef.getDownloadURL();
	// 	console.log(fileURL);
	// 	console.log("foobar");
	// });

	//console.log(filename);

	// Create reference to storage
	//var storageRef = storage.ref();

	// profRef points to images/professors/. prof images go here.
	//var profRef = storageRef.child('images/professors/' + filename);
	
	if ($('#ta-edit-form-1').length){
	var ta_edit_vm = new Vue({
		el: '#ta-edit-form-1',
		data: {
			ta_image:"",
			ta_email: "",
			ta_hours: "",
			ta_description: ""
		},
  		firebase: {
		  ta_edits: taeditRef
		}, 
		methods: {
			editTA: function () {
				taeditRef.update({
					"TA_Image": this.ta_image,
					"TA_Email": this.ta_email,
					"TA_Hours": this.ta_hours,
					"TA_Description": this.ta_description
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
      			var ta_image = new Image();
      			var reader = new FileReader();
      			var vm = this;

      			reader.onload = (e) => {
        			vm.ta_image = e.target.result;
      			};
      			reader.readAsDataURL(file);
      		}
		}
	})
  };

	if ($('#ta-edit-form-2').length){
	var ta_edit_vm = new Vue({
		el: '#ta-edit-form-2',
		data: {
			ta_image:"",
			ta_email: "",
			ta_hours: "",
			ta_description: ""
		},
  		firebase: {
		  ta_edits: taeditRef
		}, 
		methods: {
			editTA: function () {
				taeditRef.update({
					"TA_Image": this.ta_image,
					"TA_Email": this.ta_email,
					"TA_Hours": this.ta_hours,
					"TA_Description": this.ta_description
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
      			var ta_image = new Image();
      			var reader = new FileReader();
      			var vm = this;

      			reader.onload = (e) => {
        			vm.ta_image = e.target.result;
      			};
      			reader.readAsDataURL(file);
      		}


		}
	})
  };

	if ($('#prof-edit-form-1').length){
	var prof_edit_vm = new Vue({
		el: '#prof-edit-form-1',
		data: {
			prof_image:"",
			prof_email: "",
			prof_hours: "",
			prof_description: ""
		},
  		firebase: {
		  prof_edits: profeditRef
		}, 
		methods: {
			editProf: function (event) {
				profeditRef.update({
					"Prof_Image": this.prof_image,
					"Prof_Email": this.prof_email,
					"Prof_Hours": this.prof_hours,
					"Prof_Description": this.prof_description
				});
			},
			onFileChange(e) {
      			var files = e.target.files || e.dataTransfer.files;
      				if (!files.length){
        				return;
      				}
      				this.createImage(files[0]);
    		},
    		createImage(file) {
      			var prof_image = new Image();
      			var reader = new FileReader();
      			var vm = this;

      			reader.onload = (e) => {
        			vm.prof_image = e.target.result;
      			};
      			reader.readAsDataURL(file);
      		}
		}
	})
	};

	if ($('#prof-edit-form-2').length){
	var prof_edit_vm = new Vue({
		el: '#prof-edit-form-2',
		data: {
			prof_image:"",
			prof_email: "",
			prof_hours: "",
			prof_description: ""
		},
  		firebase: {
		  prof_edits: profeditRef
		}, 
		methods: {
			onFileChange(e) {
      			var files = e.target.files || e.dataTransfer.files;
      				if (!files.length){
        				return;
      				}
      				this.createImage(files[0]);
    		},
    		createImage(file) {
      			var prof_image = new Image();
      			var reader = new FileReader();
      			var vm = this;

      			reader.onload = (e) => {
        			vm.prof_image = e.target.result;
      			};
      			reader.readAsDataURL(file);
      		},
			editProf: function (event) {
				profeditRef.update({
					"Prof_Image": this.prof_image,
					"Prof_Email": this.prof_email,
					"Prof_Hours": this.prof_hours,
					"Prof_Description": this.prof_description
				})
			}
			
		}
	})
  };

	if ($('#class-edit-form').length){
	var class_edit_vm = new Vue({
		el: '#class-edit-form',
		data: {
			location: "",
			description: "",
			offering: "No"
		},
  		firebase: {
		  class_edits: classeditRef
		}, 
		methods: {
			editClass: function () {
				classeditRef.update({
					"Class_Location": this.location,
					"Class_Description": this.description,
					"Class_Offering": this.offering
				})
			}
		}
	})
	};

});

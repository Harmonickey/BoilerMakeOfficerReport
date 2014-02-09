

function get_cam(top, bottom, left, right) {
   var url = "https://api.tomtom.com/trafficcams/boxquery";
   var data = {
	 top: "40.317232",
	 bottom: "39.123123",
	 left: "-86.037083",
	 right: "-85.037083",
	 format: "json",
	 key: "fmma8ptu3fgv2cu66uzs3v2a"
   };
   
   $.get(url, data, function(data) {
		var id = data.cameras[0].cameraId;
		//var cameras = new Array();
		//var cameras_ids = new Array();
		data.cameras.forEach(function(camera) {
			//cameras.push(camera.cameraName);
			//cameras_ids.push(camera.cameraId);
			$('#camera_names')
			  .append($('<option>', { value : camera.cameraId })
			  .text(camera.cameraName));	
		});
		
   }, 'json');
}

function get_request() {
	var url = "https://api.tomtom.com/lbs/geocoding/geocode?L=Kalamazoo&AA=Michigan&format=json&key=x4gqmhmn2wr2pgnauxnzb3zd";

	$.get(url, function(response) {
		
	}, 'xml');
}

function view_cam()
{
	var id = $('#camera_names').find(":selected").val();
	
	var src = "https://api.tomtom.com/trafficcams/gethalfcam/" + id + ".jpg?key=fmma8ptu3fgv2cu66uzs3v2a";
	
	$('#camera').attr('src', src);
}





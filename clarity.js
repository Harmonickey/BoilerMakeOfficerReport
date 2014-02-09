

function get_cam(top, bottom, left, right) {
   var url = "https://api.tomtom.com/trafficcams/boxquery";
   var data = {
	 top: top,
	 bottom: bottom,
	 left: left,
	 right: right,
	 format: "json",
	 key: "fmma8ptu3fgv2cu66uzs3v2a"
   };
   
   $.get(url, data, function(response) {
	   if (response.cameras[0])
	   {
		var id = response.cameras[0].cameraId;
		//var cameras = new Array();
		//var cameras_ids = new Array();
		response.cameras.forEach(function(camera) {
			//cameras.push(camera.cameraName);
			//cameras_ids.push(camera.cameraId);
			$('#camera_names')
			  .append($('<option>', { value : camera.cameraId })
			  .text(camera.cameraName));	
		});
	   }
   }, 'jsonp');
}

function get_request() {
	var url = "https://api.tomtom.com/lbs/geocoding/geocode";
	var data = {
		L: $('#city').val(),
		AA: $('#state').val(),
		format: 'jsonp',
		key: 'x4gqmhmn2wr2pgnauxnzb3zd'
	};
	
	$.get(url, data, function(response) {
		var lat = response.geoResponse.geoResult[0].latitude;
		var long = response.geoResponse.geoResult[0].longitude;
		console.log(lat);
		console.log(long);
		get_cam(lat + 1, lat - 1, long - 1, long + 1);
	}, 'jsonp');
}

function view_cam()
{
	var id = $('#camera_names').find(":selected").val();
	
	var src = "https://api.tomtom.com/trafficcams/gethalfcam/" + id + ".jpg?key=fmma8ptu3fgv2cu66uzs3v2a";
	
	$('#camera').attr('src', src);
}





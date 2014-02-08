// JavaScript Document

function get_request()
{
	// NOTE NOTE:  CAN LIST THE CAMERA NAMES FOR THEM TO CHOOSE FROM!!!!!
	
	/*
	https://api.tomtom.com/lbs/geocoding/geocode?L=Kalamazoo&AA=Michigan&format=json&key=x4gqmhmn2wr2pgnauxnzb3zd
	https://api.tomtom.com/trafficcams/boxquery?top=40.317232&bottom=39.123123&left=-86.037083&right=-85.037083&format=json&key=fmma8ptu3fgv2cu66uzs3v2a
	*/
	
	//first connect to the geoconnect
   var url = "https://api.tomtom.com/lbs/geocoding/geocode";
   
   var data = {
	   L: $('#city').val(),
	   AA: $('#state').val(),
	   format: "json",
	   key: "x4gqmhmn2wr2pgnauxnzb3zd"
   };
   
   $.get(url, data, function(response) {
	    //var result = data.geoResponse.geoResult[0];
		//var lat_top = parseInt(result.latitude) + 1;
		//var lat_bot = parseInt(result.latitude) - 1;
		//var long_left = parseInt(result.longitute) - 1;
		//var long_right = parseInt(result.longitute) + 1;
		
		//console.log(lat_top);
		
		//get_cam(lat_top, lat_bot, long_left, long_right);
		
   }, 'jsonp');
}

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
		
   }, 'jsonp');
}

function view_cam()
{
	var id = $('#camera_names').find(":selected").val();
	
	var src = "https://api.tomtom.com/trafficcams/gethalfcam/" + id + ".jpg?key=fmma8ptu3fgv2cu66uzs3v2a";
	
	$('#camera').attr('src', src);
}
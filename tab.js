

$(document).ready(function () {

    $('#table_id').DataTable({
    	lengthMenu:[5,10,15,20,25],
    	language: {
    		url: "DataTables/media/french.json"
    	}
    });

});

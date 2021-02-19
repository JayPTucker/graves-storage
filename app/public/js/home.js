$.get("/api/all", function(data) {
    console.log("getting data")
    if (data.length !== 0) {

        for (var i = 0; i < data.length; i++) {

            var row = $(`<div class="row unit justify-content-center text-center">`);

            row.append(`

                <div class="col-md-4">${data[i].unit_number}</div>
                <div class="col-md-4">${data[i].unit_price}</div>
            
            `)

            $("#storage-data").prepend(row);

            // ===================================================

            if (data[i].unit_status == true){
                console.log(data[i].unit_number + " is OPEN (true)")
                row.append(`<div class="col-md-4"><button class="btn btn-open">OPEN</button></div>`)

                // $("#storage-data").prepend(test)
            } else {
                row.append(`<div class="col-md-4"><button class="btn btn-closed">CLOSED</button></div>`)

                // $("#storage-data").prepend(test)
            }
        }
    }
})
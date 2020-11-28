$(document).ready(function () {
    $("#search").click(function () {

        $.ajax({
            url: "http://localhost:8080/OnlineBusReservation/filter/search",
            type: "GET",
            data: {
                origin_cities: $("#origin_cities").val(),
                dest_cities: $("#dest_cities").val(),
                date: $("#date").val()
            },
            success: function (obj) {
                let thead = $("#table table thead");
                let tbody = $("#table table tbody");
                let message = obj.message;
                let data_count = obj.dataCount;
                let data = obj.data;

                $("#message").removeClass("hidden").addClass("visible").append(
                    `<hr>
                        <h6>${message}</h6>
                    <hr>`
                );

                if (!data_count === 0) {
                    thead.append(
                        `<tr>
                            <th colspan="2">Line: ${data[0].origin} - ${data[0].destination}</th>
                            <th>Date: ${data[0].travelDate}</th>
                        </tr>
                        <tr>
                            <th>Select</th>
                            <th>Time</th>
                            <th>Travel ID</th>
                        </tr>`
                    )

                    for (let i = 0; i < data_count; i++) {
                        let row = obj.data[i];
                        tbody.append(
                            `<tr>
                                <td><button class="button" value="${data[i].id}"><strong>Select</strong></button></td>
                                <td>${data[i].travelTime}</td>
                                <td>${data[i].id}</td>
                            </tr>`
                        )
                    }
                }
            },
            error: function () {
                console.log("error searching!");
            }
        })
    })

    $(".button").click(function () {

        let travel_ID = $(this).val();

        $("search_form").addClass("hidden");
        $("buy_form").removeClass("hidden").addClass("visible");
        $("#buy_table input").attr("value",travel_ID);

    })

    $("#buy_button").click(function () {
        /*$.ajax({
            url: "http://localhost:8080/OnlineBusReservation/filter/buy",
            type: "GET",
            data: {
                travel_ID: $("#travel_code").val(),
                passenger_name: $("#passenger").val(),
                gender: $(".radio_button input").sele.val()
            },
            success: function (obj) {
                let thead = $("#table table thead");
                let tbody = $("#table table tbody");
                let message = obj.message;
                let data_count = obj.dataCount;
                let data = obj.data;

                $("#message").removeClass("hidden").addClass("visible").append(
                    `<hr>
                        <h6>${message}</h6>
                    <hr>`
                );

                if (!data_count === 0) {
                    thead.append(
                        `<tr>
                            <th colspan="2">Line: ${data[0].origin} - ${data[0].destination}</th>
                            <th>Date: ${data[0].travelDate}</th>
                        </tr>
                        <tr>
                            <th>Select</th>
                            <th>Time</th>
                            <th>Travel ID</th>
                        </tr>`
                    )

                    for (let i = 0; i < data_count; i++) {
                        let row = obj.data[i];
                        tbody.append(
                            `<tr>
                                <td><button class="button" value="${data[i].id}"><strong>Select</strong></button></td>
                                <td>${data[i].travelTime}</td>
                                <td>${data[i].id}</td>
                            </tr>`
                        )
                    }
                }
            },
            error: function () {
                console.log("error searching!");
            }
        })*/
    })
})
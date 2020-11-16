var flag_1 = false;
let count_1 = 0;

var flag_2 = false;
let count_2 = 0;

let counter = 1;

$(document).ready(function () {
    $("#submit_1").click(function () {
        flag_1 = !flag_1;

        if (flag_1) {
            $.ajax({
                url: "https://reqres.in/api/users",
                type: "GET",
                data: {
                    page: 1
                },
                success: function (obj) {
                    let table = $("#table table tbody");
                    count_1 = obj.per_page;

                    for (let i = 0; i < count_1; i++, counter++) {
                        let row = obj.data[i];
                        table.append(
                            `<tr>
                        <td>${counter}</td>
                        <td>${row.id}</td>
                        <td>${row.email}</td>
                        <td>${row.first_name}</td>
                        <td>${row.last_name}</td>
                        <td><img src="${row.avatar}"></td>
                    </tr>`
                        )
                    }
                },
                error: function () {
                    console.log("error page 1!");
                }
            })
        } else {
            $("#table table tbody tr").slice(counter - count_1 - 1, counter - 1).remove();
            counter = counter - count_1;
        }
    })

    $("#submit_2").click(function () {
        flag_2 = !flag_2;

        if (flag_2) {
            $.ajax({
                url: "https://reqres.in/api/users",
                type: "GET",
                data: {
                    page: 2
                },
                success: function (obj) {
                    let table = $("#table table tbody");
                    count_2 = obj.per_page;

                    for (let i = 0; i < count_2; i++, counter++) {
                        let row = obj.data[i];
                        table.append(
                            `<tr>
                        <td scope="row">${counter}</td>
                        <td>${row.id}</td>
                        <td>${row.email}</td>
                        <td>${row.first_name}</td>
                        <td>${row.last_name}</td>
                        <td><img src="${row.avatar}"></td>
                    </tr>`
                        )
                    }
                },
                error: function () {
                    console.log("error page 2!");
                }
            })
        } else {
            $("#table table tbody tr").slice(counter - count_2 - 1, counter - 1).remove();
            counter = counter - count_2;
        }
    })
})
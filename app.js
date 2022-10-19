// Load the data list from the text file and populate the table
$.get("data.txt", function(text) {
    var data = text.split("\n");
    $.each(data, function (index, name) {
        var tbody = $("#dataTable > tbody");
        var tr = $("<tr>");
        tr.append($("<td>", {'text': index + 1}));
        tr.append($("<td>", {'text': name}));
        tbody.append(tr);
    });
});

// Load a single string from a text file and display
$.get("ip.txt", function(data) {
    var ipDiv = $("#ipAddress");
    ipDiv.text(data);
});
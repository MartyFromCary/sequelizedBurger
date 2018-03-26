$(() => {
  $(".devour").on("click", function(event) {
    event.preventDefault();
    const id = $("#burger_id").data("burger_id");
    const DevouredById = $(this).data("id");

    $.ajax("/", {
      type: "PUT",
      data: { DevouredById, id }
    }).then(() => location.reload());
  });

  $("#new_burger").on("click", function(event) {
    event.preventDefault();
    const name = $("input.new_burger")
      .val()
      .trim();
    const id = $(this).data("cust_id");

    if (name === "") return;

    $.ajax("/new_burger", {
      type: "POST",
      data: { name, id }
    }).then(() => location.reload());
  });

  $("#new_customer").on("click", function(event) {
    event.preventDefault();
    const name = $("input.new_customer")
      .val()
      .trim();
    if (name === "") return;

    $.ajax("/new_cust", {
      type: "POST",
      data: { name }
    }).then(() => location.reload());
  });
});

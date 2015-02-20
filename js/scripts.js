var Pizza = {
  getSize: function() {
    return "Your pizza is " + this.size + " inches in diameter!";
  }
};

$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("input#size").val();
    var newPizza = Object.create(Pizza);
    newPizza.size = inputtedSize;

    $("div#results").text(newPizza.getSize());

  });
});

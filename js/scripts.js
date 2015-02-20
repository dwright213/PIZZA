var Pizza = {
  getDetails: function() {
    return "Your " + this.type + " pizza is " + this.size +
    " inches in diameter, and we are going to slice it into "
    + this.sliceNumber() + " pieces.";
  },

  sliceSize: function() {
    switch(this.type) {

      case "pepperoni":
        return 5;
        break;

      case "cheese":
        return 3;
        break;
    }
  },

  sliceNumber: function() {
    return Math.round(((this.size*3.14)/this.sliceSize()));
  }
};

$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();

    var inputtedPizzaType = $('input[name="pizza-type"]:checked').val();
    var inputtedSize = $("input#size").val();
    var newPizza = Object.create(Pizza);

    newPizza.size = inputtedSize;
    newPizza.type = inputtedPizzaType;

    $("#results").text(newPizza.getDetails());

  });

});

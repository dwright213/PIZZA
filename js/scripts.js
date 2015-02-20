var Pizza = {
  getSize: function() {
    return "Your " + this.type + " pizza is " + this.size +
    " inches in diameter, and we are going to slice it into "
    + this.sliceNumber() + " pieces.";
  },

  sliceNumber: function() {
    return Math.round(((this.size*3.14)/this.sliceSize));
  }

};



$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();

    inputtedPizzaType = $('input[name="pizza-type"]:checked').val();

    var inputtedSize = $("input#size").val();
    var newPizza = Object.create(Pizza);
    newPizza.size = inputtedSize;
    newPizza.type = inputtedPizzaType;

    switch(newPizza.type) {
      case "pepperoni":
        newPizza.sliceSize = 5;
        break;

      case "cheese":
        newPizza.sliceSize = 3;
        break;
    }

    $("div#results").append(newPizza.getSize());

  });

});

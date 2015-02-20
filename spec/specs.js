describe("Pizza", function() {
  describe("sliceSize()", function() {
    it("Returns the width of the slices that the user's pizza will be cut into", function() {
      var testPizza = Object.create(Pizza);
      testPizza.type = "cheese";
      expect(testPizza.sliceSize()).to.equal(3);
    });
  });
  describe("sliceNumber()", function() {
    it("Returns the approximate number of slices the user can expect their pizza to be cut into", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 12;
      testPizza.type = "cheese";
      expect(testPizza.sliceNumber()).to.equal(13);
    });
  });
  describe("getDetails()", function() {
    it("Confirms to the user their pizza's size, toppings, and number of slices", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 12;
      testPizza.type = "cheese";
      expect(testPizza.getDetails()).to.equal("Your cheese pizza is 12 inches in diameter, and we are going to slice it into 13 pieces.");
    });
  });
});

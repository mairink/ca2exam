describe("My Converter", function() {
    it("should convert imperial weight to metric", function() {
        expect(Converter.convertFromPoundsToKIlo(2.2)).toBe(1);
    })
    it("should be able to deal with strings", function(){
        expect(function() {Converter.convertFromPoundsToKIlo("hello")}).toThrow(new Error("Not a number"))
    })
	it(“add numbers”, function() {
	expect(Converter.addTwoNumbers(3,2)).toBe(5);
	})
	it(“subtract two numbers”, function() {
	expect(Converter.subTwoNumbers(3,2)).toBe(1);
	})
	 it(“multiply two numbers”, function() {
	expect(Converter.multiplyTwoNumbers(3,2)).toBe(6);
	})
	it(“divide two numbers”, function() {
	expect(Converter.divideTwoNumbers(6,2)).toBe(3);
	})
})
describe("App", function() {

  it("should call Template", function() {    
    expect(Template.hello.greeting()).toEqual('Welcome to app.')
  });

});
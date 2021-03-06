var makeSuite = require('./helpers').makeSuite;

makeSuite('Test Suite 2', function() {

  it('should verify back button', function(done) {
    driver
      .elementByAccessibilityId('Graphics')
      .click()
      .elementByAccessibilityId('Arcs')
        .should.eventually.exist
      .back()
      .elementByAccessibilityId('App')
        .should.eventually.exist.nodeify(done);;
  });

});

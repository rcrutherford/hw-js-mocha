var expect = chai.expect;

describe("homework JS Mocha", function() {

    let sandbox; //added

    beforeEach(function() {
        // create a sandbox
        sandbox = sinon.sandbox.create();
    });

    afterEach(function() {
        // restore the environment as it was before
        sandbox.restore();
    });


    describe("#cntTo100 mock", function() {
        it("should log 100 times", function() {
            // configure
            var mocktest = sandbox.mock(window.console).expects("log").atLeast(100);
            mocktest();
            // run
            cntTo100();
        });
       
    });

    describe("#getResult", function() {
        it("should return fang bang if div by 3 and 5", function() {
            var checkIt = getResult(15);
            expect(checkIt).to.equal('fang bang');
        });
        it("should return fang if div by 3", function() {
            var checkIt = getResult(3);
            expect(checkIt).to.equal('fang');
        });
        it("should return bang if div by 5", function() {
            var checkIt = getResult(5);
            expect(checkIt).to.equal('bang');
        });
        it("should return itself if not div by 3 or 5", function() {
            var checkIt = getResult(7);
            expect(checkIt).to.equal(7);
        });
        it("should error if parameter not a number", function() {
            expect(function() {
                getResult('a');
            }).to.throw(Error);
        });
    });

    describe("#divBy", function() {
        it("should return true if div by 3", function() {
            var isDivBy = divby(3,3);
            expect(isDivBy).to.equal(true);
        });
        it("should return true if div by 5", function() {
            var isDivBy = divby(5,5);
            expect(isDivBy).to.equal(true);
        });
        it("should return false if not div by 3", function() {
            var isDivBy = divby(1,3);
            expect(isDivBy).to.equal(false);
        });
        it("should return false if not div by 5", function() {
            var isDivBy = divby(1,5);
            expect(isDivBy).to.equal(false);
        });
        it("should error if parameters not numbers", function() {
            expect(function() {
                divby("a",[1,2,3])
            }).to.throw(Error);
        });
    });

});
var request = require("request"),
    assert = require('assert');

describe("is data.json loaded?", function(){
    it("returns status code 200", function() {
        request.get('http://localhost:3030/api', function(error, response, body) {
            if(!error){
                assert.equal(200, response.statusCode);
                done();
            }            
        });
    });
});
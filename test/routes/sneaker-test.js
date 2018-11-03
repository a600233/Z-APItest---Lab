let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../bin/www');
let expect = chai.expect;
//let datastore = require('mongoose');
//datastore.connect('mongodb://a600233:cs748596123@ds225703.mlab.com:25703/sellingdb');
chai.use(chaiHttp);
chai.use(require('chai-things'));
let _ = require('lodash' );	

describe('Sneaker', function (){
  
    describe('GET /sneaker',  () => {
        it('should return all the sneaker in an array', function(done) {
            chai.request(server)
              .get('/sneaker')
             .end(function(err, res) {
    expect(res).to.have.status(200);
    expect(res.body).to.be.a('array');
    expect(res.body.length).to.equal(7);
    let result = _.map(res.body, (sneaker) => {
        return { brand: sneaker.brand,
            article_number: sneaker.article_number } 
        });
    expect(result).to.include( { brand: 'Converse', article_number: '162131C' } );
	expect(result).to.include( { brand: 'Nike', article_number: 'BQ2718-200' } );
    done();
});
        });
    });
	
});
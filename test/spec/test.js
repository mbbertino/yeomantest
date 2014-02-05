/* global describe, it */
// should look at the chai library
(function () {
    'use strict';

    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {

            it('should create a new instance', function () {
              var students = new Collection;

              expect(students.constructor.name).to.equal("Collection")
            });

            it('stores its first param in a prop called models', function() {
            	var toBeAdded = [{name: 'Bower', id: '1'},{name: 'Jack', id: '2'}];
            	var students = new Collection(toBeAdded)

            	expect(students.models).to.be.a('Array');
            	expect(students.models[1].name).to.equal('Jack');
           	});
           	// homework below
           	
           	// end of homework
        });
    });
})();


// 
students.find('1')
students.add({name: 'Jimmy', id: '3'})
students.remove('3')

// create a commit log to masons repo
//4 expects per test above
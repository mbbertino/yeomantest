/* global describe, it */
// should look at the chai library
(function () {
    'use strict';
    describe('A Collection instance', function () {
    	describe('has a .find() method', function() {		
            it('should return an object when given an id', function() {
            	var toBeAdded = [{name: 'Bower', id: '1'},{name: 'Jack', id: '2'}];
            	var students = new Collection(toBeAdded)

            	expect(students.find('1')).to.eql({name: 'Bower', id: '1'});
            });
            it('should not return if there is not a matching id', function(){
                var toBeAdded = [{name: 'Bower', id: '1'},{name: 'Jack', id: '2'}];
                var students = new Collection(toBeAdded)

                expect(students.find('100')).to.equal(undefined);
                
            });
            it('should find an object with name and id as properties', function(){
                var toBeAdded = [{name: 'Bower', id: '1'},{name: 'Jack', id: '2'}];
                var students = new Collection(toBeAdded)

                expect(students.find('1')).to.have.keys(['name', 'id']);
                
            });
            it('should not equal a student with different id', function(){
                var toBeAdded = [{name: 'Bower', id: '1'},{name: 'Jack', id: '2'}];
                var students = new Collection(toBeAdded)

                expect(students.find('1')).to.not.equal({name: 'Jack', id: '2'});
                
            });
        });
        describe('has an .add() method', function() {
            it("should add the object it's given to the models property", function(){
                var toBeAdded = [{name: 'Bower', id: '1'},{name: 'Jack', id: '2'}];
                var students = new Collection(toBeAdded);

                expect(students.add({name: 'Jimmy', id: '3'})).to.eql({name: 'Jimmy', id: '3'})
            });
            it("should increase the length of the models database by 1", function(){
                var toBeAdded = [{name: 'Bower', id: '1'},{name: 'Jack', id: '2'}];
                var students = new Collection(toBeAdded);
                students.add({name: 'Jimmy', id: '3'})

                expect(students.models.length).to.equal(3)
            });
            it("should throw an error when given an object without and id value", function(){
                var toBeAdded = [{name: 'Bower', id: '1'},{name: 'Jack', id: '2'}];
                var students = new Collection(toBeAdded);

                expect(function(){students.add({name: 'Jimmy', id: null})}).to.throw(Error);
            });
            it("should throw an error when given an object without and name value", function(){
                var toBeAdded = [{name: 'Bower', id: '1'},{name: 'Jack', id: '2'}];
                var students = new Collection(toBeAdded);

                expect(function(){students.add({name: null, id: '3'})}).to.throw(Error);
            });

        })
        describe('has an .remove() method', function() {
            it("should, when given an id, remove the corresponding object from the models property", function(){
                var toBeAdded = [{name: 'Bower', id: '1'},{name: 'Jack', id: '2'},{name: 'Jimmy', id: '3'}];
                var students = new Collection(toBeAdded);
                students.remove('2')

                expect(students.models).to.eql([{name: 'Bower', id: '1'},{name: 'Jimmy', id: '3'}])
            });
            it("should decrease the models property's length by 1", function(){
                var toBeAdded = [{name: 'Bower', id: '1'},{name: 'Jack', id: '2'},{name: 'Jimmy', id: '3'}];
                var students = new Collection(toBeAdded);
                students.remove('2')

                expect(students.models.length).to.equal(2)
            });
            it("should only accept a single string as an id argument", function(){
                var toBeAdded = [{name: 'Bower', id: '1'},{name: 'Jack', id: '2'},{name: 'Jimmy', id: '3'}];
                var students = new Collection(toBeAdded);

                expect(function(){students.remove(1)}).to.throw(Error);
                expect(function(){students.remove({})}).to.throw(Error);
                expect(function(){students.remove([])}).to.throw(Error);
            });

            it("should return true on successful removal", function(){
                var toBeAdded = [{name: 'Bower', id: '1'},{name: 'Jack', id: '2'},{name: 'Jimmy', id: '3'}];
                var students = new Collection(toBeAdded);

                expect(students.remove('2')).to.eql(true)
            });
        })

// this is the thursday night homework...

        describe('has an .empty() method', function() {
            it("should return an empty models array", function(){
                var toBeAdded = [{name: 'Bower', id: '1'},{name: 'Jack', id: '2'},{name: 'Jimmy', id: '3'}];
                var students = new Collection(toBeAdded);
                students.empty();

                expect(students.models).to.eql([])
                });
            it("should return successful empty upon completetion", function(){
                var toBeAdded = [{name: 'Bower', id: '1'},{name: 'Jack', id: '2'},{name: 'Jimmy', id: '3'}];
                var students = new Collection(toBeAdded);

                expect(students.empty()).to.eql('You have emptied the array, YAY!, Maybe?!?!?!')
                });
            });
        describe('has an .random() method', function() {

            it("should select an object literal within this.models", function(){
                var toBeAdded = [{name: 'Bower', id: '1'},{name: 'Jack', id: '2'},{name: 'Jimmy', id: '3'}];
                var students = new Collection(toBeAdded);

                expect(toBeAdded).to.include(students.random())
                });
            it("should return an object", function(){
                var toBeAdded = [{name: 'Bower', id: '1'},{name: 'Jack', id: '2'},{name: 'Jimmy', id: '3'}];
                var students = new Collection(toBeAdded);

                expect(students.random()).to.be.a('object')
                });
            });
        describe('has an .length() method', function() {
            it("should the length of the array", function(){
                var toBeAdded = [{name: 'Bower', id: '1'},{name: 'Jack', id: '2'},{name: 'Jimmy', id: '3'}];
                var students = new Collection(toBeAdded);

                expect(students.length()).to.eql(3)
                });
            it("should be a number", function(){
                var toBeAdded = [{name: 'Bower', id: '1'},{name: 'Jack', id: '2'},{name: 'Jimmy', id: '3'}];
                var students = new Collection(toBeAdded);

                expect(students.length()).to.be.a("number")
                });
            });
    });
})();


// 
// students.find('1')
// students.add({name: 'Jimmy', id: '3'})
// students.remove('3')

// create a commit log to masons repo
//4 expects per test above
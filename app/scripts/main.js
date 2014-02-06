function Collection (models) {
	this.models = models;

	this.find = function(id) {
		var student;	

		this.models.forEach(function(value, index){
			if(value.id == id) {
				student = value;
			}
		});

		if (student) {
			return student;
		};
	}

	this.add = function(newstudent) {
		var result;

		if (newstudent.id == null || newstudent.name == null) {
      throw new Error("Whoops!");
    }

		this.models.push(newstudent);
		result = newstudent;
		return result;
	}

	this.remove = function(id) {
		var result;
		var success;

// if(_.isString(id) == false) //this is another way of doing this

		if (typeof(id) != 'string') {
      throw new Error("Whoops!");
    }

		this.models.forEach(function(value, index){
			if(value.id == id) {
				result = value;
			}
		});

		var indx = this.models.indexOf(result);
		this.models.splice(indx, 1)
		success = true
		return success

// better way to do this
	// this.models = _.reject(this.models, function(model){
								// return model.id = id;
								// })
	}

	this.empty = function(){
		this.models = []

		var success = 'You have emptied the array, YAY!, Maybe?!?!?!'
		return success
	} 
	this.random = function(){
		var randomStudent = _.sample(this.models)
		return randomStudent
	}
}

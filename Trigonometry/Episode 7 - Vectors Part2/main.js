var vector = {
	_x: 1,
	_y: 0,

	create: function(x,y){
		var obj = Object.create(this);
		obj.setX(x);
		obj.setY(y);
		return obj;
	},

	setX: function(value){
		this._x = value;
	}, 

	getX: function(){
		return this._x;
	}, 

	setY: function(value){
		this._y = value;
	}, 

	getY: function(){
		return this._y;
	},

	setAngle: function(angle){
		var length = this.getLength();
		this._x = Math.cos(angle) * length;
		this._y = Math.sin(angle) * length;
	},

	getAngle: function(){
		// dumb version
		var hipotenuse = Math.sqrt( (this._x*this._x) + (this._y*this._y) );
		sin = Math.sin(this._y/hipotenuse);
		angle = Math.asin(sin);

		//smart version
		return Math.atan2(this._y, this._x);
	},

	setLength: function(length){
		var angle = this.getAngle();
		this._x = Math.cos(angle) * length;
		this._y = Math.sin(angle) * length;
	},

	getLength: function(){
		return Math.sqrt( (this._x*this._x) + (this._y*this._y) );
	},

	add: function(v2){
		return vector.create(this._x + v2.getX(), this._y + v2.getY());
	},

	subtract: function(v2){
		return vector.create(this._x - v2.getX(), this._y - v2.getY());
	},

	multiply: function(scalar){
		// dumb version
		length = this.getLength();
		new_vector = vector.create(this._x, this._y);
		new_vector.setLength(length*scalar);
		
		//smart version
		return vector.create(this._x * scalar, this._y * scalar);
	}, 

	divide: function(scalar){
		return vector.create(this._x / scalar, this._y / scalar);
	},

	addTo: function(v2){
		this._x += v2.getX();
		this._y += v2.getY();
	},

	subtractFrom: function(v2){
		this._x -= v2.getX();
		this._y -= v2.getY();
	},

	multiplyBy: function(scalar){
		this._x *= val;
		this._y *= val;
	},

	divideBy: function(scalar){
		this._x /= val;
		this._y /= val;
	}

};

var v1 = vector.create(10, 5);

v1.setAngle(Math.PI / 6); //equivalent to 30 degrees
v1.setLength(100);

// verifying that in a 30/60 degrees triangle,
// the opposite side is 1/2 of hipotenuse and
// the adjacent side is 0.866 of hipotenuse
console.log(v1.getX());
console.log(v1.getY());

// testing creation and sum
var v1 = vector.create(3, 5),
	v2 = vector.create(10, 2),
	v3 = v1.add(v2);

console.log(v3.getX(), v3.getY());

// testing multiplication
v3 = v1.multiply(2);
console.log(v3.getX(), v3.getY());

// this in-object sum
v1.addTo(v2);
console.log(v1.getX(), v1.getY());
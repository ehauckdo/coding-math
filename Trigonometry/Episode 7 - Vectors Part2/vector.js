var vector = {
	_x: 1,
	_y: 0,

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
		var hipotenuse = Math.sqrt( (_x*_x) + (_y*_y) )
		sin = Math.sin(_y/hipotenuse)
		angle = Math.asin(sin)

		//smart version
		return Math.atan2(this._y, this._x);
	},

	setLength: function(length){
		var angle = this.getAngle();
		this._x = Math.cos(angle) * length;
		this._y = Math.sin(angle) * length;
	},

	getLength: function(){
		return Math.sqrt( (_x*_x) + (_y*_y) );
	}

};
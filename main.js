function Teacher(name, surname, phone, classroom, subject) {

	this.name 			= name ;
	this.suurname 		= surname ;
	this.phone 			= phone ;
	this.classroom 		= classroom ;
	this.subject 		= subject ;

	this.fullName 		= function() {

		return `My name is ${name} ${surname}, and i teach ${subject} grade ${classroom}` ;

	}

}

paul 					= new Teacher( 'Paul', 'Mashatile', '0001112220', '12c', 'Maths' );

alert( paul.fullName() ) ;
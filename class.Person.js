class Person {
	firstName;
	lastName;
	age;
	birthday;
	address;
	friends = [];
	
	constructor( firstName, lastName ) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	
	getFullName() {
		return `${ this.firstName } ${ this.lastName }`;
	}
	
	isOld() {
		if( this.age > 20 ) {
			console.log('This person is old.');
		} else {
			console.log('This person is still young.');
		}
	}
	
	makeMeYoungAgain( age ) {
		if( age <= 20 ) {
			this.age = age;
			console.log('You are young again.');
		} else {
			console.log('ERROR');
		}
	}
	
	hasFriends() { if( this.friends.length === 0 ) { return false; } }
	
	isFriend( person ) { 
		return this.friends.include( person );
	}
	
	addFriend( person ) { 
		if( !this.isFriend( person ) ) {
			this.friends.push( person ); 
			person.addFriend( this );
		}
	}
	
	removeFriend( person ) { 
		if( this.isFriend( person ) ){
			this.person.splice( this.friends.indexOf( person ), 1 ); 
			person.removeFriend( this );
		} 
	}
	
	friendsList() {
		for( friendID in this.friends ) {
			console.log( this.friends[ friendID ] );
		}
	}
}

const me = new Person();
console.log(me);

me.firstName = 'Stevenson';
me.lastName = 'Pedrosa';
me.age = 23;
me.birthday = '08/16/1995';
me.address = 'Palo';


p1 = new Person;
me.addFriend( p1 );

/* 
REQUIREMENTS
Able to add friends
Able to check if has friends via 'hasFriends' method
Able to remove friends
Able to print friends list */
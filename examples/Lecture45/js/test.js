// var company = new Object();
// company.name = 'google';

// company.ceo = new Object();
// company.ceo.firstname = 'Sundar';
// company.ceo.lastname = 'Pichai';



// var stock = '$stock of company';
// company[stock] = 110;

// company['stock'] = 110;
// console.log(company);

//Literal Notation 
var company = {
	name: 'google', 
	ceo: {
		firstname: 'Sundar',
		lastname: 'Pichai',
	},
	'$stock of company': 110,
};

console.log(company);
'use strict';

let money = prompt ('Your budget per month?'), 
	time = prompt ('Type date in format YYYY-MM-DD'); 
	
let appData = {
				budget: money,
				timeData: time,
				expenses: {},
				optionalExpenses: {},
				income: [],
				savings: false
			};
			
let a1 = prompt('Type compulsory consumption in this month'),
	a2 = prompt('How it cost?'),
	a3 = prompt('Type compulsory consumption in this month'),
	a4 = prompt('How it cost?');
	
appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);




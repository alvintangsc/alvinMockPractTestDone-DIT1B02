/* 
	Section A
	Question 1
	Name: Alvin Tang
	Admin No: p1234567
	Class: DIT1B02
	
*/

let gifts = [
	{
		id: 0,
		name: 'John',
		relation: 'Brother',
		gift: 'jersey',
		greeting: 'Runnin Christmas'
	},
	{
		id: 1,
		name: 'Candice',
		relation: 'Sister',
		gift: 'portable fan',
		greeting: 'Breeze Christmas'
	},
	{
		id: 2,
		name: 'Fat Daddy',
		relation: 'Father',
		gift: 'T-Shirt',
		greeting: 'Fitting Christmas'
	},
	{
		id: 3,
		name: 'Love Mommy',
		relation: 'Mother',
		gift: 'grinder',
		greeting: 'Delicious Christmas'
	},
	{
		id: 4,
		name: 'Christina',
		relation: 'Aunt',
		gift: 'Sling Bags',
		greeting: 'Joyous Christmas'
	},

];

function myGifts() {

	return {

		// add a new item
		addItem(newName, newRelation, newGift, newGreeting) {
			let newID = gifts[gifts.length-1].id + 1;
			gifts.push({id: newID, name: newName, relation: newRelation, gift: newGift, greeting: newGreeting});
		},
		// delete item
		deleteItem(idToDelete){
			let toDelIndex = -1;

			for(let i = 0; i < gifts.length; i++){
				if(gifts[i].id == idToDelete){
					toDelIndex = i;
				}
			}
			// gifts.forEach(element, index => {
			// 	if(element.id == idToDelete){
			// 		toDelIndex = index;
			// 	}
			// });
			if (toDelIndex != -1){
				gifts.splice(toDelIndex,1);
			}
		},
		// get number of items
		getCount(){
			return gifts.length;
		},
		// greeting message. eg. Hi <name> has a <greeting>
		greeting(theIndex){
			console.log("Hi", gifts[theIndex].relation, "has a", gifts[theIndex].greeting);
		},
		// update greeting message
		updateGreetingMessage(theIndex, newGreeting){
			gifts[theIndex].greeting = newGreeting;
		}
	}
}

// Display all the greeting message.
// TODO: Code here
myGifts().updateGreetingMessage(3, "Cooking Christmas");
console.log("Number of gifts:", myGifts().getCount());
myGifts().deleteItem(1);
console.log("Number of gifts:", myGifts().getCount());
myGifts().addItem("Jimmy", "Stranger", "Iron Man", "Repulsor Blast");
console.log("Number of gifts:", myGifts().getCount());
for(let i = 0; i < gifts.length; i++){
	myGifts().greeting(i);
}



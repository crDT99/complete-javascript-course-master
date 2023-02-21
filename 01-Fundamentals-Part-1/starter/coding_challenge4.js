// tip calculator

//const bill = 275;    
const bill = 40;
//const bill = 430;

//type variblename = Condition ? Positive_Output : Negative_Output
const tip_Percentage = bill >= 50 && bill <= 300 ? 15 : 20;

const tip_value = bill * tip_Percentage / 100;

console.log(` The bill was ${bill}$, the tip was the ${tip_Percentage}%, which means ${tip_value}$ for a total of ${bill + tip_value}$`)



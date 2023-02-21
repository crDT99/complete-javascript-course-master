const day = "wednesday";

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Activity for monday')
        console.log('Activity for monday number 2')
        break;
    case 'tuesday': // day === 'tuesday'
        console.log('Activity for tuesday')
        break;
    case 'wednesday': // day === 'wednesday'
    case 'thursday': // day === 'thursday'
        console.log(' make crazy funny stuff .... like programming :D')
        break;
    case 'friday': // day === 'friday'
        console.log('go to party')
        break;
    case 'saturday': // day === 'saturday'
    case 'sunday': // day === 'sunday'
        console.log(' enyoy the weekend!! =D ')
        break;
    default:
        console.log('Not a valid day!!')
        break;
}


/*

// ********  if-else  equivalent ******** 

if (day === 'monday') {
    console.log('Activity for monday');
    console.log('Activity for monday number 2')
} else if (day === 'tuesday') {
    console.log('Activity for tuesday')
} else if (day === 'wednesday' || day === 'thursday') {
    console.log(' make crazy funny stuff .... like programming :D')
} else if (day === 'friday') {
    console.log('go to party')
} else if (day === 'saturday' || day === 'sunday') {
    console.log(' enyoy the weekend!! =D ')
} else {
    console.log('Not a valid day!!')
}
*/
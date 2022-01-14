//Exercise #1
//Part 1
var dayNumber = parseInt(prompt("Enter the day of the week in number format(Sunday = 0 - Saturday = 6)"));
var hourNumber = parseInt(prompt("Enter only the hour(24h format)"));

function businessHours(dayNumber, hourNumber){
    switch (dayNumber){
        case 0:
            if (hourNumber>=9 && hourNumber<=18){
                alert("Sunday at " + hourNumber +" hours. It's a business hour");
                console.log(true);
            } else if (hourNumber>0 && hourNumber<24){
                alert("Sunday at " + hourNumber + " hours. It's not a business hour");
                console.log(false);
            } else {
                alert("Incorrect value");
                console.log("Incorrect value");
            }
            break;
        case 1:
            if (hourNumber>=9 && hourNumber<=18){
                alert("Monday at " + hourNumber +" hours. It's a business hour");
                console.log(true);
            } else if (hourNumber>0 && hourNumber<24){
                alert("Monday at " + hourNumber + " hours. It's not a business hour");
                console.log(false);
            } else {
                alert("Incorrect value");
                console.log("Incorrect value");
            }
            break;
        case 2:
            if (hourNumber>=9 && hourNumber<=18){
                alert("Tuesday at " + hourNumber +" hours. It's a business hour");
                console.log(true);
            } else if (hourNumber>0 && hourNumber<24){
                alert("Tuesday at " + hourNumber + " hours. It's not a business hour");
                console.log(false);
            } else {
                alert("Incorrect value");
                console.log("Incorrect value");
            }
            break;
        case 3:
            if (hourNumber>=9 && hourNumber<=18){
                alert("Wednesday at " + hourNumber +" hours. It's a business hour");
                console.log(true);
            } else if (hourNumber>0 && hourNumber<24){
                alert("Wednesday at " + hourNumber + " hours. It's not a business hour");
                console.log(false);
            } else {
                alert("Incorrect value");
                console.log("Incorrect value");
            }
            break;
        case 4:
            if (hourNumber>=9 && hourNumber<=18){
                alert("Thursday at " + hourNumber +" hours. It's a business hour");
                console.log(true);
            } else if (hourNumber>0 && hourNumber<24){
                alert("Thursday at " + hourNumber + " hours. It's not a business hour");
                console.log(false);
            } else {
                alert("Incorrect value");
                console.log("Incorrect value");
            }
            break;
        case 5:
            if (hourNumber>=9 && hourNumber<=18){
                alert("Friday at " + hourNumber +" hours. It's a business hour");
                console.log(true);
            } else if (hourNumber>0 && hourNumber<24){
                alert("Friday at " + hourNumber + " hours. It's not a business hour");
                console.log(false);
            } else {
                alert("Incorrect value");
                console.log("Incorrect value");
            }
            break;
        case 6:
            if (hourNumber>=9 && hourNumber<=18){
                alert("Saturday at " + hourNumber +" hours. It's a business hour");
                console.log(true);
            } else if (hourNumber>0 && hourNumber<24){
                alert("Saturday at " + hourNumber + " hours. It's not a business hour");
                console.log(false);
            } else {
                alert("Incorrect value");
                console.log("Incorrect value");
            }
            break;
        default:
            alert("Incorrect value");
            console.log("Incorrect value");
            break;
    }
}

businessHours(dayNumber, hourNumber);

//Part 2
var janFirstDayNumber = parseInt(prompt("Enter a number between 0 - 6"));
var yearDayNumber = parseInt(prompt("Enter a day of the year (0 - 365)"));

function getDayNumber(janFirstDayNumber, yearDayNumber){
    dayWeek = yearDayNumber % 7;
    switch (janFirstDayNumber){
        case 0:
            switch (dayWeek){
                case 0:
                    alert("It's Saturday");
                    break;
                case 1:
                    alert("It's Sunday");
                    break;
                case 2:
                    alert("It's Monday");
                    break;
                case 3:
                    alert("It's Tuesday");
                    break;
                case 4:
                    alert("It's Wednesday");
                    break;
                case 5:
                    alert("It's Thursday");
                    break;
                case 6:
                    alert("It's Friday");
                    break;
                default:
                    alert("Incorrect value");
                    break;
            }
            break;
        case 1:
            switch (dayWeek){
                case 0:
                    alert("It's Sunday");
                    break;
                case 1:
                    alert("It's Monday");
                    break;
                case 2:
                    alert("It's Tuesday");
                    break;
                case 3:
                    alert("It's Wednesday");
                    break;
                case 4:
                    alert("It's Thursday");
                    break;
                case 5:
                    alert("It's Friday");
                    break;
                case 6:
                    alert("It's Saturday");
                    break;
                default:
                alert("Incorrect value");
                break;
            }
            break;
        case 2:
            switch (dayWeek){
                case 0:
                    alert("It's Monday");
                    break;
                case 1:
                    alert("It's Tuesday");
                    break;
                case 2:
                    alert("It's Wednesday");
                    break;
                case 3:
                    alert("It's Thursday");
                    break;
                case 4:
                    alert("It's Friday");
                    break;
                case 5:
                    alert("It's Saturday");
                    break;
                case 6:
                    alert("It's Sunday");
                    break;
                default:
                alert("Incorrect value");
                break;
            }
            break;
        case 3:
            switch (dayWeek){
                case 0:
                    alert("It's Tuesday");
                    break;
                case 1:
                    alert("It's Wednesday");
                    break;
                case 2:
                    alert("It's Thursday");
                    break;
                case 3:
                    alert("It's Friday");
                    break;
                case 4:
                    alert("It's Saturday");
                    break;
                case 5:
                    alert("It's Sunday");
                    break;
                case 6:
                    alert("It's Monday");
                    break;
                default:
                alert("Incorrect value");
                break;
            }
            break;
        case 4:
            switch (dayWeek){
                case 0:
                    alert("It's Wednesday");
                    break;
                case 1:
                    alert("It's Thursday");
                    break;
                case 2:
                    alert("It's Friday");
                    break;
                case 3:
                    alert("It's Saturday");
                    break;
                case 4:
                    alert("It's Sunday");
                    break;
                case 5:
                    alert("It's Monday");
                    break;
                case 6:
                    alert("It's Tuesday");
                    break;
                default:
                alert("Incorrect value");
                break;
            }
            break;
        case 5:
            switch (dayWeek){
                case 0:
                    alert("It's Thursday");
                    break;
                case 1:
                    alert("It's Friday");
                    break;
                case 2:
                    alert("It's Saturday");
                    break;
                case 3:
                    alert("It's Sunday");
                    break;
                case 4:
                    alert("It's Monday");
                    break;
                case 5:
                    alert("It's Tuesday");
                    break;
                case 6:
                    alert("It's Wednesday");
                    break;
                default:
                alert("Incorrect value");
                break;
            }
            break;
        case 6:
            switch (dayWeek){
                case 0:
                    alert("It's Friday");
                    break;
                case 1:
                    alert("It's Saturday");
                    break;
                case 2:
                    alert("It's Sunday");
                    break;
                case 3:
                    alert("It's Monday");
                    break;
                case 4:
                    alert("It's Tuesday");
                    break;
                case 5:
                    alert("It's Wednesday");
                    break;
                case 6:
                    alert("It's Thursday");
                    break;
                default:
                alert("Incorrect value");
                break;
            }
            break;
        default:
            alert("Incorrect value");
            break;
    }
}

getDayNumber(janFirstDayNumber, yearDayNumber);

//Part 3
function trueIfBusinessHours(yearDayNumber, hourNumber){
    dayWeek = yearDayNumber % 7;
    switch (dayWeek){
        case 0:
            if (hourNumber>=9 && hourNumber<=18){
                console.log(true);
            } else if (hourNumber>0 && hourNumber<24){
                console.log(false);
            } else {
                console.log("Incorrect value");
            }
            break;
        case 1:
            if (hourNumber>=9 && hourNumber<=18){
                console.log(true);
            } else if (hourNumber>0 && hourNumber<24){
                console.log(false);
            } else {
                console.log("Incorrect value");
            }
            break;
        case 2:
            if (hourNumber>=9 && hourNumber<=18){
                console.log(true);
            } else if (hourNumber>0 && hourNumber<24){
                console.log(false);
            } else {
                console.log("Incorrect value");
            }
            break;
        case 3:
            if (hourNumber>=9 && hourNumber<=18){
                console.log(true);
            } else if (hourNumber>0 && hourNumber<24){
                console.log(false);
            } else {
                console.log("Incorrect value");
            }
            break;
        case 4:
            if (hourNumber>=9 && hourNumber<=18){
                console.log(true);
            } else if (hourNumber>0 && hourNumber<24){
                console.log(false);
            } else {
                console.log("Incorrect value");
            }
            break;
        case 5:
            if (hourNumber>=9 && hourNumber<=18){
                console.log(true);
            } else if (hourNumber>0 && hourNumber<24){
                console.log(false);
            } else {
                console.log("Incorrect value");
            }
            break;
        case 6:
            if (hourNumber>=9 && hourNumber<=18){
                console.log(true);
            } else if (hourNumber>0 && hourNumber<24){
                console.log(false);
            } else {
                console.log("Incorrect value");
            }
            break;
        default:
            console.log("Incorrect value");
            break;
    }
}

trueIfBusinessHours(yearDayNumber, hourNumber);
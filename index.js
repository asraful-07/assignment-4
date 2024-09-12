// problem 1
function calculateTax(income, expenses) {
    if(income < 0 || expenses < 0 || income < expenses){
        return "Invalid Input";
    }
    let total = income - expenses;
    let remainingAmount = total * .20;
    return remainingAmount;
}

// console.log(calculateTax(10000, 3000));
// console.log(calculateTax(34000, 1753));
// console.log(calculateTax(5000, 1500));
// console.log(calculateTax(7000, 7000));
// console.log(calculateTax(-5000, 2000));
// console.log(calculateTax(6000, -1500));

// problem 2
function sendNotification(email) {
    if(!email.includes("@") || typeof email !== 'string') {
        return "Invalid Email";
    };

    let parts = email.split('@');
    const result = parts[0] + " sent you an email from " + parts[1];
    return result;
}

// const email = sendNotification('zihad@gmail.com');
// console.log(email);
// console.log(sendNotification('farhan34@yahoo.com'));
// console.log(sendNotification('nadim.naem5@outlook.com'));
// console.log(sendNotification('fahim234.hotmail.com'));
// console.log(sendNotification('sadia8icloud.com'));


// problem 3
function checkDigitsInName(name) {
    if (typeof name !== 'string' || Array.isArray(name)) {
        return "Invalid Input";
    }

    for (let i = 0; i < name.length; i++) {
        if (!isNaN(name[i]) && name[i] !== ' ') {
            return "true";
        }
    }

    return "false";
}

// const result = checkDigitsInName("Raju123");
// console.log(result); 
// console.log(checkDigitsInName("Suman"));
// console.log(checkDigitsInName("!@#"));
// console.log(checkDigitsInName("n9ayeem"));
// console.log(checkDigitsInName(["Raj"]));

// problem 4 
function calculateFinalScore(obj) {
    if (typeof obj !== "object" || Array.isArray(obj)) {
        return "Invalid Input";
    }

    const { name, testScore, schoolGrade, isFFamily } = obj;
    if (
        typeof name !== 'string' || typeof testScore !== 'number' || typeof schoolGrade !== 'number' ||
        typeof isFFamily !== 'boolean' || testScore > 50 || testScore < 0 || schoolGrade > 30 || schoolGrade < 0
    ) {
        return 'Scores are out of bounds';
    }
    const finalScore = testScore + schoolGrade + (isFFamily ? 20 : 0);
    return finalScore >= 80;
}


// console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }));
// console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false  }));
// console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true}));
// console.log(calculateFinalScore("hello"));




// problem 5 
function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }
   
    const totalInterviews = waitingTimes.length;
    const totalTime = waitingTimes.reduce((sum, time) => sum + time, 0);
    const averageTime = Math.round(totalTime / totalInterviews);

    const peopleLeftBeforeNumber = serialNumber - totalInterviews - 1;

    const waitingTime = peopleLeftBeforeNumber * averageTime;

    return waitingTime > 0 ? waitingTime : 0;
}


// const waitingTimes = [5, 7, 6, 8, 4]; 
// const serialNumber = 10;

// const result = waitingTime(waitingTimes, serialNumber);
// console.log(result);  
// console.log(waitingTime([13, 2], 6));
// console.log(waitingTime([13, 2, 6, 7, 10], 6));
// console.log(waitingTime(7 , 10));
// console.log(waitingTime([7, 8, 3, 4, 5], "9"));

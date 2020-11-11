//  Check If Employee Is Present or Absent
{
    const IS_ABSENT = 0 ; 
    let empCheck = Math.floor(Math.random() * 10)%2;
    if(empCheck == IS_ABSENT) {
        console.log("Employee is ABSENT");
    }
    else {
        console.log("Employee is PRESENT");
    }
}

// Calculate Employee Wage
const WAGE_PER_HOUR = 20 ; // Declaring as global for using wage calculator function anywhere
{
    const IS_PART_TIME = 1 ;
    const IS_FULL_TIME = 2 ;
    const PART_TIME_HOURS = 4 ;
    const FULL_TIME_HOURS = 8 ;

    function getWorkingHours(empCheck) {
        switch (empCheck) {
            case IS_PART_TIME :
                return PART_TIME_HOURS ;
            case IS_FULL_TIME : 
                return FULL_TIME_HOURS ;
            default :
                return 0;
        }
    }
    let empCheck = Math.floor(Math.random() * 10)%3;
    let empHrs = getWorkingHours(empCheck);
    let empWage = empHrs * WAGE_PER_HOUR ;
    console.log("Employee Wage = " + empWage);
}

// calculate wage for 20 days usng for loop
{
    let empHrs = 0;
    const WORKING_DAYS = 20 ;
    for(let i = 0; i <= WORKING_DAYS; i++) {
        let empCheck = Math.floor(Math.random() * 10)%3;
        empHrs = empHrs + getWorkingHours(empCheck);
    }
    let empWage = empHrs * WAGE_PER_HOUR ;
    console.log("Aggregate Wage for 20 days = " + empWage);
}

//Calculate for particular limit: either 20 days or 160 Hours: using while loop
{
    let empHrs = 0 ;
    let workingDay = 0 ;
    while(empHrs <= 160 && workingDay <= 20) {
        let empCheck = Math.floor(Math.random() * 10)%3;
        empHrs = empHrs + getWorkingHours(empCheck);
        workingDay++ ;
    }
    console.log("Wage for Max 20 days or Max 160 hrs is = "+ empHrs*WAGE_PER_HOUR);
}



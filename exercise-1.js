// Update the getDayTimeDifference() function so it will return the difference between 2 dates broken down in days, hours, minutes and seconds
/*
======================================================
Example output of current date is 2022-10-24 14:49:36
======================================================
Days Elapsed: 145
Hours Elapsed: 6
Minutes Elapsed: 49
Seconds Elapsed: 36
*/

const millisecondsInADay = 1000 * 3600 * 24;

function getDayTimeDifference(currentDate, refDate) {
  const differenceByMilliseconds = currentDate.getTime() - refDate.getTime();
  const differenceInDays = Math.ceil(
    differenceByMilliseconds / millisecondsInADay
  );

  const differenceInHours = currentDate.getHours() - refDate.getHours();

  const differenceInMinutes = currentDate.getMinutes() - refDate.getMinutes();

  const differenceInSeconds = currentDate.getSeconds() - refDate.getSeconds();

  let seconds = differenceInSeconds;
  let minutes = differenceInMinutes;
  let hours = differenceInHours;
  let days = differenceInDays;

  return {
    seconds: seconds,
    minutes: minutes,
    hours: hours,
    days: days,
  };
}

const dueDate = new Date("2022-06-01");
const timeDiff = getDayTimeDifference(new Date(), dueDate);
console.log(`Days Elapsed: ${timeDiff.days}`);
console.log(`Hours Elapsed: ${timeDiff.hours}`);
console.log(`Minutes Elapsed: ${timeDiff.minutes}`);
console.log(`Seconds Elapsed: ${timeDiff.seconds}`);

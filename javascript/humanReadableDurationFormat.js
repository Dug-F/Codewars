const SECONDS_TO_MINUTES = 60;
const SECONDS_TO_HOURS = SECONDS_TO_MINUTES * 60;
const SECONDS_TO_DAYS = SECONDS_TO_HOURS * 24;
const SECONDS_TO_YEARS = SECONDS_TO_DAYS * 365;
const periods = ["year", "day", "hour", "minute", "second"];

function formatDuration(seconds) {
  let remainingSeconds = seconds;
  allocations = [];
  [SECONDS_TO_YEARS, SECONDS_TO_DAYS, SECONDS_TO_HOURS, SECONDS_TO_MINUTES, 1].forEach((conversionFactor) => {
    allocations.push(Math.floor(remainingSeconds / conversionFactor));
    remainingSeconds = remainingSeconds % conversionFactor;
  });

  let parts = [];
  for (let i = 0, length = periods.length; i < length; i++) {
    if (allocations[i] !== 0) {
      parts.push(allocations[i] === 1 ? `${allocations[i]} ${periods[i]}` : `${allocations[i]} ${periods[i]}s`);
    }
  }

  switch (parts.length) {
    case 0:
      return "now";
    case 1:
      return parts[0];
    case 2:
      return `${parts[0]} and ${parts[1]}`;
    default:
      return `${parts.slice(0, parts.length - 1).join(", ")} and ${parts.slice(parts.length - 1)}`;
  }
}

console.log(formatDuration(3662));

// utils/formatCardDate.js
export function formatCardDate(
  startStr,
  endStr,
  options = { showTime: false },
) {
  const start = new Date(startStr);
  const end = new Date(endStr);

  // UTC values to ignore local timezone
  const startMonth = start
    .toLocaleString("en-US", { month: "short", timeZone: "UTC" })
    .toUpperCase();
  const startDay = start.getUTCDate().toString().padStart(2, "0");
  const startYear = start.getUTCFullYear().toString().slice(-2); // short year
  const endMonth = end
    .toLocaleString("en-US", { month: "short", timeZone: "UTC" })
    .toUpperCase();
  const endDay = end.getUTCDate().toString().padStart(2, "0");
  const endYear = end.getUTCFullYear().toString().slice(-2);

  if (options.showTime) {
    const timeOptions = {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: "UTC",
    };
    const startTime = start.toLocaleString("en-US", timeOptions);
    const endTime = end.toLocaleString("en-US", timeOptions);

    return `${startMonth} ${startDay}, ${start.getUTCFullYear()} - ${startTime} - ${endMonth} ${endDay}, ${end.getUTCFullYear()} - ${endTime}`;
  }

  // Card view (short)
  if (startMonth === endMonth && startYear === endYear) {
    return `${startMonth} ${startDay}-${endDay}, ${startYear}`;
  }

  return `${startMonth} ${startDay}, ${startYear} - ${endMonth} ${endDay}, ${endYear}`;
}

// utils/formatDateTime.js
export function formatDateTime(dateStr) {
  const date = new Date(dateStr);

  const month = date
    .toLocaleString("en-US", { month: "long", timeZone: "UTC" })
    .toUpperCase();
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  const options = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC",
  };
  const time = date.toLocaleString("en-US", options);

  return `${month} ${day}, ${year} - ${time}`;
}

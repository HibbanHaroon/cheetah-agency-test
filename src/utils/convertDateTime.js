export function convertDateTime(dateTimeString) {
  const date = new Date(dateTimeString);

  // Formatting the date as "DD/MM/YYYY"
  const formattedDate = `${date.getDate().toString().padStart(2, "0")}/${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${date.getFullYear()}`;

  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Formatting the time according to the user's time zone
  const adjustedTime = date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: userTimeZone,
  });

  return formattedDate + ", " + adjustedTime;
}

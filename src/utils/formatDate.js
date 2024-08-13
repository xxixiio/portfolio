export function formatDate(date) {
  let dateObj = new Date(date);

  let options = { month: "short", day: "numeric", year: "numeric" };
  let formattedDate = dateObj.toLocaleDateString("en-US", options);

  return formattedDate;
}

export const formattedDate = (originalDate) => {
  const dateObject = new Date(originalDate);
  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();
  const newDate = `${String(day).padStart(2, "0")}/${String(month).padStart(
    2,
    "0"
  )}/${year}`;

  return newDate;
};

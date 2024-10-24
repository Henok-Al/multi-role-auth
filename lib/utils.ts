export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const formatter = new Intl.DateTimeFormat("en-ID", {
    dateStyle: "medium",
  });
  return formatter.format(date);
};

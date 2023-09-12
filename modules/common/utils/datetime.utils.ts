
// FORMAT: September 11, 2023, 2:30 PM
export const dtOptions: Intl.DateTimeFormatOptions = {
  year: "numeric", // 4-digit year (e.g., "2023")
  month: "long",   // Full month name (e.g., "September")
  day: "numeric",   // Day of the month (e.g., "11")
  hour: "2-digit",  // Hour in 12-hour format (e.g., "2")
  minute: "2-digit", // Minutes (e.g., "30")
  hour12: true,      // Use 12-hour format (true)
}

export function toLocaleString(dateStr: string) {
  const inputDate = new Date(dateStr);
  const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(inputDate);
  const day = inputDate.getDate();
  const year = inputDate.getFullYear();
  const hours = inputDate.getHours();
  const minutes = inputDate.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  return `${month.substring(0, 3)} ${String(day).padStart(2, '0')}, ${year}, ${hours % 12}:${minutes.toString().padStart(2, '0')} ${ampm}`;
}
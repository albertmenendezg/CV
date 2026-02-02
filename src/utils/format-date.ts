const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export const formatDate = (date: Date | "Present") => {
    if (date === "Present") return date;
    return monthNames[date.getUTCMonth()] + ' ' + date.getFullYear();
}
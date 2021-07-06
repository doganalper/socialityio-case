export const parseMonthName = (dateStr) => {
    const d = new Date(dateStr);
    const month = d.toLocaleString("default", { month: "long" });
    const dateArr = dateStr.split("-").reverse();
    dateArr[1] = month;

    return dateArr.join(" ");
}
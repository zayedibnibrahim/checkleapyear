function checkLeafYear(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return "your year is leap year"
            } else {
                return "your year is not leap year"
            }
        } else {
            return "your year is leap year";
        }

    } else {
        return "your year is not leap year";
    }
}
let checkLeaf = checkLeafYear(2004);
console.log(checkLeaf);

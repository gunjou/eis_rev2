// Sorting value of json
export function GetSortOrder(prop) {
    return function(a, b) {
        if (a[prop] < b[prop]) {
            return 1;
        } else if (a[prop] > b[prop]) {
            return -1;
        }
        return 0;
    }
  };

// Extract date to Y-m-d
export function expandDate(date) {
  var date = new Date(date);
  var [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
  var extractDate = `${year}-${month+1}-${day}`;
  return extractDate;
};

// Initalize Short month
export const shortMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Jul', 'Agu', 'Okt', 'Nov', 'Des']
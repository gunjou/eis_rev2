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

// Sorting age by category
export function GetSortAge(prop) {
  const cateAge = ["<5", "5-14", "15-24", "25-34", "35-44", "45-54", "55-64", ">65"];
  const result = [];
  cateAge.map((row) =>
    prop.map((i) => {
      if(i.name == row) {
        result.push({"name": i.name, "laki_laki": i.laki_laki, "perempuan": i.perempuan, "value": i.value});
      }
    })
  )
  return result;
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
// code your solution here
const records = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
];


function superbowlWin(record) {
    let result = record.find(element => element.result ==="W");
    return (result ? result.year : result=undefined);
}
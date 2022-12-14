// Guide to reading a CSV file found at:
// https://blog.logrocket.com/complete-guide-csv-files-node-js/

// Imports
import Papa from "papaparse";

// Function for organizing a passed in CSV file
export default function (file) {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result);
      const parsedData = csv?.data;

      const headers = parsedData.shift(); // Gets first line of excel file
      headers.shift(); // Removes first item (Date_Time whitespace)
      const organizedData = {}; // Instantiates Map

      let value = 0;
      let headerNum = 1;

      headers.forEach((header) => {
        // For each header in the array
        header = header.replaceAll("_", " ");
        let dayNum = 1;
        for (let x = 0; x < parsedData.length; x++) {
          const dateTime = parsedData[x][0]; // Get the dateTime as an object
          const day = dateTime.substring(0, 2); // Separate the "day" portion
          const month = dateTime.substring(3, 5); // Separate the "month" portion
          const year = dateTime.substring(6, 10); // Separate the "year" portion

          if (organizedData[year] === undefined) organizedData[year] = {}; // If there is no year map, make one
          if (organizedData[year][month] === undefined)
            organizedData[year][month] = {}; // If there is no month map, make one
          if (organizedData[year][month][day] === undefined)
            organizedData[year][month][day] = {}; // If there is no day map, make one
          if (organizedData[year][month][day][header] === undefined)
            organizedData[year][month][day][header] = {}; // If there is no header map, make one

          if (parsedData[x][headerNum] !== undefined) {
            value += parseFloat(parsedData[x][headerNum]); // Add the for that header on that line (as a float)
          }

          if (dayNum % 48 === 0) {
            // If the "dayNum" value is divisible by 48 (it has been a full day's worth of value)
            value = (value / 48).toFixed(3); // Find the average

            organizedData[year][month][day][header] = parseFloat(value); // Add the average to the correct day space

            value = 0; // Reset "value"
          }
          dayNum += 1; // Increase "dayNum" by 1
        }
        headerNum++; // Increase the "headerNum"
      });
      console.log(organizedData["2020"]);
      resolve(organizedData);
    };
    reader.readAsText(file);
  });
}

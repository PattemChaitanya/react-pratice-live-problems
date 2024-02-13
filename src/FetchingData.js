// import axios from "axios";
// import { load } from "cheerio";
// import React, { useState } from "react";

// const FetchingData = () => {
//   const [value, setValue] = useState("");
//   const [fetchData, setFetchData] = useState([]);

//   const handleClick = async () => {
//     console.log(value);
//     // const xml = new XMLHttpRequest();
//     // xml.open("GET", value, true);
//     // xml.send();
//     // xml.onreadystatechange = function () {
//     //   if (xml.readyState === 4) {
//     //     console.log(xml.responseText);
//     //   }
//     // };
//     try {
//       fetch(value)
//         .then((response) => response.text())
//         .then((data) => setFetchData(data))
//         .catch((error) => console.error("Error fetching HTML:", error));
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   console.log(fetchData, "fetchData");
//   return (
//     <>
//       <input
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         type="text"
//       />
//       <button onClick={handleClick}>Submit</button>
//       <br />
//       value: {value}
//     </>
//   );
// };

// export default FetchingData;

// import React, { useEffect } from "react";
// import puppeteer from "puppeteer";

// function FetchingData() {
//   useEffect(() => {
//     const scrapeHtml = async () => {
//       const browser = await puppeteer.launch();
//       const page = await browser.newPage();

//       const url =
//         "https://www.vegrecipesofindia.com/turmeric-pickle-recipe-kachche-haldi-ka-achaar/"; // Replace with the URL you want to scrape
//       await page.goto(url);

//       const htmlContent = await page.content();
//       console.log(htmlContent);

//       await browser.close();
//     };

//     scrapeHtml();
//   }, []);

//   return (
//     <div>
//       <h1>Scraped HTML Content</h1>
//       {/* Display the scraped HTML content or process it as needed */}
//     </div>
//   );
// }

// export default FetchingData;

# A stock price monitoring website, it's still developing........

<p>
  <!-- iOS -->
<!--   <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" /> -->
  <!-- Android -->
<!--   <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" /> -->
  <!-- Web -->
  <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
</p>

## Introduction:
Hi, everyone, I'm a beginner trying to do something interesting (at least for me) on GitHub.

This is my first project, I took these two websites [tradingview](https://www.tradingview.com/), [twelvedata](https://twelvedata.com/login) as references and data inputs trying to learn something about coding.

## demonstration:
### Server.js
- I used a local Javascript file as a server-side script to fetch the data from twelvedata.com.
- Once the "Server.js" is running, it fetches the data and saves it on my local host site.
- This script is running on the backend side, which means the user can't see my API key.
<img width="1280" alt="API" src="https://github.com/FuzzyKala/Product_1_Stock_monitoring/assets/40585857/6501ca75-c1f6-45ed-9f70-b3f8c75e5765">

### API key
- The API key was kept in the ".env" file for security purposes.
- The ".env" file shouldn't be public, so I put the ".env" into the gitignore.
<img width="1163" alt="env" src="https://github.com/FuzzyKala/Product_1_Stock_monitoring/assets/40585857/75bf2cf1-d10c-4c02-942a-56f7f14c7a36">

### index.js
- The index script is used for fetching the data that we save in the "http://127.0.0.1:8000/APIkey".
- In other words, I used index.js to take the data from the backend(Server.js) to the frontend (index.js) and show it on HTML.
<img width="708" alt="local" src="https://github.com/FuzzyKala/Product_1_Stock_monitoring/assets/40585857/c87166ea-6115-4899-acee-252b57a1febc">


### HTML layout
- Value is switching between percentage and price automatically.
<img width="1280" alt="price" src="https://github.com/FuzzyKala/Product_1_Stock_monitoring/assets/40585857/a2f91ced-0956-4ada-8d02-b72260b7aa15">
<img width="1280" alt="percentage" src="https://github.com/FuzzyKala/Product_1_Stock_monitoring/assets/40585857/e8268ab1-2f62-4f48-8d94-a6f715362d7c">

- pop up window for searching shares (not finished yet.)
<img width="1280" alt="popup" src="https://github.com/FuzzyKala/Product_1_Stock_monitoring/assets/40585857/0efab1ce-194c-4c7c-836b-dc81d4353a97">

### CSS design
- some hover animation
<img width="1280" alt="Snipaste_2024-01-29_22-04-02" src="https://github.com/FuzzyKala/Product_1_Stock_monitoring/assets/40585857/2ace0ca1-7820-4fa3-b695-35a4f159ee07">


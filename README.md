# Project Overview

**PROJECT NAME:** Sun and Moon

**PROJECT AUTHOR:** Connor Jacobs

## Project Description

Sun and Moon is a web application that allows the user to search using a city/state/country or geographic coordinates
to see various standard event data for the sun and moon at that time and location. Data will include rise time, set time, current azimuth, and current angle for both the sun and moon. In addition, the phase of the moon and it's percent-illumination will be
displayed. There will be separate pages for the sun and the moon. The user will be able to save a list of locations for easy review. This app will be built with a React front-end, be deployed on Netlify, and will be built with a responsive, mobile-first design.

## API's

[ipgeolocation](https://ipgeolocation.io/) - this API provides all of the data for the application except for the moon phase and illumination. Other data may be implemented as post-MVP.

```js
{
  "location": {
    "country": "United States of America",
    "state": "Colorado",
    "city": "Denver",
    "latitude": 39.74759105,
    "longitude": -104.99378995000001
  },
  "date": "2021-04-28",
  "current_time": "22:39:25.404",
  "sunrise": "06:03",
  "sunset": "19:51",
  "sun_status": "-",
  "solar_noon": "12:57",
  "day_length": "13:48",
  "sun_altitude": -26.93975401320877,
  "sun_distance": 150509485.632017,
  "sun_azimuth": 322.05921313352894,
  "moonrise": "22:11",
  "moonset": "07:12",
  "moon_status": "-",
  "moon_altitude": 4.714138343414046,
  "moon_distance": 359798.69283434795,
  "moon_azimuth": 122.8066851473335,
  "moon_parallactic_angle": -40.17108144796963
}
```


[Farmsense](https://www.farmsense.net/api/) - this API will provide the moon phase and illumination data required for the app. Other data may be implemented as post-MVP.

```js
[
  {
    "Error": 0,
    "ErrorMsg": "success",
    "TargetDate": "1619665990",
    "Moon": [
      "Grass Moon"
    ],
    "Index": 17,
    "Age": 17.07388448494923949283474939875304698944091796875,
    "Phase": "Waning Gibbous",
    "Distance": 363956.7999999999883584678173065185546875,
    "Illumination": 0.939999999999999946709294817992486059665679931640625,
    "AngularDiameter": 0.5472027461375270629417855161591432988643646240234375,
    "DistanceToSun": 150678350.4741533100605010986328125,
    "SunAngularDiameter": 0.52930728838633556154746884203632362186908721923828125
  }
]
```

---

## Wireframes

- [Mobile](https://res.cloudinary.com/kinr-jay/image/upload/v1619755430/GA/Sun%20and%20Moon%20Project/sun-and-moon-mobile-wf_jc6qzo.jpg)
- [Tablet](https://res.cloudinary.com/kinr-jay/image/upload/v1619755426/GA/Sun%20and%20Moon%20Project/sun-and-moon-tablet-wf_nepfhr.jpg)
- [Desktop](https://res.cloudinary.com/kinr-jay/image/upload/v1619755430/GA/Sun%20and%20Moon%20Project/sun-and-moon-desktop-wf_yoa6k4.jpg)

## Time/Priority Matrix 

[Link]()

## MVP

- 

## PostMVP 

- 

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1 - Wednesday | Proof of Concept | Complete
|Day 2 - Thursday | Project Description, Wireframes | Incomplete
|Day 3 - Friday | Complete Project Plan | Incomplete
|Day 5 - Sunday | Core Application Structure (React arch.) | Incomplete
|Day 6 - Monday | API Calls | Incomplete
|Day 7 - Tuesday | CSS | Incomplete
|Day 8 - Wednesday | Post-MVP | Incomplete
|Day 9 - Thursday | Final Touches | Incomplete
|Day 10 - Friday | Present | Incomplete

## MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| placeholder | H | hr | hr |
| Total | H | hrs| hrs |

## PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| placeholder | M | hr | hr |
| Total | H | hrs| hrs |

## React Architecture



## Additional Libraries

- 

## Code Snippet



## Issues and Resolutions




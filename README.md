# Project Overview

**PROJECT NAME:** Sun and Moon

**PROJECT AUTHOR:** Connor Jacobs

## Links

[GitHub Repo](https://github.com/kinr-jay/sun-and-moon)
[Live Application](https://sun-and-moon.netlify.app/)

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

- [Link](https://res.cloudinary.com/kinr-jay/image/upload/v1619799305/GA/Sun%20and%20Moon%20Project/sun-and-moon-time-matrix_yqjzdr.jpg)

## MVP

- Plan!
- Create React architecture skeleton
- Capture data from API's
- Display data from API's
- Implement mobile-first design
- Implement tablet design
- Implement basic desktop design
- Programmatically locate sun icon on page
- Programmatically locate moon icon on page
- Complete styling using SCSS

## PostMVP 

- Add a daily sun graph
- Add a yearly sun graph
- Use IP address to determine location on load
- Collect additional data from other API's if possible (eclipse, supermoon, etc)

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1 - Wednesday | Proof of Concept | Complete
|Day 2 - Thursday | Project Description, Wireframes | Complete
|Day 3 - Friday | Complete Project Plan, Core Application Structure | Incomplete
|Day 5 - Sunday | API Calls | Incomplete
|Day 6 - Monday | Mobile, Tablet, basic Desktop design with SCSS | Incomplete
|Day 7 - Tuesday | Dynamic Sun and Moon icon positioning with SCSS | Incomplete
|Day 8 - Wednesday | Post-MVP | Incomplete
|Day 9 - Thursday | Post-MVP, Final Touches | Incomplete
|Day 10 - Friday | Present | Incomplete

## MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Plan | H | 2hr | hr |
| Create React architecture | H | 2hr | 6hr |
| Capture data from API's | H | 1.5hr | 1hr |
| Display data from API's | H | 2hr | 1.5hr |
| Implement mobile-first design | H | 1.5hr | 4hr |
| Implement tablet design | H | .5hr | .25hr |
| Implement basic desktop design | H | 1.5hr | hr |
| Programmatically locate sun icon - azimuth | M | 2.5hr | hr |
| Programmatically locate sun icon - altitude | M | 2hr | hr |
| Programmatically locate moon icon - azimuth | M | 1hr | hr |
| Programmatically locate moon icon - altitude | M | 1hr | hr |
| Complete SCSS styling | M | 3hr | hr |
| Total | H | 18.5hrs| hrs |

## PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Daily sun graph | M | 1.5hr | hr |
| Yearly sun graph - assemble data | M | 2hr | hr |
| Yearly sun graph - display data | M | 2hr | hr |
| Use IP address location | M | 2hr | hr |
| Programmatically show Moon icon with actual illumination | M | 2.5hr | hr |
| Programmatically color background for day/night | M | 1hr | hr |
| Find more fun data! | M | ∞hr | hr |
| Total | H | 11hrs| hrs |

## React Architecture

- [Link](https://docs.google.com/drawings/d/1OuY0BjoTJzHHEURq72qBJ17AxadJhG1L7sSUia__Jwc/edit?usp=sharing)

## Key Libraries

- Reactjs
- React Router
- React Responsive
- SASS

## Code Snippet



## Issues and Resolutions

```
Warning: Can't call setState on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the Media component.
```

```
Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
at Media (http://localhost:3000/static/js/vendors~main.chunk.js:33340:30)
```

```
Warning: <Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.
```


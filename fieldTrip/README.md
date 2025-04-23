## Field Trip Project

### Project Summary

This project is an interactive museum installation designed for the Eiteljorg Museum in Indianapolis, inspired by their exhibit of license plates from various Native American tribes. The installation has visitors create a digital "road trip" by tapping on buttons next to each nation's license plate. Each tap highlights the tribe’s location on a large interactive U.S. map and draws a line connecting them to other tribes that have been tapped. Once the visitor is done planning, they will press the “Go!” button. This will animate the road trip and trigger a voiceover that shares fun facts, cultural insights, and other info about each tribe visited.

### Core Webpages

- **Home Page**  
  A brief introduction to the road trip feature and how to use it. Prompts users to "Plan a trip".

- **Interactive Map Page**  
  The bulk of the experience. As users tap on buttons next to each nation's license plate on the physical exhibit, that tribe's location appears on the digital U.S. map. Tribes are added in order of selection, with a dashed line connecting them. Includes "Start Over" and "Go!" buttons.

  - **Tribe Info Panel** (Side Panel of Map Page)
    Shows info for last selected tribe while planning trip, and then expands over more of the screen when trip is started to show full info for each nation as the trip progresses.

  - **Road Trip Mode**  
    When “Go!” is pressed, the map animates through each tribe’s location in order. A voiceover shares information, including notable history, fun facts, and the area of the U.S the nation is most near.


<div style="display: flex; align-items: center;">
<div>
<h3>Design Choices</h3>
 <strong>Styling Inspiration</strong>
 <ul>
 <li> <a target=_blank href=https://native-land.ca>Native Land Digital</a> for accurate regions of the various nations, as well as their map API.
 </li>
 <li> National Park maps for rustic, earthy aesthetic. The vintage tones and minimalistic layout of these posters inspired the visual theme of the map interface.
 </li>
 </ul>
 </div>
   <img src="https://national-park-posters.com/cdn/shop/products/grand-teton-national-park.jpg" style="height: 200px;">
   </div>

- **Color Palette**
  - **Earth Red (#8B3A3A)** <img valign='middle' alt='blue' src='https://readme-swatches.vercel.app/8B3A3A?style=round'/>
    - Used for map outlines / road lines while trying to mimic soil and maps from media like Indiana Jones.
  - **Sand Beige (#F5E1A4)** <img valign='middle' alt='blue' src='https://readme-swatches.vercel.app/F5E1A4?style=round'/>
    - Background color, aiming for the same old map look.
  - **Forest Green (#3B6D41)** <img valign='middle' alt='blue' src='https://readme-swatches.vercel.app/3B6D41?style=round'/>
    - Used for buttons / action prompts to contrast the red color. Dark to avoid "Christmas Colors".

### **Data Structure**

Each nation is a javaScript object, with fields including their name, a picture of their license plate, and a fun fact.

```js
{
  tribeName: "Navajo Nation",
  plateImg: "navajo.png",
  mapCoordinates: { lat: 36.067, lng: -109.459 },
  region: "Southwest",
  funFact: "The Navajo Nation is the largest Native American territory in the U.S., known for its code talkers in WWII."
}
```

#### Rationale:

I want this structure to be easily scalable, both with more nations and more attributes if needed. I also wanted a general selector (the region attribute) for the ability to filter the data, either by museum patrons or by the admins.

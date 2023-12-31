[![License](https://img.shields.io/badge/License-Apache2-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0) [![Community](https://img.shields.io/badge/Join-Community-blue)](https://developer.ibm.com/callforcode/solutions/projects/get-started/)
<h1 align="center"<a name="title"></a>FARMISTAR</h1>
<div align="center">
  
  >" Empowering Farmers, Nurturing Futures: FARMISTAR - Your Partner in Modern Agriculture. "

</div>
<h1 align="center"</a></h1>

  - [Project Summary](#project-summary)
      - [The issue we are hoping to solve](#issue-we-are-solving)
      - [How our technology solution can help](#technology-solution)
      - [Our Idea](#our-idea)
  
  - [Technology Implementation](#technology-implementation)
      - [IBM AI Service(s) used](#ibm-ai-service)
      - [Other IBM technology used](#other-ibm-tech)
      - [Solution Architecture](#solution-architecture)

  -  [Detailed Description](#detail-materials)
      -  [Marketplace, Crop Selling & Contact Us](#other-page)
      -  [Crop Recommendation, Weather Data & Predictions](#crop-predic)
      -  [Farmistar Bot](#farmistar-bot)
          - [Farmistar Bot - setup](#bot-setup)
          - [Farmistar Bot - Live Agent](#live-agent)
      -  [Acknowledgments & Tracking](#acknowledgment-trackings)
      -  [Salesforce Internal Insights](#salesforce-insights)
             
  - [Presentation materials](#presentation-materials)
      - [Solution Demo Video](#solution-demo-video)
      - [Project development roadmap](#project-development-roadmap)
     
  - [Additional Details](#additional-details)
      - [How to run the project](#run-the-project)
      - [Live Demo](#Live-Demo)
            
  - [About](#about)
      - [Authors](#Authors)
      - [License](#license)
      - [Acknowledgments](#acknowledgments)
<h2 align="center"> Project Summary <a name="project-summary"></a> </h2>
  
### The Issue we are hoping to solve <a name="issue-we-are-solving"></a>

In a rapidly changing world marked by climate uncertainties, resource scarcity, and the need for sustainable agriculture, we recognized the pressing need to empower farmers with innovative tools and technologies that can enhance their productivity, profitability, and resilience. The agriculture sector is facing numerous challenges, including the need to optimize resource usage, adapt to changing weather patterns, access fair markets, and streamline communication for issue resolution. These challenges are particularly acute for small-scale farmers who lack access to advanced resources and information. Here, FARMISTAR, was born out of the determination to address these sustainability issues and transform agriculture for the better.

### How our technology solution can help <a name="technology-solution"></a>

Our technology solution, FARMISTAR addresses critical sustainability challenges in agriculture.
- Firstly, it enhances resource efficiency by leveraging AI to optimize crop yield and recommend suitable crops and fertilizers, thereby reducing unnecessary resource usage and   promoting sustainable farming practices. 
- Secondly, it aids in weather-based decision-making, allowing farmers to adapt to changing climate conditions and mitigate the impact of extreme weather events on their crops.
- Thirdly, FARMISTAR promotes fair trade and supports small-scale farmers by providing a marketplace for their produce, ensuring a sustainable source of income as well as a place where they can buy their essentials they need for farming. 
- Finally, it streamlines communication and issue resolution through either web-to-case system, web chatbot, whatsapp chatbot or through IVR, fostering better farmer-farmer and farmer-service provider interactions, ultimately contributing to the sustainability and resilience of agriculture in the face of modern challenges.

### Our Idea : Revolutionizing Agriculture with FARMISTAR <a name="our-idea"></a>

FARMISTAR is a comprehensive, technology-driven platform that integrates seamlessly with Salesforce's Experience Cloud and Sales Cloud empowering farmers by leveraging AI and weather data to optimize crop yield and recommend sustainable farming practices, reducing resource waste and enhancing resilience to climate change. It is a game-changing solution designed to facilitates fair trade through its marketplace, providing a platform for farmers to sell their produce, and streamlines issue resolution for improved communication and support within the agricultural community. Ultimately, FARMISTAR cater to the multifaceted needs of farmers, providing them with a suite of tools and resources to navigate the complexities of modern agriculture sustainably. 

Here's a detailed look at how FARMISTAR tackles these challenges:

  **1.	Weather-Based Decision-Making :** FARMISTAR employs geolocation to provide farmers with real-time weather information. This data is crucial for making informed decisions about planting, harvesting, and resource allocation. However, what sets FARMISTAR apart is its integration with IBM Watson Studio's IBM Auto AI & Watson ML, which predicts rain possibilities based on weather parameters. This predictive capability empowers farmers to plan their activities more effectively and mitigate risks associated with adverse weather conditions.
  
  **2.	Crop Management and Recommendations:** FARMISTAR goes beyond weather updates. It utilizes IBM Watson Studio's IBM Auto AI & Watson ML instances to calculate crop yield predictions, recommend the best-suited crops for specific conditions, and provide guidance on the optimal use of fertilizers. This AI-driven approach optimizes resource utilization, reduces waste, and promotes sustainable farming practices, all of which are crucial for the long-term health of our planet.
  
  **3.	Marketplace for Fair Trade:** FARMISTAR offers a marketplace where farmers can list their produce and access a wide range of necessary farming items. What distinguishes this marketplace is its commitment to fair trade. FARMISTAR ensure that farmers receive competitive prices for their crops, enabling them to secure a sustainable source of income. Moreover, FARMISTAR manages the entire handling process, making it hassle-free for farmers.
  
  **4.	Efficient Order Management:** The platform streamlines order management by integrating order confirmation via email and SMS, complete with unique order tracking IDs. Farmers can easily track their orders, access order details such as total price and order placement date, and monitor the status of their requests.Integration under the Salesforce Sales Cloud, make it more easy to efficiently manage orders and data for seamless experience of the Farmers. This transparent system fosters trust and efficient communication between farmers and suppliers.
  
  **5.	Crop Trends and Pricing:** FARMISTAR provides an up-to-date display of current crop trends and pricing per quintal. This information equips farmers with insights into market dynamics, helping them make informed decisions about crop selection and timing of sales.
  
  **6.	Web-to-Case Support:** The "Contact Us" section of FARMISTAR enables farmers to lodge complaints or inquiries seamlessly. These submissions are transformed into Web-to-Case records within Salesforce, facilitating efficient issue resolution and enhancing customer service. Custom "Case Requested" emails are automatically sent upon the creation of a case, ensuring timely acknowledgment and follow-up.
  
  **7.	Dashboard Insights:** In Salesforce Sales Cloud, FARMISTAR's dashboard visualizes essential reports, including the number of open cases, orders based on products, total crop selling requests, order status breakdown, and orders sorted by farmers and quantity. This data-driven approach provides farmers and stakeholders with valuable insights into their operations.

  **8.	AI-Powered Chatbot, Live Agent and Multilingual Support:** FARMISTAR introduces a chatbot integrated IBM Watson Assistance and Watsonx.Ai for addressing farmers' queries. It's accessible through WhatsApp and an IVR support connect number that employs Text-to-Speech and Speech-to-Text APIs, With the accessibility of connecting to a live agent backed by Salesforce. Additionally, the platform also offers a language selection feature that uses IBM Language Translator, allowing users to choose their preferred language for a more inclusive experience.



<h2 align="center"> Technology Implementation <a name="technology-implementation"></a> </h2>
  
### IBM AI Service(s) used <a name="ibm-ai-service"></a>

- [Watson Assistant](https://cloud.ibm.com/catalog/services/watson-assistant) -> Watson Assistant is integrated into FARMISTAR as a chatbot accessible through Website, WhatsApp and an IVR system, providing farmers with instant agricultural guidance and support via both text and voice interactions. [Watch Here For Details](#bot-setup)  
- [Watson Speech to Text](https://cloud.ibm.com/catalog/services/speech-to-text) -> Watson Speech to Text is employed in FARMISTAR's IVR system to convert spoken commands into text, enabling voice-based interactions with the Watson Assistant. [Watch Here For Details](#bot-setup)
- [Watson Text to Speech](https://cloud.ibm.com/catalog/services/text-to-speech) -> Watson Text to Speech is employed in the IVR system to convert text-based responses from Watson Assistant into spoken language, facilitating voice interactions with users. [Watch Here For Details](#bot-setup)  
- [Watson Studio](https://cloud.ibm.com/catalog/services/watson-studio) -> Watson Studio is employed in FARMISTAR to facilitate data analysis and machine learning tasks with the Help of IBM AUTO AI & ML Instances. Which is used to process and analyze agricultural data, weather patterns, and market trends, providing valuable insights for crop management, yield predictions, and pricing recommendations,fertilizer prediction & best crop recommendations. [Watch Here For Details](#crop-predic)
- [Language Translator](https://cloud.ibm.com/catalog/services/language-translator) -> The Language Translator is integrated in FARMISTAR to allowing users to choose their preferred language, ensuring a more inclusive and accessible user experience.[Watch Here For Details](#acknowledgment-trackings)


### Other IBM technology used <a name="other-ibm-tech"></a>

- [Watsonx ai](https://cloud.ibm.com/watsonx/overview) --> Watsonx.ai is integrated into Watson Assistant to enhance the chatbot's capabilities of FARMISTAR. It is used to provide advanced generative AI capabilities, improving the quality of responses and expanding the chatbot's ability to answer a wide range of user queries accurately and informatively either through our poral, Whatsapp or through IVR. [Watch Here For Details](#bot-setup)
### Solution Architecture <a name="solution-architecture"></a>

![Solution Architecture](https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/blob/main/Assets/Farmistar%20Architecture.png)

1.	FARMISTAR stores comprehensive information, including product listings and farmer's data, within Salesforce objects. Weather data retrieved using OpenWeather API through APEX is seamlessly presented on the portal using Lightning Web Components (LWC).
2.	The platform initiates with displaying rain predictions on the HOME page by fetching data from OpenWeatherAPI, any other predictions as opt by the user like Crop Yield, Fertilizer Prediction and Crop Prediction is subsequently forwarded to Watson Studio (IBM AUTO AI, ML instance) for rainfall predictions via API requests initiated from Apex. These predictions are then exhibited using LWC.
3.	FARMISTAR's chatbot interactions are designed for user convenience and accessibility to connected with a live agent backed by Salesforce, FARMISTAR's chatbot has three distinct channels:-
  - Web – User initiate the chat in the Watson Assistant which is further connected with Watsonx.ai through extension.
  - Whatsapp- Chatbot interactions are extended to WhatsApp through Twilio and Watson Assistant's Web chat channel.
  - Call- Users can also initiate chatbot interactions through IVR made using Twilio phone number, leveraging Watson Assistant's Call channel, further connected with WATSONX using extension. Watson Text to Speech and Watson Speech to Text facilitate seamless two-way communication during these calls,
4.	When users make purchases from the marketplace, FARMISTAR promptly confirms their orders via SMS using the NEXMO messaging API, skillfully orchestrated through Apex.
5.	To enhance user experience, the platform offers users the choice to select their preferred language for the platform's interface, which is done by WATSON LANGUAGE TRANSLATOR thought the api calls from apex.
6.	All this invaluable information is securely stored within Salesforce, and users can access insights and analytics through meticulously designed REPORTS & DASHBOARDS.


<h2 align="center"> Detailed Description <a name="detail-materials"></a> </h2>

### Marketplace, Crop Selling & Contact Us <a name="other-page"></a>

<img src="https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/blob/main/Assets/Marketplace%2CCrop%20Selling%20%26%20Contact%20Us.png">


-  Pointer to Code :-

    -  [Farmister_Operation_Ctrl.cls](https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/blob/main/Farmistar%20Salesforce%20Code/force-app/main/default/classes/Farmister_Operation_Ctrl.cls)- This apex class is responsible for fetching tracking details,Language selection check, creating order, submiting crop selling proposal, submiting any inquiry.
    -  [Shoping_Cart](https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/tree/main/Farmistar%20Salesforce%20Code/force-app/main/default/lwc/shoping_Cart)-LWC to diaplay all the products, add to cart and further checkout process.
    -  [Commu_shipping_form](https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/tree/main/Farmistar%20Salesforce%20Code/force-app/main/default/lwc/commu_shipping_form)-LWC to capture shipping information of the farmer in order to ship the product they choosed to buy from FARMISTAR.
    -  [Commu_cropprice](https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/tree/main/Farmistar%20Salesforce%20Code/force-app/main/default/lwc/commu_cropprice)- LWC to show the current crops price trends.
    -  [Farmer_Selling](https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/tree/main/Farmistar%20Salesforce%20Code/force-app/main/default/lwc/farmer_Selling)-LWC to collect all the crop related details that the farmer want to sell.
    -  [commu_contactus_form](https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/tree/main/Farmistar%20Salesforce%20Code/force-app/main/default/lwc/commu_contactus_form)- LWC to collect information from farmer for their inquiry and send it to apex class to insert it as an internal Salesforce case.





### Crop Recommendation, Weather Data & Predictions<a name="crop-predic"></a>

<img src="https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/blob/main/Assets/Crop%20Recommendation%20%26%20Prediction%20.png">

-  Pointer to Code :-

    -  [IBMIdentityAuth.cls](https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/blob/main/Farmistar%20Salesforce%20Code/force-app/main/default/classes/IBMIdentityAuth.cls)- This apex class is used to get the IAM authentication token for our IBM cloud account.
    -  [WatsonMLPrediction_Crop_Recommendation.cls](https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/blob/main/Farmistar%20Salesforce%20Code/force-app/main/default/classes/WatsonMLPrediction_Crop_Recommendation.cls)-This apex class is used to make the callout for the Crop Recommendation prediction using the data sent from LWC and authentication token from [IBMIdentityAuth.cls](https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/blob/main/Farmistar%20Salesforce%20Code/force-app/main/default/classes/IBMIdentityAuth.cls) as a authorization key.
    -  [WatsonMLPrediction_Crop_Yield.cls](https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/blob/main/Farmistar%20Salesforce%20Code/force-app/main/default/classes/WatsonMLPrediction_Crop_Yield.cls)- This apex class is used to make the callout for the Crop Yield prediction using the data sent from LWC and authentication token from [IBMIdentityAuth.cls](https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/blob/main/Farmistar%20Salesforce%20Code/force-app/main/default/classes/IBMIdentityAuth.cls) as a authorization key.
    -  [WatsonMLPrediction_Fertilizer_Recomm.cls](https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/blob/main/Farmistar%20Salesforce%20Code/force-app/main/default/classes/WatsonMLPrediction_Fertilizer_Recomm.cls)-This apex class is used to make the callout for the Fertilizer prediction using the data sent from LWC and authentication tokenfrom [IBMIdentityAuth.cls](https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/blob/main/Farmistar%20Salesforce%20Code/force-app/main/default/classes/IBMIdentityAuth.cls) as a authorization key.
    -  [WatsonMLPrediction_Rain.cls](https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/blob/main/Farmistar%20Salesforce%20Code/force-app/main/default/classes/WatsonMLPrediction_Rain.cls)-This apex class is used to make the callout for the rain prediction using the data sent from OpenWeatherAPI.
    -  [Commu_croprecommendation](https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/tree/main/Farmistar%20Salesforce%20Code/force-app/main/default/lwc/commu_croprecommendation)- LWC to capture the input of land details to display and predict Best Crop.
    -  [Commu_fertilizerprediction](https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/tree/main/Farmistar%20Salesforce%20Code/force-app/main/default/lwc/commu_fertilizerprediction)-LWC to capture input of land details to display and predict Best Fertilizer.
    -  [Commu_rainpredic](https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/tree/main/Farmistar%20Salesforce%20Code/force-app/main/default/lwc/commu_rainpredic)-LWC to display the rain prediction based out of OpenWeatherAPI data.
    -  [Commu_crop_yield](https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/tree/main/Farmistar%20Salesforce%20Code/force-app/main/default/lwc/commu_crop_yield)-LWC to capture input of crop,year and other details to display and predict crop yield.
    -  [WeatherInfo_comm](https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/tree/main/Farmistar%20Salesforce%20Code/force-app/main/default/lwc/weatherInfo_comm)-LWC to display the weather information of user's current location using OpenweatherAPI.
    

### Farmistar Bot<a name="farmistar-bot"></a>

#### Farmistar Bot - Setup (Web, Whatsapp & IVR)  <a name="bot-setup"></a>

<img src="https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/blob/main/Assets/Bot-Setup.png">

-  Pointer to Code :-
    -  [Watson.js](https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/blob/main/Farmistar%20Salesforce%20Code/force-app/main/default/staticresources/watson.js)- This is static resource is used in our LWC componet - [Footer LWC](https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/tree/main/Farmistar%20Salesforce%20Code/force-app/main/default/lwc/commu_footer) to render our Watson assistance into our experience cloud page.

#### Farmistar Bot - Live Agent<a name="live-agent"></a>

<img src="https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/blob/main/Assets/Chatbot-Liveagent.png">

-  Pointer to Code :-
    -  [newwatsonassistance.page](https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/blob/main/Farmistar%20Salesforce%20Code/force-app/main/default/pages/newwatsonassistance.page)- This VF page has been created to display the past conversation from the FARMISTAR BOT so that our Live Agents can get context of exactly what the farmer is looking for.


### Acknowledgments, Tracking & Translator<a name="acknowledgment-trackings"></a>

<img src="https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/blob/main/Assets/Confirmations%20%26%20Tracking.png">

-  Pointer to Code :-
    -  [Send_sms_mail.cls](https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/blob/main/Farmistar%20Salesforce%20Code/force-app/main/default/classes/Send_sms_mail.cls)- This apex class is used to trigger SMS & Email confirmation for any Orders, Crop Selling proposal & Inquiry.
    -  [Farmister_Operation_Ctrl.cls](https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/blob/main/Farmistar%20Salesforce%20Code/force-app/main/default/classes/Farmister_Operation_Ctrl.cls)- This apex class is responsible for fetching tracking details,Language selection check, creating order, submiting crop selling proposal,submiting any inquiry
    -  [IBMTranslator.cls](https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/blob/main/Farmistar%20Salesforce%20Code/force-app/main/default/classes/IBMTranslator.cls)-This apex class is used to do call out to Watson Language Translator and receive the translated language from Watson Language translator.
    -  [Commu_trakercrop](https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/tree/main/Farmistar%20Salesforce%20Code/force-app/main/default/lwc/commu_trakercrop)-LWC to take the orderid as input and display the related order details.
    -  [Commu_header](https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/tree/main/Farmistar%20Salesforce%20Code/force-app/main/default/lwc/commu_header)-LWC to display the navigation blocks as well as the language selection options.

### Salesforce Internal Insights<a name="salesforce-insights"></a>

<img src="https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/blob/main/Assets/Salesforce%20insights.png">



<h2 align="center"> Presentation materials <a name="presentation-materials"></a> </h2>

### Solution Demo Video <a name="solution-demo-video"></a>

[![Solution Demo Video](https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/blob/main/Assets/Farmistar%20Thumbnail.png)](https://youtu.be/YSzjFX-xO30)
### Project Development Roadmap <a name="project-development-roadmap"></a>

Currently FARMISTAR offers the following features :-

  -  **Real-Time Weather Forecasts**: Provides farmers with real-time weather conditions and predictions using geolocation data.
  -  **Rain Possibility Predictions**: Utilizes IBM Watson integrated with IBM Auto AI to predict rain possibilities, enabling farmers to plan their activities effectively.
  -  **Crop Management**: Calculates crop yields, recommends suitable crops, and suggests the right fertilizers powered by IBM Auto AI, facilitating data-driven decisions.
  -  **Marketplace**: Offers a user-friendly marketplace where farmers can find essential agricultural products, select items, and complete the checkout process.
  -  **Order Confirmation**: Integrated order confirmation via email and SMS, with each order accompanied by a unique tracking ID for easy order tracking.
  -  **Crop Selling**: Allows farmers to submit crop selling requests, with FARMISTAR handling quality checks, purchasing processes, and transportation.
  -  **Crop Price Trends**: Provides real-time information on current crop trends and prices per quintal, helping farmers make informed selling decisions.
  -  **Crop Listing**: FARMISTAR offers hosting of the farmer's produce after verification from FARMISTAR Internal Users.
  -  **OTP Verification**: Farmers can change their hosting crop status to "SOLD" after a OTP verification sent to their Mobile/Mail.
  -  **Contact Us**: Enables farmers to submit inquiries, complaints, or requests via a simple form, which is converted into Salesforce internal cases for efficient handling.
  -  **Chatbot Support**: Offers an integrated chatbot powered by IBM Watson Assistance and generative AI capabilities using WatsonX AI. It can be accessed via the portal or WhatsApp along with LIVE AGENT support integrated with salesforce.
  -  **IVR Support**: Provides IVR (Interactive Voice Response) support connected to Watson Assistant with text-to-speech and speech-to-text APIs. Enhanced by Watsonx.AI, it's configured with Twilio API for a seamless experience.
  -  **Language Translation**: Features a language selection option, allowing users to choose their preferred language. The portal's content is displayed in the selected language, enhancing accessibility for a diverse user base.
  -  **Salesforce Integration**: Utilizes Salesforce for secure storage of customer details, product information, and insights, enabling internal users to access data through detailed reports and dynamic dashboards.

In future I am planning to enhance/upgrade FARMISTAR in the following way :- 

  -  **Secure Payment Gateway**: I aim to implement a secure and user-friendly payment gateway within the platform. This will facilitate seamless financial transactions, ensuring that farmers can conveniently manage their payments and transactions right from FARMISTAR.
  -  **Integration of IoT Devices**: I am excited to incorporate Internet of Things (IoT) devices for real-time monitoring of critical factors such as soil conditions, crop health, and farm equipment status. The data collected from these devices will seamlessly integrate into FARMISTAR, providing farmers with valuable insights for better decision-making and precision farming.
  -  **Advanced Crop Management**: I also plan to implement IBM Maximo Visual Inspection that will enable farmer with early detection of crop disease as well as to assesses harvested crop quality to make informed decisions on market selection, ensuring optimal returns on their produce.
  -  **WatsonX-Powered Content**:I plan to leverage WatsonX to generate high-quality, context-aware content. This content will include agricultural articles, guides, and educational resources, offering farmers up-to-date information and actionable insights right within the FARMISTAR platform.
  -  **User-Centric Approach**: Our commitment to serving farmers remains unwavering. I will continue to gather user feedback, incorporating valuable insights into our platform's development. New features, improvements, and scalability will be our focus as I aim to expand our operations and reach, benefiting an even broader agricultural community.


![Roadmap](https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/blob/main/Assets/Farmistar%20Roadmap.png)


<h2 align="center"> Additional Details <a name="additional-details"></a> </h2>

### How to run the project <a name="run-the-project"></a>

Step 1: Cloning of the repository :

Our first goal is to set up a developer project which we'll use to modify our application. It starts by cloning the repository. Use the command git clone 

    https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR
    
to clone the repository. Then, open the directory.

    cd Farmistar-Salesforce-Code
    
Step 2: Deploying using CLI tools (ex-VS Code) :

Authorize to your Developer Hub (Dev Hub) org.

    sfdx force:auth:web:login -d -a "FAMRISTAR"

If you already have an authorized Dev Hub, set it as the default:

    sfdx force:config:set defaultdevhubusername=<username|alias>

Create a scratch org.

    sfdx force:org:create -s -f config/project-scratch-def.json

If you want to use an existing scratch org, set it as the default:

    sfdx force:config:set defaultusername=<username|alias>

Push your source.

    sfdx force:source:push

Open the scratch org.

    sfdx force:org:open -u FARMISTAR

4. Configure a Experience Cloud site and place the components as needed pushed into the org.

6. Ensure all security settings and permissions are given for logged in as well as guest users of experience cloud in Salesforce Side.

Note: If you want to learn more about SFDX and CLI command, Click [Here](https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/blob/main/Farmistar%20Salesforce%20Code/README.md)

### Live Demo <a name="Live-Demo"></a>

We can see live working of FARMISTAR - [Here](https://ayanghosh-dev-ed.my.site.com/)

<h2 align="center"> About <a name="about"></a> </h2>

### Author<a name="Authors"></a>

<img src="https://github.com/Ayanghosh-agno/Round-4-Call-for-Code-2023_FARMISTAR/blob/main/Assets/Ayan%20Ghosh.png" style="max-width: 70px;">

   **Ayan Ghosh**

### License<a name="license"></a>
This project is licensed under the Apache 2 License - see the [LICENSE](LICENSE) file for details.

### Acknowledgments<a name="acknowledgments"></a>

- Based on [Billie Thompson's README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2).


<a name="project-name"> FAMISTAR </a>
<div align="center">
  <img src="">
</div>
<div align="center">
  
  >" Empowering Farmers, Nurturing Futures: FARMISTAR - Your Partner in Modern Agriculture. "

</div>

## Contents 
- [FARMISTAR](#project-name)
  01. [Project Summary](#Project-summary)
      - [The issue we are hoping to solve](#issue-we-are-solving)
      - [How our technology solution can help](#technology-Solution)
      - [Our Idea](#our-idea)
  
  02. [Technology Implementation](#technology-implementation)
      - [IBM AI Service(s) used](#ibm-ai-service)
      - [Other IBM technology used](#other-ibm-tech)
      - [Solution Architecture](#solution-architecture)
     
  03. [Presentation materials](#presentation-materials)
      - [Solution Demo Video](#solution-demo-video)
      - [Project development roadmap](#project-development-roadmap)
     
  04. [Additional Details](#presentation-materials)
      - [How to run the project](#run-the-project)
      - [Live Demo](#Live-Demo)
            
  05. [Authors](#Authors)     

<h2 align="center"> Project Summary <a name="Project-summary"></a> </h2>
  
### The Issue we are hoping to solve <a name="issue-we-are-solving"></a>

In a rapidly changing world marked by climate uncertainties, resource scarcity, and the need for sustainable agriculture, we recognized the pressing need to empower farmers with innovative tools and technologies that can enhance their productivity, profitability, and resilience. The agriculture sector is facing numerous challenges, including the need to optimize resource usage, adapt to changing weather patterns, access fair markets, and streamline communication for issue resolution. These challenges are particularly acute for small-scale farmers who lack access to advanced resources and information. Here, FARMISTAR, was born out of the determination to address these sustainability issues and transform agriculture for the better.

### How our technology solution can help <a name="technology-Solution"></a>

Our technology solution, FARMISTAR addresses critical sustainability challenges in agriculture.
- Firstly, it enhances resource efficiency by leveraging AI to optimize crop yield and recommend suitable crops and fertilizers, thereby reducing unnecessary resource usage and   promoting sustainable farming practices. 
- Secondly, it aids in weather-based decision-making, allowing farmers to adapt to changing climate conditions and mitigate the impact of extreme weather events on their crops. Thirdly, FARMISTAR promotes fair trade and supports small-scale farmers by providing a marketplace for their produce, ensuring a sustainable source of income. 
- Finally, it streamlines communication and issue resolution through either web-to-case system, web chatbot, whatsapp chatbot or through IVR, fostering better farmer-farmer and farmer-service provider interactions, ultimately contributing to the sustainability and resilience of agriculture in the face of modern challenges.

### Our Idea : Revolutionizing Agriculture with FARMISTAR <a name="our-idea"></a>

FARMISTAR is a comprehensive, technology-driven platform that integrates seamlessly with Salesforce's Experience Cloud and Sales Cloud empowering farmers by leveraging AI and weather data to optimize crop yield and recommend sustainable farming practices, reducing resource waste and enhancing resilience to climate change. It is a game-changing solution designed to facilitates fair trade through its marketplace, providing a platform for farmers to sell their produce, and streamlines issue resolution for improved communication and support within the agricultural community. Ultimately, FARMISTAR cater to the multifaceted needs of farmers, providing them with a suite of tools and resources to navigate the complexities of modern agriculture sustainably. 

Here's a detailed look at how FARMISTAR tackles these challenges:

  **1.	Weather-Based Decision-Making :** FARMISTAR employs geolocation to provide farmers with real-time weather information. This data is crucial for making informed decisions about planting, harvesting, and resource allocation. However, what sets FARMISTAR apart is its integration with IBM Watson Studio's IBM Auto AI & Watson ML, which predicts rain possibilities based on weather parameters. This predictive capability empowers farmers to plan their activities more effectively and mitigate risks associated with adverse weather conditions.
  
  **2.	Crop Management and Recommendations:** FARMISTAR goes beyond weather updates. It utilizes IBM Watson Studio's IBM Auto AI & Watson ML instances to calculate crop yield predictions, recommend the best-suited crops for specific conditions, and provide guidance on the optimal use of fertilizers. This AI-driven approach optimizes resource utilization, reduces waste, and promotes sustainable farming practices, all of which are crucial for the long-term health of our planet.
  
  **3.	Marketplace for Fair Trade:** FARMISTAR offers a marketplace where farmers can list their produce and access a wide range of necessary farming items. What distinguishes this marketplace is its commitment to fair trade. We ensure that farmers receive competitive prices for their crops, enabling them to secure a sustainable source of income. Moreover, FARMISTAR manages the entire handling process, making it hassle-free for farmers.
  
  **4.	Efficient Order Management:** The platform streamlines order management by integrating order confirmation via email and SMS, complete with unique order tracking IDs. Farmers can easily track their orders, access order details such as total price and order placement date, and monitor the status of their requests.Integration under the Salesforce Sales Cloud, make it more easy to efficiently manage orders and data for seamless experience of the Farmers. This transparent system fosters trust and efficient communication between farmers and suppliers.
  
  **5.	Crop Trends and Pricing:** FARMISTAR provides an up-to-date display of current crop trends and pricing per quintal. This information equips farmers with insights into market dynamics, helping them make informed decisions about crop selection and timing of sales.
  
  **6.	Web-to-Case Support:** The "Contact Us" section of FARMISTAR enables farmers to lodge complaints or inquiries seamlessly. These submissions are transformed into Web-to-Case records within Salesforce, facilitating efficient issue resolution and enhancing customer service. Custom "Case Requested" emails are automatically sent upon the creation of a case, ensuring timely acknowledgment and follow-up.
  
  **7.	Dashboard Insights:** In Salesforce Sales Cloud, FARMISTAR's dashboard visualizes essential reports, including the number of open cases, orders based on products, total crop selling requests, order status breakdown, and orders sorted by farmers and quantity. This data-driven approach provides farmers and stakeholders with valuable insights into their operations.

  **8.	AI-Powered Chatbot and Multilingual Support:** FARMISTAR introduces a chatbot integrated IBM Watson Assistance and Watsonx.Ai for addressing farmers' queries. It's accessible through WhatsApp and an IVR support connect number that employs Text-to-Speech and Speech-to-Text APIs. Additionally, the platform also offers a language selection feature that uses IBM Language Translator, allowing users to choose their preferred language for a more inclusive experience.



<h2 align="center"> Technology Implementation <a name="technology-implementation"></a> </h2>
  
### IBM AI Service(s) used <a name="ibm-ai-service"></a>

- [Watson Assistant](https://cloud.ibm.com/catalog/services/watson-assistant) -> Watson Assistant is integrated into FARMISTAR as a chatbot accessible through Website, WhatsApp and an IVR system, providing farmers with instant agricultural guidance and support via both text and voice interactions.
- [Watson Speech to Text](https://cloud.ibm.com/catalog/services/speech-to-text) -> Watson Speech to Text is employed in FARMISTAR's IVR system to convert spoken commands into text, enabling voice-based interactions with the Watson Assistant.
- [Watson Text to Speech](https://cloud.ibm.com/catalog/services/text-to-speech) -> Watson Text to Speech is employed in the IVR system to convert text-based responses from Watson Assistant into spoken language, facilitating voice interactions with users.
- [Watson Studio](https://cloud.ibm.com/catalog/services/watson-studio) -> Watson Studio is employed in FARMISTAR to facilitate data analysis and machine learning tasks with the Help of IBM AUTO AI & ML Instances. Which is used to process and analyze agricultural data, weather patterns, and market trends, providing valuable insights for crop management, yield predictions, and pricing recommendations,fertilizer prediction & best crop recommendations.
- [Language Translator](https://cloud.ibm.com/catalog/services/language-translator) -> The Language Translator is integrated in FARMISTAR to allowing users to choose their preferred language, ensuring a more inclusive and accessible user experience.

### Other IBM technology used <a name="other-ibm-tech"></a>

- [Watsonx ai](https://cloud.ibm.com/watsonx/overview) --> Watsonx.ai is integrated into Watson Assistant to enhance the chatbot's capabilities of FARMISTAR. It is used to provide advanced generative AI capabilities, improving the quality of responses and expanding the chatbot's ability to answer a wide range of user queries accurately and informatively.
### Solution Architecture <a name="solution-architecture"></a>

1.	FARMISTAR stores comprehensive information, including product listings and weather data, within Salesforce objects. Weather data retrieved through APEX is seamlessly presented on the portal using Lightning Web Components (LWC).
2.	The platform initiates with displaying rain predictions on the HOME page by fetching data from OpenWeatherAPI, or any other predictions as opt by the user like Crop Yield, Fertilizer Prediction, and Crop Prediction. Subsequently, it forwards this data to Watson Studio (IBM AUTO AI, ML instance) for rainfall predictions via API requests initiated from Apex. These forecasts are then exhibited using LWC.
3.	Chatbot Interaction Channels:-
  - i)	Web – User initiate the chat in the Watson Assistant , this Watson assistant is connected with Watsonx.ai through extension.
  - ii)	Whatsapp- We can also initiate our chatbot through whatsapp using Twilio and Watson Assistant’s Web chat channel.
  - iii)	Call- We can even initiate our chatbot though Twilio Phone no. and using Watson Assistant’s Call channel and with the use of Watson Text to Speech & Watson Speech to Text         for the two way communication of Watson assistant and User call.
4.	When users make purchases from the marketplace, FARMISTAR promptly confirms their orders via SMS using the NEXMO messaging API, skillfully orchestrated through Apex.
5.	To enhance user experience, the platform offers users the choice to select their preferred language for the platform's interface, all underpinned by the robust WATSON LANGUAGE TRANSLATOR.
6.	All this invaluable information is securely stored within Salesforce, and users can access insights and analytics through meticulously designed REPORTS & DASHBOARDS.

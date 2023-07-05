var cards = [
  {
    image: "./assets/imgs/security.jpg",
    heading: "Safety",
    listItems: [
      " Secure Data Backups to the Cloud: Safeguard your business's critical financial information with automatic backups to the cloud, ensuring that your data is protected and easily recoverable in the event of any unforeseen circumstances.",
      "Local Data Backups for Added Protection: Enhance data security with regular local backups, providing an additional layer of protection against potential data loss or system failures.",
      "Peace of Mind with Reliable Data Protection: Rest easy knowing that your valuable accounting data is securely stored both in the cloud and locally, minimizing the risk of data loss and ensuring the integrity of your financial records.",
    ],
  },
  {
    image: "./assets/imgs/WhatsApp.svg.webp",
    heading: "Integration with Communication Channels:",
    listItems: [
      "Stay Connected, Enhance Customer Engagement: Seamlessly integrate with WhatsApp, emails, and SMS to send timely reminders and improve customer communication.",
      "Multi-Channel Reach, Convenient Communication: Reach customers through their preferred communication channels, ensuring convenience and higher response rates.",
      "Automate Customer Communication, Drive Sales: Automate communication processes to nurture leads, drive sales, and enhance customer satisfaction.",
    ],
  },
  {
    image: "./assets/imgs/GSTIN.png",
    heading: "GST Reports",
    listItems: [
      "Streamlined GST Reporting: Effortlessly generate comprehensive reports, including GST reports, stock, purchase, sales, and tax reports, simplifying the process of filing GST returns and ensuring compliance with Indian tax regulations.",
      "Tailored Insights for GST Compliance: Customize and analyze reports based on specific GST parameters, empowering you to track your GST liabilities, input tax credits, and other crucial information required for GST filing in India.",
      "Data-Backed GST Strategy and Planning: Access detailed reports that provide actionable insights into your GST data, enabling you to make informed decisions, optimize your tax position, and streamline your business operations in alignment with GST requirements in India.",
    ],
  },
  {
    image: "./assets/imgs/ocr.png",
    heading: "Detect Data from PDF",
    listItems: [
      "Save Time, Reduce Errors: Effortlessly extract and enter data from receipts,invoices, and documents, saving valuable time and minimizing mistakes.",
      "Seamless Integration, Streamlined Workflow: Automate data entry processes and seamlessly integrate with other business tools for a streamlined workflow and increased efficiency.",
      "Eliminate Manual Input, Focus on Growth: Say goodbye to manual data entry and redirect your energy towards business growth and strategic decision-making.",
    ],
  },
  {
    image: "./assets/imgs/nowifi.webp",
    heading: "Multi-Device Access and Offline Functionality",
    listItems: [
      " Anytime, Anywhere Access: Access your accounting software from desktops, mobile devices, and tablets, providing flexibility and convenience.",
      "Work Offline, Sync Online: Enjoy uninterrupted productivity with offline functionality, automatically syncing your data to the cloud once you regain connectivity.",
      "Collaborate and Stay Productive: Enable multiple users to log in simultaneously, promoting collaboration and ensuring efficient teamwork.",
    ],
  },
  {
    image: "./assets/imgs/graph.png",
    heading: "Predictive Analytics",
    listItems: [
      "Insights that Drive Success: Unlock valuable insights from inventory and transaction data, empowering you to make informed decisions that drive business success.",
      "Stay One Step Ahead: Anticipate trends and patterns with predictive analytics, enabling proactive decision-making and a competitive edge in the market.",
      "Smart Data Analysis, Maximize Profitability: Leverage the power of machine learning algorithms to analyze data and identify opportunities to optimize profitability.",
    ],
  },
];

// Create cards for containing card elements
var cardContainer = document.getElementById("cards");

//as per given data it will create card
for (var i = 0; i < cards.length; i++) {
  var card = document.createElement("div"); // container for single card
  card.className = "card";

  var imgContainer = document.createElement("div"); //image container for icons
  imgContainer.className = "imgContainer"; //div.imageContainer
  var image = document.createElement("img"); //creating: img tag
  image.src = cards[i].image; // add image one by one to all the available card
  image.alt = "Image " + (i + 1); // image alt attribute and it's values

  imgContainer.append(image); //div.imagContainer>img[src="data",alt="text"]
  card.appendChild(imgContainer); //div.card>imagContainer>img[src="data",alt="text"]

  var featuresList = document.createElement("div"); //creating: another div for holding all text of cards
  featuresList.className = "features-list";
  var heading = document.createElement("h3"); //creating: h3 for headings
  heading.textContent = cards[i].heading; // adding heading data to h3
  featuresList.appendChild(heading);
  var list = document.createElement("ul");
  featuresList.appendChild(list);

  card.appendChild(featuresList);
  for (var j = 0; j < cards[i].listItems.length; j++) {
    var listItem = document.createElement("li");
    listItem.textContent = cards[i].listItems[j];
    list.appendChild(listItem);
  }

  cardContainer.appendChild(card);
}

const PLANTS = [
    {
      common_name: "Chinese Money Plant",
      scientific_name: "Pilea peperomioides",
      image:
        "https://www.thespruce.com/thmb/JIWXMBWYke_B2VuqAF6pryjm96Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/growing-pilea-peperomioides-5090425-5-64b7b494b8044485bf13cd2978614b14.jpg",
      description:
        "Pilea peperomioides, often referred to as the pancake plant, Chinese money plant, coin plant, or UFO plant, is a popular houseplant thanks to its attractive coin-shaped foliage and ease of care. This flowering perennial in the nettle family (Urticaceae) is native to southern China, growing naturally along the base of the Himalayan mountains.",
      light: "fa-solid fa-cloud-sun",
      water: "Moderate water intake",
      care_difficulty: "Easy Care",
    },
    {
      common_name: "Areca Palm",
      scientific_name: "Chrysalidocarpus lutescens",
      image:
        "https://cdn.shopify.com/s/files/1/0050/6150/9155/products/Areca_palm_chrysiladocarpus_lutescens_135cm_2048x.jpg?v=1627570356",
      description:
        "Also known as the Butterfly Palm for its wide elegant spread, it's a terrific choice if you're looking for a big bushy palm for a bright spot with value in mind. Chrysiladocarpus lutescensneeds a little more care than the easier palms, such as kentia or parlour palm but your reward for meeting its needs is a truly magnificent specimen.",
      light: "fa-solid fa-sun",
      water: "Precise water intake",
      care_difficulty: "Medium Care",
    },
    {
      common_name: "Elephant Ear",
      scientific_name: "Alocasia",
      image:
        "https://www.hanko-jungle.com/wp-content/uploads/2021/06/105-scaled.jpg.webp",
      description:
        "Alocasia are popular plants, and with good reason.  With large, glossy leaves (which can grow up to 3’ long, depending on the variety) and highly structural forms, alocasia look like the tropics.",
      light: "fa-solid fa-cloud-sun",
      water: "Vaporize once a day",
      care_difficulty: "Easy Care",
    },
    {
      common_name: "ZZ Plant",
      scientific_name: "Zamioculcas zamiifolia",
      image:
        "https://m.media-amazon.com/images/I/61ZRN9vL1FL._SL1000_.jpg",
      description:
        "Low-maintenance zz plants are Zamioculcas zamiifolia, characterized by their shiny, wide, oval-shaped leaves that shoot upward and quickly grow in a home indoors. The plant natively grows in East Africa, namely Zanzibar and Tanzania. The plants are also called Zanzibar gems for their spotless, waxy leaves that are so deep green that sometimes, these plants are mistaken as artificial.",
      light: "fa-solid fa-cloud-sun",
      water: "Low water intake",
      care_difficulty: "Super easy care",
    },
    {
      common_name: "Swiss Cheese Plant",
      scientific_name: "Monstera Deliciosa",
      image:
        "https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl.xxl.002_-_monstera_pertusum-1.jpg&w=750&q=80",
      description:
        "Monstera deliciosa, the Swiss cheese plant[2] or split-leaf philodendron[3] is a species of flowering plant native to tropical forests of southern Mexico, south to Panama.[4] It has been introduced to many tropical areas, and has become a mildly invasive species in Hawaii, Seychelles, Ascension Island and the Society Islands. It is very widely grown in temperate zones as a houseplant.",
      light: "fa-solid fa-cloud-sun",
      water: "Water every 1-2 weeks",
      care_difficulty: "Easy care",
    },
    {
      common_name: "English Ivy",
      scientific_name: "Hedera helix",
      image:
        "https://balconygardenweb.b-cdn.net/wp-content/uploads/2017/05/english-ivy-indoor.jpg",
      description:
        "English ivy plants (Hedera helix) are superb climbers, clinging to almost any surface by means of small roots that grow along the stems. English ivy care is a snap, so you can plant it in distant and hard-to-reach areas without worrying about maintenance. There’s very little involved with English ivy care. Water them often enough to keep the soil moist until the plants are established and growing. These vines grow best when they have plenty of moisture, but they tolerate dry conditions once established.",
      light: "fa-solid fa-sun",
      water: "Moderate water intake",
      care_difficulty: "Easy care",
    },
  
  ];

// const plantTest =     {
//     common_name: "Chinese Money Plant",
//     scientific_name: "Pilea peperomioides",
//     image:
//       "https://www.thespruce.com/thmb/JIWXMBWYke_B2VuqAF6pryjm96Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/growing-pilea-peperomioides-5090425-5-64b7b494b8044485bf13cd2978614b14.jpg",
//     description:
//       "Pilea peperomioides, often referred to as the pancake plant, Chinese money plant, coin plant, or UFO plant, is a popular houseplant thanks to its attractive coin-shaped foliage and ease of care. This flowering perennial in the nettle family (Urticaceae) is native to southern China, growing naturally along the base of the Himalayan mountains.",
//     light: "fa-solid fa-cloud-sun",
//     water: "Moderate water intake",
//     care_difficulty: "Easy Care",
//   }
  

//Fonts & Color variables

let font1 = "'Spectral', serif"
let font2 = "'Oswald', sans-serif"
let green1 = "#344E41"
let green2 = "#588157"


//Header and card container

// Header
let header = document.createElement("header")
header.style.display = "flex";
header.style.backgroundColor = "white";

//Logo
let logo = document.createElement("div")
logo.classList.add("logo")
logo.style.backgroundImage = `url("https://us.123rf.com/450wm/rosustock/rosustock2212/rosustock221200399/195840549-isolated-colored-indoor-plant-icon-vector.jpg?ver=6")`
logo.style.backgroundSize = "contain"
logo.style.backgroundRepeat = "no-repeat"
logo.style.width = "100px"

// Header Title
let headerTitle = document.createElement("div")
headerTitle.classList.add("header-title")
headerTitle.style.display = "flex"
headerTitle.style.flexDirection = "column"

// Main title
let mainTitle = document.createElement("h1")
mainTitle.innerText = "Fantastic house plants"
mainTitle.style.fontFamily = font1
mainTitle.style.fontStyle = "italic"
mainTitle.style.lineHeight = "1"

//Main Subtitle
let mainSubtitle = document.createElement("h2")
mainSubtitle.innerText = "You’ll find here a collection of house plants with instructions on how to care for them"
mainSubtitle.style.fontWeight = "200"
mainSubtitle.style.fontSize = "16px"
mainSubtitle.style.marginTop = "-20px"

//Collection container
let container = document.createElement("div");
container.classList.add("container");
container.style.display = "flex";
container.style.flexWrap = "wrap";


//Appending fixed elements
document.body.append(header)
document.body.append(container)
header.append(logo)
header.append(headerTitle)
headerTitle.append(mainTitle)
headerTitle.append(mainSubtitle)



//Body Styling
document.body.style.fontFamily = font2
document.body.style.background = "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(188,208,199,1) 0%, rgba(88,129,87,1) 100%)"
document.body.style.backgroundRepeat = "no-repeat"
document.body.style.backgroundSize = "cover"
document.body.style.margin = "0px 0px"
document.body.style.padding = "0px 0px"
document.body.style.boxSizing = "border-box"







const addCard = (coolplant) => {
    //Card container
let cardContainer = document.createElement("div")
cardContainer.classList.add("card-container")
cardContainer.style.height = "400px"
cardContainer.style.width = "260px"
cardContainer.style.backgroundColor = "white"
cardContainer.style.borderRadius = "15px"
cardContainer.style.margin = "20px"
cardContainer.style.filter = "drop-shadow(0px 14px 24px rgba(0, 0, 0, 0.6));"


//Card Image
let cardImage = document.createElement("div")
cardImage.classList.add("card-image")
cardImage.style.backgroundImage = (`url("${coolplant.image}")`);
cardImage.style.height = "200px";
cardImage.style.borderTopLeftRadius = "15px"
cardImage.style.borderTopRightRadius = "15px"
cardImage.style.backgroundSize = "cover"
cardImage.style.backgroundPosition = "center"



//Card content 
let cardContent = document.createElement("div")
cardContent.classList.add("card-content")
cardContent.style.padding = "10px"

//Card content header
let cardHeader = document.createElement("div");
cardHeader.classList.add("card-header")

//Card content 
let cardTitle = document.createElement("div");
cardTitle.classList.add("card-title")


// Common Name
let cardH3 = document.createElement("h3")
cardH3.innerText = coolplant.common_name
cardH3.style.fontFamily = font1
cardH3.style.fontWeight = "100"
cardH3.style.fontSize = "18px"
cardH3.style.color = green1
cardH3.style.lineHeight = "0.1"


// Scientific name
let cardH4 = document.createElement("h4")
cardH4.innerText = coolplant.scientific_name
cardH4.style.fontFamily = font2
cardH4.style.fontWeight = "100"
cardH4.style.fontSize = "12px"
cardH4.style.color = "black"
cardH4.style.lineHeight = "0.1"

// General info for the plant
let cardInfo = document.createElement("div");
cardInfo.classList.add("card-info")
cardInfo.style.display = "flex"
cardInfo.style.alignItems = "center"
cardInfo.style.lineHeight = "0.1"
cardInfo.style.justifyContent = "space-between"


// Icon for light needs
let lightInfo = document.createElement("i")
lightInfo.className = coolplant.light
lightInfo.style.fontSize = "20px"

//Water requirements
let waterInfo = document.createElement("p")
waterInfo.classList.add("water-info")
waterInfo.innerText = coolplant.water
waterInfo.style.fontSize = "14px"
waterInfo.style.fontWeight = "200"
waterInfo.style.color = green2

// Description
let cardDesc = document.createElement("div")
cardDesc.classList.add("card-desc")
cardDesc.style.fontSize = "10px"


// Paragraph for description
let plantP = document.createElement("p");
plantP.textContent = coolplant.description
plantP.style.fontWeight = "200"
plantP.style.display = "box"
plantP.style.maxHeight = "60px"
plantP.style.overflow = "hidden"
plantP.style.textOverflow = "ellipsis"

// Plant care difficulty
let cardCare = document.createElement("div")
cardCare.classList.add("card-care")
cardCare.innerText = coolplant.care_difficulty
cardCare.style.display = "flex"
cardCare.style.justifyContent = "center" 
cardCare.style.fontSize = "12px" 
cardCare.style.color = green2 


//Appending all our elements
container.append(cardContainer)
cardContainer.append(cardImage)
cardContainer.append(cardContent);
cardContent.append(cardTitle)
cardTitle.append(cardH3)
cardTitle.append(cardH4)
cardInfo.append(lightInfo)
cardInfo.append(waterInfo)
cardContent.append(cardInfo)
cardContent.append(cardDesc)
cardDesc.append(plantP)
cardContent.append(cardCare)

}

// addCard(plantTest);
// addCard(plantTest);

PLANTS.forEach((plantie) => {
    addCard(plantie);
})

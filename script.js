/* =========================================================
   ALL LEARNING HUB
   FINAL SCRIPT.JS
   PART 1
   =========================================================

   FEATURES
   ---------------------------------------------------------
   • English + Hindi
   • Human Body
   • Animals
   • Birds
   • Countries
   • All Country Flags
   • Currency Information
   • States
   • State Foods
   • Festivals
   • National Symbols
   • Seasons
   • Months
   • Days
   • Calendar
   • Languages
   • Numbers 1-100
   • Tables 2-10
   • General Knowledge
   • Food & Vegetables
   • A-Z Alphabet
   • Hindi Varnamala
   • Search
   • Listen / Speech
   • Previous / Next
   ========================================================= */

"use strict";


/* =========================================================
   GLOBAL
   ========================================================= */

let currentLanguage = "en";
let currentTopic = null;

const homePage = document.getElementById("homePage");
const learningPage = document.getElementById("learningPage");

const backBtn = document.getElementById("backBtn");
const topicIcon = document.getElementById("topicIcon");
const topicTitle = document.getElementById("topicTitle");
const topicSubtitle = document.getElementById("topicSubtitle");
const topicSearch = document.getElementById("topicSearch");
const topicContent = document.getElementById("topicContent");

const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");

const searchInput = document.getElementById("searchInput");

const languageBtn =
    document.getElementById("languageBtn") ||
    document.querySelector(".language-btn") ||
    document.querySelector("[data-language]");


/* =========================================================
   TOPIC ORDER
   ========================================================= */

const topicOrder = [
    "humanBody",
    "animals",
    "birds",
    "countries",
    "flags",
    "states",
    "stateFoods",
    "festivals",
    "nationalSymbols",
    "seasons",
    "months",
    "days",
    "calendar",
    "languages",
    "numbers",
    "foodVegetables",
    "generalKnowledge",
    "alphabet",
    "hindiVarnamala"
];


/* =========================================================
   VISUAL ICONS
   ========================================================= */

const VISUAL_ICONS = {

    /* HUMAN BODY */

    Brain: "🧠",
    Eye: "👁️",
    Head: "🧑‍🦱",
    Ear: "👂",
    Nose: "👃",
    Mouth: "👄",
    Teeth: "🦷",
    Tongue: "👅",
    Neck: "🧍",
    Shoulder: "💪",
    Arm: "💪",
    Hand: "🖐️",
    Finger: "☝️",
    Chest: "🫀",
    Heart: "❤️",
    Lungs: "🫁",
    Stomach: "🫃",
    Liver: "🫀",
    Kidney: "🫘",
    Leg: "🦵",
    Knee: "🦵",
    Foot: "🦶",
    Bone: "🦴",
    Skin: "🧍",

    /* ANIMALS */

    Lion: "🦁",
    Tiger: "🐅",
    Elephant: "🐘",
    Dog: "🐕",
    Cat: "🐈",
    Cow: "🐄",
    Horse: "🐎",
    Goat: "🐐",
    Deer: "🦌",
    Monkey: "🐒",
    Bear: "🐻",
    Panda: "🐼",
    Giraffe: "🦒",
    Zebra: "🦓",
    Rabbit: "🐇",

    /* BIRDS */

    Peacock: "🦚",
    Parrot: "🦜",
    Eagle: "🦅",
    Sparrow: "🐦",
    Owl: "🦉",
    Penguin: "🐧",
    Flamingo: "🦩",
    Duck: "🦆",
    Swan: "🦢",
    Crow: "🐦‍⬛",

    /* FOOD */

    Apple: "🍎",
    Banana: "🍌",
    Mango: "🥭",
    Orange: "🍊",
    Watermelon: "🍉",
    Grapes: "🍇",
    Pineapple: "🍍",
    Strawberry: "🍓",
    Coconut: "🥥",
    Papaya: "🥭",
    Guava: "🍐",
    Pomegranate: "🍎",

    Carrot: "🥕",
    Potato: "🥔",
    Tomato: "🍅",
    Onion: "🧅",
    Brinjal: "🍆",
    Broccoli: "🥦",
    Corn: "🌽",
    Cucumber: "🥒",
    Peas: "🫛",
    Chilli: "🌶️",
    Garlic: "🧄",
    Spinach: "🥬",
    Mushroom: "🍄",
    Pumpkin: "🎃",
    Radish: "🥕",
    Cauliflower: "🥦",

    Rice: "🍚",
    Bread: "🍞",
    Milk: "🥛",
    Egg: "🥚",
    Cheese: "🧀",
    Butter: "🧈",
    Pizza: "🍕",
    Burger: "🍔",
    Noodles: "🍜",
    Soup: "🍲",
    Cake: "🍰",
    Chocolate: "🍫",
    IceCream: "🍦",

    /* GENERAL */

    Earth: "🌍",
    Sun: "☀️",
    Moon: "🌙",
    Star: "⭐",
    Water: "💧",
    Fire: "🔥",
    Tree: "🌳",
    Book: "📚",
    Science: "🔬",
    Computer: "💻",
    Language: "🗣️",
    Calendar: "📅",
    Number: "🔢",
    Festival: "🎉",
    Flag: "🚩",
    Food: "🍽️"
};


/* =========================================================
   COUNTRY DATABASE
   ========================================================= */

const COUNTRY_DATABASE = `

Afghanistan|अफ़ग़ानिस्तान|AF|AFN|؋|Afghan Afghani
Albania|अल्बानिया|AL|ALL|Lek|Albanian Lek
Algeria|अल्जीरिया|DZ|DZD|دج|Algerian Dinar
Andorra|अंडोरा|AD|EUR|€|Euro
Angola|अंगोला|AO|AOA|Kz|Angolan Kwanza
Antigua and Barbuda|एंटीगुआ और बारबुडा|AG|XCD|$|East Caribbean Dollar
Argentina|अर्जेंटीना|AR|ARS|$|Argentine Peso
Armenia|आर्मेनिया|AM|AMD|֏|Armenian Dram
Australia|ऑस्ट्रेलिया|AU|AUD|$|Australian Dollar
Austria|ऑस्ट्रिया|AT|EUR|€|Euro
Azerbaijan|अज़रबैजान|AZ|AZN|₼|Azerbaijani Manat
Bahamas|बहामास|BS|BSD|$|Bahamian Dollar
Bahrain|बहरीन|BH|BHD|د.ب|Bahraini Dinar
Bangladesh|बांग्लादेश|BD|BDT|৳|Bangladeshi Taka
Barbados|बारबाडोस|BB|BBD|$|Barbadian Dollar
Belarus|बेलारूस|BY|BYN|Br|Belarusian Ruble
Belgium|बेल्जियम|BE|EUR|€|Euro
Belize|बेलीज़|BZ|BZD|$|Belize Dollar
Benin|बेनिन|BJ|XOF|CFA|West African CFA Franc
Bhutan|भूटान|BT|BTN|Nu.|Bhutanese Ngultrum
Bolivia|बोलीविया|BO|BOB|Bs.|Bolivian Boliviano
Bosnia and Herzegovina|बोस्निया और हर्जेगोविना|BA|BAM|KM|Convertible Mark
Botswana|बोत्सवाना|BW|BWP|P|Botswana Pula
Brazil|ब्राज़ील|BR|BRL|R$|Brazilian Real
Brunei|ब्रुनेई|BN|BND|$|Brunei Dollar
Bulgaria|बुल्गारिया|BG|EUR|€|Euro
Burkina Faso|बुर्किना फासो|BF|XOF|CFA|West African CFA Franc
Burundi|बुरुंडी|BI|BIF|FBu|Burundian Franc
Cabo Verde|केप वर्डे|CV|CVE|$|Cape Verdean Escudo
`;
/* =========================================================
   PART 2
   HUMAN BODY
   ========================================================= */

const HUMAN_BODY = [

    {
        name: "Brain",
        hindi: "मस्तिष्क",
        icon: "🧠",
        pronunciation: "ब्रेन",
        example: "The brain controls the body.",
        hindiExample: "मस्तिष्क शरीर को नियंत्रित करता है।",
        description: "The brain is the main control center of the human body.",
        hindiDescription: "मस्तिष्क मानव शरीर का मुख्य नियंत्रण केंद्र है।"
    },

    {
        name: "Eye",
        hindi: "आँख",
        icon: "👁️",
        pronunciation: "आई",
        example: "We use our eyes to see.",
        hindiExample: "हम अपनी आँखों से देखते हैं।",
        description: "Eyes help us see the world around us.",
        hindiDescription: "आँखें हमें अपने आसपास की दुनिया देखने में मदद करती हैं।"
    },

    {
        name: "Ear",
        hindi: "कान",
        icon: "👂",
        pronunciation: "ईयर",
        example: "We hear with our ears.",
        hindiExample: "हम अपने कानों से सुनते हैं।",
        description: "Ears help us hear sounds and maintain balance.",
        hindiDescription: "कान हमें आवाज़ सुनने और शरीर का संतुलन बनाए रखने में मदद करते हैं।"
    },

    {
        name: "Nose",
        hindi: "नाक",
        icon: "👃",
        pronunciation: "नोज़",
        example: "We smell with our nose.",
        hindiExample: "हम अपनी नाक से सूंघते हैं।",
        description: "The nose helps us smell and breathe.",
        hindiDescription: "नाक हमें सूंघने और साँस लेने में मदद करती है।"
    },

    {
        name: "Mouth",
        hindi: "मुँह",
        icon: "👄",
        pronunciation: "माउथ",
        example: "We eat food with our mouth.",
        hindiExample: "हम मुँह से भोजन खाते हैं।",
        description: "The mouth is used for eating, drinking and speaking.",
        hindiDescription: "मुँह का उपयोग भोजन खाने, पानी पीने और बोलने के लिए होता है।"
    },

    {
        name: "Teeth",
        hindi: "दाँत",
        icon: "🦷",
        pronunciation: "टीथ",
        example: "Teeth help us chew food.",
        hindiExample: "दाँत भोजन चबाने में मदद करते हैं।",
        description: "Teeth help break and chew food.",
        hindiDescription: "दाँत भोजन को काटने और चबाने में मदद करते हैं।"
    },

    {
        name: "Tongue",
        hindi: "जीभ",
        icon: "👅",
        pronunciation: "टंग",
        example: "The tongue helps us taste food.",
        hindiExample: "जीभ हमें भोजन का स्वाद पहचानने में मदद करती है।",
        description: "The tongue helps with taste, speaking and swallowing.",
        hindiDescription: "जीभ स्वाद, बोलने और भोजन निगलने में सहायता करती है।"
    },

    {
        name: "Neck",
        hindi: "गर्दन",
        icon: "🧍",
        pronunciation: "नेक",
        example: "The neck connects the head and body.",
        hindiExample: "गर्दन सिर और शरीर को जोड़ती है।",
        description: "The neck supports the head and allows it to move.",
        hindiDescription: "गर्दन सिर को सहारा देती है और उसे हिलाने में मदद करती है।"
    },

    {
        name: "Shoulder",
        hindi: "कंधा",
        icon: "💪",
        pronunciation: "शोल्डर",
        example: "The shoulder connects the arm to the body.",
        hindiExample: "कंधा हाथ को शरीर से जोड़ता है।",
        description: "The shoulder allows the arm to move freely.",
        hindiDescription: "कंधा हाथ को विभिन्न दिशाओं में हिलाने में मदद करता है।"
    },

    {
        name: "Arm",
        hindi: "बाँह",
        icon: "💪",
        pronunciation: "आर्म",
        example: "We use our arms to lift things.",
        hindiExample: "हम चीज़ें उठाने के लिए अपनी बाँहों का उपयोग करते हैं।",
        description: "Arms help us reach, lift and carry objects.",
        hindiDescription: "बाँहें चीज़ों तक पहुँचने, उठाने और ले जाने में मदद करती हैं।"
    },

    {
        name: "Hand",
        hindi: "हाथ",
        icon: "🖐️",
        pronunciation: "हैंड",
        example: "We use our hands to hold things.",
        hindiExample: "हम चीज़ें पकड़ने के लिए हाथों का उपयोग करते हैं।",
        description: "Hands help us hold, touch and perform many tasks.",
        hindiDescription: "हाथ चीज़ें पकड़ने, छूने और कई कार्य करने में मदद करते हैं।"
    },

    {
        name: "Finger",
        hindi: "उंगली",
        icon: "☝️",
        pronunciation: "फिंगर",
        example: "We use our fingers to write.",
        hindiExample: "हम उंगलियों से लिखते हैं।",
        description: "Fingers help us grip and perform precise movements.",
        hindiDescription: "उंगलियाँ चीज़ों को पकड़ने और छोटे-छोटे सटीक कार्य करने में मदद करती हैं।"
    },

    {
        name: "Chest",
        hindi: "छाती",
        icon: "🫀",
        pronunciation: "चेस्ट",
        example: "The chest protects important organs.",
        hindiExample: "छाती महत्वपूर्ण अंगों की रक्षा करती है।",
        description: "The chest contains and protects the heart and lungs.",
        hindiDescription: "छाती हृदय और फेफड़ों जैसे महत्वपूर्ण अंगों की रक्षा करती है।"
    },

    {
        name: "Heart",
        hindi: "हृदय",
        icon: "❤️",
        pronunciation: "हार्ट",
        example: "The heart pumps blood.",
        hindiExample: "हृदय रक्त पंप करता है।",
        description: "The heart pumps blood throughout the body.",
        hindiDescription: "हृदय पूरे शरीर में रक्त पंप करता है।"
    },

    {
        name: "Lungs",
        hindi: "फेफड़े",
        icon: "🫁",
        pronunciation: "लंग्स",
        example: "The lungs help us breathe.",
        hindiExample: "फेफड़े हमें साँस लेने में मदद करते हैं।",
        description: "The lungs are important organs of the respiratory system.",
        hindiDescription: "फेफड़े श्वसन तंत्र के महत्वपूर्ण अंग हैं।"
    },

    {
        name: "Stomach",
        hindi: "पेट",
        icon: "🫃",
        pronunciation: "स्टमक",
        example: "The stomach helps digest food.",
        hindiExample: "पेट भोजन पचाने में मदद करता है।",
        description: "The stomach helps break down food during digestion.",
        hindiDescription: "पेट पाचन के दौरान भोजन को तोड़ने में मदद करता है।"
    },

    {
        name: "Liver",
        hindi: "यकृत",
        icon: "🫀",
        pronunciation: "लिवर",
        example: "The liver performs many important functions.",
        hindiExample: "यकृत शरीर में कई महत्वपूर्ण कार्य करता है।",
        description: "The liver helps process nutrients and supports digestion and metabolism.",
        hindiDescription: "यकृत पोषक तत्वों को संसाधित करने तथा पाचन और चयापचय में सहायता करता है।"
    },

    {
        name: "Kidney",
        hindi: "गुर्दा",
        icon: "🫘",
        pronunciation: "किडनी",
        example: "Kidneys help filter the blood.",
        hindiExample: "गुर्दे रक्त को छानने में मदद करते हैं।",
        description: "The kidneys filter waste from the blood and help maintain fluid balance.",
        hindiDescription: "गुर्दे रक्त से अपशिष्ट पदार्थों को छानने और शरीर में द्रव संतुलन बनाए रखने में मदद करते हैं।"
    },

    {
        name: "Leg",
        hindi: "टांग",
        icon: "🦵",
        pronunciation: "लेग",
        example: "We use our legs to walk.",
        hindiExample: "हम चलने के लिए अपनी टांगों का उपयोग करते हैं।",
        description: "Legs support the body and help us walk and run.",
        hindiDescription: "टांगें शरीर को सहारा देती हैं और चलने तथा दौड़ने में मदद करती हैं।"
    },

    {
        name: "Knee",
        hindi: "घुटना",
        icon: "🦵",
        pronunciation: "नी",
        example: "The knee helps the leg bend.",
        hindiExample: "घुटना टांग को मोड़ने में मदद करता है।",
        description: "The knee is a joint that allows the leg to bend and move.",
        hindiDescription: "घुटना एक जोड़ है जो टांग को मोड़ने और हिलाने में मदद करता है।"
    },

    {
        name: "Foot",
        hindi: "पैर",
        icon: "🦶",
        pronunciation: "फुट",
        example: "Our feet help us stand and walk.",
        hindiExample: "हमारे पैर खड़े होने और चलने में मदद करते हैं।",
        description: "Feet support the body and help with movement and balance.",
        hindiDescription: "पैर शरीर को सहारा देते हैं और चलने तथा संतुलन में मदद करते हैं।"
    },

    {
        name: "Bone",
        hindi: "हड्डी",
        icon: "🦴",
        pronunciation: "बोन",
        example: "Bones support the body.",
        hindiExample: "हड्डियाँ शरीर को सहारा देती हैं।",
        description: "Bones form the skeleton and provide support and protection.",
        hindiDescription: "हड्डियाँ कंकाल बनाती हैं तथा शरीर को सहारा और सुरक्षा देती हैं।"
    },

    {
        name: "Skin",
        hindi: "त्वचा",
        icon: "🧍",
        pronunciation: "स्किन",
        example: "Skin covers the body.",
        hindiExample: "त्वचा शरीर को ढकती है।",
        description: "Skin is the outer covering of the body and helps protect it.",
        hindiDescription: "त्वचा शरीर की बाहरी परत है और शरीर की रक्षा करने में मदद करती है।"
    }
];


/* =========================================================
   ANIMALS
   ========================================================= */

const ANIMALS = [

    {
        name: "Lion",
        hindi: "शेर",
        icon: "🦁",
        pronunciation: "लायन",
        example: "The lion is a wild animal.",
        hindiExample: "शेर एक जंगली जानवर है।",
        description: "The lion is a large wild cat known for its mane.",
        hindiDescription: "शेर एक बड़ा जंगली बिल्ली प्रजाति का जानवर है, जिसे उसकी अयाल के लिए जाना जाता है।"
    },

    {
        name: "Tiger",
        hindi: "बाघ",
        icon: "🐅",
        pronunciation: "टाइगर",
        example: "The tiger has black stripes.",
        hindiExample: "बाघ के शरीर पर काली धारियाँ होती हैं।",
        description: "The tiger is a large wild cat with a striped coat.",
        hindiDescription: "बाघ एक बड़ा जंगली बिल्ली प्रजाति का जानवर है जिसके शरीर पर धारियाँ होती हैं।"
    },

    {
        name: "Elephant",
        hindi: "हाथी",
        icon: "🐘",
        pronunciation: "एलिफेंट",
        example: "The elephant has a long trunk.",
        hindiExample: "हाथी की लंबी सूंड होती है।",
        description: "The elephant is the largest living land animal.",
        hindiDescription: "हाथी वर्तमान में पृथ्वी पर पाया जाने वाला सबसे बड़ा स्थलीय जीव है।"
    },

    {
        name: "Dog",
        hindi: "कुत्ता",
        icon: "🐕",
        pronunciation: "डॉग",
        example: "A dog is a common domestic animal.",
        hindiExample: "कुत्ता एक सामान्य पालतू जानवर है।",
        description: "Dogs are domesticated animals often kept as companions.",
        hindiDescription: "कुत्ते पालतू जानवर हैं जिन्हें अक्सर साथी के रूप में रखा जाता है।"
    },

    {
        name: "Cat",
        hindi: "बिल्ली",
        icon: "🐈",
        pronunciation: "कैट",
        example: "The cat likes to play.",
        hindiExample: "बिल्ली खेलना पसंद करती है।",
        description: "Cats are small domesticated mammals.",
        hindiDescription: "बिल्लियाँ छोटे पालतू स्तनधारी जीव हैं।"
    },

    {
        name: "Cow",
        hindi: "गाय",
        icon: "🐄",
        pronunciation: "काउ",
        example: "The cow eats grass.",
        hindiExample: "गाय घास खाती है।",
        description: "Cows are domesticated mammals commonly raised for milk.",
        hindiDescription: "गाय पालतू स्तनधारी हैं जिन्हें सामान्यतः दूध के लिए पाला जाता है।"
    },

    {
        name: "Horse",
        hindi: "घोड़ा",
        icon: "🐎",
        pronunciation: "हॉर्स",
        example: "The horse can run fast.",
        hindiExample: "घोड़ा तेज दौड़ सकता है।",
        description: "Horses are strong domesticated animals used for riding and other activities.",
        hindiDescription: "घोड़े मजबूत पालतू जानवर हैं जिनका उपयोग सवारी और अन्य कार्यों में किया जाता है।"
    },

    {
        name: "Goat",
        hindi: "बकरी",
        icon: "🐐",
        pronunciation: "गोट",
        example: "The goat eats plants.",
        hindiExample: "बकरी पौधे खाती है।",
        description: "Goats are domesticated mammals commonly raised for milk and meat.",
        hindiDescription: "बकरियाँ पालतू स्तनधारी हैं जिन्हें दूध और मांस के लिए पाला जाता है।"
    },

    {
        name: "Deer",
        hindi: "हिरण",
        icon: "🦌",
        pronunciation: "डियर",
        example: "The deer lives in forests.",
        hindiExample: "हिरण जंगलों में रहता है।",
        description: "Deer are hoofed mammals found in many parts of the world.",
        hindiDescription: "हिरण खुर वाले स्तनधारी जीव हैं जो दुनिया के कई क्षेत्रों में पाए जाते हैं।"
    },

    {
        name: "Monkey",
        hindi: "बंदर",
        icon: "🐒",
        pronunciation: "मंकी",
        example: "The monkey can climb trees.",
        hindiExample: "बंदर पेड़ों पर चढ़ सकता है।",
        description: "Monkeys are intelligent primates that can climb and move through trees.",
        hindiDescription: "बंदर बुद्धिमान प्राइमेट हैं जो पेड़ों पर चढ़ और उनमें घूम सकते हैं।"
    },

    {
        name: "Bear",
        hindi: "भालू",
        icon: "🐻",
        pronunciation: "बेयर",
        example: "The bear is a large mammal.",
        hindiExample: "भालू एक बड़ा स्तनधारी जीव है।",
        description: "Bears are large mammals found in different habitats.",
        hindiDescription: "भालू बड़े स्तनधारी जीव हैं जो विभिन्न आवासों में पाए जाते हैं।"
    },

    {
        name: "Panda",
        hindi: "पांडा",
        icon: "🐼",
        pronunciation: "पांडा",
        example: "Pandas eat a lot of bamboo.",
        hindiExample: "पांडा बहुत बाँस खाता है।",
        description: "The giant panda is known for its black-and-white coat and bamboo diet.",
        hindiDescription: "विशाल पांडा अपने काले-सफेद शरीर और बाँस के भोजन के लिए प्रसिद्ध है।"
    },

    {
        name: "Giraffe",
        hindi: "जिराफ",
        icon: "🦒",
        pronunciation: "जिराफ",
        example: "The giraffe has a very long neck.",
        hindiExample: "जिराफ की गर्दन बहुत लंबी होती है।",
        description: "The giraffe is known for its long neck and tall body.",
        hindiDescription: "जिराफ अपनी लंबी गर्दन और ऊँचे शरीर के लिए जाना जाता है।"
    },

    {
        name: "Zebra",
        hindi: "ज़ेब्रा",
        icon: "🦓",
        pronunciation: "ज़ीब्रा",
        example: "The zebra has black and white stripes.",
        hindiExample: "ज़ेब्रा के शरीर पर काली और सफेद धारियाँ होती हैं।",
        description: "Zebras are African animals known for their distinctive stripes.",
        hindiDescription: "ज़ेब्रा अफ्रीकी जानवर हैं जो अपनी विशेष धारियों के लिए प्रसिद्ध हैं।"
    },

    {
        name: "Rabbit",
        hindi: "खरगोश",
        icon: "🐇",
        pronunciation: "रैबिट",
        example: "The rabbit has long ears.",
        hindiExample: "खरगोश के लंबे कान होते हैं।",
        description: "Rabbits are small mammals with long ears and strong hind legs.",
        hindiDescription: "खरगोश छोटे स्तनधारी जीव हैं जिनके लंबे कान और मजबूत पिछली टाँगें होती हैं।"
    },

    {
        name: "Camel",
        hindi: "ऊँट",
        icon: "🐪",
        pronunciation: "कैमल",
        example: "The camel can live in dry regions.",
        hindiExample: "ऊँट शुष्क क्षेत्रों में रह सकता है।",
        description: "Camels are adapted to life in dry and desert environments.",
        hindiDescription: "ऊँट शुष्क और रेगिस्तानी वातावरण में रहने के लिए अनुकूलित होते हैं।"
    },

    {
        name: "Fox",
        hindi: "लोमड़ी",
        icon: "🦊",
        pronunciation: "फॉक्स",
        example: "The fox is a clever wild animal.",
        hindiExample: "लोमड़ी एक जंगली जानवर है।",
        description: "Foxes are small to medium-sized mammals belonging to the dog family.",
        hindiDescription: "लोमड़ी कुत्ते के परिवार से संबंधित छोटे से मध्यम आकार के स्तनधारी जीव हैं।"
    },

    {
        name: "Wolf",
        hindi: "भेड़िया",
        icon: "🐺",
        pronunciation: "वुल्फ",
        example: "Wolves live and hunt in groups.",
        hindiExample: "भेड़िए समूह में रहते और शिकार करते हैं।",
        description: "Wolves are wild members of the dog family.",
        hindiDescription: "भेड़िए कुत्ते के परिवार के जंगली सदस्य हैं।"
    },

    {
        name: "Rhinoceros",
        hindi: "गैंडा",
        icon: "🦏",
        pronunciation: "राइनोसिरस",
        example: "The rhinoceros has thick skin.",
        hindiExample: "गैंडे की त्वचा मोटी होती है।",
        description: "Rhinoceroses are large mammals with thick skin and horn-like structures on the nose.",
        hindiDescription: "गैंडे बड़े स्तनधारी जीव हैं जिनकी त्वचा मोटी होती है और नाक पर सींग जैसी संरचना होती है।"
    },

    {
        name: "Hippopotamus",
        hindi: "दरियाई घोड़ा",
        icon: "🦛",
        pronunciation: "हिप्पोपोटेमस",
        example: "The hippopotamus spends much time in water.",
        hindiExample: "दरियाई घोड़ा पानी में काफी समय बिताता है।",
        description: "The hippopotamus is a large semi-aquatic mammal.",
        hindiDescription: "दरियाई घोड़ा एक बड़ा अर्ध-जलीय स्तनधारी जीव है।"
    },

    {
        name: "Kangaroo",
        hindi: "कंगारू",
        icon: "🦘",
        pronunciation: "कंगारू",
        example: "The kangaroo moves by jumping.",
        hindiExample: "कंगारू छलांग लगाकर चलता है।",
        description: "Kangaroos are Australian marsupials known for powerful hind legs.",
        hindiDescription: "कंगारू ऑस्ट्रेलिया के मार्सुपियल जीव हैं जो अपनी मजबूत पिछली टाँगों के लिए जाने जाते हैं।"
    },

    {
        name: "Gorilla",
        hindi: "गोरिल्ला",
        icon: "🦍",
        pronunciation: "गोरिल्ला",
        example: "The gorilla is a large primate.",
        hindiExample: "गोरिल्ला एक बड़ा प्राइमेट है।",
        description: "Gorillas are large primates native to African forests.",
        hindiDescription: "गोरिल्ला बड़े प्राइमेट हैं जो अफ्रीकी जंगलों में पाए जाते हैं।"
    },

    {
        name: "Cheetah",
        hindi: "चीता",
        icon: "🐆",
        pronunciation: "चीता",
        example: "The cheetah is a very fast land animal.",
        hindiExample: "चीता बहुत तेज़ दौड़ने वाला स्थलीय जानवर है।",
        description: "The cheetah is known for its exceptional running speed.",
        hindiDescription: "चीता अपनी बहुत तेज़ दौड़ने की क्षमता के लिए जाना जाता है।"
    }
];


/* =========================================================
   BIRDS
   ========================================================= */

const BIRDS = [

    {
        name: "Peacock",
        hindi: "मोर",
        icon: "🦚",
        pronunciation: "पीकॉक",
        example: "The peacock is the national bird of India.",
        hindiExample: "मोर भारत का राष्ट्रीय पक्षी है।",
        description: "The peacock is known for its beautiful colorful tail feathers.",
        hindiDescription: "मोर अपने सुंदर और रंग-बिरंगे पंखों के लिए प्रसिद्ध है।"
    },

    {
        name: "Parrot",
        hindi: "तोता",
        icon: "🦜",
        pronunciation: "पैरट",
        example: "The parrot has a curved beak.",
        hindiExample: "तोते की चोंच मुड़ी हुई होती है।",
        description: "Parrots are colorful birds known for their strong curved beaks.",
        hindiDescription: "तोते रंग-बिरंगे पक्षी हैं जिनकी मजबूत और मुड़ी हुई चोंच होती है।"
    },

    {
        name: "Eagle",
        hindi: "गरुड़ / बाज़",
        icon: "🦅",
        pronunciation: "ईगल",
        example: "The eagle has powerful wings.",
        hindiExample: "गरुड़ के पंख शक्तिशाली होते हैं।",
        description: "Eagles are large birds of prey with strong eyesight and powerful wings.",
        hindiDescription: "गरुड़ बड़े शिकारी पक्षी हैं जिनकी दृष्टि और पंख शक्तिशाली होते हैं।"
    },

    {
        name: "Sparrow",
        hindi: "गौरैया",
        icon: "🐦",
        pronunciation: "स्पैरो",
        example: "The sparrow is a small common bird.",
        hindiExample: "गौरैया एक छोटी सामान्य चिड़िया है।",
        description: "Sparrows are small birds commonly found near human settlements.",
        hindiDescription: "गौरैया छोटी चिड़ियाँ हैं जो अक्सर मानव बस्तियों के आसपास पाई जाती हैं।"
    },

    {
        name: "Owl",
        hindi: "उल्लू",
        icon: "🦉",
        pronunciation: "आउल",
        example: "Owls are often active at night.",
        hindiExample: "उल्लू अक्सर रात में सक्रिय होते हैं।",
        description: "Owls are birds known for their large eyes and nighttime activity.",
        hindiDescription: "उल्लू अपने बड़े आँखों और रात में सक्रिय रहने के लिए जाने जाते हैं।"
    },

    {
        name: "Penguin",
        hindi: "पेंगुइन",
        icon: "🐧",
        pronunciation: "पेंगुइन",
        example: "Penguins are excellent swimmers.",
        hindiExample: "पेंगुइन बहुत अच्छे तैराक होते हैं।",
        description: "Penguins are flightless birds adapted to swimming.",
        hindiDescription: "पेंगुइन उड़ नहीं सकते और तैरने के लिए अनुकूलित पक्षी हैं।"
    },

    {
        name: "Flamingo",
        hindi: "राजहंस / फ्लेमिंगो",
        icon: "🦩",
        pronunciation: "फ्लेमिंगो",
        example: "Flamingos have long legs.",
        hindiExample: "फ्लेमिंगो के लंबे पैर होते हैं।",
        description: "Flamingos are known for their long legs and pink-colored feathers.",
        hindiDescription: "फ्लेमिंगो अपने लंबे पैरों और गुलाबी पंखों के लिए प्रसिद्ध हैं।"
    },

    {
        name: "Duck",
        hindi: "बतख",
        icon: "🦆",
        pronunciation: "डक",
        example: "Ducks can swim in water.",
        hindiExample: "बतख पानी में तैर सकती है।",
        description: "Ducks are waterfowl with webbed feet.",
        hindiDescription: "बतख जलपक्षी हैं जिनके पैरों में झिल्ली होती है।"
    },

    {
        name: "Swan",
        hindi: "हंस",
        icon: "🦢",
        pronunciation: "स्वान",
        example: "The swan has a long neck.",
        hindiExample: "हंस की गर्दन लंबी होती है।",
        description: "Swans are large water birds with long necks.",
        hindiDescription: "हंस बड़े जलपक्षी हैं जिनकी गर्दन लंबी होती है।"
    },

    {
        name: "Crow",
        hindi: "कौआ",
        icon: "🐦‍⬛",
        pronunciation: "क्रो",
        example: "The crow is a common intelligent bird.",
        hindiExample: "कौआ एक सामान्य बुद्धिमान पक्षी है।",
        description: "Crows are intelligent birds found in many parts of the world.",
        hindiDescription: "कौए बुद्धिमान पक्षी हैं जो दुनिया के कई हिस्सों में पाए जाते हैं।"
    },

    {
        name: "Pigeon",
        hindi: "कबूतर",
        icon: "🐦",
        pronunciation: "पिजन",
        example: "Pigeons are commonly seen in cities.",
        hindiExample: "कबूतर शहरों में अक्सर दिखाई देते हैं।",
        description: "Pigeons are common birds that live in both urban and rural areas.",
        hindiDescription: "कबूतर सामान्य पक्षी हैं जो शहरी और ग्रामीण दोनों क्षेत्रों में पाए जाते हैं।"
    },

    {
        name: "Kingfisher",
        hindi: "रामचिरैया",
        icon: "🐦",
        pronunciation: "किंगफिशर",
        example: "The kingfisher often catches fish.",
        hindiExample: "रामचिरैया अक्सर मछली पकड़ती है।",
        description: "Kingfishers are birds known for catching fish and other aquatic prey.",
        hindiDescription: "रामचिरैया मछली और अन्य जलीय जीव पकड़ने के लिए प्रसिद्ध पक्षी हैं।"
    },

    {
        name: "Woodpecker",
        hindi: "कठफोड़वा",
        icon: "🐦",
        pronunciation: "वुडपेकर",
        example: "The woodpecker pecks tree trunks.",
        hindiExample: "कठफोड़वा पेड़ के तनों पर चोंच मारता है।",
        description: "Woodpeckers use their strong beaks to peck tree trunks.",
        hindiDescription: "कठफोड़वा अपनी मजबूत चोंच से पेड़ों के तनों पर चोंच मारते हैं।"
    },

    {
        name: "Ostrich",
        hindi: "शुतुरमुर्ग",
        icon: "🐦",
        pronunciation: "ऑस्ट्रिच",
        example: "The ostrich is a very large flightless bird.",
        hindiExample: "शुतुरमुर्ग बहुत बड़ा उड़ानहीन पक्षी है।",
        description: "The ostrich is the world's largest living bird.",
        hindiDescription: "शुतुरमुर्ग दुनिया का सबसे बड़ा जीवित पक्षी है।"
    },

    {
        name: "Hawk",
        hindi: "बाज़",
        icon: "🦅",
        pronunciation: "हॉक",
        example: "The hawk has sharp eyesight.",
        hindiExample: "बाज़ की दृष्टि तेज़ होती है।",
        description: "Hawks are birds of prey with strong claws and excellent vision.",
        hindiDescription: "बाज़ शिकारी पक्षी हैं जिनके पंजे मजबूत और दृष्टि तेज़ होती है।"
    }

];


/* =========================================================
   PART 2 END
   ========================================================= */
/* =========================================================
   PART 3
   COUNTRIES + FLAGS
   ========================================================= */


/* =========================================================
   CONVERT COUNTRY DATABASE
   ========================================================= */

const COUNTRIES = COUNTRY_DATABASE
    .trim()
    .split("\n")
    .map(line => {

        const [
            name,
            hindi,
            code,
            currencyCode,
            currencySymbol,
            currencyName
        ] = line.split("|");

        return {
            name: name.trim(),
            hindi: hindi.trim(),
            code: code.trim(),
            currencyCode: currencyCode.trim(),
            currencySymbol: currencySymbol.trim(),
            currencyName: currencyName.trim(),

            flag: `https://flagcdn.com/w320/${code.toLowerCase()}.png`,

            icon: "🌍",

            pronunciation: name,

            description:
                `${name} is a country with its own culture, geography and national identity.`,

            hindiDescription:
                `${hindi} एक स्वतंत्र देश है जिसकी अपनी संस्कृति, भौगोलिक विशेषताएँ और राष्ट्रीय पहचान है।`,

            example:
                `The country is ${name}.`,

            hindiExample:
                `इस देश का नाम ${hindi} है।`
        };

    });


/* =========================================================
   ADD MORE COUNTRY DATA
   ========================================================= */

const MORE_COUNTRIES = [

    ["Cambodia", "कंबोडिया", "KH", "KHR", "៛", "Cambodian Riel"],
    ["Cameroon", "कैमरून", "CM", "XAF", "FCFA", "Central African CFA Franc"],
    ["Canada", "कनाडा", "CA", "CAD", "$", "Canadian Dollar"],
    ["Central African Republic", "मध्य अफ्रीकी गणराज्य", "CF", "XAF", "FCFA", "Central African CFA Franc"],
    ["Chad", "चाड", "TD", "XAF", "FCFA", "Central African CFA Franc"],
    ["Chile", "चिली", "CL", "CLP", "$", "Chilean Peso"],
    ["China", "चीन", "CN", "CNY", "¥", "Chinese Yuan"],
    ["Colombia", "कोलंबिया", "CO", "COP", "$", "Colombian Peso"],
    ["Comoros", "कोमोरोस", "KM", "KMF", "CF", "Comorian Franc"],
    ["Congo", "कांगो", "CG", "XAF", "FCFA", "Central African CFA Franc"],
    ["Costa Rica", "कोस्टा रिका", "CR", "CRC", "₡", "Costa Rican Colón"],
    ["Croatia", "क्रोएशिया", "HR", "EUR", "€", "Euro"],
    ["Cuba", "क्यूबा", "CU", "CUP", "$", "Cuban Peso"],
    ["Cyprus", "साइप्रस", "CY", "EUR", "€", "Euro"],
    ["Czechia", "चेकिया", "CZ", "CZK", "Kč", "Czech Koruna"],

    ["Denmark", "डेनमार्क", "DK", "DKK", "kr", "Danish Krone"],
    ["Djibouti", "जिबूती", "DJ", "DJF", "Fdj", "Djiboutian Franc"],
    ["Dominica", "डोमिनिका", "DM", "XCD", "$", "East Caribbean Dollar"],
    ["Dominican Republic", "डोमिनिकन गणराज्य", "DO", "DOP", "$", "Dominican Peso"],

    ["Ecuador", "इक्वाडोर", "EC", "USD", "$", "United States Dollar"],
    ["Egypt", "मिस्र", "EG", "EGP", "£", "Egyptian Pound"],
    ["El Salvador", "अल साल्वाडोर", "SV", "USD", "$", "United States Dollar"],
    ["Equatorial Guinea", "इक्वेटोरियल गिनी", "GQ", "XAF", "FCFA", "Central African CFA Franc"],
    ["Eritrea", "इरिट्रिया", "ER", "ERN", "Nfk", "Eritrean Nakfa"],
    ["Estonia", "एस्टोनिया", "EE", "EUR", "€", "Euro"],
    ["Eswatini", "एस्वातिनी", "SZ", "SZL", "L", "Swazi Lilangeni"],
    ["Ethiopia", "इथियोपिया", "ET", "ETB", "Br", "Ethiopian Birr"],

    ["Fiji", "फ़िजी", "FJ", "FJD", "$", "Fijian Dollar"],
    ["Finland", "फ़िनलैंड", "FI", "EUR", "€", "Euro"],
    ["France", "फ्रांस", "FR", "EUR", "€", "Euro"],

    ["Gabon", "गैबॉन", "GA", "XAF", "FCFA", "Central African CFA Franc"],
    ["Gambia", "गाम्बिया", "GM", "GMD", "D", "Gambian Dalasi"],
    ["Georgia", "जॉर्जिया", "GE", "GEL", "₾", "Georgian Lari"],
    ["Germany", "जर्मनी", "DE", "EUR", "€", "Euro"],
    ["Ghana", "घाना", "GH", "GHS", "₵", "Ghanaian Cedi"],
    ["Greece", "ग्रीस", "GR", "EUR", "€", "Euro"],
    ["Grenada", "ग्रेनाडा", "GD", "XCD", "$", "East Caribbean Dollar"],
    ["Guatemala", "ग्वाटेमाला", "GT", "GTQ", "Q", "Guatemalan Quetzal"],
    ["Guinea", "गिनी", "GN", "GNF", "FG", "Guinean Franc"],
    ["Guyana", "गुयाना", "GY", "GYD", "$", "Guyanese Dollar"],

    ["Haiti", "हैती", "HT", "HTG", "G", "Haitian Gourde"],
    ["Honduras", "होंडुरास", "HN", "HNL", "L", "Honduran Lempira"],
    ["Hungary", "हंगरी", "HU", "HUF", "Ft", "Hungarian Forint"],

    ["Iceland", "आइसलैंड", "IS", "ISK", "kr", "Icelandic Króna"],
    ["India", "भारत", "IN", "INR", "₹", "Indian Rupee"],
    ["Indonesia", "इंडोनेशिया", "ID", "IDR", "Rp", "Indonesian Rupiah"],
    ["Iran", "ईरान", "IR", "IRR", "﷼", "Iranian Rial"],
    ["Iraq", "इराक", "IQ", "IQD", "ع.د", "Iraqi Dinar"],
    ["Ireland", "आयरलैंड", "IE", "EUR", "€", "Euro"],
    ["Israel", "इज़राइल", "IL", "ILS", "₪", "Israeli New Shekel"],
    ["Italy", "इटली", "IT", "EUR", "€", "Euro"],

    ["Jamaica", "जमैका", "JM", "JMD", "$", "Jamaican Dollar"],
    ["Japan", "जापान", "JP", "JPY", "¥", "Japanese Yen"],
    ["Jordan", "जॉर्डन", "JO", "JOD", "د.ا", "Jordanian Dinar"],

    ["Kazakhstan", "कज़ाख़स्तान", "KZ", "KZT", "₸", "Kazakhstani Tenge"],
    ["Kenya", "केन्या", "KE", "KES", "KSh", "Kenyan Shilling"],
    ["Kiribati", "किरिबाती", "KI", "AUD", "$", "Australian Dollar"],
    ["Kuwait", "कुवैत", "KW", "KWD", "د.ك", "Kuwaiti Dinar"],
    ["Kyrgyzstan", "किर्गिज़स्तान", "KG", "KGS", "с", "Kyrgyzstani Som"],

    ["Laos", "लाओस", "LA", "LAK", "₭", "Lao Kip"],
    ["Latvia", "लातविया", "LV", "EUR", "€", "Euro"],
    ["Lebanon", "लेबनान", "LB", "LBP", "ل.ل", "Lebanese Pound"],
    ["Lesotho", "लेसोथो", "LS", "LSL", "L", "Lesotho Loti"],
    ["Liberia", "लाइबेरिया", "LR", "LRD", "$", "Liberian Dollar"],
    ["Libya", "लीबिया", "LY", "LYD", "ل.د", "Libyan Dinar"],
    ["Liechtenstein", "लिकटेंस्टीन", "LI", "CHF", "Fr", "Swiss Franc"],
    ["Lithuania", "लिथुआनिया", "LT", "EUR", "€", "Euro"],
    ["Luxembourg", "लक्ज़मबर्ग", "LU", "EUR", "€", "Euro"],

    ["Madagascar", "मेडागास्कर", "MG", "MGA", "Ar", "Malagasy Ariary"],
    ["Malawi", "मलावी", "MW", "MWK", "MK", "Malawian Kwacha"],
    ["Malaysia", "मलेशिया", "MY", "MYR", "RM", "Malaysian Ringgit"],
    ["Maldives", "मालदीव", "MV", "MVR", "Rf", "Maldivian Rufiyaa"],
    ["Mali", "माली", "ML", "XOF", "CFA", "West African CFA Franc"],
    ["Malta", "माल्टा", "MT", "EUR", "€", "Euro"],
    ["Marshall Islands", "मार्शल द्वीपसमूह", "MH", "USD", "$", "United States Dollar"],
    ["Mauritania", "मॉरिटानिया", "MR", "MRU", "UM", "Mauritanian Ouguiya"],
    ["Mauritius", "मॉरीशस", "MU", "MUR", "₨", "Mauritian Rupee"],
    ["Mexico", "मेक्सिको", "MX", "MXN", "$", "Mexican Peso"],
    ["Micronesia", "माइक्रोनेशिया", "FM", "USD", "$", "United States Dollar"],
    ["Moldova", "मोल्दोवा", "MD", "MDL", "L", "Moldovan Leu"],
    ["Monaco", "मोनाको", "MC", "EUR", "€", "Euro"],
    ["Mongolia", "मंगोलिया", "MN", "MNT", "₮", "Mongolian Tögrög"],
    ["Montenegro", "मोंटेनेग्रो", "ME", "EUR", "€", "Euro"],
    ["Morocco", "मोरक्को", "MA", "MAD", "د.م.", "Moroccan Dirham"],
    ["Mozambique", "मोज़ाम्बिक", "MZ", "MZN", "MT", "Mozambican Metical"],

    ["Myanmar", "म्यांमार", "MM", "MMK", "K", "Myanmar Kyat"],

    ["Namibia", "नामीबिया", "NA", "NAD", "$", "Namibian Dollar"],
    ["Nauru", "नाउरू", "NR", "AUD", "$", "Australian Dollar"],
    ["Nepal", "नेपाल", "NP", "NPR", "₨", "Nepalese Rupee"],
    ["Netherlands", "नीदरलैंड", "NL", "EUR", "€", "Euro"],
    ["New Zealand", "न्यूज़ीलैंड", "NZ", "NZD", "$", "New Zealand Dollar"],
    ["Nicaragua", "निकारागुआ", "NI", "NIO", "C$", "Nicaraguan Córdoba"],
    ["Niger", "नाइजर", "NE", "XOF", "CFA", "West African CFA Franc"],
    ["Nigeria", "नाइजीरिया", "NG", "NGN", "₦", "Nigerian Naira"],
    ["North Korea", "उत्तर कोरिया", "KP", "KPW", "₩", "North Korean Won"],
    ["North Macedonia", "उत्तर मैसेडोनिया", "MK", "MKD", "ден", "Macedonian Denar"],
    ["Norway", "नॉर्वे", "NO", "NOK", "kr", "Norwegian Krone"],

    ["Oman", "ओमान", "OM", "OMR", "ر.ع.", "Omani Rial"],

    ["Pakistan", "पाकिस्तान", "PK", "PKR", "₨", "Pakistani Rupee"],
    ["Palau", "पलाऊ", "PW", "USD", "$", "United States Dollar"],
    ["Panama", "पनामा", "PA", "PAB", "B/.", "Panamanian Balboa"],
    ["Papua New Guinea", "पापुआ न्यू गिनी", "PG", "PGK", "K", "Papua New Guinean Kina"],
    ["Paraguay", "पैराग्वे", "PY", "PYG", "₲", "Paraguayan Guaraní"],
    ["Peru", "पेरू", "PE", "PEN", "S/", "Peruvian Sol"],
    ["Philippines", "फ़िलीपींस", "PH", "PHP", "₱", "Philippine Peso"],
    ["Poland", "पोलैंड", "PL", "PLN", "zł", "Polish Złoty"],
    ["Portugal", "पुर्तगाल", "PT", "EUR", "€", "Euro"],

    ["Qatar", "क़तर", "QA", "QAR", "ر.ق", "Qatari Riyal"],

    ["Romania", "रोमानिया", "RO", "RON", "lei", "Romanian Leu"],
    ["Russia", "रूस", "RU", "RUB", "₽", "Russian Ruble"],
    ["Rwanda", "रवांडा", "RW", "RWF", "FRw", "Rwandan Franc"],

    ["Saint Kitts and Nevis", "सेंट किट्स और नेविस", "KN", "XCD", "$", "East Caribbean Dollar"],
    ["Saint Lucia", "सेंट लूसिया", "LC", "XCD", "$", "East Caribbean Dollar"],
    ["Saint Vincent and the Grenadines", "सेंट विंसेंट और ग्रेनेडाइंस", "VC", "XCD", "$", "East Caribbean Dollar"],
    ["Samoa", "समोआ", "WS", "WST", "T", "Samoan Tālā"],
    ["San Marino", "सैन मैरिनो", "SM", "EUR", "€", "Euro"],
    ["Sao Tome and Principe", "साओ टोमे और प्रिंसिपे", "ST", "STN", "Db", "São Tomé and Príncipe Dobra"],
    ["Saudi Arabia", "सऊदी अरब", "SA", "SAR", "﷼", "Saudi Riyal"],
    ["Senegal", "सेनेगल", "SN", "XOF", "CFA", "West African CFA Franc"],
    ["Serbia", "सर्बिया", "RS", "RSD", "дин.", "Serbian Dinar"],
    ["Seychelles", "सेशेल्स", "SC", "SCR", "₨", "Seychellois Rupee"],
    ["Sierra Leone", "सिएरा लियोन", "SL", "SLE", "Le", "Sierra Leonean Leone"],
    ["Singapore", "सिंगापुर", "SG", "SGD", "$", "Singapore Dollar"],
    ["Slovakia", "स्लोवाकिया", "SK", "EUR", "€", "Euro"],
    ["Slovenia", "स्लोवेनिया", "SI", "EUR", "€", "Euro"],
    ["Solomon Islands", "सोलोमन द्वीपसमूह", "SB", "SBD", "$", "Solomon Islands Dollar"],
    ["Somalia", "सोमालिया", "SO", "SOS", "Sh", "Somali Shilling"],
    ["South Africa", "दक्षिण अफ्रीका", "ZA", "ZAR", "R", "South African Rand"],
    ["South Korea", "दक्षिण कोरिया", "KR", "KRW", "₩", "South Korean Won"],
    ["South Sudan", "दक्षिण सूडान", "SS", "SSP", "£", "South Sudanese Pound"],
    ["Spain", "स्पेन", "ES", "EUR", "€", "Euro"],
    ["Sri Lanka", "श्रीलंका", "LK", "LKR", "₨", "Sri Lankan Rupee"],
    ["Sudan", "सूडान", "SD", "SDG", "ج.س.", "Sudanese Pound"],
    ["Suriname", "सूरीनाम", "SR", "SRD", "$", "Surinamese Dollar"],
    ["Sweden", "स्वीडन", "SE", "SEK", "kr", "Swedish Krona"],
    ["Switzerland", "स्विट्ज़रलैंड", "CH", "CHF", "Fr", "Swiss Franc"],
    ["Syria", "सीरिया", "SY", "SYP", "£", "Syrian Pound"],

    ["Taiwan", "ताइवान", "TW", "TWD", "NT$", "New Taiwan Dollar"],
    ["Tajikistan", "ताजिकिस्तान", "TJ", "TJS", "SM", "Tajikistani Somoni"],
    ["Tanzania", "तंज़ानिया", "TZ", "TZS", "TSh", "Tanzanian Shilling"],
    ["Thailand", "थाईलैंड", "TH", "THB", "฿", "Thai Baht"],
    ["Timor-Leste", "तिमोर-लेस्ते", "TL", "USD", "$", "United States Dollar"],
    ["Togo", "टोगो", "TG", "XOF", "CFA", "West African CFA Franc"],
    ["Tonga", "टोंगा", "TO", "TOP", "T$", "Tongan Paʻanga"],
    ["Trinidad and Tobago", "त्रिनिदाद और टोबैगो", "TT", "TTD", "$", "Trinidad and Tobago Dollar"],
    ["Tunisia", "ट्यूनीशिया", "TN", "TND", "د.ت", "Tunisian Dinar"],
    ["Türkiye", "तुर्किये", "TR", "TRY", "₺", "Turkish Lira"],
    ["Turkmenistan", "तुर्कमेनिस्तान", "TM", "TMT", "m", "Turkmenistani Manat"],
    ["Tuvalu", "तुवालु", "TV", "AUD", "$", "Australian Dollar"],

    ["Uganda", "युगांडा", "UG", "UGX", "USh", "Ugandan Shilling"],
    ["Ukraine", "यूक्रेन", "UA", "UAH", "₴", "Ukrainian Hryvnia"],
    ["United Arab Emirates", "संयुक्त अरब अमीरात", "AE", "AED", "د.إ", "UAE Dirham"],
    ["United Kingdom", "यूनाइटेड किंगडम", "GB", "GBP", "£", "Pound Sterling"],
    ["United States", "संयुक्त राज्य अमेरिका", "US", "USD", "$", "United States Dollar"],
    ["Uruguay", "उरुग्वे", "UY", "UYU", "$U", "Uruguayan Peso"],
    ["Uzbekistan", "उज़्बेकिस्तान", "UZ", "UZS", "so'm", "Uzbekistani Som"],

    ["Vanuatu", "वानुआतु", "VU", "VUV", "VT", "Vanuatu Vatu"],
    ["Vatican City", "वेटिकन सिटी", "VA", "EUR", "€", "Euro"],
    ["Venezuela", "वेनेज़ुएला", "VE", "VES", "Bs.S", "Venezuelan Bolívar"],
    ["Vietnam", "वियतनाम", "VN", "VND", "₫", "Vietnamese Đồng"],

    ["Yemen", "यमन", "YE", "YER", "﷼", "Yemeni Rial"],

    ["Zambia", "ज़ाम्बिया", "ZM", "ZMW", "ZK", "Zambian Kwacha"],
    ["Zimbabwe", "ज़िम्बाब्वे", "ZW", "ZWG", "ZiG", "Zimbabwe Gold"]

];


/* =========================================================
   ADD MORE COUNTRIES TO MAIN DATABASE
   ========================================================= */

MORE_COUNTRIES.forEach(item => {

    const [
        name,
        hindi,
        code,
        currencyCode,
        currencySymbol,
        currencyName
    ] = item;

    COUNTRIES.push({

        name,
        hindi,
        code,
        currencyCode,
        currencySymbol,
        currencyName,

        flag:
            `https://flagcdn.com/w320/${code.toLowerCase()}.png`,

        icon: "🌍",

        pronunciation: name,

        description:
            `${name} is a country with its own culture, geography and national identity.`,

        hindiDescription:
            `${hindi} एक देश है जिसकी अपनी संस्कृति, भौगोलिक विशेषताएँ और राष्ट्रीय पहचान है।`,

        example:
            `The country is ${name}.`,

        hindiExample:
            `इस देश का नाम ${hindi} है।`
    });

});


/* =========================================================
   REMOVE DUPLICATES
   ========================================================= */

const UNIQUE_COUNTRIES = [];

const COUNTRY_CODES = new Set();

COUNTRIES.forEach(country => {

    if (!COUNTRY_CODES.has(country.code)) {

        COUNTRY_CODES.add(country.code);

        UNIQUE_COUNTRIES.push(country);

    }

});


/* =========================================================
   FINAL COUNTRY ARRAY
   ========================================================= */

COUNTRIES.length = 0;

UNIQUE_COUNTRIES.forEach(country => {
    COUNTRIES.push(country);
});


/* =========================================================
   FLAG DATA
   ========================================================= */

const FLAGS = COUNTRIES.map(country => ({

    name: country.name,

    hindi: country.hindi,

    code: country.code,

    flag:
        `https://flagcdn.com/w320/${country.code.toLowerCase()}.png`,

    icon: "🚩",

    description:
        `${country.name} का national flag.`,

    hindiDescription:
        `${country.hindi} का राष्ट्रीय ध्वज।`

}));


/* =========================================================
   COUNTRY CARD DATA
   ========================================================= */

function getCountryData(country) {

    if (!country) {
        return null;
    }

    return {

        title:
            `${country.name} — ${country.hindi}`,

        icon:
            country.flag,

        isFlag:
            true,

        pronunciation:
            country.pronunciation,

        description:
            country.description,

        hindiDescription:
            country.hindiDescription,

        example:
            country.example,

        hindiExample:
            country.hindiExample,

        extra: {

            "Country Code":
                country.code,

            "Currency":
                `${country.currencyName} (${country.currencyCode})`,

            "Currency Symbol":
                country.currencySymbol

        }

    };

}


/* =========================================================
   COUNTRY SEARCH
   ========================================================= */

function searchCountries(query) {

    if (!query) {
        return COUNTRIES;
    }

    const q =
        query
            .toLowerCase()
            .trim();

    return COUNTRIES.filter(country =>

        country.name
            .toLowerCase()
            .includes(q)

        ||

        country.hindi
            .includes(query)

        ||

        country.code
            .toLowerCase()
            .includes(q)

        ||

        country.currencyName
            .toLowerCase()
            .includes(q)

        ||

        country.currencyCode
            .toLowerCase()
            .includes(q)

    );

}


/* =========================================================
   FLAG SEARCH
   ========================================================= */

function searchFlags(query) {

    if (!query) {
        return FLAGS;
    }

    const q =
        query
            .toLowerCase()
            .trim();

    return FLAGS.filter(flag =>

        flag.name
            .toLowerCase()
            .includes(q)

        ||

        flag.hindi
            .includes(query)

        ||

        flag.code
            .toLowerCase()
            .includes(q)

    );

}


/* =========================================================
   FLAG IMAGE ERROR FIX
   ========================================================= */

function createFlagImage(country) {

    const img =
        document.createElement("img");

    img.src =
        country.flag;

    img.alt =
        `${country.name} flag`;

    img.className =
        "country-flag-image";

    img.loading =
        "lazy";

    img.decoding =
        "async";

    img.style.width =
        "100%";

    img.style.height =
        "auto";

    img.style.maxWidth =
        "220px";

    img.style.objectFit =
        "contain";

    img.style.display =
        "block";

    img.style.margin =
        "0 auto";

    img.onerror = function () {

        this.style.display =
            "none";

    };

    return img;

}


/* =========================================================
   COUNTRY COUNT
   ========================================================= */

console.log(
    "ALL LEARNING HUB — Countries:",
    COUNTRIES.length
);

console.log(
    "ALL LEARNING HUB — Flags:",
    FLAGS.length
);


/* =========================================================
   PART 3 END
   ========================================================= */
/* =========================================================
   PART 4
   INDIAN STATES + STATE FOODS
   ========================================================= */


/* =========================================================
   ALL 28 INDIAN STATES
   ========================================================= */

const STATES = [

    {
        name: "Andhra Pradesh",
        hindi: "आंध्र प्रदेश",
        capital: "Amaravati",
        hindiCapital: "अमरावती",
        icon: "🌾",
        description: "Andhra Pradesh is a state in southern India known for its long coastline, agriculture and Telugu culture.",
        hindiDescription: "आंध्र प्रदेश दक्षिण भारत का एक राज्य है जो अपने लंबे समुद्री तट, कृषि और तेलुगु संस्कृति के लिए जाना जाता है।"
    },

    {
        name: "Arunachal Pradesh",
        hindi: "अरुणाचल प्रदेश",
        capital: "Itanagar",
        hindiCapital: "ईटानगर",
        icon: "🏔️",
        description: "Arunachal Pradesh is a northeastern state known for mountains, forests and diverse tribal cultures.",
        hindiDescription: "अरुणाचल प्रदेश उत्तर-पूर्व भारत का एक राज्य है जो पहाड़ों, जंगलों और विविध जनजातीय संस्कृतियों के लिए जाना जाता है।"
    },

    {
        name: "Assam",
        hindi: "असम",
        capital: "Dispur",
        hindiCapital: "दिसपुर",
        icon: "🫖",
        description: "Assam is a northeastern state famous for tea gardens, the Brahmaputra River and rich biodiversity.",
        hindiDescription: "असम उत्तर-पूर्व भारत का एक राज्य है जो चाय के बागानों, ब्रह्मपुत्र नदी और समृद्ध जैव विविधता के लिए प्रसिद्ध है।"
    },

    {
        name: "Bihar",
        hindi: "बिहार",
        capital: "Patna",
        hindiCapital: "पटना",
        icon: "🏛️",
        description: "Bihar is an eastern Indian state with an important history connected with ancient learning and Buddhism.",
        hindiDescription: "बिहार पूर्वी भारत का एक राज्य है जिसका प्राचीन शिक्षा, इतिहास और बौद्ध धर्म से महत्वपूर्ण संबंध है।"
    },

    {
        name: "Chhattisgarh",
        hindi: "छत्तीसगढ़",
        capital: "Raipur",
        hindiCapital: "रायपुर",
        icon: "🌳",
        description: "Chhattisgarh is a central Indian state known for forests, waterfalls, agriculture and tribal traditions.",
        hindiDescription: "छत्तीसगढ़ मध्य भारत का एक राज्य है जो जंगलों, झरनों, कृषि और जनजातीय परंपराओं के लिए जाना जाता है।"
    },

    {
        name: "Goa",
        hindi: "गोवा",
        capital: "Panaji",
        hindiCapital: "पणजी",
        icon: "🏖️",
        description: "Goa is a coastal state known for beaches, Portuguese-influenced heritage and tourism.",
        hindiDescription: "गोवा एक तटीय राज्य है जो समुद्र तटों, पुर्तगाली प्रभाव वाली विरासत और पर्यटन के लिए प्रसिद्ध है।"
    },

    {
        name: "Gujarat",
        hindi: "गुजरात",
        capital: "Gandhinagar",
        hindiCapital: "गांधीनगर",
        icon: "🦁",
        description: "Gujarat is a western Indian state known for its coastline, business, crafts, wildlife and diverse food traditions.",
        hindiDescription: "गुजरात पश्चिमी भारत का एक राज्य है जो अपने समुद्री तट, व्यापार, हस्तशिल्प, वन्यजीव और विविध खान-पान के लिए जाना जाता है।"
    },

    {
        name: "Haryana",
        hindi: "हरियाणा",
        capital: "Chandigarh",
        hindiCapital: "चंडीगढ़",
        icon: "🌾",
        description: "Haryana is a northern Indian state known for agriculture, sports and its proximity to Delhi.",
        hindiDescription: "हरियाणा उत्तर भारत का एक राज्य है जो कृषि, खेल और दिल्ली के निकट होने के लिए जाना जाता है।"
    },

    {
        name: "Himachal Pradesh",
        hindi: "हिमाचल प्रदेश",
        capital: "Shimla",
        hindiCapital: "शिमला",
        icon: "🏔️",
        description: "Himachal Pradesh is a Himalayan state known for mountains, valleys, forests and hill stations.",
        hindiDescription: "हिमाचल प्रदेश हिमालयी राज्य है जो पहाड़ों, घाटियों, जंगलों और हिल स्टेशनों के लिए प्रसिद्ध है।"
    },

    {
        name: "Jharkhand",
        hindi: "झारखंड",
        capital: "Ranchi",
        hindiCapital: "रांची",
        icon: "🌳",
        description: "Jharkhand is a mineral-rich eastern Indian state known for forests, waterfalls and tribal heritage.",
        hindiDescription: "झारखंड पूर्वी भारत का खनिज-संपन्न राज्य है जो जंगलों, झरनों और जनजातीय विरासत के लिए जाना जाता है।"
    },

    {
        name: "Karnataka",
        hindi: "कर्नाटक",
        capital: "Bengaluru",
        hindiCapital: "बेंगलुरु",
        icon: "🏛️",
        description: "Karnataka is a southern Indian state known for technology, heritage sites, coffee and diverse landscapes.",
        hindiDescription: "कर्नाटक दक्षिण भारत का राज्य है जो तकनीक, ऐतिहासिक स्थलों, कॉफी और विविध भौगोलिक क्षेत्रों के लिए जाना जाता है।"
    },

    {
        name: "Kerala",
        hindi: "केरल",
        capital: "Thiruvananthapuram",
        hindiCapital: "तिरुवनंतपुरम",
        icon: "🥥",
        description: "Kerala is a southwestern coastal state known for backwaters, greenery, Ayurveda and Malayalam culture.",
        hindiDescription: "केरल दक्षिण-पश्चिमी तटीय राज्य है जो बैकवाटर, हरियाली, आयुर्वेद और मलयालम संस्कृति के लिए प्रसिद्ध है।"
    },

    {
        name: "Madhya Pradesh",
        hindi: "मध्य प्रदेश",
        capital: "Bhopal",
        hindiCapital: "भोपाल",
        icon: "🐅",
        description: "Madhya Pradesh is a central Indian state known for forests, wildlife, heritage sites and historical cities.",
        hindiDescription: "मध्य प्रदेश मध्य भारत का राज्य है जो जंगलों, वन्यजीवों, ऐतिहासिक स्थलों और प्राचीन नगरों के लिए जाना जाता है।"
    },

    {
        name: "Maharashtra",
        hindi: "महाराष्ट्र",
        capital: "Mumbai",
        hindiCapital: "मुंबई",
        icon: "🏙️",
        description: "Maharashtra is a large western Indian state known for Mumbai, industry, agriculture and cultural heritage.",
        hindiDescription: "महाराष्ट्र पश्चिमी भारत का बड़ा राज्य है जो मुंबई, उद्योग, कृषि और सांस्कृतिक विरासत के लिए जाना जाता है।"
    },

    {
        name: "Manipur",
        hindi: "मणिपुर",
        capital: "Imphal",
        hindiCapital: "इंफाल",
        icon: "🌺",
        description: "Manipur is a northeastern state known for its hills, Loktak Lake and distinctive cultural traditions.",
        hindiDescription: "मणिपुर उत्तर-पूर्व भारत का राज्य है जो अपनी पहाड़ियों, लोकटक झील और विशिष्ट सांस्कृतिक परंपराओं के लिए जाना जाता है।"
    },

    {
        name: "Meghalaya",
        hindi: "मेघालय",
        capital: "Shillong",
        hindiCapital: "शिलांग",
        icon: "🌧️",
        description: "Meghalaya is a northeastern state known for hills, caves, waterfalls and high rainfall.",
        hindiDescription: "मेघालय उत्तर-पूर्व भारत का राज्य है जो पहाड़ियों, गुफाओं, झरनों और अधिक वर्षा के लिए प्रसिद्ध है।"
    },

    {
        name: "Mizoram",
        hindi: "मिज़ोरम",
        capital: "Aizawl",
        hindiCapital: "आइज़ोल",
        icon: "⛰️",
        description: "Mizoram is a northeastern state known for green hills, forests and Mizo cultural traditions.",
        hindiDescription: "मिज़ोरम उत्तर-पूर्व भारत का राज्य है जो हरी पहाड़ियों, जंगलों और मिज़ो सांस्कृतिक परंपराओं के लिए जाना जाता है।"
    },

    {
        name: "Nagaland",
        hindi: "नागालैंड",
        capital: "Kohima",
        hindiCapital: "कोहिमा",
        icon: "🌄",
        description: "Nagaland is a northeastern state known for mountainous landscapes and diverse Naga cultures.",
        hindiDescription: "नागालैंड उत्तर-पूर्व भारत का राज्य है जो पहाड़ी क्षेत्रों और विविध नागा संस्कृतियों के लिए जाना जाता है।"
    },

    {
        name: "Odisha",
        hindi: "ओडिशा",
        capital: "Bhubaneswar",
        hindiCapital: "भुवनेश्वर",
        icon: "🛕",
        description: "Odisha is an eastern coastal state known for temples, classical dance, crafts and its coastline.",
        hindiDescription: "ओडिशा पूर्वी तटीय राज्य है जो मंदिरों, शास्त्रीय नृत्य, हस्तशिल्प और समुद्री तट के लिए प्रसिद्ध है।"
    },

    {
        name: "Punjab",
        hindi: "पंजाब",
        capital: "Chandigarh",
        hindiCapital: "चंडीगढ़",
        icon: "🌾",
        description: "Punjab is a northern Indian state known for agriculture, Sikh heritage, music and food.",
        hindiDescription: "पंजाब उत्तर भारत का राज्य है जो कृषि, सिख विरासत, संगीत और खान-पान के लिए प्रसिद्ध है।"
    },

    {
        name: "Rajasthan",
        hindi: "राजस्थान",
        capital: "Jaipur",
        hindiCapital: "जयपुर",
        icon: "🏰",
        description: "Rajasthan is India's largest state by area and is known for deserts, forts, palaces and colorful traditions.",
        hindiDescription: "राजस्थान क्षेत्रफल के आधार पर भारत का सबसे बड़ा राज्य है और रेगिस्तान, किलों, महलों तथा रंगीन परंपराओं के लिए प्रसिद्ध है।"
    },

    {
        name: "Sikkim",
        hindi: "सिक्किम",
        capital: "Gangtok",
        hindiCapital: "गंगटोक",
        icon: "🏔️",
        description: "Sikkim is a Himalayan state known for mountain landscapes, monasteries and biodiversity.",
        hindiDescription: "सिक्किम हिमालयी राज्य है जो पर्वतीय दृश्यों, मठों और जैव विविधता के लिए जाना जाता है।"
    },

    {
        name: "Tamil Nadu",
        hindi: "तमिलनाडु",
        capital: "Chennai",
        hindiCapital: "चेन्नई",
        icon: "🛕",
        description: "Tamil Nadu is a southern state known for temples, classical arts, literature and Tamil culture.",
        hindiDescription: "तमिलनाडु दक्षिण भारत का राज्य है जो मंदिरों, शास्त्रीय कलाओं, साहित्य और तमिल संस्कृति के लिए प्रसिद्ध है।"
    },

    {
        name: "Telangana",
        hindi: "तेलंगाना",
        capital: "Hyderabad",
        hindiCapital: "हैदराबाद",
        icon: "🏙️",
        description: "Telangana is a southern Indian state known for Hyderabad, technology, historic monuments and Telugu culture.",
        hindiDescription: "तेलंगाना दक्षिण भारत का राज्य है जो हैदराबाद, तकनीक, ऐतिहासिक स्मारकों और तेलुगु संस्कृति के लिए जाना जाता है।"
    },

    {
        name: "Tripura",
        hindi: "त्रिपुरा",
        capital: "Agartala",
        hindiCapital: "अगरतला",
        icon: "🌳",
        description: "Tripura is a northeastern state known for forests, palaces and diverse cultural traditions.",
        hindiDescription: "त्रिपुरा उत्तर-पूर्व भारत का राज्य है जो जंगलों, महलों और विविध सांस्कृतिक परंपराओं के लिए जाना जाता है।"
    },

    {
        name: "Uttar Pradesh",
        hindi: "उत्तर प्रदेश",
        capital: "Lucknow",
        hindiCapital: "लखनऊ",
        icon: "🕌",
        description: "Uttar Pradesh is a large northern Indian state known for historical cities, culture, agriculture and major heritage sites.",
        hindiDescription: "उत्तर प्रदेश उत्तर भारत का बड़ा राज्य है जो ऐतिहासिक नगरों, संस्कृति, कृषि और महत्वपूर्ण विरासत स्थलों के लिए जाना जाता है।"
    },

    {
        name: "Uttarakhand",
        hindi: "उत्तराखंड",
        capital: "Dehradun",
        hindiCapital: "देहरादून",
        icon: "🏔️",
        description: "Uttarakhand is a Himalayan state known for mountains, rivers, forests and pilgrimage destinations.",
        hindiDescription: "उत्तराखंड हिमालयी राज्य है जो पहाड़ों, नदियों, जंगलों और तीर्थ स्थलों के लिए प्रसिद्ध है।"
    },

    {
        name: "West Bengal",
        hindi: "पश्चिम बंगाल",
        capital: "Kolkata",
        hindiCapital: "कोलकाता",
        icon: "🐯",
        description: "West Bengal is an eastern Indian state known for literature, arts, Kolkata, the Sundarbans and Bengali culture.",
        hindiDescription: "पश्चिम बंगाल पूर्वी भारत का राज्य है जो साहित्य, कला, कोलकाता, सुंदरबन और बंगाली संस्कृति के लिए जाना जाता है।"
    }

];


/* =========================================================
   STATE FOODS
   ========================================================= */

const STATE_FOODS = [

    {
        state: "Andhra Pradesh",
        hindiState: "आंध्र प्रदेश",
        food: "Pulihora",
        hindiFood: "पुलिहोरा",
        icon: "🍚",
        description: "Pulihora is a tangy rice preparation popular in Andhra cuisine.",
        hindiDescription: "पुलिहोरा इमली के स्वाद वाला चावल का प्रसिद्ध आंध्र व्यंजन है।"
    },

    {
        state: "Arunachal Pradesh",
        hindiState: "अरुणाचल प्रदेश",
        food: "Thukpa",
        hindiFood: "थुकपा",
        icon: "🍜",
        description: "Thukpa is a warm noodle soup popular in Himalayan regions.",
        hindiDescription: "थुकपा हिमालयी क्षेत्रों में लोकप्रिय गरम नूडल सूप है।"
    },

    {
        state: "Assam",
        hindiState: "असम",
        food: "Khar",
        hindiFood: "खार",
        icon: "🍲",
        description: "Khar is a traditional Assamese preparation made with alkaline ingredients.",
        hindiDescription: "खार असम का पारंपरिक व्यंजन है जिसमें क्षारीय सामग्री का उपयोग किया जाता है।"
    },

    {
        state: "Bihar",
        hindiState: "बिहार",
        food: "Litti Chokha",
        hindiFood: "लिट्टी चोखा",
        icon: "🥘",
        description: "Litti Chokha is a popular traditional food of Bihar.",
        hindiDescription: "लिट्टी चोखा बिहार का प्रसिद्ध पारंपरिक भोजन है।"
    },

    {
        state: "Chhattisgarh",
        hindiState: "छत्तीसगढ़",
        food: "Fara",
        hindiFood: "फरा",
        icon: "🥟",
        description: "Fara is a traditional steamed rice-based dish of Chhattisgarh.",
        hindiDescription: "फरा छत्तीसगढ़ का पारंपरिक चावल से बना भाप में पकाया जाने वाला व्यंजन है।"
    },

    {
        state: "Goa",
        hindiState: "गोवा",
        food: "Goan Fish Curry",
        hindiFood: "गोअन फिश करी",
        icon: "🐟",
        description: "Goan fish curry is a well-known coastal dish prepared with fish and spices.",
        hindiDescription: "गोअन फिश करी मछली और मसालों से बनाया जाने वाला प्रसिद्ध तटीय व्यंजन है।"
    },

    {
        state: "Gujarat",
        hindiState: "गुजरात",
        food: "Dhokla",
        hindiFood: "ढोकला",
        icon: "🟨",
        description: "Dhokla is a popular steamed savory snack associated with Gujarati cuisine.",
        hindiDescription: "ढोकला गुजरात के खान-पान से जुड़ा प्रसिद्ध भाप में पकाया जाने वाला स्वादिष्ट नाश्ता है।"
    },

    {
        state: "Haryana",
        hindiState: "हरियाणा",
        food: "Bajra Khichdi",
        hindiFood: "बाजरे की खिचड़ी",
        icon: "🍲",
        description: "Bajra Khichdi is a traditional rural food prepared with pearl millet.",
        hindiDescription: "बाजरे की खिचड़ी बाजरे से बनाया जाने वाला पारंपरिक भोजन है।"
    },

    {
        state: "Himachal Pradesh",
        hindiState: "हिमाचल प्रदेश",
        food: "Dham",
        hindiFood: "धाम",
        icon: "🍛",
        description: "Dham is a traditional festive meal from Himachal Pradesh.",
        hindiDescription: "धाम हिमाचल प्रदेश का पारंपरिक उत्सवी भोजन है।"
    },

    {
        state: "Jharkhand",
        hindiState: "झारखंड",
        food: "Dhuska",
        hindiFood: "धुस्का",
        icon: "🥞",
        description: "Dhuska is a traditional fried rice-and-lentil preparation.",
        hindiDescription: "धुस्का चावल और दाल से बनाया जाने वाला पारंपरिक तला हुआ व्यंजन है।"
    },

    {
        state: "Karnataka",
        hindiState: "कर्नाटक",
        food: "Bisi Bele Bath",
        hindiFood: "बिसी बेले भात",
        icon: "🍛",
        description: "Bisi Bele Bath is a popular rice, lentil and vegetable dish from Karnataka.",
        hindiDescription: "बिसी बेले भात चावल, दाल और सब्जियों से बना कर्नाटक का प्रसिद्ध व्यंजन है।"
    },

    {
        state: "Kerala",
        hindiState: "केरल",
        food: "Sadya",
        hindiFood: "सद्या",
        icon: "🍃",
        description: "Sadya is a traditional Kerala feast served on a banana leaf.",
        hindiDescription: "सद्या केरल का पारंपरिक भोज है जिसे केले के पत्ते पर परोसा जाता है।"
    },

    {
        state: "Madhya Pradesh",
        hindiState: "मध्य प्रदेश",
        food: "Poha",
        hindiFood: "पोहा",
        icon: "🍚",
        description: "Poha is a popular breakfast dish widely enjoyed in Madhya Pradesh.",
        hindiDescription: "पोहा मध्य प्रदेश में बहुत पसंद किया जाने वाला लोकप्रिय नाश्ता है।"
    },

    {
        state: "Maharashtra",
        hindiState: "महाराष्ट्र",
        food: "Vada Pav",
        hindiFood: "वड़ा पाव",
        icon: "🍔",
        description: "Vada Pav is a famous street food associated with Maharashtra.",
        hindiDescription: "वड़ा पाव महाराष्ट्र से जुड़ा प्रसिद्ध स्ट्रीट फूड है।"
    },

    {
        state: "Manipur",
        hindiState: "मणिपुर",
        food: "Eromba",
        hindiFood: "एरोम्बा",
        icon: "🌶️",
        description: "Eromba is a traditional Manipuri preparation often made with vegetables and fermented ingredients.",
        hindiDescription: "एरोम्बा मणिपुर का पारंपरिक व्यंजन है जिसमें अक्सर सब्जियों और किण्वित सामग्री का उपयोग होता है।"
    },

    {
        state: "Meghalaya",
        hindiState: "मेघालय",
        food: "Jadoh",
        hindiFood: "जादोह",
        icon: "🍚",
        description: "Jadoh is a traditional rice-based dish of Meghalaya.",
        hindiDescription: "जादोह मेघालय का पारंपरिक चावल आधारित व्यंजन है।"
    },

    {
        state: "Mizoram",
        hindiState: "मिज़ोरम",
        food: "Bai",
        hindiFood: "बाई",
        icon: "🥬",
        description: "Bai is a traditional Mizo dish prepared with vegetables and other ingredients.",
        hindiDescription: "बाई मिज़ो समुदाय का पारंपरिक व्यंजन है जिसमें सब्जियों और अन्य सामग्री का उपयोग किया जाता है।"
    },

    {
        state: "Nagaland",
        hindiState: "नागालैंड",
        food: "Smoked Pork",
        hindiFood: "स्मोक्ड पोर्क",
        icon: "🍖",
        description: "Smoked pork is a well-known traditional food in Nagaland.",
        hindiDescription: "स्मोक्ड पोर्क नागालैंड के पारंपरिक खान-पान में प्रसिद्ध है।"
    },

    {
        state: "Odisha",
        hindiState: "ओडिशा",
        food: "Pakhala Bhata",
        hindiFood: "पखाला भात",
        icon: "🍚",
        description: "Pakhala Bhata is a traditional fermented rice preparation from Odisha.",
        hindiDescription: "पखाला भात ओडिशा का पारंपरिक किण्वित चावल का व्यंजन है।"
    },

    {
        state: "Punjab",
        hindiState: "पंजाब",
        food: "Makki di Roti and Sarson da Saag",
        hindiFood: "मक्की दी रोटी और सरसों दा साग",
        icon: "🌽",
        description: "Makki di Roti and Sarson da Saag are iconic foods associated with Punjabi cuisine.",
        hindiDescription: "मक्की दी रोटी और सरसों दा साग पंजाबी खान-पान से जुड़े प्रसिद्ध पारंपरिक भोजन हैं।"
    },

    {
        state: "Rajasthan",
        hindiState: "राजस्थान",
        food: "Dal Baati Churma",
        hindiFood: "दाल बाटी चूरमा",
        icon: "🥘",
        description: "Dal Baati Churma is a famous traditional Rajasthani meal.",
        hindiDescription: "दाल बाटी चूरमा राजस्थान का प्रसिद्ध पारंपरिक भोजन है।"
    },

    {
        state: "Sikkim",
        hindiState: "सिक्किम",
        food: "Momos",
        hindiFood: "मोमो",
        icon: "🥟",
        description: "Momos are popular dumplings widely enjoyed in Sikkim and the Himalayan region.",
        hindiDescription: "मोमो सिक्किम और हिमालयी क्षेत्र में बहुत पसंद किए जाने वाले पकौड़े जैसे व्यंजन हैं।"
    },

    {
        state: "Tamil Nadu",
        hindiState: "तमिलनाडु",
        food: "Pongal",
        hindiFood: "पोंगल",
        icon: "🍚",
        description: "Pongal is a traditional rice and lentil preparation strongly associated with Tamil Nadu.",
        hindiDescription: "पोंगल चावल और दाल से बना तमिलनाडु का प्रसिद्ध पारंपरिक व्यंजन है।"
    },

    {
        state: "Telangana",
        hindiState: "तेलंगाना",
        food: "Hyderabadi Biryani",
        hindiFood: "हैदराबादी बिरयानी",
        icon: "🍛",
        description: "Hyderabadi Biryani is a famous rice dish associated with Hyderabad and Telangana.",
        hindiDescription: "हैदराबादी बिरयानी हैदराबाद और तेलंगाना से जुड़ा प्रसिद्ध चावल का व्यंजन है।"
    },

    {
        state: "Tripura",
        hindiState: "त्रिपुरा",
        food: "Mui Borok",
        hindiFood: "मुई बोरोक",
        icon: "🍲",
        description: "Mui Borok refers to traditional Tripuri cuisine and foods.",
        hindiDescription: "मुई बोरोक त्रिपुरा की पारंपरिक भोजन संस्कृति को दर्शाता है।"
    },

    {
        state: "Uttar Pradesh",
        hindiState: "उत्तर प्रदेश",
        food: "Awadhi Biryani",
        hindiFood: "अवधी बिरयानी",
        icon: "🍛",
        description: "Awadhi cuisine is known for aromatic rice dishes and rich culinary traditions.",
        hindiDescription: "अवधी खान-पान अपने सुगंधित चावल के व्यंजनों और समृद्ध पाक परंपरा के लिए प्रसिद्ध है।"
    },

    {
        state: "Uttarakhand",
        hindiState: "उत्तराखंड",
        food: "Kafuli",
        hindiFood: "काफुली",
        icon: "🥬",
        description: "Kafuli is a traditional Uttarakhand dish prepared mainly with leafy greens.",
        hindiDescription: "काफुली उत्तराखंड का पारंपरिक व्यंजन है जिसे मुख्य रूप से हरी पत्तेदार सब्जियों से बनाया जाता है।"
    },

    {
        state: "West Bengal",
        hindiState: "पश्चिम बंगाल",
        food: "Macher Jhol",
        hindiFood: "माछेर झोल",
        icon: "🐟",
        description: "Macher Jhol is a traditional Bengali fish curry.",
        hindiDescription: "माछेर झोल बंगाली खान-पान की पारंपरिक मछली की करी है।"
    }

];


/* =========================================================
   STATE SEARCH
   ========================================================= */

function searchStates(query) {

    if (!query) {
        return STATES;
    }

    const q =
        query
            .toLowerCase()
            .trim();

    return STATES.filter(state =>

        state.name
            .toLowerCase()
            .includes(q)

        ||

        state.hindi
            .includes(query)

        ||

        state.capital
            .toLowerCase()
            .includes(q)

        ||

        state.hindiCapital
            .includes(query)

    );

}


/* =========================================================
   STATE FOOD SEARCH
   ========================================================= */

function searchStateFoods(query) {

    if (!query) {
        return STATE_FOODS;
    }

    const q =
        query
            .toLowerCase()
            .trim();

    return STATE_FOODS.filter(item =>

        item.state
            .toLowerCase()
            .includes(q)

        ||

        item.hindiState
            .includes(query)

        ||

        item.food
            .toLowerCase()
            .includes(q)

        ||

        item.hindiFood
            .includes(query)

    );

}


/* =========================================================
   STATE DATA FORMATTER
   ========================================================= */

function getStateData(state) {

    return {

        title:
            `${state.name} — ${state.hindi}`,

        icon:
            state.icon,

        description:
            state.description,

        hindiDescription:
            state.hindiDescription,

        extra: {

            "Capital":
                state.capital,

            "राजधानी":
                state.hindiCapital

        }

    };

}


/* =========================================================
   STATE FOOD DATA FORMATTER
   ========================================================= */

function getStateFoodData(item) {

    return {

        title:
            `${item.state} — ${item.food}`,

        hindi:
            `${item.hindiState} — ${item.hindiFood}`,

        icon:
            item.icon,

        description:
            item.description,

        hindiDescription:
            item.hindiDescription

    };

}


/* =========================================================
   CHECK COUNTS
   ========================================================= */

console.log(
    "ALL LEARNING HUB — Indian States:",
    STATES.length
);

console.log(
    "ALL LEARNING HUB — State Foods:",
    STATE_FOODS.length
);


/* =========================================================
   PART 4 END
   ========================================================= */

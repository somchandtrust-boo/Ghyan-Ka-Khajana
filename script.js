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
/* =========================================================
   PART 5
   INDIAN FESTIVALS + NATIONAL SYMBOLS
   ========================================================= */


/* =========================================================
   INDIAN FESTIVALS
   ========================================================= */

const FESTIVALS = [

    {
        name: "Diwali",
        hindi: "दीवाली",
        icon: "🪔",
        month: "October / November",
        hindiMonth: "अक्टूबर / नवंबर",
        pronunciation: "Di-wa-lee",
        description:
            "Diwali is the festival of lights. People light diyas, decorate homes, exchange sweets and celebrate with family.",
        hindiDescription:
            "दीवाली रोशनी का त्योहार है। लोग दीपक जलाते हैं, घर सजाते हैं, मिठाइयाँ बाँटते हैं और परिवार के साथ उत्सव मनाते हैं.",
        example: "People light diyas during Diwali.",
        hindiExample: "दीवाली पर लोग दीपक जलाते हैं."
    },

    {
        name: "Holi",
        hindi: "होली",
        icon: "🎨",
        month: "March",
        hindiMonth: "मार्च",
        pronunciation: "Ho-lee",
        description:
            "Holi is the festival of colours. People play with colours, meet friends and share sweets.",
        hindiDescription:
            "होली रंगों का त्योहार है। लोग एक-दूसरे को रंग लगाते हैं, दोस्तों और परिवार से मिलते हैं तथा मिठाइयाँ बाँटते हैं.",
        example: "Children play with colours during Holi.",
        hindiExample: "होली पर बच्चे रंगों से खेलते हैं."
    },

    {
        name: "Dussehra",
        hindi: "दशहरा",
        icon: "🏹",
        month: "September / October",
        hindiMonth: "सितंबर / अक्टूबर",
        pronunciation: "Dus-she-ra",
        description:
            "Dussehra marks the victory of good over evil and is associated with the story of Lord Rama and Ravana.",
        hindiDescription:
            "दशहरा बुराई पर अच्छाई की विजय का प्रतीक है और भगवान राम तथा रावण की कथा से जुड़ा हुआ है.",
        example: "Ravana effigies are burned in many places on Dussehra.",
        hindiExample: "दशहरे पर कई स्थानों पर रावण के पुतले जलाए जाते हैं."
    },

    {
        name: "Navratri",
        hindi: "नवरात्रि",
        icon: "💃",
        month: "September / October",
        hindiMonth: "सितंबर / अक्टूबर",
        pronunciation: "Na-v-ra-tri",
        description:
            "Navratri is a festival celebrated for nine nights with prayers, devotion, music and traditional dances.",
        hindiDescription:
            "नवरात्रि नौ रातों तक मनाया जाने वाला त्योहार है, जिसमें पूजा, भक्ति, संगीत और पारंपरिक नृत्य होते हैं.",
        example: "Garba is popular during Navratri in Gujarat.",
        hindiExample: "गुजरात में नवरात्रि के दौरान गरबा बहुत लोकप्रिय है."
    },

    {
        name: "Janmashtami",
        hindi: "जन्माष्टमी",
        icon: "🦚",
        month: "August",
        hindiMonth: "अगस्त",
        pronunciation: "Jan-mash-ta-mee",
        description:
            "Janmashtami celebrates the birth of Lord Krishna.",
        hindiDescription:
            "जन्माष्टमी भगवान श्री कृष्ण के जन्मोत्सव के रूप में मनाई जाती है.",
        example: "People celebrate Krishna's birth on Janmashtami.",
        hindiExample: "जन्माष्टमी पर लोग श्री कृष्ण के जन्म का उत्सव मनाते हैं."
    },

    {
        name: "Ganesh Chaturthi",
        hindi: "गणेश चतुर्थी",
        icon: "🐘",
        month: "August / September",
        hindiMonth: "अगस्त / सितंबर",
        pronunciation: "Ga-nesh Cha-tur-thi",
        description:
            "Ganesh Chaturthi celebrates Lord Ganesha with prayers, decorations and community celebrations.",
        hindiDescription:
            "गणेश चतुर्थी भगवान गणेश की पूजा, सजावट और सामुदायिक उत्सव के साथ मनाई जाती है.",
        example: "People worship Lord Ganesha during Ganesh Chaturthi.",
        hindiExample: "गणेश चतुर्थी पर लोग भगवान गणेश की पूजा करते हैं."
    },

    {
        name: "Makar Sankranti",
        hindi: "मकर संक्रांति",
        icon: "🪁",
        month: "January",
        hindiMonth: "जनवरी",
        pronunciation: "Ma-kar San-kraan-ti",
        description:
            "Makar Sankranti is a harvest festival associated with the Sun's movement into Makara.",
        hindiDescription:
            "मकर संक्रांति एक प्रमुख पर्व है जो सूर्य के मकर राशि में प्रवेश और फसल के मौसम से जुड़ा है.",
        example: "Kite flying is popular during Makar Sankranti in many places.",
        hindiExample: "कई स्थानों पर मकर संक्रांति के दौरान पतंग उड़ाना लोकप्रिय है."
    },

    {
        name: "Raksha Bandhan",
        hindi: "रक्षाबंधन",
        icon: "🧵",
        month: "August",
        hindiMonth: "अगस्त",
        pronunciation: "Rak-sha Ban-dhan",
        description:
            "Raksha Bandhan celebrates the bond between brothers and sisters. Sisters traditionally tie a rakhi.",
        hindiDescription:
            "रक्षाबंधन भाई-बहन के स्नेह और रिश्ते का त्योहार है। इस दिन बहनें परंपरागत रूप से भाई की कलाई पर राखी बाँधती हैं.",
        example: "Sisters tie rakhi on Raksha Bandhan.",
        hindiExample: "रक्षाबंधन पर बहनें भाई की कलाई पर राखी बाँधती हैं."
    },

    {
        name: "Eid al-Fitr",
        hindi: "ईद-उल-फितर",
        icon: "🌙",
        month: "Islamic Calendar",
        hindiMonth: "इस्लामी कैलेंडर",
        pronunciation: "Eed-ul-Fi-tr",
        description:
            "Eid al-Fitr marks the end of Ramadan and is celebrated with prayers, family gatherings and food.",
        hindiDescription:
            "ईद-उल-फितर रमज़ान के महीने के समापन का पर्व है। इसे नमाज़, परिवार के साथ मिलना और भोजन के साथ मनाया जाता है.",
        example: "Families meet and share food on Eid.",
        hindiExample: "ईद पर परिवार मिलते हैं और भोजन साझा करते हैं."
    },

    {
        name: "Eid al-Adha",
        hindi: "ईद-उल-अजहा",
        icon: "🌙",
        month: "Islamic Calendar",
        hindiMonth: "इस्लामी कैलेंडर",
        pronunciation: "Eed-ul-Ad-ha",
        description:
            "Eid al-Adha is an important Islamic festival associated with faith, sacrifice and charity.",
        hindiDescription:
            "ईद-उल-अजहा एक महत्वपूर्ण इस्लामी पर्व है जो आस्था, त्याग और दान से जुड़ा है.",
        example: "People offer prayers and share with others on Eid al-Adha.",
        hindiExample: "ईद-उल-अजहा पर लोग नमाज़ पढ़ते हैं और दूसरों के साथ बाँटते हैं."
    },

    {
        name: "Christmas",
        hindi: "क्रिसमस",
        icon: "🎄",
        month: "December",
        hindiMonth: "दिसंबर",
        pronunciation: "Kris-mas",
        description:
            "Christmas is celebrated by Christians around the world to commemorate the birth of Jesus Christ.",
        hindiDescription:
            "क्रिसमस दुनिया भर में ईसाई समुदाय द्वारा यीशु मसीह के जन्म की स्मृति में मनाया जाता है.",
        example: "People decorate Christmas trees during Christmas.",
        hindiExample: "क्रिसमस पर लोग क्रिसमस ट्री सजाते हैं."
    },

    {
        name: "Guru Nanak Gurpurab",
        hindi: "गुरु नानक गुरुपुरब",
        icon: "🪯",
        month: "November",
        hindiMonth: "नवंबर",
        pronunciation: "Gu-roo Na-nak Gur-pur-ab",
        description:
            "Guru Nanak Gurpurab commemorates the birth anniversary of Guru Nanak Dev Ji, the founder of Sikhism.",
        hindiDescription:
            "गुरु नानक गुरुपुरब सिख धर्म के संस्थापक गुरु नानक देव जी की जयंती के रूप में मनाया जाता है.",
        example: "Gurdwaras are decorated during Gurpurab.",
        hindiExample: "गुरुपुरब के दौरान गुरुद्वारों को सजाया जाता है."
    },

    {
        name: "Mahavir Jayanti",
        hindi: "महावीर जयंती",
        icon: "🙏",
        month: "March / April",
        hindiMonth: "मार्च / अप्रैल",
        pronunciation: "Ma-ha-veer Ja-yan-ti",
        description:
            "Mahavir Jayanti commemorates the birth of Lord Mahavira, the twenty-fourth Tirthankara of Jainism.",
        hindiDescription:
            "महावीर जयंती जैन धर्म के चौबीसवें तीर्थंकर भगवान महावीर के जन्मोत्सव के रूप में मनाई जाती है.",
        example: "Devotees visit Jain temples on Mahavir Jayanti.",
        hindiExample: "महावीर जयंती पर श्रद्धालु जैन मंदिरों में जाते हैं."
    },

    {
        name: "Buddha Purnima",
        hindi: "बुद्ध पूर्णिमा",
        icon: "☸️",
        month: "April / May",
        hindiMonth: "अप्रैल / मई",
        pronunciation: "Bud-dha Poor-ni-ma",
        description:
            "Buddha Purnima commemorates important events associated with Gautama Buddha.",
        hindiDescription:
            "बुद्ध पूर्णिमा गौतम बुद्ध से जुड़े महत्वपूर्ण घटनाक्रमों की स्मृति में मनाई जाती है.",
        example: "People visit Buddhist temples on Buddha Purnima.",
        hindiExample: "बुद्ध पूर्णिमा पर लोग बौद्ध मंदिरों में जाते हैं."
    },

    {
        name: "Onam",
        hindi: "ओणम",
        icon: "🌸",
        month: "August / September",
        hindiMonth: "अगस्त / सितंबर",
        pronunciation: "O-nam",
        description:
            "Onam is a major festival of Kerala associated with harvest, cultural traditions and celebrations.",
        hindiDescription:
            "ओणम केरल का प्रमुख त्योहार है जो फसल, सांस्कृतिक परंपराओं और उत्सव से जुड़ा है.",
        example: "Pookalam flower designs are made during Onam.",
        hindiExample: "ओणम के दौरान फूलों की पुक्कलम सजावट बनाई जाती है."
    },

    {
        name: "Pongal",
        hindi: "पोंगल",
        icon: "🍚",
        month: "January",
        hindiMonth: "जनवरी",
        pronunciation: "Pon-gal",
        description:
            "Pongal is a harvest festival celebrated especially in Tamil Nadu.",
        hindiDescription:
            "पोंगल एक प्रमुख फसल पर्व है जिसे विशेष रूप से तमिलनाडु में मनाया जाता है.",
        example: "Families prepare Pongal dishes during the festival.",
        hindiExample: "त्योहार के दौरान परिवार पोंगल का पारंपरिक भोजन बनाते हैं."
    },

    {
        name: "Bihu",
        hindi: "बिहू",
        icon: "🌾",
        month: "April / January / October",
        hindiMonth: "अप्रैल / जनवरी / अक्टूबर",
        pronunciation: "Bi-hoo",
        description:
            "Bihu is a group of important festivals celebrated in Assam and is closely connected with agriculture.",
        hindiDescription:
            "बिहू असम के प्रमुख त्योहारों का समूह है और इसका कृषि से गहरा संबंध है.",
        example: "Bihu celebrations include traditional music and dance.",
        hindiExample: "बिहू उत्सव में पारंपरिक संगीत और नृत्य शामिल होते हैं."
    },

    {
        name: "Lohri",
        hindi: "लोहड़ी",
        icon: "🔥",
        month: "January",
        hindiMonth: "जनवरी",
        pronunciation: "Lo-hri",
        description:
            "Lohri is a winter festival especially popular in Punjab and northern India.",
        hindiDescription:
            "लोहड़ी सर्दियों का प्रमुख त्योहार है जो विशेष रूप से पंजाब और उत्तर भारत में लोकप्रिय है.",
        example: "People gather around a bonfire during Lohri.",
        hindiExample: "लोहड़ी पर लोग अलाव के आसपास एकत्र होते हैं."
    },

    {
        name: "Basant Panchami",
        hindi: "बसंत पंचमी",
        icon: "🌼",
        month: "January / February",
        hindiMonth: "जनवरी / फरवरी",
        pronunciation: "Ba-sant Pan-cha-mi",
        description:
            "Basant Panchami marks the arrival of spring and is associated with Goddess Saraswati.",
        hindiDescription:
            "बसंत पंचमी वसंत ऋतु के आगमन का पर्व है और देवी सरस्वती की पूजा से जुड़ी है.",
        example: "Students worship Goddess Saraswati on Basant Panchami.",
        hindiExample: "बसंत पंचमी पर विद्यार्थी देवी सरस्वती की पूजा करते हैं."
    },

    {
        name: "Gudi Padwa",
        hindi: "गुड़ी पड़वा",
        icon: "🚩",
        month: "March / April",
        hindiMonth: "मार्च / अप्रैल",
        pronunciation: "Gu-di Pad-wa",
        description:
            "Gudi Padwa is a traditional New Year festival celebrated mainly in Maharashtra.",
        hindiDescription:
            "गुड़ी पड़वा महाराष्ट्र में मुख्य रूप से मनाया जाने वाला पारंपरिक नववर्ष पर्व है.",
        example: "Families decorate their homes for Gudi Padwa.",
        hindiExample: "गुड़ी पड़वा पर परिवार अपने घरों को सजाते हैं."
    },

    {
        name: "Ugadi",
        hindi: "उगादी",
        icon: "🌿",
        month: "March / April",
        hindiMonth: "मार्च / अप्रैल",
        pronunciation: "U-ga-di",
        description:
            "Ugadi is a traditional New Year festival celebrated in parts of southern India.",
        hindiDescription:
            "उगादी दक्षिण भारत के कुछ क्षेत्रों में मनाया जाने वाला पारंपरिक नववर्ष पर्व है.",
        example: "Ugadi marks the beginning of a new year in several southern traditions.",
        hindiExample: "उगादी कई दक्षिण भारतीय परंपराओं में नए वर्ष की शुरुआत का प्रतीक है."
    },

    {
        name: "Vishu",
        hindi: "विषु",
        icon: "🌞",
        month: "April",
        hindiMonth: "अप्रैल",
        pronunciation: "Vi-shu",
        description:
            "Vishu is a traditional New Year festival celebrated in Kerala.",
        hindiDescription:
            "विषु केरल में मनाया जाने वाला पारंपरिक नववर्ष पर्व है.",
        example: "Vishukkani is an important tradition of Vishu.",
        hindiExample: "विषुक्कणी विषु की एक महत्वपूर्ण परंपरा है."
    },

    {
        name: "Puthandu",
        hindi: "पुथांडु",
        icon: "🌺",
        month: "April",
        hindiMonth: "अप्रैल",
        pronunciation: "Pu-than-du",
        description:
            "Puthandu is the Tamil New Year festival.",
        hindiDescription:
            "पुथांडु तमिल नववर्ष के रूप में मनाया जाने वाला पारंपरिक पर्व है.",
        example: "Families celebrate the Tamil New Year during Puthandu.",
        hindiExample: "पुथांडु पर परिवार तमिल नववर्ष मनाते हैं."
    },

    {
        name: "Durga Puja",
        hindi: "दुर्गा पूजा",
        icon: "🪷",
        month: "September / October",
        hindiMonth: "सितंबर / अक्टूबर",
        pronunciation: "Dur-ga Poo-ja",
        description:
            "Durga Puja is a major festival dedicated to Goddess Durga and is especially prominent in West Bengal.",
        hindiDescription:
            "दुर्गा पूजा देवी दुर्गा को समर्पित प्रमुख पर्व है और पश्चिम बंगाल में विशेष रूप से प्रसिद्ध है.",
        example: "Large Durga idols are worshipped during Durga Puja.",
        hindiExample: "दुर्गा पूजा के दौरान देवी दुर्गा की बड़ी प्रतिमाओं की पूजा की जाती है."
    },

    {
        name: "Chhath Puja",
        hindi: "छठ पूजा",
        icon: "🌅",
        month: "October / November",
        hindiMonth: "अक्टूबर / नवंबर",
        pronunciation: "Chhath Poo-ja",
        description:
            "Chhath Puja is a traditional festival dedicated to the Sun and is especially important in Bihar and nearby regions.",
        hindiDescription:
            "छठ पूजा सूर्य देव को समर्पित पारंपरिक पर्व है और बिहार तथा आसपास के क्षेत्रों में विशेष रूप से महत्वपूर्ण है.",
        example: "Devotees offer prayers to the Sun during Chhath Puja.",
        hindiExample: "छठ पूजा में श्रद्धालु सूर्य देव को अर्घ्य देते हैं."
    },

    {
        name: "Ganga Dussehra",
        hindi: "गंगा दशहरा",
        icon: "🌊",
        month: "May / June",
        hindiMonth: "मई / जून",
        pronunciation: "Gan-ga Dus-she-ra",
        description:
            "Ganga Dussehra is associated with the descent of the River Ganga to Earth.",
        hindiDescription:
            "गंगा दशहरा पवित्र नदी गंगा के पृथ्वी पर अवतरण से जुड़ा पर्व है.",
        example: "Devotees visit the Ganga during Ganga Dussehra.",
        hindiExample: "गंगा दशहरा पर श्रद्धालु गंगा नदी के तट पर जाते हैं."
    },

    {
        name: "Karwa Chauth",
        hindi: "करवा चौथ",
        icon: "🌕",
        month: "October / November",
        hindiMonth: "अक्टूबर / नवंबर",
        pronunciation: "Kar-wa Chauth",
        description:
            "Karwa Chauth is a traditional festival observed by many married Hindu women.",
        hindiDescription:
            "करवा चौथ एक पारंपरिक पर्व है जिसे कई विवाहित हिंदू महिलाएँ मनाती हैं.",
        example: "The moon is traditionally sighted during Karwa Chauth.",
        hindiExample: "करवा चौथ पर पारंपरिक रूप से चंद्रमा के दर्शन किए जाते हैं."
    },

    {
        name: "Bhai Dooj",
        hindi: "भाई दूज",
        icon: "👫",
        month: "October / November",
        hindiMonth: "अक्टूबर / नवंबर",
        pronunciation: "Bhai Dooj",
        description:
            "Bhai Dooj celebrates the bond between brothers and sisters.",
        hindiDescription:
            "भाई दूज भाई-बहन के स्नेह और रिश्ते का त्योहार है.",
        example: "Sisters apply a traditional tilak during Bhai Dooj.",
        hindiExample: "भाई दूज पर बहनें भाई को पारंपरिक तिलक लगाती हैं."
    }

];



/* =========================================================
   FESTIVAL SEARCH
   ========================================================= */

function searchFestivals(query = "") {

    const q = String(query).trim().toLowerCase();

    if (!q) {
        return FESTIVALS;
    }

    return FESTIVALS.filter(item => {

        return (
            item.name.toLowerCase().includes(q) ||
            item.hindi.toLowerCase().includes(q) ||
            item.month.toLowerCase().includes(q) ||
            item.hindiMonth.toLowerCase().includes(q)
        );

    });

}



/* =========================================================
   GET FESTIVAL
   ========================================================= */

function getFestivalData(festival) {

    if (!festival) return null;

    return FESTIVALS.find(item =>
        item.name === festival.name ||
        item.hindi === festival.hindi
    ) || festival;

}



/* =========================================================
   INDIAN NATIONAL SYMBOLS
   ========================================================= */

const NATIONAL_SYMBOLS = [

    {
        name: "National Flag",
        hindi: "राष्ट्रीय ध्वज",
        icon: "🇮🇳",
        symbol: "🇮🇳",
        pronunciation: "Na-shuh-nal Flag",
        title: "Tiranga",
        hindiTitle: "तिरंगा",
        description:
            "The national flag of India is called the Tiranga. It has three horizontal colours: saffron, white and green, with the Ashoka Chakra in the centre.",
        hindiDescription:
            "भारत के राष्ट्रीय ध्वज को तिरंगा कहा जाता है। इसमें केसरिया, सफेद और हरे रंग की तीन क्षैतिज पट्टियाँ तथा बीच में अशोक चक्र होता है.",
        example: "The Indian national flag is called the Tiranga.",
        hindiExample: "भारत के राष्ट्रीय ध्वज को तिरंगा कहा जाता है."
    },

    {
        name: "National Emblem",
        hindi: "राष्ट्रीय प्रतीक",
        icon: "🦁",
        symbol: "🦁",
        pronunciation: "Na-shuh-nal Em-blem",
        title: "Lion Capital of Ashoka",
        hindiTitle: "अशोक की सिंह राजधानी",
        description:
            "India's State Emblem is adapted from the Lion Capital of Ashoka at Sarnath.",
        hindiDescription:
            "भारत का राजकीय प्रतीक सारनाथ स्थित अशोक की सिंह राजधानी से लिया गया है.",
        example: "The Lion Capital is India's State Emblem.",
        hindiExample: "सिंह राजधानी भारत का राजकीय प्रतीक है."
    },

    {
        name: "National Anthem",
        hindi: "राष्ट्रीय गान",
        icon: "🎵",
        symbol: "🎵",
        pronunciation: "Na-shuh-nal An-them",
        title: "Jana Gana Mana",
        hindiTitle: "जन गण मन",
        description:
            "Jana Gana Mana is the national anthem of India.",
        hindiDescription:
            "जन गण मन भारत का राष्ट्रीय गान है.",
        example: "Jana Gana Mana is sung on important national occasions.",
        hindiExample: "जन गण मन महत्वपूर्ण राष्ट्रीय अवसरों पर गाया जाता है."
    },

    {
        name: "National Song",
        hindi: "राष्ट्रीय गीत",
        icon: "🎶",
        symbol: "🎶",
        pronunciation: "Na-shuh-nal Song",
        title: "Vande Mataram",
        hindiTitle: "वंदे मातरम्",
        description:
            "Vande Mataram is the national song of India.",
        hindiDescription:
            "वंदे मातरम् भारत का राष्ट्रीय गीत है.",
        example: "Vande Mataram is India's national song.",
        hindiExample: "वंदे मातरम् भारत का राष्ट्रीय गीत है."
    },

    {
        name: "National Animal",
        hindi: "राष्ट्रीय पशु",
        icon: "🐅",
        symbol: "🐅",
        pronunciation: "Na-shuh-nal An-i-mal",
        title: "Royal Bengal Tiger",
        hindiTitle: "रॉयल बंगाल टाइगर",
        description:
            "The Royal Bengal Tiger is the national animal of India.",
        hindiDescription:
            "रॉयल बंगाल टाइगर भारत का राष्ट्रीय पशु है.",
        example: "The tiger is India's national animal.",
        hindiExample: "बाघ भारत का राष्ट्रीय पशु है."
    },

    {
        name: "National Bird",
        hindi: "राष्ट्रीय पक्षी",
        icon: "🦚",
        symbol: "🦚",
        pronunciation: "Na-shuh-nal Bird",
        title: "Indian Peacock",
        hindiTitle: "भारतीय मोर",
        description:
            "The Indian peacock is the national bird of India.",
        hindiDescription:
            "भारतीय मोर भारत का राष्ट्रीय पक्षी है.",
        example: "The peacock is India's national bird.",
        hindiExample: "मोर भारत का राष्ट्रीय पक्षी है."
    },

    {
        name: "National Flower",
        hindi: "राष्ट्रीय फूल",
        icon: "🪷",
        symbol: "🪷",
        pronunciation: "Na-shuh-nal Flow-er",
        title: "Lotus",
        hindiTitle: "कमल",
        description:
            "The lotus is the national flower of India.",
        hindiDescription:
            "कमल भारत का राष्ट्रीय फूल है.",
        example: "The lotus is India's national flower.",
        hindiExample: "कमल भारत का राष्ट्रीय फूल है."
    },

    {
        name: "National Tree",
        hindi: "राष्ट्रीय वृक्ष",
        icon: "🌳",
        symbol: "🌳",
        pronunciation: "Na-shuh-nal Tree",
        title: "Banyan Tree",
        hindiTitle: "बरगद",
        description:
            "The banyan tree is the national tree of India.",
        hindiDescription:
            "बरगद भारत का राष्ट्रीय वृक्ष है.",
        example: "The banyan is India's national tree.",
        hindiExample: "बरगद भारत का राष्ट्रीय वृक्ष है."
    },

    {
        name: "National Fruit",
        hindi: "राष्ट्रीय फल",
        icon: "🥭",
        symbol: "🥭",
        pronunciation: "Na-shuh-nal Fruit",
        title: "Mango",
        hindiTitle: "आम",
        description:
            "Mango is recognized as the national fruit of India.",
        hindiDescription:
            "आम भारत का राष्ट्रीय फल है.",
        example: "Mango is India's national fruit.",
        hindiExample: "आम भारत का राष्ट्रीय फल है."
    },

    {
        name: "National River",
        hindi: "राष्ट्रीय नदी",
        icon: "🌊",
        symbol: "🌊",
        pronunciation: "Na-shuh-nal Riv-er",
        title: "Ganga",
        hindiTitle: "गंगा",
        description:
            "The Ganga is recognized as India's national river.",
        hindiDescription:
            "गंगा को भारत की राष्ट्रीय नदी के रूप में मान्यता प्राप्त है.",
        example: "The Ganga is India's national river.",
        hindiExample: "गंगा भारत की राष्ट्रीय नदी है."
    },

    {
        name: "National Aquatic Animal",
        hindi: "राष्ट्रीय जलीय जीव",
        icon: "🐬",
        symbol: "🐬",
        pronunciation: "Na-shuh-nal A-qua-tic An-i-mal",
        title: "Ganges River Dolphin",
        hindiTitle: "गंगा नदी डॉल्फिन",
        description:
            "The Ganges river dolphin is India's national aquatic animal.",
        hindiDescription:
            "गंगा नदी डॉल्फिन भारत का राष्ट्रीय जलीय जीव है.",
        example: "The Ganges river dolphin is India's national aquatic animal.",
        hindiExample: "गंगा नदी डॉल्फिन भारत का राष्ट्रीय जलीय जीव है."
    },

    {
        name: "National Calendar",
        hindi: "राष्ट्रीय कैलेंडर",
        icon: "📅",
        symbol: "📅",
        pronunciation: "Na-shuh-nal Cal-en-dar",
        title: "Saka Calendar",
        hindiTitle: "शक कैलेंडर",
        description:
            "The Saka calendar is India's national calendar and is used along with the Gregorian calendar for official purposes.",
        hindiDescription:
            "शक कैलेंडर भारत का राष्ट्रीय कैलेंडर है और आधिकारिक कार्यों में ग्रेगोरियन कैलेंडर के साथ उपयोग किया जाता है.",
        example: "The Saka calendar is India's national calendar.",
        hindiExample: "शक कैलेंडर भारत का राष्ट्रीय कैलेंडर है."
    },

    {
        name: "National Currency Symbol",
        hindi: "राष्ट्रीय मुद्रा चिह्न",
        icon: "₹",
        symbol: "₹",
        pronunciation: "Na-shuh-nal Cur-ren-cy Sym-bol",
        title: "Indian Rupee Symbol",
        hindiTitle: "भारतीय रुपया चिह्न",
        description:
            "₹ is the symbol used for the Indian rupee.",
        hindiDescription:
            "₹ भारतीय रुपये के लिए उपयोग किया जाने वाला मुद्रा चिह्न है.",
        example: "₹ represents the Indian rupee.",
        hindiExample: "₹ भारतीय रुपये को दर्शाता है."
    },

    {
        name: "National Motto",
        hindi: "राष्ट्रीय आदर्श वाक्य",
        icon: "☸️",
        symbol: "☸️",
        pronunciation: "Na-shuh-nal Mot-to",
        title: "Satyameva Jayate",
        hindiTitle: "सत्यमेव जयते",
        description:
            "Satyameva Jayate means 'Truth Alone Triumphs' and is India's national motto.",
        hindiDescription:
            "सत्यमेव जयते का अर्थ है 'सत्य की ही विजय होती है' और यह भारत का राष्ट्रीय आदर्श वाक्य है.",
        example: "Satyameva Jayate is written below the State Emblem.",
        hindiExample: "सत्यमेव जयते राजकीय प्रतीक के नीचे लिखा जाता है."
    },

    {
        name: "National Heritage Animal",
        hindi: "राष्ट्रीय विरासत पशु",
        icon: "🐘",
        symbol: "🐘",
        pronunciation: "Na-shuh-nal Her-i-tage An-i-mal",
        title: "Indian Elephant",
        hindiTitle: "भारतीय हाथी",
        description:
            "The Indian elephant has been designated as India's National Heritage Animal.",
        hindiDescription:
            "भारतीय हाथी को भारत का राष्ट्रीय विरासत पशु घोषित किया गया है.",
        example: "The Indian elephant is a National Heritage Animal.",
        hindiExample: "भारतीय हाथी राष्ट्रीय विरासत पशु है."
    }

];



/* =========================================================
   NATIONAL SYMBOL SEARCH
   ========================================================= */

function searchNationalSymbols(query = "") {

    const q = String(query).trim().toLowerCase();

    if (!q) {
        return NATIONAL_SYMBOLS;
    }

    return NATIONAL_SYMBOLS.filter(item => {

        return (
            item.name.toLowerCase().includes(q) ||
            item.hindi.toLowerCase().includes(q) ||
            item.title.toLowerCase().includes(q) ||
            item.hindiTitle.toLowerCase().includes(q)
        );

    });

}



/* =========================================================
   GET NATIONAL SYMBOL
   ========================================================= */

function getNationalSymbolData(symbol) {

    if (!symbol) return null;

    return NATIONAL_SYMBOLS.find(item =>
        item.name === symbol.name ||
        item.hindi === symbol.hindi ||
        item.title === symbol.title
    ) || symbol;

}



/* =========================================================
   DEBUG COUNTS
   ========================================================= */

console.log(
    "Indian Festivals:",
    FESTIVALS.length
);

console.log(
    "National Symbols:",
    NATIONAL_SYMBOLS.length
);


/* =========================================================
   PART 5 END
   ========================================================= */
/* =========================================================
   PART 6
   SEASONS + MONTHS + DAYS + TIME & CALENDAR
   ========================================================= */


/* =========================================================
   SEASONS
   ========================================================= */

const SEASONS = [

    {
        name: "Spring",
        hindi: "वसंत ऋतु",
        icon: "🌸",
        pronunciation: "Spring",
        description:
            "Spring is a season when many plants grow flowers and new leaves appear. In India, spring is generally associated with pleasant weather between winter and summer.",
        hindiDescription:
            "वसंत ऋतु में अनेक पौधों पर फूल खिलते हैं और नई पत्तियाँ आती हैं। भारत में वसंत को सामान्यतः सर्दी और गर्मी के बीच की सुहावनी ऋतु माना जाता है.",
        example: "Flowers bloom during spring.",
        hindiExample: "वसंत ऋतु में फूल खिलते हैं."
    },

    {
        name: "Summer",
        hindi: "ग्रीष्म ऋतु",
        icon: "☀️",
        pronunciation: "Sum-mer",
        description:
            "Summer is the hot season. Days are generally warmer and people often enjoy cold drinks, fruits and indoor activities.",
        hindiDescription:
            "ग्रीष्म ऋतु गर्मी का मौसम है। इस समय दिन सामान्यतः अधिक गर्म होते हैं और लोग ठंडे पेय, फलों तथा घर के अंदर की गतिविधियों का आनंद लेते हैं.",
        example: "Summer days can be very hot.",
        hindiExample: "गर्मी के दिन बहुत गर्म हो सकते हैं."
    },

    {
        name: "Monsoon",
        hindi: "वर्षा ऋतु",
        icon: "🌧️",
        pronunciation: "Mon-soon",
        description:
            "The monsoon season brings seasonal rainfall to many parts of India.",
        hindiDescription:
            "वर्षा ऋतु भारत के कई हिस्सों में मौसमी वर्षा लेकर आती है.",
        example: "Farmers welcome the monsoon rains.",
        hindiExample: "किसान मानसून की वर्षा का स्वागत करते हैं."
    },

    {
        name: "Autumn",
        hindi: "शरद ऋतु",
        icon: "🍂",
        pronunciation: "Aw-tum",
        description:
            "Autumn is traditionally associated with a transition after the rainy season and before winter in the Indian seasonal cycle.",
        hindiDescription:
            "भारतीय ऋतु चक्र में शरद ऋतु वर्षा ऋतु के बाद और सर्दी से पहले के समय से जुड़ी है.",
        example: "The weather becomes clearer in autumn.",
        hindiExample: "शरद ऋतु में मौसम अधिक साफ हो जाता है."
    },

    {
        name: "Pre-Winter",
        hindi: "हेमंत ऋतु",
        icon: "🍁",
        pronunciation: "Pre-win-ter",
        description:
            "Hemanta is traditionally considered a transition period leading toward winter in the Indian six-season cycle.",
        hindiDescription:
            "हेमंत ऋतु भारतीय छह-ऋतु चक्र में शीत ऋतु की ओर बढ़ने वाला संक्रमण काल माना जाता है.",
        example: "Hemanta comes before the main winter season.",
        hindiExample: "हेमंत मुख्य शीत ऋतु से पहले आता है."
    },

    {
        name: "Winter",
        hindi: "शीत ऋतु",
        icon: "❄️",
        pronunciation: "Win-ter",
        description:
            "Winter is the cold season. Temperatures are generally lower and people often wear warm clothes.",
        hindiDescription:
            "शीत ऋतु ठंड का मौसम है। इस समय तापमान सामान्यतः कम होता है और लोग गर्म कपड़े पहनते हैं.",
        example: "People wear warm clothes in winter.",
        hindiExample: "सर्दियों में लोग गर्म कपड़े पहनते हैं."
    }

];



/* =========================================================
   MONTHS
   ========================================================= */

const MONTHS = [

    {
        number: 1,
        name: "January",
        hindi: "जनवरी",
        short: "Jan",
        icon: "❄️",
        days: 31,
        pronunciation: "Jan-yoo-air-ee",
        description:
            "January is the first month of the Gregorian calendar and has 31 days.",
        hindiDescription:
            "जनवरी ग्रेगोरियन कैलेंडर का पहला महीना है और इसमें 31 दिन होते हैं.",
        example: "January is the first month of the year.",
        hindiExample: "जनवरी वर्ष का पहला महीना है."
    },

    {
        number: 2,
        name: "February",
        hindi: "फरवरी",
        short: "Feb",
        icon: "💗",
        days: 28,
        leapDays: 29,
        pronunciation: "Feb-roo-air-ee",
        description:
            "February is the second month. It has 28 days in a common year and 29 days in a leap year.",
        hindiDescription:
            "फरवरी दूसरा महीना है। सामान्य वर्ष में इसमें 28 दिन और लीप वर्ष में 29 दिन होते हैं.",
        example: "February has 28 or 29 days.",
        hindiExample: "फरवरी में 28 या 29 दिन होते हैं."
    },

    {
        number: 3,
        name: "March",
        hindi: "मार्च",
        short: "Mar",
        icon: "🌸",
        days: 31,
        pronunciation: "March",
        description:
            "March is the third month of the year and has 31 days.",
        hindiDescription:
            "मार्च वर्ष का तीसरा महीना है और इसमें 31 दिन होते हैं.",
        example: "Holi is often celebrated in March.",
        hindiExample: "होली अक्सर मार्च में मनाई जाती है."
    },

    {
        number: 4,
        name: "April",
        hindi: "अप्रैल",
        short: "Apr",
        icon: "🌼",
        days: 30,
        pronunciation: "Ay-pril",
        description:
            "April is the fourth month and has 30 days.",
        hindiDescription:
            "अप्रैल चौथा महीना है और इसमें 30 दिन होते हैं.",
        example: "April has 30 days.",
        hindiExample: "अप्रैल में 30 दिन होते हैं."
    },

    {
        number: 5,
        name: "May",
        hindi: "मई",
        short: "May",
        icon: "☀️",
        days: 31,
        pronunciation: "May",
        description:
            "May is the fifth month and has 31 days.",
        hindiDescription:
            "मई पाँचवाँ महीना है और इसमें 31 दिन होते हैं.",
        example: "May can be very warm in many parts of India.",
        hindiExample: "भारत के कई हिस्सों में मई बहुत गर्म हो सकता है."
    },

    {
        number: 6,
        name: "June",
        hindi: "जून",
        short: "Jun",
        icon: "🌧️",
        days: 30,
        pronunciation: "Joon",
        description:
            "June is the sixth month and has 30 days.",
        hindiDescription:
            "जून छठा महीना है और इसमें 30 दिन होते हैं.",
        example: "The monsoon begins in some parts of India around June.",
        hindiExample: "भारत के कुछ हिस्सों में जून के आसपास मानसून शुरू होता है."
    },

    {
        number: 7,
        name: "July",
        hindi: "जुलाई",
        short: "Jul",
        icon: "🌧️",
        days: 31,
        pronunciation: "Joo-ly",
        description:
            "July is the seventh month and has 31 days.",
        hindiDescription:
            "जुलाई सातवाँ महीना है और इसमें 31 दिन होते हैं.",
        example: "July has 31 days.",
        hindiExample: "जुलाई में 31 दिन होते हैं."
    },

    {
        number: 8,
        name: "August",
        hindi: "अगस्त",
        short: "Aug",
        icon: "🇮🇳",
        days: 31,
        pronunciation: "Aw-gust",
        description:
            "August is the eighth month and has 31 days.",
        hindiDescription:
            "अगस्त आठवाँ महीना है और इसमें 31 दिन होते हैं.",
        example: "India celebrates Independence Day in August.",
        hindiExample: "भारत अगस्त में स्वतंत्रता दिवस मनाता है."
    },

    {
        number: 9,
        name: "September",
        hindi: "सितंबर",
        short: "Sep",
        icon: "🍃",
        days: 30,
        pronunciation: "Sep-tem-ber",
        description:
            "September is the ninth month and has 30 days.",
        hindiDescription:
            "सितंबर नौवाँ महीना है और इसमें 30 दिन होते हैं.",
        example: "September has 30 days.",
        hindiExample: "सितंबर में 30 दिन होते हैं."
    },

    {
        number: 10,
        name: "October",
        hindi: "अक्टूबर",
        short: "Oct",
        icon: "🪔",
        days: 31,
        pronunciation: "Ok-to-ber",
        description:
            "October is the tenth month and has 31 days.",
        hindiDescription:
            "अक्टूबर दसवाँ महीना है और इसमें 31 दिन होते हैं.",
        example: "Diwali is often celebrated in October or November.",
        hindiExample: "दीवाली अक्सर अक्टूबर या नवंबर में मनाई जाती है."
    },

    {
        number: 11,
        name: "November",
        hindi: "नवंबर",
        short: "Nov",
        icon: "🍂",
        days: 30,
        pronunciation: "No-vem-ber",
        description:
            "November is the eleventh month and has 30 days.",
        hindiDescription:
            "नवंबर ग्यारहवाँ महीना है और इसमें 30 दिन होते हैं.",
        example: "November has 30 days.",
        hindiExample: "नवंबर में 30 दिन होते हैं."
    },

    {
        number: 12,
        name: "December",
        hindi: "दिसंबर",
        short: "Dec",
        icon: "🎄",
        days: 31,
        pronunciation: "De-sem-ber",
        description:
            "December is the twelfth and final month of the Gregorian calendar and has 31 days.",
        hindiDescription:
            "दिसंबर ग्रेगोरियन कैलेंडर का बारहवाँ और अंतिम महीना है और इसमें 31 दिन होते हैं.",
        example: "December is the last month of the year.",
        hindiExample: "दिसंबर वर्ष का अंतिम महीना है."
    }

];



/* =========================================================
   DAYS OF WEEK
   ========================================================= */

const DAYS = [

    {
        number: 1,
        name: "Monday",
        hindi: "सोमवार",
        short: "Mon",
        icon: "🌙",
        pronunciation: "Mun-day",
        description:
            "Monday is commonly considered the first day of the working week in many countries.",
        hindiDescription:
            "सोमवार को कई देशों में कार्य सप्ताह का पहला दिन माना जाता है.",
        example: "School starts on Monday.",
        hindiExample: "स्कूल सोमवार से शुरू होता है."
    },

    {
        number: 2,
        name: "Tuesday",
        hindi: "मंगलवार",
        short: "Tue",
        icon: "🔥",
        pronunciation: "Tooz-day",
        description:
            "Tuesday is the second day of the standard Monday-to-Sunday week.",
        hindiDescription:
            "सोमवार से रविवार वाले सामान्य सप्ताह में मंगलवार दूसरा दिन है.",
        example: "Tuesday comes after Monday.",
        hindiExample: "मंगलवार सोमवार के बाद आता है."
    },

    {
        number: 3,
        name: "Wednesday",
        hindi: "बुधवार",
        short: "Wed",
        icon: "🌿",
        pronunciation: "Wenz-day",
        description:
            "Wednesday is the third day of the standard Monday-to-Sunday week.",
        hindiDescription:
            "सोमवार से रविवार वाले सामान्य सप्ताह में बुधवार तीसरा दिन है.",
        example: "Wednesday comes in the middle of the working week.",
        hindiExample: "बुधवार कार्य सप्ताह के बीच में आता है."
    },

    {
        number: 4,
        name: "Thursday",
        hindi: "गुरुवार",
        short: "Thu",
        icon: "🌟",
        pronunciation: "Thurz-day",
        description:
            "Thursday is the fourth day of the standard Monday-to-Sunday week.",
        hindiDescription:
            "सोमवार से रविवार वाले सामान्य सप्ताह में गुरुवार चौथा दिन है.",
        example: "Thursday comes after Wednesday.",
        hindiExample: "गुरुवार बुधवार के बाद आता है."
    },

    {
        number: 5,
        name: "Friday",
        hindi: "शुक्रवार",
        short: "Fri",
        icon: "✨",
        pronunciation: "Fry-day",
        description:
            "Friday is the fifth day of the standard Monday-to-Sunday week.",
        hindiDescription:
            "सोमवार से रविवार वाले सामान्य सप्ताह में शुक्रवार पाँचवाँ दिन है.",
        example: "Friday comes before Saturday.",
        hindiExample: "शुक्रवार शनिवार से पहले आता है."
    },

    {
        number: 6,
        name: "Saturday",
        hindi: "शनिवार",
        short: "Sat",
        icon: "🪐",
        pronunciation: "Sat-er-day",
        description:
            "Saturday is the sixth day of the standard Monday-to-Sunday week.",
        hindiDescription:
            "सोमवार से रविवार वाले सामान्य सप्ताह में शनिवार छठा दिन है.",
        example: "Many people have a weekend break on Saturday.",
        hindiExample: "कई लोगों की शनिवार को सप्ताहांत की छुट्टी होती है."
    },

    {
        number: 7,
        name: "Sunday",
        hindi: "रविवार",
        short: "Sun",
        icon: "☀️",
        pronunciation: "Sun-day",
        description:
            "Sunday is the seventh day of the standard Monday-to-Sunday week.",
        hindiDescription:
            "सोमवार से रविवार वाले सामान्य सप्ताह में रविवार सातवाँ दिन है.",
        example: "Sunday is commonly a weekend day.",
        hindiExample: "रविवार सामान्यतः सप्ताहांत का दिन होता है."
    }

];



/* =========================================================
   TIME & CALENDAR
   ========================================================= */

const CALENDAR_INFO = {

    name: "Time & Calendar",

    hindi: "समय और कैलेंडर",

    icon: "🗓️",

    pronunciation: "Time and Cal-en-dar",

    description:
        "A calendar helps us organize days, weeks, months and years. A clock helps us measure and read time.",

    hindiDescription:
        "कैलेंडर हमें दिन, सप्ताह, महीने और वर्षों को व्यवस्थित करने में मदद करता है। घड़ी समय को मापने और पढ़ने में मदद करती है.",

    example:
        "There are 12 months in a Gregorian calendar year.",

    hindiExample:
        "ग्रेगोरियन कैलेंडर के एक वर्ष में 12 महीने होते हैं."

};



/* =========================================================
   TIME UNITS
   ========================================================= */

const TIME_UNITS = [

    {
        name: "Second",
        hindi: "सेकंड",
        icon: "⏱️",
        value: "60 seconds = 1 minute",
        hindiValue: "60 सेकंड = 1 मिनट",
        description:
            "A second is a basic unit used to measure time.",
        hindiDescription:
            "सेकंड समय मापने की एक मूल इकाई है."
    },

    {
        name: "Minute",
        hindi: "मिनट",
        icon: "⏰",
        value: "60 minutes = 1 hour",
        hindiValue: "60 मिनट = 1 घंटा",
        description:
            "A minute contains 60 seconds.",
        hindiDescription:
            "एक मिनट में 60 सेकंड होते हैं."
    },

    {
        name: "Hour",
        hindi: "घंटा",
        icon: "🕐",
        value: "24 hours = 1 day",
        hindiValue: "24 घंटे = 1 दिन",
        description:
            "An hour contains 60 minutes.",
        hindiDescription:
            "एक घंटे में 60 मिनट होते हैं."
    },

    {
        name: "Day",
        hindi: "दिन",
        icon: "🌞",
        value: "7 days = 1 week",
        hindiValue: "7 दिन = 1 सप्ताह",
        description:
            "A day is divided into 24 hours.",
        hindiDescription:
            "एक दिन को 24 घंटों में बाँटा जाता है."
    },

    {
        name: "Week",
        hindi: "सप्ताह",
        icon: "📅",
        value: "7 days = 1 week",
        hindiValue: "7 दिन = 1 सप्ताह",
        description:
            "A week contains seven days.",
        hindiDescription:
            "एक सप्ताह में सात दिन होते हैं."
    },

    {
        name: "Month",
        hindi: "महीना",
        icon: "🗓️",
        value: "12 months = 1 year",
        hindiValue: "12 महीने = 1 वर्ष",
        description:
            "A month is a calendar period. Gregorian months have 28 to 31 days.",
        hindiDescription:
            "महीना कैलेंडर की एक समय अवधि है। ग्रेगोरियन कैलेंडर के महीनों में 28 से 31 दिन होते हैं."
    },

    {
        name: "Year",
        hindi: "वर्ष",
        icon: "🌍",
        value: "365 days in a common year",
        hindiValue: "सामान्य वर्ष में 365 दिन",
        description:
            "A common Gregorian calendar year has 365 days. A leap year has 366 days.",
        hindiDescription:
            "सामान्य ग्रेगोरियन वर्ष में 365 दिन होते हैं। लीप वर्ष में 366 दिन होते हैं."
    }

];



/* =========================================================
   MONTH SEARCH
   ========================================================= */

function searchMonths(query = "") {

    const q = String(query).trim().toLowerCase();

    if (!q) {
        return MONTHS;
    }

    return MONTHS.filter(item => {

        return (
            item.name.toLowerCase().includes(q) ||
            item.hindi.toLowerCase().includes(q) ||
            item.short.toLowerCase().includes(q)
        );

    });

}



/* =========================================================
   DAY SEARCH
   ========================================================= */

function searchDays(query = "") {

    const q = String(query).trim().toLowerCase();

    if (!q) {
        return DAYS;
    }

    return DAYS.filter(item => {

        return (
            item.name.toLowerCase().includes(q) ||
            item.hindi.toLowerCase().includes(q) ||
            item.short.toLowerCase().includes(q)
        );

    });

}



/* =========================================================
   SEASON SEARCH
   ========================================================= */

function searchSeasons(query = "") {

    const q = String(query).trim().toLowerCase();

    if (!q) {
        return SEASONS;
    }

    return SEASONS.filter(item => {

        return (
            item.name.toLowerCase().includes(q) ||
            item.hindi.toLowerCase().includes(q)
        );

    });

}



/* =========================================================
   CALENDAR SEARCH
   ========================================================= */

function searchCalendar(query = "") {

    const q = String(query).trim().toLowerCase();

    if (!q) {
        return [
            CALENDAR_INFO,
            ...TIME_UNITS
        ];
    }

    return [
        CALENDAR_INFO,
        ...TIME_UNITS
    ].filter(item => {

        return (
            item.name.toLowerCase().includes(q) ||
            item.hindi.toLowerCase().includes(q) ||
            String(item.value || "").toLowerCase().includes(q) ||
            String(item.hindiValue || "").toLowerCase().includes(q)
        );

    });

}



/* =========================================================
   GET MONTH
   ========================================================= */

function getMonthData(month) {

    if (!month) return null;

    return MONTHS.find(item =>
        item.number === month.number ||
        item.name === month.name ||
        item.hindi === month.hindi
    ) || month;

}



/* =========================================================
   GET DAY
   ========================================================= */

function getDayData(day) {

    if (!day) return null;

    return DAYS.find(item =>
        item.number === day.number ||
        item.name === day.name ||
        item.hindi === day.hindi
    ) || day;

}



/* =========================================================
   GET SEASON
   ========================================================= */

function getSeasonData(season) {

    if (!season) return null;

    return SEASONS.find(item =>
        item.name === season.name ||
        item.hindi === season.hindi
    ) || season;

}



/* =========================================================
   GET CALENDAR DATA
   ========================================================= */

function getCalendarData(item) {

    if (!item) return null;

    if (item.name === CALENDAR_INFO.name) {
        return CALENDAR_INFO;
    }

    return TIME_UNITS.find(unit =>
        unit.name === item.name ||
        unit.hindi === item.hindi
    ) || item;

}



/* =========================================================
   DEBUG COUNTS
   ========================================================= */

console.log(
    "Seasons:",
    SEASONS.length
);

console.log(
    "Months:",
    MONTHS.length
);

console.log(
    "Days:",
    DAYS.length
);

console.log(
    "Time Units:",
    TIME_UNITS.length
);


/* =========================================================
   PART 6 END
   ========================================================= */
/* =========================================================
   PART 7
   LANGUAGES + NUMBERS + GENERAL KNOWLEDGE
   ========================================================= */


/* =========================================================
   LANGUAGES
   ========================================================= */

const LANGUAGES = [

    {
        name: "Hindi",
        hindi: "हिंदी",
        icon: "🗣️",
        pronunciation: "Hin-dee",
        region: "India",
        hindiRegion: "भारत",
        description:
            "Hindi is one of the major languages of India and is widely spoken across many parts of the country.",
        hindiDescription:
            "हिंदी भारत की प्रमुख भाषाओं में से एक है और देश के कई हिस्सों में व्यापक रूप से बोली जाती है.",
        example: "Namaste means Hello in Hindi.",
        hindiExample: "नमस्ते हिंदी में अभिवादन का एक सामान्य शब्द है."
    },

    {
        name: "English",
        hindi: "अंग्रेज़ी",
        icon: "🌍",
        pronunciation: "Ing-glish",
        region: "Worldwide",
        hindiRegion: "विश्वभर",
        description:
            "English is an international language widely used in education, science, technology and communication.",
        hindiDescription:
            "अंग्रेज़ी एक अंतरराष्ट्रीय भाषा है जिसका उपयोग शिक्षा, विज्ञान, तकनीक और संचार में व्यापक रूप से होता है.",
        example: "Hello is a common English greeting.",
        hindiExample: "Hello अंग्रेज़ी में एक सामान्य अभिवादन है."
    },

    {
        name: "Gujarati",
        hindi: "गुजराती",
        icon: "🪔",
        pronunciation: "Goo-ja-ra-tee",
        region: "Gujarat, India",
        hindiRegion: "गुजरात, भारत",
        description:
            "Gujarati is an important language of Gujarat and is also spoken by Gujarati communities around the world.",
        hindiDescription:
            "गुजराती गुजरात की प्रमुख भाषा है और दुनिया भर के गुजराती समुदायों द्वारा भी बोली जाती है.",
        example: "નમસ્તે is a Gujarati greeting.",
        hindiExample: "નમસ્તે गुजराती में भी अभिवादन के लिए प्रयोग किया जाता है."
    },

    {
        name: "Marathi",
        hindi: "मराठी",
        icon: "📖",
        pronunciation: "Ma-ra-thee",
        region: "Maharashtra, India",
        hindiRegion: "महाराष्ट्र, भारत",
        description:
            "Marathi is the main language of Maharashtra.",
        hindiDescription:
            "मराठी महाराष्ट्र की प्रमुख भाषा है.",
        example: "नमस्कार is a common Marathi greeting.",
        hindiExample: "नमस्कार मराठी में सामान्य अभिवादन है."
    },

    {
        name: "Bengali",
        hindi: "बंगाली",
        icon: "📚",
        pronunciation: "Ben-ga-lee",
        region: "West Bengal and Bangladesh",
        hindiRegion: "पश्चिम बंगाल और बांग्लादेश",
        description:
            "Bengali is a major language spoken in eastern South Asia.",
        hindiDescription:
            "बंगाली पूर्वी दक्षिण एशिया की प्रमुख भाषाओं में से एक है.",
        example: "নমস্কার is a Bengali greeting.",
        hindiExample: "নমস্কার बंगाली में अभिवादन का एक शब्द है."
    },

    {
        name: "Tamil",
        hindi: "तमिल",
        icon: "📜",
        pronunciation: "Ta-mil",
        region: "Tamil Nadu, India",
        hindiRegion: "तमिलनाडु, भारत",
        description:
            "Tamil is a major language of southern India and has a very long literary tradition.",
        hindiDescription:
            "तमिल दक्षिण भारत की प्रमुख भाषा है और इसकी साहित्यिक परंपरा बहुत समृद्ध और प्राचीन है.",
        example: "வணக்கம் is a Tamil greeting.",
        hindiExample: "வணக்கம் तमिल में अभिवादन का शब्द है."
    },

    {
        name: "Telugu",
        hindi: "तेलुगु",
        icon: "📘",
        pronunciation: "Te-lu-goo",
        region: "Andhra Pradesh and Telangana, India",
        hindiRegion: "आंध्र प्रदेश और तेलंगाना, भारत",
        description:
            "Telugu is a major Dravidian language spoken mainly in Andhra Pradesh and Telangana.",
        hindiDescription:
            "तेलुगु एक प्रमुख द्रविड़ भाषा है जो मुख्य रूप से आंध्र प्रदेश और तेलंगाना में बोली जाती है.",
        example: "నమస్కారం is a Telugu greeting.",
        hindiExample: "నమస్కారం तेलुगु में अभिवादन का शब्द है."
    },

    {
        name: "Kannada",
        hindi: "कन्नड़",
        icon: "📗",
        pronunciation: "Kan-na-da",
        region: "Karnataka, India",
        hindiRegion: "कर्नाटक, भारत",
        description:
            "Kannada is the principal language of Karnataka.",
        hindiDescription:
            "कन्नड़ कर्नाटक की प्रमुख भाषा है.",
        example: "ನಮಸ್ಕಾರ is a Kannada greeting.",
        hindiExample: "ನಮಸ್ಕಾರ कन्नड़ में अभिवादन का शब्द है."
    },

    {
        name: "Malayalam",
        hindi: "मलयालम",
        icon: "🌴",
        pronunciation: "Ma-la-ya-lam",
        region: "Kerala, India",
        hindiRegion: "केरल, भारत",
        description:
            "Malayalam is the principal language of Kerala and is also spoken in parts of neighboring regions.",
        hindiDescription:
            "मलयालम केरल की प्रमुख भाषा है और आसपास के कुछ क्षेत्रों में भी बोली जाती है.",
        example: "നമസ്കാരം is a Malayalam greeting.",
        hindiExample: "നമസ്കാരം मलयालम में अभिवादन का शब्द है."
    },

    {
        name: "Punjabi",
        hindi: "पंजाबी",
        icon: "🎵",
        pronunciation: "Pun-ja-bee",
        region: "Punjab and other regions",
        hindiRegion: "पंजाब और अन्य क्षेत्र",
        description:
            "Punjabi is widely spoken in the Punjab region and by Punjabi communities around the world.",
        hindiDescription:
            "पंजाबी पंजाब क्षेत्र और दुनिया भर के पंजाबी समुदायों में व्यापक रूप से बोली जाती है.",
        example: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ is a common Punjabi greeting.",
        hindiExample: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ पंजाबी में सामान्य अभिवादन है."
    },

    {
        name: "Urdu",
        hindi: "उर्दू",
        icon: "🖋️",
        pronunciation: "Oor-doo",
        region: "South Asia",
        hindiRegion: "दक्षिण एशिया",
        description:
            "Urdu is an important South Asian language with a rich literary tradition.",
        hindiDescription:
            "उर्दू दक्षिण एशिया की एक महत्वपूर्ण भाषा है जिसकी साहित्यिक परंपरा समृद्ध है.",
        example: "السلام علیکم is a common greeting in Urdu-speaking communities.",
        hindiExample: "السلام علیکم उर्दू भाषी समुदायों में सामान्य अभिवादन है."
    },

    {
        name: "Sanskrit",
        hindi: "संस्कृत",
        icon: "📜",
        pronunciation: "Sun-skrit",
        region: "India",
        hindiRegion: "भारत",
        description:
            "Sanskrit is an ancient classical language of India with an extensive body of literature.",
        hindiDescription:
            "संस्कृत भारत की एक प्राचीन शास्त्रीय भाषा है जिसका विशाल साहित्यिक भंडार है.",
        example: "नमः is a Sanskrit word.",
        hindiExample: "नमः संस्कृत का एक शब्द है."
    },

    {
        name: "Assamese",
        hindi: "असमिया",
        icon: "🌿",
        pronunciation: "As-sa-meez",
        region: "Assam, India",
        hindiRegion: "असम, भारत",
        description:
            "Assamese is the principal language of Assam.",
        hindiDescription:
            "असमिया असम की प्रमुख भाषा है.",
        example: "নমস্কাৰ is an Assamese greeting.",
        hindiExample: "নমস্কাৰ असमिया में अभिवादन का शब्द है."
    },

    {
        name: "Odia",
        hindi: "ओड़िया",
        icon: "📕",
        pronunciation: "O-di-ya",
        region: "Odisha, India",
        hindiRegion: "ओडिशा, भारत",
        description:
            "Odia is the principal language of Odisha.",
        hindiDescription:
            "ओड़िया ओडिशा की प्रमुख भाषा है.",
        example: "ନମସ୍କାର is an Odia greeting.",
        hindiExample: "ନମସ୍କାର ओड़िया में अभिवादन का शब्द है."
    },

    {
        name: "Kashmiri",
        hindi: "कश्मीरी",
        icon: "🏔️",
        pronunciation: "Kash-mee-ree",
        region: "Kashmir region",
        hindiRegion: "कश्मीर क्षेत्र",
        description:
            "Kashmiri is a language spoken mainly in the Kashmir region.",
        hindiDescription:
            "कश्मीरी मुख्य रूप से कश्मीर क्षेत्र में बोली जाने वाली भाषा है.",
        example: "Kashmiri has its own rich literary tradition.",
        hindiExample: "कश्मीरी की अपनी समृद्ध साहित्यिक परंपरा है."
    },

    {
        name: "Sindhi",
        hindi: "सिंधी",
        icon: "📖",
        pronunciation: "Sin-dhee",
        region: "South Asia",
        hindiRegion: "दक्षिण एशिया",
        description:
            "Sindhi is an important language of the Sindhi community in South Asia.",
        hindiDescription:
            "सिंधी दक्षिण एशिया के सिंधी समुदाय की महत्वपूर्ण भाषा है.",
        example: "Sindhi has a long literary tradition.",
        hindiExample: "सिंधी की लंबी साहित्यिक परंपरा है."
    },

    {
        name: "Konkani",
        hindi: "कोंकणी",
        icon: "🌴",
        pronunciation: "Kon-ka-nee",
        region: "Western coast of India",
        hindiRegion: "भारत का पश्चिमी तट",
        description:
            "Konkani is spoken along parts of India's western coast.",
        hindiDescription:
            "कोंकणी भारत के पश्चिमी तट के कुछ हिस्सों में बोली जाती है.",
        example: "Konkani is associated with the Konkan region.",
        hindiExample: "कोंकणी का संबंध कोंकण क्षेत्र से है."
    },

    {
        name: "Nepali",
        hindi: "नेपाली",
        icon: "🏔️",
        pronunciation: "Ne-pa-lee",
        region: "Nepal and parts of India",
        hindiRegion: "नेपाल और भारत के कुछ क्षेत्र",
        description:
            "Nepali is the official language of Nepal and is also spoken in parts of India.",
        hindiDescription:
            "नेपाली नेपाल की आधिकारिक भाषा है और भारत के कुछ हिस्सों में भी बोली जाती है.",
        example: "नमस्ते is commonly used in Nepali.",
        hindiExample: "नमस्ते नेपाली में भी सामान्य अभिवादन है."
    },

    {
        name: "Manipuri",
        hindi: "मणिपुरी",
        icon: "🌺",
        pronunciation: "Ma-ni-poo-ree",
        region: "Manipur, India",
        hindiRegion: "मणिपुर, भारत",
        description:
            "Manipuri, also known as Meitei, is a major language of Manipur.",
        hindiDescription:
            "मणिपुरी, जिसे मैतेई भी कहा जाता है, मणिपुर की प्रमुख भाषाओं में से एक है.",
        example: "Meitei is an important language of Manipur.",
        hindiExample: "मैतेई मणिपुर की महत्वपूर्ण भाषा है."
    },

    {
        name: "Maithili",
        hindi: "मैथिली",
        icon: "📚",
        pronunciation: "My-thi-lee",
        region: "Bihar and Jharkhand, India",
        hindiRegion: "बिहार और झारखंड, भारत",
        description:
            "Maithili is an important language of the Mithila region.",
        hindiDescription:
            "मैथिली मिथिला क्षेत्र की एक महत्वपूर्ण भाषा है.",
        example: "Maithili has a rich literary tradition.",
        hindiExample: "मैथिली की समृद्ध साहित्यिक परंपरा है."
    }

];



/* =========================================================
   NUMBERS 1 - 100
   ========================================================= */

const NUMBER_WORDS = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
    "Twenty",
    "Twenty-One",
    "Twenty-Two",
    "Twenty-Three",
    "Twenty-Four",
    "Twenty-Five",
    "Twenty-Six",
    "Twenty-Seven",
    "Twenty-Eight",
    "Twenty-Nine",
    "Thirty",
    "Thirty-One",
    "Thirty-Two",
    "Thirty-Three",
    "Thirty-Four",
    "Thirty-Five",
    "Thirty-Six",
    "Thirty-Seven",
    "Thirty-Eight",
    "Thirty-Nine",
    "Forty",
    "Forty-One",
    "Forty-Two",
    "Forty-Three",
    "Forty-Four",
    "Forty-Five",
    "Forty-Six",
    "Forty-Seven",
    "Forty-Eight",
    "Forty-Nine",
    "Fifty",
    "Fifty-One",
    "Fifty-Two",
    "Fifty-Three",
    "Fifty-Four",
    "Fifty-Five",
    "Fifty-Six",
    "Fifty-Seven",
    "Fifty-Eight",
    "Fifty-Nine",
    "Sixty",
    "Sixty-One",
    "Sixty-Two",
    "Sixty-Three",
    "Sixty-Four",
    "Sixty-Five",
    "Sixty-Six",
    "Sixty-Seven",
    "Sixty-Eight",
    "Sixty-Nine",
    "Seventy",
    "Seventy-One",
    "Seventy-Two",
    "Seventy-Three",
    "Seventy-Four",
    "Seventy-Five",
    "Seventy-Six",
    "Seventy-Seven",
    "Seventy-Eight",
    "Seventy-Nine",
    "Eighty",
    "Eighty-One",
    "Eighty-Two",
    "Eighty-Three",
    "Eighty-Four",
    "Eighty-Five",
    "Eighty-Six",
    "Eighty-Seven",
    "Eighty-Eight",
    "Eighty-Nine",
    "Ninety",
    "Ninety-One",
    "Ninety-Two",
    "Ninety-Three",
    "Ninety-Four",
    "Ninety-Five",
    "Ninety-Six",
    "Ninety-Seven",
    "Ninety-Eight",
    "Ninety-Nine",
    "One Hundred"
];

const HINDI_NUMBER_WORDS = [
    "",
    "एक",
    "दो",
    "तीन",
    "चार",
    "पाँच",
    "छह",
    "सात",
    "आठ",
    "नौ",
    "दस",
    "ग्यारह",
    "बारह",
    "तेरह",
    "चौदह",
    "पंद्रह",
    "सोलह",
    "सत्रह",
    "अठारह",
    "उन्नीस",
    "बीस",
    "इक्कीस",
    "बाईस",
    "तेईस",
    "चौबीस",
    "पच्चीस",
    "छब्बीस",
    "सत्ताईस",
    "अट्ठाईस",
    "उनतीस",
    "तीस",
    "इकतीस",
    "बत्तीस",
    "तैंतीस",
    "चौंतीस",
    "पैंतीस",
    "छत्तीस",
    "सैंतीस",
    "अड़तीस",
    "उनतालीस",
    "चालीस",
    "इकतालीस",
    "बयालीस",
    "तैंतालीस",
    "चवालीस",
    "पैंतालीस",
    "छियालीस",
    "सैंतालीस",
    "अड़तालीस",
    "उनचास",
    "पचास",
    "इक्यावन",
    "बावन",
    "तिरेपन",
    "चौवन",
    "पचपन",
    "छप्पन",
    "सत्तावन",
    "अट्ठावन",
    "उनसठ",
    "साठ",
    "इकसठ",
    "बासठ",
    "तिरसठ",
    "चौंसठ",
    "पैंसठ",
    "छियासठ",
    "सड़सठ",
    "अड़सठ",
    "उनहत्तर",
    "सत्तर",
    "इकहत्तर",
    "बहत्तर",
    "तिहत्तर",
    "चौहत्तर",
    "पचहत्तर",
    "छिहत्तर",
    "सतहत्तर",
    "अठहत्तर",
    "उनासी",
    "अस्सी",
    "इक्यासी",
    "बयासी",
    "तिरासी",
    "चौरासी",
    "पचासी",
    "छियासी",
    "सत्तासी",
    "अट्ठासी",
    "नवासी",
    "नब्बे",
    "इक्यानवे",
    "बानवे",
    "तिरानवे",
    "चौरानवे",
    "पंचानवे",
    "छियानवे",
    "सत्तानवे",
    "अट्ठानवे",
    "निन्यानवे",
    "एक सौ"
];



/* =========================================================
   CREATE NUMBERS 1 - 100
   ========================================================= */

const NUMBERS = Array.from(
    { length: 100 },
    (_, index) => {

        const number = index + 1;

        return {

            number,

            name: NUMBER_WORDS[number],

            hindi: HINDI_NUMBER_WORDS[number],

            icon:
                number === 100
                    ? "💯"
                    : number % 10 === 0
                        ? "🔟"
                        : "🔢",

            pronunciation:
                NUMBER_WORDS[number],

            description:
                `${number} is the number ${NUMBER_WORDS[number]}.`,

            hindiDescription:
                `${number} को हिंदी में ${HINDI_NUMBER_WORDS[number]} कहते हैं.`,

            example:
                `Number ${number} = ${NUMBER_WORDS[number]}.`,

            hindiExample:
                `संख्या ${number} = ${HINDI_NUMBER_WORDS[number]}.`

        };

    }
);



/* =========================================================
   MULTIPLICATION TABLES
   ========================================================= */

const TABLES = {

    2: Array.from(
        { length: 10 },
        (_, index) => {

            const n = index + 1;

            return {
                question: `2 × ${n}`,
                answer: 2 * n,
                hindi: `दो × ${n} = ${2 * n}`
            };

        }
    ),

    10: Array.from(
        { length: 10 },
        (_, index) => {

            const n = index + 1;

            return {
                question: `10 × ${n}`,
                answer: 10 * n,
                hindi: `दस × ${n} = ${10 * n}`
            };

        }
    )

};



/* =========================================================
   GENERAL KNOWLEDGE
   ========================================================= */

const GENERAL_KNOWLEDGE = [

    {
        question: "What is the capital of India?",
        hindiQuestion: "भारत की राजधानी क्या है?",
        answer: "New Delhi",
        hindiAnswer: "नई दिल्ली",
        icon: "🏛️",
        category: "India"
    },

    {
        question: "What is the currency of India?",
        hindiQuestion: "भारत की मुद्रा क्या है?",
        answer: "Indian Rupee",
        hindiAnswer: "भारतीय रुपया",
        icon: "₹",
        category: "India"
    },

    {
        question: "What is the national animal of India?",
        hindiQuestion: "भारत का राष्ट्रीय पशु कौन सा है?",
        answer: "Royal Bengal Tiger",
        hindiAnswer: "रॉयल बंगाल टाइगर",
        icon: "🐅",
        category: "India"
    },

    {
        question: "What is the national bird of India?",
        hindiQuestion: "भारत का राष्ट्रीय पक्षी कौन सा है?",
        answer: "Indian Peacock",
        hindiAnswer: "भारतीय मोर",
        icon: "🦚",
        category: "India"
    },

    {
        question: "What is the national flower of India?",
        hindiQuestion: "भारत का राष्ट्रीय फूल कौन सा है?",
        answer: "Lotus",
        hindiAnswer: "कमल",
        icon: "🪷",
        category: "India"
    },

    {
        question: "How many states are there in India?",
        hindiQuestion: "भारत में कितने राज्य हैं?",
        answer: "28 states",
        hindiAnswer: "28 राज्य",
        icon: "🇮🇳",
        category: "India"
    },

    {
        question: "How many Union Territories are there in India?",
        hindiQuestion: "भारत में कितने केंद्र शासित प्रदेश हैं?",
        answer: "8 Union Territories",
        hindiAnswer: "8 केंद्र शासित प्रदेश",
        icon: "🗺️",
        category: "India"
    },

    {
        question: "How many days are there in a week?",
        hindiQuestion: "एक सप्ताह में कितने दिन होते हैं?",
        answer: "7 days",
        hindiAnswer: "7 दिन",
        icon: "📅",
        category: "Time"
    },

    {
        question: "How many months are there in a year?",
        hindiQuestion: "एक वर्ष में कितने महीने होते हैं?",
        answer: "12 months",
        hindiAnswer: "12 महीने",
        icon: "🗓️",
        category: "Time"
    },

    {
        question: "How many hours are there in a day?",
        hindiQuestion: "एक दिन में कितने घंटे होते हैं?",
        answer: "24 hours",
        hindiAnswer: "24 घंटे",
        icon: "⏰",
        category: "Time"
    },

    {
        question: "How many minutes are there in one hour?",
        hindiQuestion: "एक घंटे में कितने मिनट होते हैं?",
        answer: "60 minutes",
        hindiAnswer: "60 मिनट",
        icon: "⏱️",
        category: "Time"
    },

    {
        question: "How many seconds are there in one minute?",
        hindiQuestion: "एक मिनट में कितने सेकंड होते हैं?",
        answer: "60 seconds",
        hindiAnswer: "60 सेकंड",
        icon: "⏱️",
        category: "Time"
    },

    {
        question: "Which planet do we live on?",
        hindiQuestion: "हम किस ग्रह पर रहते हैं?",
        answer: "Earth",
        hindiAnswer: "पृथ्वी",
        icon: "🌍",
        category: "Science"
    },

    {
        question: "Which planet is closest to the Sun?",
        hindiQuestion: "सूर्य के सबसे निकट कौन सा ग्रह है?",
        answer: "Mercury",
        hindiAnswer: "बुध",
        icon: "☿️",
        category: "Space"
    },

    {
        question: "Which planet is known as the Red Planet?",
        hindiQuestion: "लाल ग्रह किसे कहा जाता है?",
        answer: "Mars",
        hindiAnswer: "मंगल",
        icon: "🔴",
        category: "Space"
    },

    {
        question: "Which is the largest planet in our Solar System?",
        hindiQuestion: "हमारे सौरमंडल का सबसे बड़ा ग्रह कौन सा है?",
        answer: "Jupiter",
        hindiAnswer: "बृहस्पति",
        icon: "🪐",
        category: "Space"
    },

    {
        question: "Which star is closest to Earth?",
        hindiQuestion: "पृथ्वी के सबसे निकट कौन सा तारा है?",
        answer: "The Sun",
        hindiAnswer: "सूर्य",
        icon: "☀️",
        category: "Space"
    },

    {
        question: "What is H₂O commonly called?",
        hindiQuestion: "H₂O को सामान्यतः क्या कहा जाता है?",
        answer: "Water",
        hindiAnswer: "पानी",
        icon: "💧",
        category: "Science"
    },

    {
        question: "Which organ pumps blood through the body?",
        hindiQuestion: "शरीर में रक्त पंप करने वाला अंग कौन सा है?",
        answer: "Heart",
        hindiAnswer: "हृदय",
        icon: "❤️",
        category: "Human Body"
    },

    {
        question: "Which organ helps us think?",
        hindiQuestion: "सोचने में कौन सा अंग मदद करता है?",
        answer: "Brain",
        hindiAnswer: "मस्तिष्क",
        icon: "🧠",
        category: "Human Body"
    },

    {
        question: "Which gas do humans need for breathing?",
        hindiQuestion: "मनुष्य को साँस लेने के लिए किस गैस की आवश्यकता होती है?",
        answer: "Oxygen",
        hindiAnswer: "ऑक्सीजन",
        icon: "🫁",
        category: "Science"
    },

    {
        question: "Which gas do plants use for photosynthesis?",
        hindiQuestion: "पौधे प्रकाश संश्लेषण के लिए किस गैस का उपयोग करते हैं?",
        answer: "Carbon dioxide",
        hindiAnswer: "कार्बन डाइऑक्साइड",
        icon: "🌱",
        category: "Science"
    },

    {
        question: "How many continents are commonly recognized?",
        hindiQuestion: "सामान्यतः कितने महाद्वीप माने जाते हैं?",
        answer: "7 continents",
        hindiAnswer: "7 महाद्वीप",
        icon: "🌎",
        category: "Geography"
    },

    {
        question: "How many oceans are commonly recognized?",
        hindiQuestion: "सामान्यतः कितने महासागर माने जाते हैं?",
        answer: "5 oceans",
        hindiAnswer: "5 महासागर",
        icon: "🌊",
        category: "Geography"
    },

    {
        question: "Which is the largest ocean?",
        hindiQuestion: "सबसे बड़ा महासागर कौन सा है?",
        answer: "Pacific Ocean",
        hindiAnswer: "प्रशांत महासागर",
        icon: "🌊",
        category: "Geography"
    },

    {
        question: "Which is the highest mountain above sea level?",
        hindiQuestion: "समुद्र तल से सबसे ऊँचा पर्वत कौन सा है?",
        answer: "Mount Everest",
        hindiAnswer: "माउंट एवरेस्ट",
        icon: "🏔️",
        category: "Geography"
    },

    {
        question: "Which is the largest mammal?",
        hindiQuestion: "सबसे बड़ा स्तनधारी कौन सा है?",
        answer: "Blue Whale",
        hindiAnswer: "नीली व्हेल",
        icon: "🐋",
        category: "Animals"
    },

    {
        question: "Which animal is known as the King of the Jungle?",
        hindiQuestion: "किस जानवर को जंगल का राजा कहा जाता है?",
        answer: "Lion",
        hindiAnswer: "शेर",
        icon: "🦁",
        category: "Animals"
    },

    {
        question: "Which bird is known for its colourful tail feathers?",
        hindiQuestion: "कौन सा पक्षी अपने रंगीन पूँछ के पंखों के लिए जाना जाता है?",
        answer: "Peacock",
        hindiAnswer: "मोर",
        icon: "🦚",
        category: "Birds"
    },

    {
        question: "What do bees make?",
        hindiQuestion: "मधुमक्खियाँ क्या बनाती हैं?",
        answer: "Honey",
        hindiAnswer: "शहद",
        icon: "🐝",
        category: "Animals"
    },

    {
        question: "Which sense organ helps us see?",
        hindiQuestion: "कौन सा ज्ञानेंद्रिय हमें देखने में मदद करता है?",
        answer: "Eyes",
        hindiAnswer: "आँखें",
        icon: "👁️",
        category: "Human Body"
    },

    {
        question: "Which sense organ helps us hear?",
        hindiQuestion: "कौन सा ज्ञानेंद्रिय हमें सुनने में मदद करता है?",
        answer: "Ears",
        hindiAnswer: "कान",
        icon: "👂",
        category: "Human Body"
    },

    {
        question: "Which sense organ helps us smell?",
        hindiQuestion: "कौन सा ज्ञानेंद्रिय हमें सूँघने में मदद करता है?",
        answer: "Nose",
        hindiAnswer: "नाक",
        icon: "👃",
        category: "Human Body"
    },

    {
        question: "Which sense organ helps us taste?",
        hindiQuestion: "कौन सा ज्ञानेंद्रिय हमें स्वाद महसूस करने में मदद करता है?",
        answer: "Tongue",
        hindiAnswer: "जीभ",
        icon: "👅",
        category: "Human Body"
    },

    {
        question: "Which sense organ helps us feel touch?",
        hindiQuestion: "कौन सा अंग स्पर्श महसूस करने में मदद करता है?",
        answer: "Skin",
        hindiAnswer: "त्वचा",
        icon: "🖐️",
        category: "Human Body"
    },

    {
        question: "What is the boiling point of water at sea level?",
        hindiQuestion: "समुद्र तल पर पानी का क्वथनांक कितना होता है?",
        answer: "100°C",
        hindiAnswer: "100°C",
        icon: "♨️",
        category: "Science"
    },

    {
        question: "What is the freezing point of water?",
        hindiQuestion: "पानी का हिमांक कितना होता है?",
        answer: "0°C",
        hindiAnswer: "0°C",
        icon: "🧊",
        category: "Science"
    },

    {
        question: "What is the natural satellite of Earth?",
        hindiQuestion: "पृथ्वी का प्राकृतिक उपग्रह कौन सा है?",
        answer: "Moon",
        hindiAnswer: "चंद्रमा",
        icon: "🌕",
        category: "Space"
    },

    {
        question: "How many sides does a triangle have?",
        hindiQuestion: "त्रिभुज की कितनी भुजाएँ होती हैं?",
        answer: "3 sides",
        hindiAnswer: "3 भुजाएँ",
        icon: "🔺",
        category: "Mathematics"
    },

    {
        question: "How many sides does a square have?",
        hindiQuestion: "वर्ग की कितनी भुजाएँ होती हैं?",
        answer: "4 sides",
        hindiAnswer: "4 भुजाएँ",
        icon: "⬜",
        category: "Mathematics"
    }

];



/* =========================================================
   LANGUAGE SEARCH
   ========================================================= */

function searchLanguages(query = "") {

    const q = String(query).trim().toLowerCase();

    if (!q) {
        return LANGUAGES;
    }

    return LANGUAGES.filter(item => {

        return (
            item.name.toLowerCase().includes(q) ||
            item.hindi.toLowerCase().includes(q) ||
            item.region.toLowerCase().includes(q) ||
            item.hindiRegion.toLowerCase().includes(q)
        );

    });

}



/* =========================================================
   NUMBER SEARCH
   ========================================================= */

function searchNumbers(query = "") {

    const q = String(query).trim().toLowerCase();

    if (!q) {
        return NUMBERS;
    }

    return NUMBERS.filter(item => {

        return (
            String(item.number) === q ||
            item.name.toLowerCase().includes(q) ||
            item.hindi.includes(q)
        );

    });

}



/* =========================================================
   GENERAL KNOWLEDGE SEARCH
   ========================================================= */

function searchGeneralKnowledge(query = "") {

    const q = String(query).trim().toLowerCase();

    if (!q) {
        return GENERAL_KNOWLEDGE;
    }

    return GENERAL_KNOWLEDGE.filter(item => {

        return (
            item.question.toLowerCase().includes(q) ||
            item.hindiQuestion.toLowerCase().includes(q) ||
            item.answer.toLowerCase().includes(q) ||
            item.hindiAnswer.toLowerCase().includes(q) ||
            item.category.toLowerCase().includes(q)
        );

    });

}



/* =========================================================
   GET LANGUAGE
   ========================================================= */

function getLanguageData(language) {

    if (!language) return null;

    return LANGUAGES.find(item =>
        item.name === language.name ||
        item.hindi === language.hindi
    ) || language;

}



/* =========================================================
   GET NUMBER
   ========================================================= */

function getNumberData(number) {

    if (!number) return null;

    return NUMBERS.find(item =>
        item.number === number.number
    ) || number;

}



/* =========================================================
   GET GENERAL KNOWLEDGE
   ========================================================= */

function getGeneralKnowledgeData(item) {

    if (!item) return null;

    return GENERAL_KNOWLEDGE.find(data =>
        data.question === item.question ||
        data.hindiQuestion === item.hindiQuestion
    ) || item;

}



/* =========================================================
   DEBUG COUNTS
   ========================================================= */

console.log(
    "Languages:",
    LANGUAGES.length
);

console.log(
    "Numbers:",
    NUMBERS.length
);

console.log(
    "Multiplication Tables:",
    Object.keys(TABLES).join(", ")
);

console.log(
    "General Knowledge:",
    GENERAL_KNOWLEDGE.length
);


/* =========================================================
   PART 7 END
   ========================================================= */
/* =========================================================
   PART 8
   FOOD & VEGETABLES + A-Z ALPHABET
   ========================================================= */


/* =========================================================
   FOOD & VEGETABLES
   ========================================================= */

const FOOD_VEGETABLES = [

    {
        name: "Apple",
        hindi: "सेब",
        icon: "🍎",
        category: "Fruit",
        hindiCategory: "फल",
        pronunciation: "Ap-pul",
        description: "Apple is a popular fruit that can be eaten fresh or used in many foods.",
        hindiDescription: "सेब एक लोकप्रिय फल है जिसे ताज़ा खाया जाता है और कई खाद्य पदार्थों में उपयोग किया जाता है.",
        example: "I eat an apple.",
        hindiExample: "मैं एक सेब खाता हूँ."
    },

    {
        name: "Banana",
        hindi: "केला",
        icon: "🍌",
        category: "Fruit",
        hindiCategory: "फल",
        pronunciation: "Ba-na-na",
        description: "Banana is a soft and naturally sweet fruit.",
        hindiDescription: "केला नरम और प्राकृतिक रूप से मीठा फल है.",
        example: "The banana is yellow when ripe.",
        hindiExample: "पका हुआ केला पीला होता है."
    },

    {
        name: "Mango",
        hindi: "आम",
        icon: "🥭",
        category: "Fruit",
        hindiCategory: "फल",
        pronunciation: "Mang-go",
        description: "Mango is a sweet tropical fruit and is widely enjoyed in India.",
        hindiDescription: "आम एक मीठा उष्णकटिबंधीय फल है और भारत में बहुत पसंद किया जाता है.",
        example: "Mango is called the king of fruits.",
        hindiExample: "आम को फलों का राजा कहा जाता है."
    },

    {
        name: "Orange",
        hindi: "संतरा",
        icon: "🍊",
        category: "Fruit",
        hindiCategory: "फल",
        pronunciation: "Or-ange",
        description: "Orange is a citrus fruit with juicy segments.",
        hindiDescription: "संतरा एक खट्टा-मीठा रसदार फल है.",
        example: "Orange has juicy segments.",
        hindiExample: "संतरे में रसदार फाँकें होती हैं."
    },

    {
        name: "Grapes",
        hindi: "अंगूर",
        icon: "🍇",
        category: "Fruit",
        hindiCategory: "फल",
        pronunciation: "Grapes",
        description: "Grapes are small fruits that grow in bunches.",
        hindiDescription: "अंगूर छोटे फल होते हैं जो गुच्छों में उगते हैं.",
        example: "Grapes grow in bunches.",
        hindiExample: "अंगूर गुच्छों में उगते हैं."
    },

    {
        name: "Watermelon",
        hindi: "तरबूज",
        icon: "🍉",
        category: "Fruit",
        hindiCategory: "फल",
        pronunciation: "Wa-ter-mel-on",
        description: "Watermelon is a large, juicy fruit commonly enjoyed during hot weather.",
        hindiDescription: "तरबूज एक बड़ा और रसदार फल है जिसे गर्म मौसम में खूब खाया जाता है.",
        example: "Watermelon is refreshing in summer.",
        hindiExample: "गर्मी में तरबूज ताज़गी देता है."
    },

    {
        name: "Papaya",
        hindi: "पपीता",
        icon: "🧡",
        category: "Fruit",
        hindiCategory: "फल",
        pronunciation: "Pa-pa-ya",
        description: "Papaya is a soft tropical fruit with orange flesh when ripe.",
        hindiDescription: "पपीता एक नरम उष्णकटिबंधीय फल है जिसका गूदा पकने पर नारंगी होता है.",
        example: "Papaya has soft orange flesh.",
        hindiExample: "पपीते का गूदा नरम और नारंगी होता है."
    },

    {
        name: "Guava",
        hindi: "अमरूद",
        icon: "🍐",
        category: "Fruit",
        hindiCategory: "फल",
        pronunciation: "Gwa-va",
        description: "Guava is a fragrant fruit that may have white or pink flesh.",
        hindiDescription: "अमरूद सुगंधित फल है जिसका गूदा सफेद या गुलाबी हो सकता है.",
        example: "Guava can be eaten fresh.",
        hindiExample: "अमरूद को ताज़ा खाया जा सकता है."
    },

    {
        name: "Pomegranate",
        hindi: "अनार",
        icon: "🔴",
        category: "Fruit",
        hindiCategory: "फल",
        pronunciation: "Pom-e-gran-it",
        description: "Pomegranate contains many juicy edible seeds called arils.",
        hindiDescription: "अनार में बहुत से रसदार खाने योग्य दाने होते हैं.",
        example: "Pomegranate has many juicy seeds.",
        hindiExample: "अनार में बहुत से रसदार दाने होते हैं."
    },

    {
        name: "Pineapple",
        hindi: "अनानास",
        icon: "🍍",
        category: "Fruit",
        hindiCategory: "फल",
        pronunciation: "Pine-ap-pul",
        description: "Pineapple is a tropical fruit with a rough outer skin and juicy flesh.",
        hindiDescription: "अनानास उष्णकटिबंधीय फल है जिसकी बाहरी त्वचा खुरदरी और अंदर का गूदा रसदार होता है.",
        example: "Pineapple has a spiky outer skin.",
        hindiExample: "अनानास की बाहरी त्वचा काँटेदार होती है."
    },

    {
        name: "Papaya",
        hindi: "पपीता",
        icon: "🥭",
        category: "Fruit",
        hindiCategory: "फल",
        pronunciation: "Pa-pa-ya",
        description: "Papaya is commonly eaten ripe and can also be used when unripe.",
        hindiDescription: "पपीते को पका हुआ खाया जाता है और कच्चे पपीते का भी उपयोग किया जाता है.",
        example: "Ripe papaya is soft.",
        hindiExample: "पका पपीता नरम होता है."
    },

    {
        name: "Coconut",
        hindi: "नारियल",
        icon: "🥥",
        category: "Fruit",
        hindiCategory: "फल",
        pronunciation: "Co-co-nut",
        description: "Coconut is a tropical fruit with a hard shell and useful edible flesh.",
        hindiDescription: "नारियल उष्णकटिबंधीय फल है जिसकी बाहरी खोल कठोर होती है और अंदर खाने योग्य गूदा होता है.",
        example: "Coconut water is a popular drink.",
        hindiExample: "नारियल पानी एक लोकप्रिय पेय है."
    },

    {
        name: "Carrot",
        hindi: "गाजर",
        icon: "🥕",
        category: "Vegetable",
        hindiCategory: "सब्जी",
        pronunciation: "Car-rot",
        description: "Carrot is a root vegetable that is commonly orange in colour.",
        hindiDescription: "गाजर एक जड़ वाली सब्जी है जो सामान्यतः नारंगी रंग की होती है.",
        example: "Carrots can be eaten raw or cooked.",
        hindiExample: "गाजर को कच्चा या पकाकर खाया जा सकता है."
    },

    {
        name: "Potato",
        hindi: "आलू",
        icon: "🥔",
        category: "Vegetable",
        hindiCategory: "सब्जी",
        pronunciation: "Po-ta-to",
        description: "Potato is an underground tuber widely used in cooking.",
        hindiDescription: "आलू जमीन के नीचे उगने वाला कंद है जिसका उपयोग कई व्यंजनों में किया जाता है.",
        example: "Potato is used in many Indian dishes.",
        hindiExample: "आलू का उपयोग कई भारतीय व्यंजनों में किया जाता है."
    },

    {
        name: "Tomato",
        hindi: "टमाटर",
        icon: "🍅",
        category: "Vegetable",
        hindiCategory: "सब्जी",
        pronunciation: "To-ma-to",
        description: "Tomato is widely used in salads, sauces and cooked dishes.",
        hindiDescription: "टमाटर का उपयोग सलाद, सॉस और पके हुए व्यंजनों में व्यापक रूप से किया जाता है.",
        example: "Tomato is used in many curries.",
        hindiExample: "टमाटर का उपयोग कई सब्जियों में किया जाता है."
    },

    {
        name: "Onion",
        hindi: "प्याज",
        icon: "🧅",
        category: "Vegetable",
        hindiCategory: "सब्जी",
        pronunciation: "Un-yun",
        description: "Onion is a bulb vegetable commonly used to add flavour to food.",
        hindiDescription: "प्याज एक कंद वाली सब्जी है जिसका उपयोग भोजन में स्वाद बढ़ाने के लिए किया जाता है.",
        example: "Onion is used in many recipes.",
        hindiExample: "प्याज का उपयोग कई व्यंजनों में किया जाता है."
    },

    {
        name: "Garlic",
        hindi: "लहसुन",
        icon: "🧄",
        category: "Vegetable",
        hindiCategory: "सब्जी",
        pronunciation: "Gar-lick",
        description: "Garlic is a bulb commonly used as a flavouring ingredient.",
        hindiDescription: "लहसुन एक कंद है जिसका उपयोग भोजन में स्वाद और सुगंध के लिए किया जाता है.",
        example: "Garlic adds flavour to food.",
        hindiExample: "लहसुन भोजन में स्वाद बढ़ाता है."
    },

    {
        name: "Ginger",
        hindi: "अदरक",
        icon: "🫚",
        category: "Vegetable",
        hindiCategory: "सब्जी",
        pronunciation: "Jin-jer",
        description: "Ginger is an underground stem commonly used as a spice and food ingredient.",
        hindiDescription: "अदरक जमीन के अंदर उगने वाला तना है जिसका उपयोग मसाले और खाद्य सामग्री के रूप में होता है.",
        example: "Ginger is commonly used in tea.",
        hindiExample: "अदरक का उपयोग चाय में किया जाता है."
    },

    {
        name: "Spinach",
        hindi: "पालक",
        icon: "🥬",
        category: "Leafy Vegetable",
        hindiCategory: "पत्तेदार सब्जी",
        pronunciation: "Spin-ich",
        description: "Spinach is a green leafy vegetable.",
        hindiDescription: "पालक हरी पत्तेदार सब्जी है.",
        example: "Spinach is a green leafy vegetable.",
        hindiExample: "पालक हरी पत्तेदार सब्जी है."
    },

    {
        name: "Cabbage",
        hindi: "पत्तागोभी",
        icon: "🥬",
        category: "Vegetable",
        hindiCategory: "सब्जी",
        pronunciation: "Cab-bage",
        description: "Cabbage is a leafy vegetable that forms a compact head.",
        hindiDescription: "पत्तागोभी एक पत्तेदार सब्जी है जिसकी पत्तियाँ एक सिर के रूप में जुड़ी होती हैं.",
        example: "Cabbage is used in salads and cooked dishes.",
        hindiExample: "पत्तागोभी का उपयोग सलाद और पके हुए व्यंजनों में किया जाता है."
    },

    {
        name: "Cauliflower",
        hindi: "फूलगोभी",
        icon: "🥦",
        category: "Vegetable",
        hindiCategory: "सब्जी",
        pronunciation: "Call-i-flow-er",
        description: "Cauliflower is a vegetable with a compact edible flower head.",
        hindiDescription: "फूलगोभी एक ऐसी सब्जी है जिसमें खाने योग्य फूल जैसा सिर होता है.",
        example: "Cauliflower is used in many Indian dishes.",
        hindiExample: "फूलगोभी का उपयोग कई भारतीय व्यंजनों में किया जाता है."
    },

    {
        name: "Broccoli",
        hindi: "ब्रोकोली",
        icon: "🥦",
        category: "Vegetable",
        hindiCategory: "सब्जी",
        pronunciation: "Bro-co-lee",
        description: "Broccoli is a green vegetable with edible flower buds.",
        hindiDescription: "ब्रोकोली हरी सब्जी है जिसमें खाने योग्य फूल की कलियाँ होती हैं.",
        example: "Broccoli has green flower buds.",
        hindiExample: "ब्रोकोली में हरी फूल की कलियाँ होती हैं."
    },

    {
        name: "Peas",
        hindi: "मटर",
        icon: "🫛",
        category: "Vegetable",
        hindiCategory: "सब्जी",
        pronunciation: "Peez",
        description: "Peas are small round seeds commonly eaten as a vegetable.",
        hindiDescription: "मटर छोटे गोल दाने होते हैं जिन्हें सामान्यतः सब्जी के रूप में खाया जाता है.",
        example: "Green peas are used in many dishes.",
        hindiExample: "हरी मटर का उपयोग कई व्यंजनों में किया जाता है."
    },

    {
        name: "Corn",
        hindi: "मक्का",
        icon: "🌽",
        category: "Grain",
        hindiCategory: "अनाज",
        pronunciation: "Korn",
        description: "Corn is a cereal crop that is eaten fresh or used to make many food products.",
        hindiDescription: "मक्का एक अनाज की फसल है जिसे ताज़ा खाया जाता है और कई खाद्य पदार्थ बनाने में उपयोग किया जाता है.",
        example: "Corn can be eaten boiled or roasted.",
        hindiExample: "मक्का उबालकर या भूनकर खाया जा सकता है."
    },

    {
        name: "Cucumber",
        hindi: "खीरा",
        icon: "🥒",
        category: "Vegetable",
        hindiCategory: "सब्जी",
        pronunciation: "Cue-cum-ber",
        description: "Cucumber is a crisp vegetable commonly eaten raw in salads.",
        hindiDescription: "खीरा कुरकुरी सब्जी है जिसे अक्सर सलाद में कच्चा खाया जाता है.",
        example: "Cucumber is commonly used in salads.",
        hindiExample: "खीरे का उपयोग सलाद में किया जाता है."
    },

    {
        name: "Brinjal",
        hindi: "बैंगन",
        icon: "🍆",
        category: "Vegetable",
        hindiCategory: "सब्जी",
        pronunciation: "Brin-jal",
        description: "Brinjal, also called eggplant, is a vegetable commonly used in Indian cooking.",
        hindiDescription: "बैंगन एक सब्जी है जिसका भारतीय भोजन में व्यापक रूप से उपयोग होता है.",
        example: "Brinjal can be cooked in many ways.",
        hindiExample: "बैंगन को कई तरीकों से पकाया जा सकता है."
    },

    {
        name: "Okra",
        hindi: "भिंडी",
        icon: "🌱",
        category: "Vegetable",
        hindiCategory: "सब्जी",
        pronunciation: "Oh-kra",
        description: "Okra is a green vegetable with edible pods.",
        hindiDescription: "भिंडी हरी सब्जी है जिसमें खाने योग्य फलियाँ होती हैं.",
        example: "Okra is commonly cooked as a vegetable.",
        hindiExample: "भिंडी को सामान्यतः सब्जी के रूप में पकाया जाता है."
    },

    {
        name: "Bottle Gourd",
        hindi: "लौकी",
        icon: "🥒",
        category: "Vegetable",
        hindiCategory: "सब्जी",
        pronunciation: "Bot-tle Gourd",
        description: "Bottle gourd is a light-coloured vegetable commonly used in Indian cooking.",
        hindiDescription: "लौकी हल्के रंग की सब्जी है जिसका भारतीय भोजन में उपयोग होता है.",
        example: "Bottle gourd is used in curries.",
        hindiExample: "लौकी का उपयोग सब्जियों में किया जाता है."
    },

    {
        name: "Bitter Gourd",
        hindi: "करेला",
        icon: "🥒",
        category: "Vegetable",
        hindiCategory: "सब्जी",
        pronunciation: "Bit-ter Gourd",
        description: "Bitter gourd is a vegetable known for its distinctive bitter taste.",
        hindiDescription: "करेला अपनी विशेष कड़वी स्वाद के लिए जाना जाता है.",
        example: "Bitter gourd has a naturally bitter taste.",
        hindiExample: "करेले का स्वाद प्राकृतिक रूप से कड़वा होता है."
    },

    {
        name: "Pumpkin",
        hindi: "कद्दू",
        icon: "🎃",
        category: "Vegetable",
        hindiCategory: "सब्जी",
        pronunciation: "Pump-kin",
        description: "Pumpkin is a large vegetable with firm flesh and seeds.",
        hindiDescription: "कद्दू एक बड़ी सब्जी है जिसमें गूदा और बीज होते हैं.",
        example: "Pumpkin is used in sweet and savoury dishes.",
        hindiExample: "कद्दू का उपयोग मीठे और नमकीन दोनों व्यंजनों में किया जाता है."
    },

    {
        name: "Radish",
        hindi: "मूली",
        icon: "🌱",
        category: "Root Vegetable",
        hindiCategory: "जड़ वाली सब्जी",
        pronunciation: "Rad-ish",
        description: "Radish is a root vegetable with a crisp texture.",
        hindiDescription: "मूली कुरकुरी बनावट वाली जड़ वाली सब्जी है.",
        example: "Radish is often eaten in salads.",
        hindiExample: "मूली को अक्सर सलाद में खाया जाता है."
    },

    {
        name: "Beetroot",
        hindi: "चुकंदर",
        icon: "🫜",
        category: "Root Vegetable",
        hindiCategory: "जड़ वाली सब्जी",
        pronunciation: "Beet-root",
        description: "Beetroot is a root vegetable with a deep red or purple colour.",
        hindiDescription: "चुकंदर जड़ वाली सब्जी है जिसका रंग गहरा लाल या बैंगनी हो सकता है.",
        example: "Beetroot can be added to salads.",
        hindiExample: "चुकंदर को सलाद में मिलाया जा सकता है."
    },

    {
        name: "Sweet Potato",
        hindi: "शकरकंद",
        icon: "🍠",
        category: "Root Vegetable",
        hindiCategory: "जड़ वाली सब्जी",
        pronunciation: "Sweet Po-ta-to",
        description: "Sweet potato is a starchy root vegetable with a naturally sweet taste.",
        hindiDescription: "शकरकंद स्टार्चयुक्त जड़ वाली सब्जी है जिसका स्वाद प्राकृतिक रूप से मीठा होता है.",
        example: "Sweet potato can be roasted or boiled.",
        hindiExample: "शकरकंद को भून या उबालकर खाया जा सकता है."
    },

    {
        name: "Mushroom",
        hindi: "मशरूम",
        icon: "🍄",
        category: "Food",
        hindiCategory: "खाद्य पदार्थ",
        pronunciation: "Mush-room",
        description: "Mushrooms are fungi used as food in many cuisines.",
        hindiDescription: "मशरूम एक प्रकार का कवक है जिसका उपयोग कई व्यंजनों में भोजन के रूप में किया जाता है.",
        example: "Mushrooms can be cooked in many ways.",
        hindiExample: "मशरूम को कई तरीकों से पकाया जा सकता है."
    },

    {
        name: "Rice",
        hindi: "चावल",
        icon: "🍚",
        category: "Grain",
        hindiCategory: "अनाज",
        pronunciation: "Rice",
        description: "Rice is an important cereal grain and staple food for many people.",
        hindiDescription: "चावल एक महत्वपूर्ण अनाज और बहुत से लोगों का प्रमुख भोजन है.",
        example: "Rice is eaten in many parts of India.",
        hindiExample: "भारत के कई हिस्सों में चावल खाया जाता है."
    },

    {
        name: "Wheat",
        hindi: "गेहूँ",
        icon: "🌾",
        category: "Grain",
        hindiCategory: "अनाज",
        pronunciation: "Wheet",
        description: "Wheat is an important cereal grain used to make flour and many foods.",
        hindiDescription: "गेहूँ एक महत्वपूर्ण अनाज है जिससे आटा और कई खाद्य पदार्थ बनाए जाते हैं.",
        example: "Wheat flour is used to make roti.",
        hindiExample: "गेहूँ के आटे से रोटी बनाई जाती है."
    },

    {
        name: "Lentils",
        hindi: "दाल",
        icon: "🥣",
        category: "Pulse",
        hindiCategory: "दाल",
        pronunciation: "Len-tils",
        description: "Lentils are edible seeds from legume plants and are widely used in Indian cooking.",
        hindiDescription: "दालें दलहनी पौधों के खाने योग्य बीज हैं और भारतीय भोजन में व्यापक रूप से उपयोग होती हैं.",
        example: "Dal is commonly eaten with rice or roti.",
        hindiExample: "दाल को अक्सर चावल या रोटी के साथ खाया जाता है."
    },

    {
        name: "Milk",
        hindi: "दूध",
        icon: "🥛",
        category: "Dairy",
        hindiCategory: "डेयरी",
        pronunciation: "Milk",
        description: "Milk is a common dairy food used directly and in many other foods.",
        hindiDescription: "दूध एक सामान्य डेयरी खाद्य पदार्थ है जिसका सीधे और कई अन्य खाद्य पदार्थों में उपयोग होता है.",
        example: "Many people drink milk.",
        hindiExample: "बहुत से लोग दूध पीते हैं."
    },

    {
        name: "Curd",
        hindi: "दही",
        icon: "🥣",
        category: "Dairy",
        hindiCategory: "डेयरी",
        pronunciation: "Curd",
        description: "Curd is a fermented dairy food commonly eaten in India.",
        hindiDescription: "दही एक किण्वित डेयरी खाद्य पदार्थ है जिसे भारत में आमतौर पर खाया जाता है.",
        example: "Curd is often served with meals.",
        hindiExample: "दही को अक्सर भोजन के साथ परोसा जाता है."
    },

    {
        name: "Paneer",
        hindi: "पनीर",
        icon: "🧀",
        category: "Dairy",
        hindiCategory: "डेयरी",
        pronunciation: "Pa-neer",
        description: "Paneer is a fresh cheese commonly used in Indian dishes.",
        hindiDescription: "पनीर ताज़ा चीज़ है जिसका भारतीय व्यंजनों में व्यापक रूप से उपयोग होता है.",
        example: "Paneer is used in many Indian curries.",
        hindiExample: "पनीर का उपयोग कई भारतीय सब्जियों में किया जाता है."
    }

];



/* =========================================================
   FOOD SEARCH
   ========================================================= */

function searchFoodVegetables(query = "") {

    const q = String(query).trim().toLowerCase();

    if (!q) {
        return FOOD_VEGETABLES;
    }

    return FOOD_VEGETABLES.filter(item => {

        return (
            item.name.toLowerCase().includes(q) ||
            item.hindi.toLowerCase().includes(q) ||
            item.category.toLowerCase().includes(q) ||
            item.hindiCategory.toLowerCase().includes(q)
        );

    });

}



/* =========================================================
   GET FOOD / VEGETABLE
   ========================================================= */

function getFoodVegetableData(item) {

    if (!item) return null;

    return FOOD_VEGETABLES.find(data =>
        data.name === item.name ||
        data.hindi === item.hindi
    ) || item;

}



/* =========================================================
   A-Z ALPHABET
   ========================================================= */

const ALPHABET = [

    {
        letter: "A",
        name: "A",
        hindi: "ए",
        icon: "🍎",
        word: "Apple",
        hindiWord: "सेब",
        pronunciation: "A — ए",
        description: "A is the first letter of the English alphabet. A for Apple.",
        hindiDescription: "A अंग्रेज़ी वर्णमाला का पहला अक्षर है। A for Apple यानी A से Apple.",
        example: "A for Apple.",
        hindiExample: "A से Apple — सेब."
    },

    {
        letter: "B",
        name: "B",
        hindi: "बी",
        icon: "⚽",
        word: "Ball",
        hindiWord: "गेंद",
        pronunciation: "B — बी",
        description: "B is the second letter of the English alphabet. B for Ball.",
        hindiDescription: "B अंग्रेज़ी वर्णमाला का दूसरा अक्षर है। B for Ball यानी B से Ball.",
        example: "B for Ball.",
        hindiExample: "B से Ball — गेंद."
    },

    {
        letter: "C",
        name: "C",
        hindi: "सी",
        icon: "🐱",
        word: "Cat",
        hindiWord: "बिल्ली",
        pronunciation: "C — सी",
        description: "C is the third letter of the English alphabet. C for Cat.",
        hindiDescription: "C अंग्रेज़ी वर्णमाला का तीसरा अक्षर है। C for Cat यानी C से Cat.",
        example: "C for Cat.",
        hindiExample: "C से Cat — बिल्ली."
    },

    {
        letter: "D",
        name: "D",
        hindi: "डी",
        icon: "🐶",
        word: "Dog",
        hindiWord: "कुत्ता",
        pronunciation: "D — डी",
        description: "D is the fourth letter of the English alphabet. D for Dog.",
        hindiDescription: "D अंग्रेज़ी वर्णमाला का चौथा अक्षर है। D for Dog यानी D से Dog.",
        example: "D for Dog.",
        hindiExample: "D से Dog — कुत्ता."
    },

    {
        letter: "E",
        name: "E",
        hindi: "ई",
        icon: "🐘",
        word: "Elephant",
        hindiWord: "हाथी",
        pronunciation: "E — ई",
        description: "E is the fifth letter of the English alphabet. E for Elephant.",
        hindiDescription: "E अंग्रेज़ी वर्णमाला का पाँचवाँ अक्षर है। E for Elephant यानी E से Elephant.",
        example: "E for Elephant.",
        hindiExample: "E से Elephant — हाथी."
    },

    {
        letter: "F",
        name: "F",
        hindi: "एफ",
        icon: "🐟",
        word: "Fish",
        hindiWord: "मछली",
        pronunciation: "F — एफ",
        description: "F is the sixth letter of the English alphabet. F for Fish.",
        hindiDescription: "F अंग्रेज़ी वर्णमाला का छठा अक्षर है। F for Fish यानी F से Fish.",
        example: "F for Fish.",
        hindiExample: "F से Fish — मछली."
    },

    {
        letter: "G",
        name: "G",
        hindi: "जी",
        icon: "🦒",
        word: "Giraffe",
        hindiWord: "जिराफ",
        pronunciation: "G — जी",
        description: "G is the seventh letter of the English alphabet. G for Giraffe.",
        hindiDescription: "G अंग्रेज़ी वर्णमाला का सातवाँ अक्षर है। G for Giraffe यानी G से Giraffe.",
        example: "G for Giraffe.",
        hindiExample: "G से Giraffe — जिराफ."
    },

    {
        letter: "H",
        name: "H",
        hindi: "एच",
        icon: "🏠",
        word: "House",
        hindiWord: "घर",
        pronunciation: "H — एच",
        description: "H is the eighth letter of the English alphabet. H for House.",
        hindiDescription: "H अंग्रेज़ी वर्णमाला का आठवाँ अक्षर है। H for House यानी H से House.",
        example: "H for House.",
        hindiExample: "H से House — घर."
    },

    {
        letter: "I",
        name: "I",
        hindi: "आई",
        icon: "🍦",
        word: "Ice Cream",
        hindiWord: "आइसक्रीम",
        pronunciation: "I — आई",
        description: "I is the ninth letter of the English alphabet. I for Ice Cream.",
        hindiDescription: "I अंग्रेज़ी वर्णमाला का नौवाँ अक्षर है। I for Ice Cream यानी I से Ice Cream.",
        example: "I for Ice Cream.",
        hindiExample: "I से Ice Cream — आइसक्रीम."
    },

    {
        letter: "J",
        name: "J",
        hindi: "जे",
        icon: "🧃",
        word: "Juice",
        hindiWord: "रस",
        pronunciation: "J — जे",
        description: "J is the tenth letter of the English alphabet. J for Juice.",
        hindiDescription: "J अंग्रेज़ी वर्णमाला का दसवाँ अक्षर है। J for Juice यानी J से Juice.",
        example: "J for Juice.",
        hindiExample: "J से Juice — रस."
    },

    {
        letter: "K",
        name: "K",
        hindi: "के",
        icon: "🪁",
        word: "Kite",
        hindiWord: "पतंग",
        pronunciation: "K — के",
        description: "K is the eleventh letter of the English alphabet. K for Kite.",
        hindiDescription: "K अंग्रेज़ी वर्णमाला का ग्यारहवाँ अक्षर है। K for Kite यानी K से Kite.",
        example: "K for Kite.",
        hindiExample: "K से Kite — पतंग."
    },

    {
        letter: "L",
        name: "L",
        hindi: "एल",
        icon: "🦁",
        word: "Lion",
        hindiWord: "शेर",
        pronunciation: "L — एल",
        description: "L is the twelfth letter of the English alphabet. L for Lion.",
        hindiDescription: "L अंग्रेज़ी वर्णमाला का बारहवाँ अक्षर है। L for Lion यानी L से Lion.",
        example: "L for Lion.",
        hindiExample: "L से Lion — शेर."
    },

    {
        letter: "M",
        name: "M",
        hindi: "एम",
        icon: "🐒",
        word: "Monkey",
        hindiWord: "बंदर",
        pronunciation: "M — एम",
        description: "M is the thirteenth letter of the English alphabet. M for Monkey.",
        hindiDescription: "M अंग्रेज़ी वर्णमाला का तेरहवाँ अक्षर है। M for Monkey यानी M से Monkey.",
        example: "M for Monkey.",
        hindiExample: "M से Monkey — बंदर."
    },

    {
        letter: "N",
        name: "N",
        hindi: "एन",
        icon: "👃",
        word: "Nose",
        hindiWord: "नाक",
        pronunciation: "N — एन",
        description: "N is the fourteenth letter of the English alphabet. N for Nose.",
        hindiDescription: "N अंग्रेज़ी वर्णमाला का चौदहवाँ अक्षर है। N for Nose यानी N से Nose.",
        example: "N for Nose.",
        hindiExample: "N से Nose — नाक."
    },

    {
        letter: "O",
        name: "O",
        hindi: "ओ",
        icon: "🍊",
        word: "Orange",
        hindiWord: "संतरा",
        pronunciation: "O — ओ",
        description: "O is the fifteenth letter of the English alphabet. O for Orange.",
        hindiDescription: "O अंग्रेज़ी वर्णमाला का पंद्रहवाँ अक्षर है। O for Orange यानी O से Orange.",
        example: "O for Orange.",
        hindiExample: "O से Orange — संतरा."
    },

    {
        letter: "P",
        name: "P",
        hindi: "पी",
        icon: "🦚",
        word: "Peacock",
        hindiWord: "मोर",
        pronunciation: "P — पी",
        description: "P is the sixteenth letter of the English alphabet. P for Peacock.",
        hindiDescription: "P अंग्रेज़ी वर्णमाला का सोलहवाँ अक्षर है। P for Peacock यानी P से Peacock.",
        example: "P for Peacock.",
        hindiExample: "P से Peacock — मोर."
    },

    {
        letter: "Q",
        name: "Q",
        hindi: "क्यू",
        icon: "👑",
        word: "Queen",
        hindiWord: "रानी",
        pronunciation: "Q — क्यू",
        description: "Q is the seventeenth letter of the English alphabet. Q for Queen.",
        hindiDescription: "Q अंग्रेज़ी वर्णमाला का सत्रहवाँ अक्षर है। Q for Queen यानी Q से Queen.",
        example: "Q for Queen.",
        hindiExample: "Q से Queen — रानी."
    },

    {
        letter: "R",
        name: "R",
        hindi: "आर",
        icon: "🐇",
        word: "Rabbit",
        hindiWord: "खरगोश",
        pronunciation: "R — आर",
        description: "R is the eighteenth letter of the English alphabet. R for Rabbit.",
        hindiDescription: "R अंग्रेज़ी वर्णमाला का अठारहवाँ अक्षर है। R for Rabbit यानी R से Rabbit.",
        example: "R for Rabbit.",
        hindiExample: "R से Rabbit — खरगोश."
    },

    {
        letter: "S",
        name: "S",
        hindi: "एस",
        icon: "☀️",
        word: "Sun",
        hindiWord: "सूरज",
        pronunciation: "S — एस",
        description: "S is the nineteenth letter of the English alphabet. S for Sun.",
        hindiDescription: "S अंग्रेज़ी वर्णमाला का उन्नीसवाँ अक्षर है। S for Sun यानी S से Sun.",
        example: "S for Sun.",
        hindiExample: "S से Sun — सूरज."
    },

    {
        letter: "T",
        name: "T",
        hindi: "टी",
        icon: "🐯",
        word: "Tiger",
        hindiWord: "बाघ",
        pronunciation: "T — टी",
        description: "T is the twentieth letter of the English alphabet. T for Tiger.",
        hindiDescription: "T अंग्रेज़ी वर्णमाला का बीसवाँ अक्षर है। T for Tiger यानी T से Tiger.",
        example: "T for Tiger.",
        hindiExample: "T से Tiger — बाघ."
    },

    {
        letter: "U",
        name: "U",
        hindi: "यू",
        icon: "☂️",
        word: "Umbrella",
        hindiWord: "छाता",
        pronunciation: "U — यू",
        description: "U is the twenty-first letter of the English alphabet. U for Umbrella.",
        hindiDescription: "U अंग्रेज़ी वर्णमाला का इक्कीसवाँ अक्षर है। U for Umbrella यानी U से Umbrella.",
        example: "U for Umbrella.",
        hindiExample: "U से Umbrella — छाता."
    },

    {
        letter: "V",
        name: "V",
        hindi: "वी",
        icon: "🚐",
        word: "Van",
        hindiWord: "वैन",
        pronunciation: "V — वी",
        description: "V is the twenty-second letter of the English alphabet. V for Van.",
        hindiDescription: "V अंग्रेज़ी वर्णमाला का बाईसवाँ अक्षर है। V for Van यानी V से Van.",
        example: "V for Van.",
        hindiExample: "V से Van — वैन."
    },

    {
        letter: "W",
        name: "W",
        hindi: "डब्ल्यू",
        icon: "🍉",
        word: "Watermelon",
        hindiWord: "तरबूज",
        pronunciation: "W — डब्ल्यू",
        description: "W is the twenty-third letter of the English alphabet. W for Watermelon.",
        hindiDescription: "W अंग्रेज़ी वर्णमाला का तेईसवाँ अक्षर है। W for Watermelon यानी W से Watermelon.",
        example: "W for Watermelon.",
        hindiExample: "W से Watermelon — तरबूज."
    },

    {
        letter: "X",
        name: "X",
        hindi: "एक्स",
        icon: "🎹",
        word: "Xylophone",
        hindiWord: "ज़ाइलोफोन",
        pronunciation: "X — एक्स",
        description: "X is the twenty-fourth letter of the English alphabet. X for Xylophone.",
        hindiDescription: "X अंग्रेज़ी वर्णमाला का चौबीसवाँ अक्षर है। X for Xylophone.",
        example: "X for Xylophone.",
        hindiExample: "X से Xylophone — एक वाद्य यंत्र."
    },

    {
        letter: "Y",
        name: "Y",
        hindi: "वाय",
        icon: "🧶",
        word: "Yo-yo",
        hindiWord: "यो-यो",
        pronunciation: "Y — वाय",
        description: "Y is the twenty-fifth letter of the English alphabet. Y for Yo-yo.",
        hindiDescription: "Y अंग्रेज़ी वर्णमाला का पच्चीसवाँ अक्षर है। Y for Yo-yo.",
        example: "Y for Yo-yo.",
        hindiExample: "Y से Yo-yo — यो-यो."
    },

    {
        letter: "Z",
        name: "Z",
        hindi: "ज़ेड",
        icon: "🦓",
        word: "Zebra",
        hindiWord: "ज़ेब्रा",
        pronunciation: "Z — ज़ेड",
        description: "Z is the twenty-sixth and final letter of the English alphabet. Z for Zebra.",
        hindiDescription: "Z अंग्रेज़ी वर्णमाला का छब्बीसवाँ और अंतिम अक्षर है। Z for Zebra.",
        example: "Z for Zebra.",
        hindiExample: "Z से Zebra — ज़ेब्रा."
    }

];



/* =========================================================
   FOOD SEARCH HELPERS
   ========================================================= */

function searchFood(query = "") {
    return searchFoodVegetables(query);
}

function getFoodData(item) {
    return getFoodVegetableData(item);
}



/* =========================================================
   ALPHABET SEARCH
   ========================================================= */

function searchAlphabet(query = "") {

    const q = String(query).trim().toLowerCase();

    if (!q) {
        return ALPHABET;
    }

    return ALPHABET.filter(item => {

        return (
            item.letter.toLowerCase() === q ||
            item.name.toLowerCase() === q ||
            item.hindi.toLowerCase().includes(q) ||
            item.word.toLowerCase().includes(q) ||
            item.hindiWord.toLowerCase().includes(q)
        );

    });

}



/* =========================================================
   GET ALPHABET DATA
   ========================================================= */

function getAlphabetData(item) {

    if (!item) return null;

    return ALPHABET.find(data =>
        data.letter === item.letter ||
        data.word === item.word ||
        data.hindi === item.hindi
    ) || item;

}



/* =========================================================
   DEBUG COUNTS
   ========================================================= */

console.log(
    "Food & Vegetables:",
    FOOD_VEGETABLES.length
);

console.log(
    "A-Z Alphabet:",
    ALPHABET.length
);


/* =========================================================
   PART 8 END
   ========================================================= */
/* =========================================================
   PART 9 — HINDI VARNAMALA
   पूर्ण हिंदी वर्णमाला
   ========================================================= */

const HINDI_VARNAMALA = [

    /* =========================
       स्वर — VOWELS
       ========================= */

    {
        letter: "अ",
        name: "A",
        hindi: "अ",
        icon: "🅰️",
        pronunciation: "a",
        word: "अनार",
        hindiWord: "अनार",
        example: "अ से अनार",
        hindiExample: "अ से अनार",
        description: "अ is the first vowel sound in Hindi. It is used in many Hindi words.",
        hindiDescription: "अ हिंदी का पहला स्वर है। इसका प्रयोग बहुत से हिंदी शब्दों में होता है।",
        group: "Vowels",
        hindiGroup: "स्वर"
    },

    {
        letter: "आ",
        name: "Aa",
        hindi: "आ",
        icon: "🥭",
        pronunciation: "aa",
        word: "आम",
        hindiWord: "आम",
        example: "आ से आम",
        hindiExample: "आ से आम",
        description: "आ is a long vowel sound.",
        hindiDescription: "आ एक दीर्घ स्वर है।",
        group: "Vowels",
        hindiGroup: "स्वर"
    },

    {
        letter: "इ",
        name: "I",
        hindi: "इ",
        icon: "🦋",
        pronunciation: "i",
        word: "इमली",
        hindiWord: "इमली",
        example: "इ से इमली",
        hindiExample: "इ से इमली",
        description: "इ is a short vowel sound.",
        hindiDescription: "इ एक ह्रस्व स्वर है।",
        group: "Vowels",
        hindiGroup: "स्वर"
    },

    {
        letter: "ई",
        name: "Ee",
        hindi: "ई",
        icon: "🍬",
        pronunciation: "ee",
        word: "ईख",
        hindiWord: "ईख",
        example: "ई से ईख",
        hindiExample: "ई से ईख",
        description: "ई is a long vowel sound.",
        hindiDescription: "ई एक दीर्घ स्वर है।",
        group: "Vowels",
        hindiGroup: "स्वर"
    },

    {
        letter: "उ",
        name: "U",
        hindi: "उ",
        icon: "🦉",
        pronunciation: "u",
        word: "उल्लू",
        hindiWord: "उल्लू",
        example: "उ से उल्लू",
        hindiExample: "उ से उल्लू",
        description: "उ is a short vowel sound.",
        hindiDescription: "उ एक ह्रस्व स्वर है।",
        group: "Vowels",
        hindiGroup: "स्वर"
    },

    {
        letter: "ऊ",
        name: "Oo",
        hindi: "ऊ",
        icon: "🐪",
        pronunciation: "oo",
        word: "ऊन",
        hindiWord: "ऊन",
        example: "ऊ से ऊन",
        hindiExample: "ऊ से ऊन",
        description: "ऊ is a long vowel sound.",
        hindiDescription: "ऊ एक दीर्घ स्वर है।",
        group: "Vowels",
        hindiGroup: "स्वर"
    },

    {
        letter: "ऋ",
        name: "Ri",
        hindi: "ऋ",
        icon: "📖",
        pronunciation: "ri",
        word: "ऋषि",
        hindiWord: "ऋषि",
        example: "ऋ से ऋषि",
        hindiExample: "ऋ से ऋषि",
        description: "ऋ is a special vowel used in Sanskrit-derived Hindi words.",
        hindiDescription: "ऋ एक विशेष स्वर है, जिसका प्रयोग संस्कृत से आए हिंदी शब्दों में होता है।",
        group: "Vowels",
        hindiGroup: "स्वर"
    },

    {
        letter: "ए",
        name: "E",
        hindi: "ए",
        icon: "🦏",
        pronunciation: "e",
        word: "एड़ी",
        hindiWord: "एड़ी",
        example: "ए से एड़ी",
        hindiExample: "ए से एड़ी",
        description: "ए is a vowel sound used in many Hindi words.",
        hindiDescription: "ए एक स्वर है, जिसका प्रयोग अनेक हिंदी शब्दों में होता है।",
        group: "Vowels",
        hindiGroup: "स्वर"
    },

    {
        letter: "ऐ",
        name: "Ai",
        hindi: "ऐ",
        icon: "🪁",
        pronunciation: "ai",
        word: "ऐनक",
        hindiWord: "ऐनक",
        example: "ऐ से ऐनक",
        hindiExample: "ऐ से ऐनक",
        description: "ऐ is a combined vowel sound.",
        hindiDescription: "ऐ एक संयुक्त स्वर ध्वनि है।",
        group: "Vowels",
        hindiGroup: "स्वर"
    },

    {
        letter: "ओ",
        name: "O",
        hindi: "ओ",
        icon: "🦜",
        pronunciation: "o",
        word: "ओस",
        hindiWord: "ओस",
        example: "ओ से ओस",
        hindiExample: "ओ से ओस",
        description: "ओ is a vowel sound used frequently in Hindi.",
        hindiDescription: "ओ हिंदी में सामान्य रूप से प्रयोग होने वाला स्वर है।",
        group: "Vowels",
        hindiGroup: "स्वर"
    },

    {
        letter: "औ",
        name: "Au",
        hindi: "औ",
        icon: "🐦",
        pronunciation: "au",
        word: "औरत",
        hindiWord: "औरत",
        example: "औ से औरत",
        hindiExample: "औ से औरत",
        description: "औ is a combined vowel sound.",
        hindiDescription: "औ एक संयुक्त स्वर ध्वनि है।",
        group: "Vowels",
        hindiGroup: "स्वर"
    },

    {
        letter: "अं",
        name: "Anusvara",
        hindi: "अं",
        icon: "🔤",
        pronunciation: "an",
        word: "अंगूर",
        hindiWord: "अंगूर",
        example: "अं से अंगूर",
        hindiExample: "अं से अंगूर",
        description: "अं is called Anusvara and represents a nasal sound.",
        hindiDescription: "अं को अनुस्वार कहा जाता है और यह नासिक्य ध्वनि को दर्शाता है।",
        group: "Vowels",
        hindiGroup: "स्वर"
    },

    {
        letter: "अः",
        name: "Visarga",
        hindi: "अः",
        icon: "📚",
        pronunciation: "ah",
        word: "दुःख",
        hindiWord: "दुःख",
        example: "अः का प्रयोग दुःख जैसे शब्दों में मिलता है।",
        hindiExample: "अः का प्रयोग दुःख जैसे शब्दों में मिलता है।",
        description: "अः is called Visarga and is mostly seen in Sanskrit-derived words.",
        hindiDescription: "अः को विसर्ग कहा जाता है और इसका प्रयोग मुख्यतः संस्कृत मूल के शब्दों में होता है।",
        group: "Vowels",
        hindiGroup: "स्वर"
    },


    /* =========================
       क-वर्ग
       ========================= */

    {
        letter: "क",
        name: "Ka",
        hindi: "क",
        icon: "🪁",
        pronunciation: "ka",
        word: "कमल",
        hindiWord: "कमल",
        example: "क से कमल",
        hindiExample: "क से कमल",
        description: "क is the first consonant of the Ka-varga.",
        hindiDescription: "क क-वर्ग का पहला व्यंजन है।",
        group: "Consonants",
        hindiGroup: "व्यंजन"
    },

    {
        letter: "ख",
        name: "Kha",
        hindi: "ख",
        icon: "🐰",
        pronunciation: "kha",
        word: "खरगोश",
        hindiWord: "खरगोश",
        example: "ख से खरगोश",
        hindiExample: "ख से खरगोश",
        description: "ख is an aspirated consonant.",
        hindiDescription: "ख एक महाप्राण व्यंजन है।",
        group: "Consonants",
        hindiGroup: "व्यंजन"
    },

    {
        letter: "ग",
        name: "Ga",
        hindi: "ग",
        icon: "🐄",
        pronunciation: "ga",
        word: "गाय",
        hindiWord: "गाय",
        example: "ग से गाय",
        hindiExample: "ग से गाय",
        description: "ग is a common Hindi consonant.",
        hindiDescription: "ग हिंदी का एक सामान्य व्यंजन है।",
        group: "Consonants",
        hindiGroup: "व्यंजन"
    },

    {
        letter: "घ",
        name: "Gha",
        hindi: "घ",
        icon: "🏠",
        pronunciation: "gha",
        word: "घर",
        hindiWord: "घर",
        example: "घ से घर",
        hindiExample: "घ से घर",
        description: "घ is an aspirated consonant.",
        hindiDescription: "घ एक महाप्राण व्यंजन है।",
        group: "Consonants",
        hindiGroup: "व्यंजन"
    },

    {
        letter: "ङ",
        name: "Nga",
        hindi: "ङ",
        icon: "🔤",
        pronunciation: "nga",
        word: "गंगा",
        hindiWord: "गंगा",
        example: "ङ की ध्वनि गंगा जैसे शब्दों में सुनाई देती है।",
        hindiExample: "ङ की ध्वनि गंगा जैसे शब्दों में सुनाई देती है।",
        description: "ङ represents a nasal sound.",
        hindiDescription: "ङ एक नासिक्य व्यंजन ध्वनि को दर्शाता है।",
        group: "Consonants",
        hindiGroup: "व्यंजन"
    },


    /* =========================
       च-वर्ग
       ========================= */

    {
        letter: "च",
        name: "Cha",
        hindi: "च",
        icon: "🦅",
        pronunciation: "cha",
        word: "चम्मच",
        hindiWord: "चम्मच",
        example: "च से चम्मच",
        hindiExample: "च से चम्मच",
        description: "च is the first consonant of the Cha-varga.",
        hindiDescription: "च च-वर्ग का पहला व्यंजन है।",
        group: "Consonants",
        hindiGroup: "व्यंजन"
    },

    {
        letter: "छ",
        name: "Chha",
        hindi: "छ",
        icon: "☂️",
        pronunciation: "chha",
        word: "छाता",
        hindiWord: "छाता",
        example: "छ से छाता",
        hindiExample: "छ से छाता",
        description: "छ is an aspirated consonant.",
        hindiDescription: "छ एक महाप्राण व्यंजन है।",
        group: "Consonants",
        hindiGroup: "व्यंजन"
    },

    {
        letter: "ज",
        name: "Ja",
        hindi: "ज",
        icon: "🦒",
        pronunciation: "ja",
        word: "जहाज",
        hindiWord: "जहाज",
        example: "ज से जहाज",
        hindiExample: "ज से जहाज",
        description: "ज is a common Hindi consonant.",
        hindiDescription: "ज हिंदी का एक सामान्य व्यंजन है।",
        group: "Consonants",
        hindiGroup: "व्यंजन"
    },

    {
        letter: "झ",
        name: "Jha",
        hindi: "झ",
        icon: "💧",
        pronunciation: "jha",
        word: "झरना",
        hindiWord: "झरना",
        example: "झ से झरना",
        hindiExample: "झ से झरना",
        description: "झ is an aspirated consonant.",
        hindiDescription: "झ एक महाप्राण व्यंजन है।",
        group: "Consonants",
        hindiGroup: "व्यंजन"
    },

    {
        letter: "ञ",
        name: "Nya",
        hindi: "ञ",
        icon: "🔤",
        pronunciation: "nya",
        word: "ज्ञान",
        hindiWord: "ज्ञान",
        example: "ञ की ध्वनि कुछ संयुक्त शब्दों में मिलती है।",
        hindiExample: "ञ की ध्वनि कुछ संयुक्त शब्दों में मिलती है।",
        description: "ञ is a nasal consonant.",
        hindiDescription: "ञ एक नासिक्य व्यंजन है।",
        group: "Consonants",
        hindiGroup: "व्यंजन"
    },


    /* =========================
       ट-वर्ग
       ========================= */

    {
        letter: "ट",
        name: "Ta",
        hindi: "ट",
        icon: "🪵",
        pronunciation: "ta",
        word: "टमाटर",
        hindiWord: "टमाटर",
        example: "ट से टमाटर",
        hindiExample: "ट से टमाटर",
        description: "ट is a retroflex consonant.",
        hindiDescription: "ट एक मूर्धन्य व्यंजन है।",
        group: "Consonants",
        hindiGroup: "व्यंजन"
    },

    {
        letter: "ठ",
        name: "Tha",
        hindi: "ठ",
        icon: "🪑",
        pronunciation: "tha",
        word: "ठेला",
        hindiWord: "ठेला",
        example: "ठ से ठेला",
        hindiExample: "ठ से ठेला",
        description: "ठ is an aspirated retroflex consonant.",
        hindiDescription: "ठ एक महाप्राण मूर्धन्य व्यंजन है।",
        group: "Consonants",
        hindiGroup: "व्यंजन"
    },

    {
        letter: "ड",
        name: "Da",
        hindi: "ड",
        icon: "🥁",
        pronunciation: "da",
        word: "डमरू",
        hindiWord: "डमरू",
        example: "ड से डमरू",
        hindiExample: "ड से डमरू",
        description: "ड is a retroflex consonant.",
        hindiDescription: "ड एक मूर्धन्य व्यंजन है।",
        group: "Consonants",
        hindiGroup: "व्यंजन"
    },

    {
        letter: "ढ",
        name: "Dha",
        hindi: "ढ",
        icon: "🛢️",
        pronunciation: "dha",
        word: "ढक्कन",
        hindiWord: "ढक्कन",
        example: "ढ से ढक्कन",
        hindiExample: "ढ से ढक्कन",
        description: "ढ is an aspirated retroflex consonant.",
        hindiDescription: "ढ एक महाप्राण मूर्धन्य व्यंजन है।",
        group: "Consonants",
        hindiGroup: "व्यंजन"
    },

    {
        letter: "ण",
        name: "Na",
        hindi: "ण",
        icon: "🔤",
        pronunciation: "na",
        word: "गण",
        hindiWord: "गण",
        example: "ण की ध्वनि गण जैसे शब्दों में आती है।",
        hindiExample: "ण की ध्वनि गण जैसे शब्दों में आती है।",
        description: "ण is a retroflex nasal consonant.",
        hindiDescription: "ण एक मूर्धन्य नासिक्य व्यंजन है।",
        group: "Consonants",
        hindiGroup: "व्यंजन"
    },


    /* =========================
       त-वर्ग
       ========================= */

    {
        letter: "त",
        name: "Ta",
        hindi: "त",
        icon: "🌟",
        pronunciation: "ta",
        word: "तरबूज",
        hindiWord: "तरबूज",
        example: "त से तरबूज",
        hindiExample: "त से तरबूज",
        description: "त is a dental consonant.",
        hindiDescription: "त एक दंत्य व्यंजन है।",
        group: "Consonants",
        hindiGroup: "व्यंजन"
    },

    {
        letter: "थ",
        name: "Tha",
        hindi: "थ",
        icon: "🌳",
        pronunciation: "tha",
        word: "थर्मस",
        hindiWord: "थर्मस",
        example: "थ से थर्मस",
        hindiExample: "थ से थर्मस",
        description: "थ is an aspirated dental consonant.",
        hindiDescription: "थ एक महाप्राण दंत्य व्यंजन है।",
        group: "Consonants",
        hindiGroup: "व्यंजन"
    },

    {
        letter: "द",
        name: "Da",
        hindi: "द",
        icon: "दिन",
        pronunciation: "da",
        word: "दिन",
        hindiWord: "दिन",
        example: "द से दिन",
        hindiExample: "द से दिन",
        description: "द is a dental consonant.",
        hindiDescription: "द एक दंत्य व्यंजन है।",
        group: "Consonants",
        hindiGroup: "व्यंजन"
    },

    {
        letter: "ध",
        name: "Dha",
        hindi: "ध",
        icon: "धन",
        pronunciation: "dha",
        word: "धन",
        hindiWord: "धन",
        example: "ध से धन",
        hindiExample: "ध से धन",
        description: "ध is an aspirated dental consonant.",
        hindiDescription: "ध एक महाप्राण दंत्य व्यंजन है।",
        group: "Consonants",
        hindiGroup: "व्यंजन"
    },

    {
        letter: "न",
        name: "Na",
        hindi: "न",
        icon: "👃",
        pronunciation: "na",
        word: "नल",
        hindiWord: "नल",
        example: "न से नल",
        hindiExample: "न से नल",
        description: "न is a common nasal consonant.",
        hindiDescription: "न एक सामान्य नासिक्य व्यंजन है।",
        group: "Consonants",
        hindiGroup: "व्यंजन"
    },


    /* =========================
       प-वर्ग
       ========================= */

    {
        letter: "प",
        name: "Pa",
        hindi: "प",
        icon: "🦜",
        pronunciation: "pa",
        word: "पतंग",
        hindiWord: "पतंग",
        example: "प से पतंग",
        hindiExample: "प से पतंग",
        description: "प is the first consonant of the Pa-varga.",
        hindiDescription: "प प-वर्ग का पहला व्यंजन है।",
        group: "Consonants",
        hindiGroup: "व्यंजन"
    },

    {
        letter: "फ",
        name: "Pha",
        hindi: "फ",
        icon: "🌸",
        pronunciation: "pha",
        word: "फूल",
        hindiWord: "फूल",
        example: "फ से फूल",
        hindiExample: "फ से फूल",
        description: "फ is an aspirated consonant.",
        hindiDescription: "फ एक महाप्राण व्यंजन है।",
        group: "Consonants",
        hindiGroup: "व्यंजन"
    },

    {
        letter: "ब",
        name: "Ba",
        hindi: "ब",
        icon: "🐦",
        pronunciation: "ba",
        word: "बत्तख",
        hindiWord: "बत्तख",
        example: "ब से बत्तख",
        hindiExample: "ब से बत्तख",
        description: "ब is a common Hindi consonant.",
        hindiDescription: "ब हिंदी का एक सामान्य व्यंजन है।",
        group: "Consonants",
        hindiGroup: "व्यंजन"
    },

    {
        letter: "भ",
        name: "Bha",
        hindi: "भ",
        icon: "🐻",
        pronunciation: "bha",
        word: "भालू",
        hindiWord: "भालू",
        example: "भ से भालू",
        hindiExample: "भ से भालू",
        description: "भ is an aspirated consonant.",
        hindiDescription: "भ एक महाप्राण व्यंजन है।",
        group: "Consonants",
        hindiGroup: "व्यंजन"
    },

    {
        letter: "म",
        name: "Ma",
        hindi: "म",
        icon: "🐒",
        pronunciation: "ma",
        word: "मोर",
        hindiWord: "मोर",
        example: "म से मोर",
        hindiExample: "म से मोर",
        description: "म is a bilabial nasal consonant.",
        hindiDescription: "म एक नासिक्य व्यंजन है।",
        group: "Consonants",
        hindiGroup: "व्यंजन"
    },


    /* =========================
       अन्तःस्थ व्यंजन
       ========================= */

    {
        letter: "य",
        name: "Ya",
        hindi: "य",
        icon: "🧘",
        pronunciation: "ya",
        word: "यज्ञ",
        hindiWord: "यज्ञ",
        example: "य से यज्ञ",
        hindiExample: "य से यज्ञ",
        description: "य is a semivowel consonant.",
        hindiDescription: "य एक अंतःस्थ व्यंजन है।",
        group: "Consonants",
        hindiGroup: "व्यंजन"
    },

    {
        letter: "र",
        name: "Ra",
        hindi: "र",
        icon: "🚂",
        pronunciation: "ra",
        word: "रथ",
        hindiWord: "रथ",
        example: "र से रथ",
        hindiExample: "र से रथ",
        description: "र is a semivowel consonant.",
        hindiDescription: "र एक अंतःस्थ व्यंजन है।",
        group: "Consonants",
        hindiGroup: "व्यंजन"
    },

    {
        letter: "ल",
        name: "La",
        hindi: "ल",
        icon: "🍋",
        pronunciation: "la",
        word: "लड्डू",
        hindiWord: "लड्डू",
        example: "ल से लड्डू",
        hindiExample: "ल से लड्डू",
        description: "ल is a semivowel consonant.",
        hindiDescription: "ल एक अंतःस्थ व्यंजन है।",
        group: "Consonants",
        hindiGroup: "व्यंजन"
    },

    {
        letter: "व",
        name: "Va",
        hindi: "व",
        icon: "🌳",
        pronunciation: "va",
        word: "वन",
        hindiWord: "वन",
        example: "व से वन",
        hindiExample: "व से वन",
        description: "व is a semivowel consonant.",
        hindiDescription: "व एक अंतःस्थ व्यंजन है।",
        group: "Consonants",
        hindiGroup: "व्यंजन"
    },


    /* =========================
       ऊष्म व्यंजन
       ========================= */

    {
        letter: "श",
        name: "Sha",
        hindi: "श",
        icon: "🦋",
        pronunciation: "sha",
        word: "शेर",
        hindiWord: "शेर",
        example: "श से शेर",
        hindiExample: "श से शेर",
        description: "श is a palatal sibilant consonant.",
        hindiDescription: "श एक तालव्य ऊष्म व्यंजन है।",
        group: "Consonants",
        hindiGroup: "व्यंजन"
    },

    {
        letter: "ष",
        name: "Sha",
        hindi: "ष",
        icon: "📖",
        pronunciation: "sha",
        word: "षट्कोण",
        hindiWord: "षट्कोण",
        example: "ष से षट्कोण",
        hindiExample: "ष से षट्कोण",
        description: "ष is a retroflex sibilant consonant.",
        hindiDescription: "ष एक मूर्धन्य ऊष्म व्यंजन है।",
        group: "Consonants",
        hindiGroup: "व्यंजन"
    },

    {
        letter: "स",
        name: "Sa",
        hindi: "स",
        icon: "☀️",
        pronunciation: "sa",
        word: "सूरज",
        hindiWord: "सूरज",
        example: "स से सूरज",
        hindiExample: "स से सूरज",
        description: "स is a common sibilant consonant.",
        hindiDescription: "स एक सामान्य ऊष्म व्यंजन है।",
        group: "Consonants",
        hindiGroup: "व्यंजन"
    },

    {
        letter: "ह",
        name: "Ha",
        hindi: "ह",
        icon: "ह",
        pronunciation: "ha",
        word: "हाथी",
        hindiWord: "हाथी",
        example: "ह से हाथी",
        hindiExample: "ह से हाथी",
        description: "ह is a breath consonant.",
        hindiDescription: "ह एक ऊष्म व्यंजन है।",
        group: "Consonants",
        hindiGroup: "व्यंजन"
    },


    /* =========================
       संयुक्त अक्षर
       ========================= */

    {
        letter: "क्ष",
        name: "Ksha",
        hindi: "क्ष",
        icon: "📚",
        pronunciation: "ksha",
        word: "क्षमा",
        hindiWord: "क्षमा",
        example: "क्ष से क्षमा",
        hindiExample: "क्ष से क्षमा",
        description: "क्ष is a conjunct letter formed from क + ष.",
        hindiDescription: "क्ष क + ष से बना एक संयुक्त अक्षर है।",
        group: "Conjuncts",
        hindiGroup: "संयुक्त अक्षर"
    },

    {
        letter: "त्र",
        name: "Tra",
        hindi: "त्र",
        icon: "🚩",
        pronunciation: "tra",
        word: "त्रिशूल",
        hindiWord: "त्रिशूल",
        example: "त्र से त्रिशूल",
        hindiExample: "त्र से त्रिशूल",
        description: "त्र is a conjunct letter formed from त + र.",
        hindiDescription: "त्र त + र से बना एक संयुक्त अक्षर है।",
        group: "Conjuncts",
        hindiGroup: "संयुक्त अक्षर"
    },

    {
        letter: "ज्ञ",
        name: "Gya",
        hindi: "ज्ञ",
        icon: "🧠",
        pronunciation: "gya",
        word: "ज्ञान",
        hindiWord: "ज्ञान",
        example: "ज्ञ से ज्ञान",
        hindiExample: "ज्ञ से ज्ञान",
        description: "ज्ञ is a common conjunct letter.",
        hindiDescription: "ज्ञ एक सामान्य संयुक्त अक्षर है।",
        group: "Conjuncts",
        hindiGroup: "संयुक्त अक्षर"
    },

    {
        letter: "श्र",
        name: "Shra",
        hindi: "श्र",
        icon: "📜",
        pronunciation: "shra",
        word: "श्रम",
        hindiWord: "श्रम",
        example: "श्र से श्रम",
        hindiExample: "श्र से श्रम",
        description: "श्र is a conjunct letter formed from श + र.",
        hindiDescription: "श्र श + र से बना एक संयुक्त अक्षर है।",
        group: "Conjuncts",
        hindiGroup: "संयुक्त अक्षर"
    }

];


/* =========================================================
   HINDI VARNAMALA SEARCH
   ========================================================= */

function searchHindiVarnamala(query) {

    const q = String(query || "")
        .trim()
        .toLowerCase();

    if (!q) {
        return HINDI_VARNAMALA;
    }

    return HINDI_VARNAMALA.filter(item => {

        return (
            item.letter.toLowerCase().includes(q) ||
            item.name.toLowerCase().includes(q) ||
            item.hindi.toLowerCase().includes(q) ||
            item.word.toLowerCase().includes(q) ||
            item.hindiWord.toLowerCase().includes(q) ||
            item.pronunciation.toLowerCase().includes(q) ||
            item.group.toLowerCase().includes(q) ||
            item.hindiGroup.toLowerCase().includes(q)
        );

    });
}


/* =========================================================
   GET HINDI VARNAMALA DATA
   ========================================================= */

function getHindiVarnamalaData(item) {

    if (!item) return null;

    if (typeof item === "object") {
        return item;
    }

    return HINDI_VARNAMALA.find(x => {

        return (
            x.letter === item ||
            x.name === item ||
            x.hindi === item ||
            x.word === item ||
            x.hindiWord === item
        );

    }) || null;
}


/* =========================================================
   HINDI VARNAMALA GROUPS
   ========================================================= */

const HINDI_VARNAMALA_GROUPS = {

    vowels: {
        name: "Vowels",
        hindi: "स्वर",
        icon: "🔤",
        description: "Hindi vowels are called Swar.",
        hindiDescription: "हिंदी के स्वरों को स्वर कहा जाता है।"
    },

    consonants: {
        name: "Consonants",
        hindi: "व्यंजन",
        icon: "📖",
        description: "Hindi consonants are called Vyanjan.",
        hindiDescription: "हिंदी के व्यंजनों को व्यंजन कहा जाता है।"
    },

    conjuncts: {
        name: "Conjunct Letters",
        hindi: "संयुक्त अक्षर",
        icon: "🔗",
        description: "Conjunct letters are formed by combining consonants.",
        hindiDescription: "संयुक्त अक्षर दो या अधिक व्यंजनों के मेल से बनते हैं।"
    }

};


/* =========================================================
   HINDI VARNAMALA COUNTS
   ========================================================= */

const HINDI_VOWELS = HINDI_VARNAMALA.filter(
    item => item.group === "Vowels"
);

const HINDI_CONSONANTS = HINDI_VARNAMALA.filter(
    item => item.group === "Consonants"
);

const HINDI_CONJUNCTS = HINDI_VARNAMALA.filter(
    item => item.group === "Conjuncts"
);


console.log(
    "Hindi Varnamala:",
    HINDI_VARNAMALA.length,
    "entries"
);

console.log(
    "Hindi Vowels:",
    HINDI_VOWELS.length
);

console.log(
    "Hindi Consonants:",
    HINDI_CONSONANTS.length
);

console.log(
    "Hindi Conjuncts:",
    HINDI_CONJUNCTS.length
);


/* =========================================================
   PART 9 END
   ========================================================= */

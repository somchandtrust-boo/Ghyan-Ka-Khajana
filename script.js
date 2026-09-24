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

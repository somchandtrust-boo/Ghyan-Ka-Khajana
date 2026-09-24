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

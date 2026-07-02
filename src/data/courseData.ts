export const courseData = [
  {
    "id": "ch1",
    "title_en": "Chapter 1: Introduction to CSS",
    "title_hi": "अध्याय 1: CSS का परिचय",
    "topics": [
      {
        "id": "t1-1",
        "title_en": "What is CSS?",
        "title_hi": "CSS क्या है?",
        "content_en": "### What is CSS?\nCSS stands for **Cascading Style Sheets**. While HTML is used to define the structure and content of a webpage (like headings, paragraphs, and images), **CSS is used to style and lay out that content**.\nThink of it like building a house:\n 
        -**HTML** is the skeleton, the walls, and the roof.
        -**CSS** is the paint, the wallpaper, the furniture, and the overall interior design.
        ###Why is calling **'cascading'**?
        \n\nThe word **'Cascading'** means that styles can fall from one style sheet to another. If different rules apply to the same element, CSS has a system to decide which one 'wins'. This hierarchy is fundamental to how CSS works.\n\n

###Why do we need CSS?\n\n

1. Separation of Concerns: Keep your content (HTML) separate from your design (CSS). This makes your code much easier to manage and update.

2. Consistency: You can style all the headings on a 100-page website by changing just one line of code in a single CSS file.\n

3. Device Compatibility: CSS allows you to make your website look great on phones, tablets, and desktops by using responsive design techniques.\n

4. Faster Loading: Since one CSS file can style many pages, the browser only needs to download the design once.\n
        ",
        "content_hi": "### CSS क्या है?\nCSS का फुल फॉर्म **Cascading Style Sheets** होता है। जहाँ HTML का इस्तेमाल किसी वेबपेज के स्ट्रक्चर (ढांचे) और कंटेंट (जैसे हेडिंग, पैराग्राफ और इमेज) को तय करने के लिए किया जाता है, वहीं **CSS का इस्तेमाल उस कंटेंट को स्टाइल करने और उसे सही ढंग से व्यवस्थित (lay out) करने के लिए होता है**।\nइसे एक घर बनाने के उदाहरण से समझें:\n 
        -**HTML** घर का ढांचा (कंकाल), दीवारें और छत है।
        -**CSS** उसका पेंट, वॉलपेपर, फर्नीचर और पूरे घर की अंदरूनी सजावट (interior design) है।
        ###इसे **'cascading'** क्यों कहा जाता है?
        \n\n**'Cascading'** शब्द का मतलब है कि स्टाइल्स एक स्टाइल शीट से नीचे दूसरी स्टाइल शीट पर लागू (fall) हो सकती हैं। अगर एक ही एलिमेंट (element) पर अलग-अलग नियम लागू होते हैं, तो CSS के पास यह तय करने का एक सिस्टम होता है कि कौन सा नियम 'जीतेगा' (यानी किसका असर दिखेगा)। यह पदानुक्रम (hierarchy) CSS के काम करने के तरीके का सबसे बुनियादी हिस्सा है।\n\n

###हमें CSS की जरूरत क्यों है?\n\n

1. कामों का बंटवारा (Separation of Concerns): अपने कंटेंट (HTML) को अपने डिजाइन (CSS) से अलग रखें। इससे आपके कोड को संभालना (manage) और अपडेट करना बहुत आसान हो जाता है।

2. एकरूपता (Consistency): आप सिर्फ एक CSS फाइल में कोड की एक लाइन बदलकर, 100 पेजों की वेबसाइट की सभी हेडिंग्स का स्टाइल एक साथ बदल सकते हैं।\n

3. डिवाइस अनुकूलता (Device Compatibility): रेस्पॉन्सिव डिजाइन (responsive design) तकनीकों का इस्तेमाल करके, CSS आपकी वेबसाइट को फोन, टैबलेट और कंप्यूटर (डेस्कटॉप) सभी पर बेहतरीन दिखाने की सुविधा देता है।\n

4. तेजी से लोड होना (Faster Loading): चूंकि एक ही CSS फाइल कई पेजों को स्टाइल कर सकती है, इसलिए ब्राउज़र को डिजाइन को सिर्फ एक बार डाउनलोड करने की जरूरत होती है।\n
",
        "sandboxCode": {
          "html": "<h1 class=\"title\">Hello World</h1>",
          "css": ".title {\n  color: blue;\n}"
        }
      },
      {
        "id": "t1-2",
        "title_en": "ii. CSS Comments",
        "title_hi": "ii. CSS टिप्पणियाँ",
        "content_en": "### CSS Comments\nComments are used to explain the code, and may help when you edit the source code at a later date. Comments are ignored by browsers.\n\nA CSS comment starts with `/*` and ends with `*/`.",
        "content_hi": "### CSS टिप्पणियाँ\nटिप्पणियों का उपयोग कोड को समझाने के लिए किया जाता है, और बाद में स्रोत कोड को संपादित करते समय मदद कर सकते हैं। ब्राउज़रों द्वारा टिप्पणियों को अनदेखा कर दिया जाता है।\n\nएक CSS टिप्पणी `/*` से शुरू होती है और `*/` पर समाप्त होती है।"
      },
      {
        "id": "t1-3",
        "title_en": "iii. CSS Selectors Introduction",
        "title_hi": "iii. CSS चयनकर्ता परिचय",
        "content_en": "### CSS Selectors\nCSS selectors are used to \"find\" (or select) the HTML elements you want to style. We will cover them in depth in Chapter 2.",
        "content_hi": "### CSS चयनकर्ता\nCSS चयनकर्ताओं का उपयोग उन HTML तत्वों को खोजने (या चुनने) के लिए किया जाता है जिन्हें आप स्टाइल करना चाहते हैं। हम अध्याय 2 में इन्हें विस्तार से कवर करेंगे।"
      },
      {
        "id": "t1-4",
        "title_en": "iv. How to Add CSS",
        "title_hi": "iv. CSS कैसे जोड़ें",
        "content_en": "### How to Add CSS\nThere are three ways of inserting a style sheet:\n- External CSS\n- Internal CSS\n- Inline CSS\n\n### • CSS Priority\nIf multiple styles are applied to the same element, the priority (from highest to lowest) is:\n1. Inline style\n2. Internal and External style sheets (whichever is declared last)\n3. Browser default",
        "content_hi": "### CSS कैसे जोड़ें\nस्टाइल शीट डालने के तीन तरीके हैं:\n- बाहरी CSS\n- आंतरिक CSS\n- इनलाइन CSS\n\n### • CSS प्राथमिकता\nयदि एक ही तत्व पर कई स्टाइल लागू किए जाते हैं, तो प्राथमिकता (उच्चतम से निम्नतम तक) है:\n1. इनलाइन स्टाइल\n2. आंतरिक और बाहरी स्टाइल शीट (जो भी अंतिम घोषित किया गया हो)\n3. ब्राउज़र डिफ़ॉल्ट",
        "sandboxCode": {
          "html": "<!-- Inline style has highest priority -->\n<p style=\"color: red;\" class=\"text\">This will be red</p>",
          "css": ".text {\n  color: blue;\n}"
        }
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "question_en": "What does CSS stand for?",
        "question_hi": "CSS का फुल फॉर्म क्या है?",
        "options_en": [
          "Cascading Style Sheets",
          "Computer Style Sheets",
          "Creative Style Sheets"
        ],
        "options_hi": [
          "Cascading Style Sheets",
          "Computer Style Sheets",
          "Creative Style Sheets"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "ch2",
    "title_en": "Chapter 2: CSS Selectors Mastery",
    "title_hi": "अध्याय 2: CSS चयनकर्ता महारत",
    "topics": [
      {
        "id": "t2-1",
        "title_en": "i. Selectors",
        "title_hi": "i. चयनकर्ता",
        "content_en": "### Selectors\n\n### • Element Selector\nSelects HTML elements based on the element name.\n\n### • Class Selector\nSelects HTML elements with a specific class attribute. Starts with a dot `.class-name`.\n\n### • ID Selector\nSelects a unique element with a specific id attribute. Starts with a hash `#id-name`.\n\n[[SANDBOX_0]]\n\n### • Group Selector\nSelects all elements with the same style definitions. Separated by commas `h1, h2, p`.\n\n### • Descendant Selector\nSelects all elements that are descendants of a specified element. Space separated `div p`.\n\n### • Child Selector\nSelects all elements that are the children of a specified element. Uses `>` like `div > p`.\n\n### • Adjacent Sibling Selector\nSelects an element that is directly after another specific element. Uses `+` like `div + p`.\n\n### • General Sibling Selector\nSelects all elements that are siblings of a specified element. Uses `~` like `div ~ p`.\n\n### • Attribute Selectors\nSelects elements with a specific attribute or attribute value. `[target=\"_blank\"]`.\n\n[[SANDBOX_1]]",
        "content_hi": "### चयनकर्ता\n\n### • तत्व चयनकर्ता (Element Selector)\nतत्व नाम के आधार पर HTML तत्वों का चयन करता है।\n\n### • वर्ग चयनकर्ता (Class Selector)\nएक विशिष्ट वर्ग विशेषता वाले HTML तत्वों का चयन करता है। एक बिंदु `.class-name` से शुरू होता है।\n\n### • आईडी चयनकर्ता (ID Selector)\nएक विशिष्ट आईडी विशेषता वाले एक अद्वितीय तत्व का चयन करता है। हैश `#id-name` से शुरू होता है।\n\n[[SANDBOX_0]]\n\n### • समूह चयनकर्ता (Group Selector)\nसमान शैली परिभाषाओं वाले सभी तत्वों का चयन करता है। अल्पविराम `h1, h2, p` द्वारा अलग किया गया।\n\n### • वंशज चयनकर्ता (Descendant Selector)\nउन सभी तत्वों का चयन करता है जो किसी निर्दिष्ट तत्व के वंशज हैं। स्थान अलग `div p`।\n\n### • बाल चयनकर्ता (Child Selector)\nउन सभी तत्वों का चयन करता है जो एक निर्दिष्ट तत्व के बच्चे हैं। `div > p` की तरह `>` का उपयोग करता है।\n\n### • आसन्न सिबलिंग चयनकर्ता (Adjacent Sibling Selector)\nउस तत्व का चयन करता है जो सीधे दूसरे विशिष्ट तत्व के बाद होता है। `div + p` की तरह `+` का उपयोग करता है।\n\n### • सामान्य सिबलिंग चयनकर्ता (General Sibling Selector)\nउन सभी तत्वों का चयन करता है जो किसी निर्दिष्ट तत्व के भाई-बहन हैं। `div ~ p` की तरह `~` का उपयोग करता है।\n\n### • विशेषता चयनकर्ता (Attribute Selectors)\nएक विशिष्ट विशेषता या विशेषता मान वाले तत्वों का चयन करता है। `[target=\"_blank\"]`.\n\n[[SANDBOX_1]]",
        "sandboxes": [
          {
            "title_en": "Element, Class, ID",
            "title_hi": "तत्व, वर्ग, आईडी",
            "html": "<h1 id=\"main-title\">Main Heading</h1>\n<p class=\"text-content\">A paragraph with a class.</p>\n<span>A normal span element</span>",
            "css": "h1 {\n  color: blue;\n}\n.text-content {\n  font-size: 18px;\n  color: gray;\n}\n#main-title {\n  text-align: center;\n}"
          },
          {
            "title_en": "Group & Combinator Selectors",
            "title_hi": "समूह और कॉम्बिनेटर चयनकर्ता",
            "html": "<div class=\"container\">\n  <h2>Group H2</h2>\n  <p>Child</p>\n  <div><p>Descendant</p></div>\n</div>\n<h3>Group H3</h3>\n<p>Adjacent</p>\n<p>General sibling</p>",
            "css": "h2, h3 {\n  color: green;\n}\n.container p {\n  margin: 10px;\n}\n.container > p {\n  font-weight: bold;\n}\nh3 + p {\n  color: purple;\n}\nh3 ~ p {\n  text-decoration: underline;\n}"
          }
        ]
      },
      {
        "id": "t2-2",
        "title_en": "ii. Pseudo Classes & Elements",
        "title_hi": "ii. छद्म वर्ग और तत्व",
        "content_en": "### Pseudo Classes & Elements\nA pseudo-class is used to define a special state of an element (e.g., `:hover`, `:active`).\nA pseudo-element is used to style specified parts of an element (e.g., `::before`, `::first-line`).",
        "content_hi": "### छद्म वर्ग और तत्व\nएक छद्म-वर्ग का उपयोग किसी तत्व की विशेष स्थिति को परिभाषित करने के लिए किया जाता है (उदा., `:hover`, `:active`)।\nएक छद्म-तत्व का उपयोग किसी तत्व के निर्दिष्ट भागों को स्टाइल करने के लिए किया जाता है (उदा., `::before`, `::first-line`)।"
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "question_en": "Which selector uses a period (.)?",
        "question_hi": "कौन सा चयनकर्ता अवधि (.) का उपयोग करता है?",
        "options_en": [
          "ID",
          "Class",
          "Element"
        ],
        "options_hi": [
          "आईडी (ID)",
          "वर्ग (Class)",
          "तत्व (Element)"
        ],
        "correctAnswerIndex": 1
      }
    ]
  },
  {
    "id": "ch3",
    "title_en": "Chapter 3: Colors & Backgrounds",
    "title_hi": "अध्याय 3: रंग और पृष्ठभूमि",
    "topics": [
      {
        "id": "t3-1",
        "title_en": "i. CSS Colors",
        "title_hi": "i. CSS रंग",
        "content_en": "### CSS Colors\nColors can be specified using different formats:\n\n### • HEX Colors\nHexadecimal colors start with a `#` followed by 3 or 6 characters (e.g., `#ff0000`).\n\n### • RGB & RGBA\nRed, Green, Blue values. RGBA adds an Alpha channel for opacity (e.g., `rgba(255, 0, 0, 0.5)`).\n\n### • HSL & HSLA\nHue, Saturation, Lightness. HSLA adds Alpha for opacity.",
        "content_hi": "### CSS रंग\nविभिन्न प्रारूपों का उपयोग करके रंग निर्दिष्ट किए जा सकते हैं:\n\n### • हेक्स रंग (HEX Colors)\nहेक्साडेसिमल रंग `#` से शुरू होते हैं, जिसके बाद 3 या 6 अक्षर होते हैं (उदा., `#ff0000`)।\n\n### • RGB और RGBA\nलाल, हरा, नीला मान। RGBA अस्पष्टता के लिए एक अल्फा चैनल जोड़ता है।\n\n### • HSL और HSLA\nह्यू, संतृप्ति, हल्कापन। HSLA अस्पष्टता के लिए अल्फा जोड़ता है।"
      },
      {
        "id": "t3-2",
        "title_en": "ii. Background",
        "title_hi": "ii. पृष्ठभूमि",
        "content_en": "### Background Properties\n\n### • background Color\nSets the background color of an element.\n\n### • Background Attachment\nSpecifies whether a background image should scroll or be fixed (`scroll`, `fixed`, `local`).\n\n### • Gradient Backgrounds\nTransitions between two or more colors using `linear-gradient` or `radial-gradient`.",
        "content_hi": "### पृष्ठभूमि गुण\n\n### • पृष्ठभूमि रंग (background Color)\nकिसी तत्व का पृष्ठभूमि रंग सेट करता है।\n\n### • पृष्ठभूमि अनुलग्नक (Background Attachment)\nनिर्दिष्ट करता है कि पृष्ठभूमि छवि स्क्रॉल होनी चाहिए या निश्चित होनी चाहिए।\n\n### • ढाल पृष्ठभूमि (Gradient Backgrounds)\n`linear-gradient` या `radial-gradient` का उपयोग करके दो या दो से अधिक रंगों के बीच संक्रमण।"
      },
      {
        "id": "t3-3",
        "title_en": "iii. Background Image",
        "title_hi": "iii. पृष्ठभूमि छवि",
        "content_en": "### Background Image Properties\n\n### • Background Repeat\nSets if/how a background image will be repeated (`repeat`, `no-repeat`, `repeat-x`).\n\n### • Background Position\nSets the starting position of a background image (`center`, `top left`).\n\n### • Background Size\nSpecifies the size of the background images (`cover`, `contain`, `100%`).",
        "content_hi": "### पृष्ठभूमि छवि गुण\n\n### • पृष्ठभूमि दोहराना (Background Repeat)\nसेट करता है कि पृष्ठभूमि छवि दोहराई जाएगी या नहीं (`repeat`, `no-repeat`)।\n\n### • पृष्ठभूमि स्थिति (Background Position)\nपृष्ठभूमि छवि की प्रारंभिक स्थिति सेट करता है।\n\n### • पृष्ठभूमि का आकार (Background Size)\nपृष्ठभूमि छवियों का आकार निर्दिष्ट करता है (`cover`, `contain`)。"
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "question_en": "What does 'A' in RGBA stand for?",
        "question_hi": "RGBA में 'A' का क्या अर्थ है?",
        "options_en": [
          "Apple",
          "Alpha",
          "Area"
        ],
        "options_hi": [
          "Apple",
          "Alpha (पारदर्शिता)",
          "Area"
        ],
        "correctAnswerIndex": 1
      }
    ]
  },
  {
    "id": "ch4",
    "title_en": "Chapter 4: Typography & Text",
    "title_hi": "अध्याय 4: टाइपोग्राफी और पाठ",
    "topics": [
      {
        "id": "t4-1",
        "title_en": "i. Font",
        "title_hi": "i. फ़ॉन्ट",
        "content_en": "### Font\n\n### • Font Family\nSpecifies the font for an element.\n\n### • Web Safe Fonts\nFonts pre-installed across most operating systems (e.g., Arial, Times New Roman).\n\n### • Google Fonts\nUsing external fonts via Google Fonts.",
        "content_hi": "### फ़ॉन्ट\n\n### • फ़ॉन्ट परिवार (Font Family)\nकिसी तत्व के लिए फ़ॉन्ट निर्दिष्ट करता है।\n\n### • वेब सुरक्षित फ़ॉन्ट (Web Safe Fonts)\nज़्यादातर ऑपरेटिंग सिस्टम में पहले से इंस्टॉल किए गए फ़ॉन्ट।\n\n### • Google फ़ॉन्ट्स\nGoogle फ़ॉन्ट्स के माध्यम से बाहरी फ़ॉन्ट का उपयोग करना।"
      },
      {
        "id": "t4-2",
        "title_en": "ii. Font properties",
        "title_hi": "ii. फ़ॉन्ट गुण",
        "content_en": "### Font Properties\n\n### • Font Size\nSets the size of the text (`px`, `em`, `rem`).\n\n### • Font Weight\nSets how thick or thin characters in text should be (`bold`, `400`).\n\n### • Font Style\nSpecifies the style of the font, mostly used for `italic`.",
        "content_hi": "### फ़ॉन्ट गुण\n\n### • फ़ॉन्ट आकार (Font Size)\nपाठ का आकार सेट करता है।\n\n### • फ़ॉन्ट वजन (Font Weight)\nसेट करता है कि पाठ में वर्ण कितने मोटे या पतले होने चाहिए।\n\n### • फ़ॉन्ट शैली (Font Style)\nफ़ॉन्ट की शैली निर्दिष्ट करता है, मुख्य रूप से `italic` के लिए उपयोग किया जाता है।"
      },
      {
        "id": "t4-3",
        "title_en": "iii. Text Properties",
        "title_hi": "iii. पाठ गुण",
        "content_en": "### Text Properties\n\n### • Text Align\nSets the horizontal alignment of text (`left`, `center`, `right`).\n\n### • Text Transform\nControls the capitalization of text (`uppercase`, `lowercase`, `capitalize`).\n\n### • Text Decoration\nSpecifies the decoration added to text (`underline`, `none`).\n\n### • Letter Spacing\nIncreases or decreases the space between characters.\n\n### • Word Spacing\nIncreases or decreases the space between words.\n\n### • Line Height\nSpecifies the height of a line.\n\n### • Text Shadow\nAdds shadow to text.",
        "content_hi": "### पाठ गुण\n\n### • पाठ संरेखण (Text Align)\nपाठ का क्षैतिज संरेखण सेट करता है।\n\n### • पाठ परिवर्तन (Text Transform)\nपाठ के पूंजीकरण को नियंत्रित करता है।\n\n### • पाठ सजावट (Text Decoration)\nपाठ में जोड़ी गई सजावट निर्दिष्ट करता है।\n\n### • अक्षर रिक्ति (Letter Spacing)\nअक्षरों के बीच की जगह बढ़ाता या घटाता है।\n\n### • शब्द रिक्ति (Word Spacing)\nशब्दों के बीच की जगह बढ़ाता या घटाता है।\n\n### • रेखा ऊंचाई (Line Height)\nएक रेखा की ऊंचाई निर्दिष्ट करता है।\n\n### • पाठ छाया (Text Shadow)\nपाठ में छाया जोड़ता है।"
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "question_en": "Which property makes text italic?",
        "question_hi": "कौन सी प्रॉपर्टी टेक्स्ट को इटैलिक बनाती है?",
        "options_en": [
          "font-style",
          "text-decoration",
          "font-weight"
        ],
        "options_hi": [
          "font-style",
          "text-decoration",
          "font-weight"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "ch5",
    "title_en": "Chapter 5: CSS Box Model",
    "title_hi": "अध्याय 5: CSS बॉक्स मॉडल",
    "topics": [
      {
        "id": "t5-1",
        "title_en": "i. Content Area",
        "title_hi": "i. सामग्री क्षेत्र",
        "content_en": "### Content Area\nThe Box Model consists of:\n\n### • Padding\nClears an area around the content. The padding is transparent.\n\n### • Border\nA border that goes around the padding and content.\n\n### • Margin\nClears an area outside the border. The margin is transparent.",
        "content_hi": "### सामग्री क्षेत्र\nबॉक्स मॉडल में शामिल हैं:\n\n### • पैडिंग (Padding)\nसामग्री के चारों ओर एक क्षेत्र साफ़ करता है। पैडिंग पारदर्शी है।\n\n### • सीमा (Border)\nएक सीमा जो पैडिंग और सामग्री के चारों ओर जाती है।\n\n### • मार्जिन (Margin)\nसीमा के बाहर एक क्षेत्र साफ़ करता है। मार्जिन पारदर्शी है।"
      },
      {
        "id": "t5-2",
        "title_en": "ii. Box Sizing",
        "title_hi": "ii. बॉक्स साइज़िंग",
        "content_en": "### Box Sizing\nDefines how the width and height of an element are calculated: should they include padding and borders, or not (`content-box` vs `border-box`).\n\n### • Outline\nA line that is drawn around elements, OUTSIDE the borders, to make the element stand out.",
        "content_hi": "### बॉक्स साइज़िंग\nपरिभाषित करता है कि किसी तत्व की चौड़ाई और ऊंचाई की गणना कैसे की जाती है (`content-box` बनाम `border-box`)।\n\n### • आउटलाइन (Outline)\nएक रेखा जो तत्वों के चारों ओर, सीमाओं के बाहर खींची जाती है, ताकि तत्व अलग दिखे।"
      },
      {
        "id": "t5-3",
        "title_en": "iii. Overflow",
        "title_hi": "iii. अतिप्रवाह",
        "content_en": "### Overflow\nThe `overflow` property specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified area (`visible`, `hidden`, `scroll`, `auto`).",
        "content_hi": "### अतिप्रवाह (Overflow)\n`overflow` संपत्ति निर्दिष्ट करती है कि सामग्री को क्लिप करना है या स्क्रॉलबार जोड़ना है जब किसी तत्व की सामग्री निर्दिष्ट क्षेत्र में फिट होने के लिए बहुत बड़ी हो।"
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "question_en": "Which part of the box model is the outermost layer?",
        "question_hi": "बॉक्स मॉडल का कौन सा हिस्सा सबसे बाहरी परत है?",
        "options_en": [
          "Border",
          "Margin",
          "Padding"
        ],
        "options_hi": [
          "सीमा (Border)",
          "मार्जिन (Margin)",
          "पैडिंग (Padding)"
        ],
        "correctAnswerIndex": 1
      }
    ]
  },
  {
    "id": "ch6",
    "title_en": "Chapter 6: Dimensions & Units",
    "title_hi": "अध्याय 6: आयाम और इकाइयाँ",
    "topics": [
      {
        "id": "t6-1",
        "title_en": "i. Width",
        "title_hi": "i. चौड़ाई",
        "content_en": "### Width\nSets the width of an element.\n\n### • Min Width\nSets the minimum width of an element.\n\n### • Max Width\nSets the maximum width of an element.",
        "content_hi": "### चौड़ाई\nकिसी तत्व की चौड़ाई सेट करता है।\n\n### • न्यूनतम चौड़ाई (Min Width)\nकिसी तत्व की न्यूनतम चौड़ाई सेट करता है।\n\n### • अधिकतम चौड़ाई (Max Width)\nकिसी तत्व की अधिकतम चौड़ाई सेट करता है।"
      },
      {
        "id": "t6-2",
        "title_en": "ii. Height",
        "title_hi": "ii. ऊंचाई",
        "content_en": "### Height\nSets the height of an element.\n\n### • Min Height\nSets the minimum height of an element.\n\n### • Max Height\nSets the maximum height of an element.",
        "content_hi": "### ऊंचाई\nकिसी तत्व की ऊंचाई सेट करता है।\n\n### • न्यूनतम ऊंचाई (Min Height)\nकिसी तत्व की न्यूनतम ऊंचाई सेट करता है।\n\n### • अधिकतम ऊंचाई (Max Height)\nकिसी तत्व की अधिकतम ऊंचाई सेट करता है।"
      },
      {
        "id": "t6-3",
        "title_en": "iii. Units",
        "title_hi": "iii. इकाइयाँ",
        "content_en": "### Units\n\n### • px\nPixels (1px = 1/96th of 1in).\n\n### • %\nRelative to the parent element.\n\n### • em\nRelative to the font-size of the element.\n\n### • rem\nRelative to font-size of the root element.\n\n### • vh\nRelative to 1% of the height of the viewport.\n\n### • vw\nRelative to 1% of the width of the viewport.",
        "content_hi": "### इकाइयाँ\n\n### • px\nपिक्सेल।\n\n### • %\nमूल तत्व के सापेक्ष।\n\n### • em\nतत्व के फ़ॉन्ट-आकार के सापेक्ष।\n\n### • rem\nरूट तत्व के फ़ॉन्ट-आकार के सापेक्ष।\n\n### • vh\nव्यूपोर्ट की ऊंचाई के 1% के सापेक्ष।\n\n### • vw\nव्यूपोर्ट की चौड़ाई के 1% के सापेक्ष।"
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "question_en": "What does 'vw' stand for?",
        "question_hi": "'vw' का क्या अर्थ है?",
        "options_en": [
          "View Width",
          "Viewport Width",
          "Visual Width"
        ],
        "options_hi": [
          "View Width",
          "Viewport Width",
          "Visual Width"
        ],
        "correctAnswerIndex": 1
      }
    ]
  },
  {
    "id": "ch7",
    "title_en": "Chapter 7: Display & Visibility",
    "title_hi": "अध्याय 7: प्रदर्शन और दृश्यता",
    "topics": [
      {
        "id": "t7-1",
        "title_en": "i. Block & Elements",
        "title_hi": "i. ब्लॉक और तत्व",
        "content_en": "### Block & Elements\n\n### • Block Elements\nAlways starts on a new line and takes up the full width available (e.g., `<div>`, `<p>`).\n\n### • Inline Elements\nDoes not start on a new line and only takes up as much width as necessary (e.g., `<span>`, `<a>`).\n\n### • Inline Block\nFormatted as an inline element, but you can apply height and width values.",
        "content_hi": "### ब्लॉक और तत्व\n\n### • ब्लॉक तत्व (Block Elements)\nहमेशा एक नई लाइन पर शुरू होता है और उपलब्ध पूरी चौड़ाई लेता है (उदा., `<div>`, `<p>`)।\n\n### • इनलाइन तत्व (Inline Elements)\nएक नई लाइन पर शुरू नहीं होता है और केवल उतनी ही चौड़ाई लेता है जितनी आवश्यकता होती है (उदा., `<span>`, `<a>`)।\n\n### • इनलाइन ब्लॉक (Inline Block)\nएक इनलाइन तत्व के रूप में स्वरूपित, लेकिन आप ऊंचाई और चौड़ाई मान लागू कर सकते हैं।"
      },
      {
        "id": "t7-2",
        "title_en": "ii. Display",
        "title_hi": "ii. प्रदर्शन",
        "content_en": "### Display\n\n### • None\nThe element is completely removed.\n\n### • flex\nDisplays an element as a block-level flex container.\n\n### • grid\nDisplays an element as a block-level grid container.",
        "content_hi": "### प्रदर्शन (Display)\n\n### • None\nतत्व पूरी तरह से हटा दिया गया है।\n\n### • flex\nएक तत्व को ब्लॉक-स्तर के फ्लेक्स कंटेनर के रूप में प्रदर्शित करता है।\n\n### • grid\nएक तत्व को ब्लॉक-स्तर के ग्रिड कंटेनर के रूप में प्रदर्शित करता है।"
      },
      {
        "id": "t7-3",
        "title_en": "iii. Visibility & Opacity",
        "title_hi": "iii. दृश्यता और अस्पष्टता",
        "content_en": "### Visibility\nSpecifies whether or not an element is visible. `hidden` hides the element, but it still takes up space.\n\n### Opacity\nSets the opacity level for an element (from 0.0 to 1.0).",
        "content_hi": "### दृश्यता (Visibility)\nनिर्दिष्ट करता है कि कोई तत्व दृश्यमान है या नहीं। `hidden` तत्व को छुपाता है, लेकिन यह अभी भी जगह लेता है।\n\n### अस्पष्टता (Opacity)\nकिसी तत्व के लिए अस्पष्टता स्तर सेट करता है (0.0 से 1.0 तक)।"
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "question_en": "Which display property hides an element and removes it from the layout?",
        "question_hi": "कौन सी डिस्प्ले प्रॉपर्टी किसी एलिमेंट को छुपाती है और उसे लेआउट से हटा देती है?",
        "options_en": [
          "visibility: hidden",
          "display: none",
          "opacity: 0"
        ],
        "options_hi": [
          "visibility: hidden",
          "display: none",
          "opacity: 0"
        ],
        "correctAnswerIndex": 1
      }
    ]
  },
  {
    "id": "ch8",
    "title_en": "Chapter 8: Positioning",
    "title_hi": "अध्याय 8: पोजीशनिंग",
    "topics": [
      {
        "id": "t8-1",
        "title_en": "i. Position",
        "title_hi": "i. पोजीशन",
        "content_en": "### Position\n\n### • Static\nDefault positioning. Elements render in order, as they appear in the document flow.\n\n### • Relative\nPositioned relative to its normal position.\n\n### • Absolute\nPositioned relative to the nearest positioned ancestor.\n\n### • Fixed\nPositioned relative to the viewport, which means it always stays in the same place even if the page is scrolled.\n\n### • Sticky\nPositions based on the user's scroll position. Toggles between relative and fixed.",
        "content_hi": "### पोजीशन\n\n### • स्थैतिक (Static)\nडिफ़ॉल्ट स्थिति। तत्व दस्तावेज़ प्रवाह में दिखाई देने के क्रम में प्रस्तुत होते हैं।\n\n### • सापेक्ष (Relative)\nइसकी सामान्य स्थिति के सापेक्ष स्थित।\n\n### • पूर्ण (Absolute)\nनिकटतम तैनात पूर्वज के सापेक्ष स्थित।\n\n### • निश्चित (Fixed)\nव्यूपोर्ट के सापेक्ष स्थित, जिसका अर्थ है कि पेज स्क्रॉल होने पर भी यह हमेशा एक ही स्थान पर रहता है।\n\n### • चिपचिपा (Sticky)\nउपयोगकर्ता की स्क्रॉल स्थिति के आधार पर स्थितियां। सापेक्ष और निश्चित के बीच टॉगल करता है।"
      },
      {
        "id": "t8-2",
        "title_en": "ii. Z-Index",
        "title_hi": "ii. जेड-इंडेक्स",
        "content_en": "### Z-Index\nThe `z-index` property specifies the stack order of an element (which element should be placed in front of, or behind, the others). An element can have a positive or negative stack order.",
        "content_hi": "### जेड-इंडेक्स (Z-Index)\n`z-index` संपत्ति किसी तत्व के स्टैक क्रम को निर्दिष्ट करती है (कौन सा तत्व दूसरों के सामने या पीछे रखा जाना चाहिए)।"
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "question_en": "Which position value makes an element stay in the same place when scrolling?",
        "question_hi": "स्क्रॉल करते समय कौन सा स्थिति मान किसी तत्व को एक ही स्थान पर रखता है?",
        "options_en": [
          "absolute",
          "fixed",
          "relative"
        ],
        "options_hi": [
          "absolute",
          "fixed",
          "relative"
        ],
        "correctAnswerIndex": 1
      }
    ]
  },
  {
    "id": "ch9",
    "title_en": "Chapter 9: Flexbox",
    "title_hi": "अध्याय 9: फ्लेक्सबॉक्स",
    "topics": [
      {
        "id": "t9-1",
        "title_en": "i. What is flexbox?",
        "title_hi": "i. फ्लेक्सबॉक्स क्या है?",
        "content_en": "### What is Flexbox?\nThe Flexible Box Layout Module makes it easier to design flexible responsive layout structure without using float or positioning.\n\n### • Flex Container & Items\nThe parent element with `display: flex` is the flex container, its direct children are flex items.\n\n### • Flex Direction\nDefines in which direction the container wants to stack the flex items (`row`, `column`).\n\n### • Flex Wrap\nSpecifies whether the flex items should wrap or not.\n\n### • Flex Grow & Shrink\nDefines how much a flex item will grow or shrink relative to the rest of the flex items.",
        "content_hi": "### फ्लेक्सबॉक्स क्या है?\nफ्लेक्सिबल बॉक्स लेआउट मॉड्यूल फ्लोट या पोजिशनिंग का उपयोग किए बिना लचीले उत्तरदायी लेआउट संरचना को डिजाइन करना आसान बनाता है।\n\n### • फ्लेक्स कंटेनर और आइटम\n`display: flex` के साथ मूल तत्व फ्लेक्स कंटेनर है, इसके प्रत्यक्ष बच्चे फ्लेक्स आइटम हैं।\n\n### • फ्लेक्स दिशा\nपरिभाषित करता है कि कंटेनर फ्लेक्स आइटम को किस दिशा में स्टैक करना चाहता है।\n\n### • फ्लेक्स रैप\nनिर्दिष्ट करता है कि क्या फ्लेक्स आइटम को लपेटना चाहिए या नहीं।\n\n### • फ्लेक्स ग्रो और श्रिंक\nपरिभाषित करता है कि फ्लेक्स आइटम बाकी फ्लेक्स आइटम के सापेक्ष कितना बढ़ेगा या सिकुड़ेगा।"
      },
      {
        "id": "t9-2",
        "title_en": "ii. Flex alignment",
        "title_hi": "ii. फ्लेक्स संरेखण",
        "content_en": "### Flex Alignment\n\n### • Justify Content\nAligns flex items along the main axis (`center`, `space-between`, `flex-start`).\n\n### • Align Items\nAligns flex items along the cross axis (`center`, `stretch`, `flex-start`).\n\n### • Align Content\nModifies the behavior of `flex-wrap` property. Aligns flex lines.\n\n### • Gap\nSpecifies the size of the gap between flex items.",
        "content_hi": "### फ्लेक्स संरेखण\n\n### • जस्टिफाई कंटेंट (Justify Content)\nफ्लेक्स आइटम को मुख्य अक्ष के साथ संरेखित करता है।\n\n### • संरेखित आइटम (Align Items)\nफ्लेक्स आइटम को क्रॉस अक्ष के साथ संरेखित करता है।\n\n### • संरेखित सामग्री (Align Content)\n`flex-wrap` संपत्ति के व्यवहार को संशोधित करता है। फ्लेक्स लाइनों को संरेखित करता है।\n\n### • गैप (Gap)\nफ्लेक्स आइटम के बीच के अंतर का आकार निर्दिष्ट करता है।"
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "question_en": "Which property centers elements horizontally in a flex container (row direction)?",
        "question_hi": "कौन सी प्रॉपर्टी फ्लेक्स कंटेनर (पंक्ति दिशा) में तत्वों को क्षैतिज रूप से केंद्रित करती है?",
        "options_en": [
          "align-items: center;",
          "justify-content: center;",
          "text-align: center;"
        ],
        "options_hi": [
          "align-items: center;",
          "justify-content: center;",
          "text-align: center;"
        ],
        "correctAnswerIndex": 1
      }
    ]
  },
  {
    "id": "ch10",
    "title_en": "Chapter 10: CSS Grid Layout",
    "title_hi": "अध्याय 10: CSS ग्रिड लेआउट",
    "topics": [
      {
        "id": "t10-1",
        "title_en": "i. CSS Grid",
        "title_hi": "i. CSS ग्रिड",
        "content_en": "### CSS Grid\nThe CSS Grid Layout Module offers a grid-based layout system, with rows and columns.\n\n### • Grid Container & Items\nThe parent element with `display: grid` is the grid container, its direct children are grid items.\n\n### • Grid Columns & Rows\n`grid-template-columns` and `grid-template-rows` specify the size of the columns and rows.\n\n### • Grid Areas\nYou can name grid items and position them using `grid-template-areas`.",
        "content_hi": "### CSS ग्रिड\nCSS ग्रिड लेआउट मॉड्यूल पंक्तियों और स्तंभों के साथ एक ग्रिड-आधारित लेआउट सिस्टम प्रदान करता है।\n\n### • ग्रिड कंटेनर और आइटम\n`display: grid` के साथ मूल तत्व ग्रिड कंटेनर है, इसके प्रत्यक्ष बच्चे ग्रिड आइटम हैं।\n\n### • ग्रिड कॉलम और पंक्तियाँ\nकॉलम और पंक्तियों का आकार निर्दिष्ट करें।\n\n### • ग्रिड क्षेत्र\nआप ग्रिड आइटम को नाम दे सकते हैं और उन्हें `grid-template-areas` का उपयोग करके स्थितिबद्ध कर सकते हैं।"
      },
      {
        "id": "t10-2",
        "title_en": "ii. Layout",
        "title_hi": "ii. लेआउट",
        "content_en": "### Layout\n\n### • Gap\nSpecifies the gap between grid columns and rows.\n\n### • Auto Fit & Auto Fill\nUseful for responsive grids. Automatically fits as many columns as possible based on a minimum size.\n\n### • Responsive Grid\nUsing `repeat()`, `minmax()`, and `auto-fit` creates flexible and responsive layouts.",
        "content_hi": "### लेआउट\n\n### • गैप (Gap)\nग्रिड कॉलम और पंक्तियों के बीच के अंतर को निर्दिष्ट करता है।\n\n### • ऑटो फिट और ऑटो फिल\nउत्तरदायी ग्रिड के लिए उपयोगी। न्यूनतम आकार के आधार पर स्वचालित रूप से यथासंभव कई कॉलम फिट बैठता है।\n\n### • उत्तरदायी ग्रिड\n`repeat()`, `minmax()`, और `auto-fit` का उपयोग करके लचीले और उत्तरदायी लेआउट बनाता है।"
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "question_en": "Which property defines the number and width of columns in a grid?",
        "question_hi": "कौन सी प्रॉपर्टी ग्रिड में कॉलम की संख्या और चौड़ाई को परिभाषित करती है?",
        "options_en": [
          "grid-columns",
          "grid-template-columns",
          "grid-auto-columns"
        ],
        "options_hi": [
          "grid-columns",
          "grid-template-columns",
          "grid-auto-columns"
        ],
        "correctAnswerIndex": 1
      }
    ]
  },
  {
    "id": "ch11",
    "title_en": "Chapter 11: Lists & Tables",
    "title_hi": "अध्याय 11: सूचियाँ और तालिकाएँ",
    "topics": [
      {
        "id": "t11-1",
        "title_en": "i. CSS List",
        "title_hi": "i. CSS सूची",
        "content_en": "### CSS List\n\n### • List Style\nProperties like `list-style-type` (circle, square, disc), `list-style-image`, and `list-style-position`.",
        "content_hi": "### CSS सूची\n\n### • सूची शैली\nगुण जैसे `list-style-type` (सर्कल, स्क्वायर, डिस्क), `list-style-image`, और `list-style-position`।"
      },
      {
        "id": "t11-2",
        "title_en": "ii. Table",
        "title_hi": "ii. तालिका",
        "content_en": "### Table\n\n### • Table Styling\nStyling tables involves adding borders, padding, and text alignment.\n\n### • Border Collapse\nThe `border-collapse` property sets whether the table borders should be collapsed into a single border.\n\n### • Zebra Tables\nUse `nth-child(even)` or `nth-child(odd)` to create striped tables.\n\n### • Hover Effects\nUse `:hover` selector on `tr` to highlight table rows on mouse over.",
        "content_hi": "### तालिका\n\n### • तालिका स्टाइलिंग\nतालिकाओं को स्टाइल करने में सीमाएं, पैडिंग और पाठ संरेखण शामिल हैं।\n\n### • सीमा पतन (Border Collapse)\nसेट करता है कि क्या तालिका की सीमाओं को एक ही सीमा में ढहना चाहिए।\n\n### • ज़ेबरा टेबल्स\nधारीदार टेबल बनाने के लिए `nth-child(even)` का उपयोग करें।\n\n### • होवर प्रभाव\nमाउस के ऊपर टेबल पंक्तियों को हाइलाइट करने के लिए `tr` पर `:hover` का उपयोग करें।"
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "question_en": "Which property is used to collapse table borders into a single border?",
        "question_hi": "टेबल बॉर्डर को सिंगल बॉर्डर में ढहाने के लिए किस प्रॉपर्टी का उपयोग किया जाता है?",
        "options_en": [
          "border-collapse",
          "border-spacing",
          "table-layout"
        ],
        "options_hi": [
          "border-collapse",
          "border-spacing",
          "table-layout"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "ch12",
    "title_en": "Chapter 12: Forms Styling",
    "title_hi": "अध्याय 12: फॉर्म स्टाइलिंग",
    "topics": [
      {
        "id": "t12-1",
        "title_en": "Form Elements",
        "title_hi": "फॉर्म तत्व",
        "content_en": "### Forms Styling\n\n### i. Input Styling\nUse width, padding, border, and border-radius to style text inputs.\n\n### ii. Textarea Styling\nSimilar to inputs, but you can also use the `resize` property to control if it can be resized by the user.\n\n### iii. Select Styling\nStyling dropdowns requires padding, borders, and sometimes removing default appearance with `appearance: none;`.\n\n### iv. Checkbox & v. Radio Button Styling\nOften styled by hiding the default input and using `::before`/`::after` pseudo-elements on a custom label.\n\n### vi. Button Styling\nButtons are styled with background colors, padding, borders, and hover effects.\n\n### vii. Focus States\nUse the `:focus` pseudo-class to style form elements when they are active or clicked. Good for accessibility.",
        "content_hi": "### फॉर्म स्टाइलिंग\n\n### i. इनपुट स्टाइलिंग\nटेक्स्ट इनपुट को स्टाइल करने के लिए चौड़ाई, पैडिंग, बॉर्डर और बॉर्डर-त्रिज्या का उपयोग करें।\n\n### ii. Textarea स्टाइलिंग\nइनपुट के समान, लेकिन आप `resize` संपत्ति का उपयोग कर सकते हैं।\n\n### iii. सेलेक्ट स्टाइलिंग\nड्रॉपडाउन को स्टाइल करने के लिए पैडिंग, बॉर्डर की आवश्यकता होती है।\n\n### iv. चेकबॉक्स और v. रेडियो बटन स्टाइलिंग\nअक्सर डिफ़ॉल्ट इनपुट को छिपाकर स्टाइल किया जाता है।\n\n### vi. बटन स्टाइलिंग\nबटन पृष्ठभूमि रंग, पैडिंग, सीमा और होवर प्रभाव के साथ स्टाइल किए गए हैं।\n\n### vii. फोकस स्टेट्स\nजब वे सक्रिय होते हैं तो फॉर्म तत्वों को स्टाइल करने के लिए `:focus` छद्म-वर्ग का उपयोग करें।"
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "question_en": "Which pseudo-class is used to style an input field when it gets focus?",
        "question_hi": "फोकस प्राप्त करने पर इनपुट फ़ील्ड को स्टाइल करने के लिए किस छद्म-वर्ग का उपयोग किया जाता है?",
        "options_en": [
          ":active",
          ":hover",
          ":focus"
        ],
        "options_hi": [
          ":active",
          ":hover",
          ":focus"
        ],
        "correctAnswerIndex": 2
      }
    ]
  },
  {
    "id": "ch13",
    "title_en": "Chapter 13: CSS Transforms",
    "title_hi": "अध्याय 13: CSS ट्रांसफॉर्म",
    "topics": [
      {
        "id": "t13-1",
        "title_en": "Transforms",
        "title_hi": "ट्रांसफॉर्म",
        "content_en": "### CSS Transforms\nAllows you to translate, rotate, scale, and skew elements.\n\n### i. Translate\nMoves an element from its current position (`translate(x, y)`).\n\n### • Rotate\nRotates an element clockwise or counter-clockwise (`rotate(45deg)`).\n\n### • Scale\nIncreases or decreases the size of an element (`scale(1.5)`).\n\n### ii. Skew\nSkews an element along the X and Y-axis (`skew(20deg, 10deg)`).\n\n### iii. Transform Origin\nChanges the position of the transformed element (default is center).\n\n### • Multiple Transforms\nYou can apply multiple transforms by separating them with a space: `transform: rotate(45deg) scale(1.5);`.",
        "content_hi": "### CSS ट्रांसफॉर्म\nआपको तत्वों का अनुवाद करने, घुमाने, स्केल करने और तिरछा करने की अनुमति देता है।\n\n### i. अनुवाद (Translate)\nकिसी तत्व को उसकी वर्तमान स्थिति से ले जाता है।\n\n### • घुमाएँ (Rotate)\nकिसी तत्व को घुमाता है (`rotate(45deg)`)।\n\n### • पैमाना (Scale)\nकिसी तत्व का आकार बढ़ाता या घटाता है (`scale(1.5)`)।\n\n### ii. तिरछा (Skew)\nकिसी तत्व को तिरछा करता है।\n\n### iii. उत्पत्ति बदलें (Transform Origin)\nरूपांतरित तत्व की स्थिति बदलता है।\n\n### • एकाधिक ट्रांसफ़ॉर्म\nआप स्थान के साथ अलग करके कई ट्रांसफ़ॉर्म लागू कर सकते हैं।"
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "question_en": "How do you rotate an element 90 degrees?",
        "question_hi": "आप किसी तत्व को 90 डिग्री कैसे घुमाते हैं?",
        "options_en": [
          "rotate(90)",
          "transform: rotate(90deg)",
          "rotate: 90deg"
        ],
        "options_hi": [
          "rotate(90)",
          "transform: rotate(90deg)",
          "rotate: 90deg"
        ],
        "correctAnswerIndex": 1
      }
    ]
  },
  {
    "id": "ch14",
    "title_en": "Chapter 14: CSS Transitions",
    "title_hi": "अध्याय 14: CSS संक्रमण",
    "topics": [
      {
        "id": "t14-1",
        "title_en": "Transitions",
        "title_hi": "संक्रमण",
        "content_en": "### CSS Transitions\nAllows you to change property values smoothly over a given duration.\n\n### i. Transition Property\nSpecifies the CSS property that the transition effect is for.\n\n### • Duration\nSpecifies how many seconds or milliseconds a transition effect takes to complete.\n\n### • Timing Functions\nSpecifies the speed curve of the transition (`ease`, `linear`, `ease-in`, `ease-out`).\n\n### • Delay\nSpecifies a delay (in seconds) for the transition effect.\n\n### ii. Hover Animations\nTransitions are often used with `:hover` to create smooth interactions.",
        "content_hi": "### CSS संक्रमण (Transitions)\nआपको एक निश्चित अवधि में संपत्ति के मूल्यों को सुचारू रूप से बदलने की अनुमति देता है।\n\n### i. संक्रमण गुण\nनिर्दिष्ट करता है कि संक्रमण प्रभाव किस CSS संपत्ति के लिए है।\n\n### • अवधि (Duration)\nनिर्दिष्ट करता है कि संक्रमण प्रभाव को पूरा होने में कितने सेकंड लगते हैं।\n\n### • समय कार्य (Timing Functions)\nसंक्रमण की गति वक्र निर्दिष्ट करता है।\n\n### • देरी (Delay)\nसंक्रमण प्रभाव के लिए देरी निर्दिष्ट करता है।\n\n### ii. होवर एनिमेशन\nसंक्रमण का उपयोग अक्सर चिकनी इंटरैक्शन बनाने के लिए `:hover` के साथ किया जाता है।"
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "question_en": "Which property sets how long a transition should take?",
        "question_hi": "कौन सी प्रॉपर्टी सेट करती है कि किसी ट्रांज़िशन में कितना समय लगना चाहिए?",
        "options_en": [
          "transition-length",
          "transition-duration",
          "transition-time"
        ],
        "options_hi": [
          "transition-length",
          "transition-duration",
          "transition-time"
        ],
        "correctAnswerIndex": 1
      }
    ]
  },
  {
    "id": "ch15",
    "title_en": "Chapter 15: CSS Animations",
    "title_hi": "अध्याय 15: CSS एनिमेशन",
    "topics": [
      {
        "id": "t15-1",
        "title_en": "Animations",
        "title_hi": "एनिमेशन",
        "content_en": "### CSS Animations\nAnimations let an element gradually change from one style to another.\n\n### i. Animation Properties\n\n### • Animation Name\nSpecifies the name of the `@keyframes` animation.\n\n### • Duration\nSpecifies how long an animation should take to complete.\n\n### • Iteration Count\nSpecifies the number of times an animation should be played (`infinite` or a number).\n\n### • Direction\nSpecifies whether an animation should be played forwards, backwards, or in alternate cycles.\n\n### • Fill Mode\nSpecifies a style for the element when the animation is not playing (e.g., `forwards` keeps the final state).\n\n### • Timing Function\nSpecifies the speed curve of the animation.\n\n### ii. @keyframes\nSpecifies the animation code. The animation is created by gradually changing from one set of CSS styles to another (`from` to `to`, or `0%` to `100%`).",
        "content_hi": "### CSS एनिमेशन\nएनिमेशन किसी तत्व को धीरे-धीरे एक शैली से दूसरी शैली में बदलने देते हैं।\n\n### i. एनिमेशन गुण\n\n### • एनिमेशन नाम\n`@keyframes` एनीमेशन का नाम निर्दिष्ट करता है।\n\n### • अवधि\nनिर्दिष्ट करता है कि एनीमेशन को पूरा होने में कितना समय लगना चाहिए।\n\n### • पुनरावृत्ति गणना\nएनीमेशन कितनी बार खेला जाना चाहिए निर्दिष्ट करता है।\n\n### • दिशा\nनिर्दिष्ट करता है कि एक एनीमेशन आगे, पीछे या वैकल्पिक चक्रों में खेला जाना चाहिए।\n\n### • भरें मोड (Fill Mode)\nजब एनीमेशन नहीं चल रहा हो तो तत्व के लिए एक शैली निर्दिष्ट करता है।\n\n### • समय कार्य\nएनीमेशन की गति वक्र निर्दिष्ट करता है।\n\n### ii. @keyframes\nएनीमेशन कोड निर्दिष्ट करता है।"
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "question_en": "Which rule is used to define an animation?",
        "question_hi": "एनीमेशन को परिभाषित करने के लिए किस नियम का उपयोग किया जाता है?",
        "options_en": [
          "@animate",
          "@keyframes",
          "@transition"
        ],
        "options_hi": [
          "@animate",
          "@keyframes",
          "@transition"
        ],
        "correctAnswerIndex": 1
      }
    ]
  },
  {
    "id": "ch16",
    "title_en": "Chapter 16: Shadows & Effects",
    "title_hi": "अध्याय 16: छाया और प्रभाव",
    "topics": [
      {
        "id": "t16-1",
        "title_en": "Shadows & Filters",
        "title_hi": "छाया और फ़िल्टर",
        "content_en": "### i. Shadow\n\n### • Box Shadow\nAttaches one or more shadows to an element (`box-shadow: 10px 10px 5px grey;`).\n\n### • Multiple Shadows\nSeparate multiple shadows with commas.\n\n### • Drop Shadow\nSimilar to box-shadow, but applied as a filter (`filter: drop-shadow(...)`), often used for transparent PNGs.\n\n### • Text Shadow\nApplies shadow to text.\n\n### ii. Filter Effects\n\n### • Blur\nApplies a Gaussian blur to the element (`filter: blur(5px);`).\n\n### • Brightness\nAdjusts the brightness of an element.\n\n### • Contrast\nAdjusts the contrast of an element.\n\n### iii. Drop Shadow\n\n### • inset shadow\nAdd `inset` keyword to box-shadow to make the shadow inside the box.",
        "content_hi": "### i. छाया (Shadow)\n\n### • बॉक्स छाया (Box Shadow)\nकिसी तत्व में एक या अधिक छाया जोड़ता है।\n\n### • एकाधिक छाया (Multiple Shadows)\nएकाधिक छायाओं को अल्पविराम से अलग करें।\n\n### • ड्रॉप शैडो\nबॉक्स-शैडो के समान, लेकिन फ़िल्टर के रूप में लागू किया गया।\n\n### • पाठ छाया\nटेक्स्ट पर शैडो लागू करता है।\n\n### ii. फ़िल्टर प्रभाव\n\n### • धुंधला (Blur)\nतत्व पर धुंधलापन लागू करता है।\n\n### • चमक\nतत्व की चमक को समायोजित करता है।\n\n### • कंट्रास्ट\nतत्व के कंट्रास्ट को समायोजित करता है।\n\n### iii. ड्रॉप शैडो\n\n### • इनसेट शैडो\nछाया को बॉक्स के अंदर बनाने के लिए बॉक्स-शैडो में `inset` कीवर्ड जोड़ें।"
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "question_en": "Which keyword makes a box-shadow appear inside the element?",
        "question_hi": "कौन सा कीवर्ड बॉक्स-शैडो को तत्व के अंदर दिखाता है?",
        "options_en": [
          "internal",
          "inset",
          "inside"
        ],
        "options_hi": [
          "internal",
          "inset",
          "inside"
        ],
        "correctAnswerIndex": 1
      }
    ]
  },
  {
    "id": "ch17",
    "title_en": "Chapter 17: Responsive Design",
    "title_hi": "अध्याय 17: उत्तरदायी डिजाइन",
    "topics": [
      {
        "id": "t17-1",
        "title_en": "Responsive Design",
        "title_hi": "उत्तरदायी डिजाइन",
        "content_en": "### Responsive Web Design\nResponsive web design makes your web page look good on all devices.\n\n### i. Media Queries\nUses the `@media` rule to include a block of CSS properties only if a certain condition is true.\n\n### • Breakpoints\nThe points at which the website's content and design will adapt to provide the best possible user experience (e.g., `min-width: 768px`).\n\n### ii. Mobile First Design\nDesigning for mobile devices first, and then writing media queries to handle larger screens.\n\n### • Responsive Images\nImages that scale nicely to fit any browser size (e.g., `max-width: 100%; height: auto;`).\n\n### • Responsive Layouts\nUsing Flexbox or CSS Grid in combination with media queries to change column structures.",
        "content_hi": "### उत्तरदायी वेब डिज़ाइन\nउत्तरदायी वेब डिज़ाइन आपके वेब पेज को सभी उपकरणों पर अच्छा बनाता है।\n\n### i. मीडिया प्रश्न\nकुछ निश्चित स्थिति सत्य होने पर ही CSS गुणों के ब्लॉक को शामिल करने के लिए `@media` नियम का उपयोग करता है।\n\n### • ब्रेकप्वाइंट\nवे बिंदु जिन पर वेबसाइट की सामग्री और डिज़ाइन अनुकूलित होंगे।\n\n### ii. मोबाइल फर्स्ट डिज़ाइन\nपहले मोबाइल उपकरणों के लिए डिज़ाइन करना, और फिर बड़ी स्क्रीन को संभालने के लिए मीडिया क्वेरी लिखना।\n\n### • उत्तरदायी छवियां\nछवियां जो किसी भी ब्राउज़र आकार में फिट होने के लिए अच्छी तरह से स्केल होती हैं।\n\n### • उत्तरदायी लेआउट\nकॉलम संरचनाओं को बदलने के लिए मीडिया क्वेरी के संयोजन में फ्लेक्सबॉक्स या सीएसएस ग्रिड का उपयोग करना।"
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "question_en": "What rule is used for media queries?",
        "question_hi": "मीडिया क्वेरी के लिए किस नियम का उपयोग किया जाता है?",
        "options_en": [
          "@responsive",
          "@media",
          "@screen"
        ],
        "options_hi": [
          "@responsive",
          "@media",
          "@screen"
        ],
        "correctAnswerIndex": 1
      }
    ]
  },
  {
    "id": "ch18",
    "title_en": "Chapter 18: Modern CSS Features",
    "title_hi": "अध्याय 18: आधुनिक CSS विशेषताएं",
    "topics": [
      {
        "id": "t18-1",
        "title_en": "Modern CSS",
        "title_hi": "आधुनिक CSS",
        "content_en": "### Modern CSS Features\n\n### i. CSS Variables\nCustom properties defined by CSS authors (`--main-color: red;`) and accessed using `var(--main-color)`.\n\n### ii. Calc()\nThe `calc()` function performs a calculation to be used as the property value (e.g., `width: calc(100% - 50px);`).\n\n### iii. Clamp()\nClamps a middle value within a range of values between a defined minimum and maximum (`clamp(MIN, VAL, MAX)`).\n\n### iv. Aspect Ratio\nSets a preferred aspect ratio for the box, which will be used in the calculation of auto sizes.\n\n### v. Object Fit\nSpecifies how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container (`cover`, `contain`).\n\n### vi. Object Position\nSpecifies the alignment of the replaced element's contents within its box.\n\n### vii. Scroll Behavior\nSpecifies whether to smoothly animate the scroll position instead of a straight jump (`scroll-behavior: smooth;`).",
        "content_hi": "### आधुनिक CSS विशेषताएं\n\n### i. CSS चर (Variables)\nकस्टम गुण `--main-color: red;` और `var(--main-color)` का उपयोग करके पहुँचा जा सकता है।\n\n### ii. Calc()\n`calc()` फ़ंक्शन एक गणना करता है जिसे संपत्ति मूल्य के रूप में उपयोग किया जाता है।\n\n### iii. Clamp()\nन्यूनतम और अधिकतम के बीच मानों की सीमा के भीतर एक मध्य मान को क्लैंप करता है।\n\n### iv. पहलू अनुपात (Aspect Ratio)\nबॉक्स के लिए एक पसंदीदा पहलू अनुपात सेट करता है।\n\n### v. ऑब्जेक्ट फिट (Object Fit)\nनिर्दिष्ट करता है कि किसी प्रतिस्थापित तत्व (जैसे `<img>`) की सामग्री को उसके कंटेनर में फिट होने के लिए कैसे आकार दिया जाना चाहिए।\n\n### vi. वस्तु की स्थिति (Object Position)\nप्रतिस्थापित तत्व की सामग्री के संरेखण को निर्दिष्ट करता है।\n\n### vii. स्क्रॉल व्यवहार (Scroll Behavior)\nनिर्दिष्ट करता है कि क्या सीधे कूदने के बजाय स्क्रॉल स्थिति को सुचारू रूप से एनिमेट करना है।"
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "question_en": "How do you define a CSS variable?",
        "question_hi": "आप CSS चर कैसे परिभाषित करते हैं?",
        "options_en": [
          "$var-name",
          "--var-name",
          "var-name"
        ],
        "options_hi": [
          "$var-name",
          "--var-name",
          "var-name"
        ],
        "correctAnswerIndex": 1
      }
    ]
  },
  {
    "id": "ch19",
    "title_en": "Chapter 19: Advanced Selectors & Tricks",
    "title_hi": "अध्याय 19: उन्नत चयनकर्ता और ट्रिक्स",
    "topics": [
      {
        "id": "t19-1",
        "title_en": "Advanced Selectors",
        "title_hi": "उन्नत चयनकर्ता",
        "content_en": "### Advanced Selectors\n\n### i. :is()\nTakes a selector list as its argument, and selects any element that can be selected by one of the selectors in that list.\n\n### ii. :where()\nSimilar to `:is()`, but always has 0 specificity.\n\n### iii. :has()\nThe relational pseudo-class. Allows styling a parent element based on its descendants.\n\n### iv. nth-child()\nMatches every element that is the nth child of its parent (e.g., `nth-child(even)`).\n\n### v. nth-of-type()\nMatches every element that is the nth child, of a particular type, of its parent.\n\n### vi. CSS Counters\nVariables maintained by CSS whose values can be incremented by CSS rules to track how many times they're used (e.g., numbering headings).",
        "content_hi": "### उन्नत चयनकर्ता\n\n### i. :is()\nअपने तर्क के रूप में एक चयनकर्ता सूची लेता है।\n\n### ii. :where()\n`:is()` के समान, लेकिन हमेशा 0 विशिष्टता होती है।\n\n### iii. :has()\nसंबंधपरक छद्म-वर्ग। इसके वंशजों के आधार पर मूल तत्व को स्टाइल करने की अनुमति देता है।\n\n### iv. nth-child()\nप्रत्येक तत्व से मेल खाता है जो अपने माता-पिता का nth बच्चा है।\n\n### v. nth-of-type()\nप्रत्येक तत्व से मेल खाता है जो एक विशेष प्रकार का nth बच्चा है।\n\n### vi. CSS काउंटर\nCSS द्वारा बनाए गए चर जिनका मान CSS नियमों द्वारा बढ़ाया जा सकता है।"
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "question_en": "Which pseudo-class allows styling a parent element based on its children?",
        "question_hi": "कौन सा छद्म-वर्ग अपने बच्चों के आधार पर माता-पिता के तत्व को स्टाइल करने की अनुमति देता है?",
        "options_en": [
          ":has()",
          ":is()",
          ":where()"
        ],
        "options_hi": [
          ":has()",
          ":is()",
          ":where()"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "ch20",
    "title_en": "Chapter 20: CSS Best Practices",
    "title_hi": "अध्याय 20: CSS सर्वोत्तम अभ्यास",
    "topics": [
      {
        "id": "t20-1",
        "title_en": "Best Practices",
        "title_hi": "सर्वोत्तम अभ्यास",
        "content_en": "### CSS Best Practices\n\n### i. Clean CSS\nKeep your CSS organized, well-commented, and remove unused styles.\n\n### ii. Reusable Classes\nCreate utility classes that can be used across multiple elements instead of repeating styles.\n\n### iii. Naming Conventions\nUse naming conventions like BEM (Block Element Modifier) to make your CSS maintainable and predictable.\n\n### iv. Performance Tips\nMinimize CSS files, avoid overly complex selectors, and use hardware-accelerated animations (opacity and transform).\n\n### v. CSS Architecture\nStructure your CSS into different folders/files (base, layout, components, utilities) for large projects.",
        "content_hi": "### CSS सर्वोत्तम अभ्यास\n\n### i. स्वच्छ CSS\nअपने CSS को व्यवस्थित, अच्छी तरह से टिप्पणी करें, और अप्रयुक्त शैलियों को हटा दें.\n\n### ii. पुन: प्रयोज्य कक्षाएं\nउपयोगिता कक्षाएं बनाएं जिनका उपयोग कई तत्वों में किया जा सकता है।\n\n### iii. नामकरण परंपराएं\nअपने CSS को बनाए रखने योग्य बनाने के लिए BEM (ब्लॉक एलिमेंट मॉडिफायर) जैसी नामकरण परंपराओं का उपयोग करें।\n\n### iv. प्रदर्शन युक्तियाँ\nCSS फ़ाइलों को छोटा करें, अत्यधिक जटिल चयनकर्ताओं से बचें, और हार्डवेयर-त्वरित एनिमेशन का उपयोग करें।\n\n### v. CSS वास्तुकला\nबड़ी परियोजनाओं के लिए अपने CSS को विभिन्न फ़ोल्डरों/फ़ाइलों में व्यवस्थित करें।"
      }
    ],
    "quiz": [
      {
        "id": "q1",
        "question_en": "What does BEM stand for?",
        "question_hi": "BEM का क्या अर्थ है?",
        "options_en": [
          "Block Element Modifier",
          "Base Element Method",
          "Box Element Model"
        ],
        "options_hi": [
          "Block Element Modifier",
          "Base Element Method",
          "Box Element Model"
        ],
        "correctAnswerIndex": 0
      }
    ]
  }
];

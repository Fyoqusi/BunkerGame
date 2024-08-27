// Дані для генерації
const catastrophes = [
  "Глобальне потепління. Розпалений сонцем ландшафт деформується, ріки висихають, запаси прісної води на нулі. Урагани руйнують міста, а екстремальна спека та зливи призводять до катастрофічних повеней. Люди відчайдушно шукають пристань у світі, де немає місця врятування. Екстремальні температури і погодні катаклізми призводять до загибелі людей та втрат в родючості ґрунтів. Зменшення доступу до води та продуктів харчування призводить до конфліктів і боротьби за ресурси. Високий рівень моря затоплює прибережні території, призводячи до масової міграції.",
  "Епідемія. Безлад і паніка у великих містах. Медичні заклади переповнені, а влада намагається зупинити поширення смертоносного вірусу. Після виходу з бункера вам доведеться уникати контактів із зараженими, підтримувати імунітет, знайти джерело епідемії та розробити вакцину проти вірусу.",
  "Зомбі-апокаліпсис. Зомбі-вірус вибрався із пробірки та почав заражати здорових людей і перетворювати їх на ходячих мерців. Масовий хаос огорнув всю планету. Всі досягнення цивілізації звели нанівець. Після виходу із бункера вам буде необхідно постійно відбиватися від атак зомбі та знайти спосіб захиститися від вірусу.",
  "Повстання роботів. Технологічний прогрес дійшов до людства досяг свого апогею. Створивши роботів, людство створило смертельну небезпеку. Армії роботів ходять містами. Вони перевершують людей як у фізичному розвитку, так і розумовому. Останні люди на планеті почали будувати укриття та розробляти план з повернення планети людству.",
  "Портал з потойбіччя. Невідомі портали почали з'являтися по всій планеті. Фантастичні жахливі створіння почали виходити з порталів та нищити людство. Після виходу з бункера вам необхідно постійно відбиватися від монстрів з порталів та, врешті-решт, знайти спосіб закрити ці портали",
  "Вченим вдалося воскресити динозаврів. Але ситуація вийшла з-під контролю. Доісторичні монстри вирвались на волю і швидко наплодились. Їх зграї змітають всю їжу, яку знаходять: рослини, тварин, людей. Зруйновані інфраструктури міст. Переживши апогей загрози в бункері, ви вийдете на спорожнілу поверхню землі. Є надія, що з нестачею їжі чисельність динозаврів зменшиться. Вам доведеться забезпечити запаси харчів і самим не стати їжею для нових господарів світу.",
  "Гігантський метеорит наближається до землі. Зіткнення призведе до глобальних руйнувань, зміни клімату, загибелі людей, флори та фауни. Після виходу з бункера вам доведеться знайти місце, придатне для проживання, та забезпечитись харчуванням у безжалісних умовах вічної зими.",
  "Гравітаційна аномалія призводить до розширення обсягу води та затоплення поверхні всієї суші. Після виходу з бункера, коли вода частково спаде, вам доведеться побудувати плавальну станцію, жити та вишукувати їжу на воді поки не знайдете ділянки суші, які придатні для життя.",
  "На планеті триває аномальний еволюційний оберт. Уся флора стає смертоносною для людей. Невидиме випромінювання від рослин і дерев зводить людей з розуму і примушує вчиняти самогубства. Бункер дозволить вам пережити найнебезпечніший етап. Коли ви знову вийдете на поверхню, вам потрібно знайти та знищити епіцентр цієї аномалії та зберегти свідомість.",
  "Починається масштабний ядерний конфлікт. Радіоактивний пил огорне всю планету, закривши сонячне світло, і на землі настане довга ядерна зима. Практично вся планета буде уражена радіацією, людей, що вижили, майже не залишиться. Після виходу з бункера вам доведеться обладнати постійний прихисток, забезпечити себе харчами та почати відновлювати життя на землі.",
  "Те, що люди спершу прийняли за наближення комети, було нашестям прибульців. Вони паралізують всіх людей, щоб влаштувати правосуддя і прийняти рішення про збереження або знищення нашої цивілізації. Сховайтесь у бункері, щоб уникнути випромінювання, що паралізує. Після виходу з бункера вам потрібно вийти на контакт із прибульцями та переконати їх у цінності нашої культури для всесвіту.",
  "Активізуються супервулкани, спровокувавши надзвичайно потужні виверження. Ландшафт і клімат різко змінюються. Більшість населення відразу загинула від коливань температур чи землетрусів і повеней. Перечекайте найактивнішу фазу в надзвичайно укріпленому бункері. Вас чекає глобальна посуха, зруйновані міста і постійна сейсмічність. Ви зможете вижити, тільки розробивши надчутливу інтелектуальну систему передбачення землетрусів і роботизовану інфраструктуру.",
  "У результаті масштабного застосування хімічної зброї серйозно змінюється екологічний баланс. Порушений мікробіологічний склад ґрунтів і води, отруєні рослини, загинуть майже всі тварини і люди. Після виходу з бункера буде непросто забезпечити себе харчами. Вам знадобляться вчені та інженери для облаштування прихистків та ферм.",
];
const foods = [
  "Їжі та води вистачить на весь час перебування в бункері.",
  "Їжі та води вистачить на половину часу перебування в бункері.",
  "У бункері немає запасів їжі та води.",
];

const drugs = [
  "У бункері є склад медикаментів.",
  "У бункері є препарати для тяжких захворювань.",
  "У бункері є маленька аптечка.",
  "У бункері немає медикаментів.",
];

const conditions = [
  "У бункері збудовано теплицю.",
  "У бункері немає меблів.",
  "Бункер керується ШІ.",
  "У бункері немає водопостачання.",
  "У бункері немає світла.",
  "У бункері є бібліотека.",
  "У бункері одна спільна кімната.",
  "У бункері є підвал з вином.",
  "У бункері є спортивна зала.",
  "У бункері є матеріали для будівництва.",
  "У бункері є склад зброї.",
  "У бункері завелися миші.",
];

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateCondition() {
  const catastrophe = getRandomElement(catastrophes);
  const bunkertime = Math.floor(Math.random() * 24);
  const bunkersquare = Math.floor(Math.random() * 150);
  const food = getRandomElement(foods);
  const drug = getRandomElement(drugs);

  // Create a new array excluding condition1
  let condition1, condition2, condition3;

  // Loop until all conditions are different
  do {
    condition1 = getRandomElement(conditions);
    condition2 = getRandomElement(conditions);
    condition3 = getRandomElement(conditions);
  } while (
    condition1 === condition2 ||
    condition1 === condition3 ||
    condition2 === condition3
  );

  const resultElement = `
    <h2>Катастрофа:</h2>
    <p>${catastrophe}</p>
    <h2>Бункер:</h2>
    <p>Ваша мета - прожити в бункері ${bunkertime} місяців. Площа укриття - ${bunkersquare} квадратних метрів. ${food} ${drug} ${condition1} ${condition2} ${condition3}</p>
    `;
  document.getElementById("result").innerHTML = resultElement;
}

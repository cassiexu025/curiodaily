const CATALOG = [
  // --- 德語 (de) ---
  {
    id: "de-pod-1", domain: "de", level: 1, media: "podcast", slots: ["morning", "noon", "evening"],
    title: "Coffee Break German",
    creator: "Radio Lingua Network",
    duration: "15 分鐘",
    reason: "適合早間無壓力輸入。主持人在英語輔助下拆解日常德語對話，能迅速建立開口自信。",
    scaffold: [
      "留意德語中 'ch' 在不同母音後的發音變化。",
      "核心表達：Wie geht es Ihnen? (正式) vs. Wie geht's? (口語)。"
    ],
    url: "https://open.spotify.com/search/Coffee%20Break%20German"
  },
  {
    id: "de-vid-1", domain: "de", level: 1, media: "video", slots: ["morning", "noon"],
    title: "DW Nicos Weg (A1 情境微電影)",
    creator: "Deutsche Welle",
    duration: "12 分鐘片段",
    reason: "德國之聲專為初學者打造的真實情境電影，畫面感極強，沒有傳統教材的生硬感。",
    scaffold: [
      "觀察德國車站與機場的高頻指示詞：Ausgang, Gleis。",
      "試著只開德語字幕看一遍，靠語境猜意思。"
    ],
    url: "https://www.youtube.com/results?search_query=DW+Nicos+Weg+A1"
  },
  {
    id: "de-book-1", domain: "de", level: 1, media: "book", slots: ["noon", "evening", "weekend"],
    title: "Café in Berlin",
    creator: "André Klein",
    duration: "10 分鐘 / 章",
    reason: "每章僅 2～3 頁的柏林生活小故事，附有詞彙表，適合無痛完成第一本德語原版讀物。",
    scaffold: [
      "讀第 1 章時別急著查字典，先靠上下文猜出故事主線。",
      "重點文化詞：die Wohngemeinschaft (WG，德國常見的合租公寓)。"
    ],
    url: "https://www.goodreads.com/search?q=Cafe+in+Berlin+Andre+Klein"
  },
  {
    id: "de-pod-2", domain: "de", level: 2, media: "podcast", slots: ["morning", "evening"],
    title: "Easy German Podcast",
    creator: "Cari & Manuel",
    duration: "20 分鐘",
    reason: "擺脫「教科書腔」的最佳選擇。兩位柏林主播以自然語速聊德國社會與生活日常。",
    scaffold: [
      "收集地道口語填充詞：halt, eben, eigentlich, sozusagen。",
      "遇到長句聽不懂直接跳過，練習抓句子主幹的名詞與動詞。"
    ],
    url: "https://open.spotify.com/search/Easy%20German%20Podcast"
  },
  {
    id: "de-vid-2", domain: "de", level: 2, media: "video", slots: ["morning", "noon"],
    title: "Dinge erklärt – Kurzgesagt",
    creator: "Kurzgesagt DE",
    duration: "10 分鐘",
    reason: "極簡視覺搭配播音級標準德語，邏輯連接詞密集，非常適合午休快速充電。",
    scaffold: [
      "留意轉折與因果表達：deshalb, allerdings, obwohl。",
      "看完後試著用 2 句德語在心裡複述今天的主題。"
    ],
    url: "https://www.youtube.com/results?search_query=Kurzgesagt+Deutsch"
  },
  {
    id: "de-movie-2", domain: "de", level: 2, media: "movie", slots: ["weekend", "evening"],
    title: "再見列寧！ (Good Bye, Lenin!)",
    creator: "Wolfgang Becker",
    duration: "121 分鐘",
    reason: "幽默又溫暖的德國影史經典，既能吸收生活化柏林德語，又能深刻理解兩德統一的歷史記憶。",
    scaffold: [
      "建議開啟德語原音＋德語（或雙語）字幕觀看。",
      "思考東德與西德的日常文化差異，哪些在今天依然存在？"
    ],
    url: "https://www.themoviedb.org/search?query=Good+Bye+Lenin"
  },
  {
    id: "de-book-2", domain: "de", level: 2, media: "book", slots: ["evening", "weekend"],
    title: "Tschick (契克)",
    creator: "Wolfgang Herrndorf",
    duration: "15 分鐘",
    reason: "德國中學生最愛的公路青春小說，口語鮮活、短句節奏明快，適合睡前輕鬆閱讀。",
    scaffold: [
      "感受作者如何用極簡的短句營造幽默感。",
      "摘抄 1 個你今天看到最有畫面感的德語動詞。"
    ],
    url: "https://www.goodreads.com/search?q=Tschick+Wolfgang+Herrndorf"
  },
  {
    id: "de-pod-3", domain: "de", level: 3, media: "podcast", slots: ["morning", "evening"],
    title: "Lage der Nation",
    creator: "Philip Banse & Ulf Buermeyer",
    duration: "25 分鐘精華",
    reason: "深入剖析德國政經與科技政策的高階播客，詞彙精準、論述嚴謹，適合突破 C1 天花板。",
    scaffold: [
      "留意新聞評論高頻功能動詞結構（如 zur Verfügung stellen）。",
      "挑選一個議題，試著用德語做 1 分鐘客觀立場總結。"
    ],
    url: "https://open.spotify.com/search/Lage%20der%20Nation"
  },
  {
    id: "de-movie-3", domain: "de", level: 3, media: "movie", slots: ["weekend"],
    title: "竊聽風暴 (Das Leben der Anderen)",
    creator: "Florian Henckel von Donnersmarck",
    duration: "137 分鐘",
    reason: "奧斯卡最佳外語片，對白克制卻極具張力，適合週末關燈靜靜沉浸。",
    scaffold: [
      "嘗試關掉中文字幕，純用德語字幕體會角色語氣。",
      "注意對話中 Sie 與 du 的權力壓迫感切換。"
    ],
    url: "https://www.themoviedb.org/search?query=Das+Leben+der+Anderen"
  },
  {
    id: "de-book-3", domain: "de", level: 3, media: "book", slots: ["evening", "weekend"],
    title: "朗讀者 (Der Vorleser)",
    creator: "Bernhard Schlink",
    duration: "20 分鐘",
    reason: "句式優美克制的當代德語文學經典，深入探討歷史責任與人性困境。",
    scaffold: [
      "留意第一人稱回顧過去時 (Präteritum) 的敘事節奏。",
      "摘抄 1 句你覺得結構最優美的長句。"
    ],
    url: "https://www.goodreads.com/search?q=Der+Vorleser"
  },

  // --- 攝影美學 (photo) ---
  {
    id: "ph-vid-1", domain: "photo", level: 1, media: "video", slots: ["morning", "noon"],
    title: "The Art of Photography · 構圖的減法",
    creator: "Ted Forbes",
    duration: "11 分鐘",
    reason: "擺脫器材焦慮，從經典攝影大師作品切入，用 10 分鐘幫你建立「攝影眼」。",
    scaffold: [
      "按下快門前先問自己：畫面裡哪一個元素是多餘的？",
      "今天隨手拍一張純粹呈現「光影對比」的照片。"
    ],
    url: "https://www.youtube.com/results?search_query=The+Art+of+Photography+Composition"
  },
  {
    id: "ph-book-1", domain: "photo", level: 1, media: "book", slots: ["evening", "weekend"],
    title: "Understanding Exposure (理解曝光)",
    creator: "Bryan Peterson",
    duration: "15 分鐘",
    reason: "不談枯燥物理公式，用直覺對比範例告訴你光圈、快門如何決定一張照片的情緒。",
    scaffold: [
      "區分「技術上正確曝光」與「創意情緒曝光」。",
      "試著用大光圈與小光圈拍同一個物體，感受景深敘事差異。"
    ],
    url: "https://www.goodreads.com/search?q=Understanding+Exposure+Bryan+Peterson"
  },
  {
    id: "ph-movie-2", domain: "photo", level: 2, media: "movie", slots: ["weekend"],
    title: "尋找薇薇安·邁爾 (Finding Vivian Maier)",
    creator: "John Maloof",
    duration: "83 分鐘",
    reason: "生前做過保姆的傳奇街頭攝影師，死後留下十幾萬張驚世底片。極度啟發人思考「為什麼而拍」。",
    scaffold: [
      "觀察腰平雙反相機如何讓被攝者放下戒心。",
      "挑一張最打動你的作品，分析她的站位與快門時機。"
    ],
    url: "https://www.themoviedb.org/search?query=Finding+Vivian+Maier"
  },
  {
    id: "ph-pod-2", domain: "photo", level: 2, media: "podcast", slots: ["morning", "evening"],
    title: "The Candid Frame",
    creator: "Ibarionex Perello",
    duration: "20 分鐘",
    reason: "真實紀實攝影師聊街頭舉起相機前的猶豫、廢片與建立個人風格的漫長過程。",
    scaffold: [
      "聽聽攝影師如何設計一個為期數月的個人拍攝專題。",
      "為自己訂一個極簡街拍主題（如：城市裡的雨天倒影）。"
    ],
    url: "https://open.spotify.com/search/The%20Candid%20Frame"
  },

  // --- AI 與產品設計 (tech) ---
  {
    id: "tc-vid-1", domain: "tech", level: 1, media: "video", slots: ["morning", "noon"],
    title: "But what is a GPT?",
    creator: "3Blue1Brown",
    duration: "27 分鐘",
    reason: "全網最直覺的大語言模型視覺化科普，不用寫程式也能看懂 Transformer 的核心直覺。",
    scaffold: [
      "重點理解詞向量空間 (Embedding) 與注意力機制如何改變詞義。",
      "抓住核心：一切都是基於機率預測下一個 Token。"
    ],
    url: "https://www.youtube.com/results?search_query=3Blue1Brown+But+what+is+a+GPT"
  },
  {
    id: "tc-book-2", domain: "tech", level: 2, media: "book", slots: ["evening", "weekend"],
    title: "設計心理學 (The Design of Everyday Things)",
    creator: "Don Norman",
    duration: "15 分鐘",
    reason: "永久改變你看待軟體與日常物品的方式，理解好設計為什麼「不需要說明書」。",
    scaffold: [
      "掌握核心概念：預設用途 (Affordance) 與指意 (Signifier)。",
      "找一個今天讓你卡住的 App 介面，分析它哪裡違背了直覺。"
    ],
    url: "https://www.goodreads.com/search?q=The+Design+of+Everyday+Things"
  },
  {
    id: "tc-pod-2", domain: "tech", level: 2, media: "podcast", slots: ["morning", "evening"],
    title: "Acquired",
    creator: "Ben Gilbert & David Rosenthal",
    duration: "25 分鐘精華",
    reason: "如看偵探小說般拆解科技公司與經典產品的歷史關鍵轉折，培養商業與產品直覺。",
    scaffold: [
      "觀察創辦人在資源匱乏的早期，如何靠做「減法」存活。",
      "把今天聽到的一個商業洞察類比到你自己想做的產品上。"
    ],
    url: "https://open.spotify.com/search/Acquired%20Podcast"
  },
  {
    id: "tc-movie-2", domain: "tech", level: 2, media: "movie", slots: ["weekend"],
    title: "雲端情人 (Her)",
    creator: "Spike Jonze",
    duration: "126 分鐘",
    reason: "在語音 AI 普及的今天回看這部十年前的電影，對思考人機交互與情感邊界極具啟發。",
    scaffold: [
      "留意片中「無螢幕優先」的極簡語音交互設計。",
      "思考：當 AI 能完美共情時，我們究竟在追求連結，還是在逃避真實摩擦？"
    ],
    url: "https://www.themoviedb.org/search?query=Her+2013"
  },

  // --- 心理與習慣 (mind) ---
  {
    id: "md-book-1", domain: "mind", level: 1, media: "book", slots: ["noon", "evening"],
    title: "原子習慣 (Atomic Habits)",
    creator: "James Clear",
    duration: "10 分鐘",
    reason: "用「系統大於目標」與「兩分鐘法則」徹底克服拖延，讓好習慣變得毫不費力。",
    scaffold: [
      "把你想建立的習慣縮小到「2 分鐘內能完成」的微版本。",
      "檢視桌面或瀏覽器環境，如何讓好習慣更顯而易見？"
    ],
    url: "https://www.goodreads.com/search?q=Atomic+Habits"
  },
  {
    id: "md-vid-1", domain: "mind", level: 1, media: "video", slots: ["morning", "noon"],
    title: "An Antidote to Dissatisfaction",
    creator: "Kurzgesagt",
    duration: "11 分鐘",
    reason: "結合神經科學與心理學的溫暖動畫，適合在忙碌一天中幫大腦重整焦慮。",
    scaffold: [
      "留意大腦預設模式如何製造永無止境的不滿足感。",
      "花 20 秒記下今天一件微小的確定感。"
    ],
    url: "https://www.youtube.com/results?search_query=Kurzgesagt+An+Antidote+to+Dissatisfaction"
  },
  {
    id: "md-pod-2", domain: "mind", level: 2, media: "podcast", slots: ["morning", "evening"],
    title: "Philosophize This!",
    creator: "Stephen West",
    duration: "20 分鐘",
    reason: "用極其白話的方式講透哲學史，幫你借用前人的智慧應對現代生活的精神內耗。",
    scaffold: [
      "尋找這一集思想中，能緩解你近期焦慮的一個視角。",
      "記下一句讓你想停下來思考 5 秒鐘的觀點。"
    ],
    url: "https://open.spotify.com/search/Philosophize%20This"
  },
  {
    id: "md-movie-1", domain: "mind", level: 1, media: "movie", slots: ["weekend"],
    title: "靈魂急轉彎 (Soul)",
    creator: "Pete Docter",
    duration: "100 分鐘",
    reason: "獻給所有被「目標焦慮」推著走的現代人：生命的美好往往藏在當下的微風與一頓午餐裡。",
    scaffold: [
      "區分「熱愛的心流」與「自我證明式的執念」。",
      "週末給自己留 15 分鐘不帶任何目的的散步。"
    ],
    url: "https://www.themoviedb.org/search?query=Soul+2020+Pixar"
  }
];

const DEFAULT_STATE = {
  goal: "提升德語",
  level: 2,
  media: ["podcast", "video", "book", "movie"],
  slotPref: "auto",
  currentRec: null,
  lastDateSlot: "",
  seenIds: [],
  watchlist: [],
  history: [],
  drawerTab: "watchlist",
  settings: {
    openaiKey: "",
    openaiModel: "gpt-6-luna",
    geminiKey: "",
    geminiModel: "gemini-3.5-flash-lite"
  }
};

let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem("curiodaily_ext_v1");
    if (!raw) return structuredClone(DEFAULT_STATE);
    const parsed = JSON.parse(raw);
    return {
      ...structuredClone(DEFAULT_STATE),
      ...parsed,
      settings: { ...DEFAULT_STATE.settings, ...(parsed.settings || {}) }
    };
  } catch {
    return structuredClone(DEFAULT_STATE);
  }
}

function saveState() {
  localStorage.setItem("curiodaily_ext_v1", JSON.stringify(state));
  updateTopMeta();
}

// 根據電腦真實時間自動判斷當下場景
function getActiveSlot() {
  if (state.slotPref && state.slotPref !== "auto") return state.slotPref;
  const now = new Date();
  const day = now.getDay();
  const hr = now.getHours();
  if (day === 0 || day === 6) return "weekend";
  if (hr >= 5 && hr < 12) return "morning";
  if (hr >= 12 && hr < 18) return "noon";
  return "evening";
}

function getDateSlotKey() {
  const now = new Date();
  const d = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  return `${d}-${getActiveSlot()}`;
}

const SLOT_LABEL = {
  morning: "早間通勤",
  noon: "午休碎片",
  evening: "夜晚沉澱",
  weekend: "週末沉浸"
};

const MEDIA_LABEL = {
  podcast: "PODCAST",
  video: "VIDEO",
  book: "BOOK",
  movie: "FILM"
};

const LEVEL_LABEL = { 1: "入門 A1-A2", 2: "進階 B1-B2", 3: "精通 C1+" };

function detectDomain(str) {
  const g = str.toLowerCase();
  if (/德語|德文|deutsch|german|德國|柏林/.test(g)) return "de";
  if (/攝影|拍照|美學|構圖|相機|photo/.test(g)) return "photo";
  if (/ai|人工智慧|產品|設計|編程|科技|商業|tech/.test(g)) return "tech";
  if (/心理|習慣|哲學|拖延|焦慮|思考|mind/.test(g)) return "mind";
  return null;
}

async function pickRecommendation(forceNew = false) {
  const card = document.getElementById("focusCard");
  card.classList.add("loading");

  const activeSlot = getActiveSlot();
  const goal = state.goal || "提升德語";
  const hasOpenAI = state.settings.openaiKey && state.settings.openaiKey.trim().length > 8;
  const hasGemini = state.settings.geminiKey && state.settings.geminiKey.trim().length > 8;

  if (hasOpenAI || hasGemini) {
    try {
      const aiRec = await fetchSmartAI(goal, state.level, state.media, activeSlot, hasOpenAI, hasGemini);
      state.currentRec = aiRec;
      state.lastDateSlot = getDateSlotKey();
      saveState();
      renderCard();
      card.classList.remove("loading");
      return;
    } catch (e) {
      console.error(e);
      showToast("AI 連線失敗，已切回內建精選庫");
    }
  }

  const domain = detectDomain(goal);
  let pool = CATALOG.filter(i => state.media.includes(i.media));
  if (pool.length === 0) pool = CATALOG;

  if (domain) {
    const dp = pool.filter(i => i.domain === domain);
    if (dp.length > 0) pool = dp;
  }

  const scored = pool.map(item => {
    let score = 0;
    if (item.slots.includes(activeSlot)) score += 30;
    if (activeSlot === "morning" && (item.media === "podcast" || item.media === "video")) score += 20;
    if (activeSlot === "noon" && (item.media === "video" || item.media === "book")) score += 20;
    if (activeSlot === "evening" && (item.media === "book" || item.media === "podcast")) score += 18;
    if (activeSlot === "weekend" && (item.media === "movie" || item.media === "book")) score += 25;

    score += (2 - Math.abs(item.level - state.level)) * 20;
    if (forceNew && state.currentRec && item.id === state.currentRec.id) score -= 100;
    if (state.seenIds.includes(item.id)) score -= 15;
    score += Math.random() * 5;
    return { item, score };
  });

  scored.sort((a, b) => b.score - a.score);
  const chosen = scored[0]?.item || CATALOG[0];

  let reason = chosen.reason;
  if (!domain) {
    reason = `（目前為離線精選庫跨界推薦；在右上角「設定」填入 API Key 即可即時策展「${goal}」專屬內容）\n\n` + chosen.reason;
  }

  state.currentRec = { ...chosen, reason };
  state.lastDateSlot = getDateSlotKey();
  if (!state.seenIds.includes(chosen.id)) {
    state.seenIds.push(chosen.id);
    if (state.seenIds.length > 14) state.seenIds.shift();
  }

  saveState();
  setTimeout(() => {
    renderCard();
    card.classList.remove("loading");
  }, 150);
}

// 統一調度中心：雙腦接力 vs 單腦模式
async function fetchSmartAI(goal, level, mediaList, slot, hasOpenAI, hasGemini) {
  let searchContext = "";
  let engineTag = "";

  // 第一棒：如果有 Gemini Key，先用 Google Search Grounding 聯網搜真實資源
  if (hasGemini) {
    searchContext = await searchWithGemini(goal, level, mediaList, slot);
    engineTag = hasOpenAI ? "Gemini聯網 + GPT策展" : "Gemini聯網";
  }

  // 第二棒：如果有 OpenAI Key，由 GPT 負責最終選品、寫導讀與輸出嚴格 JSON
  if (hasOpenAI) {
    if (!engineTag) engineTag = "GPT策展";
    return await curateWithOpenAI(goal, level, mediaList, slot, searchContext, engineTag);
  }

  // 若只填了 Gemini Key，則用 Gemini 再做一次純文字→JSON 格式化
  return await formatWithGemini(goal, level, mediaList, slot, searchContext, engineTag);
}

// 1. Gemini 聯網搜尋（啟用 google_search 工具）
async function searchWithGemini(goal, level, mediaList, slot) {
  const model = state.settings.geminiModel || "gemini-3.5-flash-lite";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

  const prompt = `請幫我聯網搜尋 3 個真實存在、口碑極佳的學習資源，條件如下：
- 學習目標：${goal}
- 程度：${LEVEL_LABEL[level]}
- 允許媒介：${mediaList.join("、")}
- 使用場景：${SLOT_LABEL[slot]}（請匹配合適時長的內容）
請列出每個資源的「準確名稱」、「作者/頻道」、「媒介類型」、「預估耗時」以及「推薦亮點」。`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": state.settings.geminiKey.trim()
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      tools: [{ google_search: {} }]
    })
  });

  if (!res.ok) throw new Error(`Gemini Search Error: ${res.status}`);
  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.map(p => p.text).join("\n") || "";

  // 提取 Google 搜尋真實來源網址 (Grounding Metadata)
  const chunks = data.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
  const links = chunks
    .filter(c => c.web?.uri)
    .slice(0, 5)
    .map(c => `- ${c.web.title || "來源"}: ${c.web.uri}`)
    .join("\n");

  return `${text}\n\n[Google 搜尋驗證網址]\n${links}`;
}

// 2. ChatGPT 精選策展並輸出嚴格 JSON
async function curateWithOpenAI(goal, level, mediaList, slot, searchContext, engineTag) {
  const model = state.settings.openaiModel || "gpt-6-luna";
  const contextPart = searchContext
    ? `以下是剛剛透過 Google 聯網檢索到的真實候選資源與網址，請優先從中挑選「唯一一個」最適合的：\n---\n${searchContext}\n---\n`
    : "";

  const prompt = `${contextPart}請為目標「${goal}」（程度：${LEVEL_LABEL[level]}）在「${SLOT_LABEL[slot]}」時段，從媒介 [${mediaList.join(", ")}] 挑選或推薦「唯一一個」真實存在的最佳資源。
請回傳純 JSON，格式如下：
{
  "title": "資源名稱",
  "media": "podcast 或 video 或 book 或 movie",
  "creator": "作者/導演/頻道",
  "duration": "預估耗時",
  "reason": "1～2 句精簡策展導讀（繁體中文）",
  "scaffold": ["學習腳手架/核心表達 1", "學習腳手架/思考題 2"],
  "url": "若上方有驗證網址請優先使用，否則留空",
  "searchQuery": "用於搜尋該資源的精準關鍵字"
}`;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${state.settings.openaiKey.trim()}`
    },
    body: JSON.stringify({
      model,
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" }
    })
  });

  if (!res.ok) throw new Error(`OpenAI Error: ${res.status}`);
  const data = await res.json();
  const parsed = JSON.parse(data.choices[0].message.content);
  return buildAIRecObject(parsed, level, engineTag);
}

// 3. 僅有 Gemini Key 時的 JSON 格式化步驟（不開 google_search 以確保 JSON 穩定）
async function formatWithGemini(goal, level, mediaList, slot, searchContext, engineTag) {
  const model = state.settings.geminiModel || "gemini-3.5-flash-lite";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

  const prompt = `根據以下檢索資料，為「${goal}（${SLOT_LABEL[slot]}）」挑出唯一最適合的 1 個資源並轉為純 JSON（不要 Markdown 標記）：
${searchContext}
JSON 格式：{"title":"","media":"podcast/video/book/movie","creator":"","duration":"","reason":"","scaffold":["",""],"url":"","searchQuery":""}`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": state.settings.geminiKey.trim()
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { responseMimeType: "application/json" }
    })
  });

  if (!res.ok) throw new Error(`Gemini Format Error: ${res.status}`);
  const data = await res.json();
  const raw = data.candidates?.[0]?.content?.parts?.[0]?.text || "{}";
  const parsed = JSON.parse(raw);
  return buildAIRecObject(parsed, level, engineTag);
}

function buildAIRecObject(parsed, level, engineTag) {
  const q = encodeURIComponent(parsed.searchQuery || parsed.title || "");
  let fallbackUrl = `https://www.google.com/search?q=${q}`;
  if (parsed.media === "video") fallbackUrl = `https://www.youtube.com/results?search_query=${q}`;
  if (parsed.media === "podcast") fallbackUrl = `https://open.spotify.com/search/${q}`;
  if (parsed.media === "movie") fallbackUrl = `https://www.themoviedb.org/search?query=${q}`;
  if (parsed.media === "book") fallbackUrl = `https://www.goodreads.com/search?q=${q}`;

  return {
    id: "ai-" + Date.now(),
    level,
    media: ["podcast", "video", "book", "movie"].includes(parsed.media) ? parsed.media : "video",
    title: parsed.title || "AI 精選推薦",
    creator: parsed.creator || engineTag,
    duration: parsed.duration || "15 分鐘",
    reason: parsed.reason || "",
    scaffold: Array.isArray(parsed.scaffold) ? parsed.scaffold : ["專注體驗並寫下一句話收穫。"],
    url: (parsed.url && parsed.url.startsWith("http")) ? parsed.url : fallbackUrl,
    isAI: true,
    engineTag
  };
}

function renderCard() {
  const rec = state.currentRec;
  if (!rec) return;

  const slotName = SLOT_LABEL[getActiveSlot()];
  const engineLabel = rec.engineTag ? ` · ${rec.engineTag}` : (rec.isAI ? " · AI" : "");
  document.getElementById("recMeta").textContent = `${MEDIA_LABEL[rec.media]} · ${rec.duration} · ${slotName}${engineLabel}`;
  document.getElementById("recTitle").textContent = rec.title;
  document.getElementById("recCreator").textContent = rec.creator;
  document.getElementById("recReason").textContent = rec.reason;

  const scaf = document.getElementById("recScaffold");
  scaf.innerHTML = "";
  rec.scaffold.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    scaf.appendChild(li);
  });

  document.getElementById("recLink").href = rec.url;

  const saved = state.watchlist.some(i => i.id === rec.id);
  const btnWl = document.getElementById("btnWatchlist");
  btnWl.classList.toggle("active", saved);
  btnWl.textContent = saved ? "★ 已存" : "☆ 稍後";

  const done = state.history.some(i => i.id === rec.id);
  const btnDone = document.getElementById("btnDone");
  btnDone.classList.toggle("active", done);
  btnDone.textContent = done ? "✓ 已完成" : "✓ 完成";
}

function updateTopMeta() {
  const slotName = SLOT_LABEL[getActiveSlot()];
  document.getElementById("statusLabel").textContent = `${slotName} · ${state.goal} (${LEVEL_LABEL[state.level]})`;
  document.getElementById("savedBadge").textContent = state.watchlist.length + state.history.length;
}

// 抽屜邏輯
function openDrawer(tab) {
  state.drawerTab = tab || state.drawerTab;
  document.getElementById("drawerBackdrop").classList.add("open");
  renderDrawer();
}

function closeDrawer() {
  document.getElementById("drawerBackdrop").classList.remove("open");
}

function renderDrawer() {
  document.getElementById("tabWatchlist").classList.toggle("active", state.drawerTab === "watchlist");
  document.getElementById("tabHistory").classList.toggle("active", state.drawerTab === "history");

  const body = document.getElementById("drawerBody");
  body.innerHTML = "";

  const list = state.drawerTab === "watchlist" ? state.watchlist : state.history;
  if (list.length === 0) {
    const p = document.createElement("p");
    p.className = "empty";
    p.textContent = state.drawerTab === "watchlist" ? "暫無待看內容" : "尚無學習紀錄，看完後按完成或寫句筆記吧";
    body.appendChild(p);
    return;
  }

  list.forEach(item => {
    const row = document.createElement("div");
    row.className = "list-row";

    const info = document.createElement("div");
    const h4 = document.createElement("h4");
    h4.textContent = item.title;
    const p = document.createElement("p");
    p.textContent = `${MEDIA_LABEL[item.media]} · ${item.duration}`;
    info.appendChild(h4);
    info.appendChild(p);

    if (item.note) {
      const n = document.createElement("div");
      n.className = "list-note";
      n.textContent = `「${item.note}」`;
      info.appendChild(n);
    }

    const actions = document.createElement("div");
    actions.style.display = "flex";
    actions.style.gap = "8px";

    if (item.url) {
      const a = document.createElement("a");
      a.href = item.url;
      a.target = "_blank";
      a.className = "tiny-btn";
      a.style.textDecoration = "none";
      a.textContent = "打開";
      actions.appendChild(a);
    }

    const del = document.createElement("button");
    del.className = "tiny-btn";
    del.textContent = "移除";
    del.addEventListener("click", () => {
      if (state.drawerTab === "watchlist") {
        state.watchlist = state.watchlist.filter(x => x.id !== item.id);
      } else {
        state.history = state.history.filter(x => x.id !== item.id);
      }
      saveState();
      renderCard();
      renderDrawer();
    });
    actions.appendChild(del);

    row.appendChild(info);
    row.appendChild(actions);
    body.appendChild(row);
  });
}

// 設定彈窗邏輯
let draftSettings = {};

function openSettings() {
  draftSettings = {
    goal: state.goal,
    level: state.level,
    media: [...state.media],
    slotPref: state.slotPref
  };
  document.getElementById("goalInput").value = draftSettings.goal;
  document.getElementById("openaiKey").value = state.settings.openaiKey || "";
  document.getElementById("openaiModel").value = state.settings.openaiModel || "gpt-6-luna";
  document.getElementById("geminiKey").value = state.settings.geminiKey || "";
  document.getElementById("geminiModel").value = state.settings.geminiModel || "gemini-3.5-flash-lite";
  syncSettingsChips();
  document.getElementById("settingsBackdrop").classList.add("open");
}

function closeSettings() {
  document.getElementById("settingsBackdrop").classList.remove("open");
}

function syncSettingsChips() {
  document.querySelectorAll(".goal-chip").forEach(el => {
    el.classList.toggle("active", el.dataset.goal === draftSettings.goal);
  });
  document.querySelectorAll(".lvl-chip").forEach(el => {
    el.classList.toggle("active", Number(el.dataset.lvl) === draftSettings.level);
  });
  document.querySelectorAll(".media-chip").forEach(el => {
    el.classList.toggle("active", draftSettings.media.includes(el.dataset.media));
  });
  document.querySelectorAll(".slot-chip").forEach(el => {
    el.classList.toggle("active", el.dataset.slot === draftSettings.slotPref);
  });
}

let toastTimer;
function showToast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
}

// 綁定所有事件監聽（符合 Chrome MV3 安全策略，無內聯 JS）
function bindEvents() {
  document.getElementById("goalTrigger").addEventListener("click", openSettings);
  document.getElementById("btnOpenSettings").addEventListener("click", openSettings);
  document.getElementById("btnCloseSettings").addEventListener("click", closeSettings);

  document.getElementById("btnOpenDrawer").addEventListener("click", () => openDrawer());
  document.getElementById("btnCloseDrawer").addEventListener("click", closeDrawer);

  document.getElementById("drawerBackdrop").addEventListener("click", e => {
    if (e.target.id === "drawerBackdrop") closeDrawer();
  });
  document.getElementById("settingsBackdrop").addEventListener("click", e => {
    if (e.target.id === "settingsBackdrop") closeSettings();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closeDrawer();
      closeSettings();
    }
  });

  document.getElementById("tabWatchlist").addEventListener("click", () => {
    state.drawerTab = "watchlist";
    renderDrawer();
  });
  document.getElementById("tabHistory").addEventListener("click", () => {
    state.drawerTab = "history";
    renderDrawer();
  });

  // 主卡動作
  document.getElementById("btnNext").addEventListener("click", () => pickRecommendation(true));

  document.getElementById("btnWatchlist").addEventListener("click", () => {
    const rec = state.currentRec;
    if (!rec) return;
    const idx = state.watchlist.findIndex(x => x.id === rec.id);
    if (idx >= 0) {
      state.watchlist.splice(idx, 1);
      showToast("已從清單移除");
    } else {
      state.watchlist.unshift(rec);
      showToast("已存入待看清單");
    }
    saveState();
    renderCard();
  });

  document.getElementById("btnDone").addEventListener("click", () => {
    const rec = state.currentRec;
    if (!rec) return;
    if (!state.history.some(x => x.id === rec.id)) {
      state.history.unshift({ ...rec, note: "" });
      showToast("已完成今日探索");
      saveState();
      renderCard();
    }
  });

  // 難度校準
  document.getElementById("btnHard").addEventListener("click", () => {
    if (state.level > 1) {
      state.level -= 1;
      showToast(`已調整為「${LEVEL_LABEL[state.level]}」`);
    } else {
      showToast("已經是最入門難度，換一篇試試");
    }
    pickRecommendation(true);
  });

  document.getElementById("btnFit").addEventListener("click", () => {
    showToast("已記住你的偏好節奏");
  });

  document.getElementById("btnEasy").addEventListener("click", () => {
    if (state.level < 3) {
      state.level += 1;
      showToast(`已升級為「${LEVEL_LABEL[state.level]}」`);
    } else {
      showToast("已經是最高難度，換一個新挑戰");
    }
    pickRecommendation(true);
  });

  // 筆記
  const saveNoteHandler = () => {
    const input = document.getElementById("noteInput");
    const val = input.value.trim();
    if (!val || !state.currentRec) return;
    const existing = state.history.find(x => x.id === state.currentRec.id);
    if (existing) {
      existing.note = val;
    } else {
      state.history.unshift({ ...state.currentRec, note: val });
    }
    input.value = "";
    saveState();
    renderCard();
    showToast("筆記已存入學習軌跡");
  };

  document.getElementById("btnSaveNote").addEventListener("click", saveNoteHandler);
  document.getElementById("noteInput").addEventListener("keydown", e => {
    if (e.key === "Enter") saveNoteHandler();
  });

  // 設定頁互動
  document.getElementById("goalInput").addEventListener("input", e => {
    draftSettings.goal = e.target.value;
    syncSettingsChips();
  });

  document.querySelectorAll(".goal-chip").forEach(el => {
    el.addEventListener("click", () => {
      draftSettings.goal = el.dataset.goal;
      document.getElementById("goalInput").value = draftSettings.goal;
      syncSettingsChips();
    });
  });

  document.querySelectorAll(".lvl-chip").forEach(el => {
    el.addEventListener("click", () => {
      draftSettings.level = Number(el.dataset.lvl);
      syncSettingsChips();
    });
  });

  document.querySelectorAll(".media-chip").forEach(el => {
    el.addEventListener("click", () => {
      const m = el.dataset.media;
      if (draftSettings.media.includes(m)) {
        if (draftSettings.media.length === 1) return showToast("至少保留一種媒介");
        draftSettings.media = draftSettings.media.filter(x => x !== m);
      } else {
        draftSettings.media.push(m);
      }
      syncSettingsChips();
    });
  });

  document.querySelectorAll(".slot-chip").forEach(el => {
    el.addEventListener("click", () => {
      draftSettings.slotPref = el.dataset.slot;
      syncSettingsChips();
    });
  });

  document.getElementById("btnSaveSettings").addEventListener("click", () => {
    state.goal = document.getElementById("goalInput").value.trim() || "提升德語";
    state.level = draftSettings.level;
    state.media = draftSettings.media;
    state.slotPref = draftSettings.slotPref;
    state.settings.openaiKey = document.getElementById("openaiKey").value.trim();
    state.settings.openaiModel = document.getElementById("openaiModel").value.trim() || "gpt-6-luna";
    state.settings.geminiKey = document.getElementById("geminiKey").value.trim();
    state.settings.geminiModel = document.getElementById("geminiModel").value.trim() || "gemini-3.5-flash-lite";

    closeSettings();
    pickRecommendation(true);
    showToast("設定已更新");
  });
}

// 啟動
(function init() {
  bindEvents();
  updateTopMeta();

  // 如果在同一天同一個時段內再次打開新分頁，保持同一篇平靜體驗；跨時段則自動換新
  if (state.currentRec && state.lastDateSlot === getDateSlotKey()) {
    renderCard();
  } else {
    pickRecommendation(false);
  }
})();

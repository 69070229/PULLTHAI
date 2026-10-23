// รายการอาหาร (ภาพจาก Wikimedia Commons)
const img = (file) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=900`;

const foods = [
    {
        id: "TH-001", name: "ผัดไทยกุ้งสด", en: "PAD THAI", price: 60, rarity: 4,
        desc: "เส้นจันท์ผัดซอสมะขามเปรี้ยวหวาน ใส่กุ้งสด เต้าหู้ ถั่วงอก และไข่ โรยถั่วลิสงคั่ว บีบมะนาวเพิ่มความสดชื่น",
        image: img("Phat_Thai_kung_Chang_Khien_street_stall.jpg"),
    },
    {
        id: "TH-002", name: "ต้มยำกุ้งน้ำข้น", en: "TOM YUM GOONG", price: 120, rarity: 6,
        desc: "ซุปรสจัดจ้านเปรี้ยวเผ็ด หอมตะไคร้ ข่า ใบมะกรูด ใส่กุ้งแม่น้ำตัวโต เมนูระดับตำนานที่ทั่วโลกยอมรับ",
        image: img("Tom_yam_kung_maenam.jpg"),
    },
    {
        id: "TH-003", name: "ส้มตำ", en: "SOM TAM", price: 45, rarity: 3,
        desc: "มะละกอดิบสับตำกับพริก กระเทียม มะเขือเทศ ปรุงรสเปรี้ยว เค็ม หวาน เผ็ด ครบทุกรสในจานเดียว",
        image: img("2013_Tam_Lao.jpg"),
    },
    {
        id: "TH-004", name: "แกงเขียวหวานไก่", en: "GREEN CURRY", price: 80, rarity: 5,
        desc: "แกงกะทิสีเขียวหอมพริกแกงสด ใส่ไก่ มะเขือเปราะ และใบโหระพา ทานคู่โรตีหรือข้าวสวยร้อน ๆ",
        image: img("Thai_green_chicken_curry_and_roti.jpg"),
    },
    {
        id: "TH-005", name: "แกงมัสมั่นไก่", en: "MASSAMAN CURRY", price: 95, rarity: 6,
        desc: "แกงกะทิรสกลมกล่อม หอมเครื่องเทศ ใส่ไก่ มันฝรั่ง และถั่วลิสง รสชาติหวานเค็มนุ่มลึก",
        image: img("Kaeng_matsaman_kai.JPG"),
    },
    {
        id: "TH-006", name: "ข้าวมันไก่", en: "CHICKEN RICE", price: 50, rarity: 3,
        desc: "ข้าวหุงน้ำซุปไก่หอมมัน เสิร์ฟพร้อมไก่ต้มเนื้อนุ่ม น้ำจิ้มเต้าเจี้ยวรสเด็ด และน้ำซุปร้อน ๆ",
        image: img("Hainanese_Chicken_Rice.jpg"),
    },
    {
        id: "TH-007", name: "ข้าวเหนียวมะม่วง", en: "MANGO STICKY RICE", price: 70, rarity: 5,
        desc: "ข้าวเหนียวมูนกะทิหอมมัน ทานคู่มะม่วงน้ำดอกไม้สุกฉ่ำ ราดหัวกะทิ โรยถั่วทองกรอบ",
        image: img("Mango_sticy_rice_(3859549574).jpg"),
    },
    {
        id: "TH-008", name: "ข้าวกะเพราหมูกรอบ", en: "PAD KRA PAO", price: 55, rarity: 4,
        desc: "หมูกรอบผัดใบกะเพราพริกกระเทียมไฟแรง หอมกลิ่นกระทะ เสิร์ฟพร้อมข้าวสวยและไข่ดาว",
        image: img("Basil_fried_crispy_pork_with_rice_-_Chiang_Mai_-_2017-07-11_(002).jpg"),
    },
    {
        id: "TH-009", name: "ข้าวซอยไก่", en: "KHAO SOI", price: 65, rarity: 4,
        desc: "บะหมี่เหลืองในน้ำแกงกะทิรสเข้มข้นสไตล์เหนือ โรยหมี่กรอบ ทานกับผักกาดดองและหอมแดง",
        image: img("Khao_Soi_Northern_Thai_food_ข้าวซอย_ผักดอง.jpg"),
    },
    {
        id: "TH-010", name: "ข้าวผัด", en: "FRIED RICE", price: 50, rarity: 3,
        desc: "ข้าวผัดไฟแรงกับไข่ หอมใหญ่ และต้นหอม ปรุงรสกลมกล่อม บีบมะนาว เสิร์ฟพร้อมแตงกวา",
        image: img("Thaifriedrice.jpg"),
    },
    {
        id: "TH-011", name: "หมูกระทะ", en: "MOO KRATA", price: 299, rarity: 6,
        desc: "บุฟเฟต์ปิ้งย่างกลางวงเพื่อน ย่างหมูบนโดมเหล็ก น้ำซุปไหลลงรอบกระทะต้มผักวุ้นเส้น จบด้วยน้ำจิ้มสุกี้รสเด็ด",
        image: img("Mu_kratha.jpg"),
    },
    {
        id: "TH-012", name: "พะแนงหมู", en: "PANANG CURRY", price: 90, rarity: 6,
        desc: "แกงกะทิข้นเข้มข้นกลิ่นพริกแกงพะแนง หอมใบมะกรูดซอย รสหวานเค็มมันละมุน ราดหัวกะทิเต็มจาน",
        image: img("Panang_curry_(42943883862).jpg"),
    },
    {
        id: "TH-013", name: "ต้มข่าไก่", en: "TOM KHA GAI", price: 85, rarity: 5,
        desc: "ซุปกะทิหอมข่าอ่อน ตะไคร้ ใบมะกรูด ใส่ไก่และเห็ด รสเปรี้ยวเค็มมันกลมกล่อม ไม่เผ็ดจัด",
        image: img("Flickr_preppybyday_4711943668--Tom_kha_gai.jpg"),
    },
    {
        id: "TH-014", name: "แกงเผ็ดหมู", en: "RED CURRY", price: 75, rarity: 5,
        desc: "แกงกะทิพริกแกงแดงรสจัดจ้าน ใส่หมู หน่อไม้ และใบโหระพา สีแดงสวยหอมเครื่องแกง",
        image: img("Kaeng_phet_mu.jpg"),
    },
    {
        id: "TH-015", name: "ทองหยิบ", en: "THONG YIP", price: 40, rarity: 5,
        desc: "ขนมไทยมงคลสีทองจากไข่แดงเคี่ยวในน้ำเชื่อม จับจีบเป็นดอกไม้ห้าแฉก หวานหอมนุ่มละลายในปาก",
        image: img("Thong_yib.jpg"),
    },
    {
        id: "TH-016", name: "เมี่ยงคำ", en: "MIANG KHAM", price: 60, rarity: 5,
        desc: "ห่อใบชะพลูใส่มะพร้าวคั่ว หอมแดง ขิง มะนาว ถั่ว กุ้งแห้ง ราดน้ำเมี่ยง คำเดียวได้ครบทุกรส",
        image: img("Miang_kham_platter.jpg"),
    },
    {
        id: "TH-017", name: "ลาบเนื้อ", en: "LARB", price: 70, rarity: 4,
        desc: "เนื้อสับคลุกข้าวคั่ว พริกป่น น้ำปลา มะนาว สะระแหน่ หอมแดง รสแซ่บสไตล์อีสาน กินคู่ข้าวเหนียว",
        image: img("LaoFood_LarbNeua.JPG"),
    },
    {
        id: "TH-018", name: "ไก่ย่าง", en: "KAI YANG", price: 80, rarity: 4,
        desc: "ไก่หมักเครื่องเทศย่างเตาถ่านจนหนังเกรียมหอม เนื้อในชุ่มฉ่ำ จิ้มแจ่วรสเผ็ดเปรี้ยว",
        image: img("Gaiyangtaladdonwai06.jpg"),
    },
    {
        id: "TH-019", name: "ก๋วยเตี๋ยวเรือ", en: "BOAT NOODLES", price: 20, rarity: 4,
        desc: "ก๋วยเตี๋ยวชามเล็กน้ำซุปเข้มข้นหอมเครื่องเทศ ใส่หมูหรือเนื้อ ลูกชิ้น และกากหมู กินทีละหลายชาม",
        image: img("Boat_noodles.jpg"),
    },
    {
        id: "TH-020", name: "ขนมจีนน้ำยา", en: "KHANOM CHIN", price: 50, rarity: 4,
        desc: "เส้นขนมจีนเหนียวนุ่มราดน้ำยากะทิปลา ทานคู่ผักสดและผักลวกหลากชนิด ให้รสชาติแบบไทยแท้",
        image: img("Khanom_Chin_-_Thai_rice_noodles.JPG"),
    },
    {
        id: "TH-021", name: "แกงส้ม", en: "KAENG SOM", price: 70, rarity: 4,
        desc: "แกงน้ำใสรสเปรี้ยวนำจากมะขาม เผ็ดพริกแกงส้ม ใส่ปลาและผักรวม ซดร้อน ๆ ชื่นใจ",
        image: img("Kaeng_som-marum63.JPG"),
    },
    {
        id: "TH-022", name: "ข้าวขาหมู", en: "KHAO KHA MU", price: 55, rarity: 4,
        desc: "ขาหมูพะโล้ตุ๋นจนนุ่มเปื่อย ราดน้ำพะโล้บนข้าวสวย เสิร์ฟพร้อมไข่ต้ม ผักกาดดอง และพริกน้ำส้ม",
        image: img("Khao_kha_mu_thailand.jpg"),
    },
    {
        id: "TH-023", name: "ข้าวคลุกกะปิ", en: "KHAO KLUK KAPI", price: 60, rarity: 4,
        desc: "ข้าวคลุกกะปิหอม ๆ ทานคู่หมูหวาน มะม่วงดิบ ไข่ฝอย กุ้งแห้ง และหอมแดง ครบรสในจานเดียว",
        image: img("Khao.kluke.kapi-01.jpg"),
    },
    {
        id: "TH-024", name: "หมูปิ้ง", en: "MOO PING", price: 10, rarity: 3,
        desc: "หมูหมักนมสดเสียบไม้ย่างเตาถ่าน หอมหวานเนื้อนุ่ม คู่หูข้าวเหนียวมื้อเช้าของคนไทย",
        image: img("Mu_ping.jpg"),
    },
    {
        id: "TH-025", name: "ผัดซีอิ๊ว", en: "PAD SEE EW", price: 50, rarity: 3,
        desc: "เส้นใหญ่ผัดซีอิ๊วดำไฟแรงจนหอมกระทะ ใส่หมู ไข่ และคะน้า รสหวานเค็มกำลังดี",
        image: img("Pad_see_ew.jpg"),
    },
    {
        id: "TH-026", name: "ราดหน้าหมู", en: "RAT NA", price: 50, rarity: 3,
        desc: "เส้นใหญ่ผัดเกรียมราดน้ำเกรวี่ข้นร้อน ๆ ใส่หมูหมักนุ่มและคะน้า เติมพริกน้ำส้มตามชอบ",
        image: img("Kuai-tiao_rat_na_mu.JPG"),
    },
    {
        id: "TH-027", name: "ขนมครก", en: "KHANOM KROK", price: 25, rarity: 3,
        desc: "ขนมกะทิหยอดหลุมเตาถ่าน ขอบกรอบใต้ไหม้นิด ๆ หน้านุ่มเยิ้ม โรยต้นหอมหรือข้าวโพด",
        image: img("Khanom_Krok.jpg"),
    },
    {
        id: "TH-028", name: "ข้าวต้ม", en: "KHAO TOM", price: 40, rarity: 3,
        desc: "ข้าวต้มน้ำซุปร้อน ๆ ใส่หมูสับ โรยกระเทียมเจียว ขึ้นฉ่าย และพริกไทย อุ่นท้องยามเช้าหรือดึก",
        image: img("Lao_cuisine_khaotom.jpg"),
    },
    {
        id: "TH-029", name: "บัวลอย", en: "BUA LOY", price: 30, rarity: 3,
        desc: "แป้งข้าวเหนียวปั้นก้อนกลมหลากสีในน้ำกะทิหวานหอม จะใส่ไข่หวานด้วยก็อร่อยไปอีกแบบ",
        image: img("Bualoi_Boiled_flour_balls_with_coconut_milk.jpg"),
    },
    {
        id: "TH-030", name: "ขนมเบื้อง", en: "KHANOM BUEANG", price: 35, rarity: 3,
        desc: "แป้งกรอบบางทาครีมไข่ขาว โรยฝอยทองหรือหน้าเค็มกุ้งมะพร้าว กรอบหอมเคี้ยวเพลิน",
        image: img("Ang_Thong_(2024)_-_khanom_bueang_boran_ขนมเบื้องโบราณ.jpg"),
    },
];

// ===== ระบบอัตรา (อ้างอิงแนวเกมกาชาจริง) =====
// อัตราพื้นฐาน (%)
const BASE_RATE = { 6: 2, 5: 8, 4: 50, 3: 40 };
const SOFT_PITY = 50;   // ไม่ได้ ★6 ครบ 50 ครั้ง อัตรา ★6 เพิ่มครั้งละ 2%
const SOFT_STEP = 2;
const HARD_PITY = SOFT_PITY + Math.ceil((100 - BASE_RATE[6]) / SOFT_STEP); // ครั้งที่ 99 ได้ ★6 แน่นอน
const PITY5 = 10;       // การันตี ★5 ขึ้นไปทุก 10 ครั้ง

// เมนูเรทอัป: ได้ ★6/★5 มีโอกาส 50% เป็นเมนูนี้ ถ้าพลาดครั้งหน้าการันตี
const RATE_UP = { 6: ["TH-002"], 5: ["TH-004", "TH-007"] };
const BANNER_NAME = "เทศกาลต้มยำ";

const rarityColor = { 3: "#4fb3ff", 4: "#b77cff", 5: "#ffd400", 6: "#ff7a1a" };
const MAX_TIER = 6;     // E0 - E6
const tokenValue = { 3: 1, 4: 2, 5: 5, 6: 10 };

const $ = (id) => document.getElementById(id);
const stars = (n) => "★".repeat(n);
const foodById = (id) => foods.find((f) => f.id === id);

// ---------- บันทึกข้อมูล (localStorage) ----------
const STORE_KEY = "field-rations-v1";
const freshState = () => ({
    pulls: 0, pity: 0, pity5: 0, guarantee6: false, guarantee5: false,
    tokens: 0, inv: {}, history: [], sound: true,
});

function loadState() {
    try {
        const saved = JSON.parse(localStorage.getItem(STORE_KEY));
        if (saved) return { ...freshState(), ...saved };
    } catch (e) { /* ใช้ค่าเริ่มต้น */ }
    return freshState();
}

function saveState() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* ไม่เป็นไร */ }
}

let state = loadState();

// ---------- เสียง (สังเคราะห์ด้วย Web Audio API ไม่ต้องใช้ไฟล์) ----------
const Sound = (() => {
    let ctx = null;
    let master = null;

    function init() {
        if (!ctx) {
            const AC = window.AudioContext || window.webkitAudioContext;
            if (!AC) return;
            ctx = new AC();
            master = ctx.createGain();
            master.gain.value = 0.5;
            master.connect(ctx.destination);
        }
        if (ctx.state === "suspended") ctx.resume();
    }

    function tone(freq, { to, type = "sine", dur = 0.2, vol = 0.3, delay = 0, attack = 0.005 } = {}) {
        if (!state.sound || !ctx) return;
        const t = ctx.currentTime + delay;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, t);
        if (to) osc.frequency.exponentialRampToValueAtTime(to, t + dur);
        gain.gain.setValueAtTime(0.0001, t);
        gain.gain.exponentialRampToValueAtTime(vol, t + attack);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        osc.connect(gain).connect(master);
        osc.start(t);
        osc.stop(t + dur + 0.05);
    }

    function noise({ dur = 0.5, vol = 0.3, delay = 0, type = "lowpass", from = 2000, to = 200, q = 1 } = {}) {
        if (!state.sound || !ctx) return;
        const t = ctx.currentTime + delay;
        const buffer = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
        const src = ctx.createBufferSource();
        src.buffer = buffer;
        const filter = ctx.createBiquadFilter();
        filter.type = type;
        filter.Q.value = q;
        filter.frequency.setValueAtTime(from, t);
        filter.frequency.exponentialRampToValueAtTime(to, t + dur);
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(vol, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        src.connect(filter).connect(gain).connect(master);
        src.start(t);
    }

    return {
        init,
        click() { tone(1400, { type: "square", dur: 0.05, vol: 0.06 }); },
        beep() {
            tone(1800, { type: "square", dur: 0.06, vol: 0.05 });
            tone(2400, { type: "square", dur: 0.05, vol: 0.04, delay: 0.08 });
        },
        drop() {
            noise({ dur: 0.8, vol: 0.3, type: "bandpass", from: 5000, to: 300, q: 2 });
            tone(1200, { to: 120, type: "sawtooth", dur: 0.8, vol: 0.05 });
        },
        impact() {
            tone(150, { to: 35, dur: 0.8, vol: 0.9 });
            tone(70, { to: 30, type: "triangle", dur: 1, vol: 0.5 });
            noise({ dur: 0.5, vol: 0.6, from: 2000, to: 60 });
        },
        charge(dur) {
            tone(110, { to: 880, type: "sawtooth", dur, vol: 0.05, attack: 0.3 });
            tone(55, { to: 440, dur, vol: 0.2, attack: 0.3 });
        },
        upgrade() {
            [523, 659, 784, 1047, 1319].forEach((f, i) =>
                tone(f, { type: "triangle", dur: 0.3, vol: 0.18, delay: i * 0.06 }));
            noise({ dur: 0.25, vol: 0.2, type: "highpass", from: 3000, to: 8000 });
        },
        alarm() {
            for (let i = 0; i < 6; i++) {
                tone(i % 2 ? 740 : 980, { type: "square", dur: 0.13, vol: 0.06, delay: i * 0.14 });
            }
        },
        hush() {
            tone(40, { to: 80, dur: 1, vol: 0.5, attack: 0.5 });
            tone(1500, { to: 7000, dur: 1, vol: 0.05, attack: 0.6 });
        },
        burst(rarity) {
            noise({ dur: 1.3, vol: 0.6, from: 9000, to: 300 });
            tone(65, { to: 25, dur: 1.3, vol: 0.9 });
            for (let i = 0; i < rarity + 2; i++) {
                tone(1800 + i * 320, { dur: 0.5, vol: 0.04, delay: 0.05 + i * 0.04 });
            }
        },
        star(i, delay) {
            tone(880 * Math.pow(2, (i * 2) / 12), { type: "triangle", dur: 0.35, vol: 0.14, delay });
        },
        fanfare(rarity) {
            const chords = {
                3: [523, 784],
                4: [440, 554, 659],
                5: [523, 659, 784, 1047],
                6: [392, 523, 659, 784, 1047, 1568],
            };
            const dur = 0.8 + (rarity - 3) * 0.5;
            chords[rarity].forEach((f, i) =>
                tone(f, { type: "triangle", dur, vol: 0.1, delay: i * 0.03, attack: 0.02 }));
            if (rarity === 6) {
                [523, 659, 784, 1047, 1319, 2093].forEach((f, i) =>
                    tone(f, { type: "triangle", dur: 2.2, vol: 0.09, delay: 0.45 + i * 0.03, attack: 0.02 }));
            }
        },
        flip(rarity) {
            tone(rarity >= 5 ? 1100 : 650, { type: "triangle", dur: 0.12, vol: 0.12 });
            if (rarity >= 5) tone(1650, { type: "triangle", dur: 0.25, vol: 0.12, delay: 0.05 });
            if (rarity === 6) tone(2200, { type: "triangle", dur: 0.4, vol: 0.1, delay: 0.1 });
        },
    };
})();

// ---------- สุ่ม ----------
const isRateUp = (food) => (RATE_UP[food.rarity] || []).includes(food.id);

// อัตรา ★6 ของครั้งถัดไป (soft pity)
function sixRate() {
    const nth = state.pity + 1;
    return Math.min(100, BASE_RATE[6] + Math.max(0, nth - SOFT_PITY) * SOFT_STEP);
}

function rollRarity() {
    const p6 = sixRate();
    let r = Math.random() * 100;
    if (r < p6) return 6;
    if (state.pity5 >= PITY5 - 1) return 5;
    r -= p6;
    if (r < BASE_RATE[5]) return 5;
    r -= BASE_RATE[5];
    // อัตรา ★6 ที่เพิ่มขึ้นหักออกจาก ★4/★3 ตามสัดส่วน
    const rest = 100 - p6 - BASE_RATE[5];
    return r < rest * BASE_RATE[4] / (BASE_RATE[4] + BASE_RATE[3]) ? 4 : 3;
}

function pickFood(rarity, avoid) {
    let pool = foods.filter((f) => f.rarity === rarity);
    const featured = RATE_UP[rarity];
    if (featured) {
        // 50/50 เรทอัป แพ้แล้วครั้งหน้าการันตี
        const key = `guarantee${rarity}`;
        const win = state[key] || Math.random() < 0.5;
        pool = pool.filter((f) => featured.includes(f.id) === win);
        state[key] = !win;
    }
    const noRepeat = pool.filter((f) => f !== avoid);
    if (noRepeat.length) pool = noRepeat;
    return pool[Math.floor(Math.random() * pool.length)];
}

// สุ่ม 1 ครั้ง + อัปเดตคลังอาหาร
function pullOne(avoid) {
    const rarity = rollRarity();
    const food = pickFood(rarity, avoid);

    state.pulls++;
    state.pity = rarity === 6 ? 0 : state.pity + 1;
    state.pity5 = rarity >= 5 ? 0 : state.pity5 + 1;

    const count = (state.inv[food.id] || 0) + 1;
    state.inv[food.id] = count;

    const result = { food, no: state.pulls, isNew: count === 1, from: null, to: null, token: 0 };
    if (count === 1) {
        result.to = 0;
    } else if (count - 1 <= MAX_TIER) {
        result.from = count - 2;
        result.to = count - 1;
    } else {
        result.token = tokenValue[rarity];
        state.tokens += result.token;
    }

    const tag = result.isNew ? "NEW" : result.token ? `+${result.token} TOKEN` : `E${result.to}`;
    state.history.unshift({ no: result.no, id: food.id, tag });
    state.history = state.history.slice(0, 60);
    return result;
}

function pullBatch(n) {
    const results = [];
    let last = state.lastId ? foodById(state.lastId) : null;
    for (let i = 0; i < n; i++) {
        const res = pullOne(last);
        last = res.food;
        results.push(res);
    }
    state.lastId = last.id;
    saveState();
    return results;
}

// ---------- แสดงผล ----------
const tierOf = (id) => Math.min((state.inv[id] || 1) - 1, MAX_TIER);

function pipsHTML(tier) {
    return `<span class="pips">${Array.from({ length: MAX_TIER }, (_, i) =>
        `<i class="${i < tier ? "on" : ""}"></i>`).join("")}</span>`;
}

function showFood(food) {
    const card = $("foodCard");
    card.dataset.rarity = food.rarity;
    $("foodImage").src = food.image;
    $("foodImage").alt = food.name;
    $("imagePlaceholder").hidden = true;
    $("foodRarity").textContent = stars(food.rarity);
    $("foodTier").hidden = false;
    $("foodTier").textContent = `E${tierOf(food.id)}`;
    $("foodCode").textContent = `ID: ${food.id}`;
    $("foodName").textContent = food.name;
    $("foodNameEn").textContent = food.en;
    $("foodDesc").textContent = food.desc;
    $("foodPrice").textContent = food.price;

    card.classList.remove("updated");
    void card.offsetWidth;
    card.classList.add("updated");
}

function renderBanner() {
    $("bannerName").textContent = BANNER_NAME;
    $("bannerRateUp").innerHTML = [...RATE_UP[6], ...RATE_UP[5]].map((id) => {
        const f = foodById(id);
        return `<span class="rateup-chip" data-rarity="${f.rarity}">
            <img src="${f.image}" alt="">${f.name} <b>${stars(f.rarity)}</b></span>`;
    }).join("");

    const rate = sixRate();
    $("bannerStats").innerHTML = `
        อัตรา ★6 ครั้งถัดไป <b class="${rate > BASE_RATE[6] ? "hot" : ""}">${rate.toFixed(0)}%</b><br>
        การันตี ★5+ ในอีก <b>${PITY5 - state.pity5}</b> ครั้ง<br>
        ★6 ครั้งถัดไป: <b>${state.guarantee6 ? "การันตีเรทอัป" : "50/50"}</b>`;
}

function renderStats() {
    $("pullCount").textContent = state.pulls;
    $("pityCount").textContent = state.pity;
    $("hardPity").textContent = HARD_PITY;
    renderBanner();
    $("tokenCount").textContent = state.tokens;
    $("soundBtn").textContent = state.sound ? "♪ ON" : "♪ OFF";
    $("soundBtn").classList.toggle("off", !state.sound);
}

function renderInventory() {
    const owned = foods.filter((f) => state.inv[f.id]).length;
    $("invOwned").textContent = owned;
    $("invTotal").textContent = foods.length;

    $("invGrid").innerHTML = foods
        .slice()
        .sort((a, b) => b.rarity - a.rarity)
        .map((f) => {
            const count = state.inv[f.id] || 0;
            if (!count) {
                return `
                <article class="inv-item locked" data-rarity="${f.rarity}">
                    ${isRateUp(f) ? `<span class="up-tag">UP</span>` : ""}
                    <div class="thumb"><img src="${f.image}" alt="" loading="lazy"></div>
                    <div class="body">
                        <h3>???</h3>
                        <p><span class="stars">${stars(f.rarity)}</span><span class="count">ยังไม่ได้รับ</span></p>
                    </div>
                </article>`;
            }
            const tier = tierOf(f.id);
            return `
            <article class="inv-item ${tier === MAX_TIER ? "maxed" : ""}" data-rarity="${f.rarity}">
                <span class="tier-badge">E${tier}</span>
                ${isRateUp(f) ? `<span class="up-tag">UP</span>` : ""}
                <div class="thumb"><img src="${f.image}" alt="${f.name}" loading="lazy"></div>
                <div class="body">
                    <h3>${f.name}</h3>
                    <p><span class="stars">${stars(f.rarity)}</span><span class="price">${f.price} ฿</span></p>
                    <p>${pipsHTML(tier)}<span class="count">×${count}</span></p>
                </div>
            </article>`;
        })
        .join("");
}

function renderHistory() {
    const list = $("historyList");
    if (state.history.length === 0) {
        list.innerHTML = `<li class="empty">ยังไม่มีประวัติการสุ่ม</li>`;
        return;
    }
    list.innerHTML = state.history.map((h) => {
        const f = foodById(h.id);
        return `
        <li data-rarity="${f.rarity}">
            <span class="no">#${String(h.no).padStart(3, "0")}</span>
            <span>${f.name}</span>
            <span class="stars">${stars(f.rarity)}</span>
            <span class="tier">${h.tag}</span>
            <span class="price">${f.price} ฿</span>
        </li>`;
    }).join("");
}

function renderAll() {
    renderStats();
    renderInventory();
    renderHistory();
}

// ---------- Gacha animation ----------
const gacha = $("gacha");
let timers = [];
let results = null;
let flags = [];

function setPhase(phase) {
    gacha.dataset.phase = phase;
    const top = topResult().food.rarity;
    gacha.className = ["gacha", phase, `r${top}`, ...flags].join(" ");
}

function setFlag(name, on) {
    flags = flags.filter((f) => f !== name);
    if (on) flags.push(name);
    gacha.classList.toggle(name, on);
}

function later(ms, fn) {
    timers.push(setTimeout(fn, ms));
}

function setColor(c) {
    gacha.style.setProperty("--rc", c);
}

function setStatus(text, progress) {
    $("gStatus").textContent = text;
    $("gProgress").style.width = progress + "%";
}

// ผลที่ดีที่สุดในรอบนี้ (ใช้กำหนดสีของ animation)
function topResult() {
    return results.reduce((best, r) => (r.food.rarity > best.food.rarity ? r : best), results[0]);
}

function makeShards(count) {
    const box = $("gShards");
    box.innerHTML = "";
    for (let i = 0; i < count; i++) {
        const s = document.createElement("i");
        s.className = "g-shard";
        s.style.setProperty("--a", `${Math.random() * 360}deg`);
        s.style.setProperty("--d", `${200 + Math.random() * 500}px`);
        box.appendChild(s);
    }
}

function makeEmbers(count) {
    const box = $("gEmbers");
    box.innerHTML = "";
    for (let i = 0; i < count; i++) {
        const e = document.createElement("i");
        e.className = "g-ember";
        e.style.left = `${Math.random() * 100}%`;
        e.style.animationDuration = `${1.6 + Math.random() * 2.4}s`;
        e.style.animationDelay = `${-Math.random() * 3}s`;
        e.style.setProperty("--dx", `${(Math.random() - 0.5) * 120}px`);
        box.appendChild(e);
    }
}

function glitch() {
    setFlag("glitch", false);
    void gacha.offsetWidth;
    setFlag("glitch", true);
    later(950, () => setFlag("glitch", false));
}

function startPull(n) {
    Sound.init();
    results = pullBatch(n);
    results.forEach((r) => { new Image().src = r.food.image; });

    const top = topResult();
    const rarity = top.food.rarity;
    const color = rarityColor[rarity];

    $("pullBtn").disabled = true;
    $("pull10Btn").disabled = true;
    flags = n > 1 ? ["multi"] : [];
    gacha.hidden = false;
    setColor("#ffffff");
    $("gMode").textContent = `×${n}`;
    $("gCoords").textContent =
        `LAT ${(Math.random() * 90).toFixed(3)} / LON ${(Math.random() * 180).toFixed(3)}`;
    $("gEmbers").innerHTML = "";
    makeShards(rarity * 10);
    prepareReveal(n);

    setPhase("p-uplink");
    setStatus("ESTABLISHING UPLINK...", 10);
    Sound.beep();
    later(250, Sound.beep);

    later(500, () => {
        setPhase("p-drop");
        setStatus(n > 1 ? "SUPPLY POD ×10 INBOUND" : "SUPPLY POD INBOUND", 30);
        Sound.drop();
    });
    later(1300, () => {
        setPhase("p-impact");
        setStatus("POD LANDED", 45);
        Sound.impact();
    });

    // ช่วงชาร์จ: ระดับสูงเริ่มที่สีม่วงแล้วค่อย "อัปเกรด" สี
    const chargeDur = rarity === 6 ? 1.8 : rarity === 5 ? 1.5 : 1;
    later(1700, () => {
        setColor(rarity >= 5 ? rarityColor[4] : color);
        setPhase("p-charge");
        setStatus("ANALYZING SIGNAL...", 60);
        makeEmbers(18 + rarity * 6);
        Sound.charge(chargeDur);
    });

    let burstAt = 2700;
    if (rarity >= 5) {
        later(2400, () => {
            setColor(rarityColor[5]);
            setFlag("warn", true);
            $("gWarningText").textContent = "WARNING // HIGH-VALUE SIGNAL DETECTED";
            setStatus("SIGNAL UPGRADED ▲", 75);
            glitch();
            Sound.upgrade();
        });
        burstAt = 3300;
    }
    if (rarity === 6) {
        later(3000, () => {
            setColor(rarityColor[6]);
            $("gWarningText").textContent = "!! ANOMALY // TOP-TIER SIGNAL !!";
            setStatus("!! SIGNAL UPGRADED ▲▲ !!", 85);
            glitch();
            Sound.upgrade();
            Sound.alarm();
        });
        later(3600, () => {
            setFlag("warn", false);
            setPhase("p-hush");
            setStatus("...", 95);
            Sound.hush();
        });
        burstAt = 4500;
    }

    later(burstAt, () => {
        setColor(color);
        setFlag("warn", false);
        setPhase("p-burst");
        setStatus("DECRYPTED", 100);
        Sound.burst(rarity);
    });
    later(burstAt + (rarity === 6 ? 700 : 450), reveal);
}

function prepareReveal(n) {
    if (n === 1) {
        const r = results[0];
        const f = r.food;
        $("gStars").innerHTML = Array.from({ length: f.rarity }, (_, i) =>
            `<span style="animation-delay:${0.1 + i * 0.12}s">★</span>`).join("");
        $("gImg").src = f.image;
        $("gName").textContent = f.name;
        $("gNameEn").textContent = f.en;
        $("gPrice").textContent = f.price;
        $("gTag").textContent = (f.rarity === 6 ? "!! LEGENDARY RATION !!" : "RATION ACQUIRED")
            + (isRateUp(f) ? " // RATE UP" : "");

        let dupe;
        if (r.isNew) {
            dupe = `<span class="new">NEW!</span>`;
        } else if (r.token) {
            dupe = `<div class="up">E${MAX_TIER} MAX <span class="arrow">▸</span> <span class="token">+${r.token} TOKEN</span></div>`;
        } else {
            dupe = `<div class="up">E${r.from} <span class="arrow">▸</span> E${r.to} ${pipsHTML(r.to)}</div>`;
        }
        $("gDupe").innerHTML = dupe;
        return;
    }

    $("gMultiGrid").innerHTML = results.map((r) => {
        const f = r.food;
        const tag = r.isNew
            ? `<span class="m-tag new">NEW</span>`
            : `<span class="m-tag">${r.token ? `+${r.token} TOKEN` : `E${r.to}`}</span>`;
        return `
        <div class="g-mcard" data-rarity="${f.rarity}">
            ${tag}
            <img src="${f.image}" alt="${f.name}">
            <div class="m-body">
                <div class="m-stars">${stars(f.rarity)}</div>
                <h4>${f.name}${isRateUp(f) ? `<span class="up-tag">UP</span>` : ""}</h4>
            </div>
        </div>`;
    }).join("");
}

// ---------- ★6 spotlight เต็มจอ ----------
let spotNext = null;

function showSpot(res, next) {
    const f = res.food;
    $("gSpotImg").src = f.image;
    $("gSpotImg").alt = f.name;
    $("gSpotName").textContent = f.name;
    $("gSpotEn").textContent = f.en + (isRateUp(f) ? " // RATE UP" : "");
    $("gSpotTag").innerHTML = res.isNew
        ? `<span class="new">NEW!</span>`
        : `<span class="up">${res.token ? `E${MAX_TIER} MAX ▸ +${res.token} TOKEN` : `E${res.from} ▸ E${res.to}`}</span>`;

    spotNext = next;
    setFlag("spot", false);
    void gacha.offsetWidth;
    setFlag("spot", true);

    Sound.burst(6);
    Sound.fanfare(6);
    for (let i = 0; i < 6; i++) Sound.star(i, 0.7 + i * 0.1);
}

function closeSpot() {
    if (!spotNext) return;
    const next = spotNext;
    spotNext = null;
    setFlag("spot", false);
    next();
}

function reveal(afterSpot = false) {
    timers.forEach(clearTimeout);
    timers = [];
    const rarity = topResult().food.rarity;
    setColor(rarityColor[rarity]);
    setFlag("warn", false);
    setFlag("glitch", false);
    if (rarity >= 5) makeEmbers(30);

    // สุ่ม 1 ครั้งได้ ★6: โชว์เต็มจอก่อน แล้วค่อยแสดงการ์ด
    if (results.length === 1 && rarity === 6 && !afterSpot) {
        setPhase("p-spot");
        setStatus("!! LEGENDARY RATION !!", 100);
        showSpot(results[0], () => reveal(true));
        return;
    }

    setPhase("p-reveal");
    setStatus("DECRYPTED", 100);

    if (results.length === 1) {
        if (!afterSpot) Sound.fanfare(rarity);
        for (let i = 0; i < rarity; i++) Sound.star(i, 0.1 + i * 0.12);
        return;
    }

    // สุ่ม 10: เปิดการ์ดทีละใบ ใบหายากจะเว้นจังหวะให้ลุ้น ★6 หยุดโชว์เต็มจอ
    Sound.fanfare(Math.min(rarity, 4));
    flipFrom(0);
}

function flipFrom(i) {
    const cards = [...$("gMultiGrid").children];
    if (i >= cards.length) {
        setFlag("done", true);
        return;
    }
    const res = results[i];
    const r = res.food.rarity;
    later(i === 0 ? 300 : r >= 5 ? 350 : 0, () => {
        cards[i].classList.add("show");
        Sound.flip(r);
        if (r === 6) later(350, () => showSpot(res, () => flipFrom(i + 1)));
        else later(r >= 5 ? 400 : 180, () => flipFrom(i + 1));
    });
}

function revealAllCards() {
    timers.forEach(clearTimeout);
    timers = [];
    spotNext = null;
    setFlag("spot", false);
    [...$("gMultiGrid").children].forEach((c) => c.classList.add("show"));
    setFlag("done", true);
}

function skip() {
    Sound.click();
    const phase = gacha.dataset.phase;
    if (phase === "p-spot") closeSpot();
    else if (phase !== "p-reveal") reveal();
    else if (results.length > 1) revealAllCards();
}

function closePull() {
    if (!results) return;
    Sound.click();
    timers.forEach(clearTimeout);
    timers = [];
    spotNext = null;
    flags = [];
    state.lastId = topResult().food.id;
    saveState();
    showFood(topResult().food);
    renderAll();
    results = null;

    gacha.hidden = true;
    gacha.className = "gacha";
    gacha.dataset.phase = "";
    $("gEmbers").innerHTML = "";
    $("pullBtn").disabled = false;
    $("pull10Btn").disabled = false;
    $("display").scrollIntoView({ behavior: "smooth" });
}

// ---------- Events ----------
$("pullBtn").addEventListener("click", () => startPull(1));
$("pull10Btn").addEventListener("click", () => startPull(10));
$("gSkip").addEventListener("click", skip);
$("gConfirm").addEventListener("click", closePull);
$("gConfirm10").addEventListener("click", closePull);
$("gSpot").addEventListener("click", () => {
    Sound.click();
    closeSpot();
});

$("soundBtn").addEventListener("click", () => {
    state.sound = !state.sound;
    saveState();
    renderStats();
    Sound.init();
    Sound.click();
});

$("resetBtn").addEventListener("click", () => { $("resetConfirm").hidden = false; });
$("resetNo").addEventListener("click", () => { $("resetConfirm").hidden = true; });
$("resetYes").addEventListener("click", () => {
    state = { ...freshState(), sound: state.sound };
    saveState();
    renderAll();
    $("resetConfirm").hidden = true;
});

document.addEventListener("keydown", (e) => {
    if (gacha.hidden || !results) return;
    if (e.key === "Escape" || e.key === "Enter") {
        e.preventDefault();
        if (spotNext) {
            return; // ★6 ปิดได้ด้วยการคลิกเท่านั้น
        } else if (gacha.dataset.phase === "p-reveal" && (results.length === 1 || flags.includes("done"))) {
            closePull();
        } else {
            skip();
        }
    }
});

// ไฮไลต์เมนูใน navbar ตามส่วนที่กำลังดู
const navLinks = document.querySelectorAll(".nav-links a");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((a) =>
            a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`));
    });
}, { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("main section").forEach((s) => observer.observe(s));

// แสดงเมนูล่าสุดที่เคยสุ่มได้ (ถ้ามี)
if (state.lastId && foodById(state.lastId)) showFood(foodById(state.lastId));
renderAll();

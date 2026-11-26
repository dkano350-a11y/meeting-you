(function(){ var A="{li}", R="Riya", N="{name}", RV="{g:Kabir|Kiara}", P="Prof. Desai", K="Mehul Kaka", C=window.MY_CHAPTERS={};
  /* ================= Chapter 3 · The Rival ================= */
  C[3] = { title: "The Rival", names: ["Sweet — Pehla Haq", "Normal — Dandiya Ki Taiyaari", "Quiet — Doori Thodi Si"], script: [
    { scene: { bg: "studio", rain: 0, tint: false } },
    { card: "Chapter 3 · The Rival" },
    { n: "Notice board ke saamne poori class ka mela laga tha. Garba Night. Pairs required. Bas teen shabd, aur sabki dhadkan tez." },
    { sprite: "riya" },
    { s: R, t: "{name}, sun. Pair ki sign-up sheet kal shaam band ho jayegi. Aur aadhi class ki nazar ek hi naam pe hai." },
    { s: N, t: "Kiske naam pe?" },
    { s: R, t: "Acting mat kar. {li} ke naam pe. Aur " + RV + " toh subah se sheet ke paas khada hai jaise koi security guard ho." },
    { s: N, t: "Toh? Mujhe kya. Main toh garba jaane ka soch bhi nahi {g:raha|rahi}." },
    { s: R, t: "Haan, aur main Miss Universe hoon. Tera chehra sab bata deta hai, {name}." },
    { sprite: null },
    { n: "Tabhi studio ka darwaza khula. " + RV + " seedha {li} ki taraf {g:gaya|gayi}, sabke saamne." },
    { s: RV, t: "{li}! Garba Night pe mere saath {g:chalogi|chaloge}? Maine do saal practice ki hai. Best Pair award pakka hamara hai." },
    { sprite: "li" },
    { n: "{li} ne ek pal " + RV + " ko dekha… aur phir meri taraf." },
    { s: A, t: "Sign-up kal tak hai na? Main soch ke {g:batati|batata} hoon." },
    { s: RV, t: "Sochna kya hai? Sabko pata hai hum dono hi best lagenge." },
    { choice: [
      { t: "“{li}, agar tum free ho… mere saath {g:chalogi|chaloge}?”", aff: 6, flag: "askedFirst", then: [
        { s: A, t: "(halki si muskaan) Tum mujhse sabke saamne pooch {g:rahe|rahi} ho?" },
        { s: N, t: "Haan. Kyunki kal tak wait kiya toh line bahut lambi ho jayegi." },
        { s: A, t: "…Theek hai. Par ek problem hai. Mujhe garba nahi aata. Bilkul nahi." },
        { s: RV, t: "(daant peeste hue) Lottery, phir pair… lagta hai aaj sab kuch tumhare naam hai, {name}." }
      ] },
      { t: "Chup-chaap sketch karte rehna, kaan udhar hi", act: true, aff: 0, then: [
        { n: "Maine pencil chalaayi, par line seedhi nahi bani. Dil kisi aur taraf tha." },
        { s: A, t: "Abhi kaam hai, " + RV + ". Baad mein baat karte hain." }
      ] },
      { t: "“Jao na {li}, tum dono sach mein best lagoge.”", aff: -4, flag: "pushedAway", then: [
        { s: A, t: "(ek second chup) …Accha. Theek hai." },
        { n: "Uski awaaz mein kuch toot gaya tha. Ya shayad mujhe aisa laga." }
      ] }
    ] },
    { sprite: null },

    { scene: { bg: "inside", rain: 0, tint: true } },
    { n: "Shaam. The Chai Spot. Mehul Kaka radio pe purane garba geet chala rahe the, aur {li} counter saaf kar {g:rahi thi|raha tha}." },
    { s: K, t: "Aao aao! Tum hi ho na woh baarish waale dost? {li} ne bataya tha… matlab, kuch nahi bataya, bas chehra bata raha tha." },
    { sprite: "li" },
    { s: A, t: "Kaka. Please." },
    { s: A, t: "(meri taraf mudke) Ek baat poochun? Mujhe sach mein garba nahi aata. Ahmedabad mein paida hoke bhi." },
    { s: N, t: "Kaise? Yahan toh bachche chalna seekhne se pehle garba seekhte hain!" },
    { s: A, t: "Har Navratri mein main yahin shift {g:karti thi|karta tha}. Log naachte the, aur main chai {g:banati thi|banata tha}." },
    { s: A, t: "Toh… tum mujhe {g:sikhaoge|sikhaogi}? Sirf basic steps. Taaki main sabke saamne gir na jaun." },
    { s: A, t: "Waise " + RV + " ne bhi poocha tha. Par main tumse seekhna {g:chahti hoon|chahta hoon}.", when: "flag:pushedAway" },
    { choice: [
      { t: "“Bilkul. Kal raat Studio 3, khaali hota hai. Riya bhi aa jayegi.”", aff: 5, flag: "teacher", then: [
        { s: A, t: "Deal. Main chai {g:laungi|launga}. Fees samjho." }
      ] },
      { t: "“Mujhe bhi zyada nahi aata… par saath mein seekh lenge.”", aff: 4, then: [
        { s: A, t: "Do log jinhe garba nahi aata. Perfect pair. (hasi)" }
      ] },
      { t: "“Garba toh skip karo, cafe mein hi baithte hain.”", aff: -3, then: [
        { s: A, t: "Hmm. Matlab tum bhi mujhe yahin chai banate dekhna {g:chahte|chahti} ho." },
        { n: "Woh hasi, par aankhein thodi bujh gayin." }
      ] }
    ] },
    { sprite: null },

    { scene: { bg: "studio", rain: 0, tint: true } },
    { n: "Raat ke nau baje. Studio 3 ki tables side mein, phone pe dhol ka beat, aur Riya — sabse strict teacher." },
    { sprite: "riya" },
    { s: R, t: "Ek, do, teen — taali! Ek, do, teen — ghoomo! {li}, tum ghoom nahi {g:rahi|rahe}, tum gir {g:rahi|rahe} ho!" },
    { s: A, t: "Main poori building ka load calculate kar {g:leti|leta} hoon. Par yeh teen taali mujhse nahi hoti." },
    { s: R, t: "{name}, tu sambhaal. Main paani lekar aati hoon. (aankh maarte hue) Dheere dheere aana." },
    { sprite: "li" },
    { n: "Riya chali gayi. Studio achanak bahut bada aur bahut khaamosh lagne laga." },
    { choice: [
      { t: "Uske haath pakad ke beat ginna: “Ek… do… teen…”", act: true, aff: 6, mem: "dandiya", then: [
        { n: "Uski ungliyaan thandi thi. Teesri koshish mein pehli baar step sahi pada, aur hum dono itni zor se hase ki dhol ka beat bhi chhoot gaya." },
        { s: A, t: "Ho gaya! {name}, ho gaya!" },
        { memShow: "dandiya" }
      ] },
      { t: "“Mere steps copy karo, dekho.”", aff: 3, then: [
        { s: A, t: "Tum itna asaan kaise bana {g:dete|deti} ho sab kuch?" }
      ] },
      { t: "Phone uthake video banana — “Yeh toh viral hoga!”", aff: -2, then: [
        { s: A, t: "{name}! Delete karo. Abhi." },
        { n: "Delete kar diya. Par uske gaal laal ho chuke the — gusse se ya sharm se, pata nahi." }
      ] }
    ] },
    { sprite: null },
    { n: "Darwaza phir khula. Is baar Riya nahi thi." },
    { s: RV, t: "Oh. Practice? Cute." },
    { s: RV, t: "{name}, tum toh naye ho. Tumhe teen taali bhi aati hai, ya {li} ko bhi neeche le jaane ka plan hai?" },
    { choice: [
      { t: "“Garba Night pe dekh lena. Abhi hum practice kar rahe hain.”", aff: 4, flag: "calmRival", then: [
        { s: RV, t: "…Dekhenge." },
        { n: "Darwaza zor se band hua. Par {li} ki aankhon mein ek chamak thi." }
      ] },
      { t: "“Tumhe itni jalan kyun ho rahi hai?”", aff: -3, then: [
        { s: RV, t: "Jalan? Tumse? (hasi) Garba Night pe pata chal jayega." },
        { s: A, t: "Bas karo dono. Please." }
      ] },
      { t: "Ignore karke music phir se chalana", act: true, aff: 2, then: [
        { n: "Dhol phir baja. Jawab ki zaroorat hi nahi padi." }
      ] }
    ] },

    { scene: { bg: "campus", rain: 0, tint: false } },
    { n: "Agli shaam. Sign-up sheet. Main dekhne {g:gaya|gayi} ki kahin kuch badal toh nahi gaya." },
    { s: "📋 Sign-up Sheet", t: "Pair 14: {li} + {name}" },
    { n: "Handwriting meri nahi thi. Woh seedhi, saaf, architect waali handwriting thi." },
    { s: "📋 Sign-up Sheet", t: "Pair 15: " + RV + " + ??? — 'Best Pair Award: dekhte hain.'" },
    { sprite: "riya" },
    { s: R, t: "Pair 14, huh? 😏 Ab bata, kya {g:pehnega|pehnegi}? {g:Kediyu|Chaniya choli}? Jo bhi ho, ready main hi karungi." },
    { n: "Garba Night. Do din baad. Aur dil abhi se dhol baja raha tha." },
    { end: true }
  ] };

  /* ================= Chapter 4 · Navratri Ki Raat ================= */
  C[4] = { title: "Navratri Ki Raat", names: ["Sweet — Teesri Taali Pe Dil", "Normal — Ek Raat, Kai Rang", "Quiet — Dhol Ke Peeche"], script: [
    { scene: { bg: "garba", rain: 0, tint: false } },
    { card: "Chapter 4 · Navratri Ki Raat" },
    { n: "Navrang ka ground pehchaan mein hi nahi aa raha tha. Hazaar lanterns, garbi ke chaaron taraf diye, aur dhol ki awaaz seene mein." },
    { sprite: "riya" },
    { s: R, t: "Ruk ruk ruk. {g:Kediyu ka collar|Dupatta} seedha. Haan. Ab perfect. {li} ka muh khula reh jayega, likh ke le le." },
    { s: N, t: "Riya, mera dil itni zor se dhadak raha hai ki dhol ki zaroorat hi nahi." },
    { s: R, t: "Accha hai. Beat pe rehna. 😌" },
    { sprite: null },
    { n: "Aur phir maine {li} ko dekha. {g:Maroon chaniya choli, baal mein mogra|Maroon kediyu, aankhon mein thodi si ghabrahat}." },
    { sprite: "li" },
    { s: A, t: "Tum… (ruk ke) tum bahut acche lag {g:rahe|rahi} ho, {name}." },
    { choice: [
      { t: "“Aur tum… sach mein, aaj saari lights tum pe hi hain.”", aff: 5, then: [
        { s: A, t: "(nazar churaate hue) Lights tumhare peeche hain. Isliye aisa lag raha hai." }
      ] },
      { t: "“Bas? 'Acche'? Riya ne do ghante lagaye hain!”", aff: 4, then: [
        { s: A, t: "(hasi) Theek hai. Bahut, bahut acche. Riya ko mera salaam." }
      ] },
      { t: "Sharma ke kuch na kehna", act: true, aff: 2, then: [
        { n: "Maine bas nazar neeche ki aur muskura {g:diya|di}. Usne bhi kuch nahi kaha. Zaroorat nahi thi." }
      ] }
    ] },
    { sprite: null },
    { n: "Garba shuru. Pehla round, doosra round. {li} ne ek bhi step galat nahi kiya — studio ki practice kaam aa gayi." },
    { s: RV, t: "(paas se guzarte hue) Not bad. Par Best Pair round abhi baaki hai." },
    { n: "Phir announcement hua: Best Pair round mein do do log ek doosre ke saath dandiya khelenge. Aur " + RV + " ne seedha {li} ki taraf haath badhaya." },
    { s: RV, t: "Ek round, {li}. Purani dosti ke naam pe. Please?" },
    { choice: [
      { t: "{li} ka haath pakad ke circle mein chale jaana", act: true, aff: 5, flag: "claimedRound", then: [
        { s: A, t: "(dheere se, " + RV + " se) Sorry. Mera pair pehle se fix hai." },
        { n: RV + " ka chehra utar gaya. Par {li} ki ungliyaan meri ungliyon mein thi." }
      ] },
      { t: "“Jao {li}, ek round. Main yahin hoon.”", aff: 2, flag: "gaveRound", then: [
        { s: A, t: "Tum pakka? …Theek hai. Sirf ek round." },
        { n: "Ek round. Teen minute. Maine teen saal jaise kaate." },
        { s: A, t: "(wapas aake) Ab baaki saari raat tumhari." }
      ] },
      { t: "“Tum log hi khel lo, mujhe thakaan ho gayi.”", aff: -4, then: [
        { s: A, t: "(ruk ke) {name}… tum sach mein {g:thake|thaki} ho, ya naraaz?" },
        { n: "Main kuch nahi {g:bola|boli}. Aur woh bina khele hi mere paas baith {g:gayi|gaya}." }
      ] }
    ] },
    { scene: { bg: "garba", rain: 0, tint: true } },
    { n: "Aakhri garba. Dhol dheema hua, gaana purana ho gaya. Teen taali. Phir ghoomna. Phir uske saamne aana." },
    { n: "Har teesri taali pe uska chehra mere saamne aata. Har baar thoda aur paas." },
    { sprite: "li" },
    { choice: [
      { t: "Teesri taali pe ruk ke uski aankhon mein dekhna", act: true, aff: 6, mem: "garba", then: [
        { n: "Saare log ghoomte rahe. Hum dono ruk gaye. Dhol, lights, log — sab dheema ho gaya." },
        { s: A, t: "Tum hamesha aise hi {g:dekhte|dekhti} ho, ya sirf aaj?" },
        { memShow: "garba" }
      ] },
      { t: "Beat pe dhyaan, step galat nahi hona chahiye", act: true, aff: 2, then: [
        { n: "Step ekdum perfect. Par jab gaana khatam hua, mujhe laga main kuch miss kar {g:gaya|gayi}." }
      ] },
      { t: "Mazaak mein usko ulti direction mein ghuma dena", act: true, aff: 3, then: [
        { s: A, t: "{name}! (hasi) Poori line ulti ho gayi!" },
        { n: "Teen log takraaye. Sab hase. Woh sabse zyada." }
      ] }
    ] },
    { sprite: null },

    { scene: { bg: "campus", rain: 0, tint: true } },
    { n: "Raat ke ek baje. Ground ke bahar, laal eeton ki seedhiyon pe. Pairon mein dard, haath mein thandi chhaas." },
    { sprite: "li" },
    { s: A, t: "Pata hai, aaj pehli baar Navratri mein main kaam nahi kar {g:rahi thi|raha tha}. Pehli baar main bhi ghoom {g:rahi thi|raha tha}." },
    { s: A, t: "Shukriya, {name}. Sach mein." },
    { s: N, t: "Shukriya kis baat ka? Tumne khud seekha." },
    { s: A, t: "Nahi. Tumhare saath seekha. Fark hai." },
    { n: "Woh thoda paas {g:aayi|aaya}. Awaaz dheemi ho gayi." },
    { s: A, t: "{name}, ek baat kehni thi. Bahut dino se. Main…" },
    { choice: [
      { t: "“Haan? Bolo na.”", aff: 4, flag: "listened", then: [
        { s: A, t: "Main tumhe…" }
      ] },
      { t: "Bas uske paas thoda sarak jaana", act: true, aff: 4, then: [
        { n: "Seedhi pe beech ki doori ek inch reh gayi. Usne gehri saans li." },
        { s: A, t: "Main tumhe…" }
      ] },
      { t: "“Ruko, pehle main kuch kehna {g:chahta|chahti} hoon!”", aff: 3, flag: "triedConfess", then: [
        { s: A, t: "Tum? Accha… tum pehle." },
        { s: N, t: "Main… main tumhe…" }
      ] }
    ] },
    { s: "📸 Flash!", t: "CLICK!" },
    { n: "Ek tez flash. Saamne seedhiyon ke neeche koi phone liye khada tha — aur palak jhapakte hi bheed mein gaayab." },
    { sprite: "riya" },
    { s: R, t: "(bhaagte hue) Tum dono yahan ho! Best Pair ka result aa gaya — Pair 15! " + RV + " ka pair jeet gaya." },
    { s: R, t: "(saans lete hue) Aur… maine kuch interrupt toh nahi kiya na?" },
    { sprite: "li" },
    { s: A, t: "(khade hote hue) Nahi. …Kuch nahi. Kal baat karte hain, {name}." },
    { sprite: null },
    { n: "Woh adhoori line raat bhar kaanon mein goonjti rahi. Aur woh flash… kisne li thi woh photo?" },
    { end: true }
  ] };

  /* ================= Chapter 5 · Galatfehmi ================= */
  C[5] = { title: "Galatfehmi", names: ["Sweet — Sach Ki Chai", "Normal — Aadhi Baat, Aadha Sach", "Quiet — Khaali Kursi"], script: [
    { scene: { bg: "campus", rain: 0, tint: false } },
    { card: "Chapter 5 · Galatfehmi" },
    { n: "Subah 7 baje. Phone pe 43 notifications. Sab ek hi page se: 'Navrang Whispers' — college ka gossip page." },
    { s: "📱 Navrang Whispers", t: "Garba Night ka Best Couple? 👀 Ek photo, hazaar sawaal. #NavrangNights" },
    { n: "Photo mein {li} aur " + RV + " the. Lanterns ke neeche, bilkul paas — jaise gale mil rahe hon." },
    { n: "Aur neeche ek comment: 'Pair 14 toh bas project ke liye tha, sab jaante hain 😂'" },
    { sprite: "riya" },
    { s: R, t: "{name}. Phone rakh. Main jaanti hoon tu kya soch {g:raha|rahi} hai." },
    { s: N, t: "Main kuch nahi soch {g:raha|rahi}. Mujhe kya fark padta hai." },
    { s: R, t: "Tu ek ghante se ek hi photo zoom kar {g:raha|rahi} hai. Fark padta hai." },
    { choice: [
      { t: "“Riya, tu sach bata. Kya yeh sach ho sakta hai?”", aff: 2, then: [
        { s: R, t: "Photo ek second ki hoti hai, {name}. Kahani poori nahi hoti. Seedha {li} se pooch." }
      ] },
      { t: "“Mujhe pehle hi samajh jaana chahiye tha.”", aff: -3, flag: "doubted", then: [
        { s: R, t: "Kya samajhna tha? Ek photo se poora insaan judge {g:karega|karegi}? Yeh tu nahi hai." }
      ] },
      { t: "Phone band karke kaam pe chale jaana", act: true, aff: 1, then: [
        { s: R, t: "Accha hai. Par yeh baat bhaagne se khatam nahi hogi." }
      ] }
    ] },
    { sprite: null },

    { scene: { bg: "studio", rain: 0, tint: false } },
    { n: "Studio 3. Project review mein do din baaki. {li} pehle se wahan {g:baithi thi|baitha tha}. Mujhe dekhte hi {g:uthi|utha}." },
    { sprite: "li" },
    { s: A, t: "{name}, woh photo — " },
    { choice: [
      { t: "“Mujhe explain karne ki zaroorat nahi. Tum free ho, jo chaho karo.”", aff: -6, flag: "coldShoulder", then: [
        { s: A, t: "…Free? Theek hai. Agar tumhe yahi lagta hai." },
        { n: "Usne apni sheets uthayin aur dusri table pe {g:chali gayi|chala gaya}. Studio achanak bahut thanda lagne laga." }
      ] },
      { t: "“Main sunna {g:chahta|chahti} hoon. Sach kya hai?”", aff: 6, flag: "heardOut", then: [
        { s: A, t: "Best Pair jeetne ke baad " + RV + " stage se utarte waqt fisal {g:gaya|gayi}. Maine pakad liya. Ek second ka kaam tha." },
        { s: A, t: "Aur jisne photo li, usne bas wahi second chuna." },
        { s: N, t: "Aur woh comment? 'Pair 14 bas project ke liye tha'?" },
        { s: A, t: "Woh comment maine nahi likha, {name}. Aur woh sach bhi nahi hai." }
      ] },
      { t: "Kuch kahe bina headphones laga lena", act: true, aff: -2, then: [
        { s: A, t: "(dheere se) Theek hai. Jab sunna ho, main yahin hoon." }
      ] }
    ] },
    { sprite: null },
    { n: "Lunch break mein " + RV + " mere paas {g:aaya|aayi}. Pehli baar bina smirk ke." },
    { s: RV, t: "Woh photo maine post nahi ki. Main tumse {g:jalta|jalti} zaroor hoon, par itna neeche nahi {g:girta|girti}." },
    { s: RV, t: "Kisi ne mujhe bhi tag kiya hai. Mere ghar waale bhi dekh rahe hain. Mazaa nahi aa raha." },
    { choice: [
      { t: "“Theek hai. Main maan {g:leta|leti} hoon.”", aff: 3, flag: "trustRival", then: [
        { s: RV, t: "(hairaan) …Thanks. Waise tum utne bure nahi ho, {name}." }
      ] },
      { t: "“Toh kisne kiya? Tumhare alawa kise fayda hai?”", aff: 0, then: [
        { s: RV, t: "Pata nahi. Par main dhoondh {g:lunga|lungi}. Mujhe bhi jawaab chahiye." }
      ] },
      { t: "“Tumhari baat ka bharosa kaise karun?”", aff: -2, then: [
        { s: RV, t: "Mat karo. Tumhari marzi." }
      ] }
    ] },

    { scene: { bg: "rain", rain: 1, tint: true } },
    { n: "Shaam. Mausam ne bina bataaye phir se boonda-baandi shuru kar di. Navratri ke baad ki aakhri baarish." },
    { s: "{li} · 📱 text", t: "Cafe mein hoon. 8 baje tak. Agar baat karni ho. Agar nahi, toh bhi theek hai." },
    { sprite: "riya" },
    { s: R, t: "Ab bhi soch {g:raha|rahi} hai? Ja na! Main teri jagah ja sakti toh kab ki chali jaati." },
    { choice: [
      { t: "Bhaag ke cafe jaana, baarish ki parwaah kiye bina", act: true, aff: 6, flag: "ranToCafe", then: [
        { n: "Main bheegte hue pahunch {g:gaya|gayi}. Darwaza khula, aur andar garam roshni." }
      ] },
      { t: "Text karna: “Kal studio mein baat karte hain.”", aff: -2, flag: "waitedTomorrow", then: [
        { s: "{li} · 📱 text", t: "Theek hai. Good night, {name}." },
        { n: "Good night. Bas do shabd. Par raat bahut lambi lagi." }
      ] },
      { t: "Riya ke saath cafe jaana, taaki akele awkward na ho", act: true, aff: 3, then: [
        { s: R, t: "Main darwaze tak. Uske aage tu akele. Deal?" },
        { n: "Deal. Riya ne mujhe andar dhakka diya aur khud bahar ruk gayi." }
      ] }
    ] },
    { scene: { bg: "inside", rain: 1, tint: true }, when: "!flag:waitedTomorrow" },
    { sprite: "li", when: "!flag:waitedTomorrow" },
    { s: A, t: "Tum {g:aaye|aayi}.", when: "!flag:waitedTomorrow" },
    { s: N, t: "Haan. Kyunki ek photo se zyada tum pe bharosa hai.", when: "!flag:waitedTomorrow" },
    { s: A, t: "(halki si muskaan) Masala chai, kam cheeni? Aaj meri taraf se.", when: "!flag:waitedTomorrow" },
    { s: K, t: "(radio dheema karte hue) Main peeche ka saamaan dekh leta hoon. Bahut saamaan hai. Ek ghanta lagega.", when: "!flag:waitedTomorrow" },
    { n: "Hum chup-chaap baithe rahe. Galatfehmi poori tarah nahi gayi thi — par chai garam thi, aur yeh shuruaat thi.", when: "!flag:waitedTomorrow" },
    { sprite: null },
    { s: "📱 Navrang Whispers", t: "Post deleted by admin." },
    { n: "Post hat gayi. Par sawaal reh gaya: woh photo kisne li thi? Aur kal se Diwali ki chhuttiyan — do hafte ghar." },
    { end: true }
  ] };

  /* ================= Chapter 6 · Diwali Vacation ================= */
  C[6] = { title: "Diwali Vacation", names: ["Sweet — Raat Ke Do Baje Wali Baatein", "Normal — Phuljhadi Aur Phone", "Quiet — Network Nahi Hai"], script: [
    { scene: { bg: "campus", rain: 0, tint: false } },
    { card: "Chapter 6 · Diwali Vacation" },
    { n: "Kalupur station. Surat ki train mein sirf 20 minute. Riya ne mera bag pakad rakha tha jaise main army mein ja {g:raha|rahi} hoon." },
    { sprite: "riya" },
    { s: R, t: "Mithai laana. Kaju katli. Aur haan — {li} ko 'Happy Diwali' bolne ka kya plan hai?" },
    { s: N, t: "Plan? Text kar {g:dunga|dungi}." },
    { s: R, t: "Text?! Do hafte ke liye tu shehar chhod {g:raha|rahi} hai aur plan sirf text hai? Oho." },
    { sprite: null },
    { n: "Tabhi platform pe kisi ne mera naam pukaara." },
    { sprite: "li" },
    { s: A, t: "(saans phooli hui) Shukr hai… train abhi gayi nahi." },
    { s: A, t: "Yeh lo. Cafe ke Mehul Kaka ne bheja hai. Thepla aur chhunda. Train mein bhookh lagegi." },
    { s: N, t: "Kaka ne bheja hai… ya tum {g:laayi|laaye} ho?" },
    { s: A, t: "(nazar churaate hue) Dono. Thepla Kaka ke. Aana mera tha." },
    { choice: [
      { t: "“Do hafte bahut lambe lagenge.”", aff: 5, then: [
        { s: A, t: "Phone hai na. Main raat ko {g:jaagti|jaagta} hoon waise bhi." }
      ] },
      { t: "“Thank you! Tum Diwali pe kahin {g:ja rahi|ja rahe} ho?”", aff: 3, then: [
        { s: A, t: "Nahi. Cafe mein Diwali rush hota hai. Aur Papa ki tabiyat bhi thodi theek nahi." },
        { n: "Usne yeh bahut halke se kaha. Itna halke se ki main pooch hi nahi {g:paaya|paayi}." }
      ] },
      { t: "“Itni takleef kyun li? Zaroorat nahi thi.”", aff: -2, then: [
        { s: A, t: "Haan. Zaroorat toh nahi thi. (halki hasi) Phir bhi aa {g:gayi|gaya}." }
      ] }
    ] },
    { n: "Train ne seeti maari. Haath hilaate hue uska chehra chhota hota gaya." },
    { sprite: null },

    { scene: { bg: "inside", rain: 0, tint: true } },
    { n: "Surat. Ghar. Mummy ke haath ka khana, chhoti behen Tanvi ka shor, aur balcony mein diyon ki line." },
    { s: "Tanvi", t: "{g:Bhaiya|Didi}, tu baar baar phone kyun dekh {g:raha|rahi} hai? Koi hai kya? Bata na!" },
    { s: "Mummy", t: "Tanvi, chhod. Pehle rangoli poori kar. {name}, beta, tu bhi aa." },
    { n: "Raat ke 12 baje. Sab so gaye. Phone ki screen jali." },
    { s: "{li} · 📱 video call", t: "Jaag {g:rahe|rahi} ho?" },
    { sprite: "li" },
    { s: A, t: "Cafe abhi band kiya. Kaka ne diye jalaye the counter pe, dekho." },
    { s: A, t: "Waise… tumhare yahan rangoli kisne banayi?" },
    { choice: [
      { t: "Camera ghuma ke apni banayi rangoli dikhana", act: true, aff: 4, then: [
        { s: A, t: "Yeh tumne banayi? Ekdum symmetric. Tum architect ban {g:jaoge|jaogi}." }
      ] },
      { t: "“Tanvi ne. Main toh bas phone dekh {g:raha tha|rahi thi}… tumhare call ka wait.”", aff: 5, then: [
        { s: A, t: "(screen pe chehra laal) Accha. Toh wait khatam." }
      ] },
      { t: "“Pata nahi, main toh sone ja {g:raha|rahi} hoon.”", aff: -3, then: [
        { s: A, t: "Oh. Sorry. Kal baat karte hain phir." },
        { n: "Call kat gaya. Aur neend phir bhi nahi aayi." }
      ] }
    ] },
    { n: "Phir baatein. Ghanton tak. Studio ke faltu jokes, Mehul Kaka ka radio, Riya ki naatak-baazi." },
    { s: A, t: "Ek baat bataun? Woh Garba Night waali seedhi… main kuch kehne {g:wali thi|wala tha}." },
    { s: N, t: "Pata hai. Riya ne bigaad diya." },
    { s: A, t: "Haan. Woh baat main phone pe nahi {g:kahungi|kahunga}. Saamne {g:kahungi|kahunga}. Jab sahi waqt hoga." },
    { s: A, t: "Abhi bas itna — Garba Night meri sabse acchi Navratri thi. Aur woh photo… sorry ki tumhe bura laga." },
    { choice: [
      { t: "“Mujhe bhi sorry. Mujhe pehle tumse poochna chahiye tha.”", aff: 5, flag: "sorrySaid", then: [
        { s: A, t: "Tumne poocha. Bas thodi der se. (muskaan) Chalta hai." }
      ] },
      { t: "“Bura toh laga tha. Par ab theek hai.”", aff: 3, then: [
        { s: A, t: "Sach bolne ke liye thanks. Sach se hi cheezein theek hoti hain." }
      ] },
      { t: "“Bhool jao. Waise bhi koi badi baat nahi thi.”", aff: 0, then: [
        { s: A, t: "Mere liye thi. (chup) Accha… chalo." }
      ] }
    ] },
    { sprite: null },

    { scene: { bg: "rain", rain: 0, tint: true } },
    { n: "Diwali ki raat. Aasman mein pataakhe. Phone pe {li} ka message." },
    { s: "{li} · 📱 photo", t: "Pol mein Dada ki haveli ke bahar maine ek diya rakha. Saalon baad. Socha tumhe dikhaun." },
    { n: "Photo mein ek band darwaza tha, lakdi ka jharokha, aur neeche ek chhota sa diya — andhere mein akela jalta hua." },
    { choice: [
      { t: "Apni balcony ka ek diya uthake video call karna: “Ab do diye hain.”", act: true, aff: 6, mem: "diya", then: [
        { sprite: "li" },
        { s: A, t: "(bahut der chup) …Do diye. Haan. Ab andhera kam lag raha hai." },
        { s: A, t: "Happy Diwali, {name}." },
        { memShow: "diya" },
        { sprite: null }
      ] },
      { t: "Text karna: “Bahut sundar hai. Happy Diwali ❤”", aff: 3, then: [
        { s: "{li} · 📱 text", t: "❤ Happy Diwali. Jaldi wapas aana." }
      ] },
      { t: "Pataakhon mein busy hoke reply bhool jaana", act: true, aff: -4, then: [
        { n: "Subah reply kiya. 'Seen 2:13 AM.' Uske baad kuch nahi aaya." }
      ] }
    ] },
    { n: "Chhuttiyan khatam hone wali thi. Aur Prof. Desai ka group email aaya." },
    { s: "📧 Prof. Desai", t: "Navrang Pavilion — Final Jury in 10 days. Winning design will be BUILT on campus. Mentors' scholarship scores depend on it." },
    { n: "Scholarship scores. Mujhe yaad aaya — {li} ne Papa ki tabiyat ki baat kitne halke se kahi thi." },
    { end: true }
  ] };

  /* ================= Chapter 7 · Wapas Campus ================= */
  C[7] = { title: "Wapas Campus", names: ["Sweet — Ek Team, Ek Sapna", "Normal — Deadline Ki Daud", "Quiet — Kaam Hi Kaam"], script: [
    { scene: { bg: "campus", rain: 0, tint: false } },
    { card: "Chapter 7 · Wapas Campus" },
    { n: "Do hafte baad Navrang. Hawa mein halki thand, aur hostel ke gate pe Riya — haath phailaaye, nazar mere bag pe." },
    { sprite: "riya" },
    { s: R, t: "Mujhe tu nahi, kaju katli chahiye thi. Accha, tu bhi chalega. (gale lagate hue)" },
    { s: R, t: "Aur suno, khabar hai. Prof. Desai ne jury ke liye bahar se ek bada architect bulaya hai. Poora college pagal ho raha hai." },
    { s: N, t: "Aur {li}? Kaisa hai sab?" },
    { s: R, t: "Kal cafe mein dekha. Aankhon ke neeche kaale ghere. Do shift kar {g:rahi|raha} hai shayad. Mujhe kuch theek nahi lag raha." },
    { sprite: null },

    { scene: { bg: "studio", rain: 0, tint: false } },
    { s: P, t: "Das din. Ek pavilion. Jo jeetega, woh design is campus pe sach mein banega — laal eeton ke beech, hamesha ke liye." },
    { s: P, t: "Aur mentors, yaad rahe: aapke scholarship scores is jury se judenge. Koi pressure nahi. (muskura ke) Thoda sa hai." },
    { sprite: "li" },
    { n: "{li} sabse peeche {g:baithi thi|baitha tha}. Chehra thaka hua, par aankhein sheet pe tiki hui." },
    { s: A, t: "{name}, main soch {g:rahi thi|raha tha}… tin ki chhat waala idea thoda risky hai. Jury ko kuch safe chahiye hoga. Concrete, seedha, saaf." },
    { s: N, t: "Par woh toh humara idea tha. Baarish ko sunne waali jagah." },
    { s: A, t: "Haan. Par is baar mujhe haarna afford nahi hai." },
    { choice: [
      { t: "“Risk hi toh isko khaas banata hai. Mujh pe bharosa rakho, hum ise strong banayenge.”", aff: 5, flag: "keptIdea", then: [
        { s: A, t: "(lambi saans) …Theek hai. Tin ki chhat rahegi. Par structure ekdum pakka hona chahiye." },
        { s: N, t: "Pakka. Promise." }
      ] },
      { t: "“Tum senior ho. Jo tum kaho.”", aff: 0, then: [
        { s: A, t: "(chup) Mujhe 'jo tum kaho' nahi chahiye tha, {name}. Mujhe tumhari raay chahiye thi." }
      ] },
      { t: "“Tum itna darr kyun {g:rahi|rahe} ho? Pehle toh {g:aisi nahi thi|aise nahi the}.”", aff: -3, then: [
        { s: A, t: "Kyunki pehle itna kuch daav pe nahi tha." },
        { n: "Usne pencil rakh di. Baat wahin ruk gayi." }
      ] }
    ] },
    { sprite: null },
    { n: "Prof. Desai ne Riya ko bhi humari team mein daal diya — 'model aur presentation mein extra haath chahiye honge.'" },
    { sprite: "riya" },
    { s: R, t: "Finally! Main official ho gayi. Ab main bhi tum dono ke beech baith sakti hoon. Legally. 😇" },
    { sprite: null },

    { scene: { bg: "inside", rain: 0, tint: true } },
    { n: "Raat ke 10 baje. The Chai Spot. {li} counter pe, haath mein ek bill, aur chehre pe woh muskaan jo aankhon tak nahi pahunchi." },
    { s: K, t: "(dheere se, mujhse) Diwali pe iske Papa hospital mein the. Kisi ko bataya nahi. Ab double shift kar {g:rahi|raha} hai. Ziddi hai bahut." },
    { sprite: "li" },
    { s: A, t: "Tum yahan? Itni raat ko? Model ka kaam kal se hai na." },
    { choice: [
      { t: "Apron uthake counter ke peeche aa jaana: “Aaj do haath zyada.”", act: true, aff: 6, flag: "sharedShift", then: [
        { s: A, t: "{name}, tumhe chai banana bhi nahi aata." },
        { s: N, t: "Toh sikha do. Garba ka hisaab barabar." },
        { n: "Us raat maine teen cup chai giraayi, do cup sahi banayi, aur {li} poore din mein pehli baar {g:hasi|hasa}." }
      ] },
      { t: "“Kaka ne bataya. Papa ke baare mein. Tumne mujhe kyun nahi bataya?”", aff: -2, then: [
        { s: A, t: "(Kaka ki taraf dekhte hue) Kaka…" },
        { s: A, t: "Kyunki yeh meri problem hai, {name}. Tumhari nahi. Please." }
      ] },
      { t: "Ek cutting chai order karke chup-chaap kone mein baith jaana", act: true, aff: 3, then: [
        { n: "Main bas wahan {g:baitha raha|baithi rahi}. Jab tak cafe band nahi hua. Jaate waqt usne bina kuch kahe meri chai ke paise wapas kar diye." }
      ] }
    ] },
    { sprite: null },

    { scene: { bg: "studio", rain: 0, tint: false } },
    { n: "Agle din. Material ki list lambi thi aur budget chhota. Balsa wood khatam, aur market Sunday ko band." },
    { s: RV, t: "(darwaze pe) Humari team ke paas balsa ki chaar sheets extra hain. Chahiye toh le lo." },
    { sprite: "riya" },
    { s: R, t: "(kaan mein) Yeh trap hai. Pakka trap hai." },
    { sprite: null },
    { choice: [
      { t: "“Thanks. Sach mein. Jury ke baad chai meri taraf se.”", aff: 4, flag: "acceptedHelp", then: [
        { s: RV, t: "(thoda hairaan) …Theek hai. Chai. Done." },
        { n: RV + " {g:chala gaya|chali gayi}. Par jaate waqt pehli baar {g:muskuraaya tha|muskuraayi thi}." }
      ] },
      { t: "“Nahi chahiye. Hum khud kar lenge.”", aff: -1, then: [
        { s: RV, t: "Tumhari marzi. Offer khula hai." }
      ] },
      { t: "“Badle mein kya chahiye?”", aff: 0, then: [
        { s: RV, t: "Kuch nahi. Bas jury mein accha competition chahiye. Jeet ka mazaa tabhi hai." }
      ] }
    ] },
    { sprite: "li" },
    { s: A, t: "Theek hai team. Plan yeh hai: model teen din mein. Aakhri raat — all-nighter. Studio 3." },
    { s: A, t: "(mujhse, dheere se) Aur {name}… kal raat ke liye thanks. Main {g:kehti|kehta} nahi, par yaad {g:rakhti|rakhta} hoon." },
    { n: "Teen din. Ek raat. Aur ek tin ki chhat jise sabke saamne baarish sunni thi." },
    { end: true }
  ] };

  /* ================= Chapter 8 · All-Nighter ================= */
  C[8] = { title: "All-Nighter", names: ["Sweet — Teen Baje Ki Roshni", "Normal — Glue, Chai Aur Hum", "Quiet — Thakaan Ki Raat"], script: [
    { scene: { bg: "studio", rain: 0, tint: true } },
    { card: "Chapter 8 · All-Nighter" },
    { n: "Raat ke 9 baje. Studio 3 mein sirf humari table ki light jal rahi thi. Cutter, glue, balsa ke tukde, aur ek thermos bhar ke chai." },
    { sprite: "riya" },
    { s: R, t: "Rules: koi sota nahi. Koi glue nahi khaata. Aur {name}, koi bhi {li} ko ghoorta nahi. Kaam pe dhyaan." },
    { s: N, t: "Main ghoor nahi {g:raha|rahi}!" },
    { s: R, t: "Haan, tu toh column ki measurement le {g:raha|rahi} hai. Uske chehre pe." },
    { sprite: null },
    { n: "Ghante bhaagte gaye. Base bana, columns khade hue. Aur phir — tin ki chhat ki baari aayi." },
    { sprite: "li" },
    { s: A, t: "Yeh curve galat hai. Paani beech mein rukega. Asli pavilion mein yeh chhat do baarish bhi nahi jhel paayegi." },
    { s: A, t: "Oh no. Shuru se banana padega. Aur time —" },
    { choice: [
      { t: "“Ruko. Chhat ko halka sa jhuka do — paani ek taraf se gire, jaise jharna.”", aff: 6, flag: "waterfall", then: [
        { s: A, t: "(sheet pe jhukte hue) Ek kinare se paani girega… aur neeche ek patthar ka kund. Baarish ki awaaz do baar — chhat pe aur kund mein." },
        { s: A, t: "{name}. Yeh brilliant hai." }
      ] },
      { t: "“Tension mat lo. Pehle chai piyo, phir sochte hain.”", aff: 4, then: [
        { s: A, t: "(cup lete hue) Tum har problem ka ilaaj chai se {g:karte|karti} ho?" },
        { s: N, t: "Ab tak toh kaam kiya hai." }
      ] },
      { t: "“Jury ko pata thodi chalega. Aise hi chhod do.”", aff: -4, then: [
        { s: A, t: "Mujhe pata chalega, {name}. Main aisi cheez nahi {g:banati|banata} jo sirf dikhne mein acchi ho." },
        { n: "Usne naya sheet nikaala. Bina mujhse kuch kahe." }
      ] }
    ] },
    { sprite: null },

    { n: "Raat ka ek baja. Riya ne haar maan li." },
    { sprite: "riya" },
    { s: R, t: "Main bench pe paanch minute aankhein band kar rahi hoon. Bas paanch. (das second mein khurraate)" },
    { sprite: null },
    { n: "Aur tabhi — khatak. Poore studio ki bijli chali gayi." },
    { s: N, t: "{li}? Kahan ho?" },
    { s: A, t: "Yahin. Tumhare bilkul paas. Hilna mat, cutter tumhare haath ke paas hai." },
    { n: "Andhere mein uski awaaz bahut paas thi. Khidki se aati chaand ki roshni, aur dono ki saansein." },
    { choice: [
      { t: "Phone ki torch jala ke model ke beech mein rakh dena", act: true, aff: 3, then: [
        { n: "Model ke andar se roshni nikli. Tin ki chhat ki parchhaai deewar pe — badi, sundar." },
        { s: A, t: "Dekho. Raat mein bhi yeh pavilion kuch keh raha hai." }
      ] },
      { t: "Andhere mein dheere se poochna: “Darr toh nahi lag raha?”", aff: 5, then: [
        { s: A, t: "Andhere se nahi. (ruk ke) Kal se lagta hai. Jury, scholarship, Papa ki dawaiyan… sab." },
        { s: A, t: "Par abhi… abhi theek hai. Pata nahi kyun." }
      ] },
      { t: "“Ghost story sunaun?”", aff: 1, then: [
        { s: A, t: "Agar tumne ek bhi ghost story sunaayi, main tumhe isi model mein glue kar {g:dungi|dunga}." }
      ] }
    ] },
    { n: "Bijli wapas aayi. Kaam phir shuru." },

    { scene: { bg: "studio", rain: 0, tint: true } },
    { n: "Raat ke teen baje. Aakhri tukda. Tin ki chhat. Do haath, ek chimta, aur saans roke hum dono." },
    { sprite: "li" },
    { s: A, t: "Dheere… dheere… haan. Wahin." },
    { n: "Chhat apni jagah baith gayi. Ek pal ke liye studio mein sannata. Phir {li} ne dheere se apna sar mere kandhe pe rakh diya." },
    { s: A, t: "Bas do minute. Phir {g:uthti|uthta} hoon." },
    { choice: [
      { t: "Hilna nahi. Use sone dena.", act: true, aff: 6, mem: "model", then: [
        { n: "Do minute, bees minute ban gaye. Main {g:hila|hili} nahi. Saamne humara model — chhoti si tin ki chhat, aur uske neeche ek chhota sa kund." },
        { n: "Neend mein usne kuch kaha. Main sun nahi {g:paaya|paayi}. Shayad mera naam tha. Shayad nahi." },
        { memShow: "model" }
      ] },
      { t: "Uske upar apni jacket daal dena aur kaam khatam karna", act: true, aff: 4, then: [
        { n: "Maine jacket daali aur aakhri column saaf kiya. Subah usne jacket lautaate hue kuch nahi kaha. Bas jacket thodi der tak pakde rakhi." }
      ] },
      { t: "“Uthiye {g:madam|sir}, kaam baaki hai!” — mazaak mein", aff: 0, then: [
        { s: A, t: "(aankh kholte hue) …Haan haan. Uth {g:gayi|gaya}. Kaam. Sahi hai." },
        { n: "Woh {g:uthi|utha}, par lamha chala gaya." }
      ] }
    ] },
    { sprite: null },

    { scene: { bg: "campus", rain: 0, tint: false } },
    { n: "Subah 6 baje. Studio ke bahar laal eeton pe pehli dhoop. Model taiyaar. Riya abhi bhi bench pe so rahi thi." },
    { sprite: "li" },
    { s: A, t: "Studio lock kar diya. Chaabi mere paas hai. 11 baje jury." },
    { s: A, t: "{name}… aaj raat jo bhi hua — model, chai, andhera — thanks. Tumhare bina yeh ban hi nahi paata." },
    { choice: [
      { t: "“Humare bina. Hum dono ke bina.”", aff: 4, then: [
        { s: A, t: "(muskaan) Haan. Humare." }
      ] },
      { t: "“Jeet jaayein, phir thanks bolna.”", aff: 2, then: [
        { s: A, t: "Deal. Par main abhi bhi bol {g:rahi|raha} hoon." }
      ] }
    ] },
    { sprite: null },
    { n: "Hostel ki taraf jaate hue maine peeche mud ke dekha. Studio 3 ki khidki ke paas koi parchhaai thi. Phir gaayab." },
    { n: "Shayad thakaan thi. Shayad nahi." },
    { end: true }
  ] };

  /* ================= Chapter 9 · Jury Day ================= */
  C[9] = { title: "Jury Day", names: ["Sweet — Jeet Humari", "Normal — Toota Column, Juda Dil", "Quiet — Jury Ke Baad"], script: [
    { scene: { bg: "studio", rain: 0, tint: false } },
    { card: "Chapter 9 · Jury Day" },
    { n: "10:15 AM. Jury mein 45 minute. {li} ne studio ka lock khola — aur wahin ruk {g:gayi|gaya}." },
    { sprite: "li" },
    { s: A, t: "Nahi. Nahi nahi nahi." },
    { n: "Model ka ek column toota hua tha. Tin ki chhat ek taraf jhuki hui. Neeche ka kund chakna-choor." },
    { s: A, t: "Lock toh tha. Chaabi mere paas thi. Kaise…?" },
    { sprite: "riya" },
    { s: R, t: "Peeche waali khidki khuli hai. Koi andar aaya tha." },
    { sprite: null },
    { n: "Darwaze pe " + RV + " khada tha. Chehra safed." },
    { s: RV, t: "Main kal raat {g:aaya tha|aayi thi}. Bas dekhne. Sab keh rahe the tumhara model bahut accha hai. Mera haath laga, column gir gaya. Aur main… {g:bhaag gaya|bhaag gayi}." },
    { s: RV, t: "Sorry. Main kuch theek karne {g:aaya|aayi} hoon. Mere paas glue gun aur extra balsa hai." },
    { choice: [
      { t: "“Sorry se kya hoga? Sabke saamne batao tumne kya kiya!”", aff: -5, flag: "shouted", then: [
        { s: RV, t: "(neeche dekhte hue) Haan. {g:Bataunga|Bataungi}. Jury ke baad." },
        { s: A, t: "{name}, ruko. Abhi chillaane ka waqt nahi hai. 40 minute hain." }
      ] },
      { t: "“40 minute hain. Glue gun do. Sab milke theek karte hain.”", aff: 7, flag: "fixedTogether", then: [
        { s: A, t: "(ek pal mujhe {g:dekhti rahi|dekhta raha}) …Haan. Riya, base. " + RV + ", column. {name}, chhat mere saath." },
        { n: "Chaar log, ek table, aur ghadi ki tik-tik." }
      ] },
      { t: "{li} ki taraf dekhna — faisla uska hai", act: true, aff: 3, then: [
        { s: A, t: "Gussa baad mein. Abhi haath chahiye. " + RV + ", glue gun lao." }
      ] }
    ] },
    { n: "10:50. Column khada hua. 10:55. Chhat apni jagah. Kund ki jagah — Riya ka chhota sa steel ka katora, upar se mitti ka rang." },
    { sprite: "riya" },
    { s: R, t: "Jugaad bhi architecture hai. Kisi ne kaha tha. Shayad maine hi." },
    { sprite: null },

    { scene: { bg: "library", rain: 0, tint: false } },
    { n: "11:00 AM. Library ke dome ke neeche jury. Prof. Desai, do professor, aur beech mein Ar. Shirin Kapadia — wahi badi architect." },
    { s: "Ar. Shirin Kapadia", t: "Pavilion number 7. Tin ki chhat, ek tarfa jhukaav, neeche ek kund. Kaun samjhayega?" },
    { sprite: "li" },
    { s: A, t: "(dheere se) {name}, tum batao. Idea tumhara tha." },
    { choice: [
      { t: "“Yeh shelter baarish se chhupaata nahi, sunaata hai. Do baar — chhat pe aur kund mein.”", aff: 6, flag: "presented", then: [
        { s: "Ar. Shirin Kapadia", t: "(pen rokte hue) Sunaata hai. Hmm. Yeh line mujhe pasand aayi." }
      ] },
      { t: "“{li} better samjha {g:sakti|sakta} hai, woh senior hai.”", aff: 1, then: [
        { s: A, t: "(ek pal ruk ke, phir aage aake) Yeh shelter baarish ko sunne ke liye hai…" },
        { n: "Usne accha samjhaya. Par jaate waqt usne kaha — 'Tumhe bolna chahiye tha.'" }
      ] }
    ] },
    { s: "Ar. Shirin Kapadia", t: "Ek sawaal. Aapke model ka yeh column baaki se naya kyun dikh raha hai?" },
    { n: "Kamre mein sannata. " + RV + " peeche khada tha." },
    { choice: [
      { t: "“Subah toot gaya tha. Hum sabne milke — " + RV + " ne bhi — dobara banaya.”", aff: 5, flag: "honestJury", then: [
        { s: "Ar. Shirin Kapadia", t: "Sach bolne ke liye shukriya. Asli site pe bhi cheezein tootti hain. Team wahi hai jo saath mein jod de." },
        { s: RV, t: "(dheere se, mujhse) …Thanks. Tumne mera naam liya, par galat tarah se nahi." }
      ] },
      { t: "“Design change kiya tha, last minute.”", aff: -2, then: [
        { s: "Ar. Shirin Kapadia", t: "Hmm. Theek hai." },
        { s: A, t: "(dheere se) Jhooth kyun bola, {name}? Hum kuch galat nahi kar rahe the." }
      ] }
    ] },
    { sprite: null },

    { scene: { bg: "campus", rain: 0, tint: false } },
    { n: "Shaam 5 baje. Notice board ke saamne phir mela. Is baar maine aankhein band kar li." },
    { s: "📌 Result", t: "Navrang Pavilion 2026 — Winner: Team 7 ({li}, {name}, Riya). Special mention: Team 3 for honesty in repair." },
    { sprite: "riya" },
    { s: R, t: "JEET GAYE! Main architect hoon! Mere katore ka design campus pe banega!" },
    { sprite: "li" },
    { n: "{li} ne kuch nahi kaha. Bas phone nikaala, ek message type kiya — 'Papa, scholarship safe hai' — aur aankhein ponchh leen." },
    { s: A, t: "{name}. Ek baat bolun?" },
    { choice: [
      { t: "Bina kuch bole gale laga lena", act: true, aff: 6, flag: "hugged", then: [
        { n: "Notice board ke saamne, poori class ke saamne. Usne bhi pakad liya. Kuch second. Kaafi second." },
        { s: A, t: "(kaan ke paas) Yahi bolna tha. Thanks ki jagah." }
      ] },
      { t: "“Bolo. Aaj sab bol sakte ho.”", aff: 4, then: [
        { s: A, t: "(muskaan) Toh suno." }
      ] },
      { t: "High-five: “Team 7, baby!”", act: true, aff: 2, then: [
        { s: A, t: "(hasi) Team 7." }
      ] }
    ] },
    { s: A, t: "Uttarayan pe pol aaoge? Dada ki haveli ki chhat. Patang udaane. Tumne ek baar poocha tha na — pol {g:dikhaogi|dikhaoge}?" },
    { n: "Haan. Library mein, baarish ki raat. Usne yaad rakha tha." },
    { end: true }
  ] };

  /* ================= Chapter 10 · Uttarayan ================= */
  C[10] = { title: "Uttarayan", names: ["Sweet — Kai Po Che, Dil Bhi", "Normal — Patang Aur Pyaar", "Quiet — Dheel De, Dheel"], script: [
    { scene: { bg: "uttarayan", rain: 0, tint: false } },
    { card: "Chapter 10 · Uttarayan" },
    { n: "14 January. Khadia ki pol. Gali itni patli ki do log saath na chal sakein, aur upar aasman itna bhara ki ek inch bhi khaali na ho." },
    { n: "Dada ki haveli ka darwaza saalon baad khula tha. Lakdi ke jharokhe, aangan, aur upar — chhat." },
    { sprite: "li" },
    { s: A, t: "Welcome to the Old Haveli. Saal mein ek din yeh zinda hoti hai. Aaj." },
    { s: A, t: "Mummy ne undhiyu banaya hai, Papa neeche aangan mein baithe hain — doctor ne seedhiyan mana ki hain. Aur yeh firki tumhari." },
    { s: N, t: "Mujhe patang udaana nahi aata." },
    { s: A, t: "(badi si muskaan) Oh. Toh ab main {g:sikhaungi|sikhaunga}. Garba ka hisaab barabar." },
    { choice: [
      { t: "“Sikhao, teacher. Main strict student hoon.”", aff: 4, then: [
        { s: A, t: "Pehla rule: dheel do, khencho mat. Patang bhi, log bhi — khinchne se bhaagte hain." }
      ] },
      { t: "“Main firki {g:pakadta|pakadti} hoon, tum udao.”", aff: 2, then: [
        { s: A, t: "Firki pakadna bhi ek kala hai. Dheel samajhni padti hai." }
      ] }
    ] },
    { n: "Pehli patang ped mein. Doosri bijli ke taar mein. Teesri — upar, bahut upar, neele aasman mein ek laal dhabba." },
    { s: A, t: "Ud rahi hai! {name}, dekho, tumhari patang ud rahi hai!" },
    { n: "Tabhi bagal ki chhat se ek peeli patang paas aayi. Pench." },
    { s: "Padosi Uncle", t: "Aye! Pench lado, bachchon!" },
    { choice: [
      { t: "Dheel dena — jaise {li} ne sikhaya", act: true, aff: 5, mem: "patang", then: [
        { n: "Dheel. Aur dheel. Peeli patang ki dor kati, aur woh hawa mein lehrati gayi." },
        { s: A, t: "KAI PO CHE!" },
        { n: "Poori pol mein awaaz goonji. {li} uchhal ke mujhse lipat {g:gayi|gaya}. Phir sharma ke peeche {g:hati|hata}." },
        { memShow: "patang" }
      ] },
      { t: "Zor se khinchna!", act: true, aff: 1, then: [
        { n: "Khatt. Meri dor kat gayi. Laal patang aasman mein lehraati door chali gayi." },
        { s: "Padosi Uncle", t: "Kai po che! Hahaha!" },
        { s: A, t: "(hasi rokte hue) Maine kaha tha — khencho mat." }
      ] },
      { t: "Firki {li} ko thama dena: “Tum lado!”", act: true, aff: 3, then: [
        { n: "Usne do second mein peeli patang kaat di. Phir mujhe dekh ke aankh maari." },
      ] }
    ] },
    { sprite: null },

    { scene: { bg: "uttarayan", rain: 0, tint: true } },
    { n: "Shaam. Aasman naarangi, phir gulaabi. Neeche aangan se undhiyu aur jalebi ki khushboo. Chaaron taraf chhaton pe log tukkal jala rahe the." },
    { s: "Papa (neeche se)", t: "{li}! Apne dost ko jalebi khilao. Aur tukkal ka dhaaga dhyaan se!" },
    { sprite: "li" },
    { s: A, t: "Papa ne pehli baar mere kisi dost ka naam yaad rakha hai. Woh tumhe pasand karte hain." },
    { n: "Usne ek kaagaz ki lantern — tukkal — jalaayi. Patang ki dor se baandhi. Aur dheere dheere woh aasman mein upar gayi, jaise ek chhota sa taara." },
    { s: A, t: "Dada kehte the, tukkal ke saath ek baat upar bhejo. Jo zubaan pe na aaye." },
    { s: A, t: "Main aaj zubaan pe laana {g:chahti hoon|chahta hoon}. Garba Night se adhoori hai." },
    { s: A, t: "{name}… main tumhe pasand {g:karti hoon|karta hoon}. Bahut. Pehli baarish se. Shayad usse bhi pehle, agar aisa ho sakta hai." },
    { choice: [
      { t: "“Main bhi. Pehli baarish se. Har din thoda zyada.”", aff: 8, flag: "together", then: [
        { n: "Tukkal upar jaata raha. Usne mera haath pakda. Is baar kisi flash ne nahi roka." },
        { s: A, t: "Toh… hum…?" },
        { s: N, t: "Hum. Haan." }
      ] },
      { t: "Kuch kahe bina uska haath pakad lena", act: true, aff: 6, flag: "together", then: [
        { n: "Shabd nahi mile. Par haath mil gaye. Aur woh samajh {g:gayi|gaya}." },
        { s: A, t: "(dheere se) Yeh 'haan' hai na?" },
        { s: N, t: "Yeh 'hamesha haan' hai." }
      ] },
      { t: "“Mujhe… thoda waqt chahiye. Sab bahut jaldi ho raha hai.”", aff: 0, flag: "slow", then: [
        { s: A, t: "(ek pal chup, phir halki muskaan) Theek hai. Dheel do, khencho mat. Maine hi sikhaya tha na." },
        { s: A, t: "Main kahin nahi ja {g:rahi|raha}, {name}." }
      ] }
    ] },
    { sprite: null },
    { n: "Neeche utarte waqt, haveli ke bahar ki deewar pe maine ek naya laal board dekha. Andhere mein aadha padha." },
    { s: "🪧 Board", t: "BIKAU HAI — Contact: Patel Estates" },
    { n: "Haveli bik rahi thi. Aur {li} ne ek baar bhi zikr nahi kiya." },
    { end: true }
  ] };

  /* ================= Chapter 11 · Raaz ================= */
  C[11] = { title: "Raaz", names: ["Sweet — Tumhare Saath, Har Haal Mein", "Normal — Aadha Bojh", "Quiet — Band Darwaze"], script: [
    { scene: { bg: "campus", rain: 0, tint: false } },
    { card: "Chapter 11 · Raaz" },
    { n: "Uttarayan ko teen din ho gaye the. Woh laal board aankhon ke saamne se hat hi nahi raha tha." },
    { sprite: "riya" },
    { s: R, t: "Tu teen din se ek hi page pe {g:atka|atki} hai. Kya hua? Pol mein kuch hua kya?" },
    { s: N, t: "Haveli bik rahi hai, Riya. Aur {li} ne mujhe kuch nahi bataya." },
    { s: R, t: "Hmm. Shayad bata nahi paa {g:rahi|raha}. Kuch log dard ko bhi chhupa ke rakhte hain, jaise koi khazana ho." },
    { sprite: null },
    { n: RV + " paas se {g:guzra, ruka, aur wapas aaya|guzri, ruki, aur wapas aayi}. Jury ke baad se hum 'hi-hello' waale ban gaye the." },
    { s: RV, t: "Pol waali haveli? Patel Estates mere mama ki firm hai. Sauda 15 March ko final hai. Buyer usse tod ke parking banayega." },
    { s: RV, t: "Sorry. Bas socha tumhe pata hona chahiye." },
    { choice: [
      { t: "Seedha cafe jaake {li} se poochna — pyaar se", act: true, aff: 5, flag: "askedGently", then: [
        { n: "Raaste bhar main shabd {g:jodta raha|jodti rahi}. Pahunch ke sab bhool {g:gaya|gayi}." }
      ] },
      { t: "Phone pe text karna: “Haveli bik rahi hai aur tumne mujhe bataya tak nahi?”", aff: -4, flag: "angryText", then: [
        { s: "{li} · 📱 text", t: "Cafe aa jao. Phone pe nahi." }
      ] },
      { t: "Intezaar karna — jab woh khud {g:batayegi|batayega}", act: true, aff: 1, then: [
        { n: "Ek din. Do din. Woh nahi {g:boli|bola}. Teesre din main khud cafe pahunch {g:gaya|gayi}." }
      ] }
    ] },

    { scene: { bg: "inside", rain: 0, tint: true } },
    { sprite: "li" },
    { s: A, t: "Tumhe pata chal gaya. (chehra padhte hue) Haan. Pata chal gaya." },
    { s: A, t: "Diwali pe Papa ko heart attack aaya tha. Surgery hui. Loan liya. Scholarship meri fees bhar deti hai, par loan nahi." },
    { s: A, t: "Haveli hi ek cheez hai jo bik sakti hai. Dada ki haveli. Jahan maine pehli baar baarish ginni seekhi thi." },
    { s: N, t: "Tumne mujhe kyun nahi bataya?" },
    { s: A, t: "Kyunki jab tum mujhe dekhte ho, mujhe lagta hai main sab sambhaal {g:sakti|sakta} hoon. Main woh nazar khona nahi {g:chahti thi|chahta tha}." },
    { choice: [
      { t: "“Mujhe tumhari takleef bhi chahiye. Sirf muskaan nahi.”", aff: 6, flag: "carry", then: [
        { s: A, t: "(aankhein bheeg gayin) …Tum aisi baatein kahan se {g:seekhte|seekhti} ho?" },
        { s: N, t: "Tumse. Tum sab kuch dil se {g:kehti|kehte} ho, bas apni baat chhod ke." }
      ] },
      { t: "“Mere paas thodi savings hai. Main help kar {g:sakta|sakti} hoon.”", aff: -1, then: [
        { s: A, t: "{name}, nahi. Please. Main tumse paise nahi le {g:sakti|sakta}. Kabhi nahi." },
        { s: A, t: "Par… shukriya. Ki tumne socha." }
      ] },
      { t: "“Ahmedabad World Heritage City hai. Pol ki haveli bachane ka koi toh raasta hoga.”", aff: 4, flag: "heritageIdea", then: [
        { s: A, t: "Papa bhi yahi kehte the. Par raaste mein paise lagte hain, aur waqt. Dono nahi hain." },
        { s: N, t: "Waqt hum nikaalenge. Paise ka raasta dhoondhenge." }
      ] }
    ] },
    { n: "Mehul Kaka ne radio dheema kiya. Phir do cup chai rakh ke chupchaap andar chale gaye." },
    { s: A, t: "Ek baat aur. Main Papa ke saamne nahi {g:roti|rota}. Mummy ke saamne bhi nahi. Bas… yahan. Abhi." },
    { choice: [
      { t: "Kuch na kehna. Bas uska haath pakde rakhna.", act: true, aff: 5, then: [
        { n: "Chai thandi ho gayi. Humne nahi pi. Bahar sadak pe gaadiyaan guzarti rahi. Uski ungliyaan dheere dheere meri ungliyon mein aaram se baith gayin." }
      ] },
      { t: "“Sab theek ho jayega. Pakka.”", aff: 2, then: [
        { s: A, t: "Tum yeh pakka nahi keh {g:sakte|sakti}." },
        { s: N, t: "Nahi keh {g:sakta|sakti}. Par main yahan {g:rahunga|rahungi}, yeh pakka keh {g:sakta|sakti} hoon." }
      ] }
    ] },
    { sprite: null },

    { scene: { bg: "library", rain: 0, tint: true } },
    { n: "Us raat library mein maine ek nayi file kholi. Naam rakha: 'Haveli — Plan B'." },
    { n: "Pol houses ki restoration grants, heritage homestays, purani havelion mein khule naye cafe aur libraries. Raat ke do baj gaye." },
    { s: "{li} · 📱 text", t: "Agle kuch din main thoda busy {g:rahungi|rahunga}. Papa, cafe, buyer ki meetings. Bura mat maanna, please." },
    { n: "'Bura mat maanna.' Teen shabd. Par unke peeche ek darwaza band hone ki awaaz thi." },
    { end: true }
  ] };

  /* ================= Chapter 12 · Doori ================= */
  C[12] = { title: "Doori", names: ["Sweet — Doori Mein Bhi Paas", "Normal — Seen, Reply Baad Mein", "Quiet — Khaali Chat"], script: [
    { scene: { bg: "studio", rain: 0, tint: false } },
    { card: "Chapter 12 · Doori" },
    { n: "Do hafte. Studio mein {li} ki kursi khaali. Chat mein sirf 'hmm', 'busy hoon', 'baad mein baat karte hain'." },
    { s: "{li} · 📱 text", t: "Sorry, aaj bhi nahi aa {g:paaungi|paaunga}. Kal pakka." },
    { n: "'Kal pakka.' Yeh chaar din pehle bhi aaya tha." },
    { sprite: "riya" },
    { s: R, t: "Tu bhi gaayab ho {g:raha|rahi} hai, pata hai? Raat ko library, din mein studio, aur beech mein phone ghoorna. Mujhse last baar kab baat ki?" },
    { s: N, t: "Riya, abhi bahut kuch chal raha hai." },
    { s: R, t: "Haan. Mere saath bhi. Par chhod, tujhe abhi sunne ka time nahi hai. (muskura ke) Main theek hoon." },
    { n: "Riya ki muskaan mein kuch adhoora tha. Main dekh {g:raha tha|rahi thi}, par us waqt samajh nahi {g:paaya|paayi}." },
    { sprite: null },
    { choice: [
      { t: "{li} ko space dena — ek chhota sa message chhod ke: “Jab mann ho, main yahin hoon.”", aff: 3, flag: "gaveSpace", then: [
        { s: "{li} · 📱 text", t: "❤ (aur kuch nahi)" },
        { n: "Ek dil. Bas. Par us dil mein ek 'thank you' chhupa tha." }
      ] },
      { t: "Lagaataar call karna jab tak woh utha na le", act: true, aff: -4, flag: "pushed", then: [
        { s: "{li} · 📱 call", t: "{name}, main buyer ke saamne {g:baithi|baitha} hoon. Please. Baad mein." },
        { n: "Call kat gaya. Aur mujhe apne aap pe gussa aaya." }
      ] },
      { t: "Cafe band hone ke waqt dabba leke pahunch jaana", act: true, aff: 5, flag: "dabba", then: [
        { n: "Raat 11 baje. Mummy ki recipe waala dal-dhokli. Dabba counter pe rakha, aur ek chit: 'Khana kha lena. Bas.'" },
        { n: "Agli subah dabba dhul ke hostel ke gate pe rakha tha. Andar ek chit: 'Kha liya. Bas. ❤'" }
      ] }
    ] },

    { scene: { bg: "campus", rain: 0, tint: true } },
    { n: "Shaam. Pavilion ki site pe — jahan humara jeeta hua design banna tha — " + RV + " baitha tha." },
    { s: RV, t: "Tum bhi pareshan lag {g:rahe|rahi} ho. {li}?" },
    { s: N, t: "Kaise pata?" },
    { s: RV, t: "Do saal pehle mere ghar mein bhi aisa hi kuch hua tha. Main sabse door {g:ho gaya tha|ho gayi thi}. Logon ko lagta tha main unse bhaag {g:raha tha|rahi thi}. Asal mein main khud ko sambhaal {g:raha tha|rahi thi}." },
    { s: RV, t: "Bas door mat jaana. Thoda peeche khade rehna. Jab woh mude, tum dikhne chahiye." },
    { choice: [
      { t: "“Thanks. Sach mein. Tum badal gaye ho.”", aff: 2, then: [
        { s: RV, t: "Jury mein tumne mera naam lekar bhi mujhe bachaya tha. Kuch toh badalna tha." , when: "flag:honestJury" },
        { s: RV, t: "Shayad. Ya shayad tumne mujhe kabhi theek se dekha nahi tha." , when: "!flag:honestJury" }
      ] },
      { t: "“Tumhe kya pata, tum toh kabhi uske dost the hi nahi.”", aff: -3, then: [
        { s: RV, t: "(uthte hue) Theek hai. Maine bas koshish ki thi." }
      ] }
    ] },

    { scene: { bg: "library", rain: 0, tint: true } },
    { n: "Raat ke do baje. Hostel ki chhat. Neend nahi. Phone vibrate hua." },
    { s: "{li} · 🎧 voice note (0:47)", t: "(halki gungunahat — Garba Night ka wahi aakhri geet) …Sorry, {name}. Main door nahi jaana {g:chahti thi|chahta tha}. Bas sab kuch itna bhaari hai ki agar tumse baat ki, toh toot {g:jaungi|jaunga}." },
    { s: "{li} · 🎧 voice note", t: "Kal buyer ke saath aakhri meeting hai. 15 March. Uske baad haveli kisi aur ki. Bas… tumhari awaaz sunni thi. Par jagaana nahi tha. Good night." },
    { choice: [
      { t: "Waise hi voice note bhejna — wahi geet gungunate hue", act: true, aff: 6, mem: "voicenote", then: [
        { s: N, t: "(besura gungunaate hue) …Main jaag {g:raha|rahi} hoon. Aur agar tum {g:tooti|toote}, toh jodne ke liye main yahin hoon." },
        { s: "{li} · 🎧 voice note (0:12)", t: "(hasi aur aansu dono) Tum bahut besure ho. …Isse sun ke so {g:jaungi|jaunga}. Shukriya." },
        { memShow: "voicenote" }
      ] },
      { t: "Turant call karna", act: true, aff: 3, then: [
        { n: "Usne uthaya. Koi kuch nahi bola. Das minute sirf saanson ki awaaz. Phir usne kaha, 'Ab neend aayegi.'" }
      ] },
      { t: "Subah reply karne ka soch ke so jaana", act: true, aff: -3, then: [
        { n: "Subah tak voice note ek purana sa lagne laga. Maine 'Good morning ❤' bheja. Reply aaya: 'Hmm.'" }
      ] }
    ] },
    { n: "Phone rakhte waqt maine Plan B waali file kholi. 15 March. Sirf teen hafte." },
    { n: "Aur us raat mujhe yaad nahi aaya ki kal 20 February tha. Riya ka birthday." },
    { end: true }
  ] };

  /* ================= Chapter 13 · Riya Ki Baat ================= */
  C[13] = { title: "Riya Ki Baat", names: ["Sweet — Dosti Zindabad", "Normal — Der Aaye, Durust Aaye", "Quiet — Ek Khaali Kursi"], script: [
    { scene: { bg: "campus", rain: 0, tint: false } },
    { card: "Chapter 13 · Riya Ki Baat" },
    { n: "21 February. Subah ki class se pehle canteen. Riya ke saamne ek adhkhaya samosa aur uske phone pe kal ki 34 'Happy Birthday' wishes." },
    { n: "Aur main 35th bhi nahi {g:tha|thi}." },
    { sprite: "riya" },
    { s: R, t: "Oh, {name}. Good morning." },
    { s: N, t: "Riya… kal… main —" },
    { s: R, t: "Koi baat nahi. Sach mein. Tu busy {g:tha|thi}. Mujhe pata hai." },
    { choice: [
      { t: "“Nahi, baat hai. Main bhool {g:gaya|gayi}. Koi excuse nahi. Sorry, Riya. Dil se.”", aff: 4, flag: "ownedIt", then: [
        { s: R, t: "(aankhein bheegti hui) …Pata hai sabse bura kya laga? Ki maine socha bhi tha ki tu bhool {g:jayega|jayegi}. Aur tu bhool {g:gaya|gayi}." }
      ] },
      { t: "“Yaar, tu jaanti hai na {li} ke saath kya chal raha hai…”", aff: -3, then: [
        { s: R, t: "Haan. Sab jaanti hoon. Pichhle teen mahine se sirf {li} ki hi baat sun rahi hoon. Mere baare mein kabhi poocha?" }
      ] }
    ] },
    { s: R, t: "Ek baat bataun? Kisi ko nahi bataya. Papa ki factory band ho gayi hai. Is semester ke baad shayad main Navrang chhod ke Rajkot wapas chali jaun." },
    { s: N, t: "Kya?! Kab se pata hai?" },
    { s: R, t: "Diwali se. Tu {li} ki haveli bacha {g:raha|rahi} hai. Main bas… apna kamra pack karne ka soch rahi hoon. (hasi, jo hasi nahi thi)" },
    { sprite: null },
    { choice: [
      { t: "Wahin baith ke poora din Riya ke saath bitaana — class bunk", act: true, aff: 2, flag: "riyaDay", then: [
        { n: "Ek din. Law Garden ka market, Manek Chowk ka sandwich, Riya ka pasandida pani-puri waala. Woh hasi. Is baar sach mein." }
      ] },
      { t: "Turant {li} aur sabko message: “Aaj raat Chai Spot. Surprise. Riya ke liye.”", act: true, aff: 3, flag: "surprise", then: [
        { n: "Teen minute mein {li} ka reply: 'Main aa {g:rahi|raha} hoon. Kaka ko {g:bolti|bolta} hoon cake banaye.' " }
      ] }
    ] },

    { scene: { bg: "inside", rain: 0, tint: true } },
    { n: "Raat 9 baje. The Chai Spot. Fairy lights, ek lopsided cake jispe 'Happy Belated Riya' likha tha — 'Belated' ki spelling galat." },
    { s: K, t: "Spelling mujhe mat dikhana. Cake dekho, cake." },
    { sprite: "li" },
    { s: A, t: "(dheere se, mujhse) Do hafte baad yahan {g:aayi|aaya} hoon. Riya ke liye. Aur tumhare liye bhi." },
    { s: RV, t: "Maine balloons {g:laaye|laayi} hain. Kisi ne kaha nahi tha, phir bhi." },
    { sprite: null },
    { n: "Darwaza khula. Riya andar aayi — aur ruk gayi." },
    { sprite: "riya" },
    { s: R, t: "Tum… sab… yeh… (cake dekh ke) 'Belaated'? Kaka!" },
    { s: K, t: "Maine kaha tha cake dekho!" },
    { s: R, t: "(hasi aur rona saath mein) Tum log pagal ho. Sab ke sab." },
    { choice: [
      { t: "Riya ko gale laga ke: “Tu kahin nahi ja rahi. Hum kuch karenge.”", act: true, aff: 4, mem: "riya", then: [
        { s: R, t: "(kandhe pe sar rakh ke) Pakka?" },
        { s: N, t: "Pakka. Tu meri pehli dost hai is shehar mein. Pehli baarish se bhi pehle." },
        { memShow: "riya" }
      ] },
      { t: "Ek selfie — sab ek frame mein", act: true, aff: 2, then: [
        { n: "Kaka ki ungli aadhi camera pe, " + RV + " ki aankhein band, Riya ka muh khula. Sabse best photo." }
      ] }
    ] },
    { sprite: null },
    { n: "Cake ke baad Riya ne {li} aur mujhe kone ki table pe kheench liya." },
    { sprite: "riya" },
    { s: R, t: "Ab meri baat suno, dono. Tum log architect ho. Ek haveli bik rahi hai. Aur tum dono kya kar rahe ho? Rona aur door hona." },
    { s: R, t: "{name} ke laptop mein ek file hai, 'Haveli — Plan B'. Maine dekh li thi. Sorry not sorry." },
    { sprite: "li" },
    { s: A, t: "Plan B? Kya hai yeh, {name}?" },
    { choice: [
      { t: "Laptop khol ke sab dikhana — heritage homestay, library-cafe, aangan mein Rain Pavilion", act: true, aff: 6, flag: "planB", then: [
        { s: N, t: "Haveli bike nahi. Saans le. Neeche library-cafe, upar homestay. Aangan mein humara pavilion — tin ki chhat, kund. Aur ek heritage grant ka form, jiski last date 31 March hai." },
        { s: A, t: "(screen ko bahut der ghoorte hue) …Tum raaton ko yeh kar {g:rahe|rahi} the?"  }
      ] },
      { t: "“Abhi kuch pakka nahi hai. Ek idea bas.”", aff: 3, then: [
        { s: A, t: "Ek idea bhi kaafi hai. Pavilion bhi ek idea se hi bana tha." }
      ] }
    ] },
    { sprite: null },
    { n: "Raat ke end mein Prof. Desai ka message aaya. Sabke group mein." },
    { s: "📧 Prof. Desai", t: "Pavilion construction starts in March. Team 7 ke liye paid student internships approved. Riya — aap site coordinator hongi. Stipend ke saath." },
    { sprite: "riya" },
    { s: R, t: "Stipend?! Matlab… main ruk sakti hoon? (phone ko ghoorte hue) MAIN RUK SAKTI HOON!" },
    { n: "Us raat The Chai Spot mein sabse zyada shor Riya ka tha. Aur sabse zyada sukoon mera." },
    { end: true }
  ] };

  /* ================= Chapter 14 · Holi Ke Rang ================= */
  C[14] = { title: "Holi Ke Rang", names: ["Sweet — Gaal Pe Pehla Rang", "Normal — Rang Barse", "Quiet — Phika Gulaal"], script: [
    { scene: { bg: "holi", rain: 0, tint: false } },
    { card: "Chapter 14 · Holi Ke Rang" },
    { n: "Holi ki subah. Navrang ka courtyard pehchaan mein nahi aa raha tha. Laal eeton pe gulaabi, peela, hara — aur hawa mein gulaal ke baadal." },
    { sprite: "riya" },
    { s: R, t: "Rule number one: safed kapde pehen ke {g:aaya|aayi} hai toh tu target hai. Aur tu safed pehen ke {g:aaya|aayi} hai. (pichkari taante hue)" },
    { n: "Paanch second mein mera safed kurta hara-neela tha." },
    { s: RV, t: "(peeche se poori balti) Holi hai!" },
    { s: N, t: RV + "! Tum bhi?!" },
    { s: RV, t: "Jury ka badla. Bas. Ab hisaab barabar. (haath badha ke) Dost?" },
    { choice: [
      { t: "Haath milaane ke bahaane mutthi bhar gulaal laga dena", act: true, aff: 3, flag: "rivalFriend", then: [
        { s: RV, t: "(hasi) Okay okay! Dost. Pakka dost." }
      ] },
      { t: "“Dost. Par agli balti meri taraf se.”", aff: 2, flag: "rivalFriend", then: [
        { s: RV, t: "Deal." }
      ] }
    ] },
    { sprite: null },
    { n: "Aur phir bheed ke beech, gulaal ke gulaabi baadal se — {li}." },
    { sprite: "li" },
    { s: A, t: "Tumhe pata hai, Holi pe pehla rang uska lagate hain jo sabse khaas ho? Pol mein yahi kehte hain." },
    { s: A, t: "Do hafte maine tumse door rehne ki koshish ki. Galti thi meri. Par tum peeche khade rahe. Jab main {g:mudi|muda}, tum wahin dikhe." },
    { choice: [
      { t: "Hatheli pe gulaabi gulaal leke dheere se uske gaal pe lagaana", act: true, aff: 6, mem: "holi", then: [
        { n: "Sab shor, sab rang ek pal ke liye ruk gaye. Uske gaal pe gulaabi. Meri ungliyaan kaanp rahi thi." },
        { s: A, t: "(apni hatheli mere gaal pe rakh ke) Ab tumhara bhi pehla rang mera." },
        { memShow: "holi" }
      ] },
      { t: "Poora packet uske sar pe khaali kar dena", act: true, aff: 3, then: [
        { s: A, t: "{name}!! (gulaabi baadal ke andar se) Tum {g:gaye|gayi}!" },
        { n: "Pichkari. Daud. Hasi. Courtyard ke do chakkar. Aur end mein hum dono ek hi rang mein." }
      ] },
      { t: "“Pehle tum. Rules tum hi {g:kehti|kehte} ho.”", aff: 2, then: [
        { s: A, t: "(halke se mere maathe pe peela tilak) Theek hai. Rules ke hisaab se." }
      ] }
    ] },
    { when: "flag:slow", choice: [
      { t: "“Uttarayan pe maine waqt maanga tha. Ab mujhe aur waqt nahi chahiye.”", aff: 6, flag: "together", then: [
        { s: A, t: "(rang bhare chehre pe badi si muskaan) Dheel di, khencha nahi… aur patang khud wapas aa gayi." },
        { n: "Usne mera haath pakda. Gulaal mein lipta hua, sabse saaf faisla." }
      ] },
      { t: "Abhi bhi kuch na kehna, bas muskurana", act: true, aff: 1, then: [
        { s: A, t: "Koi jaldi nahi, {name}. Main yahin hoon." }
      ] }
    ] },
    { sprite: null },

    { scene: { bg: "campus", rain: 0, tint: false } },
    { n: "Dopahar. Rang dhul gaye, par haathon mein abhi bhi gulaabi. Seedhiyon pe baithe, thandai ke glass ke saath." },
    { sprite: "li" },
    { s: A, t: "Kal Papa se baat ki. Plan B ke baare mein. Pehle woh chup rahe. Phir bole — 'Dada hote toh yahi karte.'" },
    { s: A, t: "Buyer ko unhone teen mahine rukne ko kaha hai. Agar 31 March tak grant ka form gaya aur shortlist hua, toh haveli nahi bikegi." },
    { s: A, t: "Bas ek problem hai. 31 March. Aur 2 April se semester exams." },
    { choice: [
      { t: "“Toh library hamari. Din mein padhai, raat mein grant. Saath mein.”", aff: 5, flag: "libraryPact", then: [
        { s: A, t: "Aur agar tum fail ho {g:gaye|gayi} toh?" },
        { s: N, t: "Toh tum padha dena. Tum senior ho na. (aankh maar ke)" }
      ] },
      { t: "“Exams pehle. Grant ka baad mein dekhenge.”", aff: -2, then: [
        { s: A, t: "Baad mein haveli nahi hogi, {name}." },
        { s: N, t: "…Haan. Sorry. Dono karenge." }
      ] },
      { t: "“Riya aur " + RV + " ko bhi le lete hain. Team 7 phir se.”", aff: 4, flag: "team7", then: [
        { s: A, t: "Team 7 plus ek. Haan. Yeh sahi hai." }
      ] }
    ] },
    { sprite: null },
    { n: "Raat ko sheeshe mein dekha — kaan ke peeche abhi bhi gulaabi rang. Maine dhoya nahi." },
    { end: true }
  ] };

  /* ================= Chapter 15 · Exam Season ================= */
  C[15] = { title: "Exam Season", names: ["Sweet — Sticky Notes Wala Pyaar", "Normal — Padhai Aur Haveli", "Quiet — Raat Bhar Ki Padhai"], script: [
    { scene: { bg: "library", rain: 0, tint: false } },
    { card: "Chapter 15 · Exam Season" },
    { n: "25 March. Library ka glass dome. Ek table pe do dher: ek taraf Structures aur History of Architecture ki kitaabein, doosri taraf haveli ke grant ka form." },
    { n: "Chhe din grant ke liye. Aath din exams ke liye. Aur neend ke liye shayad ek bhi nahi." },
    { sprite: "riya" },
    { s: R, t: "Maine time-table banaya hai. Subah aath se ek baje tak padhai. Do se chhe tak grant. Raat ko dono. Koi sawaal?" },
    { s: N, t: "Haan. Khana kab khaayenge?" },
    { s: R, t: "Kaka dabba bhej rahe hain. Thepla, chhunda, aur ek dhamki: 'Bina khaaye padhai ki toh chai band.'" },
    { s: RV, t: "Maine haveli ki saari purani photos scan kar di hain. Teen sau baarah photos. Mama ki firm ke record room se." },
    { s: R, t: RV + ", tum sach mein badal gaye ho. Ya Holi ka rang abhi tak utra nahi?", when: "flag:rivalFriend" },
    { s: R, t: RV + ", tum yahan? Matlab, thank you. Bas hairaan hoon.", when: "!flag:rivalFriend" },
    { sprite: null },
    { sprite: "li" },
    { s: A, t: "Sab log yahan hain… meri haveli ke liye. (kitaab ke peeche chehra chhupate hue) Mujhe samajh nahi aa raha kya bolun." },
    { s: A, t: "Bas ek problem hai. Form mein ek essay hai — 'Yeh ghar kyun bachna chahiye?' Main teen din se pehli line pe {g:atki|atka} hoon." },
    { choice: [
      { t: "“Pehli line main {g:likhta|likhti} hoon. Baaki tum. Jaise pavilion ki pehli line saath mein kheenchi thi.”", aff: 5, flag: "essayTogether", then: [
        { n: "Maine kaagaz pe likha: 'Is ghar ne ek bachche ko baarish ginna sikhaya tha.'" },
        { s: A, t: "(bahut der us line ko dekhte hue) …Haan. Ab baaki sab aa jayega." }
      ] },
      { t: "“Tum yeh likh {g:sakti|sakte} ho. Main bas saath {g:baitha|baithi} hoon.”", aff: 3, then: [
        { s: A, t: "Saath baithna bhi kaafi hai. (pen uthate hue) Theek hai. Ek koshish." }
      ] },
      { t: "“Essay baad mein. Pehle Structures ka syllabus khatam karte hain.”", aff: -2, then: [
        { s: A, t: "(chup-chaap form band karte hue) …Haan. Tum sahi ho. Exams bhi zaroori hain." },
        { n: "Usne form band kar diya. Par uski nazar baar baar usi taraf jaati rahi." }
      ] }
    ] },
    { sprite: null },

    { scene: { bg: "library", rain: 0, tint: true } },
    { n: "28 March. Raat ke gyaarah baje. Structures ki kitaab kholi, toh beech mein ek peela sticky note chipka tha." },
    { s: "📝 Sticky note", t: "Moment of inertia = I. Aur tum = meri neend udaane wali sabse badi problem. Formula yaad karo, mujhe nahi. — {li}" },
    { n: "Agle page pe ek aur. Phir ek aur. Har chapter mein ek peela kaagaz. Formulas, chhote doodles, aur beech beech mein dil." },
    { s: "📝 Sticky note", t: "Chapter 6 pe ruk jao. Paani piyo. Phir aage badho. Haan, yeh order hai. — Tumhari senior" },
    { choice: [
      { t: "Uski grant waali file mein apne sticky notes chipka dena — har page pe ek", act: true, aff: 6, mem: "notes", then: [
        { n: "Raat ke do baje tak maine bees sticky notes likhe. 'Yeh paragraph best hai.' 'Yahan Dada ki baat daalo.' 'Saans lo. Tum kar {g:logi|loge}.'" },
        { n: "Agli subah usne file kholi. Aur poori library ke saamne ek peela kaagaz utha ke hawa mein lehraaya." },
        { s: A, t: "(dheere se, mujhse) Tumne meri file ko ek love letter bana diya, {name}." },
        { memShow: "notes" }
      ] },
      { t: "Ek note pe likh ke wapas chipkana: “Formula yaad ho gaya. Tum nahi gaye dimaag se.”", aff: 4, then: [
        { s: A, t: "(note padh ke muskaan dabaate hue) Bahut cheesy hai. Rakh {g:rahi|raha} hoon." }
      ] },
      { t: "Notes hata ke ek taraf rakh dena, padhai pe focus", act: true, aff: 0, then: [
        { n: "Maine saare notes ek dabbe mein rakh diye. Padhai hui. Par har formula ke saath uski likhaavat yaad aati rahi." }
      ] }
    ] },

    { scene: { bg: "studio", rain: 0, tint: true } },
    { n: "31 March. Raat 11:40. Studio 3. Form ka aakhri page. Portal har do minute mein hang ho raha tha." },
    { sprite: "riya" },
    { s: R, t: "Upload phir fail! File size zyada hai. Kisne teen sau baarah photos daali hain?!" },
    { s: RV, t: "(haath uthate hue) Main. Sorry. Main compress kar {g:deta|deti} hoon. Do minute." },
    { sprite: null },
    { sprite: "li" },
    { s: A, t: "11:52. Aath minute. {name}, agar yeh nahi gaya toh —" },
    { choice: [
      { t: "Uske haath pe haath rakh ke: “Jayega. Saans lo. Hum yahin hain.”", act: true, aff: 5, then: [
        { n: "Uski kaanpti ungli ruk gayi. Ek lambi saans. Phir 'Submit'." },
        { s: "💻 Portal", t: "Application received. 11:58 PM. Reference no. AHM-HG-0412." },
        { s: A, t: "(aankhein band karke) Do minute pehle. Dada, suna aapne? Do minute pehle." }
      ] },
      { t: "Laptop le ke khud submit karna", act: true, aff: 2, then: [
        { n: "Maine jaldi jaldi fields bhari. 11:59. Submit. Hara tick." },
        { s: A, t: "(saans chhodte hue) Tumne kar diya. …Shukriya. Par agli baar button main {g:dabaungi|dabaunga}." }
      ] },
      { t: "“Ek baar portal refresh karke dekhte hain?”", aff: -3, then: [
        { n: "Refresh. Saara data gayab. Teen second ka sannaata. Phir Riya ne autosave waala draft dhoondh nikaala." },
        { s: A, t: "(kaanpti awaaz mein) 11:59 pe gaya. Ek minute pehle. Mera dil ab tak bhaag raha hai." }
      ] }
    ] },
    { sprite: null },
    { n: "Studio mein chaar log zor se chillaaye. Neeche guard uncle ne torch maari. Humne chup hone ka natak kiya, aur phir se has pade." },

    { scene: { bg: "campus", rain: 0, tint: false } },
    { n: "9 April. Aakhri paper khatam. Bahar seedhiyon pe dhoop, aur haath mein chaai ke kulhad." },
    { sprite: "li" },
    { s: A, t: "Exams gaye. Form gaya. Ab bas intezaar. Result May mein aayega." },
    { s: A, t: "Waise tumhara Structures ka paper kaisa gaya?" },
    { s: N, t: "Moment of inertia waala sawaal aaya tha. Formula yaad tha. Kisi ki likhaavat mein.", when: "mem:notes" },
    { s: N, t: "Theek gaya. Formula yaad aa gaya, aur tum bhi.", when: "!mem:notes" },
    { s: A, t: "(kandha mere kandhe se takraate hue) Main achhi teacher hoon. Maan lo." },
    { sprite: null },
    { n: "Us shaam pehli baar dhyaan diya — final year waalon ke liye farewell ka poster lag chuka tha. {li} ka aakhri semester khatam ho {g:rahi thi|raha tha}." },
    { n: "Aur mere paas ab bhi ek saal baaki tha." },
    { end: true }
  ] };

  /* ================= Chapter 16 · Offer Letter ================= */
  C[16] = { title: "Offer Letter", names: ["Sweet — Tumhari Jeet, Meri Khushi", "Normal — Ek Khat, Do Raaste", "Quiet — Chup Si Badhaai"], script: [
    { scene: { bg: "inside", rain: 0, tint: false } },
    { card: "Chapter 16 · Offer Letter" },
    { n: "12 May. The Chai Spot. Subah ke saat baje. Kaka ne shutter aadha hi uthaya tha ki {li} andar {g:daudi|dauda}, phone haath mein." },
    { sprite: "li" },
    { s: A, t: "{name}! Uth gaye? Mujhe pata tha tum yahin milenge. Dekho. Bas dekho." },
    { s: "📧 Heritage Cell, AMC", t: "Dear Applicant, your proposal 'Haveli — Plan B' has been shortlisted. Site inspection on 20 May." },
    { s: A, t: "Shortlist! Haveli abhi nahi bikegi. Papa ne buyer ko phone kar diya. Teen mahine aur." },
    { s: K, t: "(radio band karke) Shortlist? Matlab aaj sabki chai free. Bas aaj. Kal se phir paise." },
    { choice: [
      { t: "Use utha ke ek chakkar ghuma dena", act: true, aff: 5, then: [
        { s: A, t: "{name}! Kaka dekh rahe hain! (hasi mein) Neeche utaaro!" },
        { s: K, t: "Main kuch nahi dekh raha. Main toh adrak kaat raha hoon." }
      ] },
      { t: "“Maine kaha tha na. Tumne kar dikhaaya.”", aff: 4, then: [
        { s: A, t: "Humne. 'Tumne' nahi. Yeh shabd aaj se ban." }
      ] },
      { t: "“Wow. Badhaai. Abhi toh sirf shortlist hai na?”", aff: -2, then: [
        { s: A, t: "(muskaan thodi dheemi) Haan… sirf shortlist. Par mere liye bahut hai." }
      ] }
    ] },
    { s: A, t: "Ek aur mail hai. Kal raat aaya tha. Maine abhi tak kisi ko nahi dikhaaya." },
    { s: "📧 Studio Kapadia, Mumbai", t: "Dear {g:Anaya Mehta|Aarav Shah}, we are pleased to offer you the position of Junior Architect. Joining date: 1 July. — Ar. Shirin Kapadia" },
    { n: "Shirin Kapadia. Woh naam jo humare History ke textbook mein tha. Mumbai ki sabse mashhoor architects mein se ek." },
    { sprite: null },

    { scene: { bg: "campus", rain: 0, tint: false } },
    { n: "Dopahar. Campus ki seedhiyaan. Dhoop itni tez ki laal eeton se garmi utha rahi thi." },
    { sprite: "riya" },
    { s: R, t: "Studio Kapadia?! Wahi Shirin Kapadia? Jinka Bandra waala library humne first year mein copy kiya tha?" },
    { s: N, t: "Haan. Wahi. 1 July se." },
    { s: R, t: "Aur haveli ka inspection 20 May ko. Agar grant mila, toh restoration kam se kam ek saal chalega. Aur woh project {li} ke naam pe hai." },
    { s: R, t: "(ruk ke) Tune kya kaha usse jab usne dikhaaya?" },
    { choice: [
      { t: "“Kuch nahi. Pehle main khush {g:hua|hui}. Phir darr laga. Dono ek saath.”", aff: 3, flag: "honestFear", then: [
        { s: R, t: "Yeh sach hai. Yahi usse bolna. Usse sach chahiye, perfect jawab nahi." }
      ] },
      { t: "“Main use bolne {g:wala hoon|wali hoon} ki jaaye. Yeh uska sapna hai.”", aff: 4, flag: "saidGo", then: [
        { s: R, t: "Aur tera sapna? Kabhi usse bhi bata dena. Do log ek hi sapne mein reh sakte hain." }
      ] },
      { t: "“Mumbai bahut door hai, Riya. Main kya {g:karunga|karungi}?”", aff: -3, flag: "selfish", then: [
        { s: R, t: "Door? Saat ghante ki train hai, {name}. Videsh nahi. (sar pe halki chapat) Pehle uski khushi dekh, phir apna darr." }
      ] }
    ] },
    { sprite: null },
    { s: RV, t: "(paas aake) Mama ki firm ko bhi pata chal gaya. Buyer naraz hai. Par Mama ne kaha — 'Heritage Cell ke saamne kaun ladega.' Toh… tum log jeet rahe ho." },
    { s: RV, t: "Aur haan, Studio Kapadia? Woh meri dream firm thi. Main reject {g:hua tha|hui thi}. {li} ko bolna — congratulations. Dil se." },

    { scene: { bg: "library", rain: 0, tint: true } },
    { n: "Raat. Library band hone mein aadha ghanta. {li} ne apni kitaabein ek taraf ki, aur dono mail phone pe saath khol ke rakhe." },
    { sprite: "li" },
    { s: A, t: "Ek taraf Dada ki haveli. Ek saal ka kaam, Papa ke saath, apne shehar mein. Doosri taraf woh studio jiske liye maine paanch saal mehnat ki." },
    { s: A, t: "Aur dono ke beech… tum. Jo abhi ek saal aur yahin {g:rahoge|rahogi}." },
    { s: A, t: "Mujhe tumse ek seedha sawaal poochna hai. Aur mujhe seedha jawab chahiye. Tum kya {g:chahte|chahti} ho?" },
    { choice: [
      { t: "“Main {g:chahta|chahti} hoon tum woh chuno jisse tum ek saal baad bhi khush raho. Main dono mein tumhare saath hoon.”", aff: 6, flag: "bothWays", then: [
        { s: A, t: "(aankhein bheegti hui) Tumne 'ruk jao' nahi kaha. 'Jao' bhi nahi kaha. Bas… 'saath hoon'." },
        { s: N, t: "Kyunki faisla tumhara hai. Saath mera." }
      ] },
      { t: "“Sach bataun? Main {g:chahta|chahti} hoon tum ruko. Par yeh sirf meri khwahish hai, faisla tumhara.”", aff: 4, flag: "askedStay", then: [
        { s: A, t: "Shukriya, sach bolne ke liye. Isse faisla mushkil hua. Par saaf bhi." }
      ] },
      { t: "“Mumbai jao. Itna bada mauka baar baar nahi aata. Haveli toh ho hi jayegi.”", aff: 1, then: [
        { s: A, t: "'Ho hi jayegi.' (halki hasi) Tum bhi yahi soch rahe ho ki main sab sambhaal {g:lungi|lunga}." },
        { n: "Uski awaaz mein shikaayat nahi thi. Bas thakaan thi." }
      ] }
    ] },
    { s: A, t: "Inspection 20 May ko hai. Kapadia studio ko 25 May tak jawab dena hai. Paanch din." },
    { s: A, t: "(meri hatheli pe ungli se ek chhoti si chhatri banaate hue) Tab tak bas mere paas rehna. Bina sawaal ke." },
    { sprite: null },
    { n: "Library ki lights band hui. Andhere mein glass dome ke upar taare dikh rahe the — aur kahin door, pehli baar, garam hawa mein mitti ki halki si khushboo." },
    { end: true }
  ] };

  /* ================= Chapter 17 · Faisla ================= */
  C[17] = { title: "Faisla", names: ["Sweet — Saath Wala Faisla", "Normal — Dil Aur Dimaag", "Quiet — Akela Faisla"], script: [
    { scene: { bg: "uttarayan", rain: 0, tint: false } },
    { card: "Chapter 17 · Faisla" },
    { n: "20 May. Pol. Haveli ke darwaze pe Heritage Cell ki team, clipboard aur measuring tape ke saath. Chhat pe ek purani patang ab bhi atki thi." },
    { s: "Inspector Joshi", t: "Lakdi ke jharokhe original hain? Eighteen-eighty ke? (dhyaan se dekhte hue) Aur aangan mein yeh kund?" },
    { sprite: "li" },
    { s: A, t: "Haan sir. Dada isme baarish ka paani jama karte the. Hum ise wapas zinda karna chahte hain." },
    { s: "Inspector Joshi", t: "Aur yeh tin ki chhat waala sketch? Aangan mein?" },
    { s: A, t: "Rain Pavilion. Hum dono ka design. (meri taraf dekhte hue) Ek shelter jo baarish se chhupaye nahi, sunaye." },
    { choice: [
      { t: "Aage aake pavilion ka model dikhana aur samjhaana", act: true, aff: 5, flag: "pitched", then: [
        { s: N, t: "Sir, chhat ka paani jharne ki tarah kund mein girega. Purane ghar ka paani, naye design ke saath. Haveli bhi bachegi, aur kahani bhi." },
        { s: "Inspector Joshi", t: "(note karte hue) Interesting. Bahut interesting." }
      ] },
      { t: "Peeche khade rehna, {li} ko bolne dena", act: true, aff: 3, then: [
        { n: "Maine kuch nahi kaha. Bas uski taraf dekha. Usne meri nazar pakdi, aur awaaz mein aur yakeen aa gaya." }
      ] }
    ] },
    { s: "Inspector Joshi", t: "Result ek hafte mein. Par main itna kahunga — aisi files kam aati hain jismein dil dikhta ho." },
    { sprite: null },
    { n: "Team gayi. {li} ke Papa aangan mein kursi pe baithe the, haath mein Dada ki purani diary." },
    { s: "{li} ke Papa", t: "{name}, beta, idhar aao. (diary kholte hue) Iss ghar ko bachane mein tumhara bhi haath hai. Yeh main bhooloonga nahi." },
    { s: "{li} ke Papa", t: "Par ek baat. {li} ko lagta hai main chahta hoon woh ruke. Main nahi chahta woh mere liye apna sapna chhode. Tum yeh baat usse keh sakte ho? Mujhse woh nahi sunegi." },
    { choice: [
      { t: "“Uncle, aap khud kahiye. Aapki awaaz mein yeh baat zyada sach lagegi.”", aff: 5, flag: "papaTalk", then: [
        { s: "{li} ke Papa", t: "(halki muskaan) Dada bhi aise hi seedhi baat karte the. Theek hai. Aaj raat." }
      ] },
      { t: "“Ji, main bata {g:dunga|dungi}.”", aff: 2, then: [
        { s: "{li} ke Papa", t: "Shukriya, beta. Bas usse dabaav mat dena. Kisi taraf ka nahi." }
      ] }
    ] },

    { scene: { bg: "inside", rain: 0, tint: true } },
    { n: "24 May. Raat. The Chai Spot band ho chuka tha. Kaka ne chaabi {li} ko de di thi aur chale gaye the. Sirf hum do, aur fairy lights." },
    { sprite: "li" },
    { s: A, t: "Kal Papa ne mujhse baat ki. Pehli baar unhone kaha — 'Tu mere liye mat ruk.' Main bahut {g:royi|roya}. Unke saamne. Pehli baar.", when: "flag:papaTalk" },
    { s: A, t: "Grant mil gaya, {name}. Aaj dopahar mail aaya. Pura amount. Haveli bach gayi." },
    { s: N, t: "Kya?! {li}!" },
    { s: A, t: "Aur kal Kapadia studio ko jawab dena hai. Maine socha tha yeh sabse aasaan faisla hoga. Ab sabse mushkil hai." },
    { s: A, t: "Agar main jaun, haveli ka kaam koi aur {g:karegi|karega}. Agar ruku, toh shayad yeh mauka phir na mile." },
    { choice: [
      { t: "“Shirin Kapadia ko seedha likho. Sach batao. Ek saal maango. Jo log dil se kaam karte hain, woh dil ki baat samajhte hain.”", aff: 6, flag: "deferIdea", then: [
        { s: A, t: "Ek saal maangoon? Shirin Kapadia se? (hasi) Tum pagal ho." },
        { s: A, t: "(phone uthate hue) …Par yeh sabse samajhdaar pagalpan hai jo maine suna hai." }
      ] },
      { t: "“Ruk jao. Haveli tumhari kahani hai. Studio toh aur bhi milenge.”", aff: 3, then: [
        { s: A, t: "Shayad. Par 'aur bhi milenge' ka bharosa kaun dega?" }
      ] },
      { t: "“Jao. Main yahan sambhaal {g:lunga|lungi} haveli ka kaam.”", aff: 2, then: [
        { s: A, t: "(meri taraf hairaani se) Tum? Tumhara final year hai, {name}. Main tumhe apna bojh nahi {g:dungi|dunga}." }
      ] }
    ] },
    { n: "Raat ke ek baje usne mail likha. Teen baar mitaaya. Chauthi baar bheja." },
    { sprite: null },
    { n: "Phir hum dono chup-chaap counter pe baithe rahe. Kisi ne kuch nahi kaha. Kehne ki zaroorat bhi nahi thi." },

    { scene: { bg: "campus", rain: 0, tint: false } },
    { n: "26 May. Subah. Campus ke arches. {li} meri taraf {g:daudi aa rahi thi|dauda aa raha tha}, phone upar uthaaye." },
    { sprite: "li" },
    { s: "📧 Ar. Shirin Kapadia", t: "Dear {g:Anaya|Aarav}, ek architect jo apne ghar ki ek purani deewar ke liye apna pehla bada mauka chhod sakta hai, wahi doosron ke ghar dil se banayega. Haveli khatam karo. Phir Mumbai aana — darwaza khula rahega. — S.K." },
    { s: A, t: "Ek saal. Unhone ek saal de diya, {name}. Haveli bhi. Mumbai bhi. Aur…" },
    { s: A, t: "(dheere se) …aur ek saal tumhare saath. Isi shehar mein." },
    { choice: [
      { t: "“Toh agle saal ki pehli baarish bhi saath. Pakka.”", aff: 5, flag: "rainPromise", then: [
        { s: A, t: "Pakka. Aur is baar umbrella tum {g:laoge|laogi}. Maine bahut baar diya hai." }
      ] },
      { t: "Kuch kahe bina use gale laga lena, sabke saamne", act: true, aff: 5, then: [
        { n: "Arches ke neeche se guzarti Riya ne zor se seeti maari. {li} ne mujhe aur kas ke pakad liya." }
      ] },
      { t: "“Accha hua. Ab main bhi relax hoke padh {g:sakta|sakti} hoon.”", aff: -1, then: [
        { s: A, t: "(aankh ghumaate hue) Haan haan. Romance mein bhi syllabus." }
      ] }
    ] },
    { sprite: null },
    { n: "Notice board pe naya poster: 'Farewell Night — Batch of the Seniors. 30 May. Dress code: Desi.'" },
    { s: R, t: "(peeche se) {name}, farewell ki organizing team mein tera naam maine daal diya hai. Juniors hi toh karte hain. Na mat bolna." },
    { end: true }
  ] };
  /* ================= Chapter 18 · Farewell Night ================= */
  C[18] = { title: "Farewell Night", names: ["Sweet — Aakhri Gaana, Pehla Vaada", "Normal — Yaadon Ki Raat", "Quiet — Kone Wali Kursi"], script: [
    { scene: { bg: "studio", rain: 0, tint: false } },
    { card: "Chapter 18 · Farewell Night" },
    { n: "30 May. Dopahar. Studio 3 ab studio kam, godown zyada lag raha tha. Fairy lights ke gucche, genda phool ki maalayein, aur Riya ki clipboard." },
    { sprite: "riya" },
    { s: R, t: "Lights tera kaam. Slideshow " + RV + " ka. Aur seniors ke liye 'titles' — woh bhi tera. Funny hone chahiye, rulaane waale nahi." },
    { s: N, t: "Aur {li} ka title?" },
    { s: R, t: "Woh tu soch. (aankh maar ke) Main toh 'Most Likely To Lend You An Umbrella' likhti." },
    { sprite: null },
    { s: RV, t: "Slideshow ke liye photos chahiye. {li} ki koi acchi photo hai tumhare paas? (phone dekhte hue) Oh. Teen sau hain. Theek hai." },
    { choice: [
      { t: "{li} ke liye title likhna: “Woh Senior Jisne Baarish Ko Pavilion Bana Diya”", act: true, aff: 5, flag: "titleWritten", then: [
        { s: R, t: "(padh ke chup) …Yeh funny nahi hai, {name}. Yeh sundar hai. Rakh rahi hoon." }
      ] },
      { t: "Mazaakiya title: “Most Likely To Ignore Your Text, Then Bring You Thepla”", aff: 3, then: [
        { s: R, t: "(zor se haste hue) Haan! Bilkul yahi. Station waali kahani main kabhi nahi bhoolungi." }
      ] },
      { t: "“Mujhse nahi hoga. Riya, tu hi likh de.”", aff: -2, then: [
        { s: R, t: "Theek hai. Par baad mein shikaayat mat karna ki maine kya likha." }
      ] }
    ] },

    { scene: { bg: "garba", rain: 0, tint: true } },
    { n: "Raat. Courtyard mein lanterns, dhol, aur DJ ki speaker jo har teesre gaane pe khaansti thi. Seniors desi kapdon mein, juniors pasine mein." },
    { n: "Aur phir {li} {g:aayi|aaya}. {g:Gehri neeli saree mein, baalon mein mogra|Gehre neele kurte mein, kandhe pe halki si shawl}. Navy blue. Umbrella jaisa." },
    { sprite: "li" },
    { s: A, t: "Itni der se ghoor {g:rahe|rahi} ho. Kuch ajeeb lag raha hai kya?" },
    { choice: [
      { t: "“Ajeeb nahi. Bas… pehli baarish yaad aa gayi. Wahi navy blue.”", aff: 5, then: [
        { s: A, t: "(nazar churaate hue) Jaan-bujh ke pehna hai. Kisi ko yaad dilana tha." }
      ] },
      { t: "“Tum… bahut sundar {g:lag rahi|lag rahe} ho.”", aff: 4, then: [
        { s: A, t: "Seedha bol diya? Bina kisi joke ke? Aaj kuch khaas hai." }
      ] },
      { t: "“Lights theek se lagi hain na? Maine lagayi hain.”", aff: 0, then: [
        { s: A, t: "(hasi) Haan, {name}. Lights bahut acchi hain. Mere baare mein bhi kuch kahoge kabhi?" }
      ] }
    ] },
    { sprite: null },
    { n: "Slideshow shuru hua. Pehli tasveer: Studio 3, pehla din. Doosri: jury ke din toota column. Teesri: Riya ka 'Belaated' cake." },
    { n: "Phir ek photo jo maine kabhi nahi dekhi thi — library mein main kitaab pe so {g:raha tha|rahi thi}, aur {li} meri taraf dekh {g:rahi thi|raha tha}." },
    { s: RV, t: "(mic pe) Yeh photo Riya ne li thi. Main sirf delivery {g:boy|girl} hoon. Koi complain kare toh Riya se." },
    { s: R, t: "(bheed se) Koi complain nahi karega!" },
    { s: P, t: "(mic pe) Aur ab, is batch ka aakhri gaana. Jodiyon mein. Juniors, apne seniors ko vidaai dijiye." },

    { scene: { bg: "garba", rain: 0, tint: true } },
    { n: "Dhol dheema hua. Ek purana geet. Wahi jo Garba Night pe aakhri baja tha. Wahi jo uske voice note mein tha." },
    { sprite: "li" },
    { s: A, t: "Yeh gaana… kisne lagwaaya?" },
    { s: R, t: "(door se, thumbs up) Main kuch nahi jaanti!" },
    { choice: [
      { t: "Haath badhaana: “Teesri taali yaad hai?”", act: true, aff: 6, mem: "farewell", then: [
        { n: "Ek. Do. Teesri taali pe hum ruk gaye. Bilkul Garba Night ki tarah. Bas is baar kisi ne nahi roka." },
        { s: A, t: "(dheere se) Kal se main senior nahi. Bas {li}. Kya tab bhi mere saath {g:naachoge|naachogi}?" },
        { s: N, t: "Har saal. Har gaane pe. Bas taali mat bhoolna." },
        { memShow: "farewell" }
      ] },
      { t: "Saath mein dheere dheere jhoomna, bina steps ki parwaah kiye", act: true, aff: 4, then: [
        { n: "Na garba, na dandiya. Bas hum, aur ek gaana jo khatam hi nahi hona chahiye tha." }
      ] },
      { t: "“Main toh lights sambhaal {g:raha|rahi} hoon. Tum naacho.”", aff: -3, then: [
        { s: A, t: "(halki si muskaan, thodi phiki) Theek hai. Lights tumhari zimmedari." },
        { n: "Woh Riya ke saath {g:naachi|naacha}. Main switchboard ke paas {g:khada raha|khadi rahi}, aur gaana bahut lamba laga." }
      ] }
    ] },
    { sprite: null },

    { scene: { bg: "campus", rain: 0, tint: true } },
    { n: "Raat ke do baje. Sab chale gaye. Hum dono arches ke neeche seedhiyon pe. {g:Uske baalon ka mogra ab aadha bikhar chuka tha|Uski shawl ab ek kandhe se latak rahi thi}." },
    { sprite: "li" },
    { s: A, t: "Paanch saal pehle main isi seedhi pe baith ke {g:royi thi|roya tha}. Pehle din. Kisi ko nahi {g:jaanti thi|jaanta tha}." },
    { s: A, t: "Tumhe pata hai, kal se main yahan ki student nahi {g:rahungi|rahunga}. Par mujhe lag raha hai jaise yahan kuch shuru hua hai, khatam nahi." },
    { choice: [
      { t: "“Shuru hi hua hai. Tum haveli {g:bachaogi|bachaoge}, main final year khatam {g:karunga|karungi}. Aur phir… Mumbai, saath mein.”", aff: 5, flag: "mumbaiPlan", then: [
        { s: A, t: "Tum Mumbai {g:aaoge|aaogi}? Mere peeche?" },
        { s: N, t: "Tumhare peeche nahi. Tumhare saath. Fark hai." }
      ] },
      { t: "“Campus tumhe yaad karega. Main bhi.”", aff: 3, then: [
        { s: A, t: "'Main bhi' — bas itna? (hasi) Theek hai, abhi ke liye kaafi hai." }
      ] }
    ] },
    { n: "Aasman mein baadal jama ho rahe the. Hawa mein mitti ki khushboo — pehli baar is saal itni saaf." },
    { s: A, t: "Monsoon aa raha hai. Akhbaar keh raha hai ek hafte mein." },
    { sprite: null },
    { n: "Ek hafta. Pehli baarish. Aur theek ek saal. Mujhe yaad tha. Mujhe yakeen tha, use bhi yaad tha." },
    { end: true }
  ] };

  /* ================= Chapter 19 · Phir Se Baarish ================= */
  C[19] = { title: "Phir Se Baarish", names: ["Sweet — Ek Saal, Ek Chhata", "Normal — Baarish Phir Aayi", "Quiet — Boondon Ke Beech"], script: [
    { scene: { bg: "campus", rain: 0, tint: false } },
    { card: "Chapter 19 · Phir Se Baarish" },
    { n: "7 June. Navrang. Final year shuru hone se pehle ka summer workshop. Upar wahi kaale baadal jo ek saal pehle dekhe the." },
    { sprite: "riya" },
    { s: R, t: "Aaj ki date yaad hai? (meri aankhon mein dekhte hue) Haan, yaad hai. Tera chehra phir se sab bata raha hai." },
    { s: R, t: "Aur suna hai aaj shaam baarish aa rahi hai. Pehli. Bas bata rahi hoon. (bina kuch aur bole chali gayi)" },
    { sprite: null },
    { n: "Baag mein ek chhoti si dukaan thi. Maine wahan se kuch khareeda. Navy blue. Bilkul waisa hi." },
    { choice: [
      { t: "Naya navy umbrella khareedna, aur ek chhota tag baandhna: “Is baar meri baari.”", act: true, aff: 5, flag: "boughtUmbrella", then: [
        { n: "Dukaanwale uncle ne poocha, 'Gift hai?' Maine kaha, 'Wapsi hai. Ek saal purani.'" }
      ] },
      { t: "Kaka ko phone karke shaam ki chai book karna — kone wali table", aff: 3, flag: "bookedTable", then: [
        { s: K, t: "(phone pe) Kone wali table? Woh toh roz tumhari hi hai. Aaj usme do kursiyaan aur ek candle. Baaki main kuch nahi poochunga." }
      ] },
      { t: "Kuch plan na karna, jo hoga dekha jayega", act: true, aff: 0, then: [
        { n: "Plan nahi banaya. Par poore din aasman ko dekhta {g:raha|rahi}, jaise koi train ka intezaar kar raha ho." }
      ] }
    ] },

    { scene: { bg: "rain", rain: 3, tint: false } },
    { rain: 3 },
    { n: "Shaam paanch baje. Dhadaam. Baarish. Bilkul ek saal pehle jaisi. Main {g:bhaagta hua|bhaagti hui} The Chai Spot ke shade ke neeche ruk {g:gaya|gayi}." },
    { n: "Aur wahan, shade ke neeche, bheegti hui sketchbook pakde — {li}. Bina umbrella ke." },
    { sprite: "li" },
    { s: A, t: "Mera umbrella… main ghar bhool {g:aayi|aaya}. Jaan-bujh ke. (bheege baalon ke peeche se muskaan) Dekhna tha tum kya {g:karte|karti} ho." },
    { s: A, t: "Ek saal pehle maine kaha tha — sketchbook andar rakho. Paper kharab ho jayega. Yaad hai?" },
    { choice: [
      { t: "Navy umbrella khol ke uske upar karna: “Sketchbook andar rakho. Paper kharab ho jayega.”", act: true, aff: 6, mem: "chhata", then: [
        { s: A, t: "(hasi aur aansu dono, baarish mein pata nahi kya kya) …Tumne mera dialogue chura liya." },
        { s: N, t: "Ek saal se yaad kar {g:raha tha|rahi thi}. Bas sahi baarish ka intezaar tha." },
        { memShow: "chhata" }
      ] },
      { t: "Apni jacket uske sar pe rakh dena", act: true, aff: 4, then: [
        { s: A, t: "Ab tum bheeg {g:rahe|rahi} ho. Yeh toh ulta ho gaya." },
        { s: N, t: "Ek saal pehle tumne apna umbrella mujhe diya tha. Ab hisaab barabar." }
      ] },
      { t: "“Andar chalo, jaldi. Bimaar pad {g:jaogi|jaoge}.”", aff: 1, then: [
        { s: A, t: "(thodi si hasi) Practical {name}. Theek hai, andar." }
      ] }
    ] },

    { scene: { bg: "inside", rain: 1, tint: true } },
    { n: "Andar wahi fairy lights. Wahi kitaabein. Kaka ne bina pooche do masala chai rakh di. Kam cheeni." },
    { s: K, t: "Ek saal pehle tum dono yahin baithe the. Main tab bhi kuch nahi bola tha. Aaj bhi nahi bolunga. (radio ki awaaz badha ke andar chale gaye)" },
    { sprite: "li" },
    { s: A, t: "Ek saal. Lagta hai jaise kal ki baat hai. Aur jaise das saal ho gaye." },

    { when: "!flag:together", choice: [
      { t: "“Ek saal se ek baat adhoori hai. Uttarayan pe maine waqt maanga tha. Aaj main jawab {g:dena chahta|dena chahti} hoon. Main tumse pyaar {g:karta|karti} hoon, {li}.”", aff: 8, flag: "together", then: [
        { s: A, t: "(chai ka cup neeche rakhte hue, bahut dheere) Maine kaha tha na — dheel do, khencho mat. Patang khud wapas aati hai." },
        { s: A, t: "Main bhi, {name}. Pehli baarish se. Aur aaj ki baarish se aur zyada." },
        { n: "Bahar baarish tez ho gayi. Andar sab kuch bahut shaant tha." }
      ] },
      { t: "Sketchbook ka aakhri page kholke dikhaana — uska sketch, neeche likha: “Haan.”", act: true, aff: 7, flag: "together", then: [
        { s: A, t: "(page ko chhoote hue) Yeh… main hoon? Aur 'Haan'?" },
        { s: N, t: "Uttarayan pe jo sawaal tumne poocha tha. Jawab ek saal se is page pe likha hai. Bas dikhane ki himmat aaj aayi." },
        { s: A, t: "(aankhein bheegti hui) Toh ab… hum?" },
        { s: N, t: "Hum. Hamesha." }
      ] }
    ] },
    { when: "flag:together", choice: [
      { t: "“Pehli baarish ki anniversary mubarak. Agle saal bhi yahin. Har saal yahin.”", aff: 6, then: [
        { s: A, t: "Har saal? Chahe hum Mumbai mein ho, ya kahin bhi?" },
        { s: N, t: "Har saal. Kaka ki chai ke liye toh main train bhi pakad {g:lunga|lungi}." }
      ] },
      { t: "Uski hatheli pe ungli se ek chhoti si chhatri banaana", act: true, aff: 5, then: [
        { s: A, t: "(hasi rokte hue) Yeh meri trick hai. Chor." },
        { s: N, t: "Ek saal mein tumse bahut kuch seekha hai." }
      ] }
    ] },
    { sprite: null },

    { scene: { bg: "rain", rain: 1, tint: true } },
    { n: "Raat aath baje. Baarish dheemi. Hum dono ek navy chhate ke neeche, laal eeton waali sadak pe, hostel ki taraf." },
    { sprite: "li" },
    { s: A, t: "Kal convocation ka mail aaya. 15 June. Mummy-Papa aa rahe hain. Aur… Papa ne kaha hai, tumhe bhi bulaun. Family table pe." },
    { s: A, t: "Aur ek aur baat. Mujhe convocation mein speech deni hai. Batch ki taraf se. Abhi tak ek line bhi nahi likhi." },
    { choice: [
      { t: "“Pehli line main {g:dunga|dungi}? Woh bhi tradition ban gaya hai ab.”", aff: 4, flag: "speechHelp", then: [
        { s: A, t: "Nahi. Is baar pehli line mere paas hai. Bas tum sunne aana. Pehli row mein." }
      ] },
      { t: "“Tum jo bhi {g:kahogi|kahoge}, sab ro denge. Main sabse pehle.”", aff: 3, then: [
        { s: A, t: "Tum sach mein ro {g:doge|dogi}? (hasi) Mujhe dekhna hai." }
      ] }
    ] },
    { sprite: null },
    { n: "Hostel ke gate pe usne mudke dekha. Ek saal pehle bhi aise hi dekha tha. Fark sirf itna tha — is baar main bhi ruk ke wapas dekh {g:raha tha|rahi thi}." },
    { end: true }
  ] };

  /* ================= Chapter 20 · Meeting You ================= */
  C[20] = { title: "Meeting You", names: ["Sweet", "Normal", "Quiet"], script: [
    { scene: { bg: "convocation", rain: 0, tint: false } },
    { card: "Chapter 20 · Meeting You" },
    { n: "15 June. Navrang ka bada courtyard. Kaale gown, udte hue caps, aur parents jo apne phones ke saath stage ki taraf daud rahe the." },
    { sprite: "riya" },
    { s: R, t: "Pehli row. Maine do kursiyaan reserve ki hain. Ek tere liye, ek tissue box ke liye. (box thamaate hue) Bharosa rakh, kaam aayega." },
    { s: R, t: "Aur suno, " + RV + " ne stage ki lights ka setup kiya hai. {g:Kehta|Kehti} hai, 'Speech ke time spotlight perfect hogi.' Pata nahi kya plan hai sabka." },
    { sprite: null },
    { n: "{li} ke Mummy-Papa meri bagal mein baithe. Papa ki aankhon mein ek aisi chamak thi jo maine hospital waali kahaniyon mein kabhi nahi suni thi." },
    { s: "{li} ke Papa", t: "{name}, beta. Aaj pehli baar haveli ki chaabi maine {li} ko di. Subah. Usne kaha, 'Aadhi chaabi {name} ki hai.' (muskaate hue) Mujhe samajh nahi aaya, par accha laga." },
    { choice: [
      { t: "“Uncle, aadhi chaabi ka matlab hai aadha kaam bhi. Main poori mehnat {g:karunga|karungi}.”", aff: 4, then: [
        { s: "{li} ke Papa", t: "Mehnat toh tum karte ho, yeh dikhta hai. Bas usse khush rakhna. Wahi sabse bada kaam hai." }
      ] },
      { t: "Bas muskura ke sar jhukaana", act: true, aff: 3, then: [
        { s: "{li} ki Mummy", t: "(Papa se dheere se) Dekha? Sharma {g:gaya|gayi}. Bilkul tumhari tarah, jab tum mere ghar aaye the." }
      ] }
    ] },

    { scene: { bg: "convocation", rain: 0, tint: true } },
    { s: P, t: "(mic pe) Aur ab, batch ki taraf se ek shabd. {g:Anaya Mehta|Aarav Shah}, Gold Medal, Studio Kapadia {g:ki|ke} future architect, aur — mere hisaab se — is college ki sabse ziddi student." },
    { sprite: "li" },
    { s: A, t: "(mic pe, kaagaz haath mein, phir kaagaz neeche rakhte hue) Maine speech likhi thi. Par sach kahun toh woh bahut boring thi." },
    { s: A, t: "Architecture mein hum sikhte hain ki building ek jagah hoti hai jahan log milte hain. Darwaze, aangan, seedhiyaan. Milne ki jagahein." },
    { s: A, t: "Paanch saal maine buildings ke baare mein padha. Par jo sabse important design maine is campus mein dekha, woh ek chhota sa shade tha. The Chai Spot ke bahar. Ek baarish waali shaam." },
    { s: A, t: "Wahan maine ek {g:ladke|ladki} ko dekha jo apni sketchbook bachaane ke liye khud bheeg {g:raha tha|rahi thi}. Aur maine socha — yeh insaan cheezon ko waise dekhta hai jaise woh ho sakti hain." },
    { s: A, t: "Toh agar aap mujhse poochein ki in paanch saalon mein maine sabse best kya design kiya… (meri taraf dekhte hue) …toh mera jawab hai: kuch nahi. Sabse best cheez design nahi hui. Bas ho gayi." },
    { s: A, t: "Meeting you." },
    { n: "Ek pal sannaata. Phir taaliyan. Riya ki seeti. " + RV + " ki spotlight seedha pehli row pe. Aur tissue box, sach mein, kaam aa gaya." },
    { memGet: "meetingyou" },
    { set: "together" },
    { sprite: null },

    { scene: { bg: "rain", rain: 1, tint: true } },
    { rain: 1 },
    { n: "Shaam. Ceremony ke baad. Halki boonda-baandi. The Chai Spot ke shade ke neeche, ek gown aur ek navy chhata." },
    { sprite: "li" },
    { s: A, t: "Speech kaisi thi? Sach bolna. Main 'theek thi' sun ke naraaz {g:hoongi|hoonga}." },
    { choice: [
      { t: "“Mere liye ab tak ki sabse acchi line. Meeting you. Bas itna kehna tha: mere liye bhi.”", aff: 6, then: [
        { s: A, t: "(maathe se mera maatha chhoote hue) Toh hum dono ka design ek hi hai." }
      ] },
      { t: "Kuch kehne ki jagah use kas ke gale lagana", act: true, aff: 5, then: [
        { s: A, t: "(dheere se, kandhe pe) Yeh jawab sabse accha tha." }
      ] },
      { t: "“Theek thi.” (phir zor se has dena)", aff: 3, then: [
        { s: A, t: "{name}!! (umbrella se halke se maarte hue) Tum… tum sach mein besure aur bure dono ho." }
      ] }
    ] },
    { s: A, t: "Ek saal haveli. Ek saal tumhara final year. Phir Mumbai. Uske baad… dekhte hain?" },
    { s: N, t: "Dekhte hain. Saath mein." },
    { decide: true },
    { sprite: null },

    { scene: { bg: "keyart", rain: 1.5, tint: true } },
    { n: "Epilogue." },
    { n: "Us saal haveli ke aangan mein pehli baar kund mein baarish ka paani bhara. Tin ki chhat pe boondein bajti rahi. Aur {li} ne apne Dada ki diary mein ek naya page likha.", when: "flag:endTrue" },
    { n: "Uske upar likha tha: 'Meeting You — ek kahani, jo hamesha chalegi.' Neeche do naam. Aur ek chhoti si chhatri ka doodle.", when: "flag:endTrue" },
    { s: A, t: "Hamesha ke liye, {name}. Har baarish mein. Har shehar mein. Promise?", when: "flag:endTrue" },
    { s: N, t: "Promise. Pehli baarish se. Aakhri tak.", when: "flag:endTrue" },
    { n: "Final year mein har Sunday {li} haveli se dabba leke hostel {g:aati|aata}. Har Monday main khaali dabbe mein ek sticky note wapas {g:bhejta|bhejti}.", when: "flag:endSweet" },
    { n: "Ek chhata, do dil, aur Riya ka group chat jiska naam usne rakha: 'Inko Koi Rokho'.", when: "flag:endSweet" },
    { s: A, t: "Ek chhata kaafi hai na? Hum dono ke liye?", when: "flag:endSweet" },
    { s: N, t: "Ek chhata. Aur tum. Bas.", when: "flag:endSweet" },
    { n: "Kabhi kabhi hum ladte bhi. Deadlines pe, chai mein cheeni pe, Mumbai ke kiraaye pe. Par har shaam kisi ek ka message aata: 'Chai Spot?'", when: "flag:endNormal" },
    { n: "Aur har baar jawab ek hi hota: 'Aa {g:raha|rahi} hoon.'", when: "flag:endNormal" },
    { s: A, t: "Phir se saath. Har baar. Theek hai na?", when: "flag:endNormal" },
    { s: N, t: "Har baar. Bina sharton ke.", when: "flag:endNormal" },
    { n: "Humari kahani tez nahi chali. Na filmon jaisi. Dheere dheere, chai ke cups aur chhoti chhoti baaton mein bani.", when: "flag:endQuiet" },
    { n: "Par jab bhi baarish aati, hum dono bina bole The Chai Spot ke shade ke neeche mil jaate. Jaise kisi ne pehle se tay kar rakha ho.", when: "flag:endQuiet" },
    { s: A, t: "Dheere dheere hi sahi. Par saath saath, haan?", when: "flag:endQuiet" },
    { s: N, t: "Saath saath. Yahi toh sabse accha hai.", when: "flag:endQuiet" },
    { sprite: null },
    { n: "Season 1 yahin khatam hota hai. Par baarish kabhi poori tarah rukti nahi…" },
    { end: true }
  ] };
  /* ================= Season 2 · Chapter 1 · Naya Shehar ================= */
  C[21] = { title: "Naya Shehar", names: ["Sweet — Naya Shehar, Wahi Haath", "Normal — Mumbai Meri Jaan", "Quiet — Bheed Mein Akele"], script: [
    { scene: { bg: "marine", rain: 1, tint: false } },
    { card: "2 Saal Baad…" },
    { card: "Season 2 · Chapter 1 · Naya Shehar" },
    { n: "Do saal. Ek haveli jo ab saans leti hai. Ek degree jo ab deewar pe tangi hai. Aur ek shehar jo kabhi sota nahi." },
    { n: "Mumbai. Dadar station. Subah saat baje. Haath mein do suitcase, kandhe pe sketchbook, aur upar se July ki baarish." },
    { s: N, t: "Saat ghante ki train, aur yahan utarte hi baarish. Mumbai ne bhi welcome ka tareeka Navrang se seekha hai kya?" },
    { n: "Bheed mein se ek navy blue chhata upar utha. Phir hila. Jaise koi jhanda ho." },
    { sprite: "li" },
    { s: A, t: "{name}! Idhar! Nahi, idhar! Arre, mere chhate ko dekho, mujhe nahi!" },
    { n: "Ek saal se {li} Mumbai mein thi. Haveli ka kaam khatam karke Studio Kapadia nahi, Fort ke Heritage Trust mein. Purani buildings ki doctor, jaise woh khud kehti {g:thi|tha}." },
    { s: A, t: "Ek saal video call pe. Aaj finally saamne. (chhata mere sar pe karte hue) Sketchbook andar rakho. Paper kharab ho jayega." },
    { choice: [
      { t: "“Yeh line ab copyright ho chuki hai. Royalty dena padega.” — aur use gale laga lena", act: true, aff: 5, flag: "naya", then: [
        { s: A, t: "(kandhe pe sar rakh ke) Royalty mein vada pav chalega? Bas wahi afford hai." },
        { n: "Platform ki bheed humare chaaron taraf se guzarti rahi. Kisi ne dhyaan nahi diya. Mumbai mein koi dhyaan nahi deta. Yahi sabse accha tha." },
      ] },
      { t: "“Ek saal mein tum bilkul Mumbaikar lag {g:rahi|rahe} ho.”", aff: 3, then: [
        { s: A, t: "Local mein khade khade sona seekh liya hai. Bas itna hi badla hai. Baaki main wahi {li} hoon." }
      ] },
      { t: "“Pehle suitcase pakdo, haath toot raha hai.”", aff: 0, then: [
        { s: A, t: "(hasi) Romantic reunion ke liye shukriya. Do, ek main {g:leti|leta} hoon." }
      ] }
    ] },
    { sprite: null },

    { scene: { bg: "office", rain: 0, tint: false } },
    { n: "Agle din. Lower Parel. Studio Kapadia. Kaanch ki khidkiyon ke bahar samundar, andar models aur khamoshi." },
    { n: "Final year mein haveli ke Rain Pavilion ne ek award jeeta tha. Usi portfolio ko dekh ke Shirin Kapadia ne mujhe call kiya tha." },
    { s: "Shirin Kapadia", t: "{name}. Rain Pavilion waale {name}. (chashma utaarte hue) Tumhare portfolio mein ek line thi — 'Shelter jo baarish se chhupaye nahi, sunaye.' Wahi line tumhe yahan laayi hai." },
    { s: "Shirin Kapadia", t: "Aur {li} ko mera salaam kehna. Maine kaha tha darwaza khula rahega. Woh kisi aur raaste chali gayi, par uska portfolio mere studio mein aa gaya." },
    { s: "Shirin Kapadia", t: "Yeh {g:Meher|Vihaan} hai. Teen mahine se yahan hai. Tumhe sab dikha {g:degi|dega}. Aur tum dono ek hi project pe ho." },
    { s: "{g:Meher|Vihaan}", t: "Hi. Welcome, rookie. Coffee machine wahan hai, printer ka jam theek karna seekh lo, aur Shirin Ma'am ke saamne 'I think' mat bolna. Woh 'I know' sunna chahti hain." },
    { choice: [
      { t: "“Thanks. Aur koi tip? Main jaldi seekh {g:leta|leti} hoon.”", aff: 3, flag: "politeMV", then: [
        { s: "{g:Meher|Vihaan}", t: "(thoda hairaan) Hmm. Polite rookie. Rare species. Theek hai, lunch pe baaki tips." }
      ] },
      { t: "“Main rookie nahi, Rain Pavilion waala {name} hoon.” (muskaan ke saath)", aff: 2, flag: "cockyMV", then: [
        { s: "{g:Meher|Vihaan}", t: "(aankh uthate hue) Oho. Award waale. Dekhte hain pehli deadline pe award kitna kaam aata hai." }
      ] },
      { t: "Bas sar hilaana aur desk dhoondhna", act: true, aff: 0, then: [
        { n: "Pehla din. Chupchaap. Desk pe ek khaali sheet aur khidki ke bahar ek anjaan shehar." }
      ] }
    ] },
    { n: "Din bhar emails, site drawings, aur ek printer jo sach mein har aadhe ghante mein jam hota tha." },

    { scene: { bg: "marine", rain: 1.5, tint: true } },
    { rain: 1.5 },
    { n: "Shaam. Marine Drive. Lehrein deewar se takraa ke upar uchhal rahi thi. Hum dono ek hi chhate ke neeche, haath mein garam bhutta." },
    { sprite: "li" },
    { s: A, t: "Toh? Pehla din? Shirin Kapadia ne kya kaha? {g:Meher|Vihaan} kaun hai? Sab batao. Har detail." },
    { s: N, t: "Pehle tum batao, itna interrogation kyun?" },
    { s: A, t: "Kyunki ek saal tumhari har baat phone pe suni hai. Ab saamne sunni hai. Aur chehra bhi dekhna hai." },
    { choice: [
      { t: "Sab kuch batana — printer se lekar {g:Meher|Vihaan} ki 'rookie' tak, aur uske chehre ke reactions dekhna", act: true, aff: 5, then: [
        { s: A, t: "'Rookie'? (hasi) Mujhe {g:woh|woh} pasand aayega. Koi toh tumhe zameen pe rakhega." },
        { s: A, t: "Waise… {g:woh|woh} cute hai kya? Bas pooch {g:rahi|raha} hoon. Architecture ki research ke liye." }
      ] },
      { t: "“Sab theek tha. Tum batao, Trust ka kaam kaisa chal raha hai?”", aff: 3, then: [
        { s: A, t: "Fort mein ek 1890 ki library hai, uski chhat tapak rahi hai. Main roz usse baatein {g:karti|karta} hoon. Woh jawab nahi deti, par sunti hai." }
      ] }
    ] },
    { s: A, t: "Waise ek baat aur. Aaj Mummy ka phone aaya tha." },
    { n: "Uski awaaz badal gayi. Woh awaaz jo kuch bahut zaroori kehne se pehle aati thi." },
    { s: A, t: "Unhone kaha… Papa chahte hain ki ab hum dono ki families mil lein. Theek se. Ek din, ek ghar mein." },
    { n: "Tabhi meri jeb mein phone vibrate hua." },
    { s: "Mummy · 📱 text", t: "Beta, {li} ke Papa ka phone aaya tha. Bahut acche insaan lage. Agle mahine Ahmedabad chalein? Tumhare Papa ne haan bol diya hai. 🙂" },
    { s: "Tanvi · 📱 text", t: "{g:BHAIYA|DIDI}!!! Families milne wali hain?!?! Main aa rahi hoon. Main sab bataungi. SAB. 😈" },
    { sprite: null },
    { n: "Ek lehar deewar se takraayi. Humare chhate pe namkeen boondein giri. Hum dono ne ek doosre ko dekha." },
    { s: A, t: "(dheere se) Toh… hum taiyaar hain?" },
    { n: "Mumbai mein mera pehla din. Aur shayad zindagi ka sabse bada mahina shuru hone wala tha." },
    { end: true }
  ] };

  /* ================= Season 2 · Chapter 2 · Pehli Salary ================= */
  C[22] = { title: "Pehli Salary", names: ["Sweet — Pehli Salary, Pehla Tohfa", "Normal — Kharche Aur Khushiyan", "Quiet — Account Mein Paise, Dil Mein Thakaan"], script: [
    { scene: { bg: "office", rain: 0, tint: false } },
    { card: "Season 2 · Chapter 2 · Pehli Salary" },
    { n: "31 July. Shaam 6:04. Phone pe ek SMS. Ek number jo maine zindagi mein pehli baar apne naam ke aage dekha." },
    { s: "📱 Bank", t: "Your a/c XX4417 is credited with INR 38,000.00. Salary — Studio Kapadia." },
    { s: "{g:Meher|Vihaan}", t: "(kursi ghuma ke) Pehli salary? Tumhara chehra bata raha hai. Pehli salary ka rule pata hai? Aadhi ghar, aadhi khaane pe, aur kuch bhi bachaane ka sochna mat." },
    { s: "{g:Meher|Vihaan}", t: "Main apni pehli salary mein Mummy ke liye ek washing machine {g:laayi thi|laaya tha}. Unhone teen din tak use chhua nahi. Bas dekhti rahi." },
    { choice: [
      { t: "“Yeh bahut pyaari baat hai. Tum dikhte ho utne sakht nahi ho.”", aff: 3, flag: "mvFriend", then: [
        { s: "{g:Meher|Vihaan}", t: "(nazar churaate hue) Kisi ko mat batana. Office mein meri image hai." }
      ] },
      { t: "“Toh party kab de {g:rahi|rahe} ho? Teen mahine purani salary hai tumhari.”", aff: 2, then: [
        { s: "{g:Meher|Vihaan}", t: "Rookie ko party chahiye? Pehle printer theek karo. Phir dekhenge." }
      ] }
    ] },
    { s: "Shirin Kapadia", t: "(paas se guzarte hue) Pehli salary mubarak, {name}. Ek salah — pehli salary se kuch aisa khareedo jo das saal baad bhi yaad rahe. Main apni se ek drafting pen {g:layi thi|layi thi}. Abhi bhi chalti hai." },

    { scene: { bg: "marine", rain: 0, tint: true } },
    { n: "Raat. Shivaji Park ke bahar, ek thela. Do vada pav, ek cutting chai, aur {li} ki aankhon mein shararat." },
    { sprite: "li" },
    { s: A, t: "Toh, Mr. ya Ms. Pehli Salary. Treat kahan hai? Main Taj soch {g:rahi|raha} hoon. Ya kam se kam woh rooftop waala cafe." },
    { choice: [
      { t: "“Yahi treat hai. Vada pav, Dadar ki chai, aur tum. Taj mein yeh sab nahi milta.”", aff: 5, mem: "salary", then: [
        { s: A, t: "(vada pav ka bada sa bite lete hue) Uff. Main maan {g:gayi|gaya}. Taj mein tum bhi nahi milte." },
        { n: "Thele waale bhaiya ne extra hari mirchi daal di. 'Pehli salary ka treat hai? Toh mirchi meri taraf se.'" },
        { memShow: "salary" }
      ] },
      { t: "Rooftop cafe le jaana — chaahe aadhi salary chali jaaye", act: true, aff: 3, then: [
        { n: "Ek pasta. Ek mocktail. Ek bill jo dekh ke mera dil ek beat miss kar gaya." },
        { s: A, t: "(bill chheen ke aadha pay karte hue) Pehli salary hai, aakhri nahi. Aadha mera. Bahas mat karna." }
      ] },
      { t: "“Abhi rent, deposit, sab dena hai. Treat agle mahine?”", aff: 0, then: [
        { s: A, t: "Haan, samajhdaar baat hai. (halki si muskaan) Toh aaj ka vada pav main {g:khilati|khilata} hoon." }
      ] }
    ] },
    { s: A, t: "Waise, ghar ke liye kya le {g:rahe|rahi} ho? Mummy ke liye? Tanvi ke liye?" },
    { sprite: null },

    { scene: { bg: "inside", rain: 0, tint: false } },
    { n: "Shanivaar. Dadar ka market. {li} ke saath. Ek dukaan mein Surat ke rang jaisi saadiyaan." },
    { s: "Dukaandaar", t: "Mummy ke liye? Toh yeh dekhiye. Bandhani, asli. Gujarati Mummy hain toh pakka pasand aayegi." },
    { sprite: "li" },
    { s: A, t: "Yeh laal waali. Mummy jab tumhe video call pe dekhti hain, toh unke peeche ek laal parda hota hai. Unhe laal pasand hai." },
    { choice: [
      { t: "“Tumhe yeh kaise yaad hai?” — aur wahi laal bandhani lena", act: true, aff: 5, flag: "mummyGift", then: [
        { s: A, t: "Ek saal video calls. Main tumhe kam, tumhare peeche ka ghar zyada dekh {g:rahi thi|raha tha}. (hasi) Kabhi kabhi." },
        { n: "Raat ko Mummy ko video call kiya. Saree dekh ke woh chup ho gayi. Phir boli, 'Yeh {li} ne pasand ki na? Mujhe pata hai.'" }
      ] },
      { t: "Mummy ke liye saree, aur Tanvi ke liye uski pasand ke headphones", aff: 4, then: [
        { s: "Tanvi · 📱 text", t: "HEADPHONES?!?! {g:Bhaiya|Didi} tu duniya ka best hai. Families milne pe main sirf aadhi baatein bataungi. Deal." }
      ] },
      { t: "Online order kar dena, jaldi khatam", act: true, aff: 1, then: [
        { n: "Teen click. Delivery in 5 days. Aasaan. Par dukaan ke bahar {li} ki aankhon mein ek halki si nirasha thi." }
      ] }
    ] },
    { sprite: null },
    { n: "Raat ko PG ke chhote se kamre mein, khidki pe baarish. Diary mein likha: 38,000. Pehli kamaai. Aur uske neeche — 'Shukriya, Mummy. Shukriya, Papa. Shukriya, {li}.'" },
    { s: "{li} · 📱 text", t: "Agle Saturday Ahmedabad. Families. Main nervous hoon. Tum?" },
    { s: N, t: "(typing… delete… typing) Bahut. Par saath mein nervous hona bhi accha lagta hai." },
    { end: true }
  ] };

  /* ================= Season 2 · Chapter 3 · Mumbai Ki Baarish ================= */
  C[23] = { title: "Mumbai Ki Baarish", names: ["Sweet — Samundar Aur Hum", "Normal — Bheegi Sadak", "Quiet — Locals Band, Dil Bhi"], script: [
    { scene: { bg: "office", rain: 2, tint: true } },
    { card: "Season 2 · Chapter 3 · Mumbai Ki Baarish" },
    { n: "Ahmedabad jaane se teen din pehle. Mangalvaar. Dopahar teen baje se aasman kaala. Shaam paanch baje tak Lower Parel ki sadakon pe ghutno tak paani." },
    { s: "📢 BMC Alert", t: "Red alert. Heavy to extremely heavy rainfall. Western line services suspended. Citizens advised to stay indoors." },
    { s: "{g:Meher|Vihaan}", t: "Locals band. Cab ka surge teen guna. Rookie, aaj raat office hi ghar hai. Welcome to Mumbai monsoon." },
    { s: "{g:Meher|Vihaan}", t: "(drawer se Maggi ke do packet nikaal ke) Emergency kit. Har Mumbaikar ke paas hoti hai. Aadhi tumhari." },
    { choice: [
      { t: "“Thanks. Tum sach mein har cheez ke liye taiyaar rehte ho, haan?”".replace("rehte ho", "{g:rehti|rehte} ho"), aff: 3, flag: "mvFriend", then: [
        { s: "{g:Meher|Vihaan}", t: "Mumbai mein do saal, aur ek baar station pe raat bitaayi hai. Uske baad sab kuch taiyaar rakhti hoon.".replace("rakhti", "{g:rakhti|rakhta}") }
      ] },
      { t: "“Nahi, mujhe jaana hai. {li} Fort mein akeli hai.”".replace("akeli", "{g:akeli|akela}"), aff: 2, flag: "worried", then: [
        { s: "{g:Meher|Vihaan}", t: "Fort se Lower Parel? Aaj? Paagal ho? Pehle use call karo." }
      ] }
    ] },
    { n: "Phone uthaya. Teen baar ring. Phir —" },
    { s: "{li} · 📱 call", t: "{name}? Main theek {g:hoon|hoon}. Trust ki building mein hoon. Par yahan bijli chali gayi hai. Aur phone ki battery 9 percent." },
    { s: "{li} · 📱 call", t: "Main bas sunna {g:chahti thi|chahta tha} ki tum safe ho. Agar battery khatam ho jaaye toh ghabraana mat. Main…" },
    { n: "Call kat gaya." },

    { scene: { bg: "marine", rain: 3, tint: true } },
    { rain: 3 },
    { n: "Raat aath baje. Paani thoda utra. Main office se nikla — ya {g:nikla|nikli} — {g:Meher|Vihaan} ki chillaati awaaz peeche chhod ke. Haath mein office ka bada chhata aur ek powerbank.".replace("Main office se nikla — ya {g:nikla|nikli} —", "Main office se {g:nikla|nikli},") },
    { n: "Lower Parel se Fort. Gyaarah kilometre. Taxi jahan tak gayi, gayi. Phir Marine Drive pe paidal." },
    { n: "Lehrein deewar ke upar se sadak pe aa rahi thi. Street lights pe baarish ke parde. Aur door, Trust ki building ki ek khidki mein ek mombatti." },
    { choice: [
      { t: "Bina ruke chalte rehna — paani, lehrein, kuch nahi rokega", act: true, aff: 5, flag: "walkedFort", then: [
        { n: "Joote haath mein. Pant ghutno tak bheegi. Ek lehar ne poora bhigo diya. Main has {g:pada|padi}. Pata nahi kyun. Shayad isliye ki kabhi itna zinda mehsoos nahi kiya tha." }
      ] },
      { t: "Ek chai waale ki tapri pe ruk ke do cutting chai thermos mein bharwaana", act: true, aff: 4, flag: "chaiThermos", then: [
        { s: "Chai waale bhaiya", t: "Is baarish mein kahan ja rahe ho? (thermos bharte hue) Kisi ke liye? Toh paise mat do. Mumbai ki baarish mein pyaar free hai." }
      ] }
    ] },

    { scene: { bg: "library", rain: 2, tint: true } },
    { n: "Raat das baje. Heritage Trust ki 1890 waali library. Andhera, mombatti ki roshni, aur oonchi lakdi ki almaariyan. Navrang ki library jaisi. Bas zyada purani." },
    { sprite: "li" },
    { s: A, t: "{name}?! Tum… Lower Parel se… paidal?! Tum pagal ho! Poore bheege ho! (towel dhoondhte hue) Kisi ne tumhe roka nahi?" },
    { s: N, t: "{g:Meher|Vihaan} ne bahut roka. Par tumhari battery 9 percent thi. Meri himmat 100 percent." },
    { s: A, t: "(towel mere sar pe daalte hue, hasi aur gussa saath mein) Yeh line tumne raaste mein socha tha na? Sach batao." },
    { s: N, t: "Marine Drive pe. Teesri lehar ke baad." },
    { s: A, t: "Garam chai? Is baarish mein? Thermos mein? (do haathon se cup pakad ke) Ab main kabhi tumse naraz nahi ho {g:paungi|paunga}.", when: "flag:chaiThermos" },
    { choice: [
      { t: "Mombatti ki roshni mein khidki ke paas baith ke Marine Drive ki lehrein dekhna, saath mein", act: true, aff: 5, mem: "marine", then: [
        { n: "Door Marine Drive ki lights. Queen's Necklace, baarish mein dhundhla. Humare beech ek mombatti aur ek chai." },
        { s: A, t: "Pehli baarish Ahmedabad mein. Ek shade ke neeche. Aaj Mumbai ki baarish, ek library mein. Lagta hai baarish humara pata jaanti hai." },
        { memShow: "marine" }
      ] },
      { t: "“Ab hum yahan raat kaise kaatenge?”", aff: 2, then: [
        { s: A, t: "Kitaabon ke saath. 1890 ki kitaabein. Tumhe ek kahani sunaati hoon is building ki. Raat chhoti lagegi.".replace("sunaati", "{g:sunaati|sunaata}") }
      ] },
      { t: "“Agli baar ghar pe hi rehna. Mujhe darr laga tha.”", aff: 1, then: [
        { s: A, t: "Main kaam pe {g:thi|tha}, {name}. Main bhi darr {g:gayi thi|gaya tha}. Par tumhe darr lage, iska matlab yeh nahi ki main ruk jaaun." }
      ] }
    ] },
    { sprite: null },
    { n: "Subah chaar baje baarish ruki. Bijli aayi. Library ki ek purani ghadi ne chaar baar ghanta bajaaya." },
    { s: "{g:Meher|Vihaan} · 📱 text", t: "Zinda ho? Shirin Ma'am ne poocha tumhe kya hua. Maine kaha, rookie ne Mumbai ki baarish mein Marine Drive paidal paar kiya. Unhone kaha, 'Rain Pavilion waala hai, aur kya karega.'" },
    { end: true }
  ] };

  /* ================= Season 2 · Chapter 4 · Office Politics ================= */
  C[24] = { title: "Office Politics", names: ["Sweet — Sach Ki Jeet", "Normal — Thoda Khatta, Thoda Meetha", "Quiet — Chup Rehna Bhi Ek Jawab"], script: [
    { scene: { bg: "office", rain: 0, tint: false } },
    { card: "Season 2 · Chapter 4 · Office Politics" },
    { n: "Families waale Saturday se pehle ek aakhri hafta. Aur studio mein ek bada project: Versova Koliwada ka naya Community Market." },
    { s: "Shirin Kapadia", t: "Machhuaaron ki basti ke liye ek bazaar. Jo baarish mein bhi chale, aur sukhe mein bhi saans le. Har koi Friday tak ek concept laaye. Best concept lead karega." },
    { n: "Raat ko PG mein maine ek sketch banaya. Bazaar ki chhat pe jaal jaise canopy — machhuaaron ke jaal se inspired. Baarish ka paani beech mein ek kund mein." },
    { n: "Agle din lunch pe {g:Meher|Vihaan} ne mera sketchbook dekha. Bahut der tak." },
    { s: "{g:Meher|Vihaan}", t: "Jaal waali canopy? Hmm. Interesting. (sketchbook band karte hue) Accha hai, rookie." },

    { scene: { bg: "office", rain: 0, tint: true } },
    { n: "Friday. Concept meeting. Badi table. Shirin Kapadia ke haath mein laal pen." },
    { s: "{g:Meher|Vihaan}", t: "Mera concept ek canopy hai jo jaal jaisi hai. Machhuaaron ke jaal se inspired. Aur beech mein ek kund, baarish ka paani jama karne ke liye." },
    { n: "Mera dil ek pal ko ruk gaya. Woh mera sketch tha. Line by line." },
    { s: "Shirin Kapadia", t: "Strong idea. (laal pen se tick karte hue) {name}, tumhara?" },
    { choice: [
      { t: "Shaanti se apna sketchbook kholna — date ke saath, pichhli raat ka", act: true, aff: 6, flag: "provedIt", then: [
        { s: N, t: "Ma'am, mera concept bhi kuch aisa hi hai. Mangalvaar raat ka sketch hai, date ke saath. Shayad hum dono ek hi jaal mein phas gaye." },
        { s: "Shirin Kapadia", t: "(dono ko dekhte hue, lambi chuppi) …Interesting. Bahut interesting. Meeting ke baad dono mere cabin mein." }
      ] },
      { t: "Meeting mein sabke saamne kehna: “Yeh mera idea hai. Tumne churaaya.”", aff: -3, flag: "blewUp", then: [
        { s: "{g:Meher|Vihaan}", t: "(chehra laal) Kya?! Main…" },
        { s: "Shirin Kapadia", t: "Meri meeting mein ilzaam nahi, drawings baat karti hain. Dono ke sketches mere cabin mein. Abhi." }
      ] },
      { t: "Kuch na kehna. Doosra, kamzor concept dikha dena", act: true, aff: -1, flag: "stayedQuiet", then: [
        { n: "Maine ek backup idea dikhaaya. Shirin Kapadia ne bina kuch bole agla slide maanga. Mujhe apne aap pe gussa aaya." }
      ] }
    ] },

    { scene: { bg: "marine", rain: 0, tint: true } },
    { n: "Shaam. Marine Drive ki deewar. {li} ka phone. Main sab bata {g:raha tha|rahi thi}, aur andar se ubal {g:raha tha|rahi thi}." },
    { sprite: "li" },
    { s: A, t: "Ruko. Saans lo. (deewar pe baith ke) Kabir yaad hai? Garba Night se pehle? Woh bhi dushman lagta tha.".replace("Kabir", "{g:Kabir|Kiara}").replace("lagta", "{g:lagta|lagti}") },
    { s: A, t: "Kabhi kabhi log churaate nahi, bas darte hain. Teen mahine se {g:woh|woh} 'rookie' ke saamne apni jagah bachaa {g:rahi|raha} hai." },
    { choice: [
      { t: "“Toh kal main seedha usse baat {g:karunga|karungi}. Akele mein. Bina gusse ke.”", aff: 5, flag: "talkMV", then: [
        { s: A, t: "Yeh wahi {name} hai jisne jury mein " + RV + " ka naam lekar bhi use bachaaya tha. Mujhe tum pe fakr hai." }
      ] },
      { t: "“Tum hamesha doosron ki side kyun leti ho?”".replace("leti", "{g:leti|lete}"), aff: -2, then: [
        { s: A, t: "Main kisi ki side nahi {g:le rahi|le raha}, {name}. Bas tumhe wahi bana dekhna {g:chahti|chahta} hoon jo tum ho." }
      ] }
    ] },
    { s: A, t: "Waise… {g:Meher|Vihaan} ne raat ke gyaarah baje tumhe 'sorry 🙏' kyun bheja tha kal? Main bas… pooch {g:rahi|raha} hoon. (nazar churaate hue)" },
    { s: N, t: "Tum… jealous ho?" },
    { s: A, t: "Bilkul nahi. Main architect hoon. Main sirf structures pe dhyaan {g:deti|deta} hoon. (pause) …Thoda sa. Shayad." },
    { sprite: null },

    { scene: { bg: "office", rain: 0, tint: false } },
    { n: "Agle din. Shirin Kapadia ka cabin. Hum dono. Beech mein mera sketchbook." },
    { s: "{g:Meher|Vihaan}", t: "(jab Ma'am kuch kehne hi wali thi) Ma'am. Idea {name} ka tha. Maine lunch pe dekha tha. Main darr {g:gayi thi|gaya tha} ki naya banda aake meri jagah le lega. Sorry.".replace("naya banda", "naya rookie") },
    { s: "Shirin Kapadia", t: "(chashma utaarte hue) Mujhe pata tha. Mangalvaar raat ka sketch tha. Par main dekhna chahti thi ki tum dono kya karte ho." },
    { s: "Shirin Kapadia", t: "Project dono milke lead karoge. Ek ke paas idea hai. Doosre ke paas Koliwada ke log jaante hain. Dono ki zaroorat hai." },
    { choice: [
      { t: "{g:Meher|Vihaan} ki taraf haath badhaana: “Partners? Bas agli baar idea chahiye toh pooch lena.”", act: true, aff: 5, mem: "", flag: "mvPartner", then: [
        { s: "{g:Meher|Vihaan}", t: "(haath milaate hue, halki hasi) Partners. Aur haan, rookie bulaana band. Ab se sirf {name}." }
      ] },
      { t: "“Theek hai, Ma'am.” (bas itna)", aff: 1, then: [
        { n: "Cabin se bahar nikal ke {g:Meher|Vihaan} ne kuch kehna chaaha. Maine headphones laga liye. Shayad galat kiya. Shayad nahi." }
      ] }
    ] },
    { n: "Shaam ko desk pe ek chit thi. 'Kal Ahmedabad hai na? Families ke saamne nervous mat hona. Tum acche ho. Bas itna. — {g:M|V}'" },
    { n: "Bag pack kiya. Kal subah ki train. Do parivaar. Ek aangan. Aur Tanvi, jo 'sab bataane' wali thi." },
    { end: true }
  ] };
  /* ================= Season 2 · Chapter 5 · Ghar Waalon Se Milna ================= */
  C[25] = { title: "Ghar Waalon Se Milna", names: ["Sweet — Do Parivaar, Ek Aangan", "Normal — Thepla Aur Tension", "Quiet — Chai Ke Cup Mein Toofan"], script: [
    { scene: { bg: "inside", rain: 0, tint: false } },
    { card: "Season 2 · Chapter 5 · Ghar Waalon Se Milna" },
    { n: "Saturday. Subah 6:10. Mumbai Central se Shatabdi. Khidki ke bahar khet, andar mera dil jo har station pe ek beat tez ho raha tha." },
    { sprite: "li" },
    { s: A, t: "(teesri baar dupatta ya collar theek karte hue) Main theek {g:lag rahi|lag raha} hoon na? Papa ko formal pasand hai. Mummy ko simple. Main dono ke beech mein kuch bhi nahi {g:lag rahi|lag raha}." },
    { s: N, t: "Tum bilkul waise lag {g:rahi|rahe} ho jaise Navrang ke pehle din lag {g:rahi thi|rahe the}. Bas ab chhata nahi hai." },
    { s: A, t: "(bag kholte hue, navy blue chhata dikha ke) Kaun kehta hai nahi hai? Yeh mere saath har jagah jaata hai." },
    { sprite: null },
    { n: "Ahmedabad. Paldi ka ek purana pol ghar. {li} ka ghar. Darwaze pe toran, aangan mein tulsi, aur andar se thepla aur adrak ki khushboo." },

    { scene: { bg: "inside", rain: 0, tint: true } },
    { n: "Drawing room. Ek taraf meri family — Mummy laal bandhani mein, Papa apni sabse acchi shirt mein, aur Tanvi jiske chehre pe khatarnaak muskaan thi." },
    { n: "Doosri taraf {g:Mehta|Shah} Uncle aur Aunty. Beech mein ek table, chai ke aath cup, aur ek aisi chuppi jo kisi ne order nahi ki thi." },
    { s: "{g:Mehta|Shah} Uncle", t: "Toh beta, Studio Kapadia. Suna hai Shirin Kapadia bahut sakht hain. Wahan tik paoge?" },
    { choice: [
      { t: "“Sakht hain, par sach bolti hain. Unke yahan har din kuch seekh {g:raha|rahi} hoon — aur {li} se roz usse bhi zyada.”", aff: 8, flag: "uncleWon", then: [
        { s: "{g:Mehta|Shah} Uncle", t: "(chai ka cup neeche rakh ke, pehli baar muskaate hue) Imaandaar jawab. Aur seedha. Mujhe pasand aaya." },
        { s: "{g:Mehta|Shah} Aunty", t: "Dekha? Maine kaha tha na. Video call pe hi samajh gayi thi." }
      ] },
      { t: "“Ji Uncle. Pehli deadline pe hi ek project lead mil gaya.”", aff: 4, then: [
        { s: "{g:Mehta|Shah} Uncle", t: "Hmm. Accha hai. Kaam bolta hai. Bas ghamand mat aane dena." }
      ] },
      { t: "Bas muskura ke sar hilaana", act: true, aff: 0, then: [
        { n: "Uncle ne kuch der intezaar kiya, phir chai ki taraf mud gaye. {li} ne table ke neeche mera haath halke se dabaaya." }
      ] }
    ] },
    { s: "Mummy", t: "Bhaisaab, yeh bachpan se aisa hi hai. Bolta kam, sochta zyada. Par jab bolta hai na…".replace("aisa hi hai. Bolta kam, sochta zyada. Par jab bolta hai na…", "{g:aisa|aisi} hi hai. {g:Bolta|Bolti} kam, {g:sochta|sochti} zyada. Par jab {g:bolta|bolti} hai na…") },
    { s: "Tanvi", t: "…toh sirf {li} ke baare mein bolta hai. (sabki nazar Tanvi pe) Kya? Sach bol rahi hoon.".replace("bolta hai", "{g:bolta|bolti} hai") },

    { scene: { bg: "inside", rain: 0, tint: false } },
    { n: "Lunch ke baad. Aangan ka jhoola. Tanvi ne mera phone utha liya aur seedha {li} ke paas jaake baith gayi." },
    { s: "Tanvi", t: "{li} {g:Didi|Bhaiya}, maine kaha tha main sab bataungi. Toh suno. Pehli baar jab aapne chhata diya tha na, {g:Bhaiya|Didi} ne ghar aake us chhate ka sketch banaya tha. Teen baar." },
    { s: "Tanvi", t: "Aur ek diary hai. Uske har page pe ek hi date ke aage likha hai — 'Aaj baarish hui. Aaj {li} se baat hui.' Main padhti nahi hoon. Bas… ek baar gir gayi thi aur khul gayi." },
    { sprite: "li" },
    { s: A, t: "(meri taraf dekh ke, gaal laal) Teen baar? Ek chhate ka?" },
    { choice: [
      { t: "“Chauthi baar bhi banaya tha. Woh Tanvi ko nahi mila.” — aur sketchbook ka aakhri page khol ke dikhaana", act: true, aff: 10, flag: "sketchShown", then: [
        { n: "Aakhri page. Ek navy blue chhata, uske neeche do log, aur peeche ek shade jispe baarish gir rahi thi. Neeche date — Navrang ka pehla monsoon." },
        { s: A, t: "(bahut der chup) Tumne yeh do saal sambhaal ke rakha? (dheere se) Main bhi ek cheez sambhaal ke rakhti hoon. Woh pehli chit. 'Thanks for the umbrella.'".replace("rakhti hoon", "{g:rakhti|rakhta} hoon") },
        { s: "Tanvi", t: "OMG. Main yahan baithi hoon, haan. Main abhi bhi yahan hoon." }
      ] },
      { t: "“Tanvi! Phone wapas de.” (hasi rokte hue)", aff: 4, then: [
        { s: "Tanvi", t: "Nahi. Abhi toh school waali kahani baaki hai jab {g:Bhaiya|Didi} ne Annual Day pe stage pe gaana bhool ke 'Jana Gana Mana' gaa diya tha." },
        { s: A, t: "(hanste hanste jhoole se girte hue) Yeh mujhe poori sunni hai. Abhi." }
      ] },
      { t: "“Woh sab purani baatein hain.”", aff: 1, then: [
        { s: A, t: "Purani baatein hi toh sabse pyaari hoti hain, {name}. (muskaan) Theek hai, main baad mein Tanvi se akele mein pooch {g:lungi|lunga}." }
      ] }
    ] },
    { sprite: null },

    { scene: { bg: "inside", rain: 0.6, tint: true } },
    { rain: 0.6 },
    { n: "Shaam. Halki si boonda-baandi. Dono Papa aangan mein, ek hi chhate ke neeche, cricket aur sone ke bhaav pe behas kar rahe the. Jaise bachpan ke dost hon." },
    { s: "{g:Mehta|Shah} Aunty", t: "(Mummy ka haath pakad ke) Bachche ek doosre ko samajhte hain. Bas yahi chahiye tha. Baaki sab hum dekh lenge." },
    { s: "Mummy", t: "Haan behenji. Aur ab yeh Mumbai mein akele nahi hain. Mujhe isi baat ka sukoon hai." },
    { sprite: "li" },
    { s: A, t: "(darwaze ki chaukhat pe, dheere se) Tumhe pata hai, Papa ne kabhi kisi ke saath chhata share nahi kiya. Kabhi. Aaj tumhare Papa ke saath." },
    { choice: [
      { t: "Uska haath pakad ke kehna: “Lagta hai chhate share karna humare parivaar ki aadat ban gayi hai.”", act: true, aff: 6, then: [
        { s: A, t: "(kandhe pe sar rakh ke) Humare parivaar. Tumne 'humare' kaha. Main sun {g:chuki|chuka} hoon. Ab wapas nahi le sakte." }
      ] },
      { t: "“Sab theek gaya. Main toh darr {g:raha|rahi} tha.”", aff: 3, then: [
        { s: A, t: "Main bhi. Par tumhe pata hai sabse accha kya laga? Tum darr ke bhi aaye. Yahi tum ho." }
      ] }
    ] },
    { sprite: null },
    { s: "Tanvi · 📱 text", t: "{g:Bhaiya|Didi}, maine aadhi baatein hi batayi. Diary waali poori kahani agli baar. 😇 Waise {li} {g:Didi|Bhaiya} ekdum perfect hain. Mat bigaadna." },
    { n: "Raat ki train. Wapas Mumbai. {li} mere kandhe pe so {g:gayi|gaya}. Aur mujhe pehli baar laga — ab do ghar nahi, ek ghar ke do aangan hain." },
    { end: true }
  ] };

  /* ================= Season 2 · Chapter 6 · Ganpati ================= */
  C[26] = { title: "Ganpati", names: ["Sweet — Ganpati Bappa, Hum Dono", "Normal — Dhol Aur Modak", "Quiet — Bheed Mein Ek Prarthana"], script: [
    { scene: { bg: "office", rain: 0.4, tint: false } },
    { card: "Season 2 · Chapter 6 · Ganpati" },
    { n: "September. Mumbai ne apne kapde badal liye the. Har gali mein pandal, har building mein dhol practice, aur hawa mein modak ki meethi khushboo." },
    { s: "{g:Meher|Vihaan}", t: "Pehla Ganeshotsav? Toh suno, aaj shaam Girgaon mere ghar aana. Mummy ke ukadiche modak. Mumbai ka asli swaad. Aur {li} ko bhi le aana." },
    { s: "{g:Meher|Vihaan}", t: "Ek rule — modak gin ke mat khaana. Mummy naraz ho jaati hain." },
    { choice: [
      { t: "“Zaroor aayenge. Main kuch le aaun? Aunty ke liye mithai ya phool?”", aff: 4, flag: "mvFamily", then: [
        { s: "{g:Meher|Vihaan}", t: "(hairaan) Phool. Laal jaasvand. Bappa ko pasand hain. (pause) Tum sach mein acche ho, {name}. Irritating, par acche." }
      ] },
      { t: "“Modak competition? Main jeet {g:jaunga|jaungi}.”", aff: 3, then: [
        { s: "{g:Meher|Vihaan}", t: "Ha! Mere chacha ne ek baar ikkis khaaye the. Record tod ke dikhao." }
      ] }
    ] },

    { scene: { bg: "garba", rain: 0, tint: true } },
    { n: "Shaam. Girgaon ki ek chawl. Aangan mein chhota sa Ganpati, genda phoolon ke beech. Diye, agarbatti, aur poori chawl ek parivaar ki tarah aarti mein." },
    { sprite: "li" },
    { s: A, t: "(haath jodte hue, dheere se) Ahmedabad mein Ganpati itne dhoom-dhaam se nahi hote. Yahan lagta hai poora shehar ek hi saans le raha hai." },
    { s: "{g:Meher|Vihaan}", t: "Aarti ki thaali kaun ghumaayega? Naye mehmaan ko haq hai. {name}, tum." },
    { choice: [
      { t: "{li} ka haath apne haath ke saath thaali pe rakh ke, dono milke aarti ghumaana", act: true, aff: 10, flag: "aartiTogether", then: [
        { n: "'Sukhkarta Dukhharta…' Poori chawl ki awaaz ek saath. Diye ki lau humare haathon ke beech kaanp rahi thi, par bujhi nahi." },
        { s: "{g:Meher|Vihaan} ki Aai", t: "(maathe pe tilak lagaate hue) Jodi achhi hai. Bappa aashirvaad de rahe hain. Main dekh sakti hoon." },
        { s: A, t: "(kaan ke paas, kaanpti awaaz mein) Tumne meri taraf dekha bhi nahi aur haath pakad liya. Kaise pata tha main bhi yahi {g:soch rahi thi|soch raha tha}?" }
      ] },
      { t: "Akele aarti karna, aur {li} ko paas khade hoke taali bajaate dekhna", aff: 5, then: [
        { s: A, t: "(baad mein) Tum aarti karte waqt aankhein band kar lete ho. Pata hai? Bahut sukoon se.".replace("kar lete ho", "kar {g:lete|leti} ho") }
      ] },
      { t: "“Main nahi, mujhe aarti ke shabd nahi aate.”", aff: 1, then: [
        { s: "{g:Meher|Vihaan}", t: "Shabd Bappa ko chahiye bhi nahi. Theek hai, main karti hoon. Tum dono taali bajao.".replace("karti hoon", "{g:karti|karta} hoon") }
      ] }
    ] },
    { n: "Phir modak. Garam, ghee mein doobe hue. Maine paanch khaaye. {li} ne saat. {g:Meher|Vihaan} ki Aai ne hum dono ki plate phir se bhar di." },
    { sprite: null },

    { scene: { bg: "marine", rain: 1, tint: true } },
    { rain: 1 },
    { n: "Anant Chaturdashi. Visarjan. Girgaon Chowpatty. Laakhon log, dhol-tasha, gulaal ka laal baadal, aur upar se halki baarish." },
    { n: "'Ganpati Bappa Morya! Pudhchya varshi lavkar ya!' Har taraf ek hi awaaz." },
    { sprite: "li" },
    { s: A, t: "(bheed mein mera haath kas ke pakadte hue) Chhodna mat! Agar kho gaye toh main kabhi nahi {g:dhoondh paungi|dhoondh paunga}!" },
    { n: "Tabhi bheed ka ek dhakka aaya. Humare haath chhoot gaye. Ek pal. Do pal. Laal gulaal ke beech uska chehra gayab." },
    { choice: [
      { t: "Bheed ke upar navy blue chhata kholna — jaise Dadar station pe usne kiya tha", act: true, aff: 10, flag: "umbrellaSignal", then: [
        { n: "Gulaal aur baarish ke beech ek navy blue chhata upar utha. Phir hila. Jaise koi jhanda ho." },
        { s: A, t: "(bheed cheerte hue aake mujhse lipat ke) Mera trick! Tumne mera trick chura liya! (hasi aur aansu saath mein) Thank you. Thank you." }
      ] },
      { t: "Zor se uska naam pukaarna, baar baar, jab tak awaaz na aaye", aff: 6, then: [
        { s: A, t: "(door se) {name}! Yahan! Lifeguard tower ke paas!" },
        { n: "Main daud ke {g:pahuncha|pahunchi}. Woh gulaal se laal, baarish se bheegi, aur muskura rahi thi.".replace("bheegi", "{g:bheegi|bheega}").replace("muskura rahi thi", "{g:muskura rahi thi|muskura raha tha}") }
      ] },
      { t: "Phone pe call karna", act: true, aff: 2, then: [
        { n: "Network busy. Teesri try pe call laga. Paanch minute baad hum mile. Lambe, darr bhare paanch minute." }
      ] }
    ] },
    { s: A, t: "(dheere se, samundar ki taraf dekhte hue) Tumne Bappa se kya maanga?" },
    { s: N, t: "Pehle tum batao." },
    { s: A, t: "Maine maanga ki agle saal bhi isi bheed mein, isi baarish mein, tumhara haath mere haath mein ho. Bas. Itna sa." },
    { s: N, t: "Phir toh mujhe kuch maangne ki zaroorat hi nahi padi. Tumne dono ka maang liya.", when: "aff>=60" },
    { s: N, t: "Maine bhi kuch aisa hi maanga. Shabd alag the. Matlab wahi.", when: "aff<60" },
    { sprite: null },
    { n: "Lehron ne Bappa ko dheere se apne paas bula liya. Dhol ruk gaye. Aur poori Chowpatty pe ek pal ke liye sirf baarish ki awaaz thi." },
    { end: true }
  ] };

  /* ================= Season 2 · Chapter 7 · Long Hours ================= */
  C[27] = { title: "Long Hours", names: ["Sweet — Deadline Ke Beech Ek Dabba", "Normal — Raatein Lambi, Sapne Bade", "Quiet — Thakaan Ki Khamoshi"], script: [
    { scene: { bg: "office", rain: 0, tint: false } },
    { card: "Season 2 · Chapter 7 · Long Hours" },
    { n: "October. Versova Koliwada Market ab sirf concept nahi tha. BMC ki final presentation teen hafte door thi. Aur Shirin Kapadia ne poora studio uspe laga diya tha." },
    { s: "Shirin Kapadia", t: "Yeh project studio ka sabse bada public kaam hai. Koliwada ke log humpe bharosa kar rahe hain. Teen hafte. Koi weekend nahi. Koi bahaana nahi." },
    { s: "{g:Meher|Vihaan}", t: "(dheere se) Partners, tayyar? Canopy ki structural drawings tumhari, machhuaaron ke saath meetings meri." },
    { n: "Pehla hafta. Raat gyaarah. Doosra hafta. Raat ek baje. Phone pe {li} ke messages, jinka jawab main subah {g:deta|deti}." },
    { s: "{li} · 📱 text", t: "Khaana khaaya? 🍲" },
    { s: "{li} · 📱 text", t: "Theek hai, kal baat karte hain. Bas paani peete rehna. 💧" },

    { scene: { bg: "office", rain: 0.5, tint: true } },
    { n: "Ek raat. 12:40. Studio khaali, sirf meri desk ki lamp. Canopy ka joint teesri baar fail ho chuka tha. Aankhein jal rahi thi." },
    { n: "Darwaza khula. Haath mein ek steel ka dabba aur ek thermos." },
    { sprite: "li" },
    { s: A, t: "Security guard ko bola main tumhari site engineer hoon. Usne maan liya. (dabba kholte hue) Mummy ke recipe waala thepla aur aloo. Main teen baar {g:jala chuki|jala chuka} hoon. Yeh chautha hai." },
    { choice: [
      { t: "Kaam chhod ke uske saath zameen pe baith ke khaana — bina phone, bina drawing", act: true, aff: 10, flag: "dabbaDate", then: [
        { n: "Studio ke farsh pe, models ke beech, ek hi dabbe se. Khidki ke bahar Lower Parel ki lights. Bees minute. Jaise poore hafte ki saans." },
        { s: A, t: "(mera joint waala sketch dekh ke) Yeh load beech se nahi, kinaare se jaana chahiye. Jaise haveli ki chhat mein tha. Yaad hai?" },
        { n: "Main ruk {g:gaya|gayi}. Woh sahi {g:thi|tha}. Teen din ki problem, ek thepla ke saath hal ho gayi." }
      ] },
      { t: "“Thanks, bas paanch minute. Yeh joint khatam karna hai.”", aff: 4, then: [
        { s: A, t: "(dabba desk pe rakh ke, paas wali kursi pe baith ke) Theek hai. Main yahin {g:baithi|baitha} hoon. Paanch minute. Main gin {g:rahi|raha} hoon." }
      ] },
      { t: "“Tum itni raat ko kyun aayi? Ghar jaao, safe nahi hai.”".replace("aayi", "{g:aayi|aaye}"), aff: 1, then: [
        { s: A, t: "(dabba rakh ke, dheere se) Main bas tumhe dekhna {g:chahti thi|chahta tha}. Theek hai. Ja {g:rahi|raha} hoon. Khaana kha lena." }
      ] }
    ] },
    { sprite: null },

    { scene: { bg: "marine", rain: 0, tint: true } },
    { n: "Teesra hafta. Sunday shaam. Pehli baar chaar ghante ki chhutti. Marine Drive ki deewar. Par mera dimaag abhi bhi canopy pe tha." },
    { sprite: "li" },
    { s: A, t: "{name}. (pause) Tum yahan ho, par yahan nahi ho. Teen hafte se main tumse baat {g:kar rahi|kar raha} hoon, par tum sirf 'hmm' {g:bol rahe|bol rahi} ho." },
    { s: A, t: "Main shikaayat nahi {g:kar rahi|kar raha}. Main samajhti hoon. Bas… main tumhe miss {g:kar rahi|kar raha} hoon. Jab tum saamne ho, tab bhi.".replace("samajhti", "{g:samajhti|samajhta}") },
    { choice: [
      { t: "Phone band karke uski taraf mud ke kehna: “Sorry. Ab sirf tum. Batao, Trust ki library ka kya hua?”", act: true, aff: 8, flag: "listened", then: [
        { s: A, t: "(aankhein chamak ke) Chhat theek ho gayi! Aur unhone mujhe reopening ka lead diya hai. Main tumhe teen hafte se batana {g:chahti thi|chahta tha}." },
        { s: N, t: "Teen hafte? Aur tumne mere 'hmm' ke saath sambhaal liya? Tum kamaal ho." }
      ] },
      { t: "“Sirf ek hafta aur. Phir sab normal.”", aff: 3, then: [
        { s: A, t: "Accha. Ek hafta. (chhota sa vaada jaisi muskaan) Phir ek poora din mera. Bina laptop." }
      ] },
      { t: "“Tum samajhti nahi, yeh mera career hai.”".replace("samajhti", "{g:samajhti|samajhte}"), aff: -3, then: [
        { s: A, t: "(chup, phir dheere se) Main samajhti hoon, {name}. Isiliye kuch nahi kaha teen hafte. Aaj bas pehli baar kaha.".replace("samajhti", "{g:samajhti|samajhta}") },
        { n: "Lehron ki awaaz bahut tez lagi us raat. Ghar jaate waqt maine sorry ka message type kiya. Teen baar. Bheja ek baar." }
      ] }
    ] },
    { sprite: null },

    { scene: { bg: "office", rain: 0, tint: false } },
    { n: "Presentation ka din. BMC ke officers, Koliwada ke panch, aur ek boodhi machhuaaran aaji jo sabse aage baithi thi." },
    { s: "{g:Meher|Vihaan}", t: "(dheere se) Saans lo. Tumhara joint ab perfect hai. Kaun theek kiya?" },
    { s: N, t: "Ek thepla ne." },
    { n: "Model ke upar maine paani daala. Jaal jaisi canopy ne use kinaaron se beech ke kund tak le jaaya. Bina ek boond tapke." },
    { s: "Machhuaaran Aaji", t: "Humare jaal se machhli pakadte the. Ab baarish bhi pakdoge? (hasi) Accha hai, beta. Bana do." },
    { s: "Shirin Kapadia", t: "(baad mein, cabin ke bahar) Approved. Tum dono ne kar dikhaaya. Aur {name} — ab ghar jao. Ek hafta chhutti. Yeh order hai." },
    { s: "{li} · 📱 text", t: "Suna! {g:Meher|Vihaan} ne bata diya. 🎉 Ab tum mere ho. Ek poora din. Bina laptop. 💙", when: "flag:listened" },
    { s: "{li} · 📱 text", t: "Mubarak ho, architect sahab. 🎉 Aaj raat ka khaana main bana {g:rahi|raha} hoon. Paanchva thepla. Iss baar nahi jalega.", when: "!flag:listened" },
    { n: "Us raat main barah ghante soya. Aur sapne mein bhi koi deadline nahi thi.".replace("soya", "{g:soya|soyi}") },
    { end: true }
  ] };

  /* ================= Season 2 · Chapter 8 · Purana Campus ================= */
  C[28] = { title: "Purana Campus", names: ["Sweet — Wahi Shade, Wahi Hum", "Normal — Yaadon Ki Gali", "Quiet — Khaali Corridor"], script: [
    { scene: { bg: "campus", rain: 0, tint: false } },
    { card: "Season 2 · Chapter 8 · Purana Campus" },
    { n: "Chhutti ka hafta. Ahmedabad. Navrang Institute ka gate. Wahi neem ka ped, wahi peeli deewarein, aur wahi board jispe kisi ne marker se dil bana diya tha." },
    { sprite: "li" },
    { s: A, t: "Do saal. Aur gate ka chowkidaar abhi bhi wahi hai. (haath hilaate hue) Ramesh bhai! Pehchaana?" },
    { s: N, t: "Juniors ko dekho. Itne chhote lagte hain. Kya hum bhi itne chhote the?" },
    { s: A, t: "Tum toh aur bhi chhote the. Pehle din jab baarish mein bina chhate ke khade the. Bheegi billi.".replace("khade the", "{g:khade the|khadi thi}") },
    { sprite: null },
    { sprite: "riya" },
    { s: R, t: "{name}!!! {li}!!! (daud ke dono ko ek saath gale lagaate hue) Mumbai waale aa gaye! Ek message bhi nahi kiya ki aa rahe ho? Main ab yahin pe Teaching Assistant hoon, pata hai na?" },
    { s: R, t: "Aur suno, " + RV + " ab Bengaluru mein hai. Usne kaha tha agar tum log aao toh video call karna zaroor. Aur haan, abhi bhi tumhari jury waali baat sabko sunata hai.".replace("sunata", "{g:sunata|sunati}") },
    { choice: [
      { t: "“Riya, tere bina Mumbai adhoori lagti hai. Seriously. Kab aa rahi hai?”", aff: 6, flag: "riyaVisit", then: [
        { s: R, t: "(aankhein geeli, phir hasi) Chup kar. Rula mat. Diwali ke baad aaungi. Pakka. Aur tum dono mere liye vada pav ready rakhna." }
      ] },
      { t: "“TA? Matlab ab tu juniors ko daantti hai? Bechaare.”", aff: 4, then: [
        { s: R, t: "Main sirf unhe daantti hoon jo chhata nahi laate. (aankh maar ke) Kuch cheezein kabhi nahi badalti." }
      ] }
    ] },
    { sprite: null },

    { scene: { bg: "studio", rain: 0, tint: true } },
    { n: "Studio 3. Wahi lambi tables, wahi cutting mats pe purane blade ke nishaan. Deewar pe ek frame — Rain Pavilion ki photo. Neeche humare naam." },
    { s: P, t: "(darwaze pe) Mujhe laga tha. Koi Studio 3 mein khada hoke deewar ghoor raha ho, toh yeh mere purane students hi ho sakte hain." },
    { s: P, t: "Shirin ne mujhe phone kiya tha. Koliwada market ke baare mein. Usne kaha, 'Desai, tumhare student ne baarish ko jaal mein pakad liya.' Mujhe tum pe garv hai." },
    { choice: [
      { t: "“Sir, aapne hi sikhaaya tha — design pehle insaan ke liye, phir award ke liye. Wahi kiya.”", aff: 8, flag: "thankedDesai", then: [
        { s: P, t: "(chashma utaar ke, lambi saans) Bahut saal padhaaya hai. Kam log yeh line yaad rakhte hain. Tum dono ne rakhi." },
        { s: P, t: "Ek kaam karo. Kal juniors ke liye ek ghanta. Bas apni kahani batao. Shade se pavilion tak." }
      ] },
      { t: "“Sir, aap bilkul nahi badle. Wahi laal pen.”", aff: 4, then: [
        { s: P, t: "(laal pen jeb se nikaal ke) Kuch cheezein badalni nahi chahiye. Jaise yeh pen. Aur jaise tum dono." }
      ] }
    ] },
    { sprite: "li" },
    { s: A, t: "(frame ke saamne, dheere se) Yahin pe tumne pehli baar mujhe 'senior' ki jagah naam se bulaaya tha. Yaad hai?" },
    { s: N, t: "Haan. Aur tumne do din baat nahi ki thi." },
    { s: A, t: "Kyunki main sharma {g:gayi thi|gaya tha}, buddhu." },
    { sprite: null },

    { scene: { bg: "inside", rain: 0.8, tint: true } },
    { rain: 0.8 },
    { n: "Shaam. The Chai Spot. Bahar halki baarish. Andar wahi kone wali table, wahi tin ki kettle, aur wahi awaaz." },
    { s: K, t: "Arre! Mere sabse purane udhaar waale! (hasi) {name} beta, {li} beta, do saal baad? Baitho baitho. Do cutting, ek maska bun. Yaad hai na?" },
    { s: K, t: "Tumhare jaane ke baad yeh table koi nahi leta. Juniors kehte hain, 'Kaka, woh baarish waali jodi ki table hai.' Main kehta hoon, haan, woh wapas aayenge." },
    { sprite: "li" },
    { choice: [
      { t: "Kaka ka purana udhaar wala register maang ke, apne naam ke aage 'Paid — pyaar ke saath' likhna aur double paise dena", act: true, aff: 10, flag: "kakaPaid", then: [
        { s: K, t: "(register dekh ke, aankhein bhar aayi) Teen sau chaalis rupaye, do saal purane. Aur tumne yaad rakha. (sar pe haath rakh ke) Bhagwan tum dono ko hamesha saath rakhe." },
        { s: A, t: "(mere kaan mein) Tum na… kabhi kabhi itne acche ho jaate ho ki gussa aata hai.".replace("ho jaate ho", "ho {g:jaate|jaati} ho") }
      ] },
      { t: "Kaka ke saath baith ke unke naye chai ke flavour try karna", aff: 5, then: [
        { s: K, t: "Yeh dekho, gud waali chai. Naya hai. Tumhare liye pehla cup. Free. Bas Mumbai mein meri chai ka naam roshan karna." }
      ] },
      { t: "Chupchaap kone wali table pe baith ke purani baatein yaad karna", act: true, aff: 2, then: [
        { n: "Khidki pe boondein. Table pe kisi ne compass se 'N+A' khod diya tha. Humne nahi kiya tha. Shayad kisi junior ne. Phir bhi accha laga." }
      ] }
    ] },
    { s: A, t: "(chai ka cup dono haathon mein pakad ke) Pata hai, Mumbai mein sab kuch hai. Samundar, kaam, sapne. Par chai ka yeh swaad nahi hai." },
    { s: N, t: "Kyunki yeh chai mein nahi hai. Yeh yaadon mein hai." },
    { sprite: null },
    { n: "Raat. Gate ke bahar. Riya ne ek photo li — hum dono, Kaka, aur peeche Navrang ka board. Usne caption likha: 'Wapas aaye. Aur zyada saath.'" },
    { s: R, t: "(jaate jaate, dheere se mujhse) Waise… ring ka size pata kiya kya? (meri shakal dekh ke) Kya? Sab poochenge. Main pehle pooch rahi hoon." },
    { n: "Main kuch bol nahi {g:paaya|paayi}. Riya hasi. Aur Mumbai jaane waali raat ki train mein bhi woh sawaal mere kaanon mein goonjta raha." },
    { end: true }
  ] };
  /* ================= Season 2 · Chapter 9 · Galti ================= */
  C[29] = { title: "Galti", names: ["Sweet — Galti Bhi, Maafi Bhi", "Normal — Ek Photo, Do Kahaniyan", "Quiet — Ansuna Phone"], script: [
    { scene: { bg: "office", rain: 0, tint: false } },
    { card: "Season 2 · Chapter 9 · Galti" },
    { n: "Diwali se do hafte pehle. Riya ka sawaal ab bhi kaanon mein tha. Aur maine faisla kar liya tha. Bas ek dikkat thi — mujhe ring ke baare mein kuch nahi pata tha." },
    { s: N, t: "({g:Meher|Vihaan} ki desk pe, dheere se) Ek kaam hai. Kisi ko mat batana. Khaas kar {li} ko." },
    { s: "{g:Meher|Vihaan}", t: "(kursi ghuma ke, aankhein badi) Ruko. Kya tum… OMG. Haan! Main {g:aaungi|aaunga}. Zaveri Bazaar, Thursday shaam. Mere chacha ka jeweller dost hai. Sasta aur sachcha." },
    { s: "{g:Meher|Vihaan}", t: "Bas ek shart. Jab haan ho jaaye, toh sabse pehle mujhe batana. Riya se bhi pehle." },
    { n: "Thursday. Wahi din jab {li} ki Heritage library ka reopening tha. Shaam saat baje. Maine socha tha chhe baje tak wapas aa {g:jaunga|jaungi}." },

    { scene: { bg: "inside", rain: 0, tint: true } },
    { n: "Zaveri Bazaar. Sone ki chamak, tang galiyan, aur ek chhoti si dukaan jahan teen ghante ek pal mein beet gaye." },
    { s: "Jeweller Kaka", t: "Simple chahiye? Toh yeh dekho. Patli si band, beech mein ek chhota sa neela patthar. Bilkul baarish ki boond jaisa." },
    { s: "{g:Meher|Vihaan}", t: "(phone se photo kheench ke) Yeh wala. Neela. Uske chhate jaisa. Perfect." },
    { n: "Phone pe dekha. 7:48. Aur aath missed calls. Sab {li} ke." },
    { s: "{li} · 📱 text", t: "Shuru ho gaya. Tumhari seat khaali hai. Sab theek hai na?" },
    { s: "{li} · 📱 text", t: "Theek hai. Koi baat nahi." },

    { scene: { bg: "library", rain: 0.5, tint: true } },
    { rain: 0.5 },
    { n: "Raat nau baje. Library khaali. Chairs side mein, genda phool zameen pe. {li} akele seedhiyon pe {g:baithi thi|baitha tha}." },
    { sprite: "li" },
    { s: A, t: "(bina dekhe) {g:Meher|Vihaan} ne Instagram pe story daali thi. Zaveri Bazaar. Tum dono. Hasi mazaak. Caption — 'Big secret mission 🤫'." },
    { s: A, t: "Main shak nahi {g:kar rahi|kar raha}, {name}. Sach mein nahi. Bas… aaj mera din tha. Pehli baar kuch mera tha. Aur meri sabse zaroori seat khaali thi." },
    { choice: [
      { t: "Uske paas seedhiyon pe baith ke kehna: “Galti meri hai. Koi bahaana nahi. Main wahan nahi {g:tha|thi}, aur mujhe hona chahiye tha.”", aff: 10, flag: "ownedIt", then: [
        { s: A, t: "(pehli baar meri taraf dekh ke) Tumne bahaana nahi diya. (lambi saans) Pata hai, sabse zyada dar isi baat ka tha ki tum bahaana doge." },
        { s: N, t: "Aur woh secret mission… main abhi nahi bata sakta. Par vaada hai, jab bataunga, tum hasogi. Gussa nahi karogi.".replace("sakta", "{g:sakta|sakti}").replace("bataunga", "{g:bataunga|bataungi}").replace("hasogi", "{g:hasogi|hasoge}").replace("karogi", "{g:karogi|karoge}") }
      ] },
      { t: "“Woh {g:Meher|Vihaan} ki galti hai, usne story kyun daali!”", aff: 2, flag: "blamedMV", then: [
        { s: A, t: "(halki si thakaan wali muskaan) Story ki baat nahi hai, {name}. Seat ki baat hai." },
        { n: "Main chup ho {g:gaya|gayi}. Woh sahi {g:thi|tha}. Kisi aur pe ungli uthaana aasaan tha. Sach maanna mushkil." }
      ] },
      { t: "Kuch na kehna, bas uska haath pakad lena", act: true, aff: 5, then: [
        { n: "Usne haath nahi chhudaaya. Par kuch der tak kuch bola bhi nahi. Library ki purani ghadi ne nau baje ka ghanta bajaaya." }
      ] }
    ] },
    { sprite: null },

    { scene: { bg: "library", rain: 0.5, tint: false } },
    { n: "Maine phone nikaala aur ek video chalaaya. Reopening ka live stream, jo Trust ne daala tha. Pehli baar dekha." },
    { n: "Screen pe {li}. Mike ke saamne, haathon mein kaanpta kaagaz. 'Yeh chhat 1890 se baarish sun rahi hai. Aaj se phir sunegi.' Taaliyan." },
    { sprite: "li" },
    { s: N, t: "Tumne yeh line apne aap likhi? 'Baarish sun rahi hai'? Yeh toh meri Rain Pavilion waali line jaisi hai." },
    { s: A, t: "(halki hasi, aankhein geeli) Haan. Churaayi hai. Tumhari. Ab hisaab barabar. Tumne meri shaam churaayi, maine tumhari line." },
    { choice: [
      { t: "Wahin library mein, khaali hall mein, uske liye taaliyan bajaana aur kehna: “Phir se bolo. Main sunna {g:chahta|chahti} hoon. Pehli line se.”", act: true, aff: 8, flag: "privateSpeech", then: [
        { n: "Usne kaagaz nikaala. Seedhiyon pe khade hoke, ek darshak ke liye, poori speech phir se padhi. Is baar haath nahi kaanpe." },
        { s: A, t: "(aakhri line ke baad, sharmaa ke) Yeh wala version zyada accha tha. Kyunki seat bhari thi." }
      ] },
      { t: "“Agli baar main sabse pehle {g:pahunchunga|pahunchungi}. Aage ki row mein.”", aff: 5, then: [
        { s: A, t: "Aage ki row, haan? Main yaad rakhungi. Aur uske saath ek bada sa phoolon ka gucchha bhi.".replace("rakhungi", "{g:rakhungi|rakhunga}") }
      ] }
    ] },
    { sprite: null },
    { s: "{g:Meher|Vihaan} · 📱 text", t: "SORRY SORRY SORRY. Story delete kar di. Maine socha sirf close friends ko jaa rahi hai. {li} close friends mein hai. Mera dimaag. 🤦" },
    { s: "{li} · 📱 text", t: "(raat ek baje) Waise secret mission ke baare mein main kuch nahi poochungi. Par agar woh mere baare mein hai… toh theek hai. 💙".replace("poochungi", "{g:poochungi|poochunga}") },
    { n: "Ring ka chhota sa dabba meri jeb mein tha. Bhaari nahi tha. Par us raat woh duniya ki sabse bhaari cheez lagi." },
    { end: true }
  ] };

  /* ================= Season 2 · Chapter 10 · Diwali Ghar Pe ================= */
  C[30] = { title: "Diwali Ghar Pe", names: ["Sweet — Ek Diya, Do Haath", "Normal — Rangoli Aur Fatake", "Quiet — Chhat Pe Akele Taare"], script: [
    { scene: { bg: "inside", rain: 0, tint: false } },
    { card: "Season 2 · Chapter 10 · Diwali Ghar Pe" },
    { n: "Diwali. Ghar. Mummy ki rasoi se ghughra, mathiya aur chorafali ki khushboo. Papa seedhi pe chadhe hue, lights ki ulji hui ladi ke saath. Aur Tanvi, sab pe hukum chalaati hui." },
    { s: "Mummy", t: "Beta, {li} kab pahunch rahi hai? Maine uske liye alag se mohanthal banaaya hai. Kam meetha. Usne video call pe bataaya tha.".replace("pahunch rahi", "pahunch {g:rahi|raha}") },
    { s: "Tanvi", t: "{g:Bhaiya|Didi}, ek baat. Is baar rangoli main aur {li} {g:Didi|Bhaiya} banayenge. Tum sirf rang pakdaoge. Koi design ka gyaan nahi chahiye. Architect sahab." },
    { n: "Ghanti baji. Darwaze pe {li}, haath mein mithai ka dabba aur ek chhota sa diya, khud ka banaaya hua." },
    { sprite: "li" },
    { s: A, t: "(Mummy ke pair chhoote hue) Aunty, yeh diya maine Trust ki purani mitti se banaaya hai. 1890 ki mitti. Aapke ghar ke liye." },
    { s: "Mummy", t: "(diya haathon mein lekar, chup) …Isse mandir mein rakhenge. Har saal." },
    { sprite: null },

    { scene: { bg: "inside", rain: 0, tint: true } },
    { n: "Shaam. Aangan. Tanvi aur {li} zameen pe, chaak se rangoli ka design. Beech mein ek kamal, aas paas mor. Aur main, rang ki katoriyan pakde, poori tarah bekaar." },
    { s: "Tanvi", t: "Neela! Neela do! Nahi, woh aasmaani. Gehra neela. Navy blue. (shararat se) Ab toh tumhe pata hona chahiye, {g:Bhaiya|Didi}." },
    { sprite: "li" },
    { s: A, t: "(mor ke pankh mein rang bharte hue) Aao. Ek pankh tum bhi bharo. Galat bhi hua toh chalega. Rangoli mein galti bhi design ban jaati hai." },
    { choice: [
      { t: "Uske haath ke saath haath rakh ke ek pankh bharna, aur kone mein chhota sa navy chhata bana dena", act: true, aff: 10, flag: "rangoliUmbrella", then: [
        { s: "Tanvi", t: "Mor ke paas chhata?! Yeh kya design hai?! (phir rukte hue) …Oh. Accha. Theek hai. Rehne do. Cute hai." },
        { s: A, t: "(dheere se) Saal bhar yaad rahega yeh. Mor, kamal, aur ek chhota sa chhata jo kisi ko samajh nahi aayega. Sirf humein." }
      ] },
      { t: "“Main sirf rang dene ka kaam {g:karunga|karungi}. Tum dono artist ho.”", aff: 4, then: [
        { s: A, t: "(muskaan) Theek hai, assistant. Par aakhri bindu tum lagaoge. Rangoli adhoori nahi chhodte." }
      ] },
      { t: "Papa ke saath chhat pe lights lagaane chale jaana", act: true, aff: 2, then: [
        { n: "Chhat se neeche dekha. {li} aur Tanvi rangoli pe jhuki, has rahi thi. Jaise behnein. Lights ki ladi mere haath mein jal uthi." }
      ] }
    ] },
    { sprite: null },

    { scene: { bg: "garba", rain: 0, tint: true } },
    { n: "Raat. Lakshmi pooja ke baad. Har deewar pe diye, poori gali mein roshni, aur aasman mein fatakon ke phool." },
    { s: "Papa", t: "(chhat pe, dheere se, sirf mujhse) Beta, ek baat kahun? {li} ke Papa ka phone aaya tha aaj subah. Diwali ki badhai ke saath unhone ek aur baat kahi." },
    { s: "Papa", t: "Unhone kaha — 'Bachche taiyaar hon, toh hum bhi taiyaar hain.' (meri jeb ki taraf dekh ke, muskaan) Aur tumhari jeb mein jo dabba hai, woh do din se bahut dikh raha hai." },
    { choice: [
      { t: "Papa ko dabba kholke dikhaana aur poochna: “Aapko pasand aaya? Aapki haan chahiye thi.”", act: true, aff: 8, flag: "papaBlessing", then: [
        { s: "Papa", t: "(neela patthar dekh ke, lambi chuppi) Tumhari Mummy ko maine ek pital ki anguthi di thi. Usne aaj tak nahi utaari. Yeh bhi aisi hi hai. Sachchi." },
        { s: "Papa", t: "Meri haan toh usi din thi jab woh Navrang ka chhata lekar ghar aayi thi. Ja. Aashirvaad hai.".replace("aayi thi", "{g:aayi thi|aaya tha}") }
      ] },
      { t: "“Papa! Aapko kaise pata?!” (sharma ke)", aff: 5, then: [
        { s: "Papa", t: "Baap hoon. Aur Tanvi ne bata diya. (hasi) Mat ghabra. Hum sab khush hain." }
      ] }
    ] },
    { sprite: "li" },
    { s: A, t: "(chhat pe aate hue, haath mein do phuljhadi) Tum dono yahan kya khusar-phusar kar rahe ho? Aao, ek phuljhadi saath mein." },
    { n: "Papa muskura ke neeche chale gaye. Chhat pe sirf hum dono, aur do jalti phuljhadiyaan jinki chingaariyaan hawa mein naach rahi thi." },
    { s: A, t: "Pata hai, mere ghar mein Diwali bahut shaant hoti hai. Bas hum teen. Yahan… yahan lagta hai ghar khud has raha hai." },
    { s: N, t: "Toh yeh tumhara bhi ghar hai. Har Diwali. Mummy ne diya mandir mein rakh diya hai. Ab tum chahkar bhi nahi bhaag {g:sakti|sakte}.", when: "aff>=70" },
    { s: N, t: "Toh har Diwali yahin aana. Mummy ne pehle hi kam meetha mohanthal ka vaada kar diya hai.", when: "aff<70" },
    { s: A, t: "(phuljhadi ki aakhri chingaari ke saath, dheere se) Yeh mera favourite Diwali hai. Ab tak ka." },
    { sprite: null },
    { n: "Neeche se Tanvi ki awaaz: 'Mohanthal khatam ho raha hai! Jaldi aao!' Hum dono haste hue neeche bhaage. Jeb mein dabba wahi tha. Bas sahi pal ka intezaar." },
    { end: true }
  ] };

  /* ================= Season 2 · Chapter 11 · Sawaal ================= */
  C[31] = { title: "Sawaal", names: ["Sweet — Ek Sawaal, Ek Haan", "Normal — Neela Patthar", "Quiet — Kaanpte Haath, Pakki Haan"], script: [
    { scene: { bg: "office", rain: 0, tint: false } },
    { card: "Season 2 · Chapter 11 · Sawaal" },
    { n: "December. Mumbai mein halki thand, jo Ahmedabad waalon ke liye thand nahi hoti. Aur meri jeb mein woh dabba, teen hafte se." },
    { s: "{g:Meher|Vihaan}", t: "Teen hafte?! Ring teen hafte se jeb mein ghum rahi hai? Kab poochoge?! Mera BP badh raha hai." },
    { s: "Shirin Kapadia", t: "(paas se guzarte hue, bina ruke) Sahi pal kabhi nahi aata, {name}. Pal banana padta hai. Waise kal shaam Trust ki library mein Fort Heritage Walk ka closing hai. Mujhe bhi invite aaya hai. Main nahi ja rahi." },
    { s: "{g:Meher|Vihaan}", t: "(aankhein phaad ke) Ma'am ko bhi pata hai?! Is studio mein koi secret secret nahi rehta." },

    { scene: { bg: "library", rain: 0, tint: true } },
    { n: "Agli shaam. Heritage Trust ki library. Ab saaf, roshan, nayi chhat ke neeche purani kitaabein. Event khatam, log ja chuke the." },
    { sprite: "li" },
    { s: A, t: "Aaj tum bahut chup ho. Teen hafte se chup ho. (aankh sikod ke) Kuch toh hai. Secret mission waala?" },
    { n: "Wahi khidki. Wahi jagah jahan monsoon ki raat ek mombatti thi. Aaj bahar Marine Drive ki lights saaf chamak rahi thi." },
    { choice: [
      { t: "Ghutne pe baith ke dabba kholna — neela patthar, baarish ki boond jaisa", act: true, aff: 12, flag: "playerProposed", then: [
        { s: N, t: "Navrang ki pehli baarish mein tumne mujhe ek chhata diya tha. Bina naam pooche. Tab se main us chhate ke neeche hi {g:raha|rahi} hoon." },
        { s: N, t: "Ab main poochna {g:chahta|chahti} hoon. Har baarish mein, har shehar mein, har haveli aur har library mein… kya tum mere saath rahogi?".replace("rahogi", "{g:rahogi|rahoge}") },
        { s: A, t: "(dono haath munh pe, aankhon se aansu) Secret mission… yeh tha? Zaveri Bazaar… yeh?! (hasi aur rona saath mein) Maine teen hafte shak kiya ki tum kuch chhupa rahe ho!".replace("chhupa rahe", "chhupa {g:rahe|rahi}") },
        { s: A, t: "Haan. Haan! Sau baar haan. Ab utho, zameen thandi hai. (haath aage karte hue) Pehnao. Jaldi. Haath kaanp raha hai." }
      ] },
      { t: "Kuch kehne hi wale the ki {li} ne apne bag se ek chhota sa dabba nikaala", act: true, aff: 12, flag: "liProposed", then: [
        { s: A, t: "Ruko. Kuch mat bolo. Teen hafte se main ise bag mein ghuma {g:rahi|raha} hoon. Aur tum teen hafte se ajeeb ho. Toh main pehle bol {g:deti|deta} hoon." },
        { s: A, t: "(dabba kholte hue — andar ek patli si chaandi ki anguthi, jispe chhota sa chhata khuda tha) Navy blue chhata. Mere paas tha, tumhare paas aaya, phir hum dono ka ho gaya. Kya tum… hamesha ke liye mera chhata banoge?".replace("banoge", "{g:banoge|banogi}") },
        { s: N, t: "(hasi rokte hue, jeb se apna dabba nikaal ke) Toh ab do anguthiyaan hain. Aur jawab ek hi hai. Haan." },
        { s: A, t: "(mera dabba dekh ke, aankhein badi) Secret mission?! Zaveri Bazaar?! Tum bhi?! (zor se hasi, phir aansu) Hum dono pagal hain. Haan. Haan. Haan." }
      ] },
      { t: "Bina ghutne ke, khidki ke paas khade khade, uska haath pakad ke seedha poochna", act: true, aff: 9, flag: "simpleProposal", then: [
        { s: N, t: "Mere paas koi speech nahi hai. Bas ek sawaal hai, jo do saal se mere andar baarish ki tarah gir raha hai. Mujhse shaadi karogi?".replace("karogi", "{g:karogi|karoge}") },
        { s: A, t: "(chupchaap, aankhein bhar ke) Speech nahi chahiye thi. Bas yahi chahiye tha. Seedha. Sachcha. Tumhari tarah. Haan." }
      ] }
    ] },
    { n: "Library ki purani ghadi ne aath baje ka ghanta bajaaya. Kisi ne kabhi itna sundar ghanta nahi suna hoga." },
    { sprite: null },

    { scene: { bg: "marine", rain: 0.4, tint: true } },
    { rain: 0.4 },
    { n: "Marine Drive. December mein baarish nahi hoti. Par us raat, kuch boondein giri. Jaise aasman ne bhi sun liya ho." },
    { sprite: "li" },
    { s: A, t: "(navy blue chhata kholte hue, hasi) Dekha? Baarish humara pata jaanti hai. December mein bhi." },
    { s: A, t: "Ab sabse pehle kise batayein? Mummy? Papa? Tanvi?" },
    { choice: [
      { t: "“{g:Meher|Vihaan} ko. Vaada kiya tha.” — aur dono ki selfie bhejna", act: true, aff: 6, flag: "toldMV", then: [
        { s: "{g:Meher|Vihaan} · 📱 call", t: "(chillaate hue) HAAAAN?! MAIN {g:JAANTI THI|JAANTA THA}!!! Maine Zaveri Bazaar mein hi bol diya tha! Mujhe bridesmaid ya best man jo bhi ho, woh banna hai!" }
      ] },
      { t: "Group video call — dono families ek saath", act: true, aff: 6, then: [
        { s: "Mummy", t: "(screen pe, aansu pochte hue) Maine kaha tha na, Diwali ka diya shubh hai!" },
        { s: "Tanvi", t: "Main pehle se jaanti thi. Sab jaante the. Bas tum dono ko nahi pata tha ki hum sab jaante the. 😎" }
      ] },
      { t: "Riya ko — jisne pehli baar poocha tha", aff: 5, then: [
        { s: "Riya · 📱 text", t: "AAAAAAA. Main ro rahi hoon. Hostel ke corridor mein. Log dekh rahe hain. Mujhe koi farak nahi padta. 😭💙" }
      ] }
    ] },
    { s: A, t: "(meri ungli mein anguthi ghuma ke, dheere se) Ek baat sach batao. Darr laga tha?" },
    { s: N, t: "Bahut. Utna hi jitna pehli baarish mein laga tha. Aur utni hi khushi bhi." },
    { sprite: null },
    { n: "Lehrein deewar se takraayi. Chhate pe boondein. Aur hum, ek hi chhate ke neeche, ab hamesha ke liye." },
    { end: true }
  ] };

  /* ================= Season 2 · Chapter 12 · Hamesha ================= */
  C[32] = { title: "Hamesha", names: ["Sweet — Hamesha, Isi Chhate Ke Neeche", "Normal — Sagaai Ki Baarish", "Quiet — Shor Ke Beech Ek Haath"], script: [
    { scene: { bg: "campus", rain: 0, tint: false } },
    { card: "Season 2 · Chapter 12 · Hamesha" },
    { n: "Chhe mahine baad. June. Ahmedabad. Sagaai. Aur dono parivaaron ne ek hi jagah chuni thi — Navrang Institute ka courtyard. Prof. Desai ne khud permission dilaayi thi." },
    { n: "Neem ke ped pe genda phoolon ki ladiyan. Courtyard mein lanterns. Aur kone mein wahi purana shade, jahan sab shuru hua tha." },
    { sprite: "riya" },
    { s: R, t: "(clipboard ke saath, Farewell Night jaisi) Lights check. Mandap check. Mehul Kaka ka chai stall check. " + RV + " Bengaluru se aa {g:gaya|gayi}, check. Bas ek cheez baaki — dulha ya dulhan, jo bhi tum ho, abhi tak taiyaar kyun nahi?" },
    { s: RV, t: "(peeche se, hasi) Main sirf isliye aaya hoon ki jury mein jo tumne bachaaya tha, uska karz utaarna hai. Aur free khaana.".replace("aaya", "{g:aaya|aayi}") },
    { sprite: null },
    { s: "{g:Meher|Vihaan}", t: "(seedha ghus ke) Maine kaha tha sabse pehle main {g:jaanungi|jaanunga}. Aur maine jaana. Toh aaj stage ke sabse paas waali kursi meri hai. Riya, bahas mat karna." },
    { s: "Shirin Kapadia", t: "(dheere se, haath mein ek lifafa) Tumhara aur {li} ka. Studio ka pehla joint project — Navrang ke liye ek naya Rain Pavilion. Tohfa samjho. Kaam bhi." },

    { scene: { bg: "garba", rain: 0, tint: true } },
    { n: "Shaam. Dhol. Do parivaar, ek aangan. Mummy laal bandhani mein, {g:Mehta|Shah} Aunty usi rang ki saree mein. Jaise pehle se tay ho." },
    { n: "Aur phir {li} {g:aayi|aaya}. {g:Navy blue lehenge mein, baalon mein mogra|Navy blue sherwani mein, kandhe pe halka sa dupatta}. Wahi rang. Hamesha wahi rang." },
    { sprite: "li" },
    { s: A, t: "(paas aake, dheere se) Itni der se ghoor {g:rahe|rahi} ho. Farewell Night pe bhi yahi kiya tha." },
    { choice: [
      { t: "“Tab bhi pehli baarish yaad aayi thi. Aaj bhi. Bas aaj tum meri ho.”".replace("meri ho", "{g:meri|mere} ho"), aff: 10, flag: "farewellEcho", then: [
        { s: A, t: "(nazar churaate hue, wahi muskaan) Jaan-bujh ke yeh rang chuna hai. Kisi ko phir se yaad dilana tha. Hamesha dilaati rahungi.".replace("dilaati rahungi", "{g:dilaati rahungi|dilaata rahunga}") }
      ] },
      { t: "“Tum… aaj bhi utni hi sundar lag {g:rahi|rahe} ho. Shayad zyada.”", aff: 7, then: [
        { s: A, t: "Seedha bol diya? Bina joke ke? (hasi) Do saal mein yeh nahi badla. Accha hai." }
      ] },
      { t: "Kuch na kehna, bas uska haath pakad ke stage ki taraf chalna", act: true, aff: 5, then: [
        { n: "Bheed raasta deti gayi. Dhol tez hua. Aur humare haath, jo kabhi Ganpati ki bheed mein chhoot gaye the, ab nahi chhoote." }
      ] }
    ] },
    { n: "Anguthiyaan. Neela patthar uski ungli mein. Aur meri ungli mein woh chaandi ki anguthi, jispe ek chhota sa chhata khuda tha." },
    { s: "{g:Mehta|Shah} Uncle", t: "(maaik pe, gala bhar ke) Main zyada nahi bolta. Bas itna — maine kabhi kisi ke saath chhata share nahi kiya tha. Ab do parivaaron ka ek hi chhata hai." },
    { s: "Tanvi", t: "(maaik chheen ke) Aur diary waali poori kahani main shaadi pe sunaungi. Sab log taiyaar rehna! 😈" },
    { sprite: null },

    { scene: { bg: "rain", rain: 2.5, tint: true } },
    { rain: 2.5 },
    { n: "Tabhi. Bina kisi warning ke. Aasman phata. Ahmedabad ki pehli baarish. Saal ki pehli. Theek usi din." },
    { n: "Log idhar udhar bhaage. Lanterns hile. Mehul Kaka ne chai ka stall shade ke neeche khiska diya. Aur Riya ne zor se chillaaya: 'Shade! Sab shade ke neeche!'" },
    { sprite: "li" },
    { n: "Wahi shade. Wahi tin ki chhat. Wahi awaaz. Aur {li} ke haath mein, wahi navy blue chhata. Thoda purana, ek tilli thodi tedhi. Par wahi." },
    { s: A, t: "(chhata mere sar pe karte hue, wahi line, kaanpti awaaz mein) Sketchbook andar rakho. Paper kharab ho jayega." },
    { s: N, t: "Yeh line ab hum dono ki hai. Royalty dono ko milegi." },
    { choice: [
      { t: "Chhata band karke, baarish mein uske saath naachna — jaise poora courtyard sirf humara ho", act: true, aff: 12, flag: "rainDance", then: [
        { n: "Bheegte kapde, bheegte baal, dhol waale ne phir se dhol uthaaya. Ek ek karke sab baarish mein aa gaye — Riya, Tanvi, {g:Meher|Vihaan}, " + RV + ", aur aakhir mein dono Papa bhi." },
        { s: P, t: "(shade ke neeche, Mehul Kaka ke saath chai pite hue) Mehul bhai, maine kaha tha na. Yeh jodi baarish se chhupti nahi. Use sunti hai." },
        { s: K, t: "(aankhein ponchte hue) Haan sir. Aur udhaar bhi chukaati hai." }
      ] },
      { t: "Chhate ke neeche, sab ke beech, uske maathe se maatha laga ke chupchaap khade rehna", act: true, aff: 9, flag: "quietUmbrella", then: [
        { n: "Chaaron taraf shor, hasi, dhol. Aur chhate ke neeche sirf do saansein. Ek boond chhate ke kinaare se giri, humare beech." },
        { s: A, t: "(dheere se) Pehli baar bhi aisa hi tha. Tum, main, baarish. Bas tab hum ajnabi the." }
      ] }
    ] },
    { s: A, t: "Pata hai, sab kuch badal gaya. Shehar, kaam, ghar. Par yeh chhata nahi badla. Aur tum bhi nahi.", when: "aff>=80" },
    { s: N, t: "Kyunki kuch cheezein badalni nahi chahiye. Prof. Desai ka laal pen. Kaka ki chai. Aur yeh chhata.", when: "aff>=80" },
    { s: A, t: "Raasta kabhi kabhi tedha tha, haan. Par har baar hum isi chhate ke neeche wapas aaye. Yahi kaafi hai.", when: "aff<80" },
    { s: N, t: "Tedhe raaste bhi ghar tak pahunchte hain. Aaj pata chala.", when: "aff<80" },
    { sprite: null },

    { scene: { bg: "keyart", rain: 1, tint: true } },
    { n: "Us raat Riya ne ek photo li. Shade ke neeche, ek navy blue chhata, do log, aur peeche poora parivaar — bheega, hasta, nachta." },
    { n: "Caption: 'Pehli baarish. Aakhri chhata. Hamesha.'" },
    { n: "Ek ajnabi ke chhate se shuru hui ek kahani. Navrang ki galiyon se Mumbai ke samundar tak. Aur phir wapas, usi shade ke neeche." },
    { n: "Season 2 yahin khatam hota hai… par kahani abhi baaki hai." },
    { end: true }
  ] };
})();

/* =========================================================
   MESIN SUARA BERSAMA — seluruh laman memakai berkas ini
   1) Rekaman mp3/m4a di folder audio/  → dipakai lebih dulu
   2) Bila rekaman belum ada → dibacakan suara browser,
      mengutamakan suara LAKI-LAKI Indonesia:
      Microsoft Ardi (Edge) → Microsoft Andika (Windows) → suara id-ID lain
   Setelan suara (pilihan suara + kecepatan) disimpan di localStorage
   dengan kunci "visi-ppm-cpl-suara" — sama dengan berkas ver4,
   sehingga setelan Bapak terbawa ke seluruh laman.
   ========================================================= */
const SP = ("speechSynthesis" in window) ? window.speechSynthesis : null;
const MALE = /ardi|andika|male|pria|laki/i;
const PREF_KEY = "visi-ppm-cpl-suara";
let pref = {voice:"", rate:0.95};
try{ Object.assign(pref, JSON.parse(localStorage.getItem(PREF_KEY)||"{}")); }catch(e){}
function savePref(){ try{ localStorage.setItem(PREF_KEY, JSON.stringify(pref)); }catch(e){} }

const players = {};    // id → HTMLAudioElement
const audioOK = {};    // id → true/false (rekaman ditemukan?)
const audioSrc = {};   // id → "audio/xxx.mp3"
const namaRekaman = {};
let now = null;        // {id, kind:"mp3"|"tts"}
let token = 0;
let terjeda = false;   // suara sedang dijeda?
const pendengar = [];  // fungsi yang dipanggil setiap keadaan suara berubah

function idVoices(){ return SP ? SP.getVoices().filter(v=>/^id([-_]|$)/i.test(v.lang)||/indones/i.test(v.name)) : []; }
function pickVoice(){
  const vs=idVoices();
  if(pref.voice){ const v=vs.find(x=>x.name===pref.voice); if(v) return v; }
  return vs.find(v=>/ardi/i.test(v.name)) || vs.find(v=>MALE.test(v.name)) || vs[0] || null;
}

/* potong teks panjang menjadi kalimat pendek (mencegah suara browser berhenti di tengah) */
function potong(t){
  const out=[];
  String(t).split(/(?<=[.;:])\s+/).forEach(k=>{
    if(k.length<=190){ out.push(k); return; }
    let buf=""; k.split(/(?<=,)\s+/).forEach(f=>{ if((buf+" "+f).length>190&&buf){ out.push(buf); buf=f; } else buf=buf?buf+" "+f:f; });
    if(buf) out.push(buf);
  });
  return out.filter(Boolean);
}

function kabari(){ pendengar.forEach(f=>{ try{f(now?now.id:null, terjeda);}catch(e){} }); }
function sedangPutar(id){ return !!now && now.id===id; }
function sedangJeda(){ return terjeda && !!now; }

function hentikan(){
  token++;
  terjeda=false;
  Object.values(players).forEach(a=>{ a.onended=a.onerror=null; a.pause(); try{a.currentTime=0;}catch(e){} });
  if(SP){ try{SP.resume();}catch(e){} SP.cancel(); }
  now=null; kabari();
}

/* =========================================================
   JEDA — menahan suara di tempatnya, bukan menghentikannya.
   Tekan sekali: suara berhenti di titik itu. Tekan lagi:
   diteruskan dari titik yang sama. Berlaku untuk rekaman mp3
   maupun pembacaan suara browser.
   ========================================================= */
function jeda(paksa){
  if(!now) return false;
  const mau = paksa===undefined ? !terjeda : !!paksa;
  if(mau===terjeda) return terjeda;
  if(mau){
    if(now.kind==="mp3"){ const a=players[now.id]; if(a) a.pause(); }
    else if(SP){ try{SP.pause();}catch(e){} }
    terjeda=true;
  } else {
    if(now.kind==="mp3"){ const a=players[now.id]; if(a) a.play().catch(()=>{}); }
    else if(SP){ try{SP.resume();}catch(e){} }
    terjeda=false;
  }
  kabari();
  return terjeda;
}

function getPlayer(id){
  const src = audioSrc[id]; if(!src) return null;
  if(!players[id]){ const a=new Audio(); a.preload="none"; a.src=src; players[id]=a; }
  return players[id];
}

function putar(id, teks, selesaiCb){
  hentikan();   /* hentikan() sekaligus melepas keadaan jeda */
  const my = ++token;
  const selesai = ()=>{ if(my!==token) return; now=null; kabari(); if(selesaiCb) selesaiCb(id); };
  let jatuh=false;
  const bacakan=()=>{
    if(my!==token||jatuh) return; jatuh=true;
    if(!SP){ now=null; kabari(); if(selesaiCb) selesaiCb(id); return; }
    now={id,kind:"tts"}; kabari();
    const parts=potong(teks||""), v=pickVoice(); let i=0;
    const lanjut=()=>{
      if(my!==token) return;
      if(i>=parts.length) return selesai();
      const u=new SpeechSynthesisUtterance(parts[i++]);
      u.lang=(v&&v.lang)||"id-ID"; if(v) u.voice=v; u.rate=pref.rate;
      u.pitch=(v&&MALE.test(v.name))?1:0.8;   /* suara bukan laki-laki: nada diturunkan sedikit */
      u.onend=lanjut; u.onerror=e=>{ if(e.error==="interrupted"||e.error==="canceled") return; lanjut(); };
      SP.speak(u);
    };
    lanjut();
  };
  const a=getPlayer(id);
  if(a && audioOK[id]!==false){
    now={id,kind:"mp3"}; kabari();
    a.onended=selesai;
    a.onerror=()=>{ audioOK[id]=false; kabari(); bacakan(); };
    try{a.currentTime=0;}catch(e){}
    a.play().then(()=>{ if(my===token){ audioOK[id]=true; kabari(); } })
            .catch(()=>{ if(my===token){ audioOK[id]=false; kabari(); bacakan(); } });
  } else bacakan();
}

/* label keterangan sumber suara */
function labelSuara(id){
  const v=pickVoice();
  const browser = v ? ("suara browser "+v.name.replace(/ - .*$/,"").replace(/^Microsoft /,"")) : "suara browser";
  if(audioOK[id]===true) return "Rekaman: "+(namaRekaman[id]||(audioSrc[id]||"").split("/").pop());
  if(audioOK[id]===false || !audioSrc[id]) return "Dibacakan "+browser;
  return "Rekaman "+(audioSrc[id]||"").split("/").pop()+" · bila tidak ada: "+browser;
}

/* nama berkas rekaman yang diharapkan untuk sebuah id */
function berkasAudio(id){ return "audio/"+String(id).toLowerCase().replace(/[^a-z0-9]+/g,"-")+".mp3"; }

/* daftarkan satu butir bersuara */
function daftar(id, src){ audioSrc[id] = src || berkasAudio(id); }

/* uji suara dengan berkas dari komputer (sementara) */
function pilihLokal(id, sesudah){
  const inp=document.createElement("input");
  inp.type="file"; inp.accept="audio/mpeg,audio/mp4,audio/x-m4a,.mp3,.m4a";
  inp.onchange=()=>{ const f=inp.files[0]; if(!f) return;
    hentikan(); delete players[id];
    audioSrc[id]=URL.createObjectURL(f); namaRekaman[id]=f.name+" (sementara)"; audioOK[id]=true;
    if(sesudah) sesudah(id); };
  inp.click();
}

/* ---------- bilah pengaturan suara (dipasang di setiap laman) ---------- */
function bilahSuara(target){
  const host = typeof target==="string" ? document.getElementById(target) : target;
  if(!host) return;
  host.innerHTML = `
   <div class="voicebar">
     <label>Suara browser: <select id="vsel"><option>Mencari suara…</option></select></label>
     <label>Kecepatan <input type="range" id="vrate" min="0.7" max="1.2" step="0.05" value="0.95"> <span id="vrateV">0.95</span></label>
     <button class="ctl" id="vtest" type="button">Uji suara</button>
     <span class="kendali">
       <button class="ctl jeda" id="vjeda" type="button" aria-pressed="false" disabled
               title="Tahan suara di tempatnya; tekan lagi untuk meneruskan">❙❙ Jeda</button>
       <button class="ctl" id="vstop" type="button" disabled>■ Hentikan suara</button>
     </span>
   </div>
   <div class="vhint" id="vhint"></div>`;
  const sel=host.querySelector("#vsel"), hint=host.querySelector("#vhint");
  function isi(){
    if(!SP){ sel.innerHTML="<option>Tidak didukung browser ini</option>"; sel.disabled=true;
      hint.textContent="Browser ini tidak punya suara bawaan. Gunakan rekaman mp3 atau buka di Microsoft Edge / Chrome."; return; }
    const vs=idVoices(), cur=pickVoice();
    if(!vs.length){ sel.innerHTML="<option>Belum ada suara Indonesia</option>"; hint.className="vhint";
      hint.textContent='Perangkat ini belum punya suara Bahasa Indonesia. Buka di Microsoft Edge untuk suara laki-laki "Microsoft Ardi", atau pakai rekaman mp3.'; kabari(); return; }
    sel.innerHTML=vs.map(v=>`<option value="${v.name}" ${cur&&v.name===cur.name?"selected":""}>${v.name}${MALE.test(v.name)?"  — laki-laki":""}</option>`).join("");
    const male=vs.find(v=>/ardi/i.test(v.name))||vs.find(v=>MALE.test(v.name));
    hint.className="vhint"+(male?" ok":"");
    hint.textContent = male ? "Suara laki-laki Indonesia tersedia: "+male.name
      : 'Suara laki-laki Indonesia tidak ditemukan di browser ini (Chrome umumnya hanya punya suara perempuan). Buka di Microsoft Edge untuk suara "Microsoft Ardi", atau pakai rekaman mp3.';
    kabari();
  }
  sel.onchange=e=>{ pref.voice=e.target.value; savePref(); kabari(); };
  const vr=host.querySelector("#vrate"); vr.value=pref.rate; host.querySelector("#vrateV").textContent=pref.rate;
  vr.oninput=()=>{ pref.rate=+vr.value; host.querySelector("#vrateV").textContent=vr.value; savePref(); };
  host.querySelector("#vtest").onclick=()=>{ if(!SP) return; hentikan(); const v=pickVoice();
    const u=new SpeechSynthesisUtterance("Selamat datang di Program Studi Sarjana Terapan Teknik Manufaktur, Politeknik Negeri Padang.");
    u.lang=(v&&v.lang)||"id-ID"; if(v) u.voice=v; u.rate=pref.rate; u.pitch=(v&&MALE.test(v.name))?1:0.8; SP.speak(u); };
  const bJeda=host.querySelector("#vjeda"), bStop=host.querySelector("#vstop");
  bJeda.onclick=()=>jeda();
  bStop.onclick=hentikan;
  /* tombol Jeda & Hentikan menyala hanya bila ada suara berjalan */
  pendengar.push((aktif,dijeda)=>{
    const ada=!!aktif;
    bJeda.disabled=!ada; bStop.disabled=!ada;
    bJeda.setAttribute("aria-pressed", ada && dijeda);
    bJeda.textContent = (ada && dijeda) ? "▶ Lanjutkan" : "❙❙ Jeda";
  });
  isi();
  if(SP){ SP.onvoiceschanged=isi; setTimeout(isi,800); }
}

/* tanda keadaan jeda pada seluruh laman (lampu & denyut berhenti berkedip) */
pendengar.push((aktif,dijeda)=>{
  if(document.body) document.body.classList.toggle("dijeda", !!aktif && !!dijeda);
});

/* tombol papan ketik: SPASI = jeda/lanjut · ESC = hentikan */
document.addEventListener("keydown",e=>{
  const t=e.target, ketik = t && (t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.tagName==="SELECT"||t.isContentEditable);
  if(ketik || !now) return;
  if(e.code==="Space"){ e.preventDefault(); jeda(); }
  else if(e.key==="Escape"){ hentikan(); }
});

window.SUARA = {daftar, putar, hentikan, jeda, sedangPutar, sedangJeda, labelSuara, berkasAudio,
  pilihLokal, bilahSuara, pendengar, pref, pickVoice, idVoices, MALE, ada:!!SP};

/* =========================================================
   ASET BERSAMA — kop tiga lambang, menu enam laman bersuara,
   pembangun tombol ON/OFF, dan papan kendali umum.
   Dipakai oleh seluruh laman situs.
   ========================================================= */
const D = window.DATA_OBE;

/* ---------- warna ---------- */
function hexToRgb(h){h=String(h).replace("#","");return [0,2,4].map(i=>parseInt(h.substr(i,2),16));}
function mix(h,t,k){const a=hexToRgb(h),b=hexToRgb(t);return "rgb("+a.map((v,i)=>Math.round(v+(b[i]-v)*k)).join(",")+")";}
function vars(el,[c1,c2]){
  el.style.setProperty("--c1",c1); el.style.setProperty("--c2",c2);
  el.style.setProperty("--l1",mix(c1,"#ffffff",.62)); el.style.setProperty("--l2",mix(c2,"#ffffff",.72));
  el.style.setProperty("--d1",mix(c2,"#000000",.18)); el.style.setProperty("--d2",mix(c2,"#000000",.48));
}

/* ---------- kop ---------- */
function pasangKop(judul, sub){
  const host=document.getElementById("kop"); if(!host) return;
  host.className="kop";
  host.innerHTML=`
    <div class="logos kiri">
      <div class="logo" id="logo-kementerian"></div>
      <span class="sep"></span>
      <div class="logo" id="logo-diktisaintek"></div>
    </div>
    <div class="mid">
      <div class="min">Politeknik Negeri Padang · Jurusan Teknik Mesin</div>
      <h1>${judul}</h1>
      <div class="sub">${sub}</div>
    </div>
    <div class="logos kanan"><div class="logo" id="logo-pnp"></div></div>`;
  pasangLogo("logo-kementerian",LOGO.kementerian);
  pasangLogo("logo-diktisaintek",LOGO.diktisaintek);
  pasangLogo("logo-pnp",LOGO.pnp);
}

/* ---------- menu enam laman — setiap menu bersuara ---------- */
function pasangMenu(aktifNo){
  const host=document.getElementById("menu"); if(!host) return;
  host.className="menu";
  host.innerHTML = D.MENU.map(m=>`
    <a class="mitem${m.no===aktifNo?" aktif":""}" href="${m.berkas}" data-menu="${m.id}"
       style="--c1:${m.warna[0]};--c2:${m.warna[1]};--l1:${mix(m.warna[0],"#ffffff",.62)};--l2:${mix(m.warna[1],"#ffffff",.72)};--d1:${mix(m.warna[1],"#000000",.18)};--d2:${mix(m.warna[1],"#000000",.48)}"
       ${m.no===aktifNo?'aria-current="page"':""}>
      <button class="spk" type="button" data-spk="${m.id}" aria-pressed="false"
              title="Dengarkan keterangan laman ini" aria-label="Dengarkan keterangan laman ${m.judul}">
        <svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9c1.5 1.5 1.5 4.5 0 6M19 6c3 3 3 9 0 12"/></svg>
      </button>
      <span class="mtop"><span class="mbadge"><svg viewBox="0 0 48 48" aria-hidden="true">${ICONS[m.ikon]}</svg></span></span>
      <span class="mno">LAMAN ${m.no}</span>
      <span class="mjudul">${m.judul}</span>
      <span class="mket">${m.ket}</span>
    </a>`).join("");
  D.MENU.forEach(m=>SUARA.daftar(m.id, "audio/"+m.id.toLowerCase()+".mp3"));
  host.querySelectorAll("[data-spk]").forEach(b=>{
    b.addEventListener("click",ev=>{
      ev.preventDefault(); ev.stopPropagation();
      const id=b.dataset.spk;
      if(SUARA.sedangPutar(id)) SUARA.hentikan(); else SUARA.putar(id, D.TEKS_SUARA[id]);
    });
  });
  SUARA.pendengar.push(aktif=>{
    host.querySelectorAll("[data-spk]").forEach(b=>b.setAttribute("aria-pressed", b.dataset.spk===aktif));
  });
}

/* ---------- pengantar laman ---------- */
function pasangIntro(host, ikon, warna, judul, teks){
  const el = typeof host==="string"?document.getElementById(host):host;
  if(!el) return;
  el.className="intro";
  el.innerHTML=`<div class="ih"><span class="gnum" style="width:30px;height:30px;border-radius:10px;background:linear-gradient(140deg,${warna[0]},${warna[1]})">
      <svg viewBox="0 0 48 48" aria-hidden="true" style="width:19px;height:19px;stroke:#fff;fill:none;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round">${ICONS[ikon]}</svg>
    </span><b>${judul}</b></div><p>${teks}</p>`;
}

/* ---------- pil ringkasan ---------- */
function pasangPil(host, daftar){
  const el = typeof host==="string"?document.getElementById(host):host;
  if(!el) return;
  el.className="rangkum";
  el.innerHTML = daftar.map(([n,t])=>`<span class="pil"><b>${n}</b> ${t}</span>`).join("");
}

/* =========================================================
   PAPAN ON/OFF UMUM
   items  : [{id, kode, judul, warna:[c1,c2], ikon, meta:[..], teks}]
   isiKartu(it) → HTML isi kartu yang muncul saat tombol ON
   ========================================================= */
function buatPapan(opsi){
  const {kisi, buka, items, kolom="p", isiKartu, sesudahRender} = opsi;
  const gHost = typeof kisi==="string"?document.getElementById(kisi):kisi;
  const oHost = typeof buka==="string"?document.getElementById(buka):buka;
  const byId = Object.fromEntries(items.map(x=>[x.id,x]));
  const state = new Set();
  items.forEach(x=>SUARA.daftar(x.id, "audio/"+x.id.toLowerCase()+".mp3"));

  gHost.className="grid "+kolom;
  gHost.innerHTML="";
  items.forEach(it=>{
    const b=document.createElement("button");
    b.className="tile"; b.type="button"; b.dataset.id=it.id; vars(b,it.warna);
    b.innerHTML=`
      <span class="ttop"><span class="badge"><svg viewBox="0 0 48 48" aria-hidden="true">${ICONS[it.ikon]}</svg></span><span class="state">OFF</span></span>
      <span class="code">${it.kode||it.id}</span>
      <span class="title">${it.judul}</span>
      <span class="aud">${SPK}<span data-aud="${it.id}">${SUARA.labelSuara(it.id)}</span></span>
      ${it.meta&&it.meta.length?`<span class="meta">${it.meta.map(m=>`<span class="mt">${m}</span>`).join("")}</span>`:""}`;
    b.addEventListener("click",()=>pindah(it.id));
    gHost.appendChild(b);
  });

  function pindah(id,paksa){
    const on = paksa===undefined ? !state.has(id) : paksa;
    if(on){ state.add(id); SUARA.putar(id, D.TEKS_SUARA[id]); }
    else { state.delete(id); if(SUARA.sedangPutar(id)) SUARA.hentikan(); }
    render();
  }
  function render(){
    gHost.querySelectorAll(".tile").forEach(t=>{
      const on=state.has(t.dataset.id);
      t.setAttribute("aria-pressed",on);
      t.querySelector(".state").textContent = on?"ON":"OFF";
      t.classList.toggle("playing", SUARA.sedangPutar(t.dataset.id));
    });
    const nyala = items.filter(x=>state.has(x.id));
    oHost.className="open";
    oHost.innerHTML = nyala.map(x=>`
      <div class="card" style="--c1:${x.warna[0]};--c2:${x.warna[1]}">
        <div class="dh"><span class="dot"></span><b>${(x.kode||x.id)} · ${x.judul}</b>
          <span class="status ${SUARA.sedangPutar(x.id)?"ada":"sebagian"}" data-aud="${x.id}" style="margin-left:auto">${SUARA.labelSuara(x.id)}</span></div>
        ${isiKartu(x)}
        <div class="player"><button class="pick" data-pick="${x.id}">Coba suara dari komputer…</button></div>
      </div>`).join("");
    oHost.querySelectorAll("[data-pick]").forEach(b=>b.onclick=()=>SUARA.pilihLokal(b.dataset.pick,id=>{pindah(id,true);}));
    if(sesudahRender) sesudahRender(nyala, oHost);
  }
  SUARA.pendengar.push(()=>{
    gHost.querySelectorAll(".tile").forEach(t=>t.classList.toggle("playing",SUARA.sedangPutar(t.dataset.id)));
    document.querySelectorAll("[data-aud]").forEach(e=>{ e.textContent=SUARA.labelSuara(e.dataset.aud); });
  });
  render();
  return {render, pindah, items, state,
    semua:()=>{ items.forEach(x=>state.add(x.id)); SUARA.hentikan(); render(); },
    kosong:()=>{ state.clear(); SUARA.hentikan(); render(); }};
}

/* ---------- jejak kaki laman ---------- */
function pasangFooter(teks){
  const f=document.getElementById("foot"); if(!f) return;
  f.innerHTML = teks + ` · Suara: rekaman <code>audio/</code> bila ada, jika tidak dibacakan suara browser (utamakan <b>Microsoft Ardi</b>). Data terpadu di <code>window.DATA_OBE</code>.`;
}

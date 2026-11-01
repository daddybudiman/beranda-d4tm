/* =========================================================
   LAMBANG DIAGRAM — SVG 48×48, garis putih (stroke #fff)
   Setiap butir memiliki lambangnya sendiri.
   Kelas .f = bidang terisi putih.
   ========================================================= */
const ICONS={

/* ---------- Visi · PPM · CPL (dari ver4, dipertahankan) ---------- */
 kampus:`<path d="M5 18L24 7l19 11z"/><path d="M9 22v13M17 22v13M31 22v13M39 22v13"/><path d="M5 39h38"/><path class="f" d="M24 11.5l1.5 3 3.3.4-2.4 2.3.6 3.3-3-1.6-3 1.6.6-3.3-2.4-2.3 3.3-.4z"/>`,
 cerdashijau:`<circle cx="18" cy="24" r="7"/><circle cx="18" cy="24" r="2.4" class="f"/>${[0,45,90,135,180,225,270,315].map(a=>`<rect class="f" x="16.3" y="11.5" width="3.4" height="5" rx="1" transform="rotate(${a} 18 24)"/>`).join("")}<path d="M28 38c0-12 6-19 16-19 0 11-6 19-16 19z"/><path d="M28 38l10-11"/>`,
 gearflow:`<circle cx="19" cy="21" r="7"/><circle cx="19" cy="21" r="2.5" class="f"/>${[0,45,90,135,180,225,270,315].map(a=>`<rect class="f" x="17.3" y="8.5" width="3.4" height="5" rx="1" transform="rotate(${a} 19 21)"/>`).join("")}<path d="M28 36h12m-4-4 4 4-4 4"/><path d="M8 36h10"/><path d="M33 14l2.5 2.5L41 11"/>`,
 robot:`<path d="M8 41h18"/><path d="M17 41v-5"/><circle cx="17" cy="33" r="3"/><path d="M18.5 30.5 26 18"/><circle cx="27" cy="16" r="3"/><path d="M29.8 17 37 21"/><path d="M37 21l4-3.5M37 21l4 3.5"/><circle cx="37" cy="9" r="1.6" class="f"/><circle cx="43" cy="9" r="1.6" class="f"/><path d="M37 9h6"/>`,
 bulb:`<path d="M22 7a10 10 0 0 0-6 18v4h12v-4a10 10 0 0 0-6-18z"/><path d="M17 33h10M18.5 37h7"/><path d="M22 18v6M19.5 21l2.5-3 2.5 3"/><path d="M32 17l8-8m-5 0h5v5"/>`,
 book:`<path d="M6 36c6-3 12-3 18 0 6-3 12-3 18 0V20c-6-3-12-3-18 0-6-3-12-3-18 0z"/><path d="M24 20v16"/><path d="M17 10c2.5-3.5 5-3.5 7 0s4.5 3.5 7 0-4.5-3.5-7 0-4.5 3.5-7 0z"/>`,
 shield:`<path d="M24 5l15 5.5v10c0 10.5-6.5 17-15 21-8.5-4-15-10.5-15-21v-10z"/><path class="f" d="M24 14.5l2.5 5.2 5.6.6-4.2 3.8 1.2 5.5L24 26.8l-5.1 2.8 1.2-5.5-4.2-3.8 5.6-.6z"/>`,
 atom:`<ellipse cx="24" cy="24" rx="17" ry="6.5"/><ellipse cx="24" cy="24" rx="17" ry="6.5" transform="rotate(60 24 24)"/><ellipse cx="24" cy="24" rx="17" ry="6.5" transform="rotate(120 24 24)"/><circle cx="24" cy="24" r="3.2" class="f"/>`,
 decide:`<circle cx="20" cy="20" r="11"/><path d="M28 28l12 12"/><path d="M20 27v-6M20 21l-4.5-5M20 21l4.5-5"/><circle cx="15.5" cy="15" r="1.8" class="f"/><circle cx="24.5" cy="15" r="1.8" class="f"/>`,
 compass:`<circle cx="24" cy="9" r="3"/><path d="M24 12l-10 27M24 12l10 27"/><path d="M17.5 30h13"/><path d="M10 41a18 18 0 0 0 28 0"/>`,
 gauge:`<path d="M8 30a16 16 0 0 1 32 0"/><path d="M24 30l8-9"/><circle cx="24" cy="30" r="2.6" class="f"/><path d="M12 22l2.5 1.6M24 14v3M36 22l-2.5 1.6"/><path d="M16 39l4 3.5 9-8"/>`,
 monitor:`<rect x="6" y="8" width="36" height="24" rx="3"/><path d="M24 32v6M17 40h14"/><rect x="19" y="15" width="10" height="10" rx="1.5"/><path d="M22 12v3M26 12v3M22 25v3M26 25v3M16 18h3M16 22h3M29 18h3M29 22h3"/>`,
 leaf:`<path d="M12 33c0-15 10-23 27-23 0 15-9 24-25 24z"/><path d="M12 33l16-14"/><path d="M7 41h14m-4-4 4 4-4 4"/>`,
 team:`<circle cx="24" cy="14" r="5"/><circle cx="12" cy="19" r="4"/><circle cx="36" cy="19" r="4"/><path d="M15 37c0-7 4-11 9-11s9 4 9 11"/><path d="M4 36c0-5 3-8 8-8 1.5 0 3 .3 4 1M44 36c0-5-3-8-8-8-1.5 0-3 .3-4 1"/>`,
 gantt:`<path d="M7 7v32h34"/><path d="M12 13h13" stroke-width="4"/><path d="M17 21h14" stroke-width="4"/><path d="M23 29h9" stroke-width="4"/><circle cx="37" cy="12" r="6"/><path d="M37 9v6M35 10.5h3a1.5 1.5 0 0 1 0 3h-3"/>`,
 stairs:`<path d="M6 40h8v-7h8v-7h8v-7h8"/><path d="M28 8h11v11M39 8L27 20"/><circle cx="10" cy="31" r="2.5" class="f"/>`,

/* ---------- 26 Pengetahuan (P) ---------- */
 p1:`<path d="M6 40V18M14 40V10M22 40V24M30 40V14"/><path d="M4 43h40"/><path d="M34 8h8l-5 7 5 7h-8"/><path d="M30 40h12"/>`,
 p2:`<rect x="18" y="5" width="7" height="24" rx="3.5"/><circle cx="21.5" cy="33" r="6"/><path class="f" d="M19.5 14h4v18h-4z"/><path d="M28 10h4M28 16h4M28 22h4"/><path d="M36 30c2-3 4 3 6 0M36 37c2-3 4 3 6 0"/>`,
 p3:`<circle cx="24" cy="10" r="3"/><circle cx="10" cy="20" r="3"/><circle cx="38" cy="20" r="3"/><circle cx="14" cy="36" r="3"/><circle cx="34" cy="36" r="3"/><path d="M24 13v0M22 12l-9 6M26 12l9 6M11 23l2 10M37 23l-2 10M17 36h14M12 22l20 12M36 22L16 34"/>`,
 p4:`<circle cx="18" cy="22" r="11"/><circle cx="18" cy="22" r="3" class="f"/><path d="M4 38h40"/><path d="M30 22h12l-4-5M30 22l4 5"/><path d="M18 11v4M18 29v4M7 22h4M25 22h4"/>`,
 p5:`<path d="M6 42l14-14"/><path d="M20 28l6-6 6 6-6 6z"/><path d="M32 22l8-8"/><path d="M35 9l5 5 4-4-5-5z"/><path class="f" d="M23 32l-3 7 7-3z"/><path d="M12 14l3 5M6 20l5 2M18 8l1 5"/>`,
 p6:`<path d="M8 12h14v10a7 7 0 0 1-14 0z"/><path d="M22 20l10 6"/><path d="M30 24c3 4 3 9 0 13"/><path d="M14 38h26v5H14z"/><path class="f" d="M31 28c1.5 2 1.5 5 0 7-1.5-2-1.5-5 0-7z"/><path d="M8 12l-4-3"/>`,
 p7:`<rect x="6" y="14" width="36" height="24" rx="2"/><path d="M6 24h36M6 30h36"/><path d="M16 14V8M32 14V8"/><circle cx="16" cy="6" r="2" class="f"/><circle cx="32" cy="6" r="2" class="f"/><path d="M12 34h4M22 34h4M32 34h4"/>`,
 p8:`<path d="M24 7l5 8h-10z"/><path d="M38 20l3 9-8 3"/><path d="M10 20l-3 9 8 3"/><path d="M19 15l-7 12M29 15l7 12M15 32h18"/><circle cx="24" cy="38" r="2" class="f"/><circle cx="16" cy="40" r="2" class="f"/><circle cx="32" cy="40" r="2" class="f"/>`,
 p9:`<path d="M8 38h32L24 10z"/><path d="M14 32h20"/><path d="M6 43h36M6 41v4M42 41v4"/><path d="M24 10v6"/><circle cx="24" cy="26" r="2" class="f"/>`,
 p10:`<path d="M5 18h26v5H5z"/><path d="M8 28l3-5M16 28l3-5M24 28l3-5"/><path d="M12 10v6M18 10v6M24 10v6"/><path d="M10 15l2 3M16 15l2 3M22 15l2 3"/><circle cx="37" cy="31" r="7"/><circle cx="37" cy="31" r="2" class="f"/>${[0,60,120].map(a=>`<rect class="f" x="35.6" y="22" width="2.8" height="4" rx="1" transform="rotate(${a} 37 31)"/>`).join("")}`,
 p11:`<path d="M8 6h32v8H8z"/><path d="M24 14v6"/><path d="M12 20h24v6H12z"/><path d="M12 32h24v6H12z"/><path d="M8 42h32"/><path class="f" d="M20 26h8v6h-8z"/><path d="M16 20v-6M32 20v-6"/>`,
 p12:`<path d="M6 30h36v6H6z"/><path d="M14 30V18h6v12"/><path d="M28 30V14h6v16"/><path d="M14 18h-6v6M34 14h6v6"/><path class="f" d="M20 24h8v6h-8z"/><path d="M10 40h28"/>`,
 p13:`<rect x="5" y="30" width="38" height="8" rx="1"/><path d="M9 26l6-12 6 10 6-14 6 16"/><path d="M33 26h6"/><path d="M39 10v10l-4 2 4 2v4"/><circle cx="15" cy="14" r="2" class="f"/><circle cx="27" cy="10" r="2" class="f"/>`,
 p14:`<path d="M5 20h34v6H5z"/><path d="M12 26v8h5v-8"/><path d="M39 17v12"/><path d="M5 17v12"/><path d="M22 14h12v6H22z"/><path d="M8 20v-3M14 20v-3M20 20v-3M26 26v3M32 26v3"/>`,
 p15:`<path d="M6 14h10"/><path d="M16 8v12"/><path d="M20 8v12"/><path d="M20 14h8"/><path d="M28 10h8v8h-8z"/><path d="M36 14h6"/><path d="M6 14v20h36V14"/><path class="f" d="M22 24l5 6h-4l2 6-6-7h4z"/>`,
 p16:`<rect x="6" y="18" width="18" height="12" rx="2"/><path d="M24 24h8"/><path class="f" d="M32 20h4v8h-4z"/><path d="M36 24h6"/><path d="M10 18v-6h8v6"/><path d="M12 34v4h8"/><path d="M6 24h-2"/><circle cx="14" cy="8" r="2" class="f"/>`,
 p17:`<rect x="16" y="16" width="16" height="16" rx="2"/><path d="M22 22h4v4h-4z" class="f"/><path d="M20 16V8M28 16V8M20 32v8M28 32v8M16 20H8M16 28H8M32 20h8M32 28h8"/><circle cx="8" cy="8" r="2" class="f"/><circle cx="40" cy="40" r="2" class="f"/>`,
 p18:`<circle cx="18" cy="26" r="11"/><circle cx="18" cy="26" r="4"/>${[0,45,90,135,180,225,270,315].map(a=>`<circle class="f" cx="18" cy="18.5" r="1.7" transform="rotate(${a} 18 26)"/>`).join("")}<path d="M30 14l10 10-3 3-10-10z"/><path d="M30 14l-4-4 2-4 6 6z"/>`,
 p19:`<path d="M6 16h12v10H6z"/><path d="M6 30h12v10H6z"/><path d="M30 23h12v10H30z"/><path d="M18 21h8m-3-3 3 3-3 3"/><path d="M18 35h8m-3-3 3 3-3 3"/><path d="M26 21v14h4"/><path class="f" d="M34 10l4 4-4 4-4-4z"/>`,
 p20:`<circle cx="16" cy="18" r="9"/><path d="M16 13v10M13.5 15h4a1.8 1.8 0 0 1 0 3.6h-4"/><path d="M28 40V22M34 40V14M40 40V28"/><path d="M24 43h20"/><path d="M8 34l6 6 6-6"/>`,
 p21:`<path d="M24 5c6 5 9 12 9 19l-4 8h-10l-4-8c0-7 3-14 9-19z"/><circle cx="24" cy="19" r="4"/><path d="M19 32l-4 8 9-4 9 4-4-8"/><path d="M12 20l-6 4 4 6M36 20l6 4-4 6"/>`,
 p22:`<circle cx="18" cy="24" r="10"/><circle cx="18" cy="24" r="3" class="f"/>${[0,72,144,216,288].map(a=>`<path class="f" d="M18 21c3-4 7-4 9-1-3 3-7 3-9 1z" transform="rotate(${a} 18 24)"/>`).join("")}<circle cx="38" cy="12" r="4"/><path d="M38 5v2M38 17v2M31 12h2M43 12h2M33 7l1.5 1.5M43 7l-1.5 1.5"/><path d="M8 40h32"/>`,
 p23:`<path d="M10 26a14 14 0 0 1 28 0z"/><path d="M6 26h36v4H6z"/><path d="M24 12v-4"/><path d="M20 38l4-6 4 6"/><path d="M14 36l4 6M34 36l-4 6"/><path class="f" d="M24 18l1.5 3 3.3.4-2.4 2.3H21.6l-2.4-2.3 3.3-.4z"/>`,
 p24:`<path d="M24 7v30"/><path d="M10 14h28"/><path d="M10 14l-5 10h10z"/><path d="M38 14l-5 10h10z"/><path d="M16 41h16"/><path d="M24 37h0"/><circle cx="24" cy="7" r="2" class="f"/>`,
 p25:`<path d="M5 10h22v15H14l-6 5v-5H5z"/><path d="M43 20H26v13h9l5 4v-4h3z"/><path d="M10 15h12M10 20h8"/><path d="M30 25h9M30 29h6"/>`,
 p26:`<circle cx="20" cy="19" r="11"/><path d="M28 27l12 12"/><path d="M14 19h12M20 13v12" stroke-width="2"/><path class="f" d="M15.5 22.5h9v1.5h-9z"/><path d="M6 40h14"/>`,

/* ---------- 8 Semester ---------- */
 smt1:`<path d="M5 34h38v8H5z"/><path d="M9 26h12v8H9zM27 26h12v8H27z"/><path d="M18 18h12v8H18z"/><path d="M24 6v12M19 11l5-5 5 5"/>`,
 smt2:`<path d="M6 14h10"/><path d="M16 8v12M20 8v12"/><path d="M20 14h6"/><circle cx="33" cy="14" r="7"/><circle cx="33" cy="14" r="2" class="f"/>${[0,60,120].map(a=>`<rect class="f" x="31.6" y="5" width="2.8" height="4" rx="1" transform="rotate(${a} 33 14)"/>`).join("")}<path d="M6 30h36v10H6z"/><path d="M12 36h8M28 36h8"/>`,
 smt3:`<path d="M5 24h8l4-8 5 16 5-20 5 24 4-12h7"/><path d="M5 38h38"/><circle cx="17" cy="16" r="2" class="f"/><circle cx="32" cy="12" r="2" class="f"/>`,
 smt4:`<path d="M6 18h30v6H6z"/><path d="M12 24v7h5v-7"/><path d="M36 15v12M6 15v12"/><path d="M8 38h32"/><path d="M26 42l-4-4 4-4"/><path d="M36 34h-14"/><path d="M9 18v-3M15 18v-3M21 18v-3"/>`,
 smt5:`<path d="M8 6h32v7H8z"/><path d="M24 13v5"/><path d="M12 18h24v6H12z"/><path d="M12 30h24v6H12z"/><path class="f" d="M20 24h8v6h-8z"/><path d="M6 42h36"/><path d="M16 18v-5M32 18v-5"/>`,
 smt6:`<rect x="5" y="20" width="14" height="10" rx="2"/><path d="M19 25h6"/><path class="f" d="M25 22h4v6h-4z"/><path d="M29 25h4"/><circle cx="38" cy="25" r="6"/>${[0,90,180,270].map(a=>`<path class="f" d="M38 23c2-2.5 4.5-2.5 6-.5-2 2-4.5 2-6 .5z" transform="rotate(${a} 38 25)"/>`).join("")}<path d="M8 20v-5h7"/><path d="M8 34h10M26 34h14"/>`,
 smt7:`<path d="M5 40V22l9-6v24"/><path d="M14 40V18l9 6v16"/><path d="M23 40V24h20v16z"/><path d="M28 30h4M36 30h4M28 35h4M36 35h4"/><circle cx="12" cy="9" r="3"/><path d="M12 12v6M8 15h8"/><path d="M3 43h42"/>`,
 smt8:`<path d="M14 8h20v6a10 10 0 0 1-20 0z"/><path d="M14 11H9v3a5 5 0 0 0 5 5M34 11h5v3a5 5 0 0 1-5 5"/><path d="M24 24v6M17 36h14l-2-6H19z"/><path d="M12 42h24"/><circle cx="24" cy="14" r="3" class="f"/>`,

/* ---------- Menu & laman ---------- */
 petaIRMA:`<path d="M6 10h36v28H6z"/><path d="M6 18h36M6 26h36M6 34h36M16 10v28M26 10v28M36 10v28"/><path class="f" d="M9 12h5v4H9zM19 20h5v4h-5zM29 28h5v4h-5z"/>`,
 target:`<circle cx="24" cy="24" r="17"/><circle cx="24" cy="24" r="10"/><circle cx="24" cy="24" r="3.4" class="f"/><path d="M24 7V2M24 46v-5M7 24H2M46 24h-5"/>`,
 daftarP:`<path d="M10 8h28v32H10z"/><path d="M16 16h16M16 23h16M16 30h10"/><circle cx="13" cy="16" r="1.5" class="f"/><circle cx="13" cy="23" r="1.5" class="f"/><circle cx="13" cy="30" r="1.5" class="f"/><path d="M38 8l4 4-4 4"/>`,
 tumpukMP:`<path d="M24 6l18 8-18 8-18-8z"/><path d="M6 22l18 8 18-8"/><path d="M6 32l18 8 18-8"/>`,
 kalender:`<rect x="6" y="10" width="36" height="32" rx="3"/><path d="M6 20h36"/><path d="M15 10V5M33 10V5"/><path class="f" d="M13 26h6v5h-6zM21 26h6v5h-6zM29 26h6v5h-6zM13 34h6v5h-6zM21 34h6v5h-6z"/>`,
 timbang:`<path d="M24 7v30"/><path d="M10 14h28"/><path d="M10 14l-5 10h10z"/><path d="M38 14l-5 10h10z"/><path d="M16 41h16"/><circle cx="24" cy="7" r="2" class="f"/>`
};
const SPK=`<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9c1.5 1.5 1.5 4.5 0 6M19 6c3 3 3 9 0 12"/></svg>`;

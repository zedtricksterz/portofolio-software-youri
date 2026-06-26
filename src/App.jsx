import { useEffect } from 'react';
import './styles.css';

const staticMarkup = `
<nav class="fixed top-0 z-50 w-full border-b border-border-subtle/80 bg-surface-container-lowest/78 backdrop-blur-xl">
<div class="mx-auto flex h-16 max-w-content items-center justify-between gap-4 px-5 md:px-8">
<a class="group flex items-center gap-3" href="#home">
<span class="relative flex h-9 w-9 items-center justify-center border border-primary/50 bg-primary/10 text-primary shadow-[0_0_18px_rgba(79,219,200,.12)]">
<span class="font-mono text-xs font-black">YA</span>
</span>
<span class="hidden font-headline text-lg font-black tracking-tight text-text-off-white sm:block">Youri Azreal</span>
</a>
<div class="mobile-scroll-nav flex items-center gap-5 md:gap-7">
<a class="nav-link font-mono text-[11px] font-bold uppercase tracking-wider text-on-surface-variant transition hover:text-primary" href="#skillset">Skillset</a>
<a class="nav-link font-mono text-[11px] font-bold uppercase tracking-wider text-on-surface-variant transition hover:text-primary" href="#projects">Contributions</a>
<a class="nav-link font-mono text-[11px] font-bold uppercase tracking-wider text-on-surface-variant transition hover:text-primary" href="#alignment">Alignment</a>
<a class="nav-link font-mono text-[11px] font-bold uppercase tracking-wider text-on-surface-variant transition hover:text-primary" href="#apps">Software Scope</a>
<a class="nav-link font-mono text-[11px] font-bold uppercase tracking-wider text-on-surface-variant transition hover:text-primary" href="#closing">Kagara</a>
</div>
</div>
</nav>
<header class="technical-grid relative flex min-h-screen items-center overflow-hidden border-b border-border-subtle bg-surface-container-lowest pt-16" id="home">
<canvas id="hero-canvas"></canvas>
<div class="hero-ore-glow"></div>
<div class="scanline"></div>
<div class="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-background via-background/70 to-transparent"></div>
<div class="relative z-10 mx-auto grid w-full max-w-content items-center gap-10 px-5 py-24 md:grid-cols-[1.1fr_.9fr] md:px-8">
<div class="reveal">
<div class="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-[.18em] text-primary shadow-[0_0_20px_rgba(79,219,200,.14)]">
<span class="pulse-dot"></span>
          Role Expansion Portfolio · System Online
        </div>
<h1 class="font-headline text-[16vw] font-black uppercase leading-[.78] tracking-[-.08em] text-text-off-white sm:text-[88px] lg:text-[128px]">
          YOURI<br/><span class="bg-gradient-to-r from-primary via-text-off-white to-secondary bg-clip-text text-transparent">AZREAL</span>
</h1>
<p class="mt-7 max-w-2xl font-mono text-sm font-bold uppercase tracking-[.2em] text-on-surface-variant md:text-base">
          Meteorologist · GIS Specialist · Fullstack Developer
        </p>
<p class="mt-5 max-w-2xl text-lg leading-8 text-on-surface-variant md:text-xl">
          Growing with KAGARA through continuous technical improvement : from field meteorology and mining GIS into production ready internal software.
        </p>
<div class="mt-8 flex flex-wrap gap-3">
<span class="badge badge-blue">Meteorology</span>
<span class="badge badge-cyan">GIS</span>
<span class="badge badge-green">Software Engineering</span>
<span class="badge badge-amber">Kagara Technology</span>
</div>
<div class="mt-10 flex flex-col gap-3 sm:flex-row">
<a class="inline-flex items-center justify-center gap-2 rounded bg-primary px-6 py-4 font-mono text-xs font-black uppercase tracking-wider text-[#003731] transition hover:bg-primary/90" href="#projects">
            Explore My Work <span class="material-symbols-outlined text-base">south</span>
</a>
<a class="inline-flex items-center justify-center gap-2 rounded border border-primary/50 bg-primary/5 px-6 py-4 font-mono text-xs font-black uppercase tracking-wider text-primary transition hover:bg-primary/10" href="#apps">
            Proposed Scope <span class="material-symbols-outlined text-base">terminal</span>
</a>
</div>
</div>
<div class="hero-dashboard relative min-h-[470px]">
<div class="orbit-ring"></div><div class="orbit-ring"></div><div class="orbit-ring"></div>
<div class="tech-card absolute left-1/2 top-1/2 w-[min(92vw,420px)] -translate-x-1/2 -translate-y-1/2 p-6">
<div class="mb-5 flex items-center justify-between border-b border-border-subtle pb-4">
<div>
<div class="font-mono text-[10px] font-bold uppercase tracking-[.18em] text-text-muted">Mission Dashboard</div>
<div class="mt-1 font-headline text-2xl font-black text-text-off-white">Role Alignment</div>
</div>
<span class="badge badge-green">Live</span>
</div>
<div class="space-y-4">
<div class="rounded border border-border-subtle bg-surface-container-low/80 p-4">
<div class="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider">
<span class="text-text-muted">Core Role</span><span class="text-blue-300">Meteorology</span>
</div>
<div class="mt-3 grid grid-cols-10 gap-1"> <span class="seg on-teal"></span><span class="seg on-teal"></span><span class="seg on-teal"></span><span class="seg on-teal"></span><span class="seg on-teal"></span><span class="seg on-teal"></span><span class="seg on-teal"></span><span class="seg on-teal"></span><span class="seg on-teal"></span><span class="seg on-teal"></span></div>
</div>
<div class="rounded border border-border-subtle bg-surface-container-low/80 p-4">
<div class="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider">
<span class="text-text-muted">Mining Value</span><span class="text-amber-300">GIS + Hydromet</span>
</div>
<div class="mt-3 grid grid-cols-10 gap-1"> <span class="seg on-amber"></span><span class="seg on-amber"></span><span class="seg on-amber"></span><span class="seg on-amber"></span><span class="seg on-amber"></span><span class="seg on-amber"></span><span class="seg"></span><span class="seg"></span><span class="seg"></span><span class="seg"></span></div>
</div>
<div class="rounded border border-primary/40 bg-primary/10 p-4 shadow-[0_0_24px_rgba(79,219,200,.08)]">
<div class="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider">
<span class="text-text-muted">Expansion Ready</span><span class="text-primary">Fullstack Dev</span>
</div>
<div class="mt-3 grid grid-cols-10 gap-1"> <span class="seg on-green"></span><span class="seg on-green"></span><span class="seg on-green"></span><span class="seg on-green"></span><span class="seg on-green"></span><span class="seg on-green"></span><span class="seg on-green"></span><span class="seg on-green"></span><span class="seg"></span><span class="seg"></span></div>
</div>
</div>
<div class="mt-5 rounded border border-secondary/30 bg-secondary/10 p-4 font-mono text-xs leading-6 text-on-surface-variant">
<span class="text-secondary">Objective:</span> formalize software engineering scope to build internal KAGARA applications, not general IT support.
          </div>
</div>
</div>
</div>
</header>
<main>
<section class="relative overflow-hidden border-b border-border-subtle py-24 md:py-32" id="ecosystem">
<div class="absolute inset-0 dot-grid opacity-50"></div>
<div class="mx-auto max-w-content px-5 md:px-8">
<div class="reveal mb-14 max-w-3xl">
<div class="section-title-kicker">Kagara Ecosystem</div>
<h2 class="section-title">One technical profile, value across three divisions.</h2>
<p class="mt-5 text-lg leading-8 text-on-surface-variant">My formal position is in Kagara Technology, but the technical value connects to Mining and Agro through meteorology, GIS, hydromet analysis, and software systems.</p>
</div>
<div class="grid gap-5 lg:grid-cols-[.85fr_1fr_.85fr] lg:items-center">
<div class="reveal reveal-left space-y-5">
<div class="tech-card p-6">
<span class="badge badge-blue">Technology</span>
<h3 class="mt-4 font-headline text-2xl font-black text-text-off-white">AWS · VWS · AWLR · AQMS</h3>
<p class="mt-3 text-on-surface-variant">Client facing field execution, product explanation, dashboard concept, and device/application alignment.</p>
</div>
<div class="tech-card p-6">
<span class="badge badge-amber">Mining</span>
<h3 class="mt-4 font-headline text-2xl font-black text-text-off-white">GIS Mapping · Hydromet</h3>
<p class="mt-3 text-on-surface-variant">Geospatial deliverables, drainage analysis, rainfall return period, and technical map support.</p>
</div>
</div>
<div class="reveal relative flex min-h-[360px] items-center justify-center">
<div class="absolute h-72 w-72 rounded-full border border-primary/20 bg-primary/5 shadow-[0_0_70px_rgba(79,219,200,.10)]"></div>
<div class="absolute h-48 w-48 rounded-full border border-secondary/20 bg-secondary/5"></div>
<div class="relative z-10 flex h-44 w-44 flex-col items-center justify-center rounded-full border border-primary/60 bg-surface-container-low/90 text-center shadow-[0_0_44px_rgba(79,219,200,.16)]">
<span class="font-mono text-[10px] font-bold uppercase tracking-[.18em] text-primary">Technical Bridge</span>
<span class="mt-2 font-headline text-4xl font-black text-text-off-white">Youri</span>
<span class="mt-2 font-mono text-[10px] uppercase tracking-wider text-text-muted">Met · GIS · Dev</span>
</div>
</div>
<div class="reveal reveal-right space-y-5">
<div class="tech-card p-6">
<span class="badge badge-green">Agro</span>
<h3 class="mt-4 font-headline text-2xl font-black text-text-off-white">AWS · VWS · AWLR · AQMS</h3>
<p class="mt-3 text-on-surface-variant">Weather intelligence for plantation operations, fertilizing windows, rainfall monitoring, and station requirement assessment.</p>
</div>
<div class="tech-card border-primary/40 bg-primary/10 p-6">
<span class="badge badge-teal">Digital Layer</span>
<h3 class="mt-4 font-headline text-2xl font-black text-text-off-white">Internal Web Apps</h3>
<p class="mt-3 text-on-surface-variant">Turning KAGARA technical operations into scalable, trackable, and presentation ready digital systems.</p>
</div>
</div>
</div>
</div>
</section>
<section class="relative overflow-hidden border-b border-border-subtle bg-surface py-24 md:py-32" id="skillset">
<div class="absolute inset-0 technical-grid"></div>
<div class="relative mx-auto max-w-content px-5 md:px-8">
<div class="reveal mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
<div class="max-w-3xl">
<div class="section-title-kicker">Skillset Overview</div>
<h2 class="section-title">Field proven skillset with software expansion readiness.</h2>
</div>
<p class="max-w-md text-on-surface-variant">This section frames the profile as role expansion, not a career switch: meteorology remains valuable, GIS is underutilized, and software engineering is proven.</p>
</div>
<div class="grid gap-5 md:grid-cols-3">
<article class="reveal tech-card p-6" style="transition-delay:0ms">
<div class="flex items-start justify-between gap-3">
<span class="material-symbols-outlined text-5xl text-blue-300">thunderstorm</span>
<span class="badge badge-green">Fully Utilized</span>
</div>
<h3 class="mt-7 font-headline text-3xl font-black text-text-off-white">Meteorology</h3>
<p class="mt-3 text-on-surface-variant">Core role in Kagara Technology &amp; Agro: field execution, data explanation, client communication, and station needs.</p>
<div class="mt-6 grid grid-cols-10 gap-1"><span class="seg on-green"></span><span class="seg on-green"></span><span class="seg on-green"></span><span class="seg on-green"></span><span class="seg on-green"></span><span class="seg on-green"></span><span class="seg on-green"></span><span class="seg on-green"></span><span class="seg on-green"></span><span class="seg on-green"></span></div>
</article>
<article class="reveal tech-card p-6" style="transition-delay:120ms">
<div class="flex items-start justify-between gap-3">
<span class="material-symbols-outlined text-5xl text-cyan-300">map</span>
<span class="badge badge-amber">Partially Utilized</span>
</div>
<h3 class="mt-7 font-headline text-3xl font-black text-text-off-white">GIS</h3>
<p class="mt-3 text-on-surface-variant">Already used in Mining deliverables, with broader capacity for geoprocessing, remote sensing, and spatial data automation.</p>
<div class="mt-6 grid grid-cols-10 gap-1"><span class="seg on-amber"></span><span class="seg on-amber"></span><span class="seg on-amber"></span><span class="seg on-amber"></span><span class="seg on-amber"></span><span class="seg on-amber"></span><span class="seg"></span><span class="seg"></span><span class="seg"></span><span class="seg"></span></div>
</article>
<article class="reveal tech-card border-primary/50 p-6 shadow-[0_0_34px_rgba(79,219,200,.08)]" style="transition-delay:240ms">
<div class="flex items-start justify-between gap-3">
<span class="material-symbols-outlined text-5xl text-primary">code_blocks</span>
<span class="badge badge-teal">Proven &amp; Ready</span>
</div>
<h3 class="mt-7 font-headline text-3xl font-black text-text-off-white">Software Engineering</h3>
<p class="mt-3 text-on-surface-variant">Not just learning interest: already built and deployed WebGIS, with stack readiness for Laravel, Vue/Inertia, MySQL, APIs, dashboards, and CMS.</p>
<div class="mt-6 grid grid-cols-10 gap-1"><span class="seg on-teal"></span><span class="seg on-teal"></span><span class="seg on-teal"></span><span class="seg on-teal"></span><span class="seg on-teal"></span><span class="seg on-teal"></span><span class="seg on-teal"></span><span class="seg on-teal"></span><span class="seg"></span><span class="seg"></span></div>
</article>
</div>
<div class="mt-10 grid gap-5 lg:grid-cols-3">
<div class="reveal tech-card p-6">
<h4 class="font-headline text-2xl font-black text-text-off-white">Meteorology Detail</h4>
<div class="mt-5 space-y-4">
<div><div class="font-mono text-xs font-bold uppercase text-primary">Client &amp; Technical Communication</div><p class="mt-2 text-sm leading-6 text-on-surface-variant">Meeting preparation, technical presentation, public speaking, and weather parameter explanation.</p></div>
<div><div class="font-mono text-xs font-bold uppercase text-primary">Field &amp; Instrument Execution</div><p class="mt-2 text-sm leading-6 text-on-surface-variant">AWS installation, instrument setup, field implementation, training, troubleshooting, and maintenance.</p></div>
<div><div class="font-mono text-xs font-bold uppercase text-primary">Weather Data &amp; Site Needs</div><p class="mt-2 text-sm leading-6 text-on-surface-variant">Monitoring analysis, reporting, site feasibility, and requirement assessment for AWS · VWS · AWLR · AQMS.</p></div>
</div>
</div>
<div class="reveal tech-card p-6" style="transition-delay:120ms">
<h4 class="font-headline text-2xl font-black text-text-off-white">GIS Detail</h4>
<div class="mt-5 space-y-4">
<div><div class="font-mono text-xs font-bold uppercase text-secondary">Already Used</div><p class="mt-2 text-sm leading-6 text-on-surface-variant">Map preparation, layouting, edit vertices for DXF/SHP, georeferencing, pointing, lining, attribute table, and mining visualization.</p></div>
<div><div class="font-mono text-xs font-bold uppercase text-secondary">Available Capability</div><p class="mt-2 text-sm leading-6 text-on-surface-variant">Projection transformation, buffer, dissolve, clip, intersect, spatial cleaning, NDVI, TVDI, NDWI, drone/topography processing, and road grade analysis.</p></div>
</div>
</div>
<div class="reveal tech-card p-6" style="transition-delay:240ms">
<h4 class="font-headline text-2xl font-black text-text-off-white">Software Detail</h4>
<div class="mt-5 space-y-4">
<div><div class="font-mono text-xs font-bold uppercase text-tertiary">Languages</div><p class="mt-2 text-sm leading-6 text-on-surface-variant">R · PHP · JavaScript · HTML/CSS · Blade</p></div>
<div><div class="font-mono text-xs font-bold uppercase text-tertiary">Frameworks</div><p class="mt-2 text-sm leading-6 text-on-surface-variant">Laravel · Vue.js · Inertia.js · MySQL · API Integration</p></div>
<div><div class="font-mono text-xs font-bold uppercase text-tertiary">Application Types</div><p class="mt-2 text-sm leading-6 text-on-surface-variant">WebGIS · Dashboard · CMS · Authentication · Custom Web Apps</p></div>
</div>
</div>
</div>
</div>
</section>
<section class="relative overflow-hidden border-b border-border-subtle py-20 md:py-24" id="projects">
<div class="absolute inset-0 dot-grid opacity-25"></div>
<div class="relative mx-auto max-w-content px-5 md:px-8">
<div class="reveal max-w-5xl">
<div class="section-title-kicker">Contributions Per Project</div>
<h2 class="section-title">Each contribution is shown as its own focused project block.</h2>
<p class="mt-6 max-w-3xl text-lg leading-8 text-on-surface-variant">The flow below separates field execution, GIS deliverables, and deployed software work. Each project is separated clearly so the story stays focused during discussion.</p>
<div class="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
<div class="rounded-xl border border-border-subtle bg-surface-container-low/80 p-4"><span class="badge badge-blue">AWS / VWS</span><p class="mt-3 text-sm text-on-surface-variant">Thiess, RML, SIS, GMP, KPN, Tempu Rejo, MUTU PoC</p></div>
<div class="rounded-xl border border-border-subtle bg-surface-container-low/80 p-4"><span class="badge badge-cyan">GIS / Mining</span><p class="mt-3 text-sm text-on-surface-variant">MUTU Swalang, MUTU Malintut, Mandiri Intiperkasa</p></div>
<div class="rounded-xl border border-border-subtle bg-surface-container-low/80 p-4"><span class="badge badge-teal">Software</span><p class="mt-3 text-sm text-on-surface-variant">Project Distribution Map as deployed WebGIS proof</p></div>
<div class="rounded-xl border border-border-subtle bg-surface-container-low/80 p-4"><span class="badge badge-amber">Discussion</span><p class="mt-3 text-sm text-on-surface-variant">Value already crosses field, spatial, and digital development</p></div>
</div>
</div>
</div>
</section>
<section class="project-page relative overflow-hidden border-b border-border-subtle py-20 md:py-24" id="project-thiess">
<div class="absolute inset-0 dot-grid opacity-20"></div>
<div class="relative mx-auto max-w-content px-5 md:px-8">
<article class="reveal tech-card grid gap-7 p-5 md:grid-cols-[1fr_1fr] md:p-8 lg:items-center">
<div class="project-photo-grid"><figure class="media-frame"><img alt="Thiess Documentation 1" decoding="async" height="1280" loading="lazy" src="assets/thiess1.webp" width="720"/><figcaption class="media-caption">Thiess Documentation 1</figcaption></figure><figure class="media-frame"><img alt="Thiess Documentation 2" decoding="async" height="1280" loading="lazy" src="assets/thiess2.webp" width="720"/><figcaption class="media-caption">Thiess Documentation 2</figcaption></figure></div>
<div>
<div class="flex flex-wrap gap-2"><span class="badge badge-blue">Meteorology / AWS</span><span class="badge badge-amber">Proof of Concept</span></div>
<h3 class="mt-5 font-headline text-3xl font-black text-text-off-white md:text-5xl">PT Thiess Contractor Indonesia</h3>
<p class="mt-4 text-lg leading-8 text-on-surface-variant">Field contribution for AWS relocation, technical readiness, and troubleshooting during proof of concept execution.</p>
<ul class="mt-7 grid gap-3 text-sm leading-6 text-on-surface-variant sm:grid-cols-2"><li><span class="text-primary">✓</span> AWS Dismantling: unit disassembly and relocation support.</li><li><span class="text-primary">✓</span> Instrument Testing: feasibility check before and after relocation.</li><li><span class="text-primary">✓</span> Weather Data Analysis: review of recorded site weather data.</li><li><span class="text-primary">✓</span> Troubleshooting: field diagnosis and technical issue solving.</li></ul>
</div>
</article>
</div>
</section>
<section class="project-page relative overflow-hidden border-b border-border-subtle py-20 md:py-24" id="project-rml">
<div class="absolute inset-0 dot-grid opacity-20"></div>
<div class="relative mx-auto max-w-content px-5 md:px-8">
<article class="reveal tech-card grid gap-7 p-5 md:grid-cols-[1fr_1fr] md:p-8 lg:items-center">
<div>
<div class="flex flex-wrap gap-2"><span class="badge badge-blue">Meteorology / AWS</span><span class="badge badge-amber">Proof of Concept</span></div>
<h3 class="mt-5 font-headline text-3xl font-black text-text-off-white md:text-5xl">PT Riung Mitra Lestari</h3>
<p class="mt-4 text-lg leading-8 text-on-surface-variant">AWS implementation support from physical installation until client side operation readiness.</p>
<ul class="mt-7 grid gap-3 text-sm leading-6 text-on-surface-variant sm:grid-cols-2"><li><span class="text-primary">✓</span> AWS Installation: automatic weather station deployment.</li><li><span class="text-primary">✓</span> Instrument Setup: sensor and data logger configuration.</li><li><span class="text-primary">✓</span> Client Training: operational handover for client team.</li><li><span class="text-primary">✓</span> Troubleshooting: technical issue handling during installation.</li></ul>
</div><div class="project-photo-grid two"><figure class="media-frame"><img alt="RML Documentation 1" decoding="async" height="1200" loading="lazy" src="assets/rml1.webp" width="900"/><figcaption class="media-caption">RML Documentation 1</figcaption></figure><figure class="media-frame"><img alt="RML Documentation 2" decoding="async" height="1200" loading="lazy" src="assets/rml2.webp" width="900"/><figcaption class="media-caption">RML Documentation 2</figcaption></figure></div>
</article>
</div>
</section>
<section class="project-page relative overflow-hidden border-b border-border-subtle py-20 md:py-24" id="project-sis">
<div class="absolute inset-0 dot-grid opacity-20"></div>
<div class="relative mx-auto max-w-content px-5 md:px-8">
<article class="reveal tech-card grid gap-7 p-5 md:grid-cols-[1fr_1fr] md:p-8 lg:items-center">
<div class="project-photo-grid"><figure class="media-frame"><img alt="SIS Documentation 1" decoding="async" height="787" loading="lazy" src="assets/sis1.webp" width="1400"/><figcaption class="media-caption">SIS Documentation 1</figcaption></figure><figure class="media-frame"><img alt="SIS Documentation 2" decoding="async" height="787" loading="lazy" src="assets/sis2.webp" width="1400"/><figcaption class="media-caption">SIS Documentation 2</figcaption></figure><figure class="media-frame"><img alt="SIS Documentation 3" decoding="async" height="787" loading="lazy" src="assets/sis3.webp" width="1400"/><figcaption class="media-caption">SIS Documentation 3</figcaption></figure><figure class="media-frame"><img alt="SIS Documentation 4" decoding="async" height="787" loading="lazy" src="assets/sis4.webp" width="1400"/><figcaption class="media-caption">SIS Documentation 4</figcaption></figure></div>
<div>
<div class="flex flex-wrap gap-2"><span class="badge badge-blue">Meteorology / AWS</span></div>
<h3 class="mt-5 font-headline text-3xl font-black text-text-off-white md:text-5xl">PT Saptaindra Sejati</h3>
<p class="mt-4 text-lg leading-8 text-on-surface-variant">Mining site weather monitoring execution with instrument setup, training, and operational troubleshooting.</p>
<ul class="mt-7 grid gap-3 text-sm leading-6 text-on-surface-variant sm:grid-cols-2"><li><span class="text-primary">✓</span> AWS Installation: weather station installation at mining site.</li><li><span class="text-primary">✓</span> Instrument Setup: complete sensor and device configuration.</li><li><span class="text-primary">✓</span> Client Training: operation training for client team.</li><li><span class="text-primary">✓</span> Troubleshooting: resolving technical field issues.</li></ul>
</div>
</article>
</div>
</section>
<section class="project-page relative overflow-hidden border-b border-border-subtle py-20 md:py-24" id="project-gmp">
<div class="absolute inset-0 dot-grid opacity-20"></div>
<div class="relative mx-auto max-w-content px-5 md:px-8">
<article class="reveal tech-card grid gap-7 p-5 md:grid-cols-[1fr_1fr] md:p-8 lg:items-center">
<div>
<div class="flex flex-wrap gap-2"><span class="badge badge-blue">Meteorology / AWS</span><span class="badge badge-amber">2 Visits</span></div>
<h3 class="mt-5 font-headline text-3xl font-black text-text-off-white md:text-5xl">PT Gunung Madu Plantations</h3>
<p class="mt-4 text-lg leading-8 text-on-surface-variant">Two installation visits for plantation weather monitoring, including client training and follow up technical handling.</p>
<ul class="mt-7 grid gap-3 text-sm leading-6 text-on-surface-variant sm:grid-cols-2"><li><span class="text-primary">✓</span> AWS Installation: two field installation visits.</li><li><span class="text-primary">✓</span> Instrument Setup: weather monitoring system configuration.</li><li><span class="text-primary">✓</span> Client Training: operational training for plantation team.</li><li><span class="text-primary">✓</span> Troubleshooting: issue handling between visits.</li></ul>
</div><div class="project-photo-grid"><figure class="media-frame"><img alt="GMP Documentation 1" decoding="async" height="1200" loading="lazy" src="assets/gmp1.webp" width="675"/><figcaption class="media-caption">GMP Documentation 1</figcaption></figure><figure class="media-frame"><img alt="GMP Documentation 2" decoding="async" height="1200" loading="lazy" src="assets/gmp2.webp" width="900"/><figcaption class="media-caption">GMP Documentation 2</figcaption></figure><figure class="media-frame"><img alt="GMP Documentation 3" decoding="async" height="1200" loading="lazy" src="assets/gmp3.webp" width="675"/><figcaption class="media-caption">GMP Documentation 3</figcaption></figure><figure class="media-frame"><img alt="GMP Documentation 4" decoding="async" height="1200" loading="lazy" src="assets/gmp4.webp" width="675"/><figcaption class="media-caption">GMP Documentation 4</figcaption></figure></div>
</article>
</div>
</section>
<section class="project-page relative overflow-hidden border-b border-border-subtle py-20 md:py-24" id="project-kpn">
<div class="absolute inset-0 dot-grid opacity-20"></div>
<div class="relative mx-auto max-w-content px-5 md:px-8">
<article class="reveal tech-card grid gap-7 p-5 md:grid-cols-[1fr_1fr] md:p-8 lg:items-center">
<figure class="media-frame"><img alt="KPN VWS Documentation" decoding="async" height="523" loading="lazy" src="assets/kpn1.webp" width="930"/><figcaption class="media-caption">KPN VWS Documentation</figcaption></figure>
<div>
<div class="flex flex-wrap gap-2"><span class="badge badge-blue">Meteorology / VWS</span><span class="badge badge-amber">On Purchasing</span></div>
<h3 class="mt-5 font-headline text-3xl font-black text-text-off-white md:text-5xl">PT KPN Plantations</h3>
<p class="mt-4 text-lg leading-8 text-on-surface-variant">Virtual Weather Station support for plantation decision making and purchasing discussion.</p>
<ul class="mt-7 grid gap-3 text-sm leading-6 text-on-surface-variant sm:grid-cols-2"><li><span class="text-primary">✓</span> Proof of Concept: VWS demonstration for client location.</li><li><span class="text-primary">✓</span> Client Training: explanation of use and value.</li><li><span class="text-primary">✓</span> Purchasing Support: support during procurement discussion.</li></ul>
</div>
</article>
</div>
</section>
<section class="project-page relative overflow-hidden border-b border-border-subtle py-20 md:py-24" id="project-tempurejo">
<div class="absolute inset-0 dot-grid opacity-20"></div>
<div class="relative mx-auto max-w-content px-5 md:px-8">
<article class="reveal tech-card grid gap-7 p-5 md:grid-cols-[1fr_1fr] md:p-8 lg:items-center">
<div>
<div class="flex flex-wrap gap-2"><span class="badge badge-blue">Meteorology / AWS</span><span class="badge badge-amber">Troubleshooting</span></div>
<h3 class="mt-5 font-headline text-3xl font-black text-text-off-white md:text-5xl">PT Tempu Rejo</h3>
<p class="mt-4 text-lg leading-8 text-on-surface-variant">Reconfiguration and repeat troubleshooting support for AWS operation stability.</p>
<ul class="mt-7 grid gap-3 text-sm leading-6 text-on-surface-variant sm:grid-cols-2"><li><span class="text-primary">✓</span> Instrument Setup: reset and reconfiguration of devices.</li><li><span class="text-primary">✓</span> Client Training: re training client operation workflow.</li><li><span class="text-primary">✓</span> Troubleshooting: recurring field issue diagnosis and solving.</li></ul>
</div><div class="project-photo-grid two"><figure class="media-frame contain"><img alt="Tempu Rejo Troubleshooting 1" decoding="async" height="457" loading="lazy" src="assets/tempurejo1.webp" width="253"/><figcaption class="media-caption">Tempu Rejo Troubleshooting 1</figcaption></figure><figure class="media-frame contain"><img alt="Tempu Rejo Troubleshooting 2" decoding="async" height="422" loading="lazy" src="assets/tempurejo2.webp" width="797"/><figcaption class="media-caption">Tempu Rejo Troubleshooting 2</figcaption></figure></div>
</article>
</div>
</section>
<section class="project-page relative overflow-hidden border-b border-border-subtle py-20 md:py-24" id="project-mutupoc">
<div class="absolute inset-0 dot-grid opacity-20"></div>
<div class="relative mx-auto max-w-content px-5 md:px-8">
<article class="reveal tech-card grid gap-7 p-5 md:grid-cols-[1fr_1fr] md:p-8 lg:items-center">
<div class="project-photo-grid two"><figure class="media-frame"><img alt="MUTU PoC AWS 1" decoding="async" height="1200" loading="lazy" src="assets/mutupoc1.webp" width="675"/><figcaption class="media-caption">MUTU PoC AWS 1</figcaption></figure><figure class="media-frame"><img alt="MUTU PoC AWS 2" decoding="async" height="1200" loading="lazy" src="assets/mutupoc2.webp" width="675"/><figcaption class="media-caption">MUTU PoC AWS 2</figcaption></figure></div>
<div>
<div class="flex flex-wrap gap-2"><span class="badge badge-blue">Meteorology / AWS</span><span class="badge badge-amber">Proof of Concept</span></div>
<h3 class="mt-5 font-headline text-3xl font-black text-text-off-white md:text-5xl">PT MUTU PoC AWS</h3>
<p class="mt-4 text-lg leading-8 text-on-surface-variant">PoC AWS contribution at MUTU site with field documentation and technical implementation support.</p>
<ul class="mt-7 grid gap-3 text-sm leading-6 text-on-surface-variant sm:grid-cols-2"><li><span class="text-primary">✓</span> AWS Installation: site implementation support.</li><li><span class="text-primary">✓</span> Instrument Setup: sensor and device readiness check.</li><li><span class="text-primary">✓</span> Client Communication: field explanation and usage context.</li><li><span class="text-primary">✓</span> Troubleshooting: technical issue support during PoC.</li></ul>
</div>
</article>
</div>
</section>
<section class="project-page relative overflow-hidden border-b border-border-subtle py-20 md:py-24" id="project-swlc">
<div class="absolute inset-0 dot-grid opacity-20"></div>
<div class="relative mx-auto max-w-content px-5 md:px-8">
<article class="reveal tech-card grid gap-7 p-5 md:grid-cols-[1fr_1fr] md:p-8 lg:items-center">
<div>
<div class="flex flex-wrap gap-2"><span class="badge badge-cyan">GIS / Mining</span></div>
<h3 class="mt-5 font-headline text-3xl font-black text-text-off-white md:text-5xl">PT MUTU Swalang</h3>
<p class="mt-4 text-lg leading-8 text-on-surface-variant">Mining GIS deliverables for geochemistry, geohydrology, seam map, and report ready layouts.</p>
<ul class="mt-7 grid gap-3 text-sm leading-6 text-on-surface-variant sm:grid-cols-2"><li><span class="text-primary">✓</span> Geochemistry Map: technical mining report map.</li><li><span class="text-primary">✓</span> Geohydrology Map: groundwater and hydro map layout.</li><li><span class="text-primary">✓</span> Full Seam Map: coal seam visualization.</li><li><span class="text-primary">✓</span> GIS Layouting: print and submit ready finishing.</li></ul>
</div><div class="project-photo-grid"><figure class="media-frame contain"><img alt="SWLC Quality Contour Map" decoding="async" height="1200" loading="lazy" src="assets/Peta_Kontur_Quality_ASH_Seam_TS11_SWLC.webp" width="849"/><figcaption class="media-caption">SWLC Quality Contour Map</figcaption></figure><figure class="media-frame contain"><img alt="SWLC Reserve Polygon Map" decoding="async" height="1200" loading="lazy" src="assets/Peta_Polygon_Cadangan_Seam_TS11_SWLC.webp" width="849"/><figcaption class="media-caption">SWLC Reserve Polygon Map</figcaption></figure><figure class="media-frame contain"><img alt="SWLC Resource Polygon Map" decoding="async" height="1200" loading="lazy" src="assets/Peta_Polygon_Sumberdaya_Seam_TS11_SWLC.webp" width="849"/><figcaption class="media-caption">SWLC Resource Polygon Map</figcaption></figure><figure class="media-frame contain"><img alt="SWLC Subcrop Map" decoding="async" height="1200" loading="lazy" src="assets/Peta_Subcrop_SWLC.webp" width="849"/><figcaption class="media-caption">SWLC Subcrop Map</figcaption></figure></div>
</article>
</div>
</section>
<section class="project-page relative overflow-hidden border-b border-border-subtle py-20 md:py-24" id="project-mlt">
<div class="absolute inset-0 dot-grid opacity-20"></div>
<div class="relative mx-auto max-w-content px-5 md:px-8">
<article class="reveal tech-card grid gap-7 p-5 md:grid-cols-[1fr_1fr] md:p-8 lg:items-center">
<div class="project-photo-grid"><figure class="media-frame contain"><img alt="MLT Watershed Map" decoding="async" height="1200" loading="lazy" src="assets/Peta_Daerah_Aliran_Sungai_MLT.webp" width="849"/><figcaption class="media-caption">MLT Watershed Map</figcaption></figure><figure class="media-frame contain"><img alt="MLT Morphology Map" decoding="async" height="1200" loading="lazy" src="assets/Peta_Morfologi_MLT.webp" width="849"/><figcaption class="media-caption">MLT Morphology Map</figcaption></figure><figure class="media-frame contain"><img alt="MLT Groundwater Flow Map" decoding="async" height="1200" loading="lazy" src="assets/Peta_Pola_Aliran_Air_Tanah_MLT.webp" width="849"/><figcaption class="media-caption">MLT Groundwater Flow Map</figcaption></figure><figure class="media-frame contain"><img alt="MLT Mining Sump Recommendation Map" decoding="async" height="1200" loading="lazy" src="assets/Peta_Rekomendasi_Lokasi_Sumuran_Tambang_MLT.webp" width="849"/><figcaption class="media-caption">MLT Mining Sump Recommendation Map</figcaption></figure></div>
<div>
<div class="flex flex-wrap gap-2"><span class="badge badge-cyan">GIS / Mining</span></div>
<h3 class="mt-5 font-headline text-3xl font-black text-text-off-white md:text-5xl">PT MUTU Malintut</h3>
<p class="mt-4 text-lg leading-8 text-on-surface-variant">Spatial visualization support for mining technical reporting and map based communication.</p>
<ul class="mt-7 grid gap-3 text-sm leading-6 text-on-surface-variant sm:grid-cols-2"><li><span class="text-primary">✓</span> Geochemistry Map: technical map for report package.</li><li><span class="text-primary">✓</span> Geohydrology Map: water condition spatial map.</li><li><span class="text-primary">✓</span> Full Seam Map: seam visualization support.</li><li><span class="text-primary">✓</span> GIS Visualization: spatial data presentation.</li></ul>
</div>
</article>
</div>
</section>
<section class="project-page relative overflow-hidden border-b border-border-subtle py-20 md:py-24" id="project-mip">
<div class="absolute inset-0 dot-grid opacity-20"></div>
<div class="relative mx-auto max-w-content px-5 md:px-8">
<article class="reveal tech-card grid gap-7 p-5 md:grid-cols-[1fr_1fr] md:p-8 lg:items-center">
<div>
<div class="flex flex-wrap gap-2"><span class="badge badge-cyan">GIS / Mining</span><span class="badge badge-blue">Hydro Meteorology</span></div>
<h3 class="mt-5 font-headline text-3xl font-black text-text-off-white md:text-5xl">PT Mandiri Intiperkasa</h3>
<p class="mt-4 text-lg leading-8 text-on-surface-variant">Cross discipline contribution combining meteorology, hydrology, and GIS for mine drainage understanding.</p>
<ul class="mt-7 grid gap-3 text-sm leading-6 text-on-surface-variant sm:grid-cols-2"><li><span class="text-primary">✓</span> Flow Pattern Map: mine water flow spatial map.</li><li><span class="text-primary">✓</span> Rainfall Return Period: rainfall design analysis.</li><li><span class="text-primary">✓</span> Drainage Capacity: mine drainage capacity calculation.</li><li><span class="text-primary">✓</span> Pump Requirement: pump requirement analysis.</li></ul>
</div><div class="project-photo-grid mip-grid"><figure class="media-frame contain"><img alt="MIP Hydro Meteorology Technical Map" decoding="async" height="216" loading="lazy" src="assets/MIP1.webp" width="1400"/><figcaption class="media-caption">MIP Hydro Meteorology Technical Map</figcaption></figure><figure class="media-frame contain wide-map"><img alt="PT Mandiri Intiperkasa Flow Pattern Map" decoding="async" height="990" loading="lazy" src="assets/mip_flow_pattern.webp" width="1400"/><figcaption class="media-caption">Flow Pattern Map : Pit Dump Site Krassi</figcaption></figure></div>
</article>
</div>
</section>
<section class="project-page relative overflow-hidden border-b border-border-subtle py-20 md:py-24" id="webgis">
<div class="absolute inset-0 dot-grid opacity-20"></div>
<div class="relative mx-auto max-w-content px-5 md:px-8">
<article class="reveal tech-card border-primary/50 shadow-[0_0_44px_rgba(79,219,200,.10)] grid gap-7 p-5 md:grid-cols-[1fr_1fr] md:p-8 lg:items-center">
<figure class="media-frame contain"><img alt="Project Distribution Map Screenshot" decoding="async" height="639" loading="lazy" src="assets/projectsdistributionmap1.webp" width="1400"/><figcaption class="media-caption">Project Distribution Map Screenshot</figcaption></figure>
<div>
<div class="flex flex-wrap gap-2"><span class="badge badge-teal">Software Engineering / WebGIS</span><span class="badge badge-green">Deployed</span></div>
<h3 class="mt-5 font-headline text-3xl font-black text-text-off-white md:text-5xl">Project Distribution Map</h3>
<p class="mt-4 text-lg leading-8 text-on-surface-variant">The strongest proof of software capability: a deployed WebGIS built for KAGARA to visualize project distribution across Technology and Mining.</p>
<ul class="mt-7 grid gap-3 text-sm leading-6 text-on-surface-variant sm:grid-cols-2"><li><span class="text-primary">✓</span> Interactive project markers and popups.</li><li><span class="text-primary">✓</span> Techno and Mining layer control.</li><li><span class="text-primary">✓</span> Search project and location.</li><li><span class="text-primary">✓</span> Basemap switcher.</li><li><span class="text-primary">✓</span> Fit all layers and GeoJSON support.</li><li><span class="text-primary">✓</span> Mining year filter and responsive UI.</li></ul>
</div>
</article>
</div>
</section>
<section class="relative overflow-hidden border-b border-border-subtle bg-surface py-24 md:py-32" id="alignment">
<div class="absolute inset-0 dot-grid opacity-35"></div>
<div class="relative mx-auto max-w-content px-5 md:px-8">
<div class="reveal mb-14 max-w-4xl">
<div class="section-title-kicker">Role Expansion / Alignment</div>
<h2 class="section-title">The best alignment is not replacing the current role. It expands the value.</h2>
<p class="mt-5 text-lg leading-8 text-on-surface-variant">This pitch should be framed as a formal scope expansion: from Meteorologist into a hybrid technical role that can support product, GIS, and internal software systems.</p>
</div>
<div class="grid gap-5 lg:grid-cols-3">
<div class="reveal tech-card p-7">
<span class="badge badge-blue">Current</span>
<h3 class="mt-5 font-headline text-3xl font-black text-text-off-white">Meteorologist</h3>
<p class="mt-3 text-on-surface-variant">Field operations, weather station implementation, client training, weather data explanation, and technical communication.</p>
</div>
<div class="reveal tech-card p-7" style="transition-delay:120ms">
<span class="badge badge-amber">Value Added</span>
<h3 class="mt-5 font-headline text-3xl font-black text-text-off-white">GIS + Digital Initiative</h3>
<p class="mt-3 text-on-surface-variant">Mining maps, hydromet analysis, internal web system concepting, dashboard planning, and deployed WebGIS execution.</p>
</div>
<div class="reveal tech-card border-primary/50 p-7" style="transition-delay:240ms">
<span class="badge badge-teal">Proposed</span>
<h3 class="mt-5 font-headline text-3xl font-black text-text-off-white">Fullstack Developer Scope</h3>
<p class="mt-3 text-on-surface-variant">Formal responsibility to build and maintain KAGARA internal web applications, IoT dashboards, CMS, and technical software platforms.</p>
</div>
</div>
</div>
</section>
<section class="relative overflow-hidden border-b border-border-subtle py-24 md:py-32" id="apps">
<div class="mx-auto max-w-content px-5 md:px-8">
<div class="reveal mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
<div class="max-w-4xl">
<div class="section-title-kicker">Proposed Software Scope</div>
<h2 class="section-title">Not general IT : fullstack development for KAGARA applications.</h2>
</div>
<span class="badge badge-teal">Laravel · Vue · Inertia · MySQL · API</span>
</div>
<div class="grid gap-5 md:grid-cols-2">
<article class="reveal tech-card p-7">
<figure class="media-frame contain"><img alt="Kagara Website CMS Mockup" decoding="async" height="634" loading="lazy" src="assets/kagara_cms.webp" width="1400"/><figcaption class="media-caption">Kagara Website CMS Mockup</figcaption></figure>
<span class="material-symbols-outlined text-5xl text-secondary mt-5 block">web</span>
<h3 class="mt-5 font-headline text-3xl font-black text-text-off-white">Kagara Website CMS</h3>
<p class="mt-3 text-on-surface-variant">Custom company website system to reduce dependency on template WordPress and centralize content operations.</p>
<ul class="mt-6 space-y-2 text-sm leading-6 text-on-surface-variant">
<li>✓ Landing page, services, news, careers, and client logo management</li>
<li>✓ Media library, inquiry handling, and flexible admin panel sections</li>
<li>✓ Stack: Laravel + Vue/Inertia + MySQL</li>
</ul>
</article>
<article class="reveal tech-card border-primary/50 p-7" style="transition-delay:120ms">
<figure class="media-frame contain"><img alt="Kagara IoT Platform Mockup" decoding="async" height="633" loading="lazy" src="assets/kagara_iot_platform.webp" width="1400"/><figcaption class="media-caption">Kagara IoT Platform Mockup</figcaption></figure>
<span class="material-symbols-outlined text-5xl text-primary mt-5 block">monitoring</span>
<h3 class="mt-5 font-headline text-3xl font-black text-text-off-white">Kagara IoT Platform</h3>
<p class="mt-3 text-on-surface-variant">Centralized platform for AWS, VWS, AWLR, and AQMS monitoring with user access, device ownership, alerts, and exports.</p>
<ul class="mt-6 space-y-2 text-sm leading-6 text-on-surface-variant">
<li>✓ Auth, user/role management, owner/admin sharing</li>
<li>✓ Device map, latest monitoring, dashboard, historical charts</li>
<li>✓ Forecast integration, alerts, export, API/server integration</li>
</ul>
</article>
<article class="reveal tech-card p-7" style="transition-delay:240ms">
<figure class="media-frame contain"><img alt="Kagara Geological Platform Technical Data" decoding="async" height="487" loading="lazy" src="assets/kagara_geological_platform.webp" width="1335"/><figcaption class="media-caption">Kagara Geological Platform Technical Data</figcaption></figure>
<span class="material-symbols-outlined text-5xl text-cyan-300 mt-5 block">landscape</span>
<h3 class="mt-5 font-headline text-3xl font-black text-text-off-white">Kagara Geological Platform</h3>
<p class="mt-3 text-on-surface-variant">Technical calculators and geological/hydrological utilities for mining workflows and engineering support.</p>
<ul class="mt-6 space-y-2 text-sm leading-6 text-on-surface-variant">
<li>✓ Rainfall Return Period Calculator</li>
<li>✓ Mine Drainage Calculator</li>
<li>✓ Required Pump Calculator and future technical calculators</li>
</ul>
</article>
<article class="reveal tech-card p-7" style="transition-delay:360ms">
<figure class="placeholder media-frame"><div><span class="material-symbols-outlined">apps</span><strong>Future Custom Applications</strong><small>Visual will follow the approved workflow scope</small></div></figure>
<span class="material-symbols-outlined text-5xl text-tertiary mt-5 block">apps</span>
<h3 class="mt-5 font-headline text-3xl font-black text-text-off-white">Future Custom Applications</h3>
<p class="mt-3 text-on-surface-variant">Internal digital tools based on KAGARA operational needs, built incrementally and scalable.</p>
<ul class="mt-6 space-y-2 text-sm leading-6 text-on-surface-variant">
<li>✓ Inventory / Project Equipment Tracker</li>
<li>✓ Project Monitoring Dashboard and Internal Reporting System</li>
<li>✓ DBMExplo Enhancement and Custom Workflow Apps</li>
</ul>
</article>
</div>
</div>
</section>
<section class="relative overflow-hidden border-b border-border-subtle bg-surface py-24 md:py-32" id="infrastructure">
<div class="absolute inset-0 technical-grid opacity-50"></div>
<div class="relative mx-auto max-w-content px-5 md:px-8">
<div class="reveal mb-12 max-w-3xl">
<div class="section-title-kicker">Infrastructure Growth Note</div>
<h2 class="section-title">Scalable applications require scalable infrastructure.</h2>
</div>
<div class="reveal overflow-hidden rounded-xl border border-border-subtle bg-surface-container-low/80">
<div class="grid border-b border-border-subtle bg-surface-container-high/70 font-mono text-xs font-bold uppercase tracking-wider text-text-off-white md:grid-cols-3">
<div class="p-5">Status</div><div class="p-5">Description</div><div class="p-5">Recommendation</div>
</div>
<div class="grid border-b border-border-subtle text-on-surface-variant md:grid-cols-3">
<div class="p-5 font-bold text-text-off-white">Current</div><div class="p-5">cPanel based : good for lightweight website and early prototypes.</div><div class="p-5 text-text-muted">Maintain for simple pages.</div>
</div>
<div class="grid border-b border-border-subtle text-on-surface-variant md:grid-cols-3">
<div class="p-5 font-bold text-text-off-white">As Apps Grow</div><div class="p-5">Multiple web apps, IoT data/API, background scheduler, and historical database.</div><div class="p-5 text-secondary">Need more control.</div>
</div>
<div class="grid text-on-surface-variant md:grid-cols-3">
<div class="p-5 font-bold text-primary">Recommended</div><div class="p-5">VPS for worker/scheduler, DB reliability, security, scalability, and environment control.</div><div class="p-5 text-primary">Upgrade when system demand grows.</div>
</div>
</div>
</div>
</section>
<section class="relative min-h-[75vh] overflow-hidden bg-surface-container-lowest py-24 md:py-32" id="closing">
<div class="absolute inset-0 dot-grid opacity-40"></div>
<div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(79,219,200,.16),transparent_34%),radial-gradient(circle_at_70%_20%,rgba(255,185,95,.12),transparent_25%)]"></div>
<div class="relative mx-auto flex max-w-content flex-col items-center justify-center px-5 text-center md:px-8">
<div class="reveal mb-8 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[.18em] text-primary">
<span class="pulse-dot"></span> Closing Statement
        </div>
<h2 class="reveal max-w-5xl font-headline text-[12vw] font-black uppercase leading-[.85] tracking-[-.075em] text-text-off-white md:text-[92px]">
          “Besarnya KAGARA adalah besarnya saya juga.”
        </h2>
<p class="reveal mt-8 max-w-3xl text-xl leading-9 text-on-surface-variant" style="transition-delay:140ms">
          My contribution has already expanded across meteorology, GIS, and internal software initiatives. The next discussion is formal role alignment and compensation that matches the scope of value delivered and the applications that can be built next.
        </p>
<div class="reveal mt-12 grid w-full max-w-4xl gap-4 md:grid-cols-3" style="transition-delay:260ms">
<div class="rounded border border-border-subtle bg-surface-container-low/80 p-5"><div class="font-mono text-xs uppercase text-text-muted">Current</div><div class="mt-2 font-headline text-2xl font-black text-text-off-white">Meteorologist</div></div>
<div class="rounded border border-secondary/40 bg-secondary/10 p-5"><div class="font-mono text-xs uppercase text-secondary">Value Add</div><div class="mt-2 font-headline text-2xl font-black text-text-off-white">GIS + Digital</div></div>
<div class="rounded border border-primary/50 bg-primary/10 p-5"><div class="font-mono text-xs uppercase text-primary">Proposal</div><div class="mt-2 font-headline text-2xl font-black text-text-off-white">Fullstack Scope</div></div>
</div>
</div>
</section>
</main>
<footer class="border-t border-border-subtle bg-surface-container-lowest px-5 py-8 md:px-8">
<div class="mx-auto flex max-w-content flex-col justify-between gap-4 font-mono text-xs uppercase tracking-wider text-text-muted md:flex-row">
<div>Youri Azreal · Role Expansion Portfolio</div>
<div>Kagara Technology · Meteorology · GIS · Software Engineering</div>
</div>
</footer>

`;

function initPortfolioInteractions(THREE) {

    // Anti-lag motion: native scroll + IntersectionObserver only.
    // Lenis, ScrollTrigger, and per-section Three.js were removed because they made wheel scroll feel delayed on some laptops.
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.10, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // Active nav state
    const navLinks = Array.from(document.querySelectorAll('.nav-link'));
    const sections = navLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id));
        }
      });
    }, { threshold: 0.3, rootMargin: '-20% 0px -55% 0px' });
    sections.forEach(section => navObserver.observe(section));

    // Three.js procedural mining terrain + sensor network hero
    const canvas = document.getElementById('hero-canvas');
    if (THREE && canvas) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(1);
      renderer.setSize(window.innerWidth, window.innerHeight);

      const terrainGeometry = new THREE.PlaneGeometry(38, 23, 38, 24);
      const positions = terrainGeometry.attributes.position;
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const radius = Math.sqrt(x*x + y*y);
        const z = Math.sin(x * .9) * Math.cos(y * .75) * .55 + Math.sin(radius * 1.25) * .35;
        positions.setZ(i, z);
      }
      terrainGeometry.computeVertexNormals();
      const terrainMaterial = new THREE.MeshBasicMaterial({ color: 0x4fdbc8, wireframe: true, transparent: true, opacity: 0.18 });
      const terrain = new THREE.Mesh(terrainGeometry, terrainMaterial);
      terrain.rotation.x = -Math.PI / 2.38;
      terrain.position.y = -2.45;
      terrain.position.z = -5.15;
      scene.add(terrain);

      const amberGeometry = new THREE.PlaneGeometry(27, 15, 20, 12);
      const amberPositions = amberGeometry.attributes.position;
      for (let i = 0; i < amberPositions.count; i++) {
        const x = amberPositions.getX(i), y = amberPositions.getY(i);
        amberPositions.setZ(i, Math.sin(x * .7 + y) * .18);
      }
      const amber = new THREE.Mesh(amberGeometry, new THREE.MeshBasicMaterial({ color: 0xffb95f, wireframe: true, transparent: true, opacity: 0.075 }));
      amber.rotation.x = -Math.PI / 2.08;
      amber.position.set(0, -3.05, -4.75);
      scene.add(amber);

      const particleCount = 42;
      const particleGeometry = new THREE.BufferGeometry();
      const particlePositions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        particlePositions[i*3] = (Math.random() - .5) * 36;
        particlePositions[i*3 + 1] = (Math.random() - .5) * 13 + 1.8;
        particlePositions[i*3 + 2] = (Math.random() - .5) * 11 - 5.5;
      }
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
      const particles = new THREE.Points(particleGeometry, new THREE.PointsMaterial({ color: 0x4fdbc8, size: 0.035, transparent: true, opacity: 0.55 }));
      scene.add(particles);

      camera.position.set(0, 2.65, 11.3);
      let mouseX = 0, mouseY = 0;
      // Cursor parallax disabled so the Mission Dashboard remains visually steady when hovered.

      let heroIsVisible = true;
      const homeSection = document.getElementById('home');
      if (homeSection) {
        const heroObserver = new IntersectionObserver((entries) => {
          heroIsVisible = entries.some(entry => entry.isIntersecting);
        }, { threshold: 0.05 });
        heroObserver.observe(homeSection);
      }

      let lastHeroFrame = 0;
      function animate(time) {
        requestAnimationFrame(animate);
        if (!heroIsVisible) return;
        if (time - lastHeroFrame < 16) return;
        lastHeroFrame = time;
        const t = time * 0.001;
        const horizontalSweep = Math.sin(t * 0.82) * 1.65;
        const microDrift = Math.sin(t * 2.15) * 0.18;
        terrain.rotation.z = Math.sin(t * 0.72) * .055;
        terrain.position.x = horizontalSweep + microDrift;
        terrain.position.y = -2.45 + Math.sin(t * 1.35) * .08;
        amber.rotation.z = Math.cos(t * 0.86) * .05;
        amber.position.x = Math.cos(t * .74) * 1.10;
        amber.position.y = -3.05 + Math.cos(t * 1.18) * .06;
        particles.rotation.y += 0.0048;
        particles.rotation.x = Math.sin(t * .78) * .055;
        const targetCameraX = Math.sin(t * 0.26) * 0.55 + mouseX;
        const targetCameraY = 2.65 + Math.sin(t * 0.44) * 0.10 - mouseY;
        camera.position.x += (targetCameraX - camera.position.x) * .035;
        camera.position.y += (targetCameraY - camera.position.y) * .028;
        renderer.render(scene, camera);
      }
      animate(0);
      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });
    }
  
}

export default function App() {
  useEffect(() => {
    let mounted = true;
    import('three').then((module) => {
      if (mounted) initPortfolioInteractions(module);
    });
    return () => { mounted = false; };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: staticMarkup }} />;
}

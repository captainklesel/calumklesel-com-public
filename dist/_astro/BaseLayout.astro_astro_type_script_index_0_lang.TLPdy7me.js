const f=(()=>{const e="[data-scene]";let o=null;const r=()=>document.querySelectorAll(e),l=t=>{const i=document.getElementById(`scene-${t}`);if(!i){console.warn(`[SceneManager] Scene '${t}' not found.`);return}r().forEach(c=>c.hidden=!0),i.hidden=!1,o=t,console.log(`[SceneManager] Switched to scene: ${t}`)};return{show:l,hide:t=>{const i=document.getElementById(`scene-${t}`);if(!i){console.warn(`[SceneManager] Scene '${t}' not found.`);return}i.hidden=!0,console.log(`[SceneManager] Hidden scene: ${t}`)},next:()=>{const t=Array.from(r()),i=t.findIndex(h=>h.id===`scene-${o}`),c=t[(i+1)%t.length];c&&l(c.id.replace("scene-",""))},previous:()=>{const t=Array.from(r()),i=t.findIndex(h=>h.id===`scene-${o}`),c=t[(i-1+t.length)%t.length];c&&l(c.id.replace("scene-",""))},current:()=>o}})(),g={HOME:"home",ABOUT:"about",PROJECTS:"projects",CONTACT:"contact",BLOG:"blog",RESUME:"resume",START:"start",ERROR:"error"},k=(()=>{let e=!1;const o=g.START,r=(s,n)=>{f.show(g.START),e||(document.addEventListener("click",d),document.addEventListener("keydown",d),e=!0,console.log("[StartState] Event listeners registered for input events.")),history.pushState(n,"",`?state=${o.toUpperCase()}`)},l=()=>{e&&(document.removeEventListener("click",d),document.removeEventListener("keydown",d),console.log("[StartState] Event listeners deregistered for input events.")),console.log("Exiting StartState...")};function d(){console.log("Input event detected, transitioning to home state...");const s=document.getElementById("start-scene-hero-image");s?(s.classList.add("animate-hero-image"),console.log("[StartState] Hero image animation class added.")):console.warn("[StartState] Hero image not found, cannot animate."),v.transition_to_state_by_name(g.HOME)}return{name:o,enter:r,exit:l}})(),w="/assets/images/fallback.png",C="/assets/images/about.png",_="/assets/images/contact.JPG",m={home:{title:"Welcome!",body:`
            <p>Welcome to my corner of the web. This site is an growing showcase of my projects and interests.</p>
            <p>Use the buttons to explore, learn a bit about me, or get in touch. I hope to land new features here all the time—so drop by again soon.</p>
        `,imgSrc:w,imgAlt:"A photo of Calum"},about:{title:"Who’s Calum?",body:`
            <p>Hi — I’m Calum Klesel. I build software because untangling complex problems into clean, intuitive experiences never gets old. My favorite moment is when a new feature quietly solves a need users didn’t even know they had.</p>
            <p>Off the clock you’ll find me carving around town on an electric unicycle, downhill freeskating, or chasing new trails in the foothills. Fresh air fuels the next prototype.</p>
            <p>I believe in curiosity, clear communication, and relentless play-testing—whether it's an enterprise integration or a weekend project. Thanks for visiting; enjoy the tour.</p>
        `,imgSrc:C,imgAlt:"A photo of Calum"},projects:[{title:"CalumKlesel.com",body:`
                <p>My resume site—built with Astro and vanilla HTML + CSS + JS. It’s a work-in-progress, but I’m excited to keep iterating on it.
                </p>
                <P>It’s designed to be a static Single Page App (SPA-style UX) to minimize server overhead and maximize scalability. I’m building it to evolve into something larger over time.
                </p>
            `,imgSrc:"",imgAlt:""},{title:"Keyboard Coliseum",body:`
                <p>A roguelike typing arena built in Godot.</p>
                <p>In development.</p>
            `,imgSrc:"",imgAlt:""},{title:"Guided Peckcision",body:`
                <p>2-D arcade prototype where pigeons inside a warhead peck controls to steer—made solo in one week for “Nothing Can Go Wrong…” Brackey's 2025.1 game jam.</p>
                <ul <style="padding-left: 1.5rem;">
                    <li><a href="https://calum303.itch.io/guided-peckcision">Check it out on Itch.io</a></li>
                    <li>Built with Godot and GDScript; read the dev log <a href="https://calum303.itch.io/guided-peckcision/devlog/894465/brackeys-20251-game-jam-retrospective">here</a></li>
                </ul>
            `,imgSrc:"",imgAlt:""},{title:"POCRods.com",body:`
                <p>A website for a local fishing rod company.</p>
                <p>Built with Wix and integrated with payments, inventory, shipping, and more.</p>
                <p>🌐 <a href="https://pocrods.com">pocrods.com</a></p>
                <p class="small-text">*Current version is not maintained by me.</p>
            `,imgSrc:"",imgAlt:""},{title:"Your-ePower.com",body:`
                <p>A website for a local laptop refurbishing e-retailer.</p>
                <p>Built website and custom product configurator on Shopify.</p> 
                <p>🌐 <a href="https://your-epower.com/">your-epower.com</a></p>
                <p class="small-text">*Current version is not maintained by me.</p>
            `,imgSrc:"",imgAlt:""},{title:"MyMobileRVTec.com",body:`
                <p>A website for a local RV repair company.</p>
                <p>Built static website using HTML/CSS/JS, designed for $0 hosting costs</p>
                <p>🌐 <a href="https://mymobilervtec.com">mymobilervtec.com</a></p>
            `,imgSrc:"",imgAlt:""},{title:"Calum303 SoundCloud",body:`
                <p>I make music with machines—but not by machines. This is where I share music made through a process that feels equal parts science and soul. I use AI to breathe life into music from fragments of poetry, half-formed ideas, and moments that stick, then shape it into something that sounds like me. Half-human and half-algorithm.</p>
                <p>
                    <a href="https://soundcloud.com/calum303" id="soundcloud-icon">
                        <svg class="icon" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_526_"> <path id="XMLID_527_" d="M14.492,208.896c0.619,0,1.143-0.509,1.232-1.226l3.365-26.671l-3.355-27.278 c-0.1-0.717-0.623-1.23-1.242-1.23c-0.635,0-1.176,0.524-1.26,1.23l-2.941,27.278l2.941,26.662 C13.316,208.377,13.857,208.896,14.492,208.896z"></path> <path id="XMLID_530_" d="M3.397,198.752c0.608,0,1.101-0.473,1.19-1.18l2.608-16.574l-2.608-16.884 c-0.09-0.685-0.582-1.18-1.19-1.18c-0.635,0-1.127,0.495-1.217,1.19L0,180.999l2.18,16.569 C2.27,198.269,2.762,198.752,3.397,198.752z"></path> <path id="XMLID_531_" d="M27.762,148.644c-0.08-0.867-0.715-1.5-1.503-1.5c-0.782,0-1.418,0.633-1.491,1.5l-2.811,32.355 l2.811,31.174c0.073,0.862,0.709,1.487,1.491,1.487c0.788,0,1.423-0.625,1.503-1.487l3.18-31.174L27.762,148.644z"></path> <path id="XMLID_532_" d="M38.152,214.916c0.922,0,1.668-0.759,1.758-1.751l3.005-32.156l-3.005-33.258 c-0.09-0.999-0.836-1.749-1.758-1.749c-0.935,0-1.692,0.751-1.756,1.754l-2.656,33.253l2.656,32.156 C36.46,214.158,37.217,214.916,38.152,214.916z"></path> <path id="XMLID_533_" d="M50.127,215.438c1.074,0,1.936-0.86,2.025-2.011l-0.01,0.008l2.83-32.426l-2.83-30.857 c-0.08-1.132-0.941-2.005-2.016-2.005c-1.09,0-1.947,0.873-2.012,2.014l-2.502,30.849l2.502,32.418 C48.18,214.578,49.037,215.438,50.127,215.438z"></path> <path id="XMLID_534_" d="M67.132,181.017l-2.655-50.172c-0.074-1.272-1.065-2.286-2.281-2.286c-1.207,0-2.195,1.013-2.269,2.286 l-2.35,50.172l2.35,32.418c0.074,1.278,1.063,2.278,2.269,2.278c1.217,0,2.207-1,2.281-2.278v0.009L67.132,181.017z"></path> <path id="XMLID_535_" d="M74.386,215.766c1.339,0,2.45-1.111,2.513-2.529v0.021l2.482-32.233l-2.482-61.656 c-0.063-1.418-1.174-2.529-2.513-2.529c-1.37,0-2.471,1.111-2.545,2.529l-2.185,61.656l2.195,32.222 C71.915,214.655,73.016,215.766,74.386,215.766z"></path> <path id="XMLID_536_" d="M86.645,111.435c-1.508,0-2.725,1.238-2.787,2.799l-2.033,66.801l2.033,31.884 c0.063,1.553,1.279,2.783,2.787,2.783c1.504,0,2.73-1.22,2.783-2.788v0.016l2.307-31.895l-2.307-66.801 C89.375,112.663,88.148,111.435,86.645,111.435z"></path> <path id="XMLID_782_" d="M99.01,215.766c1.656,0,2.975-1.336,3.037-3.056v0.019l2.133-31.693l-2.133-69.045 c-0.063-1.714-1.381-3.056-3.037-3.056c-1.666,0-3.005,1.342-3.031,3.056l-1.916,69.045l1.916,31.693 C96.005,214.43,97.344,215.766,99.01,215.766z"></path> <path id="XMLID_783_" d="M111.477,215.734c1.787,0,3.237-1.463,3.291-3.318v0.029l1.963-31.404l-1.963-67.289 c-0.054-1.854-1.504-3.311-3.291-3.311c-1.8,0-3.25,1.456-3.303,3.311l-1.725,67.289l1.736,31.389 C108.227,214.271,109.677,215.734,111.477,215.734z"></path> <path id="XMLID_784_" d="M129.359,181.041l-1.777-64.836c-0.043-2-1.609-3.571-3.551-3.571c-1.947,0-3.514,1.571-3.555,3.584 l-1.594,64.823l1.594,31.198c0.041,1.984,1.607,3.556,3.555,3.556c1.941,0,3.508-1.572,3.551-3.585v0.029L129.359,181.041z"></path> <path id="XMLID_785_" d="M136.682,215.853c2.064,0,3.773-1.717,3.805-3.828v0.017l1.613-30.984l-1.613-77.153 c-0.031-2.119-1.74-3.833-3.805-3.833c-2.063,0-3.767,1.722-3.809,3.844l-1.434,77.111l1.434,31.016 C132.915,214.136,134.619,215.853,136.682,215.853z"></path> <path id="XMLID_786_" d="M149.291,92.814c-2.229,0-4.037,1.849-4.074,4.103l-1.667,84.151l1.677,30.526 c0.027,2.225,1.836,4.068,4.064,4.068c2.195,0,4.037-1.844,4.047-4.105v0.037l1.82-30.526l-1.82-84.151 C153.328,94.655,151.486,92.814,149.291,92.814z"></path> <path id="XMLID_787_" d="M160.82,215.882c0.09,0.008,101.623,0.056,102.275,0.056c20.385,0,36.904-16.722,36.904-37.357 c0-20.624-16.52-37.349-36.904-37.349c-5.059,0-9.879,1.034-14.275,2.907c-2.922-33.671-30.815-60.077-64.842-60.077 c-8.318,0-16.429,1.662-23.593,4.469c-2.788,1.09-3.534,2.214-3.556,4.392v118.539C156.861,213.752,158.607,215.655,160.82,215.882 z"></path> </g> </g></svg>
                    </a>
                </p>
            `,imgSrc:"",imgAlt:""}],contact:{title:"Let’s connect.",body:`
            <p>Have a question, idea, or opportunity? I’d love to chat.</p>
            <p><a href="mailto:contact@calumklesel.com"><strong>contact@calumklesel.com</strong></a></p>
        `,imgSrc:_,imgAlt:"A photo of Calum"},resume:{title:"My resume",body:`
        <style>
    body {
      font-family: Helvetica, Arial, sans-serif;
      max-width: 850px;
      margin: 0 auto;
      padding: 0 auto;
      color: #222;
      line-height: 1.4;
    }
    h1, h2, h3 {
      color: #111;
      margin-bottom: 0;
    }
    h1 {
      font-size: 1.7rem;
    }
    h2 {
      font-size: 1.4rem;
    }
    .contact {
      font-size: 0.95rem;
    }
    ul {
      padding-left: 1.25rem;
    }
    li {
      margin-bottom: 0.3rem;
    }
    .section {
      margin-bottom: 2rem;
    }
    strong {
      font-weight: 600;
    }
    @media print {
      body {
        max-width: none;
        margin: 0;
      }
      a {
        color: #222;
        text-decoration: none;
      }
      a::after {
        content: " (" attr(href) ")";
      }
    }
  </style>
            <h1 id="calum-klesel">Calum Klesel</h1>
    <p class="contact">📍 Wheat Ridge, CO | 📞 303-725-7613 | 📩 calum.klesel@gmail.com<br>🌐 <a href="https://calumklesel.com">Personal Website</a> | 🟦 <a href="https://www.linkedin.com/in/calum-klesel/">LinkedIn</a> | ⚫ <a href="https://github.com/captainklesel">GitHub</a>
    </p>

    <hr>

    <div class="section">
        <h2 id="summary">Summary</h2>
        <p>Curious and endlessly hands-on, I&#39;m a technical problem solver and builder who thrives at the intersection of software, systems, and creativity.</p>
        <p>I’ve led IT modernization efforts, architected automation platforms, and built internal tools that supported organizational growth from 85 to over 600 employees. I enjoy exploring new technologies, connecting tools through custom scripting and APIs, and delivering solutions that are elegant, secure, and practical.</p>
        <p>Lately, I’ve extended my engineering mindset to creative spaces—designing game systems, prototyping mechanics, and building indie projects in Godot.</p>
        <p>I&#39;m open to roles in software development, automation engineering, IT infrastructure, or game development—especially where I can solve meaningful problems, ship impactful software, and collaborate with curious people.</p>
    </div>

    <div class="section">
        <h2 id="core-competencies">Core Competencies</h2>
        <p><strong>Software &amp; Web</strong><br>REST &amp; GraphQL APIs, Automation &amp; Scripting, Git, JavaScript, C++, C#, Python, Node.js, HTML, CSS, JSON, Object Oriented Programming, SOLID Principles, Design Patterns</p>
        <p><strong>Integration &amp; DevOps</strong><br>API Workflows, OAuth2, ETL, Cloud Infrastructure, Microservices, Webhooks, CI/CD, Async Queueing, Event-Driven Architecture</p>
        <p><strong>IT Operations</strong><br>Active Directory, VMWare, Networking, SSO AD Authentication, HelpDesk Systems, Asset Management, Technical Documentation, Onboarding Systems, Software Procurement, Platform Consolidation, Cost Optimization</p>
        <p><strong>Tools &amp; Platforms</strong><br>GitHub, Postman, Pipedream, Azure, Microsoft 365, Monday.com, HubSpot, Slack, Zoom, Teams, Trello, Jira, Windows, macOS, Linux, iOS, Android</p>
        <p><strong>IT Operations &amp; Project Enablement</strong><br>SaaS Strategy, IT Risk Management, Technical Documentation, Cross-Functional Collaboration, Process Mapping, Workflow Auditing, Platform Consolidation, CRM Strategy, Vendor Coordination, Technical Support, Agile Methodologies</p>
        <p><strong>Game Development</strong><br>Gameplay Systems, Procedural Generation, UI/UX, State Machines, Scene Management, Audio Tools, Physics Systems, Godot, GDScript, Aseprite, Gimp</p>
    </div>

    <div class="section">
        <h2 id="education-credentials">Education &amp; Credentials</h2>
        <p><strong>Bachelor of Science in Computer Science</strong><br>Texas State University — San Marcos, TX, 2018<br>Minor: Religious Studies</p>
        <p><strong>Monday.com Product Badge</strong> — MondayLearn, 2022<br><strong>Microsoft 365 Certified: Fundamentals</strong> — Microsoft, 2022</p>
    </div>

    <div class="section">
        <h2 id="experience">Experience</h2>
        <h3 id="productivity-integration-specialist-nexcore-group-denver-co">Productivity &amp; Integration Specialist — NexCore Group, Denver, CO</h3>
        <p><em>Oct 2021 – Oct 2024</em>  </p>
        <ul>
        <li>Led the architecture and deployment of a cloud-based integration platform using Pipedream and GitHub, enabling scalable custom automations across Microsoft 365, HubSpot, Monday.com, Zoom, Slack, and internal systems</li>
        <li>Built and maintained a centralized event-driven gateway using webhook signals, async queueing, and serverless functions to process over 100,000 monthly API events with high resilience and low latency</li>
        <li>Designed and implemented onboarding workflows, asset tracking systems, and ticketing infrastructure with extensible architecture for rapid scaling as the company grew from 85 to 600+ employees</li>
        <li>Developed custom scripts and microservices in JavaScript, Python, Bash, and PowerShell for endpoint provisioning, uptime monitoring, Active Directory automation, and platform health checks</li>
        <li>Architected internal CRM and project management tools by extending Monday.com Work OS with custom automations, integrated email and comment syncing, data enrichment pipelines, and reporting dashboards</li>
        <li>Created a comprehensive microservice inventory and versioning system to track deployment status, configurations, dependencies, and documentation across internal integrations</li>
        <li>Led cross-functional projects involving SaaS consolidation, cloud migration, compliance planning, disaster recovery strategy, and secure system access protocols</li>
        <li>Mentored IT and operations teams in technical integration workflows, best practices for cloud security, and automation design patterns</li>
        <li>Designed proactive technical documentation including platform SOPs, system architecture diagrams, integration playbooks, and onboarding manuals to support system scalability and team enablement</li>
        </ul>
        <h3 id="it-operations-manager-port-o-connor-rod-and-gun-tx">IT &amp; Operations Manager — Port O’Connor Rod and Gun, TX</h3>
        <p><em>Dec 2018 – Dec 2021</em>  </p>
        <ul>
        <li>Designed and implemented greenfield IT systems, integrating e-commerce (Wix - pocrods.com &amp; poctackle.com), logistics (ShipStation), POS (Lightspeed), accounting (QuickBooks), project management (Trello), email marketing (Mailchimp), and social media management (Facebook, Instagram, Later)  </li>
        <li>Managed digital operations, vendor relationships, and inventory and fulfillment systems  </li>
        <li>Developed technical documentation, training materials, and process guides to support staff and ensure smooth transitions during ownership changes</li>
        </ul>
        <h3 id="quality-supervisor-repair-technician-your-epower-solutions-co">Quality Supervisor &amp; Repair Technician — Your ePower Solutions, CO</h3>
        <p><em>Oct 2020 – Aug 2021</em>  </p>
        <ul>
        <li>Created process docs, grading matrices, repair guides, and acquisition planning tools.</li>
        <li>Wrote scripts to automate configuration procedures and implemented workflows on Trello and Google Workspace for visibility.</li>
        <li>Promoted to Quality Supervisor and led hiring, training, and mentoring of direct report.</li>
        </ul>
        <h3 id="applecare-senior-advisor-apple-tx">AppleCare Senior Advisor — Apple, TX</h3>
        <p><em>Jul 2016 – Nov 2018 · Austin, TX</em>  </p>
        <ul>
        <li>Managed escalated technical cases across Apple’s product ecosystem — including iOS, macOS, watchOS, tvOS, iCloud, Apple ID, AppleCare Services, and Apple Hardware  </li>
        <li>Authored 75+ internal guides and knowledge base articles used across support teams  </li>
        <li>Delivered one-on-one technical coaching to junior advisors</li>
        </ul>
    </div>

    <div class="section">
        <h2 id="notable-technical-work">Notable Technical Work</h2>
        <p><strong>Personal Website</strong> — <em>Astro.js / JavaScript / HTML / CSS</em>  </p>
        <ul>
        <li>Developed a fully static Single Page App (SPA-style UX) to minimize server overhead and maximize scalability</li>
        <li>Designed to evolve into larger applications, reflecting a pragmatic, production-oriented engineering mindset</li>
        </ul>
        <p><strong>The Keyboard Coliseum</strong> - <em>Godot Engine / Game Development</em>   </p>
        <ul>
        <li>Building an indie title in Godot, focused on dynamic progression systems, procedural content generation, and reusable artifacts for UI, audio, and scene management.</li>
        </ul>
        <p><a href="https://calum303.itch.io/guided-peckcision"><strong>Guided Peckcision</strong></a> — <em>Brackey’s Game Jam 2025.1 (Feb 2025)</em>  </p>
        <ul>
        <li>Submitted solo-developed game within a 7-day timeframe with full mobile support, custom physics, original art, and a <a href="https://calum303.itch.io/guided-peckcision/devlog/894465/brackeys-20251-game-jam-retrospective">public devlog</a></li>
        </ul>
        <p><strong>Captain LLC</strong> — <em>Freelance Tech Consultant (2019–2021)</em>  </p>
        <ul>
        <li>Built and supported websites, integrations, and cloud workflows for small businesses using GoDaddy, Wix, Shopify, and static HTML/CSS/JS.</li>
        </ul>
        <p><strong>Captain&#39;s Cache (eBay Store)</strong> — <em>eCommerce Business Owner (2019–2022)</em>  </p>
        <ul>
        <li>Top-Rated Power Seller with 2,000+ annual transactions and 100% positive feedback. </li>
        <li>Handled full business lifecycle from sourcing and fulfillment to accounting and customer support.</li>
        </ul>
        </div>
        `,imgSrc:"",imgAlt:""}},M=(()=>{const e=g.RESUME;let o=!1;const r=(s,n)=>{console.log("[ResumeState] enter() called with previous state:",s,"and data:",n),f.show(e),o||(document.addEventListener("click",d),o=!0),(()=>{const a=document.querySelector(`#scene-${e} #overlay-img`),t=document.querySelector(`#scene-${e} #overlay-title`),i=document.querySelector(`#scene-${e} #overlay-body`);a&&a.classList.add("hidden"),t&&(t.textContent=m[e].title),i&&(i.innerHTML=m[e].body)})(),history.pushState(n,"",`?state=${e.toUpperCase()}`)},l=()=>{if(console.log("[ResumeState] exit() called."),o){document.removeEventListener("click",d);const s=document.querySelector(`#scene-${e} #overlay-img`);s&&s.classList.remove("hidden"),o=!1}};function d(s){const n=s.target.closest(".clickable");if(!n)return console.log("[ResumeState] Click event ignored - not a clickable element.");s.preventDefault(),console.log("[ResumeState] Clickable clicked:",n.id);const a=n.dataset.targetState;a?(console.log(`[ResumeState] Clickable clicked, transitioning to target state: ${a}`),v.transition_to_state_by_name(a)):console.warn("[ResumeState] No target state defined for this clickable:",n.id)}return{name:e,enter:r,exit:l}})(),L=(()=>{let e=!1;const o=g.HOME,r="[data-navigation]",l=()=>document.querySelectorAll(r),d=(t,i)=>{console.log("[HomeState] enter() called with previous state:",t,"and data:",i),f.show(o),e||(document.addEventListener("click",n),document.addEventListener("keydown",a),e=!0),l().forEach(c=>{c.hidden=!1}),(()=>{const c=document.querySelector(`#scene-${o} #overlay-img`),h=document.querySelector(`#scene-${o} #overlay-title`),u=document.querySelector(`#scene-${o} #overlay-body`);c&&(c.src=m[o].imgSrc,c.alt=m[o].imgAlt),h&&(h.textContent=m[o].title),u&&(u.innerHTML=m[o].body)})(),history.pushState(i,"",`?state=${o.toUpperCase()}`)},s=()=>{e&&(document.removeEventListener("click",n),document.removeEventListener("keydown",a),e=!1)};function n(t){console.log("Event details:",t);const i=t.target.closest(".clickable");if(!i)return console.log("[HomeState] Click event ignored - not a clickable element.");t.preventDefault(),console.log("[HomeState] Clickable clicked:",i.id);const c=i.dataset.targetState;c?v.transition_to_state_by_name(c):console.warn("[HomeState] No target state defined for this clickable:",i.id)}function a(t){console.log("Keydown event detected:",t);const i=t.key.toLowerCase();document.querySelectorAll(".clickable"),console.log(i==="escape"?"[HomeState] Escape key pressed...":`[HomeState] Key pressed: ${i}`)}return{name:o,enter:d,exit:s}})(),A=(()=>{const e=g.CONTACT;let o=null,r=!1;const l=(a,t)=>{console.log("[ContactState] enter() called with previous state:",a,"and data:",t),o=a,f.show(e),r||(document.addEventListener("click",s),document.addEventListener("keydown",n),r=!0,console.log("[ContactState] Event listeners registered.")),(()=>{const i=document.querySelector(`#scene-${e} #overlay-img`),c=document.querySelector(`#scene-${e} #overlay-title`),h=document.querySelector(`#scene-${e} #overlay-body`);i&&(i.src=m[e].imgSrc,i.alt=m[e].imgAlt),c&&(c.textContent=m[e].title),h&&(h.innerHTML=m[e].body)})(),history.pushState(t,"",`?state=${e.toUpperCase()}`)},d=()=>{r&&(document.removeEventListener("click",s),document.removeEventListener("keydown",n),r=!1,console.log("[ContactState] Event listeners deregistered."))};function s(a){const t=a.target.closest(".clickable");if(!t)return console.log("[ContactState] Click event ignored - not a clickable element.");a.preventDefault(),console.log("[ContactState] Clickable clicked:",t.id);const i=t.dataset.targetState;i?(console.log(`[ContactState] Clickable clicked, transitioning to target state: ${i}`),v.transition_to_state_by_name(i)):console.warn("[ContactState] No target state defined for this clickable:",t.id)}function n(a){console.log("[ContactState] Keydown event:",a.key),a.key==="Escape"&&(console.log("[ContactState] Escape key pressed, transitioning to previous state."),v.transition_to_state_by_name(o))}return{name:e,enter:l,exit:d}})();function x(e,o,r,l="/assets/images/fallback.png",d="image unavailable"){if(!e)return;e.alt=r,e.src=o;function s(){console.warn(`Image failed to load: ${o}`),e.removeEventListener("error",s),e.src=l,e.alt=d}e.addEventListener("error",s,{once:!0})}const I=(()=>{const e=g.PROJECTS;let o=!1,r=0;const l=m[e],d=(u,p)=>{console.log("[ProjectsState] enter() called with previous state:",u,"and data:",p),f.show(e);const y=document.querySelector(`#scene-${e} .project-nav`);y?(console.log("[ProjectsState] Project navigation found in the DOM."),y.classList.remove("hidden"),y.classList.add("flex-center"),console.log("[ProjectsState] Project navigation shown.")):console.warn("[ProjectsState] Project navigation not found in the DOM."),o||(document.addEventListener("click",a),document.querySelector(`#scene-${e} #proj-prev`)?.addEventListener("click",t),document.querySelector(`#scene-${e} #proj-next`)?.addEventListener("click",i),o=!0,console.log("[ProjectsState] Event listeners registered."));const S=Number(new URLSearchParams(location.search).get("index"));r=Number.isFinite(S)?S:p.index??0,n(r),history.pushState(p,"",`?state=${e.toUpperCase()}&index=${r}`)},s=()=>{console.log("[ProjectsState] exit() called."),o&&(document.removeEventListener("click",a),document.querySelector("#proj-prev")?.removeEventListener("click",t),document.querySelector("#proj-next")?.removeEventListener("click",i),o=!1)};function n(u){const p=document.querySelector(`#scene-${e} #overlay-img`),y=document.querySelector(`#scene-${e} #overlay-title`),S=document.querySelector(`#scene-${e} #overlay-body`);p&&x(p,m[e][u].imgSrc,m[e][u].imgAlt),y&&(y.textContent=m[e][u].title),S&&(S.innerHTML=m[e][u].body)}function a(u){const p=u.target.closest(".clickable");if(!p)return console.log("[ProjectsState] Click event ignored - not a clickable element.");u.preventDefault(),console.log("[ProjectsState] Clickable clicked:",p.id);const y=p.dataset.targetState;y?(console.log(`[ProjectsState] Clickable clicked, transitioning to target state: ${y}`),v.transition_to_state_by_name(y)):console.warn("[ProjectsState] No target state defined for this clickable:",p.id)}function t(){c(-1)}function i(){c(1)}function c(u){r=(r+u+l.length)%l.length,n(r);const p=new URLSearchParams(location.search);p.set("index",r),history.pushState({},"",`${location.pathname}?${p}`)}function h(){return r}return{name:e,enter:d,exit:s,get_current_index:h}})(),E=(()=>{const e=g.ABOUT;let o=!1;const r=(n,a)=>{console.log("[AboutState] enter() called with previous state:",n,"and data:",a),f.show(e),o||(document.addEventListener("click",d),document.addEventListener("keydown",s),o=!0),(()=>{const t=document.querySelector(`#scene-${e} #overlay-img`),i=document.querySelector(`#scene-${e} #overlay-title`),c=document.querySelector(`#scene-${e} #overlay-body`);t&&(t.src=m[e].imgSrc,t.alt=m[e].imgAlt),i&&(i.textContent=m[e].title),c&&(c.innerHTML=m[e].body)})(),history.pushState(a,"",`?state=${e.toUpperCase()}`)},l=()=>{console.log("[AboutState] exit() called."),o&&(document.removeEventListener("click",d),document.removeEventListener("keydown",s),o=!1)};function d(n){const a=n.target.closest(".clickable");if(!a)return console.log("[AboutState] Click event ignored - not a clickable element.");n.preventDefault(),console.log("[AboutState] Clickable clicked:",a.id);const t=a.dataset.targetState;t?(console.log(`[AboutState] Clickable clicked, transitioning to target state: ${t}`),v.transition_to_state_by_name(t)):console.warn("[AboutState] No target state defined for this clickable:",a.id)}function s(n){}return{name:e,enter:r,exit:l}})(),b={start:k,resume:M,home:L,contact:A,projects:I,about:E},v=(()=>{let e=null;const o=(n="START")=>{console.log(`[StateMachine] Initializing with start state: ${n}`),e=b[g[n]],e||(e=b[g.START]),e.enter(null)},r=(n,a={})=>{if(!n)return console.warn(`[StateMachine] Error with state '${n}'`);e.exit(),n.enter(e.name,a),e=n,console.log(`[StateMachine] Transitioned to state: ${n.name}`)};return{init:o,transition_to_state_by_name:(n,a={})=>{if(console.log(`[StateMachine] Transitioning to state by name: ${n}`),!n||typeof n!="string")return console.warn(`[StateMachine] Invalid state name '${n}'`);if(!b)return console.warn("[StateMachine] State registry is not defined");const t=b[n];if(!t)return console.warn(`[StateMachine] Unknown state '${n}'`);r(t,a)},update:n=>{e&&e?.update&&e.update(n)},get_current_state:()=>e}})();window.addEventListener("DOMContentLoaded",()=>{console.log("[Bootstrap] DOM ready. Initializing...");const o=new URLSearchParams(window.location.search).get("state")||g.HOME;v.init(o.toUpperCase()),console.log(`[Bootstrap] State machine initialized with state: ${o}`),console.log("[Bootstrap] Initialization complete.")});function P(){const e=new URLSearchParams(location.search),o=(e.get("state")||g.HOME).toLowerCase(),r={};if(o===g.PROJECTS){const l=Number(e.get("index"));Number.isFinite(l)&&(r.index=l)}(v.get_current_state()?.name!==o||o===g.PROJECTS)&&v.transition_to_state_by_name(o,r)}window.addEventListener("popstate",P);

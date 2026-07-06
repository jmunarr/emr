document.addEventListener('DOMContentLoaded', () => { 
    lucide.createIcons(); 
});

const patientData = {
    "Sample, Normal": { mrn: "NORMAL-001", dob: "Jan 1, 1990", room: "000-Z", ageSex: "36 / Male", weight: "70 kg", physician: "Dr. Baseline", lang: "English", complaint: "Healthy baseline", adm: "Jul 4, 2026 11:00", bp: "120/80", hr: "70", rr: "16", temp: "36.6", o2: "99", allergy: "NKA", allergyNote: "", acuity: 1, acuityLabel: "Low" },
    "Bongar, Carl Zendrick": { mrn: "DS-672915", dob: "Jul 18, 1980", room: "301-A", ageSex: "45 / Male", weight: "74 kg", physician: "Dr. Michael Reyes", lang: "English / Filipino", complaint: "Persistent cough and fever", adm: "Jul 1, 2026 09:15", bp: "138/84", hr: "102", rr: "24", temp: "38.2", o2: "92", allergy: "Penicillin", allergyNote: "Rash and facial swelling documented by patient report.", acuity: 3, acuityLabel: "Moderate" },
    "Damino, Patrick": { mrn: "DS-672916", dob: "Feb 11, 2004", room: "302-A", ageSex: "22 / Male", weight: "68 kg", physician: "Dr. Angela Cruz", lang: "English / Filipino", complaint: "Severe lower right abdominal pain", adm: "Jul 2, 2026 10:30", bp: "132/82", hr: "104", rr: "20", temp: "38.1", o2: "98", allergy: "NKA", allergyNote: "", acuity: 3, acuityLabel: "Moderate" },
    "Fernandez, John Davey": { mrn: "DS-672917", dob: "Oct 5, 1997", room: "303-A", ageSex: "28 / Male", weight: "59 kg", physician: "Dr. Joseph Lim", lang: "English / Filipino", complaint: "Chronic cough with blood-tinged sputum", adm: "Jul 3, 2026 08:45", bp: "126/80", hr: "98", rr: "24", temp: "37.9", o2: "91", allergy: "Sulfa Drugs", allergyNote: "Hives and difficulty breathing.", acuity: 4, acuityLabel: "High" },
    "Lagdameo, Sofronio": { mrn: "DS-672918", dob: "Jan 20, 1965", room: "304-A", ageSex: "61 / Male", weight: "82 kg", physician: "Dr. Ramon Garcia", lang: "Filipino", complaint: "High blood pressure and dizziness", adm: "Jun 28, 2026 11:20", bp: "162/96", hr: "84", rr: "18", temp: "36.9", o2: "98", allergy: "NKA", allergyNote: "", acuity: 1, acuityLabel: "Low" },
    "Mangi, Shandy": { mrn: "DS-672919", dob: "Sep 14, 1994", room: "305-A", ageSex: "31 / Male", weight: "71 kg", physician: "Dr. Carla Mendoza", lang: "English / Filipino", complaint: "Vomiting and diarrhea", adm: "Jul 2, 2026 01:50", bp: "104/68", hr: "108", rr: "22", temp: "37.8", o2: "97", allergy: "Shellfish", allergyNote: "Anaphylaxis reported in 2020.", acuity: 3, acuityLabel: "Moderate" },
    "Soriano, Francis": { mrn: "DS-672920", dob: "Apr 30, 1987", room: "306-A", ageSex: "39 / Male", weight: "77 kg", physician: "Dr. Kevin Santos", lang: "English / Filipino", complaint: "Painful urination", adm: "Jun 30, 2026 03:40", bp: "128/82", hr: "92", rr: "18", temp: "38.0", o2: "98", allergy: "NKA", allergyNote: "", acuity: 3, acuityLabel: "Moderate" },
    "Badion, Shin": { mrn: "DS-672921", dob: "Dec 8, 2002", room: "307-B", ageSex: "24 / Female", weight: "55 kg", physician: "Dr. Patricia Flores", lang: "English / Filipino", complaint: "Shortness of breath", adm: "Jul 4, 2026 07:10", bp: "124/78", hr: "106", rr: "28", temp: "37.1", o2: "93", allergy: "Dust Mites", allergyNote: "Chronic sneezing and itchy eyes.", acuity: 4, acuityLabel: "High" },
    "Barredo, Juliana Gayle": { mrn: "DS-672922", dob: "May 25, 2000", room: "308-B", ageSex: "26 / Female", weight: "58 kg", physician: "Dr. Nina Torres", lang: "English / Filipino", complaint: "Severe migraine headache", adm: "Jul 1, 2026 12:25", bp: "118/76", hr: "76", rr: "16", temp: "36.8", o2: "99", allergy: "NKA", allergyNote: "", acuity: 1, acuityLabel: "Low" },
    "Bunoy, Caira Mizrel": { mrn: "DS-672923", dob: "Aug 17, 2005", room: "309-B", ageSex: "20 / Female", weight: "50 kg", physician: "Dr. Leo Ramos", lang: "Filipino", complaint: "Sore throat and difficulty swallowing", adm: "Jul 3, 2026 04:15", bp: "116/74", hr: "96", rr: "18", temp: "38.3", o2: "98", allergy: "Amoxicillin", allergyNote: "Mild rash noted after last dose.", acuity: 1, acuityLabel: "Low" },
    "Casem, Azzhia": { mrn: "DS-672924", dob: "Mar 6, 2003", room: "310-B", ageSex: "23 / Female", weight: "49 kg", physician: "Dr. Grace Villanueva", lang: "English / Filipino", complaint: "Fatigue and dizziness", adm: "Jul 2, 2026 09:40", bp: "100/64", hr: "110", rr: "20", temp: "36.8", o2: "95", allergy: "Peanuts", allergyNote: "Swelling of lips and throat.", acuity: 3, acuityLabel: "Moderate" },
    "Cruz, Irizh": { mrn: "DS-672925", dob: "Nov 21, 2006", room: "311-B", ageSex: "19 / Female", weight: "53 kg", physician: "Dr. Mark Hernandez", lang: "English / Filipino", complaint: "Fever and body aches", adm: "Jun 29, 2026 05:30", bp: "114/72", hr: "94", rr: "18", temp: "38.4", o2: "99", allergy: "NKA", allergyNote: "", acuity: 1, acuityLabel: "Low" },
    "Mendez, Althea": { mrn: "DS-672926", dob: "Jan 12, 1992", room: "312-B", ageSex: "34 / Female", weight: "62 kg", physician: "Dr. Eric Navarro", lang: "English / Filipino", complaint: "Persistent cough and chest discomfort", adm: "Jul 4, 2026 11:05", bp: "130/80", hr: "96", rr: "22", temp: "37.7", o2: "94", allergy: "Latex", allergyNote: "Contact dermatitis and itching.", acuity: 3, acuityLabel: "Moderate" },
    "Munar, Justine Kieth": { mrn: "DS-672927", dob: "Jun 3, 2005", room: "313-B", ageSex: "21 / Female", weight: "48 kg", physician: "Dr. Camille Dizon", lang: "English / Filipino", complaint: "Weakness and dehydration", adm: "Jul 3, 2026 02:20", bp: "98/62", hr: "112", rr: "20", temp: "37.5", o2: "98", allergy: "NKA", allergyNote: "", acuity: 3, acuityLabel: "Moderate" }
};

// Data Generators
function generateMeds() {
    return [
        { name: "Aspirin", desc: "Antiplatelet protocol", dose: "81 mg", route: "PO", freq: "Daily", due: "09:00", status: "OVERDUE" },
        { name: "Nitroglycerin", desc: "Hold if SBP below 100", dose: "0.4 mg", route: "SL", freq: "PRN q5 min x3", due: "Now", status: "DUE" },
        { name: "Ondansetron", desc: "Anti-emetic", dose: "4 mg", route: "IV", freq: "q8h PRN", due: "PRN", status: "DUE" },
        { name: "Heparin", desc: "VTE prophylaxis", dose: "5,000 units", route: "SubQ", freq: "q8h", due: "14:00", status: "DUE" },
        { name: "Atorvastatin", desc: "High-intensity statin", dose: "40 mg", route: "PO", freq: "Nightly", due: "21:00", status: "DUE" }
    ];
}

function generateCarePlan(complaint) {
    const c = complaint.toLowerCase();
    
    if (c.includes('cough') || c.includes('breath') || c.includes('chest')) {
        return [
            { dx: "Ineffective Airway Clearance", rto: "Related to excess mucus production and retained secretions.", goal: "Patient maintains clear lung sounds and O2 sat > 94% on room air.", int: "Elevate HOB; encourage deep breathing/coughing every 2 hours; administer O2 as ordered.", eval: "Lung sounds clear in upper lobes, diminished in bases. O2 stable at 95% on 2L NC." },
            { dx: "Impaired Gas Exchange", rto: "Related to ventilation-perfusion mismatch.", goal: "Patient demonstrates unlabored breathing without use of accessory muscles.", int: "Monitor continuous pulse oximetry; assess respiratory rate and rhythm; cluster care to reduce O2 demand.", eval: "Respirations unlabored at 18 breaths/min. No accessory muscle use noted." }
        ];
    } else if (c.includes('pain') || c.includes('headache') || c.includes('urination')) {
        return [
            { dx: "Acute Pain", rto: "Related to biological injury agents as evidenced by patient reporting pain > 5/10.", goal: "Patient reports pain is decreased to an acceptable level (<= 3/10) within 30 mins of intervention.", int: "Assess pain using PQRST method; administer prescribed analgesics; provide non-pharmacological comfort measures.", eval: "Pain decreased to 2/10 following administration of medication and rest." },
            { dx: "Anxiety", rto: "Related to acute health changes and unfamiliar hospital environment.", goal: "Patient verbalizes understanding of treatment plan and appears relaxed.", int: "Explain all procedures clearly; answer questions honestly; provide a quiet environment.", eval: "Patient asks appropriate questions and demonstrates decreased physical tension." }
        ];
    } else if (c.includes('vomit') || c.includes('diarrhea') || c.includes('dehydration') || c.includes('weakness')) {
        return [
            { dx: "Deficient Fluid Volume", rto: "Related to active fluid volume loss (gastrointestinal).", goal: "Patient maintains adequate hydration status evidenced by stable vitals and moist mucous membranes.", int: "Monitor strict intake and output; administer IV fluids as ordered; assess skin turgor and oral mucosa.", eval: "Urine output is 45mL/hr. Mucous membranes are pink and moist." },
            { dx: "Risk for Electrolyte Imbalance", rto: "Related to loss of GI fluids.", goal: "Patient's electrolyte lab values remain within normal limits during shift.", int: "Monitor basic metabolic panel (BMP); observe for signs of muscle weakness or cramping.", eval: "No signs of muscle cramping. Lab values pending." }
        ];
    } else {
        return [
            { dx: "Decreased Cardiac Output", rto: "Related to altered heart rate/rhythm or blood pressure changes.", goal: "Patient maintains blood pressure within ordered parameters and warm/perfused extremities.", int: "Trend vital signs hourly; assess peripheral pulses and cap refill; maintain continuous telemetry.", eval: "Blood pressure trending downward toward baseline. Pulses 2+ bilaterally." },
            { dx: "Risk for Falls", rto: "Related to dizziness and altered physical mobility.", goal: "Patient remains free from falls during the hospitalization.", int: "Keep bed in lowest position; ensure call light is in reach; assist with all ambulation.", eval: "Patient utilizes call light for assistance. No falls noted." }
        ];
    }
}

// --- Add Patient Logic ---
function openAddPatientModal() {
    const modal = document.getElementById('add-patient-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeAddPatientModal() {
    const modal = document.getElementById('add-patient-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    
    const inputs = modal.querySelectorAll('input, select');
    inputs.forEach(input => input.value = '');
}

function saveNewPatient() {
    const name = document.getElementById('np-name').value.trim();
    if (!name) {
        alert("Patient Name is required!");
        return;
    }

    const acuityVal = parseInt(document.getElementById('np-acuity').value) || 1;
    let acuityLabel = "Low";
    if(acuityVal === 2) acuityLabel = "Medium-Low";
    if(acuityVal === 3) acuityLabel = "Moderate";
    if(acuityVal === 4) acuityLabel = "High";

    const now = new Date();
    const admString = now.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) + ' ' + 
                      now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

    const newPatient = {
        mrn: "DS-" + Math.floor(100000 + Math.random() * 900000),
        dob: document.getElementById('np-dob').value || "Unknown",
        room: document.getElementById('np-room').value || "Triage",
        ageSex: document.getElementById('np-agesex').value || "Unknown",
        weight: document.getElementById('np-weight').value || "Unknown", 
        physician: document.getElementById('np-physician').value || "Unassigned",
        lang: document.getElementById('np-lang').value || "English",
        complaint: document.getElementById('np-complaint').value || "Routine Check-up",
        adm: admString,
        bp: document.getElementById('np-bp').value || "120/80",
        hr: document.getElementById('np-hr').value || "70",
        rr: document.getElementById('np-rr').value || "16",
        temp: document.getElementById('np-temp').value || "36.6",
        o2: document.getElementById('np-o2').value || "98",
        allergy: document.getElementById('np-allergy').value || "NKA",
        allergyNote: document.getElementById('np-allergyNote').value || "",
        acuity: acuityVal,
        acuityLabel: acuityLabel
    };

    patientData[name] = newPatient;

    const grid = document.getElementById('patient-grid');
    const newBtn = document.createElement('button');
    newBtn.onclick = function() { pickPatient(name); };
    newBtn.className = "bg-white text-slate-800 py-6 px-4 rounded-xl font-semibold shadow-md hover:bg-slate-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-200 w-full text-center border-2 border-dashed border-teal-500 relative";
    
    newBtn.innerHTML = `
        ${name}
        <span class="absolute top-2 right-2 flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
        </span>
    `;

    grid.appendChild(newBtn);
    closeAddPatientModal();
}

// System Functions
function handleLogin() {
    if (document.getElementById('username').value === "x" && document.getElementById('password').value === "x") {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('patient-picker').style.display = 'flex';
    } else { alert("Invalid credentials"); }
}

function logout() { window.location.reload(); }

function goBack() {
    document.getElementById('main-ui').style.display = 'none';
    document.getElementById('patient-picker').style.display = 'flex';
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('-translate-x-full');
}

function pickPatient(name) {
    window.currentPatient = { 
        name, 
        ...patientData[name],
        vitalsLogs: [],
        meds: generateMeds(),
        medLogs: [],
        carePlan: generateCarePlan(patientData[name].complaint),
        carePlanLogs: [],
        wellnessLogs: [],
        completedTasks: 0
    };
    
    const sidebarName = document.getElementById('active-patient');
    if (sidebarName) sidebarName.innerText = name;

    document.getElementById('patient-picker').style.display = 'none';
    document.getElementById('main-ui').style.display = 'flex';
    
    updateCurrentTime();
    setInterval(updateCurrentTime, 60000);
    
    showSection('dashboard');
}

function updateCurrentTime() {
    const timeDisplay = document.getElementById('current-time-display');
    if(timeDisplay) {
        const now = new Date();
        const formatted = now.toLocaleDateString('en-US', { month: 'short', day: '2-digit' }) + ', ' + 
                          now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        timeDisplay.innerText = formatted;
    }
}

function updateActiveNav(activeSection) {
    const navButtons = document.querySelectorAll('aside nav button:not(.text-red-400)'); 
    navButtons.forEach(btn => {
        const onclickAttr = btn.getAttribute('onclick');
        if (onclickAttr && onclickAttr.includes(`showSection('${activeSection}')`)) {
            btn.className = "flex items-center gap-4 p-2 w-full text-left rounded-r bg-[#162e4a] border-l-4 border-teal-400 text-teal-300 font-bold transition-all";
        } else {
            btn.className = "flex items-center gap-4 p-2 w-full text-left rounded-r hover:bg-slate-800 text-slate-300 border-l-4 border-transparent transition-all";
        }
    });
}

// --- BurnoutGuard Logic ---
function incrementBurnoutTask() {
    const p = window.currentPatient;
    p.completedTasks++;
    
    if (p.completedTasks % 5 === 0 && p.completedTasks > 0) {
        triggerBreathBreak(true);
    }
}

function triggerBreathBreak(isAuto = false) {
    const p = window.currentPatient;
    const time = new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'});
    p.wellnessLogs.unshift({
        time: time,
        type: isAuto ? 'Automated Alert' : 'Manual Break',
        msg: 'Guided breath exercise completed.'
    });
    
    alert(`BURNOUT GUARD ${isAuto ? 'ALERT' : 'INITIATED'}:\n\nPlease stop what you are doing.\nBreathe in for 4 seconds...\nHold for 4 seconds...\nExhale for 4 seconds.\n\nYou are doing great. Click OK to return to charting.`);
    
    const activeHeading = document.querySelector('h1.text-3xl');
    if (activeHeading && activeHeading.innerText === 'BurnoutGuard') {
        showSection('burnout');
    }
}

// --- Interactive View Functions ---
function setNow() {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    document.getElementById('vital-time').value = now.toISOString().slice(0,16);
}

function saveVitals() {
    const timeInput = document.getElementById('vital-time');
    const timeVal = timeInput.value;
    
    if (!timeVal) { alert("Please set a timestamp before saving."); return; }

    const bp = document.getElementById('vital-bp').value || document.getElementById('vital-bp').placeholder;
    const hr = document.getElementById('vital-hr').value || document.getElementById('vital-hr').placeholder;
    const rr = document.getElementById('vital-rr').value || document.getElementById('vital-rr').placeholder;
    const temp = document.getElementById('vital-temp').value || document.getElementById('vital-temp').placeholder;
    const o2 = document.getElementById('vital-o2').value || document.getElementById('vital-o2').placeholder;

    const dateObj = new Date(timeVal);
    const formattedTime = dateObj.toLocaleDateString('en-US', {month: 'short', day: '2-digit'}) + ' ' + 
                          dateObj.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: false});

    const p = window.currentPatient;
    
    p.vitalsLogs.unshift({
        time: formattedTime,
        bp: bp, hr: hr, rr: rr, temp: temp, o2: o2
    });

    incrementBurnoutTask();
    showSection('flowsheets');
}

function administerMed(index) {
    const p = window.currentPatient;
    if(p.meds[index].status === 'GIVEN') return; 

    p.meds[index].status = 'GIVEN';
    const time = new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'});
    
    p.medLogs.unshift({
        time: time,
        med: p.meds[index].name,
        dose: p.meds[index].dose
    });

    incrementBurnoutTask();
    showSection('mar'); 
}

function saveCarePlanEvaluations() {
    const p = window.currentPatient;
    let anyChanges = false;

    p.carePlan.forEach((cp, index) => {
        const textarea = document.getElementById(`cp-eval-${index}`);
        if (textarea) {
            cp.eval = textarea.value;
            anyChanges = true;
        }
    });

    if (anyChanges) {
        const time = new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'});
        p.carePlanLogs.unshift({
            time: time,
            msg: "Evaluations updated and saved to chart."
        });
        
        incrementBurnoutTask();
        showSection('careplan');
    }
}


// --- Main Rendering Engine ---
function showSection(section) {
    const p = window.currentPatient;
    const content = document.getElementById('section-content');
    if (!p) return;

    // Auto-close sidebar on mobile after selection
    if (window.innerWidth < 768) {
        document.getElementById('sidebar').classList.add('-translate-x-full');
    }

    updateActiveNav(section);
    const mainHeader = document.getElementById('patient-name-display');
    if (mainHeader) mainHeader.innerText = p.name;

    // ----- DASHBOARD -----
    if (section === 'dashboard') {
        const allergyBanner = p.allergy === "NKA" ? 
            `<div class="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-4 flex items-center gap-3">
                <i data-lucide="shield-check" class="w-5 h-5 text-green-600"></i>
                <p class="text-sm font-bold">No Known Allergies (NKA)</p>
            </div>` :
            `<div class="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg mb-4 flex items-center gap-3">
                <i data-lucide="alert-triangle" class="w-5 h-5 text-red-600"></i>
                <p class="text-sm font-bold"><span class="text-red-700">Allergy: ${p.allergy}</span> 
                <span class="font-normal text-red-600 ml-2 block sm:inline mt-1 sm:mt-0">${p.allergyNote}</span></p>
            </div>`;

        content.innerHTML = `
            <div class="max-w-7xl mx-auto space-y-6">
                <div class="bg-white p-4 md:p-6 rounded-lg border border-slate-200 shadow-sm">
                    <h2 class="text-sm font-bold text-slate-500 mb-4 uppercase flex items-center gap-2">
                        <i data-lucide="heart" class="w-4 h-4 text-teal-600"></i> Live Telemetry
                    </h2>
                    ${allergyBanner}
                    <div class="flex flex-col md:flex-row gap-4">
                        <div class="relative overflow-hidden flex-1 h-24 bg-black rounded-lg border border-slate-700">
                            <svg viewBox="0 0 100 20" preserveAspectRatio="none" class="w-full h-full stroke-teal-400 stroke-[0.8] fill-none">
                                <path id="telemetry-wave" d="M0 10 L20 10 L25 5 L30 15 L35 10 L50 10 L60 10 L65 2 L70 18 L75 10 L100 10" />
                            </svg>
                        </div>
                        <div class="w-full md:w-48 bg-teal-50 border border-teal-200 rounded-lg flex flex-col items-center justify-center p-4 text-slate-800">
                            <span class="text-4xl font-bold">${p.acuity}</span>
                            <span class="text-sm font-medium text-slate-600">${p.acuityLabel} Acuity</span>
                        </div>
                    </div>
                </div>

                <div class="bg-white p-4 md:p-6 rounded-lg border border-slate-200 shadow-sm">
                    <div class="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-6 border-b border-slate-100 pb-4 gap-2">
                        <h2 class="text-xl font-bold flex items-center gap-2 text-slate-800">
                            <i data-lucide="layout-grid" class="w-5 h-5"></i> Demographics
                        </h2>
                        <span class="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">MRN ${p.mrn}</span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        <div><p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Name</p><p class="font-bold text-lg">${p.name}</p></div>
                        <div><p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Age / Sex</p><p class="font-bold text-lg">${p.ageSex}</p></div>
                        <div><p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Date of Birth</p><p class="font-bold text-lg">${p.dob}</p></div>
                        <div><p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Weight</p><p class="font-bold text-lg">${p.weight}</p></div>
                        <div><p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Room Number</p><p class="font-bold text-lg">${p.room}</p></div>
                        <div><p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Attending Physician</p><p class="font-bold text-lg">${p.physician}</p></div>
                        <div><p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Primary Language</p><p class="font-bold text-lg">${p.lang}</p></div>
                        <div class="col-span-1 md:col-span-2"><p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Chief Complaint</p><p class="font-bold text-lg">${p.complaint}</p></div>
                    </div>
                </div>

                <div class="bg-white p-4 md:p-6 rounded-lg border border-slate-200 shadow-sm">
                    <div class="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                        <h2 class="text-xl font-bold flex items-center gap-2 text-slate-800">
                            <i data-lucide="clipboard-list" class="w-5 h-5"></i> Quick Vitals Summary
                        </h2>
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
                        <div class="bg-slate-50 p-4 rounded-lg border border-slate-100">
                            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">BP</p>
                            <p class="font-bold text-xl text-slate-800">${p.bp}</p>
                        </div>
                        <div class="bg-slate-50 p-4 rounded-lg border border-slate-100">
                            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">HR</p>
                            <p class="font-bold text-xl text-slate-800">${p.hr}</p>
                        </div>
                        <div class="bg-slate-50 p-4 rounded-lg border border-slate-100">
                            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">RR</p>
                            <p class="font-bold text-xl text-slate-800">${p.rr}</p>
                        </div>
                        <div class="bg-slate-50 p-4 rounded-lg border border-slate-100">
                            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">TEMP</p>
                            <p class="font-bold text-xl text-slate-800">${p.temp}</p>
                        </div>
                        <div class="bg-slate-50 p-4 rounded-lg border border-slate-100">
                            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">O2 SAT</p>
                            <p class="font-bold text-xl text-slate-800">${p.o2}%</p>
                        </div>
                    </div>
                </div>
            </div>`;
            
        const wave = document.getElementById('telemetry-wave');
        if (wave) wave.style.animation = `ecg-sweep ${(60 / (parseInt(p.hr) || 80)) * 2.5}s linear infinite`;
    } 

    // ----- FLOWSHEETS -----
    else if (section === 'flowsheets') {
        let tableRows = '';
        if (p.vitalsLogs.length === 0) {
            tableRows = `<tr><td colspan="6" class="py-4 text-center text-slate-500 text-xs italic">No vitals charted this session</td></tr>`;
        } else {
            p.vitalsLogs.forEach(v => {
                tableRows += `<tr class="border-b border-slate-50 hover:bg-slate-50 transition-colors"><td class="py-3 px-2">${v.time}</td><td class="px-2">${v.bp}</td><td class="px-2">${v.hr}</td><td class="px-2">${v.rr}</td><td class="px-2">${v.temp}</td><td class="px-2">${v.o2}%</td></tr>`;
            });
        }

        let logEntries = '';
        if (p.vitalsLogs.length === 0) {
            logEntries = `
                <div class="bg-slate-50 border border-slate-200 rounded-lg p-6 text-center">
                    <p class="font-bold text-sm text-slate-800 mb-1">No session entries yet</p>
                    <p class="text-xs text-slate-500">Save vitals to create a log.</p>
                </div>`;
        } else {
            p.vitalsLogs.forEach(v => {
                logEntries += `<div class="text-xs text-slate-700 bg-teal-50 border border-teal-100 rounded p-2 mb-2 flex flex-col md:flex-row md:justify-between md:items-center gap-1"><span>Vitals logged</span><span class="font-bold">${v.time}</span></div>`;
            });
        }

        content.innerHTML = `
            <div class="max-w-7xl mx-auto space-y-6 pb-12">
                <div class="flex flex-wrap gap-2 text-xs font-medium text-slate-600 mb-4">
                    <span class="bg-white border border-slate-200 px-3 py-1 rounded-full">${p.ageSex}</span>
                    <span class="bg-white border border-slate-200 px-3 py-1 rounded-full">DOB: ${p.dob}</span>
                </div>

                <div class="flex flex-col sm:flex-row sm:justify-between items-start sm:items-end mb-6 gap-4">
                    <div><h1 class="text-2xl md:text-3xl font-bold text-slate-800 mb-1">Flowsheets</h1></div>
                    <button onclick="setNow()" class="w-full sm:w-auto flex items-center justify-center gap-2 border border-slate-300 bg-white text-slate-700 px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-50 shadow-sm transition-all">
                        <i data-lucide="clock" class="w-4 h-4"></i> Set Time Now
                    </button>
                </div>

                <div class="bg-white border border-slate-200 rounded-lg shadow-sm">
                    <div class="p-4 md:p-5">
                        <div class="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
                            <div class="col-span-2">
                                <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1">Timestamp</label>
                                <input type="datetime-local" id="vital-time" class="w-full border border-slate-300 rounded-md p-2 text-sm focus:border-teal-500 outline-none">
                            </div>
                            <div><label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1">BP</label><input type="text" id="vital-bp" placeholder="${p.bp}" class="w-full border border-slate-300 rounded-md p-2 text-sm focus:border-teal-500 outline-none"></div>
                            <div><label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1">HR</label><input type="number" id="vital-hr" placeholder="${p.hr}" class="w-full border border-slate-300 rounded-md p-2 text-sm focus:border-teal-500 outline-none"></div>
                            <div><label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1">RR</label><input type="number" id="vital-rr" placeholder="${p.rr}" class="w-full border border-slate-300 rounded-md p-2 text-sm focus:border-teal-500 outline-none"></div>
                            <div><label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1">TEMP</label><input type="number" id="vital-temp" step="0.1" placeholder="${p.temp}" class="w-full border border-slate-300 rounded-md p-2 text-sm focus:border-teal-500 outline-none"></div>
                            <div><label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1">O2 %</label><input type="number" id="vital-o2" placeholder="${p.o2}" class="w-full border border-slate-300 rounded-md p-2 text-sm focus:border-teal-500 outline-none"></div>
                        </div>
                        <button onclick="saveVitals()" class="w-full md:w-auto bg-[#0a192f] text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                            <i data-lucide="save" class="w-4 h-4"></i> Save Entry
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                    <div class="col-span-1 lg:col-span-2 bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
                        <div class="p-4 border-b border-slate-100"><h2 class="font-bold text-slate-800 flex items-center gap-2"><i data-lucide="table" class="w-5 h-5"></i> Vital Signs Table</h2></div>
                        <div class="p-4 overflow-x-auto">
                            <table class="w-full text-sm text-left min-w-[600px]">
                                <thead class="text-[10px] font-bold text-slate-500 uppercase border-b border-slate-200">
                                    <tr><th class="pb-3 px-2">Time</th><th class="pb-3 px-2">BP</th><th class="pb-3 px-2">HR</th><th class="pb-3 px-2">RR</th><th class="pb-3 px-2">TEMP</th><th class="pb-3 px-2">O2 SAT</th></tr>
                                </thead>
                                <tbody class="text-slate-700">${tableRows}</tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-span-1 bg-white border border-slate-200 rounded-lg shadow-sm">
                        <div class="p-4 border-b border-slate-100 flex justify-between items-center">
                            <h2 class="font-bold text-slate-800 flex items-center gap-2"><i data-lucide="check-circle" class="w-5 h-5"></i> Saved Logs</h2>
                            <span class="text-xs font-bold text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">${p.vitalsLogs.length} saved</span>
                        </div>
                        <div class="p-4">${logEntries}</div>
                    </div>
                </div>
            </div>`;
    } 

    // ----- MAR -----
    else if (section === 'mar') {
        const marAllergyBanner = p.allergy === "NKA" ?
            `<div class="bg-slate-50 border border-slate-200 text-slate-600 p-4 rounded-lg mb-6 flex items-center gap-3"><i data-lucide="shield-check" class="w-5 h-5"></i><p class="text-sm">No known allergies.</p></div>` :
            `<div class="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg mb-6 flex items-center gap-3"><i data-lucide="alert-triangle" class="w-5 h-5"></i><p class="text-sm"><span class="font-bold">${p.allergy} allergy</span> <span class="ml-2">Verify profile before administration.</span></p></div>`;

        let medRows = '';
        p.meds.forEach((m, i) => {
            let statusBadge = '';
            let actionBtn = '';
            
            if (m.status === 'GIVEN') {
                statusBadge = `<span class="bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest block text-center">Given</span>`;
                actionBtn = `<button disabled class="bg-slate-200 text-slate-500 px-3 py-1.5 rounded text-xs font-bold flex items-center justify-center w-full gap-1 cursor-not-allowed"><i data-lucide="check-check" class="w-3 h-3"></i> Administered</button>`;
            } else if (m.status === 'OVERDUE') {
                statusBadge = `<span class="bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest block text-center">Overdue</span>`;
                actionBtn = `<button onclick="administerMed(${i})" class="bg-teal-600 hover:bg-teal-700 text-white px-3 py-1.5 rounded text-xs font-bold flex items-center justify-center w-full gap-1 transition-colors"><i data-lucide="check" class="w-3 h-3"></i> Administer</button>`;
            } else {
                statusBadge = `<span class="bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest block text-center">Due</span>`;
                actionBtn = `<button onclick="administerMed(${i})" class="bg-teal-600 hover:bg-teal-700 text-white px-3 py-1.5 rounded text-xs font-bold flex items-center justify-center w-full gap-1 transition-colors"><i data-lucide="check" class="w-3 h-3"></i> Administer</button>`;
            }

            medRows += `
                <tr class="hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0">
                    <td class="py-3 px-2 min-w-[150px]"><p class="font-bold text-slate-800 text-base">${m.name}</p><p class="text-xs text-slate-500">${m.desc}</p></td>
                    <td class="px-2">${m.dose}</td><td class="px-2">${m.route}</td><td class="px-2">${m.freq}</td><td class="px-2">${m.due}</td>
                    <td class="px-2">${statusBadge}</td><td class="px-2">${actionBtn}</td>
                </tr>`;
        });

        let logEntries = '';
        if (p.medLogs.length === 0) {
            logEntries = `
                <div class="bg-slate-50 border border-slate-200 rounded-lg p-6 text-center">
                    <p class="font-bold text-sm text-slate-800 mb-1">No medications administered</p>
                    <p class="text-xs text-slate-500">Administer a medication to log time.</p>
                </div>`;
        } else {
            p.medLogs.forEach(l => {
                logEntries += `<div class="text-xs text-slate-700 bg-teal-50 border border-teal-100 rounded p-2 mb-2 flex justify-between items-center"><span class="truncate">${l.dose} ${l.med}</span><span class="font-bold ml-2">${l.time}</span></div>`;
            });
        }

        content.innerHTML = `
            <div class="max-w-7xl mx-auto space-y-6 pb-12">
                <div class="flex justify-between items-end mb-6">
                    <div><h1 class="text-2xl md:text-3xl font-bold text-slate-800 mb-1">Medication Record</h1></div>
                </div>
                ${marAllergyBanner}

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div class="col-span-1 lg:col-span-2 bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
                        <div class="p-4 border-b border-slate-100 flex justify-between"><h2 class="font-bold text-slate-800 flex items-center gap-2"><i data-lucide="link" class="w-4 h-4"></i> Medication Schedule</h2></div>
                        <div class="p-4 overflow-x-auto">
                            <table class="w-full text-sm text-left min-w-[700px]">
                                <thead class="text-[10px] font-bold text-slate-500 uppercase border-b border-slate-200">
                                    <tr><th class="pb-3 px-2">Drug Name</th><th class="pb-3 px-2">Dose</th><th class="pb-3 px-2">Route</th><th class="pb-3 px-2">Frequency</th><th class="pb-3 px-2">Time Due</th><th class="pb-3 px-2 text-center">Status</th><th class="pb-3 px-2 text-center">Action</th></tr>
                                </thead>
                                <tbody class="text-slate-700">${medRows}</tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-span-1 bg-white border border-slate-200 rounded-lg shadow-sm h-fit">
                        <div class="flex justify-between items-center p-4 border-b border-slate-100">
                            <h2 class="font-bold text-slate-800 flex items-center gap-2"><i data-lucide="clock" class="w-5 h-5"></i> Administration Log</h2>
                            <span class="text-xs font-bold text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">${p.medLogs.length} given</span>
                        </div>
                        <div class="p-4">${logEntries}</div>
                    </div>
                </div>
            </div>`;
    }

    // ----- CARE PLAN -----
    else if (section === 'careplan') {
        let cpRows = '';
        p.carePlan.forEach((cp, i) => {
            cpRows += `
                <tr class="hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0">
                    <td class="p-4 align-top min-w-[200px]"><p class="font-bold text-slate-800">${cp.dx}</p><p class="text-xs text-slate-500 mt-1">${cp.rto}</p></td>
                    <td class="p-4 align-top text-xs min-w-[200px]">${cp.goal}</td>
                    <td class="p-4 align-top text-xs min-w-[200px]">${cp.int}</td>
                    <td class="p-4 align-top min-w-[250px]"><textarea id="cp-eval-${i}" class="w-full border border-slate-300 rounded p-2 h-20 text-xs focus:border-teal-500 outline-none transition-all">${cp.eval}</textarea></td>
                </tr>`;
        });

        let cpLogs = '';
        if (p.carePlanLogs.length === 0) {
            cpLogs = `<p class="font-bold text-sm text-slate-700">No care plan saves this session</p><p class="text-xs text-slate-500">Edit evaluation text and save to document progress.</p>`;
        } else {
            p.carePlanLogs.forEach(l => {
                cpLogs += `<div class="text-xs text-slate-700 bg-teal-50 border border-teal-100 rounded p-2 mb-2 flex flex-col md:flex-row md:justify-between md:items-center gap-1"><span>${l.msg}</span><span class="font-bold">${l.time}</span></div>`;
            });
        }

        content.innerHTML = `
            <div class="max-w-7xl mx-auto space-y-6 pb-12">
                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-4">
                    <div>
                        <h1 class="text-2xl md:text-3xl font-bold text-slate-800 mb-1">Nursing Care Plan</h1>
                        <p class="text-slate-500 text-sm">Based on Chief Complaint: <span class="font-bold text-slate-600">${p.complaint}</span></p>
                    </div>
                    <button onclick="saveCarePlanEvaluations()" class="w-full sm:w-auto justify-center bg-[#0a192f] text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-slate-800 shadow-sm transition-all">
                        <i data-lucide="save" class="w-4 h-4"></i> Save Evaluations
                    </button>
                </div>

                <div class="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
                    <div class="p-4 border-b border-slate-100 flex justify-between items-center">
                        <h2 class="font-bold text-slate-800 flex items-center gap-2"><i data-lucide="file-text" class="w-5 h-5"></i> Active Care Plan</h2>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm min-w-[850px]">
                            <thead class="bg-slate-50 text-[10px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                                <tr><th class="p-4 text-left w-1/4">Nursing Diagnosis</th><th class="p-4 text-left w-1/4">Goals / Outcomes</th><th class="p-4 text-left w-1/4">Interventions</th><th class="p-4 text-left w-1/4">Evaluation</th></tr>
                            </thead>
                            <tbody class="text-slate-700">${cpRows}</tbody>
                        </table>
                    </div>
                </div>

                <div class="bg-white border border-slate-200 rounded-lg shadow-sm">
                    <div class="p-4 border-b border-slate-100 flex justify-between items-center">
                        <h2 class="font-bold text-slate-800 flex items-center gap-2"><i data-lucide="check" class="w-5 h-5 text-slate-800"></i> Care Plan Activity</h2>
                        <span class="text-xs font-bold text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">${p.carePlanLogs.length} saves</span>
                    </div>
                    <div class="p-4 bg-white">${cpLogs}</div>
                </div>
            </div>`;
    }

    // ----- BURNOUT GUARD -----
    else if (section === 'burnout') {
        const nextAlertNum = 5 - (p.completedTasks % 5);
        
        let logsHtml = '';
        if (p.wellnessLogs.length === 0) {
            logsHtml = `
                <div class="bg-white border border-slate-200 rounded-lg p-6 h-32 flex flex-col justify-center text-center">
                    <p class="font-bold text-sm text-[#0a192f] mb-1">No wellness checks yet</p>
                    <p class="text-xs text-slate-500">Every fifth completed task triggers a guided breath break.</p>
                </div>`;
        } else {
            logsHtml = `<div class="bg-white border border-slate-200 rounded-lg p-4 max-h-48 overflow-y-auto">`;
            p.wellnessLogs.forEach(log => {
                logsHtml += `
                    <div class="flex justify-between items-center border-b border-slate-100 py-2 last:border-0">
                        <div>
                            <p class="text-xs font-bold text-slate-800">${log.type}</p>
                            <p class="text-[10px] md:text-xs text-slate-500">${log.msg}</p>
                        </div>
                        <span class="text-[10px] md:text-xs font-bold text-teal-700 bg-teal-50 px-2 py-1 rounded">${log.time}</span>
                    </div>`;
            });
            logsHtml += `</div>`;
        }

        content.innerHTML = `
            <div class="max-w-7xl mx-auto space-y-6 pb-12">
                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-4">
                    <div><h1 class="text-2xl md:text-3xl font-bold text-slate-800 mb-1" id="active-section-burnout">BurnoutGuard</h1></div>
                    <button onclick="triggerBreathBreak(false)" class="w-full sm:w-auto justify-center bg-teal-700 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-teal-800 shadow-sm transition-all text-sm">
                        <i data-lucide="wind" class="w-4 h-4"></i> Breath Break
                    </button>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                        <div class="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                            <h2 class="font-bold text-slate-800 flex items-center gap-2"><i data-lucide="activity" class="w-5 h-5 text-slate-700"></i> Session Load</h2>
                            <span class="text-[10px] md:text-xs text-teal-700 border border-teal-200 bg-teal-50 px-3 py-1 rounded-full">Next alert in ${nextAlertNum} actions</span>
                        </div>
                        <div class="flex justify-center pb-4">
                            <div class="rounded-full w-40 h-40 md:w-48 md:h-48 flex flex-col items-center justify-center border-[8px] border-teal-50 bg-white shadow-inner relative">
                                <div class="absolute inset-0 rounded-full border-[6px] border-teal-100 opacity-60 m-1"></div>
                                <span class="text-4xl md:text-5xl font-bold text-[#0a192f] z-10">${p.completedTasks}</span>
                                <span class="text-xs md:text-sm text-slate-600 font-medium z-10 leading-tight text-center mt-1">completed<br>tasks</span>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                        <div class="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                            <h2 class="font-bold text-slate-800 flex items-center gap-2"><i data-lucide="clock" class="w-5 h-5 text-slate-700"></i> Wellness Logs</h2>
                            <span class="text-[10px] md:text-xs text-slate-500 border border-slate-200 bg-slate-50 px-3 py-1 rounded-full">${p.wellnessLogs.length} checks</span>
                        </div>
                        ${logsHtml}
                    </div>
                </div>

                <div class="bg-white rounded-lg border border-slate-200 shadow-sm mt-6">
                    <div class="flex justify-between items-center p-4 border-b border-slate-100">
                        <h2 class="font-bold text-slate-800 flex items-center gap-2"><i data-lucide="list" class="w-5 h-5 text-slate-700"></i> Task Breakdown</h2>
                    </div>
                    <div class="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div class="bg-slate-50 p-4 rounded-lg border border-slate-100">
                            <p class="text-2xl font-bold text-slate-800">${p.vitalsLogs.length}</p>
                            <p class="text-[10px] md:text-xs text-slate-500 uppercase tracking-wider font-bold">Vitals Saved</p>
                        </div>
                        <div class="bg-slate-50 p-4 rounded-lg border border-slate-100">
                            <p class="text-2xl font-bold text-slate-800">${p.medLogs.length}</p>
                            <p class="text-[10px] md:text-xs text-slate-500 uppercase tracking-wider font-bold">Meds Given</p>
                        </div>
                        <div class="bg-slate-50 p-4 rounded-lg border border-slate-100">
                            <p class="text-2xl font-bold text-slate-800">${p.carePlanLogs.length}</p>
                            <p class="text-[10px] md:text-xs text-slate-500 uppercase tracking-wider font-bold">Care Plans Saved</p>
                        </div>
                    </div>
                </div>
            </div>`;
    }

    lucide.createIcons();
}
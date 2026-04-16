// Smart Grid: Basics to Advanced Technologies - Quiz Questions
const questions = [
    // Week 1
    {
        question: "What is the energy range of the commercial consumer in the customer domain?",
        options: ["<100kW", "20-200kW", ">200kW", "None of the above"],
        correct: 1
    },
    {
        question: "New requirements for the Bulk Generation domain include:",
        options: ["Greenhouse gas emissions controls", "Increase in renewable energy sources", "Provision of storage to manage the variability of renewable generation", "All of these"],
        correct: 3
    },
    {
        question: "ESI is the primary service interface to which domain?",
        options: ["Customer", "Distribution", "Service Provider", "Markets"],
        correct: 0
    },
    {
        question: "_________ domain is responsible for the smooth operation of the power system.",
        options: ["Operations", "Distribution", "Service Provider", "Markets"],
        correct: 0
    },
    {
        question: "The electrical distribution system may be arranged in which of the configurations?",
        options: ["Radial", "Looped", "Meshed", "All of the these"],
        correct: 3
    },
    {
        question: "According to IRIG B, Time synchronization accuracy requirement is up to",
        options: ["0.5 µs", "1 µs", "2 µs", "0.1 µs"],
        correct: 1
    },
    {
        question: "The most commonly used fuel in fuel cell is",
        options: ["Carbon dioxide", "Oxygen & nitrogen", "Hydrogen & oxygen", "None of these"],
        correct: 2
    },
    {
        question: "Which of the following regulatory authorities Regulates tariff, formulates policies regarding subsidies?",
        options: ["CEA", "Ministry of Power", "CERC & SERC", "CTU and STU"],
        correct: 2
    },
    {
        question: "In Advanced Metering Interface (AMI) system, each meter uses:",
        options: ["User Data program Protocol (UDP)", "Internet Protocol (IP)", "Transmission Control Protocol (TCP)", "All of these"],
        correct: 1
    },
    {
        question: "Which of the following provides uniform information exchange for monitoring and control of wind power plants?",
        options: ["IEC 61400-25", "IEC 61850-7-420", "IEEE 1588", "IEEE C37.238"],
        correct: 0
    },
    
    // Week 2
    {
        question: "Which of the following components of SCADA consists of a human-machine interface?",
        options: ["Master station", "Remote terminal units", "Communication systems", "None of these"],
        correct: 0
    },
    {
        question: "Solar Charge Controllers:",
        options: ["Prevents battery overcharge", "Blocks reverse current", "Prevent electrical overload", "All of these"],
        correct: 3
    },
    {
        question: "Which of the following components of SCADA presents data to the master station?",
        options: ["Data collection application (DCA)", "Data processing application (DPA)", "Data translation application (DTA)", "Physical I/O"],
        correct: 1
    },
    {
        question: "The rotor windings are fed via a back-to-back converter system in a bidirectional feedback loop in",
        options: ["Fixed Speed Wind Turbine Generators", "Synchronous Generator with In-Line Frequency Control", "Doubly Fed Induction Generator", "None of these"],
        correct: 2
    },
    {
        question: "Which of the following PV technologies has the Highest efficiency?",
        options: ["Amorphous Silicon", "Copper indium Gallium Selenide", "Mono-crystalline Silicon", "Poly-crystalline Silicon"],
        correct: 2
    },
    {
        question: "Why is the low speed shaft connected to the gearbox?",
        options: ["To increase stability", "To increase the rpm", "To decrease the stress", "None of these"],
        correct: 1
    },
    {
        question: "Solar Charge Controllers do not:",
        options: ["Prevents battery overcharge", "Allow reverse current", "Prevent electrical overload", "Display battery status"],
        correct: 1
    },
    {
        question: "In context of signal conditioning, prior to input to the ADC stage, ________ is applied to signal.",
        options: ["Feedback signal", "High pass filter", "Low pass filter", "None of these"],
        correct: 2
    },
    {
        question: "Power extracted in a wind energy system does not depend on which of these?",
        options: ["Swept area", "Wind speed", "Pitch", "Turbine radius"],
        correct: 3
    },
    {
        question: "During the periods of extremely high winds and maintenance, which of the below equipment is used to stop the wind turbine for safety of the whole system?",
        options: ["Low speed shaft", "Brake", "Nacelle", "Both (b) and (c)"],
        correct: 1
    },
    
    // Week 3
    {
        question: "While formulating a general ESS Allocation Algorithm, which of the following parameter comes under economical category?",
        options: ["Power loss", "Load curtailment", "Load curtailment cost", "both load curtailment and load curtailment cost"],
        correct: 2
    },
    {
        question: "Sony released its first commercial Lithium-ion battery in",
        options: ["1978", "1982", "1991", "2007"],
        correct: 2
    },
    {
        question: "According to the storage deployment statics released by the US Department of Energy (DOE) in 2017. Which of the following is correct in the context of India?",
        options: ["Only I", "Only II", "I and II", "None"],
        correct: 2
    },
    {
        question: "Which storage technology has a very good usable capacity?",
        options: ["Flywheel", "Lithium-ion", "Super Capacitor", "Lead Acid"],
        correct: 1
    },
    {
        question: "Which one of the following storage technology has not-so-good cycle life?",
        options: ["Flywheel", "Super-capacitor", "Redox-flow", "Lead-acid"],
        correct: 3
    },
    {
        question: "Minor complexity is a significant advantage of which battery modeling methods?",
        options: ["Empirical", "Electro-chemical", "Equivalent circuit", "All of the above"],
        correct: 0
    },
    {
        question: "What is/are the significant advantages of the hybrid algorithms estimating battery SOC?",
        options: ["More effective", "High precision", "Reliable", "All of the above"],
        correct: 3
    },
    {
        question: "Why Battery Management System required?",
        options: ["It increases the battery pack efficiency.", "Optimal Usage of the energy inside the battery.", "Reduce the risk of prematurity of the battery.", "All of the above"],
        correct: 3
    },
    {
        question: "Which one of the following matches is false?",
        options: ["II", "IV", "I", "III"],
        correct: 2
    },
    {
        question: "________ is the disadvantage of Li-ion battery.",
        options: ["High potential difference", "Degradation effect", "Self-discharge rate", "None of the above"],
        correct: 1
    },
    
    // Week 4
    {
        question: "Which of the following is designed to isolate the area of faults and reduce the impacts of the faults from other parts of the system?",
        options: ["DFR", "DPR", "CBM", "CBR"],
        correct: 1
    },
    {
        question: "What are the disadvantages of traditional relays?",
        options: ["Aging production facilities", "Discontinued components and parts", "Shortage of manufacturing and testing technicians", "All of these"],
        correct: 3
    },
    {
        question: "According to the Sampling theorem, the sampling frequency must be greater than ______ the highest frequency to be sampled.",
        options: ["0.5 times", "1.5 times", "2 times", "5 times"],
        correct: 2
    },
    {
        question: "The GPS satellite are arranged in orbital planes displaced from each other by ____.",
        options: ["30 Degrees", "45 degrees", "60 degrees", "90 degrees"],
        correct: 2
    },
    {
        question: "Recursive DFT______ the number of mathematical operations.",
        options: ["Reduces", "Doubles", "Doesn't change", "Repeats"],
        correct: 0
    },
    {
        question: "In context with DFT, phasor estimation does not involve estimating which of the following?",
        options: ["the instantaneous angle of the signal", "the RMS value of the signal", "the peak value of the signal", "All of these"],
        correct: 2
    },
    {
        question: "When does aliasing occur?",
        options: ["When sampling theorem is followed", "When sampling theorem is not followed", "Both of these", "None of these"],
        correct: 1
    },
    {
        question: "In the file structure of synchrophasor, which of the following files contains data which the data producer may wish to share with the user?",
        options: ["Header file", "Configuration file", "Data file", "Command file"],
        correct: 0
    },
    {
        question: "Which of the following is not true about SCADA?",
        options: ["Measures magnitude and phase angle", "No time synchronization", "Local monitoring and control", "1 sample every 2-4 seconds"],
        correct: 0
    },
    {
        question: "In a Digital Protective Relay how is the A/D conversion speeded up?",
        options: ["Lower sampling rates are applied", "Higher sampling rates are applied", "Sampling rates are doubled", "None of these"],
        correct: 0
    }
];

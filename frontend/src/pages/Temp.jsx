import React, { useState } from 'react';

// --- SVG Icon Components (Replaces react-icons) ---
// This resolves the "Could not resolve" error by making icons self-contained.

const FiPlus = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
);

const FiAward = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="8" r="7"></circle>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
    </svg>
);

const FiClock = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
);

const FiCheckCircle = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

const GiCheckMark = ({ className, size }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 512 512" fill="currentColor" className={className}>
        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
    </svg>
);


// --- Mock Assets ---
// In a real app, these would come from your assets folder.
const assets = {
    clouds_bg: 'https://placehold.co/800x600/E2E8F0/A0AEC0?text=Subtle+BG',
    obscerion_l3: 'https://placehold.co/400x600/1A202C/E2E8F0?text=Character',
    health_icon: 'https://placehold.co/60x60/EF4444/FFFFFF?text=HP',
    mana_icon: 'https://placehold.co/60x60/3B82F6/FFFFFF?text=MP',
    // Using placeholder icons for abilities
    ability1: 'https://placehold.co/100x100/4F46E5/FFFFFF?text=A1',
    ability2: 'https://placehold.co/100x100/D946EF/FFFFFF?text=A2',
    ability3: 'https://placehold.co/100x100/14B8A6/FFFFFF?text=A3',
};

// --- Re-created Components (for self-containment) ---

// A simple Nav-like component for demonstration
const Navbar = () => (
    <div className="flex items-center gap-4 bg-slate-800/10 backdrop-blur-sm p-3 rounded-2xl border border-white/20 shadow-lg">
        {['Temp', 'ARMORY', 'STORE', 'PROFILE'].map(item => (
            <a href="#" key={item} className="text-sm font-bold text-slate-600 hover:text-sky-400 transition-colors duration-300 tracking-wider px-3 py-1 rounded-lg hover:bg-white/20">
                {item}
            </a>
        ))}
    </div>
);

// A custom-styled checkbox
const Checkbox = ({ taskComplete, setTaskComplete, id }) => (
    <div className="relative flex items-center justify-center w-full h-full">
        <input
            id={`checkbox-${id}`}
            type="checkbox"
            checked={taskComplete}
            onChange={() => setTaskComplete(!taskComplete)}
            className="appearance-none w-6 h-6 border-2 border-slate-400 rounded-md cursor-pointer transition-all duration-300 checked:bg-sky-400 checked:border-sky-500 checked:rotate-45"
        />
        {taskComplete && (
            <GiCheckMark size={14} className="absolute text-white pointer-events-none transition-all duration-300" />
        )}
    </div>
);


// --- Main Temp Component ---

const Temp = () => {
    // --- State Management ---
    const [taskStates, setTaskStates] = useState([false, true, false, false]);
    const [questComplete, setQuestComplete] = useState(false);
    const [addTask, setAddTask] = useState(false);
    const [difficultyValue, setDifficultyValue] = useState(5);
    const [activeCharacterLevel, setActiveCharacterLevel] = useState(3);

    // --- Handlers ---
    const handleTaskToggle = (index) => {
        const newStates = [...taskStates];
        newStates[index] = !newStates[index];
        setTaskStates(newStates);
    };
    
    const tasks = [
        "Win 3 matches in a row",
        "Achieve a headshot from 100m",
        "Use your ultimate ability 5 times",
        "Revive a teammate in a critical moment"
    ];

    return (
        <div className='flex flex-col lg:flex-row items-start w-full min-h-screen bg-slate-100 font-sans p-4 gap-4'>
            {/* ================================================================
              LEFT COLUMN: Player Info, Character, and Quests
              ================================================================
            */}
            <div className='flex flex-col items-start w-full lg:w-[55%] gap-4 h-full'>
                {/* Header: Navbar, Rank, and Matchmaking */}
                <header className='w-full flex flex-col md:flex-row gap-4 items-center'>
                    <Navbar />
                    <div className='flex-grow flex gap-4 w-full'>
                        {/* Rank Display */}
                        <div className='flex items-center gap-3 bg-white/80 backdrop-blur-sm p-3 rounded-2xl border border-white/30 shadow-lg flex-grow justify-center'>
                            <FiAward className="text-purple-500 text-4xl" />
                            <div>
                                <p className='text-xs font-semibold text-slate-500 tracking-wider'>RANK</p>
                                <p className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-sky-500'>DIAMOND TIER-S</p>
                            </div>
                        </div>
                        {/* Start Match Button */}
                        <a href="#" className='relative group flex items-center justify-center px-8 py-4 bg-gradient-to-br from-sky-500 to-blue-600 text-white font-bold text-lg rounded-2xl shadow-lg shadow-sky-500/30 overflow-hidden transform hover:-translate-y-1 transition-all duration-300'>
                            <span className="absolute top-0 left-0 w-full h-full bg-white/20 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-125 rounded-full transition-all duration-500"></span>
                            <span className='relative z-10 tracking-widest'>PLAY</span>
                        </a>
                    </div>
                </header>

                {/* Character Display */}
                <div className='relative flex flex-col md:flex-row gap-4 w-full bg-white/50 backdrop-blur-md shadow-xl rounded-3xl p-4 border border-white/30'>
                    <img src={assets.clouds_bg} alt="background" className='absolute inset-0 w-full h-full object-cover rounded-3xl opacity-30 z-0' />
                    
                    {/* Character Art & Level Selector */}
                    <div className='relative z-10 flex gap-4'>
                        <div className='relative w-[18vw] h-[26vw] min-w-[200px] min-h-[300px] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/50'>
                            <img src={assets.obscerion_l3} alt="Character Art" className='w-full h-full object-cover' />
                        </div>
                        <div className='flex flex-col justify-center gap-2'>
                            {[...Array(7)].map((_, i) => (
                                <button key={i} onClick={() => setActiveCharacterLevel(i + 1)} className={`w-12 h-12 flex items-center justify-center text-lg font-bold rounded-full border-2 transition-all duration-300 ${activeCharacterLevel === i + 1 ? 'bg-sky-400 text-white border-sky-500 shadow-lg' : 'bg-white/50 text-slate-600 border-white/50 hover:bg-white'}`}>
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    {/* Character Info & Stats */}
                    <div className='relative z-10 flex flex-col flex-1 justify-between p-2'>
                        <div>
                            <p className='text-sm font-bold text-sky-600 tracking-widest'>SHADOWBOUND CLASS</p>
                            <h1 className='font-bold text-5xl text-slate-800' style={{fontFamily: "'Orbitron', sans-serif"}}>OBSCERION</h1>
                        </div>

                        {/* Health and Mana Bars */}
                        <div className='flex flex-col gap-4 my-4'>
                            {/* Health Bar */}
                            <div className='w-full'>
                                <div className='flex justify-between items-end mb-1'>
                                    <p className='font-semibold text-slate-700'>VITALITY</p>
                                    <p className='font-bold text-lg text-red-500'>100 / 100</p>
                                </div>
                                <div className='w-full bg-slate-300 rounded-full h-4 border border-white/50 shadow-inner'>
                                    <div className='w-full h-full bg-gradient-to-r from-red-500 to-rose-500 rounded-full'></div>
                                </div>
                            </div>
                            {/* Mana Bar */}
                            <div className='w-full'>
                                 <div className='flex justify-between items-end mb-1'>
                                    <p className='font-semibold text-slate-700'>MANA</p>
                                    <p className='font-bold text-lg text-blue-500'>100 / 100</p>
                                </div>
                                <div className='w-full bg-slate-300 rounded-full h-4 border border-white/50 shadow-inner'>
                                    <div className='w-full h-full bg-gradient-to-r from-sky-500 to-blue-500 rounded-full'></div>
                                </div>
                            </div>
                        </div>

                        {/* Abilities */}
                        <div className='w-full'>
                            <p className='text-sm font-bold text-slate-600 mb-2 tracking-wider'>ABILITIES</p>
                            <div className='flex justify-between items-center gap-4'>
                                {[assets.ability1, assets.ability2, assets.ability3].map((ability, i) => (
                                    <div key={i} className='group relative w-20 h-20 bg-slate-800 rounded-2xl border-2 border-slate-500/50 shadow-lg cursor-pointer transform hover:scale-110 hover:border-sky-400 transition-all duration-300'>
                                        <img src={ability} alt={`Ability ${i+1}`} className='w-full h-full object-cover rounded-xl p-1'/>
                                        <div className='absolute -top-2 -right-2 bg-sky-400 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-white'>
                                            {i === 0 ? 'Q' : i === 1 ? 'E' : 'R'}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Special Quest */}
                <div className='flex flex-col md:flex-row w-full flex-1 bg-white/50 backdrop-blur-md rounded-3xl shadow-xl border border-white/30 overflow-hidden'>
                    <div className='flex flex-col justify-start items-start w-full md:w-[65%] h-full p-6'>
                        <span className='font-mono text-sm font-semibold text-sky-600'>SPECIAL QUEST</span>
                        <div className='w-full flex justify-between items-center mb-2'>
                            <span className='text-2xl font-bold text-slate-700'>Echoes Of The Void</span>
                            <span className={`flex items-center gap-2 text-sm font-semibold rounded-lg px-3 py-1 ${questComplete ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                                {questComplete ? <FiCheckCircle className="w-4 h-4" /> : <FiClock className="w-4 h-4" />}
                                {questComplete ? "COMPLETED" : "7D 12H LEFT"}
                            </span>
                        </div>
                        <p className='text-sm font-semibold text-slate-600 mb-1'>Objective:</p>
                        <p className='text-sm text-slate-500'>Venture into the Shadow Nebula and retrieve the three lost fragments of the Celestial Orb before they fall into the hands of the Void Swarm.</p>
                    </div>
                    <div className='flex flex-col justify-center p-6 w-full md:w-[35%] h-full bg-slate-800/5 border-l border-white/20'>
                         <p className='font-mono text-sm tracking-widest text-slate-600 font-semibold leading-none mb-3'>REWARDS</p>
                         <div className='flex flex-col gap-2 mb-4'>
                            {['Void-Touched Armor Skin', 'Celestial Orb Badge', '+5000 XP'].map(reward => (
                                <div key={reward} className='bg-sky-100/50 text-sky-700 text-xs font-semibold p-2 rounded-lg border border-sky-200/50 flex items-center gap-2'>
                                    <FiAward className="w-4 h-4"/> {reward}
                                </div>
                            ))}
                         </div>
                         <button onClick={()=>setQuestComplete(true)} disabled={questComplete} className='w-full bg-gradient-to-br from-purple-500 to-indigo-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/40 transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none'>
                            {questComplete ? 'CLAIMED' : 'COMPLETE QUEST'}
                         </button>
                    </div>
                </div>
            </div>

            {/* ================================================================
              RIGHT COLUMN: Daily Tasks
              ================================================================
            */}
            <div className='h-full flex-1 w-full lg:w-[45%] p-2'>
                <div className='flex flex-col justify-between bg-white/50 backdrop-blur-md w-full h-full rounded-3xl shadow-xl p-6 border border-white/30'>
                    {/* Title and Tasks List */}
                    <div className="flex flex-col h-full">
                        <div className='text-center mb-6'>
                            <h2 className='text-3xl font-bold text-slate-800 tracking-wide' style={{fontFamily: "'Orbitron', sans-serif"}}>DAILY TASKS</h2>
                            <div className='w-24 h-1 bg-gradient-to-r from-sky-400 to-purple-500 mx-auto mt-2 rounded-full'></div>
                        </div>

                        <div className='flex flex-col w-full gap-3 overflow-y-auto pr-2' style={{maxHeight: 'calc(100vh - 300px)'}}>
                            {tasks.map((task, index) => (
                                <div key={index} className='flex items-center border border-slate-300/50 p-3 rounded-2xl bg-white/50 transition-all duration-300 hover:border-sky-400/80 hover:shadow-md'>
                                    <div className='w-8 h-8 flex-shrink-0 flex items-center justify-center'>
                                        <Checkbox taskComplete={taskStates[index]} setTaskComplete={() => handleTaskToggle(index)} id={index} />
                                    </div>
                                    <span className={`flex-grow px-4 text-sm font-medium transition-colors duration-300 ${taskStates[index] ? 'text-slate-400 line-through' : 'text-slate-600'}`}>{task}</span>
                                    <button disabled={!taskStates[index]} className='flex-shrink-0 bg-sky-500 text-white w-24 text-sm font-bold py-2 rounded-lg shadow-md shadow-sky-500/20 hover:bg-sky-600 transition-all duration-300 disabled:bg-slate-300 disabled:shadow-none disabled:cursor-not-allowed'>
                                        CLAIM
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Add Task Section */}
                    <div className='pt-4 mt-4 border-t-2 border-slate-200/80'>
                        {!addTask ? (
                            <button onClick={() => setAddTask(true)} className='w-full flex justify-center items-center gap-2 bg-slate-200/80 border-2 border-dashed border-slate-400/50 text-slate-600 font-semibold py-3 rounded-xl hover:bg-sky-100 hover:border-sky-400 transition-all duration-300'>
                                <FiPlus className="w-5 h-5" /> ADD CUSTOM TASK
                            </button>
                        ) : (
                            <div className='flex flex-col gap-4'>
                                <textarea 
                                    className='px-4 py-2 text-sm w-full border-2 border-slate-300 outline-none focus:border-sky-400 rounded-lg transition-all duration-300 bg-white/70' 
                                    placeholder='Enter new task description...'
                                    rows="2"
                                />
                                <div className='flex items-center gap-4'>
                                    <div className='flex-grow'>
                                        <div className='flex justify-between items-center text-xs font-semibold text-slate-500 mb-1'>
                                            <span>Difficulty</span>
                                            <span className='font-bold text-sky-500 text-sm'>{difficultyValue}</span>
                                        </div>
                                        <input 
                                            type="range" 
                                            className='w-full h-2 bg-slate-300 rounded-full appearance-none cursor-pointer accent-sky-500'
                                            min={1} 
                                            max={10} 
                                            value={difficultyValue} 
                                            onChange={(e) => setDifficultyValue(e.target.value)}
                                        />
                                    </div>
                                    <button onClick={() => setAddTask(false)} className='bg-slate-600 text-white font-bold px-6 py-2 rounded-lg hover:bg-slate-700 transition-colors duration-300'>
                                        Add
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Default export for integration into a React project
export default Temp;

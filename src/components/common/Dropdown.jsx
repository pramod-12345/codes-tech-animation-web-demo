import { useState, useRef, useEffect } from 'react';

export default function Dropdown({ label, value, onChange, options }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close the dropdown when clicking anywhere outside of it
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="space-y-3 w-full" ref={dropdownRef}>
            <label className="text-base font-medium text-white block">
                {label}
            </label>

            <div className="relative">
                {/* Dropdown Toggle Trigger Button */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full bg-[#131313] border border-[#EDEDED]/10 rounded-[10px] px-4 py-5 text-base text-white text-left focus:outline-none transition flex items-center justify-between"
                >
                    <span>{value && typeof value === 'object' ? value.label : value}</span>

                    {/* Chevron Wrapper with Rotation Effect */}
                    <div className={`text-zinc-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </div>
                </button>

                {/* Custom Overlay Options Menu Panel */}
                {isOpen && (
                    <ul className="absolute z-50 w-full mt-2 bg-[#131313] border border-[#EDEDED]/10 rounded-[10px] overflow-hidden shadow-2xl animate-in fade-in slide-in-from-top-1 duration-150">
                        {options.map((option, index) => {
                            const isSelected = value === option || value === option.label || value === option.value || (value && value.value === option.value);
                            return (
                                <li key={index}>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            onChange(option.label);
                                            setIsOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-3.5 text-base transition-colors ${isSelected
                                            ? 'bg-[#EDEDED]/10 text-white font-medium'
                                            : 'text-[#878787] hover:bg-[#EDEDED]/5 hover:text-white'
                                            }`}
                                    >
                                        {option.label}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
}
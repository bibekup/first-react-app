import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function PasswordGenerator() {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(8);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);

    const generatePassword = () => {
        const numbers = '1234567890';
        const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

        let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (includeNumbers) characters += numbers;
        if (includeSymbols) characters += symbols;

        let generatedPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            generatedPassword += characters[randomIndex];
        }

        setPassword(generatedPassword);
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Password Generator</h2>
            <div className="flex flex-col space-y-2">
                <div>
                    <label htmlFor="length" className="block">Password Length:</label>
                    <input
                        type="number"
                        id="length"
                        value={length}
                        onChange={(e) => setLength(parseInt(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="includeNumbers"
                        checked={includeNumbers}
                        onChange={(e) => setIncludeNumbers(e.target.checked)}
                        className="mr-2"
                    />
                    <label htmlFor="includeNumbers">Include Numbers</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="includeSymbols"
                        checked={includeSymbols}
                        onChange={(e) => setIncludeSymbols(e.target.checked)}
                        className="mr-2"
                    />
                    <label htmlFor="includeSymbols">Include Symbols</label>
                </div>
                <button onClick={generatePassword} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Generate Password</button>
                <div className="mt-4">
                    <label htmlFor="generatedPassword" className="block">Generated Password:</label>
                    <input
                        type="text"
                        id="generatedPassword"
                        value={password}
                        readOnly
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
            </div>
        </div>
    );
}

export default PasswordGenerator;


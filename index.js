import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <textarea
                value={markdown}
                onChange={handleChange}
                style={{ width: '100%', height: '200px', marginBottom: '20px' }}
            />
            <div style={{ width: '100%', border: '1px solid #ddd', padding: '20px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}

function reverseSentence(sentence) {
    return sentence
        .split(' ')
        .reverse()
        .join(' ')
        .replace(/^\w/, (c) => c.toUpperCase());
}

// Example usage:
const input = "hello world";
const reversed = reverseSentence(input);
console.log(reversed); // Output: "World hello"

const data = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

const names = data.map(person => person.name);
console.log(names); // Output: ["Alice", "Bob", "Charlie"]

const nestedData = [
    [
        { name: 'John', age: 28 },
        { name: 'Jane', age: 22 }
    ],
    [
        { name: 'Bob', age: 34 }
    ]
];

const nestedNames = nestedData.flatMap(group => group.map(person => person.name));
console.log(nestedNames); // Output: ['John', 'Jane', 'Bob']


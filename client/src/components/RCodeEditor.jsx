import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/r/r';

export default function RCodeEditor() {
    const [code, setCode] = useState('');

    return (
        <div>
            This is a code editor
        </div>
    );
}

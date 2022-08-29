import React from 'react';
import { CopyBlock, dracula } from "react-code-blocks";
import { Box, Card, CardActions, Button, Typography } from '@mui/material';
const JsCode = () => {
    const jsCode = 
    `
    var sys = require("sys");
    sys.puts("Hello World");
    `
    
        return (
            <div>
            <Typography variant="body1" component="p" gutterBottom>
               Example usage
            </Typography>

            <CopyBlock
                    text={jsCode}
                    language={'javascript'}
                    showLineNumbers={true}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock
                />
            <Typography variant="body1" component="p" gutterBottom>
               Code
            </Typography>

                <CopyBlock
                    text={jsCode}
                    language={'javascript'}
                    showLineNumbers={true}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock
                />
            </div>
        );
    };

export default JsCode;
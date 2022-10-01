import React from 'react';
import { CopyBlock, dracula } from "react-code-blocks";
import { Box, Card, CardActions, Button, Typography } from '@mui/material';
const CronCode = () => {
    const jsCodeAxios = 
    `
    class adminCronHandler{
        public $title;
        public $data;
        private $myFile;
        function __construct($Client,$TitleFunction,$data){
            $this->title = $TitleFunction;
            $this->data = $data;
            $this->myFile = fopen($Client.'-'.$TitleFunction.date("d-m-Y H:i:s").".txt", "w") or die("Unable to open file!");
            self::wrtieCron();
        }
        function __destruct()
        {
            fclose($this->myFile);
        }
    
        public function wrtieCron(){
            $cronData = $this->data;
            fwrite($this->myFile,$cronData);
        }
    }
    `

    const jsCodeAjax = 
    `
    $test = new adminCronHandler('shani','testFunc',serialize($data));
    `
    
        return (
            <div>
            <Typography variant="body1" component="p" gutterBottom>
               Class 
            </Typography>

            <CopyBlock
                    text={jsCodeAxios}
                    language={'PHP'}
                    showLineNumbers={true}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock
                />
            <Typography variant="body1" component="p" gutterBottom>
                Usage Example (the $data can be object/array/other..)
            </Typography>

                <CopyBlock
                    text={jsCodeAjax}
                    language={'PHP'}
                    showLineNumbers={true}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock
                />
            </div>
        );
    };

export default CronCode;
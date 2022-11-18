import React from 'react';
import { CopyBlock,dracula } from "react-code-blocks";
import { Box, Card, CardActions, Button, Typography } from '@mui/material';

const PhpCode8 = () => {


const phpClass = 
`
<?php
class adminError{
    private $ch=null;  
    private $url = 'http://192.168.1.57:5000/api/errors';
    public $project;
    public $title;
    public $code;
    public $status;
    public $response;
    public $description;
    public $body;

    function __construct($project,$title,$code,$status,$response,$description,$body){
        $this->project = $project;
        $this->title = $title;
        $this->code = $code;
        $this->status = $status;
        $this->response = $response;
        $this->description = $description;
        $this->body = $body;
        $this->ch = curl_init($this->url);
        curl_setopt($this->ch, CURLOPT_RETURNTRANSFER, true);
  
    }
    function __destruct() {
      curl_close($this->ch);
    }
    protected function BuildQuery(){
        $data = array(
            "project" => $this->project,
            "title" => $this->title,
            "code"=> $this->code,
            "status" => $this->status,
            "response" => $this->response,
            "description" => $this->description,
            "body" => $this->body,
            "language" => 'PHP'
        );
        return json_encode($data);
    }
    public function post(){
        curl_setopt($this->ch, CURLOPT_POST, 1);
        curl_setopt($this->ch, CURLOPT_POSTFIELDS, $this->BuildQuery());
        curl_setopt($this->ch, CURLOPT_RETURNTRANSFER, 1); 
        curl_setopt($this->ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
        $result = curl_exec($this->ch);
        $error = curl_error($this->ch);
        $res=new stdClass;
        $res->Reuslt=$result;
        $res->Error=$error;
        return $res;
    }
  }
?>
`


const php8 = 
`
<?php
    require_once './adminErrors.php';
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    function errorHandler(
        int $type,
        string $msg,
        ?string $file = null,
        ?int $line = null
    ) {
        $adminHandler = new adminError('php Test Project','function title',null,'critical',null,$type . ' : ' . $msg . ' in ' . $file . ' on line ' . $line,null);
        $adminHandler->post();
        echo $type . ' : ' . $msg . ' in ' . $file . ' on line ' . $line;
        exit;
    }
    error_reporting(E_ALL & ~E_WARNING);
    set_error_handler('errorHandler', E_ALL);
?>
`

    return (
        <div>
            <Typography variant="body1" component="p" gutterBottom>
                Class 
            </Typography>
            <CopyBlock
                text={phpClass}
                language={'php'}
                showLineNumbers={true}
                theme={dracula}
                wrapLines={true}
                codeBlock
            />

            <Typography variant="body1" component="p" gutterBottom>
               PHP 8
            </Typography>
            <CopyBlock
                text={php8}
                language={'php'}
                showLineNumbers={true}
                theme={dracula}
                wrapLines={true}
                codeBlock
            />
        </div>
    );
};

export default PhpCode8;
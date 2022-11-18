import React from 'react';
import { CopyBlock, dracula } from "react-code-blocks";
import { Box, Card, CardActions, Button, Typography } from '@mui/material';
const JsCode = () => {
    const jsCodeAxios = 
    `
    export const adminErrors = (error, projectName,title,status) => {
        axios({
            method: 'post',
            url: 'http://192.168.1.57:8085/api/errors',
            data: {
              project: projectName,
              title: title,
              code: error.request.status,
              status: status,
              description: error.code + '' + error.message,
              response:error.response.data,
              body:error.config.data
    
            }
          });
    }
    `

    const jsCodeAjax = 
    `
    export const ajaxAdminError = (error, projectName, title, status, val) => {
        return $.ajax({
          url: 'http://192.168.1.57:8085/api/errors',
          type: 'POST',
          data: JSON.stringify({
            project: projectName,
            title: title,
            code: error.status,
            status: status,
            description: error.statusText,
            response:error.responseText,
            body: val,
          }),
          contentType: "application/json; charset=utf-8"
        }).done(function(data) {
        }.bind(this)).fail(function(e) {
          console.log('error');
        });
      }
    `
    
        return (
            <div>
            <Typography variant="body1" component="p" gutterBottom>
               Axios querys
            </Typography>

            <CopyBlock
                    text={jsCodeAxios}
                    language={'javascript'}
                    showLineNumbers={true}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock
                />
            <Typography variant="body1" component="p" gutterBottom>
                Ajax Querys
            </Typography>

                <CopyBlock
                    text={jsCodeAjax}
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
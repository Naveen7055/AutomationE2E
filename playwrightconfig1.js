import { expect, devices } from "@playwright/test";
import { trace } from "console";
import { TIMEOUT } from "dns";


  
const config={
 testDir: './tests',
 retries: 2,
 Worker:5,
 TIMEOUT: 30*1000,
 expect:{
  TIMEOUT:5000
 },
 reporter:'html',
projects :
[
name - 'safari',
{
    use:
    {
   
     browserName:'webkit',
     headless:false,
     screenshot: 'on',
     trace: 'on'
     
    },  
},
{
    name : 'chrome',
    use:
    {
   
     browserName:'webkit',
     headless:false,
     screenshot: 'on',
     trace: 'on',
     video:'retain-on failure'
     
    },   
}
 
]   
};

export default config;
// module.exports=config;
import { expect, devices } from "@playwright/test";
import { trace } from "console";
import { TIMEOUT } from "dns";


  
const config={
 testDir: './tests',
 TIMEOUT: 30*1000,
 expect:{
  TIMEOUT:5000
 },
 reporter:'html',

 use:
 {

  browserName:'chromium',
  headless:false,
  screenshot: 'on',
  trace: 'on'
  
 },

};

export default config;
// module.exports=config;
// require() => commonjs BackEnd
// import from => modulejs FrontEnd

import { createClient } from "@supabase/supabase-js";
import { createInterface } from "readline/promises";

const supabaseUrl = "https://rnzhzcfovaqfsjfxorfq.supabase.co";
const supabasePassword = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuemh6Y2ZvdmFxZnNqZnhvcmZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MjQ4MzAsImV4cCI6MjA1NTAwMDgzMH0.lC3jUF1yLH5RA0rMZ-ApWOuoTmWHQT7b1ihZXR50xhM";

const supabase = createClient(supabaseUrl, supabasePassword);

const res = await supabase.from('users').select();
console.log(res);

// const res = await supabase
//     .from('users')
//     .insert([{ name: 'Bob', email: 'Bob@naver.com' }]);
// console.log(res);

// const {status, statusText} = res;
// console.log(status);
// console.log(statusText);

// const rl = createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const name = await rl.question('이름이 뭐야?');
// console.log(`name ${name}`);

// rl.close();
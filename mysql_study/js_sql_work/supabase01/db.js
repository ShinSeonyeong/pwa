import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rnzhzcfovaqfsjfxorfq.supabase.co";
const supabasePassword = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuemh6Y2ZvdmFxZnNqZnhvcmZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MjQ4MzAsImV4cCI6MjA1NTAwMDgzMH0.lC3jUF1yLH5RA0rMZ-ApWOuoTmWHQT7b1ihZXR50xhM";

const supabase = createClient(supabaseUrl, supabasePassword);

export async function user_select() {
    const res = await supabase.from('users').select();
    console.log(res);
}
export async function user_insert(name, email) {
    const res = await supabase.from('users')
        .insert([{ name, email }]);
    console.log(res);
}
export async function user_update(name, email) {
    const res = await supabase.from('users')
        .update([{ name }])
        .eq('email', email);
    console.log(res);
}
export async function user_delete(email) {
    const res = await supabase
        .from('users')
        .delete()
        .eq('email', email);
    console.log(res);
}
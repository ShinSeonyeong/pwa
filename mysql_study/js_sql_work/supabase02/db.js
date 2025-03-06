import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rnzhzcfovaqfsjfxorfq.supabase.co";
const supabasePassword = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuemh6Y2ZvdmFxZnNqZnhvcmZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MjQ4MzAsImV4cCI6MjA1NTAwMDgzMH0.lC3jUF1yLH5RA0rMZ-ApWOuoTmWHQT7b1ihZXR50xhM";

const supabase = createClient(supabaseUrl, supabasePassword);

export async function usersMInsert() {
    const res = await supabase.from('users').insert(
        [{ name: 'qqq', email: 'qqq@gmail.com' },
        { name: 'eee', email: 'eee@gmail.com' },
        { name: 'hhh', email: 'hhh@gmail.com' }]
    ).select();
    console.log(res);
}

export async function usersSelectByEmail(email) {
    const res = await supabase.from('users')
        .select()
        .eq('email', email);
    console.log(res.data[0].id);
    return res.data[0].id;
}

export async function ordersMInsert(userid) {
    console.log(userid);
    const res = await supabase.from('orders')
        .insert([
            { user_id:userid, product_name: '노트북', price: 150000 },
            { user_id:userid, product_name: '아이패드', price: 900000 }
        ])
        .select();
    console.log(res);
}
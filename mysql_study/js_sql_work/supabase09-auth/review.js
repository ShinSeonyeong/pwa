const supabaseUrl = "https://zgrjjnifqoactpuqolao.supabase.co";
const supabaseAnonkey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpncmpqbmlmcW9hY3RwdXFvbGFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyNDc0NTgsImV4cCI6MjA1NjgyMzQ1OH0._Vl-6CRKdMjeDRyNoxlfect7sgusZ7L0N5OYu0a5hT0";

const supabase = window.supabase.createClient(supabaseUrl, supabaseAnonkey);


async function selectReview() {

    // 페이징, range(0, 10)->0부터 10까지 가져옴
    const params = new URLSearchParams(window.location.search);
    // console.log("params = " + params);

    const pageNum = params.get('pageNum') || 1;
    console.log("pageNum = " + pageNum); 

    // pageNum 1일 때 0~9
    // pageNum 2일 때 10~19
    // pageNum 3일 때 20~29

    const [from, to] = [(pageNum - 1) * 10, (pageNum * 10) - 1];
    console.log("from = " + from);
    console.log("to = " + to);
    const res = await supabase
        .from('review')
        .select()
        .range(from, to);
    console.log(res);

    const $reviewList = document.getElementById('review-list');
    console.log($reviewList);

    $reviewList.innerHTML = '';

    res.data.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.style.display = 'flex';
        reviewDiv.style.border = '1px solid #ccc';
        reviewDiv.style.borderCollapse = 'collapse';

        if (review.file_url === null) {
            reviewDiv.innerHTML = `
            <div style = 'width:150px; padding:1rem; border-right: 1px solid #ccc'>
                <h3>${review.title}</h3>
            </div>
            <div style='padding:1rem;'></div>
            `
        } else {
            reviewDiv.innerHTML = `
            <div style = 'width:150px; padding:1rem; border-right: 1px solid #ccc'>
                <h3>${review.title}</h3>
            </div>
            <div style='padding:1rem;'>
                <img src="${review.file_url}" alt="${review.file_url}" width="200">
            </div>
            `
        }
        $reviewList.appendChild(reviewDiv);
    })
}

selectReview();
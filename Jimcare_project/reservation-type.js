var $select = document.querySelector('#type');
var $etc1 = document.querySelector('#etc1');
var $etc2 = document.querySelector('#etc2');
var $divService = document.querySelector('#div-service');

const $nameInput = document.querySelector('#name');
const $phoneInput = document.querySelector('#phone');

const $typeInput = document.querySelector('#type');

const $jimStartHour = document.querySelector('#jim-start-hour');
const $jimStartMin = document.querySelector('#jim-start-min');
const $jimEndHour = document.querySelector('#jim-end-hour');
const $jimEndMin = document.querySelector('#jim-end-min');

const $keepBag1 = document.querySelector('#keep-bag1');
const $keepBag2 = document.querySelector('#keep-bag2');
const $keepBag3 = document.querySelector('#keep-bag3');

const $useDateInput = document.querySelector('#use-date');
const $commentInput = document.querySelector('#comment');
const $agreeInput = document.querySelector('#agree');

const $nameOutput = document.querySelector('#r-name');
const $phoneOutput = document.querySelector('#r-phone');
const $dateOutput = document.querySelector('#r-date');
const $commentOutput = document.querySelector('#r-comment');

const $confirmReserve = document.querySelector('#confirm-reserve');
const $cancelReserve = document.querySelector('#cancel-reserve');
const $submitReserve = document.querySelector('#submit-reserve');

const $step01 = document.querySelector('#step01');
const $step02 = document.querySelector('#step02');

const dbConnect = supabase.createClient('https://rnzhzcfovaqfsjfxorfq.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuemh6Y2ZvdmFxZnNqZnhvcmZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MjQ4MzAsImV4cCI6MjA1NTAwMDgzMH0.lC3jUF1yLH5RA0rMZ-ApWOuoTmWHQT7b1ihZXR50xhM');

$select.addEventListener('change', function (e) {
    if (e.target.value === 'jim-keep') {
        $etc1.classList.remove('hidden');
        $etc2.classList.add('hidden');
        $divService.classList.remove('h-20');
        $divService.classList.add('h-100');
    } else if (e.target.value === 'jim-move') {
        $etc1.classList.add('hidden');
        $etc2.classList.remove('hidden');
        $divService.classList.remove('h-20');
        $divService.classList.add('h-100');
    } else {
        $etc1.classList.add('hidden');
        $etc2.classList.add('hidden');
        $divService.classList.remove('h-100');
        $divService.classList.add('h-20');
    }
});

$confirmReserve.addEventListener('click', function (e) {
    if (!($agreeInput.checked)) {   // false이면 return
        alert('개인정보 취급 방침에 동의하셔야 합니다.')
        return;
    }

    if($nameInput.value === '') {
        alert('예약자 이름 입력하세요.');
        $nameInput.focus();
        return;
    }

    $nameOutput.innerHTML = $nameInput.value; // 예약자 이름 설정
    $phoneOutput.innerHTML = $phoneInput.value;
    $dateOutput.innerHTML = $useDateInput.value;
    $commentOutput.innerHTML = $commentInput.value;

    alert($agreeInput.checked);

    $step01.classList.add('hidden');
    $step02.classList.remove('hidden');
});

$cancelReserve.addEventListener('click', function (e) {
    $step02.classList.add('hidden');
    $step01.classList.remove('hidden');
})

$submitReserve.addEventListener('click', async function (e) {
    console.log($jimStartHour.value);
    const res = await dbConnect.from('reservation').insert([
        {
            name: $nameOutput.value,
            phone: $phoneOutput.value,
            
            use_date_keep: $dateOutput.innerHTML, // 예약 날짜 (YYYY-MM-DD)

            //이동인경우 날짜 넣기
            use_start_date:null,
            use_end_date:null,

            //보관인경우 날짜 넣기
            use_start_time:'09:00:00',
            use_end_time:'21:00:00',
            use_start_location:null,
            use_end_location:null,
            use_keep_location:'서울',

            shopping_bag_count:$keepBag1.value,
            carrier_small_coun:$keepBag2.value,
            carrier_large_count:$keepBag3.value,
            other_items:'',
            inquiries:$commentOutput.innerHTML,
            type:'keep',
            status:'pending',
            total_price:'123123',
            payment_status:'pending'
        }
    ]);
    alert('예약되었습니다.');
})

//페이지 랜더링(html, css 화면이 보여지는 것) 끝나자마자 바로 실행.

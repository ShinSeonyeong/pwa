import './App.css'
import {Carousel, Image} from 'antd';
import MyList from "@components/MyList.jsx";

function App() {
    const onChange = currentSlide => {
        console.log(currentSlide);
    };
    return (
        <>
            <h1 className={'text-5xl underline'}>HelloWorld</h1>
            <MyList/>
            <div className={`m-[1rem]`}>
                <Carousel autoplay afterChange={onChange}>
                    <div className={'w-full h-[400px] p-3 bg-gray-200'}>
                        <h3 className={'text-4xl underline'}>1</h3>
                        <p>문장을 넣으면 됩니다. 이 부분은 슬라이드 입니다.</p>
                        <Image src="https://zgrjjnifqoactpuqolao.supabase.co/storage/v1/object/public/images//0d0307fe-0a2a-45fd-bd02-533d9fd205e1.jpg" alt=""/>

                    </div>
                    <div className={'w-full h-[400px] p-3 bg-gray-200'}>
                        <h3 className={'text-4xl underline'}>2</h3>
                        <p>문장을 넣으면 됩니다. 이 부분은 슬라이드 입니다.</p>
                    </div>
                    <div className={'w-full h-[400px] p-3 bg-gray-200'}>
                        <h3 className={'text-4xl underline'}>3</h3>
                        <p>문장을 넣으면 됩니다. 이 부분은 슬라이드 입니다.</p>
                    </div>
                    <div className={'w-full h-[400px] p-3 bg-gray-200'}>
                        <h3 className={'text-4xl underline'}>4</h3>
                        <p>문장을 넣으면 됩니다. 이 부분은 슬라이드 입니다.</p>
                    </div>
                </Carousel>
            </div>
            <div className={`m-[1rem]`}>
                <Carousel autoplay afterChange={onChange}>
                    <div className={'w-full h-[200px] p-3 bg-gray-200'}>
                        <h3 className={'text-4xl underline'}>1</h3>
                        <p>문장을 넣으면 됩니다. 이 부분은 슬라이드 입니다.</p>
                    </div>
                    <div className={'w-full h-[200px] p-3 bg-gray-200'}>
                        <h3 className={'text-4xl underline'}>2</h3>
                        <p>문장을 넣으면 됩니다. 이 부분은 슬라이드 입니다.</p>
                    </div>
                    <div className={'w-full h-[200px] p-3 bg-gray-200'}>
                        <h3 className={'text-4xl underline'}>3</h3>
                        <p>문장을 넣으면 됩니다. 이 부분은 슬라이드 입니다.</p>
                    </div>
                    <div className={'w-full h-[200px] p-3 bg-gray-200'}>
                        <h3 className={'text-4xl underline'}>4</h3>
                        <p>문장을 넣으면 됩니다. 이 부분은 슬라이드 입니다.</p>
                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default App

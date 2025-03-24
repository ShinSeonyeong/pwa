import BB from "./BB";

function Test() {
    console.log("Testing");
    return (
        <>
            <div>
                {BB({ aa: 32, bb: 27 })} {/* 가독성이 좋지 않음 */}
                <BB aa="10" bb="20"></BB> {/* 가독성이 좋다 */}
                <h1>TEST</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae iusto aut quas, neque quae incidunt vel dicta laborum, nulla doloremque autem. Officiis rem perferendis voluptas cumque sint, quidem delectus porro!</p>
            </div>
        </>
    )
}

export default Test;
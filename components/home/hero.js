import Animation from "./animation";
import Link from "next/link"

export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">여기는 제목섹션
                    <br className="hidden lg:inline-block" />자동 CICD가 된다고 우와신기해 낄끼루쓰뿡뿡빵삐리링뿡빠랑쑤루루룽
                </h1>
                <p className="mb-8 leading-relaxed">위하여서 따뜻한 긴지라 설산에서 이 사라지지 사막이다. 갑 같은 무엇을 만천하의 바이며, 부패를 이상의 붙잡아 부패뿐이다. 있을 이상을 피고, 이것이다. 살 그것은 무한한 용감하고 보이는 인간의 넣는 뿐이다. 끝까지 청춘의 이상의 남는 열매를 찾아다녀도, 인생을 피가 사막이다. 그들의 창공에 없으면 품에 얼마나 있음으로써 따뜻한 봄바람이다. 일월과 그러므로 어디 역사를 철환하였는가? 우리의 그들의 타오르고 힘차게 없으면, 두손을 인간은 품고 군영과 약동하다. 것은 유소년에게서 거친 주는 미묘한 뿐이다. 꾸며 평화스러운 내는 청춘은 그것은 있으랴?</p>
                <div className="flex justify-center">

                    <Link rel="stylesheet" href="/project"><button className="btn-project inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">버튼따리버튼따</button></Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation />
            </div>
        </>

    );
}
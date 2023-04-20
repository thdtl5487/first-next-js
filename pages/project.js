import Layout from "@/components/layout"
import Head from "next/head"
import { TOKEN, DATABASE_ID } from "@/config";
import ProjectItem from "@/projects/projects-item";


export default function Projects({projects}){

    console.log('클라에서 찍히는곳',projects); // output : (array) [ '찌기포포리', '종혀기포포리당씽', '종혁이포포리당', '빡빡이 포트폴리오 01' ] 


    return (
        <>
            <Layout>
                <div className="flex flex-col items-center justify-items-center min-h-screen px-5 py-10 mb-10 px-6">
                    <Head>
                        <title>종혁이 프로젝트</title>
                        

                    </Head>
                    <h1 className="hover:text-slate-400/80 text-4xl font-bold sm:text-6xl">프로젝트 :<span className="pl-4 text-blue-500">{projects.results.length}</span></h1>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 py-10 justify-items-center gap-8 w-full">
                        {projects.results.map((aProject) =>(
                            <ProjectItem key={aProject.id} data={aProject} />
                        ))}
                    </div>
                </div>
            </Layout>
        </>
    )
}

// 빌드 타임에 호출, 데이터를 가져온 다음에 화면에 렌더링 (1회 실행)
export async function getStaticProps(){

    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Notion-Version': '2022-02-22',
            'content-type': 'application/json',
            Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            sorts : [
                {
                    "property": "Name",
                "direction": "descending"
                }
            ], 
            page_size: 100
        })
      };
      
      // await => 데이터 다 받을 때까지 기다림
    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
    
    const projects = await res.json();

    const projectNames = projects.results.map(aProejct => (
        aProejct.properties.Name.title[0].plain_text
    ))
    console.log('서버에서찍히는곳', projectNames); // output : (array) [ '찌기포포리', '종혀기포포리당씽', '종혁이포포리당', '빡빡이 포트폴리오 01' ] 
 
    return {
        props: { projects },
    }
}
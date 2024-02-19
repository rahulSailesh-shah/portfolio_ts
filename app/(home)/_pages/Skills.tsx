import React from "react";
import { BentoGrid, BentoGridItem } from "../_components/bentoGrid";
import Heading from "../_components/Heading";

const Backend = () => (
    <div className='flex flex-wrap rounded-xl text-[#cdcdcd]'>
        <span className='border border-cyan-500 mx-1 my-1 px-4 py-2 rounded-md bg-slate-900'>
            Node.js
        </span>
        <span className='border border-cyan-500 mx-1 my-1 px-4 py-2 rounded-md bg-slate-900'>
            Express.js
        </span>
        <span className='border border-white/[0.2] mx-1 my-1 px-4 py-2 rounded-md bg-slate-900'>
            Django
        </span>
        <span className='border border-cyan-500 mx-1 my-1 px-4 py-2 rounded-md bg-slate-900'>
            FastAPI
        </span>
        <span className='border border-white/[0.2] mx-1 my-1 px-4 py-2 rounded-md bg-slate-900'>
            GraphQL
        </span>
        <span className='border border-white/[0.2] mx-1 my-1 px-4 py-2 rounded-md bg-slate-900'>
            Next Auth
        </span>
        <span className='border border-cyan-500 mx-1 my-1 px-4 py-2 rounded-md bg-slate-900'>
            Rest API Design
        </span>
        <span className='border border-cyan-500 mx-1 my-1 px-4 py-2 rounded-md bg-slate-900'>
            Websockets Design
        </span>
        <span className='border border-cyan-500 mx-1 my-1 px-4 py-2 rounded-md bg-slate-900'>
            Python
        </span>
        <span className='border border-white/[0.2] mx-1 my-1 px-4 py-2 rounded-md bg-slate-900'>
            Swift
        </span>
        <span className='border border-white/[0.2] mx-1 my-1 px-4 py-2 rounded-md bg-slate-900'>
            Langchain
        </span>
        <span className='border border-white/[0.2] mx-1 my-1 px-4 py-2 rounded-md bg-slate-900'>
            Firebase
        </span>
    </div>
);

const Frontend = () => (
    <div className='flex w-full flex-wrap rounded-xl text-[#cdcdcd]'>
        <span className='border border-cyan-500 mx-1 my-1 px-4 py-2 rounded-md bg-slate-900'>
            TypeScript
        </span>
        <span className='border border-cyan-500 mx-1 my-1 px-4 py-2 rounded-md bg-slate-900'>
            JavaScript
        </span>
        <span className='border border-cyan-500 mx-1 my-1 px-4 py-2 rounded-md bg-slate-900'>
            Next.js
        </span>
        <span className='border border-cyan-500  mx-1 my-1 px-4 py-2 rounded-md bg-slate-900'>
            React
        </span>
        <span className='border border-white/[0.2] mx-1 my-1 px-4 py-2 rounded-md bg-slate-900'>
            React Native
        </span>
        <span className='border border-white/[0.2] mx-1 my-1 px-4 py-2 rounded-md bg-slate-900'>
            HTML
        </span>
        <span className='border border-white/[0.2] mx-1 my-1 px-4 py-2 rounded-md bg-slate-900'>
            CSS
        </span>
        <span className='border border-white/[0.2] mx-1 my-1 px-4 py-2 rounded-md bg-slate-900'>
            Swift UI
        </span>
    </div>
);

const Database = () => (
    <div className='flex w-full flex-wrap rounded-xl text-[#cdcdcd]'>
        <span className='border border-cyan-500 mx-1 my-1 px-4 py-2 rounded-md bg-slate-900'>
            MongoDB
        </span>
        <span className='border border-white/[0.2] mx-1 my-1 px-4 py-2 rounded-md bg-slate-900'>
            MySQL
        </span>

        <span className='border border-cyan-500 mx-1 my-1 px-4 py-2 rounded-md bg-slate-900'>
            PostgreSQL
        </span>
        <span className='border border-white/[0.2] mx-1 my-1 px-4 py-2 rounded-md bg-slate-900'>
            Redis
        </span>
        <span className='border border-cyan-500 mx-1 my-1 px-4 py-2 rounded-md bg-slate-900'>
            Dynamo DB
        </span>
        <span className='border border-white/[0.2] mx-1 my-1 px-4 py-2 rounded-md bg-slate-900'>
            Milvus Vector DB
        </span>
    </div>
);

const Devops = () => (
    <div className='flex flex-wrap rounded-xl text-[#cdcdcd]'>
        <span className='border border-cyan-500 mx-2 my-1 px-4 py-2 rounded-md bg-slate-900'>
            AWS
        </span>
        <span className='border border-cyan-500 mx-2 my-1 px-4 py-2 rounded-md bg-slate-900'>
            Docker
        </span>
        <span className='border border-white/[0.2] mx-2 my-1 px-4 py-2 rounded-md bg-slate-900'>
            Terraform
        </span>
        <span className='border border-white/[0.2] mx-2 my-1 px-4 py-2 rounded-md bg-slate-900'>
            Apache Kafka
        </span>
        <span className='border border-white/[0.2] mx-2 my-1 px-4 py-2 rounded-md bg-slate-900'>
            Git
        </span>
        <span className='border border-cyan-500 mx-2 my-1 px-4 py-2 rounded-md bg-slate-900'>
            Kubernetes
        </span>
        <span className='border border-cyan-500 mx-2 my-1 px-4 py-2 rounded-md bg-slate-900'>
            Jenkins
        </span>
    </div>
);

const items = [
    {
        title: "Backend",
        header: <Backend />,
        className: "md:col-span-2",
    },
    {
        title: "Frontend",
        description: "Dive into the transformative power of technology.",
        header: <Frontend />,
        className: "md:col-span-1",
    },
    {
        title: "Database",
        description: "Discover the beauty of thoughtful and functional design.",
        header: <Database />,
        className: "md:col-span-1",
    },
    {
        title: "DevOps / Cloud Technologies",
        description:
            "Understand the impact of effective communication in our lives.",
        header: <Devops />,
        className: "md:col-span-2",
    },
];

export function Skills() {
    return (
        <div className='flex flex-col justify-center items-center px-4'>
            <div>
                <div className='ml-20 mb-10'>
                    <Heading text='Skills' />
                </div>

                <BentoGrid className='max-w-4xl mx-auto md:auto-rows-[18rem]'>
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            header={item.header}
                            className={item.className}
                        />
                    ))}
                </BentoGrid>
            </div>
        </div>
    );
}

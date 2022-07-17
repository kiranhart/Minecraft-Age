import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';
import moment from 'moment';

type VersionCardProps = {
    name: string;
    released: string;
};

const Home: NextPage = () => {
    // const hello = trpc.useQuery(['minecraft.versions', { text: 'from tRPCd' }]);
    const versions = trpc.useQuery(['minecraft.versions']);

    return (
        <>
            <Head>
                <title>Minecraft Version Age | Kiran Hart</title>
                <meta name='description' content='A quick way to see how old each Minecraft version is.' />
                <link rel='icon' href='/favicon.png' type='image/png' />
            </Head>

            <main className='container mx-auto flex flex-col items-center justify-center min-h-screen p-4 scroll-smooth'>
                <h1 className='text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700'>Minecraft Version Age</h1>
                <div className='grid gap-3 pt-3 mt-3 text-center md:grid-cols-1 lg:w-2/3 mx-auto'>
                    {versions.data?.versions.map((majorVersion) => {
                        return (
                            <div key={majorVersion.title}>
                                <h1 className='font-black text-3xl text-gray-700'>
                                    {majorVersion.title} ({majorVersion.version === 1.1 ? majorVersion.version.toFixed(2) : majorVersion.version})
                                </h1>
                                <ul className='my-3'>
                                    {majorVersion.versions.map((version) => {
                                        return (
                                            <li id={version.version} key={version.version} className='py-3'>
                                                <VersionCard name={version.version} released={version.release} />
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </main>
        </>
    );
};

const VersionCard = ({ name, released }: VersionCardProps) => {
    const days = moment.duration(moment().diff(released)).asDays();

    return (
        <section className='flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105'>
            <h2 className='text-xl text-gray-700 font-black'>{name}</h2>
            <p className='text-sm text-gray-600'>{released}</p>
            <a
                className='mt-3 text-xl font-bold text-violet-500'
                href={`https://minecraft.fandom.com/wiki/Java_Edition_${name}`}
                target='_blank'
                rel='noreferrer'>
                {`${Math.floor(days / 365)} Years ${Math.floor((days % 365) / 30)} Months ${Math.floor((days % 365) % 30)} Days`}
            </a>
        </section>
    );
};

export default Home;

import BKRCLogo from '@/app/ui/bkrc-logo';
import Link from 'next/link';
import Image from 'next/image';


export default function Home() {
  return (

    <div className='flex items-center gap-4 justify-between p-10'>
      <div className='flex flex-col gap-4 px-5'>
        <BKRCLogo />
        <h2 className='text-2xl font-bold text-center'>Bacha Khan Trust Research Center</h2>
        <p className='text-justify'>
          The Bacha Khan Research Center (BKRC), established in 2007, is a prestigious educational and research institution located in Bacha Khan Markaz, Peshawar. Founded under the auspices of the Bacha Khan Trust, the center is a tribute to the legacy of Khan Abdul Ghaffar Khan, famously known as Bacha Khan, a revered political leader, social reformer, and advocate of non-violence. He dedicated his life to the education and empowerment of the Pashtun nation, promoting the values of peace, unity, and self-reliance through education. The Bacha Khan Research Center was established to continue his lifelong mission of spreading knowledge and fostering intellectual growth among the people.
        </p>
        <Link href='/about'>
          <button className='p-2 rounded-md bg-red-700 w-fit text-white'>Learn more</button>
        </Link>
      </div>
      <div className=''>
        <Image src={"/bkrc.png"} width={450} height={450} alt='BKRC Library Image' className='max-w-none rounded-md' />
      </div>
    </div>

  );
}

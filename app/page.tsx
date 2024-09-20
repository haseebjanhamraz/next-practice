import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';


export default function Home() {
  return (

    <div className='flex flex-col items-center text-center'>
      <Image src={"/logo.png"} width={100} height={100} alt='BKRC Logo' className='m-10 rounded-full' />
      <h2 className='text-2xl font-bold'>Bacha Khan Trust Research Center</h2>
      <hr className='border border-gray-600 m-10'></hr>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque corporis tenetur dignissimos earum dolorem beatae fugit cupiditate, numquam mollitia rerum eveniet repudiandae quidem laudantium debitis, laboriosam est voluptate! Delectus!
        Quis ullam sunt, minima dolorem ut sapiente expedita quisquam soluta harum quidem obcaecati impedit veritatis maiores officiis nisi quia delectus aliquid eaque quibusdam. Error placeat sit quod natus, voluptates officiis.
        Harum, quia. Maiores odit nam magni iure sequi doloremque obcaecati voluptas veritatis repudiandae nulla minima molestias ea tenetur dolor aut debitis impedit labore, inventore unde aspernatur alias perspiciatis quae eveniet.
        Ipsa dignissimos blanditiis similique laboriosam, magnam voluptatem. Vero ea similique, a beatae harum aut quidem, officia nihil dolor provident sequi eum. Earum architecto eum, reiciendis ex dignissimos in veniam voluptatum!
        Debitis illum, animi placeat omnis, cumque at nisi harum aperiam quod corporis vel voluptatum magnam ad saepe laboriosam nulla perferendis enim repellat temporibus laborum sed. Maxime, omnis. Natus, vel nisi?
        Corrupti delectus ut quo suscipit harum! Non quo eos doloremque incidunt culpa ullam beatae iusto laborum modi, nostrum earum sint natus et perspiciatis! Deleniti tempora quam quis dolor, veritatis quasi.
        Quae ducimus deserunt esse aliquid ratione facere id expedita odit quidem dolorum quam vel distinctio dicta illo temporibus consectetur amet dolor voluptatum, est mollitia sint, veniam nisi quos. Similique, obcaecati.
        Eum blanditiis voluptate a quibusdam maiores voluptatibus saepe officia eius ducimus tempore neque esse, voluptates ipsa, veritatis vero beatae libero numquam nihil? Excepturi vitae magni rem deserunt odio maiores suscipit!
        Et laudantium illum modi, sed voluptatibus autem asperiores deserunt eligendi nobis harum fugiat similique repellendus. Numquam consectetur ex molestias neque incidunt tempore deserunt! Labore voluptatibus ex et voluptates nulla quo?
        Quibusdam accusantium, quod fugiat tempora aut, natus ipsam cumque culpa sapiente corporis sint odit deleniti temporibus amet dolorem nostrum recusandae nulla alias, cum reiciendis minus dolore corrupti. Voluptatibus, velit? Cupiditate.
      </p>
    </div>

  );
}

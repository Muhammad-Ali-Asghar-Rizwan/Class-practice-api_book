
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

async function Home() {
  const Api_Book = await fetch("https://simple-books-api.glitch.me/books")
  const resp = await Api_Book.json()
  console.log(resp);
  
  return (
    <div>
      <h1 className="text-xl font-bold text-center">Simple Books Api</h1>
      
      <div className="grid grid-cols-3 grid-rows-2 gap-4 ml-20 mt-10 items-center justify-center">

      {resp.map((book:any, index: number) => {
          return(
              <div key={index}  className='flex flex-col gap-10 h-[15rem] w-[20rem] items-center justify-center bg-green-400 rounded-lg'>
                <Image src="/image/book.jpg" alt='book' width={200} height={200} className='rounded-lg'/>
          <Link href={`/book/${book.id}`} className='h-10 font-extrabold flex items-center justify-center w-56 bg-emerald-300 rounded-[30px] transition hover:scale-105 hover:shadow-lg hover:shadow-lime-700'>
          <p>{book.name}</p>
          </Link>
            </div>
        )
    })}
    </div>
    </div>
  )
}

export default Home
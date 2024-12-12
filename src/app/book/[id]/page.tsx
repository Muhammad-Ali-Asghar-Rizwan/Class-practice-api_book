import React from 'react'

const page = async (props:{ params: {id: number }}) => {
  
  const id = props.params.id;

  const singleBookData = await fetch(`https://simple-books-api.glitch.me/books/${id}`)
  const jsonBookData = await singleBookData.json();
  console.log("SINGLE BOOK: ", jsonBookData);
  return (
    <div className="grid items-center justify-center bg-teal-300 mx-96  my-16 py-16 rounded-[50px] gap-6">
      <h1 className='font-bold text-2xl'>Book Detail</h1>
      <h2>ID: {jsonBookData.id}</h2>
      <h2>NAME: {jsonBookData.name}</h2>
      <h2>AUTHOR: {jsonBookData.author}</h2>
      <h2>TYPE: {jsonBookData.type}</h2>
      <h2>PRICE: {jsonBookData.price}</h2>
      <h2>AVAILABLE: {jsonBookData.available ? "YES": "NO"}</h2>
      <h2>CURRENT STOCK: {jsonBookData["current-stock"]}</h2>
    </div>
  )
}

export default page
import React from 'react';
import './style.css';
import Dataset from '../../Dataset/Chair'
import CardTop from './src/CardTop';

const Top = () => {
  return (
    <div className="App justify-center flex">
      <div className="scroll-pl-4 snap-x overflow-x-auto flex flex-row w-3/4 m-4 space-x-4">
        <div className='snap-start halaman flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4'>
          <CardTop
            gambar={Dataset[0].gambar}
            name={Dataset[0].name}
            rate={Dataset[0].rate}
            harga={Dataset[0].harga}
            className="mb-4"
          />
        </div>
        <div className='snap-start halaman flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4'>
          <CardTop
            gambar={Dataset[1].gambar}
            name={Dataset[1].name} 
            rate={Dataset[2].rate}
            harga={Dataset[1].harga}
            className="mb-4"
          />
        </div>
        <div className='snap-start halaman flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4'>
          <CardTop
            gambar={Dataset[2].gambar}
            name={Dataset[2].name}
            rate={Dataset[2].rate}
            harga={Dataset[2].harga}
            className="mb-4"
          />
        </div>
        <div className='snap-start halaman flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4'>
          <CardTop
            gambar={Dataset[3].gambar}
            name={Dataset[3].name}
            rate={Dataset[3].rate}
            harga={Dataset[3].harga}
            className="mb-4"
          />
        </div>
        <div className='snap-start halaman flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4'>
          <CardTop
            gambar={Dataset[4].gambar}
            name={Dataset[4].name}
            rate={Dataset[4].rate}
            harga={Dataset[4].harga}
            className="mb-4"
          />
        </div>
        <div className='snap-start halaman flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4'>
          <CardTop
            gambar={Dataset[5].gambar}
            name={Dataset[5].name}
            rate={Dataset[5].rate}
            harga={Dataset[5].harga}
            className="mb-4"
          />
        </div>
        <div className='snap-start halaman flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4'>
          <CardTop
            gambar={Dataset[6].gambar}
            name={Dataset[6].name}
            rate={Dataset[6].rate}
            harga={Dataset[6].harga}
            className="mb-4"
          />
        </div>
        <div className='snap-start halaman flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4'>
          <CardTop
            gambar={Dataset[7].gambar}
            name={Dataset[7].name}
            rate={Dataset[7].rate}
            harga={Dataset[7].harga}
            className="mb-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Top;

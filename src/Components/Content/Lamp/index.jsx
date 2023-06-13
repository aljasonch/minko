import React from 'react';
import Dataset from '../../../Dataset/Lamp'
import Card from '../../Top/src/Card';


function ChairContent (){
  return (
    <div className="justify-center flex">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Card
            gambar={Dataset[0].gambar}
            name={Dataset[0].name}
            rate={Dataset[0].rate}
            harga={Dataset[0].harga}
          />
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Card
            gambar={Dataset[1].gambar}
            name={Dataset[1].name}
            rate={Dataset[1].rate}
            harga={Dataset[1].harga}
          />
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Card
            gambar={Dataset[2].gambar}
            name={Dataset[2].name}
            rate={Dataset[2].rate}
            harga={Dataset[2].harga}
          />
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Card
            gambar={Dataset[3].gambar}
            name={Dataset[3].name}
            rate={Dataset[3].rate}
            harga={Dataset[3].harga}
          />
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Card
            gambar={Dataset[4].gambar}
            name={Dataset[4].name}
            rate={Dataset[4].rate}
            harga={Dataset[4].harga}
          />
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Card
            gambar={Dataset[5].gambar}
            name={Dataset[5].name}
            rate={Dataset[5].rate}
            harga={Dataset[5].harga}
          />
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Card
            gambar={Dataset[6].gambar}
            name={Dataset[6].name}
            rate={Dataset[6].rate}
            harga={Dataset[6].harga}
          />
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Card
            gambar={Dataset[7].gambar}
            name={Dataset[7].name}
            rate={Dataset[7].rate}
            harga={Dataset[7].harga}
          />
        </div>
      </div>
    </div>
  );
};

export default ChairContent;
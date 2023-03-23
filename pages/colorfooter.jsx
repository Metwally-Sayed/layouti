import Layout from '../components/Layout';
import React, { useEffect, useState } from 'react';

const Colorfooter = () => {
  const [firstcolor, setFirstColor] = useState('#ffffff');
  const [meddleColor, setMeddleColor] = useState('#000000');
  const [lastColor, setLastColor] = useState('#ff00ff');
  const [dividerColor, setDividerColor] = useState('#0000ff');
  const [fontColor, setFontColor] = useState('#ff0000');

  function handleChangeFirstColor(event) {
    setFirstColor(event.target.value);
  }

  function handleChangeMeddleColor(event) {
    setMeddleColor(event.target.value);
  }

  function handleChangeLastColor(event) {
    setLastColor(event.target.value);
  }

  function handleChangeDividerColor(event) {
    setDividerColor(event.target.value);
  }

  function handleChangeFontColor(event) {
    setFontColor(event.target.value);
  }

  const firstColorBoxStyle = {
    backgroundColor: firstcolor,
    width: '50px',
    height: '30px',
    display: 'inline-block',
    marginLeft: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    position: 'absolute',
    top: '5px',
  };

  const meddleColorBoxStyle = {
    backgroundColor: meddleColor,
    width: '50px',
    height: '30px',
    display: 'inline-block',
    marginLeft: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    position: 'absolute',
    top: '5px',
  };
  const lastColorBoxStyle = {
    backgroundColor: lastColor,
    width: '50px',
    height: '30px',
    display: 'inline-block',
    marginLeft: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    position: 'absolute',
    top: '5px',
  };
  const dividerColorBoxStyle = {
    backgroundColor: dividerColor,
    width: '50px',
    height: '30px',
    display: 'inline-block',
    marginLeft: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    position: 'absolute',
    top: '5px',
  };
  const fontColorBoxStyle = {
    backgroundColor: fontColor,
    width: '50px',
    height: '30px',
    display: 'inline-block',
    marginLeft: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    position: 'absolute',
    top: '5px',
  };

  const saveHandler = () => {
    const data = {
      firstcolor,
      meddleColor,
      lastColor,
      dividerColor,
      fontColor,
    };
  };

  return (
    <Layout>
      <div className=" h-screen bg-white rounded">
        <form className="p-4 w-full flex flex-col items-center justify-center ">
          <div className="flex flex-col justify-center w-full ">
            <label className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
              First Color
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <div className="flex w-full rounded-md shadow-sm relative">
                <span style={firstColorBoxStyle}></span>
                <p className=" absolute top-2 left-20">{firstcolor}</p>
                <input
                  value={firstcolor}
                  onChange={handleChangeFirstColor}
                  type="color"
                  className="block w-full min-w-0 flex-1 border-0 py-2 pl-20 text-gray-900 ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full mt-5">
            <label className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
              Meddle Color{' '}
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <div className="flex w-full rounded-md shadow-sm relative">
                <span style={meddleColorBoxStyle}></span>
                <p className=" absolute top-2 left-20">{meddleColor}</p>
                <input
                  onChange={handleChangeMeddleColor}
                  type="color"
                  value={meddleColor}
                  className="block w-full min-w-0 flex-1 border-0 py  -2 text-gray-900 ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full mt-5">
            <label className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
              Last Color{' '}
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <div className="flex w-full rounded-md shadow-sm relative">
                <span style={lastColorBoxStyle}></span>
                <p className=" absolute top-2 left-20">{lastColor}</p>
                <input
                  onChange={handleChangeLastColor}
                  type="color"
                  value={lastColor}
                  className="block w-full min-w-0 flex-1 border-0 py-2 pl-20 text-gray-900 ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full mt-5">
            <label className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
              Divider Color{' '}
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <div className="flex w-full rounded-md shadow-sm relative">
                <span style={dividerColorBoxStyle}></span>
                <p className=" absolute top-2 left-20">{dividerColor}</p>

                <input
                  value={dividerColor}
                  onChange={handleChangeDividerColor}
                  type="color"
                  className="block w-full min-w-0 flex-1 border-0 py-2 pl-20 text-gray-900 ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full mt-5">
            <label className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
              Font Color{' '}
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <div className="flex w-full rounded-md shadow-sm relative">
                <span style={fontColorBoxStyle}></span>
                <p className=" absolute top-2 left-20">{fontColor}</p>

                <input
                  value={fontColor}
                  onChange={handleChangeFontColor}
                  type="color"
                  className="block w-full min-w-0 flex-1 border-0 py-2 pl-20 text-gray-900 ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className=" flex items-end justify-end w-full pt-10">
            <button
              onClick={() => saveHandler()}
              className="bg-green-500 h-10 w-60 text-white "
              type="button"
            >
              Save
            </button>{' '}
          </div>
        </form>{' '}
      </div>
    </Layout>
  );
};

export default Colorfooter;

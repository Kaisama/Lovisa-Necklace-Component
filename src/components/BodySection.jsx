import React, { useState } from 'react';
import { FaRegHeart, FaMinus, FaPlus ,FaHeart} from "react-icons/fa";
import { BsTwitter, BsPinterest, BsFacebook } from "react-icons/bs";
import { PiRulerThin } from "react-icons/pi";

const BodySection = () => {
    const [currentImage, setCurrentImage] = useState("https://www.lovisa.sg/cdn/shop/files/51466640_200x.jpg?v=1712720985");
    const [cartQuantity, setCartQuantity] = useState(0);
    const [isWishlist, setIsWishlist] = useState(false);


    const changeImage = (newImage) => {
        setCurrentImage(newImage);
    }

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        // Calculate zoom position
        const zoomX = (x * 100).toFixed(2);
        const zoomY = (y * 100).toFixed(2);

        // Apply zoom effect
        e.target.style.backgroundPosition = `${zoomX}% ${zoomY}%`;

        // Adjust magnification level
        const magnificationLevel = 2; // Increase for higher magnification
        const backgroundSize = `${width * magnificationLevel}px ${height * magnificationLevel}px`;
        e.target.style.backgroundSize = backgroundSize;
    }

    const handleMouseLeave = (e) => {
        // Reset image properties
        e.target.style.backgroundPosition = 'center';
        e.target.style.backgroundSize = 'cover';
    }

    const handleIncrementCart = () => {
        setCartQuantity(cartQuantity + 1);
    }

    const handleDecrementCart = () => {
        if (cartQuantity > 0) {
            setCartQuantity(cartQuantity - 1);
        }
    }

    const handleWishlist = () => {
        setIsWishlist(!isWishlist);
    }

    return (
        <div className="w-screen h-screen mr-0 body-section">
            {/* Main grid with two sections */}
            <div className="grid w-screen h-screen grid-cols-2 gap-2">
                {/* Section 1 with two images */}
                <div className="relative grid grid-cols-2 m-0 section1 left-2">
                    <div className="relative flex flex-row image left-20">
                        {/* Nested grid for three images */}
                        <div className="p-5 m-3 ml-12 nested-grid">
                            {/* Three images within nested grid */}
                            <div className="m-2 border-2 image border-black-300 ">
                                {/* Image 1 of section 1 */}
                                <img src="https://www.lovisa.sg/cdn/shop/files/51466640_200x.jpg?v=1712720985" alt="Nested Image 2" className='cursor-pointer h-28 w-26' onClick={() => changeImage("https://www.lovisa.sg/cdn/shop/files/51466640_200x.jpg?v=1712720985")} />
                            </div>
                            <div className="m-2 border-2 image border-black-300 ">
                                {/* Image 2 of section 1 */}
                                <img src="https://www.lovisa.sg/cdn/shop/files/51466640_3_200x.jpg?v=1712720990" alt="Nested Image 2" className='cursor-pointer h-28 w-26' onClick={() => changeImage("https://www.lovisa.sg/cdn/shop/files/51466640_3_200x.jpg?v=1712720990")} />
                            </div>
                            <div className="m-2 border-2 image border-black-300 ">
                                {/* Image 3 of section 1 */}
                                <img src="https://www.lovisa.sg/cdn/shop/files/51466640_4_200x.jpg?v=1712720995" alt="Nested Image 3" className='cursor-pointer h-28 w-26' onClick={() => changeImage("https://www.lovisa.sg/cdn/shop/files/51466640_4_200x.jpg?v=1712720995")} />
                            </div>
                        </div>
                    </div>
                    <div className="relative w-3/4 m-0 mt-3 images xl:w-96 top-6 right-7">
                        {/* Image 2 content */}
                        <div
                            className="relative w-full h-4/5"
                            style={{
                                backgroundImage: `url(${currentImage})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                cursor: 'pointer', // Change cursor to pointer
                            }}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave} // Add onMouseLeave event handler
                        ></div>
                    </div>
                </div>
                {/* Section 2 with data */}
                <div className="w-3/5 ml-20 section2 mt-9">
                    {/* Data content */}
                    <div className=' w-80'>
                        <p className='mb-3 text-sm font-bold tracking-wide '>SKU - 51466640</p>
                        <h3 className='text-xl font-bold leading-relaxed tracking-wide'>Gold Plated Trio Layered Molten Disc Necklace</h3>
                    </div>
                    <div className='mt-5 '>
                        <p className='text-xl font-semibold tracking-wide'>$38.00</p>
                        <div className="flex items-center">
                            <p className='text-xs'>or 3 payments of<span className='text-sm font-bold tracking-wide'> $12.67 </span> with</p>
                            <img className="ml-1" src='./images/atom.JPG' alt='' />
                        </div>
                    </div>
                    <div className='mt-6'>
                        <p className='ml-3.5 text-xs tracking-wide'>SIZE</p>
                        <div className="mt-3 mb-3">
                            <p className='ml-1'>
                                <span className='inline-block px-2 py-2 mr-1 tracking-wide text-white bg-black border-2 border-black'>O/S</span>
                                <span className='relative inline-block text-sm tracking-wide text-gray-500 underline bottom-1'><PiRulerThin className='inline-block ml-2 mr-1 text-lg ' />Size Guide</span>
                            </p>
                        </div>
                    </div>
                    <div className='mt-6'>
                        {/* Cart button with quantity */}
                        <div className="flex items-center">
                            <button onClick={handleDecrementCart} className="px-2 py-3.5 text-black bg-gray-200 border-t ">
                                <FaMinus />
                            </button>
                            <div className="px-2 py-2.5 bg-gray-200 border-t ">{cartQuantity}</div>
                            <button onClick={handleIncrementCart} className="px-2 py-3.5 text-black bg-gray-200 border-t ">
                                <FaPlus />
                            </button>
                            <button className='px-24 py-2.5 tracking-wide text-center text-white bg-black hover:bg-white hover:text-black'>ADD TO BAG</button>

                        </div>
                    </div>
                    <div className='mt-4 '>
                    <button onClick={handleWishlist} className='relative flex items-center justify-center w-full text-xs tracking-widest text-red-400 right-5 '>
                            {isWishlist ? <FaHeart className="ml-1 text-red-400" /> : <FaRegHeart className="ml-1" />}
                            <span className='ml-2 mr-2'>{isWishlist ? 'REMOVE FROM WISHLIST' : 'ADD TO WISHLIST'}</span>
                        </button>
                    </div>
                    <div className='mt-10 w-88 '>
                        <p className='mb-4 text-xs tracking-wider text-gray-700'>DESCRIPTION</p>
                        <p className='text-xs leading-relaxed tracking-wider text-gray-700'>Curate a collection of signature pieces with jewellery from our Precious Metals Collection. Designed with genuine plating and timeless embellishments, jewellery from our Precious Metals Collection is perfect for everyday wear.</p>
                        <p className='mt-4 text-xs leading-relaxed tracking-wider text-gray-700'>This Gold Plated Trio Layered Molten Disc Necklace is perfect for adding interest to your neckline.</p>
                        <ul className="ml-6 list-disc">
                            <li className="mt-2 mb-2 ml-3 text-xs leading-relaxed tracking-wider text-gray-700"><span className='font-bold'>Material:</span> Gold Plated</li>
                            <li className="mb-2 ml-3 text-xs leading-relaxed tracking-wider text-gray-700">Occasion: Everyday</li>
                            <li className="mb-2 ml-3 text-xs leading-relaxed tracking-wider text-gray-700">Feature: Molten Texture</li>
                        </ul>
                    </div>
                    <ul className="flex flex-row gap-6 ">
                        <li className='mt-4'><BsTwitter className="w-6 h-5" /></li>
                        <li className='mt-4'><BsPinterest className="w-6 h-5 " /></li>
                        <li className='mt-4'><BsFacebook className="w-6 h-5" /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default BodySection;

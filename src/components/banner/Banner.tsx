function Banner() {
    return (
        <div className="flex flex-col md2:flex-row gap-[10px] mt-[10px]">
            <div className="h-[69vh] md2:flex-1 flex pl-[30px] sm:pl-[70px] items-center bg-[url('/src/assets/images/categories/category-1.jpg')] bg-no-repeat bg-cover bg-center">
                <div className="max-w-[480px]">
                    <h1 className="font-cursive text-[70px]">
                        Women's Fashion
                    </h1>
                    <p className="text-[#666666] text-sm mb-[15px]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Maxime hic cumque ea voluptatibus quos, velit ab
                        inventore culpa placeat exercitationem architecto fuga
                        numquam neque aliquam!
                    </p>
                    <button className="pb-[3px] font-semibold text-sm uppercase relative after:w-full after:block after:absolute after:left-0 after:bottom-0 after:content-[''] after:h-[2px] after:bg-[#ca1515]">
                        Shop Now
                    </button>
                </div>
            </div>
            <div className="grid grid-rows-4 gap-[10px] sm:gap-0 sm:grid-rows-2 sm:grid-cols-2 sm:gap-x-[10px] sm:h-[70vh] md2:flex-1">
                <div className="flex items-center pl-[30px] h-[34vh] bg-[url('/src/assets/images/categories/category-2.jpg')] bg-no-repeat bg-cover bg-center">
                    <div className="justify-self-center">
                        <h4 className="font-bold text-[24px]">Men's Fashion</h4>
                        <p className="text-[#666666] text-sm mb-[15px]">
                            358 items
                        </p>
                        <button className="pb-[3px] font-semibold text-sm uppercase relative after:w-full after:block after:absolute after:left-0 after:bottom-0 after:content-[''] after:h-[2px] after:bg-[#ca1515]">
                            Shop Now
                        </button>
                    </div>
                </div>
                <div className="flex items-center pl-[30px] h-[34vh] bg-[url('/src/assets/images/categories/category-3.jpg')] bg-no-repeat bg-cover bg-center">
                    <div className="justify-self-center">
                        <h4 className="font-bold text-[24px]">
                            Kids's Fashion
                        </h4>
                        <p className="text-[#666666] text-sm mb-[15px]">
                            358 items
                        </p>
                        <button className="pb-[3px] font-semibold text-sm uppercase relative after:w-full after:block after:absolute after:left-0 after:bottom-0 after:content-[''] after:h-[2px] after:bg-[#ca1515]">
                            Shop Now
                        </button>
                    </div>
                </div>
                <div className="flex items-center pl-[30px] h-[34vh] bg-[url('/src/assets/images/categories/category-4.jpg')] bg-no-repeat bg-cover bg-center">
                    <div className="justify-self-center">
                        <h4 className="font-bold text-[24px]">Cosmetics</h4>
                        <p className="text-[#666666] text-sm mb-[15px]">
                            358 items
                        </p>
                        <button className="pb-[3px] font-semibold text-sm uppercase relative after:w-full after:block after:absolute after:left-0 after:bottom-0 after:content-[''] after:h-[2px] after:bg-[#ca1515]">
                            Shop Now
                        </button>
                    </div>
                </div>
                <div className="flex items-center pl-[30px] h-[34vh] bg-[url('/src/assets/images/categories/category-5.jpg')] bg-no-repeat bg-cover bg-center">
                    <div className="justify-self-center">
                        <h4 className="font-bold text-[24px]">Accessories</h4>
                        <p className="text-[#666666] text-sm mb-[15px]">
                            358 items
                        </p>
                        <button className="pb-[3px] font-semibold text-sm uppercase relative after:w-full after:block after:absolute after:left-0 after:bottom-0 after:content-[''] after:h-[2px] after:bg-[#ca1515]">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;

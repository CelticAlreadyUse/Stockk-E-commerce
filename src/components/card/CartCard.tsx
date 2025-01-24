const CartCard = () => {
    return (
        <div className="">
          <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>

    <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
      <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
        <div className="space-y-6">
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
              <a href="#" className="shrink-0 md:order-1">
                <img className="h-20 w-20 dark:hidden" src="data:image/jpeg;base64,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" alt="imac image" />
                <img className="hidden h-20 w-20 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="imac image" />
              </a>

              <label className="sr-only">Choose quantity:</label>
              <div className="flex items-center justify-between md:order-3 md:justify-end">
                <div className="flex items-center">
                  <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                    </svg>
                  </button>
                  <input type="text" id="counter-input" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value="2" required />
                  <button type="button" id="increment-button" data-input-counter-increment="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                    </svg>
                  </button>
                </div>
                <div className="text-end md:order-4 md:w-32">
                  <p className="text-base font-bold text-gray-900 dark:text-white">$1,499</p>
                </div>
              </div>

              <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                <a href="#" className="text-base font-medium text-gray-900 hover:underline dark:text-white">Lato-Lato abad petengahan khas mojokerto (pernah di pakai mas Rusdi) Original</a>

                <div className="flex items-center gap-4">
                  <button type="button" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                    <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                    </svg>
                    Add to Favorites
                  </button>

                  <button type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                    <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
              <a href="#" className="shrink-0 md:order-1">
                <img className="h-20 w-20 dark:hidden" src="data:image/jpeg;base64,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" alt="imac image" />
                <img className="hidden h-20 w-20 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg" alt="imac image" />
              </a>

              <label className="sr-only">Choose quantity:</label>
              <div className="flex items-center justify-between md:order-3 md:justify-end">
                <div className="flex items-center">
                  <button type="button" id="decrement-button-2" data-input-counter-decrement="counter-input-2" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                    </svg>
                  </button>
                  <input type="text" id="counter-input-2" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value="1" required />
                  <button type="button" id="increment-button-2" data-input-counter-increment="counter-input-2" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                    </svg>
                  </button>
                </div>
                <div className="text-end md:order-4 md:w-32">
                  <p className="text-base font-bold text-gray-900 dark:text-white">$598</p>
                </div>
              </div>

              <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                <a href="#" className="text-base font-medium text-gray-900 hover:underline dark:text-white">Sempak Fir'aun 1300 SM Warna Cream</a>

                <div className="flex items-center gap-4">
                  <button type="button" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                    <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                    </svg>
                    Add to Favorites
                  </button>

                  <button type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                    <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
              <a href="#" className="shrink-0 md:order-1">
                <img className="h-20 w-20 dark:hidden" src="data:image/jpeg;base64,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" alt="imac image" />
                <img className="hidden h-20 w-20 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg" alt="imac image" />
              </a>

              <label  className="sr-only">Choose quantity:</label>
              <div className="flex items-center justify-between md:order-3 md:justify-end">
                <div className="flex items-center">
                  <button type="button" id="decrement-button-3" data-input-counter-decrement="counter-input-3" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                    </svg>
                  </button>
                  <input type="text" id="counter-input-3" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value="1" required />
                  <button type="button" id="increment-button-3" data-input-counter-increment="counter-input-3" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                    </svg>
                  </button>
                </div>
                <div className="text-end md:order-4 md:w-32">
                  <p className="text-base font-bold text-gray-900 dark:text-white">$1,799</p>
                </div>
              </div>

              <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                <a href="#" className="text-base font-medium text-gray-900 hover:underline dark:text-white">High heels peninggalan vikings Original</a>

                <div className="flex items-center gap-4">
                  <button type="button" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                    <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                    </svg>
                    Add to Favorites
                  </button>

                  <button type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                    <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
              <a href="#" className="shrink-0 md:order-1">
                <img className="h-20 w-20 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg" alt="imac image" />
                <img className="hidden h-20 w-20 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg" alt="imac image" />
              </a>

              <label className="sr-only">Choose quantity:</label>
              <div className="flex items-center justify-between md:order-3 md:justify-end">
                <div className="flex items-center">
                  <button type="button" id="decrement-button-4" data-input-counter-decrement="counter-input-4" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                    </svg>
                  </button>
                  <input type="text" id="counter-input-4" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value="1" required />
                  <button type="button" id="increment-button-4" data-input-counter-increment="counter-input-4" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                    </svg>
                  </button>
                </div>
                <div className="text-end md:order-4 md:w-32">
                  <p className="text-base font-bold text-gray-900 dark:text-white">$699</p>
                </div>
              </div>

              <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                <a href="#" className="text-base font-medium text-gray-900 hover:underline dark:text-white">Tablet APPLE iPad Pro 12.9" 6th Gen, 128GB, Wi-Fi, Gold</a>

                <div className="flex items-center gap-4">
                  <button type="button" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                    <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                    </svg>
                    Add to Favorites
                  </button>

                  <button type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                    <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
              <a href="#" className="w-20 shrink-0 md:order-1">
                <img className="h-20 w-20 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg" alt="imac image" />
                <img className="hidden h-20 w-20 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg" alt="imac image" />
              </a>

              <label  className="sr-only">Choose quantity:</label>
              <div className="flex items-center justify-between md:order-3 md:justify-end">
                <div className="flex items-center">
                  <button type="button" id="decrement-button-5" data-input-counter-decrement="counter-input-5" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                    </svg>
                  </button>
                  <input type="text" id="counter-input-5" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value="3" required />
                  <button type="button" id="increment-button-5" data-input-counter-increment="counter-input-5" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                    </svg>
                  </button>
                </div>
                <div className="text-end md:order-4 md:w-32">
                  <p className="text-base font-bold text-gray-900 dark:text-white">$2,997</p>
                </div>
              </div>

              <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                <a href="#" className="text-base font-medium text-gray-900 hover:underline dark:text-white">APPLE iPhone 15 5G phone, 256GB, Gold</a>

                <div className="flex items-center gap-4">
                  <button type="button" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                    <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                    </svg>
                    Add to Favorites
                  </button>

                  <button type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                    <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden xl:mt-8 xl:block">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">People also bought</h3>
          <div className="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
            <div className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <a href="#" className="overflow-hidden rounded">
                <img className="mx-auto h-44 w-44 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="imac image" />
                <img className="mx-auto hidden h-44 w-44 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="imac image" />
              </a>
              <div>
                <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">iMac 27”</a>
                <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">This generation has some improvements, including a longer continuous battery life.</p>
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  <span className="line-through"> $399,99 </span>
                </p>
                <p className="text-lg font-bold leading-tight text-red-600 dark:text-red-500">$299</p>
              </div>
              <div className="mt-6 flex items-center gap-2.5">
                <button data-tooltip-target="favourites-tooltip-1" type="button" className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"></path>
                  </svg>
                </button>
                <div id="favourites-tooltip-1" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                  Add to favourites
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button type="button" className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4" />
                  </svg>
                  Add to cart
                </button>
              </div>
            </div>
            <div className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <a href="#" className="overflow-hidden rounded">
                <img className="mx-auto h-44 w-44 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg" alt="imac image" />
                <img className="mx-auto hidden h-44 w-44 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg" alt="imac image" />
              </a>
              <div>
                <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">Playstation 5</a>
                <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">This generation has some improvements, including a longer continuous battery life.</p>
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  <span className="line-through"> $799,99 </span>
                </p>
                <p className="text-lg font-bold leading-tight text-red-600 dark:text-red-500">$499</p>
              </div>
              <div className="mt-6 flex items-center gap-2.5">
                <button data-tooltip-target="favourites-tooltip-2" type="button" className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"></path>
                  </svg>
                </button>
                <div id="favourites-tooltip-2" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                  Add to favourites
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button type="button" className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4" />
                  </svg>
                  Add to cart
                </button>
              </div>
            </div>
            <div className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <a href="#" className="overflow-hidden rounded">
                <img className="mx-auto h-44 w-44 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg" alt="imac image" />
                <img className="mx-auto hidden h-44 w-44 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg" alt="imac image" />
              </a>
              <div>
                <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">Apple Watch Series 8</a>
                <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">This generation has some improvements, including a longer continuous battery life.</p>
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  <span className="line-through"> $1799,99 </span>
                </p>
                <p className="text-lg font-bold leading-tight text-red-600 dark:text-red-500">$1199</p>
              </div>
              <div className="mt-6 flex items-center gap-2.5">
                <button data-tooltip-target="favourites-tooltip-3" type="button" className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"></path>
                  </svg>
                </button>
                <div id="favourites-tooltip-3" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                  Add to favourites
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>

                <button type="button" className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4" />
                  </svg>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
          <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

          <div className="space-y-4">
            <div className="space-y-2">
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">$7,592.00</dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                <dd className="text-base font-medium text-green-600">-$299.00</dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">$99</dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">$799</dd>
              </dl>
            </div>

            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
              <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
              <dd className="text-base font-bold text-gray-900 dark:text-white">$8,191.00</dd>
            </dl>
          </div>

          <a href="#" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Proceed to Checkout</a>

          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
            <a href="#" title="" className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
              Continue Shopping
              <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </a>
          </div>
        </div>

        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
          <form className="space-y-4">
            <div>
              <label  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Do you have a voucher or gift card? </label>
              <input type="text" id="voucher" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="" required />
            </div>
            <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Apply Code</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
    )
}

export default CartCard
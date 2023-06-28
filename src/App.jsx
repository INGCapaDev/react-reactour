function App() {
  return (
    <>
      <section id="hero">
        <div class="section-container mb-40 pt-16">
          <img src="images/logo.svg" alt="" class="mx-auto my-16" />

          <h3>A history of everything you copy</h3>

          <p class="section-content mb-10 text-2xl">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>

          {/* <!-- Button Container --> */}
          <div class="button-container">
            <a
              href="#"
              class="rounded-full bg-strongCyan p-4 px-8 shadow-lg duration-200 hover:opacity-80"
            >
              Download for iOS
            </a>
            <a
              href="#"
              class="rounded-full bg-lightBlue p-4 px-8 shadow-lg duration-200 hover:opacity-80"
            >
              Download for Mac
            </a>
          </div>
        </div>
      </section>

      {/* <!-- Snippets Section --> */}
      <section id="snippets">
        <div class="section-container my-20">
          <h3>Keep track of your snippets</h3>
          <p class="section-content mb-24 text-xl">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>
      </section>

      {/* <!-- Features Section --> */}
      <section id="features">
        <div class="section-container my-20">
          <div class="relative flex flex-col md:flex-row md:space-x-32">
            {/* <!-- Image --> */}
            <div class="md:w-1/2">
              <img
                src="images/image-computer.png"
                alt=""
                class="right-[50%] top-0 md:absolute"
              />
            </div>

            {/* <!-- Items Container --> */}
            <div class="mb-24 mt-16 flex flex-col space-y-12 text-xl md:mb-60 md:w-1/2 md:pl-16 md:text-left">
              {/* <!-- Item 1 --> */}
              <div>
                <h5>Quick Search</h5>
                <p class="max-w-md text-grayishBlue">
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </p>
              </div>
              {/* <!-- Item 2 --> */}
              <div>
                <h5>iCloud Sync</h5>
                <p class="max-w-md text-grayishBlue">
                  Instantly saves and syncs snippets across all your devices.
                </p>
              </div>
              {/* <!-- Item 3 --> */}
              <div>
                <h5>Completely History</h5>
                <p class="max-w-md text-grayishBlue">
                  Retrieve any snippets from the first moment you started using
                  the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Access Anywhere Section --> */}
      <section id="access">
        <div class="section-container my-20">
          <h3>Access Clipboard Anywhere</h3>
          <p class="section-content mb-24 text-xl">
            Whether you’re on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>

          <img src="images/image-devices.png" alt="" class="mx-auto" />
        </div>
      </section>

      {/* <!-- Supercharge Section --> */}
      <section id="supercharge">
        <div class="section-container my-20">
          <h3>Supercharge your workflow</h3>
          <p class="section-content mb-16 text-xl">
            We've got the tools to boost your productivity.
          </p>
          {/* <!-- Items Container --> */}
          <div class="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-x-12 md:space-y-0">
            {/* <!-- Item 1 --> */}
            <div class="flex flex-col items-center space-y-5">
              <img src="images/icon-blacklist.svg" alt="" class="mb-6" />
              <h5>Create Blacklists</h5>
              <p class="max-w-md text-grayishBlue">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>

            {/* <!-- Item 2 --> */}
            <div class="flex flex-col items-center space-y-5">
              <img src="images/icon-text.svg" alt="" class="mb-6" />
              <h5>Plain Text Snippets</h5>
              <p class="max-w-md text-grayishBlue">
                Remove unwanted formatting from copied text for a consistent
                look.
              </p>
            </div>

            {/* <!-- Item 3 --> */}
            <div class="flex flex-col items-center space-y-5">
              <img src="images/icon-preview.svg" alt="" class="mb-6" />
              <h5>Sneak Preview</h5>
              <p class="max-w-md text-grayishBlue">
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- References Section --> */}
      <section id="references">
        <div class="mx-auto my-44 flex max-w-6xl flex-col items-center justify-between space-y-16 px-10 md:flex-row md:space-y-0">
          <img src="images/logo-google.png" alt="" />
          <img src="images/logo-ibm.png" alt="" />
          <img src="images/logo-microsoft.png" alt="" />
          <img src="images/logo-hp.png" alt="" />
          <img src="images/logo-vector-graphics.png" alt="" />
        </div>
      </section>

      {/* <!-- Bottom CTA Section --> */}
      <section id="bottom">
        <div class="section-container my-20">
          <h3>Clipboard for iOS and MacOS</h3>
          <p class="section-content mb-10 text-xl">
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you're ready to start adding to your clipboard.
          </p>

          {/* <!-- Button Container --> */}
          <div class="button-container">
            <a
              href="#"
              class="rounded-full bg-strongCyan p-4 px-8 shadow-lg duration-200 hover:opacity-80"
            >
              Download for iOS
            </a>
            <a
              href="#"
              class="rounded-full bg-lightBlue p-4 px-8 shadow-lg duration-200 hover:opacity-80"
            >
              Download for Mac
            </a>
          </div>
        </div>
      </section>

      <footer class="bg-gray-50">
        <div class="section-container">
          <div class="flex flex-col items-center justify-between md:flex-row">
            {/* <!-- Image --> */}
            <img src="images/logo.svg" alt="" class="scale-50" />
            {/* <!-- Container for Menus & Social --> */}
            <div class="mb-10 flex flex-1 flex-col items-center justify-between space-y-6 text-grayishBlue md:mb-0 md:flex-row md:space-y-0">
              {/* <!-- Menus --> */}
              <div class="flex flex-col space-y-4 md:ml-24 md:flex-row md:space-x-24 md:space-y-0">
                {/* <!-- Menu 1 --> */}
                <div class="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="#" class="hover:text-strongCyan">
                      FAQs
                    </a>
                  </div>
                  <div>
                    <a href="#" class="hover:text-strongCyan">
                      Contact Us
                    </a>
                  </div>
                </div>
                {/* <!-- Menu 2 --> */}
                <div class="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="#" class="hover:text-strongCyan">
                      Privacy Policy
                    </a>
                  </div>
                  <div>
                    <a href="#" class="hover:text-strongCyan">
                      Press Kit
                    </a>
                  </div>
                </div>
                {/* <!-- Menu 3 --> */}
                <div class="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="#" class="hover:text-strongCyan">
                      Install Guide
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- Social Icons --> */}
              <div class="flex w-32 justify-between py-1">
                <a href="#">
                  <img
                    src="images/icon-facebook.svg"
                    alt=""
                    class="ficon duration-200"
                  />
                </a>
                <a href="#">
                  <img
                    src="images/icon-twitter.svg"
                    alt=""
                    class="ficon duration-200"
                  />
                </a>
                <a href="#">
                  <img
                    src="images/icon-instagram.svg"
                    alt=""
                    class="ficon duration-200"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

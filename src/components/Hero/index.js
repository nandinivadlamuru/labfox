"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = require("next/link");
var Hero = function () {
    return (<>
    
      <section id="home" className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-black md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                If it can be Imagined,It can be built with Labfox
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                We help you transform ideas into a scalable business with the right technological solutions.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <link_1.default href="https://nextjstemplates.com/templates/saas-starter-startup" className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80">
                    Know More!
                  </link_1.default>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </section>
    </>);
};
exports.default = Hero;

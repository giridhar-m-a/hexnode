import Image from "next/image";
import banner1 from "@/assets/baner.webp";
import banner2 from "@/assets/banner-bw-wb.webp";
import idc from "@/assets/idc.webp";
import gartener from "@/assets/gartner.webp";
import forrester from "@/assets/forrester.webp";
import Link from "next/link";
import { FEATURE_IMAGES } from "./__constants/features.images";
import { ACCORDIAN_ITEMS } from "./__constants/AccordianItems";
import Accordian from "./__components/AccordionItem";
import ReviewSlider from "./__components/ReviewSlider";
import { Reviews } from "./__constants/reviews";
import PartenerCarousal from "./__components/PartenerCarousal";
import hexnode from "@/assets/hexnode-app-icon.svg";
export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <div
        className="bg-background text-foreground h-[83vh] p-[85px_0_30px]  xl:p-[50px_0_60px]"
        id="hero"
      >
        <div className="w-[88%] max-w-[1300px] mx-auto">
          <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-between">
            <div className="flex flex-col justify-center h-full w-full max-w-full md:max-w-[554px] order-2 xl:order-1">
              <h1 className="text-[16px] font-semibold mb-[10px] text-text_accent leading-[20px] text-center lg:text-left pt-10 lg:pt-0">
                Unified Endpoint Management
              </h1>
              <h1 className="text-[34px] leading-[44px] text-center lg:text-left lg:text-[42px] lg:leading-[53px] xl:text-left font-bold antialiased">
                Gain control and visibility over your endpoints
              </h1>
              <div className="mb-[20px]">
                <p className="font-normal text-[18px] leading-[28px] text-center xl:text-left text-string">
                  Hexnode&apos;s UEM solution allows you to simplify endpoint
                  management and free up IT. Focus on the big picture while
                  Hexnode works on the details.
                </p>
              </div>
            </div>
            <div className="w-full max-w-full md:max-w-[610px] order-1 xl:order-2">
              <div className="w-full max-w-[610px] relative mx-auto">
                <div className="relative h-full w-full max-w-[610px] flex justify-center items-center">
                  <Image
                    src={banner2}
                    alt="Hexnode UEM"
                    fetchPriority="high"
                    width={610}
                    height={465}
                    decoding="async"
                    data-nimg="1"
                    className="aspect-[80/61] w-full h-full object-cover"
                  />
                  <Image
                    src={banner1}
                    alt="Hexnode UEM"
                    fetchPriority="high"
                    width={610}
                    height={465}
                    decoding="async"
                    data-nimg="1"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* parteners */}
      <div className="bg-bg_accent md:py-[30px]">
        <div className="w-[88%] max-w-[1300px] mx-auto">
          <div className="flex flex-col max-md:items-center md:flex-row  justify-center mx-[0px] md:justify-between md:mx-[-10px] lg:mx-[-25px] xl:mx-[-45px]">
            <Link
              className="group max-w-[340px] md:max-w-[27%] flex-[0_0_100%] md:flex-[0_0_27%] px-[0px] py-[40px] md:py-[0px] md:px-[10px] lg:px-[25px] xl:px-[45px]"
              target="_blank"
              href={
                "https://www.hexnode.com/blogs/mitsogo-hexnode-named-a-leader-in-idc-marketscape-worldwide-uem-software-for-apple-devices-2024-vendor-assessment/"
              }
            >
              <div className="flex flex-col items-center md:items-baseline banner_accolades-content__tfXj3 space-y-[15px]">
                <Image src={idc} alt="IDC" width={83} height={25} />
                <p className="text-[14px] leading-[22px] text-center md:text-left text-string">
                  Hexnode is listed as a leader and a major player in IDC
                  MarketScape UEM Vendors Assessment Reports 2024.
                </p>
              </div>
            </Link>
            <div className="w-[107px] md:w-[1px] bg-string basis-[1px] h-full"></div>
            <Link
              className="group max-w-[340px] md:max-w-[27%] flex-[0_0_100%] md:flex-[0_0_27%] px-[0px] py-[40px] md:py-[0px] md:px-[10px] lg:px-[25px] xl:px-[45px]"
              target="_blank"
              href={
                "https://www.hexnode.com/blogs/hexnode-included-in-the-unified-endpoint-management-landscape-report/"
              }
            >
              <div className="flex flex-col items-center md:items-baseline banner_accolades-content__tfXj3 space-y-[15px]">
                <Image src={gartener} alt="Gartener" width={110} height={25} />
                <p className="text-[14px] leading-[22px] text-center md:text-left text-string">
                  Forrester includes Hexnode as a Notable vendor in The Unified
                  Endpoint Management Landscape, Q3 2023.
                </p>
              </div>
            </Link>
            <div className="w-[107px] md:w-[1px] bg-white basis-[1px] h-full"></div>
            <Link
              className="group max-w-[340px] md:max-w-[27%] flex-[0_0_100%] md:flex-[0_0_27%] px-[0px] py-[40px] md:py-[0px] md:px-[10px] lg:px-[25px] xl:px-[45px]"
              target="_blank"
              href={
                "https://www.hexnode.com/blogs/mitsogo-hexnode-named-a-leader-in-idc-marketscape-worldwide-uem-software-for-apple-devices-2024-vendor-assessment/"
              }
            >
              <div className="flex flex-col items-center md:items-baseline banner_accolades-content__tfXj3 space-y-[15px]">
                <Image
                  src={forrester}
                  alt="Forrester"
                  width={156}
                  height={25}
                />
                <p className="text-[14px] leading-[22px] text-center md:text-left text-string">
                  Forrester includes Hexnode as a Notable vendor in The Unified
                  Endpoint Management Landscape, Q3 2023.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* why hexnode */}
      <div>
        <section className="why-hex py-[60px] lg:py-[80px] bg-[#F7F7F7] relative">
          <div
            className="absolute top-[-65px] xl:top-[-74px] opacity-0 w-[0px] h-[0px] m-0"
            id="why-hexnode"
          ></div>
          <div className="w-[88%] mx-auto max-w-[1300px]">
            <h2 className="antialiased text-[32px] md:text-[40px] leading-[40px] md:leading-[1.3] text-center font-bold text-[#020a19] pb-[10px] max-w-[800px] mx-auto">
              Why Hexnode?
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-start md:justify-between relative lg:w-[88%] mx-auto">
            {/* Adapt to the new normal */}
            <div className="why-hex__grid0 max-w-[340px] md:max-w-[48%] xl:max-w-[480px] flex items-center basis-full md:basis-[47%] lg:basis-[100%] xl:basis-1/2 group flex-shrink-0 my-[10px] md:my-[20px] xl:my-0 xl:h-[320px] delay-[50ms] transition-all duration-[0.3s]  ease-in-out">
              <div className="why-hex__wrap0 relative z-[10] p-[20px] lg:p-[40px] lg:pb-[20px] rounded-[16px] border border-[#D7D7D7] bg-[#FFFFFF] my-[10px] first:mt-0 last:mb-0 group-hover:h-[320px] group delay-[50ms] transition-all duration-[0.3s] ">
                <div>
                  {" "}
                  <div className="flex items-center gap-4">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                      >
                        <g id="icon" transform="translate(-350 -1026)">
                          <rect
                            id="bg"
                            width="40"
                            height="40"
                            rx="6"
                            transform="translate(350 1026)"
                            fill="#f8faff"
                          ></rect>
                          <g
                            id="icon-2"
                            data-name="icon"
                            transform="translate(360.637 1033.314)"
                          >
                            <path
                              id="Path_4886"
                              data-name="Path 4886"
                              d="M31.112,22.38a.25.25,0,0,0-.274.055l-1.547,1.56L27.217,21.9a6.527,6.527,0,0,0-.766-8.236A6.347,6.347,0,0,0,23.1,11.88V8.921h2.188a.254.254,0,0,0,.168-.442l-3.372-3.4a.25.25,0,0,0-.355,0l-3.381,3.41a.255.255,0,0,0-.054.276.251.251,0,0,0,.232.156h2.187v2.958a6.345,6.345,0,0,0-3.355,1.788,6.526,6.526,0,0,0-.766,8.236l-2.075,2.092-1.547-1.56a.25.25,0,0,0-.274-.055.253.253,0,0,0-.155.234v4.822a.253.253,0,0,0,.251.254h4.782a.254.254,0,0,0,.168-.442L16.2,25.7l2.074-2.092c.15.1.3.2.461.291a6.38,6.38,0,0,0,3.163.836h0a6.524,6.524,0,0,0,.719-.04,6.356,6.356,0,0,0,2.9-1.087L27.6,25.7l-1.547,1.56a.255.255,0,0,0-.054.276.252.252,0,0,0,.232.157h4.782a.252.252,0,0,0,.251-.254V22.614A.252.252,0,0,0,31.112,22.38Z"
                              transform="translate(-12.54 -5.004)"
                              fill="#3371ed"
                              stroke="#3371ed"
                              stroke-width="1"
                            ></path>
                            <ellipse
                              id="Ellipse_25"
                              data-name="Ellipse 25"
                              cx="3.046"
                              cy="3.048"
                              rx="3.046"
                              ry="3.048"
                              transform="translate(6.317 10.111)"
                              fill="#e0eafd"
                              stroke="#3371ed"
                              stroke-width="1"
                            ></ellipse>
                          </g>
                        </g>
                      </svg>
                    </div>

                    <h4 className="antialiased text-[20px] lg:text-[24px] leading-[32px] text-left font-bold text-[#020a19] ">
                      Adapt to the new normal
                    </h4>
                  </div>
                  <p className="text-[16px] lg:text-[18px] leading-[28px] text-left font-regular text-[#333333] mt-[15px] mb-[15px] lg:mb-[20px]">
                    Hybrid, remote or onsite, you can trust Hexnode UEM to
                    deliver. Create policies that cater to your organization’s
                    protocols. Whether it be BYOD, COPE, or platform limited,
                    Hexnode can manage it all.
                  </p>
                </div>
                <Link
                  rel="noreferrer"
                  className="text-[16px] lg:text-[18px] leading-[28px] text-[#DD0735] font-semibold hidden md:inline-block lg:pb-[10px] delay-[50ms] transition-all duration-[0.3s] ease-out xl:absolute xl:opacity-0 xl:invisible xl:group-hover:opacity-[1] xl:group-hover:visible"
                  href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
                >
                  Try Hexnode on your endpoints
                </Link>
              </div>
            </div>
            {/* Zero compromise security */}
            <div className="why-hex__grid0 max-w-[340px] md:max-w-[48%] xl:max-w-[480px] flex items-center basis-full md:basis-[47%] lg:basis-[100%] xl:basis-1/2 group flex-shrink-0 my-[10px] md:my-[20px] xl:my-0 xl:h-[320px] delay-[50ms] transition-all duration-[0.3s]  ease-in-out">
              <div className="why-hex__wrap0 relative z-[10] p-[20px] lg:p-[40px] lg:pb-[20px] rounded-[16px] border border-[#D7D7D7] bg-[#FFFFFF] my-[10px] first:mt-0 last:mb-0 group-hover:h-[320px] group delay-[50ms] transition-all duration-[0.3s] ">
                <div>
                  {" "}
                  <div className="flex items-center gap-4">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                      >
                        <g id="icon" transform="translate(-350 -1026)">
                          <rect
                            id="bg"
                            width="40"
                            height="40"
                            rx="6"
                            transform="translate(350 1026)"
                            fill="#f8faff"
                          ></rect>
                          <g
                            id="icon-2"
                            data-name="icon"
                            transform="translate(360.637 1033.314)"
                          >
                            <path
                              id="Path_4886"
                              data-name="Path 4886"
                              d="M31.112,22.38a.25.25,0,0,0-.274.055l-1.547,1.56L27.217,21.9a6.527,6.527,0,0,0-.766-8.236A6.347,6.347,0,0,0,23.1,11.88V8.921h2.188a.254.254,0,0,0,.168-.442l-3.372-3.4a.25.25,0,0,0-.355,0l-3.381,3.41a.255.255,0,0,0-.054.276.251.251,0,0,0,.232.156h2.187v2.958a6.345,6.345,0,0,0-3.355,1.788,6.526,6.526,0,0,0-.766,8.236l-2.075,2.092-1.547-1.56a.25.25,0,0,0-.274-.055.253.253,0,0,0-.155.234v4.822a.253.253,0,0,0,.251.254h4.782a.254.254,0,0,0,.168-.442L16.2,25.7l2.074-2.092c.15.1.3.2.461.291a6.38,6.38,0,0,0,3.163.836h0a6.524,6.524,0,0,0,.719-.04,6.356,6.356,0,0,0,2.9-1.087L27.6,25.7l-1.547,1.56a.255.255,0,0,0-.054.276.252.252,0,0,0,.232.157h4.782a.252.252,0,0,0,.251-.254V22.614A.252.252,0,0,0,31.112,22.38Z"
                              transform="translate(-12.54 -5.004)"
                              fill="#3371ed"
                              stroke="#3371ed"
                              stroke-width="1"
                            ></path>
                            <ellipse
                              id="Ellipse_25"
                              data-name="Ellipse 25"
                              cx="3.046"
                              cy="3.048"
                              rx="3.046"
                              ry="3.048"
                              transform="translate(6.317 10.111)"
                              fill="#e0eafd"
                              stroke="#3371ed"
                              stroke-width="1"
                            ></ellipse>
                          </g>
                        </g>
                      </svg>
                    </div>

                    <h4 className="antialiased text-[20px] lg:text-[24px] leading-[32px] text-left font-bold text-[#020a19] ">
                      Zero compromise security
                    </h4>
                  </div>
                  <p className="text-[16px] lg:text-[18px] leading-[28px] text-left font-regular text-[#333333] mt-[15px] mb-[15px] lg:mb-[20px]">
                    Enable full-fledged device encryption, data loss prevention,
                    and all-rounded device security with Hexnode UEM. Be at the
                    bleeding edge of device security without any compromises.
                  </p>
                </div>
                <Link
                  rel="noreferrer"
                  className="text-[16px] lg:text-[18px] leading-[28px] text-[#DD0735] font-semibold hidden md:inline-block lg:pb-[10px] delay-[50ms] transition-all duration-[0.3s] ease-out xl:absolute xl:opacity-0 xl:invisible xl:group-hover:opacity-[1] xl:group-hover:visible"
                  href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
                >
                  Try Hexnode on your endpoints
                </Link>
              </div>
            </div>
            {/* Get more done with automation */}
            <div className="why-hex__grid0 max-w-[340px] md:max-w-[48%] xl:max-w-[480px] flex items-center basis-full md:basis-[47%] lg:basis-[100%] xl:basis-1/2 group flex-shrink-0 my-[10px] md:my-[20px] xl:my-0 xl:h-[320px] delay-[50ms] transition-all duration-[0.3s]  ease-in-out">
              <div className="why-hex__wrap0 relative z-[10] p-[20px] lg:p-[40px] lg:pb-[20px] rounded-[16px] border border-[#D7D7D7] bg-[#FFFFFF] my-[10px] first:mt-0 last:mb-0 group-hover:h-[320px] group delay-[50ms] transition-all duration-[0.3s] ">
                <div>
                  <div className="flex items-center gap-4">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                      >
                        <g id="icon" transform="translate(-350 -1026)">
                          <rect
                            id="bg"
                            width="40"
                            height="40"
                            rx="6"
                            transform="translate(350 1026)"
                            fill="#f8faff"
                          ></rect>
                          <g
                            id="icon-2"
                            data-name="icon"
                            transform="translate(360.637 1033.314)"
                          >
                            <path
                              id="Path_4886"
                              data-name="Path 4886"
                              d="M31.112,22.38a.25.25,0,0,0-.274.055l-1.547,1.56L27.217,21.9a6.527,6.527,0,0,0-.766-8.236A6.347,6.347,0,0,0,23.1,11.88V8.921h2.188a.254.254,0,0,0,.168-.442l-3.372-3.4a.25.25,0,0,0-.355,0l-3.381,3.41a.255.255,0,0,0-.054.276.251.251,0,0,0,.232.156h2.187v2.958a6.345,6.345,0,0,0-3.355,1.788,6.526,6.526,0,0,0-.766,8.236l-2.075,2.092-1.547-1.56a.25.25,0,0,0-.274-.055.253.253,0,0,0-.155.234v4.822a.253.253,0,0,0,.251.254h4.782a.254.254,0,0,0,.168-.442L16.2,25.7l2.074-2.092c.15.1.3.2.461.291a6.38,6.38,0,0,0,3.163.836h0a6.524,6.524,0,0,0,.719-.04,6.356,6.356,0,0,0,2.9-1.087L27.6,25.7l-1.547,1.56a.255.255,0,0,0-.054.276.252.252,0,0,0,.232.157h4.782a.252.252,0,0,0,.251-.254V22.614A.252.252,0,0,0,31.112,22.38Z"
                              transform="translate(-12.54 -5.004)"
                              fill="#3371ed"
                              stroke="#3371ed"
                              stroke-width="1"
                            ></path>
                            <ellipse
                              id="Ellipse_25"
                              data-name="Ellipse 25"
                              cx="3.046"
                              cy="3.048"
                              rx="3.046"
                              ry="3.048"
                              transform="translate(6.317 10.111)"
                              fill="#e0eafd"
                              stroke="#3371ed"
                              stroke-width="1"
                            ></ellipse>
                          </g>
                        </g>
                      </svg>
                    </div>

                    <h4 className="antialiased text-[20px] lg:text-[24px] leading-[32px] text-left font-bold text-[#020a19] ">
                      Get more done with automation
                    </h4>
                  </div>
                  <p className="text-[16px] lg:text-[18px] leading-[28px] text-left font-regular text-[#333333] mt-[15px] mb-[15px] lg:mb-[20px]">
                    Hexnode UEM automation features help free up IT’s time spent
                    on mundane and repetitive tasks. Do hours’ worth of work in
                    a few minutes.
                  </p>
                </div>
                <Link
                  rel="noreferrer"
                  className="text-[16px] lg:text-[18px] leading-[28px] text-[#DD0735] font-semibold hidden md:inline-block lg:pb-[10px] delay-[50ms] transition-all duration-[0.3s] ease-out xl:absolute xl:opacity-0 xl:invisible xl:group-hover:opacity-[1] xl:group-hover:visible"
                  href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
                >
                  Try Hexnode on your endpoints
                </Link>
              </div>
            </div>
            {/* Unified Policy Management */}
            <div className="why-hex__grid0 max-w-[340px] md:max-w-[48%] xl:max-w-[480px] flex items-center basis-full md:basis-[47%] lg:basis-[100%] xl:basis-1/2 group flex-shrink-0 my-[10px] md:my-[20px] xl:my-0 xl:h-[320px] delay-[50ms] transition-all duration-[0.3s]  ease-in-out">
              <div className="why-hex__wrap0 relative z-[10] p-[20px] lg:p-[40px] lg:pb-[20px] rounded-[16px] border border-[#D7D7D7] bg-[#FFFFFF] my-[10px] first:mt-0 last:mb-0 group-hover:h-[320px] group delay-[50ms] transition-all duration-[0.3s] ">
                <div>
                  {" "}
                  <div className="flex items-center gap-4">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                      >
                        <g id="icon" transform="translate(-350 -1026)">
                          <rect
                            id="bg"
                            width="40"
                            height="40"
                            rx="6"
                            transform="translate(350 1026)"
                            fill="#f8faff"
                          ></rect>
                          <g
                            id="icon-2"
                            data-name="icon"
                            transform="translate(360.637 1033.314)"
                          >
                            <path
                              id="Path_4886"
                              data-name="Path 4886"
                              d="M31.112,22.38a.25.25,0,0,0-.274.055l-1.547,1.56L27.217,21.9a6.527,6.527,0,0,0-.766-8.236A6.347,6.347,0,0,0,23.1,11.88V8.921h2.188a.254.254,0,0,0,.168-.442l-3.372-3.4a.25.25,0,0,0-.355,0l-3.381,3.41a.255.255,0,0,0-.054.276.251.251,0,0,0,.232.156h2.187v2.958a6.345,6.345,0,0,0-3.355,1.788,6.526,6.526,0,0,0-.766,8.236l-2.075,2.092-1.547-1.56a.25.25,0,0,0-.274-.055.253.253,0,0,0-.155.234v4.822a.253.253,0,0,0,.251.254h4.782a.254.254,0,0,0,.168-.442L16.2,25.7l2.074-2.092c.15.1.3.2.461.291a6.38,6.38,0,0,0,3.163.836h0a6.524,6.524,0,0,0,.719-.04,6.356,6.356,0,0,0,2.9-1.087L27.6,25.7l-1.547,1.56a.255.255,0,0,0-.054.276.252.252,0,0,0,.232.157h4.782a.252.252,0,0,0,.251-.254V22.614A.252.252,0,0,0,31.112,22.38Z"
                              transform="translate(-12.54 -5.004)"
                              fill="#3371ed"
                              stroke="#3371ed"
                              stroke-width="1"
                            ></path>
                            <ellipse
                              id="Ellipse_25"
                              data-name="Ellipse 25"
                              cx="3.046"
                              cy="3.048"
                              rx="3.046"
                              ry="3.048"
                              transform="translate(6.317 10.111)"
                              fill="#e0eafd"
                              stroke="#3371ed"
                              stroke-width="1"
                            ></ellipse>
                          </g>
                        </g>
                      </svg>
                    </div>

                    <h4 className="antialiased text-[20px] lg:text-[24px] leading-[32px] text-left font-bold text-[#020a19] ">
                      Unified Policy Management
                    </h4>
                  </div>
                  <p className="text-[16px] lg:text-[18px] leading-[28px] text-left font-regular text-[#333333] mt-[15px] mb-[15px] lg:mb-[20px]">
                    Create a single policy through Hexnode and apply it on all
                    the devices in your organization. Any platform or form
                    factor, achive single pane of glass management with Hexnode.
                  </p>
                </div>
                <Link
                  rel="noreferrer"
                  className="text-[16px] lg:text-[18px] leading-[28px] text-[#DD0735] font-semibold hidden md:inline-block lg:pb-[10px] delay-[50ms] transition-all duration-[0.3s] ease-out xl:absolute xl:opacity-0 xl:invisible xl:group-hover:opacity-[1] xl:group-hover:visible"
                  href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
                >
                  Try Hexnode on your endpoints
                </Link>
              </div>
              {/* App Icon */}
              <div className="lg:block whyHexnode_hexnodeAnimationWrap__zQlMr hidden xl:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <Image src={hexnode} width={100} height={80} alt="hexnode" />
              </div>
            </div>
          </div>
        </section>

        {/* Powerful endpoint management, built for the devices you choose */}
        <section className="py-[60px] lg:py-[80px] relative">
          <div
            className="absolute top-[-65px] xl:top-[-74px] opacity-0 w-[0px] h-[0px] m-0"
            id="features"
          ></div>
          <div className="w-[88%] mx-auto max-w-[1300px]">
            <h2 className="antialiased text-[32px] md:text-[40px] leading-[40px] md:leading-[1.3] text-center font-bold text-[#020a19] pb-[40px] md:pb-[60px] max-w-[800px] mx-auto">
              Powerful endpoint management, built for the devices you choose
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px] xl:gap-[80px]">
              {/* Zero-touch Enrollment */}
              <div className="max-w-[340px] md:max-w-[380px] mx-auto">
                <div className="rounded-[10px] bg-[#F7F7F7] overflow-hidden w-full max-w-[380px] max-h-[240px]">
                  <Image
                    src={FEATURE_IMAGES.zeroTouch}
                    height={240}
                    width={380}
                    alt="Zero-touch Enrollment"
                  />
                </div>
                <h2 className="antialiased text-[24px] xl:text-[32px] leading-[26px] xl:leading-[40px] text-center md:text-left font-bold text-[#020a19] pb-[15px] pt-[20px] md:pb-[20px] md:pt-[40px]">
                  Zero-touch Enrollment
                </h2>
                <p className="text-[16px] xl:text-[18px] leading-[24px] xl:leading-[28px] text-center md:text-left font-regular text-[#333333]">
                  Onboard endpoints and users with minimal user intervention.
                  Provision devices and set up configurations well before the
                  user gets their hands on.
                </p>
              </div>
              {/* Automation */}
              <div className="max-w-[340px] md:max-w-[380px] mx-auto">
                <div className="rounded-[10px] bg-[#F7F7F7] overflow-hidden w-full max-w-[380px] max-h-[240px]">
                  <Image
                    src={FEATURE_IMAGES.automation}
                    height={240}
                    width={380}
                    alt="Zero-touch Enrollment"
                  />
                </div>
                <h2 className="antialiased text-[24px] xl:text-[32px] leading-[26px] xl:leading-[40px] text-center md:text-left font-bold text-[#020a19] pb-[15px] pt-[20px] md:pb-[20px] md:pt-[40px]">
                  Automation
                </h2>
                <p className="text-[16px] xl:text-[18px] leading-[24px] xl:leading-[28px] text-center md:text-left font-regular text-[#333333]">
                  Automate endpoint compliance with dynamic grouping and breeze
                  through day-to-day IT tasks with scripting capabilities.
                  Hexnode also allows the creation of automated reports.
                </p>
              </div>
              {/* Remote Access Management */}
              <div className="max-w-[340px] md:max-w-[380px] mx-auto">
                <div className="rounded-[10px] bg-[#F7F7F7] overflow-hidden w-full max-w-[380px] max-h-[240px]">
                  <Image
                    src={FEATURE_IMAGES.remoteAccess}
                    height={240}
                    width={380}
                    alt="Zero-touch Enrollment"
                  />
                </div>
                <h2 className="antialiased text-[24px] xl:text-[32px] leading-[26px] xl:leading-[40px] text-center md:text-left font-bold text-[#020a19] pb-[15px] pt-[20px] md:pb-[20px] md:pt-[40px]">
                  Remote Access Management
                </h2>
                <p className="text-[16px] xl:text-[18px] leading-[24px] xl:leading-[28px] text-center md:text-left font-regular text-[#333333]">
                  Hexnode UEM enables the enterprise to manage every single
                  device in the corporate ecosystem for optimal and secure
                  operation.
                </p>
              </div>
              {/* Endpoint Security and Compliance */}
              <div className="max-w-[340px] md:max-w-[380px] mx-auto">
                <div className="rounded-[10px] bg-[#F7F7F7] overflow-hidden w-full max-w-[380px] max-h-[240px]">
                  <Image
                    src={FEATURE_IMAGES.endpointSecurity}
                    height={240}
                    width={380}
                    alt="Endpoint Security and Compliance"
                  />
                </div>
                <h2 className="antialiased text-[24px] xl:text-[32px] leading-[26px] xl:leading-[40px] text-center md:text-left font-bold text-[#020a19] pb-[15px] pt-[20px] md:pb-[20px] md:pt-[40px]">
                  Remote Access Management
                </h2>
                <p className="text-[16px] xl:text-[18px] leading-[24px] xl:leading-[28px] text-center md:text-left font-regular text-[#333333]">
                  Hexnode helps you maintain compliance with international
                  regulatory bodies and set up custom rules for compliance
                  within your business for security purposes.
                </p>
              </div>
              {/*Integrations*/}
              <div className="max-w-[340px] md:max-w-[380px] mx-auto">
                <div className="rounded-[10px] bg-[#F7F7F7] overflow-hidden w-full max-w-[380px] max-h-[240px]">
                  <Image
                    src={FEATURE_IMAGES.integrations}
                    height={240}
                    width={380}
                    alt="Endpoint Security and Compliance"
                  />
                </div>
                <h2 className="antialiased text-[24px] xl:text-[32px] leading-[26px] xl:leading-[40px] text-center md:text-left font-bold text-[#020a19] pb-[15px] pt-[20px] md:pb-[20px] md:pt-[40px]">
                  Integrations
                </h2>
                <p className="text-[16px] xl:text-[18px] leading-[24px] xl:leading-[28px] text-center md:text-left font-regular text-[#333333]">
                  Hexnode&apos;s various integrations make it easy to fit into
                  your current endpoint ecosystem. These integrations include
                  Azure AD, Okta, Android Enterprise, Apple School and Business
                  manager, and many more enterprise and technology integrations.
                </p>
              </div>
              {/*App Management*/}
              <div className="max-w-[340px] md:max-w-[380px] mx-auto">
                <div className="rounded-[10px] bg-[#F7F7F7] overflow-hidden w-full max-w-[380px] max-h-[240px]">
                  <Image
                    src={FEATURE_IMAGES.appManagement}
                    height={240}
                    width={380}
                    alt="Endpoint Security and Compliance"
                  />
                </div>
                <h2 className="antialiased text-[24px] xl:text-[32px] leading-[26px] xl:leading-[40px] text-center md:text-left font-bold text-[#020a19] pb-[15px] pt-[20px] md:pb-[20px] md:pt-[40px]">
                  App Management
                </h2>
                <p className="text-[16px] xl:text-[18px] leading-[24px] xl:leading-[28px] text-center md:text-left font-regular text-[#333333]">
                  Set up a bespoke app store, enable mandatory apps, and ensure
                  endpoints come equipped with all the required applications,
                  custom enterprise apps included.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Paltforms */}
        <section className="py-[60px] lg:pt-[80px] lg:pb-[80px] bg-[#f7f7f7] relative">
          <div
            className="absolute top-[-65px] xl:top-[-74px] opacity-0 w-[0px] h-[0px] m-0"
            id="platforms"
          ></div>
          <div className="sm:w-[88%] sm:max-w-[1300px] sm:mx-auto">
            <h2 className="antialiased text-[32px] md:text-[40px] leading-[40px] md:leading-[1.3] text-center font-bold text-[#020a19] pb-[20px] md:pb-[20px] max-sm:max-w-[1300px] max-sm:w-[88%] mx-auto">
              Multi-platform Endpoint Management
            </h2>
            <p className="hidden md:block text-[16px] md:text-[18px] leading-[28px] text-center font-regular text-[#333333]">
              Devices of varying platforms? Hexnode thrives in a diverse
              environment.
            </p>
            <Accordian items={ACCORDIAN_ITEMS} />
          </div>
        </section>

        {/* Reviews */}

        <section className="pt-[60px] pb-[20px] lg:pt-[80px] lg:pb-[30px] bg-[#FFFFFF] relative">
          <div
            className="absolute top-[-65px] xl:top-[-74px] opacity-0 w-[0px] h-[0px] m-0"
            id="customers"
          ></div>
          <div className="w-[88%] mx-auto max-w-[1300px]">
            <h2 className="antialiased text-[32px] md:text-[40px] leading-[40px] md:leading-[1.3] text-center font-bold text-[#020a19] pb-0 md:pb-[20px]">
              What our customers say
            </h2>
            <div className="flux justify-center w-full">
              <ReviewSlider items={Reviews} />
            </div>
          </div>
        </section>
        {/* Parteners */}
        <section className="w-[88%] mx-auto pb-24">
          <div>
            <PartenerCarousal />
          </div>
        </section>
        {/* End Section */}
        <section className="bg-[#020a19] flex justify-center items-center md:h-[330px]  py-[50px] md:py-0">
          <div className="absolute top-[-65px] xl:top-[-74px] opacity-0 w-[0px] h-[0px] m-0"></div>
          <div className="w-[88%] mx-auto md:max-w-[1300px]">
            <div className="w-full text-center max-w-[1000px] mx-auto">
              <h3 className="text-[30px] text-[#fff] font-bold leading-[38px] text-center mb-[20px] md:text-[42px] md:leading-[1.3]">
                Get Hexnode UEM and start securing your endpoints
              </h3>
            </div>
            <div className="max-w-[325px] md:max-w-[302px] mx-auto">
              <a
                className="bg-[#DD0735] hover:bg-[#AA232F] flex items-center justify-center py-[15px] transition-all duration-300 ease-out rounded-[3px]"
                rel="noreferrer"
                href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
              >
                <span className="undefined uppercase font-normal text-[14px] leading-[20px] text-[#FFFFFF] md:text-[17px] md:leading-[24px]">
                  TRY HEXNODE FOR FREE
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <header className="header-section">
          <div className="header-section__inner">
            <div className="wrapper py-5">
              <div className="header-content">
                <a className="header-logo" href="index.html">
                  <img
                    alt="Chaos Labs"
                    src="_next/static/media/chaos-labs.5daaa768.svg"
                    width={136}
                    height={24}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent" }}
                  />
                </a>
                <div className="mobile-menu-wrap">
                  <ul className="header-menu ">
                    <li className="">
                      <button>
                        Solutions
                        <svg width={24} height={24} fill="none">
                          <path
                            fill="#E5E9EB"
                            fillRule="evenodd"
                            d="M8.293 10.293a1 1 0 0 1 1.414 0L12 12.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </li>
                    <li className="">
                      <a href="customers">Customers</a>
                    </li>
                    <li className="">
                      <button>
                        Resources
                        <svg width={24} height={24} fill="none">
                          <path
                            fill="#E5E9EB"
                            fillRule="evenodd"
                            d="M8.293 10.293a1 1 0 0 1 1.414 0L12 12.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </li>
                    <li className="">
                      <button>
                        Company
                        <svg width={24} height={24} fill="none">
                          <path
                            fill="#E5E9EB"
                            fillRule="evenodd"
                            d="M8.293 10.293a1 1 0 0 1 1.414 0L12 12.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </li>
                  </ul>
                  <ul className="header-btns">
                    <li>
                      <a
                        className="btn btn-primary w-full w-md-auto"
                        href="contact-us"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <button type="button" className="header-toggle-menu false">
                  <svg
                    className="_menu"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19 17C19 17.5523 18.5523 18 18 18H6C5.44772 18 5 17.5523 5 17C5 16.4477 5.44771 16 6 16H18C18.5523 16 19 16.4477 19 17ZM18 13C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11H6C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H18ZM19 7C19 7.55229 18.5523 8 18 8L6 8C5.44772 8 5 7.55229 5 7C5 6.44772 5.44772 6 6 6L18 6C18.5523 6 19 6.44771 19 7Z"
                      fill="white"
                    />
                  </svg>
                  <svg
                    className="_close"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.4099 12L19.7099 5.71C19.8982 5.5217 20.004 5.2663 20.004 5C20.004 4.7337 19.8982 4.47831 19.7099 4.29C19.5216 4.1017 19.2662 3.99591 18.9999 3.99591C18.7336 3.99591 18.4782 4.1017 18.2899 4.29L11.9999 10.59L5.70994 4.29C5.52164 4.1017 5.26624 3.99591 4.99994 3.99591C4.73364 3.99591 4.47824 4.1017 4.28994 4.29C4.10164 4.47831 3.99585 4.7337 3.99585 5C3.99585 5.2663 4.10164 5.5217 4.28994 5.71L10.5899 12L4.28994 18.29C4.19621 18.383 4.12182 18.4936 4.07105 18.6154C4.02028 18.7373 3.99414 18.868 3.99414 19C3.99414 19.132 4.02028 19.2627 4.07105 19.3846C4.12182 19.5064 4.19621 19.617 4.28994 19.71C4.3829 19.8037 4.4935 19.8781 4.61536 19.9289C4.73722 19.9797 4.86793 20.0058 4.99994 20.0058C5.13195 20.0058 5.26266 19.9797 5.38452 19.9289C5.50638 19.8781 5.61698 19.8037 5.70994 19.71L11.9999 13.41L18.2899 19.71C18.3829 19.8037 18.4935 19.8781 18.6154 19.9289C18.7372 19.9797 18.8679 20.0058 18.9999 20.0058C19.132 20.0058 19.2627 19.9797 19.3845 19.9289C19.5064 19.8781 19.617 19.8037 19.7099 19.71C19.8037 19.617 19.8781 19.5064 19.9288 19.3846C19.9796 19.2627 20.0057 19.132 20.0057 19C20.0057 18.868 19.9796 18.7373 19.9288 18.6154C19.8781 18.4936 19.8037 18.383 19.7099 18.29L13.4099 12Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>
        <div className="site-content">
          <main>
            <section className="hero-section --lg --img">
              <div className="hero-content__bg --lg">
                <div className="gradient-canvas-wrapper">
                  <canvas
                    id="gradient-canvas"
                    className="transition duration-transition"
                  />
                </div>
              </div>
              <div className="wrapper">
                <h1 className="h2 hero-section__title">
                  The Risk Solution for{" "}
                  <span style={{ whiteSpace: "nowrap" }}>On-chain</span> Applications
                </h1>
                <div className="hero-content">
                  <div className="hero-content__desc">
                    <p>
                      Chaos Labs is the first automated, on-chain economic security
                      system enabling crypto protocols to optimize risk management and
                      capital efficiency while protecting user funds.
                    </p>
                    <a className="btn" href="contact-us">
                      Schedule a demo now
                    </a>
                  </div>
                </div>
                <div className="hero-content__img">
                  <img
                    alt="Chaos Labs Platforms"
                    src="_next/static/media/hero.82bf88d2.svg"
                    width={900}
                    height={616}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
            </section>
            <section className="my-10 md:mb-40">
              <div className="wrapper" style={{ maxWidth: 1400 }}>
                <h2 className="section-title text-center">Trusted by</h2>
                <div className="flex justify-evenly gap-3 py-4 flex-wrap md:grid-cols-6">
                  <img
                    alt="Aave"
                    src="_next/static/media/aave.63e4f20e.svg"
                    width={106}
                    height={30}
                    decoding="async"
                    data-nimg={1}
                    className="w-auto py-4 px-4 lg:px-8"
                    style={{ color: "transparent", maxWidth: 200 }}
                  />
                  <img
                    alt="Avalanche"
                    src="_next/static/media/avalanche.ecc48895.svg"
                    width={119}
                    height={24}
                    decoding="async"
                    data-nimg={1}
                    className="w-auto py-4 px-4 lg:px-8"
                    style={{ color: "transparent", maxWidth: 200 }}
                  />
                  <img
                    alt="Benqi"
                    src="_next/static/media/benqi.a3654d67.svg"
                    width={96}
                    height={29}
                    decoding="async"
                    data-nimg={1}
                    className="w-auto py-4 px-4 lg:px-8"
                    style={{ color: "transparent", maxWidth: 200 }}
                  />
                  <img
                    alt="Bluefin"
                    src="_next/static/media/bluefin.ab98c006.svg"
                    width={192}
                    height={64}
                    decoding="async"
                    data-nimg={1}
                    className="w-auto py-4 px-4 lg:px-8"
                    style={{ color: "transparent", maxWidth: 200 }}
                  />
                  <img
                    alt="Chainlink"
                    src="_next/static/media/chainlink.eed38a0a.svg"
                    width={118}
                    height={36}
                    decoding="async"
                    data-nimg={1}
                    className="w-auto py-4 px-4 lg:px-8"
                    style={{ color: "transparent", maxWidth: 200 }}
                  />
                  <img
                    alt="Compound"
                    src="_next/static/media/compound.a7797e32.svg"
                    width={119}
                    height={32}
                    decoding="async"
                    data-nimg={1}
                    className="w-auto py-4 px-4 lg:px-8"
                    style={{ color: "transparent", maxWidth: 200 }}
                  />
                  <img
                    alt="crvUSD"
                    src="_next/static/media/crvusd.37234ad6.svg"
                    width={258}
                    height={80}
                    decoding="async"
                    data-nimg={1}
                    className="w-auto py-4 px-4 lg:px-8"
                    style={{ color: "transparent", maxWidth: 200 }}
                  />
                  <img
                    alt="Curve"
                    src="_next/static/media/curve.21f5eae3.svg"
                    width={256}
                    height={256}
                    decoding="async"
                    data-nimg={1}
                    className="w-auto py-4 px-4 lg:px-8"
                    style={{ color: "transparent", maxWidth: 200 }}
                  />
                  <img
                    alt="DYDX"
                    src="_next/static/media/dydx.b7a76f02.svg"
                    width={103}
                    height={34}
                    decoding="async"
                    data-nimg={1}
                    className="w-auto py-4 px-4 lg:px-8"
                    style={{ color: "transparent", maxWidth: 200 }}
                  />
                  <img
                    alt="Ethena"
                    src="_next/static/media/ethena.d874ff3d.svg"
                    width={190}
                    height={76}
                    decoding="async"
                    data-nimg={1}
                    className="w-auto py-4 px-4 lg:px-8"
                    style={{ color: "transparent", maxWidth: 200 }}
                  />
                  <img
                    alt="GHO"
                    src="_next/static/media/gho.38f146bb.svg"
                    width={564}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className="w-auto py-4 px-4 lg:px-8"
                    style={{ color: "transparent", maxWidth: 200 }}
                  />
                  <img
                    alt="GMX"
                    src="_next/static/media/gmx.82806b2c.svg"
                    width={1640}
                    height={472}
                    decoding="async"
                    data-nimg={1}
                    className="w-auto py-4 px-4 lg:px-8"
                    style={{ color: "transparent", maxWidth: 200 }}
                  />
                  <img
                    alt="Lido"
                    src="_next/static/media/lido.f146f452.svg"
                    width={442}
                    height={192}
                    decoding="async"
                    data-nimg={1}
                    className="w-auto py-4 px-4 lg:px-8"
                    style={{ color: "transparent", maxWidth: 200 }}
                  />
                  <img
                    alt="Liquity"
                    src="_next/static/media/liquity.89f6e555.svg"
                    width={260}
                    height={80}
                    decoding="async"
                    data-nimg={1}
                    className="w-auto py-4 px-4 lg:px-8"
                    style={{ color: "transparent", maxWidth: 200 }}
                  />
                  <img
                    alt="Maker"
                    src="_next/static/media/maker.545f118b.svg"
                    width={1045}
                    height={146}
                    decoding="async"
                    data-nimg={1}
                    className="w-auto py-4 px-4 lg:px-8"
                    style={{ color: "transparent", maxWidth: 200 }}
                  />
                  <img
                    alt="Nexus Mutual"
                    src="_next/static/media/nexus.a3fb7371.svg"
                    width={1281}
                    height={415}
                    decoding="async"
                    data-nimg={1}
                    className="w-auto py-4 px-4 lg:px-8"
                    style={{ color: "transparent", maxWidth: 200 }}
                  />
                  <img
                    alt="Osmosis"
                    src="_next/static/media/osmosis-h.fbf52675.svg"
                    width={129}
                    height={32}
                    decoding="async"
                    data-nimg={1}
                    className="w-auto py-4 px-4 lg:px-8"
                    style={{ color: "transparent", maxWidth: 200 }}
                  />
                  <img
                    alt="Ostium"
                    src="_next/static/media/ostium.c75ceb10.svg"
                    width={628}
                    height={120}
                    decoding="async"
                    data-nimg={1}
                    className="w-auto py-4 px-4 lg:px-8"
                    style={{ color: "transparent", maxWidth: 200 }}
                  />
                  <img
                    alt="Radiant"
                    src="_next/static/media/radiant.a2be1a23.svg"
                    width={200}
                    height={47}
                    decoding="async"
                    data-nimg={1}
                    className="w-auto py-4 px-4 lg:px-8"
                    style={{ color: "transparent", maxWidth: 200 }}
                  />
                  <img
                    alt="Seamless"
                    src="_next/static/media/seamless.cd6318f5.svg"
                    width={1300}
                    height={350}
                    decoding="async"
                    data-nimg={1}
                    className="w-auto py-4 px-4 lg:px-8"
                    style={{ color: "transparent", maxWidth: 200 }}
                  />
                  <img
                    alt="Tapioca"
                    src="_next/static/media/tapioca.78a5c8d5.svg"
                    width={1635}
                    height={500}
                    decoding="async"
                    data-nimg={1}
                    className="w-auto py-4 px-4 lg:px-8"
                    style={{ color: "transparent", maxWidth: 200 }}
                  />
                  <img
                    alt="Uniswap Foundation"
                    src="_next/static/media/uniswap-foundation.981d213a.svg"
                    width={271}
                    height={64}
                    decoding="async"
                    data-nimg={1}
                    className="w-auto py-4 px-4 lg:px-8"
                    style={{ color: "transparent", maxWidth: 200 }}
                  />
                  <img
                    alt="Venus"
                    src="_next/static/media/venus.d9f9454c.svg"
                    width={104}
                    height={32}
                    decoding="async"
                    data-nimg={1}
                    className="w-auto py-4 px-4 lg:px-8"
                    style={{ color: "transparent", maxWidth: 200 }}
                  />
                </div>
              </div>
            </section>
            <section className="platforms-section">
              <div className="platforms-section__item">
                <div className="platforms-section__bg">
                  <img
                    alt=""
                    src="_next/static/media/green-gradient-background.ea8eafd5.svg"
                    width={1440}
                    height={1184}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent", width: "100%", height: "100%" }}
                  />
                </div>
                <div className="wrapper relative z-1">
                  <div className="platforms-row">
                    <div className="platforms-row__desc">
                      <h2 className="platforms-row__title">Risk Management</h2>
                      <h3 className="text-xl">
                        Prepare and protect against real market risk using Chaos Labs’
                        simulations and automated risk suite to safeguard user funds.
                      </h3>
                      <ul className="bullet-list mb-10">
                        <li>
                          Utilize world-class simulations to optimize parameters and
                          ensure the safety of user funds.
                        </li>
                        <li>
                          Access a comprehensive understanding of your protocol and
                          unlock insights into each user account.
                        </li>
                        <li>
                          Confidently onboard new assets by automating the collection
                          and analysis of key markets data around assets.
                        </li>
                      </ul>
                      <a
                        className="btn --secondary --arrow"
                        href="solutions/risk-management"
                      >
                        Learn more
                      </a>
                    </div>
                    <div className="platforms-row__img _float-right">
                      <img
                        alt="Risk management dashboard"
                        src="_next/static/media/risk-management.82317b37.svg"
                        width={856}
                        height={720}
                        decoding="async"
                        data-nimg={1}
                        loading="lazy"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="platforms-section__item">
                <div className="wrapper">
                  <div className="platforms-row _reverse">
                    <div className="platforms-row__desc">
                      <h2 className="platforms-row__title">Incentive Optimization</h2>
                      <h3 className="text-xl">
                        Drive maximum economic impact with on-chain incentive
                        programs.
                      </h3>
                      <ul className="bullet-list mb-10">
                        <li>
                          Boost your Total Value Locked (TVL) by optimizing fees and
                          incentives.
                        </li>
                        <li>
                          Verify your capital allocation strategy via Chaos Labs,
                          allowing you to empower your community.
                        </li>
                        <li>
                          Provide targeted incentives and long-term rewards for
                          sustainable growth and user engagement.
                        </li>
                      </ul>
                      <a
                        className="btn --secondary --arrow"
                        href="solutions/liquidity-incentives-optimization"
                      >
                        Learn more
                      </a>
                    </div>
                    <div className="platforms-row__img _float-left">
                      <img
                        alt="Chaos Labs Liquidity Incentives Optimization Dashboard"
                        src="_next/static/media/incentive-optimization.e7d84e7a.svg"
                        width={818}
                        height={752}
                        decoding="async"
                        data-nimg={1}
                        loading="lazy"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="platforms-section__item">
                <div className="wrapper">
                  <div className="platforms-row">
                    <div className="platforms-row__desc">
                      <h2 className="platforms-row__title">Simulations</h2>
                      <h3 className="text-xl">
                        Chaos Labs’ state of the art blockchain simulation technology.
                      </h3>
                      <ul className="bullet-list mb-10">
                        <li>
                          Test theoretical attack vectors in a real-world environment
                          using live agents and mainnet code.
                        </li>
                        <li>
                          Validate your assumptions and downstream impacts with high
                          scale, multi-agent simulations.
                        </li>
                        <li>
                          Trust that what you’re building will withstand market-based
                          attacks in any environment.
                        </li>
                      </ul>
                      <a
                        className="btn --secondary --arrow"
                        href="solutions/simulations"
                      >
                        Learn more
                      </a>
                    </div>
                    <div className="platforms-row__img _float-right">
                      <img
                        alt="Simulations"
                        src="_next/static/media/simulations.a61627e2.svg"
                        width={800}
                        height={632}
                        decoding="async"
                        data-nimg={1}
                        loading="lazy"
                        style={{
                          color: "transparent",
                          maxWidth: 700,
                          margin: "auto",
                          width: "100%"
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="relative py-16 md:py-20 lg:py-32 overflow-hidden">
              <div
                className="absolute w-full h-full inset-0 z-0"
                style={{ pointerEvents: "none" }}
              >
                <img
                  alt=""
                  src="_next/static/media/square-green-gradient-background.eb8b9ba2.svg"
                  width={1440}
                  height={488}
                  decoding="async"
                  data-nimg={1}
                  className="absolute w-full h-full"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="wrapper relative z-1">
                <h2 className="text-center mb-8">See our products in action</h2>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  <a
                    href="https://community.chaoslabs.xyz/aave/recommendations"
                    className="flex rounded-lg overflow-hidden bg-dark-grey"
                  >
                    <img
                      alt="aave"
                      src="images/tools/param-recs.svg"
                      width={120}
                      height={120}
                      decoding="async"
                      data-nimg={1}
                      className="w-4/10"
                      loading="lazy"
                      style={{ color: "transparent" }}
                    />
                    <span className="p-4 flex flex-col justify-between">
                      <span className="block mb-4 font-bold">
                        Parameter <br /> Recommendations
                      </span>
                      <span className="btn-inline --primary">See in Action</span>
                    </span>
                  </a>
                  <a
                    href="https://community.chaoslabs.xyz/benqi/risk"
                    className="flex rounded-lg overflow-hidden bg-dark-grey"
                  >
                    <img
                      alt="benqi"
                      src="images/tools/risk-monitoring.svg"
                      width={120}
                      height={120}
                      decoding="async"
                      data-nimg={1}
                      className="w-4/10"
                      loading="lazy"
                      style={{ color: "transparent" }}
                    />
                    <span className="p-4 flex flex-col justify-between">
                      <span className="block mb-4 font-bold">
                        Risk
                        <br /> Monitoring
                      </span>
                      <span className="btn-inline --primary">See in Action</span>
                    </span>
                  </a>
                  <a
                    href="https://community.chaoslabs.xyz/osmosis/incentives-optimization"
                    className="flex rounded-lg overflow-hidden bg-dark-grey"
                  >
                    <img
                      alt="osmosis"
                      src="images/tools/incentive-optimization.svg"
                      width={120}
                      height={120}
                      decoding="async"
                      data-nimg={1}
                      className="w-4/10"
                      loading="lazy"
                      style={{ color: "transparent" }}
                    />
                    <span className="p-4 flex flex-col justify-between">
                      <span className="block mb-4 font-bold">
                        Incentive <br /> Optimization
                      </span>
                      <span className="btn-inline --primary">See in Action</span>
                    </span>
                  </a>
                  <a
                    href="https://community.chaoslabs.xyz/dydx/asset-listing"
                    className="flex rounded-lg overflow-hidden bg-dark-grey"
                  >
                    <img
                      alt="dydx"
                      src="images/tools/asset-listing.svg"
                      width={120}
                      height={120}
                      decoding="async"
                      data-nimg={1}
                      className="w-4/10"
                      loading="lazy"
                      style={{ color: "transparent" }}
                    />
                    <span className="p-4 flex flex-col justify-between">
                      <span className="block mb-4 font-bold">Asset Listing</span>
                      <span className="btn-inline --primary">See in Action</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <section className="section">
              <div className="wrapper">
                <div className="flex justify-between">
                  <h3 className="mb-0">Recent updates</h3>
                  <a href="blog" className="btn-inline self-center">
                    View more
                  </a>
                </div>
                <div className="mt-6 md:mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
                  <div>
                    <div className="mb-5 rounded-md overflow-hidden">
                      <div className="sm:mx-0">
                        <a
                          aria-label="Chaos Labs Partners with Optimism Foundation"
                          href="posts/chaos-labs-partners-with-optimism-foundation"
                        >
                          <img
                            alt="Cover Image for Chaos Labs Partners with Optimism Foundation"
                            srcSet="_next/image?url=https:%252F%252Fcdn.sanity.io%252Fimages%252Fzmh9mnff%252Fproduction%252Fc089679af3f54cd77de1b06c6be0461861c30724-1240x620.png&w=640&q=100mp;q=_next/image?url=https:%252F%252Fcdn.sanity.io%252Fimages%252Fzmh9mnff%252Fproduction%252Fc089679af3f54cd77de1b06c6be0461861c30724-1240x620.png&w=1200&q=100w=1200&q=100 2x"
                            src="_next/image?url=https:%252F%252Fcdn.sanity.io%252Fimages%252Fzmh9mnff%252Fproduction%252Fc089679af3f54cd77de1b06c6be0461861c30724-1240x620.png&w=1200&q=100"
                            width={556}
                            height={278}
                            decoding="async"
                            data-nimg={1}
                            className="shadow-sm hover:shadow-md transition-shadow duration-200"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </a>
                      </div>
                    </div>
                    <h3 className="mb-3 leading-snug">
                      <a href="posts/chaos-labs-partners-with-optimism-foundation">
                        Chaos Labs Partners with Optimism Foundation
                      </a>
                    </h3>
                    <div
                      className="flex items-center mb-4"
                      style={{ color: "#989898" }}
                    >
                      <div className="flex blog__authors">
                        <div className="flex items-center">
                          <img
                            alt="Omer Goldberg"
                            srcSet="_next/image?url=https:%252F%252Fcdn.sanity.io%252Fimages%252Fzmh9mnff%252Fproduction%252F6d16e02b0fe7980808f6ae2522adc23ff168026d-960x960.jpg?w=90&q=100&w=32&q=75amp;q_next/image?url=https:%252F%252Fcdn.sanity.io%252Fimages%252Fzmh9mnff%252Fproduction%252F6d16e02b0fe7980808f6ae2522adc23ff168026d-960x960.jpg?w=90&q=100&w=48&q=75mp;w=48&q=75 2x"
                            src="_next/image?url=https:%252F%252Fcdn.sanity.io%252Fimages%252Fzmh9mnff%252Fproduction%252F6d16e02b0fe7980808f6ae2522adc23ff168026d-960x960.jpg?w=90&q=100&w=48&q=75"
                            width={24}
                            height={24}
                            decoding="async"
                            data-nimg={1}
                            className="w-6 h-6 rounded-full"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                          <div className="ml-2">Omer Goldberg</div>
                        </div>
                      </div>
                      <span
                        style={{
                          width: 2,
                          height: 2,
                          borderRadius: 2,
                          background: "currentColor",
                          margin: "0 8px"
                        }}
                      />
                      <time dateTime="2024-02-01T15:00:00.000Z">
                        February 1, 2024
                      </time>
                    </div>
                    <p className="text-grey">
                      Chaos Labs is excited to collaborate with the Optimism
                      Foundation to optimize liquidity incentives and facilitate the
                      migration from bridged USDC.e to native USDC on OP Mainnet.
                    </p>
                  </div>
                  <div>
                    <div className="mb-5 rounded-md overflow-hidden">
                      <div className="sm:mx-0">
                        <a
                          aria-label="Chaos Labs Partners with Avantis"
                          href="posts/chaos-labs-partners-with-avantis"
                        >
                          <img
                            alt="Cover Image for Chaos Labs Partners with Avantis"
                            srcSet="_next/image?url=https:%252F%252Fcdn.sanity.io%252Fimages%252Fzmh9mnff%252Fproduction%252Fcfc6660de39c81f0ca7e13fcbb62b2011101e6da-1240x620.png&w=640&q=100mp;q=_next/image?url=https:%252F%252Fcdn.sanity.io%252Fimages%252Fzmh9mnff%252Fproduction%252Fcfc6660de39c81f0ca7e13fcbb62b2011101e6da-1240x620.png&w=1200&q=100w=1200&q=100 2x"
                            src="_next/image?url=https:%252F%252Fcdn.sanity.io%252Fimages%252Fzmh9mnff%252Fproduction%252Fcfc6660de39c81f0ca7e13fcbb62b2011101e6da-1240x620.png&w=1200&q=100"
                            width={556}
                            height={278}
                            decoding="async"
                            data-nimg={1}
                            className="shadow-sm hover:shadow-md transition-shadow duration-200"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </a>
                      </div>
                    </div>
                    <h3 className="mb-3 leading-snug">
                      <a href="posts/chaos-labs-partners-with-avantis">
                        Chaos Labs Partners with Avantis
                      </a>
                    </h3>
                    <div
                      className="flex items-center mb-4"
                      style={{ color: "#989898" }}
                    >
                      <div className="flex blog__authors">
                        <div className="flex items-center">
                          <img
                            alt="Omer Goldberg"
                            srcSet="_next/image?url=https:%252F%252Fcdn.sanity.io%252Fimages%252Fzmh9mnff%252Fproduction%252F6d16e02b0fe7980808f6ae2522adc23ff168026d-960x960.jpg?w=90&q=100&w=32&q=75amp;q_next/image?url=https:%252F%252Fcdn.sanity.io%252Fimages%252Fzmh9mnff%252Fproduction%252F6d16e02b0fe7980808f6ae2522adc23ff168026d-960x960.jpg?w=90&q=100&w=48&q=75mp;w=48&q=75 2x"
                            src="_next/image?url=https:%252F%252Fcdn.sanity.io%252Fimages%252Fzmh9mnff%252Fproduction%252F6d16e02b0fe7980808f6ae2522adc23ff168026d-960x960.jpg?w=90&q=100&w=48&q=75"
                            width={24}
                            height={24}
                            decoding="async"
                            data-nimg={1}
                            className="w-6 h-6 rounded-full"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                          <div className="ml-2">Omer Goldberg</div>
                        </div>
                      </div>
                      <span
                        style={{
                          width: 2,
                          height: 2,
                          borderRadius: 2,
                          background: "currentColor",
                          margin: "0 8px"
                        }}
                      />
                      <time dateTime="2024-01-26T18:00:00.000Z">
                        January 26, 2024
                      </time>
                    </div>
                    <p className="text-grey">
                      Chaos Labs is excited to announce our new partnership with
                      Avantis, marking a significant step forward in our journey
                      toward innovating the world of on-chain trading. Over recent
                      months, our collaboration with Avantis has focused on developing
                      a genesis risk framework and the initial setting of parameters
                      for their protocol.
                    </p>
                  </div>
                  <div>
                    <div className="mb-5 rounded-md overflow-hidden">
                      <div className="sm:mx-0">
                        <a
                          aria-label="dYdX Chain: Launch Incentives Season 2 Mid-Season Review "
                          href="posts/dydx-chain-launch-incentives-season-2-mid-season-review"
                        >
                          <img
                            alt="Cover Image for dYdX Chain: Launch Incentives Season 2 Mid-Season Review "
                            srcSet="_next/image?url=https:%252F%252Fcdn.sanity.io%252Fimages%252Fzmh9mnff%252Fproduction%252Fea264f2bace2678710b48fb70a1c90e705c410c9-1240x620.png&w=640&q=100mp;q=_next/image?url=https:%252F%252Fcdn.sanity.io%252Fimages%252Fzmh9mnff%252Fproduction%252Fea264f2bace2678710b48fb70a1c90e705c410c9-1240x620.png&w=1200&q=100w=1200&q=100 2x"
                            src="_next/image?url=https:%252F%252Fcdn.sanity.io%252Fimages%252Fzmh9mnff%252Fproduction%252Fea264f2bace2678710b48fb70a1c90e705c410c9-1240x620.png&w=1200&q=100"
                            width={556}
                            height={278}
                            decoding="async"
                            data-nimg={1}
                            className="shadow-sm hover:shadow-md transition-shadow duration-200"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </a>
                      </div>
                    </div>
                    <h3 className="mb-3 leading-snug">
                      <a href="posts/dydx-chain-launch-incentives-season-2-mid-season-review">
                        dYdX Chain: Launch Incentives Season 2 Mid-Season Review{" "}
                      </a>
                    </h3>
                    <div
                      className="flex items-center mb-4"
                      style={{ color: "#989898" }}
                    >
                      <div className="flex blog__authors">
                        <div className="flex items-center">
                          <img
                            alt="Omer Goldberg"
                            srcSet="_next/image?url=https:%252F%252Fcdn.sanity.io%252Fimages%252Fzmh9mnff%252Fproduction%252F6d16e02b0fe7980808f6ae2522adc23ff168026d-960x960.jpg?w=90&q=100&w=32&q=75amp;q_next/image?url=https:%252F%252Fcdn.sanity.io%252Fimages%252Fzmh9mnff%252Fproduction%252F6d16e02b0fe7980808f6ae2522adc23ff168026d-960x960.jpg?w=90&q=100&w=48&q=75mp;w=48&q=75 2x"
                            src="_next/image?url=https:%252F%252Fcdn.sanity.io%252Fimages%252Fzmh9mnff%252Fproduction%252F6d16e02b0fe7980808f6ae2522adc23ff168026d-960x960.jpg?w=90&q=100&w=48&q=75"
                            width={24}
                            height={24}
                            decoding="async"
                            data-nimg={1}
                            className="w-6 h-6 rounded-full"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                          <div className="ml-2">Omer Goldberg</div>
                        </div>
                      </div>
                      <span
                        style={{
                          width: 2,
                          height: 2,
                          borderRadius: 2,
                          background: "currentColor",
                          margin: "0 8px"
                        }}
                      />
                      <time dateTime="2024-01-24T18:30:00.000Z">
                        January 24, 2024
                      </time>
                    </div>
                    <p className="text-grey">
                      Chaos Labs presents the mid-season 2 review of full trading on
                      the dYdX Chain. All aspects of the exchange performance are
                      covered with a focus on the impact of the launch incentive
                      program.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="relative py-16 md:py-20 lg:pt-32">
              <div
                className="absolute w-full h-full inset-0 z-0"
                style={{ pointerEvents: "none" }}
              >
                <img
                  alt=""
                  src="_next/static/media/square-green-gradient-background.eb8b9ba2.svg"
                  width={1440}
                  height={488}
                  decoding="async"
                  data-nimg={1}
                  className="absolute w-full h-full"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="relative z-1">
                <h3 className="h2 text-center">Backed by top investors</h3>
                <div className="my-10 md:mb-24 md:mt-24">
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide self-center flex items-center justify-center">
                        <div className="text-center flex flex-col items-center">
                          <h3 className="text-md mb-0" style={{ minWidth: 140 }}>
                            Balaji Srinivasan
                          </h3>
                          <small>Angel Investor</small>
                        </div>
                      </div>
                      <div className="swiper-slide self-center flex items-center justify-center">
                        <img
                          alt="Galaxy digital"
                          src="_next/static/media/galaxy-digital.aabbcf8b.svg"
                          width={130}
                          height={37}
                          decoding="async"
                          data-nimg={1}
                          className="w-32 lg:w-40 h-8 md:h-10 m-auto"
                          loading="eager"
                          style={{ color: "transparent", objectFit: "contain" }}
                        />
                      </div>
                      <div className="swiper-slide self-center flex items-center justify-center">
                        <img
                          alt="Coinbase Ventures"
                          src="_next/static/media/coinbase-ventures.4e654848.svg"
                          width={192}
                          height={31}
                          decoding="async"
                          data-nimg={1}
                          className="w-32 lg:w-40 h-8 md:h-10 m-auto"
                          loading="eager"
                          style={{ color: "transparent", objectFit: "contain" }}
                        />
                      </div>
                      <div className="swiper-slide self-center flex items-center justify-center">
                        <img
                          alt="Lightspeed"
                          src="_next/static/media/lightspeed.504cfbae.svg"
                          width={159}
                          height={33}
                          decoding="async"
                          data-nimg={1}
                          className="w-32 lg:w-40 h-8 md:h-10 m-auto"
                          loading="eager"
                          style={{ color: "transparent", objectFit: "contain" }}
                        />
                      </div>
                      <div className="swiper-slide self-center flex items-center justify-center">
                        <img
                          alt="Defi Alliance Fund"
                          srcSet="_next/image?url=%252F_next%252Fstatic%252Fmedia%252Fdefi-alliance.1b2bbf1c.png&w=1080&q=75amp;q_next/image?url=%252F_next%252Fstatic%252Fmedia%252Fdefi-alliance.1b2bbf1c.png&w=2048&q=75;w=2048&q=75 2x"
                          src="_next/image?url=%252F_next%252Fstatic%252Fmedia%252Fdefi-alliance.1b2bbf1c.png&w=2048&q=75"
                          width={1008}
                          height={440}
                          decoding="async"
                          data-nimg={1}
                          className="w-32 lg:w-40 h-8 md:h-10 m-auto"
                          loading="eager"
                          style={{ color: "transparent", objectFit: "contain" }}
                        />
                      </div>
                      <div className="swiper-slide self-center flex items-center justify-center">
                        <img
                          alt="Samsung Next"
                          src="_next/static/media/samsungnext.9b7e690b.svg"
                          width={744}
                          height={370}
                          decoding="async"
                          data-nimg={1}
                          className="w-32 lg:w-40 h-8 md:h-10 m-auto"
                          loading="eager"
                          style={{ color: "transparent", objectFit: "contain" }}
                        />
                      </div>
                      <div className="swiper-slide self-center flex items-center justify-center">
                        <img
                          alt="Hashkey"
                          src="_next/static/media/hashkey.a36e30df.svg"
                          width={756}
                          height={123}
                          decoding="async"
                          data-nimg={1}
                          className="w-32 lg:w-40 h-8 md:h-10 m-auto"
                          loading="eager"
                          style={{ color: "transparent", objectFit: "contain" }}
                        />
                      </div>
                      <div className="swiper-slide self-center flex items-center justify-center">
                        <div className="text-center flex flex-col items-center">
                          <h3 className="text-md mb-0" style={{ minWidth: 140 }}>
                            Itay Malinger
                          </h3>
                          <small>Angel Investor</small>
                        </div>
                      </div>
                      <div className="swiper-slide self-center flex items-center justify-center">
                        <div className="text-center flex flex-col items-center">
                          <h3 className="text-md mb-0" style={{ minWidth: 140 }}>
                            Miguel Burger-Calderon
                          </h3>
                          <small>Angel Investor</small>
                        </div>
                      </div>
                      <div className="swiper-slide self-center flex items-center justify-center">
                        <img
                          alt="Opensea"
                          src="_next/static/media/opensea.f241162c.svg"
                          width={1311}
                          height={300}
                          decoding="async"
                          data-nimg={1}
                          className="w-32 lg:w-40 h-8 md:h-10 m-auto"
                          loading="eager"
                          style={{ color: "transparent", objectFit: "contain" }}
                        />
                      </div>
                      <div className="swiper-slide self-center flex items-center justify-center">
                        <img
                          alt="Avalanche"
                          src="_next/static/media/avalanche.ecc48895.svg"
                          width={119}
                          height={24}
                          decoding="async"
                          data-nimg={1}
                          className="w-32 lg:w-40 h-8 md:h-10 m-auto"
                          loading="eager"
                          style={{ color: "transparent", objectFit: "contain" }}
                        />
                      </div>
                      <div className="swiper-slide self-center flex items-center justify-center">
                        <img
                          alt="Third Prime"
                          src="_next/static/media/thirdprime.31daacc5.svg"
                          width={3864}
                          height={911}
                          decoding="async"
                          data-nimg={1}
                          className="w-32 lg:w-40 h-8 md:h-10 m-auto"
                          loading="eager"
                          style={{ color: "transparent", objectFit: "contain" }}
                        />
                      </div>
                      <div className="swiper-slide self-center flex items-center justify-center">
                        <div className="text-center flex flex-col items-center">
                          <h3 className="text-md mb-0" style={{ minWidth: 140 }}>
                            Paul Veradittakit
                          </h3>
                          <small>Angel Investor</small>
                        </div>
                      </div>
                      <div className="swiper-slide self-center flex items-center justify-center">
                        <img
                          alt="Primitive Ventures"
                          src="_next/static/media/primitive.d2bdf6a6.svg"
                          width={2269}
                          height={209}
                          decoding="async"
                          data-nimg={1}
                          className="w-32 lg:w-40 h-8 md:h-10 m-auto"
                          loading="eager"
                          style={{ color: "transparent", objectFit: "contain" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide self-center flex items-center justify-center">
                        <img
                          alt="Polygon"
                          src="_next/static/media/polygon.fd514f99.svg"
                          width={127}
                          height={27}
                          decoding="async"
                          data-nimg={1}
                          className="w-32 lg:w-40 h-8 md:h-10 m-auto"
                          loading="eager"
                          style={{ color: "transparent", objectFit: "contain" }}
                        />
                      </div>
                      <div className="swiper-slide self-center flex items-center justify-center">
                        <img
                          alt="Paypal"
                          src="_next/static/media/paypal.5a21839d.svg"
                          width={1232}
                          height={434}
                          decoding="async"
                          data-nimg={1}
                          className="w-32 lg:w-40 h-8 md:h-10 m-auto"
                          loading="eager"
                          style={{ color: "transparent", objectFit: "contain" }}
                        />
                      </div>
                      <div className="swiper-slide self-center flex items-center justify-center">
                        <img
                          alt="Uniswap"
                          src="_next/static/media/uniswap-full.bc015608.svg"
                          width={160}
                          height={40}
                          decoding="async"
                          data-nimg={1}
                          className="w-32 lg:w-40 h-8 md:h-10 m-auto"
                          loading="eager"
                          style={{ color: "transparent", objectFit: "contain" }}
                        />
                      </div>
                      <div className="swiper-slide self-center flex items-center justify-center">
                        <img
                          alt="Castle Island Ventures"
                          srcSet="_next/image?url=%252F_next%252Fstatic%252Fmedia%252Fcastleisland.237eb068.png&w=828&q=75amp;q_next/image?url=%252F_next%252Fstatic%252Fmedia%252Fcastleisland.237eb068.png&w=1920&q=75;w=1920&q=75 2x"
                          src="_next/image?url=%252F_next%252Fstatic%252Fmedia%252Fcastleisland.237eb068.png&w=1920&q=75"
                          width={813}
                          height={200}
                          decoding="async"
                          data-nimg={1}
                          className="w-32 lg:w-40 h-8 md:h-10 m-auto"
                          loading="eager"
                          style={{ color: "transparent", objectFit: "contain" }}
                        />
                      </div>
                      <div className="swiper-slide self-center flex items-center justify-center">
                        <img
                          alt="Quiet Capital"
                          src="_next/static/media/quiet.f819c51c.svg"
                          width={121}
                          height={41}
                          decoding="async"
                          data-nimg={1}
                          className="w-32 lg:w-40 h-8 md:h-10 m-auto"
                          loading="eager"
                          style={{ color: "transparent", objectFit: "contain" }}
                        />
                      </div>
                      <div className="swiper-slide self-center flex items-center justify-center">
                        <img
                          alt="Tioga Capital"
                          src="_next/static/media/tioga.70b5a59b.svg"
                          width={136}
                          height={76}
                          decoding="async"
                          data-nimg={1}
                          className="w-32 lg:w-40 h-8 md:h-10 m-auto"
                          loading="eager"
                          style={{ color: "transparent", objectFit: "contain" }}
                        />
                      </div>
                      <div className="swiper-slide self-center flex items-center justify-center">
                        <img
                          alt="Folius Ventures"
                          src="_next/static/media/foliusventures.a85c4ec6.svg"
                          width={584}
                          height={92}
                          decoding="async"
                          data-nimg={1}
                          className="w-32 lg:w-40 h-8 md:h-10 m-auto"
                          loading="eager"
                          style={{ color: "transparent", objectFit: "contain" }}
                        />
                      </div>
                      <div className="swiper-slide self-center flex items-center justify-center">
                        <img
                          alt="Blockdaemon"
                          src="_next/static/media/blockdaemon.006b902a.svg"
                          width={139}
                          height={30}
                          decoding="async"
                          data-nimg={1}
                          className="w-32 lg:w-40 h-8 md:h-10 m-auto"
                          loading="eager"
                          style={{ color: "transparent", objectFit: "contain" }}
                        />
                      </div>
                      <div className="swiper-slide self-center flex items-center justify-center">
                        <div className="text-center flex flex-col items-center">
                          <h3 className="text-md mb-0" style={{ minWidth: 140 }}>
                            Naval Ravikant
                          </h3>
                          <small>Angel Investor</small>
                        </div>
                      </div>
                      <div className="swiper-slide self-center flex items-center justify-center">
                        <div className="text-center flex flex-col items-center">
                          <h3 className="text-md mb-0" style={{ minWidth: 140 }}>
                            Santiago R Santos
                          </h3>
                          <small>Angel Investor</small>
                        </div>
                      </div>
                      <div className="swiper-slide self-center flex items-center justify-center">
                        <img
                          alt="Bessemer Venture Partners"
                          src="_next/static/media/bvp.bb746e94.svg"
                          width={1588}
                          height={684}
                          decoding="async"
                          data-nimg={1}
                          className="w-32 lg:w-40 h-8 md:h-10 m-auto"
                          loading="eager"
                          style={{ color: "transparent", objectFit: "contain" }}
                        />
                      </div>
                      <div className="swiper-slide self-center flex items-center justify-center">
                        <img
                          alt="Wintermute"
                          src="_next/static/media/wintermute.eb79e3a5.svg"
                          width={189}
                          height={31}
                          decoding="async"
                          data-nimg={1}
                          className="w-32 lg:w-40 h-8 md:h-10 m-auto"
                          loading="eager"
                          style={{ color: "transparent", objectFit: "contain" }}
                        />
                      </div>
                      <div className="swiper-slide self-center flex items-center justify-center">
                        <img
                          alt="Theta"
                          src="_next/static/media/theta.86856bc1.svg"
                          width={3284}
                          height={308}
                          decoding="async"
                          data-nimg={1}
                          className="w-32 lg:w-40 h-8 md:h-10 m-auto"
                          loading="eager"
                          style={{ color: "transparent", objectFit: "contain" }}
                        />
                      </div>
                      <div className="swiper-slide self-center flex items-center justify-center">
                        <img
                          alt="Jump Crypto"
                          src="_next/static/media/jump.526ddf01.svg"
                          width={200}
                          height={64}
                          decoding="async"
                          data-nimg={1}
                          className="w-32 lg:w-40 h-8 md:h-10 m-auto"
                          loading="eager"
                          style={{ color: "transparent", objectFit: "contain" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-10 md:mt-20 gap-2">
                  <button className="btn --secondary --icon">
                    <svg fill="none" width={8} height={14} viewBox="0 0 8 14">
                      <path d="M7 1 1 7l6 6" stroke="#fff" />
                    </svg>
                  </button>
                  <button className="btn --secondary --icon">
                    <svg fill="none" width={8} height={14} viewBox="0 0 8 14">
                      <path d="m1 1 6 6-6 6" stroke="#fff" />
                    </svg>
                  </button>
                </div>
              </div>
            </section>
            <section className="wrapper my-20 lg:mt-40 lg:mb-32">
              <h2 className="max-w-lg m-auto mb-6 text-center">
                Ready to Get Started?
              </h2>
              <p className="max-w-lg text-md font-bold m-auto mb-12 text-center">
                Get in touch to explore further opportunities
              </p>
              <p className="text-center">
                <a
                  className="btn --primary m-auto"
                  style={{ width: 390, maxWidth: "100%" }}
                  href="contact-us"
                >
                  Start Now
                </a>
              </p>
            </section>
          </main>
        </div>
        <footer className="footer-section">
          <svg
            className="absolute w-full h-full top-0 right-0"
            width={1440}
            height={312}
            viewBox="0 0 1440 312"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ minWidth: 1440 }}
          >
            <path d="M0 103.338L1440 0V312H0V103.338Z" fill="#1482E5" />
          </svg>
          <div className="wrapper">
            <div className="footer-section__content">
              <div className="flex flex-col lg:items-end h-full lg:mt-2">
                <a href="index.html" className="footer-logo">
                  <img
                    alt="Chaos Labs"
                    src="_next/static/media/chaos-labs.5daaa768.svg"
                    width={136}
                    height={24}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent" }}
                  />
                </a>
              </div>
              <div className="footer-menus">
                <ul className="footer-menu">
                  <li>
                    <p>Solutions</p>
                  </li>
                  <li>
                    <ul className="submenu">
                      <li>
                        <a href="solutions/risk-management">Risk Management</a>
                      </li>
                      <li>
                        <a href="solutions/liquidity-incentives-optimization">
                          Incentive Optimization
                        </a>
                      </li>
                      <li>
                        <a href="solutions/simulations">Simulations</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul className="footer-menu">
                  <li>
                    <a href="customers">Customers</a>
                  </li>
                </ul>
                <ul className="footer-menu">
                  <li>
                    <a href="blog">Blog</a>
                  </li>
                </ul>
                <ul className="footer-menu">
                  <li>
                    <p>Company</p>
                  </li>
                  <li>
                    <ul className="submenu">
                      <li>
                        <a href="about">About</a>
                      </li>
                      <li>
                        <a href="careers">Careers</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul className="footer-menu">
                  <li>
                    <a href="terms-of-service">Terms of Service</a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col lg:mt-2">
                <ul className="footer-socials flex-1">
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCMgSOd_ZsVpDxbpuoIBYYSw"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.1711 7.6785C2.29215 5.81694 3.72849 4.33555 5.58971 4.20941C7.21433 4.09931 9.40027 4 12 4C14.5997 4 16.7857 4.09931 18.4103 4.20941C20.2715 4.33555 21.7078 5.81694 21.8289 7.6785C21.9193 9.06851 22 10.6796 22 12C22 13.3204 21.9193 14.9315 21.8289 16.3215C21.7078 18.1831 20.2715 19.6645 18.4103 19.7906C16.7857 19.9007 14.5997 20 12 20C9.40027 20 7.21433 19.9007 5.58971 19.7906C3.72849 19.6645 2.29215 18.1831 2.1711 16.3215C2.08072 14.9315 2 13.3204 2 12C2 10.6796 2.08072 9.06851 2.1711 7.6785ZM11.5521 9.16775C10.8873 8.72761 10 9.20428 10 10.0016V13.9986C10 14.7959 10.8873 15.2726 11.552 14.8325L14.5454 12.8507C15.1546 12.4474 15.1547 11.5531 14.5455 11.1497L11.5521 9.16775Z"
                          fill="#E5E9EB"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.twitter.com/chaos_labs"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.6466 6.40783C21.8009 6.04785 21.5002 5.6583 21.1129 5.7164L19.3113 5.98664C19.2549 5.9951 19.198 5.97756 19.154 5.94122C18.5742 5.46156 17.4425 5 16.375 5C13.875 5 12 6.75 12 9.08333V9.16667C12 9.44281 11.7761 9.66722 11.5 9.66293C10.785 9.65181 10.1184 9.61482 9.5 9.53738C8.34112 9.39225 7.35188 9.10509 6.53228 8.58007C5.98647 8.23042 5.51589 7.77528 5.12054 7.18635C4.86252 6.80198 4.2434 6.84078 4.16033 7.29622C4.00663 8.13892 3.99019 8.95835 4.11101 9.72661C4.29943 10.9248 4.82169 11.9985 5.67779 12.8421C6.11115 13.2691 6.63006 13.6371 7.23451 13.9325C7.61915 14.1204 7.66856 14.6578 7.26774 14.8082C6.5849 15.0644 5.82942 15.2257 5.09542 15.3273C5.0481 15.3338 5.00087 15.3401 4.95376 15.3462C4.17918 15.4458 3.43553 15.4809 2.83485 15.4933C2.45706 15.5011 2.2261 15.8996 2.46804 16.1898C2.98371 16.8085 3.69552 17.325 4.5387 17.7394C6.24886 18.5798 8.49943 19 10.75 19C16.3491 19 20.7097 16.1101 20.7497 8.60432C20.7501 8.53661 20.7638 8.46791 20.7904 8.40567L21.6466 6.40783Z"
                          fill="#E5E9EB"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/chaos-labs-xyz/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.2413 3H15.2413H15.2413H8.7587H8.75869H8.75867C7.95371 2.99999 7.28936 2.99998 6.74818 3.0442C6.18608 3.09012 5.66938 3.18868 5.18404 3.43598C4.43139 3.81947 3.81947 4.43139 3.43598 5.18404C3.18868 5.66938 3.09012 6.18608 3.0442 6.74818C2.99998 7.28936 2.99999 7.95371 3 8.75867V8.75869V8.7587V15.2413V15.2413V15.2413C2.99999 16.0463 2.99998 16.7106 3.0442 17.2518C3.09012 17.8139 3.18868 18.3306 3.43598 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.66938 20.8113 6.18608 20.9099 6.74818 20.9558C7.28937 21 7.95372 21 8.75868 21H15.2413C16.0463 21 16.7106 21 17.2518 20.9558C17.8139 20.9099 18.3306 20.8113 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.8113 18.3306 20.9099 17.8139 20.9558 17.2518C21 16.7106 21 16.0463 21 15.2413V8.75868C21 7.95372 21 7.28937 20.9558 6.74818C20.9099 6.18608 20.8113 5.66938 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43598C18.3306 3.18868 17.8139 3.09012 17.2518 3.0442C16.7106 2.99998 16.0463 2.99999 15.2413 3ZM9 8C9 8.55229 8.55229 9 8 9C7.44772 9 7 8.55229 7 8C7 7.44772 7.44772 7 8 7C8.55229 7 9 7.44772 9 8ZM7 12C7 11.4477 7.44772 11 8 11C8.55229 11 9 11.4477 9 12V16C9 16.5523 8.55229 17 8 17C7.44772 17 7 16.5523 7 16V12ZM13 14C13 13.4477 13.4477 13 14 13C14.5523 13 15 13.4477 15 14V16C15 16.5523 15.4477 17 16 17C16.5523 17 17 16.5523 17 16V14C17 12.3431 15.6569 11 14 11C13.5369 11 13.0982 11.105 12.7066 11.2924C12.5257 11.1117 12.2759 11 12 11C11.4477 11 11 11.4477 11 12V14V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V14Z"
                          fill="#E5E9EB"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.github.com/ChaosLabsInc"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        width={24}
                        height={23}
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.25 11.2998C23.25 5.0748 18.225 0.0498047 12 0.0498047C5.775 0.0498047 0.75 5.0748 0.75 11.2998C0.75 16.2498 3.9 20.4498 8.325 21.9498C8.625 21.7248 8.925 21.4998 8.925 21.1248C8.925 20.5248 8.925 18.9498 8.925 18.9498C8.925 18.9498 8.4 19.0248 7.725 19.0248C6 19.0248 5.4 17.8998 5.175 17.2998C4.8 16.4748 4.35 16.0998 3.9 15.7998C3.6 15.6498 3.525 15.4248 3.9 15.3498C5.475 15.0498 5.85 17.0748 6.9 17.4498C7.65 17.6748 8.625 17.5998 9.075 17.2998C9.15 16.6998 9.6 16.0998 9.975 15.8748C7.35 15.6498 5.775 14.6748 4.95 13.2498L4.875 13.0998L4.575 12.4998L4.5 12.3498C4.275 11.5998 4.125 10.7748 4.125 9.7998C4.125 8.0748 4.65 7.47481 5.4 6.57481C4.875 4.62481 5.625 3.2748 5.625 3.2748C5.625 3.2748 6.75 3.0498 8.925 4.5498C10.125 4.0248 13.2 4.0248 14.7 4.4748C15.6 3.8748 17.25 3.0498 17.925 3.2748C18.075 3.5748 18.525 4.39981 18.15 6.27481C18.375 6.64981 19.575 7.5498 19.575 10.0248C19.575 10.9248 19.425 11.6748 19.275 12.3498L19.2 12.6498C19.2 12.6498 19.125 12.7998 19.05 12.9498L18.975 13.0998C18.225 14.8248 16.575 15.4248 14.025 15.7248C14.85 16.2498 15.075 16.9248 15.075 18.7248C15.075 20.5248 15.075 20.7498 15.075 21.1998C15.075 21.5748 15.375 21.7998 15.6 22.0248C20.025 20.4498 23.25 16.2498 23.25 11.2998Z"
                          fill="#E5E9EB"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
                <p className="footer-copy text-sm">
                  Ⓒ {/* */}2024{/* */} Chaos Labs, Inc
                </p>
              </div>
            </div>
          </div>
        </footer>

    </>
  )
}

export default App

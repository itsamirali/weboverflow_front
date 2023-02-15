import Image from "next/image";
import Link from "next/link";
import React from "react";
import port1 from "../Images/port1.jpeg";
import port2 from "../Images/port2.jpeg";
import port3 from "../Images/port3.jpeg";
import port4 from "../Images/port4.jpeg";
import port5 from "../Images/port5.jpeg";
import port6 from "../Images/port6.jpeg";

import styles from "../styles/Portfolio.module.css";
import cx from "classnames";

const PortfolioPage = () => {
  return (
    <div className="container">
      {/* <div className="navbarSpacer d-flex"></div> */}
      <h1>Awesome clients. Many industries.</h1>
      <p className="my-4">Here are a few of our recent clients.</p>
      <p className="my-4">
        Interested in seeing what we can do for your business?{" "}
        <Link href="/worktogether">Let’s work together</Link>! If you need help
        immediately, you can call or text us at 281-782-9819 so we can help you
        right away.
      </p>
      <div
        className={
          (styles.portWrapper,
          "d-flex flex-column flex-lg-row align-items-start justify-content-center mt-5 pt-md-5")
        }
      >
        <div
          className={cx(
            styles.portInfo,
            "d-flex",
            "flex-column",
            "align-items-start",
            "justify-content-start",
            "px-4"
          )}
        >
          <h2>About Our Client</h2>
          <p>
            Freshful is an online only discounter fresh produce. Helping their
            local market eat healthier and save by passing along internet-only
            savings to their customers!
          </p>
          <h2>What We Did</h2>
          <ol>
            <li>Responsive Web Development</li>
            <li>Online Shopping Solution</li>
          </ol>
        </div>
        <Image
          className={cx(styles.portWrapperImg)}
          src={port1}
          height={300}
          alt="About Our Client"
        />
      </div>
      <div
        className={
          (styles.portWrapper,
          "d-flex flex-column flex-lg-row align-items-start justify-content-center mt-5 pt-md-5")
        }
      >
        <Image
          className={cx(styles.portWrapperImg)}
          src={port2}
          height={300}
          alt="About Our Client"
        />
        <div
          className={cx(
            styles.portInfo,
            "d-flex",
            "flex-column",
            "align-items-start",
            "justify-content-start",
            "px-4"
          )}
        >
          <h2>About Our Client</h2>
          <p>
            The Wireless Repair EXPO is a specialty pavilion held onsite during
            CTIA Super Mobility 2016 in Las Vegas. savings to their customers!
          </p>
          <h2>What We Did</h2>
          <ol>
            <li>Responsive Web Development</li>
          </ol>
        </div>
      </div>
      <div
        className={
          (styles.portWrapper,
          "d-flex flex-column flex-lg-row align-items-start justify-content-center mt-5 pt-md-5")
        }
      >
        <div
          className={cx(
            styles.portInfo,
            "d-flex",
            "flex-column",
            "align-items-start",
            "justify-content-start",
            "px-4"
          )}
        >
          <h2>About Our Client</h2>
          <p>
            Maison Maison reflects the style and taste of owner and Principal
            Interior Designer Suzanne Duin, ASID and specializes in French
            antiques and home accessories.
          </p>
          <h2>What We Did</h2>
          <ol>
            <li>Responsive Web Development</li>
            <li>WordPress Online Shop</li>
          </ol>
        </div>
        <Image
          className={cx(styles.portWrapperImg)}
          src={port3}
          height={300}
          alt="About Our Client"
        />
      </div>
      <div
        className={
          (styles.portWrapper,
          "d-flex flex-column flex-lg-row align-items-start justify-content-center mt-5 pt-md-5")
        }
      >
        <Image
          className={cx(styles.portWrapperImg)}
          src={port4}
          height={300}
          alt="About Our Client"
        />
        <div
          className={cx(
            styles.portInfo,
            "d-flex",
            "flex-column",
            "align-items-start",
            "justify-content-start",
            "px-4"
          )}
        >
          <h2>About Our Client</h2>
          <p>
            WetSeat is an easy on & off strapless seat cover that protects your
            car’s interior. No matter how wet, dirty or messy your active
            lifestyle is.
          </p>
          <h2>What We Did</h2>
          <ol>
            <li>Responsive Web Development</li>
            <li>Shopify Shop Setup</li>
          </ol>
        </div>
      </div>
      <div
        className={
          (styles.portWrapper,
          "d-flex flex-column flex-lg-row align-items-start justify-content-center mt-5 pt-md-5")
        }
      >
        <div
          className={cx(
            styles.portInfo,
            "d-flex",
            "flex-column",
            "align-items-start",
            "justify-content-start",
            "px-4"
          )}
        >
          <h2>About Our Client</h2>
          <p>
            Hurst Lending & Insurance is a Texas based mortgage and insurance
            provider with special expertise in niche loans and meeting unique
            lending needs.
          </p>
          <h2>What We Did</h2>
          <ol>
            <li>Maintenance & Upgrades</li>
          </ol>
        </div>
        <Image
          className={cx(styles.portWrapperImg)}
          src={port5}
          height={300}
          alt="About Our Client"
        />
      </div>
      <div
        className={
          (styles.portWrapper,
          "d-flex flex-column flex-lg-row align-items-start justify-content-center mt-5 pt-md-5")
        }
      >
        <Image
          className={cx(styles.portWrapperImg)}
          src={port6}
          height={300}
          alt="About Our Client"
        />
        <div
          className={cx(
            styles.portInfo,
            "d-flex",
            "flex-column",
            "align-items-start",
            "justify-content-start",
            "px-4"
          )}
        >
          <h2>About Our Client</h2>
          <p>
            Erik Liljenwall Fund aims to improve the lives of next generation
            leaders by supporting academics and educational achievements through
            scholarships, encouraging entrepreneurial ideas through grant
            programs, and supplying resources to human service organizations.
          </p>
          <h2>What We Did</h2>
          <ol>
            <li>Responsive Web Development</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;

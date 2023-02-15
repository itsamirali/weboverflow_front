import styles from "../styles/Home.module.css";
import cx from "classnames";
import Image from "next/image";
import Logo from "../Images/WebOverflow_Logo.png";
import Link from "next/link";

export default function Home() {
  const planDataList = [
    {
      title: "WORDPRESS WEBSITES",
      text: "We can set up your WordPress website, including basic search engine optimization. Then, we’ll show you how to keep it up-to-date with a user-friendly control panel and a simple editor that’s much like familiar word processing software.",
    },
    {
      title: "ONLINE SHOP SOLUTIONS",
      text: "Opening your business to new customers across the country or around the world is easier than you may think. There are a number of solutions that make it easy and cost-effective to create an online storefront that will grow your business. We can help!",
    },
    {
      title: "ONLINE SHOP SOLUTIONS",
      text: "Selling on Amazon or Walmart offers instant access to thousands of potential customers, but comes with unfamiliar challenges for most.  We can help you with every step along the way, including setup, product selection, marketing and logistics.",
    },
    {
      title: "WEBSITE MAINTENANCE",
      text: "Too busy to update your website, hate to write, or intimidated by technology? Whether your website needs a one-time overhaul, occasional updates, or ongoing weekly maintenance, we’ll take all the hassle out of maintaining your site.",
    },
  ];
  return (
    <div className="position-relative">
      {/* https://www.weboverflow.com/wp-content/uploads/2015/02/small-biz-ax.jpg */}
      <div className={cx(styles.headerContainer, "d-flex", "flex-column")}>
        <div
          className={cx(styles.heroSection, "d-flex", "flex-column", "w-100")}
        >
          <div
            className={cx(
              styles.summeryContactUsContainer,
              "py-3",
              "border-bottom",
              "bg-white"
            )}
          >
            <div className="container d-flex w-100 align-items-center justify-content-between">
              <div className="d-flex align-items-center justify-content-center">
                <span className={cx(styles.contactUsInfo)}>
                  Call: 281-782-9819
                </span>
                <span className={cx(styles.contactUsInfo, "mx-2")}>|</span>
                <span className={cx(styles.contactUsInfo)}>
                  hello@weboverflow.com
                </span>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#2773BE"
                  class="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-100 bg-white">
            <nav
              className={cx(
                styles.navbar,
                "container",
                "d-flex",
                "flex-column",
                "flex-xl-row",
                "align-items-center",
                "justify-content-xl-between",
                "justify-content-center",
                "py-4",
                "position-sticky"
              )}
            >
              <Image
                src={Logo}
                unoptimized
                height={71}
                alt="weboverflow"
                className="d-flex mb-xl-0 mb-4"
              />
              <ul
                className={cx(
                  styles.navbarList,
                  "d-flex align-items-center justify-content-end mb-0 p-0"
                )}
              >
                <li className={cx(styles.navbarLink, "ms-xl-5", "ms-0")}>
                  <Link href="/">Home</Link>
                </li>
                <li className={cx(styles.navbarLink, "ms-xl-5", "ms-3")}>
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li className={cx(styles.navbarLink, "ms-xl-5", "ms-3")}>
                  <Link href="/contact">Contact</Link>
                </li>
                <li className={cx(styles.navbarLink, "ms-xl-5", "ms-3")}>
                  <Link href="/worktogether">Let’s Work Together</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className={cx(styles.planSection, "w-100", "py-5")}>
        <div className={cx(styles.cardContainer, "d-flex", "container")}>
          {planDataList.map((item, index) => (
            <div
              key={index}
              className="border rounded d-flex flex-column align-items-center justify-content-center mx-3 py-4 px-3 bg-white"
            >
              <h2 className="w-100 text-center">
                <strong>{item.title}</strong>
              </h2>
              <p className="text-center">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <footer className="w-100">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="container d-flex w-100 align-items-center justify-content-between">
            <div className="d-flex align-items-center justify-content-center py-4">
              <span className={cx(styles.contactUsInfo)}>
                Copyright 2016 WebOverflow.ir
              </span>
              <span className={cx(styles.contactUsInfo, "mx-2")}>|</span>
              <span className={cx(styles.contactUsInfo)}>
                All Rights Reserved
              </span>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#2773BE"
                class="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

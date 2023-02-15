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
    </div>
  );
}

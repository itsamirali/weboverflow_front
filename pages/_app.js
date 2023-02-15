import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "../Images/WebOverflow_Logo.png";
import cx from "classnames";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div
        className={cx(styles.heroSection2, "d-flex", "flex-column", "w-100")}
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
      <div className="navbarSpacer d-flex"></div>
      <Component {...pageProps} />
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
    </>
  );
}

export default MyApp;

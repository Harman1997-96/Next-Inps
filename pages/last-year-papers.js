import React from "react";
import Link from "next";
import {
  PageBanner,
  PageHeading,
  PageDescription,
} from "./internal-pages-style";
// import { Container } from "react-bootstrap";
export default function onlineclasses({ pageData }) {
  const mediaBaseUrl = "http://localhost:1337";
  const bannerUrl = mediaBaseUrl + pageData.banner[0].url;

  return (
    <>
      <PageBanner bgImgUrl={bannerUrl}>
        <div className="Container">
          <PageHeading>
            <div>{pageData.heading}</div>
          </PageHeading>
        </div>
      </PageBanner>
      <div className="Container">
        <PageDescription>{pageData.description}</PageDescription>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/pages?name=Last%20Year%20Papers");
  const pages = await res.json();
  const pageData = pages[0];
  return {
    props: {
      pageData,
    },
  };
}

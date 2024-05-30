import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Labfox",
  description: "Labfox",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;

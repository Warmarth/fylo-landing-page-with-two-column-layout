import React from "react";
import Header from "../components/header";
import Form from "../components/Form";
import Testimonial from "../components/Testimonial";
import Form2 from "../components/form2";
import Footer from "../components/Footer";
const pageText = {
  head: " All your files in one secure location, accessible anywhere.",
  page: "Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family,and co-workers.",
};
const pageText2 = {
  head: "Get early access today",
  page: "It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.",
};

const home = () => {
  return (
    <main>
      <Header />
      <Form props={pageText} />
      <Testimonial />
      <Form2 props={pageText2} />
      <Footer />
    </main>
  );
};

export default home;

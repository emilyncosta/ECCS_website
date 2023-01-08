import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import { SocialIcon } from 'react-social-icons';
import EmilynCostaImageUrl from "@site/static/img/emilyncosta.png";


export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Home Page`}
      description="Emilyn Costa Conceição Sharma's (@emilyncosta) personal website."
    >
      <main>


        <div class="hero">
          <div class="container">
            <div class="row row--no-gutters">
              <div class="col"> </div>

              <div class="col col--offset-4">
                <div class="col--offset">
                   <img src={EmilynCostaImageUrl} width={250} height={310} /> 
                </div>
                <p class="hero__subtitle">
                  <p>
                    {'Emilyn ❤️ Science and Education'}
                  </p>
                </p>

                <div>
                  <span class="margin--sm">  <SocialIcon url="https://github.com/emilyncosta" /></span>
                  <span class="margin--sm"> <SocialIcon url="https://www.linkedin.com/in/emilyncosta" /> </span>
                  <span class="margin--sm"> <SocialIcon url="https://twitter.com/emilyncosta" /> </span>
                </div>

                <div />
                <div />
                <div />

                {/* <div class="margin-top--sm padding-top--sm"> */}
                {/*   {"BioSharp OÜ is a company registered in"} */}
                {/* </div> */}

              </div>

            </div>

          </div>
        </div>


      </main>
    </Layout >
  );
}

import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Home Page`}
      description="Emilyn Costa Conceição (emilyncosta) personal website."
    >
      <main>
        <div class="hero shadow--lw">
          <div class="container">
            <h1 class="hero__title">Emilyn Costa Conceição</h1>
            <p class="hero__subtitle"></p>
            <div>
              <a
                class="button button--outline button--secondary"
                href="https://github.com/emilyncosta"
              >
                Github
              </a>

              <a
                class="button button--outline button--secondary"
                href="https://www.linkedin.com/in/emilyncosta"
              >
                LinkedIn
              </a>

              <a
                class="button button--outline button--secondary"
                href="https://www.researchgate.net/profile/Emilyn_Conceicao"
              >
                Research Gate
              </a>

              <a
                class="button button--outline button--secondary"
                href="https://ufrj.academia.edu/EmilynCosta"
              >
                Academic.edu
              </a>

              <a
                class="button button--outline button--secondary"
                href="https://twitter.com/emilyncosta"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

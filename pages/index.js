import Head from "next/head";
import LogoBanner from "../components/LogoBanner";
import ConsentOrdersInAustralia from "../content/ConsentOrdersInAustralia";
import HomeHero from "../content/HomeHero";
import MKITeam from "../content/MKITeam";
import MostPopularOnlineServices from "../content/MostPopularOnlineServices";
import OurLegalTeam from "../content/OurLegalTeam";
import SendAnOfferToYourEx from "../content/SendAnOfferToYourEx";
import WeOperateAustraliaWide from "../content/WeOperateAustraliaWide";
import WeWillRepresentYou from "../content/WeWillRepresentYou";

import DefaultLayout from "layouts/BaseLayout";
import GetInTouch from "components/GetInTouch";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Low-cost, affordable family law online services | MKI Legal
        </title>
        <meta
          name="description"
          content="Get family law help for less by doing it online."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultLayout>
        <HomeHero />
        <MostPopularOnlineServices />
        <MKITeam />
        <ConsentOrdersInAustralia />
        <LogoBanner />
        <SendAnOfferToYourEx />
        <WeWillRepresentYou />
        <OurLegalTeam />
        <WeOperateAustraliaWide />
        <GetInTouch isDiscussionFreeToShow={true} />
      </DefaultLayout>
    </div>
  );
}

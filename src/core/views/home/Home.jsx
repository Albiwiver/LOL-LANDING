import { HeroComponent } from "../../../common/hero/HeroComponent";
import { NewsComponent } from "../../../common/news/NewsComponent";
import { ChampSelectComponent } from "../../components/ChampSelect/ChampSelectComponent";
import { SkinSection } from "../../../common/SkinSection";

import { WaysToPlay } from "../../components/ChampSelect/WaysToPlay";
export const Home = () => {
  return (
    <>
      <HeroComponent
        video="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/8ab3e227121c53aacab0c9b9f7a48adbc65db520.webm"
        buttonTitle="JUGAR GRATIS"
      />
      <NewsComponent />
      <ChampSelectComponent />
      <SkinSection />
      <WaysToPlay />
      <HeroComponent
        video="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/1f5b2cf01a1cf2afa1ce61febee6e2e900808347.mp4"
        buttonTitle="JUGAR GRATIS"
        hasLogo={false}
        hasPadding={false}
        hasBorder={false}
        mainHero={false}
      />
    </>
  );
};

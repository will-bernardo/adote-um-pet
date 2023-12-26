import MainPageSection1 from "../components/MainPageSection1";
import MainPageSection2 from "../components/MainPageSection2"
import MainPageSection3 from "../components/MainPageSection3"
import MainPageSection4 from "../components/MainPageSection4"
import { Fade } from "@chakra-ui/react";


export default function MainPage() {
  return (
    <>
      <Fade in={true}>
      <MainPageSection1 />
      <MainPageSection2 />
      <MainPageSection3 />
      <MainPageSection4 />
      </Fade>
    </>

  )
}

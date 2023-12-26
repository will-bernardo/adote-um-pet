import { Fade } from "@chakra-ui/react";
import { useState } from "react";

export default function ErrorPage() {
  const [fade, setFade] = useState(true)

  return (
    <Fade in={true}>
    <div>
      <h1>Oops!</h1>
      <p>Página não encontrada</p>
      <p>
        <i>404</i>
      </p>
    </div>
    </Fade>
  );
}

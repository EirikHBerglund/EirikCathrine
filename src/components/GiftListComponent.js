import * as React from "react";
import Iframe from "react-iframe";
import { Link } from "react-router-dom";

export class GiftListComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Ønskjeliste</h1>
        <p>
          <strong>
            Vi har laga ønskjeliste hos Kitchn. De står imidlertid fritt til å
            kjøpe gjenstander på lista frå ein annan forhandlar - ver då obs på
            at det vert riktig variant, vis gjerne varen på lista til Kitchn.
            Lista er gengitt under men er også tilgjengelig direkte{" "}
            <a href="https://www.kitchn.no/bryllup/vis-liste/?wishListId=92318">
              her
            </a>.
          </strong>
        </p>
        <p>
          Dersom de kjøper hos Kitchn så set me pris på om de registrerer det på
          lista slik at de andre som kjem etter får oversikt over kva de har
          kjøpt. Dersom de kjøper på nett kan ein legge varen i den digitale
          handlekurva ved å følge linken over. Dersom de kjøper i butikk, oppgi
          bryllup til <em>Marceliussen</em> så legg dei det til lista for deg.
        </p>
        <p>
          Dersom du veljer å kjøpe noko frå lista hos ein annan forhandlar - gi
          gjerne ein beskjed til <Link to="/kontakter">Fridtjof</Link> så kan
          han oppdatere ønskjelista.
        </p>

        <p>
          <em>
            NB! Dersom de ikkje vil gi noko frå lista så tek me gjerne imot
            pengegåver også. Det kan anten overførast til konto 1203.48.83414,
            eller via Vipps til nummer 47650016.
          </em>
        </p>

        <Iframe
          url="https://www.kitchn.no/bryllup/vis-liste/?wishListId=92318"
          width="100%"
          height="100vh"
          id="giftlist"
          className="giftlist"
          display="initial"
          position="relative"
          allowFullScreen
        />
      </div>
    );
  }
}

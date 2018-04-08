import React from "react";

export class OverviewComponent extends React.Component {
  render() {
    return (
      <div className="row" marginTop="40">
        <div className="col-md-3 col-sm-1" />
        <div
          className="col-md-6 col-sm-10"
          style={{ fontSize: "large", textAlign: "left" }}
        >
          <p>
            Her finn ein informasjon om vårt bryllaup den 23.06.2018. Vielsen
            vil finne sted i Os Kyrkje frå klokka 13 - her er alle som ønskjer
            velkomen. Etter bryllupet dreg me og inviterte gjestar til
            Moldegaard der me vil ha mottakelse, middag og gjerne litt attåt.
          </p>
          <p>
            På denne sida vil ein finne praktisk informasjon for deg som gjest i
            bryllupet. Dersom de ikkje finn det du lurar på, så kontakt anten
            Eirik eller Cathrine. Dersom du ønskjer å halde ein tale/ha eit
            innlegg så ta kontakt med toastmaster Benjamin Skåtun.
          </p>
          <p>
            Me ønskjer de velkomen til bryllup og me er sikre på at det vert ein
            flott dag!
          </p>
        </div>
        <div className="col-md-3 col-sm-1" />
      </div>
    );
  }
}

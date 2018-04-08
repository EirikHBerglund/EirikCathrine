import React from "react";
import { render } from "react-dom";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { OverviewComponent } from "./components/overviewComponent";
import { NavComponent } from "./components/NavComponent";
import { GiftListComponent } from "./components/GiftListComponent";
import MapContainer from "./components/MapContainer";

import "./css/style.css";

const App = () => (
  <div>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </div>
);

class Layout extends React.Component<{}, {}> {
  render() {
    return (
      <div className="container-fluid content">
        <div className="row">
          <HeaderComponent />
        </div>
        <div className="row">
          <NavComponent />
        </div>
        <div className="row article">
          <MainComponent />
        </div>
      </div>
    );
  }
}

const MainComponent = () => {
  return (
    <Switch>
      <Route exact path="/" component={OverviewComponent} />
      <Route path="/oversikt" component={OverviewComponent} />
      <Route path="/moldegaard" component={MoldegaardComponent} />
      <Route path="/oskyrkje" component={OsKyrkjeComponent} />
      <Route
        path="/transport-tiloskyrkje"
        component={TransportToOsKyrkjeComponent}
      />
      <Route
        path="/transport-tilmoldegaard"
        component={TransportToMoldegaardComponent}
      />
      <Route path="/onskeliste" component={GiftListComponent} />
    </Switch>
  );
};

class MoldegaardComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Moldegaard</h1>
        <p>
          <strong>
            Mottakelse, middag og festligheter vil finne stad på Moldegaard.
            Moldegaard er idag mest kjent som selskapslokale samt ridesenter -
            men garden og Stallmestergarden, bygget der me vil helde til, har
            ein lang og rik historie.
          </strong>
        </p>
        <p>
          Moldegaard har ein lang og innhaldsrik historie. Garden var i vanleg
          drift fram til rundt 1610 då Ola Molda, av uviss årsak, selgde garden
          til presten Samuel Loss. Sidan har garden stort sett vore i hendene på
          dei velforsynte,
        </p>

        <p>
          I løpet av årene Moldegaard har vore på stormennenes hender har det
          vore mykje interresante gjestar til stades. Mellom anna kan ein under
          bryllupet gå i fotspora til menn som Christian Michelsen og Johan
          Ludwig Mowinckel.
        </p>

        <p>
          Vil du vite meir om Moldegaard kan du lese meir om dei{" "}
          <a href="http://www.moldegard.com/">her</a>.
        </p>
      </div>
    );
  }
}

class OsKyrkjeComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Os Kyrkje</h1>

        <p>
          <strong>
            Vielsen vår vil finne stad i Os Kyrkje frå klokka 13 til klokka 14.
            Her er alle som ønskjer velkommen til å følge vielsen.
          </strong>
        </p>

        <p>
          Det er uklart når Os Kyrkje (første bygg) vart reist, men truleg vart
          den første reist kring år 1050. Os Kyrkje slik den framstår idag er
          den tredje versjonen av kyrkja, og vart reist i 1870. Vert vielsen for
          keisam kan ein ta seg ein tur i klokketårnet, og ein vil då finne ei
          av klokkene som har vore installert i alle tre versjoner av kyrkja.
        </p>

        <p>
          Vil du finne ut meir om Os Kyrkje kan du lese på{" "}
          <a href="https://oskommune.no/om-osbygdo/historiske-os/historia-til-kyrkjene-i-os/os-kyrkje/">
            Os Kommune sine sider
          </a>{" "}
          og på <a href="https://kyrkja.no/os">Os kyrkjelyd sine sider</a>
        </p>
      </div>
    );
  }
}

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className="header row container-fluid">
        <div className="row">
          <div className="header-sideimg col-md-2 col-xs-3">
            <img
              width="100%"
              height="100%"
              alt=""
              src="http://cathrineogeirik.no/images/branch-1-l.png"
            />
          </div>
          <div className="header-text col-md-8 col-xs-6">
            <h1>Eirik og Cathrine</h1>
            <h2>23.06.2018</h2>
          </div>
          <img
            className="header-sideimg col-md-2 col-xs-3"
            alt=""
            src="http://cathrineogeirik.no/images/branch-1-r.png"
          />
        </div>
        <div className="row">
          <img
            className="header-img col-xs-12"
            alt="E&C"
            src="http://cathrineogeirik.no/images/header-image.png"
          />
        </div>
      </div>
    );
  }
}

const OsKyrkjeLongLat = {
  lat: 60.187085,
  lng: 5.469602
};

class TransportToOsKyrkjeComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Adkomst Os Kyrkje</h1>
        <p>Transport til Os Kyrkje må ein syte for sjølv.</p>

        <h4>Adkomst med bil</h4>
        <p>
          Her kan ein anten køyre gjennom Os Sentrum, eller ved å køyre E39 mot
          Os og ta av før 40 sona. Det vil normalt vere godt med ledige
          parkeringsplasser ved kyrkja og ellers i Os Sentrum, men det vil vere
          vielser same dag før vår vielse så husk å rekne litt ekstra tid om de
          må parkere lenger unna kyrkja.
        </p>

        <h4>Adkomst med buss</h4>
        <p>
          Det enklaste er å ta bussen til hovudstoppet i Os. For dei meir
          avanserte kollektivbrukarane er det næraste busstoppet stoppet før Os
          sentrum når ein kjem sørover på E39
        </p>

        <div className="mapcontainer-wrapper">
          <MapContainer
            initialLocation={OsKyrkjeLongLat}
            placeName={"Os Kyrkje"}
          />
        </div>
      </div>
    );
  }
}

const MoldegaardLongLat = {
  lat: 60.193631,
  lng: 5.499428
};

class TransportToMoldegaardComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Transport Os Kyrkje til Moldegaard</h1>
        <p>
          <strong>
            Me stiller med transport frå Os Kyrkje til Moldegaard for dei som
            ønskjer det. Det er imidlertid mulig å parkere ved Moldegaard for
            dei som ønskjer å køyre sjølv. Gi gjerne beskjed dersom de tenker å
            køyre sjølv så har me oversikt og kan sikre at det vert ledig
            parkeringsplass til alle.
          </strong>
        </p>

        <h4>Adkomst med buss</h4>
        <p>
          Me stiller med buss for transport Os Kyrkje til Moldegaard. Her reknar
          me med at alle som ikkje gir beskjed om at dei køyrer til Moldegaard
          sjølve ønskjer plass på bussen.
        </p>

        <h4>Adkomst med bil</h4>
        <p>
          Moldegaard ligg langs Hatvikvegen - det er skilta til Moldegaard. Me
          skal ha selskapet i
          <emp> Stallmestergaarden</emp>. På bildet under er Stallmestergaarden
          merka med gul firkant. Parkeringsplass me har til rådighet er markert
          med blå firkant. Vegen markert med raud pil går til Hatvikvegen, medan
          blå pil viser veg til parkområdet.
        </p>

        <div className="article-image-wrapper">
          <img
            className="article-image"
            src="http://www.cathrineogeirik.no/images/moldegaard-flyfoto.png"
          />
        </div>

        <div className="mapcontainer-wrapper">
          <MapContainer
            initialLocation={MoldegaardLongLat}
            placeName={"Moldegaard"}
          />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

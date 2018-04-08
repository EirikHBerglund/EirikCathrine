import React from "react";
import { render } from "react-dom";
import { Switch, BrowserRouter, Route, Link } from "react-router-dom";
import "./css/style.css";
import { OverviewComponent } from "./components/overviewComponent";
import { Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import MapContainer from "./components/MapContainer";

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
        <div>
          <MainComponent />
        </div>
      </div>
    );
  }
}

const Routes = () => (
  <Layout>
    <Route exact path="/" component={OverviewComponent} />
  </Layout>
);

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
      <div className="header row">
        <div className="container">
          <div className="row">
            <div className="header-sideimg col-sm-2 col-xs-3">
              <img
                width="100%"
                height="100%"
                alt=""
                src="https://lh3.googleusercontent.com/25WTV0kLsITrxYaPAWXCtsALFbB5YXG3Gt252Arr3jhb170WGRF2GAqAlk5v_XueTvVHZxO2CYOjO0IJq-nYVvyof_Kjhn3scX-I2_zmVoceGAOUyy8u4xRMC4qO7Gl-E9HAPbKyjtDG1IFk_NAWLcMH0gGnM2Q94JYA-vym5bAhhO7ht6KDX1AuDS7XepSgX63qU348eLJRMtIFwoyp4Aoz1RaNbYEsRto5bopV-F3qm6WFYk5OlGwDp8WPDcXSFAphB-w5Sp54Z5tNPgFIEzE9s0zot-_zDf_TERpGwtQ0YbdhQLDelz6Auwv5N9HrgFojuhlTdFlaA2_NQolTeZXm_-qYm7m8l9M6WU44Er0XleAjFzlCpgJuUYw3njQhUFUr6yyAp15G_N2k62qEpAOx3TgKrxOmIppGaaKp0NiUnwg5QQcSONCBoJ11dCudq6DRx1XlPze_9O7ULEzlCZadvyY6W3dw47EjQjbRqoMUZAWTFr1I1RkqoY3Y9m7_WgP_pfDJk-Fprs3gt47tMfbXoiy-U4DwV8Hkn_gGmKEvqh_Zp7FfD5EE5t-jy7rpaFrE1LYxtCiEYnP-cWg3nLuAJs99kXZf1sbT9hw=w1056-h900-no"
              />
            </div>
            <div className="header-text col-sm-8 col-xs-6">
              <h1>Eirik og Cathrine</h1>
              <h2>23.06.2018</h2>
            </div>
            <img
              className="header-sideimg col-sm-2 col-xs-3"
              alt=""
              src="https://lh3.googleusercontent.com/7aMIJr8IG-hNBYKQES9R0B1r7JMkbZlIY9712IVovazMUz6lrl6Tj6hvHbcU0SClyx0pVtMuaRz0dm9DcnTnLO66jj2dVSOU7FdGMlzrw-wtnHrtAuH1DHV_7o0bX7SC4Hm07APeef6YcE30idTiw3DOUsu3RzqshbATXH-VCGDC-NhSKS8b8k0-bMDcYNqe1_jn_FE_vveKd5v5M3hnY2IGVLZoGm4c6ZtfVOLgDADESyOmIaHP6ijxSEUCv_-amnQ2RccMcT1WvsAWKmCE2nez6Swd_mfqIRSA8X4L98iIkIZooRNb2YJWEsZXKf9Yzpo91EqtKVPC2dtHx7f2TS16h3uQ-eRXUhDJmmkNHW-QP_Yu0awK303E5xuIGg1_wqSW443UfF26d8zAnrbhoDJqwm4B61n9PKLyHgUne0RhesoGlFMJzCLKbz9mMtANOsf0Q2qdIgnvwgJPjAoIEEA8f5-e829Ekv7OUE8fUAN_USrt7vQqCl6PEkItEVitOH67BHChlcU_qCX9eo66BslY_vsUC1l2L7XeiTIBd5vc3AhKatwaqwYdoiRh5a3L4_wTpgLFIC6NfJFr-CxlNYV3_y2pUnW-qA77JMg=w1056-h900-no"
            />
          </div>
          <div className="row">
            <img
              className="header-img col-sm-12"
              alt="E&C"
              src="https://lh3.googleusercontent.com/3Fs3jVklE9fP7uk4p2xxZMjSbGvcMX0nGKG_UeqQzx6NWURvVgae0GhlLCjgOGoa01QNtOkvPaxzabeAyBy_64qF6R64WS5WBdsobpF5zdHURCne5uOU8KamzZPU0LTXg1DJauduy2wcQsMMBVOgKGKYSq0JAYK7RSUZYAxwwerbxVoo3kIUd6MQmaOuIZz387y2oKdu5tZf3RV_cNku4KVQQHuxvQ5zkXbwHehdoBGmlpJOw3OCXDA79P4u0cnBaGg8A9pvbDKnAXFN_lRXFH27ydq9BsitY4oLS2k_GA2ThiMADqCsA1aGu6voeYmn5LeQ-AjN2h7RsI70xRV8tZiH3l3_uZzmazoZjwcCNkSe9NBA7o2HOxJShQpGw_WV-EJteoX3xkO8adHfm1HpAUpA0EYm-jbKxsaOFINHi73wVrEEKwynWcmpPcvk3G-ZCIPTFJ6Zp7uqhcaHAU8rob1StFF0TyZ9z1SG0_kCrbOj_mFxKDeeKXKsyOwoJOwsVLJyITXkU6rrJX76v-lSYWPA0910jtfIQO1IabraFlcX9xAOKdOyvYJUGn6s-GKZ2z_p-c8lSMw2h5Lef9VA9XgQSxiw4EeidXBoTA0=w850-h220-no"
            />
          </div>
        </div>
      </div>
    );
  }
}

class NavComponent extends React.Component {
  render() {
    return (
      <ul className="nav nav-tabs nav-justified">
        <li role="presentation">
          <Link to="/">Oversikt</Link>
        </li>
        <li role="presentation">
          <Link to="oskyrkje">Os Kyrkje</Link>
        </li>
        <li role="presentation">
          <Link to="moldegaard">Moldegaard</Link>
        </li>
        <NavDropdown title="Transport">
          <li role="presentation">
            <Link to="transport-tiloskyrkje">Til Os Kyrkje</Link>
          </li>
        </NavDropdown>
      </ul>
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
          <MapContainer initialLocation={OsKyrkjeLongLat} />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

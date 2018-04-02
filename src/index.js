import React from "react";
import { render } from "react-dom";
import { Switch, BrowserRouter, Route, Link } from "react-router-dom";
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
        <div>
          <MainComponent />
        </div>
      </div>
    );
  }
}

const Routes = () => (
  <Layout>
    <Route exact path="/" component={HomeComponent} />
  </Layout>
);

const MainComponent = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeComponent} />
      <Route path="/home" component={HomeComponent} />
      <Route path="/moldegaard" component={MoldegaardComponent} />
    </Switch>
  );
};

class MoldegaardComponent extends React.Component {
  render() {
    return (
      <div>
        <h4>MoldegaardComponent</h4>
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
          <Link to="/">Heim</Link>
        </li>
        <li role="presentation">
          <Link to="/oskyrkje">Os Kyrkje</Link>
        </li>
        <li role="presentation">
          <Link to="/moldegaard">Moldegaard</Link>
        </li>
      </ul>
    );
  }
}

class HomeComponent extends React.Component {
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

render(<App />, document.getElementById("root"));

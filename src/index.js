class ParseData {
  mode = "production";

  config = {
    protocol: "",
    host: "",
    port: "",
    socket: "",
    surl: "",
    appId: "",
    clientKey: "",
    jsKey: "",
    resKey: "",
    masterKey: "",
    revocableSession: "",
    headerAppId: "",
    headerClientKey: "",
    headerResKey: "",
    headerMasterKey: "",
    headerRevocableSession: "",
    headerSessionToken: ""
  };

  setConfig(
    config = {
      mode: "",
      protocol: "",
      host: "",
      port: "",
      socket: "",
      surl: "",
      appId: "",
      clientKey: "",
      jsKey: "",
      resKey: "",
      masterKey: "",
      revocableSession: "",
      headerAppId: "",
      headerClientKey: "",
      headerResKey: "",
      headerMasterKey: "",
      headerRevocableSession: "",
      headerSessionToken: ""
    }
  ) {
    this.config = {
      protocol: config.protocol,
      host: config.host,
      port: config.port,
      socket: config.socket,
      surl: config.surl,
      appId: config.appId,
      clientKey: config.clientKey,
      jsKey: config.jsKey,
      resKey: config.resKey,
      masterKey: config.masterKey,
      revocableSession: config.revocableSession,
      headerAppId: config.headerAppId,
      headerClientKey: config.headerClientKey,
      headerResKey: config.headerResKey,
      headerMasterKey: config.headerMasterKey,
      headerRevocableSession: config.headerRevocableSession,
      headerSessionToken: config.headerSessionToken
    };
    if (config.mode !== "") {
      this.mode = config.mode;
    } else {
      this.mode = "production";
    }
  }
}

const Index = new ParseData();
export default Index;

import { constants } from "./constants";

export const getSubDomains = () => {

  const getSubDomainData = () => {
    const subdomain = getDeepSubdomain(window.location.hostname);
    const mainDomain = constants.find((app) => app.main);

    if(!mainDomain) throw new Error("Must have login app");

    if(subdomain === "") return mainDomain.app;

    const app = constants.find((app) => subdomain === app.subDomain);

    if(!app) return mainDomain.app;

    return app.app;
  }

  const getDeepSubdomain = (hostname) => {  
    console.log(hostname, "hostname");
    console.log(window.location.hash, "hash");
    const host = hostname.split(" ")[0];
    const hostSplite = host.split(".");

    let sliceTill = -2;
    // for localhost
    const isLocalHost = hostSplite.slice(-1)[0] === "localhost";
    if(isLocalHost) sliceTill = -1;

    return hostSplite.slice(0, sliceTill).join("");
  }

  return getSubDomainData();
}
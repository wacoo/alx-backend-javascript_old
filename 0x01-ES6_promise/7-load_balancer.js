/* accept two promise arguments and return the value resolved first */

export default function loadBalancer(chinaDownload, USDownload) {
  Promise.race([chinaDownload, USDownload]).then((value) => {
    //console.log(value);
    return value;
  });
  //.catch(() => console.log("ERROR"));
}

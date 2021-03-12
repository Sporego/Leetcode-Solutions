/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const uniqueEmailStore = {};

  for (i = 0; i < emails.length; i++) {
    let splitEmailInTwoArray = emails[i].split("@");
    let localName = splitEmailInTwoArray[0].replace(/\./g, "");
    if (localName.indexOf("+") > -1) {
      localName = localName.substring(0, localName.indexOf("+"));
    }
    let domainName = splitEmailInTwoArray[1];
    if (
      domainName.split(".").length == 2 ||
      domainName.split(".").length == 3
    ) {
      if (!(domainName in uniqueEmailStore)) {
        uniqueEmailStore[domainName] = [];
        uniqueEmailStore[domainName].push(localName);
      }

      if (!uniqueEmailStore[domainName].includes(localName)) {
        uniqueEmailStore[domainName].push(localName);
      }
    }
  }
  let count = 0;
  Object.keys(uniqueEmailStore).forEach(function (keyValue) {
    count = uniqueEmailStore[keyValue].length + count;
  });
  console.log(uniqueEmailStore);
  return count;
};

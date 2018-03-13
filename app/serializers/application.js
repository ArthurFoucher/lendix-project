import DS from "ember-data";

export default DS.RESTSerializer.extend({
  normalize(modelClass, resourceHash) {
    const data = {
      id: resourceHash.id,
      type: "project",
      attributes: {
        name: resourceHash.name,
        loanDuration: resourceHash.loanDuration,
        amount: resourceHash.amount,
        onlineDate: resourceHash.onlineDate,
        rate: resourceHash.rate,
        grade: resourceHash.grade,
        illustrationUrl: resourceHash.illustration.url,
        country: resourceHash.business.address.country
      }
    };
    return { data };
  }
});

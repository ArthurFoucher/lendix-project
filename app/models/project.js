import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr(),
  loanDuration: DS.attr(),
  amount: DS.attr(),
  onlineDate: DS.attr(),
  rate: DS.attr(),
  grade: DS.attr(),
  illustrationUrl: DS.attr(),
  country: DS.attr()
});

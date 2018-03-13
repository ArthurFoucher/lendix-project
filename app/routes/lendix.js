import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return [
      {
        name: "Sky Helicopteros",
        loanDuration: 60,
        amount: 600000,
        onlineDate: "2018-03-07T18:12:46.803Z",
        rate: 6.95,
        grade: "B",
        illustration: {
          name: "Logo.jpg",
          url:
            "users/581c5edcc98f440e00b9bfbc/image-ed793e0b6570d8414de7890cf54e9abf.jpg?Expires=1520938268&Key-Pair-Id=APKAISZ5D7DBUW5HTH7A&Signature=V0mhYR9-H4ax7FHZJOoBAIJj2CpLRcYx3kd6yX4x-tGs~W0OVPITs1d1667x89Hg4YQspGGDqY-5ByhxnIigBGXEl0c6Vw9YRcGWqqBaRvIGeUf2auMpBQq-PP4wrSiLbYSnQ2a93ompQSo8DQ8MIDrqtLpR5~w2kt61Te~5lTp7oVa2T~bJkH-cwcf3GFOKbJapwWw8TfME0nDJogiR8~rnVBoGQJDQaiNgE6XoLjdbKMbqnzrarwCHjq4s5OVcn35b1NfSKgQLjUNAc8V8fuAghrmAx5g8ARlIbLb-UXts8gFbAGoSUZPgNu-tekoipnICWohehQFSR7oGB707Ng__"
        },
        business: {
          address: {
            country: "es"
          }
        }
      },
      {
        name: "Osméa",
        loanDuration: 60,
        amount: 291000,
        totalInvested: 291000,
        onlineDate: "2018-03-12T16:02:57.822Z",
        rate: 7.05,
        grade: "C",
        illustration: {
          name: "Logo Osmea.png",
          url:
            "users/59ac72fc6d935e00262f054d/image-93053e194c66058f6d3d2bbccb02bcf8.png?Expires=1520938268&Key-Pair-Id=APKAISZ5D7DBUW5HTH7A&Signature=bPHbIQOfFm6BxCdSXhM3dHIH~xBrUEOONZ-upAsdRnzfhOUmxgQ-TxgfKI1dMWKQtKIEJkDTvqLAM~YJfKevv6OWBIZoTAwBvpl9PAJ6MZCmuR41iU2uSvnXuy8glEs9Rmlt9OY8XHNurdvZCi4FiMosZ4QF3rPFLzqP9a079AkmiIi7ey-hnW48Hh6JbvYELR-QQbWF-ooLqat-4f2hO-xwoMPH2~d4Xk1u46MH6n-nKpPFvAEI~7e7juYCfVu8dl9XfQQAxELS4egzbwjm3n1p7ZuKEyMf-RSorozu6ulOLWP92x5dNlmzUX48-xFmmsFIYeP6SPw3xVvT72P6-A__"
        },
        business: {
          address: {
            country: "fr"
          }
        }
      }
    ];
  }
});

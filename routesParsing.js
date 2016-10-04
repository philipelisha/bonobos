/*

 Write code to parse urls into a sitemap tree structure and display it as text.

 1. Parse routes into data structure
 */

const urls = `/home/anti-depressants/xanax
/home/heart/lipitor
/home/heart/atorvastatin
/home/heart/aspirin
/drugs/nasal/flonase
/drugs/topical
/drugs/routes/oral/tablets
/drugs/routes/nasal/flonase`

/**
 yuval@blinkhealth.com

 /*
 2. Format text output like shown in below

 - home
   - anti-depressants
     - xanax
   - heart
    - lipitor
    - atorvastatin
    - aspirin
 - drugs
   - nasal
     - flonase
   - topical
   - routes
     - oral
       - tablets
     - nasal
       - flonase

{
    home: {
        parent: null
    }
    anti-depressants: {
      parent: "home"
    },
    heart: {
      parent: "home"
    },
    lipitor: {
        parent: "heart"
    },
    atorvastatin: {
        parent: "heart"
    },
    aspirin: {
        parent: "heart"
    },
    drugs:  {
        parent: null
    },
    nasal: {
      parent: "drugs"
    },
    flonase: {
        parent: "nasal"
    },
    topical: {
        parent: "drugs"
    },
    routes: {
       parent: "drugs"
    },
    oral: {
        parent: "routes"
    },
    tablets: {
        parent: "oral"
    },
    nasal: {
        parent: "routes"
    }
}
 */
const splitString = (s) =>  s.split('\n');
const splitUrlComponents = (string) => string.split('/');

function parseUrls(u) {
    const urls = splitString(u).map(splitUrlComponents);
    var completedObject = {};
    for ( var i = 0, l = urls.length; i < l; i++ ) {
        urls[i].shift();
        urls[i].forEach(function(path, int){
            completedObject[path] = {
                "parent": urls[i][int - 1] === undefined ? null : urls[i][int - 1]
            };
        });
    }
    console.log(completedObject);
    return completedObject;
}

parseUrls(urls);



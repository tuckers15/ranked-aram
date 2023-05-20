const riotKey = 'RGAPI-2310915b-3c3d-4e27-9732-f56d7f6ead54';
const sp = '%20';
import fetchModule from "node-fetch";
import fs  from 'fs';


async function main() {
    console.log(await getMatchList(await fetchSumByName('DeafenedDan', 'puuid')));
  }

  function arrayConvert(data) {
    if (typeof data === 'string') {
      try {
        const trimmedOutput = data.trim();
        const matchIds = JSON.parse(trimmedOutput);
        return matchIds;
      } catch (error) {
        console.error('Error parsing JSON:', error);
        return [];
      }
    } else if (typeof data === 'object') {
        return Object.values(data);
    } else if (Array.isArray(data)){
        return data;
    }
    else {
      console.error('Invalid data type. Expected string or array.');
      return [];
    }
  }
  
async function getMatchList(puuid){
    //link building
    let link = 'https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/'+puuid+'/ids?queue=450&start=0&count=20&api_key='
    link += riotKey

    let response = await fetchModule(link);
    let matchIds = await response.json();

    // tests
    // let arrMatch = Array.from(matchIds);
    // console.log(arrMatch);

    let arrMatches = arrayConvert(matchIds);
    console.log(arrMatches);
    let matches = [];

    for (const id of arrMatches) {
        let matchLink = 'https://americas.api.riotgames.com/lol/match/v5/matches/' + id + '?api_key=' + riotKey;
        response = await fetchModule(matchLink);
        let matchData = await response.json();
        matches.push(matchData);
    }

    let matchesJson = JSON.stringify(matches);
    fs.writeFileSync('matches.json', matchesJson);

  return matches;
}

async function fetchSumByName(usr ,ch){  
    
    //request to riots api
    const link = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+usr+'?api_key=' + riotKey;
    const response = await fetchModule(link);
    //turns the return values to json
    let data = await response.json();

    //can add ifelse statements if wanting to find other data but for now just need puuid
    if(ch == 'puuid'){
        return data.puuid;
    }else{
        console.log("ch is not valid");
        return null;
    }

    
}

function parseJSON() {
  fetch('matches.json')
  .then(response => response.json())
  .then(data => {
      // Replace 'your_key' with the actual key in your JSON file
      const value = data.win;

      if (value == "true") {
          console.log('The value is true.');
      } else if (value == "false") {
          console.log('The value is false.');
      } else {
          console.log('The key does not point to a boolean value.');
      }
  })
  .catch(error => {
      console.log('Error:', error);
  });
}

main();
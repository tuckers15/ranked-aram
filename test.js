const riotKey = 'RGAPI-9d17717b-ed98-4949-82d6-6e42d0734ebf';
const sp = '%20'
const fetch = require("node-fetch");

getMatchList(fetchSumByName('puuid'));

async function getMatchList(puuid){
    //link building
    let link = 'https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/'+puuid+'/ids?queue=450start=0&count=20&api_key='
    link += riotKey

    //use link to fetch
    let reposne = await fetch(link);
    response = await response.json()
    console.log(response.matches[0].champion);

}   

async function fetchSumByName(ch){
    
    
    //request to riots api
    const link = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/DeafenedDan?api_key=' + riotKey;
    const response = await fetch(link);
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
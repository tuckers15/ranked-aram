import java.util.Date;
public class Game{

    //declaring variables
    private String champion;
    private int kills;
    private int deaths;
    private int assists;
    private int kda;
    private int lp;
    private boolean win;
    private Date playDate;

    //constructor
    public Game(String champion, int kills, int deaths, int assists, boolean win, Date date){
        this.champion = champion;
        this.kills = kills;
        this.deaths = deaths;
        this.assists = assists;
        kda = (kills+assists)/deaths;
        this.win = win;
        playDate = new Date(date.getTime());
        lp = getLP(win, kills, assists, deaths);

    }

    
    /** 
     * @param win
     * @param kills
     * @param assists
     * @param deaths
     * @return int
     */
    public int getLP(boolean win, int kills, int assists, int deaths){
        int rankedPoints = 0;


        return rankedPoints;
    }

    
    /** 
     * function --> getChampion() 
     * @return String
     */
    public String getChampion(){
        return champion;
    }

    
   /** 
     * function --> getKills() 
     * @return int
    */
    public int getKills(){
        return kills;
    }
     /** 
     * function --> getDeaths() 
     * @return int
     */
    public int getDeaths(){
        return deaths;
    }
     /** 
     * function --> getAssists() 
     * @return int
     */
    public int getAssists(){
        return assists;
    }
     /** 
     * function --> getKDA()
     * @return int
     */
    public int getKda(){
        return kda;
    }
     /** 
     * function --> getPlayDate()
     * @return int
     */
    public Date getPlayDate(){
        return playDate;
    }

    @Override
    public String toString(){
        String s = "";
        s += "Champion:" + champion + "\n";
        s += "Kills:" + kills + "\n";
        s += "Deaths:" + deaths + "\n";
        s += "Assists:" + assists + "\n";
        s += "KDA:" + kda + "\n";
        s += "Win:" + win + "\n";
        s += "Date:" + playDate + "\n";
        s += "LP:" + lp + "\n";
        return s;
    }
}
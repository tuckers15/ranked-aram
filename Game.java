import java.util.Date;
public class Game{

    //declaring variables
    private String champion;
    private int kills;
    private int deaths;
    private int assists;
    private int kda;
    private boolean win;
    private Date playDate;

    //constructor
    public Game(String c, int k, int d, int a, boolean w, Date date){
        champion = c;
        kills = k;
        deaths = d;
        assists = a;
        kda = (k+a)/d;
        win = w;
        playDate = new Date(date.getTime());

    }

    public int getLP(boolean win, int kills, int assists, int deaths){
        int lp = 0;

        return lp;
    }
}
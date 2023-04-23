import java.util.Date;
public class gameDriver {

    public static void main(String [] args)
    {
        Game g1 = new Game("me", 5, 5, 5, false, new Date());

        g1.getChampion();

        System.out.println(g1);
    }
    
}

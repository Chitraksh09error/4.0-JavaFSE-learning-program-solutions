public class Test {
    public static void main(String[] args) {
        
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.logging("User 1 Logging");
        logger2.logging("User 2 Logging");

        if(logger1 == logger2)
        {
            System.out.print("Same Instance : we have successfully implemented Singleton");
        }
        else{
            System.out.print("Different Instance : Singleton Failed");
            
        }
    }
}

public class Test {
    public static void main(String[] args) {
        
        Finance fin = new Finance(10000,0.07,6);

        double value = fin.financeForecast(fin.currentInvestment,fin.growthRate,fin.years);

        System.out.println("value : "+ String.format("%.2f", value));
       
    }
}

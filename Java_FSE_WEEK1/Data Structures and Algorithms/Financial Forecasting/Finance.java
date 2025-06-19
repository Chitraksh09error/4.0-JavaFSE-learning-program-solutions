public class Finance {
    int years;
    double currentInvestment;
    double growthRate;
    
    public Finance(double currentInvestment , double growthRate, int years)
    {
        this.currentInvestment = currentInvestment;
        this.growthRate = growthRate;
        this.years = years;

    }

    public double financeForecast(double current, double growth, int years)
    {
        if(years == 0)
        {
            return current;
        }
        else{
            return financeForecast(current, growth, years-1)*(1+growth);
        }
    }
}

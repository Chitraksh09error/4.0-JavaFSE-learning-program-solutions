import org.junit.Assert;
import org.junit.Test;

public class CalculatorTesting {

    @Test
    public void positiveTestAddition() {
        Calculator calculator = new Calculator();
        Assert.assertEquals("Wrong positive addition", 7, calculator.add(2, 5));
    }

    @Test
    public void negativeTestAddition() {
        Calculator calculator = new Calculator();
        Assert.assertNotEquals("Wrong negative addition", -5, calculator.add(2, -4));
    }
}

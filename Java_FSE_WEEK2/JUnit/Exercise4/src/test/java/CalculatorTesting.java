import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
public class CalculatorTesting {

    private Calculator calculator;

    @Before
    public void setup() {
        calculator = new Calculator();
    }

    @After
    public void teardown() {
        calculator = null;
    }

    @Test
    public void testAddition() {
        int result = calculator.add(5, 3);
        Assert.assertEquals(8, result);
    }

    @Test
    public void testSubtraction() {
        int result = calculator.subtract(10, 4);
        Assert.assertEquals(6, result);
    }

    @Test
    public void testMultiplication() {
        int result = calculator.multiply(6, 4);
        Assert.assertEquals(24, result);
    }

    @Test
    public void testDivision() {
        int result = calculator.divide(20, 5);
        Assert.assertEquals(4, result);
    }

    @Test(expected = ArithmeticException.class)
    public void testDivisionByZero() {
        calculator.divide(10, 0); // This should throw ArithmeticException
    }

    @Test
    public void testMax() {
        int result = calculator.max(7, 12);
        Assert.assertEquals(12, result);
    }

    @Test
    public void testMin() {
        int result = calculator.min(7, 12);
        Assert.assertEquals(7, result);
    }
}

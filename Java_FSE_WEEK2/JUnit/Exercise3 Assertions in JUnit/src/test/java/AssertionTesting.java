import org.junit.Assert;
import org.junit.Test;

public class AssertionTesting {

    @Test
    public void TestAssertions() {

        Assert.assertEquals("6 is not greater than 2 + 3", 5, 2 + 3);

        Assert.assertTrue("5 is not greater than -9", 5 > -9);

        Assert.assertFalse("20 is greater than 99",20 > 99);

        Assert.assertNull("Null check fail", null);

        Assert.assertNotNull("The object is not null", new Object());
    }
}
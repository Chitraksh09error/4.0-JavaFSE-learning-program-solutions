import org.junit.Assert;
import org.junit.Test;
import org.mockito.Mockito;

public class MyServiceTesting {

    @Test
    public void testExternalApi() {

        ExternalApi externalApi = Mockito.mock(ExternalApi.class);

        Mockito.when(externalApi.getData()).thenReturn("Some mock data");

        MyService myService = new MyService(externalApi);

        String result = myService.fetchData();

        Assert.assertEquals("Mock data from externalApi(mock) and fetched data from myService are not equal", "Some mock data", result);
    }
}

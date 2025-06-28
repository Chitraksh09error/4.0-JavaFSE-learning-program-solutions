import org.junit.jupiter.api.Test;  
import static org.mockito.Mockito.*;

public class MyServiceTesting {
    @Test
    public void verifyExternalApi() {
        ExternalApi externalApi = mock(ExternalApi.class);
        MyService myService = new MyService(externalApi);

        myService.fetchData();
        myService.fetchData();

        verify(externalApi, times(2)).getData();  
    }
}

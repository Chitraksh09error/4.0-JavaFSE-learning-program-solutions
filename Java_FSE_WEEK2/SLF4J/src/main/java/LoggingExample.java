import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {

    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {
        logger.info("Application started.");
        logger.warn("This is a warning message.");
        logger.error("This is an error message.");

        try {
            int result = 90/0;
        } catch (ArithmeticException ex) {
            logger.error("An exception occurred: {}", ex.getMessage(), ex);
        }

        logger.info("Application finished.");
    }
}

ALTER TABLE CUSTOMERS ADD isVIP VARCHAR(5);

DECLARE
    CURSOR customer_cursor IS
        SELECT isVIP, balance, CustomerID
        FROM CUSTOMERS;

BEGIN
    FOR customer_record IN customer_cursor LOOP
        if (customer_record.balance > 10000) THEN
            UPDATE CUSTOMERS
            SET isVIP = 'TRUE'
            WHERE CustomerID = customer_record.CustomerID;
        ELSE 
            UPDATE CUSTOMERS
            SET isVIP = 'FALSE'
            WHERE CustomerID = customer_record.CustomerID;
        END IF;
    END LOOP;
END;
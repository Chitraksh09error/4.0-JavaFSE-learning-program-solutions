DECLARE
    CURSOR customer_cursor IS
        SELECT CustomerID, DOB
        FROM customers;
    
    customer_id customers.CustomerID%TYPE;
    customer_dob customers.DOB%TYPE;
    customer_age NUMBER;

BEGIN
    FOR customer_record IN customer_cursor LOOP
        customer_id := customer_record.CustomerID;
        customer_dob := customer_record.DOB;

        customer_age := TRUNC(MONTHS_BETWEEN(SYSDATE, customer_dob) / 12);

        IF (customer_age > 60) THEN
            UPDATE loans
            SET interestrate = interestrate * 1
            WHERE CustomerID = customer_id;
        END IF;
    END LOOP;
    COMMIT;
END;
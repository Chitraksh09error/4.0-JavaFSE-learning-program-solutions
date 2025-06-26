DECLARE
    CURSOR loan_cursor IS
        SELECT L.LOANID, L.CUSTOMERID, L.ENDDATE, C.NAME
        FROM LOANS L
        JOIN CUSTOMERS C
        ON C.CUSTOMERID = L.CUSTOMERID
        WHERE L.ENDDATE BETWEEN SYSDATE AND SYSDATE + 30;

BEGIN
    FOR loan_record in loan_cursor LOOP 
        DBMS_OUTPUT.PUT_LINE('CUSTOMER: ' || loan_record.NAME || 'with CUSTOMER ID: ' || loan_record.CUSTOMERID || ' has a LOAN due on ' || loan_record.LOANID || 'ON ' || loan_record.ENDDATE);
    END LOOP;
END;s
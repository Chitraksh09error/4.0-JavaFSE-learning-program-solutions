CREATE OR REPLACE PROCEDURE TransferFunds (p_source_acc_id IN NUMBER, p_target_acc_id IN NUMBER, p_amount IN NUMBER) IS
    v_source_balance ACCOUNTS.BALANCE%TYPE;
BEGIN
    SELECT BALANCE INTO v_source_balance
    FROM ACCOUNTS
    WHERE ACCOUNTID = p_source_acc_id;

    IF (v_source_balance < p_amount) THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance in source amount.');
    END IF;

    UPDATE ACCOUNTS
    SET BALANCE = BALANCE - p_amount, LASTMODIFIED = SYSDATE
    WHERE ACCOUNTID = p_source_acc_id;

    UPDATE ACCOUNTS
    SET BALANCE = BALANCE + p_amount, LASTMODIFIED = SYSDATE
    WHERE ACCOUNTID = p_target_acc_id;
END;
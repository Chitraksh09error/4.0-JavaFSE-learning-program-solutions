CREATE OR REPLACE PROCEDURE processmonthlyinterest IS

    CURSOR saving_cursor IS
    SELECT
        accountid,
        balance
    FROM
        accounts
    WHERE
        accounttype = 'savings';

    acc_id  accounts.accountid%TYPE;
    balance accounts.balance%TYPE;
BEGIN
    OPEN saving_cursor;
    LOOP
        FETCH saving_cursor INTO
            acc_id,
            balance;
        EXIT WHEN saving_cursor%notfound;
        UPDATE accounts
        SET
            balance = balance + ( balance * 0.1 ),
            lastmodified = sysdate
        WHERE
            accountid = acc_id;

    END LOOP;

    CLOSE saving_cursor;
END;
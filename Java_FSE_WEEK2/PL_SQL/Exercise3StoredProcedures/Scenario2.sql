CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (p_department IN VARCHAR2, p_bonus IN NUMBER) IS 
BEGIN
    UPDATE EMPLOYEES
    SET SALARY = SALARY + (SALARY * p_bonus / 100)
    WHERE DEPARTMENT = p_department;
END;
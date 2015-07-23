

--Code for finding total aadhar generated in each state(UIDAI-ENR-GEOGRAPHY-20150426.csv)
raw = LOAD '/usr/local/pig1/UIDAI-ENR-GEOGRAPHY-20150426.csv' USING PigStorage(',') AS (state:chararray,district:chararray,adhaar_gen:int,adhaar_rej:int) ;
raw1 = group raw by (state); 
describe raw1;
result= foreach raw1 generate group , SUM(raw.adhaar_gen) as total;
dump result; 



--Code for finding gender-wise aadhar generated(UIDAI-ENR-GEN-AGE-20150427.csv)

a= LOAD '/usr/local/pig1/UIDAI-ENR-GEN-AGE-20150427.csv' USING PigStorage(',') AS (gender:chararray,age_band:chararray,adhaar_gen:int,enrolment_rej:int);
b= group a by (gender);
describe b;
result1= foreach b generate group , SUM(a.adhaar_gen) as total1; 
dump result1;   



--Code for finding the registrar wise aadhar generated(UIDAI-ENR-REG-EA-20150427.csv)

c= LOAD '/usr/local/pig1/UIDAI-ENR-REG-EA-20150427.csv' USING PigStorage(',') AS (Registrar:chararray, Enrollment_Agency:chararray,adhaar_gen:int,enrollment_rejected:int);
d= group c by (Registrar);
describe d;
result2= foreach d generate group , SUM(c.adhaar_gen) as total2;
dump result2;


--Code for finding top 5 agencies generating adhaar(UIDAI-ENR-REG-EA-20150427.csv)

e= LOAD '/usr/local/pig1/UIDAI-ENR-REG-EA-20150427.csv' USING PigStorage(',') AS (Registrar:chararray, Enrollment_Agency:chararray,adhaar_gen:int,enrollment_rejected:int);
f= group e by (Enrollment_Agency);   
describe f;    
result3= foreach f generate group, SUM(e.adhaar_gen) as total3;
result4= order result3 by total3 desc;
result5= limit result4 5;
dump result5;


--Code for finding age-wise aadhar generated(UIDAI-ENR-GEN-AGE-20150427.csv)

g= LOAD '/usr/local/pig1/UIDAI-ENR-GEN-AGE-20150427.csv' USING PigStorage(',') AS (gender:chararray,age_band:chararray,adhaar_gen:int,enrolment_rej:int);
h= group g by (age_band);  
describe h;
result6= foreach h generate group , SUM(g.adhaar_gen) as total4;
dump result6;   










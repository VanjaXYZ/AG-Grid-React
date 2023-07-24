# Job Application Task - React Junior 
Name: Vanja Šukurma,
Position: React Junior
## Task Description
Kreirati novi React projekat (koristiti v17). U projekat dodati AG Grid biblioteku (koristiti
Community v27). Sa lokacije https://data.binance.com/api/v3/ticker/24hr skinuti niz json objekata.
Mozete koristiti Axios biblioteku. Kreirati tabelu koristeci AG Grid biblioteku i prema strukturi
podataka preuzetih sa prethodne lokacije napraviti kolone za table. Parsirati podatke i popuniti
tabelu sa podacima.
Napomena:
U slucaju problema usljed velikog payload-a smanjiti broj rezultata u tabeli.
Pozeljno:
- stiliranje tabele po zelji
- dodati mogucnost sortiranja po jednoj od kolona
- na tabelu dodati animaciju dok se podaci ucitavaju a nakon ucitavanja i parsiranja podataka,
sakriti animaciju i prikazati podatke u tabeli
- timestamp podatke prikazati kao validan datum DD/MM/YYYY
- dodati paginaciju na tabelu
## Start application
1.`npm run build`,
2. `npm run preview`
## Approach & Methodology
A lot of task steps could be done by using the AG-Grid documentation alone. Few things i did that weren't in docs are moment.js library for extracting timestamps and formatting it to dd/mmm/yyyy format.

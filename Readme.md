# Job Application Task - React Junior 
- Name: Vanja Šukurma,
- Position: React Junior
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
## Built with
1. React v17 + Vite,
2. AG Grid library,
3. Axios,
4. Moment.js
## Start application
In terminal type:
1. `npm run build`,
2. `npm run preview`
## Approach & Methodology
A lot of task steps could be done by reading the AG Grid documentation alone and watching few videos provided by createors of AG Grid. Few things i did that weren't in docs are moment.js library for extracting timestamps and formatting it to dd/mmm/yyyy format. Also used Axios for fetching data from server.
## Time spent
Approximately 9-10 hours of active work. Bare in mind that I haven't used AG Grid before so it took a lot of time learning, reading and watching videos about it.
## Image of application
### Initial look:
![image](https://github.com/VanjaXYZ/AG-Grid-React/assets/95103431/ca7a5c2b-6377-469a-9e7d-40c5878c1bfd)
### Timestamps:
![image](https://github.com/VanjaXYZ/AG-Grid-React/assets/95103431/df0f4bab-ef18-4e71-ab8b-2e9faadd5a3f)
### Fetching data:
![image](https://github.com/VanjaXYZ/AG-Grid-React/assets/95103431/af5ab141-3e60-4fd9-b55b-13b049fc433e)




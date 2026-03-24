# schemat dla Character:


| Pole              | Typ danych      | Opis                         |
|-------------------|-----------------|------------------------------|
| _id               | ObjectId        | Unikalne ID                  |
| name              | String          | Imie                         |
| description       | String          | Opis                         |
| species           | String          | Gatunek                      |
| isHibernating     | Boolean         | Status hibernacji (tak/nie)  |
| bestFriend        | ObjectId        | Najlepszy przyjaciel postaci |
| ----------------- | --------------- | ---------------------------- |

# schemat dla Artifact:

| Pole              | Typ danych      | Opis                         |
|-------------------|-----------------|------------------------------|
| _id               | ObjectId        | Unikalne ID                  |
| name              | String          | Nazwa                        |
| description       | String          | Opis                         |
| owner             | ObjectId        | Wlasciciel artefaktu         |
| ----------------- | --------------- | ---------------------------- |
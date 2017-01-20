## Backend
```
localhost:5000/api/hotels
```
The API server includes automatic live-reloading, transpilation & bundling thanks to [Backpack](https://github.com/palmerhq/backpack).

### Queries:
```
// Filter by property value
localhost:5000/api/hotels?stars=2

// Filter by lower-than value
localhost:5000/api/hotels?price[$lt]=50000

// Ordering
localhost:5000/api/hotels?$sort[price]=-1

// Pagination
localhost:5000/api/hotels?$skip=50
```
It uses [Feathers.js](https://docs.feathersjs.com) as a framework to create a single micro-service, using an in-memory DB, but it could easily be replaced for one of the following DB solutions with minimal code change:
 - AsyncStorage
 - localStorage
 - Memory
 - MongoDB
 - NeDB
 - RethinkDB 
 - PostgreSQL, MySQL, MariaDB, and SQLite
 - Oracle
 - Microsoft SQL Server
 - Redis
 - Riak
 - Neo4j
 - OrientDB
 - ArangoDB
 - Apache Cassandra
 - GraphQL
 - LevelDB
 - Amazon DynamoDB
 - Windows Azure Table Storage
 - Redis
 - Riak
 - Google Sheets

More info:
 - [Pagination & Sorting](https://docs.feathersjs.com/databases/pagination.html)
 - [Querying](https://docs.feathersjs.com/databases/querying.html)
 - [Databases](https://docs.feathersjs.com/databases/readme.html)

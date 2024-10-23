### step 1.

npm i -D prisma
npm i @prisma/client
npm i zod react-icons bcrypt-ts

npm i next-auth@beta
npm i @auth/prisma-adapter

npx prisma init

### step 2

got to vercel > storage > choose postgres and give a name create > env.local then copy and paste in your project > also go to prisma and copy url and directurl and paste in your project

### step 3

got to authjs installation
in env add AUTH_SECRET=""

create route handler inside /app/api/auth/[...nextauth]/route.ts
in root directory create middleware
then go to connection > adapter > prisma copy prima.ts configuration paste into your project
update AUTH.TS
under prisma copy schema and paste in schema.prisma
### step 4
create schema  then migrate your schema
npx prisma migrate dev --name init
then npx prisma studio

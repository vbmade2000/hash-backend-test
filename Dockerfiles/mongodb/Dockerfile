FROM mongo:4.0.3

# Set admin credentials
ENV MONGO_INITDB_ROOT_USERNAME admin-user
ENV MONGO_INITDB_ROOT_PASSWORD admin-password
ENV MONGO_INITDB_DATABASE admin

# Copy JS file containing initialzation proedure. This file helps in creating things like DB and collections creation, inserting initial records for test etc.
ADD mongo-init.js /docker-entrypoint-initdb.d/

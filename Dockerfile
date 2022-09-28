FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# COPY package*.json ./

# RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source/dest // le 1er correpond au dossier loca et le second au workDIR
COPY . .

EXPOSE 8080
#des que tu as creer tu lance node et l applli APImeal
CMD [ "node", "APImeal.js" ]
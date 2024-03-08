FROM node:16.16.0-alpine3.16
# Create app directory
WORKDIR /usr/src/app
# add `node_modules/.bin` to $PATH
# ENV PATH /usr/src/app/node_modules/.bin:$PATH
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm i -no-progress --omit=optional --loglevel=error && npm i -g @angular/cli --no-progress --loglevel=error
# Bundle app source
# COPY . /usr/src/app
# EXPOSE 4200 49153
CMD [ "npm", "start" ]
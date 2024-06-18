FROM node:18-alphine

WORKDIR /backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","run","server"]

# Build the application
RUN npm run build

FROM nginx:alphine AS runner

# Remove the default Nginx static assets
WORKDIR /usr/share/nginx/html

# Remove the default Nginx static assets
RUN rm -rf ./*

# Copy built artifacts from builder stage
COPY --from=builder /builder/dist /usr/share/nginx/html

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Inform Docker that the container is listening on port 80
EXPOSE 80

# Define the command to run the app
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
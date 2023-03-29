FROM nginx:1.15.8-alpine
RUN rm /etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY proj /usr/share/nginx/html
COPY proj /usr/share/nginx/static
COPY conf /etc/nginx

# VOLUME /usr/share/nginx/html
# VOLUME /etc/nginx







# FROM nginx:1.20.2-alpine
# RUN mkdir /home/html
# RUN rm /etc/nginx/conf.d/default.conf
# RUN rm /etc/nginx/nginx.conf
# COPY default.conf /etc/nginx/conf.d/default.conf
# COPY ./nginx.conf /etc/nginx/nginx.conf
# COPY ./proj /home/html

# RUN chmod 777 -R /home/html
# rajinikanth-devops-kitchen

Install Npm NodJs in Ubuntu 

------------------------------------------

curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -

sudo apt-get install -y nodejs

node -v

npm -v

cd rajinikanth-devops-kitchen

npm install

npm run build


------------------------------------------

#Install Nginx in ubuntu server 

sudo apt-get install nginx

sudo nano /etc/nginx/sites-available/rajinikanth-devops-kitchen

#Or

sudo nano /etc/nginx/sites-available/default


---- once opened file add below -----

server {
    listen 80;
    server_name 13.233.143.137;

    location / {
        root /home/ubuntu/rajinikanth-devops-kitchen/build;
        try_files $uri /index.html;
        add_header   Cache-Control public;
        expires      1d;
    }
}

------------------ close cltr+ X --------------------

sudo ln -s /etc/nginx/sites-available/rajinikanth-devops-kitchen /etc/nginx/sites-enabled/

sudo nginx -t

sudo systemctl restart nginx

sudo ufw allow 'Nginx Full'

http://your_domain_or_IP/


----------------Add ons-----

sudo chmod -R 755 /home/ubuntu/rajinikanth-devops-kitchen/build

#checkerror logs 
sudo tail -f /var/log/nginx/error.log

#Nginx Configuration Conflict:

ls -l /etc/nginx/sites-enabled/    if not   sudo rm /etc/nginx/sites-enabled/default


#File Ownership:

sudo chown -R www-data:www-data /home/ubuntu/rajinikanth-devops-kitchen/build



namei -l /home/ubuntu/rajinikanth-devops-kitchen/build



---------- add permissions -----------


sudo chmod -R 755 /home/ubuntu/rajinikanth-devops-kitchen/build

sudo chown -R www-data:www-data /home/ubuntu/rajinikanth-devops-kitchen/build

namei -l /home/ubuntu/rajinikanth-devops-kitchen/build/index.html

sudo chmod o+rx /home/ubuntu

sudo systemctl restart nginx

namei -l /home/ubuntu/rajinikanth-devops-kitchen/build/index.html

-------------

















